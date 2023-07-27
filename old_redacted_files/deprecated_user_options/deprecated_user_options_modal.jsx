// import React from "react";
// import { useState, useRef, useEffect } from "react";
// import { closeHookModalOnOutsideClick, closeOnEsc } from "../../../utils/close_hook_modals_api_utils";


//this modal is deprecated and replaced by the far superior multi-use server user options modal


// const UserOptionsModal = ({
//     top,
//     setShowPopup,
//     currentUser,
//     member,
//     DmServerOwner,
//     user,
//     friends,
//     fetchUser,
//     requestFriendships,
//     createFriendship,
//     blockUser,
//     updateFriendship,
//     deleteFriendship,
//     DmServerId,
//     dmServers,
//     createDmServer,
//     dmServerId,
//     fetchDmServer,
//     kickUserfromGroupChat,
//     errors,
//     removeFriendshipErrors,
//     dmServerErrors,
//     removeDmServerErrors,
//     history,
// }) => {


    
//     if (member.id === currentUser.id) {
//         return null;
//     }
//     const [memberStatus, setMemberStatus] = useState([])

//     useEffect(() => {
//         // requestFriendships();
//         // fetchDmServer(dmServerId)
    
//         // (async () => {
//         //     // const response = await fetch(`api/users/${member.id}`).then((res) => res.json());
//         //     // setMemberStatus(response);

//         // })();

//         fetchUser(member.id).then((action) => {
//            const newfriend = action.user
//             setMemberStatus(newfriend);

//         })

//         return function cleanup () {
//             if (errors.length > 0) {
//                 removeFriendshipErrors();
//             }
//             if (dmServerErrors.length > 0) {
//                 removeDmServerErrors();
//             }
//             // requestFriendships();
//             // fetchDmServer(dmServerId)
//             // requestFriendships();
//         }

//     }, []);


//     const popupRef = useRef();
//     const dmMembersArray = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx]);

//     closeHookModalOnOutsideClick(popupRef, setShowPopup);
//     closeOnEsc(setShowPopup);

//     const handleDm = () => {

//         const memberIds = [currentUser.id, parseInt(member.id)].sort((a, b) => a - b);
//         let new_dm_members = [currentUser, member];
//         for (let dmServer of dmServers) {
//             if (dmMembersArray(Object.values(dmServer.members).sort((a, b) => a - b), memberIds)) {
//                 if (history.location.pathname !== `/$/channels/@me/${dmServer.id}`) {
//                     history.push(`/$/channels/@me/${dmServer.id}`);
//                 }
//                 return;
//             }
//         }
//         // if dmserver does not already exists create one
//         const dmMemberInfo = JSON.parse(JSON.stringify(new_dm_members));
//         let newDmServerName = [];
//         let dmServerName = "";
//         for (let member of dmMemberInfo) {
//             if (member.id !== currentUser.id) {
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
//             owner_id: currentUser.id,
//             // dm_server_name: dmServerName,
//             dm_member_ids: memberIds
//         }
//         let newDmServer;
//         createDmServer(submissionState).then((action) => {
//             newDmServer = action.dmserver;
//             history.push(`/$/channels/@me/${newDmServer.id}`);
//         });
//         return;

//     }


//     const handleCreateFriendShip = () => {
      
//         createFriendship({ user_id: currentUser.id, friend_id: member.id }).then(() => {
//             setShowPopup(false);

//         })

//     }

//     const handleDeleteFriendShip = () => {
   

//         deleteFriendship({ user_id: currentUser.id, friend_id: member.id }).then(() => {
//             setShowPopup(false);

//         });
//         return;
//     }

//     const handleUpdateFriendShip = () => {
   
//         updateFriendship({ user_id: currentUser.id, friend_id: member.id }).then(() => {
//             setShowPopup(false);

//         });

//         return;
//     }

//     const handleBlockUser = () => {

        
//         let subState = {
//             friend_id: member.id,
//             user_id: currentUser.id
//         }
        
//         blockUser({ user_id: currentUser.id, friend_id: member.id }).then(() => {
//             setShowPopup(false);

//         });
//         return;
//     }


//     const handleKickUser = () => {
//         let subState = {
//             dm_member_id: member.id,
//             dm_server_id: DmServerId
//         }
//         kickUserfromGroupChat(member.id,subState).then(()=>{
//             setShowPopup(false);
//         });
//         return;
//     }



//     let EditOptions = "";

//     let kickUserOption = currentUser.id === DmServerOwner ? (<div className="fo-item-container red" onClick={() => handleKickUser()}>
//         <div className="fo-item-name">Kick User</div>
//     </div>) : ("")


//     switch (memberStatus.friend_request_status) {
//         //if group owner allow kicking of user 
//         case -1:
//             //remove block only -> no message
//             EditOptions = (
//                 <div className="fo-flex-wrapper2" >
//                     <div className="fo-scroller" onClick={(e) => e.stopPropagation()} >
//                         <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
//                             <div className="fo-item-name">Unblock User</div>
//                         </div>
//                         {kickUserOption}
//                         <div className="fo-options-bottom-div"></div>
//                     </div>
//                 </div>
//             );
//             break;



//         case 0:
//             // add friend, block friend, message
//             EditOptions = (
//                 <div className="fo-flex-wrapper2" >
//                     <div className="fo-scroller" onClick={(e) => e.stopPropagation()} >
//                         <div className="fo-item-container" onClick={() => handleDm()}>
//                             <div className="fo-item-name">Message</div>
//                         </div>
//                         <div className="fo-item-container green" onClick={() => handleCreateFriendShip()}>
//                             <div className="fo-item-name">Send Friend Request</div>
//                         </div>

//                         <div className="fo-item-container red" onClick={() => handleBlockUser()}>
//                             <div className="fo-item-name">Block User</div>
//                         </div>
//                         {kickUserOption}
//                         <div className="fo-options-bottom-div"></div>
//                     </div>
//                 </div>
//             );
//             break;

//         case 1:
//             //message, cancel request
//             EditOptions = (
//                 <div className="fo-flex-wrapper2" >
//                     <div className="fo-scroller" onClick={(e) => e.stopPropagation()} >
//                         <div className="fo-item-container" onClick={() => handleDm()}>
//                             <div className="fo-item-name">Message</div>
//                         </div>
//                         <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
//                             <div className="fo-item-name">Cancel Friend Request</div>
//                         </div>
//                         {kickUserOption}
//                         <div className="fo-options-bottom-div"></div>
//                     </div>
//                 </div>
//             );
//             break;

//         case 2:
//             // messgae, approve, deny request
//             EditOptions = (
//                 <div className="fo-flex-wrapper2" >
//                     <div className="fo-scroller" onClick={(e) => e.stopPropagation()} >
//                         <div className="fo-item-container" onClick={() => handleDm()}>
//                             <div className="fo-item-name">Message</div>
//                         </div>
//                         <div className="fo-item-container green" onClick={() => handleUpdateFriendShip()}>
//                             <div className="fo-item-name">Accept Friend Request</div>
//                         </div>
//                         <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
//                             <div className="fo-item-name">Ignore Friend Request</div>
//                         </div>
//                         {kickUserOption}
//                         <div className="fo-options-bottom-div"></div>
//                     </div>
//                 </div>
//             );
//             break;
//         case 3:
//             //messgae, delete friend
//             EditOptions = (
//                 <div className="fo-flex-wrapper2" >
//                     <div className="fo-scroller" onClick={(e) => e.stopPropagation()} >
//                         <div className="fo-item-container" onClick={() => handleDm()}>
//                             <div className="fo-item-name">Message</div>
//                         </div>
//                         <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
//                             <div className="fo-item-name">Remove Friend</div>
//                         </div>
//                         {kickUserOption}
//                         <div className="fo-options-bottom-div"></div>
//                     </div>
//                 </div>
//             );
//             break;

//         default:
//             EditOptions = (
//                 <div className="fo-flex-wrapper" >
//                     <div className="fo-scroller" onClick={(e) => e.stopPropagation()} >
//                         <div className="fo-item-container">
//                             <div className="fo-item-name">Message</div>
//                         </div>
//                         <div className="fo-item-container">
//                             <div className="fo-item-name">Start Voice Call</div>
//                         </div>
//                         <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
//                             <div className="fo-item-name">Remove Friend</div>
//                         </div>
//                         {kickUserOption}
//                         <div className="fo-options-bottom-div"></div>
//                     </div>
//                 </div>
//             )

//     }

//     return (
//         <div className="fo-layer2" >
//             <div className="fo-theme2" style={{ top: `${top}px` }} ref={popupRef}>

//                 {EditOptions}

//             </div>
//         </div>
//     )
// }


// export default UserOptionsModal;






