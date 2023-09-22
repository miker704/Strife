import React from "react";
import { CloseXIcon, PersonShieldIcon, ScreenShareIcon, StickerIcon, XDIcon } from "../../front_end_svgs/Strife_svgs";
import { useEffect, useRef, useState } from "react";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import BoostServerSelectPlanModalContainer from "../boost_select_plan_modal/boost_server_select_plan_modal_container";
import SubscribeToStrifeNitroProModalContainer from "../subscribe_to_nitro_modal/subscribe_to_nitro_pro_modal_container";

const BoostServerModal = (props) => {
    const popupRef = useRef();
    const [switchMod, setSwitchMod] = useState(1);

    useEffect(() => {
        setSwitchMod(1);
        window.addEventListener('keyup', handleESC, false);
        return function cleanUp () {
            window.removeEventListener('keyup', handleESC, false);
        }

    }, []);


    useEffect(() => {

        if (switchMod === 1 || switchMod === 2) {
            window.addEventListener('keyup', handleESC, false);
        }
        else if (switchMod === 3) {
            window.removeEventListener('keyup', handleESC, false);
        }

    }, [switchMod])

    const handleESC = (e) => {

        const keys = {
            27: () => {
                e.preventDefault();
                e.stopPropagation();
                handleCloseModal(e);
                window.removeEventListener('keyup', handleESC, false);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }

    const handleCloseModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let modalToClose = document.getElementById('server-boost-modal')
        if (modalToClose) {
            modalToClose.classList.add("transition-out");
            Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                .then(() => {
                    props.closeSubMod(props.formName);
                    window.removeEventListener('keyup', handleESC, false);
                }, () => {
                    props.closeSubMod(props.formName);
                    window.removeEventListener('keyup', handleESC, false);
                });
        }
        else {
            props.closeSubMod(props.formName);
            window.removeEventListener('keyup', handleESC, false);
        }
    }

    const handleSwitch = (modNumber) => {
        setTimeout(() => {
            setSwitchMod(modNumber);
        }, 500);

    }


    if (switchMod === 2) {
        return (
            <BoostServerSelectPlanModalContainer closeSubMod={props.closeSubMod} formName={props.formName} handleCloseModal={handleCloseModal} setSwitchMod={setSwitchMod} handleSwitch={handleSwitch} />
        )
    }
    else if (switchMod === 3) {
        return (
            <SubscribeToStrifeNitroProModalContainer closeSubMod={props.closeSubMod} formName={props.formName} gifted={false} />
        )
    }

    else {
        return (
            <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
                <div className="serverboostModalLayerContainer" onClick={(e) => handleCloseModal(e)}>
                    <div className="serverBoostModal-backdrop"></div>
                    <div className="server-boost-modal-layer" >
                        <div className="server-boost-modal-focus-lock" ref={popupRef} onClick={(e) => e.stopPropagation()}>
                            <div className="server-boost-modal">
                                <div className="server-boost-modal-content">
                                    <div className="server-boost-modal-body-wrapper">
                                        <div className="server-boost-modal-transition-group">
                                            <div className="sbm-measurment-fill">
                                                <div className="sbm-animated-mode">
                                                    <div className="scroller-subModal-scroller-base global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                                                        <div className="smb-main-wrapper">
                                                            <button type="button" className="sbm-close-button" onClick={(e) => handleCloseModal(e)}>
                                                                <div className="global-button-contents"><CloseXIcon className="closeIconX" /></div>
                                                            </button>
                                                            <img className="sbm-gem-angel" alt=" " />
                                                            <div className="sbm-header">Unlock customization and upgrades for everyone:</div>
                                                            <div className="sbm-perks">
                                                                <div className="sbm-perk-row">
                                                                    <div className="sbm-perk-container"><PersonShieldIcon className="sbm-perk-icon" /></div>
                                                                    <div className="sbm-perk-description">Set a unique icon for each role in the server</div>
                                                                </div>
                                                                <div className="sbm-perk-row">
                                                                    <div className="sbm-perk-container"><StickerIcon className="sbm-perk-icon" /></div>
                                                                    <div className="sbm-perk-description">Upload up to 30 custom stickers and 150 custom emoji</div>
                                                                </div>
                                                                <div className="sbm-perk-row">
                                                                    <div className="sbm-perk-container"><ScreenShareIcon className="sbm-perk-icon" /></div>
                                                                    <div className="sbm-perk-description">Screen share in 1080p/60fps</div>
                                                                </div>
                                                                <div className="sbm-perk-row">
                                                                    <div className="sbm-perk-container"><XDIcon className="sbm-perk-icon" /></div>
                                                                    <div className="sbm-perk-description">Powerful upgrades: larger file upload sizes, increased audio quality, and more!</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="server-boost-modal-bottom-sep"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sbm-button-footer-container">
                                    <button type="button" className="sbm-footer-close-button" onClick={(e) => handleCloseModal(e)}>
                                        <div className="look-filled-button-contents global-button-contents">Close</div>
                                    </button>
                                    <button type="button" className="sbm-boost-shiny-button" id="shiny-button"
                                        onClick={(e) => {
                                            $("#shiny-button").width(138);
                                            $("#shiny-text").text("");
                                            $("#elip-spin").removeClass("is-hidden");
                                            handleSwitch(2);
                                        }}>
                                        <span id={`elip-spin`} className="spinner-ellipsis spinner-dots is-hidden" role='img'>
                                            <span className="inner-spinner-dots-container pulsing-ellipsis">
                                                <span className="spin-dot spin-dot-item"></span>
                                                <span className="spin-dot spin-dot-item"></span>
                                                <span className="spin-dot spin-dot-item"></span>
                                                <span className="spin-dot spin-dot-item"></span>
                                            </span>
                                        </span>
                                        <div className="shiny-button-contents" id="shiny-text">
                                            Boost This Server
                                            <div className="shiny-button-container">
                                                <div className="shiny-button-flex">
                                                    <div className="shiny-button-inner"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </REACT_PORTAL>
        )
    }




}

export default BoostServerModal;