json.extract! user, :id, :username, :email, :online, :phone_number, :strife_id_tag, :color_tag
json.photo url_for(user.photo) if user.photo.attached?
json.set! :friend_request_status, current_user.friendship_status(user)
json.ownedServers user.owned_servers.map{|ownedServer| ownedServer.id}
json.serversJoined user.servers_joined.map{|sj| sj.id}
json.dmServersJoined user.dm_servers.map{|dmsms| dmsms.id}