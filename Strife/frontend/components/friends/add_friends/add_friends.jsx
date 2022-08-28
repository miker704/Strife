import React from "react";

class AddFriends extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            user_strife_id_tag: "Username#0000",
        }
        this.submissionBlocker = this.submissionBlocker.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderFriendRequestErrors = this.renderFriendRequestErrors.bind(this);
        this.renderFriendRequestErrorModal = this.renderFriendRequestErrorModal.bind(this);

    }

    componentDidMount () {

        this.props.requestFriendships();
    }

    componentWillUnmount () {

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
        userInfo = userInfo.split('#');
        let userStrifeId = userInfo[1];
        this.props.fetchUserByStrifeId(userStrifeId);
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
          
            this.props.openModal('frf-error');

        }
        else {
            this.props.closeModal()
        }
    }


    render () {

        let friendRequestErrors = this.props.sessionErrors.length > 0 ? "frf-ERROR" : "";

        return (
            <div className="friend-index-container">
                {this.renderFriendRequestErrorModal()}
                <div className="add-friend-header-wrapper-1">
                    <h2 className="add-friend-header-1">
                        Add Friend
                    </h2>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className="add-friend-subtitle">You can add a friend with their STRIFE Tag. It's cAsE sEnSitIvE!</div>
                        <div className={`add-friend-input-search-wrapper ${this.props.sessionErrors.length > 0 ? "frf-ERROR" : ""}`}>
                            <div className="add-friend-input-search-inner-wrapper">
                                <input id="add-friend-input-bar" className="add-friend-input-bar" type="text"
                                    onKeyUp={this.submissionBlocker}
                                    onChange={this.handleInput("user_strife_id_tag")}
                                    value={this.state.user_strife_id_tag}
                                    placeholder={this.state.user_strife_id_tag}
                                />
                            </div>
                            <button type="submit" id="add-friend-button" className="add-friend-button">
                                <div className="add-friend-button-text">Send Friend Request</div>
                            </button>
                        </div>
                        <div className={friendRequestErrors}>{this.renderFriendRequestErrors()}</div>
                    </form>
                </div>
                <div className="add-friend-header-wrapper-2">
                    <h2 className="add-friend-header-2">
                        Other places to find friends
                    </h2>
                </div>
                <div className="add-friend-grid">
                    <button type="button" className="add-friend-grid-button-wrapper" onClick={() => this.props.openModal("userSearch")}>
                        <img className="add-friend-grid-button-icon" alt="expserv" />
                        <div className="add-friend-grid-button-text">Explore Public Servers</div>
                        <svg className="arrow-3B" fill="none" height="20" viewBox="0 0 20 20" width="20">
                            <path clipRule="evenodd" d="m5.41667 4.2625 5.66573 5.7375-5.66573 5.7375 
                                    1.74426 1.7625 7.42237-7.5-7.42237-7.5z" fill="currentColor" fillRule="evenodd">
                            </path>
                        </svg>
                    </button>
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