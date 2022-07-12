json.partial! 'api/servers/server', server: @server


json.server do 
    json.general_channel_id @server.channels.first.id
    json.extract! @server, :id, :server_name, :server_owner_id, :public
  end

#users in server

  json.users do 
    @server.members.each do |member|
      json.set! member.id do
        json.extract! member, :id, :username, :email, :strife_id_tag, :color_tag
      end
    end
  end


  json.channels do
    @server.channels.each do |channel|
      json.set! channel.id do 
        json.extract! channel, :id, :channel_name, :server_id
      end
    end
  end
  

  #render the messages of the first channel in the in the server
# this logic will basically be the same for channels dm channels and servers
  
  json.messages do 
    messages = @server.channels.first.messages.includes(:user)
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
  