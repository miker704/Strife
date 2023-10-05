@servers.each do |server|
    json.set! server.id do
        json.partial! "api/servers/server", server: server
    end
end



# @servers.each do |server|
#     server.channels.each do |channel|
#         json.set! channel.id do
#             json.extract! channel :id, :channel_name, :server_id
#         end
#     end
# end
    @servers.each do |server|
        json.set! server.id do
          server.members.each do |member|
            json.users do 
                json.set! member.id do
                    json.partial! 'api/users/user', user: member
                    json.photo url_for(member.photo) if member.photo.attached?
                    sm = member.server_memberships.find_by(server_id: server.id)
                    est = Time.zone.utc_to_local(sm.created_at)
                    est = est + 4.hours
                  # json.serverMembershipDateJoined est.strftime("%-m/%-d/%Y %-I:%M:%S %p")
                  json.serverMembershipDateJoined sm.date_joined_for_upc
                end
            end
          end
        end
    end


@servers.each do |server|
    json.set! server.id do
        server_channels = server.channels
        server_channels.each do |channel|
            json.channels do
            json.set! channel.id do
            #     json.channel_Memberships do
            #     channelMemberships = channel.channel_members
            #     channelMemberships.each do |channelmember|
            #         json.set! channelmember.id do                   
            #             json.extract! channelmember, :id, :channel_id, :receiver_id
        
            #         end
            #     end
            # end
                json.extract! channel, :id, :server_id, :channel_name, :channel_type 
                # , :channel_members
            end
        end
        end

    end
end



