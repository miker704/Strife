import React from 'react';
import { useRef, useEffect, useState } from "react";
import REACT_PORTAL from '../../../utils/ReactPortal_api_util';
import { closeOnEsc } from "../../../utils/close_hook_modals_api_utils";
import { returnUserBadgeFillColor } from '../../../utils/user_status_badge_color_api_util';
import { returnUserOnlineActivityStatusBadgeMaskIMG } from '../../../utils/user_online_activity_status_badge_api_util';
import { Tooltip } from 'react-tooltip';
import { CaretIcon, CopyIDIcon, CopyIcon, LogoutIcon, PenEditIcon, ReverseArrowsIcon, SelectBoxCheckIcon, StrifeBotTagIcon, StrifeNitroBadgeIcon, SubMenuStatusDNEIcon, SubMenuStatusIdleIcon, SubMenuStatusInvisibleIcon, SubMenuStatusOnlineIcon, CUPCOnlineStatusIcon } from '../../front_end_svgs/Strife_svgs';
import { appPullerPullAnimation, appPullerPullAndHoldAnimation } from '../../../utils/appPullerAnimation_api_util';

const MiniUPCModal = (props) => {

    const popupRef = useRef();
    closeOnEsc(props.setShowPopup);
    const defaultcolorPalleteRef = useRef(Math.random());
    const colorPalleteAltRef = useRef(Math.random());
    const [changeStatusHover, setChangeStatusHover] = useState(false);
    const [switchAccountHover, setSwitchAccountHover] = useState(false);
    const [statusTop, setStatusTop] = useState(0);
    const [switchAccountTop, setSwitchAccountTop] = useState(0);
    const [copiedUserName, setCopiedUserName] = useState(false);


    useEffect(() => {
        return function cleanup () {
            if (props.errors.length > 0) {
                props.removeSessionErrors();
            }
        }

    }, []);

    useEffect(() => {
        if (copiedUserName) {
            setTimeout(() => {
                setCopiedUserName(false);
            }, 3000);
        }
    }, [copiedUserName])


    const Strife_Bot_IDs = [1, 2, 3, 4];

    let if_Bot_tag = Strife_Bot_IDs.includes(props.currentUser.id) ? (
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
        props.setShowPopup(false);
    }


    const handleOpenUserSettings = (e) => {
        e.preventDefault();
        props.setShowPopup(false);
        // appPullerPullAnimation();
        appPullerPullAndHoldAnimation();
        props.openModal('userSettings');
    }

    let pencilIcon = (
        <div className='currentUserUpc-pencil-container' data-tooltip-position-strategy='fixed' data-tooltip-id="suom-tool-tip"
            data-tooltip-content={`Edit Profile`} onClick={(e) => handleOpenUserSettings(e)}>
            <PenEditIcon aria-label="Edit Profile" className="upc-pencil-icon" aria-hidden="false" role="img" width={18} height={18} />
        </div>
    );



    const renderFirstHoverSlide = (e) => {
        e.preventDefault();
        let client = e.currentTarget.getBoundingClientRect();
        setStatusTop(client.top)
        setChangeStatusHover(true);
    }
    const renderSecondHoverSlide = (e) => {
        e.preventDefault();
        let client = e.currentTarget.getBoundingClientRect();
        setSwitchAccountTop(client.top)
        setSwitchAccountHover(true);
    }

    let upcColorPallete = 'user-mini-upc theme-dark userProfileOuterTheme' +
        ((defaultcolorPalleteRef.current > 0.50) ? ' ' + 'user-upc-profile-colors-0' : ' ' + `user-upc-profile-colors-${props.currentUser.color_tag}`) +
        ((colorPalleteAltRef.current > 0.90) ? ' ' + 'alt' : '');

    return (

        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className='mini-current-user-layer-container' onClick={e => handleCloseOnOuterClick(e)}>
                <div className='minicupc-popout' ref={popupRef} onClick={(e) => e.stopPropagation()}>
                    <div className='minicupc-inner-wrapper'>
                        <div className='currentUserAccountProfileWrapper'>
                            <div className={upcColorPallete}>
                                <div className={`user-mini-upc-inner ${props.currentUser.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>

                                    {
                                        props.currentUser.banner === undefined ?
                                            (
                                                <svg className="upc-bannerSVGwrapper" viewBox="0 0 340 90" >
                                                    <mask id="uid_1414">
                                                        <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                                                        <circle fill="black" cx="58" cy="82" r="46"></circle>
                                                    </mask>
                                                    <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_1414)">
                                                        <div className={`upc-banner color-${props.currentUser.color_tag}`}>
                                                            {upcStrifeNitroWrapper}
                                                            {pencilIcon}
                                                        </div>
                                                    </foreignObject>
                                                </svg>

                                            ) : (
                                                <svg className="upc-bannerSVGwrapper-pro" viewBox="0 0 340 120">
                                                    <mask id="uid_3244">
                                                        <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                                                        <circle fill="black" cx="58" cy="112" r="46"></circle>
                                                    </mask>
                                                    <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_3244)">
                                                        <div className={`upc-banner-pro ${props.currentUser.banner === undefined ? `color-${props.currentUser.color_tag}` : ``}`}
                                                            style={{
                                                                backgroundImage: `${props.currentUser.banner === undefined ? `none` : `url(${props.currentUser.banner})`}`,
                                                                backgroundColor: `${props.currentUser.banner === undefined ? `` : `rgb(21, 20, 20)`}`
                                                            }}>
                                                            {upcStrifeNitroWrapper}
                                                            {pencilIcon}
                                                        </div>
                                                    </foreignObject>
                                                </svg>
                                            )
                                    }
                                    <div className={`upc-pfp-icon-wrapper ${props.currentUser.banner ? `pro` : ``}`} role='button'
                                        onClick={(e) => { props.setShowMegaPopUp(true); props.setShowPopup(false); }}>
                                        <div className='upc-pfp-hover-target'>
                                            <div className='upc-avatar-wrapper' role='img'>
                                                <svg width="92" height="92" viewBox="0 0 92 92" className="upc-avatar-svg-mask" aria-hidden="true">
                                                    <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-status-round-80)">
                                                        <div className="upc-avatar-stack">
                                                            {
                                                                props.currentUser.photo === undefined ? (
                                                                    <img className={`upc-avatar-pfp icon-colors-${props.currentUser.color_tag}`} alt=" " aria-hidden="true" />
                                                                ) : (
                                                                    <img className="upc-avatar-pfp" src={props.currentUser.photo} alt=" " aria-hidden="true" />
                                                                )
                                                            }
                                                        </div>
                                                    </foreignObject>
                                                    <circle fill="black" r="14" cx="68" cy="68" style={{ opacity: `0.45` }}></circle>
                                                    <rect width="16" height="16" x="60" y="60" fill={returnUserBadgeFillColor(props.currentUser.online)}
                                                        mask={returnUserOnlineActivityStatusBadgeMaskIMG(props.currentUser.online)}
                                                        className="upc-avatar-pointer-events" data-tooltip-id="suom-tool-tip"
                                                        data-tooltip-position-strategy='fixed' data-tooltip-content={`${props.currentUser.online ? `Online` : `Offline`}`}></rect>
                                                </svg>
                                            </div>
                                        </div>
                                        <svg width="80" height="80" className="upc-avatar-hint" viewBox="0 0 80 80">
                                            <foreignObject x="0" y="0" width="80" height="80" overflow="visible" mask="url(#svg-mask-avatar-status-round-80)">
                                                <div className="upc-avatar-hint-inner">View Profile</div>
                                            </foreignObject>
                                        </svg>
                                    </div>
                                    <div className='upc-profile-badges-container' role='group'>
                                        <a className='usm-user-strife-tag-badge-anchor' role="button" data-tooltip-position-strategy='fixed' data-tooltip-id="suom-tool-tip"
                                            data-tooltip-content={`Originally known as ${props.currentUser.username}#${props.currentUser.strife_id_tag}`}>
                                            <img className='usm-user-strife-tag-badge' alt=" " />
                                        </a>
                                    </div>
                                    <div className='upc-popout-overlay-background upc-overlay-background' >
                                        <span></span>


                                        <div className='upc-section-content upc-username-section'>
                                            <div>
                                                <div className='cupc-copyName-area'
                                                    data-tooltip-id={`${copiedUserName ? `suom-copy-username-tool-tip-on` : `suom-copy-username-tool-tip`}`}
                                                    data-tooltip-content={`${copiedUserName ? `Copied!` : 'Click to copy username'}`}
                                                    onClick={(e) => {
                                                        navigator.clipboard.writeText(props.currentUser.username + "#" + props.currentUser.strife_id_tag).then(() => {
                                                            setCopiedUserName(true);
                                                        })
                                                    }}
                                                >
                                                    <div className='cupc-copyName-area-click-target' aria-label='Click to copy username' role='button' tabIndex={0}>
                                                        <div className='cupc-copyName-field cupc-copiable-wrapper'>
                                                            <div className='cupc-copyName-child-wrapper'>
                                                                <div className='upc-user-text'>
                                                                    <h1 className='upc-user-display-name'>{props.currentUser.username}</h1>
                                                                    <div className='upc-header-username-tag-wrapper'>
                                                                        <span className='upc-username'>{props.currentUser.username}</span>
                                                                        <span className='upc-strife-tag'>#{props.currentUser.strife_id_tag}</span>
                                                                        {if_Bot_tag}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <CopyIcon className="cupc-copy-icon" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='upc-content-divider'></div>
                                        <div className='upc-content-section-scroller global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `4px` }}>
                                            <div className='upc-section-content'>
                                                <h2 className='upc-strife-member-since-header'>$TR!F3 Member Since</h2>
                                                <div className='upc-strife-member-since-container'>
                                                    <div className='upc-strife-member-since-time'>{props.currentUser.accountCreatedOn}</div>
                                                </div>
                                            </div>
                                            <div className='upc-section-content'></div>
                                            <div className='upc-section-content-sep'></div>
                                        </div>
                                        <div className='upc-content-divider'></div>
                                        <div className='currentUser-upc-menu' role='menu' id="account" tabIndex={-1} aria-label="Set Status">
                                            <div className='mini-menu-scroller global-scroll-none global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }} >
                                                <div role='group'>
                                                    <div onMouseLeave={(e) => setChangeStatusHover(false)}>
                                                        <div></div>
                                                        <div className={`cU-upc-menu-item cU-upc-menu-label-container cU-upc-menu-item-color-default ${changeStatusHover ? `hoveredState` : ``}`}
                                                            role='menuitem' id="account-status-picker" tabIndex={-1}
                                                            onMouseEnter={(e) => renderFirstHoverSlide(e)}
                                                        >
                                                            <div className="cU-upc-icon-leftContainer cU-upc-icon-container"><CUPCOnlineStatusIcon className="unAttachedStatusIcon" /></div>
                                                            <div className="cU-upc-inner-label">Online</div>
                                                            <div className="cU-upc-icon-container"><CaretIcon className="caret-icon" /></div>
                                                        </div>

                                                        {
                                                            changeStatusHover ? (
                                                                <div className='currUpc-subMenu-layer-container' style={{ top: `${statusTop}px` }}>
                                                                    <div className='currUpc-subMenuPaddingContainer'>
                                                                        <div className='currUpc-subMenu-attr currUpc-menu-base userProfileOuterTheme' tabIndex={-1} role={'menu'} aria-activedescendant='account-status-picker' >
                                                                            <div className='cupc-overlay-background mini-menu-scroller global-scroll-thin-raw-attributes global-scroller-base' dir="ltr" style={{ overflow: `hidden scroll`, paddingRight: '0px' }}>
                                                                                <div className='cU-upc-menu-item cU-upc-menu-item-color-default' role='menuitem' id="account-status-picker--online" tabIndex={-1}
                                                                                    onClick={(e) => setChangeStatusHover(false)}>
                                                                                    <div className='currUpc-subMenu-status-item'>
                                                                                        <SubMenuStatusOnlineIcon className="cupc-subMenuStatus-icon" />
                                                                                        <div className='currUpc-subMenu-status-text'>Online</div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='cU-upc-menu-content-sep'></div>
                                                                                <div className='cU-upc-menu-item cU-upc-menu-item-color-default' role='menuitem' id="account-status-picker--idle" tabIndex={-1}
                                                                                    onClick={(e) => setChangeStatusHover(false)}>
                                                                                    <div className='currUpc-subMenu-status-item'>
                                                                                        <SubMenuStatusIdleIcon className="cupc-subMenuStatus-icon" />
                                                                                        <div className='currUpc-subMenu-status-text'>Idle</div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='cU-upc-menu-item cU-upc-menu-item-color-default' role='menuitem' id="account-status-picker--dnd" tabIndex={-1}
                                                                                    onClick={(e) => setChangeStatusHover(false)}>
                                                                                    <div className='currUpc-subMenu-status-item'>
                                                                                        <SubMenuStatusDNEIcon className="cupc-subMenuStatus-icon" />
                                                                                        <div className='currUpc-subMenu-status-text'>Do Not Disturb</div>
                                                                                        <div className='description-cupc'>You will not receive any desktop notifications.</div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='cU-upc-menu-item cU-upc-menu-item-color-default' role='menuitem' id="account-status-picker--invisible" tabIndex={-1}
                                                                                    onClick={(e) => setChangeStatusHover(false)}>
                                                                                    <div className='currUpc-subMenu-status-item'>
                                                                                        <SubMenuStatusInvisibleIcon className="cupc-subMenuStatus-icon" />
                                                                                        <div className='currUpc-subMenu-status-text'>Invisible</div>
                                                                                        <div className='description-cupc'>You will not appear online, but will have full access to all of $TR!F3.</div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="cU-upc-menu-bottom-sep"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ) : ("")
                                                        }

                                                    </div>
                                                    <div className='cU-upc-menu-item cU-upc-menu-label-container cU-upc-menu-item-color-default' role='menuitem' id="account-set-custom-status" tabIndex={-1}>
                                                        <div className="cU-upc-icon-leftContainer cU-upc-icon-container"><div className='cU-upc-happy-face' /></div>
                                                        <div className="cU-upc-inner-label">Set Custom Status</div>
                                                    </div>
                                                </div>
                                                <div className='cU-upc-menu-content-sep'></div>
                                                <div role="group">
                                                    <div onMouseLeave={(e) => setSwitchAccountHover(false)}>
                                                        <div></div>
                                                        <div className={`cU-upc-menu-item cU-upc-menu-label-container cU-upc-menu-item-color-default ${switchAccountHover ? `hoveredState` : ``}`} role='menuitem' id="account-switch-account" tabIndex={-1}
                                                            onMouseEnter={(e) => renderSecondHoverSlide(e)}
                                                        >
                                                            <div className="cU-upc-icon-leftContainer cU-upc-icon-container"><ReverseArrowsIcon className="cU-upc-icons" /></div>
                                                            <div className="cU-upc-inner-label">Switch Accounts or Log Out</div>
                                                            <div className="cU-upc-icon-container"><CaretIcon className="caret-icon" /></div>
                                                        </div>
                                                        {
                                                            switchAccountHover ? (
                                                                <div className='currUpc-subMenu-switch-layer-container' style={{ top: `${switchAccountTop}px` }}>
                                                                    <div className='currUpc-subMenuPaddingContainer'>
                                                                        <div className='currUpc-subMenu-attr currUpc-menu-base userProfileOuterTheme' tabIndex={-1} role={'menu'} aria-activedescendant='account-status-picker'>
                                                                            <div className='cupc-overlay-background mini-menu-scroller global-scroll-thin-raw-attributes global-scroller-base' dir="ltr" style={{ overflow: `hidden scroll`, paddingRight: '0px' }}>
                                                                                <div className='cU-upc-menu-item cU-upc-menu-label-container cU-upc-menu-item-color-default' role='menuitem' id="account-switch-account--currentUser" tabIndex={-1}
                                                                                    onClick={(e) => setSwitchAccountHover(false)}>
                                                                                    <div className='currUpc-subMenu-label'>
                                                                                        <div className='currUpc-subMenu-user-item'>
                                                                                            <div className='currUpc-subMenu-userPhoto-wrapper'>
                                                                                                <svg width="24" height="24" viewBox="0 0 24 24" className="currUpc-subMenu-userPhoto-svg-masking" aria-hidden="true">
                                                                                                    <foreignObject x="0" y="0" width="24" height="24" mask="url(#svg-mask-avatar-default)">
                                                                                                        <div className="currUpc-subMenu-avatarStack">
                                                                                                            {
                                                                                                                props.currentUser.photo === undefined ? (
                                                                                                                    <img className={`currUpc-subMenu-avatar icon-colors-${props.currentUser.color_tag}`} alt=" " aria-hidden="true" />
                                                                                                                ) : (
                                                                                                                    <img className="currUpc-subMenu-avatar" src={props.currentUser.photo} alt=" " aria-hidden="true" />
                                                                                                                )
                                                                                                            }
                                                                                                        </div>
                                                                                                    </foreignObject>
                                                                                                </svg>
                                                                                            </div>
                                                                                            <div className='currUpc-subMenu-username'>
                                                                                                <div className='currUpc-subMenu-username-text'>{props.currentUser.username}</div>
                                                                                            </div>
                                                                                            <SelectBoxCheckIcon className="activeAccountSvgIcon" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='cU-upc-menu-content-sep'></div>
                                                                                <div className='cU-upc-menu-item cU-upc-menu-label-container cU-upc-menu-item-color-default' role='menuitem' id="account-switch-account--currentUser--logout" tabIndex={-1}
                                                                                    onClick={(e) => setSwitchAccountHover(false)}>
                                                                                    <div className='currUpc-subMenu-label'>Manage Accounts</div>
                                                                                </div>
                                                                                <div className='cU-upc-menu-content-sep'></div>
                                                                                <div className='cU-upc-menu-item cU-upc-menu-label-container cU-upc-menu-item-color-default' role='menuitem' id="account-switch-account--currentUser--logout" tabIndex={-1}
                                                                                    onClick={(e) => {
                                                                                        props.setShowLogOut(true);
                                                                                        props.setShowPopup(false);
                                                                                    }}>
                                                                                    <div className='currUpc-subMenu-label'>Log Out</div>
                                                                                    <LogoutIcon className="cupc-subMenuStatus-icon usm-logout-icon" />
                                                                                </div>
                                                                                <div className="cU-upc-menu-bottom-sep"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ) : ("")
                                                        }
                                                    </div>
                                                </div>

                                                <div className='cU-upc-menu-content-sep'></div>


                                                <div role="group">
                                                    <div>
                                                        <div></div>
                                                        <div className='cU-upc-menu-item cU-upc-menu-label-container cU-upc-menu-item-color-default cUPC-menu-CopyId'
                                                            role='menuitem' id="account-copy-strife-tag" tabIndex={-1}
                                                            onClick={(e) => {
                                                                navigator.clipboard.writeText(props.currentUser.id).then(() => { props.setShowPopup(false); })
                                                            }}>
                                                            <div className="cU-upc-icon-leftContainer cU-upc-icon-container"><CopyIDIcon className="cU-upc-icons" /></div>
                                                            <div className="cU-upc-inner-label">Copy User ID</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cU-upc-menu-bottom-sep"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Tooltip className="suom-server-name-tool-tip" id="suom-tool-tip" place="top" closeOnResize={true} />
                <Tooltip className={`suom-server-name-tool-tip`} id="suom-copy-username-tool-tip"
                    place="top" closeOnResize={true} delayShow={500}
                />
                <Tooltip className={`suom-copy-name-tool-tip`} id="suom-copy-username-tool-tip-on"
                    place="top" isOpen={copiedUserName} closeOnResize={true} delayHide={500}
                />
            </div>
        </REACT_PORTAL >
    )

}

export default MiniUPCModal;
