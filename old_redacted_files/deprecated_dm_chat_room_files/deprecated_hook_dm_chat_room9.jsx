// import React from "react";
// import { useEffect, useState, useRef } from "react";
// import { createConsumer } from "@rails/actioncable"
// import DmChatFirstMessageContainer from "../dm_first_message/dm_first_message_container";
// import { ChatAddFileIcon, ChatGIFIcon, ChatPresentIcon, ChatStickerIcon, SmileyFaceIcon } from "../../front_end_svgs/Strife_svgs";
// import { useParams } from "react-router-dom";
// import { Tooltip } from "react-tooltip";
// import { usePrevious } from "@uidotdev/usehooks";
// import DmMessageIndexContainer from "../dm_messages_index/dm_messages_index_container";
// import { receiveDmMessage, removeDmMessage } from "../../../actions/dm_messages_actions";
// import { removeDmMember, receiveDmMember } from "../../../actions/dm_member_actions";
// import { fetchUser } from "../../../utils/session_api_util";
// import { fetchIsDmMember } from "../../../utils/dm_member_api_util";
// import BlockedUserSnackBarContainer from "../blocked_user_snack_bar/blocked_user_snack_bar_container";
// import { MessageSkeletonList } from "../../custom_input_components/message_Skeleton/message_skeleton2";
// import DMMessagesContainer from "../dms_messages/dm_messages_container";
// import { fetchDmServer } from "../../../utils/dm_server_api_util";

// const DmChatRoom = (props) => {
//     const dmParams = useParams();
//     const [DmMessages, setDmMessages] = useState([]);
//     const [dmMessagesIds, setDmMessagesIds] = useState([]);
//     const [renderSkeleton, setRenderSkeleton] = useState(true);
//     // const [newDmMessage, setNewDmMessage] = useState(props.dmMessage);
//     // const [DmMessages, setDmMessages] = useState(props.DmMessages);
//     // const [dmMessagesIds, setDmMessagesIds] = useState(props.dmMessagesIds);
//     const [renderBlockedUserSnackBar, setRenderBlockedUserSnackBar] = useState(false);

//     const [value, setValue] = useState("");
//     const [placeholderText, setPlaceHolderText] = useState("");
//     const chatInputRef = useRef();
//     const scrollRef = useRef();
//     const subscription = useRef(null);


//     //component mounted
//     useEffect(() => {
//         console.log("%c Component mounted: ", "color:#008000");
//         props.reSyncCurrentUser(props.currentUserId).then((action) => {
//             let currUser = action.currentUser;
//             if (!currUser.dmServersJoined.includes(parseInt(props.dmServerId))) {
//                 props.removeDmServer(props.dmServerId);
//                 // this.props.history.push('/$TR!F3-INTRUSION-PREVENTION/');
//                 return null;
//             }
//         })
//         return () => {
//             console.log("%c Component UNMOUNTED: ", "color:#FF0000");

//             unsubscribeFromCable();
//         };
//     }, []);


//     useEffect(() => {
//         console.log(`%c this.props.DmMessages.length > prevProps.DmMessages.length `, "color:#05dc28");
//         scrollToBottomOfChat("instant");
//     }, [props.DmMessages.length])


//     useEffect(() => {
//         console.log("%c prevprops 6", "color#:FF0000")
//         renderPlaceHolder();
//         chatInputRef.current?.focus();
//     }, [props.dmMembers.length])


//     useEffect(() => {
//         console.log("%c prevprops 5", "color#:FF0000")
//         console.log("re-running syncs")
//         setDmMessages([])
//         setRenderSkeleton(false);
//         setValue("");
//         setRenderBlockedUserSnackBar(false);
//         unsubscribeFromCable();
//         props.fetchDmServer(props.dmServerId).then(() => {
//             setDmMessages(props.DmMessages);
//             setRenderSkeleton(false);
//             props.setLoadingMessages(false);
//             scrollToBottomOfChat("instant");
//             renderPlaceHolder();
//             chatInputRef.current?.focus();
//             subscribeToCable();
//         })
//         return () => {
//             console.log("%c Component UNMOUNTED : from props.match.params.dmServerId", "color:#FF0000");
//             unsubscribeFromCable();
//         };
//     }, [props.match.params.dmServerId]);


//     const updateDmMessagesState = (new_dmMessage) => {
//         console.log("%cin updateDmMessagesState", "color:#fc06c6")
//         setDmMessages((prevState) => {
//             const newState = [...prevState, new_dmMessage];
//             return newState;
//         })
//     }

//     const updateDmMessagesIdsState = (new_dmMessage) => {
//         console.log("%cin updateDmMessagesIDSState", "color:#2ad1d0");

//         setDmMessagesIds((prevState) => {
//             const newState = [...prevState, new_dmMessage.id.toString()];
//             return newState;
//         })
//     }

//     const unsubscribeFromCable = () => {
//         console.log("%c UNSUBBING FROM CABLE: ", "color:#FF0000");

//         subscription.current?.unsubscribe();
//     }


//     const subscribeToCable = () => {

//         //plug the cable 
//         const cable = createConsumer('ws://localhost:3000/cable'); // /cable mounts to local host that rails server is running on 
//         // const cable = createConsumer('wss://strife-v1.herokuapp.com/cable'); // /cable mounts to local host that rails server is running on 
//         // const cable = createConsumer('wss://strife.onrender.com/cable');
//         subscription.current = cable.subscriptions.create(
//             { channel: 'DmChannel', id: props.dmServerId },
//             {
//                 //return a head code to invoke a resync and allow live updates for other dm_server_components without having to 
//                 //manually add actioncable on them on the front end side this now allows the chat container to control nearly everything
//                 // attached to dm_server for a full resync
//                 received: ({ dm_message, head, path, dm_server, dm_member, type, user, removed_dm_member_id }) => {
//                     console.log(`%c INCOMING DATA after : `, "color:#05dc28", dm_message, head, path, dm_server, dm_member, user, type, removed_dm_member_id);

//                     switch (type) {
//                         case "RECEIVE_DM_MESSAGE":
//                             setDmMessages([...DmMessages, dm_message]);
//                             // props.receiveDmMessage(dm_message);
//                             break;
//                         case "UPDATE_DM_MESSAGE":
//                             setDmMessages([...DmMessages, dm_message]);
//                             // props.receiveDmMessage(dm_message);
//                             break;
//                         case "REMOVE_DM_MESSAGE":
//                             setDmMessages([...DmMessages, dm_message]);
//                             // props.removeDmMessage(dm_message.id);
//                             break;
//                         case "MEMBER_UPDATED":
//                             props.fetchDmServer(props.dmServerId);
//                             break;
//                         case "NEW_DMS_MEMBER":
//                             console.log(`%c NEW_DMS_MEMBER : `, "color:#05dc28", dm_message, head, path, dm_server, dm_member, type, user, removed_dm_member_id);
//                             // props.receiveDmMessage(dm_message);
//                             props.fetchDmServer(props.dmServerId);
//                             break;
//                         case "REMOVE_DMS_MEMBER":
//                             console.log(`%c NEW_DMS_MEMBER : `, "color:#05dc28", dm_message, head, path, dm_server, dm_member, type, user, removed_dm_member_id);
//                             // props.receiveDmMessage(dm_message);
//                             props.reSyncCurrentUser(props.currentUserId).then((action) => {
//                                 let currUser = action.currentUser;
//                                 if (!currUser.dmServersJoined.includes(parseInt(props.dmServerId))) {
//                                     props.removeDmServer(props.dmServer.id);
//                                     props.history.push('/$/$TR!F3-INTRUSION-PREVENTION/');
//                                 }
//                                 else {
//                                     props.fetchDmServer(props.dmServer.id);
//                                 }
//                             })
//                             break;
//                         case "DMS_UPDATED":
//                             console.log(`%c DMS_UPDATED : `, "color:#05dc28", dm_message, head, path, dm_server, dm_member, type, user, removed_dm_member_id);
//                             props.fetchDmServer(props.dmServerId);
//                             break;
//                         case "REJECT_ALL_DM_MEMBERS_DESTROYING_DM_SERVER":
//                             if (head === 302 && path === '/$/telefrag/') {
//                                 props.history.push(`/$/telefrag/`);
//                             }
//                             break;
//                         default:
//                             console.warn(`%c[$TR!FE DM_SERVER_CHAT_ROOM M0N!T0R]: %c[UNKNOWN REQUEST: ATTEMPTING TO RESYNC %c] %c@ [IN DM_SERVER_ROOM :${props.dmServerId}%c]`, "color:#00FD61;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;");
//                             props.fetchDmServer(props.dmServerId);
//                     }

//                 },
//                 connected () {
//                     console.log(`%c CONNECTED TO DM_SERVER ID : ${props.dmServerId} `, "color:#05dc28");
//                 },

//                 disconnected () {
//                     console.log(`%c DISCONNECTED FROM DM_SERVER ID: ${props.dmServerId} `, "color:#d91935");
//                 },
//             }
//         );
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         let dmMessagebody = value;
//         if (dmMessagebody.length === 0 || dmMessagebody.replace(/\s/g, '').length === 0) { return; }
//         let modedMessage = {
//             body: dmMessagebody.trim(),
//             sender_id: props.currentUser.id,
//             dm_server_id: parseInt(props.match.params.dmServerId)
//         };
//         props.createDmMessage(modedMessage).then(() => {
//             setValue('');
//             // scrollToBottomOfChat("smooth");
//         });
//     }


//     // const scrollToBottomOfChat = (speed) => {
//     //     if (scrollRef?.current) {
//     //         scrollRef?.current.scrollIntoView({ behavior: speed });
//     //     }
//     // }
//     const scrollToBottomOfChat = (speed) => {
//         let oLScrollerSpacer = document.querySelector(".ol-scroller-spacer");
//         if (oLScrollerSpacer) {
//             oLScrollerSpacer.scrollIntoView({ behavior: speed, block: 'end' });
//         }
//         console.log("%c scrollToBottomOfChat", "color#:FF0000")
//     }


//     const renderBlockedUserSnackBarContainer = (boolean) => {
//         setRenderBlockedUserSnackBar(boolean);
//     }

//     const renderPlaceHolder = () => {
//         const members = Object.values(props.dmMembers);
//         let groupMembers = new Array();

//         if (props.dmServer.dm_server_name !== null) {
//             setPlaceHolderText(`${props.dmServer.dm_server_name}`);
//         }

//         else if (members.length === 2) {
//             const otherUser = members.find((user) => user.id !== props.currentUser.id)
//             setPlaceHolderText(`@${otherUser.username}`);
//         }
//         else if (members.length > 2) {
//             for (let member of members) {
//                 if (member.id !== props.currentUser.id) {
//                     groupMembers.push('@' + member.username);
//                 }
//             }
//             let placeholderNames = `${groupMembers.join(", ").split("@").join('')}`;
//             setPlaceHolderText(`${placeholderNames}`);
//         }

//     }

//     const dmServerMembers = props.dmMembers;
//     let dmMessageOLLIMapping = props.DmMessages.map((dmMessage, dmMsgIdx) => {
//         let member = dmServerMembers.find(member => member.id === dmMessage.sender_id)
//         if (member === undefined) { member = Object.values(props.strifeBot)[0]; } {
//             return (
//                 <DMMessagesContainer key={dmMessage.id} dmServerId={props.dmServerId} dmMsgIdx={dmMsgIdx}
//                     dmMessageAuthor={member} dmMessage={dmMessage} strifeBot={props.strifeBot}
//                     dmMembers={props.dmMembers} msgUpc={props.msgUpc}
//                     handleOpenSUOMM={props.handleOpenSUOMM} renderSkeleton={renderSkeleton}
//                     setRenderDeleteDM={props.setRenderDeleteDM} setMsgCtrlSRTTHover={props.setMsgCtrlSRTTHover}
//                     setMsgCtrlTTHover={props.setMsgCtrlTTHover} DmMessages={props.DmMessages}
//                 />
//             )
//         }
//     })

//     let dmMessageOLLIMapping2 = DmMessages.map((dmMessage, dmMsgIdx) => {
//         let member = dmServerMembers.find(member => member.id === dmMessage.sender_id)
//         if (member === undefined) { member = Object.values(props.strifeBot)[0]; } {
//             return (
//                 <DMMessagesContainer key={dmMessage.id} dmServerId={props.dmServerId} dmMsgIdx={dmMsgIdx}
//                     dmMessageAuthor={member} dmMessage={dmMessage} strifeBot={props.strifeBot}
//                     dmMembers={props.dmMembers} msgUpc={props.msgUpc}
//                     handleOpenSUOMM={props.handleOpenSUOMM} renderSkeleton={renderSkeleton}
//                     setRenderDeleteDM={props.setRenderDeleteDM} setMsgCtrlSRTTHover={props.setMsgCtrlSRTTHover}
//                     setMsgCtrlTTHover={props.setMsgCtrlTTHover} DmMessages={DmMessages}
//                 />
//             )
//         }
//     })
//     return (
//         <main className="server-chat-container">
//             <div className="message-wrapper">
//                 <div className="chat-scroller auto-scroll-raw-attributes global-scroller-base disableScrollAnchor reactive-scroller">
//                     <div className="chat-scroller-content">

//                         {/* {
//                             renderSkeleton === true ? (
//                                 <MessageSkeletonList listNumber={5} />
//                             ) : (
//                                 <DmMessageIndexContainer dmServer={props.dmServer} dmServerMembers={props.dmServerMembers}
//                                     scrollToBottomOfChat={scrollToBottomOfChat} checkToDisable={checkToDisable} renderBlockedUserSnackBarContainer={renderBlockedUserSnackBarContainer}
//                                     dmServerId={props.dmServerId} loadingMessages={props.loadingMessages} renderSkeleton={renderSkeleton}
//                                     setRenderDeleteDM={props.setRenderDeleteDM} handleOpenSUOMM={props.handleOpenSUOMM} setLoadingMessages={props.setLoadingMessages}
//                                     msgUpc={props.msgUpc} setMsgCtrlTTHover={props.setMsgCtrlTTHover} dmChannelMessages={props.DmMessages} setMsgCtrlSRTTHover={props.setMsgCtrlSRTTHover}
//                                 />
//                             )
//                         } */}
//                         {/* <ol className="chat-scroller-inner" >
//                             {renderSkeleton ? null : <DmChatFirstMessageContainer renderBlockedUserSnackBarContainer={renderBlockedUserSnackBarContainer} dmServer={props.dmServer} dmServerMembers={props.dmServerMembers} setLoadingMessages={props.setLoadingMessages} loadingMessages={props.loadingMessages} />}
//                             {dmMessageOLLIMapping}
//                             <div className="ol-scroller-spacer" />
//                         </ol> */}
//                         <ol className="chat-scroller-inner" >
//                             {renderSkeleton ? null : <DmChatFirstMessageContainer renderBlockedUserSnackBarContainer={renderBlockedUserSnackBarContainer} dmServer={props.dmServer} dmServerMembers={props.dmServerMembers} setLoadingMessages={props.setLoadingMessages} loadingMessages={props.loadingMessages} />}
//                             {dmMessageOLLIMapping2}
//                             <div className="ol-scroller-spacer" />
//                         </ol>
//                     </div>
//                 </div>
//             </div>

//             <form className="chat-input-form" onSubmit={handleSubmit}>
//                 <div className="chat-input-text-area">
//                     <div className="chat-input-text-area-scroller chat-input-tsa-webkit-scroll">
//                         <div className="inner-attach-button">
//                             <div className="uploadinput">
//                                 <input type="file" className="file-input" disabled />
//                             </div>
//                             <div className="attach-wrapper">
//                                 <button type="button" className="attach-wrapper-button">
//                                     <div className="attach-wrapper-button-content">
//                                         <ChatAddFileIcon />
//                                     </div>
//                                 </button>
//                             </div>
//                             <div className="inner-scroller-text-area">
//                                 <div>

//                                     <textarea
//                                         value={value}
//                                         onChange={(e) => setValue(e.currentTarget.value)}
//                                         className="server-message-chat-box-area"
//                                         rows={value.split('\n').length}
//                                         minLength={1}
//                                         maxLength={2000}
//                                         placeholder={`Message ${placeholderText}`}
//                                         spellCheck={false}
//                                         autoFocus={true}
//                                         ref={chatInputRef}
//                                         onFocus={(e) => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
//                                         onKeyDown={(e) => {
//                                             if (e.key === 'Enter' && !e.shiftKey) {
//                                                 handleSubmit(e);
//                                             }
//                                         }}
//                                     />


//                                 </div>
//                             </div>
//                             <div className="inner-scroller-buttons">
//                                 <button type="button" className="send-gift-button">
//                                     <div className="chat-button-contents">
//                                         <div className="chat-button-wrapper" data-tooltip-id={'thread-tip-dm-chat-box'} data-tooltip-place="top" data-tooltip-position-strategy="fixed"
//                                             data-tooltip-content={'Upgrade your friends! Gift them awesome chat perks with $TR!F3 N!TR0.'} >
//                                             <ChatPresentIcon className="present-icon" />
//                                         </div>
//                                     </div>
//                                 </button>
//                                 <div className="button-chat-input-wrap">
//                                     <button type="button" className="send-gift-button">
//                                         <div className="chat-button-contents">
//                                             <div className="chat-button-wrapper">
//                                                 <ChatGIFIcon className="icongif" />
//                                             </div>
//                                         </div>

//                                     </button>
//                                 </div>
//                                 <div className="button-chat-input-wrap">
//                                     <button type="button" className="send-gift-button">
//                                         <div className="chat-button-contents">
//                                             <div className="chat-button-wrapper">
//                                                 <ChatStickerIcon className="sticker-icon" />
//                                             </div>
//                                         </div>
//                                     </button>
//                                 </div>
//                                 <div className="button-chat-input-wrap">
//                                     <button type="button" className="send-gift-button happyface">
//                                         <div className="chat-button-contents">
//                                             <div className="chat-button-wrapper">
//                                                 <SmileyFaceIcon className="smiley-face-icon" />
//                                             </div>
//                                         </div>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="chat-input-text-area-sticker">
//                     </div>
//                 </div>
//             </form>
//             <Tooltip className="thread-tool-tip" id="thread-tip-dm-chat-box" place="top" closeOnResize={true} closeOnScroll={true} />
//         </main>
//     )


// }

// export default DmChatRoom