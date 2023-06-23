//deprecated a long time ago replaced with functional component

// class DmServerHeaderNavBar extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             DmServerName: "",
//             oneToOneChat: false,
//             groupChat: false
//         }
//         this.handleDmServerName = this.handleDmServerName.bind(this);
//         this.handleDmServerName2 = this.handleDmServerName2.bind(this);

//         this.setDMServerName = this.setDMServerName.bind(this);
//         this.handleInput = this.handleInput.bind(this);
//     }

//     setDMServerName (name) {
//         return this.setState({ DmServerName: name });
//     }
//     handleInput (e) {

//         return (e) => { this.setState({ DmServerName: e.currentTarget.value }) };
//     }



//     componentDidMount () {
//         this.props.fetchDmServer(this.props.dmServerId);
//         // this.handleDmServerName();
//     }


//     handleDmServerName () {
//         let dmServerName = [];
//         let dmMembersInServer = Object.values(this.props.dmServerMembers);
//         if (dmMembersInServer.length > 2) {
//             document.getElementById("groupChat").classList.remove('is-hidden');
//             document.getElementById("groupchatname").classList.remove('is-hidden');
//             document.getElementById("hide-group-chat").classList.remove('is-hidden');
//             document.getElementById("normDm").classList.add('is-hidden');
//             document.getElementById("normal-chat").classList.add('is-hidden');
//         }
//         else if (dmMembersInServer.length === 2) {
//             document.getElementById("normDm").classList.remove('is-hidden');
//             document.getElementById("normal-chat").classList.remove('is-hidden');
//             document.getElementById("groupChat").classList.add('is-hidden');
//             document.getElementById("groupchatname").classList.add('is-hidden');
//             document.getElementById("hide-group-chat").classList.add('is-hidden');



//         }
//         // if(this.props.dmServer.dm_server_name === null || this.props.dmServer.dm_server_name === ""){
//         // for (let member of Object.values(this.props.dmServerMembers)) {
//         //     if (member.id !== this.props.currentUser.id) {
//         //         dmServerName.push(member.username);
//         //     }
//         // }
//         // if (dmServerName.length === 1) {
//         //     dmServerName = dmServerName.join();
//         // }
//         // else {
//         //     dmServerName = dmServerName.join(", ");
//         // }
//         // // }
//         // // this.setState({ dmServerName: dmServerName });

//         // return dmServerName;
//     }

//     handleDmServerName2 () {
//         let dmServerName = [];
//         let dmMembersInServer = Object.values(this.props.dmServerMembers);
//         for (let member of Object.values(this.props.dmServerMembers)) {
//             if (member.id !== this.props.currentUser.id) {
//                 dmServerName.push(member.username);
//             }
//         }
//         if (dmServerName.length === 1) {
//             dmServerName = dmServerName.join();
//         }
//         else {
//             dmServerName = dmServerName.join(", ");
//         }

//         return dmServerName;
//     }


//     render () {
//         let membersOfthisServer = Object.values(this.props.dmServerMembers);



//         return (
//             <div className="dm-server-header-bar">
//                 <div className="dm-server-bar-children">
//                     <div id="normDm" className={`dms-children-icon-wrapper ${membersOfthisServer.length > 2 ? "is-hidden" : ""}`}>
//                         <svg x="0" y="0" className="icon-at-sym" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                             <path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 
//                                                 22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 
//                                                 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4
//                                                 15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 
//                                                 13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6
//                                                 12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 
//                                                 16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 
//                                                 6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 
//                                                 10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 
//                                                 13.434 14.599 12 14.599Z">
//                             </path>
//                         </svg>
//                     </div>
//                     <div id="groupChat" className={`group-dm-chat-icon-wrapper ${membersOfthisServer.length < 3 ? "is-hidden" : ""}`}>
//                         <svg x="0" y="0" className="group-dm-chat-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10 
//                              12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 
//                                 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z">

//                             </path>
//                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10 
//                                     12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 
//                                     14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z">
//                             </path>
//                             <path fill="currentColor" d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 
//                                     14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z">
//                             </path>
//                             <path fill="currentColor" d="M14.8834 11.9077C16.6657 11.5044 18.0001 
//                                 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 
//                                 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 
//                                 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z">
//                             </path>
//                         </svg>
//                     </div>

//                     <div id="normal-chat" className={`dms-hbar-name ${membersOfthisServer.length > 2 ? "is-hidden" : ""}`}>
//                         <h3 className="dms-hbar-name-header">{this.handleDmServerName2()}</h3>
//                     </div>

//                     <div id="groupchatname" className={`group-chat-container ${membersOfthisServer.length < 3 ? "is-hidden" : ""}`}>
//                         <div className="outer-group-chat-name">
//                             <div className="inner-group-chat-container">
//                                 <input id="gni" className="group-name-input"
//                                     type="submit"
//                                     onInput={(e) => {
//                                             document.getElementById('ign').visibility === 'visible' ?
//                                             document.getElementById('ign').visibility = 'hidden' :
//                                             document.getElementById('ign').visibility = 'visible'

//                                     }}
//                                     onChange={this.handleInput()}
//                                     placeholder={this.handleDmServerName2()}
//                                     value={this.state.DmServerName}
//                                 />
//                                 <div id="ign" className="input-group-name">
//                                     {this.handleDmServerName2()}</div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="dms-member-online-status">

//                     </div>
//                     <div className="dmshb-spacer"></div>
//                     <div className="dmshb-tool-bar">


//                         <div className="dmshb-tool-icon-wrapper" data-tip data-for="start-voice-call" >
//                             <svg x="0" y="0" className="icon-phone" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11 5V3C16.515 3 21 7.486 21 13H19C19 
//                 8.589 15.411 5 11 5ZM17 13H15C15 10.795 13.206 9 11 9V7C14.309 7 17 9.691 17 13ZM11 11V13H13C13 
//                 11.896 12.105 11 11 11ZM14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22H13C6.925 
//                 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 
//                 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16Z">
//                                 </path>
//                             </svg>
//                             <ReactTooltip
//                                 className="start-voice-call-message-tool-tip"
//                                 textColor="#B9BBBE"
//                                 backgroundColor="#191919"
//                                 id="start-voice-call"
//                                 place="bottom"
//                                 effect="solid">
//                                 Start Voice Call
//                             </ReactTooltip>
//                         </div>
//                         <div className="dmshb-tool-icon-wrapper" data-tip data-for="start-video-call">
//                             <svg x="0" y="0" className="icon-webcall" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                 <path fill="currentColor" d="M21.526 8.149C21.231 7.966 20.862 7.951
//                  20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 
//                  7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 
//                  15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 
//                  15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z">
//                                 </path>
//                             </svg>
//                             <ReactTooltip
//                                 className="start-video-call-message-tool-tip"
//                                 textColor="#B9BBBE"
//                                 backgroundColor="#191919"
//                                 id="start-video-call"
//                                 place="bottom"
//                                 effect="solid">
//                                 Start Video Call
//                             </ReactTooltip>
//                         </div>
//                         <div className="dmshb-tool-icon-wrapper" data-tip data-for="pin-messages">
//                             <svg x="0" y="0" className="icon-pin-messages" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                 <path fill="currentColor" d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596
//                  8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 
//                  18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z">
//                                 </path>
//                             </svg>
//                             <ReactTooltip
//                                 className="pinned-messages-tool-tip"
//                                 textColor="#B9BBBE"
//                                 backgroundColor="#191919"
//                                 id="pin-messages"
//                                 place="bottom"
//                                 effect="solid">
//                                 Pinned Messages
//                             </ReactTooltip>
//                         </div>
//                         <div className="dmshb-tool-icon-wrapper" data-tip data-for="dmshb-invite-members">
//                             <svg x="0" y="0" className="icon-add-members" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 
//                 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13
//                  2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z">
//                                 </path>
//                             </svg>
//                             <ReactTooltip
//                                 className="dmshb-invite-members-tool-tip"
//                                 textColor="#B9BBBE"
//                                 backgroundColor="#191919"
//                                 id="dmshb-invite-members"
//                                 place="bottom"
//                                 effect="solid">
//                                 Add Friends to DM
//                             </ReactTooltip>
//                         </div>

//                         <div id="hide-group-chat" className={`dmshb-tool-icon-wrapper ${membersOfthisServer.length < 3 ? "is-hidden" : ""}`} data-tip data-for="hide-members-tip">
//                             <svg x="0" y="0" className="icon-hide-group-chat" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10
//                                      12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 
//                                      8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z">
//                                 </path>
//                                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 8.00598C14 10.211 
//                                     12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 
//                                     4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 
//                                     19.006V20.006H2V19.006Z">
//                                 </path>
//                                 <path fill="currentColor" d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697
//                                          14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z">
//                                 </path>
//                                 <path fill="currentColor" d="M14.8834 11.9077C16.6657 11.5044 18.0001 
//                                         9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 
//                                         5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 
//                                         11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z">
//                                 </path>
//                             </svg>
//                             <ReactTooltip
//                                 className="dmshb-hide-members-tool-tip "
//                                 textColor="#B9BBBE"
//                                 backgroundColor="#191919"
//                                 id="hide-members-tip"
//                                 place="bottom"
//                                 effect="solid">
//                                 Hide Member List
//                             </ReactTooltip>
//                         </div>
//                         <div className="dmshbar-search-bar-wrapper" >
//                             <div className="dmshbar-search-bar-inner-wrapper">
//                                 <div className="dmshbar-search-bar">
//                                     <div className="draft-edit">
//                                         <div className="public-draft-edit">
//                                             <div className="public-draft-edit-placeholder">Search</div>
//                                         </div>
//                                         <div className="public-draft-editor-container">
//                                             <div className="public-draft-editor-container-placeholder">
//                                                 <div className="data-contents">
//                                                     <div className="data-block">
//                                                         <div className="data-key-offset">
//                                                             <span className="data-key-offset2"></span>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="dmshbar-mag-icon-container">
//                                         <div className="mag-container">
//                                             <svg className="mag-icon-2-visible" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                 <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18
//                                          7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 
//                                          4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 
//                                          18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397
//                                           16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758
//                                            5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 
//                                            16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z">
//                                                 </path>
//                                             </svg>
//                                             <svg className="mag-icon-2" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                 <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 
//                                             13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
//                                                 </path>
//                                             </svg>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="dmshb-tool-icon-wrapper" data-tip data-for="inbox-messages-tip">
//                             <svg x="0" y="0" className="icon-dms-inbox" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                                 <path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21
//                          19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" fill="currentColor">
//                                 </path>
//                             </svg>
//                             <ReactTooltip
//                                 className="dmshb-inbox-message-tool-tip"
//                                 textColor="#B9BBBE"
//                                 backgroundColor="#191919"
//                                 id="inbox-messages-tip"
//                                 place="bottom"
//                                 effect="solid">
//                                 Inbox
//                             </ReactTooltip>
//                         </div>

//                         <a className="help-tool-bar" href="https://support.discord.com" target="_blank">
//                             <div className="help-tool-bar-icon-wrapper" data-tip data-for="help-messages-tip">
//                                 <svg x="0" y="0" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                     <path fill="currentColor" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515
//                              22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31
//                               15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13
//                                13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896
//                                 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z">
//                                     </path>
//                                 </svg>
//                                 <ReactTooltip
//                                     className="dmshb-help-tool-tip"
//                                     textColor="#B9BBBE"
//                                     backgroundColor="#191919"
//                                     id="help-messages-tip"
//                                     place="bottom"
//                                     effect="solid">
//                                     Help
//                                 </ReactTooltip>
//                             </div>
//                         </a>

//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }


// export default DmServerHeaderNavBar;