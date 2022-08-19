json.extract! user, :id, :username, :email, :online, :phone_number, :strife_id_tag, :color_tag 

json.photo url_for(user.photo) if user.photo.attached?

json.ownedServers user.owned_servers.map{|ownedServer| ownedServer.id}