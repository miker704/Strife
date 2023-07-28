// replaced with non deconstructured prop version.
// import React from "react";
// import ReactTooltip from "react-tooltip";
// import { useEffect, useState, useRef } from "react";
// import DefaultPFPSVG from '../../../../app/assets/images/defaultPFPSVG.svg';
// import GroupChatIcon from '../../../../app/assets/images/groupChatIcon.svg';
// import { fetchUser, reSyncCurrentUser } from "../../../utils/session_api_util";
// import { useParams } from "react-router-dom";
// import { returnUserBadgeFillColor } from "../../../utils/user_status_badge_color_api_util";
// import { returnUserOnlineActivityStatusBadgeMaskIMG } from "../../../utils/user_online_activity_status_badge_api_util";
// import NoFriendsDMModalContainer from "../no_friends_dm_modal/no_friends_dm_modal_container";
// import InviteToDMCallModalContainer from "../select_dm_members_call/select_dm_members_container";
// import InviteToDmModalContainer from "../invite_to_dm_server/invite_to_dm_server_container";
// import NotFriendsInviteToDmModalContainer from "../not_friends_dm_modal/not_friends_dm_modal_container";
// import STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS_CONTAINER from "../../calls/video_and_voice_call_container";


// const DmServerHeaderNavBar = ({
//     props,
//     errors,
//     dmMessageErrors,
//     currentUser,
//     dmServer,
//     dmServerId,
//     dmServerMembers,
//     fetchDmServer,
//     history,
//     removeDmServerErrors,
//     removeDmMessageErrors,
//     updateDmServer,
//     dmServerUsers,
//     _viz,
//     isViz,
//     openModal,
//     openModalWithProps,
//     users,
// }) => {
//     if (!dmServer) {
//         return null;
//     }


//     let displayName = "";
//     if (dmServer.dm_server_name === null) {
//         displayName = Object.values(dmServerMembers).filter(member => member.id !== currentUser.id).map(member => member.username).join(", ");
//     }
//     else if (dmServer.dm_server_name !== null || dmServer.dm_server_name !== undefined || dmServer.dm_server_name !== "") {
//         displayName = dmServer.dm_server_name;
//     }
//     let params = useParams();
//     const [showEdit, setShowEdit] = useState(false);
//     const [DmServerName, setDMServerName] = useState("");
//     const [showPopUp, setShowPopUp] = useState(false);
//     const [popupTop, setPopupTop] = useState(0);
//     const [viz, setViz] = useState(false);
//     const [showUpdate, setShowUpdate] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);

//     const [voiceCall, setVoiceCall] = useState(false);
//     const [videoCall, setVideoCall] = useState(false);
//     const [invite2DMModal, setInvite2DMModal] = useState(false);
//     const [noFriendsDmModal, setNoFriendsDmModal] = useState(false);
//     const [notFriendsDMModal, setNotFriendsDMModal] = useState(false);
//     const [parseOtherUser, setParseOtherUser] = useState([]);


//     let groupChatIconAvatar = GroupChatIcon;
//     let render_User_PFP = DefaultPFPSVG;
//     const inputRef = useRef();

//     useEffect(() => {
//         if (dmServer?.id) {
//             // fetchDmServer(dmServerId);
//             setDMServerName(displayName);
//             setViz(false);
//             showUpdateProbability();
//         }

//         return function cleanup () {
//             if (errors.length > 0) {
//                 removeDmServerErrors();
//             }
//             if (dmMessageErrors.length > 0) {
//                 removeDmMessageErrors()
//             }
//         }
//     }, [dmServer?.id, dmServerUsers])




//     const showUpdateProbability = () => {
//         let probability = Math.random() > 0.99;
//         probability === true ? setShowUpdate(true) : setShowUpdate(false);
//     }

//     const handleRemoveUpdateIcon = (e) => {
//         e.preventDefault();
//         setShowUpdate(false);
//         history.push(`/$/updating/`);
//     }


//     const handleEditName = (e) => {
//         e.preventDefault();
//         //prevent the user from saving the name of the dmServer to a blank name.
//         if (DmServerName.length === 0 || DmServerName.length > 100 || DmServerName.replace(/\s/g, '').length === 0 || DmServerName === displayName) {
//             setDMServerName(displayName);
//             setShowEdit(false);
//             return;
//         }
//         else if (DmServerName !== displayName) {
//             //run update
//             updateDmServer(dmServer.id, { dm_server_name: DmServerName.trim() });
//         }
//         setShowEdit(false);
//     }

//     useEffect(() => {
//         if (showEdit === true) {
//             inputRef.current?.focus();
//         }
//         else {
//             inputRef.current?.blur();
//         }
//     })


//     const handlePopupShow = (e) => {
//         // openModalWithProps({
//         //     top: popupTop,
//         //     setShowPopUp: setShowPopUp,
//         //     dmServerMembers: dmServerMembers,
//         //     dmServer: dmServer,
//         //     dmServerId: dmServerId
//         // })
//         // openModal('inviteToDmModal');
//         setInvite2DMModal(true);
//     }


//     const handlePopupShowVoiceCall = (e) => {
//         e.preventDefault();
//         setVoiceCall(true);
//     }


//     const renderVoiceCallModal = () => {

//         if (voiceCall === true) {
//             return (
//                 <InviteToDMCallModalContainer
//                     closeCallModal={setVoiceCall}
//                     dmServerMembers={dmServerMembers}
//                     dmServer={dmServer}
//                     dmServerId={dmServerId}
//                     compParams={params}
//                     callType={"VOICE_CALL"}
//                 />
//             )
//         }
//     }



//     const handlePopupShowVideoCall = (e) => {
//         e.preventDefault();
//         setVideoCall(true);
//     }

//     const renderVideoCallModal = () => {

//         if (videoCall === true) {
//             return (
//                 <InviteToDMCallModalContainer
//                     closeCallModal={setVideoCall}
//                     dmServerMembers={dmServerMembers}
//                     dmServer={dmServer}
//                     dmServerId={dmServerId}
//                     compParams={params}
//                     callType={"VIDEO_CALL"}
//                 />
//             )
//         }

//     }


//     const handleDmServerName2 = () => {
//         let dmServerName = [];
//         let dmMembersInServer = Object.values(dmServerMembers);
//         for (let member of Object.values(dmServerMembers)) {
//             if (member.id !== currentUser.id) {
//                 dmServerName.push(member.username);
//             }
//         }
//         if (dmServerName.length === 1) {
//             dmServerName = dmServerName.join();
//         }
//         else {
//             dmServerName = dmServerName.join(", ");
//         }

//         return dmServerName;
//     }


//     // const renderDMWEBRTCModal = () => {
//     //     if (activeModals.StrifeWebRtcCall === true) {
//     //         return (
//     //             <STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS_CONTAINER />
//     //         )
//     //     }
//     //     else {
//     //         return null;
//     //     }
//     // }


//     const renderNoFriendsDmModal = () => {
//         if (noFriendsDmModal === true) {
//             return (
//                 <NoFriendsDMModalContainer
//                     homeBar={true}
//                     dmInvite={true}
//                     setNoFriendsDmModal={setNoFriendsDmModal}
//                 />
//             )
//         }
//     }

//     const renderNotFriendsDmModal = () => {
//         if (notFriendsDMModal === true) {
//             return (
//                 <NotFriendsInviteToDmModalContainer setNotFriendsDMModal={setNotFriendsDMModal} otherUser={parseOtherUser} />
//             )
//         }
//     }

//     const renderInviteToDMSModal = () => {
//         if (invite2DMModal === true) {
//             return (
//                 <InviteToDmModalContainer
//                     setInvite2DMModal={setInvite2DMModal}
//                     dmServerMembers={dmServerMembers}
//                     dmServer={dmServer}
//                     dmServerId={dmServerId}
//                 />
//             )
//         }
//     }


//     const handleOpenModal = (e) => {
//         // let currTop = e.currentTarget.getBoundingClientRect().top
//         // setPopupTop(currTop);
//         let membersOfthisServer = Object.values(dmServerMembers);
//         if (membersOfthisServer.length === 2) {
//             let otherUser = Object.values(dmServerMembers).filter(member => member.id !== currentUser.id);
//             otherUser = otherUser[0];
//             fetchUser(otherUser.id).then((result) => {
//                 if (result.friend_request_status !== 3) {
//                     // openModalWithProps({
//                     //     top: currTop,
//                     //     otherUser: result,
//                     // })
//                     // openModal('notFriendsInviteToDmModal');
//                     setParseOtherUser(result);
//                     setNotFriendsDMModal(true);

//                 }

//                 else if (result.friend_request_status === 3) {
//                     reSyncCurrentUser(currentUser.id).then((result) => {
//                         if (result.numberOfFriends === 0 || result.numberOfFriends === 1) {
//                             // openModalWithProps({ homeBar: true, dmInvite: true })
//                             // openModal('noFriendsDMModal');
//                             setNoFriendsDmModal(true);
//                         }
//                         else {
//                             handlePopupShow(e);
//                         }
//                     })
//                 }

//             })

//         }
//         else if (membersOfthisServer.length >= 2) {
//             reSyncCurrentUser(currentUser.id).then((result) => {
//                 if (result.numberOfFriends === 0) {
//                     // openModalWithProps({ homeBar: true, dmInvite: true })
//                     // openModal('noFriendsDMModal');
//                     setNoFriendsDmModal(true);

//                 }
//                 else {
//                     handlePopupShow(e);
//                 }
//             })
//         }
//     }



//     let membersOfthisServer = Object.values(dmServerMembers);
//     let otherUser;
//     let prefilled = false;
//     let getColor;
//     let colorObtained = false;


//     if (membersOfthisServer.length === 2) {
//         otherUser = Object.values(dmServerMembers).filter(member => member.id !== currentUser.id);
//         prefilled = true;
//     }

//     else if (membersOfthisServer.length > 2) {
//         getColor = Object.values(dmServerMembers).at(-1);
//         colorObtained = true;
//     }

//     let hideMembersToolTipMessage = _viz === false ? ("Hide Member List") : ("Show Member List");
//     let hideUserProfileToolTipMessage = viz === false ? ("Hide User Profile") : ("Show User Profile");

//     let renderedGroupChatIcon = colorObtained === true ? (
//         <div>
//             <div className="dmshnb-avatar-wrapper" role="img" aria-hidden="true">
//                 <svg width="24" height="24" viewBox="0 0 24 24" className="dmshnb-status-mask dmshnb-svg-avatar-wrapping" aria-hidden="true">
//                     <foreignObject x="0" y="0" width="24" height="24" mask="url(#svg-mask-avatar-default)">
//                         <div className="dmshnb-avatar-stack">
//                             <img src={groupChatIconAvatar} alt=" " className={`dmshnb-avatar group-chat-icon-color-${getColor.color_tag}`} aria-hidden="true" />
//                         </div>
//                     </foreignObject>
//                 </svg>
//             </div>
//         </div>

//     ) : ('');


//     let renderedOtherDmMemberAvatar = prefilled === true ? (
//         <div className="dmshnb-avatar-wrapper" role="img" aria-hidden="false">
//             <svg width="30" height="30" viewBox="0 0 30 30" className="dmshnb-status-mask dmshnb-svg-avatar-wrapping" aria-hidden="true">
//                 <foreignObject x="0" y="0" width="24" height="24" mask="url(#svg-mask-avatar-status-round-24)">
//                     <div className="dmshnb-avatar-stack">
//                         {
//                             otherUser[0].photo === undefined ? (
//                                 <img className={`dmshnb-avatar color-${otherUser[0].color_tag}`} src={render_User_PFP} alt=" " aria-hidden="true" />

//                             ) : (
//                                 <img className={`dmshnb-avatar`} src={otherUser[0].photo} alt=" " aria-hidden="true" />
//                             )
//                         }
//                     </div>
//                 </foreignObject>
//                 <rect width="8" height="8" x="16" y="16" fill={returnUserBadgeFillColor(otherUser[0].online)}
//                     mask={returnUserOnlineActivityStatusBadgeMaskIMG(otherUser[0].online)} className="dmshnb-svg-masked-pointer-events"></rect>
//             </svg>
//         </div>
//     ) : ('');


//     let oneToOneChatDisplayName = membersOfthisServer.length === 2 ? (
//         <div className={`dms-hbar-name`}>
//             <h1 className="dms-hbar-name-header">{displayName}</h1>
//         </div>
//     ) : ('');

//     let groupChatDisplayName = membersOfthisServer.length > 2 ? (
//         <div className={`group-chat-container`}>
//             <div className="outer-group-chat-name">
//                 <div className="inner-group-chat-container"
//                     onClick={() => { setShowEdit(true) }}
//                 >
//                     <form onSubmit={handleEditName}>
//                         <input id="gni" className={`group-name-input`}
//                             type="text"
//                             spellCheck={false}
//                             ref={inputRef}
//                             onChange={(e) => setDMServerName(e.currentTarget.value)}
//                             placeholder={displayName}
//                             value={DmServerName}
//                             maxLength={100}
//                             minLength={1}
//                             autoComplete={"off"}
//                             onBlur={(e) => {
//                                 handleEditName(e);
//                             }}
//                         />
//                         <div id="ign" className={`input-group-name`} >
//                             {/* {displayName} */}
//                             {DmServerName}
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     ) : ('');



//     let renderUserProfileIconAndContainer = membersOfthisServer.length === 2 ? (
//         <div id="hide-user-profile"
//             className={`dmshb-tool-icon-wrapper`}
//             data-tip data-for="hide-user-profile-tip"
//             onClick={() => { isViz(); setViz(!viz) }}
//         >
//             <svg x="0" y="0" className={`icon-hide-user-profile ${viz === false ? `selected` : ``}`} aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                 <g fill="none">
//                     <path fillRule="evenodd" clipRule="evenodd" d="M12 22C12.4883 22 12.9684 21.965 13.438 21.8974C12.5414 
//                 20.8489 12 19.4877 12 18C12 17.6593 12.0284 17.3252 12.083 17H6V16.0244C6 14.0732 10 13 12 13C12.6215 13 13.436 13.1036 
//                 14.2637 13.305C15.2888 12.4882 16.5874 12 18 12C19.4877 12 20.8489 12.5414 21.8974 13.438C21.965 12.9684 22 12.4883 22 
//                 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 12C13.66 12 15 10.66 15 9C15 7.34 
//                 13.66 6 12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12Z" fill="currentColor">
//                     </path>
//                     <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091
//                      14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" fill="currentColor">
//                     </path>
//                 </g>
//             </svg>
//             <ReactTooltip
//                 className="dmshb-hide-user-profile-tool-tip "
//                 textColor="#B9BBBE"
//                 backgroundColor="#191919"
//                 id="hide-user-profile-tip"
//                 place="bottom"
//                 effect="solid">
//                 {hideUserProfileToolTipMessage}
//             </ReactTooltip>
//         </div>
//     ) : ("");


//     let renderMembersIconAndContainer = membersOfthisServer.length >= 3 ? (
//         <div id="hide-group-chat"
//             className={`dmshb-tool-icon-wrapper`}
//             data-tip data-for="hide-members-tip"
//             onClick={() => { isViz(); }}
//         >
//             <svg x="0" y="0" className={`icon-hide-group-chat ${_viz === false ? `selected` : ``}`} aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10
//                                      12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 
//                                      8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z">
//                 </path>
//                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 8.00598C14 10.211 
//                                     12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 
//                                     4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 
//                                     19.006V20.006H2V19.006Z">
//                 </path>
//                 <path fill="currentColor" d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697
//                                          14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z">
//                 </path>
//                 <path fill="currentColor" d="M14.8834 11.9077C16.6657 11.5044 18.0001 
//                                         9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 
//                                         5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 
//                                         11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z">
//                 </path>
//             </svg>
//             <ReactTooltip
//                 className="dmshb-hide-members-tool-tip"
//                 textColor="#B9BBBE"
//                 backgroundColor="#191919"
//                 id="hide-members-tip"
//                 place="bottom"
//                 effect="solid">
//                 {hideMembersToolTipMessage}
//             </ReactTooltip>
//         </div>
//     ) : ("");

//     return (
//         <section className="dm-server-header-bar">
//             {renderNoFriendsDmModal()}
//             {renderNotFriendsDmModal()}
//             {renderVideoCallModal()}
//             {/* {renderVoiceCallModal()} */}
//             {renderInviteToDMSModal()}
//             {/* {showPopUp && <InviteToDmModalContainer
//                 top={popupTop}
//                 setShowPopUp={setShowPopUp}
//                 topBar={true}
//                 dmServerMembers={dmServerMembers}
//                 dmServer={dmServer}
//                 dmServerId={dmServerId}
//             />} */}

//             {/* {showPopUpCall && <InviteToDMCallModalContainer
//                 top={popupTopCall}
//                 setShowPopUp={setShowPopUpCall}
//                 topBar={true}
//                 dmServerMembers={dmServerMembers}
//                 dmServer={dmServer}
//                 dmServerId={dmServerId}
//             />
//             } */}

//             <div className="dm-server-bar-children">
//                 <div>
//                     {renderedGroupChatIcon}
//                     {renderedOtherDmMemberAvatar}
//                 </div>

//                 {oneToOneChatDisplayName}
//                 {groupChatDisplayName}

//                 <div className="dmshb-spacer"></div>
//             </div>

//             <div className="dmshb-tool-bar">


//                 <div className="dmshb-tool-icon-wrapper" data-tip data-for="start-voice-call"
//                     // onClick={(e) => { handlePopupShowVoiceCall(e) }}
//                 >
//                     <svg x="0" y="0" className="icon-phone" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                         <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11 5V3C16.515 3 21 7.486 21 13H19C19 
//                             8.589 15.411 5 11 5ZM17 13H15C15 10.795 13.206 9 11 9V7C14.309 7 17 9.691 17 13ZM11 11V13H13C13 
//                             11.896 12.105 11 11 11ZM14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22H13C6.925 
//                             22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 
//                             14.938 9 18 13 18V17C13 16.447 13.447 16 14 16Z">
//                         </path>
//                     </svg>
//                     <ReactTooltip
//                         className="start-voice-call-message-tool-tip"
//                         textColor="#B9BBBE"
//                         backgroundColor="#191919"
//                         id="start-voice-call"
//                         place="bottom"
//                         effect="solid">
//                         Start Voice Call
//                     </ReactTooltip>
//                 </div>
//                 <div className="dmshb-tool-icon-wrapper" data-tip data-for="start-video-call" onClick={(e) => { handlePopupShowVideoCall(e) }}>
//                     <svg x="0" y="0" className="icon-webcall" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                         <path fill="currentColor" d="M21.526 8.149C21.231 7.966 20.862 7.951
//                              20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 
//                              7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 
//                              15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 
//                              15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z">
//                         </path>
//                     </svg>
//                     <ReactTooltip
//                         className="start-video-call-message-tool-tip"
//                         textColor="#B9BBBE"
//                         backgroundColor="#191919"
//                         id="start-video-call"
//                         place="bottom"
//                         effect="solid">
//                         Start Video Call
//                     </ReactTooltip>
//                 </div>
//                 <div className="dmshb-tool-icon-wrapper" data-tip data-for="pin-messages">
//                     <svg x="0" y="0" className="icon-pin-messages" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                         <path fill="currentColor" d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596
//                              8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 
//                              18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z">
//                         </path>
//                     </svg>
//                     <ReactTooltip
//                         className="pinned-messages-tool-tip"
//                         textColor="#B9BBBE"
//                         backgroundColor="#191919"
//                         id="pin-messages"
//                         place="bottom"
//                         effect="solid">
//                         Pinned Messages
//                     </ReactTooltip>
//                 </div>

//                 <div
//                     className="dmshb-tool-icon-wrapper"
//                     data-tip data-for="dmshb-invite-members"
//                     onClick={(e) => {
//                         handleOpenModal(e);
//                     }}

//                 >
//                     <svg x="0" y="0" className="icon-add-members" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                         <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 
//                             12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13
//                              2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z">
//                         </path>
//                     </svg>
//                     <ReactTooltip
//                         className="dmshb-invite-members-tool-tip"
//                         textColor="#B9BBBE"
//                         backgroundColor="#191919"
//                         id="dmshb-invite-members"
//                         place="bottom"
//                         effect="solid">
//                         Add Friends to DM
//                     </ReactTooltip>
//                 </div>

//                 {renderUserProfileIconAndContainer}
//                 {renderMembersIconAndContainer}

//                 <div className="dmshbar-search-bar-wrapper" >
//                     <div className="dmshbar-search-bar-inner-wrapper">
//                         <div className="dmshbar-search-bar">
//                             <div className="draft-edit">
//                                 <div className="public-draft-edit">
//                                     <div className="public-draft-edit-placeholder">Search</div>
//                                 </div>
//                                 <div className="public-draft-editor-container">
//                                     <div className="public-draft-editor-container-placeholder">
//                                         <div className="data-contents">
//                                             <div className="data-block">
//                                                 <div className="data-key-offset">
//                                                     <span className="data-key-offset2"></span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="dmshbar-mag-icon-container">
//                                 <div className="mag-container">
//                                     <svg className="mag-icon-2-visible" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                         <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18
//                                                      7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 
//                                                      4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 
//                                                      18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397
//                                                       16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758
//                                                        5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 
//                                                        16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z">
//                                         </path>
//                                     </svg>
//                                     <svg className="mag-icon-2" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                         <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 
//                                                         13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
//                                         </path>
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {
//                     showUpdate && (<div className="dmshb-tool-icon-wrapper" data-tip data-for="update-ready-tip" onClick={(e) => handleRemoveUpdateIcon(e)}>
//                         <svg x="0" y="0" className="icon-dmshnb-update-ready" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                             <path className="dmshnb-update-icon-fill" fill="currentColor" fillRule="evenodd" clipRule="evenodd"
//                                 d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18
//                          20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z">
//                             </path>
//                         </svg>
//                         <ReactTooltip
//                             className="dmshb-inbox-message-tool-tip"
//                             textColor="#B9BBBE"
//                             backgroundColor="#191919"
//                             id="update-ready-tip"
//                             place="bottom"
//                             effect="solid">
//                             Update Ready!
//                         </ReactTooltip>
//                     </div>)
//                 }


//                 <div className="dmshb-tool-icon-wrapper" data-tip data-for="inbox-messages-tip">
//                     <svg x="0" y="0" className="icon-dms-inbox" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                         <path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21
//                                      19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" fill="currentColor">
//                         </path>
//                     </svg>
//                     <ReactTooltip
//                         className="dmshb-inbox-message-tool-tip"
//                         textColor="#B9BBBE"
//                         backgroundColor="#191919"
//                         id="inbox-messages-tip"
//                         place="bottom"
//                         effect="solid">
//                         Inbox
//                     </ReactTooltip>
//                 </div>

//                 <a className="dmshnb-help-tool-bar" href="https://support.discord.com" target="_blank" rel="noreferrer noopener">
//                     <div className="dmshnb-help-tool-bar-icon-wrapper" data-tip data-for="help-messages-tip">
//                         <svg className="icon-dmshnb-help" x="0" y="0" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                             <path fill="currentColor" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515
//                                          22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31
//                                           15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13
//                                            13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896
//                                             10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z">
//                             </path>
//                         </svg>
//                         <ReactTooltip
//                             className="dmshb-help-tool-tip"
//                             textColor="#B9BBBE"
//                             backgroundColor="#191919"
//                             id="help-messages-tip"
//                             place="bottom"
//                             effect="solid">
//                             Help
//                         </ReactTooltip>
//                     </div>
//                 </a>

//             </div>
//         </section>
//     )
// }

// export default DmServerHeaderNavBar;
