json.extract! @friendship, :id, :user_id, :friend_id, :friend_request_status
json.friendinfo do
    json.set! @friendship.friend.id do
        json.username @friendship.friend.username
        json.color_tag @friendship.friend.color_tag
        json.strife_id_tag @friendship.friend.strife_id_tag
        json.id @friendship.friend.id
        json.email @friendship.friend.email
        json.photo url_for(@friendship.friend.photo) if @friendship.friend.photo.attached?
    end
end