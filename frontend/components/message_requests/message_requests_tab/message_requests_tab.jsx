import React from "react";
import { useEffect, useState, useRef } from "react";
import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
import GroupChatIcon from '../../../../app/assets/images/groupChatIcon.svg';
import { returnUserBadgeFillColor } from "../../../utils/user_status_badge_color_api_util";
import { returnUserOnlineActivityStatusBadgeMaskIMG } from "../../../utils/user_online_activity_status_badge_api_util";

const MessageRequestsTab = (props) => {

    const renderDmServerPFP = (dmServerMembers) => {
        let user = "";
        if (dmServerMembers.length === 2) {
            for (let member of dmServerMembers) {
                if (member.id !== props.currentUserId) {
                    user = member;
                }
            }
        }
        else if (dmServerMembers.length > 2) {
            user = dmServerMembers.at(-1);
        }

        if (dmServerMembers.length === 2) {
            return (
                <svg width="40" height="40" viewBox="0 0 40 40" className="msg-req-status-mask msg-reqs-svg-avatar-wrapping" aria-hidden="true">
                    <foreignObject x="0" y="0" width="40" height="40" mask="url(#svg-mask-avatar-status-round-40)">
                        <div className="message-req-item-avatar-stack">
                            {
                                user.photo === undefined ? (
                                    <img className={`msg-reqs-avatar-img color-${user.color_tag}`} src={DefaultPFPSVG} alt=" " aria-hidden="true" />
                                ) : (
                                    <img className="msg-reqs-avatar-img" src={user.photo} alt=" " aria-hidden="true" />
                                )
                            }
                        </div>
                    </foreignObject>
                    <rect width="12" height="12" x="28" y="28" fill={returnUserBadgeFillColor(user.online)}
                        mask={returnUserOnlineActivityStatusBadgeMaskIMG(user.online)}
                        className="dmsnb-ci-avatar-pointer-events" data-tooltip-id="thread-tip"
                        data-tooltip-content={`${user.online ? 'Online' : 'Offline'}`}
                        data-tooltip-place="top"
                    >
                    </rect>
                </svg>
            )
        }

        return (
            <svg width="40" height="40" viewBox="0 0 40 40" className="msg-req-status-mask msg-reqs-svg-avatar-wrapping" aria-hidden="true">
                <foreignObject x="0" y="0" width="40" height="40" mask="url(#svg-mask-avatar-default)">
                    <div className="message-req-item-avatar-stack">
                        <img className={`msg-reqs-avatar-img group-chat-icon-color-${user.color_tag}`} src={GroupChatIcon} alt=" " aria-hidden="true" />
                    </div>
                </foreignObject>
            </svg>
        )
    }


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

    return (
        <div className="msg-requests-main-page-contents">

        {
            props.dmServers.length !== 0 ? (
                <div tabIndex={0} className="msg-reqs-scroll-bar global-scroller-base global-scroll-faded-raw-attributes global-scroll-thin-raw-attributes" style={{ overflow: `hidden scroll`, paddingRight: `16px` }}>
                    <div role="list" aria-label="Message Requests" className="msg-reqs-scroll-bar-content">
                        <div className="msg-req-sb-title-sep"></div>
                        <h2 className="msg-req-sb-title-h2">{`Requests - ${props.dms.length}`}</h2>
                        {
                            props.dmServers.filter((dmServer) => dmServer?.one_to_one_dm === true).map((dmServer, idx) => {
                                let dmServerMembers = Object.values(dmServer.members);
                                let dmServerName = generateDmServerName(dmServer)
                                let dmServerPFP = renderDmServerPFP(dmServerMembers);
                                let dmCreated = dmServer?.dm_created;
                                let dmFirstMessage = dmServer?.first_dm;
                                return (
                                    <div className="message-req-item" role='listitem' tabIndex={-1} key={`dmServer-${dmServer.id}`}>
                                        <div className="message-req-item-inner-container" role='listitem' tabIndex={-1}>
                                            <div className="message-req-item-avatar-wrapper" role="img">
                                                {dmServerPFP}
                                            </div>

                                            <div className="msg-req-user-preview">
                                                <div className="msg-req-user-container-with-preview">
                                                    <div className="msg-req-user-info-tag-container">
                                                        <span className="msg-req-user-info-username">{dmServerName}</span>
                                                        <span className="msg-req-user-info-globalName">{dmServerName}</span>
                                                    </div>
                                                    <div className="msg-req-user-dm-timestamp">{dmCreated}</div>
                                                </div>
                                                <div className="msg-req-dm-msg-preview">
                                                    <div className="msg-req-dm-msg-focus-block">
                                                        <div className="msg-req-dm-msg-container">
                                                            <div className="msg-req-dm-msg-content">{dmFirstMessage}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="msg-req-actions-container">
                                                <button className="msg-req-action-buttons button-look-filled global-button-size-small global-button-growth"
                                                onClick={(e)=>{e.preventDefault(); props.history.push(`/$/channels/@me/${dmServer.id}`)}}>
                                                    <div className="look-filled-button-contents global-button-contents">Accept DM</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            )
                : (
                    <div className="msg-requests-main-page-emptyState-container" style={{ flex: `1 1 auto` }}>
                        <div className="msg-requests-main-page-emptyState-img"></div>
                        <div className="msg-requests-main-page-emptyState-img-text-container" style={{ flex: `0 1 auto` }}>
                            <div className="msg-requests-main-page-emptyState-img-text">There are no pending message requests. Here's Wumpus for now.</div>
                        </div>
                    </div>
                )
        }
    </div>
    )



}
export default MessageRequestsTab;