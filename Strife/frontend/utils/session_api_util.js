
//create ajax requests for routes and action handling 

//create account
export const signUp = (user) => $.ajax({ url: "/api/users/", method: "POST", data: { user } });

export const signIn = (user) => $.ajax({ url: "/api/session", method: "POST", data: { user } });

export const signOut = () => $.ajax({ url: "/api/session", method: "DELETE" });

// for updating a user info 
export const updateUser = (user) => $.ajax({ url: `/api/users/${user.id}/`, method: "PATCH", data:{user}});

// delete a user - >> this probably wont be used at all mostly as a test 

// export const sendUsertoBanWorld = (userId) => $.ajax({ url: `/api/users/${userId}/`, method: "DELETE"});
export const removeUser = (userId) => $.ajax({ url: `/api/users/${userId}/`, method: "DELETE"});


//user search 

export const searchUsers = () => ajax({ url: "/api/users/", method: "GET" });