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
                        <div className="channel-post-container">
                            <div className="channel-unread">
                                <div className="channel-unread-top">
                                    <span className="channel-unread-text"></span>
                                </div>
                            </div>
                        </div>
                        <div className="channel-nav-scroller">
                            <ul className="ul-channels">

                                <li className="channel-li-item-cat">
                                    channel catagory
                                    <div className="channel-li-icon">
                                        <div className="main-channel-content">
                                            <svg className="channel-icon-arrow" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41
                                                     8.59004L6 10L12 16L18 10L16.59 8.59004Z">
                                                </path>
                                            </svg>
                                            <h2 className="main-channel-content-h2">
                                                <div className="main-channel-h2">Text Channels</div>
                                            </h2>
                                        </div>
                                        <div className="channel-plus-div">
                                            <button type="button" className="add-channel-button">
                                                <div className="add-channel-button-inner">
                                                    <svg className="addButtonIcon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 18 18">
                                                        <polygon fillRule="nonzero" fill="currentColor"
                                                            points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8">
                                                        </polygon>
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
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