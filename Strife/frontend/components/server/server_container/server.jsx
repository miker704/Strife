import React from "react";
import ChannelNavBarContainer from "../../channels/channel_nav_bar/channel_nav_bar_container";
import ServerHeaderNavBarContainer from "../server_header_nav_bar/server_header_nav_bar_container";

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

                    <div className="server-content">

                        <ChannelNavBarContainer />

                        <div className="server-chat">


                            <ServerHeaderNavBarContainer isViz={this.setHideMembersList}/>

                        </div>




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