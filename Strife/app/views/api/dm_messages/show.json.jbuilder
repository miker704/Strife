json.extract! @dm_message, :id, :dm_server_id, :sender_id, :body, :parent_message_id
json.authorName @dm_message.message_creator.username
