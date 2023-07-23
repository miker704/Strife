// import React from "react";
// import { Link } from "react-router-dom";
// import mini_strife_logo from "/app/assets/images/Strife_logo_compressed.png";

// class Splash extends React.Component {

//     constructor (props) {
//         super(props);

//     }
//     render () {

//         return (
//             <div id="splash-home">

//                 <div id="splash-banner">

//                     <div id="banner-grid">

//                         <div id="banner-message">


//                             <h1 id="intro-header">IMAGINE A PLACE...</h1>
//                             <p id="intro_p_text">...where you can belong to a school club, a gaming group,
//                                 or a worldwide art community.
//                                 Where just you and a handful of friends can spend time together.
//                                 A place that makes it easy to talk every day and hang out more often.</p>

//                             <div className="banner-button-container">

//                                 <a id="fake-download-windows" href={mini_strife_logo} download="STRIFE.EXE">

//                                     <svg width="24" height="24" viewBox="0 0 24 24" className="change-down-icon">
//                                         <g fill="currentColor">
//                                             <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z">
//                                             </path>
//                                             <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z">
//                                             </path>
//                                         </g>
//                                     </svg>

//                                     Download for Windows
//                                 </a>

//                                 <Link id="open-Strife_banner" to="/register"><span >Open $TR!F3 in your browser</span></Link>

//                             </div>


//                         </div>

//                     </div>


//                 </div>


//                 <div className="odd-div">
//                     <div className="odd-div-grid">
//                         <img className="odd-div-img1" />
//                         <div className="odd-div-msg">
//                             <h2 className="odd-div-header">Create an invite-only place where you belong</h2>
//                             <p className="odd-div-ptag">
//                                 $TR!F3 servers are organized into topic-based channels where you can
//                                 collaborate, share, and just talk about your day without clogging
//                                 up a group chat.
//                             </p>
//                         </div>


//                     </div>
//                 </div>

//                 <div className="even-div">
//                     <div className="even-div-grid">
//                         <div className="even-div-msg">

//                             <h2 className="odd-div-header">
//                                 Where hanging out is easy
//                             </h2>
//                             <p className="odd-div-ptag">
//                                 Grab a seat in a voice channel when you're free. Friends in your server can see you're around
//                                 and instantly pop in to talk without having to call.

//                             </p>

//                         </div>
//                         <img className="even-div-img1" />
//                     </div>
//                 </div>


//                 <div className="odd-div">
//                     <div className="odd-div-grid">
//                         <img className="odd-div-img2" />
//                         <div className="odd-div-msg">
//                             <h2 className="odd-div-header">From few to a fandom</h2>
//                             <p className="odd-div-ptag">
//                                 Get any community running with moderation tools and custom member access. Give
//                                 members special powers, set up private channels, and more.
//                             </p>
//                         </div>

//                     </div>
//                 </div>

//                 <div className="last-div">
//                     <div className="last-div-grid">
//                         <div className="last-div-msg">
//                             <h2 className="last-div-header">RELIABLE TECH FOR STAYING CLOSE</h2>
//                             <p className="last-div-ptag">
//                                 Low-latency voice and video feels like you're in the same room. Wave hello over video,
//                                 watch friends stream their games, or gather up and have a drawing session with screen share.
//                             </p>
//                         </div>
//                         <img className="last-div-img1" /></div>
//                 </div>
//                 <div className="bottom-winddown-div">
//                     <div id="bottom-windows-download">
//                         <div className="sparkles">
//                             <img className="sparkles1" />
//                         </div>
//                         <h4 className="bottom-windows-div-header">Ready to start your journey?</h4>

//                         <div className="banner-button-container">
//                             <a className="bwd" href={mini_strife_logo} download="STRIFE.EXE">
//                                 <svg width="24" height="24" viewBox="0 0 24 24" className="change-down-icon">
//                                     <g fill="currentColor">
//                                         <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z">
//                                         </path>
//                                         <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z">
//                                         </path>
//                                     </g>
//                                 </svg>
//                                 Download for Windows
//                             </a>
//                         </div>
//                     </div>
//                 </div>




//                 {/* </div> */}

//             </div>

//         )
//     }

// }


// export default Splash;