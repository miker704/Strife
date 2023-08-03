// // this modal manager version is the class based version before removing every modal that uses react portal hook
// import React from "react";
// import CreateServerFormContainer from "../server/create_server_forms/create_server_form_container.js";
// import UserSettingsContainer from "../users/user_settings/user_settings_container.js";
// // import UserSearchContainer from "../users/user_search_modal/user_search_container.js";
// import CreateDmModalContainer from "../dm_servers/create_new_dm/create_dm_container.js";
// import CreateDmModalHomeBarContainer from "../dm_servers/create_new_dm_homebar_version/create_dm_homebar_container.js";
// import InviteToDmModalContainer from "../dm_servers/invite_to_dm_server/invite_to_dm_server_container.js";
// import NoFriendsDMHomeBarModalContainer from "../dm_servers/no_friends_dm_modal_homebar/no_friends_dm_home_bar_modal_container.js";
// import NotFriendsInviteToDmModalContainer from "../dm_servers/not_friends_dm_modal/not_friends_dm_modal_container.js";
// import NoFriendsDMModalContainer from "../dm_servers/no_friends_dm_modal/no_friends_dm_modal_container.js";
// import FriendRequestErrorModalContainer from "../friends/friend_request_error_modal/friend_request_error_modal_container.js";
// import DownloadAppsContainer from "../server/download_apps/download_apps_container.js";
// // import EditFriendshipModalContainer from "../friends/edit_friendship_modal/edit_friendship_container.js";
// // import ChannelDropDownContainer from "../channels/channel_drop_down/channel_drop_down_container.js";
// import ServerSettingsModalContainer from "../server/server_settings/server_settings_modal_container.js";
// import LeaveServerModalContainer from "../server/leave_server_modal/leave_server_modal_container.js";
// // import DeleteServerModalContainer from "../server/delete_server_modal/delete_server_modal_container.js";
// import InviteToServerModalContainer from "../server/invite_to_server_modal/invite_to_server_modal_container.js";
// import ChannelSettingsModalContainer from "../channels/channel_settings/channel_settings_modal_container.js";
// // import CreateChannelModalContainer from "../channels/create_channel_modal/create_channel_modal_container.js";
// // import ActionButtonPopUpContainer from "../server/server_search/action_button_pop_up_container.js";
// import DeleteDmMessageModalContainer from "../dm_servers/delete_dm_message_modal/delete_dm_message_modal_container.js";
// import DeleteServerChannelMessageModalContainer from "../server/delete_server_message_modal/delete_server_message_modal_container.js";
// import InviteToDMCallModalContainer from "../dm_servers/select_dm_members_call/select_dm_members_container.js";
// // import StartConversationSearchBarModalContainer from "../friends/user_asset_search_modal/user_asset_search_modal_container.js";
// import WEBRTCDMCallModalContainer from "../dm_servers/dm_call/dm_call_container.js";
// import STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS_CONTAINER from "../calls/video_and_voice_call_container.js";




// class ModalManager extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             setSpecialFeatures: 0,
//         }
//         this.setModalSpecialFeatures = this.setModalSpecialFeatures.bind(this);

//     }
//     //this function is to set special modal background/ positioning for different modals that need it 
//     setModalSpecialFeatures (modifier) {
//         this.setState({ setSpecialFeatures: modifier });
//     }



//     render () {
//         console.log("modal props : ");
//         console.log(this.props);
//         let renderedModal;
//         let modalMod = 0;
//         // using a switch statement to reduce slow down of processing multiple if statemnets with similar
//         // or little complex condtions also to dry up the code
//         switch (this.props.modal) {
//             case 'createServerForm':

//                 renderedModal = (
//                     <div onClick={e => e.stopPropagation()}>
//                         <CreateServerFormContainer />
//                     </div>
//                 )
//                 modalMod = 1;
//                 break;

//             case 'userSettings':
//                 document.getElementById('app-puller').animate(
//                     {
//                         transform: ['scale(0.93) translateZ(0px)', 'scale(0.94) translateZ(0px)', 'scale(0.95) translateZ(0px)', 'scale(0.97) translateZ(0px)', 'scale(0.99) translateZ(0px)'],
//                         offset: [0.0, 0.25, 0.5, 0.75, 1.0],
//                     },
//                     {
//                         duration: 300,
//                         iterations: 1,
//                     }
//                 );
//                 renderedModal = <UserSettingsContainer />
//                 break;

//             case 'frf-error':
//                 renderedModal = (
//                     <div onClick={(e) => e.stopPropagation()}>
//                         <FriendRequestErrorModalContainer />
//                     </div>
//                 );
//                 modalMod = 2;
//                 break;

//             case 'downloadApps':
//                 renderedModal = (
//                     <div onClick={(e) => e.stopPropagation()}>
//                         <DownloadAppsContainer />
//                     </div>
//                 )
//                 break;

//             // case 'userSearch':

//             //     renderedModal = <UserSearchContainer />

//             //     break;

//             // case 'StartConversationSearch':
//             //     renderedModal = <StartConversationSearchBarModalContainer />
//             //     modalMod = 1;
//             //     break;

//             // case 'friendOptions':

//             //     renderedModal = (
//             //         <div onClick={(e) => e.stopPropagation()}>
//             //             <EditFriendshipModalContainer />
//             //         </div>
//             //     );
//             //     modalMod = 2;
//             //     break;



//             case 'noFriendsDMModal':

//                 renderedModal = (
//                     <div onClick={(e) => e.stopPropagation()}>
//                         <NoFriendsDMModalContainer homeBar={this.props.modalProps.homeBar} dmInvite={this.props.modalProps.dmInvite} />
//                     </div>
//                 );
//                 modalMod = 1;
//                 break;

//             case 'noFriendsDMHomeBarModal':

//                 renderedModal = (
//                     <div onClick={(e) => e.stopPropagation()}>
//                         <NoFriendsDMHomeBarModalContainer />
//                     </div>
//                 );
//                 modalMod = 1;
//                 break;

//             case 'createDmModal':

//                 renderedModal = (
//                     <div onClick={(e) => e.stopPropagation()}>
//                         <CreateDmModalContainer />
//                     </div>
//                 );
//                 modalMod = 1;

//                 break;

//             case 'createDmModalHomeBar':

//                 renderedModal = (
//                     <div onClick={(e) => e.stopPropagation()}>
//                         <CreateDmModalHomeBarContainer />
//                     </div>
//                 );
//                 modalMod = 1;

//                 break;

//             case 'inviteToDmModal':

//                 renderedModal = (
//                     <div onClick={(e) => e.stopPropagation()}>
//                         <InviteToDmModalContainer
//                             top={this.props.modalProps.top}
//                             setShowPopUp={this.props.modalProps.setShowPopUp}
//                             topBar={true}
//                             dmServerMembers={this.props.modalProps.dmServerMembers}
//                             dmServer={this.props.modalProps.dmServer}
//                             dmServerId={this.props.modalProps.dmServerId}
//                         />
//                     </div>
//                 );
//                 modalMod = 1;

//                 break;

//             case 'notFriendsInviteToDmModal':

//                 renderedModal = (
//                     <div onClick={(e) => e.stopPropagation()}>
//                         <NotFriendsInviteToDmModalContainer
//                             top={this.props.modalProps.top}
//                             topBar={true}
//                             otherUser={this.props.modalProps.otherUser}
//                         />
//                     </div>
//                 );
//                 modalMod = 1;

//                 break;

//             case 'ServerSettings':

//                 //props and state doNOT get passed in modal manager however location still gets passed
//                 // and can be accessed so we can manipulate this to get the props and state we need back to 
//                 // use server settings
//                 //Calling app puller animation
//                 document.getElementById('app-puller').animate(
//                     {
//                         transform: ['scale(0.93) translateZ(0px)', 'scale(0.94) translateZ(0px)', 'scale(0.95) translateZ(0px)', 'scale(0.97) translateZ(0px)', 'scale(0.99) translateZ(0px)'],
//                         offset: [0.0, 0.25, 0.5, 0.75, 1.0],
//                     },
//                     {
//                         duration: 300,
//                         iterations: 1,
//                     }
//                 );
//                 renderedModal = <ServerSettingsModalContainer />

//                 modalMod = 0;

//                 break;

//             // case 'ChannelDropDown':

//             //     renderedModal = <ChannelDropDownContainer />
//             //     modalMod = 1;

//             //     break;

//             // case 'CreateChannel':

//             //     renderedModal = (
//             //         <div onClick={(e) => e.stopPropagation()}>
//             //             <CreateChannelModalContainer />
//             //         </div>

//             //     )
//             //     modalMod = 2;
//             //     break;


//             // case 'DeleteServer':

//             //     renderedModal = <DeleteServerModalContainer />
//             //     modalMod = 0;

//             //     break;
//             case 'LeaveServer':

//                 renderedModal = (
//                     <div onClick={(e) => e.stopPropagation()}>
//                         <LeaveServerModalContainer />
//                     </div>
//                 )
//                 modalMod = 0;

//                 break;

//             case 'ChannelSettings':
//                 //Calling app puller animation
//                 document.getElementById('app-puller').animate(
//                     {
//                         transform: ['scale(0.93) translateZ(0px)', 'scale(0.94) translateZ(0px)', 'scale(0.95) translateZ(0px)', 'scale(0.97) translateZ(0px)', 'scale(0.99) translateZ(0px)'],
//                         offset: [0.0, 0.25, 0.5, 0.75, 1.0],
//                     },
//                     {
//                         duration: 300,
//                         iterations: 1,
//                     }
//                 );

//                 renderedModal = <ChannelSettingsModalContainer mod_Channel_ID={this.props.modalProps.ChannelId} params={this.props.modalProps.params} />
//                 modalMod = 0;
//                 break;

//             // case 'ActionButton':

//             //     renderedModal = <ActionButtonPopUpContainer serverLink={this.props.modalProps.serverInvite} />
//             //     modalMod = 1;

//             //     break;

//             case 'DeleteDmMessage':
//                 renderedModal = (
//                     <div onClick={(e) => e.stopPropagation()}>
//                         <DeleteDmMessageModalContainer />
//                     </div>
//                 )
//                 modalMod = 0;
//                 break;

//             case 'DeleteServerChannelMessage':
//                 renderedModal = (
//                     <div onClick={(e) => e.stopPropagation()}>
//                         <DeleteServerChannelMessageModalContainer />
//                     </div>
//                 )
//                 modalMod = 0;
//                 break;

//             case 'InviteToServer':
//                 renderedModal = (
//                     <div onClick={e => e.stopPropagation()}>
//                         <InviteToServerModalContainer
//                             mod_Channel_ID={this.props.modalProps.ChannelId}
//                             params={this.props.modalProps.params}
//                         />
//                     </div>
//                 )
//                 modalMod = 0;

//                 break;

//             case 'InviteDMMembersToCall':

//                 renderedModal = (
//                     <div onClick={e => e.stopPropagation()}>
//                         <InviteToDMCallModalContainer
//                             topBar={true}
//                             dmServerMembers={this.props.modalProps.dmServerMembers}
//                             dmServer={this.props.modalProps.dmServer}
//                             dmServerId={this.props.modalProps.dmServerId}
//                             compParams={this.props.modalProps.compParams}
//                             callType={this.props.modalProps.callType}
//                         />
//                     </div>
//                 )
//                 modalMod = 1;
//                 break;

//             case 'WEBRTC_DM_CALL':
//                 renderedModal = <WEBRTCDMCallModalContainer />
//                 modalMod = 0;
//                 break;
//             case "STRIFE_WEBRTC_CALL":
//                 renderedModal = <STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS_CONTAINER />
//                 modalMod = 0;
//                 break;
//             default:
//                 return null;
//         }


//         if (!this.props.modal) {
//             return null;
//         }

//         return (
//             <div className={`modal-struct-${modalMod}`} onClick={this.props.closeModal}>
//                 {renderedModal}
//             </div>
//         );
//     }


// }

// export default ModalManager;

