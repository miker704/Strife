

export const createDmMember = (dm_member) =>
    $.ajax({ url: "/api/dm_members/", method: "POST", data: { dm_member: dm_member } });

export const deleteDmMember = (dm_memberId, dm_member) =>
    $.ajax({ url: `/api/dm_members/${dm_memberId}`, method: "DELETE", data: { dm_member: dm_member } });

export const fetchDmMemberShip = (dm_member) =>
    $.ajax({ url: "/api/dm_members/getDmMember/", method: "GET", data: { dm_member: dm_member } });

export const fetchDmMemberShipData = (dm_member) =>
    $.ajax({ url: `/api/dm_servers/${dm_member['dm_server_id']}/dm_members/getDmMemberData/`, method: "GET", data: { dm_member: dm_member } });

export const fetchIsDmMember = (dm_member) =>
    $.ajax({ url: `/api/dm_servers/${dm_member['dm_server_id']}/dm_members/isdmMember/`, method: "GET", data: { dm_member: dm_member } });