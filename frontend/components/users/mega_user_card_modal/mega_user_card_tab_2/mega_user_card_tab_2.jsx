import React from 'react';
import { useRef, useEffect, useState } from "react";
import { fetchMutualServers } from '../../../../utils/session_api_util';

const MegaUpcTab2 = (props) => {

    const [servers, setServers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        fetchMutualServers({ userId: props.currentUser.id, other_user_id: props.member.id }).then((result) => {
            let finalResult = Object.values(result);
            setServers(finalResult);
            setIsLoaded(true);
        }, (error) => {
            setServers([]);
            setIsLoaded(true);
        })

        return function cleanUp () {
            if (props.errors.length > 0) {
                props.removeSessionErrors();
            }
            if (props.serverErrors.length > 0) {
                props.removeServerErrors();
            }
        }

    }, []);

    const generateFontSize = (serverAcryoName) => {
        if (serverAcryoName.length === 1) {
            return 16;
        }
        else if (serverAcryoName.length === 2 || serverAcryoName.length === 3) {
            return 14;
        }
        else if (serverAcryoName.length === 4) {
            return 12;
        }
        else if (serverAcryoName.length === 5) {
            return 10;
        }
        else if (serverAcryoName.length >= 6) {
            return 8;
        }
    }

    const splitServerName = (serverName) => {
        let serverAcryo = serverName.split(" ").map((parts) => parts[0]).join("");
        return serverAcryo.length > 5 ? serverAcryo.slice(0, 5) : serverAcryo;
    }

    if (isLoaded === true) {
        return (
            <div className='megaUpc-list-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>

                {
                    servers.length === 0 ? (
                        <div className='megaUpc-empty-no-mutal-friends-container'>
                            <div className='megaUpc-empty-mutual-servers-icon'></div>
                            <div className='megaUpc-empty-no-mutal-friends-text'>No servers in common</div>
                        </div>
                    ) : (
                        servers.map((server, serverIdx) => {

                            let serverAcryoName = splitServerName(server.server_name);

                            const serverAcryoIcon = server.server_Icon === undefined ? (
                                <div className="megaUpc-server-no-avatar" style={{ fontSize: `${generateFontSize(serverAcryoName)}px` }}>
                                    <div className="megaUpc-server-no-avatar-acryo" >{serverAcryoName}</div>
                                </div>
                            ) : ("");

                            const server_icon = server.server_Icon !== undefined ?
                                (<div className="megaUpc-server-avatar" style={{ backgroundImage: `url(${server.server_Icon})` }}>
                                </div>
                                ) : ("");




                            return (
                                <div className="megaUpc-list-item" key={server.id}
                                    onClick={(e) => {
                                        if (props.history.location.pathname !== `/$/channels/${server.id}/${server.general_channel_id}`) {
                                            props.history.push(`/$/channels/${server.id}/${server.general_channel_id}`);
                                        }
                                        props.setShowMegaPopUp(false);
                                    }}>
                                    {serverAcryoIcon}
                                    {server_icon}
                                    <div className='megaUpc-list-item-text-content'>
                                        <div className='megaUpc-list-item-name-text'>{server.server_name}</div>
                                    </div>
                                </div>
                            )
                        })
                    )
                }

                <div className='megaUpc-mutal-friends-bottom-sep'></div>
            </div>
        )

    }
    else {

        return (
            <div className='megaUpc-list-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                <div className="i2sm-main-layer">
                    <div className="mega-spin-cubes-focus-lock">
                        <span className={`spinning-cubes`}>
                            <span className="inner-cubes moving-cubes">
                                <span className="inner-cube"></span>
                                <span className="inner-cube"></span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        )

    }
}
export default MegaUpcTab2;