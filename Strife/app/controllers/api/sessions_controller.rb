class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
        login!(@user)
        render :create
        else
          render json: ["Invalid login credentials"], status: 401
        end
    end

    def destroy
        @user = current_user

        if @user 
           logout!
           render json:
        else
             json: ["Login Required Redirecting "], status: 404
        end
    end

end
