import React from "react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import GroupChatIcon from '../../../../app/assets/images/groupChatIcon.svg';

const GroupChatFirstMessage = (props) => {

    useEffect(() => {
        setDmServer(props.dmServer);
        setDmServerName(generateDmServerName(props.dmServer));
    }, [props.dmServer?.id, props.dmServerMembers]);
    const params = useParams();
    const [dmServer, setDmServer] = React.useState({});
    const [dmServerName, setDmServerName] = React.useState('');

    const generateDmServerName = (dmServer) => {
        let displayName = "";
        if (dmServer.dm_server_name === null) {
            displayName = Object.values(dmServer.members).filter(member => member.id !== props.currentUser.id).map(member => member.username).join(", ");
        }
        else if (dmServer.dm_server_name !== null || dmServer.dm_server_name !== undefined || dmServer.dm_server_name !== "") {
            displayName = dmServer.dm_server_name;
        }
        return displayName;
    }

    if (dmServer?.group_chat) {
        return (
            <React.Fragment>
                <div className="chat-room-first-message-container">
                    <div className="chat-room-avatar-wrapper" role="img">
                        <svg width="80" height="80" viewBox="0 0 80 80" className="chat-room-avatar-svg-wrapper" aria-hidden="true">
                            <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-default)">
                                <div className="chat-room-avatar-image-stack">
                                    <img alt=" " className={`chat-room-avatar-image group-chat-icon-color-${dmServer?.dm_server_color_tag}`} src={GroupChatIcon} aria-hidden="true" />
                                </div>
                            </foreignObject>
                        </svg>
                    </div>
                    <h3 className="chat-room-header-first-msg">{`${dmServerName}`}</h3>
                    <div className="chat-room-header-first-msg-inner-content">
                        Welcome to the beginning of the {`${` `}`}
                        <strong>{`${dmServerName}`}</strong>{`${` `}`} group.
                    </div>
                </div>
                <div className="chat-room-dm-gc-sroller-spacer"></div>
            </React.Fragment>
        )
    }
    else {
        return null;
    }

}
export default GroupChatFirstMessage;