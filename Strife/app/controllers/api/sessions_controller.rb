class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
        login!(@user)
        # @user.online=true;
        # render :create
        render 'api/users/show'
        else
          render json: ["Invalid Login Credentials"], status: 401
        end
    end

    def destroy
        @user = current_user

        if @user 
        #   @user.online=false
           logout!
        #    render json: ["Sign out successful"], status: 200
             render 'api/users/show'
        else
            render json: ["Sign into Your Account to Continue!"], status: 404
        end
    end

end
