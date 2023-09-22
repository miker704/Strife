import React from 'react';
import { useRef, useEffect, useState } from "react";
import REACT_PORTAL from '../../../utils/ReactPortal_api_util';
import { useCloseModalOnESC, useCloseModalOnOutsideClick } from "../../../utils/close_hook_modals_api_utils";
import { returnUserBadgeFillColor } from '../../../utils/user_status_badge_color_api_util';
import { returnUserOnlineActivityStatusBadgeMaskIMG } from '../../../utils/user_online_activity_status_badge_api_util';
import { fetchUser } from '../../../utils/session_api_util';
import { Tooltip } from 'react-tooltip';
import { PenEditIcon, StrifeBotTagIcon, StrifeNitroBadgeIcon, MoreOptionsIcon } from '../../front_end_svgs/Strife_svgs';
import MegaUpcTab1Container from './mega_user_card_tab_1/mega_user_card_tab_1_container';
import MegaUpcTab2Container from './mega_user_card_tab_2/mega_user_card_tab_2_container';
import MegaUpcTab3Container from './mega_user_card_tab_3/mega_user_card_tab_3_container';
import { appPullerPullAnimation, appPullerPullAndHoldAnimation } from '../../../utils/appPullerAnimation_api_util';
import MegaUPCUserFriendshipOptionsModalContainer from './mega_user_friend_options/mega_user_friend_options_container';

const MegaUPCModal = (props) => {

    const [memberStatus, setMemberStatus] = useState([]);
    const [member, setMemberData] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [popupTop, setPopupTop] = useState(0);
    const [popupLeft, setPopupLeft] = useState(0);
    const [isSubModMounted, setIsSubModMounted] = useState(false);
    const dmMembersArray = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx]);

    const popupRef = useRef();

    useCloseModalOnESC(props.setShowMegaPopUp, 'megaUpc-modal-root', 'transition-out', isSubModMounted);
    useCloseModalOnOutsideClick(popupRef, props.setShowMegaPopUp, 'megaUpc-modal-root', 'transition-out');

    const defaultcolorPalleteRef = useRef(Math.random());
    const colorPalleteAltRef = useRef(Math.random());

    const [tabType, setTabType] = useState({
        userInfo: true,
        MutualServers: false,
        MutualFriends: false,
    });

    useEffect(() => {

        props.fetchUser(props.memberId).then((action) => {
            const newfriend = action.user
            setMemberData(newfriend);
            setMemberStatus(newfriend);
            if (props.o2oStartUp === true) {
                handleClick("MutualServers");
            }
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

    }, []);

    useEffect(() => {

        let friendDataReSync = props.users.find((user) => user.id === member.id);
        if (friendDataReSync) {
            setMemberData(friendDataReSync);
            setMemberStatus(friendDataReSync);
        }
        else {

            if (member?.id && friendDataReSync === undefined) {
                props.fetchUser(member.id).then((action) => {
                    const newfriend = action.user
                    setMemberData(newfriend);
                    setMemberStatus(newfriend);
                });
            }
        }

    }, [props.users])


    useEffect(() => {
        if (showPopup === true) {
            setIsSubModMounted(true);
        }
        else {
            setIsSubModMounted(false);
        }

    }, [showPopup]);


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

    const handleCloseOnOuterClick = (e) => {
        e.preventDefault();
        let modalToClose = document.querySelector('.megaUpc-modal-root');
        if (modalToClose) {
            modalToClose.classList.add('transition-out');
            Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                .then(() => {
                    props.setShowMegaPopUp(false);
                }, () => {
                    props.setShowMegaPopUp(false);
                });
        }
        else {
            props.setShowMegaPopUp(false);
        }
    }


    const handleMoreOptionsLayoutRender = (e) => {
        e.preventDefault();
        let currTop = e.currentTarget.getBoundingClientRect().top;
        let currLeft = e.currentTarget.getBoundingClientRect().left;
        setPopupTop(currTop);
        setPopupLeft(currLeft);
        setShowPopup(!showPopup);
    }

    const handleOpenUserSettings = (e) => {
        e.preventDefault();
        props.setShowMegaPopUp(false);
        // appPullerPullAnimation();
        appPullerPullAndHoldAnimation();
        props.openModal('userSettings');
    }

    let pencilIcon = member.id === props.currentUser.id ? (
        <div className='megaUpc-pencil-container' data-tooltip-position-strategy='fixed' data-tooltip-id="suom-tool-tip"
            data-tooltip-content={`Edit Profile`} onClick={(e) => handleOpenUserSettings(e)}>
            <PenEditIcon aria-label="Edit Profile" className="upc-pencil-icon" aria-hidden="false" role="img" width={18} height={18} />
        </div>
    ) : ("");

    const renderAboutMeTab = () => {
        if (tabType.userInfo === true) {
            return (
                <MegaUpcTab1Container member={member} />
            )
        }
    }

    const renderMutualServersTab = () => {
        if (tabType.MutualServers === true && member.id !== props.currentUser.id) {
            return (
                <MegaUpcTab2Container member={member} setShowMegaPopUp={props.setShowMegaPopUp} />
            )
        }

    }

    const renderMutualFriendsTab = () => {
        if (tabType.MutualFriends === true && member.id !== props.currentUser.id) {
            return (
                <MegaUpcTab3Container member={member} setMemberData={setMemberData} memberStatus={memberStatus} setMemberStatus={setMemberStatus} handleClick={handleClick} />
            )
        }
    }

    const renderMoreOptionsPopUp = () => {
        if (showPopup === true) {
            return (
                <MegaUPCUserFriendshipOptionsModalContainer
                    member={member} setMemberData={setMemberData} memberStatus={memberStatus} setMemberStatus={setMemberStatus}
                    left={popupLeft} top={popupTop} setShowPopup={setShowPopup} setShowMegaPopUp={props.setShowMegaPopUp}
                />
            )
        }
    }


    const handleSendFriendRequest = (e) => {
        e.preventDefault();
        fetchUser(member.id).then((result) => {
            if (result.friend_request_status === 0) {
                props.createFriendship({ user_id: props.currentUser.id, friend_id: member.id }).then((action) => {
                    let new_friend_request = action.friendship;
                    App.StrifeCore.perform('parse_add_friend_request', { new_friend_request });
                })
            }
            else { return; }
        });
        return;
    }

    const handleAcceptFriendRequest = (e) => {
        e.preventDefault();
        fetchUser(member.id).then((result) => {
            if (result.friend_request_status === 2) {
                props.updateFriendship({ user_id: props.currentUser.id, friend_id: member.id }).then(() => {
                    App.StrifeCore.perform('parse_update_friend_request', { user_id: props.currentUser.id, friend_id: member.id });
                });
            }
            else { return; }
        });
        return;
    }

    const handleIgnoreFriendRequest = (e) => {
        e.preventDefault();
        fetchUser(member.id).then((result) => {
            if (result.friend_request_status === 2) {
                props.deleteFriendship({ user_id: props.currentUser.id, friend_id: member.id }).then(() => {
                    App.StrifeCore.perform('parse_delete_friend_request', { user_id: props.currentUser.id, friend_id: member.id });
                });
            }
            else { return; }
        });
        return;
    }

    const handleDmVerification = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let blockIds = [-2, -1];
        fetchUser(member.id).then((result) => {
            if (blockIds.includes(result.friend_request_status)) {
                return;
            }
            else {
                handleDm(e);
            }
        });
        return;
    }


    const handleDm = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const memberIds = [props.currentUser.id, parseInt(member.id)].sort((a, b) => a - b);
        for (let dmServer of props.dmServers) {
            if (dmMembersArray(Object.values(dmServer.members).map((member) => member.id).sort((a, b) => a - b), memberIds)) {
                if (props.history.location.pathname !== `/$/channels/@me/${dmServer.id}`) {
                    props.history.push(`/$/channels/@me/${dmServer.id}`);
                }
                props.setShowMegaPopUp(false);
                return;
            }
        }
        let submissionState = {
            owner_id: props.currentUser.id,
            dm_member_ids: memberIds
        }
        let newDmServer;
        props.createDmServer(submissionState).then((action) => {
            newDmServer = action.dmserver;
            App.StrifeCore.perform('parse_New_Invited_DM_Member', { dm_member_id: member.id, dm_server_id: newDmServer.id });
            props.reSyncCurrentUser(props.currentUser.id).then(() => {
                props.history.push(`/$/channels/@me/${newDmServer.id}`);
                props.setShowMegaPopUp(false);
            })
        });
        return;
    }


    const resetForm = (field) => {
        setTabType(previousState => {
            return { ...previousState, [field]: false };
        })
    }

    const openForm = (field) => {
        setTabType(previousState => {
            return { ...previousState, [field]: true };
        })
    }

    const handleClick = (formType) => {
        let formtypes = [
            "userInfo",
            "MutualServers",
            "MutualFriends",
        ];
        for (let i of formtypes) {
            resetForm(i);
        }
        openForm(formType);
    }


    let upcColorPallete = 'megaUpc-modal theme-dark userProfileOuterTheme' +
        ((defaultcolorPalleteRef.current > 0.50) ? ' ' + 'user-upc-profile-colors-0' : ' ' + `user-upc-profile-colors-${member.color_tag}`) +
        ((colorPalleteAltRef.current > 0.90) ? ' ' + 'alt' : '');

    let memberBanner = member.banner === undefined ?
        (
            <svg className="megaupc-bannerSVGwrapper" viewBox="0 0 600 106" >
                <mask id="uid_133">
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                    <circle fill="black" cx="82" cy="101" r="68"></circle>
                </mask>
                <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_133)">
                    <div className={`megaupc-banner color-${member.color_tag}`} >
                        {upcStrifeNitroWrapper}
                        {pencilIcon}
                    </div>
                </foreignObject>
            </svg>
        ) : (
            <svg className="megaupc-bannerSVGwrapper-pro" viewBox="0 0 600 212" >
                <mask id="uid_663">
                    <rect fill="white" x="0" y="0" width="100%" height="100%">
                    </rect>
                    <circle fill="black" cx="82" cy="207" r="68"></circle>
                </mask>
                <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_663)">
                    <div className={`megaupc-banner-pro ${member.banner === undefined ? `color-${member.color_tag}` : ``}`}
                        style={{
                            backgroundImage: `${member.banner === undefined ? `none` : `url(${member.banner})`}`,
                            backgroundColor: `${member.banner === undefined ? `` : `rgb(21, 20, 20)`}`
                        }}>
                        {upcStrifeNitroWrapper}
                        {pencilIcon}
                    </div>
                </foreignObject>
            </svg>

        );

    let memberPhoto = (
        <div className={`megaUpc-avatar-wrapper ${member.banner ? `pro` : ``}`} role='button'>
            <svg width="138" height="138" viewBox="0 0 138 138" className="upc-avatar-svg-mask" aria-hidden="true">
                <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-status-round-120)">
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
                <circle fill="black" r="20" cx="100" cy="100" style={{ opacity: '0.45' }}></circle>
                <rect width="24" height="24" x="88" y="88"
                    fill={returnUserBadgeFillColor(member.online)}
                    mask={returnUserOnlineActivityStatusBadgeMaskIMG(member.online)}
                    className="upc-avatar-pointer-events" data-tooltip-id="suom-tool-tip"
                    data-tooltip-position-strategy='fixed' data-tooltip-content={`${member.online ? `Online` : `Offline`}`}
                ></rect>
            </svg>
        </div>
    );


    let badgeList = (
        <div className='megaUpc-badge-list' role='group'>
            <a className='usm-user-strife-tag-badge-anchor' role="button" data-tooltip-position-strategy='fixed' data-tooltip-id="suom-tool-tip"
                data-tooltip-content={`Originally known as ${member.username}#${member.strife_id_tag}`}>
                <img className='usm-user-strife-tag-badge' alt=" " />
            </a>
        </div>
    );


    let bodyContainerContents = (
        <div className='megaUpc-body'>
            <div>
                <div className='megaUpc-body-username'>{member.username}</div>
                <div className='megaUpc-body-small-info'>
                    <span className='megaUpc-body-small-info-username megaUpc-body-discriminator'>{member.username}</span>
                    <span className='megaUpc-body-discriminator'>#{member.strife_id_tag}</span>
                    {if_Bot_tag}
                </div>
            </div>
        </div>
    );


    let tabBarContainer = (
        <div className='megaUpc-body-tabBarContainer'>
            <div className='megaUpc-body-tabBar' role='tablist'>
                <div onClick={() => handleClick("userInfo")} className={`megaUpc-tab-item ${tabType.userInfo ? `selected` : ``}`} tabIndex={`${tabType.userInfo ? 0 : -1}`}>User Info</div>
                <div onClick={() => handleClick("MutualServers")} className={`megaUpc-tab-item ${tabType.MutualServers ? `selected` : ``}`} tabIndex={`${tabType.MutualServers ? 0 : -1}`}>Mutual Servers</div>
                <div onClick={() => handleClick("MutualFriends")} className={`megaUpc-tab-item ${tabType.MutualFriends ? `selected` : ``}`} tabIndex={`${tabType.MutualFriends ? 0 : -1}`}>Mutual Friends</div>
            </div>
        </div>
    );

    let moreOptionsButton = (
        <div role='button' tabIndex={0} onClick={(e) => handleMoreOptionsLayoutRender(e)}>
            <MoreOptionsIcon className="megaUpc-more-options-icon" />
        </div>
    );

    let megaUpcContents = "";

    if (member.id === props.currentUser.id) {
        megaUpcContents = (
            <div className='megaUpc-modal-root'>
                <div className={upcColorPallete}>
                    <div className={`megaUpc-inner ${member.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
                        <div className='megaUpc-top-section'>
                            <header>
                                {memberBanner}
                                <div className='megaUpc-header'>
                                    <div>
                                        {memberPhoto}
                                    </div>
                                    <div className='megaUpc-header-top'>
                                        {badgeList}
                                    </div>
                                </div>
                            </header>
                        </div>
                        <div className='megaUpc-profile-modal-overlay-bg upc-overlay-background'>
                            <span></span>
                            <div className='megaUpc-body-container'>
                                {bodyContainerContents}
                                <div className="megaUpc-current-user-top-section-divider"></div>
                                {renderAboutMeTab()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    else {

        switch (memberStatus.friend_request_status) {
            case -2:
                //remove block only -> no message

                megaUpcContents = (
                    <div className='megaUpc-modal-root'>
                        <div className={upcColorPallete}>
                            <div className={`megaUpc-inner ${member.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
                                <div className='megaUpc-top-section'>
                                    <header>
                                        {memberBanner}
                                        <div className='megaUpc-header'>
                                            <div>
                                                {memberPhoto}
                                            </div>
                                            <div className='megaUpc-header-top'>
                                                {badgeList}
                                                <div className='megaUpc-relationShip-buttons'>
                                                    {moreOptionsButton}
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                </div>
                                <div className='megaUpc-profile-modal-overlay-bg upc-overlay-background'>
                                    <span></span>
                                    <div className='megaUpc-body-container'>
                                        {bodyContainerContents}
                                        {tabBarContainer}
                                        {renderAboutMeTab()}
                                        {renderMutualServersTab()}
                                        {renderMutualFriendsTab()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
                break;

            case -1:
                //remove block only -> no message

                megaUpcContents = (
                    <div className='megaUpc-modal-root'>

                        <div className={upcColorPallete}>
                            <div className={`megaUpc-inner ${member.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
                                <div className='megaUpc-top-section'>
                                    <header>
                                        {memberBanner}
                                        <div className='megaUpc-header'>
                                            <div>
                                                {memberPhoto}
                                            </div>
                                            <div className='megaUpc-header-top'>
                                                {badgeList}
                                                <div className='megaUpc-relationShip-buttons'>
                                                    {moreOptionsButton}
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                </div>
                                <div className='megaUpc-profile-modal-overlay-bg upc-overlay-background'>
                                    <span></span>
                                    <div className='megaUpc-body-container'>
                                        {bodyContainerContents}
                                        {tabBarContainer}
                                        {renderAboutMeTab()}
                                        {renderMutualServersTab()}
                                        {renderMutualFriendsTab()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
                break;

            case 0:
                // add friend, block friend, message

                megaUpcContents = (
                    <div className='megaUpc-modal-root'>

                        <div className={upcColorPallete}>
                            <div className={`megaUpc-inner ${member.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
                                <div className='megaUpc-top-section'>
                                    <header>
                                        {memberBanner}
                                        <div className='megaUpc-header'>
                                            <div>
                                                {memberPhoto}
                                            </div>
                                            <div className='megaUpc-header-top'>
                                                {badgeList}
                                                <div className='megaUpc-relationShip-buttons'>
                                                    <button type="button" className='megaUpc-relationShip-action-button green' onClick={(e) => handleSendFriendRequest(e)}>
                                                        <div className='look-filled-button-contents global-button-contents'>Send Friend Request</div>
                                                    </button>
                                                    {moreOptionsButton}
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                </div>
                                <div className='megaUpc-profile-modal-overlay-bg upc-overlay-background'>
                                    <span></span>
                                    <div className='megaUpc-body-container'>
                                        {bodyContainerContents}
                                        {tabBarContainer}
                                        {renderAboutMeTab()}
                                        {renderMutualServersTab()}
                                        {renderMutualFriendsTab()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
                break;

            case 1:
                //message, cancel request

                megaUpcContents = (
                    <div className='megaUpc-modal-root'>

                        <div className={upcColorPallete}>
                            <div className={`megaUpc-inner ${member.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
                                <div className='megaUpc-top-section'>
                                    <header>
                                        {memberBanner}
                                        <div className='megaUpc-header'>
                                            <div>
                                                {memberPhoto}
                                            </div>
                                            <div className='megaUpc-header-top'>
                                                {badgeList}
                                                <div className='megaUpc-relationShip-buttons'>
                                                    <button type="button" className='megaUpc-relationShip-action-button green' disabled>
                                                        <div className='look-filled-button-contents global-button-contents'>Friend Request Sent</div>
                                                    </button>
                                                    {moreOptionsButton}
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                </div>
                                <div className='megaUpc-profile-modal-overlay-bg upc-overlay-background'>
                                    <span></span>
                                    <div className='megaUpc-body-container'>
                                        {bodyContainerContents}
                                        {tabBarContainer}
                                        {renderAboutMeTab()}
                                        {renderMutualServersTab()}
                                        {renderMutualFriendsTab()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
                break;

            case 2:
                // messgae, approve, deny request
                megaUpcContents = (
                    <div className='megaUpc-modal-root'>

                        <div className={upcColorPallete}>
                            <div className={`megaUpc-inner ${member.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
                                <div className='megaUpc-top-section'>
                                    <header>
                                        {memberBanner}
                                        <div className='megaUpc-header'>
                                            <div>
                                                {memberPhoto}
                                            </div>
                                            <div className='megaUpc-header-top'>
                                                {badgeList}
                                                <div className='megaUpc-relationShip-buttons'>
                                                    <div className='megaUpc-pendingIncoming'>
                                                        <button type="button" className='megaUpc-relationShip-action-button green' onClick={(e) => handleAcceptFriendRequest(e)}>
                                                            <div className='look-filled-button-contents global-button-contents'>Accept</div>
                                                        </button>
                                                        <button type="button" className='megaUpc-relationShip-action-button gray shift-right' onClick={(e) => handleIgnoreFriendRequest(e)}>
                                                            <div className='look-filled-button-contents global-button-contents'>Ignore</div>
                                                        </button>
                                                    </div>
                                                    {moreOptionsButton}
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                </div>
                                <div className='megaUpc-profile-modal-overlay-bg upc-overlay-background'>
                                    <span></span>
                                    <div className='megaUpc-body-container'>
                                        {bodyContainerContents}
                                        {tabBarContainer}
                                        {renderAboutMeTab()}
                                        {renderMutualServersTab()}
                                        {renderMutualFriendsTab()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
                break;
            case 3:
                //messgae, delete friend
                megaUpcContents = (
                    <div className='megaUpc-modal-root'>

                        <div className={upcColorPallete}>
                            <div className={`megaUpc-inner ${member.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
                                <div className='megaUpc-top-section'>
                                    <header>
                                        {memberBanner}
                                        <div className='megaUpc-header'>
                                            <div>
                                                {memberPhoto}
                                            </div>
                                            <div className='megaUpc-header-top'>
                                                {badgeList}
                                                <div className='megaUpc-relationShip-buttons'>
                                                    <button type="button" className='megaUpc-relationShip-action-button green' onClick={(e) => handleDmVerification(e)}>
                                                        <div className='look-filled-button-contents global-button-contents'>Send Message</div>
                                                    </button>
                                                    {moreOptionsButton}
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                </div>
                                <div className='megaUpc-profile-modal-overlay-bg upc-overlay-background'>
                                    <span></span>
                                    <div className='megaUpc-body-container'>
                                        {bodyContainerContents}
                                        {tabBarContainer}
                                        {renderAboutMeTab()}
                                        {renderMutualServersTab()}
                                        {renderMutualFriendsTab()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

                break;

            default:

                megaUpcContents = ("");
        }

    }

    return (

        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className='megaUpc-container-layer'>
                <div className="megaUpc-backdrop"></div>
                <div className='megaUpc-modal-layer'>
                    <div className='megaUpc-focus-lock' ref={popupRef} onClick={(e) => e.stopPropagation()}>
                        {megaUpcContents}
                        {renderMoreOptionsPopUp()}
                    </div>
                </div>
                <Tooltip className="suom-server-name-tool-tip" id="suom-tool-tip" place="top" closeOnResize={true} />
            </div>
        </REACT_PORTAL>
    )

}

export default MegaUPCModal;