// import React from "react";

// class IntrusionPreventionLoadingScreen extends React.Component {
//     constructor (props) {
//         super(props);
//         this.loadingMessage = this.props.selectedLoadingMsg;
//     }


//     componentDidMount () {
//         this.props.fetchUser(this.props.currentUserId);
//         if (this.props.history.location.pathname !== "/$/channels/@me") {
//             setTimeout(() => {
//                 document.getElementById('loading-screen-wrapper').classList.add('transition-out');
//             }, 9700);

//             setTimeout(() => {
//                 this.props.history.push("/$/channels/@me");
//             }, 10000);
//         }
//     }


//     render () {
//         return (
//             <div className="loading-screen-wrapper" id="loading-screen-wrapper" >
//                 <div className="circle-wrap sips">
//                     <img className="loading-screen-img" alt=" " />
//                     <div className="shiny-button-container">
//                         <div className="shiny-button-flex">
//                         </div>
//                     </div>
//                 </div>
//                 <div className="loading-circle-infinite-sips"></div>
//                 <h1 className="intrusion-warning">{this.loadingMessage}</h1>
//             </div >
//         )
//     }

// }

// export default IntrusionPreventionLoadingScreen;