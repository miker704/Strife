

export const returnUserBadgeFillColor = (userStatus) => {

    let fillColors = {
        "online": `rgb(35, 165, 90)`,
        "offline": `rgb(128, 132, 142)`,
        "invisible": `rgb(128, 132, 142)`,
        "idle": `rgb(240, 178, 50)`,
        "dnd": `rgb(242, 63, 67)`,
    }

    // using condtion temp as other status are not implemented fully currently using physical online offline (physically logged in ? )
    if (userStatus === false) {
        return fillColors['offline']
    }
    else if (userStatus === true) {
        return fillColors['online'];
    }
    // else {
    //     return fillColors[userStatus];
    // }

}
