// import React from "react";
// import { createConsumer } from "@rails/actioncable"
// import { ChatAddFileIcon, ChatGIFIcon, ChatPresentIcon, ChatStickerIcon, SmileyFaceIcon } from "../../front_end_svgs/Strife_svgs";
// import { Tooltip } from "react-tooltip";
// import DmMessageIndexContainer from "../dm_messages_index/dm_messages_index_container";
// import { receiveDmMessage, removeDmMessage } from "../../../actions/dm_messages_actions";
// import { removeDmMember, receiveDmMember } from "../../../actions/dm_member_actions";
// import { fetchUser } from "../../../utils/session_api_util";
// import { fetchIsDmMember } from "../../../utils/dm_member_api_util";
// import BlockedUserSnackBarContainer from "../blocked_user_snack_bar/blocked_user_snack_bar_container";
// import { MessageSkeletonList } from "../../custom_input_components/message_Skeleton/message_skeleton2";
// import DMMessagesContainer from "../dms_messages/dm_messages_container";
// import DmChatFirstMessageContainer from "../dm_first_message/dm_first_message_container";
// import { fetchDmServer } from "../../../utils/dm_server_api_util";

// class DmChatRoom extends React.Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             newDmMessage: this.props.dmMessage,
//             DmMessages: this.props.DmMessages,
//             dmMessagesIds: this.props.dmMessagesIds,
//             value: '',
//             placeholderText: '',
//             renderSkeleton: true,
//             renderBlockedUserSnackBar: this.props.userBlocked,
//         }

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.subscription = "";
//         this.subscribe = this.subscribe.bind(this);
//         this.unsubscribe = this.unsubscribe.bind(this);
//         this.scrollToBottomOfChat = this.scrollToBottomOfChat.bind(this);
//         this.handleInput = this.handleInput.bind(this);
//         this.chatInputRef = React.createRef();
//         this.chatScrollerRef = React.createRef();
//         this.renderPlaceHolder = this.renderPlaceHolder.bind(this);
//         this.renderBlockedUserSnackBarContainer = this.renderBlockedUserSnackBarContainer.bind(this);
//     }
//     //mount correct dmServer and start subscription listening 
//     componentDidMount () {
//         this.subscribe();
//         this.props.reSyncCurrentUser(this.props.currentUserId).then((action) => {
//             let currUser = action.currentUser;
//             if (!currUser.dmServersJoined.includes(parseInt(this.props.dmServerId))) {
//                 this.props.removeDmServer(this.props.dmServerId);
//                 // this.props.history.push('/$TR!F3-INTRUSION-PREVENTION/');
//                 return null;
//             }
//             else {

//                 this.props.fetchDmServer(this.props.dmServerId).then(() => {
//                     console.log("running .....")
//                     // setTimeout(() => {
//                     this.setState({ renderSkeleton: false });
//                     this.props.setLoadingMessages(false);
//                     this.scrollToBottomOfChat("instant");

//                     // }, 500);

//                 });
//                 this.renderPlaceHolder();

//             }

//         })
//     }

//     //remove listening of subscription 
//     componentWillUnmount () {
//         this.subscription?.unsubscribe();
//     }


//     scrollToBottomOfChat = (speed) => {
//         let oLScrollerSpacer = document.querySelector(".ol-scroller-spacer");

//         if (oLScrollerSpacer) {
//             // this.chatScrollerRef.current.scrollTop = this.chatScrollerRef.current.scrollHeight;
//             // oLScrollerSpacer.focus();
//             oLScrollerSpacer.scrollIntoView({ behavior: speed, block: 'end' });
//         }
//         console.log("%c scrollToBottomOfChat", "color#:FF0000")

//     }


//     unsubscribe () {
//         this.subscription.unsubscribe();
//     }

//     subscribe () {

//         //plug the cable
//         const cable = createConsumer('ws://localhost:3000/cable'); // /cable mounts to local host that rails server is running on 
//         // const cable = createConsumer('wss://strife-v1.herokuapp.com/cable'); // /cable mounts to local host that rails server is running on 
//         // const cable = createConsumer('wss://strife.onrender.com/cable');
//         this.subscription = cable.subscriptions.create(
//             { channel: 'DmChannel', id: this.props.dmServerId },
//             {
//                 //return a head code to invoke a resync and allow live updates for other dm_server_components without having to 
//                 //manually add actioncable on them on the front end side this now allows the chat container to control nearly everything
//                 // attached to dm_server for a full resync
//                 received: ({ dm_message, head, path, dm_server, dm_member, type, user, removed_dm_member_id }) => {
//                     console.log(`%c INCOMING DATA after : `, "color:#05dc28", dm_message, head, path, dm_server, dm_member, user, type, removed_dm_member_id);

//                     switch (type) {
//                         case "RECEIVE_DM_MESSAGE":
//                             this.props.receiveDmMessage(dm_message);
//                             break;
//                         case "UPDATE_DM_MESSAGE":
//                             this.props.receiveDmMessage(dm_message);
//                             break;
//                         case "REMOVE_DM_MESSAGE":
//                             this.props.removeDmMessage(dm_message.id);
//                             break;
//                         case "MEMBER_UPDATED":
//                             this.props.fetchDmServer(this.props.dmServerId);
//                             break;
//                         case "NEW_DMS_MEMBER":
//                             console.log(`%c NEW_DMS_MEMBER : `, "color:#05dc28", dm_message, head, path, dm_server, dm_member, type, user, removed_dm_member_id);
//                             this.props.receiveDmMessage(dm_message);
//                             this.props.fetchDmServer(this.props.dmServerId);
//                             break;
//                         case "REMOVE_DMS_MEMBER":
//                             console.log(`%c NEW_DMS_MEMBER : `, "color:#05dc28", dm_message, head, path, dm_server, dm_member, type, user, removed_dm_member_id);
//                             this.props.receiveDmMessage(dm_message);
//                             this.props.reSyncCurrentUser(this.props.currentUserId).then((action) => {
//                                 let currUser = action.currentUser;
//                                 if (!currUser.dmServersJoined.includes(parseInt(this.props.dmServerId))) {
//                                     this.props.removeDmServer(this.props.dmServer.id);
//                                     this.props.history.push('/$/$TR!F3-INTRUSION-PREVENTION/');
//                                 }
//                                 else {
//                                     this.props.fetchDmServer(this.props.dmServer.id);
//                                 }
//                             })
//                             break;
//                         case "DMS_UPDATED":
//                             console.log(`%c DMS_UPDATED : `, "color:#05dc28", dm_message, head, path, dm_server, dm_member, type, user, removed_dm_member_id);
//                             this.props.fetchDmServer(this.props.dmServerId);
//                             break;
//                         case "REJECT_ALL_DM_MEMBERS_DESTROYING_DM_SERVER":
//                             if (head === 302 && path === '/$/telefrag/') {
//                                 this.props.history.push(`/$/telefrag/`);
//                             }
//                             break;
//                         default:
//                             console.warn(`%c[$TR!FE DM_SERVER_CHAT_ROOM M0N!T0R]: %c[UNKNOWN REQUEST: ATTEMPTING TO RESYNC %c] %c@ [IN DM_SERVER_ROOM :${this.props.dmServerId}%c]`, "color:#00FD61;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;");
//                             this.props.fetchDmServer(this.props.dmServerId);
//                     }

//                 },
//             }
//         );
//     }

//     componentDidUpdate (prevProps, prevState) {

//         if (this.props.DmMessages.length > prevProps.DmMessages.length) {
//             console.log(`%c this.props.DmMessages.length > prevProps.DmMessages.length `, "color:#05dc28");
//             this.scrollToBottomOfChat("instant");
//         }
//         if (prevProps.dmMembers.length !== this.props.dmMembers.length) {
//             console.log("%c prevprops 6", "color#:FF0000")
//             this.renderPlaceHolder();
//             this.chatInputRef.current?.focus();
//         }
//         if (prevProps.match.params.dmServerId !== this.props.match.params.dmServerId) {
//             this.setState({ value: "", renderSkeleton: true, renderBlockedUserSnackBar: false });
//             console.log("%c prevprops 5", "color#:FF0000")
//             console.log("re-running syncs")
//             this.props.fetchDmServer(this.props.dmServerId).then(() => {
//                 this.setState({ renderSkeleton: false });
//                 this.scrollToBottomOfChat("instant");
//                 this.props.setLoadingMessages(false);
//             });
//             this.unsubscribe();
//             this.subscribe();
//             this.renderPlaceHolder();
//             // this.scrollToBottomOfChat("instant");
//             this.chatInputRef.current?.focus();
//         }

//     }

//     // componentDidUpdate (prevProps, prevState) {

//     // if (prevProps.DmMessages[0] !== this.props.DmMessages[0] || prevState.DmMessages.length < this.state.DmMessages.length || this.props.loadingMessages) {
//     //     // this.scrollToBottomOfChat("auto");
//     //     this.scrollToBottomOfChat("instant");
//     //     console.log("%c prevprops 1", "color#:FF0000")
//     // }

//     // if (prevState.DmMessages.length < this.state.DmMessages.length) {
//     //     // this.scrollToBottomOfChat("smooth");
//     //     this.scrollToBottomOfChat("instant");
//     //     console.log("%c prevprops 2", "color#:FF0000")

//     // }

//     // if (prevProps.dmMessagesIds.length !== this.props.dmMessagesIds.length) {
//     //     let DmMessages = this.props.DmMessages;
//     //     let dmMessagesIds = this.props.dmMessagesIds;
//     //     this.setState({ DmMessages });
//     //     this.setState({ dmMessagesIds });
//     //     this.scrollToBottomOfChat("instant");
//     //     console.log("%c prevprops 3", "color#:FF0000")

//     // }
//     // if (prevProps.dmMessagesIds.length > 0 && this.props.dmMessagesIds.length > 0) {
//     //     if (prevProps.DmMessages[0].id !== this.props.DmMessages[0].id) {
//     //         this.props.fetchDmServer(this.props.dmServerId);
//     //         this.subscription.unsubscribe();
//     //         this.subscribe();
//     //         let DmMessages = this.props.DmMessages;
//     //         let dmMessagesIds = this.props.dmMessagesIds;
//     //         this.setState({ DmMessages });
//     //         this.setState({ dmMessagesIds });
//     //         this.scrollToBottomOfChat("instant");
//     //         console.log("%c prevprops 4.5", "color#:FF0000")

//     //     }
//     //     console.log("%c prevprops 4", "color#:FF0000")
//     //     this.scrollToBottomOfChat("instant");

//     // }
//     // if (prevProps.match.params.dmServerId !== this.props.match.params.dmServerId) {
//     //     console.log("%c prevprops 5", "color#:FF0000")

//     //     let newDmMessage = this.state.newDmMessage
//     //     newDmMessage.body = '';
//     //     newDmMessage.dm_server_id = this.props.match.params.dmServerId;
//     //     this.setState({ newDmMessage });
//     //     this.setState({ value: "" });
//     //     // this.setState({ value: "", renderSkeleton: true });
//     //     console.log("re-running syncs")
//     //     this.props.fetchDmServer(this.props.dmServerId).then(() => {
//     //         setTimeout(() => {
//     //             // this.setState({ renderSkeleton: false });
//     //             this.props.setLoadingMessages(false);
//     //             this.scrollToBottomOfChat("instant");
//     //         }, 1500);
//     //     });
//     //     // this.props.fetchDmServer(this.props.dmServerId);
//     //     this.unsubscribe();
//     //     this.subscribe();
//     //     this.renderPlaceHolder();
//     //     this.scrollToBottomOfChat("instant");
//     //     this.chatInputRef.current?.focus();
//     // }
//     // if (prevProps.dmMembers.length !== this.props.dmMembers.length) {
//     //     console.log("%c prevprops 6", "color#:FF0000")

//     //     this.renderPlaceHolder();
//     //     this.chatInputRef.current?.focus();
//     // }

//     // }



//     handleSubmit (e) {
//         e.preventDefault();
//         e.stopPropagation();
//         let dmMessagebody = this.state.value;
//         if (dmMessagebody.length === 0 || dmMessagebody.replace(/\s/g, '').length === 0) { return; }
//         let modedMessage = {
//             body: dmMessagebody.trim(),
//             sender_id: this.props.currentUser.id,
//             dm_server_id: parseInt(this.props.match.params.dmServerId)
//         };

//         this.props.createDmMessage(modedMessage).then(() => {
//             modedMessage.body = ''
//             this.setState({ value: '', newDmMessage: modedMessage });
//             // this.scrollToBottomOfChat("smooth");
//         });

//     }


//     renderBlockedUserSnackBarContainer = (boolean) => {
//         this.setState({ renderBlockedUserSnackBar: boolean });
//     }

//     handleInput (e) {
//         return (e) => { this.setState({ value: e.currentTarget.value }) }
//     }

//     renderPlaceHolder () {
//         const members = Object.values(this.props.dmMembers);
//         let groupMembers = new Array();

//         if (this.props.dmServer.dm_server_name !== null) {
//             this.setState({ placeholderText: `${this.props.dmServer.dm_server_name}` });
//         }

//         else if (members.length === 2) {
//             const otherUser = members.find((user) => user.id !== this.props.currentUser.id)
//             this.setState({ placeholderText: `@${otherUser.username}` })
//         }
//         else if (members.length > 2) {
//             for (let member of members) {
//                 if (member.id !== this.props.currentUser.id) {
//                     groupMembers.push('@' + member.username);
//                 }
//             }
//             let placeholderNames = `${groupMembers.join(", ").split("@").join('')}`;
//             this.setState({ placeholderText: `${placeholderNames}` });
//         }

//     }

//     render () {
//         const dmServerMembers = this.props.dmMembers;
//         let dmMessageOLLIMapping = this.props.DmMessages.map((dmMessage, dmMsgIdx) => {
//             let member = dmServerMembers.find(member => member.id === dmMessage.sender_id)
//             if (member === undefined) { member = Object.values(this.props.strifeBot)[0]; } {
//                 return (
//                     <DMMessagesContainer key={dmMessage.id} dmServerId={this.props.dmServerId} dmMsgIdx={dmMsgIdx}
//                         dmMessageAuthor={member} dmMessage={dmMessage} strifeBot={this.props.strifeBot}
//                         dmMembers={this.props.dmMembers} msgUpc={this.props.msgUpc}
//                         handleOpenSUOMM={this.props.handleOpenSUOMM} renderSkeleton={this.state.renderSkeleton}
//                         setRenderDeleteDM={this.props.setRenderDeleteDM}
//                         setMsgCtrlTTHover={this.props.setMsgCtrlTTHover} DmMessages={this.props.DmMessages} setMsgCtrlSRTTHover={this.props.setMsgCtrlSRTTHover}
//                     />
//                 )
//             }
//         })
//         return (
//             <main className="server-chat-container">
//                 <div className="message-wrapper">
//                     <div className="chat-scroller auto-scroll-raw-attributes global-scroller-base disableScrollAnchor reactive-scroller" ref={this.chatScrollerRef}>
//                         <div className="chat-scroller-content">
//                             {/* {
//                                 this.state.renderSkeleton === true ? (
//                                     <MessageSkeletonList listNumber={5} />
//                                 ) : (
//                                     <DmMessageIndexContainer dmServer={this.props.dmServer} dmServerMembers={this.props.dmServerMembers}
//                                         scrollToBottomOfChat={this.scrollToBottomOfChat} checkToDisable={this.checkToDisable} renderBlockedUserSnackBarContainer={this.renderBlockedUserSnackBarContainer}
//                                         dmServerId={this.props.dmServerId} loadingMessages={this.props.loadingMessages} renderSkeleton={this.state.renderSkeleton}
//                                         setRenderDeleteDM={this.props.setRenderDeleteDM} handleOpenSUOMM={this.props.handleOpenSUOMM} setLoadingMessages={this.props.setLoadingMessages}
//                                         msgUpc={this.props.msgUpc} setMsgCtrlTTHover={this.props.setMsgCtrlTTHover} dmChannelMessages={this.props.DmMessages} setMsgCtrlSRTTHover={this.props.setMsgCtrlSRTTHover}
//                                     />
//                                 )
//                             } */}
//                             <ol className="chat-scroller-inner" >
//                                 {this.state.renderSkeleton ? null : <DmChatFirstMessageContainer renderBlockedUserSnackBarContainer={this.renderBlockedUserSnackBarContainer} dmServer={this.props.dmServer} dmServerMembers={this.props.dmServerMembers} setLoadingMessages={this.props.setLoadingMessages} loadingMessages={this.props.loadingMessages} />}
//                                 {dmMessageOLLIMapping}
//                                 <div className="ol-scroller-spacer" />
//                             </ol>
//                         </div>
//                     </div>
//                 </div>

//                 <form className="chat-input-form" onSubmit={this.handleSubmit}>
//                     <div className="chat-input-text-area">
//                         <div className="chat-input-text-area-scroller chat-input-tsa-webkit-scroll">
//                             <div className="inner-attach-button">
//                                 <div className="uploadinput">
//                                     <input type="file" className="file-input" disabled />
//                                 </div>
//                                 <div className="attach-wrapper">
//                                     <button type="button" className="attach-wrapper-button">
//                                         <div className="attach-wrapper-button-content">
//                                             <ChatAddFileIcon />
//                                         </div>
//                                     </button>
//                                 </div>
//                                 <div className="inner-scroller-text-area">
//                                     <div>

//                                         <textarea
//                                             value={this.state.value}
//                                             onChange={this.handleInput()}
//                                             className="server-message-chat-box-area"
//                                             rows={this.state.value.split('\n').length}
//                                             minLength={1}
//                                             maxLength={2000}
//                                             placeholder={`Message ${this.state.placeholderText}`}
//                                             spellCheck={false}
//                                             autoFocus={true}
//                                             ref={this.chatInputRef}
//                                             onFocus={(e) => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
//                                             onKeyDown={(e) => {
//                                                 if (e.key === 'Enter' && !e.shiftKey) {
//                                                     this.handleSubmit(e);
//                                                 }
//                                             }}
//                                         />


//                                     </div>
//                                 </div>
//                                 <div className="inner-scroller-buttons">
//                                     <button type="button" className="send-gift-button">
//                                         <div className="chat-button-contents">
//                                             <div className="chat-button-wrapper" data-tooltip-id={'thread-tip-dm-chat-box'} data-tooltip-place="top" data-tooltip-position-strategy="fixed"
//                                                 data-tooltip-content={'Upgrade your friends! Gift them awesome chat perks with $TR!F3 N!TR0.'} >
//                                                 <ChatPresentIcon className="present-icon" />
//                                             </div>
//                                         </div>
//                                     </button>
//                                     <div className="button-chat-input-wrap">
//                                         <button type="button" className="send-gift-button">
//                                             <div className="chat-button-contents">
//                                                 <div className="chat-button-wrapper">
//                                                     <ChatGIFIcon className="icongif" />
//                                                 </div>
//                                             </div>

//                                         </button>
//                                     </div>
//                                     <div className="button-chat-input-wrap">
//                                         <button type="button" className="send-gift-button">
//                                             <div className="chat-button-contents">
//                                                 <div className="chat-button-wrapper">
//                                                     <ChatStickerIcon className="sticker-icon" />
//                                                 </div>
//                                             </div>
//                                         </button>
//                                     </div>
//                                     <div className="button-chat-input-wrap">
//                                         <button type="button" className="send-gift-button happyface">
//                                             <div className="chat-button-contents">
//                                                 <div className="chat-button-wrapper">
//                                                     <SmileyFaceIcon className="smiley-face-icon" />
//                                                 </div>
//                                             </div>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="chat-input-text-area-sticker">
//                         </div>
//                     </div>
//                 </form>

//                 <Tooltip className="thread-tool-tip" id="thread-tip-dm-chat-box" place="top" closeOnResize={true} closeOnScroll={true} />
//             </main>
//         )
//     }

// }

// export default DmChatRoom;