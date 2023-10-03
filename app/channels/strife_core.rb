require 'colorize'

class StrifeCore < ApplicationCable::Channel
  @@core_Count = 0
  @@cores = []
  # @beat_Count = 0
  # def initialize(core)
  #   @@core_Count += 1
  #   @@cores << core
  #   @beat_Count  +=1

  # end

  def self.core_Count
    @@core_Count
  end

  def self.cores
    @@cores
  end

  def subscribed
    # this is the super cable to update everything outside of servers and dmservers
    # stream_from "some_channel"
    unless params[:id].nil?
      @curr_user = User.find_by(id: params[:id])
      @current_core = '$TR!F3_' + @curr_user.id.to_s
      # self.initialize(@current_core) if @current_core
      stream_for @current_core if @current_core
    end
  end

  def transmit_to_other_channel(_transmissionState)
    unless _transmissionState.nil?
      currentLocation = _transmissionState.to_a
      puts 'CURRENT LOCATION'.colorize(:yellow)
      currentLocation = currentLocation[0][1]
      puts currentLocation.to_yaml.colorize(:yellow)
      puts 'CURRENT USER'.colorize(:yellow)
      puts current_user
      # gather all dm chats that are explicitly one to one
      one_to_one_dm_servers = current_user.dm_servers.map { |dmsms| dmsms }.select { |dms| dms.members.length == 2 }
      # gather ids of all members from all of dmservers involving this user and force a fetch all dmservers to rerender the dm_navbar
      # and the dmserver they are in to show  new changes of this user -> pfp or name change
      # pluck member ids faster operation flatten multi array and remove dup ids and remove the current user id from the force fetch process pass this
      # to core receive to be dispatched on frontend
      # all_dm_servers = current_user.dm_servers.map { |dmsms| dmsms.members.pluck(:id) }.flatten!.uniq!.delete_if{|dmsms| dmsms == current_user.id}
      all_dm_servers = current_user.dm_servers.map do |dmsms|
                         dmsms.members.where(online: true).pluck(:id)
                       end.flatten!.uniq!.delete_if { |dmsms| dmsms == current_user.id }

      # puts 'CURRENT ONE TO ONE DMSERVERS'.colorize(:yellow)
      # puts one_to_one_dm_servers.inspect
      # puts 'CURRENT All DMSERVERS'.colorize(:yellow)
      # puts all_dm_servers.inspect

      # use this for later 
      # puts 'CURRENT DMSERVER CO MEMBERS'.colorize(:yellow)
      # dm_co_members = current_user.dm_members.where(online: true).pluck(:id).uniq!.delete_if{|dmsmId| dmsmId == current_user.id}
      # puts dm_co_members.inspect
      # puts 'CURRENT SERVER CO MEMBERS'.colorize(:red)
      # server_co_members = current_user.server_co_members.where(online:true).pluck(:id).uniq!.delete_if{|smId| smId == current_user.id}
      # puts server_co_members
      # puts 'CURRENT SIGNAL MEMBERS'.colorize(:green)
      # signal_users = (dm_co_members+server_co_members).uniq!
      # puts signal_users
      

      if currentLocation.include?('/$/channels/') && currentLocation != '/$/channels/guild-discovery/' && currentLocation != '/$/channels/@me'
        if currentLocation.include?('/$/channels/@me/')
          currentLocation = currentLocation.split('/$/channels/@me/').join('').to_i
          @dm_server = DmServer.find(currentLocation)
          DmChannel.broadcast_to(@dm_server, head: 111, type: "MEMBER_UPDATED")
          one_to_one_dm_servers.each do |dms|
            if dms.id == @dm_server.id
              next
            else
              DmChannel.broadcast_to(dms, head: 111, type: "MEMBER_UPDATED")
            end
          end
          parse_Mass_Broadcast_User_Updated(all_dm_servers)

        elsif currentLocation.include?('/$/channels/') && !currentLocation.include?('@me')
          currentLocation = currentLocation.split('/$/channels/').join('').split('/').map(&:to_i)
          @channel = Channel.find(currentLocation[1])
          StrifeServer.broadcast_to(@channel, head: 1012, type: "MEMBER_UPDATED")
        else
          print 'CURRENT LOCATION IS'.colorize(:yellow)
          print currentLocation.colorize(:yellow)
        end
      end
    end
  end

  def to_hash
    hash = {}
    attributes.each { |k, v| hash[k] = v }
    hash
  end

  def _resync(_currentUserData)
    currentUserData = _currentUserData.to_hash
    currentUserData.delete('action')
    currentUserData = currentUserData['currentUser']
    current_user_dms = current_user.dm_servers.map { |dmsms| dmsms.id }
    current_user_sj = current_user.servers_joined.map { |sj| sj.id }
    # HeartBeat = "\e[0;35m HeartBeat At #{rand(59..150)} \e[0m\n"
    puts "\e[0;35m HeartBeat At #{rand(59..150)} \e[0m\n"
    # return HeartBeat;
  end

  def parse_Mass_Broadcast_User_Updated(_user_Array)
    _user_Array.each do |user|
      core = '$TR!F3_' + user.to_s
      parse_fetch_user_update(core)
      received({ type: 'RECEIVE_DM_SERVERS', core: core })
    end
  end

  def parse_fetch_user_update(user_core)
    # puts 'CURRENT USER'.colorize(:red)
    # puts current_user.inspect.colorize(:yellow)
    # puts current_user.id
    received({ type: 'RECEIVE_USER_UPDATE', core: user_core, userId: current_user.id })

  end

#  Final replace above and below functions
  def parse_New_Invited_DM_Member(_added_Dm_Member)
        # find if member is online if not do not bother with a broadcast
        puts 'SENDING INVITE TO NEW DM_MEMBER'.colorize(:yellow) 
        @new_DmMember = User.find_by(id: _added_Dm_Member['dm_member_id'].to_i)
        if @new_DmMember.online == true
          puts 'USER IS ONLINE:'.colorize(:yellow)
          core = '$TR!F3_' + @new_DmMember.id.to_s
          received({ type: 'WEB_SOCKET_RECEIVE_DM_SERVER', core: core, newDmServerId: _added_Dm_Member['dm_server_id'] })
        end
  end


  def kick_User_From_DmServer(_kicked_member)
    puts "\e[\033[1;91m KICKED MEMBER \e[1;91m\n"
    @kicked_DmMember = User.find_by(id: _kicked_member['dm_member_id'].to_i)
    if @kicked_DmMember.online == true
      core = '$TR!F3_' + @kicked_DmMember.id.to_s
      received({ type: 'WEB_SOCKET_REMOVE_DM_SERVER', core: core, removedDmServerId: _kicked_member['dm_server_id'] })
    end
  end

  def purge_DmServer_Members(_purged_Dm_Members)
    puts "PURGING DM_SERVER_MEMBERS".colorize(:red)
    puts _purged_Dm_Members.inspect.colorize(:cyan)
    puts _purged_Dm_Members.to_a.inspect.colorize(:cyan)
    
    @purged_Dm_Members = _purged_Dm_Members['dm_members']
    @remove_DMS_ID = _purged_Dm_Members['dm_server_id'].to_i

    @purged_Dm_Members.each do |userID|
      core = '$TR!F3_' + userID.to_s
      puts 'CORE'.colorize(:red)
      puts core
      puts 'DMSERVERID'.colorize(:red)
      puts @remove_DMS_ID
      # received({ type: 'REMOVE_DM_SERVER', core: core, removedDmServerId: @remove_DMS_ID})
      received({ type: 'RECEIVE_DM_SERVERS', core: core})
      # received({ type: 'WEB_SOCKET_REMOVE_DM_SERVER', core: core, removedDmServerId: @remove_DMS_ID })
    end

   
  end

  def parse_Invites_To_Existing_Server(_added_Server_Member)
    # find if member is online if not do not bother with a broadcast
    @new_Server_Member = User.find_by(id: _added_Server_Member['user_id'].to_i)
    if @new_Server_Member.online == true
      core = '$TR!F3_' + @new_Server_Member.id.to_s
      received({ type: 'RECEIVE_SERVER', core: core, newServerId: _added_Server_Member['server_id'] })
    end
  end


  def webSocketReceiveNewServerViaInvite(_added_Server_Member)
    @new_Server_Member = User.find_by(id: _added_Server_Member['user_id'].to_i)
    if @new_Server_Member.online == true
      core = '$TR!F3_' + @new_Server_Member.id.to_s
      received({ type: 'WEB_SOCKET_RECEIVE_SERVER', core: core, newServerId: _added_Server_Member['server_id'].to_i })
    end
  end

  def webSocketReceiveNewServerViaInviteInjextion(_added_Server_Members)
    membersToSignal = _added_Server_Members['memberIds']
    membersToSignal.each do |memberId|
      @new_Server_Member = User.find_by(id: memberId.to_i)
      if @new_Server_Member.online == true
        core = '$TR!F3_' + @new_Server_Member.id.to_s
        received({ type: 'WEB_SOCKET_RECEIVE_SERVER', core: core, newServerId: _added_Server_Members['server_id'].to_i })
      end
    end
  end



  def _ASYNC_Ban_User_From_Server_(_banned_member)
    puts "BANNNED MEMBER".colorize(:red)
    # puts "\e[\033[1;91m\]"
    puts "\e[\033[1;91m BANNNED MEMBER \e[1;91m\n"
    puts _banned_member.inspect
    @banned_Server_Member = User.find_by(id: _banned_member['user_id'].to_i)
    if @banned_Server_Member.online == true
      core = '$TR!F3_' + @banned_Server_Member.id.to_s
      received({ type: 'REMOVE_SERVER', core: core, removedServerId: _banned_member['server_id'] })
      # received({ type: 'RECEIVE_SERVERS', core: core})
    end
  end

  def _Purge_Server_Members_(_purged_members)
    puts "PURGING SERVER MEMBERS".colorize(:red)
    puts _purged_members.inspect.colorize(:red)
    @purged_Server_Members = _purged_members['purged_Members'].to_a
    @purged_Server_Members.each do |user|
      @purged_Member = User.find_by(id: user.to_i)
      if @purged_Member.online == true
       core = '$TR!F3_' + @purged_Member.id.to_s
       received({ type: 'REMOVE_SERVER', core: core, removedServerId: _purged_members['remove_SERVER_ID'].to_i })
      end
    end

  end

  def _Serve_Server_Update_To_Members_Force_Refresh_(_Server_Info)
    puts 'UPDATING SERVER'.colorize(:green)
    puts _Server_Info.inspect.colorize(:green)
    @server_to_update = Server.find_by(id: _Server_Info['updatedServerID'].to_i)
    @server_to_update_members = @server_to_update.members.where(online: true).pluck(:id).delete_if{|smid| smid == @server_to_update.server_owner_id}
    puts @server_to_update_members.inspect.colorize(:magenta)
    @server_to_update_members.each do |memberId|
      core = '$TR!F3_' + memberId.to_s
      received({ type: 'WEB_SOCKET_RECEIVE_SERVER', core: core, newServerId: _Server_Info['updatedServerID'].to_i })
    end
end


  def parse_add_friend_request(_friend)
    puts "FRIEND REQUEST".colorize(:green)
    puts _friend.inspect.colorize(:yellow)
    puts 'REQUEST SEND FROM USER ID'.colorize(:cyan)
    puts _friend['new_friend_request'].inspect.colorize(:cyan)
    @send_to_user = User.find_by(id: _friend['new_friend_request']['friend_id'].to_i)
    if @send_to_user.online == true
      core = '$TR!F3_' + @send_to_user.id.to_s
      received({ type: 'RECEIVE_FRIEND_REQUEST', core: core, friendId: _friend['new_friend_request']['user_id'].to_i})
      # received({ type: 'RECEIVE_USER', core: core, friendId: _friend['new_friend_request']['user_id'].to_i})
    end

  end

  def parse_update_friend_request(_friend)
    puts "UPDATE FRIEND REQUEST".colorize(:green)
    puts _friend.inspect.colorize(:yellow)
    puts 'REQUEST SEND FROM USER ID'.colorize(:cyan)
    puts _friend['user_id'].inspect.colorize(:cyan)
    puts 'REQUEST FOR FRIEND WITH USER ID'.colorize(:cyan)
    puts _friend['friend_id'].inspect.colorize(:cyan)
    @send_to_user = User.find_by(id:_friend['friend_id'].to_i)
    if @send_to_user && @send_to_user.online == true
      core = '$TR!F3_' + @send_to_user.id.to_s
      received({ type: 'UPDATE_FRIEND_REQUEST', core: core, friendId: _friend['user_id'].to_i})
    end
  end

  def parse_delete_friend_request(_friend)
    puts "DELETE FRIEND REQUEST".colorize(:green)
    puts _friend.inspect.colorize(:yellow)
    puts 'REQUEST SEND FROM USER ID'.colorize(:cyan)
    puts _friend['user_id'].inspect.colorize(:cyan)
    puts 'REQUEST FOR FRIEND WITH USER ID'.colorize(:cyan)
    puts _friend['friend_id'].inspect.colorize(:cyan)

    @send_to_user = User.find_by(id: _friend['friend_id'].to_i)
    if @send_to_user && @send_to_user.online == true
      core = '$TR!F3_' + @send_to_user.id.to_s
      received({ type: 'REMOVE_FRIEND', core: core, friendId: _friend['user_id'].to_i})
    end
  end

  def parse_block_request(_block_request)
    puts "BLOCK REQUEST".colorize(:green)
    puts _block_request.inspect.colorize(:yellow)
    puts 'REQUEST SEND FROM USER ID'.colorize(:cyan)
    puts _block_request['user_id'].inspect.colorize(:cyan)
    puts 'REQUEST FOR USER TO BLOCK WITH USER ID'.colorize(:cyan)
    puts _block_request['friend_id'].inspect.colorize(:cyan)
    @send_to_user = User.find_by(id: _block_request['friend_id'].to_i)
    if @send_to_user && @send_to_user.online == true
      core = '$TR!F3_' + @send_to_user.id.to_s
      received({ type: 'BLOCKED_USER', core: core, friendId: _block_request['user_id'].to_i})
    end
  end

  def parse_unblock_request(_unblock_request)
    puts "UNBLOCK REQUEST".colorize(:green)
    puts _unblock_request.inspect.colorize(:yellow)
    puts 'REQUEST SEND FROM USER ID'.colorize(:cyan)
    puts _unblock_request['user_id'].inspect.colorize(:cyan)
    puts 'REQUEST FOR USER TO UNBLOCK WITH USER ID'.colorize(:cyan)
    puts _unblock_request['friend_id'].inspect.colorize(:cyan)
    @send_to_user = User.find_by(id: _unblock_request['friend_id'].to_i)
    if @send_to_user && @send_to_user.online == true
      core = '$TR!F3_' + @send_to_user.id.to_s
      received({ type: 'REMOVE_BLOCKED_USER', core: core, friendId: _unblock_request['user_id'].to_i})
    end
  end

  def track_HeartBeat
    @current_core_HR = rand(59..150)
    puts "\e[0;35m HeartBeat At #{@current_core_HR} \e[0m\n"
    received({ type: 'HEART_BEAT', message: "\e[0;35m HeartBeat @ #{@current_core_HR} \e[0m" })
  end

  def received(data)
    # keep the core's heart beating for as long as possible to reduce chances of lost data due to socket closing
    # stoping actions from being received from the front processed here and sent back and vice versa

    case data[:type]
      when 'HEART_BEAT'
        self.class.broadcast_to(@current_core, data)
      when 'RECEIVE_DM_SERVERS'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'RECEIVE_DM_SERVER'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'REMOVE_DM_SERVER'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'WEB_SOCKET_REMOVE_DM_SERVER'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'RECEIVE_SERVERS'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'RECEIVE_SERVER'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'REMOVE_SERVER'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'WEB_SOCKET_RECEIVE_SERVER'
        core = data[:core]
        self.class.broadcast_to(core, data)  
      when 'RECEIVE_ALL_FRIENDS'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'RECEIVE_FRIEND'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'RECEIVE_FRIEND_REQUEST'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when  'UPDATE_FRIEND_REQUEST'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'BLOCKED_USER'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when  'REMOVE_BLOCKED_USER'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'REMOVE_FRIEND'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'RECEIVE_USER_UPDATE'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'RECEIVE_USER'
        core = data[:core]
        self.class.broadcast_to(core, data)  
      when 'RESYNC_CURRENT_USER'
        core = data[:core]
        self.class.broadcast_to(core, data)
      else
        core = data[:core]
        self.class.broadcast_to(core, data)
    end

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
