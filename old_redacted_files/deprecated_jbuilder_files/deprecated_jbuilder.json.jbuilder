#channels old messages


# json.messages do 
#     messages = @channel.messages.includes(:user)
#     messages.each do |message|
#       json.set! message.id do
#         #get eastern time zone
#         est = Time.zone.utc_to_local(message.created_at)
#         est = est + 4.hours
#         json.created_at est.strftime("%-m/%-d/%Y %-I:%M:%S %p")
#         json.extract! message, :id, :channel_id, :author_id, :body
#         json.authorName message.user.username
#         json.modTime message.message_Info
#         json.rawTime message.created_at
#         json.creation_time message.message_time_stamp_slashes
#       end
#     end
#   end
  


#   json.messages do 
#     messages = @channel.messages.includes(:user)
#     messages.each do |message|
#       json.set! message.id do
#         #get eastern time zone
#         est = Time.zone.utc_to_local(message.created_at)
#         est = est + 4.hours
#         json.created_at est.strftime("%-m/%-d/%Y %-I:%M:%S %p")
#         json.extract! message, :id, :channel_id, :author_id, :body
#         json.authorName message.user.username
#         json.modTime message.message_Info
#         json.rawTime message.created_at
#         json.creation_time message.message_time_stamp_slashes
#         json.author do
#           json.set! message.user.id do
#               json.authorName message.user.username
#               json.color_tag message.user.color_tag
#               json.strife_id_tag message.user.strife_id_tag
#               json.authorId message.user.id
#               json.photo url_for(message.user.photo) if message.user.photo.attached?
#           end
#       end
#       end
#     end
#   end

# latest channel show messages

# json.messages do 
#     messages = @channel.messages.includes(:user)
#     messages.each do |message|
#       json.set! message.id do
#         #get eastern time zone
#         est = Time.zone.utc_to_local(message.created_at)
#         est = est + 4.hours
#         json.created_at est.strftime("%-m/%-d/%Y %-I:%M:%S %p")
#         json.extract! message, :id, :channel_id, :author_id, :body
#         json.authorName message.user.username
#         # json.modTime message.message_Info
#         # json.rawTime message.created_at
#         # json.creation_time message.message_time_stamp_slashes
#       end
#     end
#   end
  


#server show

# json.server do 
#     json.general_channel_id @server.channels.order(:id).first.id
#     # json.general_channel_id @server.channels.first.id
#     json.extract! @server, :id, :server_name, :server_owner_id, :public, :server_icon, :invite_code
#   end



#server show messages


#   json.messages do 
#     messages = @server.channels.order(:id).first.messages.includes(:user)
#     # messages = @server.channels.first.messages.includes(:user)
#     messages.each do |message|
#       json.set! message.id do
#         #get eastern time zone
#         est = Time.zone.utc_to_local(message.created_at)
#         est = est + 4.hours
#         json.created_at est.strftime("%-m/%-d/%Y %-I:%M:%S %p")
#         json.extract! message, :id, :channel_id, :author_id, :body
#         json.authorName message.user.username

#       end
#     end
#   end
  

  
#   json.messages do 
#     messages = @server.channels.order(:id).first.messages.includes(:user)
#     # messages = @server.channels.first.messages.includes(:user)
#     messages.each do |message|
#       json.set! message.id do
#         #get eastern time zone
#         est = Time.zone.utc_to_local(message.created_at)
#         est = est + 4.hours
#         json.created_at est.strftime("%-m/%-d/%Y %-I:%M:%S %p")
#         json.extract! message, :id, :channel_id, :author_id, :body
#         json.authorName message.user.username
#         json.author do
#           json.set! message.user.id do
#           json.authorName message.user.username
#           json.color_tag message.user.color_tag
#           json.photo url_for(message.user.photo) if message.user.photo.attached?
#           end
#         end
#       end
#     end
#   end



#json _message.json.jubuilder

# # json.extract! message, :id, :channel_id, :author_id, :created_at, :body
# json.extract! message, :id, :channel_id, :author_id, :body
# json.created_at message.message_time_stamp_slashes
# json.modTime message.message_Info
# json.authorName message.user.username
# json.rawTime message.created_at
# json.date message.created_at.localtime.strftime("%D")
# json.time message.created_at.localtime.strftime("%I:%M%p")
# json.seconds message.created_at.localtime.to_i


# # json.author do
# #     json.set! message.user.id do
# #         json.authorName message.user.username
# #         json.color_tag message.user.color_tag
# #         json.strife_id_tag message.user.strife_id_tag
# #         json.authorId message.user.id
# #         json.photo url_for(message.user.photo) if message.user.photo.attached?
# #     end
# # end




#dmServer json _dm_Messages

# json.extract! dm_message, :id, :dm_server_id, :sender_id, :body, :parent_message_id, :created_at
# json.authorName dm_message.message_creator.username


# json.extract! dm_message, :id, :dm_server_id, :sender_id, :body, :parent_message_id, :created_at
# json.authorName dm_message.message_creator.username
# json.author do
#     json.set! dm_message.message_creator.id do
#         # json.partial! 'api/users/user', user: dm_message.message_creator 
#         json.authorName dm_message.message_creator.username
#         json.color_tag dm_message.message_creator.color_tag
#         json.strife_id_tag dm_message.message_creator.strife_id_tag
#         json.authorId dm_message.message_creator.id
#         json.photo url_for(dm_message.message_creator.photo) if dm_message.message_creator.photo.attached?
#     end
# end



#dmServer show dmServer Messages
# json.dm_messages do
#     @dm_server.dm_messages.each do |dm_message|
#       json.set! dm_message.id do
#         # get eastern time zone of the direct_message this is similar to how regular messages worked in
#         # normal servers and channels controllers
#         est = Time.zone.utc_to_local(dm_message.created_at)
#         est += 4.hours
#         json.created_at est.strftime('%-m/%-d/%Y %-I:%M:%S %p')
#         json.extract! dm_message, :id, :dm_server_id, :sender_id, :body, :parent_message_id
#         json.authorName dm_message.message_creator.username
  
#       end
#     end
#   end
  

# json.dm_messages do
#     @dm_server.dm_messages.each do |dm_message|
#       json.set! dm_message.id do
#         # get eastern time zone of the direct_message this is similar to how regular messages worked in
#         # normal servers and channels controllers
#         est = Time.zone.utc_to_local(dm_message.created_at)
#         est += 4.hours
#         json.created_at est.strftime('%-m/%-d/%Y %-I:%M:%S %p')
#         json.extract! dm_message, :id, :dm_server_id, :sender_id, :body, :parent_message_id
#         json.authorName dm_message.message_creator.username
  
#         json.author do
#           json.set! dm_message.message_creator.id do
#           #   json.partial! 'api/users/user', user: dm_message.message_creator
#           json.authorName dm_message.message_creator.username
#           json.color_tag dm_message.message_creator.color_tag
#           json.photo url_for(dm_message.message_creator.photo) if dm_message.message_creator.photo.attached?
#           end
#         end
#       end
#     end
#   end
  
#dmServer users from show.json dmserver file changed to members and moved to 
#_dmServer

# json.users do
#   @dm_server.members.each do |member|
#     json.set! member.id do
#       json.partial! 'api/users/user', user: member
#       json.photo url_for(member.photo) if member.photo.attached?
#     end
#   end
# end




#dmMessage show jbuilder file old

# json.extract! @dm_message, :id, :dm_server_id, :sender_id, :body, :parent_message_id, :created_at
# json.authorName @dm_message.message_creator.username

# json.dm_message do
#     json.partial! 'api/dm_messages/dm_message', dm_message: @dm_message
# end

# json.author do
#     json.set! @dm_message.message_creator.id do
#         json.partial! 'api/users/user', user: @dm_message.message_creator 
#         json.photo url_for(@dm_message.message_creator.photo) if @dm_message.message_creator.photo.attached?
#     end
# end
# json.author do
#     json.set! @dm_message.message_creator.id do
#         # json.partial! 'api/users/user', user: dm_message.message_creator 
#         json.authorName @dm_message.message_creator.username
#         json.color_tag @dm_message.message_creator.color_tag
#         json.strife_id_tag @dm_message.message_creator.strife_id_tag
#         json.authorId @dm_message.message_creator.id
#         json.photo url_for(@dm_message.message_creator.photo) if @dm_message.message_creator.photo.attached?
#     end
# end


# using template json parse
# json.dm_message do
#     json.partial! 'api/dm_messages/dm_message', dm_message: dm_message
# end