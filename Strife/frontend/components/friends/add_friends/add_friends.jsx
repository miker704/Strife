import React from "react";


class AddFriends extends React.Component {
    constructor (props) {
        super(props);
        this.submissionBlocker = this.submissionBlocker.bind(this);

    }

    submissionBlocker () {
        if (document.getElementById("servernameInput").value === "" || document.getElementById("servernameInput").value === null) {
            document.getElementById("serverCreateButton").disabled = true;
        }
        else {
            document.getElementById("serverCreateButton").disabled = false;
        }
    }
    render () {
        return (
            <div className="friend-index-container">
                <div className="add-friend-header-wrapper-1">
                    <h2 className="add-friend-header-1">
                        Add Friend
                    </h2>
                    <form autoComplete="off">
                        <div className="add-friend-subtitle">You can add a friend with their STRIFE Tag. It's cAsE sEnSitIvE!</div>
                        <div className="add-friend-input-search-wrapper">
                            <div className="add-friend-input-search-inner-wrapper">
                                <input className="add-friend-input-bar" type="text" />
                            </div>
                            <button type="submit" className="add-friend-button">
                                <div className="add-friend-button-text">Send Friend Request</div>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="add-friend-header-wrapper-2">
                    <h2 className="add-friend-header-2">
                        Other places to find friends
                    </h2>
                </div>
                <div className="add-friend-grid">
                    <button type="button" className="add-friend-grid-button-wrapper">
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
                        
                    </div>
                </div>


            </div>
        )
    }
}

export default AddFriends;