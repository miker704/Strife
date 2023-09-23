

export const fetchServers = (userId) => $.ajax({ url: "/api/servers/", method: "GET", data: { user: userId } });

export const fetchServer = (serverId) => $.ajax({ url: `/api/servers/${serverId}`, method: "GET" });

export const createServer = (server) =>
    $.ajax({
        url: `/api/servers/`,
        method: "POST",
        data: server,
        contentType: false,
        processData: false
    });

export const updateServer = (serverId, formData) =>
    $.ajax({
        url: `/api/servers/${serverId}`,
        method: "PATCH",
        data: formData,
        contentType: false,
        processData: false
    });

export const changeServerBanner = (serverId, formData) =>
    $.ajax({
        url: `/api/servers/${serverId}/changeServerBanner/`,
        method: "PATCH",
        data: formData,
        contentType: false,
        processData: false
    });

export const changeServerInviteSplash = (serverId, formData) =>
    $.ajax({
        url: `/api/servers/${serverId}/changeServerInviteSplash/`,
        method: "PATCH",
        data: formData,
        contentType: false,
        processData: false
    });


export const deleteServer = (serverId) => $.ajax({ url: `/api/servers/${serverId}`, method: "DELETE" });

export const joinServer = (inviteCode) => $.ajax({ url: `/api/servers/join`, method: "POST", data: { inviteCode } });

export const verifyName = (server) => $.ajax({ url: `/api/servers/${server.id}/verifyDeletion/`, method: "PATCH", data: { server } });

// export const exploreServers = () => $.ajax({ url: "/api/servers/", method: "GET" });
export const exploreServers = (userId) => $.ajax({ url: "/api/exploreServers/", method: "GET", data: { userId: userId } });
