json.partial! 'api/dm_servers/dm_server', dm_server: @dm_server

# grab dm_messages
json.dm_messages do
  @dm_server.dm_messages.each do |dm_message|
    json.set! dm_message.id do
      json.partial! 'api/dm_messages/dm_message', dm_message: dm_message
    end
  end
end