# json.extract! server, :id, :server_name, :server_owner_id, :server_icon, :public, :channels, :members, :invite_code
#the top code gives some errors testing this one instead
json.extract! server, :id, :server_name, :server_owner_id, :server_icon, :public, :invite_code
# json.general_channel_id server.channels.first.id
json.general_channel_id server.channels.order(:id).first.id
# json.general_channel_id server.channels.length > 0 ? server.channels.order(:id).first.id : -1
json.server_Icon url_for(server.server_Icon) if server.server_Icon.attached?
json.server_banner url_for(server.server_banner) if server.server_banner.attached?
json.invite_splash url_for(server.invite_splash) if server.invite_splash.attached?
# json.memberCount server.members.length
# json.presenceCount server.members.where(online: true).length
json.server_has_channels server.channels.length > 0 ? true : false
# json.channels server.channels.map{|channel| channel}
# json.server_memberships server.server_members
# json.general_channel_id2 server.channels.length > 0 ? server.channels.order(:id).first.id : -1