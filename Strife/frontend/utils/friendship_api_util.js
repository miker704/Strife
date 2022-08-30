export const requestFriendships = () => $.ajax({ url: `/api/friendships/`, method: 'GET' });
export const createFriendship = (account_ids) => $.ajax({ url: `/api/friendships/`, method: 'POST', data: { friendship: account_ids } })


export const updateFriendship = (account_ids) =>
    $.ajax({
        url: `/api/friendships/`,
        method: "PATCH",
        data: { friendship: account_ids }
    });


export const deleteFriendship = (account_ids) =>
    $.ajax({
        url: `/api/friendships/`,
        method: "DELETE",
        data: { friendship: account_ids }
    });

export const receiveOnlineFriends = () => $.ajax({ url: `/api/friendships/`, method: 'GET' });

