import React from "react";


class ChannelNavBar extends React.Component {
    constructor (props) {
        super(props);

        this.state

    }


    render () {
    let default_profile_pic = this.props.currentUser.photo === undefined ? "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png" : this.props.currentUser.photo;


        if (this.props.server) {
            return (

                <div className="channel-nav-bar">

                    <div className="channel-nav-bar-container">


                        
                    </div>


                </div>









                // <div id="channel-nav-bar">
                //     <div id="channel-nav-sep">

                //         <div id="channel-nav-bar-server-name">
                //             <h5>{this.props.server.server_name}</h5>

                //         </div>



                //     </div>
                // </div>
            )
        }
        else {
            return null;
        }
    }

}


export default ChannelNavBar;