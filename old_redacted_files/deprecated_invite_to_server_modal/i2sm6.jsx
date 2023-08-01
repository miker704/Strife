// import React from "react";
// import { useState, useRef, useEffect } from "react";
// import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
// import GroupChatIcon from '../../../../app/assets/images/groupChatIcon.svg';
// import ReactTooltip from "react-tooltip";
// import { fetchChannel } from "../../../utils/channel_api_util";
// import { fetchDmServers } from "../../../utils/dm_server_api_util";
// import { requestAllFriendships } from "../../../utils/friendship_api_util";
// import REACT_PORTAL from "../../../utils/ReactPortal_api_util";

// const InviteToServerModal = (props) => {

//     if (Object.values(props.server.channels).findIndex(channel => channel.id === props.mod_Channel_ID) === -1) {
//         setTimeout(() => {

//             // props.closeModal();
//             props.setRenderInviteToServer(false);

//         }, 2000);
//         return null;
//     }

//     const inputRef = useRef();
//     const popupRef = useRef();
//     const [searchText, setSearchText] = useState("");
//     // const [generalChannelName, setGeneralChannelName] = useState("");
//     // const [channelName, setChannelName] = useState("");
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


//     useEffect(() => {

//         setLoadChannel(false);
//         fetchChannel(props.mod_Channel_ID)
//             .then(res => {
//                 setChannel(res.channel);
//                 setLoadChannel(true);
//             }, (error) => {
//                 // props.closeModal()
//                 props.setRenderInviteToServer(false);

//             })

//     }, [props.channel?.id])


//     useEffect(() => {
//         window.addEventListener('keyup', handleESC, false);
//         // props.requestAllFriendships();
//         return function cleanup () {
//             props.removeFriendshipErrors();
//             props.removeServerErrors();
//             props.removeDmServerErrors();
//             props.removeChannelErrors();
//             window.removeEventListener('keyup', handleESC, false);

//         }
//     }, []);


//     useEffect(() => {

//         requestAllFriendships()
//             .then((result) => {
//                 let filterResult = Object.values(result).filter(user => user.friend_request_status === 3);
//                 let refinedResult = filterResult.map((friend) => { friend.type = "FRIEND"; return friend; })
//                 let finalResult = refinedResult.filter((friend, idx) => {
//                     const index = findIfMemberAlready(friend)
//                     if (index === -1) {
//                         return friend;
//                     }
//                 })
//                 setNoFriendsToInvite(finalResult.length === 0 ? true : false);
//                 setHasInvites(finalResult.length === 0 ? false : true);
//                 setTimeout(() => {
//                     setIsLoaded(true);
//                 }, 400);
//                 setItems(finalResult);

//             },
//                 (error) => {
//                     setIsLoaded(false);
//                     setError(error);
//                     // props.closeModal(); //kill the modal
//                     props.setRenderInviteToServer(false);

//                 }
//             )

//         fetchDmServers(props.currentUser.id)
//             .then(res => {

//                 let rx = Object.values(res).filter((dmServer) => {
//                     if (Object.values(dmServer.members).filter(member => findIfMemberAlready(member) === -1).length > 0) {
//                         let removeBlockedUsers = Object.values(dmServer.members).filter(member => member.friend_request_status >= 0);
//                         dmServer.members = removeBlockedUsers;
//                         return dmServer;
//                     }
//                 })
//                 let result = rx.map((dmServer) => {
//                     dmServer.username = generateDmServerName(dmServer);
//                     dmServer.color_tag = generateDmServerIconColor(dmServer)
//                     dmServer.type = "DM_SERVER";
//                     let dmIds = Object.values(dmServer.members).map((member) => member.id);
//                     dmServer.members = dmIds.filter(dmMID => findIfMemberAlreadyByIds(dmMID) === -1);
//                     return dmServer;
//                 });
//                 setDmServers(result);

//             }, (error) => {
//                 // props.closeModal();
//                 props.setRenderInviteToServer(false);

//             })

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


//     const searchItUp = (items) => {
//         return items.filter((item) => {
//             if (item.username.toLowerCase().includes(searchText.toLowerCase())) {
//                 return item;
//             }
//             else if (searchText === "") {
//                 return item;
//             }
//         })
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



//     const liveSearch = () => {
//         let allFriendShips = document.querySelectorAll('.i2sm-invite-row');
//         let search_query = document.getElementById('input-all-friends').value;
//         let count = 0;
//         for (let i = 0; i < allFriendShips.length; i++) {
//             if (allFriendShips[i].innerText.toLowerCase().includes(search_query.toLowerCase())) {
//                 allFriendShips[i].classList.remove("is-hidden");
//             }
//             else {
//                 allFriendShips[i].classList.add("is-hidden");
//                 count++;
//             }
//         }

//         if (count === allFriendShips.length) {
//             document.getElementById('ul-fiiw').classList.add('is-hidden')
//             document.getElementById('no-match').classList.remove('is-hidden')

//         }
//         else {
//             document.getElementById('no-match').classList.add('is-hidden')
//             document.getElementById('ul-fiiw').classList.remove('is-hidden')
//         }

//     }


//     const resetSearch = () => {
//         setSearchText("");
//         document.getElementById('input-all-friends').value = "";
//         liveSearch();
//     }
//     const _resetSearch = () => {
//         setSearchText("");
//         inputRef.current.focus();
//     }

//     const handleESC = (e) => {
//         const keys = {
//             27: () => {
//                 e.preventDefault();
//                 document.getElementById("i2sm-modal").classList.add("transition-out");
//                 setTimeout(() => {
//                     // props.closeModal();
//                     props.setRenderInviteToServer(false);

//                     window.removeEventListener('keyup', handleESC, false);
//                 }, 200);

//             },
//         };
//         if (keys[e.keyCode]) {
//             keys[e.keyCode]();
//         }
//     }

//     const handleCloseOnOuterClick = (e) => {
//         e.preventDefault();
//         document.getElementById("i2sm-modal").classList.add("transition-out");
//         setTimeout(() => {
//             // props.closeModal();
//             props.setRenderInviteToServer(false);

//             window.removeEventListener('keyup', handleESC, false);
//         }, 200);
//     }

//     const renderExtraRef = useRef(Math.random() > 0.5);


//     // no friends to invite give copy and paste link

//     if (loadChannel === true && noFriendsToInvite === true) {
//         return (

//             <REACT_PORTAL wrapperId={'sub-modal'} onClick={(e) => e.stopPropagation()}>
//                 <div className="invite-to-server-modal-layerContainer" onClick={(e) => handleCloseOnOuterClick(e)}>
//                     <div className="i2sm-back-drop"></div>
//                     <div className="i2sm-main-layer" onClick={e => e.stopPropagation()} ref={popupRef}>
//                         <div>
//                             <div className="i2sm-focus-lock">
//                                 <div className="i2sm-modal" id="i2sm-modal">
//                                     <div className="i2sm-inner-flex-no-shade">
//                                         <button type="button" className="i2sm-close-button-wrapper" onClick={(e) => handleCloseOnOuterClick(e)} >
//                                             <div className="i2sm-close-button-container">
//                                                 <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                     <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
//                                                     </path>
//                                                 </svg>
//                                             </div>
//                                         </button>
//                                         <div className="i2sm-header-container">
//                                             <h1 className="i2sm-header-1">Invite friends to <strong>{props.server.server_name}</strong></h1>
//                                             <div className="i2sm-header-channel-name-container">
//                                                 {
//                                                     Channel.channel_type === 2 ?
//                                                         (<svg className="i2sm-channelLSIcon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 
//                                                             3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 
//                                                             21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 
//                                                             7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14
//                                                              5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 
//                                                              11.451 14.551 11.002 14 11.002V9.00195Z" aria-hidden="true">
//                                                             </path>
//                                                         </svg>) :
//                                                         (<svg width="24" height="24" viewBox="0 0 24 24" className="i2sm-channelHashIcon" aria-hidden="true" role="img">
//                                                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 
//                                                          5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 
//                                                          2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 
//                                                          7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 
//                                                          3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 
//                                                          3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899
//                                                          9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632
//                                                          20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 
//                                                          20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
//                                                             </path>
//                                                         </svg>)

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
//                                                     <svg aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24">
//                                                         <path fill={`${inviteCheck === true ? `white` : `transparent`}`} fillRule="evenodd" clipRule="evenodd" d="M8.99991 16.17L4.82991 12L3.40991 
//                                                                         13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z">
//                                                         </path>
//                                                     </svg>
//                                                 </div>
//                                                 <div className="i2sm-raw-invite-label-text-wrapper">
//                                                     <div className={`i2sm-raw-invite-label-text`} style={{ color: `${inviteCheck === true ? `#fa777c` : `#c4c9ce`}`, fontStyle: `${inviteCheck === true ? `italic` : `normal`}` }}>
//                                                         Set this link to never expire ($TR!F3 N!TR0 Required)
//                                                     </div>
//                                                 </div>
//                                             </label>
//                                             <div className="is2m-cursor-pointer-gear-button" role="button" data-tip data-for="ilink">
//                                                 <svg className="is2m-cursor-pointer-gear-icon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24">
//                                                     <path fill="" fillRule="evenodd" clipRule="evenodd"
//                                                         d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 
//                                                                  19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 
//                                                                  14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 
//                                                                  4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 
//                                                                  14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z">
//                                                     </path>
//                                                 </svg>
//                                                 <ReactTooltip
//                                                     className="thread-tool-tip-3"
//                                                     textColor="#B9BBBE"
//                                                     backgroundColor="#191919"
//                                                     id="ilink"
//                                                     place="top"
//                                                     effect="solid">
//                                                     Link Settings ($TR!F3 N!TR0 Required)
//                                                 </ReactTooltip>
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
//             <REACT_PORTAL wrapperId={'sub-modal'} onClick={(e) => e.stopPropagation()}>
//                 <div className="invite-to-server-modal-layerContainer" onClick={(e) => handleCloseOnOuterClick(e)}>
//                     <div className="i2sm-back-drop"></div>
//                     <div className="i2sm-main-layer" onClick={e => e.stopPropagation()} ref={popupRef}>
//                         <div className="i2sm-main-wrapper" >
//                             <div className="i2sm-focus-lock">
//                                 <div className="i2sm-modal" id="i2sm-modal">
//                                     <div className="i2sm-inner-flex">
//                                         <button type="button" className="i2sm-close-button-wrapper" onClick={(e) => handleCloseOnOuterClick(e)} >
//                                             <div className="i2sm-close-button-container">
//                                                 <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                     <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
//                                                     </path>
//                                                 </svg>
//                                             </div>
//                                         </button>
//                                         <div className="i2sm-header-container">
//                                             <div className="i2sm-header">
//                                                 <h1 className="i2sm-header-1">Invite friends to <strong>{props.server.server_name}</strong></h1>
//                                                 <div className="i2sm-header-channel-name-container">
//                                                     {
//                                                         Channel.channel_type === 2 ?
//                                                             (<svg className="i2sm-channelLSIcon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 
//                                                                         3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 
//                                                                         21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 
//                                                                         7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14
//                                                                          5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 
//                                                                          11.451 14.551 11.002 14 11.002V9.00195Z" aria-hidden="true">
//                                                                 </path>
//                                                             </svg>) :
//                                                             (<svg width="24" height="24" viewBox="0 0 24 24" className="i2sm-channelHashIcon" aria-hidden="true" role="img">
//                                                                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 
//                                                                      5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 
//                                                                      2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 
//                                                                      7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 
//                                                                      3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 
//                                                                      3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899
//                                                                      9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632
//                                                                      20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 
//                                                                      20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
//                                                                 </path>
//                                                             </svg>)
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
//                                                                 <svg className={`i2sm-mag-icon ${searchText.length === 0 ? `i2sm-visible` : ``}`} aria-label="Search" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                                     <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832
//                                                                       12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10
//                                                                       18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603
//                                                                       4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603
//                                                                       15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z">
//                                                                     </path>
//                                                                 </svg>
//                                                                 <svg aria-label="Clear" aria-hidden="false" role="img"
//                                                                     className={`i2sm-clear-icon ${searchText.length > 0 ? `i2sm-visible` : ``}`}
//                                                                     onClick={() => { _resetSearch(); }}
//                                                                     width="24" height="24" viewBox="0 0 24 24"
//                                                                 >
//                                                                     <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
//                                                                     </path>
//                                                                 </svg>
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
//                                                         <svg className="i2sm-sll-add-image-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 8 12">
//                                                             <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                             </path>
//                                                             <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                             </path>
//                                                         </svg>
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
//             <REACT_PORTAL wrapperId={'sub-modal'} onClick={(e) => e.stopPropagation()}>
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