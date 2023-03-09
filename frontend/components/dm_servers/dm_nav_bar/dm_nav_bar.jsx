import React from 'react';
import { Link } from 'react-router-dom';
import CreateDmModalContainer from '../create_new_dm/create_dm_container';
import user_Default_PFP from '../../../../app/assets/images/discord_PFP.svg';
import ReactTooltip from "react-tooltip";

class DmNavBar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            createDmModal: false,
            showPopUp: false
        }

        this.toggleCreateDmModal = this.toggleCreateDmModal.bind(this);
        this.closeCreateDmModal = this.closeCreateDmModal.bind(this);
        this.generateDmServerName = this.generateDmServerName.bind(this);
        this.renderDmServerPFP = this.renderDmServerPFP.bind(this);
        this.handleESC = this.handleESC.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderCreateDMModal = this.renderCreateDMModal.bind(this);
        this.setShowPopUp = this.setShowPopUp.bind(this);
        this.findOnlineStatus = this.findOnlineStatus.bind(this);
    }

    setShowPopUp () {
        this.setState({ showPopUp: !this.state.showPopUp });
    }

    handleESC (e) {
        const keys = {
            27: () => {
                e.preventDefault();
                this.closeCreateDmModal();
                window.removeEventListener('keyup', this.handleESC, false);

            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }

    handleSubmit () {
        setTimeout(() => {
            if (this.props.errors.length === 0) {
                this.closeCreateDmModal();
            }

        }, 1000);

    }
    componentDidMount () {
        this.mounted = true;
        this.props.fetchUserDmServers(this.props.currentUser.id);
    }
    componentWillUnmount () {
        this.mounted = false;
        this.props.removeDmServerErrors();
    }

    // componentDidUpdate(prevProps,props){
    //     console.log("comp did update")
    //     if(prevProps.dmServers.length !== this.props.dmServers.length){
    //         this.props.fetchUserDmServers(this.props.currentUser.id)
    //     }
    // }

    toggleCreateDmModal () {
        this.setState({ createDmModal: true })
    }

    closeCreateDmModal () {
        if (this.mounted) {
            this.setState({ createDmModal: false })
            window.removeEventListener('keyup', this.handleESC, false);
        }
    }


    renderDmServerPFP (dmServerMembers) {
        let dmServerPFP = "";
        let default_Photo = "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png";
        let default_DMS_PFP = user_Default_PFP;
        let group_Chat_Photo = "https://strife-seeds.s3.amazonaws.com/group_chat_icon.svg";
        if (dmServerMembers.length === 2) {
            for (let i of dmServerMembers) {
                if (i.id !== this.props.currentUserId) {
                    dmServerPFP = i;
                }
            }
        }
        else if (dmServerMembers.length > 2) {
            dmServerPFP = dmServerMembers.at(-1);
            // dmServerPFP = dmServerMembers[Math.floor(Math.random()*dmServerMembers.length)];
        }

        if (dmServerMembers.length === 2) {
            if (dmServerPFP.photo !== undefined) {
                return <div className='friend-info'>
                    <img src={dmServerPFP.photo} alt="pfp" />
                </div>

            }
            else if (dmServerPFP.photo === undefined) {
                // return <img src={default_Photo} alt="pfp" />
                return <div className={`user-pfp-svg-render color-${dmServerPFP.color_tag}`}>
                    <img src={default_DMS_PFP} alt="pfp" />
                </div>
            }
        }

        return <div className='friend-info'>
            <img src={group_Chat_Photo} alt="pfp" className={`user-icon color-${dmServerPFP.color_tag === 7 ? 8 : dmServerPFP.color_tag}`} />
        </div>

    }


    generateDmServerName (dmServer) {
        let dmServerNameArray = [];
        let dmServerName = "";
        let dmMemberArray = Object.values(dmServer.members);

        if (dmServer.dm_server_name !== null) {
            dmServerName = dmServer.dm_server_name;
            // return dmServerName;
        }
        else if (dmServer.dm_server_name === null) {

            for (let i of dmMemberArray) {

                if (i.id !== this.props.currentUser.id) {
                    dmServerNameArray.push(i.username)
                }
            }
            if (dmServerNameArray.length === 1) {
                dmServerName = dmServerNameArray.join();
            }
            else {
                dmServerName = dmServerNameArray.join(", ");
            }

        }

        return dmServerName;
    }

    findOnlineStatus (dmServer) {
        let dmMemberArray = Object.values(dmServer.members);
        let findOtherMember = null;
        if (dmMemberArray.length > 2) {
            return null;
        }
        else if (dmMemberArray.length <= 2) {
            for (let i of dmMemberArray) {
                if (i.id !== this.props.currentUser.id) {
                    return i;
                }
            }
        }
        return findOtherMember;
    }



    renderCreateDMModal () {
        if (this.state.createDmModal === true) {
            window.addEventListener('keyup', this.handleESC, false);
            return (

                <div className="clear-modal-wrapper" onClick={() => this.closeCreateDmModal()}>
                    <div onSubmit={() => this.handleSubmit()}>
                        <CreateDmModalContainer setShowPopUp={this.setShowPopUp} />
                    </div>
                </div>
            )
        }
    }


    render () {

        return (
            <div className='dm-server-nav-bar'>

                {this.state.showPopUp && <CreateDmModalContainer setShowPopUp={this.setShowPopUp} />}

                <div className='dm-nav-bar-search-bar'>
                    <button type='button'
                        className='dm-nav-bar-search-bar-button'
                        onClick={() => this.props.openModal('StartConversationSearch')}>
                        Find or start a conversation
                    </button>
                </div>

                <div className='dm-nav-bar-scroller'>


                    <div className='friends-nav-bar-wrapper'>
                        <div className={`friends-nav-bar ${this.props.location.pathname === `/$/channels/@me/` ? `selected-x` : ``}`}>
                            <Link className='friends-nav-bar-link' to={`/$/channels/@me/`}>
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

                    <div className='nitro-nav-bar-wrapper'>
                        <div className='nitro-nav-bar'>
                            <div className='nitro-nav-bar-link'>
                                <div className='nitro-avatar-wrapper'>
                                    <div className='nitro-avatar'>
                                        <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 
                                            L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 
                                            1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 
                                            2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 
                                            C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001
                                             L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,
                                             11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 
                                             C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 
                                             3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 
                                             L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 
                                             9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 
                                             6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 
                                             C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 
                                             10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 
                                             C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 
                                             13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 
                                             18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 
                                             L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 
                                             C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 
                                             13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 
                                             16.8462589,9.84548582 Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className='nitro-avatar-text-wrapper'>
                                        <div className='nitro-avatar-text-inner'>
                                            <div className='nitro-avatar-text'>
                                                Nitro
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='strife-nitro-lbl1'>
                                    <div className='strife-nitro-img1'>
                                        <svg className='strife-nitro-clock1' aria-hidden="true" role="img" width="12" height="12" viewBox="0 0 20 20">
                                            <g fill="none" fillRule="evenodd">
                                                <path fill="currentColor" d="M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708
                                                 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334
                                                  18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999
                                                   1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667
                                                    5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145
                                                     14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937
                                                      10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572
                                                       9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675
                                                        9.99999 4.66675Z">
                                                </path></g>
                                        </svg>

                                        1 month free</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dm-list-header">
                        <h4 className='dm-server-nav-bar-dm-title-text'>DIRECT MESSAGES</h4>
                        <div data-tip data-for="create-dm-tool-tip" className="dm-server-nav-bar-add-dm-button" onClick={() => this.setShowPopUp()}>
                            <svg x="0" y="0" aria-hidden="true" className="dm-add-button" role="img" width="24" height="24" viewBox="0 0 18 18">
                                <polygon fillRule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon>
                            </svg>
                        </div>
                        <ReactTooltip
                            className="create-dm-server-nav-bar-tool-tip"
                            textColor="#B9BBBE"
                            backgroundColor="#191919"
                            id="create-dm-tool-tip"
                            place="top"
                            effect="solid">
                            Create DM
                        </ReactTooltip>
                    </div>
                    <ul className="dm-nav-bar-list">
                        {this.props.dmServers.map((dmServer, dmServerIndex) => {
                            let selectedDmServer = this.props.dmServerId === dmServer.id.toString()
                                ? "selected-dm-server" : "";
                            let dmServerMembers = Object.values(dmServer.members);
                            let dmServerName = this.generateDmServerName(dmServer);
                            let dmServerPFP = this.renderDmServerPFP(dmServerMembers);
                            let dmMemberOnlineStatus = this.findOnlineStatus(dmServer);
                            let onlineStatus = dmMemberOnlineStatus !== null ? (
                                <div className={`${dmMemberOnlineStatus.online ? "circle-online-dm-side-bar-list" : "circle-offline-dm-side-bar-list"}`}></div>
                            ) : ("");
                            let dmServerSubtitle = dmServerMembers.length > 2 ? (
                                <p className='dm-server-subtitle'>{`${dmServerMembers.length} Members`}</p>
                            ) : (``);

                            return (

                                <Link to={`/$/channels/@me/${dmServer.id}`}
                                    className={selectedDmServer}
                                    onClick={() => {
                                        this.props.reSyncCurrentUser(this.props.currentUserId).then((action) => {
                                            let currUser = action.currentUser;
                                            if (!currUser.dmServersJoined.includes(parseInt(dmServer.id))) {
                                                this.props.removeDmServer(dmServer.id);
                                                this.props.history.push('/$/$TR!F3-INTRUSION-PREVENTION/');
                                            }
                                            else if (currUser.dmServersJoined.includes(parseInt(dmServer.id))) {
                                                this.props.fetchDmServer(dmServer.id);
                                            }
                                        })
                                    }}
                                    key={dmServer.id}
                                >
                                    <li className={`dm-server-li-item ${selectedDmServer}`} key={dmServerIndex}>
                                        <div className='dm-server-pfp'>
                                            {dmServerPFP}
                                            {onlineStatus}
                                        </div>
                                        <div className='dm-server-name-wrapper'>
                                            <h5 className='dm-server-name'>{dmServerName}</h5>
                                            {dmServerSubtitle}
                                        </div>
                                        <div className='delete-dms-button'>
                                            <svg className='delete-dms-button-icon' aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </li>
                                </Link>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default DmNavBar;