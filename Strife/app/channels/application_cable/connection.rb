module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user
    def current_user
      @current_user ||= User.find_by(session_token: request.session[:session_token])
    end
  end
end
