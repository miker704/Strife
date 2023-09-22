import React from 'react';
import { useRef, useEffect, useState } from "react";
import { returnUserBadgeFillColor } from '../../../utils/user_status_badge_color_api_util';
import { returnUserOnlineActivityStatusBadgeMaskIMG } from '../../../utils/user_online_activity_status_badge_api_util';
import { Tooltip } from 'react-tooltip';
import { StrifeBotTagIcon, StrifeNitroBadgeIcon, ProfilePanelChevronIcon } from '../../front_end_svgs/Strife_svgs';
import { fetchMutualServers, fetchMutualFriends } from '../../../utils/session_api_util';
import MegaUPCModalContainer from '../../users/mega_user_card_modal/mega_user_card_modal_container';

const UPCPanel = (props) => {

    const [memberStatus, setMemberStatus] = useState([]);
    const [member, setMemberData] = useState({});
    const defaultcolorPalleteRef = useRef(Math.random());
    const colorPalleteAltRef = useRef(Math.random());
    const noteRef = useRef(null);
    const [note, setNote] = useState('');
    const [mutualFriends, setMutualFriends] = useState([]);
    const [mutualServers, setMutualServers] = useState([]);
    const [mutualFriendsTab, setMutualFriendsTab] = useState(false);
    const [mutualServersTab, setMutualServersTab] = useState(false);
    const [selectedMember, toggleSelected] = useState({});
    const [showMegaPopUp, setShowMegaPopUp] = useState(false);
    const [showBlanks, setShowBlanks] = useState(true);
    const [mutualServersLoaded, setMutualServersLoaded] = useState(false);
    const [mutualFriendsLoaded, setMutualFriendsLoaded] = useState(false);
    const [showBlankTabs, setShowBlankTabs] = useState(true);

    useEffect(() => {

        setShowBlanks(true);
        setShowBlankTabs(true);
        setMutualFriendsTab(false);
        setMutualServersTab(false);
        setMutualFriendsLoaded(false);
        setMutualServersLoaded(false);
        setMemberStatus({});
        setMemberData({})

        props.fetchUser(props.memberId).then((action) => {
            const newfriend = action.user
            setMemberData(newfriend);
            setMemberStatus(newfriend);
            setShowBlanks(false);
        })
        return function cleanUp () {
            if (props.errors.length > 0) {
                props.removeSessionErrors();
            }
            if (props.dmServerErrors.length > 0) {
                props.removeDmServerErrors();
            }
            if (props.friendshipErrors.length > 0) {
                props.removeFriendshipErrors();
            }
        }

    }, [props.dmServer?.id]);

    useEffect(() => {

        fetchMutualServers({ userId: props.currentUser.id, other_user_id: props.memberId }).then((result) => {
            let finalResult = Object.values(result);
            setMutualServers(finalResult);
            setMutualServersLoaded(true);
        }, (error) => {
            setMutualServers([]);
            setMutualServersLoaded(true);
        })

        fetchMutualFriends({ userId: props.currentUser.id, other_user_id: props.memberId }).then((result) => {
            setMutualFriends(Object.values(result));
            setMutualFriendsLoaded(true);
        }, (error) => {
            setMutualFriends([]);
            setMutualFriendsLoaded(true);
        })

    }, [props.dmServer?.id])

    useEffect(() => {
        let friendDataReSync = props.dmServerMembers.find((user) => user.id === member.id);
        if (friendDataReSync) {
            setMemberData(friendDataReSync);
            setMemberStatus(friendDataReSync);
            fetchMutualServers({ userId: props.currentUser.id, other_user_id: props.memberId }).then((result) => {
                let finalResult = Object.values(result);
                setMutualServers(finalResult);
                setMutualServersLoaded(true);
            }, (error) => {
                setMutualServers([]);
                setMutualServersLoaded(true);
            })
            fetchMutualFriends({ userId: props.currentUser.id, other_user_id: props.memberId }).then((result) => {
                setMutualFriends(Object.values(result));
                setMutualFriendsLoaded(true);
            }, (error) => {
                setMutualFriends([]);
                setMutualFriendsLoaded(true);
            })
        }
    }, [props.dmServerMembers]);

    useEffect(() => {
        if (mutualFriendsLoaded && mutualServersLoaded) {
            setShowBlankTabs(false);
        }
    }, [mutualFriendsLoaded, mutualServersLoaded]);


    const generateFontSize = (serverAcryoName) => {
        if (serverAcryoName.length === 1) {
            return 16;
        }
        else if (serverAcryoName.length === 2 || serverAcryoName.length === 3) {
            return 14;
        }
        else if (serverAcryoName.length === 4) {
            return 12;
        }
        else if (serverAcryoName.length === 5) {
            return 10;
        }
        else if (serverAcryoName.length >= 6) {
            return 8;
        }
    }

    const splitServerName = (serverName) => {
        let serverAcryo = serverName.split(" ").map((parts) => parts[0]).join("");
        return serverAcryo.length > 5 ? serverAcryo.slice(0, 5) : serverAcryo;
    }

    const openMegaUPCModal = (member) => {
        toggleSelected(member);
        setShowMegaPopUp(true);
    }

    const renderMegaUpcModal = () => {
        if (showMegaPopUp === true) {
            return (
                <MegaUPCModalContainer setShowMegaPopUp={setShowMegaPopUp} member={selectedMember} memberId={selectedMember.id} />
            )
        }
    }

    const Strife_Bot_IDs = [1, 2, 3, 4];

    let if_Bot_tag = Strife_Bot_IDs.includes(member.id) ? (
        <span className="bot-sticker">
            <StrifeBotTagIcon aria-label="Verified $TR!F3 B0T" className="bot-check-mark" data-tooltip-position-strategy='fixed' data-tooltip-id="suom-tool-tip" data-tooltip-content={'Verified $TR!F3 B0T'} />
            <span className="bot-text">$TR!F3 B0T</span>
        </span>
    ) : ("");

    let upcStrifeNitroWrapper = (
        <div className='upc-strife-nitro-wrapper' data-tooltip-id="suom-tool-tip"
            data-tooltip-position-strategy='fixed' data-tooltip-place='bottom'
            data-tooltip-content={"Customize your own profile theme, banner, animated avatar, and more with $TR!F3 N!TR0!"}>
            <div className="upc-strife-nitro-badge">
                <StrifeNitroBadgeIcon className="upc-strife-nitro-icon" height={16} width={16} />
            </div>
        </div>
    );


    let upcColorPallete = 'userPanelOuter theme-dark userProfileOuterTheme' +
        ((defaultcolorPalleteRef.current > 0.50) ? ' ' + 'user-upc-profile-colors-0' : ' ' + `user-upc-profile-colors-${member.color_tag}`) +
        ((colorPalleteAltRef.current > 0.90) ? ' ' + 'alt' : '');


    let userBanner = (
        <svg className="upc-bannerSVGwrapper-pro" viewBox="0 0 340 120">
            <mask id="uid_3244">
                <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                <circle fill="black" cx="58" cy="112" r="46"></circle>
            </mask>
            <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_3244)">
                <div className={`upc-panel-banner-pro ${member.banner === undefined ? `color-${member.color_tag}` : ``}`}
                    style={{ backgroundImage: `${member.banner === undefined ? `none` : `url(${member.banner})`}`, backgroundColor: `${member.banner === undefined ? `` : `rgb(21, 20, 20)`}` }}>
                    {upcStrifeNitroWrapper}
                </div>
            </foreignObject>
        </svg>
    )

    let userPhoto = (
        <div className={`avatarPositionPanel`} role='button'>
            <div className='upc-pfp-hover-target'>
                <div className='upc-avatar-wrapper' role='img'>
                    <svg width="92" height="92" viewBox="0 0 92 92" className="upc-avatar-svg-mask" aria-hidden="true">
                        <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-status-round-80)">
                            <div className="upc-avatar-stack">
                                {
                                    member.photo === undefined ? (
                                        <img className={`upc-avatar-pfp icon-colors-${member.color_tag}`} alt=" " aria-hidden="true" />
                                    ) : (
                                        <img className="upc-avatar-pfp" src={member.photo} alt=" " aria-hidden="true" />
                                    )
                                }
                            </div>
                        </foreignObject>
                        <circle fill="black" r="14" cx="68" cy="68" style={{ opacity: `0.45` }}></circle>
                        <rect width="16" height="16" x="60" y="60" fill={returnUserBadgeFillColor(member.online)}
                            mask={returnUserOnlineActivityStatusBadgeMaskIMG(member.online)}
                            className="upc-avatar-pointer-events" data-tooltip-id="suom-tool-tip"
                            data-tooltip-position-strategy='fixed' data-tooltip-content={`${member.online ? `Online` : `Offline`}`}></rect>
                    </svg>
                </div>
            </div>
        </div>
    )

    let badgeGroup = (
        <div className='panel-badge-group'>
            <div className='panel-badge-list' role='group'>
                <a className='usm-user-strife-tag-badge-anchor' role="button" data-tooltip-position-strategy='fixed' data-tooltip-id="suom-tool-tip"
                    data-tooltip-content={`Originally known as ${member.username}#${member.strife_id_tag}`}>
                    <img className='usm-user-strife-tag-badge' alt=" " />
                </a>
            </div>
        </div>
    )



    let userInfo = showBlanks ? null : (

        <div className='userPanel-overlay-background upc-overlay-background'>
            <div className='upc-section-content' >
                <div>
                    <div className='upc-user-text'>
                        <h1 className='upc-user-display-name'>{member.username}</h1>
                        <div className='upc-header-username-tag-wrapper'>
                            <span className='upc-username'>{member.username}</span>
                            <span className='upc-strife-tag'>#{member.strife_id_tag}</span>
                            {if_Bot_tag}
                        </div>
                    </div>
                </div>
            </div>
            <div className='upc-content-divider'></div>
            <div className='upc-section-content'>
                <h2 className='upc-about-me-text'>About Me</h2>
                <div className='upc-about-me-markup-container'>
                    <div className='upc-about-me-markup-text-wrapper'>
                        <span>Loading ... ... ... ... </span>
                        <img className='upc-loading-status' alt="" />
                    </div>
                </div>
            </div>
            <div className='upc-section-content'>
                <h2 className='upc-strife-member-since-header'>$TR!F3 Member Since</h2>
                <div className='upc-strife-member-since-container'>
                    <div className='upc-strife-member-since-time'>{member.accountCreatedOn}</div>
                </div>
            </div>
            <div className='upc-content-divider'></div>
            <div className='upc-section-content'>
                <h2 className='upc-note-title'>Note</h2>
                <div className='upc-note-ta-container'>
                    <textarea className='upc-note-ta-container-text-area global-scrollbar-ghost-hairline global-scrollbar-no-border'
                        maxLength={256} autoCorrect='off' autoComplete='off' value={note} ref={noteRef}
                        onChange={(e) => setNote(e.currentTarget.value)}
                        spellCheck={false} style={{ height: `36px` }} placeholder='Click to add a note'
                    ></textarea>
                </div>
            </div>
        </div>
    )


    let blankUserInfo = showBlanks ? (
        <div className='userPanel-overlay-background upc-overlay-background'>
            <div className='upc-section-content' >
                <div>
                    <div className='upc-user-text'>
                        <h1 className='blank-blob' style={{ opacity: `0.08` }}></h1>
                        <div className='upc-header-username-tag-wrapper' style={{ display: `flex` }}>
                            <span className='blank-blob' style={{ width: `2.125rem`, opacity: `0.08` }}></span>
                            <span className='blank-blob' style={{ width: `8.4375rem`, opacity: `0.08` }}></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='upc-content-divider'></div>
            <div className='upc-section-content'>
                <h2 className='blank-blob' style={{ width: `5.125rem`, opacity: `0.08` }}></h2>
                <div className='upc-about-me-markup-container'>
                    <div className='blank-blob' style={{ width: `8.4375rem`, opacity: `0.08` }}>
                    </div>
                </div>
            </div>
            <div className='upc-section-content'>
                <h2 className='blank-blob' style={{ width: `7.4375rem`, opacity: `0.08` }}></h2>
                <div className='upc-strife-member-since-container'>
                    <div className='blank-blob' style={{ width: `8.4375rem`, opacity: `0.08` }}></div>
                </div>
            </div>
            <div className='upc-content-divider'></div>
            <div className='upc-section-content'>
                <h2 className='blank-blob' style={{ width: `2.125rem`, opacity: `0.08` }}></h2>
                <div className='upc-note-ta-container'>
                    <div className='blank-blob' style={{ width: `8.4375rem`, opacity: `0.08` }}></div>
                </div>
            </div>
        </div>
    ) : (null);


    let blankMutualTabs = showBlankTabs ? (
        <div className='userPanel-overlay-background upc-overlay-background upc-profile-panel-connections'>
            <div className='mutual-server-guild-list-tab'>
                <button type="button" className='collapse-tab-button' onClick={(e) => setMutualServersTab(!mutualServersTab)}>
                    <div className='look-filled-button-contents global-button-contents collapse-tab-button-contents'>
                        <div className='blank-blob' style={{ width: `2.125rem`, opacity: `0.08` }}></div>
                        <div className='blank-blob' style={{ width: `8.4375rem`, opacity: `0.08` }}></div>
                    </div>
                </button>
            </div>

            <div className='mutual-friends-guild-list-tab mutual-friends-guild-list-tab-divider'>
                <button type="button" className='collapse-tab-button' onClick={(e) => setMutualFriendsTab(!mutualFriendsTab)}>
                    <div className='look-filled-button-contents global-button-contents collapse-tab-button-contents'>
                        <div className='blank-blob' style={{ width: `2.125rem`, opacity: `0.08` }}></div>
                        <div className='blank-blob' style={{ width: `8.4375rem`, opacity: `0.08` }}></div>
                    </div>
                </button>
            </div>
        </div>
    ) : (null);

    let userMutualTabs = showBlankTabs ? (null) : (
        <div className='userPanel-overlay-background upc-overlay-background upc-profile-panel-connections'>
            {
                mutualServers.length ? (
                    <div className='mutual-server-guild-list-tab'>
                        <button type="button" className='collapse-tab-button' onClick={(e) => setMutualServersTab(!mutualServersTab)}>
                            <div className='look-filled-button-contents global-button-contents collapse-tab-button-contents'>
                                <div className='collapse-tab-button-text-content'>{`${mutualServers.length === 1 ? `1 Mutual Server` : `${mutualServers.length} Mutual Servers`}`}</div>
                                <div className='collapse-tab-button-chevron-container'><ProfilePanelChevronIcon className={`pp-chevron-icon ${mutualServersTab ? `chevronPointDown` : `chevronPointRight`}`} /></div>
                            </div>
                        </button>
                        <ul className={`upc-profile-panel-connection-list ${mutualServersTab ? `` : `isCollapsed`}`}>
                            {
                                mutualServers.map((server, serverIdx) => {

                                    let serverAcryoName = splitServerName(server.server_name);

                                    const serverAcryoIcon = server.server_Icon === undefined ? (
                                        <div className="megaUpc-server-no-avatar" style={{ fontSize: `${generateFontSize(serverAcryoName)}px` }}>
                                            <div className="megaUpc-server-no-avatar-acryo" >{serverAcryoName}</div>
                                        </div>
                                    ) : ("");

                                    const server_icon = server.server_Icon !== undefined ?
                                        (<div className="megaUpc-server-avatar" style={{ backgroundImage: `url(${server.server_Icon})` }}>
                                        </div>
                                        ) : ("");

                                    return (
                                        <div className="megaUpc-list-item" key={server.id}
                                            onClick={(e) => {
                                                if (props.history.location.pathname !== `/$/channels/${server.id}/${server.general_channel_id}`) {
                                                    props.history.push(`/$/channels/${server.id}/${server.general_channel_id}`);
                                                }
                                            }}>
                                            {serverAcryoIcon}
                                            {server_icon}
                                            <div className='megaUpc-list-item-text-content'>
                                                <div className='megaUpc-list-item-name-text'>{server.server_name}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                ) : ("")
            }

            {
                mutualFriends.length ? (
                    <div className={`mutual-friends-guild-list-tab ${mutualServers.length > 0 ? `mutual-friends-guild-list-tab-divider` : ``}`}>
                        <button type="button" className='collapse-tab-button' onClick={(e) => setMutualFriendsTab(!mutualFriendsTab)}>
                            <div className='look-filled-button-contents global-button-contents collapse-tab-button-contents'>
                                <div className='collapse-tab-button-text-content'>{`${mutualFriends.length === 1 ? `1 Mutual Friend` : `${mutualFriends.length} Mutual Friends`}`}</div>
                                <div className='collapse-tab-button-chevron-container'><ProfilePanelChevronIcon className={`pp-chevron-icon ${mutualFriendsTab ? `chevronPointDown` : `chevronPointRight`}`} /></div>
                            </div>
                        </button>
                        <ul className={`upc-profile-panel-connection-list ${mutualFriendsTab ? `` : `isCollapsed`}`}>
                            {
                                mutualFriends.map((friend, friendIdx) => {
                                    return (
                                        <div className="megaUpc-list-item" key={friend.id}
                                            onClick={(e) => openMegaUPCModal(friend)}>

                                            <div className='megaUpc-friend-avatar-wrapper'>
                                                <svg width="49" height="49" viewBox="0 0 49 49" className="upc-avatar-svg-mask" aria-hidden="true">
                                                    <foreignObject x="0" y="0" width="40" height="40" mask="url(#svg-mask-avatar-status-round-40)">
                                                        <div className="upc-avatar-stack">
                                                            {
                                                                friend.photo === undefined ? (
                                                                    <img className={`upc-avatar-pfp icon-colors-${friend.color_tag}`} alt=" " aria-hidden="true" />
                                                                ) : (
                                                                    <img className="upc-avatar-pfp" src={friend.photo} alt=" " aria-hidden="true" />
                                                                )
                                                            }
                                                        </div>
                                                    </foreignObject>
                                                    <rect width="12" height="12" x="28" y="28"
                                                        fill={returnUserBadgeFillColor(friend.online)}
                                                        mask={returnUserOnlineActivityStatusBadgeMaskIMG(friend.online)}
                                                        className="upc-avatar-pointer-events">
                                                    </rect>
                                                </svg>
                                            </div>
                                            <div className='megaUpc-list-item-name-text megaUpc-friend-userInfo'>
                                                <span className='megaUpc-friend-username'>{friend.username}</span>
                                                <span className='megaUpc-friend-discriminator'>#{friend.strife_id_tag}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                ) : ("")
            }
        </div>
    );



    return (

        <aside className='upc-profile-panel'>
            {renderMegaUpcModal()}
            <div className={upcColorPallete}>
                <div className='userPanelInner userProfileInnerPanel userPanelInnerTheme'>
                    <div className='global-scroll-none global-scroller-base' dir='ltr' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                        <div>
                            {userBanner}
                            {userPhoto}
                            {badgeGroup}
                        </div>
                        {blankUserInfo}
                        {userInfo}
                        {blankMutualTabs}
                        {userMutualTabs}
                        <div className='userPanel-overlay-background upc-overlay-background upc-profile-panel-connections app-list-themed-container'></div>
                        <div className='userPanel-bottom-sep'></div>
                    </div>
                </div>
                <Tooltip className="suom-server-name-tool-tip" id="suom-tool-tip" place="top" closeOnResize={true} closeOnScroll={true} />
            </div>
        </aside>
    )
}

export default UPCPanel;