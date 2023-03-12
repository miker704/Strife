class Api::ServersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @servers = Server.all
        @current_user = userId ? current_user : false
        @servers = @current_user.servers_joined.includes(:channels) if (@current_user)
        render :index
    end


    def explore_Servers
        @servers = Server.all
        @auth_ids = [1,2,3,4]
        @current_user = userId.to_i ? current_user : false
        if @auth_ids.include?(@current_user.id)
            @servers = Server.all
            render :explore

        else
            @servers = Server.where("servers.public = true").includes(:channels)
            render :explore

        end

    end

    def show
        # @server = Server.find(params[:id])
        @server = Server.where("id = #{params[:id]}").includes(:channels).first
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
        # @server = Server.find(params[:id])
        @server = Server.where("id = #{params[:id]}").includes(:channels).first


        if @server
            if server_params[:server_Icon_Remove]
                @server.server_Icon.purge
                @server.channels.each do |channel|
                    StrifeServer.broadcast_to(channel, head: 203)
                end
                render :show
            elsif @server.update(server_params)
                @server.channels.each do |channel|
                    StrifeServer.broadcast_to(channel, head: 203)
                end

                render :show
            else
                 render json: @server.errors.full_messages, status: 400
            end

        else
          render json: @server.errors.full_messages, status: 400
        end
    end
    

    def join_server
        @current_user = userId
        @server = Server.find_by(invite_code: params[:inviteCode].downcase)
        
        if @server
            if (@server.members.find_by(id: current_user.id))
                @server.errors.add(:error,'You are already a member of this server')
                render json: @server.errors.full_messages, status: 422
            else
                member = ServerMembership.create!(user_id: current_user.id, server_id: @server.id)
                @response_Message = "Welcome @#{current_user.username} to #{@server.server_name}!"
                if member.save
                    all_channels = @server.channels
                    all_channels.each do |channel|
                   
                        ChannelMembership.create!(
                            channel_id: channel.id, 
                            receiver_id: current_user.id
                        )
                    @message=Message.create!(body: @response_Message, author_id: 1, channel_id: channel.id)
                    StrifeServer.broadcast_to(channel,message: @message, head: 100)
                    # StrifeServer.broadcast_to(channel, head: 100)

                    end
                        render :show

                end
            end
        else
            @server = Server.last
            render json: ['The invite is invalid or has expired.'], status: 422

        end
    end

   
    def verify_Name
        @server = Server.find(params[:id])
        servername = params[:server][:server_name]
        if @server.server_name == params[:server][:server_name]
            render :show
        else
            render json: ["You didn't enter the server name correctly"], status: 401
        end
    end

    def async_Server_Self_Destruct(server)
        @response_Message = " #{server.server_name} self destructing redirecting everyone to home ...1...2...3..."
        server.channels.each do |channel|
            @message=Message.create!(body: @response_Message, author_id: 1, channel_id: channel.id)
            StrifeServer.broadcast_to(channel, message: @message, head: 302, path: '/$/telefrag/')
        end
    end

    
    def destroy
        @server = Server.find(params[:id])
        @current_user=current_user
        if @current_user.id == @server.server_owner_id
            # send the message to all channels
            async_Server_Self_Destruct(@server)
            # give time for all these actions to happen
            sleep(3)
            # destroy the server
            @server.destroy!
            # render :show
        else
            render json: ['You cannot destroy a server that is not yours !'], status: 401
        end
    end
    
    private
        def server_params
            return params.require(:server).permit(:server_name,:server_owner_id,:public,:server_Icon, :server_Icon_Remove)
        end
        def userId
            return params[:user]
        end

end
