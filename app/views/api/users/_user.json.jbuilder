json.extract! user, :id, :username, :email, :online, :strife_id_tag, :color_tag
json.extract! user, :phone_number if user.id == current_user.id
json.photo url_for(user.photo) if user.photo.attached?
json.banner url_for(user.user_Banner) if user.user_Banner.attached?
json.set! :friend_request_status, current_user.friendship_status(user)
#add the current user condition to skip this code if they arent signed in reduces load times greatly
json.ownedServers user.owned_servers.map{|ownedServer| ownedServer.id} if user.id == current_user.id
json.serversJoined user.servers_joined.map{|sj| sj.id} if user.id == current_user.id
json.dmServersJoined user.dm_servers.map{|dmsms| dmsms.id} if user.id == current_user.id
json.numberOfFriends user.friends.length if user.id == current_user.id
json.accountCreatedOn user.joined_date