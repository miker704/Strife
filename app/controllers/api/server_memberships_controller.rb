class Api::ServerMembershipsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @server_Membership = ServerMembership.new(server_membership_params)
        @server = Server.find_by(id: @server_Membership.server_id)
        
        if @server_Membership.save
            all_channels = @server.channels
            all_channels.each do |channel|
           
                ChannelMembership.create!(
                    channel_id: channel.id, 
                    receiver_id: @server_Membership.user_id
                )
                async_welcome_new_member(@server,@server_Membership,channel)
            end
          render "api/servers/show"
        else
          render json: @server_Membership.errors.full_messages, status: 400
        end
    end
    

    def async_welcome_new_member(server, new_server_member, channel)
        @new_Server_Member = User.find_by(id: new_server_member.user_id)
        @response_Message = "Welcome @#{@new_Server_Member.username} to #{server.server_name}!"
        @message=Message.create!(body: @response_Message, author_id: 1, channel_id: channel.id)
        StrifeServer.broadcast_to(channel,head: 100)
    end

    def async_ban_member_from_Server(server, banned_user, banned)
        @response_Message = ''
        if banned == '1'
            @response_Message = "@#{banned_user.username} has been banned from the server"
        elsif banned == '0'
            @response_Message = "@#{banned_user.username} has left the server"
        end
        server.channels.each do |channel|
            @message=Message.create!(body: @response_Message, author_id: 1, channel_id: channel.id)
            # StrifeServer.broadcast_to(channel, message: @message, head: 101, path: '/$TR!F3-INTRUSION-PREVENTION/', banned: banned, bannedUser: banned_user)
            StrifeServer.broadcast_to(channel, head: 101, path: '/$/$TR!F3-INTRUSION-PREVENTION/', banned: banned, bannedUser: banned_user.id)

        end
    end

    def destroy
        @extract_params = params[:server_membership]
        @is_banned = @extract_params[:banned]

        @server_Membership = ServerMembership.find_by(server_membership_params)
        @server = Server.find_by(id: @server_Membership.server_id)
        @user = User.find_by(id: @server_Membership.user_id)
        if @server_Membership

            async_ban_member_from_Server(@server, @user, @is_banned)
            @server_Membership.destroy
            render 'api/servers/show'
        else
            render json:  @server_Membership.errors.full_messages, status: 401
        end
    end
    


    private
    def server_membership_params
        return params.require(:server_membership).permit(:user_id,:server_id)
    end

end
