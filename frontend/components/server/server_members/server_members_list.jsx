import React from "react";
import { useEffect, useState, useRef } from "react";
import DefaultPFPSVG from '../../../../app/assets/images/defaultPFPSVG.svg';
import ServerUserOptionsModalContainer from "../../friends/server_user_options/server_user_options_modal_container";
import DeleteFriendConfirmationModalContainer from "../../friends/delete_friend_confirmation_modal/delete_friend_confirmation_modal_container";
import BlockUserConfirmationModalContainer from "../../friends/block_user_confirmation_modal/block_user_confirmation_modal_container";
import MegaUPCModalContainer from "../../users/mega_user_card_modal/mega_user_card_modal_container";
import { OwnerCrownIcon, StrifeBotTagIcon } from "../../front_end_svgs/Strife_svgs";
import { Tooltip } from "react-tooltip";

// import _ from 'lodash'

const ServerMembersList = (props) => {


    // useEffect(()=>{
    //     if(_.isEqual(users,server.users) === false){
    //         console.log("not equeal")
    //         fetchServer(serverId)
    //     }
    // },[server.users,users])


    const [showPopup, setShowPopup] = useState(false);
    const [popupTop, setPopupTop] = useState(0);
    const [popupRawTop, setPopupRawTop] = useState(0);
    const [selectedMember, toggleSelected] = useState([]);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showBlockUserPopup, setShowBlockUserPopup] = useState(false);
    const [showMegaPopUp, setShowMegaPopUp] = useState(false);
    const [getClientRect, setClientRect] = useState({});


    const popUpRef = useRef();
    let render_Default_User_PFP = DefaultPFPSVG;

    const handleSelected = (member) => {
        toggleSelected(member);
    }


    const handlePopupShow = (e) => {
        setClientRect(e.currentTarget.getBoundingClientRect());
        let currTop = e.currentTarget.getBoundingClientRect().top
        setPopupRawTop(currTop);
        const realWidth = window.screen.width * window.devicePixelRatio;
        const realHeight = window.screen.height * window.devicePixelRatio;

        // this is to handle 4k screen placement for anything less the position is defaulted to 20 which is reduced to 12px top
        // as the modal can reach  39% - 96%+ of a 1080 screen

        if (realWidth >= 3800 && realHeight >= 2100) {
            if (currTop <= window.innerHeight * 0.145560) {
                currTop = 20;
            }
            else if (currTop >= window.innerHeight * 0.145560 && currTop < window.innerHeight * 0.710665) {
                currTop = currTop;
            }
            else if (currTop >= window.innerHeight * 0.710665 && currTop < window.innerHeight * 0.90538) {
                currTop /= 1.25;
            }
            else if (currTop >= window.innerHeight * 0.90538) {
                currTop /= 1.4;
            }
            else {
                currTop = 20;
            }
        }
        else {
            // the server version of server user options modal can reach around ~96%+ of the normal 1080p screen so only 
            // one option remains.
            currTop = 20;
        }
        setPopupTop(currTop);
        setShowPopup(!showPopup);
    }

    const sortOfflineMembers = (serverMembers) => {
        let offlineMembers = new Array();
        return offlineMembers = serverMembers.filter((serverMember, serverMemberIdx) => {
            return serverMember.online === false;
        })
    }

    const sortOnlineMembers = (serverMembers) => {
        let onlineMembers = new Array();
        return onlineMembers = serverMembers.filter((serverMember, serverMemberIdx) => {
            return serverMember.online === true;
        })
    }


    const Strife_Bot_IDs = [1, 2, 3, 4];
    let if_Bot_tag = (
        <span className="sml-bot-sticker">
            <StrifeBotTagIcon className="sml-bot-check-mark" data-tooltip-id="thread-tip-sml" data-tooltip-place="top" data-tooltip-content={'Verified $TR!F3 B0T'} />
            <span className="sml-bot-text">$TR!F3 B0T</span>
        </span>
    );


    const serverMembersArray = Object.values(props.server.users);
    const ServerOwner = props.server.server_owner_id;
    const offlineServerMembers = sortOfflineMembers(serverMembersArray);
    const onlineServerMembers = sortOnlineMembers(serverMembersArray);


    const renderServerUserOptionsModal = () => {
        if (showPopup === true) {
            return (
                <ServerUserOptionsModalContainer
                    serverType={'SERVER'} member={selectedMember} memberId={selectedMember.id}
                    ServerOwner={ServerOwner} server={props.server} serverMemberShipDate={selectedMember.serverMembershipDateJoined}
                    top={popupTop} setShowPopup={setShowPopup} ServerID={props.server.id} messageVersion={false}
                    setShowDeletePopup={setShowDeletePopup} setShowBlockUserPopup={setShowBlockUserPopup} userNameClicked={false}
                    popupRawTop={popupRawTop} setShowMegaPopUp={setShowMegaPopUp} getClientRect={getClientRect}
                />
            )
        }
    }

    const renderDeleteFriendConfirmationModal = () => {
        if (showDeletePopup === true) {
            return (
                <DeleteFriendConfirmationModalContainer friend={selectedMember} setShowDeletePopup={setShowDeletePopup} />
            )
        }

    }

    const renderBlockUserConfirmationModal = () => {
        if (showBlockUserPopup === true) {
            return (
                <BlockUserConfirmationModalContainer friend={selectedMember} setShowBlockUserPopup={setShowBlockUserPopup} />
            )
        }
    }

    const renderMegaUpcModal = () => {
        if (showMegaPopUp === true) {
            return (
                <MegaUPCModalContainer setShowMegaPopUp={setShowMegaPopUp} member={selectedMember} memberId={selectedMember.id} />
            )
        }
    }

    return (


        <div className="server-members-index-pre-container-wrapper">
            <aside className="server-members-index-container-wrapper">

                {renderServerUserOptionsModal()}
                {renderDeleteFriendConfirmationModal()}
                {renderBlockUserConfirmationModal()}
                {renderMegaUpcModal()}

                <div className="server-members-index-container global-scroll-thin-raw-attributes global-scroller-base global-scroll-faded-raw-attributes"
                    style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                    <h3 className="server-members-header-title">{`ONLINE — ${onlineServerMembers.length}`}</h3>

                    {
                        onlineServerMembers.map((serverMember, serverMemberIdx) => {

                            let renderBotTag = Strife_Bot_IDs.includes(serverMember.id) ? (if_Bot_tag) : ("");

                            return (

                                <div className="server-member-item" key={serverMember.id} data-list-item-id={`server-member-item-${serverMember.id}`}
                                    onClick={(e) => {
                                        handleSelected(serverMember);
                                        handlePopupShow(e);
                                    }}>

                                    <div className={`server-member-list-layout-member-inner server-member-layout ${selectedMember.id === serverMember.id && showPopup === true ? `selected` : ``}`}>
                                        <div className="server-member-avatar">
                                            <div className="server-member-avatar-inner-wrapper">
                                                <svg width="40" height="40" viewBox="0 0 40 40" className="sml-mask sml-svg" aria-hidden="true">
                                                    <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                                                        <div className="sml-avatar-stack">
                                                            {
                                                                serverMember.photo === undefined ? (
                                                                    <img className={`sml-avatar color-${serverMember.color_tag}`} src={render_Default_User_PFP} alt=" " aria-hidden="true" />
                                                                ) : (
                                                                    <img className="sml-avatar" src={serverMember.photo} alt=" " aria-hidden="true" />
                                                                )
                                                            }
                                                        </div>
                                                    </foreignObject>
                                                    <rect data-tooltip-id="thread-tip-sml" data-tooltip-place="top" data-tooltip-content='Online' width="10" height="10" x="22" y="22"
                                                        fill={`rgb(35, 165, 90)`}
                                                        mask={`url(#svg-mask-status-online)`}
                                                        className="sml-svg-masked-pointer-events">
                                                    </rect>
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="server-member-info-wrapper">
                                            <div className="server-member-username-wrapper">
                                                <div className="server-member-username-div">
                                                    <span className="server-member-username-span">
                                                        <span className="server-member-username">
                                                            {serverMember.username}
                                                        </span>
                                                    </span>
                                                </div>
                                                {renderBotTag}
                                                {
                                                    serverMember.id === ServerOwner ? (
                                                        <>
                                                            <OwnerCrownIcon className={"server-group-owner-icon"} aria-label="Server Owner" data-tooltip-id="thread-tip-sml" data-tooltip-content='Server Owner' data-tooltip-place="top" />
                                                        </>
                                                    ) : ('')
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })

                    }

                    <h3 className="server-members-header-title">{`OFFLINE — ${offlineServerMembers.length}`}</h3>
                    {
                        offlineServerMembers.map((serverMember, serverMemberIdx) => {

                            return (

                                <div className={`server-member-item ${selectedMember.id === serverMember.id && showPopup === true ? `` : `smi-offline`}`}
                                    key={serverMember.id} data-list-item-id={`server-member-item-${serverMember.id}`}
                                    onClick={(e) => {
                                        handleSelected(serverMember);
                                        handlePopupShow(e);
                                    }}>

                                    <div className={`server-member-list-layout-member-inner server-member-layout ${selectedMember.id === serverMember.id && showPopup === true ? `selected` : ``}`}>
                                        <div className="server-member-avatar">
                                            <div className="server-member-avatar-inner-wrapper">
                                                <svg width="32" height="32" viewBox="0 0 32 32" className="sml-mask sml-svg" aria-hidden="true">
                                                    <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-default)">
                                                        <div className="sml-avatar-stack">
                                                            {
                                                                serverMember.photo === undefined ? (
                                                                    <img className={`sml-avatar color-${serverMember.color_tag}`} src={render_Default_User_PFP} alt=" " aria-hidden="true" />
                                                                ) : (
                                                                    <img className="sml-avatar" src={serverMember.photo} alt=" " aria-hidden="true" />
                                                                )
                                                            }
                                                        </div>
                                                    </foreignObject>
                                                </svg>

                                            </div>
                                        </div>
                                        <div className="server-member-info-wrapper">
                                            <div className="server-member-username-wrapper">
                                                <div className="server-member-username-div">
                                                    <span className="server-member-username-span">
                                                        <span className="server-member-username">
                                                            {serverMember.username}
                                                        </span>
                                                    </span>
                                                </div>

                                                {
                                                    serverMember.id === ServerOwner ? (
                                                        <>
                                                            <OwnerCrownIcon className={"server-group-owner-icon"} aria-label="Server Owner" data-tooltip-id="thread-tip-sml" data-tooltip-content='Server Owner' data-tooltip-place="top" />
                                                        </>
                                                    ) : ('')
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })

                    }

                </div>
                <Tooltip className="thread-tool-tip" id="thread-tip-sml" place="top" closeOnResize={true} closeOnScroll={true} />
            </aside>
        </div>

    )

}
export default ServerMembersList;



