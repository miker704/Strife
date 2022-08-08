class Api::ChannelsController < ApplicationController




    def show
        @channel = Channel.find_by(id: params[:id])
        render :show
    end
  


    def create
        @channel = Channel.new(channel_params)
        if @channel.save
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
          render :show
        else
            render json: @channel.errors.full_messages, status: 400
        end
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        if @channel.destroy
          render :delete
        else
            render json: @channel.errors.full_messages, status: 400
        end
    end
    
    


    private

    def channel_params
        return params.require(:channel).permit(:channel_name,:server_id)
    end



end
