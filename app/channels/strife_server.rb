class StrifeServer < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    @strife_Server_Channel = Channel.find_by(id: params[:id])
    strifeServerChannelsStreaming << @strife_Server_Channel
    stream_for @strife_Server_Channel
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    strifeServerChannelsStreaming.delete(@strife_Server_Channel)

  end

  def find
    return strifeServerChannelsStreaming[0]
  end

 
end

  