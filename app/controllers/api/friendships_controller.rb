class Api::FriendshipsController < ApplicationController
    skip_before_action :verify_authenticity_token

     def index
        # @current_user = current_user
        # @friendships =  @current_user.friendships.all
        @user = current_user
        @friendships =  @user.friendships.all
        render :index
    end


    def show
        # @friendship =  Friendship.find_by(user_id: friendship_params[:user_id], friend_id: friendship_params[:friend_id]);
        @friendship =  Friendship.find(params[:id])
        if @friendship 
            render :show
        else
            render json: @friendship.errors.full_messages, status: 404
        end
    end
    
    def fetchOnlineFriends
        @user = current_user
        @friendships =  @user.friendships.all
        render :onlinefriends
    end
    def fetchOfflineFriends
        @user = current_user
        @friendships =  @user.friendships.all
        render :offlinefriends
    end
    def fetchAllFriends
        @user = current_user
        @friendships =  @user.friendships.all
        render :allfriends
    end
    def fetchAllFriendsSorted
        @user = current_user
        @friendships =  @user.friendships.all
        render :allfriendssorted
    end
    def fetchOutgoingFriendRequests
        @user = current_user
        @friendships =  @user.friendships.all
        render :outgoingfriendrequests
    end
    def fetchIncomingFriendRequests
        @user = current_user
        @friendships =  @user.friendships.all
        render :incomingfriendrequests
    end
    

    def create
        #create a friend request 
       
        
        @friendship = Friendship.create(
            user_id: current_user.id,
            friend_id: params[:friendship][:friend_id], 
            friend_request_status: 1
        )

        #this request on the friend to be added the roles are reveres when a user confirms/denies friendship
        @friend_request_reply = Friendship.create(
            user_id: params[:friendship][:friend_id], 
            friend_id: current_user.id,
            friend_request_status: 2
        )
        
        if @friendship.save && @friend_request_reply.save

            render :show
        else
          
            render json: ['Friend has already been taken.'], status: 422
        end

    end

    def block_User


        #first search if there is any relationship between users specifcally if either of the two users blocked each other
        # u1 -> -1 u2 -> -2  u2 tries to block u1 check the relationship 


        @check_if_blocked = Friendship.find_by(user_id: friendship_params[:user_id], friend_id: friendship_params[:friend_id])
        @check_blocked_user = Friendship.find_by(user_id: friendship_params[:friend_id], friend_id: friendship_params[:user_id])
        if @check_if_blocked && @check_blocked_user
           
            if @check_if_blocked.friend_request_status == -2
                if @check_if_blocked.update(friend_request_status:-1)
                    @blocked_User = @check_if_blocked
                    render :blocked
                end
            end

        #check status of friendship on the other users end
        else

            @blocked_User = Friendship.new( 
                user_id: friendship_params[:user_id], 
                friend_id: params[:friendship][:friend_id],
                friend_request_status: -1
            )
 
        # prevents the person who is blocked from removing the block or
        # sending them a request until the person that blocked them removes the block
            @blocked_by = Friendship.new(
                user_id: params[:friendship][:friend_id], 
                friend_id: friendship_params[:user_id],
                friend_request_status: -2
            )
            if @blocked_User.save && @blocked_by.save
                render :blocked
            else
                render json: @blocked_User.errors.full_messages, status: 422
            end

        end

    end

   
    def unblock_User
        
        #check if blocked 
        @friendship = Friendship.find_by(user_id: friendship_params[:user_id], friend_id: friendship_params[:friend_id])
        #check the other user 
        @friend = Friendship.find_by(user_id: friendship_params[:friend_id], friend_id: friendship_params[:user_id])


        if @friendship && @friend
            if @friend.friend_request_status == -1
                @blocked_User = @friendship
                if @blocked_User.update(friend_request_status: -2)
                    render :blocked
                else
                    render json: @blocked_User.errors.full_messages, status: 422
                end
            elsif @friend.friend_request_status == -2
                if @friendship.destroy && @friend.destroy
                    render :show
                else 
                    render json: @friendship.errors.full_messages, status: 422
                end
            end
        
        else
            render json: @friendship.errors.full_messages, status: 422
        end

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
        
        # if user is block destroy the blocked user from there blocked list if both users block each other
        # each user must unblock the other themselves
        if @friendship.friend_request_status == -1
            @friendship.destroy
            render :show
            return
            #return out of this function to avoid continuing and receiveinng errors
        end

        #if user friendship status !== -1 they are unfriends render the friends relationship to user
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

    def userId
        return params[:user]
    end

end
