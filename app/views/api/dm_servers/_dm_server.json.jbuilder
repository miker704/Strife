json.extract! dm_server, :id, :owner_id, :dm_server_name
json.dm_server_name dm_server.dm_server_name if dm_server.dm_server_name
json.gcIcon url_for(dm_server.gcIcon) if dm_server.gcIcon.attached? && dm_server.is_Group_chat?
json.dm_server_name dm_server.dm_server_name ? dm_server.dm_server_name : dm_server.generate_temp_dm_name(current_user)
json.members do
    dm_server.members.each do |member|
        json.set! member.id do 
            json.partial! 'api/users/user', user: member
            json.photo url_for(member.photo) if member.photo.attached?
        end
    end
end

json.one_to_one_dm dm_server.is_one_to_one?
json.group_chat dm_server.is_Group_chat?

if dm_server.is_one_to_one?
    json.other_o2o_member do
        dm_server.members.each do |member|
            if member.id != current_user.id
                json.partial! 'api/users/user', user: member
                # json.set! member.id do
                #     json.partial! 'api/users/user', user: member
                # end
            end
        end
    end
end
json.dm_server_color_tag dm_server.members.order(:id).last.color_tag