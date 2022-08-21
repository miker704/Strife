# json.array! @users, :username, :profile_pic_url
json.array! (@users) do |user| 
  
    json.username user.username
    json.photo url_for(user.photo) if user.photo.attached?
    
end