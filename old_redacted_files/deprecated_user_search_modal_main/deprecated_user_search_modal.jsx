import React from "react";


class UserSearchModal extends React.Component {

    constructor (props) {
        super(props);

        //set search state based on which type of search we are doing dm search or server search
        //users

            this.state = {
                username: "",
                users: [],
                serverMembers: []
            }
        




        this.updateName = this.updateName.bind(this);
        this.searchDMUsers = this.searchDMUsers.bind(this);
        this.cancel_Search = this.cancel_Search.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addUser = this.addUser.bind(this);
        this.dmFooter = this.dmFooter.bind(this);
    }

    cancel_Search (e) {
        e.preventDefault();
    }

    updateName (e) {
        e.preventDefault();
        // debugger
        const username = e.currentTarget.value;
        this.setState({ username: username });
        if (username.length > 0) {
            // this.props.searchUsers(username.toLowerCase());
            this.props.searchUsers(username)
        }
    }

    handleSubmit (e) {
        e.preventDefault();
        let channel_type;
    }

    searchDMUsers () {
    // let default_profile_pic = user.photo === undefined ? 
    // <img src="https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png" className="settings-img" alt="pfp"/>  : 
    //  <img src={user.photo} className="settings-img" alt="pfp" />

        if (this.state.username.length > 0) {
            if (this.props.searchedUsers.length < 1) {
                return <div className="no-users-found">NO RESULTS FOUND</div>
            }
            return this.props.searchedUsers.map((user)=>{
                <div 
                className="searched-user-wrapper"
                onClick={()=> this.addUser(user.username)}
                >
                    <div className="searched-user">
                        <div className="searched-user-pfp">
                            <img className="settings-img" 
                            src={user.photo === undefined ? 
                                "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png" :
                                user.photo
                                } alt=" " />
                        </div>
                        <div className="searched-user-username" key={user.username}>{user.username}</div>
                    </div>
                    <div id={user.username} className={`search-user-checkbox ${
                        this.state.users.includes(user.username) ? "search-user-checkbox-checked" : ""}`}>
                            {this.state.users.includes(user.username) ? (
                                 <svg
                                 aria-hidden="true"
                                 width="18"
                                 height="18"
                                 viewBox="0 0 24 24"
                               >
                                 <path
                                   fill="hsl(217, calc(var(--saturation-factor, 1) * 7.6%), 33.5%)"
                                   fillRule="evenodd"
                                   clipRule="evenodd"
                                   d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z"
                                 ></path>
                               </svg>
                            ) : null}
                        </div>

                </div>
            });
        }
        else{
            return null;
        }
    }


    addUser(username){
        if(this.state.users.includes(username)){
            let users = this.state.users;
            let idx = users.indexOf(username);
            if(idx > -1){
                users.splice(idx,1);
                this.setState({users});
            }
        }
        else{
            let users = this.state.users;
            users.push(username);
            this.setState({users});
        }
    }

    dmFooter(){
        return (
            <div className="search-modal-footer">
                <button className={`search-modal-submit search-modal-submit-${this.state.users.length<1}`}
                    onClick={this.handleSubmit}
                    disabled={this.state.users.length<1}
                >
                    Create Dm
                </button>
            </div>
        )
    }


    render () {


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
                        { this.searchDMUsers()}
                    </div>
                </div>
                {this.dmFooter()}

            </div>
        )
    }


}

export default UserSearchModal;