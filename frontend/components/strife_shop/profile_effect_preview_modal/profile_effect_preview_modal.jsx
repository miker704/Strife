import React from "react";
import { useEffect, useState, useRef } from "react";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { CloseXIcon, StrifeBotTagIcon, StrifeNitroBadgeIcon } from "../../front_end_svgs/Strife_svgs";
import { returnUserOnlineActivityStatusBadgeMaskIMG } from "../../../utils/user_online_activity_status_badge_api_util";
import { returnUserBadgeFillColor } from "../../../utils/user_status_badge_color_api_util";

const ProfileEffectPreviewModal = (props) => {
    const [spinCubes, setSpinCubes] = React.useState(true);
    const [gift, setGift] = React.useState(false);
    const [currentSubModal, setCurrentSubModal] = useState({
        subToNitroPro: false,
    });

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);


    const [testEffect, setTestEffect] = React.useState("halloween-effect");
    const [testPPEffect, setTestPPEffect] = React.useState("halloween-effect");


    useEffect(() => {
        let intervalId;
        setIsRunning(true);
        if (isRunning) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
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
    }

    const profileEffectBgBanner = {
        "fall-effect": "fall-bg-banner",
        "halloween-effect": "ppe-halloween-bg-banner",
        "fantasy-effect": { background: `linear-gradient(135deg, rgb(81, 127, 219), rgb(6, 14, 35))` },
        "anime-effect": { background: `linear-gradient(135deg, rgb(81, 127, 219), rgb(6, 14, 35))` },
        "breakfast-effect": { background: `linear-gradient(135deg, rgb(81, 127, 219), rgb(6, 14, 35))` },
    }
    const profileEffectTitleBanner = {
        "fall-effect": "ppe-fall-title-banner",
        "halloween-effect": "ppe-halloween-title-banner",
        "fantasy-effect": { background: `linear-gradient(135deg, rgb(81, 127, 219), rgb(6, 14, 35))` },
        "anime-effect": { background: `linear-gradient(135deg, rgb(81, 127, 219), rgb(6, 14, 35))` },
        "breakfast-effect": { background: `linear-gradient(135deg, rgb(81, 127, 219), rgb(6, 14, 35))` },
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
        "breakfastPlate": 8.49
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
        "breakfastPlate": 11.99
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
        "breakfastPlate": "Breakfast Plate"
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
        "breakfastPlate": "The best meal for any time of day."

    }


    const defaultcolorPalleteRef = useRef(Math.random());
    const colorPalleteAltRef = useRef(Math.random());
    let upcColorPallete = 'ppe-upc theme-dark userProfileOuterTheme profileEffectsModalCustomPreview-UPC-themed profileEffectCustomizationPreview-themed' +
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
                    {/* <div className={`ppe-upc-banner color-${props.currentUser.color_tag}`}> */}
                    <div className={`ppe-upc-banner color-${1}`}>

                    </div>
                </foreignObject>
            </svg>

        ) : (
            <svg className="upc-bannerSVGwrapper-pro" viewBox="0 0 280 120">
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

    let badgeContainer = (
        <div className='upc-profile-badges-container' role='group'>
            <a className='usm-user-strife-tag-badge-anchor' >
                <img className='usm-user-strife-tag-badge' alt=" " />
            </a>
        </div>
    );


    let profileEffectPreviewImgs = {
        "fallFoliage": (
            <>
                <img className='shop-item-fall-foliage-infinite' alt=" " style={{ top: `0px` }} />
                <img className={`shop-item-fall-foliage-leaves`} alt=" " />
            </>
        ),
        "lillyPad": (
            <>
                <img className="ppe-shop-item-fall-lilly-pad-life" alt=" " style={{ top: `0px` }} />
            </>
        )
    }



    let fallFoliagePreview = (
        <div className="shop-item-upc-profile-effects">
            <div className="shop-item-upc-profile-effects-inner">
                <img className='shop-item-fall-foliage-infinite' alt=" " style={{ top: `0px` }} />
                <img className={`shop-item-fall-foliage-leaves`} alt=" " />
            </div>
        </div>
    );

    let hydroBlastPreview = (
        <div className="shop-item-upc-profile-effects">
            <div className="shop-item-upc-profile-effects-inner">
                <img className='shop-item-fall-foliage-infinite' alt=" " style={{ top: `0px` }} />
                <img className={`shop-item-fall-foliage-leaves`} alt=" " />
            </div>
        </div>
    );
    let sakuraDreamsPreview = (
        <div className="shop-item-upc-profile-effects">
            <div className="shop-item-upc-profile-effects-inner">
                <img className='shop-item-fall-foliage-infinite' alt=" " style={{ top: `0px` }} />
                <img className={`shop-item-fall-foliage-leaves`} alt=" " />
            </div>
        </div>
    );

    let mysticVinesPreview = (
        <div className="shop-item-upc-profile-effects">
            <div className="shop-item-upc-profile-effects-inner">
                <img className='shop-item-fall-foliage-infinite' alt=" " style={{ top: `0px` }} />
                <img className={`shop-item-fall-foliage-leaves`} alt=" " />
            </div>
        </div>
    );

    let pixieDustPreview = (
        <div className="shop-item-upc-profile-effects">
            <div className="shop-item-upc-profile-effects-inner">
                <img className='shop-item-fall-foliage-infinite' alt=" " style={{ top: `0px` }} />
                <img className={`shop-item-fall-foliage-leaves`} alt=" " />
            </div>
        </div>
    );


    let magicHeartsPreview = (
        <div className="shop-item-upc-profile-effects">
            <div className="shop-item-upc-profile-effects-inner">
                <img className='shop-item-fall-foliage-infinite' alt=" " style={{ top: `0px` }} />
                <img className={`shop-item-fall-foliage-leaves`} alt=" " />
            </div>
        </div>
    );

    let shatterPreview = (
        <div className="shop-item-upc-profile-effects">
            <div className="shop-item-upc-profile-effects-inner">
                <img className='shop-item-fall-foliage-infinite' alt=" " style={{ top: `0px` }} />
                <img className={`shop-item-fall-foliage-leaves`} alt=" " />
            </div>
        </div>
    );
    let shurikenStrikePreview = (
        <div className="shop-item-upc-profile-effects">
            <div className="shop-item-upc-profile-effects-inner">
                <img className='shop-item-fall-foliage-infinite' alt=" " style={{ top: `0px` }} />
                <img className={`shop-item-fall-foliage-leaves`} alt=" " />
            </div>
        </div>
    );
    let powerSurgePreview = (
        <div className="shop-item-upc-profile-effects">
            <div className="shop-item-upc-profile-effects-inner">
                <img className='shop-item-fall-foliage-infinite' alt=" " style={{ top: `0px` }} />
                <img className={`shop-item-fall-foliage-leaves`} alt=" " />
            </div>
        </div>
    );

    let strife0sPreview = (
        <div className="shop-item-upc-profile-effects">
            <div className="shop-item-upc-profile-effects-inner">
                <img className='shop-item-fall-foliage-infinite' alt=" " style={{ top: `0px` }} />
                <img className={`shop-item-fall-foliage-leaves`} alt=" " />
            </div>
        </div>
    );


    let breakfastPlatePreview = (
        <div className="shop-item-upc-profile-effects">
            <div className="shop-item-upc-profile-effects-inner">
                <img className='shop-item-fall-foliage-infinite' alt=" " style={{ top: `0px` }} />
                <img className={`shop-item-fall-foliage-leaves`} alt=" " />
            </div>
        </div>
    );

    return (
        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="ppe-modal-container-layer">
                <div className="ppe-modal-backdrop "></div>
                <div className="ppe-modal-layer">
                    <div className="ppe-modal-focus-lock">
                        <div className="ppe-modal-root">
                            <div className="ppe-modal-content global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                                <div className="ppe-modal-collectible-info-container" style={profileThemeEffects[testEffect]}>
                                    <div className="ppem-collectible-info-title-container">
                                        <div>
                                            <img className={profileEffectTitleBanner[testEffect]} alt=" " />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="ppe-profile-effect-description-container">
                                            <div className="ppe-type-pill-label">
                                                <div className="ppe-type-pill-label-text" style={{ color: `white` }}>
                                                    Profile Effect
                                                </div>
                                            </div>
                                            <h2 className="ppe-profile-effect-h2" style={{ color: `white` }}>Fall Foliage</h2>
                                            <div className="ppe-profile-effect-small-text-description" style={{ color: `white` }}>Getting ready for sweater weather.</div>
                                            <div className="ppe-ped-price-tags-container">
                                                <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$9.99</span></h2>
                                                <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
                                                    <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
                                                    <span className="shop-item-price">$6.99</span>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="shop-item-card-button-container">
                                            <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width">
                                                <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
                                                    <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
                                                    <span className="shopbuttonText">Unlock Shop with N!TR0</span>
                                                    <div className="shiny-button-container">
                                                        <div className="shiny-button-flex">
                                                            <div className="shiny-button-inner"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="ppe-ped-fine-print-disclaimer">
                                            After subscribing to Nitro, you’ll have to purchase this effect separately. Nitro subscriptions become non-refundable once you’ve purchased a effect.
                                        </div>
                                    </div>
                                </div>
                                <div className="ppe-modal-collectible-preview-container-noChat">
                                    <div className={`ppe-collectible-preview-category-banner ${profileEffectBgBanner[testEffect]}`}></div>
                                    <div className="ppe-profile-effects-preview-container-inner ppepes-preview-container-inner">
                                        <div className={upcColorPallete}>
                                            <div className={`user-mini-upc-inner ${props.currentUser.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
                                                {/* {fallFoliagePreview} */}
                                                <div className="shop-item-upc-profile-effects">
                                                    <div className="shop-item-upc-profile-effects-inner">
                                                        {/* {profileEffectPreviewImgs["fallFoliage"]} */}
                                                        {profileEffectPreviewImgs["lillyPad"]}
                                                    </div>
                                                </div>
                                                {memberBanner}
                                                {mp1}
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
                                <button className="ppe-close-button-button" type="button" onClick={() => props.closeModal()}>
                                    <div className="global-button-contents closeWithCircleBackgroundIcon">
                                        <CloseXIcon className="ppe-close-button-icon" />
                                    </div>
                                </button>
                                <div className="ppe-modal-bottom-sep"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL >

    )

}
export default ProfileEffectPreviewModal;