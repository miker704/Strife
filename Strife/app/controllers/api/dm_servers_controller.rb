class Api::DmServersController < ApplicationController


    def index
        # the user has to be signed in in order to see their own dm servers as these are unique to them 
        @current_user = current_user
        # return the dm pairs of thje user 'private chats'
        @dm_servers = @current_user.dm_servers.includes(:members)
        render :index
    end
    
    def create 
        # @dm_server = DmServer.new()
        # @current_user = current_user
        # if @dm_server.save
        #     render :create
        # else
        #     render json: @dm_servers.errors.full_messages, status: 400
        # end
        @dm_server = DmServer.create(
            owner_id: current_user.id,
            dm_server_name: params[:dm_server][:dm_server_name]
        )
        if @dm_server.save

            dm_members = params[:dm_server][:dm_member_ids]
            dm_members.each do |dm_member|
                DmMember.create!(dm_server_id: @dm_server.id, dm_member_id: dm_member)
            end

            puts 'dm_server members'
            puts @dm_server.members
            puts 'dm_server_dm_members'
            # puts @dm_server.dm_members

            render :show
        else
                render json: @dm_server.errors.full_messages, status: 400
        end



    end

    def show
        @dm_server = DmServer.find_by(id: params[:id])
        @current_user = current_user
        render :show
    end
    
    def update
        @dm_server = DmServer.find(params[:id])
       
        if @dm_server && @dm_server.update(dm_server_params)
            puts 'updated name'
            render :show
        else
            render json: @dm_server.errors.full_messages, status: 422
        end

    end

    def destroy
        @dm_server = DmServer.find_by(id: params[:id])
        @current_user = current_user
        @dm_server.destroy
    end
    


    private
    def dm_server_params
        return params.require(:dm_server).permit(:owner_id,:dm_server_name, dm_member_ids:[])
    end

end
