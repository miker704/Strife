
@user.friends.each do |friend|
    json.set! friend.id do
        json.partial! 'api/users/user', user: friend
    end
end

@user.ongoing_friend_requests.each do |ongoing|
    json.set! ongoing.id do 
        json.partial! 'api/users/user', user: ongoing
    end
end

@user.incoming_friend_requests.each do |incoming|
    json.set! incoming.id do
        json.partial! 'api/users/user', user: incoming
    end
end


@user.blocked_users.each do |blocked_user|
    json.set! blocked_user.id do 
        json.partial! 'api/users/user', user: blocked_user
    end
end