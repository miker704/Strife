class Api::CallsController < ApplicationController
  skip_before_action :verify_authenticity_token

    def create
      head :no_content
      ActionCable.server.broadcast("call_channel_"+ params[:id], call_params)
    end
  
    private
  
    def call_params
      params.permit(:type, :from, :to, :sdp, :candidate, :id, :call)
    end
  end
  