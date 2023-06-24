// import React from "react";
// import { useState, useRef, useEffect } from "react";
// import { closeHookModalOnOutsideClick, closeOnEsc } from "../../../utils/close_hook_modals_api_utils";
// import user_Default_PFP from '../../../../app/assets/images/discord_PFP.svg';
// const InviteToDMCallModal = ({
//     top,
//     dmServers,
//     dmServer,
//     dmServerId,
//     setShowPopUp,
//     currentUser,
//     currentUserId,
//     friends,
//     dmServerMembers,
//     dmMembers,
//     history,
//     createDmMember,
//     dmServerErrors,
//     errors,
//     removeDmServerErrors,
//     removeFriendshipErrors,
//     requestAllFriendships,
//     closeModal,
//     openModal,
//     openModalWithProps,
//     topBar

// }) => {
//     const inputRef = useRef();
//     const popupRef = useRef();
//     closeHookModalOnOutsideClick(popupRef, setShowPopUp);
//     closeOnEsc(setShowPopUp);
//     const [searchText, setSearchText] = useState("");
//     const [selectedMembers, setSelectedMembers] = useState([]);
//     const isSelected = (member) => selectedMembers.map(member => member.id).includes(member.id);
//     const findIfSelected = (toAdd) => selectedMembers.findIndex(member => member.id === toAdd.id);
//     let rendered_User_PFP = user_Default_PFP;
//     let count = selectedMembers.length;

//     useEffect(() => {
//         return function cleanup () {
//             if (dmServerErrors.length > 0) {
//                 removeDmServerErrors();
//             }
//         }
//     }, []);

//     const toggleSelection = (member) => {
//         const idx = findIfSelected(member);
//         if (idx > -1) {
//             setSelectedMembers(prevState => {
//                 const newState = [...prevState];
//                 newState.splice(idx, 1);
//                 return newState;
//             });
//         }
//         else {
//             setSelectedMembers(prevState => [...prevState, member]);
//             setSearchText("");
//         }
//     }

//     const dmMembersArray = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx]);

//     const addNewDmMembers = () => {
//         const newDMMembers = [currentUserId,...selectedMembers.map((member) => parseInt(member.id))].sort((a, b) => a - b);
//         const dm_SERVER_ID = parseInt(dmServerId)
//         // for (let newMemberId of newDMMembers) {
//         //     createDmMember({dm_member_id: newMemberId ,dm_server_id: dm_SERVER_ID})
//         // }
//         // openModalWithProps({dmMembersForCall:newDMMembers, dmServer:dmServer});
//         // openModal('WEBRTC_DM_CALL');
//         openModalWithProps({dmMembersForCall:newDMMembers, dmServer:dmServer});
//         openModal("STRIFE_WEBRTC_CALL");
//         setShowPopUp(false);
//     }



//     const filterOutDmMembers = dmMembers.filter(member => member.id !== currentUserId);

   
//     return (
//         <div className={`clear-modal-wrapper ${topBar === true ? `homeBar` : ``}`}>

//             <div className="create-dm-modal-popup dm-invite" onClick={e => e.stopPropagation()} ref={popupRef} >
//                 <div className="create-dm-modal-focus-lock">
//                     <div className="create-dm-modal">
//                         <form onSubmit={addNewDmMembers}>
//                             <div className="create-dm-header-sec">
//                                 <h2 className="create-dm-header-h2">Select Member</h2>

//                                 {count <= 1 ?
//                                     <div className="num-of-dm-members-selected">Select 1 Member.</div>
//                                     : <div className={`${count > 1 ? "num-of-dm-members-selected cDMS-error" : "num-of-dm-members-selected"}`}>
//                                         This Call has a 1 member limit.
//                                     </div>
//                                 }
//                                 <div className="create-dm-search-bar-wrapper">
//                                     <div className="create-dm-search-bar-outer-wrapper">
//                                         <div className="create-dm-search-bar-inner-wrapper">
//                                             {
//                                                 selectedMembers.map(member => {
//                                                     return (
//                                                         <div
//                                                             className="mini-box"
//                                                             key={member.id}
//                                                             onClick={() => { toggleSelection(member) }}
//                                                         >
//                                                             {member.username}
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
//                                                 placeholder="Type the username of a member"
//                                             />

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="create-dm-scroller">
//                                 <ul className="create-dm-ul-list">
//                                     <div className="create-dm-ul-list-div"></div>
//                                     {filterOutDmMembers.map(member => {
//                                         if (member.username.toLowerCase().includes(searchText.toLowerCase())) {
//                                             return (

//                                                 <li className="create-dm-friend-wrapper" key={member.id}
//                                                     onClick={() => {
//                                                         toggleSelection(member);
//                                                         inputRef.current.focus();
//                                                     }}>
//                                                     <div className="create-dm-friend-inner-wrapper">

//                                                         <div className={`${member.photo === undefined ?
//                                                             `user-pfp-svg-render color-${member.color_tag}` :
//                                                             `create-dm-avatar-info`}`}>
//                                                             <img src={`${member.photo === undefined ? rendered_User_PFP : member.photo}`} alt="dsmPFP" />
//                                                         </div>

//                                                         <div className="create-dm-user-info">
//                                                             <strong className="create-dm-user-username-wrapper">
//                                                                 {member.username}
//                                                             </strong>
//                                                             <div className="create-dm-user-strife-tag">
//                                                                 <span className="create-dm-user-user-name">
//                                                                     {member.username}
//                                                                 </span>
//                                                                 <span>#{member.strife_id_tag}</span>
//                                                             </div>
//                                                         </div>
//                                                         <span className="create-dm-check-box-wrapper">
//                                                             <div className={`create-dm-check-box ${isSelected(member) ? "checked" : ""}`}>
//                                                                 <svg aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24">
//                                                                     <path fill="transparent" fillRule="evenodd" clipRule="evenodd" d="M8.99991 16.17L4.82991 
//                                                             12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z">
//                                                                     </path>
//                                                                 </svg>
//                                                             </div>
//                                                         </span>
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
//                                 <button className="create-dm-button" type="submit" disabled={count > 1 }>
//                                     <div className="create-dm-button-text">Start Call</div>
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

// export default InviteToDMCallModal;