class Api::MessagesController < ApplicationController
    def create
        @message = Message.new(message_params)
        @channel = Channel.find_by(id: @message[:channel_id])
        if @message.save
            ServerChannel.brodcast_to(@channel,@message)
            render :show
        else
      
          render json: @message.errors.full_messages , status: 400
        end
    end
    

    def update
        @message = Message.find_by(id: params[:id])
        @channel = Channel.find_by(id: @message[:channel_id])

        if @message.update(message_params)
            ServerChannel.brodcast_to(@channel,@message)
          render :show
        else
            render json: @message.errors.full_messages , status: 400
        end
    end
    


    def destroy
        @message = Message.find_by(id: params[:id])
        @channel = Channel.find_by(id: @message[:channel_id])

        if @message.destroy
             ServerChannel.brodcast_to(@channel,@message)
          render :show
        else
            render json: @message.errors.full_messages , status: 400
        end
    end
    

    private
    def message_params
        return params.require(:message).permit(:channel_id,:author_id,:body)
    end


end
