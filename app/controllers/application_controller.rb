class ApplicationController < ActionController::Base
    # protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token

    helper_method :current_user, :logged_in?

    def current_user
      @current_user ||= User.find_by(session_token: session[:session_token])
    end
  
    def require_user
      redirect_to new_session_url unless logged_in?
    end
    
    def logged_in?
      !!current_user
    end
  
    def login!(user)
      @current_user = user
      @current_user.online=true
      session[:session_token] = user.reset_session_token!
    end
  
    def logout!
      @current_user.online = false
      @current_user.reset_session_token!
      session[:session_token] = nil
    end

    def from_template(template, locals = {})
      JSON.parse(self.class.render(:json, template: template, locals: locals))
    end

    


end
