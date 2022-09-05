class Api::DmMembersController < ApplicationController

    def create
        @dm_membership = DmMember.new(dm_member_params)
        @dm_server = DmServer.find_by(id: @dm_membership.dm_server_id)
        
        if @dm_membership.save
          render :show
        else
          render json: @dm_membership.errors.full_messages, status: 400
        end
    end
    
    def destroy
        @dm_membership = DmMember.find_by(dm_member_params)
        puts 'dmmemberships is '
        puts @dm_membership
        puts @dm_membership.dm_member_id
        puts @dm_membership.dm_server_id
        # @dm_membership = DmMember.find_by(id: params[:id])
        @dm_server = DmServer.find_by(id: @dm_membership.dm_server_id)
        # if @dm_membership.dm_member_id == current_user.id
        #     @dm_membership.destroy
        #     render 'api/dm_servers/show'
        if @dm_membership
            @dm_membership.destroy
            render 'api/dm_servers/show'
        else
            render json:  @dm_membership.errors.full_messages, status: 401
        end
    end
    


    private
    def dm_member_params
        return params.require(:dm_member).permit(:dm_server_id,:dm_member_id)
    end

end
