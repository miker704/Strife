@servers.each do |server|
    json.set! server.id do
        json.partial! "api/servers/server", server: server
    end
end

@servers.each do |server|
    json.set! server.id do
        server_channels = server.channels
        server_channels.each do |channel|
            json.channels do
            json.set! channel.id do
                json.extract! channel, :id, :server_id, :channel_name, :channel_type 
            end
        end
        end

    end
end