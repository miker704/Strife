import React from 'react';
import { useState, useRef, useEffect } from "react";
import {
    StrifeBannerLogo,
    AngelListIcon, CloseXIcon, FolderIcon, GitHubIcon,
    LinkedInIcon,
    PrivateLockIcon, ProfilePanelChevronIcon, WumpusIcon,
} from '../../front_end_svgs/Strife_svgs';
import REACT_PORTAL from '../../../utils/ReactPortal_api_util';

const PurchaseProductModal = (props) => {


    const [gifted, setGifted] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [forward, setForward] = useState(true);
    const [slideAnimation, setSlideAnimation] = useState("");
    const [spinCubes, setSpinCubes] = useState(true);

    useEffect(() => {
        window.addEventListener('keyup', handleESC, false);
        setCurrentSlide(1);
        setGifted(false);
        setTimeout(() => {
            setSpinCubes(false);
        }, 2000);

        return function cleanUp () {
            window.removeEventListener('keyup', handleESC, false);
        }

    }, []);



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

    const handleCloseModal = (e, closeParentModal = false) => {
        e.preventDefault();
        e.stopPropagation();
        let modalToClose = document.getElementById('server-boost-modal')
        if (modalToClose) {
            modalToClose.classList.add("transition-out-2");
            Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                .then(() => {
                    props.closeSubMod(props.formName, closeParentModal);
                    window.removeEventListener('keyup', handleESC, false);
                }, () => {
                    props.closeSubMod(props.formName, closeParentModal);
                    window.removeEventListener('keyup', handleESC, false);
                });
        }
        else {
            props.closeSubMod(props.formName, closeParentModal);
            window.removeEventListener('keyup', handleESC, false);
        }
    }

    const handleSlideForward = (slideNumber) => {
        let modalToClose = document.querySelector('.stsnm-slider-body');
        switch (currentSlide) {
            case 1:
                if (modalToClose) {

                    modalToClose.classList.add("slide-data-to-left-reverse");
                    spinTheCubes();
                    Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                        .then(() => {
                            modalToClose.classList.remove("slide-data-to-left-reverse")
                            setCurrentSlide(slideNumber);
                            setSlideAnimation('slide-data-to-right-reverse');
                            setForward(true);
                        }, () => {
                            modalToClose.classList.remove("slide-data-to-left-reverse")
                            setCurrentSlide(slideNumber);
                            setSlideAnimation('');
                            setForward(true);
                        });
                }
                return;

            case 2:
                if (modalToClose) {

                    modalToClose.classList.add("slide-data-to-left-reverse");
                    spinTheCubes();
                    Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                        .then(() => {
                            modalToClose.classList.remove("slide-data-to-left-reverse")
                            setCurrentSlide(slideNumber);
                            setSlideAnimation('slide-2To3');
                            setForward(true);
                        }, () => {
                            modalToClose.classList.remove("slide-data-to-left-reverse")
                            setCurrentSlide(slideNumber);
                            setSlideAnimation('');
                            setForward(true);
                        });
                }
                return;

            default:
                spinTheCubes();
                setCurrentSlide(slideNumber);
                setSlideAnimation('');
                setForward(true);
                return;
        }


    }

    const spinTheCubes = () => {
        setSpinCubes(true);
        setTimeout(() => {
            setSpinCubes(false);
        }, 2000);
    }

    let formStyles = {
        "1": { position: `relative`, width: `408px`, height: `282px`, overflow: `hidden` },
        "2": { position: `relative`, width: `408px`, height: `237px`, overflow: `hidden` },
    };


    let slide1 = currentSlide === 1 && spinCubes === false ? (
        <div className="stsnm-prod-slide-step2">
            <h5 className="purchase-prod-header-title-h5">Purchase Details</h5>
            <div className='purchase-prod-invoice ppivce-table'>
                <div className='costRowColor costRowBase prodSubCostRow'>
                    <div className='costRowLabel'>{`${props.productName}`}</div>
                    <div className='costRowAmount'>{`$${props.productPrice}`}</div>
                </div>
            </div>

            <div className="stsm-payment-source-wrapper-prod">
                <h1 className="sbm-payment-header">Pay for it with</h1>
                <div className="sbm-fake-select-box">
                    <span className="sbm-fake-select-box-value">
                        <div className="sbm-fake-select-payment-source">
                            <div className="sbm-payment-card-icon sbm-payment-card-small paypal-card">PayPal</div>
                            <div className="sbm-fake-select-payment-source-label">$TR!F3 !$ 4 FR33</div>
                        </div>
                    </span>
                    <div className="sbm-fake-select-box-icons">
                        <ProfilePanelChevronIcon className={`pp-chevron-icon chevronPointDown`} width={18} height={18} />
                    </div>
                </div>
            </div>


            <div className="sbm-legal-mumbo-jumbo-wrapper">
                <div>
                    <div className="sbm-legal-mumbo-jumbo-fine-print-prod">
                        <div>
                            <div>
                                By clicking "Purchase", you agree to the{`${` `}`}
                                <a className="purchase-prod-anchor" href="https://support.discord.com/hc/articles/4410339366295" target='_blank' rel="noreferrer noopener">Paid Services Terms</a>.
                            </div>
                            <div className='purchase-prod-mod-divider'></div>
                        </div>
                        <div>
                            Hey! This purchase is non-refundable. Once you complete your purchase, the item will be available for use immediately and can be accessed in your User Profile settings. Note that Nitro subscriptions become non-refundable once you’ve purchased an item.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : ("");


    let slide2 = currentSlide === 2 && spinCubes === false ? (
        <div className="server-boost-modal-transition-group">
            <div className="sbm-measurment-fill">
                <div className="sbm-animated-mode">
                    <div className="scroller-subModal-scroller-base global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                        <div className="sbm-strife-banner-flex">
                            <StrifeBannerLogo className="strife-splash-banner-logo green" />
                        </div>
                        <div className="sbm-ty-flex">
                            Thank you for using and taking the time to look at $TR!F3. Hope you've enjoyed it.
                        </div>
                        <div className='sbm-ty-footer-flex'>
                            <span className='splash-footer-nav-link-inner-text'>$TR!F3 is a Discord Clone built by Michael A. Ramoutar. </span>
                        </div>
                        <div className='sbm-social-media-flex'>
                            <a className="splash-footer-socialMediaLink" href='https://www.linkedin.com/in/michael-ramoutar/' title="Connect With Me On LinkedIn" target="_blank">
                                <LinkedInIcon className="splash-footer-socialMediaIcon sbm-social-media-icons" />
                            </a>
                            <a className="splash-footer-nav-link" href="https://github.com/miker704" target="_blank">
                                <GitHubIcon className="splash-footer-socialMediaIcon sbm-social-media-icons" />
                            </a>
                            <a className="splash-footer-nav-link" href="https://angel.co/u/michael-ramoutar-1" target="_blank">
                                <AngelListIcon className="splash-footer-socialMediaIcon sbm-social-media-icons" />
                            </a>
                            <a className="splash-footer-nav-link" href="https://discordapp.com/users/765241782949642280" target="_blank">
                                <WumpusIcon className="splash-footer-socialMediaIcon sbm-social-media-icons" />
                            </a>
                            <a className="splash-footer-nav-link" href="https://miker704.github.io/portfolio-website/" target="_blank">
                                <FolderIcon className="splash-footer-socialMediaIcon sbm-social-media-icons" />
                            </a>
                        </div>
                        <div className="server-boost-modal-bottom-sep"></div>
                    </div>
                </div>
            </div>
        </div>
    ) : ("");

    let spinningCubes = spinCubes ? (
        <div className="stsm-spinner-wrapper-prod">
            <span className={`spinning-cubes`}>
                <span className="inner-cubes moving-cubes">
                    <span className="inner-cube"></span>
                    <span className="inner-cube"></span>
                </span>
            </span>
        </div>
    ) : null;

    let buttonStyles = {
        "1": `sbm-button-footer-container`,
        "2": 'npsm-button-footer-container-reversed',
    };


    return (
        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="serverboostModalLayerContainer">
                <div className="serverBoostModal-backdrop"></div>
                <div className="server-boost-modal-layer">
                    <div className="stsnm-shaker">
                        <div className="server-boost-modal-focus-lock" onClick={(e) => e.stopPropagation()}>
                            <div className="server-boost-modal root-with-header" id="server-boost-modal">
                                <div className="purchase-product-header-container">
                                    <div className="purchase-product-header-image-container">
                                        <div className='purchase-product-header-image'></div>
                                    </div>
                                    <button type="button" className="purchase-product-x-close-icon-button" onClick={(e) => handleCloseModal(e)}>
                                        <div className="purchase-product-x-close-icon-filler global-button-contents"><CloseXIcon className="purchase-product-x-close-icon" /></div>
                                    </button>
                                </div>
                                {
                                    currentSlide === 1 ? (null) : (
                                        <div className="stsnm-bread-crumb-wrapper-container">
                                            <div className="bsspm-bread-crumb-flex-wrapper">
                                                <div className="bsspm-bread-crumb-wrapper">
                                                    <span className={`bsspm-breadCrumb ${currentSlide === 1 ? `activeBreadCrumb` : ``}`}>Review</span>
                                                    <ProfilePanelChevronIcon className="breadCrumb-chevron-icon chevronPointRight" />
                                                </div>
                                                <div className="bsspm-bread-crumb-wrapper bsspm-bread-crumb-final-wrapper">
                                                    <span className="bsspm-breadCrumb activeBreadCrumb">Success Enjoy Your Purchase!</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }

                                <div className="npsm-content stsnm-body-scroller global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                                    <div style={formStyles[currentSlide]}>
                                        <div style={{ position: `absolute`, flexDirection: `column`, backfaceVisibility: `hidden`, transform: `scale(1,1)`, left: `auto`, right: `auto` }}>
                                            <div className={`stsnm-slider-body ${slideAnimation}`}>
                                                {slide1}
                                                {slide2}
                                                {spinningCubes}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stsnm-bottom-sep"></div>
                                </div>
                                <div>
                                    <div className={buttonStyles[currentSlide]}>
                                        {
                                            currentSlide === 1 ? (

                                                <>

                                                    <div className="bbsspm-priv-lock-icon-payment-footer">
                                                        <PrivateLockIcon className="bbsspm-priv-lock-icon" width={18} height={18} />
                                                        <div className="bbsspm-priv-lock-icon-subtitle">Secure</div>
                                                    </div>

                                                    <div className="bsspm-foot-right">
                                                        <button type="button" className="npsm-upgrade-to-nitro-button"
                                                            onClick={(e) => {
                                                                handleSlideForward(2);
                                                            }}>
                                                            <div className="look-filled-button-contents global-button-contents">Purchase</div>
                                                        </button>
                                                    </div>

                                                </>

                                            ) : (null)
                                        }
                                        {
                                            currentSlide === 2 ? (
                                                <div className="bsspm-foot-right">
                                                    <button type="button" className="npsm-upgrade-to-nitro-button"
                                                        onClick={(e) => handleCloseModal(e, true)}>
                                                        <div className="look-filled-button-contents global-button-contents">Exit</div>
                                                    </button>
                                                </div>
                                            ) : (null)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL>
    )

}

export default PurchaseProductModal;