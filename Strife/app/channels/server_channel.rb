class ServerChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    @server_channel = Channel.find_by(id: params[:id])
    stream_for @server_channel
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end

  