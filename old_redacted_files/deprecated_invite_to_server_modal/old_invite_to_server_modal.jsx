/// This modal is deprecated an replaced by the newer invite to server modal



// import React from "react";
// import { useState, useRef, useEffect } from "react";
// import user_Default_PFP from '../../../../app/assets/images/discord_PFP.svg';

// const InviteToServerModal = (props) => {

//     const inputRef = useRef();
//     const popupRef = useRef();
//     const [searchText, setSearchText] = useState("");
//     const [selectedFriends, setSelectedFriends] = useState([]);
//     const isSelected = (friend) => selectedFriends.map(friend => friend.id).includes(friend.id);
//     const findIfSelected = (toAdd) => selectedFriends.findIndex(friend => friend.id === toAdd.id);
//     const findIfMemberAlready = (member) => Object.values(props.server.users).findIndex(friend => friend.id === member.id);
//     let rendered_User_PFP = user_Default_PFP;
//     let count = selectedFriends.length;
//     useEffect(() => {
//         window.addEventListener('keyup', props.handleESC, false);
//         props.requestAllFriendships();
//         return function cleanup () {
//             props.removeFriendshipErrors();
//             props.removeServerErrors();
//             window.removeEventListener('keyup', props.handleESC, false);
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


//     const addNewServerMembers = () => {
//         const newServerMembers = [...selectedFriends.map((friend) => parseInt(friend.id))].sort((a, b) => a - b);
//         const sERVER_ID = parseInt(props.serverId)
//         for (let newMemberId of newServerMembers) {

//             props.createServerMembership({ user_id: newMemberId, server_id: sERVER_ID }).then(() => {
//                 App.StrifeCore.perform('parse_Invites_To_Existing_Server', { user_id: newMemberId, server_id: sERVER_ID });
//             });

//         }
//         props.closeModal();
//     }


//     const filterOutFriends = props.friends.filter((friend, idx) => {
//         const index = findIfMemberAlready(friend)
//         if (index === -1) {
//             return friend;
//         }
//     })


//     const serverName = (
//         <h2 className="create-dm-header-h2">Invite friends to {`${props.server.server_name}`}</h2>
//     );


//     console.log(`current server is ${props.server}`);
//     console.table(props.server);
//     return (
//         <div className={`clear-modal-wrapper-server`}>

//             <div className="create-dm-modal-popup server" onClick={e => e.stopPropagation()} ref={popupRef} >
//                 <div className="create-dm-modal-focus-lock">
//                     <div className="create-dm-modal">
//                         <form onSubmit={addNewServerMembers}>
//                             <div className="create-dm-header-sec">
//                                 {/* <h2 className="create-dm-header-h2">Select Friends</h2> */}
//                                 {serverName}
//                                 <div className="create-dm-search-bar-wrapper">
//                                     <div className="create-dm-search-bar-outer-wrapper">
//                                         <div className="create-dm-search-bar-inner-wrapper">
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
//                                                             12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
//                                                                 </path>
//                                                             </svg>
//                                                         </div>
//                                                     )
//                                                 })
//                                             }

//                                             <input
//                                                 className="create-dm-search-bar"
//                                                 autoFocus ref={inputRef}
//                                                 spellCheck={false}
//                                                 type="text"
//                                                 value={searchText}
//                                                 onChange={(e) => setSearchText(e.currentTarget.value)}
//                                                 placeholder="Type the username of a friend"
//                                             />

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="create-dm-scroller">
//                                 <ul className="create-dm-ul-list">
//                                     <div className="create-dm-ul-list-div"></div>
//                                     {filterOutFriends.map(friend => {
//                                         if (friend.username.toLowerCase().includes(searchText.toLowerCase())) {
//                                             return (

//                                                 <li className="create-dm-friend-wrapper" key={friend.id}
//                                                     onClick={() => {
//                                                         toggleSelection(friend);
//                                                         inputRef.current.focus();
//                                                     }}>
//                                                     <div className="create-dm-friend-inner-wrapper">

//                                                         <div className={`${friend.photo === undefined ?
//                                                             `user-pfp-svg-render color-${friend.color_tag}` :
//                                                             `create-dm-avatar-info`}`}>
//                                                             <img src={`${friend.photo === undefined ? rendered_User_PFP : friend.photo}`} alt="dsmPFP" />
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
//                                                             <button type="button" className="faint-boost-shiny-button" >
//                                                                 <div className="shiny-button-contents">
//                                                                     Invite
//                                                                     <div className="shiny-button-container">
//                                                                         <div className="shiny-button-flex">
//                                                                             <div className="shiny-button-inner"></div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className={`create-dm-check-box ${isSelected(friend) ? "checked" : ""}`}>
//                                                                     <svg aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24">
//                                                                         <path fill="transparent" fillRule="evenodd" clipRule="evenodd" d="M8.99991 16.17L4.82991 
//                                                             12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z">
//                                                                         </path>
//                                                                     </svg>
//                                                                 </div>
//                                                             </button>
//                                                         </span>

//                                                         {/* <span className="create-dm-check-box-wrapper">
//                                                             <div className={`create-dm-check-box ${isSelected(friend) ? "checked" : ""}`}>
//                                                                 <svg aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24">
//                                                                     <path fill="transparent" fillRule="evenodd" clipRule="evenodd" d="M8.99991 16.17L4.82991 
//                                                             12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z">
//                                                                     </path>
//                                                                 </svg>
//                                                             </div>
//                                                         </span> */}
//                                                     </div>
//                                                 </li>
//                                             )
//                                         }
//                                         else {
//                                             return null;
//                                         }
//                                     })
//                                     }
//                                 </ul>
//                             </div>
//                             <div className="create-dm-footer"></div>
//                             <div className="create-dm-button-sec">
//                                 <button className="create-dm-button" type="submit" disabled={props.friends.length === 0 || count === 0}>
//                                     <div className="create-dm-button-text">{`Invite To Server`}</div>
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



// export default InviteToServerModal;