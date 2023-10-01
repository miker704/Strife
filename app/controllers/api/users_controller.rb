require 'open-uri'

class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def index
        @users = User.all
        render :index
    end
    
    
    def show
        @user = User.find(params[:id])
        if @user
            render :show
        else
            render json: ["User cannot be found!"], status: 404
        end
    end
    
    def create
        @user = User.new(user_params)
        if @user.save
          login!(@user)
        #   render "/api/users/_current_user", current_user: @user
           render "/api/users/show", current_user: @user

        else
          render json: @user.errors.full_messages, status: 422
        # render json: @user.errors.full_messages, status: 401

        end
      end
    
    def update
        @user = User.find(params[:id])
       
        if @user && @user.is_password?(params[:user][:password]) && @user.update(user_params)
            render :show
        else
            invalid_password_error = @user.errors.full_messages.length > 0 ? @user.errors.full_messages : ['Error Incorrect Password !']
            render json: invalid_password_error, status: 401
           
        end
    end
    
    #delele phone number
    def delete_PhoneNumber 

        @user = User.find(params[:id])
        
        if @user && @user.is_password?(params[:user][:password])
            @user.phone_number=nil
            @user.save!
            render :show
        else
            invalid_password_error = @user.errors.full_messages.length > 0 ? @user.errors.full_messages : ['Error Incorrect Password !']
            render json: invalid_password_error, status: 401
        end
        
    end

    #addPFP
    def change_User_PFP
        @user = User.find_by(id: params[:id])

            if @user
                if user_params[:remove_PFP]
                    @user.photo.purge
                    @user.save!
                    render :show
                elsif @user.update(user_params)
                     @user.save!    
                    render :show
                else
                    process_File_Error = @user.errors.full_messages.length > 0 ? @user.errors.full_messages : ['cannot process file']
                    render json: process_File_Error, status: 400
                end
            else

                process_File_Error = @user.errors.full_messages.length > 0 ? @user.errors.full_messages : ['cannot process file']
                render json: process_File_Error, status: 400
            end
    end


    def change_User_Banner
        # debugger
        @user = User.find_by(id: params[:id])
       
        if @user
            if user_params[:remove_UB]
                @user.user_Banner.purge
                @user.save!
                render :show
            elsif @user.update(user_params)
                 @user.save!    
                render :show
            else
                process_File_Error = @user.errors.full_messages.length > 0 ? @user.errors.full_messages : ['cannot process file']
                render json: process_File_Error, status: 400
            end
        else
            process_File_Error = @user.errors.full_messages.length > 0 ? @user.errors.full_messages : ['cannot process file']
            render json: process_File_Error, status: 400
        end
    end


    def change_Password
        @user = User.find(params[:id])
        #check if password is correct 

        if @user &&  @user.is_password?(params[:user][:password])
            old_password = params[:user][:password]
            new_password = params[:user][:newPassword]
            confirm_new_password = params[:user][:confirmNewPassword]
            #now check to see if new password matches old password if so wave error

            if new_password.length == 0
                @user.errors.add(:error,'new password cannot be blank')
                render json: @user.errors.full_messages, status: 401

            elsif new_password.length < 8 || new_password.length > 72
                @user.errors.add(:error,'new password must be 8 to 72 in length')
                render json: @user.errors.full_messages, status: 401

            elsif new_password == old_password
                @user.errors.add(:error,'new password cannot match your previous password !')
            render json: @user.errors.full_messages, status: 401

            elsif new_password != confirm_new_password
                @user.errors.add(:error,'new password does not match confirm password !')
            render json: @user.errors.full_messages, status: 401

            else new_password == confirm_new_password
                @user.password=(new_password)
                @user.save!
                render :show
            end
                
            #now check is new password matches confirm
        else
            invalid_password_error = @user.errors.full_messages.length > 0 ? @user.errors.full_messages : ['Error Incorrect Password !']
            render json: invalid_password_error, status: 401
        end

    end
    


    #search up other users
    def search 
        username = params[:username]
        # @users = User.where('username ~ ? and id != ?', username, current_user.id) <--not case sensitive
        @users = User.where('lower(username) ~ ? and id != ?', username.downcase, current_user.id)

        render :searchResult
    end

    # grab full log of users data
    def user_data_extraction
        @user = User.find(params[:id])
        if @user
            render :userExtraction
        else
            render json: ["User cannot be found!"], status: 404
        end
    end



    def mutual_friends
        @user = User.find(params[:id])
        @otherUser = User.find(params[:other_user_id])
        if @user && @otherUser
            other_users_friends = @otherUser.friends.map{|friend| friend.id}
            @users = @user.friends.select{|friend| other_users_friends.include?(friend.id)}
            render :index
        else
            render json: ["User cannot be found!"], status: 404
        end

    end

    def mutual_servers
        @user = User.find(params[:id])
        @otherUser = User.find(params[:other_user_id])
        if @user && @otherUser
            other_users_servers = @otherUser.servers_joined.map{|server| server.id}
            @servers = @user.servers_joined.select{|server| other_users_servers.include?(server.id)}
            render 'api/servers/compressIndex'
        else
            render json: ["User cannot be found!"], status: 404
        end
    end


    def fetch_via_strife_id
        if(params[:user_strife_id_tag] == '-000')
            render json: ['Please enter proper format username + # + STRIFE ID Tag.'], status: 404
            return
        end

        @user = User.find_by(strife_id_tag: params[:user_strife_id_tag].to_i)

        if @user
            render :show
        else
            render json: ["User Does not exists with that STRIFE ID Tag !"], status: 404
        end


    end



    def fetch_user_by_strife_id_or_username
        @user=nil
        # puts 'params'
        # puts params
        # puts params[:user][:username]

        # check if user name is blank if so result to search by tag
        if(params[:user][:username] == '' && params[:user][:strife_id_tag] == '-000')
            # puts 'ERROR both blank !'
            render json: ['Please enter proper format username + # + STRIFE ID Tag.'], status: 404
            return
        elsif (params[:user][:username].length != 0 && params[:user][:strife_id_tag] != '-000')
            # puts 'neither both blank !'

            @user = User.find_by(username: params[:user][:username].to_s, strife_id_tag: params[:user][:strife_id_tag].to_i)

        elsif(params[:user][:username].length != 0 && params[:user][:strife_id_tag] == '-000')
            # puts 'tag is blank  search by username !'

            @user = User.find_by(username: params[:user][:username])
            # puts 'user'
            # puts @user

        elsif(params[:user][:username].length == 0 && params[:user][:strife_id_tag] != '-000')
            # puts 'name blank search by tag!'
            @user = User.find_by(strife_id_tag: params[:user][:strife_id_tag].to_i)
        end

        # puts 'user'
        # puts @user

        if @user
            render :show
        else
            render json: ["User Does not exists with that STRIFE ID Tag !"], status: 404
        end


    end
    

    def disable_Account
        @user = User.find_by(id: params[:id])
        if !@user.is_password?(params[:user][:password])
            invalid_password_error = @user.errors.full_messages.length > 0 ? @user.errors.full_messages : ['Error Incorrect Password !']
            render json: invalid_password_error, status: 401

        elsif  @user.is_password?(params[:user][:password])
                render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end


    # allow user to delete their strife account 
    def destroy
     
        @user = User.find_by(id: params[:id])
        @user.destroy
        # render :show
        
    end

    private
    def user_params
        return params.require(:user).permit(:email,:username,:birthday,:password,:online,:phone_number,:photo,:remove_PFP,:user_Banner,:remove_UB, :other_user_id)
    end

    
end
