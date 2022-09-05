import React from "react";
import ChannelNavBarContainer from "../../channels/channel_nav_bar/channel_nav_bar_container";


class Server extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
        }

    }
    
    componentWillUnmount () {
        this.props.removeServerErrors();
        this.props.removeChannelErrors();
    }




    render () {

        //if server is rendered and fetch render it else return null FAIL SAFE for refresh or odd application state 
        if (this.props.server) {

            return (
                <div className="server-base">

                    <div className="server-content">



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