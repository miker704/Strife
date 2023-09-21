// import React from "react";
// import { createConsumer } from "@rails/actioncable"
// import DMMessageEditContainer from "../dms_messages/dm_messages_container";
// import DmChatFirstMessageContainer from "../dm_first_message/dm_first_message_container";
// import { ChatAddFileIcon, ChatGIFIcon, ChatPresentIcon, ChatStickerIcon, SmileyFaceIcon } from "../../front_end_svgs/Strife_svgs";
// import { Tooltip } from "react-tooltip";

// class DmChatRoom extends React.Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             newDmMessage: this.props.dmMessage,
//             DmMessages: this.props.DmMessages,
//             dmMessagesIds: this.props.dmMessagesIds,
//             value: '',
//             placeholderText: '',
//         }

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.subscription = "";
//         this.subscribe = this.subscribe.bind(this);
//         this.unsubscribe = this.unsubscribe.bind(this);
//         // this.scrollToBottomOfChat = this.scrollToBottomOfChat.bind(this);
//         this.handleInput = this.handleInput.bind(this);
//         this.handleEnter = this.handleEnter.bind(this);
//         this.formatTime = this.formatTime.bind(this);
//         this.oneToOneChatFirstMessage = this.oneToOneChatFirstMessage.bind(this);
//         this.renderGroupChatFirstMessage = this.renderGroupChatFirstMessage.bind(this);
//         this.resyncUserProps = this.resyncUserProps.bind(this);
//         this.chatInputRef = React.createRef();
//         this.renderPlaceHolder = this.renderPlaceHolder.bind(this);
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

//                 this.props.fetchDmServer(this.props.dmServerId);
//                 this.renderPlaceHolder();
//             }

//         })

//         //code above checks if user was kick while out of chat if condtion pass boot them and do not fetch server
//         // this.props.fetchDmServer(this.props.dmServerId);
//         // this.subscribe();

//     }


//     //remove listening of subscription 
//     componentWillUnmount () {
//         this.subscription?.unsubscribe();
//     }



//     scrollToBottomOfChat = (speed) => {
//         if (this.placeholder) {
//             this.placeholder.scrollIntoView({ behavior: speed });
//         }
//     }


//     unsubscribe () {
//         this.subscription.unsubscribe();
//     }

//     resyncUserProps (head, path) {

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
//                 received: ({ dm_message, head, path }) => {
//                     //boot individual member
//                     if (head === 401) {
//                     }
//                     if (head === 102) {
//                         this.props.fetchDmServer(this.props.dmServerId);
//                     }

//                     //active member in chat has update a visuaL comp
//                     if (head === 111) {
//                         // console.log("user has been updated")
//                         this.props.fetchDmServer(this.props.dmServerId);
//                         //trick compdid update


//                     }
//                     //this is to boot everyone when the dmserver is deleted
//                     if (head === 302 && path === '/$/telefrag/') {
//                         this.props.history.push(`/$/telefrag/`);
//                     }
//                     // else if(this.props.currentUserId !== this.props.dmServer.owner_id) {
//                     else {
//                         // ensure individual membership is maintained if not boot the user that fails this
//                         // condition
//                         this.props.reSyncCurrentUser(this.props.currentUserId).then((action) => {
//                             let currUser = action.currentUser;
//                             if (!currUser.dmServersJoined.includes(parseInt(this.props.dmServerId))) {
//                                 this.props.removeDmServer(this.props.dmServer.id);
//                                 this.props.history.push('/$/$TR!F3-INTRUSION-PREVENTION/');
//                             }
//                             else {

//                                 this.props.fetchDmServer(this.props.dmServer.id);
//                             }

//                         })
//                     }
//                     // this.props.receiveDmMessage(dm_message);
//                     // this.props.fetchDmServer(this.props.dmServerId);

//                     if (dm_message !== undefined) {
//                         if (Object.values(dm_message).length > 1) {
//                             if (this.state.dmMessagesIds.includes(dm_message.id.toString())) {
//                                 let dmMessages = this.state.DmMessages;
//                                 let DMMessagesCollection = new Array();
//                                 dmMessages.forEach((dmmessage) => {
//                                     //if match occurs set it to current dmMessage state
//                                     if (dmmessage.id === dm_message.id) {
//                                         dmmessage.body = dm_message.body;
//                                         //push it to dmMessages state array
//                                     }
//                                     DMMessagesCollection.push(dmmessage);
//                                 })
//                                 //update the state 
//                                 this.setState({ ["DmMessages"]: DMMessagesCollection });
//                             }
//                             else {
//                                 //if there arent any messages in the dmserver set up for message creation
//                                 //get author name of message within this dmServer
//                                 dm_message.authorName = this.props.dmServer.members[dm_message.sender_id].username;
//                                 //rename it so that it can be editable
//                                 dm_message.sender_id = dm_message.sender_id;
//                                 //grab time stamps from the backend
//                                 let timeStamp = new Date(dm_message.created_at)
//                                 let time = timeStamp.toLocaleTimeString();
//                                 let date = timeStamp.toLocaleDateString();
//                                 dm_message.created_at = date + " " + time;
//                                 this.setState({ ["DmMessages"]: this.state.DmMessages.concat([dm_message]) })
//                                 this.setState({ ["dmMessagesIds"]: this.state.dmMessagesIds.concat(dm_message.id.toString()) })
//                             }
//                         }
//                         else {
//                             let dmMessages = this.state.DmMessages
//                             let filteredDmMessages = dmMessages.filter(dm => dm.id !== dm_message)
//                             this.setState({ ['DmMessages']: filteredDmMessages });

//                         }
//                     }


//                 },

//             }
//         );
//     }



//     componentDidUpdate (prevProps, prevState) {
//         if (prevProps.DmMessages[0] !== this.props.DmMessages[0]) {
//             this.scrollToBottomOfChat("auto");
//         }

//         if (prevState.DmMessages.length < this.state.DmMessages.length) {
//             this.scrollToBottomOfChat("smooth");
//         }

//         if (prevProps.dmMessagesIds.length !== this.props.dmMessagesIds.length) {
//             let DmMessages = this.props.DmMessages;
//             let dmMessagesIds = this.props.dmMessagesIds;
//             this.setState({ DmMessages });
//             this.setState({ dmMessagesIds });
//         }
//         if (prevProps.dmMessagesIds.length > 0 && this.props.dmMessagesIds.length > 0) {
//             if (prevProps.DmMessages[0].id !== this.props.DmMessages[0].id) {
//                 this.props.fetchDmServer(this.props.dmServerId);
//                 this.subscription.unsubscribe();
//                 this.subscribe();
//                 let DmMessages = this.props.DmMessages;
//                 let dmMessagesIds = this.props.dmMessagesIds;
//                 this.setState({ DmMessages });
//                 this.setState({ dmMessagesIds });
//             }
//         }
//         if (prevProps.match.params.dmServerId !== this.props.match.params.dmServerId) {
//             let newDmMessage = this.state.newDmMessage
//             newDmMessage.body = '';
//             newDmMessage.dm_server_id = this.props.match.params.dmServerId;
//             this.setState({ newDmMessage });
//             this.setState({ value: "" });
//             this.props.fetchDmServer(this.props.dmServerId);
//             this.unsubscribe();
//             this.subscribe();
//             this.renderPlaceHolder();
//             this.chatInputRef.current?.focus();
//         }
//         if (prevProps.dmMembers.length !== this.props.dmMembers.length) {
//             this.renderPlaceHolder();
//             this.chatInputRef.current?.focus();
//         }

//     }


//     handleEnter (e) {
//         const keys = {
//             13: () => {
//                 e.preventDefault();
//                 this.handleSubmit(e);
//                 window.removeEventListener('keyup', this.handleEnter, false);
//             },
//         };
//         if (keys[e.keyCode]) {
//             keys[e.keyCode]();
//         }
//     }

//     handleSubmit (e) {
//         e.preventDefault();
//         e.stopPropagation();
//         let dmMessagebody = this.state.value;
//         if (dmMessagebody.length === 0 || dmMessagebody.replace(/\s/g, '').length === 0) { return; }
//         let modedMessage = this.state.newDmMessage;
//         modedMessage.body = dmMessagebody.trim();
//         this.setState({ newDmMessage: modedMessage });
//         this.props.createDmMessage(this.state.newDmMessage);
//         modedMessage.body = ''
//         this.setState({ value: '', newDmMessage: modedMessage });

//     }

//     handleInput (e) {
//         return (e) => { this.setState({ value: e.currentTarget.value }) }
//     }


//     formatTime (timeOfCreation) {
//         const date = new Date(timeOfCreation);
//         const now = new Date();
//         const startOfDay = new Date(
//             now.getFullYear(),
//             now.getMonth(),
//             now.getDate()
//         ).getTime();

//         const startOfYesterday = startOfDay - (1000 * 60 * 60 * 24);
//         let formattedTime = date.toLocaleTimeString([], {
//             timeStyle: 'short'
//         });
//         if (date.getTime() < startOfYesterday) {
//             formattedTime = date.toDateString();
//         } else if (date.getTime() < startOfDay) {
//             formattedTime = `Yesterday at ${formattedTime}`;
//         }
//         return formattedTime;
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


//     oneToOneChatFirstMessage () {
//         const members = Object.values(this.props.dmMembers);
//         if (members.length === 2) {
//             const otherUser = members.find((user) => user.id !== this.props.currentUser.id)
//             return (
//                 <strong className="otherUser">@{`${otherUser.username}`}</strong>
//             )
//         }
//         else {
//             return null;
//         }
//     }
//     renderGroupChatFirstMessage () {
//         const members = Object.values(this.props.dmMembers);
//         let groupMembers = new Array();
//         if (members.length > 2) {
//             for (let member of members) {
//                 if (member.id !== this.props.currentUser.id) {
//                     groupMembers.push('@' + member.username);
//                 }
//             }
//             return (
//                 <strong className="otherUser">{` `}{`${groupMembers.join(", ")}`}</strong>
//             )
//         }
//         else {
//             return null;
//         }
//     }



//     render () {
//         const dmServerMembers = this.props.dmMembers;

//         let dmMessageOLLIMapping = this.state.DmMessages.map((dmMessage) => {
//             // const botMessage = dmMessage.sender_id === 1 &&
//             //     dmMessage.body === 'This is the beginning of your direct message history with' ?
//             //     this.oneToOneChatFirstMessage() : dmMessage.sender_id === 1 &&
//             //         dmMessage.body === 'Welcome to the beginning of your Group Chat' ?
//             //         this.renderGroupChatFirstMessage() : ('');


//             let member = dmServerMembers.find(member => member.id === dmMessage.sender_id)
//             if (member === undefined) {
//                 member = Object.values(this.props.strifeBot)[0];
//             }
//             {
//                 return (

//                     <DMMessageEditContainer
//                         dmMessageAuthor={member}
//                         dmMembers={this.props.dmMembers}
//                         currentUserId={this.props.currentUserId}
//                         currentUser={this.props.currentUser}
//                         dmMessage={dmMessage}
//                         renderGroupChatFirstMessage={this.renderGroupChatFirstMessage}
//                         oneToOneChatFirstMessage={this.oneToOneChatFirstMessage}
//                         formatTime={this.formatTime}
//                         dmServerId={this.props.dmServerId}
//                         key={dmMessage.id}
//                         strifeBot={this.props.strifeBot}
//                         setRenderDeleteDM={this.props.setRenderDeleteDM}
//                         handleOpenSUOMM={this.props.handleOpenSUOMM}
//                         msgUpc={this.props.msgUpc}
//                     />
//                 )
//             }


//         })

//         return (
//             <main className="server-chat-container">
//                 <div className="message-wrapper">
//                     <div className="chat-scroller auto-scroll-raw-attributes global-scroller-base disableScrollAnchor reactive-scroller">
//                         <div className="chat-scroller-content">
//                             <ol className="chat-scroller-inner">
//                                 <DmChatFirstMessageContainer dmServer={this.props.dmServer} dmServerMembers={this.props.dmServerMembers} />
//                                 <div className="chat-divider">
//                                     <span className="chat-divider-content"></span>
//                                 </div>
//                                 {dmMessageOLLIMapping}
//                                 <div className="ol-scroller-spacer" ref={el => this.placeholder = el} />
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
//                                                 if (e.code === 'Enter' && !e.shiftKey) {
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
//                 {/* <Tooltip className="msg-control-tool-tip" id="dmsgbs-thread-tip" place="top" closeOnResize={true} closeOnScroll={true} /> */}
//             </main>
//         )
//     }

// }

// export default DmChatRoom;