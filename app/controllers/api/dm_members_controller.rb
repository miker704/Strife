class Api::DmMembersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @dm_membership = DmMember.new(dm_member_params)
        @dm_server = DmServer.find_by(id: @dm_membership.dm_server_id)
        
        if @dm_membership.save
            if @dm_server.members.length >= 2
                async_welcome_new_member(@dm_server,@dm_membership)
            end
            
          render 'api/dm_servers/show'
        else
          render json: @dm_membership.errors.full_messages, status: 400
        end
    end
    
    def show
        @dm_membership = DmMember.find_by(dm_member_params)
        @dm_server = DmServer.find_by(id: @dm_membership.dm_server_id)
        if @dm_membership
            render :show
        else
            render json: ['No DM Server Membership Detected!'], status: 404
        end
    end


    def is_dm_member 
        @dm_membership = DmMember.find_by(dm_member_params)
        if @dm_membership
            render json: true
        else
            render json: false
        end
    end

    def async_welcome_new_member(dmServer, new_dm_member)
        @new_Dm_Member = User.find_by(id: new_dm_member.dm_member_id)
        @response_Message = "Welcome @#{@new_Dm_Member.username} to the chat!"
        @dm_message_via_bot = DmMessage.create!(body: @response_Message, sender_id: 1, dm_server_id: @dm_server.id)
        DmChannel.broadcast_to dmServer, head:101,
        type: 'NEW_DMS_MEMBER',**from_template('api/dm_messages/show', dm_message: @dm_message_via_bot)
    end

    def async_redirect_Kick_User(dmServer,dmMember_kicked)
        @user_kicked = User.find_by(id: dmMember_kicked.dm_member_id)
        @dms_owner = User.find_by(id: dmServer.owner_id)
        @response_Message = "@#{@dms_owner.username} has kicked @#{@user_kicked.username}"
        @dm_message_via_bot = DmMessage.create!(body: @response_Message, sender_id: 1, dm_server_id: @dm_server.id)
        DmChannel.broadcast_to dmServer, head:401, path: '/$/$TR!F3-INTRUSION-PREVENTION/', type: 'REMOVE_DMS_MEMBER',
            **from_template('api/dm_messages/show', dm_message: @dm_message_via_bot)
    end

    def destroy
        @dm_membership = DmMember.find_by(dm_member_params)
        @dm_server = DmServer.find_by(id: @dm_membership.dm_server_id)
        if @dm_membership

            async_redirect_Kick_User(@dm_server,@dm_membership)

            #before destroy membership invoke redirect to home
            @dm_membership.destroy
            render 'api/dm_servers/show'
            # render json: {dm_server_id: @dm_membership.dm_server_id,  user_id: @dm_membership.dm_member_id}
        else
            render json:  @dm_membership.errors.full_messages, status: 401
        end
    end
    


    private
    def dm_member_params
        return params.require(:dm_member).permit(:dm_server_id,:dm_member_id)
    end

end
