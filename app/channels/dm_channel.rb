class DmChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    @dm_server = DmServer.find_by(id: params[:id])
    dmServers << @dm_server
    stream_for @dm_server
    # self.class.broadcast_to @dm_server,
    # type: 'RECEIVE_USER',
    # user: current_user.slice(:id, :username, :photo, :strife_id_tag, :color_tag)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    # self.class.broadcast_to @dm_server,
    #   type: 'REMOVE_USER',
    #   id: current_user.id
    dmServers.delete(@dm_server)
  end

  def self.active_users(dm_server)
    ActionCable.server.connections.select { |conn| conn.dmServers.include?(dm_server) }
               .map { |conn| conn.current_user }
  end


  
end
