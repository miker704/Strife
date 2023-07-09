// import React from "react";


// class DeletedServerLoadingScreen extends React.Component {
//     constructor (props) {
//         super(props);
//     }

//     componentDidMount () {
//         if (this.props.history.location.pathname !== "/$/channels/@me") {
//             setTimeout(() => {
//                 document.getElementById('loading-screen-wrapper').classList.add('transition-out');
//             }, 4700);
//             setTimeout(() => {
//                 this.props.history.push("/$/channels/@me");
//             }, 5000)
//         }
//     }
//     render () {
//         return (
//             <div className="loading-screen-wrapper" id="loading-screen-wrapper">
//                 <div className="circle-wrap warped">
//                     <img className="loading-screen-img" alt=" " />
//                     <div className="shiny-button-container">
//                         <div className="shiny-button-flex">
//                         </div>
//                     </div>
//                 </div>
//                 <div className="loading-circle-infinite-warped"></div>
//                 <h1 className="loading-screen-img-h2">SERVER HAS BEEN DELETED, TELEPORTING HOME ... </h1>
//             </div>
//         )
//     }

// }

// export default DeletedServerLoadingScreen;