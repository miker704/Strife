

export const createServerMembership = (membership) => $.ajax({ url: "/api/server_memberships/", method: "POST", data: { server_membership: membership } });
export const deleteServerMembership = (servermembershipId, servermembership) => $.ajax({ url: `/api/server_memberships/${servermembershipId}`, method: "DELETE", data: { server_membership: servermembership } });
export const createServerMembershipViaInjectionOfDmMembers = (membership) => $.ajax({ url: "/api/server_memberships/injectviadms/", method: "POST", data: { server_membership: membership } });
export const fetchServerMembership = (membership) => $.ajax({ url: "/api/server_memberships/memberdata/", method: "GET", data: { server_membership: membership } });
export const fetchServerMembershipData = (membership) => $.ajax({ url: `/api/servers/${membership['server_id']}/server_memberships/memberdata/`, method: "GET", data: { server_membership: membership } });
export const fetchIsServerMember = (membership) => $.ajax({ url: `/api/servers/${membership['server_id']}/server_memberships/isservermember/`, method: "GET", data: { server_membership: membership } });
