json.extract! dm_server, :id, :owner_id, :dm_server_name
# json.dm_members dm_server.dm_members.map(&:id)
json.dm_server_name dm_server.dm_server_name if dm_server.dm_server_name

json.members do
    dm_server.members.each do |member|
        json.set! member.id do 
            json.partial! 'api/users/user', user: member
            json.photo url_for(member.photo) if member.photo.attached?
        end
    end
end