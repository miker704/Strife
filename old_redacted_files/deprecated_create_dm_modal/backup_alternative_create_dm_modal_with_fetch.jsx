// import React from "react";
// import { useState, useRef, useEffect } from "react";
// import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
// import { requestAllLevelThreeFriends } from "../../../utils/friendship_api_util";
// import { returnDefaultUserPFP } from "../../../utils/userPFP_api_util";
// const CreateDmModal = (props) => {
//     const inputRef = useRef();
//     const popupRef = useRef();
//     const [searchText, setSearchText] = useState("");
//     const [selectedFriends, setSelectedFriends] = useState([]);
//     const isSelected = (friend) => selectedFriends.map(friend => friend.id).includes(friend.id);
//     const findIfSelected = (toAdd) => selectedFriends.findIndex(friend => friend.id === toAdd.id);
//     let rendered_User_PFP = DefaultPFPSVG;
//     let count = selectedFriends.length;
//     const [friends, setFriends] = useState([]);
//     const [isLoading, setIsLoading] = useState(true)

//     //run fetch not a redux action to avoid unintentional rerenders of other onscreen components
//     useEffect(() => {

//         const fetchData = async () => {
//             await requestAllLevelThreeFriends(props.currentUserId)
//                 .then((result) => {
//                     //it doesnt matter sorting the records via username on the backend once it hits the frontend  it
//                     // gets sorted back by the entry id so its a  wasted effort to do so on the backend  
//                     result = Object.values(result).sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1);
//                     setFriends(result);
//                     setIsLoading(false);
//                 }, (error) => {
//                     props.closeModal();
//                 })
//         }

//         fetchData().catch(() => props.closeModal());


//     }, []);




//     //set up handler and exit
//     useEffect(() => {

//         window.addEventListener('keyup', handleESC, false);
//         // props.requestAllFriendships();
//         // setFriends(props.friends);
//         // setIsLoading(false);
//         return function cleanup () {
//             window.removeEventListener('keyup', handleESC, false);
//             if (props.errors.length > 0) {
//                 props.removeFriendshipErrors();
//             }
//             if (props.dmServerErrors.length > 0) {
//                 props.removeDmServerErrors();
//             }
//         }
//     }, []);

//     const handleESC = (e) => {
//         const keys = {
//             27: () => {
//                 e.preventDefault();
//                 props.closeModal();
//             },
//         };
//         if (keys[e.keyCode]) {
//             keys[e.keyCode]();
//         }
//     }


//     const unTogglePreviousSelection = () => {
//         if (searchText === "") {
//             if (selectedFriends.length > 0) {
//                 setSelectedFriends(prevState => {
//                     const newState = [...prevState];
//                     newState.splice(-1, 1);
//                     return newState;
//                 });
//             }
//         }
//     }

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

//     const handleDmServerCreation = () => {
//         const memberIds = [props.currentUser.id, ...selectedFriends.map((friend) => parseInt(friend.id))].sort((a, b) => a - b);
//         for (let dmServer of props.dmServers) {
//             if (dmMembersArray(Object.values(dmServer.members).map((member) => member.id).sort((a, b) => a - b), memberIds)) {

//                 if (props.history.location.pathname !== `/$/channels/@me/${dmServer.id}`) {
//                     props.history.push(`/$/channels/@me/${dmServer.id}`);
//                 }
//                 props.closeModal();
//                 return;
//             }
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
//         }).then(() => {
//             App.StrifeCore.perform('transmit_New_DmServer', { newDmServer })
//             let membersToInvite = Object.values(newDmServer.members);
//             for (let member of membersToInvite) {
//                 if (member.id !== props.currentUser.id) {
//                     App.StrifeCore.perform('parse_Invites_To_Existing_DmServer', { dm_member_id: member.id, dm_server_id: newDmServer.id });
//                 }
//             }
//             props.closeModal();
//         })

//         return;
//     }

//     const _liveSearch = (items) => {
//         return items.filter((item) => {

//             let hash = "#" + item.strife_id_tag;
//             if (item.username.toLowerCase().includes(searchText.toLowerCase())) {
//                 return item;
//             }
//             else if (hash.includes(searchText)) {
//                 return item;
//             }
//             else if (searchText === "") {
//                 return item;
//             }
//         })
//     }



//     let createDmButtonMessage = count <= 1 ? (
//         <div className="create-dm-button-text">Create DM</div>
//     ) : (
//         <div className="create-dm-button-text">Create Group DM</div>
//     )




//     if (isLoading === false && friends.length > 0) {
//         return (
//             <div className={`clear-modal-wrapper`} onClick={(e) => props.closeModal()}>
//                 <div className="create-dm-modal-popup" onClick={e => e.stopPropagation()} ref={popupRef}>
//                     <div className="create-dm-modal-focus-lock">
//                         <div className="create-dm-modal">
//                             <form onSubmit={handleDmServerCreation}>
//                                 <div className="create-dm-header-sec">
//                                     <h1 className="create-dm-header-h2">Select Friends</h1>
//                                     {count <= 8 ?
//                                         <div className="num-of-dm-members-selected">You can add {9 - count} more {`${9 - count === 1 ? `friend` : `friends`}`}.</div>
//                                         : <div className={`${count > 9 ? "num-of-dm-members-selected cDMS-error" : "num-of-dm-members-selected"}`}>
//                                             This group has a 10 member limit.
//                                         </div>
//                                     }
//                                     <div className="create-dm-search-bar-wrapper">
//                                         <div className="create-dm-search-bar-outer-wrapper">
//                                             <div className="create-dm-search-bar-inner-wrapper global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                                                 {
//                                                     selectedFriends.map(friend => {
//                                                         return (
//                                                             <div
//                                                                 className="mini-box"
//                                                                 key={friend.id}
//                                                                 onClick={() => { toggleSelection(friend) }}
//                                                             >
//                                                                 {friend.username}
//                                                                 <svg className="close-3-icon" aria-label="Remove" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                                     <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 
//                                                                         12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
//                                                                     </path>
//                                                                 </svg>
//                                                             </div>
//                                                         )
//                                                     })
//                                                 }

//                                                 <input
//                                                     id="input-all-friends"
//                                                     className="create-dm-search-bar"
//                                                     autoFocus ref={inputRef}
//                                                     spellCheck={false}
//                                                     role="combobox"
//                                                     type="text"
//                                                     value={searchText}
//                                                     onKeyDown={(e) => {
//                                                         if (e.key === 'Backspace' && e.currentTarget.value === "") {
//                                                             unTogglePreviousSelection();
//                                                         }
//                                                     }}
//                                                     onChange={(e) => setSearchText(e.currentTarget.value)}
//                                                     placeholder="Type the username of a friend"
//                                                 />
//                                                 <div className="create-dm-invis-div"></div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {


//                                     _liveSearch(friends).length === 0 ?
//                                         (
//                                             <div className="create-dm-no-results">
//                                                 <div className="create-dm-no-results-error-state"></div>
//                                                 <div>No friends found that are not already in this DM.</div>
//                                             </div>
//                                         ) :

//                                         (
//                                             <div className="create-dm-scroller global-scroll-thin-raw-attributes global-scroller-base global-scroll-faded-raw-attributes" id='ul-fiiw' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                                                 <div className="create-dm-ul-list">
//                                                     <div className="create-dm-ul-list-div"></div>
//                                                     {
//                                                         _liveSearch(friends).map((friend) => {
//                                                             return (
//                                                                 <div className="create-dm-friend-wrapper" key={friend.id}
//                                                                     onClick={() => {
//                                                                         toggleSelection(friend);
//                                                                         inputRef.current.focus();
//                                                                     }}>
//                                                                     <div className="create-dm-friend-inner-wrapper">

//                                                                         <div className="friend-avatar-svg-wrapper" role="img" aria-hidden="false">
//                                                                             <svg width="40" height="40" viewBox="0 0 40 40" className="status-mask svg-avatar-wrapping" aria-hidden="true">
//                                                                                 <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
//                                                                                     <div className="svg-avatar-stack">
//                                                                                         {
//                                                                                             friend.photo === undefined ? (
//                                                                                                 // <img className={`create-dm-avatar-svg-masked color-${friend.color_tag}`} src={rendered_User_PFP} alt=" " aria-hidden="true" />
//                                                                                                 <img className={`create-dm-avatar-svg-masked icon-colors-${friend.color_tag}`} alt=" " aria-hidden="true" />
//                                                                                                 // <img className={`create-dm-avatar-svg-masked color-${friend.color_tag}`} src={returnDefaultUserPFP(friend.color_tag)} alt=" " aria-hidden="true" />

//                                                                                             ) : (
//                                                                                                 <img className="create-dm-avatar-svg-masked" src={friend.photo} alt=" " aria-hidden="true" />
//                                                                                             )
//                                                                                         }
//                                                                                     </div>
//                                                                                 </foreignObject>
//                                                                                 <rect width="10" height="10" x="22" y="22" fill={`${friend.online ? `rgb(35, 165, 90)` : `rgb(128, 132, 142)`}`} mask={`url(#svg-mask-status-${friend.online ? `online` : `offline`})`} className="svg-masked-pointer-events">
//                                                                                 </rect>
//                                                                             </svg>
//                                                                         </div>

//                                                                         <div className="create-dm-user-info">
//                                                                             <strong className="create-dm-user-username-wrapper">
//                                                                                 {friend.username}
//                                                                             </strong>
//                                                                             <div className="create-dm-user-strife-tag">
//                                                                                 <span className="create-dm-user-user-name">
//                                                                                     {friend.username}
//                                                                                 </span>
//                                                                                 <span>#{friend.strife_id_tag}</span>
//                                                                             </div>
//                                                                         </div>
//                                                                         <span className="create-dm-check-box-wrapper">
//                                                                             <div className={`create-dm-check-box ${isSelected(friend) ? "checked" : ""}`}>
//                                                                                 <svg aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24">
//                                                                                     <path fill="transparent" fillRule="evenodd" clipRule="evenodd" d="M8.99991 16.17L4.82991  12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z">
//                                                                                     </path>
//                                                                                 </svg>
//                                                                             </div>
//                                                                         </span>
//                                                                     </div>
//                                                                 </div>
//                                                             )
//                                                         })
//                                                     }
//                                                 </div>
//                                             </div>
//                                         )

//                                 }
//                                 <div className="create-dm-footer"></div>
//                                 <div className="create-dm-button-sec">
//                                     <button className="create-dm-button" type="submit" disabled={count > 9 || count === 0}>
//                                         {createDmButtonMessage}
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

// }

// export default CreateDmModal;