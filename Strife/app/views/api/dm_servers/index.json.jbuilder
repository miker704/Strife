@dm_servers.each do |dm_server|
    json.set! dm_server.id do
        json.extract! dm_server, :id, :owner_id
        json.partial! "api/dm_servers/dm_server", dm_server: dm_server
    end
end

json.users do
    json.set! @current_user.id do
        # json.extract! @current_user, :id, :username, :email, :phone_number, :strife_id_tag, :color_tag, :online
        json.partial! 'api/users/user', user: @current_user
        json.photo url_for(@current_user.photo) if @current_user.photo.attached?
    end

    @dm_servers.each do |dm_server|
        dm_server.members.each do |user|
            if user.id != @current_user.id
                json.set! user.id do
                    # json.extract! user, :id, :username, :email, :phone_number, :strife_id_tag, :color_tag, :online
                    json.partial! 'api/users/user', user: user
                    json.photo url_for(user.photo) if user.photo.attached?
                end
            end
        end
    end

end


# json.dm_member_info do
#     @dm_servers.each do |dm_server|
#         dm_server.members.each do |member|
#             json.set! member.id do 
#                 json.partial! 'api/users/user', user: member
#                 json.photo url_for(member.photo) if member.photo.attached?

#             end
#         end
#     end
# end

# @dm_servers.each do |dm_server|

#     dm_memberships = dm_server.dm_members
#     members_in_dms = dm_server.members
#     json.set! dm_server.id do

#         members_in_dms.each do |member|

#             json.users do
    
#                 json.set! @current_user.id do
#                     json.extract! @current_user, :id, :username, :email, :phone_number, :strife_id_tag, :color_tag, :online
#                     json.photo url_for(@current_user.photo) if @current_user.photo.attached?
#                 end
#                 if member.id != @current_user.id
#                     json.set! member.id do
                        
#                         json.extract! member, :id, :username, :email, :phone_number, :strife_id_tag, :color_tag, :online
#                         json.photo url_for(member.photo) if member.photo.attached?
#                     end
#                 end
    
#             end
#         end


#         json.extract! dm_server, :id, :owner_id
#     end

# end


