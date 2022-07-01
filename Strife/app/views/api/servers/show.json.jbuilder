json.partial! 'api/servers/server', server: @server


json.server do 
    json.first_channel_id @server.channels.first.id
    json.extract! @server, :id, :name, :owner_id, :public
  end

  json.channels do
    @server.channels.each do |channel|
      json.set! channel.id do 
        json.extract! channel, :id, :name, :server_id
      end
    end
  end
  