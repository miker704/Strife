// import React from "react";
// import defaultPFP from '../../../app/assets/images/discord_PFP.svg';
// import { Link } from "react-router-dom";
// class TestPage extends React.Component {
//     constructor (props) {
//         super(props);
//         this.selectChannelTypes = this.selectChannelTypes.bind(this);
//     }

//     selectChannelTypes (channels) {
//         let channelHash = new Object();

//         for (let i of channels) {
//             console.log("channel_cat_name: ", i.channel_cat_name);
//             channelHash[i.channel_cat_name] = [];
//         }
//         console.log("channel hash after cat insertion: ")
//         console.table(channelHash);
//         for (let i of channels) {
//             console.log("channel_cat_name: ", i.channel_cat_name);
//             channelHash[i.channel_cat_name].push(i)
//         }

//         return channelHash;

//     }





//     render () {




//         //     )



//         //         let channels = {
//         //             "4": {

//         //                 "id": 4,
//         //                 "channel_name": "general",
//         //                 "server_id": 3,
//         //                 "channel_type": '1',
//         //                 'channel_cat_name': 'text'

//         //             },
//         //             "14": {

//         //                 "id": 14,
//         //                 "channel_name": "Ayce's Circle",
//         //                 "server_id": 3,
//         //                 "channel_type": '1',
//         //                 'channel_cat_name': 'text'

//         //             },
//         //             "1": {

//         //                 "id": 1,
//         //                 "channel_name": "school help",
//         //                 "server_id": 3,
//         //                 "channel_type": '2',
//         //                 'channel_cat_name': 'school'

//         //             },
//         //             "2": {

//         //                 "id": 2,
//         //                 "channel_name": "AYCE CHAT",
//         //                 "server_id": 3,
//         //                 "channel_type": '2',
//         //                 'channel_cat_name': 'voice'

//         //             },
//         //             "3": {

//         //                 "id": 3,
//         //                 "channel_name": "code help",
//         //                 "server_id": 3,
//         //                 "channel_type": '2',
//         //                 'channel_cat_name': 'coding'

//         //             },
//         //             "5": {

//         //                 "id": 5,
//         //                 "channel_name": "coding",
//         //                 "server_id": 3,
//         //                 "channel_type": '1',
//         //                 'channel_cat_name': 'coding'

//         //             },
//         //             "6": {

//         //                 "id": 6,
//         //                 "channel_name": "school",
//         //                 "server_id": 3,
//         //                 "channel_type": '1',
//         //                 'channel_cat_name': 'school'

//         //             },
//         //             "7": {

//         //                 "id": 7,
//         //                 "channel_name": "text me",
//         //                 "server_id": 3,
//         //                 "channel_type": '1',
//         //                 'channel_cat_name': 'text'

//         //             },
//         //             "8": {

//         //                 "id": 8,
//         //                 "channel_name": "group chat",
//         //                 "server_id": 3,
//         //                 "channel_type": '2',
//         //                 'channel_cat_name': 'voice'

//         //             },
//         //             "9": {

//         //                 "id": 9,
//         //                 "channel_name": "general",
//         //                 "server_id": 3,
//         //                 "channel_type": '2',
//         //                 'channel_cat_name': 'game chat'

//         //             },
//         //             "10": {

//         //                 "id": 10,
//         //                 "channel_name": "text",
//         //                 "server_id": 3,
//         //                 "channel_type": '1',
//         //                 'channel_cat_name': 'default'

//         //             },

//         //         }


//         //         let cat_channels = [
//         //             [
//         //                 "school",
//         //                 [
//         //                     {
//         //                         "id": 1,
//         //                         "channel_name": "school help",
//         //                         "server_id": 3,
//         //                         "channel_type": "2",
//         //                         "channel_cat_name": "school"
//         //                     },
//         //                     {
//         //                         "id": 6,
//         //                         "channel_name": "school",
//         //                         "server_id": 3,
//         //                         "channel_type": "1",
//         //                         "channel_cat_name": "school"
//         //                     }
//         //                 ]
//         //             ],
//         //             [
//         //                 "voice",
//         //                 [
//         //                     {
//         //                         "id": 2,
//         //                         "channel_name": "AYCE CHAT",
//         //                         "server_id": 3,
//         //                         "channel_type": "2",
//         //                         "channel_cat_name": "voice"
//         //                     },
//         //                     {
//         //                         "id": 8,
//         //                         "channel_name": "group chat",
//         //                         "server_id": 3,
//         //                         "channel_type": "2",
//         //                         "channel_cat_name": "voice"
//         //                     }
//         //                 ]
//         //             ],
//         //             [
//         //                 "coding",
//         //                 [
//         //                     {
//         //                         "id": 3,
//         //                         "channel_name": "code help",
//         //                         "server_id": 3,
//         //                         "channel_type": "2",
//         //                         "channel_cat_name": "coding"
//         //                     },
//         //                     {
//         //                         "id": 5,
//         //                         "channel_name": "coding",
//         //                         "server_id": 3,
//         //                         "channel_type": "1",
//         //                         "channel_cat_name": "coding"
//         //                     }
//         //                 ]
//         //             ],
//         //             [
//         //                 "text",
//         //                 [
//         //                     {
//         //                         "id": 4,
//         //                         "channel_name": "general",
//         //                         "server_id": 3,
//         //                         "channel_type": "1",
//         //                         "channel_cat_name": "text"
//         //                     },
//         //                     {
//         //                         "id": 7,
//         //                         "channel_name": "text me",
//         //                         "server_id": 3,
//         //                         "channel_type": "1",
//         //                         "channel_cat_name": "text"
//         //                     },
//         //                     {
//         //                         "id": 14,
//         //                         "channel_name": "Ayce's Circle",
//         //                         "server_id": 3,
//         //                         "channel_type": "1",
//         //                         "channel_cat_name": "text"
//         //                     }
//         //                 ]
//         //             ],
//         //             [
//         //                 "game chat",
//         //                 [
//         //                     {
//         //                         "id": 9,
//         //                         "channel_name": "general",
//         //                         "server_id": 3,
//         //                         "channel_type": "2",
//         //                         "channel_cat_name": "game chat"
//         //                     }
//         //                 ]
//         //             ],
//         //             [
//         //                 "default",
//         //                 [
//         //                     {
//         //                         "id": 10,
//         //                         "channel_name": "text",
//         //                         "server_id": 3,
//         //                         "channel_type": "1",
//         //                         "channel_cat_name": "default"
//         //                     }
//         //                 ]
//         //             ]
//         //         ]

//         //         let voice_icon = <div className="def-channel-icon-container" >
//         //             <svg className="icon-speaker" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//         //                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 
//         // 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 
//         // 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 
//         // 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 
//         // 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 
//         // 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 
//         // 14.551 11.002 14 11.002V9.00195Z" aria-hidden="true">
//         //                 </path>
//         //             </svg>

//         //         </div>


//         //         let chat_icon = <div className="def-channel-icon-container">
//         //             <svg width="24" height="24" viewBox="0 0 24 24" className="icon-2W8DHg" aria-hidden="true" role="img">
//         //                 <path fill="currentColor" fillRule="evenodd"
//         //                     clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001
//         // 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746
//         // 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 
//         // 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914
//         // 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001
//         // 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201
//         // 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824
//         // 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802
//         // 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261
//         // 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325
//         // 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104
//         // 9H9.41045Z">
//         //                 </path>
//         //             </svg>
//         //         </div>



//         //         let channels_Array = Object.values(channels);
//         //         console.log("channels type: ", typeof channels);
//         //         console.log("channels content");
//         //         console.table(channels);
//         //         console.log("channels to array : ", channels_Array);
//         //         console.log("channels to array : ", typeof channels_Array);

//         //         let channel_nav_bar_content = this.selectChannelTypes(channels_Array);

//         //         console.log("channel_nav_bar_content: ");
//         //         console.log(channel_nav_bar_content);
//         //         console.table(channel_nav_bar_content);
//         //         console.log("channel_nav type: ", typeof channel_nav_bar_content)

//         //         let channel_nav_bar_content_array = Object.entries(channel_nav_bar_content);
//         //         console.log("channel_nav_bar_contnet array  = : ", channel_nav_bar_content_array);
//         //         console.table(channel_nav_bar_content_array);

//         //         channel_nav_bar_content_array.map((channelCat, idx) => {
//         //             console.log("channel catergory: ", channelCat[0]);
//         //             channelCat[1].map((channel, channelidx) => {
//         //                 console.log("channel name: ", channel);
//         //                 console.log("channel name: ", channel.channel_name);

//         //             })
//         //         })


//         //         return (


//         //             <div className="channel-nav-bar">
//         //                 <div className="channel-nav-bar-container-wrapper">
//         //                     <div className="channel-nav-bar-top-container">
//         //                         <div className="channel-nav-bar-top-container-header">
//         //                             <div className="channel-nav-bar-header-content">
//         //                                 <h1 className="channel-nav-bar-h1">
//         //                                 </h1>
//         //                                 <div className="channel-nav-bar-top-button">

//         //                                 </div>
//         //                                 <div className="channel-nav-chevron" >
//         //                                     <svg width="18" height="18" className="icon-chevron" >
//         //                                         <g fill="none" fillRule="evenodd">
//         //                                             <path d="M0 0h18v18H0"></path>
//         //                                             <path stroke="currentColor" d="M4.5 4.5l9 9" strokeLinecap="round"></path>
//         //                                             <path stroke="currentColor" d="M13.5 4.5l-9 9" strokeLinecap="round"></path>
//         //                                         </g>
//         //                                     </svg>
//         //                                 </div>
//         //                             </div>
//         //                         </div>
//         //                     </div>
//         //                     <div className="channel-nav-sep"><div></div></div>
//         //                     <div className="channel-post-container">
//         //                         <div className="channel-unread">
//         //                             <div className="channel-unread-top">
//         //                                 <span className="channel-unread-text"></span>
//         //                             </div>
//         //                         </div>
//         //                     </div>
//         //                     <div className="channel-nav-scroller">
//         //                         {
//         //                             channel_nav_bar_content_array.map((channel_category, category_idx) => {



//         //                                 return (

//         //                                     <ul className="ul-channels">

//         //                                         <li className="channel-li-item-cat" key={category_idx}>
//         //                                             <div className="channel-li-icon">
//         //                                                 <div className="main-channel-content">
//         //                                                     <svg className="channel-icon-arrow" width="24" height="24" viewBox="0 0 24 24">
//         //                                                         <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41
//         //                                          8.59004L6 10L12 16L18 10L16.59 8.59004Z">
//         //                                                         </path>
//         //                                                     </svg>
//         //                                                     <h2 className="main-channel-content-h2">
//         //                                                         <div className="main-channel-h2">{channel_category[0]}</div>
//         //                                                     </h2>
//         //                                                 </div>
//         //                                                 <div className="channel-plus-div" >
//         //                                                     <button type="button" className="add-channel-button">
//         //                                                         <div className="add-channel-button-inner">
//         //                                                             <svg className="addButtonIcon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 18 18">
//         //                                                                 <polygon fillRule="nonzero" fill="currentColor"
//         //                                                                     points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8">
//         //                                                                 </polygon>
//         //                                                             </svg>
//         //                                                         </div>
//         //                                                     </button>

//         //                                                 </div>
//         //                                             </div>
//         //                                         </li>
//         //                                         {channel_category[1].map((channel, channelidx) => {
//         //                                             console.log("channel name: ", channel);
//         //                                             let icon = channel.channel_type === '1' ? chat_icon : voice_icon;

//         //                                             return (
//         //                                                 <li className="default-channel-item" key={parseInt(channel.id)}>
//         //                                                     <div className="def-channel-wrap">
//         //                                                         <div className="def-channel-content">
//         //                                                             <Link to={`/testing/`} className="def-channel-a">
//         //                                                                 {icon}



//         //                                                                 <div className="default-channel-name-cont">
//         //                                                                     <div className="default-channel-name">
//         //                                                                         {channel.channel_name}
//         //                                                                     </div>
//         //                                                                 </div>
//         //                                                             </Link>
//         //                                                             <div className="child-buttons">
//         //                                                                 <div className="create-channel-invite-icon-wrapper" >
//         //                                                                     <svg className="create-channel-invite-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
//         //                                                                         <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
//         //                                                                         <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 
//         //                                             3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z">

//         //                                                                         </path>
//         //                                                                         <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z">
//         //                                                                         </path>
//         //                                                                     </svg>

//         //                                                                 </div>
//         //                                                                 <div className="channel-settings-wrapper" >
//         //                                                                     <svg className="channel-gear-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
//         //                                                                         <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 
//         //                                         9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133
//         //                                          12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 
//         //                                          12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667
//         //                                           5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 
//         //                                           3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8
//         //                                            10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z">
//         //                                                                         </path>
//         //                                                                     </svg>

//         //                                                                 </div>
//         //                                                                 <div className="channel-info-sep"></div>
//         //                                                             </div>
//         //                                                         </div>
//         //                                                     </div>
//         //                                                 </li>

//         //                                             )




//         //                                         })}




//         //                                     </ul>
//         //                                 )


//         //                             })
//         //                         }
//         //                         <ul className="ul-channels">

//         //                             <li className="channel-li-item-cat">
//         //                                 <div className="channel-li-icon">
//         //                                     <div className="main-channel-content">
//         //                                         <svg className="channel-icon-arrow" width="24" height="24" viewBox="0 0 24 24">
//         //                                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41
//         //                                      8.59004L6 10L12 16L18 10L16.59 8.59004Z">
//         //                                             </path>
//         //                                         </svg>
//         //                                         <h2 className="main-channel-content-h2">
//         //                                             <div className="main-channel-h2">Text Channels</div>
//         //                                         </h2>
//         //                                     </div>
//         //                                     <div className="channel-plus-div" >
//         //                                         <button type="button" className="add-channel-button">
//         //                                             <div className="add-channel-button-inner">
//         //                                                 <svg className="addButtonIcon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 18 18">
//         //                                                     <polygon fillRule="nonzero" fill="currentColor"
//         //                                                         points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8">
//         //                                                     </polygon>
//         //                                                 </svg>
//         //                                             </div>
//         //                                         </button>

//         //                                     </div>
//         //                                 </div>
//         //                             </li>

//         //                             <li className="default-channel-item">
//         //                                 <div className="def-channel-wrap">
//         //                                     <div className="def-channel-content">
//         //                                         <Link to={`/testing/`} className="def-channel-a">
//         //                                             <div className="def-channel-icon-container">
//         //                                                 <svg width="24" height="24" viewBox="0 0 24 24" className="icon-2W8DHg" aria-hidden="true" role="img">
//         //                                                     <path fill="currentColor" fillRule="evenodd"
//         //                                                         clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001
//         //                                          17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746
//         //                                           2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 
//         //                                           8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914
//         //                                            3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001
//         //                                             7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201
//         //                                              3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824
//         //                                               8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802
//         //                                                20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261
//         //                                                 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325
//         //                                                  20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104
//         //                                                   9H9.41045Z">
//         //                                                     </path>
//         //                                                 </svg>
//         //                                             </div>
//         //                                             <div className="default-channel-name-cont">
//         //                                                 <div className="default-channel-name">
//         //                                                     insert channel name here
//         //                                                 </div>
//         //                                             </div>
//         //                                         </Link>
//         //                                         <div className="child-buttons">
//         //                                             <div className="create-channel-invite-icon-wrapper" >
//         //                                                 <svg className="create-channel-invite-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
//         //                                                     <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
//         //                                                     <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 
//         //                                             3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z">

//         //                                                     </path>
//         //                                                     <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z">
//         //                                                     </path>
//         //                                                 </svg>

//         //                                             </div>
//         //                                             <div className="channel-settings-wrapper" >
//         //                                                 <svg className="channel-gear-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
//         //                                                     <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 
//         //                                         9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133
//         //                                          12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 
//         //                                          12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667
//         //                                           5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 
//         //                                           3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8
//         //                                            10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z">
//         //                                                     </path>
//         //                                                 </svg>

//         //                                             </div>
//         //                                             <div className="channel-info-sep"></div>
//         //                                         </div>
//         //                                     </div>
//         //                                 </div>
//         //                             </li>

//         //                             <li className="channel-li-item-cat">
//         //                                 <div className="channel-li-icon">
//         //                                     <div className="main-channel-content">
//         //                                         <svg className="channel-icon-arrow" width="24" height="24" viewBox="0 0 24 24">
//         //                                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41
//         //                                      8.59004L6 10L12 16L18 10L16.59 8.59004Z">
//         //                                             </path>
//         //                                         </svg>
//         //                                         <h2 className="main-channel-content-h2">
//         //                                             <div className="main-channel-h2">Voice Channels</div>
//         //                                         </h2>
//         //                                     </div>
//         //                                     <div className="channel-plus-div" >
//         //                                         <button type="button" className="add-channel-button">
//         //                                             <div className="add-channel-button-inner">
//         //                                                 <svg className="addButtonIcon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 18 18">
//         //                                                     <polygon fillRule="nonzero" fill="currentColor"
//         //                                                         points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8">
//         //                                                     </polygon>
//         //                                                 </svg>


//         //                                             </div>
//         //                                         </button>
//         //                                     </div>
//         //                                 </div>
//         //                             </li>
//         //                             <li className="default-channel-item">
//         //                                 <div className="def-channel-wrap">
//         //                                     <div className="def-channel-content">
//         //                                         <Link to={`/tetsing/`} className="def-channel-a">
//         //                                             <div className="def-channel-icon-container" >
//         //                                                 <svg className="icon-speaker" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//         //                                                     <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 
//         //                                     3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 
//         //                                     20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 
//         //                                     3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 
//         //                                     17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 
//         //                                     17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 
//         //                                     14.551 11.002 14 11.002V9.00195Z" aria-hidden="true">
//         //                                                     </path>
//         //                                                 </svg>

//         //                                             </div>
//         //                                             <div className="default-channel-name-cont">
//         //                                                 <div className="default-channel-name">
//         //                                                     insert channel name here
//         //                                                 </div>
//         //                                             </div>
//         //                                         </Link>
//         //                                         <div className="child-buttons">

//         //                                             <div className="create-channel-invite-icon-wrapper" >
//         //                                                 <svg className="open-chat-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24" fill="none">
//         //                                                     <path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 
//         //                                     17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 
//         //                                     20.1925 3 19.198 3H4.79805Z">
//         //                                                     </path>
//         //                                                 </svg>

//         //                                             </div>
//         //                                             <div className="create-channel-invite-icon-wrapper" >

//         //                                                 <svg className="create-channel-invite-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
//         //                                                     <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
//         //                                                     <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 
//         //                                             3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z">

//         //                                                     </path>
//         //                                                     <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z">
//         //                                                     </path>
//         //                                                 </svg>

//         //                                             </div>
//         //                                             <div className="channel-settings-wrapper" >
//         //                                                 <svg className="channel-gear-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
//         //                                                     <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 
//         //                                         9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133
//         //                                          12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 
//         //                                          12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667
//         //                                           5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 
//         //                                           3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8
//         //                                            10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z">
//         //                                                     </path>
//         //                                                 </svg>

//         //                                             </div>
//         //                                             <div className="channel-info-sep"></div>
//         //                                         </div>
//         //                                     </div>
//         //                                 </div>
//         //                             </li>

//         //                         </ul>
//         //                     </div>
//         //                 </div>


//         //             </div>













//         //         )


//         return (
//             <div className="user-profile-wrapper" onClick={e => e.stopPropagation()}>
//                 <div className="user-profile" id="user-profile">

//                     <div className="sidebar">
//                         <div className="sidebar-scrollbar">
//                             <div className="sidebar-inner">

//                                 <div className="user-profile-left-side">


//                                     <ul className="user-profile-item-list">

//                                         <li><h3 className="user-profile-header3">Server Name</h3></li>



//                                         <li className="user-profile-item">Overview</li>


//                                         <li className="user-profile-item">Roles</li>
//                                         <li className="user-profile-item">Emoji</li>
//                                         <li className="user-profile-item">Stickers</li>
//                                         <li className="user-profile-item">Integration</li>
//                                         <li className="user-profile-item">Widget</li>
//                                         <li className="user-profile-item">Server Template</li>
//                                         <li className="user-profile-item">Custom Invite Link</li>
//                                         <div className="user-settings-separator"></div>
//                                         <li><h3 className="user-profile-header3">Moderation</h3></li>
//                                         <li className="user-profile-item">Safety Setup</li>
//                                         <li className="user-profile-item">Audit Log</li>
//                                         <li className="user-profile-item">Bans</li>
//                                         <div className="user-settings-separator"></div>
//                                         <li><h3 className="user-profile-header3">Community</h3></li>
//                                         <li className="user-profile-item">Enable Community</li>
//                                         <div className="user-settings-separator"></div>
//                                         <li className="user-profile-item">
//                                             <div className="user-profile-item-logout-sec">
//                                                 Server Boost Status

//                                                 <svg className="server-boost-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 8 12">
//                                                     <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="#ff73fa">
//                                                     </path>
//                                                     <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="#ff73fa"></path>
//                                                 </svg>

//                                             </div>
//                                         </li>
//                                         <div className="user-settings-separator"></div>
//                                         <li><h3 className="user-profile-header3">User Management</h3></li>

//                                         <li className="user-profile-item">Members</li>
//                                         <li className="user-profile-item">Invites</li>
//                                         <div className="user-settings-separator"></div>
//                                         <li className="user-profile-item">
//                                             <div className="user-profile-item-logout-sec">
//                                                 Delete Server
//                                                 <svg className="upm-logout-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                                                     <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path>
//                                                     <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19
//                                                  18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z">
//                                                     </path>
//                                                 </svg>
//                                             </div>
//                                         </li>
//                                         <li className="user-profile-item" >
//                                             <div className="user-profile-item-logout-sec">
//                                                 Log Out
//                                                 <svg className="upm-logout-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                                                     <path fill="currentColor" d="M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 
//                                       13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z">
//                                                     </path>
//                                                 </svg>
//                                             </div>
//                                         </li>
//                                         <div className="user-settings-separator"></div>

//                                         <div className="version-number">
//                                             <span>Stable 140575 (12c29a3)</span>
//                                             <br />
//                                             <span>Windows 11 64-bit</span>

//                                         </div>

//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>


//                     <div className="user-profile-right-side-wrapper">
//                         <div className="user-profile-rs-inner-wrapper">

//                             <div className="user-profile-right-side">


//                                 <div className="user-profile-header1-div">
//                                     <h1 className="user-profile-header1">Server Overview</h1>
//                                 </div>

//                                 <div className="my-account-container-wrapper">


//                                     <div className="server-op-item-flex">
//                                         <div className="server-op-item-flex-jcc">
//                                             <div className="server-op-item-flex-child">
//                                                 <div className="server-image-uploader">
//                                                     <div className="server-image-uploader-inner">

//                                                         <span aria-hidden="true">
//                                                             <div className="image-uploader-acro">servername</div>
//                                                         </span>
//                                                         <div className="server-op-image-uploader-hint">
//                                                             Change Icon
//                                                         </div>
//                                                         <input className="server-op-pfp-input" accept=".jpg, .jpeg, .svg, .png, .gif" type="file" />
//                                                         <div className="server-op-image-uploader-icon"></div>
//                                                     </div>

//                                                     <div className="server-op-image-uploader-fp">
//                                                         Minimum Size:
//                                                         <strong>128x128</strong>
//                                                     </div>
//                                                 </div>

//                                             </div>

//                                             <div className="server-op-item-flex-vertical">
//                                                 <div className="server-op-icon-rec-s">
//                                                     We recommend an image of at least 512x512 for the server.
//                                                 </div>
//                                                 <button type="button" className="server-op-pfp-upload-button">

//                                                     <div className="server-op-iubt">Upload Image
//                                                         <input className="server-op-pfp-input" accept=".jpg, .jpeg, .svg, .png, .gif" type="file" />

//                                                     </div>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                         <div className="server-op-item-margin-bottom">
//                                             <h5 className="server-op-item-margin-bottom-h5">Server Name</h5>
//                                             <div className="server-op-name-input-wrapper">
//                                                 <input className="server-op-name-input" type="text" maxLength={100} placeholder="servernameplaceholder" />
//                                                 <button type="button" className="faint-boost-shiny-button">
//                                                     <div className="shiny-button-contents">
//                                                         <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
//                                                             <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                             </path>
//                                                             <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                             </path>
//                                                         </svg>
//                                                         Submit Name Change
//                                                         <div className="shiny-button-container">
//                                                             <div className="shiny-button-flex">
//                                                                 <div className="shiny-button-inner"></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="server-op-divider">
//                                         <div className="server-op-divider-flex-js">
//                                             <div className="server-op-flexchild1">
//                                                 <h5 className="server-op-div-fjs-h5">Inactive Channel</h5>
//                                                 <div className="select-box-look-filled">
//                                                     <span className="s-b-value">
//                                                         <div className="s-b-value-flex">
//                                                             <div className="sb-value-inner">No Active Channel</div>
//                                                         </div>
//                                                     </span>
//                                                     <div className="server-op-divider-icons-wrap">
//                                                         <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                             <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"></path></svg>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="server-op-flexchild1">
//                                                 <h5 className="server-op-div-fjs-h5">Inactive Timeout</h5>
//                                                 <div className="select-box-look-disabled">
//                                                     <span className="s-b-value">
//                                                         <div className="s-b-value-flex">
//                                                             <div className="sb-value-inner">5 minutes</div>
//                                                         </div>
//                                                     </span>
//                                                     <div className="server-op-divider-icons-wrap">
//                                                         <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                             <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"></path></svg>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="inactive-sub-info">
//                                             Automatically move members to this channel and mute them when they have been idle for longer than the
//                                             inactive timeout. This does not affect browsers.
//                                         </div>
//                                     </div>

//                                     <div className="server-op-divider">
//                                         <h5 className="server-op-div-fjs-h5">System Messages Channel</h5>
//                                         <div className="select-box-look-filled">
//                                             <span className="s-b-value">
//                                                 <div className="s-b-value-flex1">
//                                                     <svg width="16" height="16" viewBox="0 0 24 24" className="icon-hash-sop" aria-hidden="true" role="img">
//                                                         <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 
//                                                     20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 
//                                                     2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 
//                                                     7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 
//                                                     3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 
//                                                     3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 
//                                                     9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 
//                                                     17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 
//                                                     17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
//                                                         </path>
//                                                     </svg>
//                                                     <div className="sb-value-inner">general</div>
//                                                     <div className="sb-value-inner-bolden">Text Channels</div>

//                                                 </div>
//                                             </span>
//                                             <div className="server-op-divider-icons-wrap">
//                                                 <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                     <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"></path></svg>
//                                             </div>
//                                         </div>
//                                         <div className="inactive-sub-info">
//                                             This is the channel we send system event messages to. These can be turned off at any time.
//                                         </div>


//                                         <div className="server-op-margin-top-container">
//                                             <div className="sop-label-row">
//                                                 <label className="sop-label">Send a random welcome message when someone joins this server.</label>
//                                                 <div className="sop-slide-control">
//                                                     <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${12}px` }}>
//                                                         <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                                         <svg viewBox="0 0 20 20" fill="none">
//                                                             <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M7.89561 14.8538L6.30462 13.2629L14.3099
//                                                              5.25755L15.9009 6.84854L7.89561 14.8538Z">
//                                                             </path>
//                                                             <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 
//                                                             13.2704L7.85751 14.8614L4.08643 11.0903Z">
//                                                             </path>
//                                                         </svg>
//                                                     </svg>
//                                                     <input type="checkbox" className="sop-slider" checked />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="server-op-margin-top-container">
//                                             <div className="sop-label-row">
//                                                 <label className="sop-label">Prompt members to reply to welcome messages with a sticker.</label>
//                                                 <div className="sop-slide-control">
//                                                     <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${12}px` }}>
//                                                         <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                                         <svg viewBox="0 0 20 20" fill="none">
//                                                             <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M7.89561 14.8538L6.30462 13.2629L14.3099
//                                                              5.25755L15.9009 6.84854L7.89561 14.8538Z">
//                                                             </path>
//                                                             <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 
//                                                             13.2704L7.85751 14.8614L4.08643 11.0903Z">
//                                                             </path>
//                                                         </svg>
//                                                     </svg>
//                                                     <input type="checkbox" className="sop-slider" checked />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="server-op-margin-top-container">
//                                             <div className="sop-label-row">
//                                                 <label className="sop-label">Send a message when someone boosts this server.</label>
//                                                 <div className="sop-slide-control">
//                                                     <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${12}px` }}>
//                                                         <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                                         <svg viewBox="0 0 20 20" fill="none">
//                                                             <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M7.89561 14.8538L6.30462 13.2629L14.3099
//                                                              5.25755L15.9009 6.84854L7.89561 14.8538Z">
//                                                             </path>
//                                                             <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 
//                                                             13.2704L7.85751 14.8614L4.08643 11.0903Z">
//                                                             </path>
//                                                         </svg>
//                                                     </svg>
//                                                     <input type="checkbox" className="sop-slider" checked />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="server-op-margin-top-container">
//                                             <div className="sop-label-row">
//                                                 <label className="sop-label">Send helpful tips for server setup.</label>
//                                                 <div className="sop-slide-control">
//                                                     <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${12}px` }}>
//                                                         <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                                         <svg viewBox="0 0 20 20" fill="none">
//                                                             <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M7.89561 14.8538L6.30462 13.2629L14.3099
//                                                              5.25755L15.9009 6.84854L7.89561 14.8538Z">
//                                                             </path>
//                                                             <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 
//                                                             13.2704L7.85751 14.8614L4.08643 11.0903Z">
//                                                             </path>
//                                                         </svg>
//                                                     </svg>
//                                                     <input type="checkbox" className="sop-slider" checked />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div>
//                                         <div className="server-op-divider">
//                                             <h5 className="server-op-div-fjs-h5">Default Notification Settings</h5>
//                                             <div className="inactive-sub-info-2">
//                                                 This will determine whether members who have not explicitly set their notification settings
//                                                 receive a notification for every message sent in this server or not.
//                                             </div>
//                                             <div className="inactive-sub-info-2">
//                                                 We highly recommend setting this to only @mentions for a public STRIFE.
//                                             </div>
//                                             <div role={"radiogroup"}>
//                                                 <div className="sop-radio-item1" role={"radio"} aria-checked="true">
//                                                     <div className="sop-radio-item-inner">
//                                                         <div>
//                                                             <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                                 <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 
//                                                             12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 
//                                                             17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor">
//                                                                 </path>
//                                                                 <circle cx="12" cy="12" r="5" className="radioIconForeground" fill="currentColor"></circle>
//                                                             </svg>
//                                                         </div>
//                                                         <div className="sop-radio-info">
//                                                             <div className="sop-text-med">All Messages</div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="sop-radio-item">
//                                                     <div className="sop-radio-item" role={"radio"} aria-checked="false">
//                                                         <div className="sop-radio-item-inner">
//                                                             <div>
//                                                                 <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                                     <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 
//                                                             12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 
//                                                             17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor">
//                                                                     </path>
//                                                                 </svg>
//                                                             </div>
//                                                             <div className="sop-radio-info">
//                                                                 <div className="sop-text-med">
//                                                                     Only
//                                                                     <strong>@mentions</strong>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                             </div>
//                                         </div>

//                                     </div>

//                                     <div>
//                                         <div className="server-op-divider">
//                                             <div className="sop-section-title">
//                                                 <h1 className="sop-section-header">
//                                                     Display
//                                                 </h1>
//                                             </div>

//                                             <div className="sop-display-children">
//                                                 <div>
//                                                     <div className="server-op-divider-flex-js2">
//                                                         <div className="server-op-divider-flex-horz">
//                                                             <div className="server-op-horz-martop-container">
//                                                                 <div className="server-op-horz-label-wrapper">
//                                                                     <label className="server-op-horz-label">
//                                                                         Show Boost progress bar
//                                                                     </label>
//                                                                     <div className="control-123">
//                                                                         <div className="control-inner">
//                                                                             <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${-3}px` }}>
//                                                                                 <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                                                                 <svg viewBox="0 0 20 20" fill="none">
//                                                                                     <path fill="hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)"
//                                                                                         d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z">
//                                                                                     </path>
//                                                                                     <path fill="hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)"
//                                                                                         d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z">
//                                                                                     </path>
//                                                                                 </svg>
//                                                                             </svg>
//                                                                             <input type="checkbox" className="sop-slider" />
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div className="inactive-sub-info">
//                                                                 This progress bar will display in your channel list, attached to your server name
//                                                                 (or server banner if you have one set).
//                                                             </div>
//                                                         </div>
//                                                         <div className="flex-child-boost-ex">
//                                                             <img className="flex-child-boost-ex-img" alt="boost-example" />
//                                                         </div>
//                                                     </div>
//                                                 </div>



//                                                 <div className="server-op-divider">
//                                                     <div className="sbb-op-flex">
//                                                         <div className="sbb-flex-child">
//                                                             <h5 className="faint-h5">
//                                                                 <div>Server Banner Background</div>
//                                                                 <div className="faint-server-boost-icon-super-wrapper">
//                                                                     <div className="faint-server-boost-icon-wrapper">
//                                                                         <svg className="faint-server-boost-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 8 12">
//                                                                             <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                             </path>
//                                                                             <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                             </path>
//                                                                         </svg>
//                                                                         <h3 className="faint-boost-h3">
//                                                                             LVL 2
//                                                                         </h3>
//                                                                     </div>
//                                                                 </div>
//                                                             </h5>
//                                                             <div className="faint-server-invite-text1">
//                                                                 This image will display at the top of your channels list.
//                                                             </div>
//                                                             <div className="faint-server-invite-text2">
//                                                                 The recommended minimum size is 960x540 and recommended aspect ratio is 16:9.{" "}
//                                                                 <a className="faint-anchor" target="_blank" href="https://support.discord.com/hc/en-us/articles/360028716472">Learn More</a>.
//                                                             </div>
//                                                             <button type="button" className="faint-boost-shiny-button">
//                                                                 <div className="shiny-button-contents">
//                                                                     <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
//                                                                         <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                         </path>
//                                                                         <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                         </path>
//                                                                     </svg>
//                                                                     Unlock with Boosting
//                                                                     <div className="shiny-button-container">
//                                                                         <div className="shiny-button-flex">
//                                                                             <div className="shiny-button-inner"></div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </button>
//                                                         </div>
//                                                         <div className="faint-boost-flex-child">
//                                                             <div className="faint-upsell">
//                                                                 <div className="faint-img-uploader">
//                                                                     <div className="faint-img-upload">
//                                                                         <div className="faint-img-acyro">
//                                                                         </div>
//                                                                         <div className="faint-img-icon">
//                                                                             <svg aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24" fill="none">
//                                                                                 <path fillRule="evenodd" clipRule="evenodd" d="M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086
//                                                                              22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 
//                                                                              4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6
//                                                                               9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z" fill="hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)">
//                                                                                 </path>
//                                                                                 <path d="M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z" fill="hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)">
//                                                                                 </path>
//                                                                             </svg>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>



//                                                 <div className="server-op-divider">
//                                                     <div className="sbb-op-flex">
//                                                         <div className="sbb-flex-child">
//                                                             <h5 className="faint-h5">
//                                                                 <div>Server Invite Background</div>
//                                                                 <div className="faint-server-boost-icon-super-wrapper">
//                                                                     <div className="faint-server-boost-icon-wrapper">
//                                                                         <svg className="faint-server-boost-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 8 12">
//                                                                             <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                             </path>
//                                                                             <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                             </path>
//                                                                         </svg>
//                                                                         <h3 className="faint-boost-h3">
//                                                                             LVL 1
//                                                                         </h3>
//                                                                     </div>
//                                                                 </div>
//                                                             </h5>
//                                                             <div className="faint-server-invite-text1">
//                                                                 This image will display in server invite embeds, invite in browser, and invite confirmation modal.
//                                                             </div>
//                                                             <div className="faint-server-invite-text2">
//                                                                 "The recommended minimum size is 1920x1080 and recommended aspect ratio is 16:9."{" "}
//                                                                 <a className="faint-anchor" target="_blank" href="https://support.discord.com/hc/en-us/articles/4415841146391">Learn More</a>.
//                                                             </div>
//                                                             <button type="button" className="faint-boost-shiny-button">
//                                                                 <div className="shiny-button-contents">
//                                                                     <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
//                                                                         <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                         </path>
//                                                                         <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                         </path>
//                                                                     </svg>
//                                                                     Unlock with Boosting
//                                                                     <div className="shiny-button-container">
//                                                                         <div className="shiny-button-flex">
//                                                                             <div className="shiny-button-inner"></div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </button>
//                                                         </div>
//                                                         <div className="faint-boost-flex-child">
//                                                             <div className="faint-upsell">
//                                                                 <div className="faint-img-uploader">
//                                                                     <div className="faint-img-upload">
//                                                                         <div className="faint-img-acyro">
//                                                                         </div>
//                                                                         <div className="faint-img-icon">
//                                                                             <svg aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24" fill="none">
//                                                                                 <path fillRule="evenodd" clipRule="evenodd" d="M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086
//                                                                              22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 
//                                                                              4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6
//                                                                               9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z" fill="hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)">
//                                                                                 </path>
//                                                                                 <path d="M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z" fill="hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)">
//                                                                                 </path>
//                                                                             </svg>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>







//                                     <div className="my-account-container">




//                                     </div>

//                                 </div>

//                                 <div className="divider-margin"></div>


//                                 <div className="divider-margin"></div>




//                             </div>

//                             <div className="tools-container">

//                                 <div className="tool-x-to-esc-button-wrapper">
//                                     <div className="inner-tool-container">
//                                         <div className="x-to-esc-button" >
//                                             <svg role="img" width="18" height="18" viewBox="0 0 24 24">
//                                                 <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 
//                                       12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
//                                                 </path>
//                                             </svg>
//                                         </div>
//                                         <div className="esc-bind">ESC</div>
//                                     </div>
//                                 </div>
//                             </div>



//                         </div>
//                     </div>
//                 </div>
//             </div>

//         )
// console.log("this.props.currentUser: = ", this.props.currentUser);

// let goHome = this.props.serverId === "@me" ? "selected-Server" : "unselected-Server";
// // console.log("server currentUser props: ", this.props.currentUser);
// console.log("server navbar props: ", this.props);
// console.log("server navbar serverid: ", this.props.serverId);

// console.log("server navbar gohome: ", goHome);

// console.log(this.props.servers);
// console.log(this.props.serverId);


// let userServer = this.props.servers.map((server, serverIndex) => {
//     let serverNavBarClassTag = this.props.serverId === server.id.toString() ? "selected-Server" : "unselected-Server";
//     let serverAcryo1 = server.server_Icon === undefined ? (

//         <svg width="48" height="48" viewBox="0 0 48 48" className="purple-bubbles" >
//             <defs>
//                 <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" >
//                 </path>
//             </defs>
//             <foreignObject x="0" y="0" width="48" height="48">
//                 <div className="bubble-wrap" >
//                     <div className="server-Acryo" >{this.splitServerName(server.server_name)}</div>
//                 </div>
//             </foreignObject>
//         </svg>
//         // <p className={`server-Acryo`}>{this.splitServerName(server.server_name)}</p>




//     ) : ("");

//     let serverAcryo = server.server_Icon === undefined ? (<p className={`server-Acryo`}>{this.splitServerName(server.server_name)}</p>) : ("")


//     let serverIcon = server.server_Icon !== undefined ? (
//         <div className="bubble-wrap"><img className="bubble-img" src={server.server_Icon} alt="SPFP" /></div>
//         // <img className="bubble-img" src={server.server_Icon} alt="SPFP" />

//     ) : ("");
//     let SPFP = server.server_Icon !== undefined ? (<img src={server.server_Icon} alt="SPFP" />) : ("");

//     return (
//         <li className="server-bubbles" key={server.id}>
//             <div className="server-nav-bar-list-item">
//                 <Link to={`/channels/${server.id}/${server.general_channel_id}`}
//                     onClick={() => this.props.fetchServer(server.id)}
//                     className={serverNavBarClassTag}
//                     id={`${server.server_Icon === undefined ? `purple-hover` : `no-purple`}`}
//                 >
//                     <div className="pill-box"><span className="pill-box-item"></span></div>
//                     {serverAcryo1}
//                     {serverIcon}
//                 </Link>

//             </div>
//             <div className="server-nav-bar-tool-kit">{server.server_name}</div>
//         </li>
//     )
// }
// )

// return (
//     <div className="empty-messages-container">

//         <p className="this-is-a-test">HELLO WORLD !!!!</p>
//         <div className="server-nav-bar">
//             <ul className="server-nav-bar-list">
//                 <li key="home-Bubbles" className="server-bubbles">
//                     <div className="server-nav-bar-list-item">
//                         <Link id="purple-hover" className={goHome} to={`/channels/@me`}>
//                             <div className="pill-box"><span className="pill-box-item"></span></div>
//                             <svg className="home-Bubbles" aria-hidden="true" role="img" width="28" height="20" viewBox="0 0 28 20">
//                                 <path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 
//                             0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 
//                             0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 
//                             6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 
//                             8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 
//                             16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 
//                             21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 
//                             19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 
//                             1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 
//                             9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 
//                             13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973
//                              18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 
//                              13.6383Z">
//                                 </path>
//                             </svg>

//                         </Link>
//                     </div>
//                     <div className="server-nav-bar-tool-kit">HOME</div>
//                 </li>

//                 <div className="server-bubble-seperator-container">
//                     <div className="server-bubble-seperator"></div>
//                 </div>
//                 {userServer}

//                 <li className="server-bubbles" key="createServer">
//                     <div className="server-nav-bar-list-item">
//                         <button id="create-server" onClick={() => this.renderModal('createServerForm')}>
//                             <div id="fill-pill" className="pill-box"><span className="pill-box-item"></span></div>
//                             <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                 <path fill="currentColor" d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z">
//                                 </path>
//                             </svg>
//                         </button>
//                     </div>
//                     <div className="server-nav-bar-tool-kit">Add a Server</div>
//                 </li>

//                 <li className="server-bubbles" key="serverSearch">
//                     <div className="server-nav-bar-list-item">
//                         <button id="search-servers" onClick={() => this.props.openModal('serverSearch')}>
//                             <div id="fill-pill" className="pill-box"><span className="pill-box-item"></span></div>
//                             <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                 <path fill="currentColor" d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 
//                                                         13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 
//                                                         2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 
//                                                         2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z">
//                                 </path>
//                             </svg>
//                         </button>
//                     </div>
//                     <div className="server-nav-bar-tool-kit">Explore Public Servers</div>
//                 </li>

//                 <div className="bottom-server-bubble-seperator-container">
//                     <div className="bottom-server-bubble-seperator"></div>
//                 </div>


//                 <li className="server-bubbles" key="downloadApps">
//                     <div className="server-nav-bar-list-item">
//                         <button id="download-apps" onClick={() => this.props.openModal('downloadApps')} >
//                             <div id="fill-pill" className="pill-box"><span className="pill-box-item"></span></div>
//                             <svg fill="currentColor" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
//                                 <path d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 
//                                  12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 
//                                  20V18H6V20H18Z">
//                                 </path>
//                             </svg>

//                         </button>
//                     </div>
//                     <div className="server-nav-bar-tool-kit">Download Apps</div>
//                 </li>

//             </ul>

//         </div>
//     </div>
// )


//     }
// }

// export default TestPage;


// return (


//     <div className="leave-server-wrapper"  >
//         <div className="leave-server-backdrop"></div>
//         <div className="leave-server-layer">
//             <div id="leave-server-focus-lock" className="leave-server-focus-lock" >
//                 <div className="leave-server-root" >
//                     <div className="leave-server-flex" >
//                         <h2 className="remove-phone-header">
//                             Leave 'Shot from the point'
//                         </h2>
//                     </div>
//                     <div className="leave-server-content-scroll-base" >
//                         <div className="leave-server-text">
//                             Are you sure you want to leave {` `}
//                             <strong>shot from the point</strong>
//                             ? You won't be able to rejoin this server unless you are re-invited.
//                         </div>
//                         <div className="username-edit-sep"></div>
//                     </div>
//                         <form onSubmit={this.handleSubmit} className="leave-server-button-flex-wrapper">
//                             <button type="submit" onClick={() => this.cancel = true} className="delete-server-submit-button">Leave Server</button>
//                             <button type="submit" onClick={() => this.cancel = true} className="username-edit-cancel-button">cancel</button>
//                         </form>
//                 </div>
//             </div>
//         </div>
//     </div>


                                                                    {/* <div id="1s-op"className="check"><div className="inside"></div></div> */}
// )