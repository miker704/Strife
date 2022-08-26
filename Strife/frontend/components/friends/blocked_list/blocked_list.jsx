import React from "react";


class BlockedList extends React.Component {
    constructor (props) {
        super(props);

        this.removeBlockedPerson = this.removeBlockedPerson.bind(this);
    }



    componentDidMount () {
        this.props.requestFriendships();
    }

    removeBlockedPerson(blockedUser){
        let substate = {
            user_id: this.props.currentUser.id,
            friend_id: blockedUser.id,
        }
        console.log("friendship delete on substate: ", substate);
        this.props.removeBlockedUser(substate);
    }


    render () {

        let allBlockedUsers = this.props.blockedUsers;
        let default_Photo = "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png";

      
        if (allBlockedUsers.length > 0) {

            return (

                <div className="friend-index-container">
                    <div className="all-friends">
                        {`BLOCKED USERS - ${allBlockedUsers.length}`}
                    </div>
                    <div className="friend-index">
                        <ul className="friend-index-item-wrapper">
                            {
                                allBlockedUsers.map((blockedUser, blockedUserIdx) => {
                                    return (
                                        <li className="friend-index-item" key={blockedUser.id}>

                                            <div className="friend-index-item-wrapper-inner">
                                                <div className="friend-account-info-wrapper-super">
                                                    <div className="friend-info">
                                                        <img src={`${blockedUser.photo === undefined ? default_Photo : blockedUser.photo}`} alt="pfp" />
                                                    </div>
                                                    <div className="friend-account-info-wrapper">
                                                        <div className="friend-account-info">
                                                            <div className="friend-tag">
                                                                {blockedUser.username}
                                                                <span>#{blockedUser.strife_id_tag}</span>
                                                            </div>
                                                        </div>
                                                        <div className="subtext">
                                                            <div className="subtext-inner">
                                                                Blocked
                                                                <div className="circle-blocked"></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="pending-request-actions">
                                                <div className="pending-deny-icon">
                                                    <svg onClick = {() => this.removeBlockedPerson(blockedUser)}stroke="currentColor" fill="currentColor" strokeWidth="0"
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
                                                    <div className="pending-request-actions-tool-tip">Remove</div>
                                                    <div className="pending-request-actions-tool-tip-triangle"></div>
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
                                <div className="block-wumpus-text">You can't unblock the Wumpus.</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            
        }


    }
}

export default BlockedList;