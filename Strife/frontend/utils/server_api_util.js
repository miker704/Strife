

export const fetchServers = (userId) =>  $.ajax({ url: "/api/servers/", method: "GET", data: { user: userId } });

export const fetchServer = (serverId) =>  $.ajax({ url: `/api/servers/${serverId}`, method: "GET" });
