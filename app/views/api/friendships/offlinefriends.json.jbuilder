@user.friends.each do |friend|
    json.set! friend.id do
        if friend.online == false
            json.partial! 'api/users/user', user: friend
        end
    end
end