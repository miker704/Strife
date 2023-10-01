json.dmServer_id @dm_server.id
@dm_server.members.each do |member|
    json.set! member.id do 
        json.partial! 'api/users/user', user: member
    end
end