import React from "react";



class FriendShipIndexOnline extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        this.props.requestFriendships();
    }

   


    render () {
        let allFriends = this.props.friends;
        let default_Photo = "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png";



        if (allFriends.length > 0) {
            return (

                <div className="friend-index-container">
                    <div className="all-friends">
                        {`ONLINE - ${allFriends.length}`}
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

                                            <div className="friend-msg-actions">
                                                <div className="friend-msg-button">
                                                    <svg className="icon-1WV" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 
                                                                4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 
                                                                17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 
                                                                20.1925 3 19.198 3H4.79805Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div className="friend-options-button">
                                                    <svg className="icon-1WVg" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                        <g fill="none" fillRule="evenodd">
                                                            <path d="M24 0v24H0V0z">
                                                            </path>
                                                            <path fill="currentColor" d="M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2
                                                                     .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2
                                                                      2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z">
                                                            </path>
                                                        </g>
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
                                <img className="no-friends-online-icon" alt="img" />
                                <div className="block-wumpus-text">No one's around to play with Wumpus.</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }





    }
}

export default FriendShipIndexOnline;