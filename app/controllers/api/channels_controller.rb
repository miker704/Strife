class Api::ChannelsController < ApplicationController
    # skip_before_action :verify_authenticity_token

    def show
        @current_user = current_user
        @channel = Channel.find_by(id: params[:id])
        StrifeServer.active_users(@channel)<< @current_user
        render :show
    end

    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            @server = Server.find_by(id: @channel.server_id)
            @server.channels.each do |channel|
                StrifeServer.broadcast_to(channel, head: 201, type: 'NewChannel')
            end
          render :show
        else
            render json: @channel.errors.full_messages, status: 400
        end
    end


    # THIS IS USED As a back up method as a way to create from a server template
    def create_via_server_setup
        @channel = nil

        gatherParams = params[:channel]
        serverChannelSetup = {}
        case gatherParams['serverTemplate']
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
            server_id = gatherParams["server_id"]
            channelhashs = []
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
                        @channel = Channel.create!(channel_name: channelName, channel_type: channelType, server_id: server_id)
                    end
                end
            end

            @server = Server.find_by(id:server_id.to_i)

            if @channel.save

                render "api/servers/show"
            else
                render json: @channel.errors.full_messages, status: 400
            end

    end


    
    def update
        @channel = Channel.find_by(id: params[:id])
        if @channel.update(channel_params)
          @default_channel_message = @channel.messages.first
          @default_channel_message.update(body: "Welcome to ##{@channel.channel_name} channel !")
          @server = Server.find_by(id: @channel.server_id)
            @server.channels.each do |channel|
                StrifeServer.broadcast_to(channel, head: 202, type: 'UpdateChannel')
            end
          render :show
        else
            render json: @channel.errors.full_messages, status: 400
        end
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        @server = Server.find_by(id: @channel.server_id)
        if @channel
            @server.channels.each do |channel|
                StrifeServer.broadcast_to(channel, head: 302, type: 'DeleteChannel',  channel: @channel)
            end
        #   sleep(2)
          @channel.destroy
          render :delete
        else
            render json: @channel.errors.full_messages, status: 400
        end
    end
    
    


    private

    def channel_params
        return params.require(:channel).permit(:channel_name,:server_id,:channel_type)
    end



end
