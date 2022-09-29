# @dm_server.members.each do |member|
#         json.members do
#             json.set! member.id do 
#                 json.partial! 'api/users/user', user: member
#                 json.photo url_for(member.photo) if member.photo.attached?
#             end
#         end
# end

json.extract! @dm_membership, :id, :dm_member_id, :dm_server_id






# json.members do
#     dm_server.members.each do |member|
#         json.set! member.id do 
#             json.partial! 'api/users/user', user: member
#             json.photo url_for(member.photo) if member.photo.attached?
#         end
#     end
# end