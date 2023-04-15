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

export const requestAllOnlineFriends = () => $.ajax({ url: `/api/friendships/`, method: 'GET' });
export const requestFriendRequests = () => $.ajax({ url: `/api/friendships/`, method: 'GET' });
export const requestBlockedUsers = () => $.ajax({ url: `/api/friendships/`, method: 'GET' });
export const requestAllFriendships = () => $.ajax({ url: `/api/friendships/`, method: 'GET' });


export const blockUser = (account_ids) =>
    $.ajax({
        url: `/api/friendships/blockuser/`,
        method: "POST",
        data: { friendship: account_ids }
    });

export const unBlockUser = (account_ids) =>
    $.ajax({
        url: `/api/friendships/unblockuser/`,
        method: "PATCH",
        data: { friendship: account_ids }
    });
