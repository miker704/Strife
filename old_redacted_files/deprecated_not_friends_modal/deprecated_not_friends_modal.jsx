// import React from "react";
// import { useState, useRef, useEffect } from "react";
// import { fetchUser } from '../../../utils/session_api_util';
// import REACT_PORTAL from "../../../utils/ReactPortal_api_util";


// const NotFriendsInviteToDmModal = (props) => {
//     const popupRef = useRef();
//     const [isLoading, setIsLoading] = useState(true);
//     const validStatuses = [0, 2];

//     useEffect(() => {
//         window.addEventListener('keyup', handleESC, false);
//         setIsLoading(false);
//         return function cleanup () {
//             window.removeEventListener('keyup', handleESC, false);
//             if (props.errors.length > 0) {
//                 props.removeFriendshipErrors();
//             }
//         }
//     }, []);

//     const handleESC = (e) => {
//         const keys = {
//             27: () => {
//                 e.preventDefault();
//                 props.setNotFriendsDMModal(false);
//                 window.removeEventListener('keyup', handleESC, false);
//             },
//         };
//         if (keys[e.keyCode]) {
//             keys[e.keyCode]();
//         }
//     }

//     const handleCreateFriendShip = (e) => {
//         e.preventDefault();
//         fetchUser(props.otherUser.id).then((result) => {

//             if (result.friend_request_status === 0) {
//                 props.createFriendship({ user_id: props.currentUser.id, friend_id: result.id }).then((action) => {
//                     let new_friend_request = action.friendship;
//                     App.StrifeCore.perform('parse_add_friend_request', { new_friend_request });
//                     props.setNotFriendsDMModal(false);

//                 })
//             }
//             else if (result.friend_request_status === 2) {
//                 props.updateFriendship({ user_id: props.currentUser.id, friend_id: result.id }).then(() => {
//                     App.StrifeCore.perform('parse_update_friend_request', { user_id: props.currentUser.id, friend_id: result.id });
//                     props.setNotFriendsDMModal(false);
//                 });
//             }
//             else {
//                 props.setNotFriendsDMModal(false);
//             }

//         })

//     }

//     let renderButton = validStatuses.includes(props.otherUser.friend_request_status) ? (
//         <button type="button" className="add-friends-to-dm-button-not-friends" onClick={(e) => handleCreateFriendShip(e)}>
//             <div className="create-dm-button-text">{`${props.otherUser.friend_request_status === 0 ? `Send Friend Request` : `Accept Friend Request`}`}</div>
//         </button>
//     ) : props.otherUser.friend_request_status === 1 ? (
//         <button type="button" className="add-friends-to-dm-button-not-friends" disabled>
//             <div className="create-dm-button-text">Friend Request Sent</div>
//         </button>
//     ) :
//         (
//             <button type="button" className="add-friends-to-dm-button-not-friends" disabled>
//                 <div className="create-dm-button-text">Send Friend Request</div>
//             </button>
//         )


//     if (isLoading === false) {
//         return (
//             <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
//                 <div className={`clear-modal-wrapper homeBar`} onClick={(e) => props.setNotFriendsDMModal(false)}>
//                     <div className="create-dm-modal-popup dm-invite" onClick={e => e.stopPropagation()} ref={popupRef} >
//                         <div className="create-dm-modal-focus-lock">
//                             <div className="create-dm-modal">
//                                 <div className="create-dm-header-sec">
//                                     <h1 className="create-dm-header-h2">Add Friends to DM</h1>
//                                 </div>
//                                 <div className="create-dm-no-friends-error-state-flex-wrapper">
//                                     <div className="add-to-dm-not-friends-img"></div>
//                                     <div>You need to be friends with{` `}<strong>{props.otherUser.username}</strong>{` `} to start a group DM.</div>
//                                     {renderButton}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </REACT_PORTAL >
//         )
//     }


// }

// export default NotFriendsInviteToDmModal;