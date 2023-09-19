// import React from 'react';
// import { useRef, useEffect, useState } from "react";
// import REACT_PORTAL from '../../../utils/ReactPortal_api_util';
// import { closeOnEsc } from "../../../utils/close_hook_modals_api_utils";
// import { fetchUser } from '../../../utils/session_api_util';
// import { returnUserBadgeFillColor } from '../../../utils/user_status_badge_color_api_util';
// import { returnUserOnlineActivityStatusBadgeMaskIMG } from '../../../utils/user_online_activity_status_badge_api_util';
// import { fetchIsServerMember, fetchServerMembership } from '../../../utils/server_membership_api_util';
// import { fetchIsDmMember } from '../../../utils/dm_member_api_util';
// import { Tooltip } from 'react-tooltip';
// import { AddRolePlusIcon, PenEditIcon, StrifeBotTagIcon, StrifeNitroBadgeIcon, WumpusIcon } from '../../front_end_svgs/Strife_svgs';
// import { appPullerPullAndHoldAnimation, appPullerPullAnimation } from '../../../utils/appPullerAnimation_api_util';

// const ServerUserOptionsMessengerModal = (props) => {
//     const [maxTop, setMaxTop] = useState(null);
//     let documentHeight, previewHeight;

//     useEffect(() => {
//         const getMod = document.getElementById('upc-mod');
//         if (maxTop) {
//             // setTimeout(() => { getMod.style.transition = "top 0.2s" }, 200);
//         }
//         else if (getMod) {
//             documentHeight = document.querySelector(".app-puller").getBoundingClientRect().height;
//             previewHeight = getMod.getBoundingClientRect().height;
//             setMaxTop(documentHeight - previewHeight - 50);
//         }

//     });



//     useEffect(() => {
//         setRePositionTop(props.top);

//         props.fetchUser(props.memberId).then((action) => {
//             const newfriend = action.user
//             setMemberData(newfriend);
//             setMemberStatus(newfriend);
//         })

//         if (props.serverType === "SERVER") {
//             fetchServerMembership({ user_id: props.memberId, server_id: props.ServerID }).then((result) => {
//                 setServerMembershipJoinedDate(result.serverJoinedDateUpc);
//             }, (error) => { setServerMembershipJoinedDate(props.serverMemberShipDate) })
//         }
//         setscreenInnerHeight(window.innerHeight);
//         calculateModalPlacement();

//         return function cleanUp () {
//             if (props.errors.length > 0) {
//                 props.removeFriendshipErrors();
//             }
//             if (props.dmServerErrors.length > 0) {
//                 props.removeDmServerErrors();
//             }
//             if (props.serverErrors.length > 0) {
//                 props.removeServerErrors();
//             }
//             if (props.channelErrors.length > 0) {
//                 props.removeChannelErrors();
//             }
//             if (props.sessionErrors.length > 0) {
//                 props.removeSessionErrors();
//             }
//         }

//     }, []);

//     useEffect(() => {

//         //combined with the async cable to dispatch actions across users for relationship actions 
//         // when a user does some member action on another user if that other user is online then 
//         //they are sent new data for the user that just did some member interaction with them 
//         //this data has the latest info and since its stored in the user state we can search it 
//         // when the user state changes find the user and sync the state data with the new data 
//         // which will change the selectable member options and update any banners avatars, or 
//         // displayable user info. Note this fires when this modal is rendered but does not 
//         // modify component state member as it is undefined currently which is the same value the
//         // find function returns redux dispatch for fetchUser runs and adds the user data into the member state 
//         // when a receiveUser dispatch is called and it is data that matches the user being viewed this will fire and 
//         // change the member state to the new info. Note changes are visually reflected if the modal is still open and 
//         // the user on the other end has executing some available action that would violate action choices available on the 
//         //current users end. it will then re-render the latest data. If the current user is currently viewing 
//         // a user that has just changed their banner,avatar , username, display name it will re-render due to another 
//         // cable action un related to friendships but to servers and dmservers and its members. 

//         let friendDataReSync = props.users.find((user) => user.id === member.id);

//         if (friendDataReSync) {
//             setMemberData(friendDataReSync);
//             setMemberStatus(friendDataReSync);
//         }

//     }, [props.users])

//     useEffect(() => {
//         window.addEventListener("resize", screenHeightChangeListener, { capture: true, passive: false });
//         calculateModalPlacement();

//         return function cleanUp () {
//             window.removeEventListener("resize", screenHeightChangeListener, { capture: true, passive: false });
//         }
//     }, []);


//     const [memberStatus, setMemberStatus] = useState([]);
//     const [member, setMemberData] = useState({});
//     const [serverMembershipJoinedDate, setServerMembershipJoinedDate] = useState('');
//     const popupRef = useRef();
//     closeOnEsc(props.setShowPopup);
//     const roleNames = ["Server Member", "Mods", '$TR!F3 N!TR0 Booster'];
//     const roleNameColors = {
//         0: 'rgb(255, 71, 76);',
//         1: 'rgb(52, 152, 219)',
//         2: 'rgb(243, 192, 248)',
//     }
//     const defaultcolorPalleteRef = useRef(Math.random());
//     const colorPalleteAltRef = useRef(Math.random());
//     const rolesOrNoRolesRef = useRef(Math.random());
//     const roleNameRef = useRef(Math.floor(Math.random() * (roleNames.length - 1) + 1));
//     const dmMessageRef = useRef(null);
//     const noteRef = useRef(null);
//     const dmMembersArray = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx]);
//     const [message, setMessage] = useState('');
//     const [note, setNote] = useState('');
//     const [rePositionTop, setRePositionTop] = useState("");
//     const [screenInnerHeight, setscreenInnerHeight] = useState(0);



//     const screenHeightChangeListener = (e) => {
//         e.preventDefault();
//         if (window.innerHeight !== screenInnerHeight) {
//             calculateModalPlacement();
//         }
//         setscreenInnerHeight(window.innerHeight);
//     }

//     const Strife_Bot_IDs = [1, 2, 3, 4];

//     let if_Bot_tag = Strife_Bot_IDs.includes(member.id) ? (
//         <span className="bot-sticker">
//             <StrifeBotTagIcon aria-label="Verified $TR!F3 B0T" className="bot-check-mark" data-tooltip-position-strategy='fixed' data-tooltip-id="suom-tool-tip" data-tooltip-content={'Verified $TR!F3 B0T'} />
//             <span className="bot-text">$TR!F3 B0T</span>
//         </span>
//     ) : ("");


//     let discord_icon = (
//         <WumpusIcon className="upc-dis-icon" data-tooltip-position-strategy='fixed' data-tooltip-id="suom-tool-tip" data-tooltip-content={'$TR!F3'} />
//     );

//     let upcStrifeNitroWrapper = (
//         <div className='upc-strife-nitro-wrapper' data-tooltip-id="suom-tool-tip"
//             data-tooltip-position-strategy='fixed' data-tooltip-place='bottom'
//             data-tooltip-content={"Customize your own profile theme, banner, animated avatar, and more with $TR!F3 N!TR0!"}>
//             <div className="upc-strife-nitro-badge">
//                 <StrifeNitroBadgeIcon className="upc-strife-nitro-icon" height={16} width={16} />
//             </div>
//         </div>
//     );


//     const handleCloseOnOuterClick = (e) => {
//         e.preventDefault();
//         props.setShowPopup(false);
//     }


//     const splitServerName = (serverName) => {
//         let serverAcryo = serverName.split(" ").map((parts) => parts[0]).join("");
//         return serverAcryo.length > 5 ? serverAcryo.slice(0, 5) : serverAcryo;
//     }

//     const generateFontSize = (serverAcryoName) => {
//         if (serverAcryoName.length === 1 || serverAcryoName.length === 2) {
//             return 8;
//         }
//         else if (serverAcryoName.length === 3 || serverAcryoName.length === 4) {
//             return 6;
//         }
//         else if (serverAcryoName.length >= 5) {
//             return 4;
//         }
//     }


//     const handleOpenUserSettings = (e) => {
//         e.preventDefault();
//         props.setShowPopup(false);
//         // appPullerPullAnimation();
//         appPullerPullAndHoldAnimation();
//         props.openModal('userSettings');
//     }


//     const handleDmMessageVerification = (e) => {

//         //if case on the other side if the user has change being interacted with the relationship status has changed 
//         // check if the the current user has been blocked if so deny the message being sent
//         // also validate the message being sent if it is empty after white space removal (i.e. spaces, tabs enter or carriage returns)
//         // call the function to handle the message else close the modal instead.
//         let blockIds = [-2, -1];

//         if (message.length === 0 || message.replace(/\s/g, '').length === 0) {
//             props.setShowPopup(false);
//             return;
//         }
//         else {
//             fetchUser(props.memberId).then((result) => {
//                 if (blockIds.includes(result.friend_request_status)) {
//                     props.setShowPopup(false);
//                     return;
//                 }
//                 else {
//                     handleDmMessage(e);
//                 }

//             }, (error) => {
//                 props.setShowPopup(false);
//             })
//         }

//     }



//     const handleDmMessage = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         const memberIds = [props.currentUser.id, parseInt(member.id)].sort((a, b) => a - b);
//         let new_dm_members = [props.currentUser, member];

//         for (let dmServer of props.dmServers) {
//             if (dmMembersArray(Object.values(dmServer.members).map((member) => member.id).sort((a, b) => a - b), memberIds)) {
//                 if (props.history.location.pathname !== `/$/channels/@me/${dmServer.id}`) {
//                     const messageHash = {
//                         body: message,
//                         sender_id: parseInt(props.currentUserId),
//                         dm_server_id: dmServer.id
//                     }
//                     props.createDmMessage(messageHash);
//                     props.history.push(`/$/channels/@me/${dmServer.id}`);
//                 }
//                 return;
//             }
//         }
//         // if dmserver does not already exists create one
//         const dmMemberInfo = JSON.parse(JSON.stringify(new_dm_members));
//         let newDmServerName = [];
//         let dmServerName = "";
//         for (let member of dmMemberInfo) {
//             if (member.id !== props.currentUser.id) {
//                 newDmServerName.push(member.username);
//             }
//         }
//         if (newDmServerName.length === 1) {
//             dmServerName = newDmServerName.join();
//         }
//         else {
//             dmServerName = newDmServerName.join(", ");
//         }
//         let submissionState = {
//             owner_id: props.currentUser.id,
//             // dm_server_name: dmServerName,
//             dm_member_ids: memberIds
//         }
//         let newDmServer;
//         props.createDmServer(submissionState).then((action) => {
//             newDmServer = action.dmserver;
//             const messageHash = {
//                 body: message,
//                 sender_id: parseInt(props.currentUserId),
//                 dm_server_id: newDmServer.id
//             }
//             props.createDmMessage(messageHash);
//             App.StrifeCore.perform('parse_New_Invited_DM_Member', { dm_member_id: member.id, dm_server_id: newDmServer.id });
//             props.reSyncCurrentUser(props.currentUserId).then(() => {
//                 props.history.push(`/$/channels/@me/${newDmServer.id}`);
//                 props.setShowPopup(false);
//             })

//         });
//         return;
//     }



//     const handleDmVerification = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         let blockIds = [-2, -1];
//         fetchUser(props.memberId).then((result) => {
//             if (blockIds.includes(result.friend_request_status)) {
//                 props.setShowPopup(false);
//                 return;
//             }
//             else {
//                 handleDm(e);
//             }

//         }, (error) => { props.setShowPopup(false); })

//     }


//     const handleDm = (e) => {
//         e.preventDefault();
//         e.stopPropagation();


//         const memberIds = [props.currentUser.id, parseInt(member.id)].sort((a, b) => a - b);
//         let new_dm_members = [props.currentUser, member];


//         for (let dmServer of props.dmServers) {
//             if (dmMembersArray(Object.values(dmServer.members).map((member) => member.id).sort((a, b) => a - b), memberIds)) {
//                 if (props.history.location.pathname !== `/$/channels/@me/${dmServer.id}`) {
//                     props.history.push(`/$/channels/@me/${dmServer.id}`);
//                 }
//                 return;
//             }
//         }
//         // if dmserver does not already exists create one
//         const dmMemberInfo = JSON.parse(JSON.stringify(new_dm_members));
//         let newDmServerName = [];
//         let dmServerName = "";
//         for (let member of dmMemberInfo) {
//             if (member.id !== props.currentUser.id) {
//                 newDmServerName.push(member.username);
//             }
//         }
//         if (newDmServerName.length === 1) {
//             dmServerName = newDmServerName.join();
//         }
//         else {
//             dmServerName = newDmServerName.join(", ");
//         }
//         let submissionState = {
//             owner_id: props.currentUser.id,
//             // dm_server_name: dmServerName,
//             dm_member_ids: memberIds
//         }
//         let newDmServer;
//         props.createDmServer(submissionState).then((action) => {
//             newDmServer = action.dmserver;
//             //add cable to send member id 
//             //we do send a request to receive all dmservers instead because sending a single dmserver causes the 
//             //message in the new server to render to that members screen if they are in some other dmserver 
//             App.StrifeCore.perform('parse_New_Invited_DM_Member', { dm_member_id: member.id, dm_server_id: newDmServer.id });
//             props.reSyncCurrentUser(props.currentUserId).then(() => {
//                 props.history.push(`/$/channels/@me/${newDmServer.id}`);
//                 props.setShowPopup(false);
//             })
//         });

//         return;

//     }


//     const handleIgnoreFriendRequest = (e) => {
//         e.preventDefault();

//         fetchUser(props.memberId).then((result) => {

//             if (result.friend_request_status === 2) {
//                 props.deleteFriendship({ user_id: props.currentUser.id, friend_id: member.id }).then(() => {
//                     App.StrifeCore.perform('parse_delete_friend_request', { user_id: props.currentUser.id, friend_id: member.id });
//                     props.setShowPopup(false);
//                 });
//                 return;
//             }
//             else {
//                 props.setShowPopup(false);
//                 return;
//             }

//         }, (error) => {
//             props.setShowPopup(false);
//         });
//         return;
//     }


//     const handleCancelFriendRequest = (e) => {
//         e.preventDefault();
//         fetchUser(props.memberId).then((result) => {

//             if (result.friend_request_status === 1) {
//                 props.deleteFriendship({ user_id: props.currentUser.id, friend_id: member.id }).then(() => {
//                     App.StrifeCore.perform('parse_delete_friend_request', { user_id: props.currentUser.id, friend_id: member.id });
//                     props.setShowPopup(false);
//                 });
//             }
//             else {
//                 props.setShowPopup(false);
//                 return;
//             }

//         }, (error) => {
//             props.setShowPopup(false);
//         });
//         return;

//     }

//     const handleCreateFriendShip = (e) => {
//         e.preventDefault();

//         fetchUser(props.memberId).then((result) => {

//             if (result.friend_request_status === 0) {
//                 props.createFriendship({ user_id: props.currentUser.id, friend_id: member.id }).then((action) => {
//                     let new_friend_request = action.friendship;
//                     App.StrifeCore.perform('parse_add_friend_request', { new_friend_request });
//                     props.setShowPopup(false);
//                 })

//             }
//             else {
//                 props.setShowPopup(false);
//                 return;
//             }

//         }, (error) => {
//             props.setShowPopup(false);
//         })

//         return;
//     }


//     const handleDeleteFriendShip = (e) => {
//         e.preventDefault();

//         fetchUser(props.memberId).then((result) => {
//             if (result.friend_request_status === 3) {
//                 props.setShowDeletePopup(true);
//                 props.setShowPopup(false);
//             }
//             else {
//                 props.setShowPopup(false);
//                 return;
//             }

//         }, (error) => {
//             props.setShowPopup(false);
//         });

//         // not used here anymore this modal closes and opens another modal to asking to confirm this action then this function runs.
//         // props.deleteFriendship({ user_id: props.currentUser.id, friend_id: member.id }).then(() => {
//         //     App.StrifeCore.perform('parse_delete_friend_request', { user_id: props.currentUser.id, friend_id: member.id });
//         //     props.setShowPopup(false);
//         // });
//         // return;
//         return;
//     }


//     const handleUpdateFriendShip = (e) => {
//         e.preventDefault();

//         fetchUser(props.memberId).then((result) => {
//             if (result.friend_request_status === 2) {
//                 props.updateFriendship({ user_id: props.currentUser.id, friend_id: member.id }).then(() => {
//                     App.StrifeCore.perform('parse_update_friend_request', { user_id: props.currentUser.id, friend_id: member.id });
//                     props.setShowPopup(false);
//                 });
//             }
//             else {
//                 props.setShowPopup(false);
//                 return;
//             }

//         }, (error) => {
//             props.setShowPopup(false);
//         })

//         return;
//     }



//     const handleBlockUser = (e) => {
//         e.preventDefault();
//         let validBlockStatuses = [-2, 0];

//         let subState = {
//             friend_id: member.id,
//             user_id: props.currentUser.id
//         }

//         fetchUser(props.memberId).then((result) => {
//             if (validBlockStatuses.includes(result.friend_request_status) === true) {
//                 props.setShowBlockUserPopup(true);
//                 props.setShowPopup(false);
//                 return;
//             }
//             else {
//                 props.setShowPopup(false);
//                 return;
//             }

//         }, (error) => {
//             props.setShowPopup(false);
//         })

//         // no longer used we close this modal then open up another modal that runs this function
//         // props.blockUser({ user_id: props.currentUser.id, friend_id: member.id }).then(() => {
//         //     App.StrifeCore.perform('parse_block_request', { user_id: props.currentUser.id, friend_id: member.id });
//         //     props.setShowPopup(false);
//         // });
//         return;
//     }



//     const handleUnBlockUser = (e) => {
//         e.preventDefault();

//         let subState = {
//             friend_id: member.id,
//             user_id: props.currentUser.id
//         }

//         // safety check for in consideration if the relationship has changed somehow on the other users end

//         fetchUser(member.id)
//             .then((result) => {
//                 // if status is the same proceed
//                 if (result.friend_request_status === -1) {
//                     props.unBlockUser({ friend_id: member.id, user_id: props.currentUser.id }).then(() => {
//                         App.StrifeCore.perform('parse_unblock_request', { user_id: props.currentUser.id, friend_id: member.id });
//                         props.setShowPopup(false);
//                     });
//                 }
//                 else {
//                     // else change state which re-renders options, banners and layouts
//                     props.setShowPopup(false);
//                     return;
//                 }
//             }, (error) => {
//                 //if all else false close the modal as opening it back up would have the latest data
//                 props.setShowPopup(false);
//             })

//         return;
//     }


//     const handleKickUser = (e) => {
//         e.preventDefault();
//         let subState = {
//             dm_member_id: member.id,
//             dm_server_id: props.DmServerId
//         }

//         if (Object.values(props.dmServerMembers).length - 1 === 2) {

//             props.deleteDmServer(props.DmServerId).then(() => {
//                 props.history.push(`/$/loading/`);

//             })

//                 .then(() => {
//                     //this entire function removes the dmserver from redux state for all 3 members but if one of them is 
//                     //offline or not in the dmserver when it is destroyed the dmServer is still shown if they are currently
//                     //in the home dashboard clicking on it will redirect them back to the loading screen
//                     // but to prevent this from happening regardless we invoke a purge by taking the member ids
//                     //then sending them a request to perform a redux action to remove the id of the non existing dmServer
//                     let purged_Members = Object.values(props.dmServerMembers).map((user) => user.id)
//                     let purged_ids = purged_Members.filter((userID) => userID !== props.currentUser.id);
//                     App.StrifeCore.perform('purge_DmServer_Members', { dm_members: purged_ids, dm_server_id: props.DmServerId });
//                 })

//         }
//         else {

//             fetchIsDmMember({ dm_member_id: props.memberId, dm_server_id: props.DmServerId }).then((result) => {
//                 if (result === true) {
//                     props.kickUserfromGroupChat(member.id, subState).then(() => {
//                         App.StrifeCore.perform('kick_User_From_DmServer', { dm_member_id: member.id, dm_server_id: props.DmServerId });
//                         // remove later as this no longer gives a benefit however until leave in till changes are made to see a difference on removal
//                         props.fetchDmServer(props.DmServerId);
//                         props.setShowPopup(false);
//                     });
//                 }
//                 else {
//                     props.setShowPopup(false);
//                 }

//             }, (error) => {
//                 props.setShowPopup(false);
//             })

//         }

//         return;
//     }

//     const handleBanUser = (e) => {
//         e.preventDefault();

//         let subState = { user_id: member.id, server_id: props.ServerID, banned: 1 };

//         // check if user is still member aka they did not leave while the modal is still up by the server owner
//         fetchIsServerMember({ user_id: props.memberId, server_id: props.ServerID }).then((result) => {
//             if (result === true) {
//                 props.deleteServerMembership(member.id, subState).then(() => {
//                     App.StrifeCore.perform('_ASYNC_Ban_User_From_Server_', subState);
//                     props.setShowPopup(false);
//                 })
//             }
//             else {
//                 props.setShowPopup(false);
//             }

//         }, (error) => {
//             props.setShowPopup(false);
//         })

//         return;
//     }


//     let serverUserOptionsContent = "";

//     let kickUserOption = props.currentUser.id === props.DmServerOwner && props.serverType === 'DM_SERVER' ? (
//         <div className="mfom-item red" onClick={(e) => handleKickUser(e)}>
//             <div className="mfom-item-label">Kick User</div>
//         </div>
//     ) : ("");


//     let banUserFromServerTag = props.currentUser.id === props.ServerOwner && props.serverType === 'SERVER' ? (
//         <div className="mfom-item red" onClick={(e) => handleBanUser(e)}>
//             <div className="mfom-item-label">Ban User</div>
//         </div>
//     ) : ("");



//     let aboutMeSection = props.serverType === "SERVER" ? (
//         <div className='upc-section-content'>
//             <h2 className='upc-about-me-text'>About Me</h2>
//             <div className='upc-about-me-markup-container'>
//                 <div className='upc-about-me-markup-text-wrapper'>
//                     <span>Loading ... ... ... ... </span>
//                     <img className='upc-loading-status' alt="" />
//                 </div>
//             </div>
//         </div>
//     ) : ("");


//     let dmMemberSinceSection = props.serverType === 'DM_SERVER' ? (
//         <div className='upc-section-content'>
//             <h2 className='upc-strife-member-since-header'>$TR!F3 Member Since</h2>
//             <div className='upc-strife-member-since-container'>
//                 <div className='upc-strife-member-since-time'>{member.accountCreatedOn}</div>
//             </div>
//         </div>
//     ) : ("");

//     let serverMemberSinceSection = props.serverType === 'SERVER' ? (
//         <div className='upc-section-content'>
//             <h2 className='upc-strife-member-since-header'>Member Since</h2>
//             <div className='upc-strife-member-since-container'>
//                 {discord_icon}
//                 <div className='upc-strife-member-since-time'>{member.accountCreatedOn}</div>
//                 <div className='upc-member-since-divider'></div>
//                 {
//                     props.server.server_Icon === undefined ? (
//                         <div className='upc-member-since-server-icon-none' style={{ fontSize: `${generateFontSize(splitServerName(props.server.server_name))}px` }}
//                             data-tooltip-position-strategy='fixed' data-tooltip-id="suom-tool-tip" data-tooltip-content={`${props.server.server_name}`}>
//                             <div className='upc-server-acyro'>{splitServerName(props.server.server_name)}</div>
//                         </div>
//                     ) : (
//                         <div className='upc-member-since-server-icon'
//                             style={{ backgroundImage: `${props.server.server_Icon === undefined ? `none` : `url(${props.server.server_Icon})`}` }}
//                             data-tooltip-position-strategy='fixed' data-tooltip-id="suom-tool-tip" data-tooltip-content={`${props.server.server_name}`}>
//                         </div>
//                     )
//                 }
//                 <div className='upc-strife-member-since-time'>{`${serverMembershipJoinedDate}`}</div>
//             </div>
//         </div>
//     ) : ("");


//     let serverMemberRoles = props.serverType === 'SERVER' && member.id !== props.ServerOwner ? (
//         <div className='upc-section-content'>
//             {
//                 rolesOrNoRolesRef.current > 0.5 ? (
//                     <>
//                         <h2 className='upc-roles-text'>Roles</h2>
//                         <div className='upc-server-roles-root'>
//                             <div className='upc-role-obj upc-role-pill upc-role-pill-border'>
//                                 <div className="upc-role-remove-button">
//                                     <span className="upc-role-circle" style={{ backgroundColor: `${roleNameColors[roleNameRef.current]}` }}></span>
//                                 </div>
//                                 <div className='upc-role-name-text-wrapper'>
//                                     <div className='upc-role-name-text'>{`${roleNames[roleNameRef.current]}`}</div>
//                                 </div>
//                             </div>
//                             {
//                                 props.currentUser.id === props.ServerOwner ? (

//                                     <button className='upc-add-roles-button upc-role-obj upc-role-pill upc-role-pill-border' type="button">
//                                         <AddRolePlusIcon className="upc-add-roles-button-icon" />
//                                     </button>

//                                 ) : ("")
//                             }
//                         </div>
//                     </>

//                 ) : (
//                     <>
//                         <h2 className='upc-roles-text'> No Roles</h2>
//                         {
//                             props.currentUser.id === props.ServerOwner ? (
//                                 <div className='upc-server-roles-root'>
//                                     <button className='upc-add-roles-button upc-role-obj upc-role-pill upc-role-pill-border' type="button">
//                                         <AddRolePlusIcon className="upc-add-roles-button-icon" />
//                                     </button>
//                                 </div>
//                             ) : ("")
//                         }
//                     </>
//                 )
//             }

//         </div>
//     ) : ("");


//     let serverOwnerRoles = props.serverType === 'SERVER' && member.id === props.ServerOwner ?
//         (
//             <div className='upc-section-content'>
//                 <h2 className='upc-roles-text'>Roles</h2>
//                 <div className='upc-server-roles-root'>
//                     <div className='upc-role-obj upc-role-pill upc-role-pill-border'>
//                         <div className="upc-role-remove-button">
//                             <span className="upc-role-circle" style={{ backgroundColor: `var(--gold-raw)` }}></span>
//                         </div>
//                         <div className='upc-role-name-text-wrapper'>
//                             <div className='upc-role-name-text'>Server Owner</div>
//                         </div>
//                     </div>
//                     {
//                         props.currentUser.id === props.ServerOwner ? (
//                             <button className='upc-add-roles-button upc-role-obj upc-role-pill upc-role-pill-border' type="button">
//                                 <AddRolePlusIcon className="upc-add-roles-button-icon" />
//                             </button>
//                         ) : ("")
//                     }
//                 </div>
//             </div>
//         ) : ("");

//     let pencilIcon = member.id === props.currentUser.id ? (
//         <div className='upc-pencil-container' data-tooltip-position-strategy='fixed' data-tooltip-id="suom-tool-tip"
//             data-tooltip-content={`Edit Profile`} onClick={(e) => handleOpenUserSettings(e)}>
//             <PenEditIcon aria-label="Edit Profile" className="upc-pencil-icon" aria-hidden="false" role="img" width={18} height={18} />
//         </div>
//     ) : ("");

//     const calculateModalPlacement = () => {
//         let currTop = props.popupRawTop;
//         const realWidth = window.screen.width * window.devicePixelRatio;
//         const realHeight = window.screen.height * window.devicePixelRatio;

//         if (props.serverType === "DM_SERVER") {
//             if (currTop > window.innerHeight * 0.93158) {
//                 if (realWidth >= 3800 && realHeight >= 2100) {
//                     if (currTop >= window.innerHeight * 0.949628) {
//                         currTop /= 1.15
//                     }
//                     else {
//                         currTop /= 1.10;
//                     }
//                     setRePositionTop(currTop);
//                 }
//                 else {
//                     currTop /= 3.25;
//                     setRePositionTop(currTop);
//                 }
//             }
//             else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158) {

//                 if (realWidth >= 3800 && realHeight >= 2100) {

//                     if (currTop >= window.innerHeight * 0.90538 && currTop < window.innerHeight * 0.93158) {
//                         currTop /= 1.1;
//                     }
//                     setRePositionTop(currTop);
//                 }
//                 else {
//                     if (currTop >= window.innerHeight * 0.90538 && currTop < window.innerHeight * 0.93158) {
//                         currTop /= 3.1;
//                     }
//                     else if (currTop >= window.innerHeight * 0.817255 && currTop < window.innerHeight * 0.90538) {
//                         currTop /= 3;
//                     }

//                     else if (currTop >= window.innerHeight * 0.63517 && currTop < window.innerHeight * 0.817255) {
//                         currTop /= 2.55;
//                     }

//                     else {
//                         currTop /= 2;
//                     }
//                     setRePositionTop(currTop);
//                 }
//             }

//             else if (currTop <= window.innerHeight * 0.145560) {
//                 setRePositionTop(20);
//             }
//             else {
//                 setRePositionTop(20);
//             }
//         }

//         else if (props.serverType === "SERVER") {

//             if (realWidth >= 3800 && realHeight >= 2100) {
//                 if (currTop <= window.innerHeight * 0.145560) {
//                     currTop = 20;
//                 }
//                 else if (currTop >= window.innerHeight * 0.145560 && currTop < window.innerHeight * 0.710665) {
//                     currTop = currTop;
//                 }
//                 else if (currTop >= window.innerHeight * 0.710665 && currTop < window.innerHeight * 0.90538) {
//                     currTop /= 1.25;
//                 }
//                 else if (currTop >= window.innerHeight * 0.90538) {
//                     currTop /= 1.4;
//                 }
//                 else {
//                     currTop = 20;
//                 }
//             }
//             else {
//                 if (props.messageVersion === true && parseInt(props.memberId) === props.currentUser.id) {
//                     currTop= props.top 
//                 }
//                 else {
//                     // the server version of server user options modal can reach around ~96%+ of the normal 1080p screen so only 
//                     // one option remains.
//                     currTop = 20;
//                 }

//             }
//             setRePositionTop(currTop);
//         }
//     }

//     let memberBanner = member.banner === undefined ?
//         (

//             <svg className="upc-bannerSVGwrapper" viewBox="0 0 340 90" >
//                 <mask id="uid_1414">
//                     <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
//                     <circle fill="black" cx="58" cy="82" r="46"></circle>
//                 </mask>
//                 <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_1414)">
//                     <div className={`upc-banner color-${member.color_tag}`}>
//                         {upcStrifeNitroWrapper}
//                         {pencilIcon}
//                     </div>
//                 </foreignObject>
//             </svg>

//         ) : (
//             <svg className="upc-bannerSVGwrapper-pro" viewBox="0 0 340 120">
//                 <mask id="uid_3244">
//                     <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
//                     <circle fill="black" cx="58" cy="112" r="46"></circle>
//                 </mask>
//                 <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_3244)">
//                     <div className={`upc-banner-pro ${member.banner === undefined ? `color-${member.color_tag}` : ``}`}
//                         style={{ backgroundImage: `${member.banner === undefined ? `none` : `url(${member.banner})`}`, backgroundColor: `${member.banner === undefined ? `` : `rgb(21, 20, 20)`}` }}>
//                         {upcStrifeNitroWrapper}
//                         {pencilIcon}
//                     </div>
//                 </foreignObject>
//             </svg>
//         )

//     let memberPhoto = (
//         <div className={`upc-pfp-icon-wrapper ${member.banner ? `pro` : ``}`} role='button'
//             onClick={(e) => { props.setShowMegaPopUp(true); props.setShowPopup(false); }}>
//             <div className='upc-pfp-hover-target'>
//                 <div className='upc-avatar-wrapper' role='img'>
//                     <svg width="92" height="92" viewBox="0 0 92 92" className="upc-avatar-svg-mask" aria-hidden="true">
//                         <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-status-round-80)">
//                             <div className="upc-avatar-stack">
//                                 {
//                                     member.photo === undefined ? (
//                                         <img className={`upc-avatar-pfp icon-colors-${member.color_tag}`} alt=" " aria-hidden="true" />
//                                     ) : (
//                                         <img className="upc-avatar-pfp" src={member.photo} alt=" " aria-hidden="true" />
//                                     )
//                                 }
//                             </div>
//                         </foreignObject>
//                         <circle fill="black" r="14" cx="68" cy="68" style={{ opacity: `0.45` }}></circle>
//                         <rect width="16" height="16" x="60" y="60" fill={returnUserBadgeFillColor(member.online)}
//                             mask={returnUserOnlineActivityStatusBadgeMaskIMG(member.online)}
//                             className="upc-avatar-pointer-events" data-tooltip-id="suom-tool-tip"
//                             data-tooltip-position-strategy='fixed' data-tooltip-content={`${member.online ? `Online` : `Offline`}`}></rect>
//                     </svg>
//                 </div>
//             </div>
//             <svg width="80" height="80" className="upc-avatar-hint" viewBox="0 0 80 80">
//                 <foreignObject x="0" y="0" width="80" height="80" overflow="visible" mask="url(#svg-mask-avatar-status-round-80)">
//                     <div className="upc-avatar-hint-inner">View Profile</div>
//                 </foreignObject>
//             </svg>
//         </div>
//     )

//     let badgeContainer = (
//         <div className='upc-profile-badges-container' role='group'>
//             <a className='usm-user-strife-tag-badge-anchor' role="button" data-tooltip-position-strategy='fixed' data-tooltip-id="suom-tool-tip"
//                 data-tooltip-content={`Originally known as ${member.username}#${member.strife_id_tag}`}>
//                 <img className='usm-user-strife-tag-badge' alt=" " />
//             </a>
//         </div>
//     )

//     let noteContainer = (
//         <div className='upc-section-content'>
//             <h2 className='upc-note-title'>Note</h2>
//             <div className='upc-note-ta-container'>
//                 <textarea className='upc-note-ta-container-text-area global-scrollbar-ghost-hairline global-scrollbar-no-border'
//                     maxLength={256} autoCorrect='off' autoComplete='off' value={note} ref={noteRef}
//                     onChange={(e) => setNote(e.currentTarget.value)}
//                     spellCheck={false} style={{ height: `36px` }} placeholder='Click to add a note'
//                 ></textarea>
//             </div>
//         </div>
//     )


//     let userNameSection = (
//         <div className='upc-section-content upc-username-section' >
//             <div>
//                 <div className='upc-user-text'>
//                     <h1 className='upc-user-display-name'>{member.username}</h1>
//                     <div className='upc-header-username-tag-wrapper'>
//                         <span className='upc-username'>{member.username}</span>
//                         <span className='upc-strife-tag'>#{member.strife_id_tag}</span>
//                         {if_Bot_tag}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

//     let blockMessageInput = (
//         <div className='upc-message-input-section'>
//             <div className='upc-input-wrapper upc-message-at-input-container'>
//                 <input className="upc-input disabled" type="text" minLength={0}
//                     maxLength={0} spellCheck={false} ref={dmMessageRef}
//                     autoFocus={false} autoCorrect='off' autoComplete='off' value={message}
//                     onChange={(e) => setMessage(e.currentTarget.value)}
//                     placeholder={`You cannot message this user`} disabled readOnly={true} />
//             </div>
//         </div>
//     )


//     let messageInputContainer = (
//         <div className='upc-message-input-section'>
//             <div className='upc-input-wrapper upc-message-at-input-container'>
//                 <input className="upc-input" type="text" maxLength={999}
//                     minLength={1} spellCheck={false} ref={dmMessageRef}
//                     autoFocus={true} autoCorrect='off' autoComplete='off' value={message}
//                     onChange={(e) => setMessage(e.currentTarget.value)}
//                     placeholder={`Message @${member.username}`}
//                     onKeyDown={(e) => {
//                         if (e.code === 'Enter' || e.code === 'NumpadEnter') {
//                             handleDmMessageVerification(e);
//                         }
//                     }}
//                 />
//             </div>
//         </div>
//     )



//     if (member.id === props.currentUser.id) {

//         let upcColorPallete = 'user-mini-upc theme-dark userProfileOuterTheme' +
//             ((defaultcolorPalleteRef.current > 0.50) ? ' ' + 'user-upc-profile-colors-0' : ' ' + `user-upc-profile-colors-${props.currentUser.color_tag}`) +
//             ((colorPalleteAltRef.current > 0.90) ? ' ' + 'alt' : '');

//         serverUserOptionsContent = (
//             <div id="upc-mod" className={`${props.messageVersion ? `upc-popout message-version` : `upc-popout`}`} ref={popupRef} onClick={(e) => e.stopPropagation()}
//                 style={{
//                     top: (maxTop ? Math.min(rePositionTop, maxTop) : rePositionTop), right: `${props.messageVersion ? `unset` : `247.909px`}`,
//                     left: `${props.messageVersion && props.userNameClicked ? `${props.getClientRect.width + props.getClientRect.left + 6}px`
//                         : props.messageVersion ? `376px` : ``}`
//                 }}>
//                 <div className={`upc-inner-wrapper ${props.messageVersion ? `reverse-animation` : ``}`}>
//                     <div className={upcColorPallete}>
//                         <div className={`user-mini-upc-inner ${props.currentUser.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
//                             {memberBanner}
//                             {memberPhoto}
//                             {badgeContainer}
//                             <div className='upc-popout-overlay-background upc-overlay-background' >
//                                 <span></span>
//                                 {userNameSection}
//                                 <div className='upc-content-divider'></div>
//                                 <div className='upc-content-section-scroller global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `4px` }}>
//                                     {aboutMeSection}
//                                     {dmMemberSinceSection}
//                                     {serverMemberSinceSection}
//                                     {serverMemberRoles}
//                                     {serverOwnerRoles}
//                                     {noteContainer}
//                                     <div className='upc-section-content-sep'></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )

//     }
//     else {
//         let upcColorPallete = 'user-mini-upc theme-dark userProfileOuterTheme' +
//             ((defaultcolorPalleteRef.current > 0.50) ? ' ' + 'user-upc-profile-colors-0' : ' ' + `user-upc-profile-colors-${member.color_tag}`) +
//             ((colorPalleteAltRef.current > 0.90) ? ' ' + 'alt' : '');

//         switch (memberStatus.friend_request_status) {
//             //if group owner allow kicking of user 
//             // case of -2 means current user is blocked by this user deny any interactions
//             case -2:
//                 //remove block only -> no message

//                 serverUserOptionsContent = (
//                     <div id="upc-mod" className={`${props.messageVersion ? `upc-popout message-version` : `upc-popout`}`} ref={popupRef} onClick={(e) => e.stopPropagation()}
//                         style={{
//                             top: `${rePositionTop * 0.60}px`, right: `${props.messageVersion ? `unset` : `247.909px`}`,
//                             left: `${props.messageVersion && props.userNameClicked ? `${props.getClientRect.width + props.getClientRect.left + 6}px`
//                                 : props.messageVersion ? `376px` : ``}`
//                         }}>
//                         <div className={`upc-inner-wrapper ${props.messageVersion ? `reverse-animation` : ``}`}>
//                             <div className={upcColorPallete}>

//                                 <div className={`user-mini-upc-inner ${member.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
//                                     {memberBanner}
//                                     {memberPhoto}
//                                     {badgeContainer}

//                                     <div className='upc-popout-overlay-background upc-overlay-background' >
//                                         <span></span>
//                                         {userNameSection}
//                                         <div className='upc-content-divider'></div>
//                                         <div className='upc-content-section-scroller global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `4px` }}>
//                                             {aboutMeSection}
//                                             {dmMemberSinceSection}
//                                             {serverMemberSinceSection}
//                                             {serverMemberRoles}
//                                             {serverOwnerRoles}
//                                             {noteContainer}

//                                             <div className='upc-section-content user-options-section'>
//                                                 <h2 className='upc-note-title'>Member Options</h2>
//                                                 <div className="upc-body-friend-options-wrapper">
//                                                     <div className='member-options-top-seperator'></div>

//                                                     <div className='upc-body-friend-options-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                                                         <div className="mfom-item red" onClick={(e) => handleBlockUser(e)}>
//                                                             <div className="mfom-item-label">Block User</div>
//                                                         </div>
//                                                         {kickUserOption}
//                                                         {banUserFromServerTag}
//                                                         <div className="mfom-bottom-div"></div>
//                                                     </div>
//                                                     <div className="upc-seper"></div>
//                                                 </div>
//                                             </div>
//                                             {blockMessageInput}
//                                             <div className='upc-section-content-sep'></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//                 break;

//             case -1:
//                 //remove block only -> no message

//                 serverUserOptionsContent = (
//                     <div id="upc-mod" className={`${props.messageVersion ? `upc-popout message-version` : `upc-popout`}`} ref={popupRef} onClick={(e) => e.stopPropagation()}
//                         style={{
//                             top: `${rePositionTop * 0.60}px`, right: `${props.messageVersion ? `unset` : `247.909px`}`,
//                             left: `${props.messageVersion && props.userNameClicked ? `${props.getClientRect.width + props.getClientRect.left + 6}px`
//                                 : props.messageVersion ? `376px` : ``}`
//                         }}>
//                         <div className={`upc-inner-wrapper ${props.messageVersion ? `reverse-animation` : ``}`}>
//                             <div className={upcColorPallete}>
//                                 <div className={`user-mini-upc-inner ${member.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
//                                     {memberBanner}
//                                     {memberPhoto}
//                                     {badgeContainer}
//                                     <div className='upc-popout-overlay-background upc-overlay-background' >
//                                         <span></span>
//                                         {userNameSection}
//                                         <div className='upc-content-divider'></div>
//                                         <div className='upc-content-section-scroller global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `4px` }}>
//                                             {aboutMeSection}
//                                             {dmMemberSinceSection}
//                                             {serverMemberSinceSection}
//                                             {serverMemberRoles}
//                                             {serverOwnerRoles}
//                                             {noteContainer}
//                                             <div className='upc-section-content user-options-section'>
//                                                 <h2 className='upc-note-title'>Member Options</h2>
//                                                 <div className="upc-body-friend-options-wrapper">
//                                                     <div className='member-options-top-seperator'></div>
//                                                     <div className='upc-body-friend-options-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                                                         <div className="mfom-item red" onClick={(e) => handleUnBlockUser(e)}>
//                                                             <div className="mfom-item-label">Unblock User</div>
//                                                         </div>
//                                                         {kickUserOption}
//                                                         {banUserFromServerTag}
//                                                         <div className="mfom-bottom-div"></div>
//                                                     </div>
//                                                     <div className="upc-seper"></div>
//                                                 </div>
//                                             </div>
//                                             {blockMessageInput}
//                                             <div className='upc-section-content-sep'></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//                 break;

//             case 0:
//                 // add friend, block friend, message

//                 serverUserOptionsContent = (
//                     <div id="upc-mod" className={`${props.messageVersion ? `upc-popout message-version` : `upc-popout`}`} ref={popupRef} onClick={(e) => e.stopPropagation()}
//                         style={{
//                             top: `${rePositionTop * 0.60}px`, right: `${props.messageVersion ? `unset` : `247.909px`}`,
//                             left: `${props.messageVersion && props.userNameClicked ? `${props.getClientRect.width + props.getClientRect.left + 6}px`
//                                 : props.messageVersion ? `376px` : ``}`
//                         }}>
//                         <div className={`upc-inner-wrapper ${props.messageVersion ? `reverse-animation` : ``}`}>
//                             <div className={upcColorPallete}>

//                                 <div className={`user-mini-upc-inner ${member.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
//                                     {memberBanner}
//                                     {memberPhoto}
//                                     {badgeContainer}
//                                     <div className='upc-popout-overlay-background upc-overlay-background' >
//                                         <span></span>
//                                         {userNameSection}
//                                         <div className='upc-content-divider'></div>
//                                         <div className='upc-content-section-scroller global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `4px` }}>
//                                             {aboutMeSection}
//                                             {dmMemberSinceSection}
//                                             {serverMemberSinceSection}
//                                             {serverMemberRoles}
//                                             {serverOwnerRoles}
//                                             {noteContainer}

//                                             <div className='upc-section-content user-options-section'>
//                                                 <h2 className='upc-note-title'>Member Options</h2>
//                                                 <div className="upc-body-friend-options-wrapper">
//                                                     <div className='member-options-top-seperator'></div>

//                                                     <div className='upc-body-friend-options-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>

//                                                         <div className="mfom-item" onClick={(e) => handleDmVerification(e)} >
//                                                             <div className="mfom-item-label">Message</div>
//                                                         </div>
//                                                         <div className="mfom-item green" onClick={(e) => handleCreateFriendShip(e)}>
//                                                             <div className="mfom-item-label">Send Friend Request</div>
//                                                         </div>

//                                                         <div className="mfom-item red" onClick={(e) => handleBlockUser(e)}>
//                                                             <div className="mfom-item-label">Block User</div>
//                                                         </div>
//                                                         {kickUserOption}
//                                                         {banUserFromServerTag}
//                                                         <div className="mfom-bottom-div"></div>
//                                                     </div>
//                                                     <div className="upc-seper"></div>
//                                                 </div>
//                                             </div>
//                                             {messageInputContainer}
//                                             <div className='upc-section-content-sep'></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//                 break;

//             case 1:
//                 //message, cancel request

//                 serverUserOptionsContent = (
//                     <div id="upc-mod" className={`${props.messageVersion ? `upc-popout message-version` : `upc-popout`}`} ref={popupRef} onClick={(e) => e.stopPropagation()}
//                         style={{
//                             top: `${rePositionTop * 0.60}px`, right: `${props.messageVersion ? `unset` : `247.909px`}`,
//                             left: `${props.messageVersion && props.userNameClicked ? `${props.getClientRect.width + props.getClientRect.left + 6}px`
//                                 : props.messageVersion ? `376px` : ``}`
//                         }}>
//                         <div className={`upc-inner-wrapper ${props.messageVersion ? `reverse-animation` : ``}`}>
//                             <div className={upcColorPallete}>

//                                 <div className={`user-mini-upc-inner ${member.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
//                                     {memberBanner}
//                                     {memberPhoto}
//                                     {badgeContainer}
//                                     <div className='upc-popout-overlay-background upc-overlay-background' >
//                                         <span></span>
//                                         {userNameSection}
//                                         <div className='upc-content-divider'></div>
//                                         <div className='upc-content-section-scroller global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `4px` }}>
//                                             {aboutMeSection}
//                                             {dmMemberSinceSection}
//                                             {serverMemberSinceSection}
//                                             {serverMemberRoles}
//                                             {serverOwnerRoles}
//                                             {noteContainer}
//                                             <div className='upc-section-content user-options-section'>
//                                                 <h2 className='upc-note-title'>Member Options</h2>
//                                                 <div className="upc-body-friend-options-wrapper">
//                                                     <div className='member-options-top-seperator'></div>
//                                                     <div className='upc-body-friend-options-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>

//                                                         <div className="mfom-item" onClick={(e) => handleDmVerification(e)}>
//                                                             <div className="mfom-item-label">Message</div>
//                                                         </div>
//                                                         <div className="mfom-item red" onClick={(e) => handleCancelFriendRequest(e)}>
//                                                             <div className="mfom-item-label">Cancel Friend Request</div>
//                                                         </div>
//                                                         {kickUserOption}
//                                                         {banUserFromServerTag}
//                                                         <div className="mfom-bottom-div"></div>
//                                                     </div>
//                                                     <div className="upc-seper"></div>
//                                                 </div>
//                                             </div>
//                                             {messageInputContainer}
//                                             <div className='upc-section-content-sep'></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//                 break;

//             case 2:
//                 // messgae, approve, deny request
//                 serverUserOptionsContent = (
//                     <div id="upc-mod" className={`${props.messageVersion ? `upc-popout message-version` : `upc-popout`}`} ref={popupRef} onClick={(e) => e.stopPropagation()}
//                         style={{
//                             top: `${rePositionTop * 0.60}px`, right: `${props.messageVersion ? `unset` : `247.909px`}`,
//                             left: `${props.messageVersion && props.userNameClicked ? `${props.getClientRect.width + props.getClientRect.left + 6}px`
//                                 : props.messageVersion ? `376px` : ``}`
//                         }}>
//                         <div className={`upc-inner-wrapper ${props.messageVersion ? `reverse-animation` : ``}`}>
//                             <div className={upcColorPallete}>

//                                 <div className={`user-mini-upc-inner ${member.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
//                                     {memberBanner}
//                                     {memberPhoto}
//                                     {badgeContainer}
//                                     <div className='upc-popout-overlay-background upc-overlay-background' >
//                                         <span></span>
//                                         {userNameSection}
//                                         <div className='upc-content-divider'></div>
//                                         <div className='upc-content-section-scroller global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `4px` }}>
//                                             {aboutMeSection}
//                                             {dmMemberSinceSection}
//                                             {serverMemberSinceSection}
//                                             {serverMemberRoles}
//                                             {serverOwnerRoles}
//                                             {noteContainer}
//                                             <div className='upc-section-content user-options-section'>
//                                                 <h2 className='upc-note-title'>Member Options</h2>
//                                                 <div className="upc-body-friend-options-wrapper">
//                                                     <div className='member-options-top-seperator'></div>

//                                                     <div className='upc-body-friend-options-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>

//                                                         <div className="mfom-item" onClick={(e) => handleDmVerification(e)}>
//                                                             <div className="mfom-item-label">Message</div>
//                                                         </div>
//                                                         <div className="mfom-item green" onClick={(e) => handleUpdateFriendShip(e)}>
//                                                             <div className="mfom-item-label">Accept Friend Request</div>
//                                                         </div>
//                                                         <div className="mfom-item red" onClick={(e) => handleIgnoreFriendRequest(e)}>
//                                                             <div className="mfom-item-label">Ignore Friend Request</div>
//                                                         </div>
//                                                         {kickUserOption}
//                                                         {banUserFromServerTag}
//                                                         <div className="mfom-bottom-div"></div>
//                                                     </div>
//                                                     <div className="upc-seper"></div>
//                                                 </div>
//                                             </div>
//                                             {messageInputContainer}
//                                             <div className='upc-section-content-sep'></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 )
//                 break;
//             case 3:
//                 //messgae, delete friend
//                 serverUserOptionsContent = (
//                     <div id="upc-mod" className={`${props.messageVersion ? `upc-popout message-version` : `upc-popout`}`} ref={popupRef} onClick={(e) => e.stopPropagation()}
//                         style={{
//                             top: `${rePositionTop * 0.60}px`, right: `${props.messageVersion ? `unset` : `247.909px`}`,
//                             left: `${props.messageVersion && props.userNameClicked ? `${props.getClientRect.width + props.getClientRect.left + 6}px`
//                                 : props.messageVersion ? `376px` : ``}`
//                         }}>
//                         <div className={`upc-inner-wrapper ${props.messageVersion ? `reverse-animation` : ``}`}>
//                             <div className={upcColorPallete}>

//                                 <div className={`user-mini-upc-inner ${member.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
//                                     {memberBanner}
//                                     {memberPhoto}
//                                     {badgeContainer}
//                                     <div className='upc-popout-overlay-background upc-overlay-background' >
//                                         <span></span>
//                                         {userNameSection}
//                                         <div className='upc-content-divider'></div>
//                                         <div className='upc-content-section-scroller global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `4px` }}>
//                                             {aboutMeSection}
//                                             {dmMemberSinceSection}
//                                             {serverMemberSinceSection}
//                                             {serverMemberRoles}
//                                             {serverOwnerRoles}
//                                             {noteContainer}
//                                             <div className='upc-section-content user-options-section'>
//                                                 <h2 className='upc-note-title'>Member Options</h2>
//                                                 <div className="upc-body-friend-options-wrapper">
//                                                     <div className='member-options-top-seperator'></div>
//                                                     <div className='upc-body-friend-options-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>

//                                                         <div className="mfom-item" onClick={(e) => handleDmVerification(e)}>
//                                                             <div className="mfom-item-label">Message</div>
//                                                         </div>
//                                                         <div className="mfom-item red" onClick={(e) => handleDeleteFriendShip(e)}>
//                                                             <div className="mfom-item-label">Remove Friend</div>
//                                                         </div>
//                                                         {kickUserOption}
//                                                         {banUserFromServerTag}
//                                                         <div className="mfom-bottom-div"></div>
//                                                     </div>
//                                                     <div className="upc-seper"></div>
//                                                 </div>
//                                             </div>
//                                             {messageInputContainer}
//                                             <div className='upc-section-content-sep'></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 )

//                 break;

//             default:

//                 serverUserOptionsContent = ("");

//         }
//     }

//     return (

//         <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
//             <div className='server-user-options-upc-layer-container' onClick={e => handleCloseOnOuterClick(e)}>
//                 {serverUserOptionsContent}
//                 <Tooltip className="suom-server-name-tool-tip" id="suom-tool-tip" place="top" closeOnResize={true} />
//             </div>
//         </REACT_PORTAL >
//     )

// }
// export default ServerUserOptionsMessengerModal; 