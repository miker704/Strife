@dm_server.members.each do |member|
        json.members do
            json.set! member.id do 
                json.partial! 'api/users/user', user: member
                json.photo url_for(member.photo) if member.photo.attached?
            end
        end
end

# json.members do
#     dm_server.members.each do |member|
#         json.set! member.id do 
#             json.partial! 'api/users/user', user: member
#             json.photo url_for(member.photo) if member.photo.attached?
#         end
#     end
# end