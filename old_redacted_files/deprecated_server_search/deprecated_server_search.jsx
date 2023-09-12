// import React from "react";
// import { useEffect, useRef, useState } from "react";
// import ExploreServersNavBar from "./server_search_nav_bar";
// import ActionButtonPopUpContainer from "./action_button_pop_up_container";
// import { ExploreServersSearchXIcon, OverFlowEllipsisIcon, SearchMagIcon, VerifiedCheckIcon, VerifiedStarIcon } from "../../front_end_svgs/Strife_svgs";
// import { Tooltip } from "react-tooltip";

// const ExploreServers = (props) => {

//     useEffect(() => {
//         // props.exploreServers();
//         props.exploreServers(props.currentUserId);
//         return function cleanUp () {
//             if (props.errors.length > 0) {
//                 props.removeServerErrors();
//             }
//             props.clearUnexploredServers();
//         }
//     }, []);

//     const inputRef = useRef();
//     const [searchText, setSearchText] = useState("");
//     const [showPopUp, setShowPopUp] = useState(false);
//     const [popUpLeft, setPopupLeft] = useState(0);
//     const [selectedServer, toggleSelectedServer] = useState([]);
//     const [selectedServerLink, setSelectedServerLink] = useState('');
//     const [hovered, setHover] = useState(false);

//     const handleSelectedServerLink = (server) => {
//         setSelectedServerLink(server.invite_code);
//     }


//     const handleSelected = (server) => {
//         toggleSelectedServer(server);
//     }

//     const handlePopupShow = (e) => {
//         // check for screen resolution type in order to display the action pop up in the right position
//         // let currLeft = e.currentTarget.getBoundingClientRect().left;
//         // const realWidth = window.screen.width * window.devicePixelRatio;
//         // const realHeight = window.screen.height * window.devicePixelRatio;

//         // if (realWidth >= 3800 && realHeight >= 2100) {
//         //     currLeft = 50;
//         // }
//         // else {
//         //     currLeft = 125;
//         // }
//         // setPopupLeft(currLeft);
//         setShowPopUp(!showPopUp);
//     }


//     const renderActionPopUpContainer = () => {
//         if (showPopUp === true) {
//             return (
//                 <ActionButtonPopUpContainer serverLink={selectedServerLink} setShowPopUp={setShowPopUp} left={popUpLeft} />
//             )
//         }
//     }


//     const liveSearch = () => {
//         let allServers = document.querySelectorAll('.loaded-guilds');
//         let search_query = document.getElementById('all-servers').value;
//         let count = 0;
//         for (let i = 0; i < allServers.length; i++) {
//             if (allServers[i].innerText.toLowerCase().includes(search_query.toLowerCase())) {
//                 allServers[i].classList.remove("is-hidden");

//             }
//             else {
//                 allServers[i].classList.add("is-hidden");
//                 count++;
//             }
//         }

//         if (count === allServers.length) {
//             document.getElementById('gls').classList.add('is-hidden')
//             document.getElementById('no-match').classList.remove('is-hidden')
//         }
//         else {
//             document.getElementById('no-match').classList.add('is-hidden')
//             document.getElementById('gls').classList.remove('is-hidden')
//         }

//     }
//     const resetSearch = () => {
//         setSearchText("");
//         document.getElementById("all-servers").value = "";
//         liveSearch();
//     }

//     const splitServerName = (serverName) => {
//         let serverAcryo = serverName.split(" ").map((parts) => parts[0]).join("");
//         return serverAcryo.length > 5 ? serverAcryo.slice(0, 5) : serverAcryo;
//     }

//     // const filterOutPrivateServers = Object.values(props.unExploredServers)
//     //     .filter((server) => server.public === true)
//     //     .filter((server) => Object.values(props.servers).find(sv => sv.id === server.id) === undefined)

//     const checkIfJoinedServer = (server) => {
//         let serverMembers = Object.values(server.users);
//         return serverMembers.find((member) => member.id === props.currentUser.id) ? true : false;
//     }
//     const checkIfPrivateServer = (server) => {
//         return server.public;
//     }

//     const getColorId = (server) => {
//         let serverMembers = Object.values(server.users);
//         let serverOwner = serverMembers.find((member) => member.id === server.server_owner_id);
//         return serverOwner.color_tag;
//     }


//     const joinThisServer = (server) => {
//         const serverSubState = {
//             id: server.id,
//             user_id: props.currentUser.id,
//             server_name: server.server_name

//         }
//         props.joiningServer(server.invite_code).then((action) => {
//             const joinedServer = action.server;
//             props.reSyncCurrentUser(props.currentUserId).then(() => {
//                 props.history.push(`/$/channels/${joinedServer.id}/${joinedServer.general_channel_id}`)

//             })
//         })
//     }


//     const unExploredServers = Object.values(props.unExploredServers).map((server) => {
//         const serverMembers = Object.values(server.users);
//         const onlineServerMembers = serverMembers.filter((member) => member.online === true);
//         const checkIfJoined = checkIfJoinedServer(server);
//         const color_tag = getColorId(server);
//         const publicServer = checkIfPrivateServer(server);
//         const serverAcryo = server.server_Icon === undefined ?
//             (
//                 <svg width="100" height="100" viewBox="0 0 48 48" className="purple-icon-bk" fill="currentColor">
//                     <defs>
//                         <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" >
//                         </path>
//                     </defs>
//                     <foreignObject x="0" y="0" width="48" height="48">
//                         <div className="bubble-wrap-bk" >
//                             <div className="server-Acryo-bk" >{splitServerName(server.server_name)}</div>
//                         </div>
//                     </foreignObject>
//                 </svg>
//             ) : ("");
//         const serverPFP = server.server_Icon !== undefined ?
//             (
//                 <img className="guild-card-splash-img" src={server.server_Icon} alt=" " />
//             ) : ('');

//         const serverAcryoIcon = server.server_Icon === undefined ?
//             (
//                 <svg width="48" height="48" viewBox="0 0 48 48" className="purple-bubbles" fill="currentColor">
//                     <defs>
//                         <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" >
//                         </path>
//                     </defs>
//                     <foreignObject x="0" y="0" width="48" height="48">
//                         <div className="bubble-wrap-guild" >
//                             <div className="server-Acryo-guild" >{splitServerName(server.server_name)}</div>
//                         </div>
//                     </foreignObject>
//                 </svg>
//             ) : ("");
//         const serverPFPIcon = server.server_Icon !== undefined ?
//             (
//                 <img className="guildIcon-img" src={server.server_Icon} alt=" " />
//             ) : ('');


//         return (
//             <div className="loaded-guilds" key={server.id}>
//                 <div className="guild-card">
//                     <div className="guild-card-header">
//                         <div className="guild-card-splash">
//                             {serverAcryo}
//                             {serverPFP}
//                         </div>
//                         <div className="action-buttons-layer">
//                             <div className="action-buttons-container">
//                                 <div className="action-buttons-wrapper">
//                                     <div className="action-button" data-tooltip-place="top" data-tooltip-id="thread-tip-exsp" data-tooltip-content={'More'}
//                                         onClick={(e) => {
//                                             handleSelectedServerLink(server);
//                                             handleSelected(server)
//                                             handlePopupShow(e, server.id);
//                                         }}>
//                                         <OverFlowEllipsisIcon className="action-button-icon" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="guildIcon">
//                             {serverAcryoIcon}
//                             {serverPFPIcon}
//                         </div>
//                     </div>
//                     {showPopUp && selectedServer.id === server.id && <ActionButtonPopUpContainer serverLink={selectedServerLink} setShowPopUp={setShowPopUp} left={popUpLeft} />}
//                     <div className="guild-card-info">
//                         <div className="guild-card-title">
//                             <div className={`guild-card-star fill-color-${color_tag}`} data-tooltip-place="top" data-tooltip-id="thread-tip-exsp" data-tooltip-content={'Verified'}>
//                                 <VerifiedStarIcon className="guild-card-star-icon" />
//                                 <div className="guild-card-child-container">
//                                     <VerifiedCheckIcon className="guild-card-star-icon-2" />
//                                 </div>
//                             </div>
//                             <h4 className="guild-card-h4-title">{server.server_name}</h4>
//                         </div>
//                         <div className="guild-card-text">
//                             The official server for {server.server_name}, click to join now!
//                         </div>
//                         <div className="flex-to-end" data-tooltip-place="top" data-tooltip-content={'Private Server Join Via Invite'}
//                             data-tooltip-id={`${checkIfJoined === true ? `` : publicServer === false ? "thread-tip-exsp" : ``}`}>
//                             <button type="button"
//                                 className="faint-boost-shiny-button join-server"
//                                 disabled={checkIfJoined === true ? true : publicServer === false ? true : false}
//                                 onClick={() => {
//                                     joinThisServer(server);
//                                 }}>
//                                 <div className="shiny-button-contents">
//                                     {`${checkIfJoined === true ? `Server Joined` : publicServer === false ? `Private Server` : `Join Server`}`}
//                                     <div className="shiny-button-container">
//                                         <div className="shiny-button-flex">
//                                             <div className="shiny-button-inner"></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </button>
//                         </div>
//                         <div className="guild-card-member-info">
//                             <div className="guild-card-member-count">
//                                 <div className="guild-card-member-online-status"></div>
//                                 <div className="guild-card-member-count-txt">
//                                     {onlineServerMembers.length}{` `}Online
//                                 </div>
//                             </div>
//                             <div className="guild-card-member-count">
//                                 <div className="guild-card-member-offline-status"></div>
//                                 <div className="guild-card-member-count-txt">
//                                     {serverMembers.length}{` `}Members
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     })


//     return (

//         <div className="server-main-base">
//             <div className="explore-server-base">
//                 <ExploreServersNavBar />
//                 <div className="explore-server-page-wrapper">
//                     <div className="exs-drag-region"></div>
//                     <div className="exs-main-content-scroller-base auto-scroll-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `16px` }}>
//                         <div className="exs-view-wrapper">
//                             <div className="exs-searchHeader">
//                                 <img className="exs-searchImg" alt=" " />
//                                 <div className="exs-header-content-wrapper">
//                                     <div className="exs-header-content">
//                                         <h3 className="exs-search-title">Find Your Community on $TR!F3</h3>
//                                         <div className="exs-search-subtitle">
//                                             From gaming, to music, to learning, there's a place for you.
//                                         </div>
//                                         <div className="exs-search-content">
//                                             <div className="exs-search">
//                                                 <div className="exs-search-box">
//                                                     <div className="exs-search-input-wrapper">
//                                                         <input
//                                                             className="exs-search-input"
//                                                             type="search"
//                                                             id="all-servers"
//                                                             placeholder="Explore communities"
//                                                             autoFocus={true}
//                                                             ref={inputRef}
//                                                             spellCheck={false}
//                                                             maxLength={100}
//                                                             autoComplete="off"
//                                                             onInput={() => liveSearch()}
//                                                             onChange={(e) => setSearchText(e.currentTarget.value)}
//                                                             value={searchText}
//                                                         />

//                                                     </div>

//                                                     {
//                                                         searchText.length === 0 ? (
//                                                             <SearchMagIcon className={`exs-search-icon`} />
//                                                         ) : (
//                                                             <div className={`clear-exs-search-icon`} onClick={(e) => resetSearch()}>
//                                                                 <ExploreServersSearchXIcon className="clear-exs-icon close-exs-icon" />
//                                                             </div>
//                                                         )
//                                                     }

//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="exs-search-subtitle-2">
//                                             Click to Join a Public Server, to Join a Private Server
//                                             You must attain an Invite Link by the Server Owner or its Members.
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div>

//                                 <div id="no-match" className="epssc-flex is-hidden">
//                                     <div className="empty-server-state-container">
//                                         <div className="no-servers-found-img"></div>
//                                         <h3 className="epssc-h3">No Results Found for{` `}{searchText}</h3>
//                                         <div className="epssc-st">Try searching for something else.</div>
//                                     </div>
//                                 </div>


//                                 <section className="guildListSection" id="gls">
//                                     <h3 className="gls-h3">Featured communities</h3>
//                                     <div className="guild-list">
//                                         {unExploredServers}
//                                     </div>
//                                 </section>
//                             </div>
//                             <div className="explore-servers-footer-bar-container">
//                                 <img className="explore-server-footer-bar-img" alt=" " />
//                                 <h2 className="exp-srv-footer-bar-header-2">There are more communities out there!</h2>
//                                 <button type="button" className="exp-srv-footer-bar-button">
//                                     <div className="exp-srv-footer-bar-button-contents">Try searching for them.</div>
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="exp-srv-footer-bar-sep"></div>
//                     </div>
//                     <Tooltip className="thread-tool-tip" id="thread-tip-exsp" place="top" closeOnResize={true} closeOnScroll={true} />
//                 </div>
//             </div>
//         </div>

//     )

// }

// export default ExploreServers;