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
        console.log("all friends : ", allFriends);
        console.log("this.props.friends-index : ", this.props);
        return (
            // <div className="friend-index-item-wrapper">
            //     <div className="friend-index-item">
            //         <div className="friend-info">
            //                 <p className="this-is-a-test">HELLOOOOOOOOOO</p>
            //         </div>
            //     </div>
            // </div>

            <div className="friend-index-container">
                <div className="friend-index">
                    <div className="all-friends">
                        {`ALL FRIENDS - ${allFriends.length}`}
                    </div>
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