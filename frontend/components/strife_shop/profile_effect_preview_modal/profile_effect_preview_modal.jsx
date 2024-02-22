import React from "react";
import { useEffect, useState, useRef } from "react";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { ChatPresentIcon, CloseXIcon, StrifeBotTagIcon, StrifeNitroBadgeIcon } from "../../front_end_svgs/Strife_svgs";
import { returnUserOnlineActivityStatusBadgeMaskIMG } from "../../../utils/user_online_activity_status_badge_api_util";
import { returnUserBadgeFillColor } from "../../../utils/user_status_badge_color_api_util";
import SubscribeToStrifeNitroProModalContainer from "../../nitro/subscribe_to_nitro_modal/subscribe_to_nitro_pro_modal_container";
import SubscribeToStrifeNitroBasicModalContainer from "../../nitro/subscribe_to_nitro_basic_modal/subscribe_to_nitro_basic_modal_container";
import PurchaseProductModalContainer from "../purchase_product_modal/purchase_product_modal_container";
import SendAGiftModalContainer from "../send_a_gift_modal/send_a_gift_modal_container";
import { Tooltip } from 'react-tooltip';

const ProfileEffectPreviewModal = (props) => {

    const [isSubModMounted, setIsSubModMounted] = useState(false);

    useEffect(() => {
        if (isSubModMounted === true) {
            window.removeEventListener('keyup', overrideCloseModal, false);
        }
        else if (isSubModMounted === false) {
            window.addEventListener('keyup', overrideCloseModal, false);
        }
        return function cleanUp () {
            window.removeEventListener('keyup', overrideCloseModal, false);
        }
    }, [isSubModMounted])


    const [spinCubes, setSpinCubes] = React.useState(true);
    const [gift, setGift] = React.useState(false);
    const [currentSubModal, setCurrentSubModal] = useState({
        subToNitroPro: false,
        subToNitroBasic: false,
        purchaseProductModal: false,
        sendGiftModal: false,

    });
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const popUpRef = useRef(null);


    const giftColor = {
        "fall-effect": {
            background: `rgb(224, 146, 61)`,
            color: `rgb(0,0,0)`
        },
        "halloween-effect": {
            background: `rgb(80, 105, 175)`,
            color: `rgb(0,0,0)`
        },
        "fantasy-effect": {
            background: `rgb(0, 107, 75)`,
            color: `rgb(255,255,255)`
        },
        "anime-effect": {
            background: `rgb(19, 104, 150)`,
            color: `rgb(255,255,255)`
        },
        "breakfast-effect": {
            background: `rgb(255, 149, 56)`,
            color: `rgb(0,0,0)`
        },
        "winter-wonderland-effect": {
            background: `rgb(0, 157, 255)`,
            color: `rgb(0,0,0)`
        },
        "disxcore-effect": {
            background: `rgb(17, 29, 64))`,
            color: `rgb(0,0,0)`
        },
        "monsters-effect": {
            background: `rgb(0, 153, 122)`,
            color: `rgb(0,0,0)`
        },
        "lunar-dragon-effect": {
            background: `rgb(255, 136, 0)`,
            color: `rgb(0, 0, 0)`,
        },
        "cyber-punk-effect": {
            background: `rgb(54, 54, 181)`,
            color: `rgb(255, 255, 255)`,
        }
    }
    const buttonStyles = {
        "fall-effect": {
            background: `linear-gradient(90deg,rgb(255, 194, 102), rgb(107, 25, 0))`,
            color: `rgb(0,0,0)`
        },
        "halloween-effect": {
            background: `linear-gradient(90deg,rgb(81, 127, 219), rgb(6, 14, 35))`,
            color: `rgb(0,0,0)`
        },
        "fantasy-effect": {
            background: `linear-gradient(90deg,rgb(2, 136, 55), rgb(0, 107, 75))`,
            color: `rgb(255, 255, 255)`
        },
        "anime-effect": {
            background: `linear-gradient(90deg,rgb(136, 68, 193), rgb(19, 104, 150))`,
            color: `rgb(255, 255, 255)`
        },
        "breakfast-effect": {
            background: `linear-gradient(90deg,rgb(255, 196, 87), rgb(255, 149, 56))`,
            color: `rgb(0,0,0)`
        },
        "winter-wonderland-effect": {
            background: `linear-gradient(90deg,rgb(66, 198, 255), rgb(0, 157, 255))`,
            color: `rgb(0, 0, 0)`
        },
        "disxcore-effect": {
            background: `linear-gradient(90deg,rgb(255, 196, 87), rgb(255, 149, 56))`,
            color: `rgb(0,0,0)`
        },
        "monsters-effect": {
            background: `linear-gradient(90deg, rgb(0, 230, 176), rgb(0, 153, 122))`,
            color: `rgb(0,0,0)`
        },
        "lunar-dragon-effect": {
            background: `linear-gradient(90deg, rgb(255, 176, 5), rgb(255, 136, 0))`,
            color: `rgb(0, 0, 0)`,
        },
        "cyber-punk-effect": {
            background: `linear-gradient(90deg, rgb(75, 68, 218), rgb(54, 54, 181))`,
            color: `rgb(255, 255, 255)`,
        }
    }

    const openModal = (field, isGift = false) => {
        setCurrentSubModal(previousState => {
            return { ...previousState, [field]: true };
        });
        setGift(isGift);
        window.removeEventListener('keyup', overrideCloseModal, false);
        setIsSubModMounted(true);
    }


    const closeForm = (field, closeMainModal = false) => {
        setCurrentSubModal(previousState => {
            return { ...previousState, [field]: false };
        });
        setGift(false);
        setIsSubModMounted(false);
        window.addEventListener('keyup', overrideCloseModal, false);
        if (closeMainModal === true) {
            props.closeSubMod(props.formName);
        }

    }

    const overrideCloseModal = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                e.stopPropagation();
                handleCloseModal(e);
                window.removeEventListener('keyup', overrideCloseModal, false);
            },
        };
        if (isSubModMounted === false && keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }

    const handleCloseModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isSubModMounted === false) {
            let modalToClose = document.getElementById('ppe-modal-root')
            if (modalToClose) {
                modalToClose.classList.add("transition-out");
                Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                    .then(() => {
                        props.closeSubMod(props.formName);
                        window.removeEventListener('keyup', overrideCloseModal, false);
                    }, () => {
                        props.closeSubMod(props.formName);
                        window.removeEventListener('keyup', overrideCloseModal, false);
                    });
            }
            else {
                props.closeSubMod(props.formName);
                window.removeEventListener('keyup', overrideCloseModal, false);
            }
        }
    }

    useEffect(() => {
        let intervalId;
        setIsRunning(true);
        if (isRunning) {
            intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning, time]);
    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);
    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);


    const profileThemeEffects = {
        "fall-effect": { background: `linear-gradient(135deg, rgb(255, 194, 102), rgb(107, 25, 0))` },
        "halloween-effect": { background: `linear-gradient(135deg, rgb(81, 127, 219), rgb(6, 14, 35))` },
        "fantasy-effect": { background: `linear-gradient(135deg, rgb(20, 97, 68), rgb(2, 24, 13))` },
        "anime-effect": { background: `linear-gradient(135deg, rgb(75, 120, 175), rgb(15, 14, 57))` },
        "breakfast-effect": { background: `linear-gradient(135deg, rgb(232, 177, 105), rgb(122, 59, 0))` },
        "winter-wonderland-effect": { background: `linear-gradient(135deg, rgb(71, 126, 255), rgb(21, 77, 209))` },
        "disxcore-effect": { background: `linear-gradient(135deg,rgb(116, 37, 101), rgb(17, 29, 64))` },
        "monsters-effect": { background: `linear-gradient(135deg,rgb(0, 69, 92), rgb(0, 42, 56))` },
        "cyber-punk-effect": { background: `linear-gradient(135deg, rgb(32, 20, 107), rgb(5, 1, 0))` },
        "lunar-dragon-effect": { background: `linear-gradient(135deg, rgb(143, 0, 0), rgb(92, 0, 0))` },
    }

    const profileEffectBgBanner = {
        "fall-effect": "fall-bg-banner",
        "halloween-effect": "ppe-halloween-bg-banner",
        "fantasy-effect": "ppe-fantasy-bg-banner",
        "anime-effect": "ppe-anime-bg-banner",
        "breakfast-effect": "ppe-breakfast-bg-banner",
        "winter-wonderland-effect": "ppe-winter-wonderland-bg-banner",
        "disxcore-effect": "ppe-disxcore-bg-banner",
        "monsters-effect": "ppe-monsters-bg-banner",
        "cyber-punk-effect": "ppe-cyber-punk-bg-banner",
        "lunar-dragon-effect": "ppe-lunar-dragon-bg-banner",
    }

    const profileEffectTitleBanner = {
        "fall-effect": "ppe-fall-title-banner",
        "halloween-effect": "ppe-halloween-title-banner",
        "fantasy-effect": "ppe-fantasy-title-banner",
        "anime-effect": "ppe-anime-title-banner",
        "breakfast-effect": "ppe-breakfast-title-banner",
        "winter-wonderland-effect": "ppe-winter-wonderland-title-banner",
        "disxcore-effect": "ppe-disxcore-title-banner",
        "monsters-effect": "ppe-monsters-title-banner",
        "cyber-punk-effect": "ppe-cyber-punk-title-banner",
        "lunar-dragon-effect": "ppe-lunar-dragon-title-banner",

    }

    const salePrice = {
        "fallFoliage": 6.99,
        "lillyPad": 6.99,
        "ghoulishGraffiti": 2.99,
        "zombieSlime": 2.99,
        "darkOmens": 2.99,
        "hydroBlast": 8.49,
        "sakuraDreams": 8.49,
        "mysticVines": 8.49,
        "pixieDust": 8.49,
        "magicHearts": 8.49,
        "shatterEffect": 8.49,
        "shurikenStrike": 8.49,
        "powerSurge": 8.49,
        "strifeOs": 8.49,
        "breakfastPlate": 8.49,
        "deckTheHalls": 3.99,
        "snowyShenanigans": 3.99,
        "boostedRelic": 8.49,
        "cyberSpace": 8.49,
        "gooZilla": 3.99,
        "heartZilla": 3.99,
        "monsterPop": 3.99,
        "dragonDance": 4.99,
        "fortuneFlurry": 4.99,
        "midnightCelebrations": 4.99,
        "nightRunner": 4.99,
        "uplinkError": 4.99,
    };

    const strikeThroughPrice = {
        "fallFoliage": 9.99,
        "lillyPad": 9.99,
        "ghoulishGraffiti": 3.99,
        "zombieSlime": 3.99,
        "darkOmens": 3.99,
        "hydroBlast": 11.99,
        "sakuraDreams": 11.99,
        "mysticVines": 11.99,
        "pixieDust": 11.99,
        "magicHearts": 11.99,
        "shatterEffect": 11.99,
        "shurikenStrike": 11.99,
        "powerSurge": 11.99,
        "strifeOs": 11.99,
        "breakfastPlate": 11.99,
        "deckTheHalls": 4.99,
        "snowyShenanigans": 4.99,
        "boostedRelic": 11.99,
        "cyberSpace": 11.99,
        "gooZilla": 4.99,
        "heartZilla": 4.99,
        "monsterPop": 4.99,
        "dragonDance": 5.99,
        "fortuneFlurry": 5.99,
        "midnightCelebrations": 5.99,
        "nightRunner": 5.99,
        "uplinkError": 5.99,

    };

    const profileEffectName = {
        "fallFoliage": "Fall Foliage",
        "lillyPad": "Lillypad Life",
        "ghoulishGraffiti": "Ghoulish Graffiti",
        "zombieSlime": "Zombie Slime",
        "darkOmens": "Dark Omens",
        "hydroBlast": "Hydro Blast",
        "sakuraDreams": "Sakura Dreams",
        "mysticVines": "Mystic Vines",
        "pixieDust": "Pixie Dust",
        "magicHearts": "Magic Hearts",
        "shatterEffect": "Shatter",
        "shurikenStrike": "Shuriken Strike",
        "powerSurge": "Power Surge",
        "strifeOs": "$TR!F3-Os",
        "breakfastPlate": "Breakfast Plate",
        "deckTheHalls": "Deck the halls",
        "snowyShenanigans": "Snowy Shenanigans",
        "boostedRelic": "Boost Relic",
        "cyberSpace": "Cyberspace",
        "gooZilla": "Goozilla",
        "heartZilla": "Heartzilla",
        "monsterPop": "Monster Pop",
        "dragonDance": "Dragon Dance",
        "fortuneFlurry": "Fortune Flurry",
        "midnightCelebrations": "Midnight Celebration",
        "nightRunner": "Nightrunner",
        "uplinkError": "Uplink Error",

    }
    const profileEffectDescription = {
        "fallFoliage": "Getting ready for sweater weather.",
        "lillyPad": "*ribbit*",
        "ghoulishGraffiti": "Did I scare you?",
        "zombieSlime": "I don't think you should touch that.",
        "darkOmens": "Who keeps summoning these things?",
        "hydroBlast": "Time to make a splash.",
        "sakuraDreams": "Close your eyes, and breathe.",
        "mysticVines": "Why touch grass when you can touch magical vines?",
        "pixieDust": "Did a pixie sneeze nearby?",
        "magicHearts": "Moon Prism Power, Make Up!",
        "shatterEffect": "Ouch, my windows!",
        "shurikenStrike": "Every side is the pointy end.",
        "powerSurge": "You're about to witness true power.",
        "strifeOs": "Bet you can't have just one bowl.",
        "breakfastPlate": "The best meal for any time of day.",
        "deckTheHalls": "Keep out of reach from cats",
        "snowyShenanigans": "Gone in a flurry.",
        "boostedRelic": "Legends say this could power an entire server...",
        "cyberSpace": "Witness the entire world in motion.",
        "gooZilla": "Wait a second, what's my profile even made of?!",
        "heartZilla": "Is this what they mean when they say love hurts?",
        "monsterPop": "POP goes the monster.",
        "dragonDance": "No evil spirits on my watch.",
        "fortuneFlurry": "May fortune come your way!",
        "midnightCelebrations": "Protection and prosperity guaranteed.",
        "nightRunner": "Cruisin' the cyber highway.",
        "uplinkError": "Anomaly detected, attempting system reset.",
    }


    const defaultcolorPalleteRef = useRef(Math.random());
    const colorPalleteAltRef = useRef(Math.random());
    let upcColorPallete = 'ppe-upc theme-dark userProfileOuterTheme profileEffectsModalCustomPreview-UPC profileEffectCustomizationPreview-themed' +
        ((defaultcolorPalleteRef.current > 0.50) ? ' ' + 'user-upc-profile-colors-0' : ' ' + `user-upc-profile-colors-${props.currentUser.color_tag}`) +
        ((colorPalleteAltRef.current > 0.90) ? ' ' + 'alt' : '');

    const Strife_Bot_IDs = [1, 2, 3, 4];

    let if_Bot_tag = Strife_Bot_IDs.includes(props.currentUser.id) ? (
        <span className="bot-sticker">
            <StrifeBotTagIcon aria-label="Verified $TR!F3 B0T" className="bot-check-mark" />
            <span className="bot-text">$TR!F3 B0T</span>
        </span>
    ) : ("");


    let memberBanner = props.currentUser.banner === undefined ?
        (

            <svg className="ppe-upc-bannerSVGwrapper" viewBox="0 0 280 90" >
                <mask id="uid_1414">
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                    <circle fill="black" cx="58" cy="82" r="46"></circle>
                </mask>
                <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_1414)">
                    <div className={`ppe-upc-banner color-${props.currentUser.color_tag}`}>
                    </div>
                </foreignObject>
            </svg>

        ) : (
            <svg className="ppe-upc-bannerSVGwrapper-pro" viewBox="0 0 280 120">
                <mask id="uid_3244">
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                    <circle fill="black" cx="58" cy="112" r="46"></circle>
                </mask>
                <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_3244)">
                    <div className={`ppe-upc-banner-pro ${props.currentUser.banner === undefined ? `color-${props.currentUser.color_tag}` : ``}`}
                        style={{ backgroundImage: `${props.currentUser.banner === undefined ? `none` : `url(${props.currentUser.banner})`}`, backgroundColor: `${props.currentUser.banner === undefined ? `` : `rgb(21, 20, 20)`}` }}>
                    </div>
                </foreignObject>
            </svg>
        );


    let memberPhoto = (
        <div className={`upc-pfp-icon-wrapper ${props.currentUser.banner ? `pro` : ``}`}>
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
                            className="upc-avatar-pointer-events"></rect>
                    </svg>
                </div>
            </div>

        </div>
    );

    let mp = (
        <div className={`upc-pfp-icon-wrapper ${props.currentUser.banner ? `pro` : ``}`}>
            <div className='upc-avatar-wrapper' role='img'>
                <svg width="80" height="80" viewBox="0 0 80 80" className="upc-avatar-svg-mask" aria-hidden="true">
                    <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-default)">
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
                </svg>
            </div>
            <div className="ppe-status">
                <svg className="ppe-status-dot">
                    <rect width="100%" height="100%" fill={returnUserBadgeFillColor(props.currentUser.online)}
                        mask={returnUserOnlineActivityStatusBadgeMaskIMG(props.currentUser.online)}
                        className="upc-avatar-pointer-events"></rect>
                </svg>
            </div>
        </div>
    );

    let mp1 = (
        <div className={`upc-pfp-icon-wrapper ${props.currentUser.banner ? `pro` : ``}`}>
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
                        className="upc-avatar-pointer-events"></rect>
                </svg>
            </div>

        </div>
    );

    let mp2 = (
        <div className={`upc-pfp-icon-wrapper ${props.currentUser.banner ? `pro` : ``}`} role="button" tabIndex={0}>
            <div className='upc-avatar-wrapper' role='img'>
                <svg width="80" height="80" viewBox="0 0 80 80" className="upc-avatar-svg-mask" aria-hidden="true">
                    <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-default)">
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
                </svg>
                {/* <svg width="96" height="96" viewBox="0 0 96 96" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
                    <foreignObject x="0" y="0" width="96" height="96" >
                        <div className="ssxcore-avatar-stack">
                            {avatarDecorationPreviewImgs[props.avatarEffectObj]}
                        </div>
                    </foreignObject>
                </svg> */}
            </div>
            <div className="ppe-status">
                <svg className="ppe-status-dot">
                    <rect width="100%" height="100%" fill={returnUserBadgeFillColor(props.currentUser.online)}
                        mask={returnUserOnlineActivityStatusBadgeMaskIMG(props.currentUser.online)}
                        className="upc-avatar-pointer-events"></rect>
                </svg>
            </div>
        </div>
    );


    let badgeContainer = (
        <div className='upc-profile-badges-container' role='group'>
            <a className='usm-user-strife-tag-badge-anchor' role="button" data-tooltip-position-strategy='fixed' data-tooltip-id="modal-tool-tip-usm"
                data-tooltip-content={`Originally known as ${props.currentUser.username}#${props.currentUser.strife_id_tag}`}>
                <img className='usm-user-strife-tag-badge' alt=" " />
            </a>
        </div>
    );


    let profileEffectPreviewImgs = {
        "fallFoliage": (
            <>
                <img className='shop-item-fall-foliage-infinite' alt=" " style={{ top: `0px` }} />
                <img className={`ppe-shop-item-fall-foliage-leaves`} alt=" " />
            </>
        ),
        "lillyPad": (
            <>
                <img className="ppe-shop-item-fall-lilly-pad-life" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "ghoulishGraffiti": (
            <>
                <img className="ppe-shop-item-ghoulish-graffiti" alt=" " style={{ top: `0px` }} />
            </>
        ),

        "zombieSlime": (
            <>
                <img className="ppe-shop-item-slime-zombie" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "darkOmens": (
            <>
                <img className="ppe-shop-item-ghost-skulls" alt=" " style={{ top: `0px` }} />
            </>
        ),

        "hydroBlast": (
            <>
                <img className="ppe-shop-item-fantasy-hydro-blast" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "sakuraDreams": (
            <>
                <img className="ppe-shop-item-fantasy-sakura-dreams-main" alt=" " style={{ top: `0px` }} />
                <img className="ppe-shop-item-fantasy-sakura-dreams" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "mysticVines": (
            <>
                <img className={`shop-item-fantasy-mystic-vines-growing-cycle`} alt=" " style={{ top: `0px` }} />
                <img className={`shop-item-fantasy-mystic-vines-loop`} alt=" " style={{ top: `0px` }} />
            </>
        ),
        "pixieDust": (
            <>
                <img className="ppe-shop-item-fantasy-pixie-dust" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "magicHearts": (
            <>
                <img className="ppe-shop-item-anime-magic-hearts" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "shatterEffect": (
            <>
                <img className="ppe-shop-item-anime-shatter" alt=" " style={{ top: `0px` }} />
                <img className="ppe-shop-item-anime-shatter-flame" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "shurikenStrike": (
            <>
                <img className="ppe-shop-item-anime-shuriken-strike" alt=" " style={{ top: `0px` }} />
                <img className="ppe-shop-item-anime-shuriken-strike-throws" alt=" " style={{ top: `0px` }} />

            </>
        ),
        "powerSurge": (
            <>
                <img className="ppe-shop-item-anime-power-surge" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "strifeOs": (
            <>
                <img className="ppe-shop-item-breakfast-strife-cereal-o-s" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "breakfastPlate": (
            <>
                <img className="ppe-shop-item-breakfast-plate" alt=" " style={{ top: `0px` }} />
            </>
        ),

        "deckTheHalls": (
            <>
                <img className="shop-item-winter-wonderland-deck-the-halls-intro" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "snowyShenanigans": (
            <>
                <img className="shop-item-winter-wonderland-snowman-intro" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-winter-wonderland-snowman-loop" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "boostedRelic": (
            <>
                <img className="shop-item-disxcore-boosted-relic-intro" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-disxcore-boosted-relic-loop" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "cyberSpace": (
            <>
                <img className="shop-item-disxcore-cyberspace-intro" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-disxcore-cyberspace-loop" alt=" " style={{ top: `0px` }} />
            </>
        ),

        "gooZilla": (
            <>
                <img className="shop-item-monsters-gooZilla-claw" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-monsters-gooZilla-claw-goo" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-monsters-gooZilla-claw-goo-end" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "heartZilla": (
            <>
                <img className="shop-item-monsters-heartZilla-claw" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-monsters-heartZilla-end-dripping" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "monsterPop": (
            <>
                <img className="shop-item-monsters-monsterPop-intro" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-monsters-monsterPop-glass-intro" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-monsters-monsterPop-ending-pop" alt=" " style={{ top: `0px` }} />

            </>
        ),
        "dragonDance": (
            <>
                <img className="shop-item-lunar-dragon-dragonDance-intro" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-lunar-dragon-dragonDance-ending" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "fortuneFlurry": (
            <>
                <img className="shop-item-lunar-dragon-fortuneFlurry-frame" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-lunar-dragon-fortuneFlurry-intro" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-lunar-dragon-fortuneFlurry-ending" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "midnightCelebrations": (
            <>
                <img className="shop-item-lunar-dragon-midnightCelebrations-frame" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-lunar-dragon-midnightCelebrations-intro" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-lunar-dragon-midnightCelebrations-ending" alt=" " style={{ top: `0px` }} />
            </>
        ),

        "nightRunner": (
            <>
                <img className="shop-item-cyber-punk-nightRunner-idle" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-cyber-punk-nightRunner-intro" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "uplinkError": (
            <>
                <img className="shop-item-cyber-punk-uplinkError-idle" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-cyber-punk-uplinkError-intro" alt=" " style={{ top: `0px` }} />
            </>
        ),
    }

    let buttonGroup = props.nitroExclusive ? (

        <div className="ppe-button-container">
            <div className="ppe-primary-buttons">
                <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
                    onClick={(e) => { e.stopPropagation(); openModal("subToNitroBasic"); }}>
                    <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
                        <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
                        <span className="shopbuttonText">Unlock with Nitro</span>
                        <div className="shiny-button-container">
                            <div className="shiny-button-flex">
                                <div className="shiny-button-inner"></div>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </div>

    ) : (

        <>
            <div className="ppe-button-container">
                <div className="ppe-primary-buttons">
                    <button type="button" className={`shop-buttons ppe-shop-item-purchase-button global-button-size-medium global-button-full-width`}
                        onClick={(e) => { e.stopPropagation(); openModal("purchaseProductModal"); }}
                        style={buttonStyles[props.profileEffectThemeType]}
                    >
                        <div className="global-button-contents look-filled-button-contents">
                            Buy Profile Effect
                        </div>
                    </button>
                    <button type="button" className="shop-buttons shop-item-gift-button global-button-growth button-look-filled"
                        data-tooltip-content={"Send a gift"}
                        data-tooltip-id={`sbmodal-thread-tip-${props.profileThemeObj}`} data-tooltip-place="top"
                        onClick={(e) => {
                            e.preventDefault();
                            openModal("sendGiftModal");
                        }}
                        style={giftColor[props.profileEffectThemeType]}
                    >
                        <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
                            <ChatPresentIcon height={24} width={24} />
                        </div>
                    </button>
                </div>
            </div>
            <Tooltip className="shop-avatar-deco-tool-tip" id={`sbmodal-thread-tip-${props.profileThemeObj}`} place="top" closeOnResize={true} closeOnScroll={true} />
        </>
    );

    const renderNitroProModal = () => {
        if (currentSubModal.subToNitroPro === true) {
            return (
                <SubscribeToStrifeNitroProModalContainer closeSubMod={closeForm} formName={"subToNitroPro"} gifted={gift} />
            )
        }
    }

    const renderNitroBasicModal = () => {
        if (currentSubModal.subToNitroBasic === true) {
            return (
                <SubscribeToStrifeNitroBasicModalContainer closeSubMod={closeForm} formName={"subToNitroBasic"} gifted={gift} />
            )
        }
    }

    const renderPurchaseProductModal = () => {
        if (currentSubModal.purchaseProductModal === true) {
            return (
                <PurchaseProductModalContainer closeSubMod={closeForm} formName={"purchaseProductModal"}
                    productPrice={strikeThroughPrice[props.profileThemeObj]} productName={profileEffectName[props.profileThemeObj]}
                />
            )
        }
    }
    const renderSendGiftModal = () => {
        if (currentSubModal.sendGiftModal === true) {
            return (
                <SendAGiftModalContainer closeSubMod={closeForm} formName={"sendGiftModal"} productType={"Profile_Effect"}
                    productPrice={strikeThroughPrice[props.profileThemeObj]} productName={profileEffectName[props.profileThemeObj]} productKey={props.profileThemeObj}
                />
            )
        }
    }


    return (
        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="ppe-modal-container-layer" onClick={(e) => handleCloseModal(e)}>
                <div className="ppe-modal-backdrop" style={{ opacity: `${isSubModMounted ? 0 : 0.85}` }}></div>
                <div className="ppe-modal-layer">
                    <div className="ppe-modal-focus-lock">
                        {
                            isSubModMounted === false ? (
                                <div className="ppe-modal-root" id="ppe-modal-root" ref={popUpRef} onClick={(e) => e.stopPropagation()}>
                                    <div className="ppe-modal-content global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                                        <div className="ppe-modal-collectible-info-container" style={profileThemeEffects[props.profileEffectThemeType]}>
                                            <div className="ppem-collectible-info-title-container">
                                                <div>
                                                    <img className={profileEffectTitleBanner[props.profileEffectThemeType]} alt=" " />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="ppe-profile-effect-description-container">
                                                    <div className="ppe-type-pill-label">
                                                        <div className="ppe-type-pill-label-text" style={{ color: `white` }}>
                                                            Profile Effect
                                                        </div>
                                                    </div>
                                                    <h2 className="ppe-profile-effect-h2" style={{ color: `white` }}>{`${profileEffectName[props.profileThemeObj]}`}</h2>
                                                    <div className="ppe-profile-effect-small-text-description" style={{ color: `white` }}>{`${profileEffectDescription[props.profileThemeObj]}`}</div>

                                                    {props.nitroExclusive ? (<div className="ppe-price-tags-h2-med-semi-bold" style={{ color: `white` }}>Included with Nitro</div>) : (
                                                        <div className="ppe-ped-price-tags-container">
                                                            <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>{`$${strikeThroughPrice[props.profileThemeObj]}`}</h2>
                                                            <h2 className="ppe-profile-effect-price-tags-h2-xsmall-med-bold" style={{ color: `white` }}>
                                                                <StrifeNitroBadgeIcon className="ppe-ped-nitro-ball-icon-faded" height={24} width={24} />
                                                                {`$${salePrice[props.profileThemeObj]} with Nitro. `}
                                                                <div className="ppe-ped-premium-unlock-hook" role="button" tabIndex={0} onClick={(e) => { e.stopPropagation(); openModal("subToNitroBasic"); }}>Subscribe now</div>
                                                            </h2>
                                                        </div>
                                                    )}
                                                </div>
                                                {buttonGroup}
                                                <div className="ppe-ped-fine-print-disclaimer">
                                                    {`${props.nitroExclusive ? `This bonus item is yours to keep and use anytime with an active Nitro subscription.` : `Once purchased, this effect will be added to your collection and can be used anytime`}`}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ppe-modal-collectible-preview-container-noChat">
                                            <div className={`ppe-collectible-preview-category-banner ${profileEffectBgBanner[props.profileEffectThemeType]}`}></div>
                                            <div className="ppe-profile-effects-preview-container-inner ppepes-preview-container-inner">
                                                <div className={upcColorPallete}>
                                                    <div className={`user-mini-upc-inner ${props.currentUser.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
                                                        <div className="shop-item-upc-profile-effects">
                                                            <div className="shop-item-upc-profile-effects-inner">
                                                                {profileEffectPreviewImgs[props.profileThemeObj]}
                                                            </div>
                                                        </div>
                                                        {memberBanner}
                                                        {mp2}
                                                        {badgeContainer}
                                                        <div className='upc-popout-overlay-background upc-overlay-background ppe-customization-upc-body' >

                                                            <div className='upc-section-content ppe-upc-section-content-container' >
                                                                <div>
                                                                    <div className='upc-user-text'>
                                                                        <h3 className='upc-user-display-name'>{props.currentUser.username}</h3>
                                                                        <div className='upc-header-username-tag-wrapper'>
                                                                            <span className='upc-username'>{props.currentUser.username}</span>
                                                                            <span className='upc-strife-tag'>#{props.currentUser.strife_id_tag}</span>
                                                                            {if_Bot_tag}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ppe-upc-content-divider"></div>
                                                            <div className='upc-section-content' >
                                                                <h3 className='upc-strife-member-since-header'>$TR!F3 Member Since</h3>
                                                                <div className='upc-strife-member-since-container'>
                                                                    <div className='upc-strife-member-since-time'>{props.currentUser.accountCreatedOn}</div>
                                                                </div>
                                                            </div>
                                                            <div className="upc-section-content ppe-upc-last-section">
                                                                <div className="ppe-fakeActivity-title">
                                                                    Customizing My Profile
                                                                </div>
                                                                <div className="ppe-fakeActivity-layout">
                                                                    <div className="ppe-fakeActivity-icon">
                                                                        <img className="ppe-fake-activity-pencil-icon" alt=" " />
                                                                    </div>
                                                                    <div className="ppe-fakeActivity-content">
                                                                        <div className="ppe-fakeActivity-content-semi-bold">User Profile</div>
                                                                        <div className="ppe-profile-effect-small-text-description default-text-color">
                                                                            <span className="ppe-fakeActivity-timeValues">
                                                                                {`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
                                                                            </span>{`${` `}`} elapsed
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Tooltip className="usm-tool-tip" id="modal-tool-tip-usm" place="top" closeOnResize={true} closeOnScroll={true} />
                                        <button className="ppe-close-button-button" type="button" onClick={(e) => handleCloseModal(e)}>
                                            <div className="global-button-contents closeWithCircleBackgroundIcon">
                                                <CloseXIcon className="ppe-close-button-icon" />
                                            </div>
                                        </button>
                                        <div className="ppe-modal-bottom-sep"></div>
                                    </div>
                                </div>
                            ) : ("")
                        }
                        {renderNitroProModal()}
                        {renderNitroBasicModal()}
                        {renderPurchaseProductModal()}
                        {renderSendGiftModal()}
                    </div>
                </div>
            </div>
        </REACT_PORTAL >
    );

}
export default ProfileEffectPreviewModal;