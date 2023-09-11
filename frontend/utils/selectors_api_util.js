

export const selectFriendStatus = (state, status) => {
    const friends = [];
    for (let user of Object.values(state.entities.users)) {
        if (user.friend_request_status === status) {
            friends.push(user);
        }
    }
    return friends.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1);
}

export const extractFriendState = (state) => {
    const friends = [];
    for (let user of Object.values(state.entities.users)) {
        if (user.friend_request_status === status) {
            friends.push(user);
        }
    }
    return friends.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1);
}





export const selectFriendStatusOnline = (state, status) => {
    const friends = [];
    for (let user of Object.values(state.entities.users)) {
        if (user.friend_request_status === status && user.online === true) {
            friends.push(user);
        }
    }

    return friends.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1);
}


export const selectAllFriends = (state, status) => {
    const allFriends = [];
    for (let friend of Object.values(state.entities.friendships)) {
        if (friend.friend_request_status === status) {
            allFriends.push(friend);
        }
    }
    return allFriends.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1);
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
    return allFriends.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1);
}



/**
 * Function to return friends of the current user that are online
 * @param {Redux_State} state - Friendship State from Redux Store
 * @param {Number} status - status of friend (3)
 * @returns {(Array.<{id:Number,username:String,email:String,online:boolean,strife_id_tag:String,
* photo: URL.<String> | undefined,color_tag: Number,friend_request_status:Number,}>|[])}
* An Array of Objects containing State data of friends of the current user that are online.
* Data is returned sorted by usernames in alphabetical order
* returns an empty array ([]) if no data can be obtained.
* NOTE: REQUIRES the FRIENDSHIP STATE TO CONTAIN DATA! Dispatch to fetch a users friends of the state is empty 
* It is not necessary to call a dispatch everytime before using this function only when the
* state is empty. 
*/
export const selectOnlineFriends = (state, status) => {
    const onlineFriends = [];
    for (let friend of Object.values(state.entities.friendships)) {
        if (friend.friend_request_status === status && friend.online === true) {
            onlineFriends.push(friend);
        }
    }

    return onlineFriends.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1);
}

export const selectFriendRequests = (state, status) => {
    const friendRequests = [];
    for (let friend of Object.values(state.entities.friendships)) {
        if (friend.friend_request_status === status) {
            friendRequests.push(friend);
        }
    }
    return friendRequests.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1);
}

export const selectBlockedUsers = (state, status) => {
    const blockedUsers = [];
    for (let blockedUser of Object.values(state.entities.friendships)) {
        if (blockedUser.friend_request_status === status) {
            blockedUsers.push(blockedUser);
        }
    }

    return blockedUsers.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1);
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








/**
 * Function to return the first channel of a server if it exists.
 * @param {Result_From_Redux_$AJAX_Dispatch} result.channels - result from redux ajax dipatch take the channels from server
 * @returns {Number}
 * returns a number indicating the the id of the first channel in the server. if there are no channels in this server
 * returns a -1 indicating that the user must teleport to just the server itself
*/
export const firstChannelId = channels => {
    ("channels", channels)
    const channelIds = Object.values(channels).map(channel => channel.id);
    return Math.min(...channelIds);
};



//Deprecated - DO NOT USE MODIFIES ACTUAL REDUX STATE

export const selectAllFriendsStartConversationVersion = (state, status) => {
    const allFriends = [];
    for (let friend of Object.values(state.entities.friendships)) {
        if (friend.friend_request_status === status) {
            friend.TYPE = "FRIEND";
            friend.searchQuery = "@";
            allFriends.push(friend);
        }
    }
    return allFriends.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1);
}

//Deprecated - DO NOT USE MODIFIES ACTUAL REDUX STATE

export const extractChannelsFromAllServers = (state, get_channel_type) => {

    let allChannels = [];
    const getChannels = Object.values(state.entities.servers).map((server, idx) => {
        for (let channel of Object.values(server.channels)) {
            channel.server_name = server.server_name;
            channel.username = channel.channel_name;
            if (channel.channel_type === 1) {
                channel.TYPE = "TEXT_CHANNEL";
                channel.searchQuery = "#";
            }
            else {
                channel.TYPE = "VOICE_CHANNEL";
                channel.searchQuery = "!";
            }
        }
        return Object.values(server.channels);
    }).flat(Infinity);

    allChannels = getChannels.filter((channel) => channel.channel_type === get_channel_type);
    return allChannels;
}

//Deprecated - DO NOT USE MODIFIES ACTUAL REDUX STATE

export const extractServersForStartConversationModal = (state) => {
    let allServers = [];
    const extractServers = Object.values(state.entities.servers).map((server, idx) => {
        server.TYPE = "SERVER";
        server.username = server.server_name;
        server.searchQuery = "*";
    })
    allServers = extractServers;
    return allServers;
}






//Deprecated - DO NOT USE MODIFIES ACTUAL REDUX STATE

const generateDmServerIconColor = (dmServer, currentUser) => {

    let membersOfThisDmS = Object.values(dmServer.members);
    let color_tag = "";
    if (membersOfThisDmS.length === 2) {
        let user = membersOfThisDmS.filter(member => member.id !== currentUser.id);
        color_tag = user[0].color_tag;
    }
    else if (membersOfThisDmS.length > 2) {
        let user = membersOfThisDmS.at(-1);
        color_tag = user.color_tag;
    }
    return color_tag;
}

//Deprecated - DO NOT USE MODIFIES ACTUAL REDUX STATE

const generateDmServerName = (dmServer, currentUser) => {
    let displayName = "";
    if (dmServer.dm_server_name === null) {
        displayName = Object.values(dmServer.members).filter(member => member.id !== currentUser.id).map(member => member.username).join(", ");
    }
    else if (dmServer.dm_server_name !== null || dmServer.dm_server_name !== undefined || dmServer.dm_server_name !== "") {
        displayName = dmServer.dm_server_name;
    }
    return displayName;
}



//Deprecated - DO NOT USE MODIFIES ACTUAL REDUX STATE
export const extractDmServersForStartConversationModal = (dmServers, currentUser) => {
    let allDmServers = [];
    // let currentUser = state.currentUser;
    let allDMS = dmServers;

    const extractDmServers = allDMS.map((dmServer, idx) => {
        dmServer.username = generateDmServerName(dmServer, currentUser);
        dmServer.color_tag = generateDmServerIconColor(dmServer, currentUser);
        dmServer.TYPE = "DM_SERVER";
        dmServer.searchQuery = "$";
    })
    allDmServers = extractDmServers;
    return allDmServers;
}  