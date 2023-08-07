    
    
    # this is the update function before the snack bar form was implemented 
    # def update
    #     # @server = Server.find(params[:id])
    #     @server = Server.where("id = #{params[:id]}").includes(:channels).first

    #     # updateParams = server_params.except(:server_Icon_Remove).reject{|_, v| v.blank?}
    #     updateParams = update_server_params.except(:server_Icon_Remove).reject{|_, v| v.blank?}

    #     puts 'UPDATE PPARAMS'
    #     puts updateParams.inspect

    #     if @server
    #         if server_params[:server_Icon_Remove]
    #             @server.server_Icon.purge
    #             # @server.update(server_params.except(:server_Icon_Remove).reject{|_, v| v.blank?})
    #             if @server.update(update_server_params.except(:server_Icon_Remove).reject{|_, v| v.blank?})
    #                 @server.save!
    #                 @server.channels.each do |channel|
    #                     StrifeServer.broadcast_to(channel, head: 203)
    #                 end
    #                 render :show
    #             else
    #                 render json: @server.errors.full_messages, status: 400
    #             end
    #         elsif @server.update(server_params)
    #             @server.channels.each do |channel| 
    #                 StrifeServer.broadcast_to(channel, head: 203)
    #             end

    #             render :show
    #         else
    #              render json: @server.errors.full_messages, status: 400
    #         end

    #     else
    #       render json: @server.errors.full_messages, status: 400
    #     end
    # end
    