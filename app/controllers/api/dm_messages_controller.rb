class Api::DmMessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @dm_message = DmMessage.new(dm_message_params)
    @dm_server = DmServer.find_by(id: @dm_message[:dm_server_id])
    if @dm_message.save

      DmChannel.broadcast_to @dm_server, type: 'RECEIVE_DM_MESSAGE',
                             **from_template('api/dm_messages/show', dm_message: @dm_message)                       
      # render json: nil, status: :ok
      render :showVc
    else
      render json: @dm_message.errors.full_messages, status: 400
    end
  end

  def update
    @dm_message = DmMessage.find_by(id: params[:id])
    @dm_server = DmServer.find_by(id: @dm_message[:dm_server_id])

    if @dm_message.sender_id == current_user.id && @dm_message.update(dm_message_params)
      DmChannel.broadcast_to @dm_server, type: 'UPDATE_DM_MESSAGE',
      **from_template('api/dm_messages/show', dm_message: @dm_message)                    
      # render json: nil, status: :ok
      render :showVc
    else
      render json: @dm_message.errors.full_messages, status: 400
    end
  end

  def destroy
    @dm_message = DmMessage.find_by(id: params[:id])
    @dm_server = DmServer.find_by(id: @dm_message[:dm_server_id])
    if @dm_message.sender_id == current_user.id && @dm_message.destroy
      DmChannel.broadcast_to @dm_server, type: "REMOVE_DM_MESSAGE",
      **from_template('api/dm_messages/show', dm_message: @dm_message)
      # render json: nil, status: :ok
      render json: @dm_message.id
    else
      render json: @dm_message.errors.full_messages, status: 400
    end
  end

  private

  def dm_message_params
    params.require(:dm_message).permit(:dm_server_id, :sender_id, :body)
  end
end
