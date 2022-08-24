import React from "react";


class FriendsHomePageContainer extends React.Component {
    constructor (props) {
        super(props);
    }



    render () {
        return (
            <div className="home-nav-bar-container">
                <div className="home-nav-bar">
                    <div className="home-nav-bar-inner">
                        <div className="home-friends-icon-wrapper">
                            <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="none" fillRule="evenodd">
                                    <path fill="currentColor" fillRule="nonzero"
                                        d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 
                                                15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 
                                                C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 
                                                17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)">

                                    </path>
                                    <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 
                                                L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                            <h3 className="home-nav-bar-friends-text">Friends</h3>
                            <div className="home-friend-divider"></div>
                            <div className="friends-status-nav-bar">
                                <div className="online-tab">Online</div>
                                <div className="all-tab">All</div>
                                <div className="pending-tab">Pending</div>
                                <div className="blocked-tab">Blocked</div>
                                <div className="add-friend-tab"><span>Add Friend</span></div>

                            </div>
                            <div className="home-nav-tool-bar">
                                <div className="invite-tool-bar"></div>
                                <div className="inbox-tool-bar"></div>
                                <div className="help-tool-bar"></div>
                            </div>
                    </div>


                </div>
            </div>
        )
    }


}

export default FriendsHomePageContainer;
