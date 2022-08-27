import React from "react";
import FriendShipIndexContainer from "../friends_list/friends_list_container";
import FriendShipIndexOnlineContainer from "../friends_list_online/friends_list_online_container";
import BlockedListContainer from "../blocked_list/blocked_list_container";
import PendingFriendListContainer from "../pending_list/pending_friends_list_container";
import AddFriendsContainer from "../add_friends/add_friends_container";


class FriendsHomePageContainer extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            online: true,
            All: false,
            Pending: false,
            Blocked: false,
            Add_Friend: false,
            createDmModal: false

        }
        this.handleClick = this.handleClick.bind(this);
        this.renderAllFriendShips = this.renderAllFriendShips.bind(this);
        this.renderAllFriendShipsOnline = this.renderAllFriendShipsOnline.bind(this);
        this.renderBlockList = this.renderBlockList.bind(this);
        this.renderPendingList = this.renderPendingList.bind(this);
        this.renderAddFriend = this.renderAddFriend.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.openForm = this.openForm.bind(this);
        this.renderCreateDMModal = this.renderCreateDMModal.bind(this);
        this.toggleCreateDmModal = this.toggleCreateDmModal.bind(this);
        this.closeCreateDmModal = this.closeCreateDmModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleESC = this.handleESC.bind(this);



    }



    toggleCreateDmModal () {
        this.setState({ createDmModal: true })
    }

    closeCreateDmModal () {
        if (this.mounted) {
            this.setState({ createDmModal: false })
            window.removeEventListener('keyup', this.handleESC, false);
        }
    }



    componentDidMount () {
        this.mounted = true;
        this.props.requestFriendships();
    }

    componentWillUnmount () {
        this.mounted = false;
        if (this.props.errors.length > 0) {
            this.props.removeFriendshipErrors();
        }
        if (this.props.dmServerErrors.length > 0) {
            this.props.removeDmServerErrors();
        }

    }


    handleClick (formType) {
        let formtypes = [
            "online",
            "All",
            "Pending",
            "Blocked",
            "Add_Friend"
        ];
        for (let i of formtypes) {
            this.resetForm(i);
        }
        this.openForm(formType);
    }

    resetForm (field) {
        this.setState({ [field]: false })

    }

    openForm (field) {
        this.setState({ [field]: true })

    }

    renderAllFriendShips () {
        if (this.state.All === true) {
            return (
                <FriendShipIndexContainer />
            )
        }
    }

    renderAllFriendShipsOnline () {
        if (this.state.online === true) {
            return (
                <FriendShipIndexOnlineContainer />
            )
        }
    }

    renderBlockList () {
        if (this.state.Blocked === true) {
            return (
                <BlockedListContainer />
            )
        }
    }

    renderPendingList () {
        if (this.state.Pending === true) {
            return (
                <PendingFriendListContainer />
            )
        }
    }

    renderAddFriend () {
        if (this.state.Add_Friend === true) {
            return (
                <AddFriendsContainer />
            )
        }
    }

    renderCreateDMModal () {
        if (this.state.createDmModal === true) {
            window.addEventListener('keyup', this.handleESC, false);
            return (

                <div className="clear-modal-wrapper" onClick={() => this.closeCreateDmModal()}>
                    <div onSubmit={() => this.handleSubmit()}>
                        <CreateDmModalContainer />
                    </div>
                </div>
            )
        }
    }





    render () {
        console.log("friendShip props: ", this.props);
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
                            <div onClick={() => this.handleClick("online")} className={`online-tab ${this.state.online ? "selected" : ""}`}>Online</div>
                            <div onClick={() => this.handleClick("All")} className={`all-tab ${this.state.All ? "selected" : ""}`}>All</div>
                            <div onClick={() => this.handleClick("Pending")} className={`pending-tab ${this.state.Pending ? "selected" : ""}`}>Pending</div>
                            <div onClick={() => this.handleClick("Blocked")} className={`blocked-tab ${this.state.Blocked ? "selected" : ""}`} >Blocked</div>
                            <div onClick={() => this.handleClick("Add_Friend")} className={`add-friend-tab ${this.state.Add_Friend ? "selected" : ""}`} ><span>Add Friend</span></div>

                        </div>
                    </div>
                    <div className="home-nav-tool-bar">
                        <div className="invite-tool-bar">
                            <div className="invite-tool-bar-group-dm">
                                <svg x="0" y="0" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M20.998 0V3H23.998V5H20.998V8H18.998V5H15.998V3H18.998V0H20.998ZM2.99805
                                         20V24L8.33205 20H14.998C16.102 20 16.998 19.103 16.998 18V9C16.998 7.896 16.102 7 14.998 7H1.99805C0.894047 7 -0.00195312 7.896 
                                         -0.00195312 9V18C-0.00195312 19.103 0.894047 20 1.99805 20H2.99805Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="home-friend-divider"></div>
                        </div>
                        <div className="inbox-tool-bar">
                            <svg x="0" y="0" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 
                                    19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" fill="currentColor">
                                </path>
                            </svg>
                        </div>
                        <a className="help-tool-bar" href="https://support.discord.com" target="_blank">
                            <div className="help-tool-bar-icon-wrapper">
                                <svg x="0" y="0" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515
                                     22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31
                                      15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13
                                       13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896
                                        10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z">
                                    </path>
                                </svg>
                            </div>
                        </a>
                    </div>


                </div>
                <div className="friends-page-content-wrapper">
                    <div className="friend-list-sec-container">
                        {this.renderAllFriendShips()}
                        {this.renderAllFriendShipsOnline()}
                        {this.renderBlockList()}
                        {this.renderPendingList()}
                        {this.renderAddFriend()}

                    </div>
                    <div className="active-now-section-wrapper">
                        <div className="active-now-section">
                            <div className="active-now-section-scroller">
                                <div className="active-now-header"><h3>Active Now</h3></div>
                                <div className="empty-card">
                                    <h5 className="empty-card-header">It's quiet for now...</h5>
                                    <div className="empty-card-text">
                                        When a friend starts an activity—like playing a game or hanging out on voice—we'll show it here!
                                    </div>
                                </div>
                                <div className="empty-card-div"></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }


}

export default FriendsHomePageContainer;
