@servers.each do |server|
    json.set! server.id do
        # json.general_channel_id server.channels.first.id
        json.general_channel_id server.channels.order(:id).first.id
        json.partial! "api/servers/server", server: server
    end
end


@servers.each do |server|
    json.set! server.id do
      server.members.each do |member|
        json.users do 
            json.set! member.id do
                json.partial! 'api/users/user', user: member
                json.photo url_for(member.photo) if member.photo.attached?
            end
        end
      end
    end
end
