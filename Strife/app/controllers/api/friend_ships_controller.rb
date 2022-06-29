class Api::FriendShipsController < ApplicationController

    def index
        @current_user = current_user
        @friendships =  @current_user.friendships.all
        render :index
    end
    
    def create
        @friend_request = Friendship.new()

    end

    


    def friendship_params
        return params.require(:friendship).permit(:user_id,:friend_id,:friend_request_status)
    end


end
