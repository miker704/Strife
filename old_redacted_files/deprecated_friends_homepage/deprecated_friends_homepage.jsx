//deprecated home dashboard page


// import React from "react";
// import FriendShipIndexContainer from "../friends_list/friends_list_container.js";
// import FriendShipIndexOnlineContainer from "../friends_list_online/friends_list_online_container.js";
// import BlockedListContainer from "../blocked_list/blocked_list_container.js";
// import PendingFriendListContainer from "../pending_list/pending_friends_list_container.js";
// import AddFriendsContainer from "../add_friends/add_friends_container.js";
// import default_User_PFP from "../../../../app/assets/images/discord_PFP.svg";
// import CreateDmModalHomeBarContainer from "../../dm_servers/create_new_dm_homebar_version/create_dm_homebar_container.js";



// class FriendsHomePageContainer extends React.Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             online: true,
//             All: false,
//             Pending: false,
//             Blocked: false,
//             Add_Friend: false,
//             createDmModal: false,
//             showPopUp: false,

//         }


//         this.handleClick = this.handleClick.bind(this);
//         this.renderAllFriendShips = this.renderAllFriendShips.bind(this);
//         this.renderAllFriendShipsOnline = this.renderAllFriendShipsOnline.bind(this);
//         this.renderBlockList = this.renderBlockList.bind(this);
//         this.renderPendingList = this.renderPendingList.bind(this);
//         this.renderAddFriend = this.renderAddFriend.bind(this);
//         this.resetForm = this.resetForm.bind(this);
//         this.openForm = this.openForm.bind(this);
//         this.handleESC = this.handleESC.bind(this);
//         this.setShowPopUp = this.setShowPopUp.bind(this);
//         this.randomActivityMessage = this.randomActivityMessage.bind(this);
//         this.randomFriendShuffle = this.randomFriendShuffle.bind(this);

//     }

//     setShowPopUp () {
//         this.setState({ showPopUp: !this.state.showPopUp });
//     }



//     handleESC (e) {
//         const keys = {
//             27: () => {
//                 e.preventDefault();
//                 window.removeEventListener('keyup', this.handleESC, false);

//             },
//         };
//         if (keys[e.keyCode]) {
//             keys[e.keyCode]();
//         }
//     }


//     componentDidMount () {
//         this.mounted = true;
//         // run probability algo to display update button
//         this.props.requestAllFriendships();
//         //attempt to resync any need data to avoid being booted out or access servers with revoked or new memberships
//         this.props.reSyncCurrentUser(this.props.currentUserId);
//         this.props.fetchUserDmServers(this.props.currentUserId);
//         this.props.fetchUserServers(this.props.currentUserId);

//     }

//     componentWillUnmount () {
//         this.mounted = false;
//         if (this.props.errors.length > 0) {
//             this.props.removeFriendshipErrors();
//         }
//         if (this.props.dmServerErrors.length > 0) {
//             this.props.removeDmServerErrors();
//         }

//     }


//     handleClick (formType) {
//         let formtypes = [
//             "online",
//             "All",
//             "Pending",
//             "Blocked",
//             "Add_Friend"
//         ];
//         for (let i of formtypes) {
//             this.resetForm(i);
//         }
//         this.openForm(formType);
//     }

//     resetForm (field) {
//         this.setState({ [field]: false })

//     }

//     openForm (field) {
//         this.setState({ [field]: true })

//     }

//     renderAllFriendShips () {
//         if (this.state.All === true) {
//             return (
//                 <FriendShipIndexContainer />
//             )
//         }
//     }

//     renderAllFriendShipsOnline () {
//         if (this.state.online === true) {
//             return (
//                 <FriendShipIndexOnlineContainer />
//             )
//         }
//     }

//     renderBlockList () {
//         if (this.state.Blocked === true) {
//             return (
//                 <BlockedListContainer />
//             )
//         }
//     }

//     renderPendingList () {
//         if (this.state.Pending === true) {
//             return (
//                 <PendingFriendListContainer />
//             )
//         }
//     }

//     renderAddFriend () {
//         if (this.state.Add_Friend === true) {
//             return (
//                 <AddFriendsContainer />
//             )
//         }
//     }






//     randomActivityMessage (user) {

//         const _AUTH_IDS = [1, 2, 3, 4]

//         const randomActivityMessages = [
//             'Playing Games.', 'Studying.', 'Listening to Spotify.', 'Playing Centipede.js.', 'Playing BlueStacks 5.0.', 'Playing Fortnite.',
//             'In a Group Call.', 'Eating Food.', 'Playing Paint-By-Numbers.', 'Playing Doom.', 'Playing Quake.', 'Playing BattleField.',
//             'Studying For an Upcoming App Academy Assessment.', 'Working on MERN Project With Partners.', 'Playing Call of Duty.',
//             'Playing Wolfenstein.', 'Playing Grand Theft Auto V.', 'Playing Roblox.', 'Studying for an Interview.',
//             'Studying Data Structures and Algorithms.', 'Playing Minecraft.', 'Playing League of Legends.', 'Playing Dota 2.',
//             'Playing Overwatch.', 'Playing Rocket League.', 'Playing Cyberpunk 2077.', 'Playing Monster Hunter - Iceborne.',
//             "Playing PlayerUnknown's Battlegrounds.", 'Playing ARK: Survival Evolved.', 'Playing Red Dead Redemption 2.',
//             'Playing Rainbow 6.', 'Playing Apex Legends.', 'Playing Destiny 2.', 'Playing Turok.', 'Playing Saints Row.',
//             'Playing Counter-Strike.', 'Playing World of Warcraft.', 'Playing Fall Guys.', 'Playing Among Us.',
//             'Playing Forza Horizon 5.', 'Playing Valorant.', 'Playing Bloodborne.', 'Playing Demon Souls.', 'Playing Elden Ring.',
//             'Playing Dark Souls.', 'Playing Borderlands.', 'Playing Yakuza.', 'Playing Tetris.', 'Playing Pac-Man.', 'Playing Face-Man.',
//             'Playing Tax-Man.', 'Playing Candy Crush.', 'Playing Halo.', 'Watching Anime.', 'Playing Angry Birds.',
//             'Playing DRAGON BALL Z: KAKAROT.', 'Playing Dead by Daylight.', 'Playing Portal 2.', 'Playing Half-Life.', 'Playing Cuphead.',
//             'Playing MultiVersus.', 'Playing For Honor.', 'Playing Far Cry 6.', 'Playing Crysis.', 'Playing Resident Evil 7.',
//             'Playing Dino Crisis.', "Playing Papers, Please.", 'Playing Carnivores.', 'Playing Jurassic World Evolution.',
//             'Playing Chasm: The Rift.', 'Playing Microsoft Flight Simulator.', 'Playing Genshin Impact.', 'Playing Super Mario 2.',
//             'Playing Team Fortress 2.', 'Playing Unreal Tournament.', 'Playing Blood.', 'Playing Duke Nukem.', 'Playing Serious Sam.',
//             'Playing Max Payne.', 'Playing Left 4 Dead 2.', 'Playing Dead Island.', 'Playing Planet Zoo.', 'Playing Alien Isolation.',
//             'Playing AMID EVIL.', 'Playing Super Castlevania IV.', "Playing Garry's Mod.", 'Playing Dusk.', 'Playing Super Mario Bros. 2.',
//             'Playing Plague Inc: Evolved.', 'Playing Monster Hunter Rise.', 'Playing Diablo III.', 'Playing Goat Simulator.',
//             'Playing The Elder Scrolls V: Skyrim.', 'Playing The Elder Scrolls IV: Oblivion.', 'Playing DOOM.', 'Playing DOOM ETERNAL.',
//             'Playing QUAKE CHAMPIONS.', 'Playing Call of Duty Warzone.', 'Playing Turok 2 - Seeds of Evil.', 'Playing Killing Floor 2.'
//         ]

//         if (_AUTH_IDS.includes(user.id) === true) {
//             return 'Beep..boo..doo..bop..boo-doo..beep...Monitoring $TR!F3'
//         }
//         else {
//             const msgIdx = Math.floor(Math.random() * randomActivityMessages.length);
//             return randomActivityMessages[msgIdx];
//         }

//     }

//     randomFriendShuffle (onlineFriends) {
//         const cut = Math.floor(Math.random() * (onlineFriends.length - 1) + 1)
//         const shuffle = [...onlineFriends].sort(() => Math.floor(0.5 - Math.random()));
//         return shuffle.slice(0, cut);
//     }


//     render () {
//         const rendered_User_PFP = default_User_PFP;
//         const onlineFriends = this.props.onlineFriends;
//         const randomFriendShuffleArray = onlineFriends.length ? this.randomFriendShuffle(onlineFriends) : null;
//         //lets shuffle this a bit maybe not all of out online friends are doing stuff
//         const onlineActivityMap = onlineFriends.length ? randomFriendShuffleArray.map((friend, idx) => {
//             return (
//                 <li id="fii" className="activity-online-friend-idx" key={friend.id} >

//                     <div className="friend-index-item-wrapper-inner">
//                         <div className="friend-account-info-wrapper-super">

//                             <div className={`${friend.photo === undefined ?
//                                 `user-pfp-svg-render color-${friend.color_tag}` : `friend-info`}`}>
//                                 <img src={`${friend.photo === undefined ? rendered_User_PFP : friend.photo}`} alt="pfp" />
//                             </div>
//                             <div className={`${friend.online ? "circle-online-1" : "circle-offline-1"}`}></div>

//                             <div className="friend-account-info-wrapper">
//                                 <div className="friend-account-info">
//                                     <div className="friend-tag">
//                                         {friend.username}
//                                         <span>#{friend.strife_id_tag}</span>
//                                     </div>
//                                 </div>
//                                 <div className="subtext">
//                                     <div className="subtext-inner">
//                                         {this.randomActivityMessage(friend)}
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </li>
//             )
//         }) : ("");



//         return (
//             <div className="home-nav-bar-container">

//                 <div className="home-nav-bar-container-inner-wrapper">

//                     <div className="home-nav-bar">
//                         <div className="home-nav-bar-children">
//                             <div className="home-friends-icon-wrapper">
//                                 <svg className="home-friends-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                     <g fill="none" fillRule="evenodd">
//                                         <path fill="currentColor" fillRule="nonzero"
//                                             d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 
//                                                 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 
//                                                 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 
//                                                 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)">
//                                         </path>
//                                         <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 
//                                                 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z">
//                                         </path>
//                                     </g>
//                                 </svg>
//                             </div>
//                             <div className="home-nav-bar-friends-title-wrapper">
//                                 <h1 className="home-nav-bar-title-text">Friends</h1>
//                             </div>
//                             <div className="home-friend-divider"></div>
//                             <div className="friends-tab-list">
//                                 <div onClick={() => this.handleClick("online")} className={`online-tab ${this.state.online ? "selected" : ""}`}>Online</div>
//                                 <div onClick={() => this.handleClick("All")} className={`all-tab ${this.state.All ? "selected" : ""}`}>All</div>
//                                 <div onClick={() => this.handleClick("Pending")} className={`pending-tab ${this.state.Pending ? "selected" : ""}`}>Pending</div>
//                                 <div onClick={() => this.handleClick("Blocked")} className={`blocked-tab ${this.state.Blocked ? "selected" : ""}`} >Blocked</div>
//                                 <div onClick={() => this.handleClick("Add_Friend")} className={`add-friend-tab ${this.state.Add_Friend ? "selected" : ""}`} ><span>Add Friend</span></div>

//                             </div>
//                         </div>
//                         {this.state.showPopUp && <CreateDmModalHomeBarContainer setShowPopUp={this.setShowPopUp} topBar={true} />}
//                         <div className="home-nav-tool-bar">


//                             <div className="invite-tool-bar">
//                                 <div className="home-nav-tool-bar-icon-wrapper" id="itbgdm">
//                                     <svg className="invite-tool-bar-group-dm-icon" onClick={() => this.setShowPopUp()} x="0" y="0" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                         <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M20.998 0V3H23.998V5H20.998V8H18.998V5H15.998V3H18.998V0H20.998ZM2.99805
//                                          20V24L8.33205 20H14.998C16.102 20 16.998 19.103 16.998 18V9C16.998 7.896 16.102 7 14.998 7H1.99805C0.894047 7 -0.00195312 7.896 
//                                          -0.00195312 9V18C-0.00195312 19.103 0.894047 20 1.99805 20H2.99805Z">
//                                         </path>
//                                     </svg>
//                                     <div className="home-bar-tool-tip">New Group DM</div>
//                                     <div className="home-bar-tool-tip-triangle"></div>
//                                 </div>
//                                 <div className="home-friend-divider"></div>
//                             </div>

                    

//                             <div className="inbox-tool-bar">
//                                 <div className="home-nav-tool-bar-icon-wrapper">
//                                     <svg className="inbox-tool-bar-icon" x="0" y="0" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                                         <path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 
//                                     19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" fill="currentColor">
//                                         </path>
//                                     </svg>
//                                 </div>
//                                 <div className="home-bar-tool-tip">Inbox</div>
//                                 <div className="home-bar-tool-tip-triangle"></div>
//                             </div>
//                             <a className="help-tool-bar" href="https://support.discord.com" target="_blank" rel="noreferrer noopener">
//                                 <div className="help-tool-bar-icon-wrapper">
//                                     <svg className="help-tool-bar-icon" x="0" y="0" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                         <path fill="currentColor" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515
//                                      22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31
//                                       15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13
//                                        13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896
//                                         10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z">
//                                         </path>
//                                     </svg>
//                                     <div className="home-bar-tool-tip">Help</div>
//                                     <div className="home-bar-tool-tip-triangle"></div>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="friends-page-content-wrapper">
//                         <div className="friend-list-sec-container">
//                             {this.renderAllFriendShips()}
//                             {this.renderAllFriendShipsOnline()}
//                             {this.renderBlockList()}
//                             {this.renderPendingList()}
//                             {this.renderAddFriend()}
//                             <div className="active-now-section-wrapper">
//                                 <div className="active-now-section">
//                                     <div className="active-now-section-scroller">
//                                         <div className="active-now-header"><h2>Active Now</h2></div>
//                                         <div className="empty-card">
//                                             <h2 className={`empty-card-header ${onlineFriends.length === 0 ? `` : `is-hidden`}`}>It's quiet for now...</h2>
//                                             <div className={`empty-card-text ${onlineFriends.length === 0 ? `` : `is-hidden`}`}>
//                                                 When a friend starts an activity—like playing a game or hanging out on voice—we’ll show it here!
//                                             </div>
//                                             <div className={`friend-index activl ${onlineFriends.length === 0 ? `is-hidden` : ``}`}>
//                                                 <div className={`friend-index-item-wrapper ${onlineFriends.length === 0 ? `is-hidden` : ``}`} >
//                                                     <ul>{onlineActivityMap}</ul>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="empty-card-div"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         )
//     }


// }

// export default FriendsHomePageContainer;
