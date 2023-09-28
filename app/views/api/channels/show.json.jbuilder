json.channel do 
    json.extract! @channel, :id, :server_id, :channel_name, :channel_type
  end


  # json.channelMemberships do 
  #   channelmemberships = @channel.channel_members

  #   channelmemberships.each do |channelmembership|
  #     json.set! channelmembership.id do
  #       # est = Time.zone.utc_to_local(channelmembership.created_at)
  #       # est = est + 4.hours
  #       # json.username channelmembership.member.username
  #       # json.created_at est.strftime("%-m/%-d/%Y %-I:%M:%S %p")
  #       json.extract! channelmembership, :id, :channel_id, :receiver_id
  #     end
      
  #   end

  # end
  
  json.messages do 
    messages = @channel.messages.includes(:user)
    messages.each do |message|
      json.set! message.id do
        json.partial! 'api/messages/message', message:message
      end
    end
  end