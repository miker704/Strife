

export const createServerMembership = (membership) => $.ajax({ url: "/api/servers/", method: "GET", data: { user: userId } });
export const deleteServerMembership = (membershipId,membership) => $.ajax({ url: "/api/servers/", method: "GET", data: { user: userId } });