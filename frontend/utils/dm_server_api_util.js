export const fetchDmServers = (userId) =>
    $.ajax({ url: "/api/dm_servers/", method: "GET", data: { user: userId } })


export const fetchDmServer = (dmserverId) =>
    $.ajax({ url: `/api/dm_servers/${dmserverId}`, method: "GET" })


export const createDmServer = (dmserver) =>
    $.ajax({ url: "/api/dm_servers", method: "POST", data: { dm_server: dmserver } })

export const updateDmServer = (dmserverId,dmserver) =>
    $.ajax({ url: `/api/dm_servers/${dmserverId}`, method: "PATCH", data: { dm_server: dmserver } })

export const updateDmServerName = (dmserverId,dmserver) =>
    $.ajax({ url: `/api/dm_servers/${dmserverId}/updatedmsName/`, method: "PATCH", data: { dm_server: dmserver } })    

export const deleteDmServer = (dmserverId) =>
    $.ajax({ url: `/api/dm_servers/${dmserverId}`, method: "DELETE" })

