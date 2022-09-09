import React from "react";
import ChannelNavBarContainer from "../../channels/channel_nav_bar/channel_nav_bar_container";
import ServerHeaderNavBarContainer from "../server_header_nav_bar/server_header_nav_bar_container";
import ServerMessages from "../server_messages/server_messages";
import ServerMembersListContainer from "../server_members/server_members_list_container";

class Server extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hideMembersList: false
        }
        this.setHideMembersList = this.setHideMembersList.bind(this);

    }
    

    componentWillUnmount () {
        this.props.removeServerErrors();
        this.props.removeChannelErrors();
    }


    setHideMembersList () {
        this.setState({ hideMembersList: !this.state.hideMembersList });
    }



    render () {

        //if server is rendered and fetch render it else return null FAIL SAFE for refresh or odd application state 
        if (this.props.server) {

            return (
                <div className="server-base">

                        <ServerHeaderNavBarContainer isViz={this.setHideMembersList} />
                        <div className="server-content">
                            {/* <div className="server-chat"> */}
                                <ServerMessages/>
                            {/* </div> */}

                            {this.state.hideMembersList && <ServerMembersListContainer/>}
                        </div>

                </div>
            )

        }


        else {
            return null;
        }

    }

}

export default Server;