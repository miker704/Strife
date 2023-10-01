json.extract! message, :id, :channel_id, :author_id, :body
json.authorName message.user.username
json.author_color_tag message.user.color_tag
json.author_avatar url_for(message.user.photo) if message.user.photo.attached?
json.created_at message.message_time_stamp_slashes
json.full_time_stamp message.created_at.localtime.strftime("%A, %B %d, %Y %I:%M %p")
json.date message.created_at.localtime.strftime("%B %d, %Y")
json.time message.created_at.localtime.strftime("%I:%M%p")
json.seconds message.created_at.localtime.to_i