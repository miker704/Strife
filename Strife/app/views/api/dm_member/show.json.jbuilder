@dm_server.dm_members.each do |dm_member|
    if dm_member.id != @current_user.id
        json.user do
            json.extract! dm_member, :id, :username, :email, :phone_number, :strife_id_tag, :color_tag
        end
    end
end