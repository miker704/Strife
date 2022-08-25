import React from "react";

class PendingFriendList extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.requestFriendships();
    }


    render () {
        let outgoing_requests = this.props.outgoing;
        let incoming_requests = this.props.incoming;
        let default_Photo = "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png";




        if (outgoing_requests.length > 0 && incoming_requests.length > 0) {
            return (
                <div className="friend-index-container">
                    <div className="all-friends">
                        {`PENDING FRIEND REQUESTS - ${outgoing_requests.length + incoming_requests.length}`}
                    </div>
                    <div className="friend-index">
                        <ul className="friend-index-item-wrapper">
                            {
                                incoming_requests.map((friend, friendIdx) => {
                                    return (
                                        <li className="friend-index-item" key={friendIdx}>

                                            <div className="friend-index-item-wrapper-inner">
                                                <div className="friend-account-info-wrapper-super">
                                                    <div className="friend-info">
                                                        <img src={`${friend.photo === undefined ? default_Photo : friend.photo}`} alt="pfp" />
                                                    </div>
                                                    <div className="friend-account-info-wrapper">
                                                        <div className="friend-account-info">
                                                            <div className="friend-tag">
                                                                {friend.username}
                                                                <span>#{friend.strife_id_tag}</span>
                                                            </div>
                                                        </div>
                                                        <div className="subtext">
                                                            <div className="subtext-inner">
                                                                {`Incoming Friend Request`}
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="pending-request-actions">

                                                <div className="pending-check-icon">
                                                    
                                                </div>


                                                <div className="pending-deny-icon">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                        viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19
                                                     0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 
                                                     0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48
                                                      0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28
                                                       256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24
                                                        22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07
                                                         100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28
                                                          12.28-32.19 0-44.48L242.72 256z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>

                                        </li>
                                    )
                                })
                            }
                            {
                                outgoing_requests.map((friend, friendIdx) => {
                                    return (
                                        <li className="friend-index-item" key={friendIdx}>

                                            <div className="friend-index-item-wrapper-inner">
                                                <div className="friend-account-info-wrapper-super">
                                                    <div className="friend-info">
                                                        <img src={`${friend.photo === undefined ? default_Photo : friend.photo}`} alt="pfp" />
                                                    </div>
                                                    <div className="friend-account-info-wrapper">
                                                        <div className="friend-account-info">
                                                            <div className="friend-tag">
                                                                {friend.username}
                                                                <span>#{friend.strife_id_tag}</span>
                                                            </div>
                                                        </div>
                                                        <div className="subtext">
                                                            <div className="subtext-inner">
                                                                {`Outgoing Friend Request`}
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="pending-request-actions">
                                                <div className="pending-deny-icon">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                        viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19
                                                     0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 
                                                     0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48
                                                      0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28
                                                       256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24
                                                        22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07
                                                         100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28
                                                          12.28-32.19 0-44.48L242.72 256z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>

                                        </li>
                                    )
                                })
                            }




                        </ul>
                    </div>
                </div>


            )
        }

        else {
            return (
                <div className="friend-index-container">
                    <div className="empty-state-container">
                        <div className="blocked-users-empty">
                            <div className="blocked-users-flex">
                                <img className="cant-block-wumpus" alt="img" />
                                <div className="block-wumpus-text">There are no pending friend requests. Here's Wumpus for now.</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }




    }
}

export default PendingFriendList;