import * as ChannelMembershipAPI from "../utils/channel_membership_api_util.js";

export const RECEIVE_CHANNEL_MEMBERSHIP = "RECEIVE_CHANNEL_MEMBERSHIP";
export const REMOVE_CHANNEL_MEMBERSHIP = "REMOVE_CHANNEL_MEMBERSHIP";


export const receiveChannelMembership = channelmembership => {
    return {
        type: RECEIVE_CHANNEL_MEMBERSHIP,
        channelmembership
    }
}
export const removeChannelMembership = (channelmembershiphash) => {
    return {
        type: REMOVE_CHANNEL_MEMBERSHIP,
        channelmembershiphash
    }
}

export const createChannelMembership = (channelmembership) => (dispatch) => 
ChannelMembershipAPI.createChannelMembership(channelmembership).then((channelmembership) => 
dispatch(receiveChannelMembership(channelmembership)))


 export const deleteChannelMembership = (channelmembershipId,channelmembership) => (dispatch) => 
 ChannelMembershipAPI.deleteChannelMembership(channelmembershipId,channelmembership).then((channelmembershiphash) =>
  dispatch(removeChannelMembership(channelmembershiphash)))