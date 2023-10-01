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

export const requestAllOnlineFriends = (userId) => $.ajax({ url: `/api/friendships/${userId}/onlinefriends/`, method: 'GET' });
export const requestAllOfflineFriends = (userId) => $.ajax({ url: `/api/friendships/${userId}/offlinefriends/`, method: 'GET' });
export const requestAllLevelThreeFriends = (userId) => $.ajax({ url: `/api/friendships/${userId}/allfriends/`, method: 'GET' });

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


export const fetchAllFriendsSorted = (userId) =>
    $.ajax({
        url: `/api/friendships/${userId}/allfriendssorted`,
        method: "GET",
    });