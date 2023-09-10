// import React from "react";
// import { createConsumer } from "@rails/actioncable"
// import ServerMessagesContainer from "../server_messages/server_messages_container";
// import WelcomeTextChannelMessageFirstMessageContainer from "../../channels/welcome_text_channel_first_message/welcome_text_channel_first_message_container";
// import { ChatAddFileIcon, ChatGIFIcon, ChatPresentIcon, ChatStickerIcon, SmileyFaceIcon } from "../../front_end_svgs/Strife_svgs";
// import { Tooltip } from "react-tooltip";

// class ServerChatRoom extends React.Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             newMessage: this.props.newMessage,
//             channelMessages: this.props.messages,
//             channelMessageIds: this.props.messageIds,
//             value: '',

//         }

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.subscription = "";
//         this.subscribe = this.subscribe.bind(this);
//         this.unsubscribe = this.unsubscribe.bind(this);
//         this.scrollToBottomOfChat = this.scrollToBottomOfChat.bind(this);
//         this.handleInput = this.handleInput.bind(this);
//         this.handleEnter = this.handleEnter.bind(this);
//         this.formatTime = this.formatTime.bind(this);
//         this.checkToDisable = this.checkToDisable.bind(this);
//         this.disabledText = this.disabledText.bind(this);
//         this.chatInputRef = React.createRef();

//     }
//     componentDidMount () {
//         // this.props.fetchServer(this.props.serverId);

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
//         if (this.placeholder) {
//             this.placeholder.scrollIntoView({ behavior: speed });
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
//             { channel: 'StrifeServer', id: this.props.newMessage.channel_id },
//             {
//                 received: ({ message, head, path, type, channel, banned, bannedUser }) => {


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


//                     if (message !== undefined) {
//                         if (Object.values(message).length > 1) {
//                             if (this.state.channelMessageIds.includes(message.id.toString())) {
//                                 let messages = this.state.channelMessages;
//                                 let CHANNELMessagesCollection = new Array();
//                                 messages.forEach((msg) => {
//                                     if (msg.id === message.id) {
//                                         msg.body = message.body;
//                                     }
//                                     CHANNELMessagesCollection.push(msg);
//                                 })
//                                 //update the state 
//                                 this.setState({ ["channelMessages"]: CHANNELMessagesCollection });
//                             }
//                             else {

//                                 // message.authorName = this.props.server.users[message.author_id].username;
//                                 message.authorName = message.authorName;
//                                 message.author_id = message.author_id;
//                                 // //grab time stamps from the backend
//                                 let timeStamp = new Date(message.created_at)
//                                 let time = timeStamp.toLocaleTimeString();
//                                 let date = timeStamp.toLocaleDateString();
//                                 message.created_at = date + " " + time;
//                                 this.setState({ ["channelMessages"]: this.state.channelMessages.concat([message]) })
//                                 this.setState({ ["channelMessageIds"]: this.state.channelMessageIds.concat(message.id.toString()) })
//                             }
//                         }
//                         else {
//                             let channelMessages = this.state.channelMessages
//                             let filteredChannelMessages = channelMessages.filter(chMsg => chMsg.id !== message)
//                             this.setState({ ['channelMessages']: filteredChannelMessages });

//                         }
//                     }
//                 }
//             }
//         );

//     }



//     componentDidUpdate (prevProps, prevState) {
//         if (prevProps.messages[0] !== this.props.messages[0]) {
//             this.scrollToBottomOfChat("auto");
//         }

//         if (prevState.channelMessages.length < this.state.channelMessages.length) {
//             this.scrollToBottomOfChat("smooth");
//         }

//         if (prevProps.messages.length !== this.props.messages.length) {
//             // this.props.fetchChannel(this.props.match.params.channelId);
//             let channelMessages = this.props.messages;
//             let channelMessageIds = this.props.messageIds;
//             this.setState({ channelMessages });
//             this.setState({ channelMessageIds });
//         }



//         if (prevProps.messages.length > 0 && this.props.messages.length > 0 &&
//             prevProps.match.params.channelId === this.props.match.params.channelId) {
//             if (prevProps.messages[0].id !== this.props.messages[0].id) {
//                 this.props.fetchChannel(this.props.match.params.channelId);
//                 this.unsubscribe();
//                 this.subscribe();
//                 let channelMessages = this.props.messages;
//                 let channelMessageIds = this.props.messageIds;
//                 this.setState({ channelMessages });
//                 this.setState({ channelMessageIds });
//             }
//         }

//         if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
//             let newMessage = this.state.newMessage
//             newMessage.body = '';
//             newMessage.channel_id = this.props.match.params.channelId;
//             this.setState({ newMessage });
//             this.setState({ value: '' });
//             this.props.fetchChannel(this.props.match.params.channelId);
//             this.unsubscribe();
//             this.subscribe();
//             this.chatInputRef.current?.focus();
//             let channelMessages = this.props.messages;
//             let channelMessageIds = this.props.messageIds;
//             this.setState({ channelMessages });
//             this.setState({ channelMessageIds });

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

//         let messageBody = this.state.value;
//         if (messageBody.length === 0 || messageBody.replace(/\s/g, '').length === 0) { return; }
//         let modedMessage = this.state.newMessage;
//         modedMessage.body = messageBody.trim();
//         this.setState({ newMessage: modedMessage });
//         this.props.createMessage(this.state.newMessage);
//         modedMessage.body = ''
//         this.setState({ value: '', newMessage: modedMessage });

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


//     render () {
//         const serverMembers = this.props.serverMembers;
//         //using a differnet approach than in dmservers as server state is not as sensitive and to try to increase 
//         //performance and reduce lag and  excessive memory allocation for unneed resources 
//         let messageOLLIMapping = this.state.channelMessages.map((message) => {
//             //attain member and their props directly from user/server members state and not from the  author info 
//             //attached to the message itself  in order to reduce slow downs

//             //if in order to stop corruption since the find funct returns undefined if something is not found  check to see if that id === 1
//             //  which indicates a bot message set that message id to the bot 
//             let member = serverMembers.find(member => member.id === message.author_id);
//             // debugger
//             // console.log(`member pre if = ${member}`);
//             if (member === undefined) {

//                 // console.log(`member pre  = ${member}`);
//                 // console.log(`strigeBot  = ${this.props.strifeBot}`);

//                 member = Object.values(this.props.strifeBot)[0];
//                 // console.log(`member post = ${member}`);
//                 // console.table(member);
//             }
//             return (

//                 <ServerMessagesContainer
//                     key={message.id}
//                     strifeBot={this.props.strifeBot}
//                     currentUserId={this.props.currentUserId}
//                     message={message}
//                     messageAuthor={member}
//                     serverMembers={this.props.serverMembers}
//                     formatTime={this.formatTime}
//                     channelId={this.props.match.params.channelId}
//                     serverId={this.props.match.params.serverId}
//                     server={this.props.server}
//                     channel={this.props.channel}
//                     channelName={this.props.channelName}
//                     setRenderDeleteChannelMessage={this.props.setRenderDeleteChannelMessage}
//                     chatInputRef={this.chatInputRef}
//                     handleOpenSUOMM={this.props.handleOpenSUOMM}
//                     msgUpc={this.props.msgUpc}
//                 />
//             )
//         })


//         if (this.props.channel_type === 1) {
//             return (

//                 <main className="server-chat-container">
//                     <div className="message-wrapper">
//                         <div className="chat-scroller auto-scroll-raw-attributes global-scroller-base disableScrollAnchor reactive-scroller">
//                             <div className="chat-scroller-content">
//                                 <ol className="chat-scroller-inner">

//                                     <WelcomeTextChannelMessageFirstMessageContainer currentChannel={this.props.channel} server={this.props.server} />
//                                     <div className="chat-divider">
//                                         <span className="chat-divider-content"></span>
//                                     </div>

//                                     {messageOLLIMapping}

//                                     <div className="ol-scroller-spacer" ref={el => this.placeholder = el} />
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
//                                                     if (e.code === 'Enter' && !e.shiftKey) {
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