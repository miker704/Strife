// import React from "react";
// import ChannelNavBarContainer from "../../channels/channel_nav_bar/channel_nav_bar_container";
// import ServerHeaderNavBarContainer from "../server_header_nav_bar/server_header_nav_bar_container";
// import ServerMembersListContainer from "../server_members/server_members_list_container";
// import ServerChatRoomContainer from "../server_chat_room/server_chat_room_container";

// class Server extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             hideMembersList: false
//         }
//         this.setHideMembersList = this.setHideMembersList.bind(this);

//     }
//     componentDidMount () {

//         this.props.fetchServer(this.props.serverId);
//     }


//     componentWillUnmount () {
//         this.props.removeServerErrors();
//         this.props.removeChannelErrors();
//     }

//     // componentDidUpdate (prevProps) {

//         // if(Object.values(prevProps.server.users).length !== Object.values(this.props.server.users).length){
//         //     fet
//         // }

//         // for(let userProp in prevProps.users){
//         //     if()
//         // }

//         // for(let user in this.props.server.users){

//         // }


//     // }

//     setHideMembersList () {
//         this.setState({ hideMembersList: !this.state.hideMembersList });
//     }



//     render () {

//         // console.log("server props : ", this.props);
//         //if server is rendered and fetch render it else return null FAIL SAFE for refresh or odd application state 
//         if (this.props.server) {

//             return (

//                 <div className="server-main-base">
//                     <ChannelNavBarContainer server={this.props.server} currentChannelId={this.props.currentChannelId}
//                         serverId={this.props.serverId} channels={this.props.channels} isViz={this.setHideMembersList}
//                         hideMembersList={this.state.hideMembersList}
//                     />
//                     <div className="server-base">

//                         <ServerHeaderNavBarContainer isViz={this.setHideMembersList}
//                             _viz={this.state.hideMembersList}
//                             channels={this.props.channels}
//                             currentChannelId={this.props.currentChannelId}
//                             server={this.props.server}
//                             serverId={this.props.serverId}
//                             currentChannel={this.props.currentChannel}
//                         />
//                         <div className="server-content">
//                             <ServerChatRoomContainer currentChannel={this.props.currentChannel} />
//                             {!this.state.hideMembersList && <ServerMembersListContainer
//                                 serverMembers={Object.values(this.props.server.users)}
//                                 server={this.props.server}
//                                 users={this.props.users} />}
//                         </div>
//                     </div>
//                 </div>
//             )

//         }

//         else {
//             return null;
//         }

//     }

// }

// export default Server;