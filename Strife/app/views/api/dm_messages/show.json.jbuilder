json.extract! @dm_message, :id, :dm_server_id, :sender_id, :body, :parent_message_id, :created_at
json.authorName @dm_message.message_creator.username
# json.author do
#     json.set! @dm_message.message_creator.id do
#         json.partial! 'api/users/user', user: @dm_message.message_creator 
#         json.photo url_for(@dm_message.message_creator.photo) if @dm_message.message_creator.photo.attached?
#     end
# end
