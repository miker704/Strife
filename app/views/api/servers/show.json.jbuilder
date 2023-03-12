json.partial! 'api/servers/server', server: @server


json.server do 
    json.general_channel_id @server.channels.order(:id).first.id
    # json.general_channel_id @server.channels.first.id
    json.extract! @server, :id, :server_name, :server_owner_id, :public, :server_icon, :invite_code
  end

#users in server

  json.users do 
    @server.members.each do |member|
      json.set! member.id do
        json.partial! 'api/users/user', user: member
        json.photo url_for(member.photo) if member.photo.attached?
      end
    end
  end

  # json.all_Server_Memberships do

  #   server_member_list = @server.server_members
 
  #    server_member_list.each do |server_member|
  #      json.set! server_member.id do
  #       #  est = Time.zone.utc_to_local(server_member.created_at)
  #       #  est = est + 4.hours
  #        json.account_UserName server_member.user.username
  #        json.account_Email server_member.user.email
  #        json.account_Strife_Id server_member.user.strife_id_tag
  #       #  json.server_membership_created_at est.strftime("%-m/%-d/%Y %-I:%M:%S %p")
  #       #  json.server_memberShip_for_Server server_member.server.server_name
  #        json.extract! server_member, :id, :server_id, :user_id
  #      end
 
  #    end
 
 
  #  end
 

  json.channels do
    @server.channels.each do |channel|
      json.set! channel.id do 
        # json.channel_Memberships do
        #   channel_members = channel.channel_members
        #   channel_members.each do |channel_member|
        #     json.set! channel_member.id do 
        #       json.extract! channel_member, :id, :channel_id, :receiver_id
        #     end
        #   end
        # end
        json.extract! channel, :id, :channel_name, :server_id, :channel_type
      end
    end
  end
  

  #render the messages of the first channel in the in the server
# this logic will basically be the same for channels dm channels and servers
# messages = @server.channels.first.messages.includes(:user)
  


  json.messages do 
    messages = @server.channels.order(:id).first.messages.includes(:user)
    messages.each do |message|
      json.set! message.id do
        #get eastern time zone
        est = Time.zone.utc_to_local(message.created_at)
        est = est + 4.hours
        json.created_at est.strftime("%-m/%-d/%Y %-I:%M:%S %p")
        json.extract! message, :id, :channel_id, :author_id, :body
        json.authorName message.user.username
        # json.author do
        #   json.set! message.user.id do
        #   json.authorName message.user.username
        #   json.color_tag message.user.color_tag
        #   json.photo url_for(message.user.photo) if message.user.photo.attached?
        #   end
        # end
      end
    end
  end
  