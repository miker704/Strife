import React from 'react';
import CreateDmModalContainer from '../create_new_dm/create_dm_container';
import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
import GroupChatIcon from '../../../../app/assets/images/groupChatIcon.svg';
import { Tooltip } from 'react-tooltip';
import { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import UserNavContainer from '../../users/user_nav/user_nav_container';
import { reSyncCurrentUser } from '../../../utils/session_api_util';
import { returnUserBadgeFillColor } from '../../../utils/user_status_badge_color_api_util';
import { returnUserOnlineActivityStatusBadgeMaskIMG } from '../../../utils/user_online_activity_status_badge_api_util';
import NoFriendsDMModalContainer from '../no_friends_dm_modal/no_friends_dm_modal_container';
import { CloseXIcon, FriendsRaiseHandIcon, SharpAddIcon, StrifeNitroBadgeIcon, StrifeNitroLabelIcon, StrifeShopIcon } from '../../front_end_svgs/Strife_svgs';


const DmNavBar = (props) => {
    const listItemRef = useRef();
    const [createDmModal, setCreateDmModal] = useState(false);
    const [noFriendsDmModal, setNoFriendsDmModal] = useState(false);
    const [popUpTop, setPopUpTop] = useState(0);
    const [showPopUp, setShowPopUp] = useState(false);
    const [dmServers, setDmServers] = useState([]);
    const switchColor = useRef(Math.random() > 0.85);

    useEffect(() => {
        props.fetchUserDmServers(props.currentUserId);
        return function cleanup () {
            if (props.errors.length > 0) {
                props.removeDmServerErrors();
            }
        }
    }, [])



    const renderDmServerPFP = (dmServerMembers) => {
        let user = "";
        if (dmServerMembers.length === 2) {
            for (let member of dmServerMembers) {
                if (member.id !== props.currentUserId) {
                    user = member;
                }
            }
        }
        else if (dmServerMembers.length > 2) {
            user = dmServerMembers.at(-1);
        }

        if (dmServerMembers.length === 2) {
            return (
                <svg width="40" height="40" viewBox="0 0 40 40" className="dmsnb-ci-avatar-mask dmsnb-ci-svg" aria-hidden="true">
                    <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                        <div className="dmsnb-ci-avatar-stack">
                            {
                                user.photo === undefined ? (
                                    <img className={`dmsnb-ci-avatar color-${user.color_tag}`} src={DefaultPFPSVG} alt=" " aria-hidden="true" />
                                ) : (
                                    <img className="dmsnb-ci-avatar" src={user.photo} alt=" " aria-hidden="true" />
                                )
                            }
                        </div>
                    </foreignObject>
                    <rect width="10" height="10" x="22" y="22" fill={returnUserBadgeFillColor(user.online)}
                        mask={returnUserOnlineActivityStatusBadgeMaskIMG(user.online)}
                        className="dmsnb-ci-avatar-pointer-events" data-tooltip-id="thread-tip"
                        data-tooltip-content={`${user.online ? 'Online' : 'Offline'}`}
                        data-tooltip-place="top"
                    >
                    </rect>
                </svg>
            )
        }

        return (
            <svg width="32" height="32" viewBox="0 0 32 32" className="dmsnb-ci-avatar-mask dmsnb-ci-svg" aria-hidden="true">
                <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-default)">
                    <div className="dmsnb-ci-avatar-stack">
                        <img className={`dmsnb-ci-avatar group-chat-icon-color-${user.color_tag}`} src={GroupChatIcon} alt=" " aria-hidden="true" />
                    </div>
                </foreignObject>
            </svg>
        )
    }


    const generateDmServerName = (dmServer) => {
        let displayName = "";
        if (dmServer.dm_server_name === null) {
            displayName = Object.values(dmServer.members).filter(member => member.id !== props.currentUser.id).map(member => member.username).join(", ");
        }
        else if (dmServer.dm_server_name !== null || dmServer.dm_server_name !== undefined || dmServer.dm_server_name !== "") {
            displayName = dmServer.dm_server_name;
        }
        return displayName;
    }


    const handlePopUpTop = (e) => {
        let currTop = e.currentTarget.getBoundingClientRect().top;
        setPopUpTop(currTop + 20);
        setShowPopUp(!showPopUp);
    }

    const openCreateDmModal = async (e) => {
        e.preventDefault();
        await reSyncCurrentUser(props.currentUserId).then((result) => {
            if (result.numberOfFriends > 0) {
                setCreateDmModal(true);
            }
            if (result.numberOfFriends === 0) {
                setNoFriendsDmModal(true);
            }
        })

    }


    const renderNoFriendsDmModal = () => {
        if (noFriendsDmModal === true) {
            return (
                <NoFriendsDMModalContainer
                    homeBar={false}
                    dmInvite={false}
                    setNoFriendsDmModal={setNoFriendsDmModal}
                />
            )
        }
    }


    const renderCreateDmModal = () => {
        if (createDmModal === true) {
            return (
                <CreateDmModalContainer setCreateDmModal={setCreateDmModal} />
            )
        }
    }


    return (

        <div className='dm-server-sidebar'>
            <nav className="dm-server-nav-bar">
                {renderNoFriendsDmModal()}
                {renderCreateDmModal()}
                <div className='dm-nav-bar-search-bar'>
                    <button type='button'
                        className='dm-nav-bar-search-bar-button'
                        onClick={() => props.openModal('StartConversationSearch')}>
                        Find or start a conversation
                    </button>
                </div>
                <div className="dm-nav-bar-scroller global-scroll-thin-raw-attributes global-scroller-base global-scroll-faded-raw-attributes"
                    style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                    <ul className="dm-nav-bar-list" role='list'>
                        <div className="dm-nav-bar-list-empty-sep"></div>

                        <li className='friends-nav-bar-wrapper' key={`dmsnb-friends`}>
                            <div className={`friends-nav-bar ${props.location?.pathname === `/$/channels/@me/` ? `selected` : ``}`}>
                                <Link className='friends-nav-bar-link' to={`/$/channels/@me/`}>
                                    <div className='friend-avatar-wrapper'>
                                        <div className='friend-avatar'>
                                            <FriendsRaiseHandIcon width={24} height={24} />
                                        </div>
                                        <div className='friend-avatar-text-wrapper'>
                                            <div className='friend-avatar-text-inner'>
                                                <div className='friend-avatar-text'>Friends</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </li>


                        <li className='nitro-nav-bar-wrapper' key={`dmsnb-$TRIF3-N!TR0`}>
                            <div className={`nitro-nav-bar ${props.location?.pathname === `/$/$T0R3/` ? `selected` : ``}`} >
                                <Link className='nitro-nav-bar-link' to={`/$/$T0R3/`}>
                                    <div className='nitro-avatar-wrapper'>
                                        <div className='nitro-avatar'>
                                            <StrifeNitroBadgeIcon className="dm-nav-bar-channel-item-friend-icon" width={24} height={24} />
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
                                        <div className={`strife-nitro-img1 ${switchColor.current === true ? `strife` : ``}`}>
                                            <StrifeNitroLabelIcon className='strife-nitro-clock1' />
                                            1 Month Free
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </li>

                        <li className='shop-dm-nav-button-nav-bar-wrapper' key={`dmsnb-$TRIF3-SH0P`}>
                            <div className={`shop-dm-nav-button-nav-bar ${props.location?.pathname === `/$/$H0P/` ? `selected` : ``}`} >
                                <Link className='shop-nav-bar-link' to={`/$/$H0P/`}>
                                    <div className='shop-avatar-wrapper'>
                                        <div className='shop-avatar-icon'>
                                            <StrifeShopIcon className="dm-nav-bar-channel-item-shop-icon" width={23} height={18} />
                                        </div>
                                        <div className='shop-avatar-text-wrapper'>
                                            <div className='shop-avatar-text-inner'>
                                                <div className='shop-avatar-text'>
                                                    Shop
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </li>

                        <h2 className='dm-nav-bar-channel-header-container'>
                            <span className="dmsnb-chc-title">Direct Messages</span>
                            <div data-tooltip-id="create-dm-tool-tip" data-tooltip-content='Create DM' className="dm-server-nav-bar-add-dm-button"
                                onClick={(e) => {
                                    openCreateDmModal(e);
                                }}
                            >
                                <SharpAddIcon className="dm-add-button-icon" />
                            </div>

                            <Tooltip className="create-DM-tool-tip-style"
                                id="create-dm-tool-tip" place="top" 
                                positionStrategy="fixed" closeOnResize={true} closeOnScroll={true}
                            />
                        </h2>

                        {
                            props.dmServers.map((dmServer, dmServerIndex) => {
                                let selectedDmServer = props.dmServerId === dmServer.id.toString() ? "selected" : "";
                                let dmServerMembers = Object.values(dmServer.members);
                                let dmServerName = generateDmServerName(dmServer)
                                let dmServerPFP = renderDmServerPFP(dmServerMembers);
                                let dmServerSubtitle = dmServerMembers.length > 2 ? (
                                    <div className='dmnb-ci-subtext'>{`${dmServerMembers.length} Members`}</div>
                                ) : (``);

                                return (
                                    <li className='dm-nav-bar-channel-item' role='listitem' key={dmServer.id} ref={listItemRef}>
                                        <div className={`dm-nav-bar-channel-div-wrap ${selectedDmServer}`}>
                                            <Link className='dm-nav-bar-channel-item-link'
                                                to={`/$/channels/@me/${dmServer.id}`}
                                                data-tooltip-id={`${dmServerName.length >= 19 ? `dmServerToolTip` : ``}`}
                                                data-tooltip-content={`${dmServerName}`}
                                                onClick={() => {
                                                    props.reSyncCurrentUser(props.currentUserId).then((action) => {
                                                        let currUser = action.currentUser;
                                                        if (!currUser.dmServersJoined.includes(parseInt(dmServer.id))) {
                                                            props.removeDmServer(dmServer.id);
                                                            props.history.push('/$/$TR!F3-INTRUSION-PREVENTION/');
                                                        }
                                                        else if (currUser.dmServersJoined.includes(parseInt(dmServer.id))) {
                                                            props.fetchDmServer(dmServer.id);
                                                        }
                                                    })
                                                }}
                                            >
                                                <div className='dm-nav-bar-channel-item-avatar-text-wrapper'>
                                                    <div className='dm-nav-bar-channel-item-avatar'>
                                                        <div className='dmsnb-ci-avatar-wrapper' role='img'>
                                                            {dmServerPFP}
                                                        </div>
                                                    </div>
                                                    <div className='dm-nav-bar-channel-item-content'>
                                                        <div className='dm-nav-bar-channel-item-username-deco'>
                                                            <div className='dm-nav-bar-channel-item-name-wrapper'>
                                                                <div className='dm-nav-bar-channel-item-dms-name'>{dmServerName}</div>
                                                            </div>
                                                        </div>
                                                        <div className='dmnb-ci-subtext-wrapper'>{dmServerSubtitle}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className='delete-dms-button' id={`dmsnb-${dmServer.id}`}>
                                                <CloseXIcon className='delete-dms-button-icon' />
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Tooltip
                        place='top-start'
                        className='dm-server-base-tool-tip-style'
                        anchorSelect="[data-tooltip-id^='dmServerToolTip']"
                        delayShow={1000}
                        closeOnResize={true}
                        closeOnScroll={true}
                        render={({ content }) => (
                            <div className="tool-tip-contents">
                                {content}
                            </div>
                        )}
                    />

                </div>
            </nav >
            <UserNavContainer />
        </div >

    )



}
export default DmNavBar;