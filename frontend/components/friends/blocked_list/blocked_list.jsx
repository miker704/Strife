import React from "react";
import ReactTooltip from "react-tooltip";
import default_User_PFP from "../../../../app/assets/images/discord_PFP.svg";

class BlockedList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            searchText: "",
        }
        this.liveSearch = this.liveSearch.bind(this);
        this.removeBlockedPerson = this.removeBlockedPerson.bind(this);
        this.resetSearch = this.resetSearch.bind(this);
    }

    liveSearch () {
        let allFriendShips = document.querySelectorAll('.friend-index-item');
        let search_query = document.getElementById('input-all-friends').value;
        let numberOfFriends = document.getElementById('num-of-friends');
        let count = 0;
        let foundCount = 0;
        for (let i = 0; i < allFriendShips.length; i++) {
            if (allFriendShips[i].innerText.toLowerCase().includes(search_query.toLowerCase())) {
                allFriendShips[i].classList.remove("is-hidden");
                foundCount++;
                numberOfFriends.innerHTML = `BLOCKED USERS - ${foundCount}`;

            }
            else {
                allFriendShips[i].classList.add("is-hidden");
                count++;
            }
        }

        if (count === allFriendShips.length) {
            document.getElementById('ul-fiiw').classList.add('is-hidden')
            document.getElementById('no-match').classList.remove('is-hidden')
            numberOfFriends.innerHTML = `BLOCKED USERS - ${0}`;
        }
        else {
            document.getElementById('no-match').classList.add('is-hidden')
            document.getElementById('ul-fiiw').classList.remove('is-hidden')
        }

    }

    resetSearch = () => {
        this.setState({searchText:""});
        document.getElementById('input-all-friends').value="";
        this.liveSearch();
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
        this.props.removeBlockedUser(substate).then(()=>{
            App.StrifeCore.perform('parse_unblock_request', { user_id: this.props.currentUser.id, friend_id: blockedUser.id });
        });
    }


    render () {

        let allBlockedUsers = this.props.blockedUsers;
        let default_Photo = "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png";
        let rendered_User_PFP = default_User_PFP;


        if (allBlockedUsers.length > 0) {

            return (

                <div className="friend-index-container">


                    <div className="all-search-bar">
                        <div className="all-search-bar-inner">
                            <input id="input-all-friends" className="input-all-friends" placeholder="Search"
                                type="search" onInput={() => this.liveSearch()} 
                                onChange={e => this.setState({ searchText: e.currentTarget.value })}
                                autoFocus
                                spellCheck={false}
                                value={this.state.searchText} />
                            <div className="magnify-icon-wrapper">
                                <div className="magnify-icon">
                                    <svg className={`mag-icon1 ${this.state.searchText.length === 0 ? `visible-x`:``}`} aria-label="Search" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 
                                            17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 
                                            5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 
                                            13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 
                                            14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 
                                            4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 
                                            14.242 14.243C13.109 15.376 11.603 16 10 16Z">
                                        </path>
                                    </svg>

                                    <svg className={`clear-mag-icon1 mag-icon1 ${this.state.searchText.length === 0 ? ``:`visible-x`}`}
                                         onClick={() => this.resetSearch()}
                                         aria-label="Clear" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div id="num-of-friends" className="all-friends">
                        {`BLOCKED USERS — ${allBlockedUsers.length}`}
                    </div>

                    <div id="no-match" className="empty-state-container is-hidden">
                        <div className="blocked-users-empty">
                            <div className="blocked-users-flex">
                                <img className="no-friends-online-icon" alt="img" />
                                <div className="block-wumpus-text">Wumpus looked, but couldn't find anyone with that name.</div>
                            </div>
                        </div>
                    </div>


                    <div className="friend-index" id='ul-fiiw'>
                        <ul className="friend-index-item-wrapper">
                            {
                                allBlockedUsers.map((blockedUser, blockedUserIdx) => {
                                    return (
                                        <li className="friend-index-item" key={blockedUser.id}>

                                            <div className="friend-index-item-wrapper-inner">
                                                <div className="friend-account-info-wrapper-super">

                                                    <div className={`${blockedUser.photo === undefined ?
                                                        `user-pfp-svg-render color-${blockedUser.color_tag}` : `friend-info`}`}>
                                                        <img src={`${blockedUser.photo === undefined ? rendered_User_PFP : blockedUser.photo}`} alt="pfp" />
                                                    </div>
                                                    <div className="circle-blocked-1"></div>
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
                                                                {/* <div className="circle-blocked"></div> */}
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="pending-request-actions">
                                                <div data-tip data-for="Remove-Blocked-User" className="pending-deny-icon red-button">
                                                    <svg onClick={() => this.removeBlockedPerson(blockedUser)} className="icon-1WVC" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 
                                                        18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                                        </path>
                                                    </svg>
                                                    <ReactTooltip className="remove-message-tool-tip" textColor="#B9BBBE"
                                                        backgroundColor="#191919" id="Remove-Blocked-User" place="top" effect="solid">
                                                        Remove
                                                    </ReactTooltip>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div >
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