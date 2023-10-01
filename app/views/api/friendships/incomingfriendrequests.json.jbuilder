@user.incoming_friend_requests.each do |incoming|
    json.set! incoming.id do
        json.partial! 'api/users/user', user: incoming
    end
end
