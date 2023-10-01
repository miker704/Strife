import * as ServerMembershipAPI from "../utils/server_membership_api_util.js"

export const RECEIVE_SERVER_MEMBERSHIP = "RECEIVE_SERVER_MEMBERSHIP";
export const REMOVE_SERVER_MEMBERSHIP = "REMOVE_SERVER_MEMBERSHIP";
// export const INVITE_TO_SERVER = "INVITE_TO_SERVER";
export const RECEIVE_SERVER_MEMBERSHIP_INJEXTION = "RECEIVE_SERVER_MEMBERSHIP_INJEXTION";


export const receiveServerMembership = servermembership => {
    return {
        type: RECEIVE_SERVER_MEMBERSHIP,
        servermembership
    }
}

export const receiveServerMembershipViaInjextion = servermembership => {
    return {
        type: RECEIVE_SERVER_MEMBERSHIP_INJEXTION,
        servermembership
    }
}


export const removeServerMembership = (membershiphash) => {
    return {
        type: REMOVE_SERVER_MEMBERSHIP,
        membershiphash
    }
}


// export const inviteToServer = () => {
//     return {
//         type: INVITE_TO_SERVER
//     }
// }


// export const createServerMembership = (servermembership) => (dispatch) => 
// ServerMembershipAPI.createServerMembership(servermembership).then((servermembership) => {
//     dispatch(inviteToServer());
//     return dispatch(receiveServerMembership(servermembership));
// })


export const createServerMembership = (servermembership) => (dispatch) =>
    ServerMembershipAPI.createServerMembership(servermembership).then((servermembership) =>
        dispatch(receiveServerMembership(servermembership)))


// export const deleteServerMembership = (servermembershipId, servermembership) => (dispatch) =>
//     ServerMembershipAPI.deleteServerMembership(servermembershipId, servermembership).then((membershiphash) => dispatch(removeServerMembership(membershiphash)))

export const createServerMembershipViaInjectionOfDmMembers = (servermembership) => (dispatch) =>
    ServerMembershipAPI.createServerMembershipViaInjectionOfDmMembers(servermembership).then((servermembership) =>
        dispatch(receiveServerMembershipViaInjextion(servermembership)))


export const deleteServerMembership = (servermembershipId, servermembership) => (dispatch, getState) =>
    ServerMembershipAPI.deleteServerMembership(servermembershipId, servermembership).then(membershiphash => {
        const state = getState();
        return dispatch(removeServerMembership(Object.assign({}, membershiphash, { currentUserId: state.session.id })))
    })