import React from "react";


class AddFriends extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="friend-index-container">
                    <div className="add-friend-header-wrapper-1">
                        <h2 className="add-friend-header-1">
                            Add Friend
                        </h2>
                        <form autoComplete="off">
                            <div className="add-friend-subtitle">You can add a friend with their STRIFE Tag. It's cAsE sEnSitIvE!</div>
                            <div className="add-friend-input-search-wrapper">
                                <div className="add-fr"iend-input-search-inner-wrapper">
                                    <input className="type="text" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="add-friend-header-wrapper-2">
                        <h2 className="add-friend-header-2">
                            Other places to find friends
                        </h2>
                    </div>
            </div>
        )
    }
}

export default AddFriends;