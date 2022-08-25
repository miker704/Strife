

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
        if (user.friend_request_status === status) {
            friends.push(user);
        }
    }
    for (let user of friends) {
        if (user.online === false) {
            friends.pop();
        }
    }

    return friends.sort((a, b) => a.username > b.username ? 1 : -1);
}