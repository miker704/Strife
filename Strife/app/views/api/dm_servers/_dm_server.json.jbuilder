json.extract! dm_server, :id, :owner_id
json.dm_members dm_server.dm_members.map(&:id)
# json.members dm_server.members.map do |member|
#         json.set! member.id do 
#             json.partial! 'api/users/user', user: member
#             json.photo url_for(member.photo) if member.photo.attached?
#         end
#     end
json.members do
    dm_server.members.each do |member|
        json.set! member.id do 
            json.partial! 'api/users/user', user: member
            json.photo url_for(member.photo) if member.photo.attached?
        end
    end
end