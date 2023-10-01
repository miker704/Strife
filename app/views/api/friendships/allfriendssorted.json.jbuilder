json.all_friends do
    @user.friends.each do |friend|
        json.set! friend.id do
            json.partial! 'api/users/user', user: friend
        end
    end
end


json.offline_friends do
    @user.friends.each do |friend|
        json.set! friend.id do
            if friend.online == false
                json.partial! 'api/users/user', user: friend
            end
        end
    end
end

json.online_friends do
    @user.friends.each do |friend|
        json.set! friend.id do
            if friend.online == true
                json.partial! 'api/users/user', user: friend
            end
        end
    end
end


json.outgoing_friend_requests do
    @user.outgoing_friend_requests.each do |outgoing|
        json.set! outgoing.id do 
            json.partial! 'api/users/user', user: outgoing
        end
    end
end

json.incoming_friend_requests do

    @user.incoming_friend_requests.each do |incoming|
        json.set! incoming.id do
            json.partial! 'api/users/user', user: incoming
        end
    end
end

json.blocked_users do

    @user.blocked_users.each do |blocked_user|
        json.set! blocked_user.id do 
            json.partial! 'api/users/user', user: blocked_user
        end
    end
end

json.blocked_by_users do
    @user.blocked_by.each do |blocked_by|
        json.set! blocked_by.id do
            json.partial! 'api/users/user', user: blocked_by
        end
    end
end
