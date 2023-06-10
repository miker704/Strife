

export const selectFriendStatus = (state, status) => {
    const friends = [];
    for (let user of Object.values(state.entities.users)) {
        if (user.friend_request_status === status) {
            friends.push(user);
        }
    }
    return friends.sort((a, b) => a.username > b.username ? 1 : -1);
}

export const extractFriendState = (state) => {
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


/**
 * Function to return any relationship(s) that are connected between the current user and others
 * @param {Redux_State} state - Friendship State from Redux Store
 * @param {Number} status - status of friend from range [-2,-1,0,1,2,3](-2 is not a usable attribute)
 * @returns {(Array.<{id:Number,username:String,email:String,online:boolean,strife_id_tag:String,
 * photo: URL.<String> | undefined,color_tag: Number,friend_request_status:Number,}>|[])}
 * An Array of Objects containing State data of users that have some relation with the current user.
 * Data is returned sorted by usernames in alphabetical order
 * returns an empty array ([]) if no data can be obtained.
 * NOTE: REQUIRES the FRIENDSHIP STATE TO CONTAIN DATA! Dispatch to fetch a users friends of the state is empty 
 * It is not necessary to call a dispatch everytime before using this function only when the
 * state is empty. 
 */
export const selectFriendsViaStatusType = (state, status) => {
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



export const selectDmMembers = (state, id) => {
    const memberIds = state.entities.dmServers[id]?.members;
    if (!memberIds) {
        return [];
    }
    else {

        return memberIds;
    }

};


export const extractDmServerProps = (state, id) => {
    const dmsprops = state.entities.dmServers[id]
    if (!dmsprops) {
        return [];
    }
    else {
        return dmsprops;
    }

};



export const receiveUnexploredServers = (state) => {
    if (!state.entities.servers) {

        return state;
    }
    if (!state.unExploredServers) {
        return state;
    }

    const currentUserAuthIds = [1, 2, 3, 4];
    const currentUser = state.currentUser;
    const unExploredServers = state.unExploredServers;
    let showServers = new Object();
    if (currentUserAuthIds.includes(currentUser.id)) {
        return unExploredServers
    }
    else {
        for (let [id, server] of Object.entries(unExploredServers)) {

            if (server.public === true) {
                showServers[id] = server
            }

        }
    }
    return showServers;
}
