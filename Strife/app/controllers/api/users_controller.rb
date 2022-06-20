class Api::UsersController < ApplicationController


    def index 

    end


    def show

    end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render  "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update

    end





    private
    def user_params
        return params.require(:user).permit(:email,:username,:password)
    end

    
end
