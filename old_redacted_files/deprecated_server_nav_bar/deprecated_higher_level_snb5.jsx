// import React from "react";
// import { Link } from 'react-router-dom';
// // import ReactTooltip from "react-tooltip";
// import { useState, useRef, useEffect } from "react";


// const ServerNavBar = (props) => {

//     useEffect(() => {
//         props.fetchUserServers(props.currentUser.id);
//     }, []);



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

//     let goHome = props.serverId === "@me" ? "selected-Server" : "unselected-Server";
//     let goGuild = props.serverId === "guild-discovery" ? "selected-Server" : "unselected-Server";
//     let activatedCreateServerModal = props.currentOpenModal === "createServerForm" ? "selected-Modal" : "unselected-Modal";
//     let activatedDownloadAppsModal = props.currentOpenModal === "downloadApps" ? "selected-Modal" : "unselected-Modal";

//     let userServer = props.servers.map((server, serverIndex) => {
//         let serverNavBarClassTag = props.serverId === server.id.toString() ? "selected-Server" : "unselected-Server";
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
//             <div className="server-bubbles" key={server.id} data-tip data-for={`server-bubble-tool-tip-${server.id}`} role='treeitem'>
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
//                 {/* <ReactTooltip
//                     className="server-nav-bar-tool-tip"
//                     textColor="#B9BBBE"
//                     backgroundColor="#191919"
//                     id={`server-bubble-tool-tip-${server.id}`}
//                     place="right"
//                     effect="solid">
//                     {server.server_name}
//                 </ReactTooltip> */}
//             </div>
//         )
//     }
//     )

//     return (
//         <nav className="server-nav-bar">
//             <ul className="server-tree" role="tree">

//                 <div className="server-tree-scroller global-scroll-none global-scroller-base" style={{ paddingRight: `0px`, overflow: `hidden scroll` }}>

//                     <div key="home-Bubbles" className="server-bubbles" data-tip data-for="home-page-server-tool-tip" role='treeitem'>
//                         <div className="server-tree-list-item">
//                             <Link id="purple-hover" className={`home-server ${goHome}`} to={`/$/channels/@me`}>
//                                 <div className="pill-box"><span className="pill-box-item"></span></div>
//                                 <svg className="home-Bubbles" aria-hidden="true" role="img" width="28" height="20" viewBox="0 0 28 20">
//                                     <path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 
//                                 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 
//                                 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 
//                                 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 
//                                 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 
//                                 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 
//                                 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 
//                                 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 
//                                 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 
//                                 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 
//                                 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973
//                                  18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 
//                                  13.6383Z">
//                                     </path>
//                                 </svg>
//                             </Link>
//                         </div>
//                         {/* <ReactTooltip
//                             className="server-nav-bar-tool-tip"
//                             textColor="#B9BBBE"
//                             backgroundColor="#191919"
//                             id="home-page-server-tool-tip"
//                             place="right"
//                             effect="solid"
//                         >
//                             Direct Messages
//                         </ReactTooltip> */}
//                     </div>

//                     <div className="server-tree-list-item" role='treeitem'>
//                         <div className="server-tree-list-item-seperator"></div>
//                     </div>
//                     {userServer}

//                     <div className="server-bubbles" key="createServer" data-tip data-for="add-a-server-tool-tip" role='treeitem'>
//                         <div className="server-tree-list-item">
//                             <button className={activatedCreateServerModal} id="create-server" onClick={() => renderModal('createServerForm')}>
//                                 <div id="fill-pill" className="pill-box"><span className="pill-box-item"></span></div>
//                                 <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                     <path fill="currentColor" d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z">
//                                     </path>
//                                 </svg>
//                             </button>
//                         </div>
//                         {/* <ReactTooltip
//                             className="add-a-server-nav-bar-tool-tip"
//                             textColor="#B9BBBE"
//                             backgroundColor="#191919"
//                             id="add-a-server-tool-tip"
//                             place="right"
//                             effect="solid">
//                             Add a Server
//                         </ReactTooltip> */}
//                     </div>
//                     <div className="server-bubbles" key="serverSearch" data-tip data-for="explore-public-servers-tool-tip" role='treeitem'>
//                         <div className="server-tree-list-item">
//                             <Link className={goGuild} to={`/$/channels/guild-discovery/`}>
//                                 <button id="search-servers">
//                                     <div id="fill-pill" className="pill-box"><span className="pill-box-item"></span></div>
//                                     <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                         <path fill="currentColor" d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 
//                                                             13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 
//                                                             2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 
//                                                             2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z">
//                                         </path>
//                                     </svg>
//                                 </button>
//                             </Link>
//                         </div>
//                         {/* <ReactTooltip
//                             className="server-nav-bar-explore-public-servers-tool-tip"
//                             textColor="#B9BBBE"
//                             backgroundColor="#191919"
//                             id="explore-public-servers-tool-tip"
//                             place="right"
//                             effect="solid">
//                             Explore Discoverable Servers
//                         </ReactTooltip> */}
//                     </div>

//                     <div className="server-tree-list-item" role='treeitem'>
//                         <div className="server-tree-list-item-seperator"></div>
//                     </div>


//                     <div className="server-bubbles" key="downloadApps" data-tip data-for="download-apps" role='treeitem'>
//                         <div className="server-tree-list-item">
//                             <button className={activatedDownloadAppsModal} id="download-apps" onClick={() => props.openModal('downloadApps')} >
//                                 <div id="fill-pill" className="pill-box"><span className="pill-box-item"></span></div>
//                                 <svg fill="currentColor" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
//                                     <path d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 
//                                      12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 
//                                      20V18H6V20H18Z">
//                                     </path>
//                                 </svg>
//                             </button>
//                         </div>
//                         {/* <ReactTooltip
//                             className="server-nav-bar-download-apps-tool-tip"
//                             textColor="#B9BBBE"
//                             backgroundColor="#191919"
//                             id="download-apps"
//                             place="right"
//                             effect="solid">
//                             Download Apps
//                         </ReactTooltip> */}
//                     </div>



//                     <div className="server-tree-list-seperator"></div>
//                 </div>
//             </ul>
//         </nav>
//     )
// }


// export default ServerNavBar;