json.channel do 
  json.extract! @channel, :id, :server_id, :channel_name
end

json.messages do 
  messages = @channel.messages.includes(:user)
  messages.each do |message|
    json.set! message.id do
      #get eastern time zone
      est = Time.zone.utc_to_local(message.created_at)
      est = est + 4.hours
      json.user_name message.user.username
      json.created_at est.strftime("%-m/%-d/%Y %-I:%M:%S %p")
      json.extract! message, :id, :channel_id, :author_id, :body
    end
  end
end
