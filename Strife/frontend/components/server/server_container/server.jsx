import React from "react";
import ChannelNavBarContainer from "../../channels/channel_nav_bar/channel_nav_bar_container";
import ServerHeaderNavBarContainer from "../server_header_nav_bar/server_header_nav_bar_container";
import ServerMessages from "../server_messages/server_messages";
import ServerMembersListContainer from "../server_members/server_members_list_container";
import ServerChatRoomContainer from "../server_chat_room/server_chat_room_container";

class Server extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hideMembersList: false
        }
        this.setHideMembersList = this.setHideMembersList.bind(this);

    }
    componentDidMount () {
        console.log("calling comp did mount from server main ");
        // setTimeout(() => {

        this.props.fetchServer(this.props.serverId);
        // this.props.fetchChannel(this.props.currentChannelId)
        // },1)
    }


    componentWillUnmount () {
        this.props.removeServerErrors();
        this.props.removeChannelErrors();
    }


    setHideMembersList () {
        this.setState({ hideMembersList: !this.state.hideMembersList });
    }



    render () {
        // console.log("server main: this.props.server: ", this.props.server)



        //if server is rendered and fetch render it else return null FAIL SAFE for refresh or odd application state 
        if (this.props.server) {
            // console.log("server main: server.id: ", this.props.server.id)
            // console.log("server main: server,messages: ", this.props.server.messages)
            // console.log("server main: server.channels: ", this.props.server.channels)
            // console.log("server main: server.all_server_memberships: ", this.props.server.all_Server_Memberships)
            // console.log("server main: servername: ", this.props.server.server_name)
            // console.log("server main: server.users: ", this.props.server.users)

            return (

                <div className="server-main-base">
                    {/* <div className="server-inner-base"> */}
                    <ChannelNavBarContainer server={this.props.server} currentChannelId={this.props.currentChannelId}
                        serverId={this.props.serverId} channels={this.props.channels}
                    />
                    <div className="server-base">

                        <ServerHeaderNavBarContainer isViz={this.setHideMembersList}
                            channels={this.props.channels}
                            currentChannelId={this.props.currentChannelId}
                            server={this.props.server}
                            serverId={this.props.serverId}
                            currentChannel={this.props.currentChannel}
                        />
                        <div className="server-content">
                            {/* <div className="server-chat"> */}
                            {/* <ServerMessages /> */}
                            <ServerChatRoomContainer/>
                            {/* </div> */}

                            {!this.state.hideMembersList && <ServerMembersListContainer />}
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            )

        }


        else {
            return null;
        }

    }

}

export default Server;