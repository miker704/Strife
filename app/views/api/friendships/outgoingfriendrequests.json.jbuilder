@user.outgoing_friend_requests.each do |outgoing|
    json.set! outgoing.id do 
        json.partial! 'api/users/user', user: outgoing
    end
end