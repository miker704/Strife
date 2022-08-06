

export const fetchServers = (userId) =>  $.ajax({ url: "/api/servers/", method: "GET", data: { user: userId } });

export const fetchServer = (serverId) =>  $.ajax({ url: `/api/servers/${serverId}`, method: "GET" });

export const createServer = (server) =>  $.ajax({ url: `/api/servers/`, method: "POST", data:{server:server} });


export const updateServer = (server) =>  $.ajax({ url: `/api/servers/${server.id}`, method: "PATCH", data:{server:server} });

export const deleteServer = (serverId) =>  $.ajax({ url: `/api/servers/${serverId}`, method: "DELETE" });

export const joinServer = (inviteCode) => $.ajax({url: `/api/servers/join`, method: "POST", data:{inviteCode}});