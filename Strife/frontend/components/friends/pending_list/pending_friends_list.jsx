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
                                allFriends.map((friend, friendIdx) => {
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
                                                                {`${friend.online ? "online" : "offline"}`}
                                                                <div className={`${friend.online ? "circle-online" : "circle-offline"}`}></div>
                                                            </div>
                                                        </div>
                                                    </div>

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

        else  {
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