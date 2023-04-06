class Api::DmServersController < ApplicationController
    skip_before_action :verify_authenticity_token


    def index
        # the user has to be signed in in order to see their own dm servers as these are unique to them 
        @dm_servers = DmServer.all
        
        @current_user = userId ? current_user : false
        # return the dm pairs of thje user 'private chats'
        @dm_servers = @current_user.dm_servers.includes(:members) if(@current_user)
        
        render :index
    end
    
    def create 
      
        direct_message = 'This is the beginning of your direct message history with'
        group_message = 'Welcome to the beginning of your Group Chat'

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
            if @dm_server.member_ids.length == 2
                DmMessage.create!(body: direct_message, sender_id: 1, dm_server_id: @dm_server.id)
            else
                DmMessage.create!(body: group_message, sender_id: 1, dm_server_id: @dm_server.id)
            end

            render :show
        else
                render json: @dm_server.errors.full_messages, status: 400
        end


    end

    def show
        @dm_server = DmServer.find_by(id: params[:id])
        @current_user = current_user
        # @active_users = DmChannel.active_users(@dm_server) << @current_user
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
            render :show
        else
            render json: @dm_server.errors.full_messages, status: 422
        end

    end

    def async_redirect(dmServer,path)
        DmChannel.broadcast_to(dmServer, head:302, path: path )
    end
    

    def destroy
        @dm_server = DmServer.find_by(id: params[:id])
        @current_user = current_user
        if @dm_server
            ## initiate redirects to loading container to resync state boots anyone remaining in chat
            ## also ensures that everyone is removed LIVE via action cable
            async_redirect(@dm_server, '/$/telefrag/')
            ## destroy the dmServer render nothing 
            @dm_server.destroy
        end

    end
    


    private
    def dm_server_params
        return params.require(:dm_server).permit(:owner_id,:dm_server_name, dm_member_ids:[])
    end

    def userId
        return params[:user]
    end

end
