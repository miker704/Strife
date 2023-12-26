import React from "react";
import { useEffect, useState, useRef } from "react";
import DefaultPFPSVG from '../../../../app/assets/images/defaultPFPSVG.svg';
import GroupChatIcon from '../../../../app/assets/images/groupChatIcon.svg';
import { fetchUser, reSyncCurrentUser } from "../../../utils/session_api_util";
import { useParams } from "react-router-dom";
import { returnUserBadgeFillColor } from "../../../utils/user_status_badge_color_api_util";
import { returnUserOnlineActivityStatusBadgeMaskIMG } from "../../../utils/user_online_activity_status_badge_api_util";
import NoFriendsDMModalContainer from "../no_friends_dm_modal/no_friends_dm_modal_container";
import InviteToDMCallModalContainer from "../select_dm_members_call/select_dm_members_container";
import InviteToDmModalContainer from "../invite_to_dm_server/invite_to_dm_server_container";
import NotFriendsInviteToDmModalContainer from "../not_friends_dm_modal/not_friends_dm_modal_container";
import STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS_CONTAINER from "../../calls/video_and_voice_call_container";
import { HelpIcon, HideMembersListIcon, HideUserProfileIcon, InboxIcon, InviteMemberIcon, PinnedIcon, SearchMagIcon, SearchXIcon, UpdateReadyIcon, VideoCameraIcon, VoiceCallPhoneIcon } from "../../front_end_svgs/Strife_svgs";
import MegaUPCModalContainer from "../../users/mega_user_card_modal/mega_user_card_modal_container";
import { Tooltip } from "react-tooltip";

const DmServerHeaderNavBar = (props) => {
    if (!props.dmServer) {
        return null;
    }

    let displayName = "";
    if (props.dmServer.dm_server_name === null) {
        displayName = Object.values(props.dmServerMembers).filter(member => member.id !== props.currentUser.id).map(member => member.username).join(", ");
    }
    else if (props.dmServer.dm_server_name !== null || props.dmServer.dm_server_name !== undefined || props.dmServer.dm_server_name !== "") {
        displayName = props.dmServer.dm_server_name;
    }

    let params = useParams();
    const [showEdit, setShowEdit] = useState(false);
    const [DmServerName, setDMServerName] = useState("");
    const [showPopUp, setShowPopUp] = useState(false);
    const [popupTop, setPopupTop] = useState(0);
    const [viz, setViz] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [inSubmit, setInSubmit] = React.useState(false);
    const [voiceCall, setVoiceCall] = useState(false);
    const [videoCall, setVideoCall] = useState(false);
    const [invite2DMModal, setInvite2DMModal] = useState(false);
    const [noFriendsDmModal, setNoFriendsDmModal] = useState(false);
    const [notFriendsDMModal, setNotFriendsDMModal] = useState(false);
    const [parseOtherUser, setParseOtherUser] = useState([]);
    const [showMegaPopUp, setShowMegaPopUp] = useState(false);
    const [hovered, setHovered] = useState(false);

    let groupChatIconAvatar = GroupChatIcon;
    let render_User_PFP = DefaultPFPSVG;
    const inputRef = useRef();

    useEffect(() => {
        if (props.dmServer?.id) {
            setDMServerName(displayName);
            setViz(false);
            showUpdateProbability();
        }
        return function cleanup () {
            if (props.errors.length > 0) {
                props.removeDmServerErrors();
            }
            if (props.dmMessageErrors.length > 0) {
                props.removeDmMessageErrors()
            }
        }
    }, [props.dmServer?.id, props.dmServerMembers])




    const showUpdateProbability = () => {
        let probability = Math.random() > 0.99;
        probability === true ? setShowUpdate(true) : setShowUpdate(false);
    }

    const handleRemoveUpdateIcon = (e) => {
        e.preventDefault();
        setShowUpdate(false);
        props.history.push(`/$/updating/`);
    }


    const handleEditName = (e) => {
        e.preventDefault();
        e.stopPropagation();
        //prevent the user from saving the name of the dmServer to a blank name.
        if (DmServerName.length === 0 || DmServerName.length > 100 || DmServerName.replace(/\s/g, '').length === 0 || DmServerName === displayName) {
            setDMServerName(displayName);
            setShowEdit(false);
            return;
        }
        else if (DmServerName !== displayName) {
            //run update
            // setInSubmit(true);
            // props.updateDmServer(props.dmServer.id, { dm_server_name: DmServerName.trim() }).then((action) => {
            //     setInSubmit(false);
            // }, (error) => {
            //     setInSubmit(false);
            // })
            setInSubmit(true);
            props.updateDmServerName(props.dmServer.id, { dm_server_name: DmServerName.trim() }).then(() => {
                setInSubmit(false);
            }, (error) => { setInSubmit(false); })

        }
        setShowEdit(false);
    }

    useEffect(() => {
        if (showEdit === true) {
            inputRef.current?.focus();
        }
        else {
            inputRef.current?.blur();
        }
    })


    const handlePopupShow = (e) => {
        e.preventDefault();
        setInvite2DMModal(true);
    }


    const handlePopupShowVoiceCall = (e) => {
        e.preventDefault();
        setVoiceCall(true);
    }


    const renderVoiceCallModal = () => {

        if (voiceCall === true) {
            return (
                <InviteToDMCallModalContainer
                    closeCallModal={setVoiceCall}
                    dmServerMembers={props.dmServerMembers}
                    dmServer={props.dmServer}
                    dmServerId={props.dmServerId}
                    compParams={params}
                    callType={"VOICE_CALL"}
                />
            )
        }
    }

    const handlePopupShowVideoCall = (e) => {
        e.preventDefault();
        setVideoCall(true);
    }

    const renderVideoCallModal = () => {

        if (videoCall === true) {
            return (
                <InviteToDMCallModalContainer
                    closeCallModal={setVideoCall}
                    dmServerMembers={props.dmServerMembers}
                    dmServer={props.dmServer}
                    dmServerId={props.dmServerId}
                    compParams={params}
                    callType={"VIDEO_CALL"}
                />
            )
        }

    }

    const renderNoFriendsDmModal = () => {
        if (noFriendsDmModal === true) {
            return (
                <NoFriendsDMModalContainer
                    homeBar={true}
                    dmInvite={true}
                    setNoFriendsDmModal={setNoFriendsDmModal}
                />
            )
        }
    }

    const renderNotFriendsDmModal = () => {
        if (notFriendsDMModal === true) {
            return (
                <NotFriendsInviteToDmModalContainer setNotFriendsDMModal={setNotFriendsDMModal} otherUser={parseOtherUser} />
            )
        }
    }

    const renderInviteToDMSModal = () => {
        if (invite2DMModal === true) {
            return (
                <InviteToDmModalContainer
                    setInvite2DMModal={setInvite2DMModal}
                    dmServerMembers={props.dmServerMembers}
                    dmServer={props.dmServer}
                    dmServerId={props.dmServerId}
                />
            )
        }
    }


    const handleSelectDmMemberForMegaUpc = (e) => {
        e.preventDefault();
        let membersOfthisServer = Object.values(props.dmServerMembers);
        if (membersOfthisServer.length === 2) {
            let otherUser = Object.values(props.dmServerMembers).filter(member => member.id !== props.currentUser.id);
            otherUser = otherUser[0];
            fetchUser(otherUser.id).then((result) => {
                setParseOtherUser(result);
                setShowMegaPopUp(true);
            }, (error) => {
                return;
            })
        }
    }


    const handleOpenModal = (e) => {
        // let currTop = e.currentTarget.getBoundingClientRect().top
        // setPopupTop(currTop);
        let membersOfthisServer = Object.values(props.dmServerMembers);
        if (membersOfthisServer.length === 2) {
            let otherUser = Object.values(props.dmServerMembers).filter(member => member.id !== props.currentUser.id);
            otherUser = otherUser[0];
            fetchUser(otherUser.id).then((result) => {
                if (result.friend_request_status !== 3) {
                    setParseOtherUser(result);
                    setNotFriendsDMModal(true);

                }

                else if (result.friend_request_status === 3) {
                    reSyncCurrentUser(props.currentUser.id).then((result) => {
                        if (result.numberOfFriends === 0 || result.numberOfFriends === 1) {
                            setNoFriendsDmModal(true);
                        }
                        else {
                            handlePopupShow(e);
                        }
                    })
                }

            })

        }
        else if (membersOfthisServer.length >= 2) {
            reSyncCurrentUser(props.currentUser.id).then((result) => {
                if (result.numberOfFriends === 0) {
                    setNoFriendsDmModal(true);
                }
                else {
                    handlePopupShow(e);
                }
            })
        }
    }

    const renderMegaUpcModal = () => {
        if (showMegaPopUp === true) {
            return (
                <MegaUPCModalContainer setShowMegaPopUp={setShowMegaPopUp} member={parseOtherUser} memberId={parseOtherUser.id} />
            )
        }
    }


    let membersOfthisServer = Object.values(props.dmServerMembers);
    let otherUser;
    let otherUserStrifeTag = "#";
    let prefilled = false;
    let getColor;
    let colorObtained = false;


    if (membersOfthisServer.length === 2) {
        otherUser = Object.values(props.dmServerMembers).filter(member => member.id !== props.currentUser.id);
        otherUserStrifeTag = `#${otherUser[0].strife_id_tag}`;
        prefilled = true;
    }

    else if (membersOfthisServer.length > 2) {
        getColor = Object.values(props.dmServerMembers).at(-1);
        colorObtained = true;
    }

    let hideMembersToolTipMessage = props._viz === false ? ("Hide Member List") : ("Show Member List");
    // let hideUserProfileToolTipMessage = viz === false ? ("Hide User Profile") : ("Show User Profile");
    let hideUserProfileToolTipMessage = props._viz === false ? ("Hide User Profile") : ("Show User Profile");

    let renderedGroupChatIcon = colorObtained === true ? (
        <div>
            <div className="dmshnb-avatar-wrapper" role="img" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" className="dmshnb-status-mask dmshnb-svg-avatar-wrapping" aria-hidden="true">
                    <foreignObject x="0" y="0" width="24" height="24" mask="url(#svg-mask-avatar-default)">
                        <div className="dmshnb-avatar-stack">
                            <img src={groupChatIconAvatar} alt=" " className={`dmshnb-avatar group-chat-icon-color-${getColor.color_tag}`} aria-hidden="true" />
                        </div>
                    </foreignObject>
                </svg>
            </div>
        </div>

    ) : ('');


    let renderedOtherDmMemberAvatar = prefilled === true ? (
        <div className="dmshnb-avatar-wrapper" role="img" aria-hidden="false">
            <svg width="30" height="30" viewBox="0 0 30 30" className="dmshnb-status-mask dmshnb-svg-avatar-wrapping" aria-hidden="true">
                <foreignObject x="0" y="0" width="24" height="24" mask="url(#svg-mask-avatar-status-round-24)">
                    <div className="dmshnb-avatar-stack">
                        {
                            otherUser[0].photo === undefined ? (
                                <img className={`dmshnb-avatar color-${otherUser[0].color_tag}`} src={render_User_PFP} alt=" " aria-hidden="true" />

                            ) : (
                                <img className={`dmshnb-avatar`} src={otherUser[0].photo} alt=" " aria-hidden="true" />
                            )
                        }
                    </div>
                </foreignObject>
                <rect width="8" height="8" x="16" y="16" fill={returnUserBadgeFillColor(otherUser[0].online)}
                    mask={returnUserOnlineActivityStatusBadgeMaskIMG(otherUser[0].online)} className="dmshnb-svg-masked-pointer-events"></rect>
            </svg>
        </div>
    ) : ('');

    let oneToOneChatDisplayName = membersOfthisServer.length === 2 ? (
        <>
            <div className={`dms-hbar-name`} onClick={(e) => handleSelectDmMemberForMegaUpc(e)}>
                <h1 className="dms-hbar-name-header" data-tooltip-place="bottom" data-tooltip-id="thread-tip-dmshnb"
                    data-tooltip-content={`${displayName + otherUserStrifeTag}`} onMouseEnter={(e) => setHovered(true)}
                    onMouseLeave={(e) => setHovered(false)}>
                    {displayName}
                </h1>
            </div>
            <div className="dmshb-divider"></div>
            <div className="dmshb-aka-badge">AKA</div>
            <div className="dmshb-nicknames">
                <div className="dmshb-nicknames-inlinetip" data-tooltip-place="bottom" data-tooltip-id="thread-tip-dmshnb" data-tooltip-content={`${displayName}`}
                    onMouseEnter={(e) => setHovered(true)} onMouseLeave={(e) => setHovered(false)}>
                    <span role="button" onClick={(e) => handleSelectDmMemberForMegaUpc(e)}>{displayName}</span>
                </div>
            </div>
        </>
    ) : ('');

    let groupChatDisplayName = membersOfthisServer.length > 2 ? (
        <div className={`group-chat-container`}>
            <div className="outer-group-chat-name">
                <div className="inner-group-chat-container"
                    onClick={() => { setShowEdit(true) }}
                >
                    <input id="gni" className={`group-name-input`}
                        type="text" onKeyDown={(e) => {
                            if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); handleEditName(e); };
                        }}
                        spellCheck={false}
                        ref={inputRef}
                        onChange={(e) => setDMServerName(e.currentTarget.value)}
                        placeholder={displayName}
                        value={DmServerName}
                        maxLength={100}
                        minLength={1}
                        autoComplete={"off"}
                        onBlur={(e) => {
                            if (inSubmit === false) {
                                e.preventDefault();
                                e.stopPropagation();
                                handleEditName(e);
                            }
                        }}
                    />
                    <div id="ign" className={`input-group-name`} >
                        {DmServerName}
                    </div>
                </div>
            </div>
        </div>
    ) : ('');



    let renderUserProfileIconAndContainer = membersOfthisServer.length === 2 ? (
        <div id="hide-user-profile"
            className={`dmshb-tool-icon-wrapper`}
            data-tooltip-place="bottom"
            data-tooltip-id="thread-tip-dmshnb" data-tooltip-content={`${hideUserProfileToolTipMessage}`}
            onMouseEnter={(e) => setHovered(true)}
            onMouseLeave={(e) => setHovered(false)}
            onClick={() => { props.isViz(); setViz(!viz) }}
        >
            {/* <HideUserProfileIcon className={`icon-hide-user-profile ${viz === false ? `selected` : ``}`} /> */}
            <HideUserProfileIcon className={`icon-hide-user-profile ${props._viz === false ? `selected` : ``}`} />

        </div>
    ) : ("");


    let renderMembersIconAndContainer = membersOfthisServer.length >= 3 ? (
        <div id="hide-group-chat"
            className={`dmshb-tool-icon-wrapper`}
            data-tooltip-place="bottom"
            data-tooltip-id="thread-tip-dmshnb" data-tooltip-content={`${hideMembersToolTipMessage}`}
            onMouseEnter={(e) => setHovered(true)}
            onMouseLeave={(e) => setHovered(false)}
            onClick={() => { props.isViz(); }}
        >
            <HideMembersListIcon className={`icon-hide-group-chat ${props._viz === false ? `selected` : ``}`} />
        </div>
    ) : ("");

    return (
        <section className="dm-server-header-bar">
            {renderNoFriendsDmModal()}
            {renderNotFriendsDmModal()}
            {renderVideoCallModal()}
            {/* {renderVoiceCallModal()} */}
            {renderInviteToDMSModal()}
            {renderMegaUpcModal()}
            <div className="dm-server-header-nav-bar-upper-container">
                <div className="dm-server-bar-children">
                    <div>
                        {renderedGroupChatIcon}
                        {renderedOtherDmMemberAvatar}
                    </div>
                    {oneToOneChatDisplayName}
                    {groupChatDisplayName}
                </div>

                <div className="dmshb-tool-bar">

                    <div className="dmshb-tool-icon-wrapper" data-tooltip-place="bottom" data-tooltip-id="thread-tip-dmshnb"
                        data-tooltip-content={'Start Voice Call'}
                        onMouseEnter={(e) => setHovered(true)}
                        onMouseLeave={(e) => setHovered(false)}
                    // onClick={(e) => { handlePopupShowVoiceCall(e) }}
                    >
                        <VoiceCallPhoneIcon className="icon-phone" />
                    </div>

                    <div className="dmshb-tool-icon-wrapper" data-tooltip-place="bottom"
                        data-tooltip-id="thread-tip-dmshnb" data-tooltip-content={'Start Video Call'}
                        onMouseEnter={(e) => setHovered(true)}
                        onMouseLeave={(e) => setHovered(false)}
                        onClick={(e) => { handlePopupShowVideoCall(e) }}>
                        <VideoCameraIcon className="icon-webcall" />
                    </div>

                    <div className="dmshb-tool-icon-wrapper" data-tooltip-place="bottom"
                        data-tooltip-id="thread-tip-dmshnb" data-tooltip-content={'Pinned Messages'}
                        onMouseEnter={(e) => setHovered(true)}
                        onMouseLeave={(e) => setHovered(false)}>
                        <PinnedIcon className="icon-pin-messages" />
                    </div>

                    <div
                        className="dmshb-tool-icon-wrapper"
                        data-tooltip-place="bottom" data-tooltip-id="thread-tip-dmshnb" data-tooltip-content={'Add Friends to DM'}
                        onMouseEnter={(e) => setHovered(true)}
                        onMouseLeave={(e) => setHovered(false)}
                        onClick={(e) => {
                            handleOpenModal(e);
                        }}

                    >
                        <InviteMemberIcon className="icon-add-members" />
                    </div>

                    {renderUserProfileIconAndContainer}
                    {renderMembersIconAndContainer}

                    <div className="dmshbar-search-bar-wrapper" >
                        <div className="dmshbar-search-bar-inner-wrapper">
                            <div className="dmshbar-search-bar">
                                <div className="draft-edit">
                                    <div className="public-draft-edit">
                                        <div className="public-draft-edit-placeholder">Search</div>
                                    </div>
                                    <div className="public-draft-editor-container">
                                        <div className="public-draft-editor-container-placeholder">
                                            <div className="data-contents">
                                                <div className="data-block">
                                                    <div className="data-key-offset">
                                                        <span className="data-key-offset2"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dmshbar-mag-icon-container">
                                    <div className="mag-container">
                                        <SearchMagIcon className="mag-icon-2-visible" />
                                        <SearchXIcon className="mag-icon-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        showUpdate && (
                            <div className="dmshb-tool-icon-wrapper" data-tooltip-place="bottom" data-tooltip-id="thread-tip-dmshnb" data-tooltip-content={'Update Ready!'}
                                onMouseEnter={(e) => setHovered(true)}
                                onMouseLeave={(e) => setHovered(false)}
                                onClick={(e) => handleRemoveUpdateIcon(e)}>
                                <UpdateReadyIcon className="icon-dmshnb-update-ready" />
                            </div>
                        )
                    }

                    <div className="dmshb-tool-icon-wrapper" data-tooltip-place="bottom" data-tooltip-id="thread-tip-dmshnb"
                        onMouseEnter={(e) => setHovered(true)}
                        onMouseLeave={(e) => setHovered(false)}
                        data-tooltip-content={'Inbox'}>
                        <InboxIcon className="icon-dms-inbox" />
                    </div>
                    <a className="dmshnb-help-tool-bar" href="https://support.discord.com" target="_blank" rel="noreferrer noopener">
                        <div className="dmshnb-help-tool-bar-icon-wrapper" data-tooltip-place="bottom"
                            data-tooltip-id="thread-tip-dmshnb" data-tooltip-content={'Help'}
                            onMouseEnter={(e) => setHovered(true)}
                            onMouseLeave={(e) => setHovered(false)}
                        >
                            <HelpIcon className="icon-dmshnb-help" />
                        </div>
                    </a>
                </div>
            </div>
            <Tooltip className="thread-tool-tip" id="thread-tip-dmshnb" place="bottom" closeOnResize={true} isOpen={hovered} />

        </section>
    )
}

export default DmServerHeaderNavBar;
