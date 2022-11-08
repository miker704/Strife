class VoiceCallsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "voice_call_channel_" + params[:id]
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
