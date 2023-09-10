// import React from "react";
// import { useEffect, useState, useRef } from "react";
// import { createConsumer } from "@rails/actioncable"
// import DMMessageEditContainer from "../dms_message_and_edit_component/dm_message_edit_container";
// import DmChatFirstMessageContainer from "../dm_first_message/dm_first_message_container";
// import { ChatAddFileIcon, ChatGIFIcon, ChatPresentIcon, ChatStickerIcon, SmileyFaceIcon } from "../../front_end_svgs/Strife_svgs";
// import { useParams } from "react-router-dom";
// import { Tooltip } from "react-tooltip";
// import { usePrevious } from "@uidotdev/usehooks";

// const DmChatRoom3 = (props) => {
//     const dmParams = useParams();
//     const [newDmMessage, setNewDmMessage] = useState({});
//     const [DmMessages, setDmMessages] = useState([]);
//     const [dmMessagesIds, setDmMessagesIds] = useState([]);

//     // const [newDmMessage, setNewDmMessage] = useState(props.dmMessage);
//     // const [DmMessages, setDmMessages] = useState(props.DmMessages);
//     // const [dmMessagesIds, setDmMessagesIds] = useState(props.dmMessagesIds);


//     const [value, setValue] = useState("");
//     const [placeholderText, setPlaceHolderText] = useState("");
//     const chatInputRef = useRef();
//     const scrollRef = useRef();
//     const subscription = useRef("");


//     //component mounted
//     useEffect(() => {

//         console.log("%c Component mounted: ", "color:#008000");

//         // subscribe();
//         props.reSyncCurrentUser(props.currentUserId).then((action) => {
//             let currUser = action.currentUser;
//             if (!currUser.dmServersJoined.includes(parseInt(props.dmServerId))) {
//                 props.removeDmServer(props.dmServerId);
//                 // this.props.history.push('/$TR!F3-INTRUSION-PREVENTION/');
//                 return null;
//             }
//             // else {
//             // props.fetchDmServer(props.dmServerId);
//             // setDmMessages(props.DmMessages);
//             // setNewDmMessage(props.dmMessage);
//             // setDmMessagesIds(props.dmMessagesIds);
//             scrollToBottomOfChat("auto");
//             // renderPlaceHolder();

//             // }

//         })
//         return () => {
//             console.log("%c Component UNMOUNTED: ", "color:#FF0000");
//             unsubscribeFromCable();
//         };
//     }, []);


//     useEffect(() => {

//         props.fetchDmServer(props.dmServerId)
//         setDmMessages(props.DmMessages);
//         setNewDmMessage(props.dmMessage);
//         setDmMessagesIds(props.dmMessagesIds);
//         scrollToBottomOfChat("smooth");
//         renderPlaceHolder();
//         subscribeToCable();
//         chatInputRef?.current?.focus();
//         return () => {
//             console.log("%c Component UNMOUNTED: ", "color:#FF0000");
//             unsubscribeFromCable();
//         };
//     }, [dmParams.dmServerId])


//     //component updated (updates are seperated to reduce chance of incorrect updating )

//     useEffect(() => {

//         console.log("%c DM_MEMBERS LIST UPDATED: ", "color:#FFFF00");

//         renderPlaceHolder();
//         chatInputRef?.current?.focus();

//     }, [props.dmMembers.length]);


//     // component update for sstate values


//     // useEffect(() => {
//     //     console.log("%cnew dmMessgae has changed !", "color:#FF0000");
//     // }, [newDmMessage]);


//     // useEffect(() => {
//     //     console.log("%cnew dmMessagesIds / DmMessages has changed !", "color:#800080");
//     // }, [dmMessagesIds, DmMessages]);


//     useEffect(() => {

//         if (dmMessagesIds.length !== props.dmMessagesIds.length || DmMessages.length !== props.DmMessages.length) {
//             props.fetchDmServer(props.dmServerId);
//             let newDmMessages = props.DmMessages;
//             let newDmMessagesIds = props.dmMessagesIds;
//             setDmMessages(newDmMessages);
//             setDmMessagesIds(newDmMessagesIds)
//             scrollToBottomOfChat("smooth");
//         }


//     }, [props.dmMessagesIds, props.DmMessages, dmMessagesIds, DmMessages])



//     // useEffect(() => {
//     //     console.log("%cnew dmMessagesIds / DmMessages has changed in props modding state!", "color:#54e3f6");

//     //     if (dmMessagesIds.length !== props.dmMessagesIds.length) {
//     //         let newDmMessages = props.DmMessages;
//     //         let newDmMessagesIds = props.dmMessagesIds;
//     //         setDmMessages(newDmMessages);
//     //         setDmMessagesIds(newDmMessagesIds)
//     //         console.log(`%cdmMessagesIds.length====${dmMessagesIds.length} !== this.props.dmMessagesIds.length===== ${props.dmMessagesIds.length}`, "color:#cc00ff")
//     //     }
//     //     if (dmMessagesIds.length > 0 && props.dmMessagesIds.length > 0) {
//     //         console.log('%cinside prevProps.dmMessagesIds.length > 0 && this.props.dmMessagesIds.length > 0', "color:#ff944d");

//     //         if (DmMessages[0].id !== props.DmMessages[0].id) {
//     //             console.log('%cinside prevProps.DmMessages[0].id !== this.props.DmMessages[0].id', "color:#ff6600");

//     //             props.fetchDmServer(props.dmServerId)
//     //             unsubscribeFromCable();
//     //             subscribeToCable();
//     //             let newDmMessages = props.DmMessages;
//     //             let newDmMessagesIds = props.dmMessagesIds;
//     //             setDmMessages(newDmMessages);
//     //             setDmMessagesIds(newDmMessagesIds)
//     //         }
//     //     }



//     // }, [dmMessagesIds, DmMessages, props.dmMessagesIds, props.DmMessages]);





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

//         subscription?.current?.unsubscribe();
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
//                 received: ({ dm_message, head, path }) => {
//                     //boot individual member
//                     if (head === 401) {
//                     }
//                     if (head === 102) {
//                         props.fetchDmServer(props.dmServerId);
//                     }

//                     //active member in chat has update a visuaL comp
//                     if (head === 111) {
//                         // console.log("user has been updated")
//                         props.fetchDmServer(props.dmServerId);
//                         //trick compdid update


//                     }
//                     //this is to boot everyone when the dmserver is deleted
//                     if (head === 302 && path === '/$/telefrag/') {
//                         props.history.push(`/$/telefrag/`);
//                     }
//                     // else if(this.props.currentUserId !== this.props.dmServer.owner_id) {
//                     else {
//                         // ensure individual membership is maintained if not boot the user that fails this
//                         // condition
//                         props.reSyncCurrentUser(props.currentUserId).then((action) => {
//                             let currUser = action.currentUser;
//                             if (!currUser.dmServersJoined.includes(parseInt(props.dmServerId))) {
//                                 props.removeDmServer(props.dmServer.id);
//                                 props.history.push('/$/$TR!F3-INTRUSION-PREVENTION/');
//                             }
//                             else {

//                                 props.fetchDmServer(props.dmServer.id);
//                             }

//                         })
//                     }
//                     // this.props.receiveDmMessage(dm_message);
//                     // this.props.fetchDmServer(this.props.dmServerId);

//                     if (dm_message !== undefined) {
//                         if (Object.values(dm_message).length > 1) {
//                             if (dmMessagesIds.includes(dm_message.id.toString())) {
//                                 let dmMessages = DmMessages;
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
//                                 setDmMessages(DMMessagesCollection);
//                             }
//                             else {
//                                 //if there arent any messages in the dmserver set up for message creation
//                                 //get author name of message within this dmServer
//                                 dm_message.authorName = props.dmServer.members[dm_message.sender_id].username;
//                                 //rename it so that it can be editable
//                                 dm_message.sender_id = dm_message.sender_id;
//                                 //grab time stamps from the backend
//                                 let timeStamp = new Date(dm_message.created_at)
//                                 let time = timeStamp.toLocaleTimeString();
//                                 let date = timeStamp.toLocaleDateString();
//                                 dm_message.created_at = date + " " + time;

//                                 updateDmMessagesState(dm_message);
//                                 updateDmMessagesIdsState(dm_message);
//                                 scrollToBottomOfChat("smooth");
//                                 // this.setState({ ["DmMessages"]: this.state.DmMessages.concat([dm_message]) })
//                                 // this.setState({ ["dmMessagesIds"]: this.state.dmMessagesIds.concat(dm_message.id.toString()) })
//                             }
//                         }
//                         else {
//                             let dmMessages = DmMessages
//                             let filteredDmMessages = dmMessages.filter(dm => dm.id !== dm_message)
//                             // this.setState({ ['DmMessages']: filteredDmMessages });
//                             setDmMessages(filteredDmMessages);
//                         }
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
//         let modedMessage = newDmMessage;
//         modedMessage.body = dmMessagebody.trim();

//         // setNewDmMessage(modedMessage);
//         // props.createDmMessage(modedMessage);

//         console.log("sending message")
//         console.log(`new message contents = `);
//         console.table(newDmMessage);
//         console.log(`modded message contents = `);
//         console.table(modedMessage);

//         setNewDmMessage(modedMessage);
//         console.log(`new message contents state change = `);
//         console.table(newDmMessage);


//         props.createDmMessage(newDmMessage);
//         modedMessage.body = ''
//         setNewDmMessage(modedMessage);
//         setValue('');
//         console.log(`new message contents after sending and reseting state change = `);
//         console.table(newDmMessage);
//     }


//     const scrollToBottomOfChat = (speed) => {
//         if (scrollRef?.current) {
//             scrollRef?.current.scrollIntoView({ behavior: speed });
//         }
//     }



//     const formatTime = (timeOfCreation) => {
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
//         else {
//             formattedTime = `Today at ${formattedTime}`;
//         }
//         return formattedTime;
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


//     const oneToOneChatFirstMessage = () => {
//         const members = Object.values(props.dmMembers);
//         if (members.length === 2) {
//             const otherUser = members.find((user) => user.id !== props.currentUser.id)
//             return (
//                 <strong className="otherUser">@{`${otherUser.username}`}</strong>
//             )
//         }
//         else {
//             return null;
//         }
//     }
//     const renderGroupChatFirstMessage = () => {
//         const members = Object.values(props.dmMembers);
//         let groupMembers = new Array();
//         if (members.length > 2) {
//             for (let member of members) {
//                 if (member.id !== props.currentUser.id) {
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





//     const dmServerMembers = props.dmMembers;
//     let dmMessageOLLIMapping = DmMessages.map((dmMessage) => {
//         let member = dmServerMembers.find(member => member.id === dmMessage.sender_id)
//         if (member === undefined) {
//             member = Object.values(props.strifeBot)[0];
//         }
//         {
//             return (

//                 <DMMessageEditContainer
//                     dmMessageAuthor={member}
//                     dmMembers={props.dmMembers}
//                     currentUserId={props.currentUserId}
//                     currentUser={props.currentUser}
//                     dmMessage={dmMessage}
//                     renderGroupChatFirstMessage={renderGroupChatFirstMessage}
//                     oneToOneChatFirstMessage={oneToOneChatFirstMessage}
//                     formatTime={formatTime}
//                     dmServerId={props.dmServerId}
//                     key={dmMessage.id}
//                     strifeBot={props.strifeBot}
//                     setRenderDeleteDM={props.setRenderDeleteDM}
//                     handleOpenSUOMM={props.handleOpenSUOMM}
//                     msgUpc={props.msgUpc}
//                 />
//             )
//         }


//     })


//     return (
//         <main className="server-chat-container">
//             <div className="message-wrapper">
//                 <div className="chat-scroller auto-scroll-raw-attributes global-scroller-base disableScrollAnchor reactive-scroller">
//                     <div className="chat-scroller-content">
//                         <ol className="chat-scroller-inner">
//                             <DmChatFirstMessageContainer dmServer={props.dmServer} dmServerMembers={props.dmServerMembers} />
//                             <div className="chat-divider">
//                                 <span className="chat-divider-content"></span>
//                             </div>
//                             {dmMessageOLLIMapping}
//                             <div id="ol-scroller-spacer" className="ol-scroller-spacer" ref={el => scrollRef.current = el} />
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
//                                             if (e.code === 'Enter' && !e.shiftKey) {
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

// export default DmChatRoom3