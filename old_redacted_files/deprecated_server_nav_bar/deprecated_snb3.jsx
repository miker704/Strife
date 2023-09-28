// import React from "react";
// import { Link } from 'react-router-dom';
// import { useState, useRef, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { Tooltip } from "react-tooltip";
// import { AddRolePlusIcon, DownloadUpdateIcon, ExploreCompassIcon, WumpusIcon } from "../../front_end_svgs/Strife_svgs";

// const ServerNavBar = (props) => {
//     const globalParams = useParams();
//     const currentLocation = useLocation();
//     const [hovered, setHover] = useState(false);

//     useEffect(() => {
//         props.fetchUserServers(props.currentUser.id);
//     }, []);

//     // console.log("props server nav bar: ", props);

//     const renderModal = (modalName) => {
//         props.openModal(modalName);
//     }

//     const splitServerName = (serverName) => {
//         //if the server owner has given a server icon to there server set the servericon url to fill the 
//         //bubble instead of the name of the server
//         // const serverNameAcronym = serverIcon ? serverIcon : serverName.split(" ").map((parts) => parts[0]).join("");
//         // return serverNameAcronym;
//         let serverAcryo = serverName.split(" ").map((parts) => parts[0]).join("");
//         return serverAcryo.length > 5 ? serverAcryo.slice(0, 5) : serverAcryo;
//     }


//     const generateFontSize = (serverAcryoName) => {
//         if (serverAcryoName.length <= 2) {
//             return 18;
//         }
//         else if (serverAcryoName.length >= 3 && serverAcryoName.length <= 4) {
//             return 16;
//         }
//         else if (serverAcryoName.length === 5) {
//             return 14;
//         }
//         else if (serverAcryoName.length === 6) {
//             return 12;
//         }
//         else if (serverAcryoName.length >= 7) {
//             return 10;
//         }
//     }


//     // console.log("global params");
//     // console.log(globalParams);
//     // console.log('location : ');
//     // console.log(currentLocation);
//     // console.log("own props");
//     // console.log(props.match.params);
//     // console.log("props.serverId");
//     // console.log(props.serverId);




//     let goHome = props.serverId === "@me" || currentLocation.pathname === `/$/$T0R3/` ? "selected-Server" : "unselected-Server";
//     // let goGuild = props.serverId === "guild-discovery" || currentLocation.pathname === `/$/channels/guild-discovery/` ? "selected-Server" : "unselected-Server";

//     let goGuild = props.serverId === "guild-discovery" || currentLocation.pathname === `/$/guild-discovery/` ? "selected-Server" : "unselected-Server";


//     let activatedCreateServerModal = props.currentOpenModal === "createServerForm" ? "selected-Modal" : "unselected-Modal";
//     let activatedDownloadAppsModal = props.currentOpenModal === "downloadApps" ? "selected-Modal" : "unselected-Modal";

//     let userServer = props.servers.map((server, serverIndex) => {
//         // let serverNavBarClassTag = props.serverId === server.id.toString() ? "selected-Server" : "unselected-Server";
//         let serverNavBarClassTag = props.serverId === server.id.toString() ? "selected-Server" : server.server_Icon === undefined ? "unselected-Server": "unselected-Server sbNSA";
//         let serverAcryoName = splitServerName(server.server_name);

//         let serverAcryo = server.server_Icon === undefined ?
//             (
//                 <svg width="48" height="48" viewBox="0 0 48 48" className="purple-bubbles" >
//                     <defs>
//                         <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" >
//                         </path>
//                     </defs>
//                     <foreignObject x="0" y="0" width="48" height="48">
//                         <div className="bubble-wrap">
//                             <div className="server-Acryo" style={{ fontSize: `${generateFontSize(serverAcryoName)}px` }}>{serverAcryoName}</div>
//                         </div>
//                     </foreignObject>
//                 </svg>
//             ) : ("");

//         let serverIcon = server.server_Icon !== undefined ?
//             (<div className="bubble-wrap"><img className="bubble-img" src={server.server_Icon} alt=" " /></div>) : ("");


//         return (
//             <div className="server-bubbles" key={server.id} onMouseEnter={(e) => setHover(true)}
//                 onMouseLeave={(e) => setHover(false)}
//                 data-tooltip-id={`server-bubble-tool-tip-${server.id}`}
//                 data-tooltip-content={`${server.server_name}`}
//                 id={`server-bubble-tool-tip-${server.id}`} role='treeitem'>
//                 <div className="server-tree-list-item">
//                     <Link to={`/$/channels/${server.id}/${server.general_channel_id}`}
//                         onClick={() => props.fetchServer(server.id)}
//                         className={serverNavBarClassTag}
//                         id={`${server.server_Icon === undefined ? `purple-hover` : `no-purple`}`}>
//                         <div className="pill-box"><span className="pill-box-item"></span></div>
//                         {serverAcryo}
//                         {serverIcon}
//                         <div className="server-bubble-wrap-seperator-wrapper">
//                             <div className="server-bubble-target-top"></div>
//                             <div className="server-bubble-target-bottom"></div>
//                         </div>
//                     </Link>
//                 </div>
//             </div>
//         )
//     }
//     )


//     // console.log('server nav props');
//     // console.log(props);

//     return (
//         <nav className="server-nav-bar">
//             <ul className="server-tree" role="tree">

//                 <div className="server-tree-scroller global-scroll-none global-scroller-base" style={{ paddingRight: `0px`, overflow: `hidden scroll` }}>

//                     <div key="home-Bubbles" className="server-bubbles" data-tooltip-id={`server-bubble-tool-tip-home-bubble`} id={`server-bubble-tool-tip-home-bubble`}
//                         data-tooltip-content="Direct Messages" role='treeitem' onMouseEnter={(e) => setHover(true)}
//                         onMouseLeave={(e) => setHover(false)}>
//                         <div className="server-tree-list-item">
//                             <Link id="purple-hover" className={goHome} to={`/$/channels/@me`}>
//                                 <div className="pill-box"><span className="pill-box-item"></span></div>
//                                 <WumpusIcon className="home-Bubbles" />
//                             </Link>
//                         </div>
//                     </div>

//                     <div className="server-tree-list-item" role='treeitem'>
//                         <div className="server-tree-list-item-seperator"></div>
//                     </div>
//                     {userServer}
//                     <div className="server-bubbles" key="createServer" data-tooltip-id={`server-bubble-tool-tip-create-server`} id={`server-bubble-tool-tip-create-server`}
//                         data-tooltip-content="Add a Server" role='treeitem' onMouseEnter={(e) => setHover(true)}
//                         onMouseLeave={(e) => setHover(false)}>
//                         <div className="server-tree-list-item">
//                             <button className={activatedCreateServerModal} id="create-server" onClick={() => renderModal('createServerForm')}>
//                                 <div id="fill-pill" className="pill-box"><span className="pill-box-item"></span></div>
//                                 <AddRolePlusIcon />
//                             </button>
//                         </div>
//                     </div>
//                     <div className="server-bubbles" key="serverSearch" data-tooltip-id={`server-bubble-tool-tip-explore-servers`} data-tooltip-content="Explore Discoverable Servers"
//                         id={`server-bubble-tool-tip-explore-servers`} role='treeitem' onMouseEnter={(e) => setHover(true)}
//                         onMouseLeave={(e) => setHover(false)}>
//                         <div className="server-tree-list-item">
//                             {/* <Link className={goGuild} to={`/$/channels/guild-discovery/`}> */}
//                                 <Link className={goGuild} to={`/$/guild-discovery/`}>

//                                 <button id="search-servers">
//                                     <div id="fill-pill" className="pill-box"><span className="pill-box-item"></span></div>
//                                     <ExploreCompassIcon />
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>

//                     <div className="server-tree-list-item" role='treeitem'>
//                         <div className="server-tree-list-item-seperator"></div>
//                     </div>


//                     <div className="server-bubbles" key="downloadApps" data-tooltip-content="Download Apps" data-tooltip-id={`server-bubble-tool-tip-downloadApps`}
//                         id={`server-bubble-tool-tip-downloadApps`} role='treeitem' onMouseEnter={(e) => setHover(true)}
//                         onMouseLeave={(e) => setHover(false)}>
//                         <div className="server-tree-list-item">
//                             <button className={activatedDownloadAppsModal} id="download-apps" onClick={() => props.openModal('downloadApps')} >
//                                 <div id="fill-pill" className="pill-box"><span className="pill-box-item"></span></div>
//                                 <DownloadUpdateIcon />
//                             </button>
//                         </div>
//                     </div>
//                     <div className="server-tree-list-seperator"></div>
//                 </div>
//             </ul>


//             <Tooltip place="right" className="server-nav-bar-tool-tip" id="other-server-tool-tip" positionStrategy="fixed" closeOnScroll={true} closeOnResize={true} />
//             <Tooltip
//                 place="right"
//                 className="server-nav-bar-tool-tip"
//                 anchorSelect="[data-tooltip-id^='server-bubble-tool-tip-']"
//                 positionStrategy="fixed"
//                 closeOnResize={true}
//                 closeOnScroll={true}
//                 isOpen={hovered}
//                 render={({ content }) => (
//                     <div className="server-nav-bar-tool-tip-container">
//                         <div className="server-nav-bar-tool-tip-contents">
//                             <div className="server-nav-bar-tool-tip-data-contents">
//                                 {content}
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             />
//         </nav>

//     )
// }
// export default ServerNavBar;