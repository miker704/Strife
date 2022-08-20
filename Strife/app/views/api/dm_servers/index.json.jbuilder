# @dm_servers.each do |dm_server|
#     json.set! dm_server.id do
#         json.partial! "api/dm_servers/dm_server", dm_server: dm_server
#         # json.extract! dm_server, :id, :owner_id
#     end
# end

json.users do
    json.set! @current_user.id do
        json.extract! @current_user, :id, :username, :email, :phone_number, :strife_id_tag, :color_tag, :online
        json.photo url_for(@current_user.photo) if @current_user.photo.attached?
    end

    @dm_servers.each do |dm_server|
        dm_server.members.each do |user|
            if user.id != @current_user.id
                json.set! user.id do
                    json.dmMemberid dm_server.id
                    json.extract! user, :id, :username, :email, :phone_number, :strife_id_tag, :color_tag, :online
                    json.photo url_for(user.photo) if user.photo.attached?
                end
            end
        end
    end

end



