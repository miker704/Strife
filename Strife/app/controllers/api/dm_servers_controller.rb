class Api::DmServersController < ApplicationController


    def index
        # the user has to be signed in in order to see their own dm servers as these are unique to them 
        @current_user = current_user
        # return the dm pairs of thje user 'private chats'
        @dm_servers = @current_user.dm_servers.includes(:members)
        render :index
    end
    
    def create 
        @dm_server = DmServer.new()
        @current_user = current_user
        if @dm_server.save
            render :create
        else
            render json: @dm_servers.errors.full_messages, status: 400
        end

    end

    def show
        @dm_server = DmServer.find_by(id: params[:id])
        @current_user = current_user
        render :show
    end
    

    def destroy
        @dm_server = DmServer.find_by(id: params[:id])
        @current_user = current_user
        @dm_server.destroy
    end
    


    private
    def dm_server_params
        return params.require(:dm_server).permit(:owner_id)
    end

end
