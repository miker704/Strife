json.extract! @server_Membership, :id, :user_id, :server_id
json.serverJoinedDate  @server_Membership.date_joined
json.serverJoinedDateUpc  @server_Membership.date_joined_for_upc
# json.serverMemberInfo do
#     json.set! @server_Membership.user.id do
#         json.partial! 'api/users/user', user: @server_Membership.user
#     end
# end
