

export const createDmMember = (dm_member) => 
$.ajax({ url: "/api/dm_members/", method: "POST", data: { dm_member: dm_member } });


export const deleteDmMember = (dm_memberId,dm_member) => 
$.ajax({ url: `/api/dm_members/${dm_memberId}`, method: "DELETE", data: { dm_member: dm_member } });

export const fetchDmMemberShipStatus = (dm_member) => 
$.ajax({ url: "/api/dm_members/dms_status", method: "GET", data: { dm_member: dm_member } });