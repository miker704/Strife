//deprecated replaced ul list and other styles with dv mappings

// import { useState, useRef } from "react";
// import React from "react";
// import ReactTooltip from "react-tooltip";
// import user_Default_PFP from '../../../../app/assets/images/discord_PFP.svg';
// import ServerUserOptionsModalContainer from "../../friends/server_user_options/server_user_options_modal_container.js";
// const DmServerMemberList = ({
//     dmServerId,
//     dmServerMembers,
//     errors,
//     dmServer,
//     currentUser,
//     fetchDmServer,
//     requestFriendships,
//     dmServerUsers
// }

// ) => {

//     if (!dmServer) {
//         return null;
//     }

//     let dmServerMemberList = Object.values(dmServerMembers);
//     const DmServerOwner = dmServer.owner_id;
//     let default_Photo = "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png";
//     let default_DMSM_PFP = user_Default_PFP;
//     // useEffect(() => {
//     //     requestFriendships();
//     //     // return function cleanup () {
//     //     //     if (errors.length > 0) {
//     //     //         removeFriendshipErrors();
//     //     //     }
//     //     //     if (dmServerErrors.length > 0) {
//     //     //         removeDmServerErrors();
//     //     //     }
//     //     // }
//     //     // if(Object.values(dmServerMembers).friend_request_status){

//     //     // }


//     // }, []);

//     // useEffect(() => {

//     //     if (dmServer?.id) {
//     //         fetchDmServer(dmServerId);
//     //     }


//     // }, [dmServer?.id ])



//     const inputRef = useRef();
//     const [showPopup, setShowPopup] = useState(false);
//     const [popupTop, setPopupTop] = useState(0);
//     const [selectedMember, toggleSelected] = useState([]);

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


//     return (
//         <div className="dm-members-index-container-wrapper">
//             {


//                 showPopup && <ServerUserOptionsModalContainer
//                     user={currentUser} member={selectedMember} memberId={selectedMember.id}
//                     top={popupTop} setShowPopup={setShowPopup}
//                     DmServerOwner={DmServerOwner} DmServerId={dmServer.id}
//                     serverType={'DM_SERVER'} dmServerMembers={dmServerMembers} />


//             }
//             <div className="dm-members-index-container">
//                 <h2 className="dm-members-header-title">{`MEMBERS — ${dmServerMemberList.length}`}</h2>
//                 <ul className="ul-padding">
//                     {
//                         dmServerMemberList.map((dmMember, dmMemberIdx) => {

//                             return (


//                                 <li className={`dm-member-item ${dmMember.online === false ? `dm-member-item-offline` : ``}`} key={dmMember.id}
//                                     onClick={(e) => {
//                                         handleSelected(dmMember);
//                                         handlePopupShow(e);
//                                     }}>


//                                     <div className="dm-member-layout">
//                                         <div className="dm-member-avatar">
//                                             <div className="dm-member-avatar-inner-wrapper">

//                                                 <div className={`${dmMember.photo === undefined ?
//                                                     `user-pfp-svg-render color-${dmMember.color_tag}` :
//                                                     `dm-member-avatar-img`}`}>
//                                                     <img src={`${dmMember.photo === undefined ? default_DMSM_PFP : dmMember.photo}`} alt="dsmPFP" />
//                                                 </div>
//                                                 <div className={`${dmMember.online ? "circle-online-dm-list" : "circle-offline-dm-list"}`}></div>

//                                             </div>
//                                         </div>
//                                         <div className="dm-member-info-wrapper">
//                                             <div className="dm-member-username-wrapper">
//                                                 <div className="dm-member-username-div">
//                                                     <span className="dm-member-username-span">
//                                                         <span className="dm-member-username">
//                                                             {dmMember.username}
//                                                         </span>
//                                                     </span>
//                                                 </div>
//                                                 <svg aria-label="Group Owner" data-tip data-for="group-owner-tip"
//                                                     className={`dm-server-group-owner-icon ${dmMember.id === DmServerOwner ? "" : "is-hidden"}`}
//                                                     aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 16 16">
//                                                     <path fillRule="evenodd" clipRule="evenodd" d="M13.6572 5.42868C13.8879 5.29002 14.1806 5.30402 14.3973 5.46468C14.6133 5.62602
//                                                             14.7119 5.90068 14.6473 6.16202L13.3139 11.4954C13.2393 11.7927 12.9726 12.0007 12.6666 12.0007H3.33325C3.02725 12.0007 2.76058 
//                                                             11.792 2.68592 11.4954L1.35258 6.16202C1.28792 5.90068 1.38658 5.62602 1.60258 5.46468C1.81992 5.30468 2.11192 5.29068 2.34325 
//                                                             5.42868L5.13192 7.10202L7.44592 3.63068C7.46173 3.60697 7.48377 3.5913 7.50588 3.57559C7.5192 3.56612 7.53255 3.55663 7.54458 
//                                                             3.54535L6.90258 2.90268C6.77325 2.77335 6.77325 2.56068 6.90258 2.43135L7.76458 1.56935C7.89392 1.44002 8.10658 1.44002 8.23592
//                                                             1.56935L9.09792 2.43135C9.22725 2.56068 9.22725 2.77335 9.09792 2.90268L8.45592 3.54535C8.46794 3.55686 8.48154 3.56651 
//                                                             8.49516 3.57618C8.51703 3.5917 8.53897 3.60727 8.55458 3.63068L10.8686 7.10202L13.6572 5.42868ZM2.66667 
//                                                             12.6673H13.3333V14.0007H2.66667V12.6673Z"
//                                                         fill="currentColor" aria-hidden="true">
//                                                     </path>
//                                                 </svg>

//                                                 <ReactTooltip
//                                                     className="dmshb-group-owner-tool-tip"
//                                                     textColor="#B9BBBE"
//                                                     backgroundColor="#191919"
//                                                     id="group-owner-tip"
//                                                     place="top"
//                                                     effect="solid">
//                                                     Group Owner
//                                                 </ReactTooltip>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//         </div>
//     )
// }
// export default DmServerMemberList;






/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
                        // String Concatenation is more faster and cleaner to read
                        // let classNameTag = 'dm-member-item' + ((dmMember.online === false && selectedMember.id === dmMember.id && showPopup === true) ? '' : (dmMember.online === false) ? (' ' + 'dmsmi-offline') : '');
                        let classNameTag = 'dm-member-item' + ((dmMember.online === false) ? ' ' + 'dmsmi-offline' : '');
                        return (

                            <div
                                // className={`dm-member-item ${dmMember.online === false && selectedMember.id === dmMember.id && showPopup === true ? `` : dmMember.online === false ? `dmsmi-offline` : ``}`}
                                // className={`${dmMember.online === false && selectedMember.id === dmMember.id && showPopup === true ? `dm-member-item` : dmMember.online === false ? `dm-member-item dmsmi-offline` : `dm-member-item`}`}
                                // className={`${dmMember.online === false && selectedMember.id === dmMember.id && showPopup === true ? `dm-member-item` : dmMember.online === false ? `dm-member-item dmsmi-offline` : `dm-member-item`}`}
                                // className={`${selectedMember.id === dmMember.id && showPopup === true ? `dm-member-item` : dmMember.online === false ? `dm-member-item dmsmi-offline` : `dm-member-item`}`}
                                // className={classNameTag}
                                className={`${selectedMember.id === dmMember.id && showPopup === true ? 'dm-member-item' : classNameTag}`}
                                key={dmMember.id}
                                onClick={(e) => {
                                    handleSelected(dmMember);
                                    handlePopupShow(e);
                                }}>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */