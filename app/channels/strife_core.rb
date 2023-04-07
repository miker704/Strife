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
      puts 'CURRENT LOCATION'
      currentLocation = currentLocation[0][1]
      puts currentLocation.to_yaml
      puts 'CURRENT USER'
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

      puts 'CURRENT ONE TO ONE DMSERVERS'
      puts one_to_one_dm_servers.inspect
      puts 'CURRENT All DMSERVERS'
      puts all_dm_servers.inspect

      if currentLocation.include?('/channels/') && currentLocation != '/channels/guild-discovery/' && currentLocation != '/channels/@me'
        if currentLocation.include?('/channels/@me/')
          currentLocation = currentLocation.split('/channels/@me/').join('').to_i
          @dm_server = DmServer.find(currentLocation)
          DmChannel.broadcast_to(@dm_server, head: 111)
          one_to_one_dm_servers.each do |dms|
            if dms.id == @dm_server.id
              next
            else
              DmChannel.broadcast_to(dms, head: 111)

            end
          end
          parse_Mass_Broadcast_User_Updated(all_dm_servers)

        elsif currentLocation.include?('/channels/') && !currentLocation.include?('@me')
          currentLocation = currentLocation.split('/channels/').join('').split('/').map(&:to_i)
          @channel = Channel.find(currentLocation[1])
          StrifeServer.broadcast_to(@channel, head: 1012)
        else
          print 'CURRENT LOCATION IS'
          print currentLocation
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

  def transmit_New_DmServer(_dmServer)
    print 'new DMSERVER  IS'
    puts _dmServer
    # debugger
    StrifeCore.broadcast_to('$TR!F3', type: 'FETCHDMSERVER')
  end

  def parse_Mass_Broadcast_User_Updated(_user_Array)
    _user_Array.each do |user|
      core = '$TR!F3_' + user.to_s
      received({ type: 'RECEIVE_DM_SERVERS', core: core })
    end
  end

  def parse_Invites_To_New_DmServer(_dm_Member); end

  def parse_Invites_To_Existing_DmServer(_added_Dm_Member)
    # find if member is online if not do not bother with a broadcast
    @new_DmMember = User.find_by(id: _added_Dm_Member['dm_member_id'].to_i)
    if @new_DmMember.online == true
      core = '$TR!F3_' + @new_DmMember.id.to_s
      received({ type: 'RECEIVE_DM_SERVER', core: core, newDmServerId: _added_Dm_Member['dm_server_id'] })
    end
  end

  def kick_User_From_DmServer(_kicked_member)
    puts "\e[\033[1;91m KICKED MEMBER \e[1;91m\n"
    @kicked_DmMember = User.find_by(id: _kicked_member['dm_member_id'].to_i)
    if @kicked_DmMember.online == true
      core = '$TR!F3_' + @kicked_DmMember.id.to_s
      received({ type: 'REMOVE_DM_SERVER', core: core, removedDmServerId: _kicked_member['dm_server_id'] })
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

  def _ASYNC_Ban_User_From_Server_(_banned_member)
    puts "BANNNED MEMBER"
    # puts "\e[\033[1;91m\]"
    puts "\e[\033[1;91m BANNNED MEMBER \e[1;91m\n"
    puts _banned_member.inspect
    @banned_Server_Member = User.find_by(id: _banned_member['user_id'].to_i)
    if @banned_Server_Member.online == true
      core = '$TR!F3_' + @banned_Server_Member.id.to_s
      received({ type: 'REMOVE_SERVER', core: core, removedServerId: _banned_member['server_id'] })
    end
  end


  def parse_Mass_Broadcast_User_Updated_Server(_user_Array); end

  def mass_Invite_To_Server(_server_membership); end

  def mass_Invite_To_DM_Server_Creation; end

  def mass_Invite_To_Server; end

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
      when 'RECEIVE_SERVERS'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'RECEIVE_SERVER'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'REMOVE_SERVER'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'RECEIVE_ALL_FRIENDS'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'RECEIVE_FRIEND'
        core = data[:core]
        self.class.broadcast_to(core, data)
      when 'REMOVE_FRIEND'
        core = data[:core]
        self.class.broadcast_to(core, data)
      else
        core = data[:core]
        self.class.broadcast_to(core, data)
    end

    # if data[:type] == 'HEART_BEAT'
    #   self.class.broadcast_to(@current_core, data)

    # elsif data[:type] == 'RECEIVE_DM_SERVERS'
    #   core = data[:core]
    #   self.class.broadcast_to(core, data)

    # elsif data[:type] == 'RECEIVE_DM_SERVER'
    #   core = data[:core]
    #   self.class.broadcast_to(core, data)
    # elsif data[:type] == 'REMOVE_DM_SERVER'
    #   core = data[:core]
    #   self.class.broadcast_to(core, data)
    # end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
