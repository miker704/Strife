import React from "react";


class BlockedList extends React.Component {
    constructor (props) {
        super(props);

        this.removeBlockedPerson = this.removeBlockedPerson.bind(this);
    }

    componentDidMount () {
        this.props.requestFriendships();
    }


    componentWillUnmount () {
        if (this.props.errors.length > 0) {

            this.props.removeFriendshipErrors();
        }
    }

    removeBlockedPerson (blockedUser) {
        let substate = {
            user_id: this.props.currentUser.id,
            friend_id: blockedUser.id,
        }
        this.props.removeBlockedUser(substate);
    }


    render () {

        let allBlockedUsers = this.props.blockedUsers;
        let default_Photo = "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png";


        if (allBlockedUsers.length > 0) {

            return (

                <div className="friend-index-container block">


                    <div className="all-search-bar">
                        <div className="all-search-bar-inner">
                            <input className="input-all-friends" type="text" placeholder="Search" />
                            <div className="magnify-icon-wrapper">
                                <div className="magnify-icon">
                                    <svg className="mag-icon1" aria-label="Search" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 
                                17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 
                                5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 
                                13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 
                                14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 
                                4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 
                                14.242 14.243C13.109 15.376 11.603 16 10 16Z">
                                        </path>
                                    </svg>
                                    <svg className="clear-mag-icon1" aria-label="Clear" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>



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
                                                    <svg onClick={() => this.removeBlockedPerson(blockedUser)} stroke="currentColor" fill="currentColor" strokeWidth="0"
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