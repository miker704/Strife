class Api::VideoCallsController < ApplicationController
skip_before_action :verify_authenticity_token
def create
    head :no_content
    ActionCable.server.broadcast("video_call_channel_" + params[:id], video_call_params)
  end

  private

  def video_call_params
    params.permit(:type, :from, :to, :sdp, :candidate, :id, :call, :currentUser)
  end
end
