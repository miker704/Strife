import React from "react";


class UserSearchModal extends React.Component {

    constructor (props) {
        super(props);

        //set search state based on which type of search we are doing dm search or server search
        //users

        if (this.props.searchFor === 'invite') {
            let serverMembers = this.props.server.users.map((user) => {
                user.username
            });

            this.state = {
                username: "",
                users: [],
                serverMembers
            };
        }
        else {
            this.state = {
                username: "",
                users: [],
                serverMembers: []
            }
        }




        this.updateName = this.updateName.bind(this);
        this.searchDMUsers = this.searchDMUsers.bind(this);
        this.cancel_Search = this.cancel_Search.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    cancel_Search (e) {
        e.preventDefault();
    }

    updateName (e) {
        e.preventDefault();
        
    }

    handleSubmit(){

    }

    searchDMUsers () {

    }

    render () {
        console.log("user search props: ", this.props);


        return (
            <div className="search-modal" onClick={e => e.stopPropagation()}>
                <div className="close-form" >
                    <svg width="24" height="24" viewBox="0 0 24 24" onClick={() => this.props.closeModal()}>
                        <path
                            fill="currentColor"
                            d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
                        ></path>
                    </svg>
                </div>
                <div className="user-search-header">
                    Find Users
                </div>

                <div className="search-result-body">
                    <div className="search-result-input-wrapper">
                        <input
                            placeholder="Type the username you want to find"
                            type="text"
                            className="search-result-input-field"
                            onChange={this.updateName} />
                    </div>
                    <div className="search-result-list">
                        {this.props.searchFor === 'invite' ?
                            this.searchedServerUsers() :
                            this.searchDMUsers()}
                    </div>
                </div>
                {this.props.searchFor === 'invite' ?
                    this.serverFooter() :
                    this.dmFooter()
                }

            </div>
        )
    }


}

export default UserSearchModal;