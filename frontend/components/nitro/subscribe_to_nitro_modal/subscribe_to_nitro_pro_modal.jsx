import React from "react";
import { AngelListIcon, ChatPresentIcon, CloseXIcon, FolderIcon, GitHubIcon, Invite2ServerCheckBoxCheckedIcon, Invite2ServerCheckBoxUnCheckedIcon, LinkedInIcon, NitroTier2LogoIcon, ProfilePanelChevronIcon, RoundedCheckBoxCheckedIcon, RoundedCheckBoxUnCheckedIcon, StrifeBannerLogo, WumpusIcon, } from "../../front_end_svgs/Strife_svgs";
import { useEffect, useRef, useState } from "react";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { Tooltip } from "react-tooltip";

const SubscribeToStrifeNitroProModal = (props) => {

    const [gifted, setGifted] = useState(false);
    const [switchMod, setSwitchMod] = useState(-1);
    const [price, setPrice] = useState(99.99);
    const [choosePlanType, setChoosePlanType] = useState(1);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [forward, setForward] = useState(true);
    const [slideAnimation, setSlideAnimation] = useState("");
    const [hideSubDesc, setHideSubDesc] = useState(true);
    const [agreementCheck, setAgreementCheck] = useState(false);
    const [renewalDate, setRenewalDate] = useState('');
    const [spinCubes, setSpinCubes] = useState(true);
    const [cardName, setCardName] = useState('∞∞∞∞ ∞∞∞∞ ∞∞∞∞ ∞∞∞');
    const [cvs, setCVC] = useState('∞');
    const [expirationDate, setExpirationDate] = useState('∞/∞');
    const [nameOnCard, setNameOnCard] = useState('$TR!F3 !$ 4 FR33')

    useEffect(() => {
        window.addEventListener('keyup', handleESC, false);
        setCurrentSlide(1);
        setSwitchMod(props.switchMod);
        setGifted(props.gifted);
        let date = new Date();
        date.setDate(date.getDate() + 31)
        let year = date.getFullYear();
        let monthName = date.toLocaleString('default', { month: 'short', })
        let day = date.getDate();
        setRenewalDate(`${monthName} ${day}, ${year}`);
        return function cleanUp () {
            window.removeEventListener('keyup', handleESC, false);
        }

    }, []);

    useEffect(() => {
        if (currentSlide === 2) {
            $("#smb-auto-text").text("");
            $("#elip-spin").removeClass("is-hidden");
            setTimeout(() => {
                $("#smb-auto-text").text("Autofill from Browser (N/A)");
                $("#elip-spin").addClass("is-hidden");
            }, 1000);
        }
        if (currentSlide === 4) {
            let date = new Date();
            if (choosePlanType === 1) {
                date.setDate(date.getDate() + 366);
            }
            else {
                date.setDate(date.getDate() + 31);
            }
            let year = date.getFullYear();
            let monthName = date.toLocaleString('default', { month: 'short', })
            let day = date.getDate();
            setRenewalDate(`${monthName} ${day}, ${year}`);
            setTimeout(() => {
                setSpinCubes(false);
            }, 1000);
        }
    }, [currentSlide])

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
            modalToClose.classList.add("transition-out-2");
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

    const handleSelection = (choice) => {
        setChoosePlanType(choice);
        setPrice(choice === 1 ? 99.99 : 9.99)
    }

    const handleSlideForward = (slideNumber) => {
        let modalToClose = document.querySelector('.stsnm-slider-body');
        switch (currentSlide) {
            case 1:
                if (modalToClose) {
                    modalToClose.classList.add("slide-data-to-left-reverse");
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

            case 3:
                if (modalToClose) {
                    modalToClose.classList.add("slide-data-to-left-reverse");
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

            case 4:
                if (modalToClose) {
                    modalToClose.classList.add("slide-data-to-left-reverse");
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
                setCurrentSlide(slideNumber);
                setSlideAnimation('');
                setForward(true);
                return;
        }

    }

    const handleSlideBackward = (slideNumber) => {
        let modalToClose = document.querySelector('.stsnm-slider-body');
        let prevSlide = currentSlide;
        switch (currentSlide) {
            case 2:
                if (modalToClose) {
                    modalToClose.classList.add("slide-data-to-right");
                    Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                        .then(() => {
                            modalToClose.classList.remove("slide-data-to-right")
                            setCurrentSlide(slideNumber);
                            setSlideAnimation("slide-data-to-left");
                            setForward(false);
                        }, () => {
                            modalToClose.classList.remove("slide-data-to-right")
                            setCurrentSlide(slideNumber);
                            setSlideAnimation("");
                            setForward(false);
                        });
                }
                return;
            case 3:
                if (modalToClose) {
                    modalToClose.classList.add("slide-data-to-right");
                    Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                        .then(() => {
                            modalToClose.classList.remove("slide-data-to-right")
                            setCurrentSlide(slideNumber);
                            setSlideAnimation("slide-3To2");
                            setForward(false);

                        }, () => {
                            modalToClose.classList.remove("slide-data-to-right")
                            setCurrentSlide(slideNumber);
                            setSlideAnimation("");
                            setForward(false);
                        });
                }
                return;
            case 4:
                if (modalToClose) {
                    modalToClose.classList.remove('slide-data-to-right-reverse');
                    modalToClose.classList.add("slide-data-to-right-4-3");
                    Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                        .then(() => {
                            modalToClose.classList.remove("slide-data-to-right-4-3")
                            setCurrentSlide(slideNumber);
                            setSlideAnimation('slide-4To3');
                            setForward(false);
                            if (prevSlide === 4) {
                                setHideSubDesc(true);
                                setAgreementCheck(false);
                                setSpinCubes(true);
                            }
                        }, () => {
                            modalToClose.classList.remove("slide-data-to-right-4-3")
                            setCurrentSlide(slideNumber);
                            setSlideAnimation('');
                            setForward(false);
                            if (prevSlide === 4) {
                                setHideSubDesc(true);
                                setAgreementCheck(false);
                                setSpinCubes(true);
                            }
                        });
                }
                return;

            default:
                setCurrentSlide(slideNumber);
                setSlideAnimation('');
                setForward(false);
                return;

        }
    }

    let formStyles = {
        "1": { position: `relative`, width: `408px`, height: `${gifted ? `191px` : `237px`}`, overflow: `hidden` },
        "2": { position: `relative`, width: `408px`, height: `164px`, overflow: `hidden` },
        "3": { position: `relative`, width: `408px`, height: `278px`, overflow: `hidden` },
        "4": { position: `relative`, width: `408px`, height: `${spinCubes && gifted ? `296px` : gifted ? `293px` : spinCubes ? `296px` : hideSubDesc ? `655px` : `518px`}`, overflow: `hidden` },
        "5": { position: `relative`, width: `408px`, height: `237px`, overflow: `hidden` },
    };


    let slide1 = currentSlide === 1 ? (
        <div className="stsnm-slide-step1">
            <div className="stsnm-choose-title">Choose one:</div>
            <div role="radiogroup">
                <div role="radio" className="stsnm-radio-item-planOption-container" onClick={(e) => handleSelection(1)}>
                    <div className="stsnm-radio-item-planOption">
                        <div className="stsnm-radio-item-planOption-clickable">
                            <span className="stsnm-checkbox-wrapper">
                                <div className={`stsnm-checkbox rounded-checkbox-ver stsnm-checkbox-rounded ${choosePlanType === 1 ? `planOptionChecked` : ``}`} style={{ height: `24px`, width: `24px` }}>
                                    {choosePlanType === 1 ? (<RoundedCheckBoxCheckedIcon />) : (<RoundedCheckBoxUnCheckedIcon />)}
                                </div>
                            </span>
                            <div className={`stsnm-radio-item-planOption-interval ${choosePlanType === 1 ? `stsnm-radio-item-planOption-selected` : ``}`}>{`${gifted ? `1 Year` : `Yearly`}`}</div>
                            <span className="stsnm-green-eyebrow-bubble">Save 16%</span>
                        </div>
                        <div className={`${choosePlanType === 1 ? `stsnm-radio-item-planOption-selected` : ``}`}>$99.99</div>
                    </div>
                </div>
                <div role="radio" className="stsnm-radio-item-planOption-container" onClick={(e) => handleSelection(2)}>
                    <div className="stsnm-radio-item-planOption">
                        <div className="stsnm-radio-item-planOption-clickable">
                            <span className="stsnm-checkbox-wrapper">
                                <div className={`stsnm-checkbox rounded-checkbox-ver stsnm-checkbox-rounded ${choosePlanType === 2 ? `planOptionChecked` : ``}`} style={{ height: `24px`, width: `24px` }}>
                                    {choosePlanType === 2 ? (<RoundedCheckBoxCheckedIcon />) : (<RoundedCheckBoxUnCheckedIcon />)}
                                </div>
                            </span>
                            <div className={`stsnm-radio-item-planOption-interval ${choosePlanType === 2 ? `stsnm-radio-item-planOption-selected` : ``}`}>{`${gifted ? `1 Month` : `Monthly`}`}</div>
                        </div>
                        <div className={`${choosePlanType === 2 ? `stsnm-radio-item-planOption-selected` : ``}`}>$9.99</div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="stsnm-select-plan-divider"></div>
                    <div className="sbm-rt-total-row stsnm-selectPlanTotalRow">
                        <div className="sbm-rt-total-row-label">Total</div>
                        <div className="sbm-rt-total-row-amount">
                            <div className="stsnm-pricePerInterval">
                                <strong>${`${price}`}</strong>
                                {`${gifted ? `` : choosePlanType === 1 ? ` / Year` : ` / Month`}`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                gifted ? (null) :
                    (
                        <div className="bsspm-warn-block">
                            <div className="warn-block-icon"></div>
                            <div className="warn-block-anchor-text">
                                Final price and currency will be based on your selected payment method.
                                <a className="warn-block-anchor" href="https://support.discord.com/hc/en-us/articles/4407269525911" rel="noreferrer noopener" target="_blank">{`${` `}`}Learn More</a>
                                .
                            </div>
                        </div>
                    )
            }
        </div>
    ) : ("");


    let slide2 = currentSlide === 2 ? (
        <div className="server-boost-modal-transition-group">
            <div className="sbm-measurment-fill">
                <div className="sbm-animated-mode">
                    <div className="sbm-payment-body">
                        <div>
                            <div>
                                <div className="sbm-payment-body-section-title">
                                    <h1 className="sbm-payment-header">Select Payment Type</h1>
                                </div>
                                <div className="sbm-payment-body-children">
                                    <div>
                                        <div className="sbm-payment-button-group-wrapper">
                                            <button type="button" className="sbm-payment-button" onClick={(e) => handleSlideForward(3)}>
                                                <div className="look-filled-button-contents global-button-contents">
                                                    <div className="sbm-payment-button-contents-flex">
                                                        <div className="sbm-payment-card-icon sbm-payment-card-small sbm-payment-card-button">Card</div>
                                                        Card
                                                    </div>
                                                </div>
                                            </button>
                                            <button type="button" className="sbm-payment-button" onClick={(e) => handleSlideForward(3)}>
                                                <div className="look-filled-button-contents global-button-contents">
                                                    <div className="sbm-payment-button-contents-flex">
                                                        <div className="sbm-payment-card-icon sbm-payment-card-small paypal-card sbm-payment-card-button">PayPal</div>
                                                        PayPal
                                                    </div>
                                                </div>
                                            </button>
                                            <button type="button" className="sbm-payment-button" onClick={(e) => handleSlideForward(3)}>
                                                <div className="look-filled-button-contents global-button-contents">
                                                    <div className="sbm-payment-button-contents-flex">
                                                        <div className="sbm-payment-card-icon sbm-payment-card-small venmo-card sbm-payment-card-button">Venmo</div>
                                                        Venmo
                                                    </div>
                                                </div>
                                            </button>
                                            <button type="button" className="sbm-payment-button sbm-payment-button-grow" disabled>
                                                <span id={`elip-spin`} className="spinner-ellipsis spinner-dots is-hidden" role='img'>
                                                    <span className="inner-spinner-dots-container pulsing-ellipsis">
                                                        <span className="spin-dot spin-dot-item"></span>
                                                        <span className="spin-dot spin-dot-item"></span>
                                                        <span className="spin-dot spin-dot-item"></span>
                                                        <span className="spin-dot spin-dot-item"></span>
                                                    </span>
                                                </span>
                                                <div className="look-filled-button-contents global-button-contents" id="smb-auto-text">
                                                    Autofill from Browser (N/A)
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : ("");

    let slide3 = currentSlide === 3 ? (
        <div className="server-boost-modal-transition-group">
            <div className="sbm-measurment-fill">
                <div className="sbm-animated-mode">
                    <div className="sbm-payment-body">
                        <div>
                            <div>
                                <div className="sbm-payment-input-row">
                                    <div className="sbm-pi-inner-row-width-100 sbm-payment-input-inner-row">
                                        <div className="sbm-payment-input-section-title">
                                            <h1 className="sbm-payment-input-section-header">Credit Card Number</h1>
                                        </div>
                                        <div className="sbm-payment-input-children">
                                            <div className="gold-card-input-outer-wrapper">
                                                <div className="sbm-payment-input-wrapper">
                                                    <div className="sbm-payment-card-icon sbm-payment-card-small goldCard-Input-icon">Card</div>
                                                    <div className="gold-card-input-wrapper">
                                                        <input type="text" className="card-number-input" value={'∞∞∞∞ ∞∞∞∞ ∞∞∞∞ ∞∞∞'} placeholder="∞∞∞∞ ∞∞∞∞ ∞∞∞∞ ∞∞∞" disabled readOnly={true} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sbm-payment-input-row">
                                    <div className="sbm-pi-inner-row-width-50 sbm-payment-input-inner-row">
                                        <div className="sbm-payment-input-section-title">
                                            <h1 className="sbm-payment-input-section-header">Expiration Date</h1>
                                        </div>
                                        <div className="sbm-payment-input-children">
                                            <div className="sbm-payment-input-wrapper">
                                                <input type="text" className="sbm-payment-input" value={'∞'} placeholder='∞' disabled readOnly={true} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sbm-pi-inner-row-width-50 sbm-payment-input-inner-row">
                                        <div className="sbm-payment-input-section-title">
                                            <h1 className="sbm-payment-input-section-header">CVC</h1>
                                        </div>
                                        <div className="sbm-payment-input-children">
                                            <div className="sbm-payment-input-wrapper">
                                                <input type="text" className="sbm-payment-input" value={'∞/∞'} placeholder='∞/∞' disabled readOnly={true} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sbm-payment-input-row">
                                    <div className="sbm-pi-inner-row-width-100 sbm-payment-input-inner-row">
                                        <div className="sbm-payment-input-section-title">
                                            <h1 className="sbm-payment-input-section-header">Name On The Card</h1>
                                        </div>
                                        <div className="sbm-payment-input-children">
                                            <div className="sbm-payment-input-wrapper">
                                                <input type="text" className="sbm-payment-input-cname" value={'$TR!F3 !$ 4 FR33'} placeholder="$TR!F3 !$ 4 FR33" disabled readOnly={true} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : ("");

    let slide4 = spinCubes === false && currentSlide === 4 && gifted === false ? (
        <div className="stsm-review-step">
            <h1 className="stsnm-payment-review-header">Get $TR!F3 N!TR0 {`${choosePlanType === 1 ? `Yearly` : `Monthly`}`}</h1>
            <div className="sbm-review-table stsm-invoice-step">
                <div className="sbm-review-table-header">Purchase Details</div>
                <div className="sbm-rt-row sbm-rt-row-base">
                    <div className="sbm-rt-row-label">$TR!F3 N!TR0 {`${choosePlanType === 1 ? `Yearly` : `Monthly`}`}</div>
                    <div className="sbm-rt-row-amount">${`${price}`} / {`${choosePlanType === 1 ? `Year` : `Month`}`}</div>
                </div>
                <div className="sbm-rt-divider"></div>
                <div className="sbm-rt-total-row">
                    <div className="sbm-rt-total-row-label"><strong>Today's Total</strong>{`${` `}`} (Tax Included)</div>
                    <div className="sbm-rt-total-row-amount">${`${price}`}</div>
                </div>

                <div className="sbm-fine-print">
                    Any eligible subscription credit will be applied until it runs out. Your subscription will renew for {`${` `}`}
                    <strong>${`${price}`} / {`${choosePlanType === 1 ? `Year` : `Month`}`}</strong>{`${` `}`} on {`${` `}`}
                    <strong>{`${renewalDate}`}</strong>. Have questions?{`${` `}`}
                    <a className="sbm-fine-print-anchor" href="http://dis.gd/contact" rel="noreferrer noopener" target="_blank">Contact our support team</a>
                    {`${` `}`}or{`${` `}`}
                    <a className="sbm-fine-print-anchor" href="https://support.discord.com/hc/en-us/articles/360017693772" rel="noreferrer noopener" target="_blank">check out our subscription FAQ</a>
                    .
                </div>
                <div className="sbm-rt-subDetailsToggle" role="button" tabIndex={0} onClick={(e) => setHideSubDesc(!hideSubDesc)}>
                    {`${hideSubDesc ? `Hide Subscription Details` : `Show Subscription Details`}`}
                    <ProfilePanelChevronIcon className={`sbm-rt-subDetailsToggle-caretIcon sbm-caretIcon-transition ${hideSubDesc ? `sbm-caretIcon-up` : `sbm-caretIcon-down`}`} />
                </div>

                {
                    hideSubDesc ? (
                        <>
                            <div className="sbm-rt-divider sbm-rt-divider-extended"></div>
                            <div className="sbm-review-table-header">New Subscription</div>
                            <div className="sbm-rt-row sbm-rt-row-base smb-rt-subAddedInvoiceItem">
                                <div className="sbm-rt-row-label">$TR!F3 N!TR0 {`${choosePlanType === 1 ? `Yearly` : `Monthly`}`}</div>
                                <div className="sbm-rt-row-amount">${`${price}`} / {`${choosePlanType === 1 ? `Year` : `Month`}`}</div>
                            </div>
                            <div className="sbm-rt-divider"></div>
                            <div className="sbm-rt-row sbm-rt-row-base sbm-rt-sub-cost-row">
                                <div className="sbm-rt-row-label">New Subscription Total</div>
                                <div className="sbm-rt-row-amount">${`${price}`} / {`${choosePlanType === 1 ? `Year` : `Month`}`}</div>
                            </div>
                        </>
                    ) : ("")
                }

            </div>
            <div className="stsm-payment-source-wrapper">
                <h1 className="sbm-payment-header">Pay for it with</h1>
                <div className="sbm-fake-select-box">
                    <span className="sbm-fake-select-box-value">
                        <div className="sbm-fake-select-payment-source">
                            <div className="sbm-payment-card-icon sbm-payment-card-small paypal-card">PayPal</div>
                            <div className="sbm-fake-select-payment-source-label">$TR!F3 !$ 4 FR33</div>
                        </div>
                    </span>
                    <div className="sbm-fake-select-box-icons">
                        <ProfilePanelChevronIcon className={`pp-chevron-icon chevronPointDown`} />
                    </div>
                </div>
            </div>
            <div className="sbm-legal-mumbo-jumbo-wrapper">
                <div>
                    <h1 className="sbm-legal-mumbo-jumbo-header">Legal Mumbo Jumbo</h1>

                    <label className={`sbm-pr-label`} htmlFor="sbm-icheckbox-raw">
                        <input id="sbm-icheckbox-raw" className="sbm-raw-check-input" type="checkbox" onChange={() => setAgreementCheck(!agreementCheck)} value={agreementCheck} />
                        <div className={`sbm-icheckbox-wrapper ${agreementCheck === true ? `checked` : ``}`}>
                            {
                                agreementCheck ? (<Invite2ServerCheckBoxCheckedIcon />) : (<Invite2ServerCheckBoxUnCheckedIcon />)
                            }
                        </div>
                        <div className="sbm-raw-invite-label-text-wrapper">
                            <div className={`sbm-raw-invite-label-text`} >
                                I agree to the {`${` `}`}
                                <a className="sbm-fine-print-anchor" href="//discord.com/terms" rel="noreferrer noopener" target="_blank">$TR!F3 Terms of Service</a>
                                {`${` `}`}and{`${` `}`}
                                <a className="sbm-fine-print-anchor" href="https://support.discord.com/hc/articles/4410339366295" rel="noreferrer noopener" target="_blank">Paid Services Terms</a>
                            </div>
                        </div>
                    </label>
                    <div className="sbm-legal-mumbo-jumbo-fine-print">
                        {`${choosePlanType === 1 ? `Hey! What you're purchasing is a recurring subscription, which means we'll charge you today and continue to charge you yearly until you cancel the subscription.
                        You can cancel anytime from your Settings page, though!`: `Hey! What you're purchasing is a recurring subscription, which means we'll charge you today and continue to charge you monthly until you cancel the subscription.
                        You can cancel anytime from your Settings page, though!`}`}
                    </div>
                </div>

            </div>
        </div>
    ) : ("");


    let slide4_5 = spinCubes === false && currentSlide === 4 && gifted === true ? (
        <div className="stsm-review-step">
            <h1 className="stsnm-payment-review-header">BUY A GIFT</h1>
            <div className="sbm-review-table stsm-invoice-step">
                <div className="sbm-rt-row sbm-rt-row-base stsm-gift-subscription-row">
                    <div className="sbm-rt-row-label">Gift $TR!F3 N!TR0 {`${choosePlanType === 1 ? `Yearly` : `Monthly`}`}</div>
                    <div className="sbm-rt-row-amount">${`${price}`}</div>
                </div>
            </div>
            <div className="stsm-payment-source-wrapper">
                <h1 className="sbm-payment-header">Pay for it with</h1>
                <div className="sbm-fake-select-box">
                    <span className="sbm-fake-select-box-value">
                        <div className="sbm-fake-select-payment-source">
                            <div className="sbm-payment-card-icon sbm-payment-card-small paypal-card">PayPal</div>
                            <div className="sbm-fake-select-payment-source-label">$TR!F3 !$ 4 FR33</div>
                        </div>
                    </span>
                    <div className="sbm-fake-select-box-icons">
                        <ProfilePanelChevronIcon className={`pp-chevron-icon chevronPointDown`} />
                    </div>
                </div>
            </div>
            <div className="sbm-legal-mumbo-jumbo-wrapper">
                <div>
                    <h1 className="sbm-legal-mumbo-jumbo-header">Legal Mumbo Jumbo</h1>
                    <div className={`sbm-raw-invite-label-text`} >
                        By clicking "Buy Gift", you agree to the {`${` `}`}
                        <a className="sbm-fine-print-anchor" href="https://support.discord.com/hc/articles/4410339366295" rel="noreferrer noopener" target="_blank">Paid Services Terms</a>
                    </div>
                    <div className="sbm-legal-mumbo-jumbo-fine-print">
                        {`${choosePlanType === 1 ? `This will be a one time charge for the amount of time chosen. You will not be billed yearly.`
                            : `This will be a one time charge for the amount of time chosen. You will not be billed monthly.`}`}
                    </div>
                </div>
            </div>
        </div>
    ) : ("")


    let slide5 = currentSlide === 5 ? (
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

    let spinningCubes = spinCubes && currentSlide === 4 ? (
        <div className="stsm-spinner-wrapper">
            <span className={`spinning-cubes`}>
                <span className="inner-cubes moving-cubes">
                    <span className="inner-cube"></span>
                    <span className="inner-cube"></span>
                </span>
            </span>
        </div>
    ) : null;

    let buttonStyles = {
        "1": `${switchMod === 2 ? `sbm-button-footer-container sbm-payment-button-footer-layout` : `sbm-button-footer-container`}`,
        "2": 'npsm-button-footer-container',
        "3": 'sbm-button-footer-container sbm-payment-button-footer-layout',
        "4": 'sbm-button-footer-container stsnm-payment-button-footer-layout',
        "5": 'sbm-button-footer-container',
    };


    return (
        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="serverboostModalLayerContainer">
                <div className="serverBoostModal-backdrop"></div>
                <div className="server-boost-modal-layer">
                    <div className="stsnm-shaker">
                        <div className="server-boost-modal-focus-lock" onClick={(e) => e.stopPropagation()}>
                            <div className="server-boost-modal root-with-header" id="server-boost-modal">
                                <div className="stsnm-header stsnm-header-background">
                                    <div className="stsnm-HeaderBackground stsnm-tier2HeaderBackground stsnm-BGHeader">
                                        <div className="stsnm-HeaderAnimation stsnm-tier2HeaderAnimation">
                                            <div className="stsnm-panningAnimation">
                                                <div className="stsnm-tier2Background panningAnimation-inner stsnm-top-animate stsnm-desaturate"></div>
                                                <div className="stsnm-tier2Background panningAnimation-inner stsnm-bottom-animate stsnm-desaturate"></div>
                                            </div>
                                            <div className="stsnm-panningAnimation">
                                                <div className="stsnm-tier2Foreground panningAnimation-inner stsnm-top-animate stsnm-desaturate"></div>
                                                <div className="stsnm-tier2Foreground panningAnimation-inner stsnm-bottom-animate stsnm-desaturate"></div>
                                            </div>
                                            <div className="stsnm-sequencedAnimation">
                                                <img className="stsnm-tier2-jetpack-wumpus-gif" alt=" " />
                                            </div>
                                        </div>
                                        <div className="stsnm-middle-header-container">
                                            <div>
                                                <NitroTier2LogoIcon className="stsnm-banner-header-icon" />
                                            </div>
                                            <button type="button" className="stsnm-close-button" onClick={(e) => handleCloseModal(e)}>
                                                <div className="global-button-contents"><CloseXIcon className="closeIconX" /></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {
                                    currentSlide === 2 || currentSlide === 3 ? (null) : gifted ? (
                                        <div className="stsnm-gift-flex-wrapper">
                                            <ChatPresentIcon className="stsnm-gift-icon" />
                                            <div>You are purchasing a gift.</div>
                                        </div>
                                    ) : (null)
                                }
                                {
                                    currentSlide === 2 || currentSlide === 3 ? (null) : (
                                        <div className="stsnm-bread-crumb-wrapper-container">
                                            <div className="bsspm-bread-crumb-flex-wrapper">
                                                <div className="bsspm-bread-crumb-wrapper">
                                                    <span className={`bsspm-breadCrumb ${currentSlide === 1 ? `activeBreadCrumb` : ``}`}>Select Plan</span>
                                                    <ProfilePanelChevronIcon className="breadCrumb-chevron-icon chevronPointRight" />
                                                </div>
                                                <div className="bsspm-bread-crumb-wrapper">
                                                    <span className="bsspm-breadCrumb">Payment</span>
                                                    <ProfilePanelChevronIcon className="breadCrumb-chevron-icon chevronPointRight" />
                                                </div>
                                                <div className={`bsspm-bread-crumb-wrapper ${currentSlide === 4 ? `bsspm-bread-crumb-final-wrapper` : ``}`}>
                                                    <span className={`bsspm-breadCrumb ${currentSlide === 4 ? `activeBreadCrumb` : ``}`}>Review</span>
                                                    {currentSlide === 5 ? (<ProfilePanelChevronIcon className="breadCrumb-chevron-icon chevronPointRight" />) : (null)}
                                                </div>
                                                {
                                                    currentSlide === 5 ? (
                                                        <div className="bsspm-bread-crumb-wrapper bsspm-bread-crumb-final-wrapper">
                                                            <span className="bsspm-breadCrumb activeBreadCrumb">Success Enjoy $TR!F3 N!TR0 !</span>
                                                        </div>
                                                    ) : (null)
                                                }

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
                                                {slide3}
                                                {spinningCubes}
                                                {slide4}
                                                {slide4_5}
                                                {slide5}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stsnm-bottom-sep"></div>
                                </div>
                                <div>
                                    <div className={buttonStyles[currentSlide]}>
                                        {
                                            switchMod === 2 && currentSlide === 1 ? (
                                                <>
                                                    <button type="button" className="bsspm-continue-button" onClick={(e) => handleSlideForward(2)}>
                                                        <div className="look-filled-button-contents global-button-contents">Select</div>
                                                    </button>
                                                    <div className="stsnm-back-button-wrapper">
                                                        <div className="stsnm-back-payment-button" onClick={(e) => props.setSwitchMod(1)}>Back</div>
                                                    </div>
                                                </>
                                            ) : (null)
                                        }

                                        {
                                            switchMod === -1 && currentSlide === 1 ? (
                                                <div className="bsspm-foot-right">
                                                    <button type="button" className="bsspm-continue-button" onClick={(e) => handleSlideForward(2)}>
                                                        <div className="look-filled-button-contents global-button-contents">Select</div>
                                                    </button>
                                                </div>

                                            ) : (null)
                                        }

                                        {
                                            currentSlide === 2 ? (
                                                <div className="bsspm-foot-right">
                                                    <button type="button" className="sbm-back-button" onClick={(e) => handleSlideBackward(1)}>
                                                        <div className="look-filled-button-contents global-button-contents">Back</div>
                                                    </button>
                                                </div>

                                            ) : (null)
                                        }
                                        {
                                            currentSlide === 3 ? (
                                                <>
                                                    <button type="button" className="bsspm-continue-button" onClick={(e) => handleSlideForward(4)}>
                                                        <div className="look-filled-button-contents global-button-contents">Next</div>
                                                    </button>
                                                    <button type="button" className="sbm-back-button" onClick={(e) => handleSlideBackward(2)}>
                                                        <div className="look-filled-button-contents global-button-contents">Back</div>
                                                    </button>
                                                </>
                                            ) : (null)
                                        }

                                        {
                                            currentSlide === 4 ? (
                                                <>
                                                    <button type="button" className="npsm-upgrade-to-nitro-button" disabled={gifted ? false : agreementCheck ? false : true}
                                                        data-tooltip-content={"Accept the Terms of Service and Paid Services Terms to continue"}
                                                        data-tooltip-id="sbm-thread-tip" data-tooltip-place="top"
                                                        onClick={(e) => handleSlideForward(5)}>
                                                        <div className="look-filled-button-contents global-button-contents">
                                                            {`${gifted ? `Buy Gift` : choosePlanType === 1 ? `Get $TR!F3 N!TR0 Yearly` : `Get $TR!F3 N!TR0 Monthly`}`}
                                                        </div>
                                                    </button>
                                                    <div className="stsnm-back-button-wrapper">
                                                        <div className="stsnm-back-payment-button" onClick={(e) => handleSlideBackward(3)}>Back</div>
                                                    </div>
                                                </>
                                            ) : (null)
                                        }
                                        {
                                            currentSlide === 5 ? (
                                                <div className="bsspm-foot-right">
                                                    <button type="button" className="npsm-upgrade-to-nitro-button"
                                                        onClick={(e) => handleCloseModal(e)}>
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
                <Tooltip className="suom-server-name-tool-tip" id="sbm-thread-tip" place="top" closeOnResize={true} closeOnScroll={true} />
            </div>
        </REACT_PORTAL>
    )


}

export default SubscribeToStrifeNitroProModal;