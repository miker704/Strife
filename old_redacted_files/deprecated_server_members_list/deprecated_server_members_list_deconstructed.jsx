// import React from "react";
// import ReactTooltip from "react-tooltip";
// import { useEffect, useState, useRef } from "react";
// import DefaultPFPSVG from '../../../../app/assets/images/defaultPFPSVG.svg';
// import ServerUserOptionsModalContainer from "../../friends/server_user_options/server_user_options_modal_container";
// import DeleteFriendConfirmationModalContainer from "../../friends/delete_friend_confirmation_modal/delete_friend_confirmation_modal_container";
// import BlockUserConfirmationModalContainer from "../../friends/block_user_confirmation_modal/block_user_confirmation_modal_container";

// // import _ from 'lodash'

// const ServerMembersList = ({
//     currentUser,
//     serverId,
//     errors,
//     server,
//     serverMembers,
//     fetchServer,
//     removeServerErrors,
//     deleteServerMembership,
//     users

// }) => {


//     // useEffect(()=>{
//     //     if(_.isEqual(users,server.users) === false){
//     //         console.log("not equeal")
//     //         fetchServer(serverId)
//     //     }
//     // },[server.users,users])



//     const [showPopup, setShowPopup] = useState(false);
//     const [popupTop, setPopupTop] = useState(0);
//     const [selectedMember, toggleSelected] = useState([]);
//     const [showDeletePopup, setShowDeletePopup] = useState(false);
//     const [showBlockUserPopup, setShowBlockUserPopup] = useState(false);


//     const popUpRef = useRef();
//     let render_Default_User_PFP = DefaultPFPSVG;

//     const handleSelected = (member) => {
//         toggleSelected(member);
//     }

//     const handlePopupShow = (e) => {

//         let currTop = e.currentTarget.getBoundingClientRect().top
//         const realWidth = window.screen.width * window.devicePixelRatio;
//         const realHeight = window.screen.height * window.devicePixelRatio;

//         if (currTop > window.innerHeight * 0.93158) {
//             if (realWidth >= 3800 && realHeight >= 2100) {
//                 if (currTop >= window.innerHeight * 0.949628) {
//                     currTop = 1150;
//                 }
//                 setPopupTop(currTop);
//             }
//             else {
//                 currTop /= 3;
//                 setPopupTop(currTop);
//             }
//         }
//         else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93013) {

//             if (realWidth >= 3800 && realHeight >= 2100) {
//                 setPopupTop(currTop);
//             }
//             else {
//                 currTop /= 2;
//                 setPopupTop(currTop);
//             }
//         }

//         else if (currTop <= window.innerHeight * 0.145560) {
//             setPopupTop(currTop * 0.095);
//         }
//         else {
//             setPopupTop(currTop);
//         }

//         setShowPopup(!showPopup);
//     }


//     const sortOfflineMembers = (serverMembers) => {
//         let offlineMembers = new Array();
//         return offlineMembers = serverMembers.filter((serverMember, serverMemberIdx) => {
//             return serverMember.online === false;
//         })
//     }

//     const sortOnlineMembers = (serverMembers) => {
//         let onlineMembers = new Array();
//         return onlineMembers = serverMembers.filter((serverMember, serverMemberIdx) => {
//             return serverMember.online === true;
//         })
//     }

//     const serverMembersArray = Object.values(server.users);
//     const ServerOwner = server.server_owner_id;
//     const offlineServerMembers = sortOfflineMembers(serverMembersArray);
//     const onlineServerMembers = sortOnlineMembers(serverMembersArray);


//     const renderServerUserOptionsModal = () => {
//         if (showPopup === true) {
//             return (
//                 <ServerUserOptionsModalContainer
//                     serverType={'SERVER'} member={selectedMember} memberId={selectedMember.id}
//                     ServerOwner={ServerOwner} server={server} serverMemberShipDate={selectedMember.serverMembershipDateJoined}
//                     top={popupTop} setShowPopup={setShowPopup} ServerID={server.id}
//                     setShowDeletePopup={setShowDeletePopup} setShowBlockUserPopup={setShowBlockUserPopup}
//                 />
//             )
//         }
//     }

//     const renderDeleteFriendConfirmationModal = () => {
//         if (showDeletePopup === true) {
//             return (
//                 <DeleteFriendConfirmationModalContainer friend={selectedMember} setShowDeletePopup={setShowDeletePopup} />
//             )
//         }

//     }

//     const renderBlockUserConfirmationModal = () => {
//         if (showBlockUserPopup === true) {
//             return (
//                 <BlockUserConfirmationModalContainer friend={selectedMember} setShowBlockUserPopup={setShowBlockUserPopup} />
//             )
//         }
//     }



//     return (


//         <div className="server-members-index-pre-container-wrapper">
//             <aside className="server-members-index-container-wrapper">

//                 {renderServerUserOptionsModal()}
//                 {renderDeleteFriendConfirmationModal()}
//                 {renderBlockUserConfirmationModal()}

//                 <div className="server-members-index-container global-scroll-thin-raw-attributes global-scroller-base global-scroll-faded-raw-attributes"
//                     style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                     <h3 className="server-members-header-title">{`ONLINE — ${onlineServerMembers.length}`}</h3>

//                     {
//                         onlineServerMembers.map((serverMember, serverMemberIdx) => {

//                             return (

//                                 <div className="server-member-item" key={serverMember.id}
//                                     onClick={(e) => {
//                                         handleSelected(serverMember);
//                                         handlePopupShow(e);
//                                     }}>

//                                     <div className={`server-member-layout ${selectedMember.id === serverMember.id && showPopup === true ? `selected` : ``}`}>
//                                         <div className="server-member-avatar">
//                                             <div className="server-member-avatar-inner-wrapper">
//                                                 <svg width="40" height="40" viewBox="0 0 40 40" className="sml-mask sml-svg" aria-hidden="true">
//                                                     <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
//                                                         <div className="sml-avatar-stack">
//                                                             {
//                                                                 serverMember.photo === undefined ? (
//                                                                     <img className={`sml-avatar color-${serverMember.color_tag}`} src={render_Default_User_PFP} alt=" " aria-hidden="true" />
//                                                                 ) : (
//                                                                     <img className="sml-avatar" src={serverMember.photo} alt=" " aria-hidden="true" />
//                                                                 )
//                                                             }
//                                                         </div>
//                                                     </foreignObject>
//                                                     <rect data-tip data-for="member-online" width="10" height="10" x="22" y="22"
//                                                         fill={`rgb(35, 165, 90)`}
//                                                         mask={`url(#svg-mask-status-online)`}
//                                                         className="sml-svg-masked-pointer-events">
//                                                     </rect>
//                                                 </svg>
//                                             </div>
//                                         </div>

//                                         <div className="server-member-info-wrapper">
//                                             <div className="server-member-username-wrapper">
//                                                 <div className="server-member-username-div">
//                                                     <span className="server-member-username-span">
//                                                         <span className="server-member-username">
//                                                             {serverMember.username}
//                                                         </span>
//                                                     </span>
//                                                 </div>



//                                                 {
//                                                     serverMember.id === ServerOwner ? (
//                                                         <>
//                                                             <svg aria-label="Server Owner" data-tip data-for="server-owner-tip"
//                                                                 className={"server-group-owner-icon"}
//                                                                 aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 16 16">
//                                                                 <path fillRule="evenodd" clipRule="evenodd" d="M13.6572 5.42868C13.8879 5.29002 14.1806 5.30402 14.3973 5.46468C14.6133 5.62602
//                                                             14.7119 5.90068 14.6473 6.16202L13.3139 11.4954C13.2393 11.7927 12.9726 12.0007 12.6666 12.0007H3.33325C3.02725 12.0007 2.76058 
//                                                             11.792 2.68592 11.4954L1.35258 6.16202C1.28792 5.90068 1.38658 5.62602 1.60258 5.46468C1.81992 5.30468 2.11192 5.29068 2.34325 
//                                                             5.42868L5.13192 7.10202L7.44592 3.63068C7.46173 3.60697 7.48377 3.5913 7.50588 3.57559C7.5192 3.56612 7.53255 3.55663 7.54458 
//                                                             3.54535L6.90258 2.90268C6.77325 2.77335 6.77325 2.56068 6.90258 2.43135L7.76458 1.56935C7.89392 1.44002 8.10658 1.44002 8.23592
//                                                             1.56935L9.09792 2.43135C9.22725 2.56068 9.22725 2.77335 9.09792 2.90268L8.45592 3.54535C8.46794 3.55686 8.48154 3.56651 
//                                                             8.49516 3.57618C8.51703 3.5917 8.53897 3.60727 8.55458 3.63068L10.8686 7.10202L13.6572 5.42868ZM2.66667 
//                                                             12.6673H13.3333V14.0007H2.66667V12.6673Z"
//                                                                     fill="currentColor" aria-hidden="true">
//                                                                 </path>
//                                                             </svg>

//                                                             <ReactTooltip
//                                                                 className="server-group-owner-tool-tip"
//                                                                 textColor="#B9BBBE"
//                                                                 backgroundColor="#191919"
//                                                                 id="server-owner-tip"
//                                                                 place="top"
//                                                                 effect="solid">
//                                                                 Server Owner
//                                                             </ReactTooltip>
//                                                         </>
//                                                     ) : ('')
//                                                 }
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )

//                         })

//                     }

//                     <h3 className="server-members-header-title">{`OFFLINE — ${offlineServerMembers.length}`}</h3>
//                     {
//                         offlineServerMembers.map((serverMember, serverMemberIdx) => {

//                             return (

//                                 <div className={`server-member-item ${selectedMember.id === serverMember.id && showPopup === true ? `` : `smi-offline`}`}
//                                     key={serverMember.id}
//                                     onClick={(e) => {
//                                         handleSelected(serverMember);
//                                         handlePopupShow(e);
//                                     }}>

//                                     <div className={`server-member-layout ${selectedMember.id === serverMember.id && showPopup === true ? `selected` : ``}`}>
//                                         <div className="server-member-avatar">
//                                             <div className="server-member-avatar-inner-wrapper">
//                                                 <svg width="32" height="32" viewBox="0 0 32 32" className="sml-mask sml-svg" aria-hidden="true">
//                                                     <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-default)">
//                                                         <div className="sml-avatar-stack">
//                                                             {
//                                                                 serverMember.photo === undefined ? (
//                                                                     <img className={`sml-avatar color-${serverMember.color_tag}`} src={render_Default_User_PFP} alt=" " aria-hidden="true" />
//                                                                 ) : (
//                                                                     <img className="sml-avatar" src={serverMember.photo} alt=" " aria-hidden="true" />
//                                                                 )
//                                                             }
//                                                         </div>
//                                                     </foreignObject>
//                                                 </svg>

//                                             </div>
//                                         </div>
//                                         <div className="server-member-info-wrapper">
//                                             <div className="server-member-username-wrapper">
//                                                 <div className="server-member-username-div">
//                                                     <span className="server-member-username-span">
//                                                         <span className="server-member-username">
//                                                             {serverMember.username}
//                                                         </span>
//                                                     </span>
//                                                 </div>

//                                                 {
//                                                     serverMember.id === ServerOwner ? (
//                                                         <>
//                                                             <svg aria-label="Server Owner" data-tip data-for="server-owner-tip"
//                                                                 className={"server-group-owner-icon"}
//                                                                 aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 16 16">
//                                                                 <path fillRule="evenodd" clipRule="evenodd" d="M13.6572 5.42868C13.8879 5.29002 14.1806 5.30402 14.3973 5.46468C14.6133 5.62602
//                                                                         14.7119 5.90068 14.6473 6.16202L13.3139 11.4954C13.2393 11.7927 12.9726 12.0007 12.6666 12.0007H3.33325C3.02725 12.0007 2.76058 
//                                                                         11.792 2.68592 11.4954L1.35258 6.16202C1.28792 5.90068 1.38658 5.62602 1.60258 5.46468C1.81992 5.30468 2.11192 5.29068 2.34325 
//                                                                         5.42868L5.13192 7.10202L7.44592 3.63068C7.46173 3.60697 7.48377 3.5913 7.50588 3.57559C7.5192 3.56612 7.53255 3.55663 7.54458 
//                                                                         3.54535L6.90258 2.90268C6.77325 2.77335 6.77325 2.56068 6.90258 2.43135L7.76458 1.56935C7.89392 1.44002 8.10658 1.44002 8.23592
//                                                                         1.56935L9.09792 2.43135C9.22725 2.56068 9.22725 2.77335 9.09792 2.90268L8.45592 3.54535C8.46794 3.55686 8.48154 3.56651 
//                                                                         8.49516 3.57618C8.51703 3.5917 8.53897 3.60727 8.55458 3.63068L10.8686 7.10202L13.6572 5.42868ZM2.66667 
//                                                                         12.6673H13.3333V14.0007H2.66667V12.6673Z"
//                                                                     fill="currentColor" aria-hidden="true">
//                                                                 </path>
//                                                             </svg>

//                                                             <ReactTooltip
//                                                                 className="server-group-owner-tool-tip"
//                                                                 textColor="#B9BBBE"
//                                                                 backgroundColor="#191919"
//                                                                 id="server-owner-tip"
//                                                                 place="top"
//                                                                 effect="solid">
//                                                                 Server Owner
//                                                             </ReactTooltip>
//                                                         </>
//                                                     ) : ('')
//                                                 }

//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )

//                         })

//                     }
//                     <ReactTooltip
//                         className="server-group-owner-tool-tip"
//                         textColor="#B9BBBE"
//                         backgroundColor="#191919"
//                         id="member-online"
//                         place="top"
//                         effect="solid">
//                         Online
//                     </ReactTooltip>
//                 </div>
//             </aside>
//         </div>


//     )


// }
// export default ServerMembersList;



