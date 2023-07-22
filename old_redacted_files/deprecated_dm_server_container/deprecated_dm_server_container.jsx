// import React from "react";
// import DmServerHeaderNavBarContainer from "../dm_server_header_nav_bar/dm_server_header_nav_bar_container";
// import DmServerMemberListContainer from "../dm_server_members/dm_server_list_container";
// import DmMessagesContainer from "../dm_messages/dm_messages_container";


// class DmServer extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             hideMembersList: false
//         }
//         this.renderDmMemberContainer = this.renderDmMemberContainer.bind(this);
//         this.setHideMembersList = this.setHideMembersList.bind(this);

//     }
//     componentDidMount () {
//         // this.props.reSyncCurrentUser(this.props.currentUserId).then((action) => {
//         //     let currUser = action.currentUser;
//         //     if (!currUser.dmServersJoined.includes(parseInt(this.props.dmServerId))) {
//         //         this.props.removeDmServer(this.props.dmServerId);
//         //         this.props.history.push('/$TR!F3-INTRUSION-PREVENTION/');
//         //     }
//         //     else {

//         //         this.props.fetchDmServer(this.props.dmServerId);
//         //     }

//         // })
//         // this.props.fetchDmServer(this.props.dmServerId);
//     }

//     setHideMembersList () {
//         this.setState({ hideMembersList: !this.state.hideMembersList });
//     }

//     renderDmMemberContainer () {
//         if (Object.values(this.props.dmServerMembers).length > 2) {
//             if (this.state.hideMembersList === false) {
//                 return (
//                     <DmServerMemberListContainer dmServerMembers={this.props.dmServerMembers} />
//                 )
//             }
//         }
//     }

//     render () {
//         if (this.props.dmServer) {
//             return (
//                 <div className="dm-server-container">
//                     <DmServerHeaderNavBarContainer isViz={this.setHideMembersList} _viz={this.state.hideMembersList} dmServerMembers={this.props.dmServerMembers} />
//                     <div className="dm-server-content-container">
//                         <div className="dm-messages-container-wrapper">
//                             <DmMessagesContainer />
//                         </div>
//                         {this.renderDmMemberContainer()}
//                     </div>
//                 </div>
//             )
//         }
//         else {
//             return null;
//         }


//     }
// }

// export default DmServer;