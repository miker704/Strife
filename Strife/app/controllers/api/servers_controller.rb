class Api::ServersController < ApplicationController

    def index
        @servers = Server.all
        @current_user = userId ? current_user : false
        # if @current_user
        @servers = @current_user.servers_joined.includes(:channels) if (@current_user)
        # end
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

        if @server
            if server_params[:server_Icon_Remove]
                @server.server_Icon.purge
                render :show
            elsif @server.update(server_params)
                render :show
            else
                 render json: @server.errors.full_messages, status: 400
            end

        # if @server && @server.update(server_params)
        #   render :show
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
                # render json: ['You are already a member of this server'], status: 422
            else
                member = ServerMembership.create!(user_id: current_user.id, server_id: @server.id)
                if member.save
                    all_channels = @server.channels
                    all_channels.each do |channel|
                   
                        ChannelMembership.create!(
                            channel_id: channel.id, 
                            receiver_id: current_user.id
                        )
                    end
                        # @servers = current_user.servers_joined
                        # render json: @servers, include: %i[channels members]
                        # render json: @servers
                        render :show

                end
            end
        else
            @server = Server.last
            # @server.errors.add(:error, 'The Invite code is invalid or has expired')
            # render json: @server.errors.full_messages, status: 422
            render json: ['The invite is invalid or has expired.'], status: 422

        end
    end

   
    def verify_Name
        @server = Server.find(params[:id])
        servername = params[:server][:server_name]
        puts "server name #{@server.server_name}"
        puts "server name params #{servername}"
        if @server.server_name == params[:server][:server_name]
            puts 'success'
            render :show
        else
            render json: ["You didn't enter the server name correctly"], status: 401
        end
    end



    
    def destroy
        @server = Server.find(params[:id])
        @current_user=current_user
        if @current_user.id == @server.server_owner_id
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
