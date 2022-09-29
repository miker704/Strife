json.extract! message, :id, :channel_id, :author_id, :created_at, :body
json.modTime message.message_Info
json.authorName message.user.username
# json.author do
#     json.set! message.user.id do
#         json.authorName message.user.username
#         json.color_tag message.user.color_tag
#         json.strife_id_tag message.user.strife_id_tag
#         json.authorId message.user.id
#         json.photo url_for(message.user.photo) if message.user.photo.attached?
#     end
# end