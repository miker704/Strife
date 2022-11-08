class VideoCallsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "video_call_channel_" + params[:id]
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
