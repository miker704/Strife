// import React from "react";
// import { useState, useRef, useEffect } from "react";
// import { closeHookModalOnOutsideClick, closeOnEsc } from "../../../utils/close_hook_modals_api_utils";
// import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";

// const InviteToDmModal = ({
//     top,
//     dmServers,
//     dmServer,
//     dmServerId,
//     setShowPopUp,
//     currentUser,
//     friends,
//     createDmServer,
//     dmServerMembers,
//     history,
//     createDmMember,
//     dmServerErrors,
//     errors,
//     requestFriendships,
//     removeDmServerErrors,
//     removeFriendshipErrors,
//     requestAllFriendships,
//     closeModal,
//     topBar

// }) => {
//     const inputRef = useRef();
//     const popupRef = useRef();
//     closeHookModalOnOutsideClick(popupRef, setShowPopUp);
//     closeOnEsc(setShowPopUp);
//     const [searchText, setSearchText] = useState("");
//     const [selectedFriends, setSelectedFriends] = useState([]);
//     const isSelected = (friend) => selectedFriends.map(friend => friend.id).includes(friend.id);
//     const findIfSelected = (toAdd) => selectedFriends.findIndex(friend => friend.id === toAdd.id);
//     const findIfMemberAlready = (member) => Object.values(dmServerMembers).findIndex(friend => friend.id === member.id);
//     let rendered_User_PFP = DefaultPFPSVG;
//     let count = Object.values(dmServerMembers).length >= 10 ? 10 : selectedFriends.length + Object.values(dmServerMembers).length - 1;

//     useEffect(() => {
//         requestAllFriendships();
//         return function cleanup () {
//             if (errors.length > 0) {
//                 removeFriendshipErrors();
//             }
//             if (dmServerErrors.length > 0) {
//                 removeDmServerErrors();
//             }
//         }
//     }, []);

//     const toggleSelection = (friend) => {
//         const idx = findIfSelected(friend);
//         if (idx > -1) {
//             setSelectedFriends(prevState => {
//                 const newState = [...prevState];
//                 newState.splice(idx, 1);
//                 return newState;
//             });
//         }
//         else {
//             setSelectedFriends(prevState => [...prevState, friend]);
//             setSearchText("");
//         }
//     }

//     const dmMembersArray = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx]);

//     const addNewDmMembers = () => {
//         const newDMMembers = [...selectedFriends.map((friend) => parseInt(friend.id))].sort((a, b) => a - b);
//         const dm_SERVER_ID = parseInt(dmServerId)
//         for (let newMemberId of newDMMembers) {
//             createDmMember({ dm_member_id: newMemberId, dm_server_id: dm_SERVER_ID }).then(() => {
//                 App.StrifeCore.perform('parse_Invites_To_Existing_DmServer', { dm_member_id: newMemberId, dm_server_id: dm_SERVER_ID });
//             })
//         }
//         setShowPopUp(false);
//     }


//     const filterOutFriends = friends.filter((friend, idx) => {
//         const index = findIfMemberAlready(friend)
//         if (index === -1) {
//             return friend;
//         }
//     })



//     const liveSearch = () => {
//         let allFriendShips = document.querySelectorAll('.create-dm-friend-wrapper');
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




//     return (
//         <div className={`clear-modal-wrapper ${topBar === true ? `homeBar` : ``}`}>

//             <div className="create-dm-modal-popup dm-invite" onClick={e => e.stopPropagation()} ref={popupRef} >
//                 <div className="create-dm-modal-focus-lock">
//                     <div className="create-dm-modal">
//                         <form onSubmit={addNewDmMembers}>
//                             <div className="create-dm-header-sec">
//                                 <h1 className="create-dm-header-h2">Select Friends</h1>

//                                 {count <= 8 ?
//                                     <div className="num-of-dm-members-selected">You can add {9 - count} more {`${9 - count === 1 ? `friend` : `friends`}`}.</div>
//                                     : <div className={`${count > 9 ? "num-of-dm-members-selected cDMS-error" : "num-of-dm-members-selected"}`}>
//                                         This group has a 10 member limit.
//                                     </div>
//                                 }
//                                 <div className="create-dm-search-bar-wrapper">
//                                     <div className="create-dm-search-bar-outer-wrapper">
//                                         <div className="create-dm-search-bar-inner-wrapper global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                                             {
//                                                 selectedFriends.map(friend => {
//                                                     return (
//                                                         <div
//                                                             className="mini-box"
//                                                             key={friend.id}
//                                                             onClick={() => { toggleSelection(friend) }}
//                                                         >
//                                                             {friend.username}
//                                                             <svg className="close-3-icon" aria-label="Remove" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                                 <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 
//                                                                     12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
//                                                                 </path>
//                                                             </svg>
//                                                         </div>
//                                                     )
//                                                 })
//                                             }

//                                             <input
//                                                 id="input-all-friends"
//                                                 className="create-dm-search-bar"
//                                                 autoFocus ref={inputRef}
//                                                 spellCheck={false}
//                                                 role="combobox"
//                                                 type="text"
//                                                 value={searchText}
//                                                 onInput={() => liveSearch()}
//                                                 onChange={(e) => setSearchText(e.currentTarget.value)}
//                                                 placeholder="Type the username of a friend"
//                                             />
//                                             <div className="create-dm-invis-div"></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="create-dm-scroller global-scroll-thin-raw-attributes global-scroller-base global-scroll-faded-raw-attributes" id='ul-fiiw' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                                 <div className="create-dm-ul-list">
//                                     <div className="create-dm-ul-list-div"></div>
//                                     {filterOutFriends.map(friend => {
//                                         if (friend.username.toLowerCase().includes(searchText.toLowerCase())) {
//                                             return (

//                                                 <div className="create-dm-friend-wrapper" key={friend.id}
//                                                     onClick={() => {
//                                                         toggleSelection(friend);
//                                                         inputRef.current.focus();
//                                                     }}>
//                                                     <div className="create-dm-friend-inner-wrapper">

//                                                         <div className="friend-avatar-svg-wrapper" role="img" aria-hidden="false">
//                                                             <svg width="40" height="40" viewBox="0 0 40 40" className="status-mask svg-avatar-wrapping" aria-hidden="true">
//                                                                 <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
//                                                                     <div className="svg-avatar-stack">
//                                                                         {
//                                                                             friend.photo === undefined ? (
//                                                                                 <img className={`create-dm-avatar-svg-masked color-${friend.color_tag}`} src={rendered_User_PFP} alt=" " aria-hidden="true" />
//                                                                             ) : (
//                                                                                 <img className="create-dm-avatar-svg-masked" src={friend.photo} alt=" " aria-hidden="true" />
//                                                                             )
//                                                                         }
//                                                                     </div>
//                                                                 </foreignObject>
//                                                                 <rect width="10" height="10" x="22" y="22" fill={`${friend.online ? `rgb(35, 165, 90)` : `rgb(128, 132, 142)`}`} mask={`url(#svg-mask-status-${friend.online ? `online` : `offline`})`} className="svg-masked-pointer-events">
//                                                                 </rect>
//                                                             </svg>
//                                                         </div>

//                                                         <div className="create-dm-user-info">
//                                                             <strong className="create-dm-user-username-wrapper">
//                                                                 {friend.username}
//                                                             </strong>
//                                                             <div className="create-dm-user-strife-tag">
//                                                                 <span className="create-dm-user-user-name">
//                                                                     {friend.username}
//                                                                 </span>
//                                                                 <span>#{friend.strife_id_tag}</span>
//                                                             </div>
//                                                         </div>
//                                                         <span className="create-dm-check-box-wrapper">
//                                                             <div className={`create-dm-check-box ${isSelected(friend) ? "checked" : ""}`}>
//                                                                 <svg aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24">
//                                                                     <path fill="transparent" fillRule="evenodd" clipRule="evenodd" d="M8.99991 16.17L4.82991 
//                                                                       12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z">
//                                                                     </path>
//                                                                 </svg>
//                                                             </div>
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             )
//                                         }
//                                         else {
//                                             return null;
//                                         }
//                                     })
//                                     }
//                                 </div>
//                             </div>


//                             <div id="no-match" className="create-dm-no-results is-hidden">
//                                 <div className="create-dm-no-results-error-state"></div>
//                                 <div>No friends found that are not already in this DM.</div>
//                             </div>


//                             <div className="create-dm-footer"></div>
//                             <div className="create-dm-button-sec">
//                                 <button className="create-dm-button" type="submit" disabled={count > 9 || count - (Object.values(dmServerMembers).length - 1) === 0}>
//                                     <div className="create-dm-button-text">{`${Object.values(dmServerMembers).length === 2 ? `Create Group DM` : `Invite To Group DM`}`}</div>
//                                 </button>
//                                 <div className="ccm-small-txt-2">(Sending Invite Links (WIP))</div>

//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default InviteToDmModal;