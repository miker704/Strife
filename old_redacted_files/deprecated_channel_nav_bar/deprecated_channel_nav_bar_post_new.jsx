// import React from "react";
// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import ChannelDropDownContainer from "../channel_drop_down/channel_drop_down_container";
// import UserNavContainer from "../../users/user_nav/user_nav_container";
// import { useParams } from "react-router-dom";
// import { Tooltip } from "react-tooltip";
// import { AddIcon, ChannelDropDownChevronIcon, HashIcon, InviteMemberIcon_Small, LoudSpeakerIcon, MiniChevronIcon, SMSIcon, SettingsIcon_Small } from "../../front_end_svgs/Strife_svgs";
// import { appPullerPullAnimation, appPullerPullAndHoldAnimation } from "../../../utils/appPullerAnimation_api_util";


// const ChannelNavBar = (props) => {

//     if (!props.server?.id) {
//         return null;
//     }

//     useEffect(() => {
//         //     //this fetch of server leads to a render where messages pop up again from a previous channel for a split second
//         //     // props.fetchServer();
//         if (props.currentChannel?.id) {
//             props.fetchChannel(props.currentChannelId);
//         }
//     }, [props.currentChannel?.id])

//     useEffect(() => {
//         if (props.server?.id) {
//             props.fetchServer(props.server.id);
//         }
//     }, [props.server?.id])


//     let params = useParams();
//     const [showPopUp, setShowPopUp] = useState(false);
//     const [popUpTop, setPopUpTop] = useState(0);
//     const [showChannelSettings, setShowChannelSettings] = useState(false);
//     const [parseChannelID, setParseChannelID] = useState(0);
//     const popUpRef = useRef();
//     const [textChannelDropDown, setTextChannelDropDown] = useState(false);
//     const [voiceChannelDropDown, setVoiceChannelDropDown] = useState(false);
//     const [hovered, setHovered] = useState(false);


//     const handlePopUpTop = (e) => {
//         setPopUpTop(e.currentTarget.getBoundingClientRect().top);
//         setShowPopUp(!showPopUp);
//     }

//     // const checkIsViz = (channelType) =>{
//     //     console.log("izviz :", props.hideMembersList)
//     //     if(channelType === 1 ){
//     //         if(props.hideMembersList === true){
//     //             props.isViz();
//     //         }
//     //     }
//     //     else if (channelType === 2 && props.hideMembersList === false){
//     //         props.isViz();
//     //     }
//     // }

//     const renderChannelDropDownModal = () => {
//         if (showPopUp === true) {
//             return (
//                 <ChannelDropDownContainer
//                     setRenderLeaveServer={props.setRenderLeaveServer}
//                     setShowPopUp={setShowPopUp}
//                     setRenderInviteToServer={props.setRenderInviteToServer}
//                 />
//             )
//         }
//     }


//     const mapTextChannel = props.channels.map((channel) => {
//         let selectedChannel = channel.id.toString() === props.currentChannelId ? `selected-channel` : ``;
//         if (channel.channel_type === 1) {
//             return (
//                 <li className={`default-channel-item ${selectedChannel}`} key={channel.id}>
//                     {/* <li className="default-channel-item" key={channel.id} onClick={() => checkIsViz(channel.channel_type)}> */}
//                     <div className="def-channel-wrap">
//                         <div className="def-channel-content">
//                             <Link to={`/$/channels/${props.server.id}/${channel.id}`} className="def-channel-a">
//                                 <div className="def-channel-icon-container" data-tooltip-place="top" data-tooltip-id="thread-tip" data-tooltip-content={'Text'}>
//                                     <HashIcon className="channel-nav-bar-hash-icon" />
//                                 </div>
//                                 <div className="default-channel-name">
//                                     {channel.channel_name}
//                                 </div>
//                             </Link>
//                             <div className="child-buttons">
//                                 <div className="cnb-child-button-icon"
//                                     data-tooltip-place="top" data-tooltip-id="thread-tip" data-tooltip-content={'Create Invite'}
//                                     onClick={() => {
//                                         props.openModalWithProps({
//                                             ChannelId: channel.id,
//                                             params: params,
//                                             channel_belongs_to_server_id: channel.server_id,
//                                         })
//                                         props.setRenderInviteToServer(true);
//                                     }}>
//                                     <InviteMemberIcon_Small className="create-channel-invite-icon" />
//                                 </div>

//                                 {
//                                     props.currentUserId === props.server.server_owner_id ?
//                                         (
//                                             <div
//                                                 className='cnb-child-button-icon'
//                                                 data-tooltip-place="top" data-tooltip-id="thread-tip" data-tooltip-content={'Edit Channel'}
//                                                 onClick={() => {
//                                                     props.openModalWithProps({
//                                                         ChannelId: channel.id,
//                                                         params: params,
//                                                         selectedChannel: channel,
//                                                         channel_belongs_to_server_id: channel.server_id,
//                                                     })
//                                                     // appPullerPullAnimation();
//                                                     appPullerPullAndHoldAnimation();
//                                                     props.openModal('ChannelSettings')

//                                                 }}>
//                                                 <SettingsIcon_Small className="channel-gear-icon" />
//                                             </div>
//                                         ) : ("")
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </li>

//             )
//         }
//     })


//     const mapVoiceChannel = props.channels.map((channel) => {
//         let selectedChannel = channel.id.toString() === props.currentChannelId ? "selected-channel" : "";
//         if (channel.channel_type === 2) {
//             return (
//                 <li className={`default-channel-item ${selectedChannel}`} key={channel.id}>
//                     {/* <li className="default-channel-item" key={channel.id} onClick={() => checkIsViz(channel.channel_type)}> */}
//                     <div className="def-channel-wrap">
//                         <div className="def-channel-content" >
//                             {/* <Link to={`/$/channels/${props.server.id}/${channel.id}`} className="def-channel-a"> */}
//                             <div className="def-channel-a" id="v-channel" data-tooltip-position-strategy="fixed" data-tooltip-place="top" data-tooltip-id="thread-tip" data-tooltip-content={'$TR!F3 N!TR0 need to access'}>
//                                 <div className="def-channel-icon-container" data-tooltip-place="top" data-tooltip-id="thread-tip" data-tooltip-content={'Voice'}>
//                                     <LoudSpeakerIcon className="icon-speaker" />
//                                 </div>
//                                 <div className="default-channel-name">
//                                     {channel.channel_name}
//                                 </div>
//                             </div>
//                             {/* </Link> */}
//                             <div className="child-buttons">

//                                 <div className="cnb-child-button-icon" data-tooltip-place="top" data-tooltip-id="thread-tip" data-tooltip-content={'Open Chat'}>
//                                     <SMSIcon height={16} width={16} className="open-chat-icon" />
//                                 </div>
//                                 <div className="cnb-child-button-icon"
//                                     data-tooltip-place="top" data-tooltip-id="thread-tip" data-tooltip-content={'Create Invite'}
//                                     onClick={() => {

//                                         props.openModalWithProps({
//                                             ChannelId: channel.id,
//                                             params: params,
//                                             channel_belongs_to_server_id: channel.server_id,
//                                         })
//                                         props.setRenderInviteToServer(true);

//                                     }}>
//                                     <InviteMemberIcon_Small className="create-channel-invite-icon" />
//                                 </div>

//                                 {
//                                     props.currentUserId === props.server.server_owner_id ? (
//                                         <div className='cnb-child-button-icon'
//                                             data-tooltip-place="top" data-tooltip-id="thread-tip" data-tooltip-content={'Edit Channel'}
//                                             onClick={() => {
//                                                 props.openModalWithProps({
//                                                     ChannelId: channel.id,
//                                                     params: params,
//                                                     selectedChannel: channel,
//                                                     channel_belongs_to_server_id: channel.server_id,
//                                                 })
//                                                 // appPullerPullAnimation();
//                                                 appPullerPullAndHoldAnimation();
//                                                 props.openModal('ChannelSettings')
//                                             }}>
//                                             <SettingsIcon_Small className="channel-gear-icon" />
//                                         </div>

//                                     ) : ("")
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </li>
//             )
//         }
//     })


//     if (props.server) {
//         return (
//             <div className="channel-nav-bar">

//                 <nav className="channel-nav-bar-container-wrapper">

//                     <div className="channel-nav-bar-top-container" onClick={(e) => handlePopUpTop(e)}>

//                         <header className={`channel-nav-bar-top-container-header ${showPopUp ? `selected` : ``}`}>
//                             <div className="channel-nav-bar-header-content">
//                                 <h1 className="channel-nav-bar-h1">
//                                     {props.server.server_name}
//                                 </h1>
//                                 <div className="channel-nav-bar-top-button"></div>
//                                 <div className="channel-nav-chevron" >
//                                     <ChannelDropDownChevronIcon className={`icon-chevron${showPopUp ? `-X` : ``}`} />
//                                 </div>
//                             </div>
//                         </header>

//                     </div>

//                     <div className="channel-nav-sep">
//                         <div></div>
//                     </div>

//                     <div className="channel-post-container">
//                         <div className="channel-unread">
//                             <div className="channel-unread-top">
//                                 <span className="channel-unread-text"></span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* {showPopUp && <ChannelDropDownContainer
//                         setRenderLeaveServer={props.setRenderLeaveServer}
//                         setShowPopUp={setShowPopUp}
//                     />
//                     } */}
//                     {renderChannelDropDownModal()}

//                     <div className="channel-nav-scroller global-scroller-base global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes custom-theme" style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                         <ul className="ul-channels">
//                             <div className="u1-channels-blank"></div>

//                             <li className="channel-li-item-cat">
//                                 <div className="channel-li-icon">
//                                     <div className="main-channel-content">
//                                         <MiniChevronIcon className="channel-icon-arrow" />
//                                         <h2 className="main-channel-content-h2">
//                                             <div className="main-channel-h2">Text Channels</div>
//                                         </h2>
//                                     </div>

//                                     {props.currentUserId === props.server.server_owner_id ? (
//                                         <div className="channel-plus-div" data-tooltip-place="top" data-tooltip-id="thread-tip" data-tooltip-content={'Create Channel'}>
//                                             <button type="button" className="add-channel-button"
//                                                 onClick={() => {
//                                                     props.openModalWithProps({ channelType: 1 })
//                                                     props.openModal('CreateChannel');
//                                                 }}>
//                                                 <div className="global-button-contents">
//                                                     <AddIcon className="addButtonIcon" />
//                                                 </div>
//                                             </button>
//                                         </div>
//                                     ) : ("")
//                                     }

//                                 </div>
//                             </li>

//                             <ul className="mapped-channel-ul">
//                                 {mapTextChannel}
//                             </ul>

//                             <li className="channel-li-item-cat">
//                                 <div className="channel-li-icon">
//                                     <div className="main-channel-content">
//                                         <MiniChevronIcon className="channel-icon-arrow" />
//                                         <h2 className="main-channel-content-h2">
//                                             <div className="main-channel-h2">Voice Channels</div>
//                                         </h2>
//                                     </div>

//                                     {
//                                         props.currentUserId === props.server.server_owner_id ? (
//                                             <div className="channel-plus-div" data-tooltip-place="top" data-tooltip-id="thread-tip" data-tooltip-content={'Create Channel'}>
//                                                 <button type="button" className="add-channel-button"
//                                                     onClick={() => {
//                                                         props.openModalWithProps({ channelType: 2 })
//                                                         props.openModal('CreateChannel');
//                                                     }}>
//                                                     <div className="global-button-contents">
//                                                         <AddIcon className="addButtonIcon" />
//                                                     </div>
//                                                 </button>
//                                             </div>
//                                         ) : ("")
//                                     }

//                                 </div>
//                             </li>
//                             <ul className="mapped-channel-ul">{mapVoiceChannel}</ul>
//                         </ul>
//                     </div>
//                 </nav>
//                 <UserNavContainer />
//             </div>
//         )

//     }
//     else {
//         return null;
//     }

// }

// export default ChannelNavBar;
