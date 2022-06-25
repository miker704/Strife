class Api::ServersController < ApplicationController

    def index
        @servers = Server.all
        render :index
    end

    def show
        @server = Server.find(params[:id])
        render :show
    end
    
    def create
        @server = Server.new(server_params)
        if @server.save
            render :show
        else
          render json: @server.errors.full_messages, status: 422
        end
    end

    def edit
        @server = Server.find(params[:id])
        render :edit
    end
    

    def update
        @server = Server.find(params[:id])
        if @server && @server.update(server_params)
          render :show
        else
    
          render json: @server.errors.full_messages, status: 400
        end
    end
    
    
    def destroy
        @server = Server.find(params[:id])
        @current_user=current_user
        if @current_user.id == @server_owner_id
         @server.destroy
         render :show
        else
            render json: ['You cannot destroy a server that is not yours !'], status: 401
        end
    end
    
    private
        def server_params
            return params.require(:server).permit(:server_name,:server_owner_id,:public)
        end

end
