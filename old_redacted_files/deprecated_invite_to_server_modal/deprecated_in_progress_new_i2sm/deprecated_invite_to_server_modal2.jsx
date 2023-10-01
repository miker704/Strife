// import React from "react";
// import { useState, useRef, useEffect } from "react";
// import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
// import GroupChatIcon from '../../../../app/assets/images/groupChatIcon.svg';
// import { fetchChannel } from "../../../utils/channel_api_util";
// import { fetchDmServers } from "../../../utils/dm_server_api_util";
// import { requestAllFriendships } from "../../../utils/friendship_api_util";
// import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
// import { Tooltip } from "react-tooltip";
// import { CloseXIcon, GemBoostIcon, HashIcon, Invite2ServerCheckBoxCheckedIcon, Invite2ServerCheckBoxUnCheckedIcon, LoudSpeakerIcon, SearchMagIcon, SearchXIcon, SettingsIcon_Medium } from "../../front_end_svgs/Strife_svgs";
// const InviteToServerModal = (props) => {

//     const inputRef = useRef();
//     const popupRef = useRef();
//     const [searchText, setSearchText] = useState("");
//     const [inviteCheck, setInviteCheck] = useState(false);
//     const [Channel, setChannel] = useState(props.channel);
//     const findIfMemberAlready = (member) => Object.values(props.server.users).findIndex(friend => friend.id === member.id);
//     const findIfMemberAlreadyByIds = (member) => Object.values(props.server.users).findIndex(friend => friend.id === member);
//     const checkViaId = (member) => Object.values(props.server.users).findIndex(user => user.id === member);

//     let rendered_Default_PFP = DefaultPFPSVG;
//     const [error, setError] = useState(null);
//     const [items, setItems] = useState([]);
//     const [dmServers, setDmServers] = useState([]);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);
//     const [loadChannel, setLoadChannel] = useState(false);
//     const [hasInvites, setHasInvites] = useState(false);
//     const [noFriendsToInvite, setNoFriendsToInvite] = useState(false);
//     const [channelUndefined, setChannelUndefined] = useState(false);
//     const _AUTH_IDS = [1, 2, 3, 4];

//     useEffect(() => {
//         if (props.i2smType === "CDDM") {
//             setChannelUndefined(true);
//             setLoadChannel(false);
//         }

//         else if (props.channel_belongs_to_server_id !== props.server.id) {
//             props.setRenderInviteToServer(false);
//         }

//         else {
//             fetchChannel(props.mod_Channel_ID)
//                 .then(res => {
//                     setChannel(res.channel);
//                     setLoadChannel(true);
//                 }, (error) => {
//                     props.setRenderInviteToServer(false);
//                 })
//         }
//     }, [props.channel?.id]);

//     useEffect(() => {
//         window.addEventListener('keyup', handleESC, false);
//         return function cleanup () {
//             if (props.error.length > 0) { props.removeServerErrors(); }
//             if (props.channelErrors.length > 0) { props.removeChannelErrors(); }
//             if (props.friendShipErrors.length > 0) { props.removeFriendshipErrors(); }
//             if (props.dmServerErrors.length > 0) { props.removeDmServerErrors(); }
//             if (props.dmMessageErrors.length > 0) { props.removeDmMessageErrors(); }
//             window.removeEventListener('keyup', handleESC, false);
//         }
//     }, []);


//     useEffect(() => {

//         if (props.i2smType !== "CDDM") {

//             requestAllFriendships()
//                 .then((result) => {
//                     let filterResult = Object.values(result).filter(user => user.friend_request_status === 3);
//                     let refinedResult = filterResult.map((friend) => { friend.type = "FRIEND"; return friend; })
//                     let finalResult = refinedResult.filter((friend, idx) => {
//                         const index = findIfMemberAlready(friend)
//                         if (index === -1) {
//                             return friend;
//                         }
//                     })
//                     setNoFriendsToInvite(finalResult.length === 0 ? true : false);
//                     setHasInvites(finalResult.length === 0 ? false : true);
//                     setTimeout(() => {
//                         setIsLoaded(true);
//                     }, 400);
//                     setItems(finalResult);

//                 },
//                     (error) => {
//                         setIsLoaded(false);
//                         setError(error);
//                         props.setRenderInviteToServer(false);
//                     }
//                 )

//             fetchDmServers(props.currentUser.id)
//                 .then(res => {

//                     let dmsReduction = Object.values(res).filter((dmServer) => dmServer.one_to_one_dm === false);

//                     let rx = dmsReduction.filter((dmServer) => {
//                         if (Object.values(dmServer.members).filter(member => findIfMemberAlready(member) === -1).length > 0) {
//                             let removeBlockedUsers = Object.values(dmServer.members).filter(member => member.friend_request_status >= 0);
//                             dmServer.members = removeBlockedUsers;
//                             return dmServer;
//                         }
//                     })
//                     let result = rx.map((dmServer) => {
//                         dmServer.username = generateDmServerName(dmServer);
//                         dmServer.color_tag = dmServer.dm_server_color_tag ? dmServer.dm_server_color_tag : generateDmServerIconColor(dmServer)
//                         dmServer.type = "DM_SERVER";
//                         let dmIds = Object.values(dmServer.members).map((member) => member.id);
//                         dmServer.members = dmIds.filter(dmMID => findIfMemberAlreadyByIds(dmMID) === -1);
//                         return dmServer;
//                     });
//                     setDmServers(result);

//                 }, (error) => {
//                     props.setRenderInviteToServer(false);
//                 })
//         }
//     }, [])



//     const generateDmServerName = (dmServer) => {
//         let displayName = "";
//         if (dmServer.dm_server_name === null) {
//             displayName = Object.values(dmServer.members).filter(member => member.id !== props.currentUser.id).map(member => member.username).join(", ");
//         }
//         else if (dmServer.dm_server_name !== null || dmServer.dm_server_name !== undefined || dmServer.dm_server_name !== "") {
//             displayName = dmServer.dm_server_name;
//         }
//         return displayName;
//     }

//     const generateDmServerIconColor = (dmServer) => {

//         let membersOfThisDmS = Object.values(dmServer.members);
//         if (dmServer.dm_server_color_tag) {
//             return dmServer.dm_server_color_tag;
//         }
//         let color_tag = "";
//         if (membersOfThisDmS.length === 2) {
//             let user = membersOfThisDmS.filter(member => member.id !== props.currentUser.id);
//             color_tag = user[0].color_tag;
//         }
//         else if (membersOfThisDmS.length > 2) {
//             let user = membersOfThisDmS.at(-1);
//             color_tag = user.color_tag;
//         }
//         return color_tag
//     }


//     const _liveSearch = (items) => {
//         return items.filter((item) => {
//             if (item.username.toLowerCase().includes(searchText.toLowerCase())) {
//                 return item;
//             }
//             else if (searchText === "") {
//                 return item;
//             }
//         })
//     }

//     const inviteUserToServerFromADmServer = (dmServer) => {
//         const sERVER_ID = parseInt(props.serverId)
//         let button = document.getElementById(`ivsmbutton dms-${dmServer.id}`);
//         let buttonText = document.getElementById(`ivsmbutton-text dms-${dmServer.id}`);
//         let elipAnimation = document.getElementById(`elip-spin dms-${dmServer.id}`);
//         elipAnimation.classList.remove('is-hidden');
//         buttonText.innerText = "";
//         let disableAllButtons = document.querySelectorAll('.i2sm-invite-member-button');
//         disableAllButtons.forEach((button) => button.disabled = true);

//         props.createServerMembershipViaInjectionOfDmMembers({ memberIds: dmServer.members, server_id: sERVER_ID }).then(() => {
//             App.StrifeCore.perform('webSocketReceiveNewServerViaInviteInjextion', { memberIds: dmServer.members, server_id: sERVER_ID });
//             setTimeout(() => {
//                 elipAnimation.classList.add('is-hidden');
//                 buttonText.innerText = "Sent";
//                 button.disabled = true;
//             }, 1000);

//             setTimeout(() => {
//                 disableAllButtons.forEach((button) => button.disabled = false);
//             }, 2000);

//         });

//     }

//     const inviteUserToServer = (friend) => {
//         const sERVER_ID = parseInt(props.serverId)
//         let button = document.getElementById(`ivsmbutton friend-${friend.id}`);
//         let buttonText = document.getElementById(`ivsmbutton-text friend-${friend.id}`);
//         let elipAnimation = document.getElementById(`elip-spin friend-${friend.id}`);
//         elipAnimation.classList.remove('is-hidden');
//         buttonText.innerText = "";

//         let disableAllButtons = document.querySelectorAll('.i2sm-invite-member-button');
//         disableAllButtons.forEach((button) => button.disabled = true);

//         props.createServerMembership({ user_id: friend.id, server_id: sERVER_ID }).then(() => {
//             App.StrifeCore.perform('webSocketReceiveNewServerViaInvite', { user_id: friend.id, server_id: sERVER_ID });
//             setTimeout(() => {
//                 elipAnimation.classList.add('is-hidden');
//                 buttonText.innerText = "Sent";
//                 button.disabled = true;
//             }, 1000);

//             setTimeout(() => {
//                 disableAllButtons.forEach((button) => button.disabled = false);
//             }, 1000);
//         });

//     }


//     const filterOutFriends = items.filter((friend, idx) => {
//         const index = findIfMemberAlready(friend)
//         if (index === -1) {
//             return friend;
//         }
//     });

//     const filterOutDMS = dmServers.filter((dm, idx) => {
//         let x = dm.members.filter(id => checkViaId(id) === -1);
//         if (x.length > 0) {
//             dm.members = x;
//             return dm;
//         }
//     })


//     const filterOutCompletely = [...items, ...dmServers].filter((item) => {
//         if (item.type === "FRIEND") {
//             const index = findIfMemberAlready(item)
//             if (index === -1) {
//                 return item;
//             }
//         }
//         else if (item.type === "DM_SERVER") {
//             let x = item.members.filter(id => checkViaId(id) === -1);
//             if (x.length > 0) {
//                 item.members = x;
//                 return item;
//             }
//         }
//     })


//     const toggleCopyServerInviteLink = () => {
//         let copied = document.getElementById('copySIL');
//         let copyButton = document.getElementById('copySIL-Button');
//         navigator.clipboard.writeText(props.server.invite_code).then(() => {
//             copied.innerText = 'Copied';
//             copyButton.classList.add('copy-successful');
//             setTimeout(() => {
//                 copied.innerText = 'Copy';
//                 copyButton.classList.remove('copy-successful');
//             }, 2000);
//         })
//     };


//     const _resetSearch = () => {
//         setSearchText("");
//         inputRef.current.focus();
//     }

//     const handleESC = (e) => {
//         const keys = {
//             27: () => {
//                 e.preventDefault();
//                 handleCloseOnOuterClick(e);
//                 window.removeEventListener('keyup', handleESC, false);

//             },
//         };
//         if (keys[e.keyCode]) {
//             keys[e.keyCode]();
//         }
//     }

//     const handleCloseOnOuterClick = (e) => {
//         e.preventDefault();
//         let modalToClose = document.getElementById("i2sm-modal");
//         if (modalToClose) {
//             modalToClose.classList.add("transition-out");
//             Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
//                 .then(() => {
//                     props.setRenderInviteToServer(false);
//                     window.removeEventListener('keyup', handleESC, false);
//                 }, () => {
//                     props.setRenderInviteToServer(false);
//                     window.removeEventListener('keyup', handleESC, false);
//                 });
//         }
//         else {
//             props.setRenderInviteToServer(false);
//             window.removeEventListener('keyup', handleESC, false);
//         }
//     }

//     const renderExtraRef = useRef(Math.random() > 0.5);


//     // no friends to invite give copy and paste link

//     if (loadChannel === true && noFriendsToInvite === true) {
//         return (

//             <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
//                 <div className="invite-to-server-modal-layerContainer" onClick={(e) => handleCloseOnOuterClick(e)}>
//                     <div className="i2sm-back-drop"></div>
//                     <div className="i2sm-main-layer" onClick={e => e.stopPropagation()} ref={popupRef}>
//                         <div>
//                             <div className="i2sm-focus-lock">
//                                 <div className="i2sm-modal" id="i2sm-modal">
//                                     <div className="i2sm-inner-flex-no-shade">
//                                         <button type="button" className="i2sm-close-button-wrapper" onClick={(e) => handleCloseOnOuterClick(e)} >
//                                             <div className="i2sm-close-button-container">
//                                                 <CloseXIcon />
//                                             </div>
//                                         </button>
//                                         <div className="i2sm-header-container">
//                                             <h1 className="i2sm-header-1">Invite friends to <strong>{props.server.server_name}</strong></h1>
//                                             <div className="i2sm-header-channel-name-container">
//                                                 {
//                                                     Channel.channel_type === 2 ?
//                                                         (
//                                                             <LoudSpeakerIcon className="i2sm-channelLSIcon" />
//                                                         ) :
//                                                         (
//                                                             <HashIcon className="i2sm-channelHashIcon" />
//                                                         )

//                                                 }

//                                                 <div className="i2sm-channel-text-name">{Channel.channel_name}</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="is2m-content no-scroll global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
//                                         <div className="is2m-no-ifs-flex" style={{ flex: `1 1 auto` }}>
//                                             <div className="is2m-no-ifs-st">Share this link with others to grant access to this server</div>
//                                             <div className="i2sm-ssl-input-flex-container">
//                                                 <div className="i2sm-sll-input-wrapper">
//                                                     <input className="i2sm-sll-input"
//                                                         type="text" spellCheck={false} readOnly
//                                                         placeholder={`${props.server.invite_code}`}
//                                                     />
//                                                 </div>
//                                                 <button type="button" id="copySIL-Button" className="i2sm-sll-copy-button" onClick={() => {
//                                                     toggleCopyServerInviteLink();
//                                                 }}
//                                                     disabled={inviteCheck === true ? true : false}
//                                                 >
//                                                     <div id="copySIL" className="i2sm-sll-copy-button-contents">
//                                                         Copy
//                                                     </div>
//                                                 </button>
//                                             </div>
//                                             <div className="i2sm-sll-edit-link-wrapper" style={{ color: `${inviteCheck === true ? `#fa777c` : `#c4c9ce`}` }}>
//                                                 {`${inviteCheck === false ? `Your invite link expires in 7 days.` : `Your invite link will never expire. ($TR!F3 N!TR0 Required)`}`}{` `}
//                                             </div>
//                                             <div className="i2sm-no-results-sep"></div>
//                                         </div>
//                                     </div>
//                                     <div className="i2sm-raw-invite-footer i2sm-horz-reverse i2sm-flex-inner" style={{ flex: `0 0 auto` }}>
//                                         <div className="is2m-flex-inner i2sm-flex-child-1" style={{ flex: `1 1 auto` }}>
//                                             <label className={`i2sm-raw-invite-label`} htmlFor="i2sm-icheckbox-raw">
//                                                 <input id="i2sm-icheckbox-raw" className="i2sm-raw-invite-input" type="checkbox" onChange={() => setInviteCheck(!inviteCheck)} value={inviteCheck} />
//                                                 <div className={`i2sm-icheckbox-wrapper ${inviteCheck === true ? `checked` : ``}`}>
//                                                     {
//                                                         inviteCheck ? (<Invite2ServerCheckBoxCheckedIcon />) : (<Invite2ServerCheckBoxUnCheckedIcon />)
//                                                     }
//                                                 </div>
//                                                 <div className="i2sm-raw-invite-label-text-wrapper">
//                                                     <div className={`i2sm-raw-invite-label-text`} style={{ color: `${inviteCheck === true ? `#fa777c` : `#c4c9ce`}`, fontStyle: `${inviteCheck === true ? `italic` : `normal`}` }}>
//                                                         Set this link to never expire ($TR!F3 N!TR0 Required)
//                                                     </div>
//                                                 </div>
//                                             </label>
//                                             <div className="is2m-cursor-pointer-gear-button" role="button" data-tooltip-place="top" data-tooltip-id="modal-tip-i2sm" data-tooltip-content={'Link Settings ($TR!F3 N!TR0 Required)'}>
//                                                 <SettingsIcon_Medium className="is2m-cursor-pointer-gear-icon" height={18} width={18} />
//                                                 <Tooltip className="i2sm-tool-tip" place="top" id="modal-tip-i2sm" positionStrategy="fixed" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </REACT_PORTAL >

//         );
//     }

//     // invite list

//     else if (loadChannel === true && hasInvites === true) {
//         return (
//             <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
//                 <div className="invite-to-server-modal-layerContainer" onClick={(e) => handleCloseOnOuterClick(e)}>
//                     <div className="i2sm-back-drop"></div>
//                     <div className="i2sm-main-layer" onClick={e => e.stopPropagation()} ref={popupRef}>
//                         <div className="i2sm-main-wrapper" >
//                             <div className="i2sm-focus-lock">
//                                 <div className="i2sm-modal" id="i2sm-modal">
//                                     <div className="i2sm-inner-flex">
//                                         <button type="button" className="i2sm-close-button-wrapper" onClick={(e) => handleCloseOnOuterClick(e)} >
//                                             <div className="i2sm-close-button-container">
//                                                 <CloseXIcon />
//                                             </div>
//                                         </button>
//                                         <div className="i2sm-header-container">
//                                             <div className="i2sm-header">
//                                                 <h1 className="i2sm-header-1">Invite friends to <strong>{props.server.server_name}</strong></h1>
//                                                 <div className="i2sm-header-channel-name-container">
//                                                     {
//                                                         Channel.channel_type === 2 ?
//                                                             (
//                                                                 <LoudSpeakerIcon className="i2sm-channelLSIcon" />
//                                                             ) :
//                                                             (
//                                                                 <HashIcon className="i2sm-channelHashIcon" />
//                                                             )
//                                                     }

//                                                     <div className="i2sm-channel-text-name">{Channel.channel_name}</div>
//                                                 </div>
//                                                 <div className="i2sm-search-bar-container">
//                                                     <div className="i2sm-search-bar-inner">
//                                                         <input
//                                                             id="input-all-friends"
//                                                             className="i2sm-search-bar"
//                                                             autoFocus ref={inputRef}
//                                                             spellCheck={false}
//                                                             type="search"
//                                                             value={searchText}
//                                                             onChange={(e) => setSearchText(e.currentTarget.value)}
//                                                             placeholder="Search for friends"
//                                                             disabled={isLoaded === false ? true : false}
//                                                         />
//                                                         <div className="i2sm-search-bar-icon-layout">
//                                                             <div className="i2sm-search-bar-icon-container">
//                                                                 <SearchMagIcon className={`i2sm-mag-icon ${searchText.length === 0 ? `i2sm-visible` : ``}`} />
//                                                                 <SearchXIcon className={`i2sm-clear-icon ${searchText.length > 0 ? `i2sm-visible` : ``}`} onClick={() => { _resetSearch(); }} />
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="i2sm-mt"></div>
//                                             </div>
//                                         </div>
//                                     </div>


//                                     {
//                                         !isLoaded ? (
//                                             <div className={`i2sm-no-results global-scroll-thin-raw-attributes global-scroller-base`} style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
//                                                 <div className="i2sm-no-results-inner">
//                                                     <h2 className="i2sm-no-results-title">Fetching Your Friends List...</h2>
//                                                 </div>
//                                                 <div className="i2sm-no-results-sep"></div>
//                                             </div>

//                                         ) : (

//                                             _liveSearch(filterOutCompletely).length === 0 ?
//                                                 (
//                                                     <div className={`i2sm-no-results global-scroll-thin-raw-attributes global-scroller-base`} style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
//                                                         <div className="i2sm-no-results-inner">
//                                                             <h2 className="i2sm-no-results-title">NO RESULTS FOUND</h2>
//                                                         </div>
//                                                         <div className="i2sm-no-results-sep"></div>
//                                                     </div>

//                                                 ) :

//                                                 (<div className="i2sm-scroller global-scroll-thin-raw-attributes global-scroller-base" id='ul-fiiw' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                                                     <div className="i2sm-scroller-content">
//                                                         <div className="i2sm-invis-div"></div>
//                                                         {_liveSearch(filterOutCompletely).map((inviteItem) => {
//                                                             let keyItem = inviteItem.type === "FRIEND" ? `friend-${inviteItem.id}` : `dms-${inviteItem.id}`;

//                                                             return (
//                                                                 <div className="i2sm-invite-row" key={keyItem}>
//                                                                     <div className="i2sm-invite-row-info">
//                                                                         <div className="i2sm-invite-row-wrapper">
//                                                                             <svg width="32" height="32" viewBox="0 0 32 32" className="i2sm-status-mask i2sm-svg-avatar-wrapping" aria-hidden="true">

//                                                                                 <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-default)">
//                                                                                     <div className="i2sm-svg-avatar-stack">
//                                                                                         {
//                                                                                             inviteItem.type === "FRIEND" ? (
//                                                                                                 inviteItem.photo === undefined ?
//                                                                                                     (
//                                                                                                         <img className={`i2sm-avatar-svg-masked color-${inviteItem.color_tag}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />
//                                                                                                     ) : (
//                                                                                                         <img className={`i2sm-avatar-svg-masked`} src={inviteItem.photo} alt=" " aria-hidden="true" />
//                                                                                                     )
//                                                                                             ) : (inviteItem.type === "DM_SERVER" ? (
//                                                                                                 <img className={`i2sm-avatar-svg-masked group-chat-icon-color-${inviteItem.color_tag}`} src={GroupChatIcon} alt=" " aria-hidden="true" />
//                                                                                             ) : (""))
//                                                                                         }

//                                                                                     </div>
//                                                                                 </foreignObject>
//                                                                             </svg>
//                                                                         </div>
//                                                                         <div className="i2sm-invite-row-member-username">{`${inviteItem.username}`}</div>
//                                                                     </div>
//                                                                     <button id={`ivsmbutton ${keyItem}`} type="button" className="i2sm-invite-member-button"
//                                                                         onClick={() => {
//                                                                             inputRef.current.focus();
//                                                                             if (inviteItem.type === "FRIEND") {
//                                                                                 inviteUserToServer(inviteItem)
//                                                                             }
//                                                                             else if (inviteItem.type === "DM_SERVER") {
//                                                                                 inviteUserToServerFromADmServer(inviteItem)
//                                                                             }
//                                                                         }}>
//                                                                         <span id={`elip-spin ${keyItem}`} className="spinner-ellipsis spinner-dots is-hidden" role='img'>
//                                                                             <span className="inner-spinner-dots-container pulsing-ellipsis">
//                                                                                 <span className="spin-dot spin-dot-item"></span>
//                                                                                 <span className="spin-dot spin-dot-item"></span>
//                                                                                 <span className="spin-dot spin-dot-item"></span>
//                                                                             </span>
//                                                                         </span>
//                                                                         <div id={`ivsmbutton-text ${keyItem}`} className="i2sm-invite-member-button-contents">
//                                                                             Invite
//                                                                         </div>
//                                                                     </button>
//                                                                 </div>
//                                                             );
//                                                         })}

//                                                     </div>
//                                                 </div>
//                                                 )
//                                         )
//                                     }

//                                     <div className="i2sm-or-send-slink-flex-container">
//                                         <div className="i2sm-ssl-inner-flex-container">
//                                             <h2 className="i2sm-ssl-header">Or, send a server invite link to a friend</h2>
//                                             <div className="i2sm-ssl-input-flex-container">
//                                                 <div className="i2sm-sll-input-wrapper">
//                                                     <input className="i2sm-sll-input"
//                                                         type="text" spellCheck={false} readOnly
//                                                         placeholder={`${props.server.invite_code}`}
//                                                     />
//                                                 </div>
//                                                 <button type="button" id="copySIL-Button" className="i2sm-sll-copy-button" onClick={() => {
//                                                     toggleCopyServerInviteLink();
//                                                 }}>
//                                                     <div id="copySIL" className="i2sm-sll-copy-button-contents">
//                                                         Copy
//                                                     </div>
//                                                 </button>
//                                             </div>
//                                             <div className="i2sm-sll-edit-link-wrapper">
//                                                 Your invite link expires in 7 days.{` `}
//                                                 <a className="i2sm-sll-link-2-edit-i-link" target="_blank" role="button">Edit invite link.</a>{` `}
//                                                 ($TR!F3 N!TR0 Required)
//                                             </div>
//                                             {
//                                                 props.currentUser.id === props.server.server_owner_id && renderExtraRef.current === true ?
//                                                     (<div className="i2sm-sll-add-image-container">
//                                                         <GemBoostIcon className="i2sm-sll-add-image-icon" height={24} width={24} />
//                                                         <div className="i2sm-sll-add-image-text">
//                                                             Add an image to your invite link with Boosting
//                                                         </div>
//                                                         <a role="button" target="_blank" className="i2sm-sll-add-image-learn-more-link">Learn More</a>
//                                                     </div>
//                                                     ) : ("")
//                                             }
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </REACT_PORTAL >
//         );

//     }

//     // channel is undefined via useParams due to user navigating to /$/channels/:serverId/ and not /$/channels/:serverId/:channelId

//     else if (channelUndefined === true && props.i2smType === "CDDM") {
//         return (
//             <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
//                 <div className="invite-to-server-modal-layerContainer" onClick={(e) => handleCloseOnOuterClick(e)}>
//                     <div className="i2sm-back-drop"></div>
//                     <div className="i2sm-main-layer" onClick={e => e.stopPropagation()} ref={popupRef}>
//                         <div className="i2sm-main-wrapper" >
//                             <div className="i2sm-focus-lock">
//                                 <div className="i2sm-modal" id="i2sm-modal">
//                                     <div className="i2sm-inner-flex">
//                                         <button type="button" className="i2sm-close-button-wrapper" onClick={(e) => handleCloseOnOuterClick(e)} >
//                                             <div className="i2sm-close-button-container">
//                                                 <CloseXIcon />
//                                             </div>
//                                         </button>
//                                         <div className="i2sm-header-container">
//                                             <div className="i2sm-header">
//                                                 <h1 className="i2sm-header-1">Invite friends to <strong>{props.server.server_name}</strong></h1>
//                                                 <div className="i2sm-search-bar-container">
//                                                     <div className="i2sm-search-bar-inner">
//                                                         <input
//                                                             id="input-all-friends"
//                                                             className="i2sm-search-bar"
//                                                             autoFocus ref={inputRef}
//                                                             spellCheck={false}
//                                                             type="search"
//                                                             value={searchText}
//                                                             onChange={(e) => setSearchText(e.currentTarget.value)}
//                                                             placeholder="Search for friends"
//                                                         />
//                                                         <div className="i2sm-search-bar-icon-layout">
//                                                             <div className="i2sm-search-bar-icon-container">
//                                                                 <SearchMagIcon className={`i2sm-mag-icon ${searchText.length === 0 ? `i2sm-visible` : ``}`} />
//                                                                 <SearchXIcon className={`i2sm-clear-icon ${searchText.length > 0 ? `i2sm-visible` : ``}`} onClick={() => { _resetSearch(); }} />
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="i2sm-mt"></div>
//                                             </div>
//                                         </div>
//                                     </div>


//                                     {
//                                         searchText.length === 0 ? (
//                                             <div className={`i2sm-no-results global-scroll-thin-raw-attributes global-scroller-base`} style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
//                                                 <div className="i2sm-no-results-inner">
//                                                     <h2 className="i2sm-no-results-title">Fetching Your Friends List...</h2>
//                                                 </div>
//                                                 <div className="i2sm-no-results-sep"></div>
//                                             </div>

//                                         ) : (
//                                             <div className={`i2sm-no-results global-scroll-thin-raw-attributes global-scroller-base`} style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
//                                                 <div className="i2sm-no-results-inner">
//                                                     <h2 className="i2sm-no-results-title">NO RESULTS FOUND</h2>
//                                                 </div>
//                                                 <div className="i2sm-no-results-sep"></div>
//                                             </div>
//                                         )
//                                     }

//                                     <div className="i2sm-or-send-slink-flex-container">
//                                         <div className="i2sm-ssl-inner-flex-container">
//                                             <h2 className="i2sm-ssl-header">Or, send a server invite link to a friend</h2>
//                                             <div className="i2sm-ssl-input-flex-container">
//                                                 <div className="i2sm-sll-input-wrapper">
//                                                     <input className="i2sm-sll-input"
//                                                         type="text" spellCheck={false} readOnly
//                                                         placeholder={`${props.server.invite_code}`}
//                                                     />
//                                                 </div>
//                                                 <button type="button" id="copySIL-Button" className="i2sm-sll-copy-button" onClick={() => {
//                                                     toggleCopyServerInviteLink();
//                                                 }}>
//                                                     <div id="copySIL" className="i2sm-sll-copy-button-contents">
//                                                         Copy
//                                                     </div>
//                                                 </button>
//                                             </div>
//                                             <div className="i2sm-sll-edit-link-wrapper">
//                                                 Your invite link expires in 7 days.{` `}
//                                                 <a className="i2sm-sll-link-2-edit-i-link" target="_blank" role="button">Edit invite link.</a>{` `}
//                                                 ($TR!F3 N!TR0 Required)
//                                             </div>
//                                             {
//                                                 props.currentUser.id === props.server.server_owner_id && renderExtraRef.current === true ?
//                                                     (<div className="i2sm-sll-add-image-container">
//                                                         <GemBoostIcon className="i2sm-sll-add-image-icon" height={24} width={24} />
//                                                         <div className="i2sm-sll-add-image-text">
//                                                             Add an image to your invite link with Boosting
//                                                         </div>
//                                                         <a role="button" target="_blank" className="i2sm-sll-add-image-learn-more-link">Learn More</a>
//                                                     </div>
//                                                     ) : ("")
//                                             }
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </REACT_PORTAL >
//         );
//     }

//     // spinning cubes
//     else {
//         return (
//             <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
//                 <div className="invite-to-server-modal-layerContainer" onClick={(e) => handleCloseOnOuterClick(e)}>
//                     <div className="i2sm-back-drop"></div>
//                     <div className="i2sm-main-layer" onClick={e => e.stopPropagation()} ref={popupRef} >
//                         <div className="i2sm-focus-lock">
//                             <div className="i2sm-modal" id="i2sm-modal" style={{ width: `0px`, height: `0px`, background: `transparent`, minHeight: `0px` }}>
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
//             </REACT_PORTAL >
//         );
//     }
// }

// export default InviteToServerModal;