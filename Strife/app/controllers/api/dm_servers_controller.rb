class Api::DmServersController < ApplicationController


    def index
        # the user has to be signed in in order to see their own dm servers as these are unique to them 
        @dm_servers = DmServer.all
        puts @dm_servers
        
        @current_user = userId ? current_user : false
        # return the dm pairs of thje user 'private chats'
        @dm_servers = @current_user.dm_servers.includes(:members) if(@current_user)
        puts @dm_servers
        
        render :index
    end
    
    def create 
      

        found_existing_dm_server = current_user.dm_servers.includes(:members).select{|dms| dms.member_ids.sort === dm_server_params[:dm_member_ids].map(&:to_i)}

        if found_existing_dm_server[0]
            @dm_server = found_existing_dm_server[0]
            render :show
            return 
        end


        @dm_server = DmServer.create(
            owner_id: current_user.id,
            dm_server_name: params[:dm_server][:dm_server_name]
        )
        @dm_server.member_ids = dm_server_params[:dm_member_ids]

        if @dm_server.save


            # dm_Members_to_add = dm_server_params[:dm_member_ids]
            # dm_Members_to_add.each do |member_id|
            #     DmMember.create!(dm_server_id: @dm_server.id,dm_member_id: member_id)
            # end



            render :show
        else
                render json: @dm_server.errors.full_messages, status: 400
        end


    end

    def show
        @dm_server = DmServer.find_by(id: params[:id])
        @current_user = current_user

        # @dm_server = @current_user.dm_servers.includes(:members,:dm_messages).find_by(id: params[:id])
        render :show
    end
    
    def update
        @dm_server = DmServer.find(params[:id])
        # dm_Members_to_add = dm_server_params[:dm_member_ids]
        
        # if(dm_Members_to_add.length != @dm_server.members.length){
        #     dm_Members_to_add.each do |member_id|
            
        #         DmMember.create!(dm_server_id: @dm_server.id,dm_member_id: member_id)
        #     end
        # }


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

    def userId
        return params[:user]
    end

end
