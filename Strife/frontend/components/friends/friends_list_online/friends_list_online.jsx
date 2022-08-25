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



                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>


        )
    }
}

export default FriendShipIndexOnline;