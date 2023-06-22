// deprecated text content changed as discords move to enter a username to submit friend requests
// replaced with a functional component.

// class FriendRequestErrorModal extends React.Component {
//     constructor (props) {
//         super(props);
//     }

//     componentDidMount () {
//         window.addEventListener('keyup', this.props.handleESC, false);

//     }

//     componentWillUnmount () {
//         window.removeEventListener('keyup', this.props.handleESC, false);
//         this.props.removeSessionErrors();
//     }

//     render () {
//         return (


//             <div className="ffrm-layer-container">
//                 <div className="frfm-backdrop" >
//                     <div className="frfm-wrapper">
//                         <div className="frfm" onClick={e => e.stopPropagation}>
//                             <div className="frfm-inner">
//                                 <div className="form-class-200">
//                                     <div className="form-content-1">
//                                         <div className="form-content-1-inner">
//                                             <h2 className="form-content-1-header">
//                                                 Friend Request Failed
//                                             </h2>
//                                             <div className="form-content-1-subtext">
//                                                 Hm, didn't work. Double check that the capitalization, spelling,
//                                                 any spaces, and numbers are correct.
//                                             </div>
//                                         </div>
//                                         <div className="frfm-div-sep"></div>
//                                     </div>

//                                     <div className="frfm-button-sec">
//                                         <button type="button" onClick={() => { this.props.closeModal(); }} className="frfm-button">Okay</button>
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
