class Api::ChannelMembershipsController < ApplicationController
    skip_before_action :verify_authenticity_token


    def create
        @channel_Membership = ChannelMembership.new(channel_membership_params)
        @channel = Channel.find_by(id: @channel_Membership.channel_id)
        if @channel_Membership.save
          render "api/channels/show"
        else
          render json: @channel_Membership.errors.full_messages, status: 400
        end
    end
    
    def destroy
        @channel_Membership = ChannelMembership.find_by(channel_membership_params)
        @channel = Channel.find_by(id: @channel_Membership.channel_id)
        if @channel_Membership.receiver_id == current_user.id
            @channel_Membership.destroy
            render "api/channels/show"
        else
            render json: @channel_Membership.errors.full_messages, status: 401
        end
    end
    


    private
    def channel_membership_params
        return params.require(:channel_membership).permit(:channel_id,:receiver_id)
    end

end
