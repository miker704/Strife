

@user.friends.each do |friend|
    json.set! friend.id do
        json.partial! 'api/users/user', user: friend
    end
end
json.serversJoined @user.servers_joined.map{|sj| sj}
json.dmServersJoined @user.dm_servers.map{|dmsms| dmsms} 
json.voiceChannels @user.servers_joined.map{|server|server.channels.where('channel_type = 2')}.reject{|c| c.empty?}
json.textChannels @user.servers_joined.map{|server|server.channels.where('channel_type = 1')}.reject{|c| c.empty?}

