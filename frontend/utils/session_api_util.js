
//create ajax requests for routes and action handling 

//create account
export const signUp = (user) => $.ajax({ url: "/api/users/", method: "POST", data: { user } });

export const signIn = (user) => $.ajax({ url: "/api/session", method: "POST", data: { user } });

export const signOut = () => $.ajax({ url: "/api/session", method: "DELETE" });

// for updating a user info 
export const updateUser = (user) => $.ajax({ url: `/api/users/${user.id}/`, method: "PATCH", data: { user } });

// delete a user - >> this probably wont be used at all mostly as a test 

// export const sendUsertoBanWorld = (userId) => $.ajax({ url: `/api/users/${userId}/`, method: "DELETE"});
//chnaging params as we are using password before deleting
export const removeUser = (userId) => $.ajax({ url: `/api/users/${userId}/`, method: "DELETE" });

//user search 

export const searchUsers = (username) => $.ajax({ url: `/api/search/${username}`, method: "GET" });


export const removePhoneNumber = (user) => $.ajax({ url: `/api/users/${user.id}/removephone/`, method: "PATCH", data: { user } });

export const changePassword = (user) => $.ajax({ url: `/api/users/${user.id}/changePassword/`, method: "PATCH", data: { user } });

export const changeUserPFP = (userId, formData) =>
    $.ajax({
        url: `/api/users/${userId}/changeUserPFP/`,
        method: "PATCH",
        data: formData,
        contentType: false,
        processData: false
    });


export const changeUserBanner = (userId, formData) =>
    $.ajax({
        url: `/api/users/${userId}/changeUserBanner/`,
        method: "PATCH",
        data: formData,
        contentType: false,
        processData: false
    });



export const disableAccount = (user) => $.ajax({ url: `/api/users/${user.id}/disableAccount/`, method: "PATCH", data: { user } });

export const reSyncCurrentUser = (userId) => $.ajax({ url: `/api/users/${userId}/`, method: "GET" });
export const fetchUser = (userId) => $.ajax({ url: `/api/users/${userId}/`, method: "GET" });
export const fetchUsers = () => $.ajax({ url: `/api/users/`, method: "GET" });
export const fetchUserByStrifeId = (user_strife_id_tag) => $.ajax({ url: `/api/fetchbystrifeId/${user_strife_id_tag}`, method: "GET", data: { user_strife_id_tag } });
export const fetchUserByUserNameOrStrifeID = (user) => $.ajax({ url: `/api/fetchbyuserbynameorIdTag/`, method: "GET", data: { user } });
export const fetchUserFullData = (userId) => $.ajax({ url: `/api/users/${userId}/extractData/`, method: "GET" });
export const fetchMutualFriends = (account_ids) => $.ajax({ url: `/api/users/${account_ids['userId']}/mutualFriends/`, method: "GET", data:  account_ids });
export const fetchMutualServers = (account_ids) => $.ajax({ url: `/api/users/${account_ids['userId']}/mutualServers/`, method: "GET", data:  account_ids });