@user.friends.each do |friend|
    json.set! friend.id do
        json.partial! 'api/users/user', user: friend
    end
end

# @user.friends.order("lower(username)").each do |friend|
#     json.set! friend.id do 
#         json.partial! 'api/users/user', user: friend
#     end
# end