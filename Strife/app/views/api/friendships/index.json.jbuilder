json.partial! 'api/users/user', user: friends_ongoing
end
end


@user.friends_incoming.each do |incoming_request|
    json.set! incoming_request.id do
        json.partial! 'api/users/user', user: incoming_request
    end
end