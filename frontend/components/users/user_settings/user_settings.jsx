import React from 'react';
import { Tooltip } from 'react-tooltip';
import { useState, useRef, useEffect } from "react";
import { returnUserBadgeFillColor } from '../../../utils/user_status_badge_color_api_util';
import { returnUserOnlineActivityStatusBadgeMaskIMG } from '../../../utils/user_online_activity_status_badge_api_util';
import EditUserPFPContainer from '../user_edit_profile_pic_form/user_edit_pfp_container';
import EditUserBannerContainer from '../user_edit_banner_form/user_edit_banner_container';
import EditDisplaynameContainer from '../user_edit_display_name/user_edit_display_name_form_container';
import EditUserNameContainer from '../user_edit_username_form/user_edit_username_container';
import EditUserEmailContainer from '../user_edit_email_form/user_edit_email_container';
import EditUserPasswordContainer from '../user_edit_password_form/user_edit_password_container';
import EditUserPhoneNumberContainer from '../user_edit_phone_number_form/user_edit_phone_number_container';
import RemoveUserPhoneNumberContainer from '../user_remove_phone_number_form/user_remove_phone_number_container';
import DisableUserAccountContainer from '../user_disable_account_form/user_disable_account_container';
import DeleteUserAccountContainer from '../user_delete_account_form/user_delete_account_container';
import ConfirmLogoutModalContainer from '../logout_modal/logout_modal_container';
import CopyStrifeTagIDModalContainer from '../copy_strife_tag_modal/copy_strife_tag_modal_container';
import REACT_PORTAL from '../../../utils/ReactPortal_api_util';
import { appPullerReleaseAnimation, appPullerReleaseHoldAnimation } from '../../../utils/appPullerAnimation_api_util';
import { ESCICON, GreenNitroBallIcon, LinkedInIcon, LogoutIcon, OverFlowEllipsisIcon, PurpleNitroBallIcon, SideBarFaceBookIcon, SideBarInstaGramIcon, SideBarTikTokIcon, SideBarTwitterIcon, SideBarYouTubeIcon, StrifeNitroBadgeIcon, StrifeNitroLabelIcon } from '../../front_end_svgs/Strife_svgs';

const UserSettings = (props) => {
  const [currentSubModal, setCurrentSubModal] = useState({
    changeBanner: false,
    changeEmail: false,
    changePassword: false,
    changePFP: false,
    changePhone: false,
    deleteUser: false,
    disableUser: false,
    displayNameEdit: false,
    removePhoneNumber: false,
    userNameEdit: false,
    logoutConfirm: false,
    copyStrifeTag: false,
  });

  const [user, setUser] = useState({});
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [revealUserEmail, setRevealUserEmail] = useState(false);
  const [revealUserPhone, setRevealUserPhone] = useState(false);
  const [scrambleUserEmailString, setScrambleUserEmailString] = useState('');
  const [scrambleUserPhoneString, setScrambleUserPhoneString] = useState('');
  const [isDemoUser, setIsDemoUser] = useState(false);
  const [isSubModMounted, setIsSubModMounted] = useState(false);
  const [popUpLeft, setPopUpLeft] = useState(0);
  const [popUpTop, setPopUpTop] = useState(0);


  const strifeAdRef = useRef(Math.random());


  useEffect(() => {

    props.reSyncCurrentUser(props.currentUser.id);

    setUser(props.currentUser);
    setUserEmail(props.currentUser.email);
    setUserPhone(props.currentUser.phone_number)
    setScrambleUserEmailString(scrambleEmail());
    setScrambleUserPhoneString(scramblePhoneNumber());
    checkIfDemoUser();

    if (isSubModMounted === true) {

      window.removeEventListener('keyup', overrideCloseModal, false);

    }
    else if (isSubModMounted === false) {

      window.addEventListener('keyup', overrideCloseModal, false);

    }

    return function cleanUp () {
      if (props.errors.length > 0) {
        props.removeSessionErrors();
      }
      window.removeEventListener('keyup', overrideCloseModal, false);

    }

  }, [isSubModMounted])



  const overrideCloseModal = (e) => {
    const keys = {
      27: () => {
        e.preventDefault();
        let modalToClose = document.getElementById("user-settings-modal");
        if (modalToClose) {
          modalToClose.classList.add("transition-out");
          // appPullerReleaseAnimation();
          appPullerReleaseHoldAnimation();
          Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
            .then(() => {
              props.closeModal();
              window.removeEventListener('keyup', overrideCloseModal, false);
            }, () => {
              props.closeModal();
              window.removeEventListener('keyup', overrideCloseModal, false);
            });
        }
        else {
          props.closeModal();
          window.removeEventListener('keyup', overrideCloseModal, false);
        }
      },
    };
    if (keys[e.keyCode] && isSubModMounted === false) {
      keys[e.keyCode]();
    }

  }

  const handleCloseModal = (e) => {
    e.preventDefault();
    let modalToClose = document.getElementById("user-settings-modal");
    if (modalToClose) {
      modalToClose.classList.add("transition-out");
      // appPullerReleaseAnimation();
      appPullerReleaseHoldAnimation();

      Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
        .then(() => {
          props.closeModal();
          window.removeEventListener('keyup', overrideCloseModal, false);
        }, () => {
          props.closeModal();
          window.removeEventListener('keyup', overrideCloseModal, false);
        });
    }
    else {
      props.closeModal();
      window.removeEventListener('keyup', overrideCloseModal, false);
    }
  }



  const scrambleEmail = () => {
    let e_mail = props.currentUser.email;
    let email_Scramble = "";
    for (let i = 0; i < e_mail.length; i++) {
      if (e_mail[i] === "@") {
        email_Scramble = email_Scramble + e_mail.slice(i);
        return email_Scramble;
      }
      else {
        email_Scramble += "*";
      }
    }
  }

  const scramblePhoneNumber = () => {
    if (props.currentUser.phone_number === null) {
      return "";
    }
    else {
      let phoneNum = props.currentUser.phone_number;
      let part1 = phoneNum.slice(0, -4);
      part1 = part1.replace(/\W/g, "*");
      part1 = part1.replace(/\d/g, "*") + phoneNum.slice(-4);
      return part1;
    }
  }

  const checkIfDemoUser = () => {

    //this will lock bot, demo user 1, and 2 , and stacy from being edited /deleted
    const auth_IDs = [1, 2, 3, 4];
    if (auth_IDs.includes(props.currentUser.id)) {
      //set demouserstate active
      setIsDemoUser(true);
      return;
    }
    else {
      setIsDemoUser(false);
      return;
    }
  }



  const renderChangeUserPFP = () => {
    if (currentSubModal.changePFP === true) {
      window.removeEventListener('keyup', overrideCloseModal, false);
      return (
        <EditUserPFPContainer closeSubMod={closeForm} formName={"changePFP"} />
      )
    }
  }

  const renderEditUserNameModal = () => {
    if (currentSubModal.userNameEdit === true) {
      window.removeEventListener('keyup', overrideCloseModal, false);
      return (
        <EditUserNameContainer closeSubMod={closeForm} formName={"userNameEdit"} />
      )
    }
  }

  const renderChangeEmail = () => {
    if (currentSubModal.changeEmail === true) {
      window.removeEventListener('keyup', overrideCloseModal, false);
      return (
        <EditUserEmailContainer closeSubMod={closeForm} formName={"changeEmail"} />
      )
    }
  }

  const renderDeleteUser = () => {
    if (currentSubModal.deleteUser === true) {
      window.removeEventListener('keyup', overrideCloseModal, false);
      return (
        <DeleteUserAccountContainer closeSubMod={closeForm} formName={"deleteUser"} />
      )
    }
  }


  const renderDisableUser = () => {
    if (currentSubModal.disableUser === true) {
      window.removeEventListener('keyup', overrideCloseModal, false);
      return (
        <DisableUserAccountContainer closeSubMod={closeForm} formName={"disableUser"} />
      )
    }
  }

  const renderChangePassword = () => {
    if (currentSubModal.changePassword === true) {
      window.removeEventListener('keyup', overrideCloseModal, false);
      return (
        <EditUserPasswordContainer closeSubMod={closeForm} formName={"changePassword"} />
      )
    }
  }

  const renderEditDisplayName = () => {
    if (currentSubModal.displayNameEdit === true) {
      window.removeEventListener('keyup', overrideCloseModal, false);
      return (
        <EditDisplaynameContainer closeSubMod={closeForm} formName={"displayNameEdit"} />
      )
    }
  }

  const renderRemovePhoneNumber = () => {
    if (currentSubModal.removePhoneNumber === true) {
      window.removeEventListener('keyup', overrideCloseModal, false);
      return (
        <RemoveUserPhoneNumberContainer closeSubMod={closeForm} formName={"removePhoneNumber"} />
      )
    }
  }

  const renderChangeUserBanner = () => {
    if (currentSubModal.changeBanner === true) {
      window.removeEventListener('keyup', overrideCloseModal, false);
      return (
        <EditUserBannerContainer closeSubMod={closeForm} formName={"changeBanner"} />
      )
    }
  }

  const renderChangePhone = () => {
    if (currentSubModal.changePhone === true) {
      window.removeEventListener('keyup', overrideCloseModal, false);
      return (
        <EditUserPhoneNumberContainer closeSubMod={closeForm} formName={"changePhone"} />
      )
    }
  }


  const renderLogOutModal = () => {
    if (currentSubModal.logoutConfirm === true) {
      window.removeEventListener('keyup', overrideCloseModal, false);
      return (
        <ConfirmLogoutModalContainer closeSubMod={closeForm} formName={"logoutConfirm"} />
      )
    }
  }

  const renderCopyStrifeIdPopUp = () => {
    if (currentSubModal.copyStrifeTag === true) {
      window.removeEventListener('keyup', overrideCloseModal, false);
      return (
        <CopyStrifeTagIDModalContainer closeSubMod={closeForm} formName={"copyStrifeTag"} top={popUpTop} left={popUpLeft} />
      )
    }
  }

  const openModal = (field) => {
    setCurrentSubModal(previousState => {
      return { ...previousState, [field]: true };
    });
    window.removeEventListener('keyup', overrideCloseModal, false);
    setIsSubModMounted(true);
  }

  const closeForm = (field) => {
    setCurrentSubModal(previousState => {
      return { ...previousState, [field]: false };
    });
    window.addEventListener('keyup', overrideCloseModal, false);
    setIsSubModMounted(false);
  }



  let demoAccountLockHeaderMessage = isDemoUser === true ? (<div className='demo-editing-lock-warning-header'>Create Your Own Account to Access All Settings</div>) : ("")
  let demoAccountLockMessage = isDemoUser === true ? (<div className='demo-editing-lock-warning'>Editing Disabled For Demo Accounts</div>) : ("")


  return (

    <REACT_PORTAL wrapperId={'mass-modal-container'} classNameId={'mass-modal-layer-container'} onClick={(e) => e.stopPropagation()}>
      <div className='user-settings-wrapper' id="grab-wrapper" onClick={e => e.stopPropagation()}>
        {renderChangeUserPFP()}
        {renderEditUserNameModal()}
        {renderChangeEmail()}
        {renderChangeUserBanner()}
        {renderChangePhone()}
        {renderDeleteUser()}
        {renderDisableUser()}
        {renderChangePassword()}
        {renderRemovePhoneNumber()}
        {renderEditDisplayName()}
        {renderLogOutModal()}
        {renderCopyStrifeIdPopUp()}

        <div className="user-settings-modal" id="user-settings-modal">
          <div className='user-settings-sidebar-region'>
            <div className='user-settings-sidebar-region-scroller-base global-scroll-thin-raw-attributes global-scroller-base global-scroll-faded-raw-attributes' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
              <nav className='user-settings-sidebar'>
                <div className='user-settings-sidebar-list'>
                  <div className='user-settings-sidebar-list-header-wrapper' role='button'>
                    <div className='user-settings-sidebar-list-header'>User Settings</div>
                  </div>
                  <div className='user-settings-sidebar-list-item selected' role="tab">My Account</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Profiles</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Privacy & Safety</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Authorized Apps</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Devices</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Connections</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Friend Requests</div>
                  <div className='user-settings-sidebar-list-seperator'></div>
                  <div className='user-settings-sidebar-list-header-wrapper' role="button">
                    <div className='user-settings-sidebar-list-header'>Billing Settings</div>
                  </div>

                  <div className='premimum-tab user-settings-sidebar-list-item'>
                    <div className='premimumLabel'>
                      Nitro
                      {
                        strifeAdRef.current > 0.75 ? (
                          <GreenNitroBallIcon />
                        ) :
                          strifeAdRef.current > 0.50 ? (
                            <PurpleNitroBallIcon />
                          ) : (
                            <div className={`strife-nitro-img ${strifeAdRef.current > 0.25 ? `strife` : ``}`}>
                              <StrifeNitroLabelIcon className='strife-nitro-clock1' />
                              1 month free
                            </div>
                          )
                      }
                    </div>
                  </div>

                  <div className='user-settings-sidebar-list-item' role="tab">Server Boost</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Subscriptions</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Gift Inventory</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Billing</div>
                  <div className='user-settings-sidebar-list-seperator'></div>
                  <div className='user-settings-sidebar-list-header-wrapper' role="button">
                    <div className='user-settings-sidebar-list-header'>App Settings</div>
                  </div>
                  <div className='user-settings-sidebar-list-item' role="tab">Appearance</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Accessibility</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Voice & Video</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Text & Images</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Notifications</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Keybinds</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Language</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Streamer Mode</div>
                  <div className='user-settings-sidebar-list-item' role="tab">Advanced</div>
                  <div className='user-settings-sidebar-list-seperator'></div>
                  <div className='user-settings-sidebar-list-header-wrapper' role="button">
                    <div className='user-settings-sidebar-list-header'>Activity Settings</div>
                  </div>
                  <div className='user-settings-sidebar-list-item' role="tab">Activity Privacy</div>
                  <div className='user-settings-sidebar-list-item' role="tab">What's New</div>
                  <div className='user-settings-sidebar-list-item' role="tab">HypeSquad</div>
                  <div className='user-settings-sidebar-list-seperator'></div>

                  <div className='user-settings-sidebar-list-item' role="tab" onClick={(e) => openModal("logoutConfirm")}>
                    <div className='user-settings-sidebar-list-item-inner-special'>
                      Log Out
                      <LogoutIcon className="usm-logout-icon" />
                    </div>
                  </div>
                  <div className='user-settings-sidebar-list-seperator'></div>

                  <div className='usm-social-links'>
                    <a className='usm-social-links-anchor' target='_blank' rel="noreferrer noopener" href="https://twitter.com/discord">
                      <SideBarTwitterIcon />
                    </a>
                    <a className='usm-social-links-anchor' target='_blank' rel="noreferrer noopener" href="https://www.instagram.com/discord/">
                      <SideBarInstaGramIcon />
                    </a>
                    <a className='usm-social-links-anchor' target='_blank' rel="noreferrer noopener" href="https://www.facebook.com/discord/">
                      <SideBarFaceBookIcon />
                    </a>
                    <a className='usm-social-links-anchor' target='_blank' rel="noreferrer noopener" href="https://www.youtube.com/discord/">
                      <SideBarYouTubeIcon />
                    </a>
                    <a className='usm-social-links-anchor' target='_blank' rel="noreferrer noopener" href="https://www.tiktok.com/@discord">
                      <SideBarTikTokIcon />
                    </a>
                    <a className='usm-social-links-anchor' target='_blank' rel="noreferrer noopener" href="https://www.linkedin.com/in/michael-ramoutar/">
                      <LinkedInIcon width={16} height={16} />
                    </a>
                  </div>

                  <div className='usm-system-version-info'>
                    <span className='usm-system-version-info-inners'>Stable 210566 (fc3ede1)</span>
                    <span className='usm-system-version-info-inners'>Windows 11 64-bit</span>
                  </div>
                </div>
              </nav>
              <div className='user-settings-sidebar-seperator'></div>
            </div>
          </div>


          <div className='user-settings-lhs-content'>
            <div className='user-settings-lhs-content-transit-wrap'>
              <div className='user-settings-lhs-content-scroller auto-scroll-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                <div className='user-settings-lhs-inner-contents'>
                  <div>
                    <div>
                      <div className='usm-section-title'>
                        <h2 className='usm-section-title-header'>
                          My Account
                        </h2>
                      </div>

                      <div className='usm-children'>
                        <div className='usm-user-account-profile-card'>
                          {demoAccountLockHeaderMessage}
                          {demoAccountLockMessage}
                          <svg className="usm-upc-bannerSVGwrapper" viewBox="0 0 660 100" >
                            <mask id="uid_127">
                              <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                              <circle fill="black" cx="62" cy="122" r="46"></circle>
                            </mask>
                            <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_127)">
                              <div className={`usm-upc-banner-properties ${props.currentUser.banner === undefined ? `color-${props.currentUser.color_tag}` : ``}`}
                                style={{ backgroundImage: `${props.currentUser.banner === undefined ? `none` : `url(${props.currentUser.banner})`}` }}></div>
                            </foreignObject>
                          </svg>

                          <div className='usm-strife-nitro-wrapper'
                            data-tooltip-id="modal-tool-tip-usm"
                            data-tooltip-position-strategy='fixed' data-tooltip-place='bottom'
                            data-tooltip-content={"Customize your own profile theme, banner, animated avatar, and more with $TR!F3 N!TR0!"}>

                            {
                              isDemoUser === true ? (
                                <button className='usm-edit-user-banner-button' type="button" id="edit-user-banner-button" disabled>
                                  <div className="usm-strife-nitro-badge">
                                    <StrifeNitroBadgeIcon className="usm-strife-nitro-icon" />
                                  </div>
                                  <div className='global-button-contents look-filled-button-contents'>Edit User Banner</div>
                                </button>
                              ) :
                                (
                                  <button className='usm-edit-user-banner-button' type="button" id="edit-user-banner-button" onClick={(e) => openModal("changeBanner")} >
                                    <div className="usm-strife-nitro-badge">
                                      <StrifeNitroBadgeIcon className="usm-strife-nitro-icon" />
                                    </div>
                                    <div className='global-button-contents look-filled-button-contents'>Edit User Banner</div>
                                  </button>
                                )
                            }
                          </div>

                          <div className='usm-uac-pc-user-info'>
                            <div className='usm-profile-card-pfp-wrapper'>
                              <svg width="92" height="92" viewBox="0 0 92 92" className="usm-profile-card-pfp-mask" aria-hidden="true">
                                <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-status-round-80)">
                                  <div className="usm-profile-card-pfp-avatar-stack">
                                    {
                                      props.currentUser.photo === undefined ? (
                                        <img className={`usm-profile-card-pfp icon-colors-${props.currentUser.color_tag}`} alt=" " aria-hidden="true" />
                                      ) : (
                                        <img className="usm-profile-card-pfp" src={props.currentUser.photo} alt=" " aria-hidden="true" />
                                      )
                                    }
                                  </div>
                                </foreignObject>
                                <rect width="16" height="16" x="60" y="60" fill={returnUserBadgeFillColor(props.currentUser.online)}
                                  mask={returnUserOnlineActivityStatusBadgeMaskIMG(props.currentUser.online)} className="usm-profile-card-pfp-pointerEvents"></rect>
                              </svg>
                            </div>
                            <div>
                              <div className='usm-profile-card-username-row'>
                                <div className='usm-upc-user-tag'>
                                  <span className='usm-upc-user-tag-username'>{props.currentUser.username}</span>
                                  <span className='usm-upc-user-tag-strife-tag'>#{props.currentUser.strife_id_tag}</span>
                                </div>
                                <div className='usm-upc-overflow-menu-button' data-tooltip-id="modal-tool-tip-usm" data-tooltip-content={'Copy $TR!F3 Tag'}
                                  onClick={(e) => {
                                    setPopUpLeft(e.currentTarget.getBoundingClientRect().left);
                                    setPopUpTop(e.currentTarget.getBoundingClientRect().top);
                                    openModal('copyStrifeTag');
                                  }}>
                                  <OverFlowEllipsisIcon className="usm-upc-overflow-menu-icon" />
                                </div>
                              </div>
                              <div className='usm-user-strife-tag-badge-list'>
                                <a className='usm-user-strife-tag-badge-anchor' role="button" data-tooltip-position-strategy='fixed' data-tooltip-id="modal-tool-tip-usm"
                                  data-tooltip-content={`Originally known as ${props.currentUser.username}#${props.currentUser.strife_id_tag}`}>
                                  <img className='usm-user-strife-tag-badge' alt=" " />
                                </a>
                              </div>
                            </div>
                            {

                              isDemoUser === true ? (
                                <button className='usm-edit-user-profile-button' type="button" id="edit-user-profile-pic-button" disabled>
                                  <div className='global-button-contents look-filled-button-contents'>Edit User Profile</div>
                                </button>

                              ) : (
                                <button className='usm-edit-user-profile-button' type="button" id="edit-user-profile-pic-button" onClick={(e) => openModal('changePFP')}>
                                  <div className='global-button-contents look-filled-button-contents'>Edit User Profile</div>
                                </button>

                              )
                            }

                          </div>
                          <div className='usm-uac-pc-bg'>
                            <div className='usm-field-list'>
                              <div className='usm-field-list-item usm-field-spacer-bottom'>
                                <div className='usm-field-list-item-constrained-row'>
                                  <div>
                                    <h3 className='usm-field-list-item-constrained-row-header'>Display Name</h3>
                                    <div>
                                      <span className='usm-field-list-item-constrained-row-subtext'>{`${props.currentUser.display_name === undefined ? `You haven't added a display name yet.` : props.currentUser.display_name}`}</span>
                                    </div>
                                  </div>
                                </div>

                                {
                                  isDemoUser === true || props.currentUser.display_name === undefined ? (
                                    <button className='usm-field-list-item-button' type="button" id="edit-user-display-name-button" disabled>
                                      <div className='global-button-contents look-filled-button-contents'>Edit</div>
                                    </button>
                                  ) : (
                                    <button className='usm-field-list-item-button' type="button" id="edit-user-display-name-button"
                                      onClick={(e) => openModal("displayNameEdit")}
                                    >
                                      <div className='global-button-contents look-filled-button-contents'>Edit</div>
                                    </button>
                                  )
                                }

                              </div>

                              <div className='usm-field-list-item'>
                                <div className='usm-field-list-item-constrained-row'>
                                  <div className='usm-fli-constrained-row-username-row'>
                                    <h3 className='usm-field-list-item-constrained-row-header'>Username</h3>
                                    <div className='usm-fli-constrained-row-username-inner-row'>
                                      <span className='usm-field-list-item-constrained-row-subtext'>{props.currentUser.username}</span>
                                      <span className='usm-field-list-item-constrained-row-subtext-strife-tag'>#{props.currentUser.strife_id_tag}</span>
                                    </div>
                                  </div>
                                </div>
                                {
                                  isDemoUser === true ? (
                                    <button className='usm-field-list-item-button' type="button" id="edit-username-button" disabled>
                                      <div className='global-button-contents look-filled-button-contents'>Edit</div>
                                    </button>
                                  ) : (
                                    <button className='usm-field-list-item-button' type="button" id="edit-username-button" onClick={(e) => { openModal("userNameEdit") }}>
                                      <div className='global-button-contents look-filled-button-contents'>Edit</div>
                                    </button>
                                  )
                                }

                              </div>

                              <div className='usm-field-list-item usm-field-spacer'>
                                <div className='usm-field-list-item-constrained-row'>
                                  <div>
                                    <h3 className='usm-field-list-item-constrained-row-header'>Email</h3>
                                    <div>
                                      <span className='usm-field-list-item-constrained-row-subtext'>
                                        {`${revealUserEmail === false ? scrambleUserEmailString : props.currentUser.email}`}
                                        <button type="button" className='usm-field-list-item-reveal-button' onClick={(e) => setRevealUserEmail(!revealUserEmail)}>
                                          <div className='global-button-contents look-filled-button-contents'>{`${revealUserEmail === true ? `Hide` : `Reveal`}`}</div>
                                        </button>
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                {
                                  isDemoUser === true ? (
                                    <button className='usm-field-list-item-button' type="button" id='edit-email-button' disabled>
                                      <div className='global-button-contents look-filled-button-contents'>Edit</div>
                                    </button>
                                  ) : (
                                    <button className='usm-field-list-item-button' type="button" id='edit-email-button' onClick={(e) => openModal("changeEmail")}>
                                      <div className='global-button-contents look-filled-button-contents'>Edit</div>
                                    </button>
                                  )
                                }
                              </div>
                              <div className='usm-field-list-item usm-field-spacer'>
                                <div className='usm-field-list-item-constrained-row'>
                                  <div>
                                    <h3 className='usm-field-list-item-constrained-row-header'>Phone Number</h3>
                                    <div>

                                      {
                                        props.currentUser.phone_number !== null ? (
                                          <span className='usm-field-list-item-constrained-row-subtext'>
                                            {`${revealUserPhone === false ? scrambleUserPhoneString : props.currentUser.phone_number}`}
                                            <button type="button" className='usm-field-list-item-reveal-button' onClick={(e) => setRevealUserPhone(!revealUserPhone)}>
                                              <div className='global-button-contents look-filled-button-contents'>{`${revealUserPhone === true ? `Hide` : `Reveal`}`}</div>
                                            </button>
                                          </span>
                                        ) : (
                                          <span className='usm-field-list-item-constrained-row-subtext'>
                                            You haven't added a phone number yet.
                                          </span>
                                        )
                                      }
                                    </div>
                                  </div>
                                </div>

                                <div className='usm-field-button-list'>

                                  {
                                    isDemoUser === true && props.currentUser.phone_number !== null ? (
                                      <button className='usm-field-list-item-remove-phone-number-button' type="button" disabled>
                                        <div className='global-button-contents look-filled-button-contents'>Remove</div>
                                      </button>
                                    ) :
                                      props.currentUser.phone_number !== null ? (
                                        <button className='usm-field-list-item-remove-phone-number-button' type="button" onClick={(e) => openModal('removePhoneNumber')}>
                                          <div className='global-button-contents look-filled-button-contents'>Remove</div>
                                        </button>
                                      ) : ("")
                                  }

                                  {
                                    isDemoUser === true ? (
                                      <button className='usm-field-list-item-button' type="button" id="edit-phone-button" disabled>
                                        <div className='global-button-contents look-filled-button-contents'>Edit</div>
                                      </button>
                                    ) : (
                                      <button className='usm-field-list-item-button' type="button" id="edit-phone-button" onClick={(e) => openModal("changePhone")}>
                                        <div className='global-button-contents look-filled-button-contents'>Edit</div>
                                      </button>
                                    )
                                  }

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='usm-lhs-section-divider'></div>
                    <div className='usm-user-security-section'>
                      <div className='usm-section-title'>
                        <h2 className='usm-section-title-header'>Password and Authentication</h2>
                      </div>
                      <div className='usm-children'>
                        <div>
                          {
                            isDemoUser === true ? (
                              <button className='usm-change-password-button' type="button" id="change-password-button" disabled>
                                <div className='global-button-contents look-filled-button-contents'>Change Password</div>
                              </button>
                            ) : (
                              <button className='usm-change-password-button' type="button" id="change-password-button" onClick={(e) => openModal("changePassword")}>
                                <div className='global-button-contents look-filled-button-contents'>Change Password</div>
                              </button>
                            )
                          }
                        </div>
                        <div className='usm-flex usm-horz' style={{ flex: `1 1 auto` }}>
                          <div className='usm-flex-child' style={{ flex: `1 1 auto` }}>
                            <div>
                              <div className='usm-section-title'>
                                <h3 className='usm-section-title-header-h3'>Two-factor authentication</h3>
                              </div>
                              <div className='usm-children'>
                                <div className='usm-two-factor-auth-subtext'>
                                  Protect your Discord account with an extra layer of security. Once configured, you'll be required
                                  to enter both your password and an authentication code from your mobile phone in order to sign in.
                                </div>
                                <div>
                                  <button className='usm-enable-two-factor-auth-button' type="button" disabled>
                                    <div className='global-button-contents look-filled-button-contents'>Enable Two-Factor Auth</div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='usm-flex-2' style={{ flex: `0 1 323px` }}>
                            <img className='user-security-img' alt=" " />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='usm-lhs-section-divider'></div>
                    <div className='usm-margin-top-40'>
                      <div className='usm-section-title'>
                        <h2 className='usm-section-title-header-h3'>Account Removal</h2>
                      </div>
                      <div className='usm-children'>
                        <div className='usm-user-account-removal-subtext'>
                          Disabling your account means you can recover it at any time after taking this action.
                        </div>
                        <div className='usm-user-account-removal-button-container'>

                          {
                            isDemoUser === true ? (
                              <button className='usm-disable-user-account-button' type="button" id="disable-account-button" disabled>
                                <div className='global-button-contents look-filled-button-contents'>Disable Account</div>
                              </button>
                            ) : (
                              <button className='usm-disable-user-account-button' type="button" id="disable-account-button" onClick={(e) => openModal("disableUser")}>
                                <div className='global-button-contents look-filled-button-contents'>Disable Account</div>
                              </button>
                            )
                          }

                          {
                            isDemoUser === true ? (
                              <button className='usm-delete-user-account-button' type="button" id="delete-account-button" disabled>
                                <div className='global-button-contents look-filled-button-contents'>Delete Account</div>
                              </button>
                            ) : (
                              <button className='usm-delete-user-account-button' type="button" id="delete-account-button" onClick={(e) => openModal("deleteUser")}>
                                <div className='global-button-contents look-filled-button-contents'>Delete Account</div>
                              </button>
                            )
                          }

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tools-container">
                  <div className="tool-x-to-esc-button-wrapper">
                    <div className="inner-tool-container">
                      <div className="x-to-esc-button" onClick={(e) => handleCloseModal(e)}>
                        <ESCICON />
                      </div>
                      <div className="esc-bind">ESC</div>
                    </div>
                  </div>
                </div>
                <div className="usm-user-settings-end-seperator"></div>
                <Tooltip className="usm-tool-tip" id="modal-tool-tip-usm" place="top" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </REACT_PORTAL >

  )
}

export default UserSettings;