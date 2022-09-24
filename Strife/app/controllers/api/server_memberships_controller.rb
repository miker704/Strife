class Api::ServerMembershipsController < ApplicationController

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
            end
          render "api/servers/show"
        else
          render json: @server_Membership.errors.full_messages, status: 400
        end
    end
    
    def destroy
        @server_Membership = ServerMembership.find_by(server_membership_params)
        @server = Server.find_by(id: @server_Membership.server_id)
        @user = User.find_by(id: @server_Membership.user_id)
        if @server_Membership
            @server_Membership.destroy
            render 'api/servers/show'
            # render 'api/users/show'
        else
            render json:  @server_Membership.errors.full_messages, status: 401
        end
    end
    


    private
    def server_membership_params
        return params.require(:server_membership).permit(:user_id,:server_id)
    end

end
