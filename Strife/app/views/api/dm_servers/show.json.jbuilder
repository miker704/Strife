json.partial! "api/dm_servers/dm_server", dm_server: @dm_server
#grab users


json.users do
        @dm_server.members.each do |member|
            json.set! member.id do 
                json.partial! 'api/users/user', user: member
                json.photo url_for(member.photo) if member.photo.attached?
            end
        end
end




#grab dm_messages

json.dm_messages do
    @dm_server.dm_messages.each do |dm_message|
        json.set! dm_message.id do
            #get eastern time zone of the direct_message this is similar to how regular messages worked in 
                    #normal servers and channels controllers
                est = Time.zone.utc_to_local(dm_message.created_at)
                est = est + 4.hours
                json.author_name dm_message.message_creator.username
                json.created_at est.strftime("%-m/%-d/%Y %-I:%M:%S %p")
                json.extract! dm_message, :id, :dm_server_id, :sender_id, :body, :parent_message_id
        end
    end
end