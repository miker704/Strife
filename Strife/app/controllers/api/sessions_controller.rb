class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
        login!(@user)
        # render :create
        render 'api/users/show'
        else
          render json: ["Invalid login credentials"], status: 401
        end
    end

    def destroy
        @user = current_user

        if @user 
           logout!
           render json: ["Sign out successful"], status: 200
        else
            render json: ["Login Required Redirecting "], status: 404
        end
    end

end
