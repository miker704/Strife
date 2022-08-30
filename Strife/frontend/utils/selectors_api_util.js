

export const selectFriendStatus = (state, status) => {
    const friends = [];
    for (let user of Object.values(state.entities.users)) {
        if (user.friend_request_status === status) {
            friends.push(user);
        }
    }
    return friends.sort((a, b) => a.username > b.username ? 1 : -1);
}

export const selectFriendStatusOnline = (state, status) => {
    const friends = [];
    for (let user of Object.values(state.entities.users)) {
        if (user.friend_request_status === status && user.online === true) {
            friends.push(user);
        }
    }
  
    return friends.sort((a, b) => a.username > b.username ? 1 : -1);
}


export const selectFriends = (state, status) => {
    const allFriends = [];
    for (let friend of Object.values(state.entities.friendships)) {
        if (friend.friend_request_status === status) {
            allFriends.push(friend);
        }
    }
    return allFriends.sort((a, b) => a.username > b.username ? 1 : -1);
}

export const selectOnlineFriends = (state, status) => {
    const onlineFriends = [];
    for (let user of Object.values(state.entities.friendships)) {
        if (user.friend_request_status === status && user.online === true) {
            onlineFriends.push(user);
        }
    }
  
    return onlineFriends.sort((a, b) => a.username > b.username ? 1 : -1);
}

export const selectFriendRequests = (state, status) => {
    const friendRequests = [];
    for (let user of Object.values(state.entities.friendships)) {
        if (user.friend_request_status === status) {
            friends.push(user);
        }
    }
    return friends.sort((a, b) => a.username > b.username ? 1 : -1);
}

export const selectBlockedUsers = (state, status) => {
    const blockedUsers = [];
    for (let user of Object.values(state.entities.friendships)) {
        if (user.friend_request_status === status && user.online === true) {
            friends.push(user);
        }
    }
  
    return friends.sort((a, b) => a.username > b.username ? 1 : -1);
}