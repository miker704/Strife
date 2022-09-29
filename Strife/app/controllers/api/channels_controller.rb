class Api::ChannelsController < ApplicationController

    def show
        @channel = Channel.find_by(id: params[:id])
        render :show
    end

    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            @server = Server.find_by(id: @channel.server_id)
            @server.channels.each do |channel|
                ServerChannel.broadcast_to(channel, head: 201, type: 'NewChannel')
            end
          render :show
        else
            render json: @channel.errors.full_messages, status: 400
        end
    end
    
    def update
        @channel = Channel.find_by(id: params[:id])
        if @channel.update(channel_params)
          @default_channel_message = @channel.messages.first
          @default_channel_message.update(body: "Welcome to ##{@channel.channel_name} channel !")
          @server = Server.find_by(id: @channel.server_id)
            @server.channels.each do |channel|
                ServerChannel.broadcast_to(channel, head: 202, type: 'UpdateChannel')
            end
          render :show
        else
            render json: @channel.errors.full_messages, status: 400
        end
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        @server = Server.find_by(id: @channel.server_id)
        if @channel
            @server.channels.each do |channel|
                ServerChannel.broadcast_to(channel, head: 302, type: 'DeleteChannel',  channel: @channel)
            end
        #   sleep(2)
          @channel.destroy
          render :delete
        else
            render json: @channel.errors.full_messages, status: 400
        end
    end
    
    


    private

    def channel_params
        return params.require(:channel).permit(:channel_name,:server_id,:channel_type)
    end



end
