export const requestFriendships = () => $.ajax({ url: `/api/friendships/`, method: 'GET' });
export const createFriendship = (account_ids) => $.ajax({ url: `/api/friendships/`, method: 'POST', data: { friendship: account_ids } })


export const updateFriendship = (account_ids) => 
$.ajax({
    url: `/api/friendships/`,
    method: "PATCH",
    data: {friendship: account_ids}
});


export const deleteFriendship = (account_ids) => 
$.ajax({
    url: `/api/friendships/`,
    method: "DELETE",
    data: {friendship: account_ids}
});

//i am pausing dev on friendships rn as its not as important right now