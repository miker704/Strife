// import React from "react";

// class UpdateLoadingScreen extends React.Component {
//     constructor (props) {
//         super(props);
//         this.loadingMessage = this.props.selectedLoadingMsg;
//     }


//     componentDidMount () {
//         this.props.receiveStrifeB0t();
//         this.props.fetchUser(this.props.currentUserId);
//         if (this.props.history.location.pathname !== "/$/channels/@me") {
//             setTimeout(() => {
//                 document.getElementById('loading-screen-wrapper').classList.add('transition-out');
//             }, 4700);
//             setTimeout(() => {
//                 this.props.history.push("/$/channels/@me");
//             }, 5000)
//         };

//     }

//     render () {
//         return (
//             <div className="loading-screen-wrapper" id="loading-screen-wrapper" >
//                 <div className="circle-wrap updating">
//                     <img className="loading-screen-img" alt=" " />
//                     <div className="shiny-button-container">
//                         <div className="shiny-button-flex">
//                         </div>
//                     </div>
//                 </div>
//                 <div className="loading-circle-updating-progress"></div>
//                 <h1 className="loading-screen-img-h2">{this.loadingMessage}</h1>
//             </div>
//         )
//     }


// }

// export default UpdateLoadingScreen;