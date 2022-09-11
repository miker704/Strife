

export const createServerMembership = (membership) => $.ajax({ url: "/api/server_memberships/", method: "POST", data: { server_membership: membership } });
export const deleteServerMembership = (servermembershipId,servermembership) => $.ajax({ url: `/api/server_memberships/${servermembershipId}`, method: "DELETE", data: { server_membership: servermembership } });