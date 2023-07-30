// import React from "react";
// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import ReactTooltip from "react-tooltip";
// import ChannelDropDownContainer from "../channel_drop_down/channel_drop_down_container";
// import UserNavContainer from "../../users/user_nav/user_nav_container";
// import { useParams } from "react-router-dom";

// const ChannelNavBar = (props) => {

//     if (!props.server?.id) {
//         return null;
//     }

//     useEffect(() => {
//         //     //this fetch of server leads to a render where messages pop up again from a previous channel for a split second
//         //     // props.fetchServer();
//         props.fetchChannel();
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
//                     setRenderCreateChannel={props.setRenderCreateChannel}
//                     setRenderCreateChannelParams={props.setRenderCreateChannelParams}
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
//                                 <div className="def-channel-icon-container" data-tip data-for="text-channel-tool-tip">
//                                     <svg width="24" height="24" viewBox="0 0 24 24" className="channel-nav-bar-hash-icon" aria-hidden="true" role="img">
//                                         <path fill="currentColor" fillRule="evenodd"
//                                             clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001
//                                             17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746
//                                             2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 
//                                             8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914
//                                             3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001
//                                             7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201
//                                             3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824
//                                             8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802
//                                             20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261
//                                             15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325
//                                             20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104
//                                             9H9.41045Z">
//                                         </path>
//                                     </svg>
//                                     <ReactTooltip
//                                         className="text-channel-nav-bar-tool-tip"
//                                         textColor="#B9BBBE"
//                                         backgroundColor="#191919"
//                                         id="text-channel-tool-tip"
//                                         place="top"
//                                         effect="solid">
//                                         Text
//                                     </ReactTooltip>
//                                 </div>
//                                 <div className="default-channel-name">
//                                     {channel.channel_name}
//                                 </div>
//                             </Link>
//                             <div className="child-buttons">
//                                 <div className="cnb-child-button-icon"
//                                     data-tip data-for="create-channel-invite-tool-tip1"
//                                     onClick={() => {
                                    
//                                         props.openModalWithProps({ ChannelId: channel.id, params: params })

//                                         props.openModal('InviteToServer');
//                                     }}>
//                                     <svg className="create-channel-invite-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
//                                         <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
//                                         <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 
//                                     3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z">

//                                         </path>
//                                         <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z">
//                                         </path>
//                                     </svg>

//                                 </div>
//                                 <ReactTooltip
//                                     className="create-channel-invite-nav-bar-tool-tip"
//                                     textColor="#B9BBBE"
//                                     backgroundColor="#191919"
//                                     id="create-channel-invite-tool-tip1"
//                                     place="top"
//                                     effect="solid">
//                                     Create Invite
//                                 </ReactTooltip>

//                                 {
//                                     props.currentUserId === props.server.server_owner_id ?
//                                         (
//                                             <div
//                                                 className='cnb-child-button-icon'
//                                                 data-tip data-for="channel-settings-tool-tip"
//                                                 onClick={() => {
//                                                     props.openModalWithProps({ ChannelId: channel.id, params: params })
//                                                     props.openModal('ChannelSettings')

//                                                 }}>
//                                                 <svg className="channel-gear-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
//                                                     <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 
//                                             9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133
//                                             12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 
//                                             12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667
//                                               5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 
//                                               3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8
//                                               10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z">
//                                                     </path>
//                                                 </svg>
//                                                 <ReactTooltip
//                                                     className="channel-settings-nav-bar-tool-tip"
//                                                     textColor="#B9BBBE"
//                                                     backgroundColor="#191919"
//                                                     id="channel-settings-tool-tip"
//                                                     place="top"
//                                                     effect="solid">
//                                                     Edit Channel
//                                                 </ReactTooltip>
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
//                             <div className="def-channel-a" id="v-channel" data-tip data-for="voice-channel-Strife-access">
//                                 <div className="def-channel-icon-container" data-tip data-for="voice-channel-tool-tip">
//                                     <svg className="icon-speaker" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                         <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 
//                                             3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 
//                                             20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 
//                                             3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 
//                                             17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 
//                                             17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 
//                                             14.551 11.002 14 11.002V9.00195Z" aria-hidden="true">
//                                         </path>
//                                     </svg>
//                                     <ReactTooltip
//                                         className="voice-channel-nav-bar-tool-tip"
//                                         textColor="#B9BBBE"
//                                         backgroundColor="#191919"
//                                         id="voice-channel-tool-tip"
//                                         place="top"
//                                         effect="solid">
//                                         Voice
//                                     </ReactTooltip>
//                                     <ReactTooltip
//                                         className="thread-tool-tip"
//                                         textColor="#B9BBBE"
//                                         backgroundColor="#191919"
//                                         id="voice-channel-Strife-access"
//                                         place="top"
//                                         effect="solid">
//                                         $TR!F3 N!TR0 need to access
//                                     </ReactTooltip>
//                                 </div>
//                                 <div className="default-channel-name">
//                                     {channel.channel_name}
//                                 </div>
//                             </div>
//                             {/* </Link> */}
//                             <div className="child-buttons">

//                                 <div className="cnb-child-button-icon" data-tip data-for="open-chat-channel-tool-tip">
//                                     <svg className="open-chat-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24" fill="none">
//                                         <path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 
//                                             17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 
//                                             20.1925 3 19.198 3H4.79805Z">
//                                         </path>
//                                     </svg>
//                                     <ReactTooltip
//                                         className="channel-chat-nav-bar-tool-tip"
//                                         textColor="#B9BBBE"
//                                         backgroundColor="#191919"
//                                         id="open-chat-channel-tool-tip"
//                                         place="top"
//                                         effect="solid">
//                                         Open Chat
//                                     </ReactTooltip>
//                                 </div>
//                                 <div className="cnb-child-button-icon"
//                                     data-tip data-for="create-channel-invite-tool-tip3"
//                                     onClick={() => {
                                
//                                         props.openModalWithProps({ ChannelId: channel.id, params: params })
//                                         props.openModal("InviteToServer");
//                                     }}>

//                                     <svg className="create-channel-invite-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
//                                         <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
//                                         <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 
//                                                     3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z">

//                                         </path>
//                                         <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z">
//                                         </path>
//                                     </svg>
//                                     <ReactTooltip
//                                         className="create-voice-channel-invite-nav-bar-tool-tip"
//                                         textColor="#B9BBBE"
//                                         backgroundColor="#191919"
//                                         id="create-channel-invite-tool-tip3"
//                                         place="top"
//                                         effect="solid">
//                                         Create Invite
//                                     </ReactTooltip>
//                                 </div>

//                                 {
//                                     props.currentUserId === props.server.server_owner_id ? (
//                                         <div className='cnb-child-button-icon'
//                                             data-tip data-for="channel-settings-tool-tip2"
//                                             onClick={() => {
//                                                 props.openModalWithProps({ ChannelId: channel.id, params: params })
//                                                 props.openModal('ChannelSettings')
//                                             }}>
//                                             <svg className="channel-gear-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
//                                                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 
//                                                 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133
//                                                 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 
//                                                 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667
//                                                   5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 
//                                                   3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8
//                                                   10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z">
//                                                 </path>
//                                             </svg>
//                                             <ReactTooltip
//                                                 className="voice-channel-settings-nav-bar-tool-tip"
//                                                 textColor="#B9BBBE"
//                                                 backgroundColor="#191919"
//                                                 id="channel-settings-tool-tip2"
//                                                 place="top"
//                                                 effect="solid">
//                                                 Edit Channel
//                                             </ReactTooltip>
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
//                                     <svg width="18" height="18" className={`icon-chevron${showPopUp ? `-X` : ``}`}>
//                                         <g fill="none" fillRule="evenodd">
//                                             <path d="M0 0h18v18H0"></path>
//                                             <path stroke="currentColor" d="M4.5 4.5l9 9" strokeLinecap="round"></path>
//                                             <path stroke="currentColor" d="M13.5 4.5l-9 9" strokeLinecap="round"></path>
//                                         </g>
//                                     </svg>
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
//                                         <svg className="channel-icon-arrow" width="24" height="24" viewBox="0 0 24 24">
//                                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41
//                                              8.59004L6 10L12 16L18 10L16.59 8.59004Z">
//                                             </path>
//                                         </svg>
//                                         <h2 className="main-channel-content-h2">
//                                             <div className="main-channel-h2">Text Channels</div>
//                                         </h2>
//                                     </div>

//                                     {props.currentUserId === props.server.server_owner_id ? (
//                                         <div className="channel-plus-div" data-tip data-for="create-channel-tool-tip">
//                                             <button type="button" className="add-channel-button"
//                                                 onClick={() => {
//                                                     props.openModalWithProps({ channelType: 1 })
//                                                     props.openModal('CreateChannel');
//                                                 }}>
//                                                 <div className="global-button-contents">
//                                                     <svg className="addButtonIcon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 18 18">
//                                                         <polygon fillRule="nonzero" fill="currentColor"
//                                                             points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8">
//                                                         </polygon>
//                                                     </svg>
//                                                 </div>
//                                             </button>
//                                             <ReactTooltip
//                                                 className="create-channel-nav-bar-tool-tip"
//                                                 textColor="#B9BBBE"
//                                                 backgroundColor="#191919"
//                                                 id="create-channel-tool-tip"
//                                                 place="top"
//                                                 effect="solid">
//                                                 Create Channel
//                                             </ReactTooltip>
//                                         </div>
//                                     ) : ("")
//                                     }

//                                 </div>
//                             </li>

//                             <ul className="mapped-channel-ul">{mapTextChannel}</ul>


//                             <li className="channel-li-item-cat">
//                                 <div className="channel-li-icon">
//                                     <div className="main-channel-content">
//                                         <svg className="channel-icon-arrow" width="24" height="24" viewBox="0 0 24 24">
//                                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41
//                                              8.59004L6 10L12 16L18 10L16.59 8.59004Z">
//                                             </path>
//                                         </svg>
//                                         <h2 className="main-channel-content-h2">
//                                             <div className="main-channel-h2">Voice Channels</div>
//                                         </h2>
//                                     </div>

//                                     {
//                                         props.currentUserId === props.server.server_owner_id ? (
//                                             <div className="channel-plus-div" data-tip data-for="create-channel-tool-tip2">
//                                                 <button type="button" className="add-channel-button"
//                                                     onClick={() => {
//                                                         props.openModalWithProps({ channelType: 2 })
//                                                         props.openModal('CreateChannel');
//                                                     }}>
//                                                     <div className="global-button-contents">
//                                                         <svg className="addButtonIcon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 18 18">
//                                                             <polygon fillRule="nonzero" fill="currentColor"
//                                                                 points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8">
//                                                             </polygon>
//                                                         </svg>
//                                                         <ReactTooltip
//                                                             className="create-voice-channel-nav-bar-tool-tip"
//                                                             textColor="#B9BBBE"
//                                                             backgroundColor="#191919"
//                                                             id="create-channel-tool-tip2"
//                                                             place="top"
//                                                             effect="solid">
//                                                             Create Channel
//                                                         </ReactTooltip>

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
