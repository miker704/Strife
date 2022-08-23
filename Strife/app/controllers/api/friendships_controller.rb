class Api::FriendshipsController < ApplicationController
    
    def index
        @current_user = current_user
        @friendships =  @current_user.friendships.all
        render :index
    end
    
    def create
        #create a friend request 
        
        @friend_request = Friendship.new(
            user_id: current_user.id,
            friend_id: params[:friendship][:friend_id], 
            friend_request_status: 1
        )

        #this request on the friend to be added the roles are reveres when a user confirms/denies friendship
        @friend_request_reply = Friendship.new(
            user_id: params[:friendship][:friend_id], 
            friend_id: current_user.id,
            friend_request_status: 2
        )
        render :show

    end

    def update
        @friendship = Friendship.find_by(user_id: friendship_params[:user_id], friend_id: friendship_params[:friend_id])
        #check status of friendship on the other users end
        friend = Friendship.find_by(user_id: friendship_params[:friend_id], friend_id: current_user.id)

        if @friendship.update(friend_request_status:3) && friend.update(friend_request_status:3)
         render :show
        else
      
          render json: @friendship.errors.full_messages, status: 422
        end
    end
    
    def destroy
      
        @friendship = Friendship.find_by(user_id: friendship_params[:user_id], friend_id: friendship_params[:friend_id])
     
        friend = Friendship.find_by(user_id: friendship_params[:friend_id], friend_id: current_user.id)
        if @friendship.destroy && friend.destroy
           render :show
        else
          render json: @friendship.errors.full_messages, status: 422
           
        end
    end
    


    def friendship_params
        return params.require(:friendship).permit(:user_id,:friend_id)
    end

end
