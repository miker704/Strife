export const fetchDmServers = (userId) =>
    $.ajax({ url: "/api/dm_servers/", method: "GET", data: { user: userId } })


export const fetchDmServer = (dmServerId) =>
    $.ajax({ url: `/api/dm_servers/${dmServerId}`, method: "GET" })


export const createDmServer = (dmServer) =>
    $.ajax({ url: "/api/dm_servers", method: "POST", data: { dmServer: dmServer } })

export const deleteDmServer = (dmServerId) =>
    $.ajax({ url: `/api/servers/${dmServerId}`, method: "DELETE" })

