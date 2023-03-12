# json.extract! server, :id, :server_name, :server_owner_id, :server_icon, :public, :channels, :members, :invite_code
#the top code gives some errors testing this one instead
json.extract! server, :id, :server_name, :server_owner_id, :server_icon, :public, :invite_code
# json.general_channel_id server.channels.first.id
json.general_channel_id server.channels.order(:id).first.id
json.server_Icon url_for(server.server_Icon) if server.server_Icon.attached?
# json.channels server.channels.map{|channel| channel}

# json.server_memberships server.server_members


