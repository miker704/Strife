import React from "react";
import { Link } from 'react-router-dom';

class AddFriends extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            user_strife_id_tag: "",
            FRF_Modal: false,
            friendRequestSuccess: false,
        }
        this.submissionBlocker = this.submissionBlocker.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderFriendRequestErrors = this.renderFriendRequestErrors.bind(this);
        this.renderFriendRequestErrorModal = this.renderFriendRequestErrorModal.bind(this);
        this.openFRFErrorModal = this.openFRFErrorModal.bind(this);
        this.closeFRFErrorModal = this.closeFRFErrorModal.bind(this);
        this.renderFriendRequestSuccess = this.renderFriendRequestSuccess.bind(this);
        this.renderFriendRequestFailedErrors = this.renderFriendRequestFailedErrors.bind(this);
    }

    componentDidMount () {

        this.mounted = true;
    }
    openFRFErrorModal () {

        this.setState({ FRF_Modal: true });
    }

    closeFRFErrorModal () {
        if (this.mounted) {
            this.props.removeSessionErrors();
            this.setState({ FRF_Modal: false });
        }
    }

    componentWillUnmount () {
        this.mounted = false;
        if (this.props.errors.length > 0) {

            this.props.removeFriendshipErrors();
        }

        if (this.props.sessionErrors.length > 0) {
            this.props.removeSessionErrors();
        }
    }


    renderFriendRequestErrors () {
        if (this.props.sessionErrors.includes('User Does not exists with that STRIFE ID Tag !')) {
            return "Hm, didn't work. Double check that the capitalization, spelling, any spaces, and numbers are correct.";
        }
        else if (this.props.sessionErrors.includes('Please enter proper format username + # + STRIFE ID Tag.')) {
            return "Please enter proper format username + # + $TR!F3 ID Tag."
        }
        else {
            return "";
        }
    }

    renderFriendRequestFailedErrors () {
        if (this.props.errors.includes('Friend has already been taken.')) {
            return "You have sent a friend request or added this user already!";
        }
        else {
            return "";
        }
    }


    renderFriendRequestSuccess () {
        if (this.state.friendRequestSuccess === true) {
            return "Friend Request Sent.";
        }
        else {
            return "";
        }
    }

    handleInput (field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit () {

        let userInfo = this.state.user_strife_id_tag;

        if (userInfo.includes('#')) {
            userInfo = userInfo.split('#').pop();
        }
        else {
            userInfo = '-000';
        }

        let userStrifeId = userInfo.length === 4 ? userInfo : '-000';

        let newFriend;

        this.props.fetchUserByStrifeId(userStrifeId).then((action) => {
            newFriend = action.user;
            this.props.createFriendship({ friend_id: newFriend.id, user_id: this.props.currentUser.id }).then(() => {
                this.setState({ friendRequestSuccess: true });
            });
        })
    }

    submissionBlocker () {
        if (document.getElementById("add-friend-input-bar").value === "" || document.getElementById("add-friend-input-bar").value === null) {
            document.getElementById("add-friend-button").disabled = true;
        }
        else {
            document.getElementById("add-friend-button").disabled = false;
        }
    }


    renderFriendRequestErrorModal () {

        if (this.props.sessionErrors.length > 0) {
            setTimeout(() => {
                this.props.removeSessionErrors();
                this.props.openModal('frf-error');
                return;
            }, 1250)
        }

    }


   


    render () {

        let friendRequestErrors = this.props.sessionErrors.length > 0 ? "frf-ERROR" : "";
        let friendRequestSuccess = this.state.friendRequestSuccess === true ? "frs-display" : "";
        let friendRequestFailed = this.props.errors.length > 0 ? "frf-ERROR" : "";
        return (
            <div className="friend-index-container">
                {this.renderFriendRequestErrorModal()}
                <div className="add-friend-header-wrapper-1">
                    <h2 className="add-friend-header-1">
                        Add Friend
                    </h2>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className="add-friend-subtitle">You can add a friend with their $TR!F3 Tag. It's cAsE sEnSitIvE!</div>
                        <div className={`add-friend-input-search-wrapper ${this.props.sessionErrors.length > 0 ? "frf-ERROR" : ""}`}>
                            <div className="add-friend-input-search-inner-wrapper">
                                <input id="add-friend-input-bar" className="add-friend-input-bar" type="text"
                                    onKeyUp={this.submissionBlocker}
                                    onChange={this.handleInput("user_strife_id_tag")}
                                    value={this.state.user_strife_id_tag}
                                    placeholder={"Enter a Username#0000"}
                                />
                            </div>
                            <button type="submit" id="add-friend-button" className="add-friend-button" disabled>
                                <div className="add-friend-button-text">Send Friend Request</div>
                            </button>
                        </div>
                        <div className={friendRequestErrors}>{this.renderFriendRequestErrors()}</div>
                        <div className={friendRequestSuccess}>{this.renderFriendRequestSuccess()}</div>
                        <div className={friendRequestFailed}>{this.renderFriendRequestFailedErrors()}</div>


                    </form>
                </div>
                <div className="add-friend-header-wrapper-2">
                    <h2 className="add-friend-header-2">
                        Other places to Make friends
                    </h2>
                </div>
                

                <div className="add-friend-grid" >
                <Link className="unStyle" to={`/$/channels/guild-discovery/`}>
                    <button type="button" className="add-friend-grid-button-wrapper"  >
                        <img className="add-friend-grid-button-icon" alt="expserv" />
                        <div className="add-friend-grid-button-text">Explore Public Servers</div>
                        <svg className="arrow-3B" fill="none" height="20" viewBox="0 0 20 20" width="20">
                            <path clipRule="evenodd" d="m5.41667 4.2625 5.66573 5.7375-5.66573 5.7375 
                                    1.74426 1.7625 7.42237-7.5-7.42237-7.5z" fill="currentColor" fillRule="evenodd">
                            </path>
                        </svg>
                    </button>
                </Link>
                </div>

                <div className="empty-state-container-2">
                    <div className="empty-friends-container">
                        <div className="empty-friends-container-flex">
                            <img className="add-friends-icon-2" alt="img" />
                            <div className="add-friends-flex-text-wrapper">
                                <div className="add-friends-flex-text">Wumpus is waiting on friends. You don't have to though!</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default AddFriends;