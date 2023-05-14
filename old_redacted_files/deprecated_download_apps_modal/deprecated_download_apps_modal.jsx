// swapped to functional component as there is no need for a class based component here.

// class DownloadApps extends React.Component {

//     constructor (props) {
//         super(props);

//         this.closeThisModal = this.closeThisModal.bind(this);
//     }

//     componentDidMount () {
//         window.addEventListener('keyup', this.props.handleESC, false);

//     }

//     componentWillUnmount () {
//         window.removeEventListener('keyup', this.props.handleESC, false);
//     }





//     render () {
//         return (
//             <div className="da-flex-layer">
//                 <div className="da-focus-lock" onClick={e => e.stopPropagation()}>
//                     <div className="da-dl-apps">
//                         <div className="da-dl-apps-inner">
//                             <button type="button" className="close-da" onClick={() => this.props.closeModal()}>
//                                 <div className="close-da-contents">
//                                     <svg className="close-da-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                         <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12
//                                              13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
//                                         </path>
//                                     </svg>
//                                 </div>
//                             </button>
//                             <div className="platform-wraps">
//                                 <h3 className="platform-wraps-h3">
//                                     Get $TR!F3 at Home
//                                 </h3>
//                                 <ul className="platforms-ul">
//                                     <li className="platforms-li-item">
//                                         <div className="platforms-li-item-inner-wrapper">
//                                             <div className="platforms-icon-wrap">
//                                                 <div className="platform-apple-icon"></div>
//                                                 <div className="platform-apple-icon-active"></div>
//                                             </div>
//                                             <div>
//                                                 <h3 className="da-icon-header">
//                                                     MacOS
//                                                 </h3>
//                                                 <div className="download-app-buttons">
//                                                     <a target="_blank" className="download-app-buttons-anchor" href="https://discord.com/api/download?platform=osx">Download</a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </li>
//                                     <li className="platforms-li-item">
//                                         <div className="platforms-li-item-inner-wrapper">
//                                             <div className="platforms-icon-wrap">
//                                                 <div className="platform-windows-icon"></div>
//                                                 <div className="platform-windows-icon-active"></div>
//                                             </div>
//                                             <div>
//                                                 <h3 className="da-icon-header">
//                                                     Windows
//                                                 </h3>
//                                                 <div className="download-app-buttons">
//                                                     <a target="_blank" className="download-app-buttons-anchor" href="https://discord.com/api/download?platform=win">Download</a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </li>
//                                     <li className="platforms-li-item">
//                                         <div className="platforms-li-item-inner-wrapper">
//                                             <div className="platforms-icon-wrap">
//                                                 <div className="platform-linux-icon"></div>
//                                                 <div className="platform-linux-icon-active"></div>
//                                             </div>
//                                             <div>
//                                                 <h3 className="da-icon-header">
//                                                     Linux
//                                                 </h3>
//                                                 <div className="download-app-buttons">
//                                                     <a target="_blank" className="download-app-buttons-anchor-2"
//                                                         href="https://discord.com/api/download?platform=linux&amp;format=deb">Deb</a>

//                                                     <a target="_blank" className="download-app-buttons-anchor-3"
//                                                         href="https://discord.com/api/download?platform=linux&format=tar.gz">Tar</a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="mobile-platforms">
//                                 <h3 className="mobile-header">Or on the go</h3>
//                                 <ul className="platforms-ul">
//                                     <li className="platforms-li-item">
//                                         <div className="platforms-li-item-inner-wrapper">
//                                             <div className="platforms-icon-wrap">
//                                                 <div className="platform-apple-ios-icon"></div>
//                                                 <div className="platform-apple-ios-icon-active"></div>
//                                             </div>
//                                             <div>
//                                                 <h3 className="da-icon-header">
//                                                     Apple iOS
//                                                 </h3>
//                                                 <div className="download-app-buttons">
//                                                     <a target="_blank" className="download-app-buttons-anchor" href="https://itunes.apple.com/app/discord/id985746746">Download</a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </li>
//                                     <li className="platforms-li-item">
//                                         <div className="platforms-li-item-inner-wrapper">
//                                             <div className="platforms-icon-wrap">
//                                                 <div className="platform-android-icon"></div>
//                                                 <div className="platform-android-icon-active"></div>
//                                             </div>
//                                             <div>
//                                                 <h3 className="da-icon-header">
//                                                     Android
//                                                 </h3>
//                                                 <div className="download-app-buttons">
//                                                     <a target="_blank" className="download-app-buttons-anchor" href="https://play.google.com/store/apps/details?id=com.discord">Download</a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

// }


