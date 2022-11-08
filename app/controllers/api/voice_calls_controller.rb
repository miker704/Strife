class Api::VoiceCallsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    head :no_content
    ActionCable.server.broadcast("voice_call_channel_" + params[:id], voice_call_params)
  end

  private

  def voice_call_params
    params.permit(:type, :from, :to, :sdp, :candidate, :id, :call, :currentUser)
  end
end
