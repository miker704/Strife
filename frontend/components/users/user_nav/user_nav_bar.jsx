import React from "react";
import { useState } from "react";
import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
import { Tooltip } from "react-tooltip";
import { HeadPhoneIcon, HeadPhoneMutedIcon, MicroPhoneIcon, MicroPhoneMutedIcon, SettingsIcon_Medium } from "../../front_end_svgs/Strife_svgs";
import MiniUPCModalContainer from "../mini_user_profile_card/mini_user_profile_card_modal_container";
import ConfirmLogoutModalContainer from "../logout_modal/logout_modal_container";
import MegaUPCModalContainer from "../mega_user_card_modal/mega_user_card_modal_container";
import { appPullerPullAndHoldAnimation, appPullerPullAnimation } from "../../../utils/appPullerAnimation_api_util";


const UserNavBar = (props) => {


    const [micMute, setMicMute] = useState(false);
    const [deafen, setDeafen] = useState(false);
    const [hover, setHover] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [showLogOut, setShowLogOut] = useState(false);
    const [showMegaPopUp, setShowMegaPopUp] = useState(false);

    const [currentSubModal, setCurrentSubModal] = useState({
        logoutConfirm: false,
    });

    const openMod = (field) => {
        setCurrentSubModal({ [field]: true });
    }
    const closeForm = (field) => {
        setCurrentSubModal({ [field]: false });
    }

    let mic_component = micMute === false ?
        (
            <MicroPhoneIcon className="svg-microphone" />
        ) :
        (
            <MicroPhoneMutedIcon className="svg-muted-microphone" />
        );

    let headphone_component = deafen === false ?
        (
            <HeadPhoneIcon className="svg-headphone" />
        ) :
        (
            <HeadPhoneMutedIcon className="svg-muted-headphone" />
        );


    const renderShowMiniUPCModal = () => {
        if (showPopup === true) {
            return (
                <MiniUPCModalContainer setShowPopup={setShowPopup} setShowLogOut={setShowLogOut} setShowMegaPopUp={setShowMegaPopUp} />
            )
        }
    }

    const renderLogOutModal = () => {
        if (showLogOut === true) {
            return (
                <ConfirmLogoutModalContainer closeSubMod={setShowLogOut} formName={false} />
            )
        }
    }

    const renderMegaUpcModal = () => {
        if (showMegaPopUp === true) {
            return (
                <MegaUPCModalContainer setShowMegaPopUp={setShowMegaPopUp} member={props.currentUser} memberId={props.currentUser.id} />
            )
        }
    }

    return (

        <section className="user-nav-bar-panel">
            {renderShowMiniUPCModal()}
            {renderLogOutModal()}
            {renderMegaUpcModal()}
            <div className="user-nav-blank-wrapper"></div>
            <div className="user-nav-bar" onMouseEnter={(e) => setHover(true)}
                onMouseLeave={(e) => setHover(false)}>
                <div className="user-nav-bar-pfp-container" onClick={(e) => setShowPopup(true)}>
                    <div className="user-nav-bar-pfp-wrapper">
                        <svg width="40" height="40" viewBox="0 0 40 40" className="user-nav-pfp-avatar-mask user-nav-pfp-avatar-svg" aria-hidden="true">
                            <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                                <div className="user-nav-pfp-avatar-stack">
                                    {
                                        props.currentUser.photo === undefined ? (
                                            <img className={`user-nav-pfp-avatar color-${props.currentUser.color_tag}`} src={DefaultPFPSVG} alt=" " aria-hidden="true" />
                                        ) : (
                                            <img className="user-nav-pfp-avatar" src={props.currentUser.photo} alt=" " aria-hidden="true" />
                                        )
                                    }
                                </div>
                            </foreignObject>
                            <rect width="10" height="10" x="22" y="22" fill={`${props.currentUser.online ? `rgb(35, 165, 90)` : `rgb(128, 132, 142)`}`} mask={`url(#svg-mask-status-${props.currentUser.online ? `online` : `offline`})`} className="user-nav-pfp-pointer-events">
                            </rect>
                        </svg>
                    </div>

                    <div className="user-nav-bar-info-container">
                        <div className="user-nav-bar-username-container">
                            {/* switch to display name */}
                            <div className="user-nav-bar-username">
                                {props.currentUser.username}
                            </div>
                        </div>
                        <div className="user-nav-bar-subtext-container">
                            <div className="user-nav-bar-subtexts">
                                {/* switch to username formated when display name is enabled */}
                                <div className={`user-nav-bar-subtext-hover-roll ${hover ? `forced-hover` : ``}`}>
                                    <div className="unb-hovered">
                                        {props.currentUser.username.toLowerCase()}
                                        #{props.currentUser.strife_id_tag}
                                    </div>
                                    <div className="unb-default">{`${props.currentUser.online ? `Online` : `Offline`}`}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="user-nav-bar-button-container">
                    <button type="button" className="user-nav-bar-buttons" onClick={() => setMicMute(!micMute)}
                        data-tooltip-place="top" data-tooltip-id="user-nav-mic-thread-tip" data-tooltip-content={`${micMute === false ? `Mute` : `Unmute`}`}>
                        <div className="unb-button-contents">
                            {mic_component}
                            <Tooltip className="user-nav-bar-mic-settings-tool-tip" place="top" id="user-nav-mic-thread-tip" />
                        </div>
                    </button>

                    <button type="button" className="user-nav-bar-buttons" onClick={() => setDeafen(!deafen)}
                        data-tooltip-place="top" data-tooltip-id="user-nav-headphone-thread-tip" data-tooltip-content={`${deafen === false ? `Deafen` : `Undeafen`}`}>
                        <div className="unb-button-contents">
                            {headphone_component}
                            <Tooltip className="user-nav-bar-headphone-settings-tool-tip" place="top" id="user-nav-headphone-thread-tip" />
                        </div>
                    </button>
                    <button type="button" className="user-nav-bar-buttons" onClick={() => {appPullerPullAndHoldAnimation(); props.openModal('userSettings')}}
                        data-tooltip-place="top" data-tooltip-id="user-nav-settings-thread-tip" data-tooltip-content={`User Settings`}>
                        <div className="unb-button-contents">
                            <SettingsIcon_Medium className="svg-gear" height={20} width={20} />
                            <Tooltip className="user-nav-bar-user-settings-tool-tip" place="top-start" id="user-nav-settings-thread-tip" positionStrategy="fixed" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    )

}

export default UserNavBar;