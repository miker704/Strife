// import React from "react";
// import { useRef, useEffect } from "react";
// import { closeHookModalOnOutsideClick, closeOnEsc } from "../../../utils/close_hook_modals_api_utils";
// const EditFriendshipModal = ({
//     currentUser,
//     friends,
//     errors,
//     requestFriendships,
//     removeFriendshipErrors,
//     deleteFriendship,
//     friend,
//     setShowPopup,
//     blockUser,
//     updateFriendship,
//     history,
//     user,
//     top,
//     left
// }) => {


//     if (friend.id === currentUser.id) {
//         return null;
//     }

//     const popupRef = useRef();
//     closeHookModalOnOutsideClick(popupRef, setShowPopup);
//     closeOnEsc(setShowPopup);

//     const handleDeleteFriendShip = () => {

//         deleteFriendship({ user_id: currentUser.id, friend_id: friend.id }).then(() => {
//             App.StrifeCore.perform('parse_delete_friend_request', { user_id: currentUser.id, friend_id: friend.id });
//             setShowPopup(false);
//         });
//         return;
//     }

//     const handleupdateFriendShip = () => {

//         updateFriendship({ user_id: currentUser.id, friend_id: friend.id }).then(() => {
//             setShowPopup(false);

//         });
//         return;
//     }

//     const handleBlockUser = () => {

//         blockUser({ user_id: currentUser.id, friend_id: friend.id }).then(() => {
//             setShowPopup(false);

//         });
//         return;
//     }


//     useEffect(() => {

//         return function cleanup () {
//             if (errors.length > 0) {
//                 removeFriendshipErrors();
//             }
//         }

//     }, []);

//     let lastOption = friend.friend_request_status === 3 ? (

//         <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
//             <div className="fo-item-name">Block User</div>
//         </div>
//     ) :
//         ("");


//     // return (
//     //     <div className="fo-layer" >
//     //         <div className="fo-theme" style={{ top: `${top}px`, left: `${left}px` }} ref={popupRef}>

//     //             <div className="fo-flex-wrapper" >
//     //                 <div className="fo-scroller" onClick={(e) => e.stopPropagation()} >
//     //                     <div className="fo-item-container">
//     //                         <div className="fo-item-name">Start Video Call</div>
//     //                     </div>
//     //                     <div className="fo-item-container">
//     //                         <div className="fo-item-name">Start Voice Call</div>
//     //                     </div>
//     //                     <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
//     //                         <div className="fo-item-name">Remove Friend</div>
//     //                     </div>

//     //                     <div className="fo-options-bottom-div"></div>
//     //                 </div>
//     //             </div>
//     //         </div>
//     //     </div>
//     // )

//     return (
//         <div className="mfom-layer" >
//             <div className="fo-theme" style={{ top: `${top}px`, left: `${left}px` }} ref={popupRef}>

//                 <div className="mfom-menu" >
//                     <div className="mfom-scroller" onClick={(e) => e.stopPropagation()} >
//                         <div className="mfom-item">
//                             <div className="mfom-item-label">Start Video Call</div>
//                         </div>
//                         <div className="mfom-item">
//                             <div className="mfom-item-label">Start Voice Call</div>
//                         </div>
//                         <div className="mfom-item red" onClick={() => handleDeleteFriendShip()}>
//                             <div className="mfom-item-label">Remove Friend</div>
//                         </div>

//                         <div className="mfom-bottom-div"></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default EditFriendshipModal;



