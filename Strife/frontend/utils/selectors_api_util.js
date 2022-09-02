

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


export const selectAllFriends = (state, status) => {
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
    for (let friend of Object.values(state.entities.friendships)) {
        if (friend.friend_request_status === status && friend.online === true) {
            onlineFriends.push(friend);
        }
    }

    return onlineFriends.sort((a, b) => a.username > b.username ? 1 : -1);
}

export const selectFriendRequests = (state, status) => {
    const friendRequests = [];
    for (let friend of Object.values(state.entities.friendships)) {
        if (friend.friend_request_status === status) {
            friendRequests.push(friend);
        }
    }
    return friendRequests.sort((a, b) => a.username > b.username ? 1 : -1);
}

export const selectBlockedUsers = (state, status) => {
    const blockedUsers = [];
    for (let blockedUser of Object.values(state.entities.friendships)) {
        if (blockedUser.friend_request_status === status) {
            blockedUsers.push(blockedUser);
        }
    }

    return blockedUsers.sort((a, b) => a.username > b.username ? 1 : -1);
}



export const selectDmMembers = (state,id) => {
    // const dmMembers = state.entities.dmServers[id]?.members;
    // if (!dmMembers) {
    //     console.log("failed");
    //     return [];
    // }
    const members = [];
    for (let member of Object.values(state.entities.dmServers)) {
        members.push(state.entities.user[member.id]);
    }


    return members.sort((a, b) => a.username > b.username ? 1 : -1);
};