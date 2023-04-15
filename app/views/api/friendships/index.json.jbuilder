
@user.friends.each do |friend|
    json.set! friend.id do
        json.partial! 'api/users/user', user: friend
    end
end

@user.outgoing_friend_requests.each do |outgoing|
    json.set! outgoing.id do 
        json.partial! 'api/users/user', user: outgoing
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

@user.blocked_by.each do |blocked_by|
    json.set! blocked_by.id do
        json.partial! 'api/users/user', user: blocked_by
    end
end