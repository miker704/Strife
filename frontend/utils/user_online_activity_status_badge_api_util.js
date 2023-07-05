
const returnUserOnlineActivityStatusBadgeMaskIMG = (userStatus) => {

    let onlineActivityStatusBadge = {
        "online": "url(#svg-mask-status-online)",
        "offline": "url(#svg-mask-status-offline)",
        "invisible": "url(#svg-mask-status-offline)",
        "idle": "url(#svg-mask-status-idle)",
        "dnd": "url(#svg-mask-status-dnd)",
    }

    // using condtion temp as other status are not implemented fully currently using physical online offline (physically logged in ? )
    if (userStatus === false) {
        return onlineActivityStatusBadge['offline']
    }
    else if (userStatus === true) {
        return onlineActivityStatusBadge['online'];
    }
    // else {
    //     return onlineActivityStatusBadge[userStatus];
    // }

}

export default returnUserOnlineActivityStatusBadgeMaskIMG;