# @dm_server.members.each do |member|
#         json.members do
#             json.set! member.id do 
#                 json.partial! 'api/users/user', user: member
#                 json.photo url_for(member.photo) if member.photo.attached?
#             end
#         end
# end

# json.extract! @dm_membership, :id, :dm_member_id, :dm_server_id

# json.members do
#     dm_server.members.each do |member|
#         json.set! member.id do 
#             json.partial! 'api/users/user', user: member
#             json.photo url_for(member.photo) if member.photo.attached?
#         end
#     end
# end

# json.extract! @dm_membership, :id, :dm_member_id, :dm_server_id


json.member do 
    json.set! @dm_membership.member.id do
        json.partial! 'api/users/user', user: @dm_membership.member
    end
end


json.dm_server do
    json.set! @dm_server.id do
        json.partial! 'api/dm_servers/dm_server', dm_server: @dm_server
        json.dm_messages do
            @dm_server.dm_messages.each do |dm_message|
              json.set! dm_message.id do
                json.partial! 'api/dm_messages/dm_message', dm_message: dm_message
              end
            end
          end
    end
end
