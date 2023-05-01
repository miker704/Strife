// deprecated delete channel modal usign new styles.

// import React from "react";
// import { useEffect, useState, useRef } from "react";
// import { closeOnEsc, closeHookModalOnOutsideClick } from "../../../utils/close_hook_modals_api_utils";

// const DeleteChannelModal = (props) => {
//     const popupRef = useRef();
//     // closeHookModalOnOutsideClick(popupRef, props.setChannelDeletion);
//     // closeOnEsc(props.setChannelDeletion);

//     // const [] = useState();

//     //pass in props for server general  channel and lock deletion for deltion of it 

//     useEffect(() => {

//         window.addEventListener('keyup', handleESC, false);
//         return function cleanUp () {
//             props.removeServerErrors();
//             props.removeChannelErrors();
//             window.removeEventListener('keyup', handleESC, false);
//         }

//     }, [])


//     const handleESC = (e) => {

//         const keys = {
//             27: () => {
//                 e.preventDefault();

//                 props.setChannelDeletion(false);
//                 window.removeEventListener('keyup', handleESC, false);

//             },
//         };
//         if (keys[e.keyCode]) {
//             keys[e.keyCode]();
//         }
//     }



//     const checkIfGeneralChannel = () => {
//         if (props.currentChannel.id === props.server.general_channel_id) {
//             return true
//         }
//         else if (props.currentChannel.id !== props.server.general_channel_id) {
//             return false;
//         }
//     }
//     const handleDeleteChannel = () => {
//         // this is a bit more complex and involved we will close this modal, main mod then transefer a redirect to general channel id
//         //then delete channel
//         props.setChannelDeletion(false);
//         props.closeModal();
//         props.history.push(`/$/channels/${props.server.id}/${props.server.general_channel_id}`);
//         props.deleteChannel(props.currentChannel.id).then(()=> {
//             props.fetchServer(parseInt(props.serverId));
//         })

//     }

//     return (
//         <div className="leave-server-wrapper"  >
//             <div className="leave-server-backdrop channel" onClick={() => props.setChannelDeletion(false)}></div>
//             <div className="leave-server-layer">
//                 <div id="leave-server-focus-lock" className="leave-server-focus-lock" onClick={e => e.stopPropagation()} ref={popupRef}>
//                     <div className="leave-server-root">
//                         <div className="leave-server-flex" >
//                             <h2 className="remove-phone-header">
//                                 Delete Channel
//                             </h2>
//                         </div>
//                         <div className="leave-server-content-scroll-base" >
//                             <div className={`leave-server-text ${props.currentChannel.id ===
//                                 props.server.general_channel_id ?
//                                 `is-hidden` : ``
//                                 }`}>
//                                 Are you sure you want to delete {` `}
//                                 <strong>#{`${props.currentChannel.channel_name}`}</strong>
//                                 ? This cannot be undone.
//                             </div>
//                             <div className={`leave-server-text ${props.currentChannel.id ===
//                                 props.server.general_channel_id ?
//                                 `red` : `is-hidden`
//                                 }`}>
//                                 This is {` `} <strong>{`${props.server.server_name}`}'s{` `}</strong>
//                                 general channel {` `}
//                                 <strong>#{`${props.currentChannel.channel_name}`}{` `}</strong>
//                                 which cannot be deleted. Subscribe to $TR!F3 N!TR0 to delete any channel from your servers.
//                             </div>
//                             <div className="username-edit-sep"></div>
//                         </div>
//                         <form onSubmit={handleDeleteChannel} className="leave-server-button-flex-wrapper">
//                             <button type="submit" className="delete-server-submit-button"
//                                 disabled={checkIfGeneralChannel()}>
//                                 Delete Channel
//                             </button>
//                             <button type="button" onClick={() => props.setChannelDeletion(false)} className="username-edit-cancel-button">Cancel</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )


// }

// export default DeleteChannelModal;









