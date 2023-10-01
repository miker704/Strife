class Api::MessagesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @message = Message.new(message_params)
        @channel = Channel.find_by(id: @message[:channel_id])
        if @message.save
            StrifeServer.broadcast_to @channel, type: 'RECEIVE_CHANNEL_MESSAGE', **from_template('api/messages/show', message: @message)
            render json: nil, status: :ok
            # render :show
        else
          render json: @message.errors.full_messages , status: 400
        end
    end
    

    def update
        @message = Message.find_by(id: params[:id])
        @channel = Channel.find_by(id: @message[:channel_id])

        if @message.author_id == current_user.id &&  @message.update(message_params)
            StrifeServer.broadcast_to @channel, type: 'UPDATE_CHANNEL_MESSAGE', **from_template('api/messages/show', message: @message)
            render json: nil, status: :ok
        else
            render json: @message.errors.full_messages , status: 400
        end
    end
    


    def destroy
        @message = Message.find_by(id: params[:id])
        @channel = Channel.find_by(id: @message[:channel_id])
        if @message.author_id == current_user.id && @message.destroy
            StrifeServer.broadcast_to @channel, type: 'REMOVE_CHANNEL_MESSAGE', **from_template('api/messages/show', message: @message)
            render json: nil, status: :ok
        else
            render json: @message.errors.full_messages , status: 400
        end
    end
    

    private
    def message_params
        return params.require(:message).permit(:channel_id,:author_id,:body)
    end


end
