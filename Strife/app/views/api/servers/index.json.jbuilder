@servers.each do |server|
    json.set! server.id do
        json.general_channel_id server.channels.first.id
        json.partial! "api/servers/server", server: server
    end
end