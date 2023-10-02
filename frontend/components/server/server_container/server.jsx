import React from "react";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChannelNavBarContainer from "../../channels/channel_nav_bar/channel_nav_bar_container";
import ServerHeaderNavBarContainer from "../server_header_nav_bar/server_header_nav_bar_container";
import ServerMembersListContainer from "../server_members/server_members_list_container";
import ServerChatRoomContainer from "../server_chat_room/server_chat_room_container";
import LeaveServerModalContainer from "../leave_server_modal/leave_server_modal_container";
import CreateChannelModalContainer from "../../channels/create_channel_modal/create_channel_modal_container";
import InviteToServerModalContainer from "../invite_to_server_modal/invite_to_server_modal_container";
import DeleteServerChannelMessageModalContainer from "../delete_server_message_modal/delete_server_message_modal_container";
import ServerSettingsModalContainer from "../server_settings/server_settings_modal_container";
import ChannelSettingsModalContainer from "../../channels/channel_settings/channel_settings_modal_container";
import { Suspense } from "react";
import ErrorBoundary from "../../error_boundary/error_boundary";
import ErrorBoundaryLoadingScreenContainer from "../../loading_screens/error_boundary_loading_screen/error_boundary_loading_screen_container";
import MegaUPCModalContainer from "../../users/mega_user_card_modal/mega_user_card_modal_container";
import BlockUserConfirmationModalContainer from "../../friends/block_user_confirmation_modal/block_user_confirmation_modal_container";
import DeleteFriendConfirmationModalContainer from "../../friends/delete_friend_confirmation_modal/delete_friend_confirmation_modal_container";
import ServerUserOptionsModalContainer from "../../friends/server_user_options/server_user_options_modal_container";
import { Tooltip } from "react-tooltip";
import { StrifeNitroBadgeIcon } from "../../front_end_svgs/Strife_svgs";
import { createConsumer } from "@rails/actioncable";


const Server = (props) => {

    const [hideMembersList, setHideMembersList] = useState(false);
    const [renderLeaveServer, setRenderLeaveServer] = useState(false);
    const [renderInviteToServer, setRenderInviteToServer] = useState(false);
    const [renderDeleteChannelMessage, setRenderDeleteChannelMessage] = useState(false);
    const [showAllTextChannels, setShowAllTextChannels] = useState(true);
    const [showAllVoiceChannels, setShowAllVoiceChannels] = useState(true);
    const serverParams = useParams();

    const [showPopup, setShowPopup] = useState(false);
    const [popupTop, setPopupTop] = useState(0);
    const [popupRawTop, setPopupRawTop] = useState(0);
    const [getClientRect, setClientRect] = useState({});
    const [selectedMember, toggleSelected] = useState({});
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showBlockUserPopup, setShowBlockUserPopup] = useState(false);
    const [showMegaPopUp, setShowMegaPopUp] = useState(false);
    const [userNameClicked, setUserNameClicked] = React.useState(false);


    const [msgCtrlTTHover, setMsgCtrlTTHover] = useState(false);
    const [msgCtrlSRTTHover, setMsgCtrlSRTTHover] = useState(false);
    const [loadingMessages, setLoadingMessages] = useState(false);


    const setHideMembersListContainer = () => {
        setHideMembersList(!hideMembersList)
    }

    useEffect(() => {

        console.log("%c SERVER Component mounted: ", "color:#008000");
        console.log(`%c CONNECTED TO SERVER OF ID : ${props.serverId} `, "color:#05dc28");

        props.fetchServer(props.serverId);
        setShowAllTextChannels(true);
        setShowAllVoiceChannels(true);
        setLoadingMessages(true);

        return function cleanup () {
            console.log(`%c SERVER Component UNMOUNTED: ${props.serverId}`, "color:#FF0000");

            if (props.errors.length > 0) {
                props.removeServerErrors();
            }
            if (props.channelErrors.length > 0) {
                props.removeChannelErrors();
            }
        }

    }, [props.server?.id])

    useEffect(() => {
        if (showPopup === false) {
            setUserNameClicked(false);
        }
    }, [showPopup]);


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

    const renderServerMembersListContainer = () => {
        // if (props.currentChannel?.channel_type === 1) {
            if (!hideMembersList) {
                return (
                    <ServerMembersListContainer
                        serverMembers={Object.values(props.server.users)}
                        server={props.server}
                        users={props.users} />
                )
            }
        // }
    }

    const renderLeaveServerModal = () => {
        if (renderLeaveServer === true) {
            return (
                <LeaveServerModalContainer setRenderLeaveServer={setRenderLeaveServer} serverParams={serverParams} />
            )
        }
    }


    const renderCreateChannelModal = () => {
        if (props.ui_modal === "CreateChannel") {
            return (
                <CreateChannelModalContainer
                    serverParams={serverParams}
                />
            )
        }
    }


    const renderDeleteServerChannelMessageModal = () => {

        if (renderDeleteChannelMessage === true) {
            return (
                <DeleteServerChannelMessageModalContainer setRenderDeleteChannelMessage={setRenderDeleteChannelMessage} />
            )
        }
    }


    const renderInviteToServerModal = () => {

        if (renderInviteToServer === true) {
            return (
                <InviteToServerModalContainer
                    setRenderInviteToServer={setRenderInviteToServer}
                    mod_Channel_ID={props.modalProps.ChannelId}
                    params={props.modalProps.params}
                    serverParams={serverParams}
                />
            )
        }

    }

    const renderChannelSettingsModal = () => {
        if (props.ui_modal === 'ChannelSettings') {
            // return (
            //     <ErrorBoundary fallback={<ErrorBoundaryLoadingScreenContainer serverParams={serverParams} />}>
            //         <Suspense
            //             fallback={
            //                 <div id="grab-wrapper" className="cs-settings-modal-wrapper" onClick={e => e.stopPropagation()} style={{ backgroundColor: `transparent` }}>
            //                     <div className="channel-spinner-back-drop"></div>
            //                     <div className="cs-channel-settings-modal" id="channel-settings-modal" style={{ backgroundColor: `transparent` }}>
            //                         <div className="i2sm-main-layer">
            //                             <div className="i2sm-focus-lock">
            //                                 <span className={`spinning-cubes`}>
            //                                     <span className="inner-cubes moving-cubes">
            //                                         <span className="inner-cube"></span>
            //                                         <span className="inner-cube"></span>
            //                                     </span>
            //                                 </span>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             }
            //         >
            //             <ChannelSettingsModalContainer serverParams={serverParams}
            //                 mod_Channel_ID={props.modalProps.ChannelId}
            //             />
            //         </Suspense>
            //     </ErrorBoundary>
            // )

            return (
                <ChannelSettingsModalContainer serverParams={serverParams}
                    mod_Channel_ID={props.modalProps.ChannelId}
                />
            )
        }
    }

    const renderServerSettingsModal = () => {
        if (props.ui_modal === 'ServerSettings') {
            return (
                <ServerSettingsModalContainer serverParams={serverParams} />
            )
        }
    }

    const renderServerUserOptionsModal = () => {
        if (showPopup === true) {
            return (
                <ServerUserOptionsModalContainer
                    serverType={'SERVER'} member={selectedMember} memberId={selectedMember?.id}
                    ServerOwner={props.server.server_owner_id} server={props.server} serverMemberShipDate={selectedMember?.serverMembershipDateJoined}
                    top={popupTop} setShowPopup={setShowPopup} ServerID={props.server.id} getClientRect={getClientRect}
                    setShowDeletePopup={setShowDeletePopup} setShowBlockUserPopup={setShowBlockUserPopup} userNameClicked={userNameClicked}
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

    //if server is rendered and fetch render it else return null FAIL SAFE for refresh or odd application state 
    if (props.server?.id) {

        return (
            <div className="server-main-base">
                {renderLeaveServerModal()}
                {renderCreateChannelModal()}
                {renderDeleteServerChannelMessageModal()}
                {renderInviteToServerModal()}
                {renderChannelSettingsModal()}
                {renderServerSettingsModal()}
                {renderServerUserOptionsModal()}
                {renderDeleteFriendConfirmationModal()}
                {renderBlockUserConfirmationModal()}
                {renderMegaUpcModal()}
                <div className="server-content">
                    <ChannelNavBarContainer server={props.server} currentChannelId={props.currentChannelId}
                        serverId={props.serverId} isViz={setHideMembersListContainer}
                        hideMembersList={hideMembersList} setRenderLeaveServer={setRenderLeaveServer}
                        setRenderInviteToServer={setRenderInviteToServer} setShowAllTextChannels={setShowAllTextChannels}
                        setShowAllVoiceChannels={setShowAllVoiceChannels} showAllTextChannels={showAllTextChannels}
                        showAllVoiceChannels={showAllVoiceChannels}
                    />
                    <div className="server-base">
                        <ServerHeaderNavBarContainer isViz={setHideMembersListContainer} currentChannelId={props.currentChannelId}
                            _viz={hideMembersList} channels={props.channels} server={props.server} serverId={props.serverId}
                            currentChannel={props.currentChannel}
                        />

                        <div className="server-chat-container-wrapper">
                            <ServerChatRoomContainer currentChannel={props.currentChannel} handleOpenSUOMM={handleOpenSUOMM} setMsgCtrlSRTTHover={setMsgCtrlSRTTHover}
                                loadingMessages={loadingMessages} setLoadingMessages={setLoadingMessages} setMsgCtrlTTHover={setMsgCtrlTTHover}
                                msgUpc={showPopup} setRenderDeleteChannelMessage={setRenderDeleteChannelMessage} />
                            {renderServerMembersListContainer()}
                            <Tooltip className="msg-control-tool-tip" id="msgbs-thread-tip" place="top" closeOnResize={true} closeOnScroll={true} />
                            <Tooltip className="msg-time-stamp-tool-tip" id="scmsgsTimeStamp-thread-tip" place="top" closeOnResize={true} closeOnScroll={true} delayShow={750} offset={5} />
                            <Tooltip className="msg-control-tool-tip" place="top"
                                id="thread-tip-super-reaction"
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
export default Server;