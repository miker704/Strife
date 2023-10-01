json.extract! dm_message, :id, :dm_server_id, :sender_id, :body, :parent_message_id
json.authorName dm_message.message_creator.username
json.author_color_tag dm_message.message_creator.color_tag
json.author_avatar url_for(dm_message.message_creator.photo) if dm_message.message_creator.photo.attached?
json.created_at dm_message.dm_message_time_stamp_slashes
json.full_time_stamp dm_message.created_at.localtime.strftime("%A, %B %d, %Y %I:%M %p")
json.date dm_message.created_at.localtime.strftime("%B %d, %Y")
json.time dm_message.created_at.localtime.strftime("%I:%M%p")
json.seconds dm_message.created_at.localtime.to_i