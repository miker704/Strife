// import React from "react";
// import { createConsumer } from "@rails/actioncable"
// import ServerMessagesContainer from "../server_messages/server_messages_container";
// import { ChatAddFileIcon, ChatGIFIcon, ChatPresentIcon, ChatStickerIcon, SmileyFaceIcon } from "../../front_end_svgs/Strife_svgs";
// import { Tooltip } from "react-tooltip";
// import ServerMessagesIndexContainer from "../server_messages_index/server_messages_index_container";
// import WelcomeTextChannelMessageFirstMessageContainer from "../../channels/welcome_text_channel_first_message/welcome_text_channel_first_message_container";

// class ServerChatRoom extends React.Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             newMessage: this.props.newMessage,
//             channelMessages: this.props.messages,
//             channelMessageIds: this.props.messageIds,
//             value: '',
//             renderSkeleton: true,
//         }

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.subscription = "";
//         this.subscribe = this.subscribe.bind(this);
//         this.unsubscribe = this.unsubscribe.bind(this);
//         this.scrollToBottomOfChat = this.scrollToBottomOfChat.bind(this);
//         this.handleInput = this.handleInput.bind(this);
//         this.checkToDisable = this.checkToDisable.bind(this);
//         this.disabledText = this.disabledText.bind(this);
//         this.chatInputRef = React.createRef();
//         this.chatScrollerRef = React.createRef();
//         this.oLLSpacerRef = React.createRef();
//     }
//     componentDidMount () {
//         // if (this.props.match.params.channelId !== undefined) {
//         this.props.fetchChannel(this.props.channelId);
//         this.subscribe();
//         // }
//     }


//     //remove listening of subscription 
//     componentWillUnmount () {
//         this.subscription?.unsubscribe();
//     }


//     checkToDisable () {
//         return this.props.channel.channel_type === 2 || parseInt(this.props.serverId) === 1 ? true : false;
//     }

//     disabledText () {
//         if (parseInt(this.props.serverId) === 1) {
//             return 'You do not have permission to send messages in this channel.'
//         }
//         else if (this.props.channel_type === 2) {
//             return '$TR!F3 N!TR0 REQUIRED!'
//         }
//         return 'You do not have permission to send messages in this channel.'
//     }

//     scrollToBottomOfChat = (speed) => {
//         // let oLScrollerSpacer = document.querySelector(".ol-scroller-spacer");
//         // if (oLScrollerSpacer) {
//         //     oLScrollerSpacer.scrollIntoView({ behavior: speed });
//         // }
//         if (this.oLLSpacerRef?.current) {
//             this.oLLSpacerRef?.current.focus();
//             if (this.chatScrollerRef?.current) {
//                 this.chatScrollerRef.current.scrollTop = this.chatScrollerRef.current.scrollHeight;
//             }
//             this.oLLSpacerRef?.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
//             this.oLLSpacerRef?.current.scrollIntoView({ behavior: speed, block: 'end' });

//         }
//     }


//     unsubscribe () {
//         this.subscription?.unsubscribe();
//     }


//     subscribe () {

//         //plug the cable
//         const cable = createConsumer('ws://localhost:3000/cable'); // /cable mounts to local host that rails server is running on 
//         // const cable = createConsumer('wss://strife-v1.herokuapp.com/cable'); // /cable mounts to local host that rails server is running on
//         // const cable = createConsumer('wss://strife.onrender.com/cable');
//         this.subscription = cable.subscriptions.create(
//             { channel: 'StrifeServer', id: this.props.match.params.channelId },
//             {
//                 received: ({ message, head, path, type, channel, banned, bannedUser }) => {

//                     console.info(`%c INCOMING DATA after : `, "color:#05dc28", message, head, path, type, channel, banned, bannedUser);

//                     switch (type) {
//                         case 'RECEIVE_CHANNEL_MESSAGE':
//                             this.props.receiveMessage(message);
//                             break;
//                         case 'UPDATE_CHANNEL_MESSAGE':
//                             this.props.receiveMessage(message);
//                             break;
//                         case 'REMOVE_CHANNEL_MESSAGE':
//                             this.props.removeMessage(message.id);
//                             break;
//                         case "NEW_CHANNEL":
//                             console.info(`%c [$TR!FE SERVER_CHAT_ROOM M0N!T0R]: [NEW_CHANNEL]`, "color:#05dc28");
//                             this.props.fetchServer(this.props.serverId);
//                             break;
//                         case "UPDATE_CHANNEL":
//                             console.info(`%c [$TR!FE SERVER_CHAT_ROOM M0N!T0R]: [UPDATE_CHANNEL]`, "color:#05dc28");
//                             this.props.fetchServer(this.props.serverId);
//                             // if (channel.id === parseInt(this.props.match.params.channelId)) {
//                             //     console.info(`%c THIS CHANNEL WAS UPDATED WEBSOCKET_RECEIVE_CHANNEL_UPDATE : `, "color:#05dc28", channel);
//                             //     this.props.fetchChannel(this.props.match.params.channelId);
//                             // }
//                             // else{
//                             // }

//                             break;
//                         case "DELETE_CHANNEL":
//                             console.info(`%c [$TR!FE SERVER_CHAT_ROOM M0N!T0R]: [DELETE_CHANNEL]`, "color:#05dc28");
//                             if (this.props.history.location.pathname === `/$/channels/${this.props.server.id}/${channel.id}`) {
//                                 this.props.history.push(`/$/channels/${this.props.server.id}/${this.props.server.general_channel_id}`)
//                             }
//                             this.props.fetchServer(this.props.match.params.serverId)
//                             break;
//                         //members
//                         case "MEMBER_UPDATED":
//                             console.info(`%c [$TR!FE SERVER_CHAT_ROOM M0N!T0R]: [SERVER_MEMBER_UPDATED]`, "color:#05dc28");
//                             this.props.fetchServer(this.props.serverId);
//                             break;
//                         case "NEW_SERVER_MEMBER":
//                             console.info(`%c [$TR!FE SERVER_CHAT_ROOM M0N!T0R]: [NEW_SERVER_MEMBER]`, "color:#05dc28");
//                             this.props.fetchServer(this.props.serverId);
//                             break;
//                         case "SERVER_MEMBER_INJEXTION":
//                             console.info(`%c [$TR!FE SERVER_CHAT_ROOM M0N!T0R]: [SERVER_MEMBER_INJEXTION]`, "color:#05dc28");
//                             this.props.fetchServer(this.props.serverId);
//                             break;
//                         case "REMOVE_SERVER_MEMBER":
//                             console.info(`%c [$TR!FE SERVER_CHAT_ROOM M0N!T0R]: [REMOVE_SERVER_MEMBER]`, "color:#05dc28");
//                             this.props.reSyncCurrentUser(this.props.currentUserId).then((action) => {
//                                 let currUser = action.currentUser;
//                                 if (!currUser.serversJoined.includes(parseInt(this.props.serverId))) {
//                                     this.props.removeServer(this.props.server.id);
//                                     this.props.history.push('/$/$TR!F3-INTRUSION-PREVENTION/');
//                                 }
//                                 else {
//                                     this.props.fetchServer(this.props.server.id);
//                                 }
//                             })
//                             break;
//                         case "SERVER_SELF_DESTRUCTION":
//                             console.info(`%c [$TR!FE SERVER_CHAT_ROOM M0N!T0R]: [SERVER_SELF_DESTRUCTION]`, "color:#05dc28");
//                             if (head === 302 && path === '/$/telefrag/') {
//                                 this.props.history.push('/$/telefrag/');
//                             }
//                             break;
//                         default:
//                             console.warn(`%c[$TR!FE SERVER_CHAT_ROOM M0N!T0R]: %c[UNKNOWN REQUEST: ATTEMPTING TO RESYNC %c] %c@ [IN _SERVER_ROOM: [${this.props.serverId}] WITH CHANNEL SUB ROOM: [${this.props.channelId}]%c]`, "color:#00FD61;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;");
//                             this.props.fetchServer(this.props.server.id);
//                             this.props.fetchChannel(this.props.channelId);
//                     }

//                 },
//                 connected () {
//                     console.info(`%c CONNECTED TO CHANNEL ID :  `, "color:#05dc28");
//                 },

//                 disconnected () {
//                     console.info(`%c DISCONNECTED FROM CHANNEL ID: `, "color:#d91935");
//                 },
//             }
//         );

//     }

//     new_subscribe = () => {

//         //plug the cable
//         const cable = createConsumer('ws://localhost:3000/cable'); // /cable mounts to local host that rails server is running on 
//         // const cable = createConsumer('wss://strife-v1.herokuapp.com/cable'); // /cable mounts to local host that rails server is running on
//         // const cable = createConsumer('wss://strife.onrender.com/cable');
//         this.subscription = cable.subscriptions.create(
//             { channel: 'StrifeServer', id: this.props.match.params.channelId },
//             {
//                 received: ({ message, head, path, type, channel, banned, bannedUser }) => {

//                     console.log(`%c INCOMING DATA after : `, "color:#05dc28", message, head, path, type, channel, banned, bannedUser);


//                     switch (type) {
//                         //messagess
//                         case 'RECEIVE_CHANNEL_MESSAGE':
//                             console.log(`%c RECEIVE_CHANNEL_MESSAGE : `, "color:#05dc28", message);
//                             this.props.receiveMessage(message);
//                             break;
//                         case 'UPDATE_CHANNEL_MESSAGE':
//                             console.log(`%c RECEIVE_CHANNEL_MESSAGE : `, "color:#05dc28", message);
//                             this.props.receiveMessage(message);
//                             break;
//                         case 'REMOVE_CHANNEL_MESSAGE':
//                             console.log(`%c RECEIVE_CHANNEL_MESSAGE : `, "color:#05dc28", message);
//                             this.props.removeMessage(message.id);
//                             break;

//                         //channels and channel updates

//                         case 'WEBSOCKET_RECEIVE_CHANNEL':
//                             console.log(`%c RECEIVE_NEW_CHANNEL : `, "color:#05dc28", channel);
//                             // this.props.receiveMessage(message);
//                             // this.props.websocketRecieveChannel(channel);
//                             break;

//                         case 'WEBSOCKET_RECEIVE_CHANNEL_UPDATE':
//                             console.log(`%c WEBSOCKET_RECEIVE_CHANNEL_UPDATE : `, "color:#05dc28", channel);
//                             if (channel.id === parseInt(this.props.match.params.channelId)) {
//                                 console.log(`%c THIS CHANNEL WAS UPDATED WEBSOCKET_RECEIVE_CHANNEL_UPDATE : `, "color:#05dc28", channel);
//                                 this.props.fetchChannel(this.props.match.params.channelId);
//                             }
//                             break;

//                         case 'WEBSOCKET_REMOVE_CHANNEL':
//                             console.log(`%c RECEIVE_CHANNEL_MESSAGE : `, "color:#05dc28", message);
//                             if (this.props.history.location.pathname === `/$/channels/${this.props.server.id}/${channel.id}`) {
//                                 // this.props.history.push(`${this.props.server.general_channel_id}`)
//                                 this.props.history.push(`/$/channels/${this.props.server.id}/${this.props.server.general_channel_id}`)

//                             }
//                             this.props.fetchServer(this.props.match.params.serverId)
//                             this.props.receiveMessage(message);
//                             break;


//                         //server updates

//                         case 'WEBSOCKET_SERVER_UPDATE':
//                             console.log(`%c RECEIVE_CHANNEL_MESSAGE : `, "color:#05dc28", message);
//                             this.props.receiveMessage(message);
//                             break;
//                         case 'WEBSOCKET_REMOVE_SERVER':
//                             console.log(`%c RECEIVE_CHANNEL_MESSAGE : `, "color:#05dc28", message);
//                             this.props.receiveMessage(message);
//                             break;

//                         //server member updates
//                         case 'WEBSOCKET_SERVER_MEMBER_UPDATE':
//                             console.log(`%c WEBSOCKET_SERVER_MEMBER_UPDATE : `, "color:#05dc28", message);
//                             this.props.receiveMessage(message);
//                             break;
//                         case 'WEBSOCKET_ADD_NEW_SERVER_MEMBER':
//                             console.log(`%c WEBSOCKET_ADD_NEW_SERVER_MEMBER : `, "color:#05dc28", message);
//                             this.props.receiveMessage(message);
//                             break;
//                         case 'WEBSOCKET_RECEIVE_SERVER_MEMBER_INJEXTION':
//                             console.log(`%c WEBSOCKET_RECEIVE_SERVER_MEMBER_INJEXTION : `, "color:#05dc28", message);
//                             this.props.receiveMessage(message);
//                             break;
//                         case 'WEBSOCKET_REMOVE_SERVER_MEMBER':
//                             console.log(`%c WEBSOCKET_REMOVE_SERVER_MEMBER : `, "color:#05dc28", message);
//                             this.props.receiveMessage(message);
//                             break;
//                         default:
//                             console.log(`%c RECEIVE_CHANNEL_MESSAGE : `, "color:#05dc28", message);
//                             this.props.fetchServer(this.props.match.params.serverId);
//                             this.props.fetchChannel(this.props.match.params.channelId);
//                     }

//                     //refetch server id new channel is made or updated
//                     if (type === 'NewChannel' || type === 'UpdateChannel') {
//                         this.props.fetchServer(this.props.serverId);
//                     }
//                     // if channel is deleted redirect users to general channel if they are in that channel to be deleted
//                     if (type === 'DeleteChannel') {
//                         if (this.props.history.location.pathname === `/$/channels/${this.props.server.id}/${channel.id}`) {
//                             // this.props.history.push(`${this.props.server.general_channel_id}`)
//                             this.props.history.push(`/$/channels/${this.props.server.id}/${this.props.server.general_channel_id}`)

//                         }
//                         this.props.fetchServer(this.props.match.params.serverId)
//                     }



//                     // if member is add or currentuser updates visual attributes
//                     if (head === 100 || head === 101 || head === 1012) {
//                         this.props.fetchServer(parseInt(this.props.serverId));
//                     }
//                     //if member is deleted
//                     // if (head === 101) {

//                     //     this.props.reSyncCurrentUser(this.props.currentUserId).then((action) => {
//                     //         const curr_User = action.currentUser
//                     //         if (!curr_User.serversJoined.includes(parseInt(this.props.match.params.serverId))) {

//                     //                 this.props.removeServer(parseInt(this.props.match.params.serverId));
//                     //                 this.props.history.push('/$TR!F3-INTRUSION-PREVENTION/');
//                     //         }
//                     //         else {
//                     //             this.props.fetchServer(parseInt(this.props.match.params.serverId));
//                     //         }
//                     //     })
//                     // }

//                     if (head === 302 && path === '/$/telefrag/') {
//                         this.props.history.push('/$/telefrag/');
//                     }

//                     else {

//                         this.props.reSyncCurrentUser(this.props.currentUserId).then((action) => {
//                             let currUser = action.currentUser;
//                             if (!currUser.serversJoined.includes(parseInt(this.props.serverId))) {
//                                 this.props.removeServer(this.props.server.id);
//                                 this.props.history.push('/$/$TR!F3-INTRUSION-PREVENTION/');
//                             }
//                             else {
//                                 this.props.fetchServer(this.props.server.id);
//                             }

//                         })
//                     }
//                 },
//                 connected () {
//                     console.log(`%c CONNECTED TO CHANNEL ID :  `, "color:#05dc28");
//                 },

//                 disconnected () {
//                     console.log(`%c DISCONNECTED FROM CHANNEL ID: `, "color:#d91935");
//                 },
//             }
//         );

//     }

//     componentDidUpdate (prevProps, prevState) {
//         if (prevProps.messages[0] !== this.props.messages[0]) {
//             this.scrollToBottomOfChat("auto");
//         }
//         if (this.state.renderSkeleton === false) {
//             this.scrollToBottomOfChat("smooth");
//             this.scrollToBottomOfChat("auto");
//             setTimeout(() => {
//                 this.scrollToBottomOfChat("instant");
//             }, 1000);
//         }
//         if (this.props.messages.length > prevProps.messages.length) {
//             this.scrollToBottomOfChat("auto");
//             this.scrollToBottomOfChat("smooth");
//             setTimeout(() => {
//                 this.scrollToBottomOfChat("instant");
//             }, 1000);
//         }
//         if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
//             this.setState({ value: '', renderSkeleton: true })
//             this.props.fetchChannel(this.props.match.params.channelId)
//                 .then(() => { this.setState({ renderSkeleton: false }); this.scrollToBottomOfChat("smooth"); });
//             this.unsubscribe();
//             this.subscribe();
//             this.chatInputRef.current?.focus();
//         }

//     }


//     handleSubmit (e) {
//         e.preventDefault();
//         e.stopPropagation();
//         let messageBody = this.state.value;
//         if (messageBody.length === 0 || messageBody.replace(/\s/g, '').length === 0) { return; }
//         let modedMessage = {
//             body: messageBody.trim(),
//             author_id: this.props.currentUser.id,
//             channel_id: parseInt(this.props.match.params.channelId)
//         };
//         this.props.createMessage(modedMessage).then(() => {
//             this.setState({ value: '' });
//             this.scrollToBottomOfChat("instant");
//         });

//     }

//     handleInput (e) {
//         return (e) => { this.setState({ value: e.currentTarget.value }) }
//     }


//     render () {

//         const serverMembers = this.props.serverMembers;
//         //using a differnet approach than in dmservers as server state is not as sensitive and to try to increase 
//         //performance and reduce lag and  excessive memory allocation for unneed resources 
//         // let messageOLLIMapping = this.state.channelMessages.map((message, msgIdx) => {
//         let messageOLLIMapping = this.props.messages.map((message, msgIdx) => {
//             //attain member and their props directly from user/server members state and not from the  author info 
//             //attached to the message itself  in order to reduce slow downs
//             //if in order to stop corruption since the find funct returns undefined if something is not found  check to see if that id === 1
//             //  which indicates a bot message set that message id to the bot 
//             let member = serverMembers.find(member => member.id === message.author_id);
//             if (member === undefined) {
//                 member = Object.values(this.props.strifeBot)[0];
//             }
//             return (
//                 <ServerMessagesContainer
//                     key={message.id} serverId={this.props.match.params.serverId} serverMembers={this.props.serverMembers}
//                     message={message} messageAuthor={member} channelId={this.props.match.params.channelId}
//                     strifeBot={this.props.strifeBot} server={this.props.server} channel={this.props.channel}
//                     setRenderDeleteChannelMessage={this.props.setRenderDeleteChannelMessage}
//                     handleOpenSUOMM={this.props.handleOpenSUOMM} msgUpc={this.props.msgUpc}
//                     msgIdx={msgIdx} setMsgCtrlTTHover={this.props.setMsgCtrlTTHover}
//                     setMsgCtrlSRTTHover={this.props.setMsgCtrlSRTTHover}
//                     // channelMessages={this.state.channelMessages}
//                     channelMessages={this.props.messages}
//                 />
//             )
//         })

//         if (this.props.channel_type === 1) {
//             return (

//                 <main className="server-chat-container">
//                     <div className="messages-container-wrapper">
//                         <div className="chat-scroller auto-scroll-raw-attributes global-scroller-base disableScrollAnchor reactive-scroller" ref={this.chatScrollerRef}>
//                             <div className="chat-scroller-content">
//                                 {/* <ServerMessagesIndexContainer serverMembers={this.props.serverMembers} channelMessages={this.state.channelMessages}
//                                     loadingMessages={this.props.loadingMessages} setLoadingMessages={this.props.setLoadingMessages}
//                                     setMsgCtrlSRTTHover={this.props.setMsgCtrlSRTTHover}
//                                     setMsgCtrlTTHover={this.props.setMsgCtrlTTHover}
//                                     channelId={this.props.match.params.channelId}
//                                     serverId={this.props.match.params.serverId}
//                                     server={this.props.server} scrollToBottomOfChat={this.scrollToBottomOfChat}
//                                     channel={this.props.channel}
//                                     setRenderDeleteChannelMessage={this.props.setRenderDeleteChannelMessage}
//                                     handleOpenSUOMM={this.props.handleOpenSUOMM}
//                                     msgUpc={this.props.msgUpc}
//                                 /> */}
//                                 <ol className="chat-scroller-inner">
//                                     <WelcomeTextChannelMessageFirstMessageContainer currentChannel={this.props.channel} server={this.props.server} />
//                                     {messageOLLIMapping}
//                                     <div className="ol-scroller-spacer" ref={el => this.oLLSpacerRef.current = el} />
//                                 </ol>
//                             </div>
//                         </div>
//                     </div>

//                     <form className="chat-input-form" onSubmit={this.handleSubmit}>
//                         <div className="chat-input-text-area">
//                             <div className="chat-input-text-area-scroller chat-input-tsa-webkit-scroll">
//                                 <div className="inner-attach-button">
//                                     <div className="uploadinput">
//                                         <input type="file" className="file-input" disabled />
//                                     </div>
//                                     <div className="attach-wrapper">
//                                         <button type="button" className="attach-wrapper-button">
//                                             <div className="attach-wrapper-button-content">
//                                                 <ChatAddFileIcon />
//                                             </div>
//                                         </button>
//                                     </div>
//                                     <div className="inner-scroller-text-area">
//                                         <div>

//                                             <textarea
//                                                 value={this.state.value}
//                                                 onChange={this.handleInput()}
//                                                 className="server-message-chat-box-area"
//                                                 rows={this.state.value.split('\n').length}
//                                                 minLength={1}
//                                                 maxLength={2000}
//                                                 autoFocus
//                                                 ref={this.chatInputRef}
//                                                 onFocus={(e) => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
//                                                 placeholder={`${this.props.channel_type === 2 || parseInt(this.props.serverId) === 1 ?
//                                                     this.disabledText() : `Message #${this.props.channelName}`}`}
//                                                 spellCheck={false}
//                                                 disabled={this.props.channel_type === 2 || parseInt(this.props.serverId) === 1 ? true : false}
//                                                 onKeyDown={(e) => {
//                                                     if (e.key === 'Enter' && !e.shiftKey) {
//                                                         this.handleSubmit(e);
//                                                     }
//                                                 }}
//                                             />


//                                         </div>
//                                     </div>
//                                     <div className="inner-scroller-buttons">
//                                         <button type="button" className="send-gift-button">
//                                             <div className="chat-button-contents">
//                                                 <div className="chat-button-wrapper" data-tooltip-id={'thread-tip-server-chat-box'} data-tooltip-place="top" data-tooltip-position-strategy="fixed"
//                                                     data-tooltip-content={'Upgrade your friends! Gift them awesome chat perks with $TR!F3 N!TR0.'}>
//                                                     <ChatPresentIcon className="present-icon" />
//                                                 </div>
//                                             </div>
//                                         </button>
//                                         <div className="button-chat-input-wrap">
//                                             <button type="button" className="send-gift-button">
//                                                 <div className="chat-button-contents">
//                                                     <div className="chat-button-wrapper">
//                                                         <ChatGIFIcon className="icongif" />
//                                                     </div>
//                                                 </div>

//                                             </button>
//                                         </div>
//                                         <div className="button-chat-input-wrap">
//                                             <button type="button" className="send-gift-button">
//                                                 <div className="chat-button-contents">
//                                                     <div className="chat-button-wrapper">
//                                                         <ChatStickerIcon className="sticker-icon" />
//                                                     </div>
//                                                 </div>
//                                             </button>
//                                         </div>
//                                         <div className="button-chat-input-wrap">
//                                             <button type="button" className="send-gift-button happyface">
//                                                 <div className="chat-button-contents">
//                                                     <div className="chat-button-wrapper">
//                                                         <SmileyFaceIcon className="smiley-face-icon" />
//                                                     </div>
//                                                 </div>
//                                             </button>
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="chat-input-text-area-sticker">
//                             </div>
//                         </div>
//                     </form>
//                     <Tooltip className="thread-tool-tip" id="thread-tip-server-chat-box" place="top" closeOnResize={true} closeOnScroll={true} />
//                 </main>
//             )

//         }
//         //voice and video 
//         else if (this.props.channel_type === 2) {
//             return (

//                 <main className="server-chat-container">
//                     <div className="call-grid-wrapper">
//                         <div className="server-call-container">
//                             <div className="call-root">
//                                 <div className="call-flex">
//                                     <div className="call-room-scroller">
//                                         <div role={"list"} className="call-room-list">
//                                             <div className="call-room-members-row">
//                                                 <div className="call-room-member-card-title">
//                                                     <div className="call-room-member-card-outer">
//                                                         <div className="call-room-member-card-inner">
//                                                             <div className="call-room-member-card-wrapper">
//                                                                 <div className="call-room-member-title-wrapper">
//                                                                     <div className="call-room-member-title-child">
//                                                                         <div className="call-room-member-rt"></div>
//                                                                         <div className="crm-content">
//                                                                             <div className="crm-bk">
//                                                                                 avatar
//                                                                             </div>

//                                                                         </div>
//                                                                         <div className="crm-indicators"></div>
//                                                                         <div className="crm-overlay">
//                                                                             <div className="crm-med-text">
//                                                                                 <span className="crm-overlay-text">member name</span>
//                                                                             </div>
//                                                                             <div className="crm-status"></div>
//                                                                         </div>
//                                                                         <div className="crm-border"></div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="list-height"></div>
//                                         <div className="list-height2"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </main>

//             )
//         }
//     }

// }

// export default ServerChatRoom;