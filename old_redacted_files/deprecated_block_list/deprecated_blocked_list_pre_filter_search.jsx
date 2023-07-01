// // this file is up to date but the search is replaced
// import React from "react";
// import ReactTooltip from "react-tooltip";
// import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
// import { useState, useRef, useEffect } from "react";


// const BlockedList = (props) => {

//     const [searchText, setSearchText] = useState("");
//     const inputRef = useRef();
//     let allBlockedUsers = props.blockedUsers;
//     let rendered_Default_PFP = DefaultPFPSVG;

//     useEffect(() => {
//         props.requestFriendships();
//         // props.requestAllFriendships();
//         return function cleanup () {
//             if (props.errors.length > 0) {
//                 props.removeFriendshipErrors();
//             }
//         }

//     }, [])


//     const liveSearch = () => {
//         let allFriendShips = document.querySelectorAll('.friend-index-item');
//         let search_query = document.getElementById('input-all-friends').value;
//         let numberOfFriends = document.getElementById('num-of-friends');
//         let count = 0;
//         let foundCount = 0;
//         for (let i = 0; i < allFriendShips.length; i++) {
//             if (allFriendShips[i].innerText.toLowerCase().includes(search_query.toLowerCase())) {
//                 allFriendShips[i].classList.remove("is-hidden");
//                 foundCount++;
//                 numberOfFriends.innerHTML = `BLOCKED USERS - ${foundCount}`;

//             }
//             else {
//                 allFriendShips[i].classList.add("is-hidden");
//                 count++;
//             }
//         }

//         if (count === allFriendShips.length) {
//             document.getElementById('ul-fiiw').classList.add('is-hidden')
//             document.getElementById('no-match').classList.remove('is-hidden')
//             numberOfFriends.innerHTML = `BLOCKED USERS - ${0}`;
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

//     const removeBlockedPerson = (blockedUser) => {
//         let substate = {
//             user_id: props.currentUser.id,
//             friend_id: blockedUser.id,
//         }
//         props.removeBlockedUser(substate).then(() => {
//             App.StrifeCore.perform('parse_unblock_request', { user_id: props.currentUser.id, friend_id: blockedUser.id });
//         });
//     }




//     if (allBlockedUsers.length > 0) {

//         return (

//             <div className="friendslist-column">


//                 <div className="homepage-friends-search-bar">
//                     <div className="homepage-friends-search-bar-inner">
//                         <input id="input-all-friends" className="homepage-friends-search-bar-input" placeholder="Search"
//                             type="search" onInput={() => liveSearch()}
//                             onChange={e => setSearchText(e.currentTarget.value)}
//                             autoFocus ref={inputRef}
//                             spellCheck={false}
//                             value={searchText} />
//                         <div className="magnify-icon-wrapper">
//                             <div className="magnify-icon">
//                                 <svg className={`mag-icon1 ${searchText.length === 0 ? `visible-x` : ``}`} aria-label="Search" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                     <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 
//                                             17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 
//                                             5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 
//                                             13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 
//                                             14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 
//                                             4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 
//                                             14.242 14.243C13.109 15.376 11.603 16 10 16Z">
//                                     </path>
//                                 </svg>

//                                 <svg className={`clear-mag-icon1 mag-icon1 ${searchText.length === 0 ? `` : `visible-x`}`}
//                                     onClick={() => resetSearch()}
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
//                         {`BLOCKED USERS — ${allBlockedUsers.length}`}
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
//                     <div>
//                         {
//                             allBlockedUsers.map((blockedUser, blockedUserIdx) => {
//                                 return (
//                                     <div id="fii" className="friend-index-item" key={blockedUser.id}>

//                                         <div className="friend-index-item-wrapper-inner">
//                                             <div className="friend-info">

//                                                 <div className="friends-page-avatar-svg-wrapper" role="img" aria-hidden="false">
//                                                     <svg width="32" height="32" viewBox="0 0 32 32" className="friend-status-mask friends-svg-avatar-wrapping" aria-hidden="true">
//                                                         <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-default)">
//                                                             <div className="friend-svg-avatar-stack">
//                                                                 {
//                                                                     blockedUser.photo === undefined ? (
//                                                                         <img className={`friend-avatar-pfp color-${blockedUser.color_tag}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />

//                                                                     ) : (
//                                                                         <img className={`friend-avatar-pfp`} src={blockedUser.photo} alt=" " aria-hidden="true" />
//                                                                     )
//                                                                 }
//                                                             </div>
//                                                         </foreignObject>
//                                                     </svg>
//                                                 </div>

//                                                 <div className="friend-account-info-wrapper">
//                                                     <div className="friend-account-info">
//                                                         <span className="friend-tag-username">
//                                                             {blockedUser.username}
//                                                         </span>
//                                                         <span className="strife-discriminator-tag">#{blockedUser.strife_id_tag}</span>
//                                                     </div>
//                                                     <div className="subtext">
//                                                         <div className="subtext-inner">
//                                                             Blocked
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                             </div>
//                                         </div>
//                                         <div className="friend-actions">
//                                             <div data-tip data-for="Remove-Blocked-User" className="friend-action-button red-button" onClick={() => removeBlockedPerson(blockedUser)}>
//                                                 <svg className="unblock-user-svg-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                     <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M20.2949 0.298996L21.7089 1.713L19.4169 4.006L21.7089
//                                                      6.299L20.2949 7.713L18.0019 5.42L15.7099 7.713L14.2949 6.299L16.5879 4.006L14.2949 1.713L15.7099 0.298996L18.0019 2.592L20.2949
//                                                      0.298996ZM8.00195 13.006C10.207 13.006 12.002 11.211 12.002 9.006C12.002 6.801 10.207 5.006 8.00195 5.006C5.79695 5.006 4.00195
//                                                      6.801 4.00195 9.006C4.00195 11.211 5.79695 13.006 8.00195 13.006ZM8.00195 14.006C3.29095 14.006 0.00195312 16.473 0.00195312
//                                                      20.006V21.006H16.002V20.006C16.002 16.473 12.713 14.006 8.00195 14.006Z">
//                                                     </path>
//                                                 </svg>
//                                                 <ReactTooltip className="remove-message-tool-tip" textColor="#B9BBBE"
//                                                     backgroundColor="#191919" id="Remove-Blocked-User" place="top" effect="solid">
//                                                     Unblock
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
//             </div >
//         )
//     }
//     else {

//         return (
//             <div className="friendslist-column">
//                 <div className="empty-state-container">
//                     <div className="empty-state-users-empty">
//                         <div className="empty-state-users-flex">
//                             <img className="cant-block-wumpus" alt=" " />
//                             <div className="empty-state-users-inner-flex">
//                                 <div className="empty-state-users-inner-flex-inner-text">You can't unblock the Wumpus.</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }


// }


// export default BlockedList;