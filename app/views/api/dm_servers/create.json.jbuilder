json.extract! @dm_server, :id, :owner_id, :dm_members
json.dm_server_name @dm_server.dm_server_name  if @dm_server.dm_server_name