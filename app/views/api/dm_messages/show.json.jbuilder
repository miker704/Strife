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
json.dm_message do
    json.partial! 'api/dm_messages/dm_message', dm_message: dm_message
end