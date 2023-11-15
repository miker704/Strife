import React from "react";
import { useEffect, useState, useRef } from "react";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { AddCircleIcon, CloseXIcon, NitroHappyFaceIcon, StrifeBotTagIcon, StrifeNitroBadgeIcon } from "../../front_end_svgs/Strife_svgs";
import { returnUserOnlineActivityStatusBadgeMaskIMG } from "../../../utils/user_online_activity_status_badge_api_util";
import { returnUserBadgeFillColor } from "../../../utils/user_status_badge_color_api_util";
import SubscribeToStrifeNitroProModalContainer from "../../nitro/subscribe_to_nitro_modal/subscribe_to_nitro_pro_modal_container";
import { useFormatTimeStampMessageBody } from "../../../utils/useTimeStamp_api_utils";

const AvatarDecorationPreviewModal = (props) => {

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

    const [currentTime, setCurrentTime] = React.useState(new Date());
    const [spinCubes, setSpinCubes] = React.useState(true);
    const [gift, setGift] = React.useState(false);
    const [currentSubModal, setCurrentSubModal] = useState({
        subToNitroPro: false,
    });
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const popUpRef = useRef(null);

    const openModal = (field, isGift = false) => {
        setCurrentSubModal(previousState => {
            return { ...previousState, [field]: true };
        });
        setGift(isGift);
        window.removeEventListener('keyup', overrideCloseModal, false);
        setIsSubModMounted(true);
    }


    const closeForm = (field) => {
        setCurrentSubModal(previousState => {
            return { ...previousState, [field]: false };
        });
        setGift(false);
        setIsSubModMounted(false);
        window.addEventListener('keyup', overrideCloseModal, false);
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
    }

    const profileEffectBgBanner = {
        "fall-effect": "fall-bg-banner",
        "halloween-effect": "ppe-halloween-bg-banner",
        "fantasy-effect": "ppe-fantasy-bg-banner",
        "anime-effect": "ppe-anime-bg-banner",
        "breakfast-effect": "ppe-breakfast-bg-banner",
    }
    const profileEffectTitleBanner = {
        "fall-effect": "ppe-fall-title-banner",
        "halloween-effect": "ppe-halloween-title-banner",
        "fantasy-effect": "ppe-fantasy-title-banner",
        "anime-effect": "ppe-anime-title-banner",
        "breakfast-effect": "ppe-breakfast-title-banner",
    }

    const salePrice = {
        "graveyardCat": 5.49,
        "ghosts": 5.49,
        "minions": 5.49,
        "jackOLantern": 5.49,
        "fallLeaves": 5.49,
        "pumpkinSpice": 5.49,
        "frogHat": 5.49,
        "foxHat": 5.49,
        "flamingSword": 6.99,
        "magicPotion": 6.99,
        "fairySprites": 6.99,
        "wizardsStaff": 6.99,
        "glowingRunes": 6.99,
        "defensiveShield": 6.99,
        "skullMedallion": 6.99,
        "treasureNKey": 6.99,
        "radiatingEnergy": 5.49,
        "soulLeavingBody": 5.49,
        "sweatDrops": 5.49,
        "starryEyed": 5.49,
        "inLove": 5.49,
        "shocked": 5.49,
        "angry": 5.49,
        "toast": 2.99,
        "morningCoffee": 2.99,
        "friedEgg": 2.99,
        "blueberryJam": 2.99,
        "donut": 2.99,
        "pancakes": 2.99,
    };


    const strikeThroughPrice = {
        "graveyardCat": 7.99,
        "ghosts": 7.99,
        "minions": 7.99,
        "jackOLantern": 7.99,
        "fallLeaves": 7.99,
        "pumpkinSpice": 7.99,
        "frogHat": 7.99,
        "foxHat": 7.99,
        "flamingSword": 9.99,
        "magicPotion": 9.99,
        "fairySprites": 9.99,
        "wizardsStaff": 9.99,
        "glowingRunes": 9.99,
        "defensiveShield": 9.99,
        "skullMedallion": 9.99,
        "treasureNKey": 9.99,
        "radiatingEnergy": 7.99,
        "soulLeavingBody": 7.99,
        "sweatDrops": 7.99,
        "starryEyed": 7.99,
        "inLove": 7.99,
        "shocked": 7.99,
        "angry": 7.99,
        "toast": 3.99,
        "morningCoffee": 3.99,
        "friedEgg": 3.99,
        "blueberryJam": 3.99,
        "donut": 3.99,
        "pancakes": 3.99,
    };

    const avatarDecorationName = {
        "graveyardCat": "Graveyard Cat",
        "ghosts": "Ghosts",
        "minions": "Minions",
        "jackOLantern": "Jack-o'-lantern",
        "fallLeaves": "Fall Leaves",
        "pumpkinSpice": "Pumpkin Spice",
        "frogHat": "Frog Hat",
        "foxHat": "Fox Hat",
        "flamingSword": "Flaming Sword",
        "magicPotion": "Magic Potion",
        "fairySprites": "Fairy Sprites",
        "wizardsStaff": "Wizard's Staff",
        "glowingRunes": "Glowing Runes",
        "defensiveShield": "Defensive Shield",
        "skullMedallion": "Skull Medallion",
        "treasureNKey": "Treasure and Key",
        "radiatingEnergy": "Radiating Energy",
        "soulLeavingBody": "Soul Leaving Body",
        "sweatDrops": "Sweat Drops",
        "starryEyed": "Starry Eyed",
        "inLove": "In Love",
        "shocked": "Shocked",
        "angry": "Angry",
        "toast": "Toast",
        "morningCoffee": "Morning Coffee",
        "friedEgg": "Fried Egg",
        "blueberryJam": "Blueberry Jam",
        "donut": "Donut",
        "pancakes": "Pancakes",
    }
    const avatarDecorationDescription = {
        "graveyardCat": "Just a cat on graveyard duty.",
        "ghosts": "Look at them just spinning and grinning all day...",
        "minions": "Name a more iconic duo.",
        "jackOLantern": "You can practically hear its eerie cackle...",
        "fallLeaves": "Behold nature's dance.",
        "pumpkinSpice": "Sweets and spice make everything nice.",
        "frogHat": "Frogs and fashion go together and you can't tell me otherwise.",
        "foxHat": "Charming, cozy, and a little bit nosy.",
        "flamingSword": "Slaying the look and the monsters.",
        "magicPotion": "Drink at your own risk.",
        "fairySprites": "Here to guide you on your path.",
        "wizardsStaff": "How much power does it hold?",
        "glowingRunes": "I wonder what these symbols mean.",
        "defensiveShield": "Use against pointy things.",
        "skullMedallion": "Earned through unknown means",
        "treasureNKey": "What glorious treasures lie within?",
        "radiatingEnergy": "Over EIGHT-THOUSAND-NINE-HUNDRED-NINETY-NINE!",
        "soulLeavingBody": "Can I just disappear right now?",
        "sweatDrops": "*laughs nervously*",
        "starryEyed": "Feelin' sparkly.",
        "inLove": "uwu",
        "shocked": "Nani?!!",
        "angry": "How dare you.",
        "toast": "It is toast.",
        "morningCoffee": "Don't talk to me until I finish this.",
        "friedEgg": "I like mine sunny side-up.",
        "blueberryJam": "MMMM JUICY.",
        "donut": "Never enough sprinkles.",
        "pancakes": "How high can you stack 'em?",
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


    let avatarDecorationPreviewImgs = {
        "graveyardCat": (
            <>
                <img className='ppe-halloween-cat-grave' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "ghosts": (
            <>
                <img className='ppe-halloween-ghosts' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "minions": (
            <>
                <img className='ppe-halloween-minions' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "jackOLantern": (
            <>
                <img className='ppe-halloween-jack-o-lantern' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "fallLeaves": (
            <>
                <img className='ppe-fall-leaves-image' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "pumpkinSpice": (
            <>
                <img className='ppe-fall-pumpkin-spice-image' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "frogHat": (
            <>
                <img className='ppe-fall-frog-hat-image' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "foxHat": (
            <>
                <img className='ppe-fall-fox-hat-image' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "flamingSword": (
            <>
                <img className='ppe-fantasy-flaming-sword' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "magicPotion": (
            <>
                <img className='ppe-fantasy-magic-potion' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "fairySprites": (
            <>
                <img className='ppe-fantasy-fairy-sprites' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "wizardsStaff": (
            <>
                <img className='ppe-fantasy-wizard-staff' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "glowingRunes": (
            <>
                <img className='ppe-fantasy-glowing-runes' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "defensiveShield": (
            <>
                <img className='ppe-fantasy-defensive-shield' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "skullMedallion": (
            <>
                <img className='ppe-fantasy-skull-medallion' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "treasureNKey": (
            <>
                <img className='ppe-fantasy-treasure-n-key' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "radiatingEnergy": (
            <>
                <img className='ppe-anime-radiating-energy' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "soulLeavingBody": (
            <>
                <img className='ppe-anime-soul-leaving-body' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "sweatDrops": (
            <>
                <img className='ppe-anime-sweat-drops' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "starryEyed": (
            <>
                <img className='ppe-anime-starry-eyed' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "inLove": (
            <>
                <img className='ppe-anime-in-love' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "shocked": (
            <>
                <img className='ppe-anime-shocked' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "angry": (
            <>
                <img className='ppe-anime-angry' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "toast": (
            <>
                <img className='ppe-breakfast-items-toast' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "morningCoffee": (
            <>
                <img className='ppe-breakfast-items-morning-coffee' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "friedEgg": (
            <>
                <img className='ppe-breakfast-items-fried-eggs' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "blueberryJam": (
            <>
                <img className='ppe-breakfast-items-blueberry-jam' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "donut": (
            <>
                <img className='ppe-breakfast-items-donuts' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "pancakes": (
            <>
                <img className='ppe-breakfast-items-pancakes' alt=" " style={{ top: `0px` }} />
            </>
        ),


    }



    const avatarDecorationClassNames = {
        "graveyardCat": "ppe-halloween-cat-grave",
        "ghosts": "ppe-halloween-ghosts",
        "minions": "ppe-halloween-minions",
        "jackOLantern": "ppe-halloween-jack-o-lantern",
        "fallLeaves": "ppe-fall-leaves-image",
        "pumpkinSpice": "ppe-fall-pumpkin-spice-image",
        "frogHat": "ppe-fall-frog-hat-image",
        "foxHat": "ppe-fall-fox-hat-image",
        "flamingSword": "ppe-fantasy-flaming-sword",
        "magicPotion": "ppe-fantasy-magic-potion",
        "fairySprites": "ppe-fantasy-fairy-sprites",
        "wizardsStaff": "ppe-fantasy-wizard-staff",
        "glowingRunes": "ppe-fantasy-glowing-runes",
        "defensiveShield": "ppe-fantasy-defensive-shield",
        "skullMedallion": "ppe-fantasy-skull-medallion",
        "treasureNKey": "ppe-fantasy-treasure-n-key",
        "radiatingEnergy": "ppe-anime-radiating-energy",
        "soulLeavingBody": "ppe-anime-soul-leaving-body",
        "sweatDrops": "ppe-anime-sweat-drops",
        "starryEyed": "ppe-anime-starry-eyed",
        "inLove": "ppe-anime-in-love",
        "shocked": "ppe-anime-shocked",
        "angry": "ppe-anime-angry",
        "toast": "ppe-breakfast-items-toast",
        "morningCoffee": "ppe-breakfast-items-morning-coffee",
        "friedEgg": "ppe-breakfast-items-fried-eggs",
        "blueberryJam": "ppe-breakfast-items-blueberry-jam",
        "donut": "ppe-breakfast-items-donuts",
        "pancakes": "ppe-breakfast-items-pancakes",
    }


    let memberBanner = props.currentUser.banner === undefined ?
        (

            <svg className="ppe-upc-bannerSVGwrapper-avatarDecoVersion" viewBox="0 0 340 90" >
                <mask id="uid_1414">
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                    <circle fill="black" cx="58" cy="82" r="46"></circle>
                </mask>
                <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_1414)">
                    <div className={`ppe-upc-adp-banner color-${props.currentUser.color_tag}`}>
                    </div>
                </foreignObject>
            </svg>

        ) : (
            <svg className="ppe-upc-bannerSVGwrapper-avatarDecoVersion-pro" viewBox="0 0 340 120">
                <mask id="uid_3244">
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                    <circle fill="black" cx="58" cy="112" r="46"></circle>
                </mask>
                <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_3244)">
                    <div className={`ppe-upc-adp-banner-pro ${props.currentUser.banner === undefined ? `color-${props.currentUser.color_tag}` : ``}`}
                        style={{ backgroundImage: `${props.currentUser.banner === undefined ? `none` : `url(${props.currentUser.banner})`}`, backgroundColor: `${props.currentUser.banner === undefined ? `` : `rgb(21, 20, 20)`}` }}>
                    </div>
                </foreignObject>
            </svg>
        );


    let memberPhoto = (
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
                <svg width="96" height="96" viewBox="0 0 96 96" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
                    <foreignObject x="0" y="0" width="96" height="96" mask="url(#)">
                        <div className="ssxcore-avatar-stack">
                            {avatarDecorationPreviewImgs[props.avatarEffectObj]}
                        </div>
                    </foreignObject>
                </svg>
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

    let badgeContainer = (
        <div className='upc-profile-badges-container' role='group'>
            <a className='usm-user-strife-tag-badge-anchor' >
                <img className='usm-user-strife-tag-badge' alt=" " />
            </a>
        </div>
    );




    const renderNitroProModal = () => {
        if (currentSubModal.subToNitroPro === true) {
            return (
                <SubscribeToStrifeNitroProModalContainer closeSubMod={closeForm} formName={"subToNitroPro"} gifted={gift} />
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

                                            <div className="ppem-AvatarPreviewContainer">
                                                <div className="ppem-AvatarPreview-inner-wrapper">
                                                    <svg width="152" height="152" viewBox="0 0 152 152" className="ssxcore-svg-mask" aria-hidden="true">
                                                        <foreignObject x="0" y="0" width="152" height="152" mask="url(#svg-mask-avatar-default)">
                                                            <div className="ssxcore-avatar-stack">
                                                                <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
                                                            </div>
                                                        </foreignObject>
                                                    </svg>
                                                    <svg width="182.4" height="182.4" viewBox="0 0 182.4 182.4" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
                                                        <foreignObject x="0" y="0" width="182.4" height="182.4" mask="url(#)">
                                                            <div className="ssxcore-avatar-stack">
                                                                {avatarDecorationPreviewImgs[props.avatarEffectObj]}
                                                            </div>
                                                        </foreignObject>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="ppe-profile-effect-description-container">
                                                    <div className="ppe-type-pill-label">
                                                        <div className="ppe-type-pill-label-text" style={{ color: `white` }}>
                                                            Avatar Decoration
                                                        </div>
                                                    </div>

                                                    <h2 className="ppe-profile-effect-h2" style={{ color: `white` }}>{`${avatarDecorationName[props.avatarEffectObj]}`}</h2>
                                                    <div className="ppe-profile-effect-small-text-description" style={{ color: `white` }}>{`${avatarDecorationDescription[props.avatarEffectObj]}`}</div>
                                                    <div className="ppe-ped-price-tags-container">
                                                        <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
                                                            <span className="shop-item-striked-price">{`$${strikeThroughPrice[props.avatarEffectObj]}`}</span>
                                                        </h2>
                                                        <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
                                                            <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
                                                            <span className="shop-item-price">{`$${salePrice[props.avatarEffectObj]}`}</span>
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className="shop-item-card-button-container">
                                                    <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
                                                        onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
                                                        <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
                                                            <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
                                                            <span className="shopbuttonText">Unlock Shop with Nitro</span>
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
                                        <div className="ppe-modal-collectible-preview-container-Chat">
                                            <div className={`ppe-collectible-preview-category-banner ${profileEffectBgBanner[props.profileEffectThemeType]}`}></div>
                                            <div className="ppepes-preview-container-inner">
                                                <div className={upcColorPallete}>
                                                    <div className={`user-mini-upc-inner ${props.currentUser.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
                                                        {memberBanner}
                                                        {memberPhoto}
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
                                                        </div>
                                                    </div>
                                                </div>

                                                <div tabIndex={-1}>
                                                    <div className="ppem-AvatarDeco-ChatPreview">
                                                        <div className="ppem-AD-Chat-mock-message" role="article">
                                                            <div className="ppem-AD-Chat-mock-message-contents">
                                                                {
                                                                    props.currentUser.photo === undefined ? (
                                                                        <img className={`ppem-AD-Chat-mock-msg-avatar icon-colors-${props.currentUser.color_tag}`} alt=" " aria-hidden="true" />
                                                                    ) : (
                                                                        <img className="ppem-AD-Chat-mock-msg-avatar" src={props.currentUser.photo} alt=" " aria-hidden="true" />
                                                                    )
                                                                }
                                                                <img className={`ppem-AD-Chat-mock-msg-avatar-decoration ${avatarDecorationClassNames[props.avatarEffectObj]}`} alt=" " />
                                                                <h2 className="ppem-AD-Chat-mock-message-contents-header2">
                                                                    <span className="ppem-AD-Chat-mock-message-username-container">
                                                                        <div className="ppem-AD-Chat-mock-message-username">
                                                                            {`${props.currentUser.username}`}
                                                                        </div>
                                                                    </span>
                                                                    <span className="ppem-AD-Chat-mock-message-timestamp-container">
                                                                        <time className="ppem-AD-Chat-mock-message-inline-timestamp" dateTime={currentTime} aria-label={useFormatTimeStampMessageBody(currentTime)}>
                                                                            <i className="ppem-AD-Chat-mock-message-i-tag-timestamp"> — </i>
                                                                            {useFormatTimeStampMessageBody(currentTime)}
                                                                        </time>
                                                                    </span>
                                                                </h2>
                                                                <div className="ppem-AD-Chat-mock-message-textContent">
                                                                    <span>Look at my beautiful decoration</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ppem-AD-Chat-mock-message-input">
                                                            <AddCircleIcon height={24} width={24} className="ppem-AD-Chat-mock-message-input-button" />
                                                            <NitroHappyFaceIcon height={24} width={24} className="ppem-AD-Chat-mock-message-input-button" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                    </div>
                </div>
            </div>
        </REACT_PORTAL >
    );

}

export default AvatarDecorationPreviewModal;
