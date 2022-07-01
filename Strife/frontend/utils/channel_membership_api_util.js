

export const createChannelMembership = (membership) => 
$.ajax({ url: "/api/channel_memberships/", method: "POST", data: { channel_membership: membership } });


export const deleteChannelMembership = (channelmembershipId,channelmembership) => 
$.ajax({ url: `/api/channel_membership/${channelmembershipId}`, method: "DELETE", data: { channel_membership: channelmembership } });