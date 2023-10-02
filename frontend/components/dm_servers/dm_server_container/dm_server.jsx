import React from "react";
import { useState, useRef, useEffect } from "react";
import DmServerHeaderNavBarContainer from "../dm_server_header_nav_bar/dm_server_header_nav_bar_container";
import DmServerMemberListContainer from "../dm_server_members/dm_server_member_list_container";
import DMNavBarContainer from "../dm_nav_bar/dm_nav_bar_container";
import DeleteDmMessageModalContainer from "../delete_dm_message_modal/delete_dm_message_modal_container";
import DmChatRoomContainer from "../dm_chat_room/dm_chat_room_container";
import UPCPanelContainer from "../upc_panel/upc_panel_container";
import { useParams } from "react-router-dom";
import MegaUPCModalContainer from "../../users/mega_user_card_modal/mega_user_card_modal_container";
import BlockUserConfirmationModalContainer from "../../friends/block_user_confirmation_modal/block_user_confirmation_modal_container";
import DeleteFriendConfirmationModalContainer from "../../friends/delete_friend_confirmation_modal/delete_friend_confirmation_modal_container";
import ServerUserOptionsModalContainer from "../../friends/server_user_options/server_user_options_modal_container";
import { Tooltip } from "react-tooltip";
import { StrifeNitroBadgeIcon } from "../../front_end_svgs/Strife_svgs";
import { fetchUser } from "../../../utils/session_api_util";


const DmServer = (props) => {

    const [hideMembersList, setHideMembersList] = useState(false);
    const [renderDeleteDM, setRenderDeleteDM] = useState(false);
    const [otherMember, setOtherMember] = useState({});
    const [dm, setDm] = useState({});
    const dmParams = useParams();

    const [showPopup, setShowPopup] = useState(false);
    const [popupTop, setPopupTop] = useState(0);
    const [popupRawTop, setPopupRawTop] = useState(0);
    const [selectedMember, toggleSelected] = useState({});
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showBlockUserPopup, setShowBlockUserPopup] = useState(false);
    const [showMegaPopUp, setShowMegaPopUp] = useState(false);
    const [getClientRect, setClientRect] = useState({});
    const [userNameClicked, setUserNameClicked] = React.useState(false);

    const [msgCtrlTTHover, setMsgCtrlTTHover] = useState(false);
    const [msgCtrlSRTTHover, setMsgCtrlSRTTHover] = useState(false);
    const [userBlocked, setUserBlocked] = useState(false);

    useEffect(() => {
        // console.log("%c Component mounted: ", "color:#008000");
        props.fetchDmServers(props.currentUser.id);
        setUserBlocked(false);
        checkIFBlocked();
        return function cleanUp () {
            // console.log("%c Component UNMOUNTED: ", "color:#FF0000");
            if (props.errors.length > 0) {
                props.removeDmMessageErrors();
            }
            if (props.dmServerErrors.length > 0) {
                props.removeDmServerErrors();
            }
        }
    }, []);



    useEffect(() => {

        // console.log(`%c CONNECTED TO DM_SERVER update ID : ${props.dmServerId} `, "color:#05dc28");
        props.fetchDmServer(dmParams.dmServerId);

        setUserBlocked(false);
        checkIFBlocked();
        return function cleanUp () {
            if (props.errors.length > 0) {
                props.removeDmServerErrors();
            }
        }
    }, [props.dmServer?.id]);


    useEffect(() => {
        if (showPopup === false) {
            setUserNameClicked(false);
        }
    }, [showPopup]);

    useEffect(() => {
        if (props.dmServer?.one_to_one_dm) {
            checkIFBlocked();
        }
        else{
            setUserBlocked(false);
        }
    }, [props.users])

    const setHideMembersListContainer = () => {
        setHideMembersList(!hideMembersList);
    }

    const checkIFBlocked = () => {
        let blockedIds = [-2, -1];
        if (props.dmServer?.one_to_one_dm) {
            fetchUser(props.dmServer?.other_o2o_member?.id).then((result) => {
                if (blockedIds.includes(result.friend_request_status) === true) {
                    setUserBlocked(true);
                }
                else {
                    setUserBlocked(false);
                }
            })
        }
        else {
            setUserBlocked(false);
        }
    }


    const handleOpenSUOMM = (e, member, type = "") => {
        e.preventDefault();
        e.stopPropagation();
        toggleSelected(member);
        setClientRect(e.currentTarget.getBoundingClientRect());
        let currTop = e.currentTarget.getBoundingClientRect().top;
        setPopupTop(currTop);
        setPopupRawTop(currTop);
        if (type === "userNameClicked") {
            setUserNameClicked(true);
        }
        setShowPopup(!showPopup);
    }

    const renderDmMemberContainer = () => {
        if (Object.values(props.dmServerMembers).length > 2) {
            if (hideMembersList === false) {
                return (
                    <DmServerMemberListContainer dmServerMembers={props.dmServerMembers} />
                )
            }
        }
    }

    const renderUPCPanel = () => {
        if (props.dmServer?.one_to_one_dm) {
            if (hideMembersList === false) {
                return (
                    <UPCPanelContainer dmServer={props.dmServer} dmServerMembers={props.dmServerMembers} member={props.dmServer?.other_o2o_member} memberId={props.dmServer?.other_o2o_member?.id} />
                )
            }
        }
    }


    const renderDeleteDmMessageModal = () => {

        if (renderDeleteDM === true) {
            return (
                <DeleteDmMessageModalContainer setRenderDeleteDM={setRenderDeleteDM} />
            )
        }

    }

    const renderServerUserOptionsModal = () => {
        if (showPopup === true) {
            return (
                <ServerUserOptionsModalContainer
                    user={props.currentUser} member={selectedMember} memberId={selectedMember?.id}
                    top={popupTop} setShowPopup={setShowPopup} userNameClicked={userNameClicked}
                    DmServerOwner={props.dmServer.owner_id} DmServerId={props.dmServer.id}
                    serverType={'DM_SERVER'} dmServerMembers={props.dmServerMembers} getClientRect={getClientRect}
                    setShowDeletePopup={setShowDeletePopup} setShowBlockUserPopup={setShowBlockUserPopup}
                    popupRawTop={popupRawTop} setShowMegaPopUp={setShowMegaPopUp} messageVersion={true}
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

    if (props.dmServer) {
        return (

            <div className="dm-server-main-base">
                {renderDeleteDmMessageModal()}
                {renderServerUserOptionsModal()}
                {renderDeleteFriendConfirmationModal()}
                {renderBlockUserConfirmationModal()}
                {renderMegaUpcModal()}
                <div className="dm-server-content">
                    <DMNavBarContainer />
                    <div className="dm-server-chat-room-container">
                        <DmServerHeaderNavBarContainer isViz={setHideMembersListContainer} _viz={hideMembersList}
                            dmServerMembers={props.dmServerMembers}
                        />
                        <div className="server-chat-container-wrapper">
                            <DmChatRoomContainer setRenderDeleteDM={setRenderDeleteDM} handleOpenSUOMM={handleOpenSUOMM} msgUpc={showPopup}
                                setMsgCtrlTTHover={setMsgCtrlTTHover} setUserBlocked={setUserBlocked}
                                setMsgCtrlSRTTHover={setMsgCtrlSRTTHover} userBlocked={userBlocked}
                            />
                            {renderDmMemberContainer()}
                            {renderUPCPanel()}
                            <Tooltip className="msg-control-tool-tip" id="dmsgbs-thread-tip" place="top" closeOnResize={true} closeOnScroll={true} isOpen={msgCtrlTTHover} />
                            <Tooltip className="msg-time-stamp-tool-tip" id="dmsgsTimeStamp-thread-tip" place="top" closeOnResize={true} closeOnScroll={true} delayShow={750} offset={5} />
                            <Tooltip className="msg-control-tool-tip" place="top"
                                id="thread-tip-super-reaction" isOpen={msgCtrlSRTTHover}
                                closeOnResize={true} closeOnScroll={true}
                                render={({ content }) => (
                                    <div className="add-a-super-reaction-tool-tip-container">
                                        <StrifeNitroBadgeIcon className="msg-nitro-wheel-icon" height={24} width={24} />
                                        <div className="add-a-super-reaction-tool-tip-contents">
                                            {content}
                                        </div>
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return null;
    }


}
export default DmServer;