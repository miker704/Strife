@servers.each do |server|
    json.set! server.id do
        json.general_channel_id server.channels.order(:id).first.id
        json.memberCount server.members.length
        json.presenceCount server.members.where(online: true).length
        json.server_color_tag server.members.where(id: server.server_owner_id).pluck(:color_tag)[0]
        json.joined_server server.members.include?(@current_user)
        json.partial! "api/servers/server", server: server
    end
end


@servers.each do |server|
    json.set! server.id do
      server.members.each do |member|
        json.users do 
            json.set! member.id do
                json.partial! 'api/users/user', user: member
            end
        end
      end
    end
end