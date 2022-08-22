import React from 'react';
import { Link } from 'react-router-dom';
// import UserSearchContainer from "../../components/user_search/user_search_container.jsx"


class DmNavBar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            search: false
        }

        this.toggleSearch = this.toggleSearch.bind(this);
        this.closeSearch = this.closeSearch.bind(this)
    }

    componentDidMount () {
        this.props.fetchUserDmServers(this.props.currentUser.id);
    }

    toggleSearch () {
        this.setState({ search: true })
    }

    closeSearch () {
        this.setState({ search: false })
    }

    renderSearch () {
        if (this.state.search) {
            return (
                <div>
                    <div id="edit-modal-container" onClick={() => this.closeSearch()}>
                        <UserSearchContainer />
                        <button id="user-search-exit-x" onClick={() => this.closeSearch()}>
                            <i className="fa-solid fa-xmark" />
                        </button>
                    </div>
                </div>
            )
        }
    }

    render () {
        console.log("dmserver props: ", this.props);
        console.log("dmusers", this.props.dmUsers);
        console.log("dmServers: ", this.props.dmServers);

        return (
            <div className='dm-server-nav-bar'>
                <div className="fake-nav-bar" />
                <div className="split-line" />
                <div className='friends-nav-bar-wrapper'>
                    <div className='friends-nav-bar'>
                        <Link className='friends-nav-bar-link' to={`/channels/@me`}>

                            <div className='friend-avatar-wrapper'>
                                <div className='friend-avatar'>
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
                                    <div className='friend-avatar-text-wrapper'>
                                        <div className='friend-avatar-text-inner'>
                                            <div className='friend-avatar-text'>Friends</div>
                                        </div>
                                    </div>

                            </div>


                        </Link>
                    </div>
                </div>
                <br />



                <div className="dm-list-header">
                    <h4>DIRECT MESSAGES</h4>
                    <div className="create-channel-div" onClick={() => this.toggleSearch()}>
                        <i className="fa-solid fa-plus" onClick={() => this.props.openModal("userSearch")} />
                        <div className="dm-tool-tip">
                            <span>Create DM</span>
                        </div>
                    </div>
                </div>
                {/* {this.renderSearch()} */}
                <ul className="dm-nav-bar-list">
                    {this.props.dmUsers.map((member) => {
                        let selectedDm = this.props.otherUserId === member.id.toString()
                            ? "selected-dm" : " ";
                        if (member.id !== this.props.currentUser.id)
                            return (
                                <Link
                                    key={member.id}
                                    to={`/channels/@me/${member.id}/${member.dmMemberid}`}
                                >
                                    <li className={`dm-member-li-item ${selectedDm}`}>
                                        <div className={`user-icon color-${member.color_tag}`}>
                                            <i className="fa-brands fa-discord" />
                                        </div>
                                        <h5 className='dm-member-username'> {member.username} </h5>
                                    </li>
                                </Link>
                            )
                    }
                    )
                    }
                </ul>
            </div>
        )
    }
}

export default DmNavBar;
