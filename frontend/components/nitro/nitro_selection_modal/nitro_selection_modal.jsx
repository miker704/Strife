import React from "react";
import { CloseXIcon, ComputerStreamingIcon, GemBoostIcon, MiniProfileCardIcon, NitroBasicBannerIcon, NitroHappyFaceIcon, NitroStoreSuperReactionIcon, NitroTier2LogoIcon, NitroUpArrowIcon, SparkleStarIcon, StrifeNitroBadgeIcon } from "../../front_end_svgs/Strife_svgs";
import { useEffect, useRef, useState } from "react";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { Tooltip } from "react-tooltip";
import SubscribeToStrifeNitroBasicModalContainer from "../subscribe_to_nitro_basic_modal/subscribe_to_nitro_basic_modal_container";
import SubscribeToStrifeNitroProModalContainer from "../subscribe_to_nitro_modal/subscribe_to_nitro_pro_modal_container";
const NitroSelectionModal = (props) => {

    const [gifted, setGifted] = useState(false);
    const [switchMod, setSwitchMod] = useState(1);

    useEffect(() => {
        setGifted(props.gifted);
        setSwitchMod(1);
        window.addEventListener('keyup', handleESC, false);
        return function cleanUp () {
            window.removeEventListener('keyup', handleESC, false);
        }
    }, []);

    useEffect(() => {

        if (switchMod === 1) {
            window.addEventListener('keyup', handleESC, false);
        }
        else if (switchMod !== 1) {
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

    const handleSwitchMod = (modNumber) => {
        setSwitchMod(modNumber);
    }

    if (switchMod === 2) {
        return (
            <SubscribeToStrifeNitroProModalContainer switchMod={switchMod} setSwitchMod={setSwitchMod} gifted={gifted} closeSubMod={props.closeSubMod} formName={props.formName} />
        )
    }
    else if (switchMod === 3) {
        return (
            <SubscribeToStrifeNitroBasicModalContainer switchMod={switchMod} setSwitchMod={setSwitchMod} gifted={gifted} closeSubMod={props.closeSubMod} formName={props.formName} />
        )
    }
    else {
        return (
            <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
                <div className="serverboostModalLayerContainer">
                    <div className="serverBoostModal-backdrop"></div>
                    <div className="server-boost-modal-layer">
                        <div className="stsnm-shaker">
                            <div className="server-boost-modal-focus-lock" onClick={(e) => e.stopPropagation()}>
                                <div className="server-boost-modal root-with-header" id="server-boost-modal">
                                    <div className="stsnm-header stsm-plan-bg-header">
                                        <h1 className="stsm-plan-bg-headerH1">Select Plan</h1>
                                        <button type="button" className="stsnm-close-button" onClick={(e) => handleCloseModal(e)}>
                                            <div className="global-button-contents"><CloseXIcon className="closeIconX" /></div>
                                        </button>
                                    </div>
                                    <div className="npsm-content stsm-plan-bg-header stsm-plan-selector-content global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                                        <div role="button" tabIndex={0} style={{ cursor: `pointer` }} onClick={(e) => handleSwitchMod(2)}>
                                            <div className="tier-card-2 stsm-plan-selector-cards">
                                                <div className="wumpus-card-img-container">
                                                    <div className="wumpus-img-wrapper">
                                                        <img alt=" " className="tier-card-2-img" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <NitroTier2LogoIcon className="tier-card-2-banner-logo" />
                                                    <h2 className="stsm-tier1Card">
                                                        <span className="tier-price">$9.99</span> / month
                                                    </h2>
                                                    <h2 className="tier-card-1-h2">
                                                        <span className="tier-price">$99.99</span> / year
                                                    </h2>
                                                    <div className="tier-benefits">
                                                        <NitroUpArrowIcon className="tier-card-1-icons" />
                                                        <div className="tier-benefits-text">500MB uploads</div>
                                                    </div>
                                                    <div className="tier-benefits">
                                                        <NitroHappyFaceIcon className="tier-card-1-icons" />
                                                        <div className="tier-benefits-text">Custom emoji anywhere</div>
                                                    </div>
                                                    <div className="tier-benefits">
                                                        <NitroStoreSuperReactionIcon className="tier-card-1-icons" />
                                                        <div className="tier-benefits-text">Unlimited Super Reactions</div>
                                                    </div>
                                                    <div className="tier-benefits">
                                                        <ComputerStreamingIcon className="tier-card-1-icons" />
                                                        <div className="tier-benefits-text">HD video streaming</div>
                                                    </div>
                                                    <div className="tier-benefits">
                                                        <GemBoostIcon className="tier-card-1-icons" />
                                                        <div className="tier-benefits-text">2 Server Boosts</div>
                                                    </div>
                                                    <div className="tier-benefits">
                                                        <MiniProfileCardIcon className="tier-card-1-icons" />
                                                        <div className="tier-benefits-text">Custom profiles and more!</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="button" tabIndex={0} style={{ cursor: `pointer` }} onClick={(e) => handleSwitchMod(3)}>
                                            <div className="tier-card-0 stsm-plan-selector-cards stsm-plan-selector-tier1card">
                                                <div className="wumpus-card-img-container">
                                                    <div className="wumpus-img-wrapper">
                                                        <img alt=" " className="tier-card-1-img" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <div className="tier-card-1-logo-container">
                                                            <NitroBasicBannerIcon className="tier-card-1-logo" />
                                                        </div>
                                                        <h2 className="stsm-tier1Card">
                                                            <span className="tier-price">$2.99</span> / month
                                                        </h2>
                                                        <h2 className="tier-card-1-h2">
                                                            <span className="tier-price">$29.99</span> / year
                                                        </h2>
                                                        <div className="tier-benefits">
                                                            <NitroUpArrowIcon className="tier-card-1-icons" />
                                                            <div className="tier-benefits-text">50MB uploads</div>
                                                        </div>
                                                        <div className="tier-benefits">
                                                            <NitroHappyFaceIcon className="tier-card-1-icons" />
                                                            <div className="tier-benefits-text">Custom emoji anywhere</div>
                                                        </div>
                                                        <div className="tier-benefits">
                                                            <NitroStoreSuperReactionIcon className="tier-card-1-icons" />
                                                            <div className="tier-benefits-text">Unlimited Super Reactions</div>
                                                        </div>
                                                        <div className="tier-benefits">
                                                            <StrifeNitroBadgeIcon className="tier-card-1-icons" height={24} width={24} />
                                                            <div className="tier-benefits-text">Special N!TR0 badge on your profile</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="stsnm-bottom-sep"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tooltip className="suom-server-name-tool-tip" id="sbm-thread-tip" place="top" closeOnResize={true} closeOnScroll={true} />
                </div>
            </REACT_PORTAL >
        )
    }
}

export default NitroSelectionModal;