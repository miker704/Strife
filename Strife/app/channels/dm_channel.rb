class DmChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    dm_server = DmServer.find_by(id: params[:id])
    stream_for dm_server
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
