# json.extract! server, :id, :server_name, :server_owner_id, :server_icon, :public, :channels, :members, :invite_code
#the top code gives some errors testing this one instead
json.extract! server, :id, :server_name, :server_owner_id, :server_icon, :public, :invite_code
json.general_channel_id server.channels.first.id

# json.channels server.channels.map{|channel| channel}

json.server_memberships server.server_members


