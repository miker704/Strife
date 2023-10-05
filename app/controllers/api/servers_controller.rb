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
        @server = nil
        serverChannelSetup = {} 

            case server_params[:serverTemplate]
                when 'Default'
                    serverChannelSetup = {
                        channelInfoNames: [],
                        channelTextNames: [],
                        channelVoiceNames: ['General'],
                    }
                when 'Local Community'
                    serverChannelSetup = {
                        channelInfoNames: ['welcome-and-rules', "announcements", 'resources'],
                        channelTextNames: ["meeting-plans", 'off-topic'],
                        channelVoiceNames: ['Lounge', "Meeting Room"],
                    }
                when 'Artists & Creators'
                    serverChannelSetup = {
                        channelInfoNames: ['welcome-and-rules', "announcements"],
                        channelTextNames: ["events", 'ideas-and-feedback'],
                        channelVoiceNames: ['Lounge', 'Community Hangout', "Stream Room"],
                    }
                when 'Friends'
                    serverChannelSetup = {
                        channelInfoNames: [],
                        channelTextNames: ["games", 'music'],
                        channelVoiceNames: ['Lounge', "Stream Room"],
                    }
                when 'Study Group'
                    serverChannelSetup = {
                        channelInfoNames: ['welcome-and-rules', 'notes-resources'],
                        channelTextNames: ["homework-help", 'session-planning', 'off-topic'],
                        channelVoiceNames: ['Lounge', "Study Room 1", "Study Room 2"],
                    }
                when 'School Club'
                    serverChannelSetup = {
                        channelInfoNames: ['welcome-and-rules', "announcements", 'resources'],
                        channelTextNames: ["meeting-plans", 'off-topic'],
                        channelVoiceNames: ['Lounge', "Meeting Room 1", "Meeting Room 2"],
                    }
                when 'Gaming'
                  serverChannelSetup = {
                    channelInfoNames: [],
                    channelTextNames: ["clips-and-highlights"],
                    channelVoiceNames: ['Lobby', "Gaming"],
                }
                else
                    serverChannelSetup = {
                        channelInfoNames: [],
                        channelTextNames: [],
                        channelVoiceNames: ['General'],
                    }
            end

        if server_params[:server_Icon]
            @server = Server.new(
                server_name: server_params[:server_name],
                server_owner_id: server_params[:server_owner_id],
                public: server_params[:public],
                server_Icon: server_params[:server_Icon]
            )
        else
            @server = Server.new(
                server_name: server_params[:server_name],
                server_owner_id: server_params[:server_owner_id],
                public: server_params[:public],
            )

        end

        if @server.save 
            channelType=0
            serverChannelSetup.each do |channelTemplate, names|
                if serverChannelSetup[channelTemplate].length === 0
                    next
                else
                    if channelTemplate == :channelInfoNames || channelTemplate == :channelTextNames
                        channelType = 1
                    elsif channelTemplate == :channelVoiceNames
                        channelType = 2
                    end
                    serverChannelSetup[channelTemplate].each do |channelName|
                        @channel = Channel.create!(channel_name: channelName, channel_type: channelType, server_id: @server.id)
                    end
                end
            end
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

            # if @server.update(server_params.except(:server_Icon_Remove).reject{|_, v| v.blank?})
            if @server.update(server_params.except(:server_Icon_Remove))

                if server_params[:server_Icon_Remove]
                    @server.server_Icon.purge
                end
                @server.save!
                    # @server.channels.each do |channel|
                    #     StrifeServer.broadcast_to(channel, head: 203, type: "UPDATE_SERVER")
                    # end
                    render :show
            else
                render json: @server.errors.full_messages, status: 400
            end

        else
          render json: @server.errors.full_messages, status: 400
        end
    end


    def change_server_banner
        @server = Server.find_by(id: params[:id])
        if @server 
            if server_params[:remove_SB]
                @server.server_banner.purge
                @server.save!
                render :show
            elsif @server.update(server_params)
                @server.save!
                render :show
            else
                process_File_Error = @server.errors.full_messages.length > 0 ? @server.errors.full_messages : ['cannot process file']
                render json: process_File_Error, status: 400
            end
        else
            process_File_Error = @server.errors.full_messages.length > 0 ? @server.errors.full_messages : ['cannot process file']
            render json: process_File_Error, status: 400
        end
    end

    def change_server_invite_splash
        @server = Server.find_by(id: params[:id])
        if @server 
            if server_params[:remove_SISB]
                @server.invite_splash.purge
                @server.save!
                render :show
            elsif @server.update(server_params)
                @server.save!
                render :show
            else
                process_File_Error = @server.errors.full_messages.length > 0 ? @server.errors.full_messages : ['cannot process file']
                render json: process_File_Error, status: 400
            end
        else
            process_File_Error = @server.errors.full_messages.length > 0 ? @server.errors.full_messages : ['cannot process file']
            render json: process_File_Error, status: 400
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
                    # StrifeServer.broadcast_to(channel,message: @message, head: 100,type: '')
                    StrifeServer.broadcast_to channel,type: 'RECEIVE_CHANNEL_MESSAGE', **from_template('api/messages/show', message: @message)
                    StrifeServer.broadcast_to(channel,head: 100, type:"NEW_SERVER_MEMBER")

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
            StrifeServer.broadcast_to channel,type: 'RECEIVE_CHANNEL_MESSAGE', **from_template('api/messages/show', message: @message)
            StrifeServer.broadcast_to(channel, message: @message, head: 302, path: '/$/telefrag/', type: 'SERVER_SELF_DESTRUCTION')
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
            return params.require(:server).permit(:server_name,:server_owner_id,:public,:server_Icon, :server_Icon_Remove, :serverTemplate, :server_banner, :remove_SB, :invite_splash, :remove_SISB)
        end
        def update_server_params
            return params.require(:server).permit(:server_name,:server_owner_id,:public,:server_Icon, :server_Icon_Remove, :invite_code, :server_icon)
        end
        def userId
            return params[:user]
        end

end
