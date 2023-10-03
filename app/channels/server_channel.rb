class ServerChannel < ApplicationCable::Channel
    def subscribed
      # stream_from "some_channel"
      @server_channel = Channel.find_by(id: params[:id])
      serverChannelsStreaming << @server_channel
      stream_for @server_channel
    end
  
    def unsubscribed
      # Any cleanup needed when channel is unsubscribed
      serverChannelsStreaming.delete(@server_channel)
    end
  
    def find
      serverChannelsStreaming[0]
    end
    
  end
  