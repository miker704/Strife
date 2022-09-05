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

                    <div className="channel-nav-bar-container-wrapper">
                        <div className="channel-nav-bar-top-container">
                            <div className="channel-nav-bar-top-container-header">
                                <div className="channel-nav-bar-header-content">
                                    <h1 className="channel-nav-bar-h1">
                                        servername
                                    </h1>
                                    <div className="channel-nav-bar-top-button">

                                    </div>
                                    <div className="channel-nav-chevron">
                                        <svg width="18" height="18" className="icon-chevron">
                                            <g fill="none" fillRule="evenodd">
                                                <path d="M0 0h18v18H0"></path>
                                                <path stroke="currentColor" d="M4.5 4.5l9 9" strokeLinecap="round"></path>
                                                <path stroke="currentColor" d="M13.5 4.5l-9 9" strokeLinecap="round"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="channel-nav-sep"><div></div></div>

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