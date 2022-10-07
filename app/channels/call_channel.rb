class CallChannel < ApplicationCable::Channel
    def subscribed
      # stream_from "some_channel"
      # channel doesnot exist make a fake one
      stream_from "call_channel_" + params[:id]
    end
  
    def unsubscribed
      # Any cleanup needed when channel is unsubscribed
    end
  end
  