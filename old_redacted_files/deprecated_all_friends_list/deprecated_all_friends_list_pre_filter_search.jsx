// this file is up to date but the search is replaced

// import React from "react";
// import { useState, useRef, useEffect } from "react";
// import ReactTooltip from "react-tooltip";
// import EditFriendshipModalContainer from "../edit_friendship_modal/edit_friendship_container";
// import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";


// const FriendShipIndex = (props) => {
//     const inputRef = useRef();
//     const friendRef = useRef();
//     const [searchText, setSearchText] = useState("");
//     const [selectedFriends, setSelectedFriends] = useState([]);
//     const [showPopup, setShowPopup] = useState(false);
//     const [selectFriend, toggleSelected] = useState([]);

//     const dmMembersArray = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx]);

//     const [popupTop, setPopupTop] = useState(0);
//     const [popupLeft, setPopupLeft] = useState(0);

//     let allFriends = props.friends;
//     let rendered_Default_PFP = DefaultPFPSVG;


//     useEffect(() => {
//         props.requestFriendships();
//         // props.requestAllFriendships()


//         return function cleanup () {
//             if (props.errors.length > 0) {
//                 props.removeFriendshipErrors();
//             }
//             if (props.dmServerErrors.length > 0) {
//                 props.removeDmServerErrors();
//             }
//         }

//     }, [])

//     const handleSelected = (friend) => {
//         toggleSelected(friend);
//     }


//     const handlePopupShow = (e) => {
//         let currTop = e.currentTarget.getBoundingClientRect().top;
//         let currLeft = e.currentTarget.getBoundingClientRect().left;
//         const realWidth = window.screen.width * window.devicePixelRatio;
//         const realHeight = window.screen.height * window.devicePixelRatio;
//         //check if screen is 1920*1080 or 4k (3840*2160) give a range not an  exact as screens alter slightly 

//         if (currTop > ((window.innerHeight * 0.7889))) {
//             if (realWidth >= 3800 && realHeight >= 2100) {
//                 currTop /= 1.1475;
//             }
//             else {
//                 // screen resolution is assumed 1920 * 1080
//                 currTop /= 1.28;
//             }
//         }

//         // if (currTop > 542) {
//         //     currTop /= 1.28;
//         // }
//         setPopupTop(currTop);
//         setPopupLeft(currLeft);
//         setShowPopup(!showPopup);
//     }

//     const handleDm = (friend) => {
//         const memberIds = [props.currentUser.id, parseInt(friend.id)].sort((a, b) => a - b);
//         let new_dm_members = [props.currentUser, friend];
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
//             props.reSyncCurrentUser(props.currentUserId).then(() => {
//                 props.history.push(`/$/channels/@me/${newDmServer.id}`);
//             })
//             App.StrifeCore.perform('parse_Invites_To_Existing_DmServer_INVOKE_DMS_REFRESH', { dm_member_id: friend.id, dm_server_id: newDmServer.id });
//         });

//         return;
//     }



//     const liveSearch = () => {
//         let allFriendShips = document.querySelectorAll('.friend-index-item');
//         let search_query = document.getElementById('input-all-friends').value;
//         // let search_query = searchText;
//         let numberOfFriends = document.getElementById('num-of-friends');
//         let count = 0;
//         let foundCount = 0;
//         for (let i = 0; i < allFriendShips.length; i++) {
//             if (allFriendShips[i].innerText.toLowerCase().includes(search_query.toLowerCase())) {
//                 allFriendShips[i].classList.remove("is-hidden");
//                 foundCount++;
//                 numberOfFriends.innerHTML = `ALL FRIENDS - ${foundCount}`;

//             }
//             else {
//                 allFriendShips[i].classList.add("is-hidden");
//                 count++;

//             }
//         }

//         if (count === allFriendShips.length) {
//             document.getElementById('ul-fiiw').classList.add('is-hidden')
//             document.getElementById('no-match').classList.remove('is-hidden')
//             numberOfFriends.innerHTML = `ALL FRIENDS - ${0}`;

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


//     if (allFriends.length > 0) {
//         return (


//             <div className="friendslist-column">
//                 {showPopup && <EditFriendshipModalContainer user={props.currentUser} friend={selectFriend} left={popupLeft} top={popupTop} setShowPopup={setShowPopup} />}
//                 <div className="homepage-friends-search-bar">
//                     <div className="homepage-friends-search-bar-inner">
//                         <input
//                             id="input-all-friends"
//                             className="homepage-friends-search-bar-input"
//                             type="search"
//                             placeholder="Search"
//                             spellCheck={false}
//                             autoFocus ref={inputRef}
//                             onInput={() => liveSearch()}
//                             onChange={e => setSearchText(e.currentTarget.value)}
//                             value={searchText}
//                         />

//                         <div className="magnify-icon-wrapper">
//                             <div className="magnify-icon">
//                                 <svg className={`mag-icon1 ${searchText.length === 0 ? `visible-x` : ``}`}
//                                     aria-label="Search" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                     <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 
//                                          17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 
//                                          5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 
//                                          13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 
//                                          14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 
//                                          4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 
//                                          14.242 14.243C13.109 15.376 11.603 16 10 16Z">
//                                     </path>
//                                 </svg>
//                                 <svg className={`clear-mag-icon1 mag-icon1 ${searchText.length === 0 ? `` : `visible-x`}`}
//                                     onClick={() => { resetSearch(); }}
//                                     aria-label="Clear" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                     <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
//                                     </path>
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="home-page-friend-tab-section-title">
//                     <div id="num-of-friends" className="all-friends-title">
//                         {`ALL FRIENDS — ${allFriends.length}`}
//                     </div>
//                 </div>


//                 <div id="no-match" className="empty-state-container is-hidden">
//                     <div className="empty-state-users-empty">
//                         <div className="empty-state-users-flex">
//                             <img className="no-friends-online-icon" alt=" " />
//                             <div className="empty-state-users-inner-flex">
//                                 <div className="empty-state-users-inner-flex-inner-text">Wumpus looked, but couldn't find anyone with that name.</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>


//                 <div className="friend-index global-scroller-base auto-scroll-raw-attributes" id='ul-fiiw' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                     <div >
//                         {
//                             allFriends.map((friend, friendIdx) => {
//                                 return (
//                                     <div id="fii" className="friend-index-item" key={friend.id} >

//                                         <div className="friend-index-item-wrapper-inner">

//                                             <div className="friend-info">

//                                                 <div className="friends-page-avatar-svg-wrapper" role="img" aria-hidden="false">
//                                                     <svg width="40" height="40" viewBox="0 0 40 40" className="friend-status-mask friends-svg-avatar-wrapping" aria-hidden="true">
//                                                         <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
//                                                             <div className="friend-svg-avatar-stack">
//                                                                 {
//                                                                     friend.photo === undefined ? (
//                                                                         <img className={`friend-avatar-pfp color-${friend.color_tag}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />

//                                                                     ) : (
//                                                                         <img className={`friend-avatar-pfp`} src={friend.photo} alt=" " aria-hidden="true" />
//                                                                     )
//                                                                 }
//                                                             </div>
//                                                         </foreignObject>
//                                                         <rect width="10" height="10" x="22" y="22" fill={`${friend.online ? `rgb(35, 165, 90)` : `rgb(128, 132, 142)`}`} mask={`url(#svg-mask-status-${friend.online ? `online` : `offline`})`} className="friend-svg-masked-pointer-events">
//                                                         </rect>
//                                                     </svg>
//                                                 </div>

//                                                 <div className="friend-account-info-wrapper">
//                                                     <div className="friend-account-info">
//                                                         <span className="friend-tag-username">
//                                                             {friend.username}
//                                                         </span>
//                                                         <span className="strife-discriminator-tag">#{friend.strife_id_tag}</span>
//                                                     </div>
//                                                     <div className="subtext">
//                                                         <div className="subtext-inner">
//                                                             {`${friend.online ? "online" : "offline"}`}
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                         </div>
//                                         <div className="friend-actions">
//                                             <div data-tip data-for="Message" className="friend-action-button" onClick={() => handleDm(friend)}>
//                                                 <svg className="friend-msg-svg-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                                                     <path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 
//                                                             4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 
//                                                             17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 
//                                                             20.1925 3 19.198 3H4.79805Z">
//                                                     </path>
//                                                 </svg>
//                                                 <ReactTooltip className="message-tool-tip" textColor="#B9BBBE"
//                                                     backgroundColor="#191919" id="Message" place="top" effect="solid">
//                                                     Message
//                                                 </ReactTooltip>

//                                             </div>
//                                             <div data-tip data-for="More"
//                                                 className="friend-action-button"
//                                                 onClick={(e) => {
//                                                     handleSelected(friend);
//                                                     handlePopupShow(e)
//                                                 }}
//                                             >

//                                                 <svg className="friend-options-svg-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                     <g fill="none" fillRule="evenodd">
//                                                         <path d="M24 0v24H0V0z">
//                                                         </path>
//                                                         <path fill="currentColor" d="M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2
//                                                                  .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2
//                                                                   2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z">
//                                                         </path>
//                                                     </g>
//                                                 </svg>
//                                                 <ReactTooltip className="more-message-tool-tip" textColor="#B9BBBE" backgroundColor="#191919"
//                                                     id="More" place="top" effect="solid">
//                                                     More
//                                                 </ReactTooltip>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )
//                             })
//                         }
//                     </div>
//                 </div>
//                 <div className="friend-index-sep"></div>
//             </div>

//         )
//     }

//     else {
//         return (
//             <div className="friendslist-column">
//                 <div className="empty-state-container">
//                     <div className="empty-state-users-empty">
//                         <div className="empty-state-users-flex">
//                             <img className="add-friends-icon" alt=" " />
//                             <div className="empty-state-users-inner-flex">
//                                 <div className="empty-state-users-inner-flex-inner-text">Wumpus is waiting on friends. You don’t have to though!</div>
//                             </div>
//                             <button type="button" className="no-friends-all-page-redirect-button" onClick={() => props.switchToAddFriendsPage("Add_Friend")}>
//                                 <div className="nfapr-button-contents">Add Friend</div>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

// }

// export default FriendShipIndex;