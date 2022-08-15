class Api::UsersController < ApplicationController


    
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
           
            # render json: @user.errors.full_messages, status: 401
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
            render json: @user.errors.full_messages, status: 401
        end
        
    end

    #addPFP
    def add_PFP
    
    end

    def change_Password
        @user = User.find(params[:id])
        #check if password is correct 

        if @user &&  @user.is_password?(params[:user][:password])
            old_password = params[:user][:password]
            new_password = params[:user][:newPassword]
            confirm_new_password = params[:user][:confirmNewPassword]
            #now check to see if new password matches old password if so wave error
            if new_password == old_password
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
        userName = params[:username]
        @user = User.where('username ~ ? and id != ?', userName, current_user.id)
        render :searchResult
    end


    # allow user to delete their strife account 
    def destroy
        # @user = User.find(params[:id])
        @user = User.find_by(id: params[:id])
       
        if !@user.is_password?(user_params[:password])
            render json: ['Wrong Password!'], status: 401
        elsif @user.id == current_user.id
            @user.destroy
            render :show
        
        else
            render json: ['This is not your account'], status: 401
        end
        
        
    end

    private
    def user_params
        return params.require(:user).permit(:email,:username,:birthday,:password,:online,:phone_number)
    end

    
end
