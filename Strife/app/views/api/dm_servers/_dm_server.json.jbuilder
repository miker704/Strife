json.extract! dm_server, :id, :owner_id
json.dm_members dm_server.dm_members.map(&:id)
