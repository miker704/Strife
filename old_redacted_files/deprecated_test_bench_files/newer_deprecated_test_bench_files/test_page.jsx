// import React from "react";
// // import defaultPFP from '../../../app/assets/images/discord_PFP.svg';

// class TestPage extends React.Component {
//     constructor (props) {
//         super(props);
//         this.renderModal = this.renderModal.bind(this);
//         this.handleInput = this.handleInput.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleOnChange = this.handleOnChange.bind(this);
//         this.handlePrivacy = this.handlePrivacy.bind(this);
//         this.setCount = this.setCount.bind(this);
//         this.selectChannelTypes = this.selectChannelTypes.bind(this);
//         this.cancel = false;
//         this.loadingMessage = this.props.selectedLoadingMsg;
//         this.state = {
//             password: '',
//             // allServers: this.props.servers,
//             // currServer: '',
//             // serverName: '',
//             value: '',
//             count: 1024,
//             choice: 1,
//             private_Selected: false,
//             channelName: '',
//             channelType: '',
//             selected_Option: 'TextChannel',

//             textChannelChecked: true,
//             voiceChecked: false


//         }


//         this.activateSlider = this.activateSlider.bind(this);
//     }


//     setCount (e) {
//         this.setState({
//             count: Math.abs(this.state.count - 1),
//             value: e.currentTarget.value

//         });

//         if (this.state.value === '') {
//             this.setState({ count: 1024 });
//         }

//     }




//     componentDidMount () {
//         this.props.fetchServers();
//         this.props.fetchDmServers();
//         // this.props.fetchServer();
//     }
//     renderModal (modalName) {

//         this.props.openModal(modalName);
//     }
//     handleInput (field) {
//         return (e) => {
//             this.setState({ [field]: e.currentTarget.value });
//         }
//     }
//     handleSubmit (e) {
//         e.preventDefault();
//     }

//     handleOnChange (e) {
//         // return this.setState({channelType:field})
//         this.setState({ selected_Option: e.currentTarget.value });

//     }
//     handlePrivacy () {
//         this.setState({ private_Selected: !this.state.private_Selected });

//     }
//     selectChannelTypes (channels) {
//         let channelHash = new Object();

//         for (let i of channels) {
//             channelHash[i.channel_cat_name] = [];
//         }
//         for (let i of channels) {
//             channelHash[i.channel_cat_name].push(i)
//         }

//         return channelHash;

//     }


//     activateSlider(){
//         let slider = document.getElementById('rangeSlider');
//         let grabber= document.getElementById('grabber');
//         let slide = document.getElementById("myRange");
//         let output = document.getElementById("demo");
//         output.innerHTML = slide.value;
//         slide.oninput = function(){
//             output.innerHTML= this.value;
//         }

//     }



//     // render () {
//         // let default_PFP = defaultPFP;
//         // let default_png = "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png";
//         // // let default_profile_pic = this.props.currentUser.photo === undefined ?
//         // //     <img src={default_png} alt="PFP" /> : <img className="pfp-svg" src={default_PFP} alt="PFP" />

//         // let default_profile_pic = this.props.currentUser.photo === undefined ? <img className="user-avatar-img" /> : <img src={this.props.currentUser.photo} alt="pfp" />
//         // let default_profile_pic1 = this.props.currentUser.photo === undefined ?
//         //     <div className={`user-avatar-img-svg-render color-${this.props.currentUser.color_tag}`}>
//         //         <img className="user-avatar-img-svg" />

//         //     </div> :
//         //     <img src={this.props.currentUser.photo} alt="pfp" />

//         // let default_user_pfp = this.props.currentUser.photo === undefined ?
//         //     default_PFP : this.props.currentUser.photo;
//         // let passwordErrorTag = this.props.errors.length > 0 ? "field-error" : "";



//         // return (


//         //     <div className="empty-messages-container">
//         //         <p className="this-is-a-test">HELLO WORLD</p>
//         //     </div>
//         // )
//         // 
//         // return (
//         //     <div className="loading-screen-wrapper" >

//         //         <div className="circle-wrap">
//         //             <img className="loading-screen-img" alt="loadingimg" />
//         //             <div className="shiny-button-container">
//         //                 <div className="shiny-button-flex">
//         //                 </div>
//         //             </div>
//         //         </div>

//         //         <h1 className="intrusion-warning">{this.loadingMessage}</h1>
//         //         {/* <div className="shiny-button-inner"></div> */}

//         //     </div >
//         // )



//     //     <mask id="svg-mask-status-online" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
//     //     <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
//     // </mask>
//         // return (
//         //     <div className="loading-screen-wrapper">
//         //         <div className="circle-wrap">
//         //             <img className="loading-screen-img" alt="loadingimg" />
//         //             <div className="shiny-button-container">
//         //                  <div className="shiny-button-flex">
//         //                  </div>
//         //              </div>
//         //         </div>
//         //         <h1 className="loading-screen-img-h2">{this.loadingMessage}</h1>
//         //     </div>
//         // )
//     // }



//     render(){
//         return (
//             <div className="loading-screen-wrapper">
            
//             <div className="slidecontainer">
//                     <input type="range" min={1} max={100} value={50} className="slider" id="myRange" onChange={()=>this.activateSlider()}/>
//                     <p>Value: <span id="demo"></span></p>
//             </div>


//                     <input type="range" min={0} max={21600} value={0}  className="cs-slowmode-slider"/>


//                     {/* <div id="rangeSlider"className="cs-slowmode-slider" role={"slider"}> */}
//                     <div id="rangeSlider"className="cs-slowmode-slider" role={'slider'}
//                     aria-valuemin={0}
//                     aria-valuemax={21600}
//                     aria-valuenow={0}
//                     aria-disabled={false}
//                     tabIndex={0}

//                     >

//                         <div className="cs-track">
//                             <div className="cs-mark" style={{ left: '0%' }}>
//                                 <div className="cs-mark-value">Off</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '7.69231%' }}>
//                                 <div className="cs-mark-value">5s</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '15.3846%' }}>
//                                 <div className="cs-mark-value">10s</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '23.0769%' }}>
//                                 <div className="cs-mark-value">15s</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '30.7692%' }}>
//                                 <div className="cs-mark-value">30s</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '38.4615%' }}>
//                                 <div className="cs-mark-value">1m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '46.1538%' }}>
//                                 <div className="cs-mark-value">2m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '53.8462%' }}>
//                                 <div className="cs-mark-value">5m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '61.5385%' }}>
//                                 <div className="cs-mark-value">10m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '69.2308%' }}>
//                                 <div className="cs-mark-value">15m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '76.9231%' }}>
//                                 <div className="cs-mark-value">30m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '84.6154%' }}>
//                                 <div className="cs-mark-value">1h</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '92.3077%' }}>
//                                 <div className="cs-mark-value">2h</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '100%' }}>
//                                 <div className="cs-mark-value">6h</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                         </div>
//                         <div className="cs-slider-bar">
//                             <div className="cs-slider-bar-fill" style={{ width: '0%' }}></div>

//                         </div>
//                         <div className="cs-track-bar">
//                             <div id="grabber"className="cs-grabber" style={{ left: '0%' }}></div>
//                         </div>

//                     </div>
//             </div>
//         )
//     }
// }

// export default TestPage;


// // const handlePopupShow = (e) => {
// //     let currTop = e.currentTarget.getBoundingClientRect().top;
// //     let currLeft = e.currentTarget.getBoundingClientRect().left;
    
// //     let windH = window.innerHeight;
// //     let windW = window.innerWidth;
// //     console.log(`window height = ${windH}`);
// //     console.log(`window width = ${windW}`);
// //     const realWidth = window.screen.width * window.devicePixelRatio;
// //     const realHeight = window.screen.height * window.devicePixelRatio;
// //     console.log(`
// //       Your screen resolution is: ${realWidth} x ${realHeight}
// //       Your screen devicePixelRatio is: ${window.devicePixelRatio}
// //       Your screen width is: ${window.screen.width}
// //       Your screen height is: ${window.screen.height}`);
// //     console.log(`clientBound is  = ${e.currentTarget.getBoundingClientRect()}`);
// //     console.table(e.currentTarget.getBoundingClientRect());
// //     console.log(`current resolution of bound clients is window.screen.height  = ${window.screen.height * 0.7889}`);
// //     console.log(`current resolution of bound clients is window.innerHeight  = ${window.innerHeight * 0.7889}`);
// //     console.log(`window.screen.height* 0.7889/1.28 = ${(window.screen.height * 0.7889)/1.28}`);
// //     console.log(`window.innerHeight * 0.7889/1.28  = ${(window.innerHeight * 0.7889)/1.28}`);


// //     //check if screen is 1920*1080 or 4k (3840*2160) give a range not an  exact as screens alter slightly 
// //     // if(realWidth > 3800 && realHeight > 2100){

// //     // }

// //     if(currTop > ((window.innerHeight*0.7889))){
// //         if(realWidth >= 3800 && realHeight >= 2100 ){
// //             currTop/= 1.1475;
// //         }
// //         else{
// //             // screen resolution is assumed 1920 * 1080
// //             currTop /= 1.28;
// //         }
// //     }


// //     // if (currTop > 542) {
// //     //     currTop /= 1.28;
// //     // }
// //     setPopupTop(currTop);
// //     setPopupLeft(currLeft);
// //     setShowPopup(!showPopup);
// // }



//         // if (currTop > 640) {
//         //     console.log(`currtop > 640 ${currTop / 3}`);
//         //     currTop /= 3;
//         //     setPopupTop(currTop);
//         // }
//         // else if (currTop > 101 && currTop < 639) {
//         //     console.log(`currtop >101 and < 639 ${currTop / 2}`);
//         //     currTop /= 2;
//         //     setPopupTop(currTop);
//         // }

//         // else if (currTop <= 100) {
//         //     console.log(`currtop <= 100px% ${currTop * 0.095}`);
//         //     setPopupTop(currTop * 0.095);
//         // }
//         // else {
//         //     console.log(`currtop is normal @ ${currTop}`);
//         //     setPopupTop(currTop);
//         // }


//         /**
//          * 
//          * 
//          * 
//          * 
//       <div className="loading-screen-wrapper">
//             <div>
//                 <div>
//                     <div id="rangeSlider" className="cs-slowmode-slider" role={'slider'}
//                         aria-valuemin={0}
//                         aria-valuemax={21600}
//                         aria-valuenow={0}
//                         aria-disabled={false}
//                         tabIndex={0}
//                     >

//                         <div className="cs-track">
//                             <div className="cs-mark" style={{ left: '0%' }}>
//                                 <div className="cs-mark-value">Off</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '7.69231%' }}>
//                                 <div className="cs-mark-value">5s</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '15.3846%' }}>
//                                 <div className="cs-mark-value">10s</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '23.0769%' }}>
//                                 <div className="cs-mark-value">15s</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '30.7692%' }}>
//                                 <div className="cs-mark-value">30s</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '38.4615%' }}>
//                                 <div className="cs-mark-value">1m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '46.1538%' }}>
//                                 <div className="cs-mark-value">2m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '53.8462%' }}>
//                                 <div className="cs-mark-value">5m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '61.5385%' }}>
//                                 <div className="cs-mark-value">10m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '69.2308%' }}>
//                                 <div className="cs-mark-value">15m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '76.9231%' }}>
//                                 <div className="cs-mark-value">30m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '84.6154%' }}>
//                                 <div className="cs-mark-value">1h</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '92.3077%' }}>
//                                 <div className="cs-mark-value">2h</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '100%' }}>
//                                 <div className="cs-mark-value">6h</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                         </div>
//                         <div className="cs-slider-bar">
//                             <div className="cs-slider-bar-fill" style={{ width: '0%' }}></div>
//                         </div>
//                         <div className="cs-track-bar">
//                             <div draggable={true} id="grabber" className="cs-grabber" style={{ left: '0%' }}></div>
//                         </div>
//                     </div>

//                     <div>
//                         <div className="csm-split-flex-container">
//                             <div>
//                                 <h3 className="cs-op-div-fjs-h5">VIDEO QUALITY</h3>
//                                 <div role={'radiogroup'} className="csm-vQ-rad-group">
//                                     <div className={`csm-vq-rad-item ${videoQuality === 'Auto' ? `checked` : ``}`} onClick={() => setvideoQuality('Auto')}>
//                                         <div className="csm-vq-rad-item-bar">
//                                             <div>
//                                                 <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                     <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172
//                                                      4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715
//                                                       2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor">
//                                                     </path>
//                                                     <circle cx="12" cy="12" r="5" className={`csm-rad-item ${videoQuality === 'Auto' ? `fill` : ``}`} fill="currentColor">
//                                                     </circle>
//                                                 </svg>
//                                             </div>
//                                             <div className="csm-vq-rad-item-info">
//                                                 <div className="csm-rad-item-text">Auto</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className={`csm-vq-rad-item ${videoQuality === '720P' ? `checked` : ``}`} onClick={() => setvideoQuality('720P')}>
//                                         <div className="csm-vq-rad-item-bar">
//                                             <div>
//                                                 <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                     <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172
//                                                      4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715
//                                                       2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor">
//                                                     </path>
//                                                     <circle cx="12" cy="12" r="5" className={`csm-rad-item ${videoQuality === '720P' ? `fill` : ``}`} fill="currentColor">
//                                                     </circle>
//                                                 </svg>
//                                             </div>
//                                             <div className="csm-vq-rad-item-info">
//                                                 <div className="csm-rad-item-text">720P</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="cs-inactive-sub-info">
//                                 Sets camera video quality for all channel participants. Choose{`${" "}`}
//                                 <strong>Auto</strong>
//                                 for optimal performance.
//                             </div>
//                         </div>
//                     </div>
//                     <div className="csm-split-flex-container">
//                         <h3 className="cs-op-div-fjs-h5">REGION OVERRIDE</h3>
//                         <div className="cs-select-box-look-filled" role="button" aria-disabled="false" aria-expanded="false" aria-haspopup="listbox">
//                             <span className="cs-sb-value">
//                                 <span className="cs-sb-option-label-value">
//                                     3 Days
//                                 </span>
//                             </span>
//                             <div className="server-op-divider-icons-wrap">
//                                 <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                     <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z">
//                                     </path>
//                                 </svg>
//                             </div>
//                         </div>
//                         <div className="cs-inactive-sub-info">
//                             Anyone in this channel will connect to the region you set, regardless of where they live. Regions
//                             affect voice and video quality. Leave it on Automatic and $TR!F3 will figure out what works best.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>






//  // "& .MuiMenuItem-root.Mui-selected:hover": {
//                 //     backgroundColor: 'rgba(78, 80,88,0.6)',
//                 //     color: 'white',
//                 // },
//                 // "& .MuiMenuItem-root.Mui-selected:focus": {
//                 //     backgroundColor: 'rgba(78, 80,88,0.6)',
//                 //     color: 'white',
//                 // },
//                 // "& .MuiMenuItem-root.Mui-selected:focus-within": {
//                 //     backgroundColor: 'rgba(78, 80,88,0.6)',
//                 //     color: 'white',
//                 // },
//                 // "& .MuiMenuItem-root.Mui-selected:active": {
//                 //     backgroundColor: 'rgba(78, 80,88,0.6)',
//                 //     color: 'white',
//                 // },






























//          */