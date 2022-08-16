json.extract! user, :id, :username, :email, :online, :phone_number, :strife_id_tag, :color_tag , :photo


json.ownedServers user.owned_servers.map{|ownedServer| ownedServer.id}