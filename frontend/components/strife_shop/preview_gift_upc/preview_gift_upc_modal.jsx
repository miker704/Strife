import React from 'react';
import { useState, useRef, useEffect } from "react";
import {
    StrifeBotTagIcon
} from '../../front_end_svgs/Strife_svgs';
import REACT_PORTAL from '../../../utils/ReactPortal_api_util';
import { Tooltip } from 'react-tooltip';
import { returnUserBadgeFillColor } from '../../../utils/user_status_badge_color_api_util';
import { returnUserOnlineActivityStatusBadgeMaskIMG } from '../../../utils/user_online_activity_status_badge_api_util';

const PreviewGiftUPCModal = (props) => {


    useEffect(() => {
        window.addEventListener('keyup', overrideCloseModal, false);

        props.fetchUser(props.member.id).then((action) => {
            const newfriend = action.user
            setMemberData(newfriend);
            setMemberStatus(newfriend);
        })

        return function cleanUp () {
            window.removeEventListener('keyup', overrideCloseModal, false);

            if (props.errors.length > 0) {
                props.removeFriendshipErrors();
            }
            if (props.sessionErrors.length > 0) {
                props.removeSessionErrors();
            }
        }

    }, []);

    useEffect(() => {
        let friendDataReSync = props.users.find((user) => user.id === member.id);
        if (friendDataReSync) {
            setMemberData(friendDataReSync);
            setMemberStatus(friendDataReSync);
        }

    }, [props.users])

    const overrideCloseModal = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                e.stopPropagation();
                handleCloseOnOuterClick(e);
                window.removeEventListener('keyup', overrideCloseModal, false);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }

    const handleCloseOnOuterClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        props.setShowPopUp(false);
    }

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const popUpRef = useRef(null);
    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);
    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

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


    const [memberStatus, setMemberStatus] = useState({});
    const [member, setMemberData] = useState({});
    const defaultcolorPalleteRef = useRef(Math.random());
    const colorPalleteAltRef = useRef(Math.random());
    let upcColorPallete = 'user-mini-upc theme-dark userProfileOuterTheme ' +
        ((defaultcolorPalleteRef.current > 0.50) ? ' ' + 'user-upc-profile-colors-0' : ' ' + `user-upc-profile-colors-${member.color_tag}`) +
        ((colorPalleteAltRef.current > 0.90) ? ' ' + 'alt' : '');

    const Strife_Bot_IDs = [1, 2, 3, 4];

    let if_Bot_tag = Strife_Bot_IDs.includes(member.id) ? (
        <span className="bot-sticker">
            <StrifeBotTagIcon aria-label="Verified $TR!F3 B0T" className="bot-check-mark" />
            <span className="bot-text">$TR!F3 B0T</span>
        </span>
    ) : ("");



    const avatarDecorationAnimatedClassNames = {
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
        "newYear2024": "ppe-winter-wonderland-new-year-2024",
        "freshPine": "ppe-winter-wonderland-fresh-pine",
        "snowGlobe": "ppe-winter-wonderland-snow-globe",
        "stringLights": "ppe-winter-wonderland-string-lights",
        "greenSmoke": "ppe-ssxcore-greenSmokeScreen",
        "futuristicUI": "ppe-ssxcore-tech-hud",
        "disxcoreHeadset": "ppe-ssxcore-shakingBlueHeadset",
        "beamChop": "ppe-monsters-beam-chop",
        "stinkUms": "ppe-monsters-stinkums",
        "chuck": "ppe-monsters-chuck",
        "winkle": "ppe-monsters-winkle",
        "chewBert": "ppe-monsters-chewbert",
        "doodleZard": "ppe-monsters-doodlezard",
        "glop": "ppe-monsters-glop",
        "gawbleHop": "ppe-monsters-gawblehop",
        "cyberPunkGlitch": "ppe-cyber-punk-glitch",
        "cyberNetic": "ppe-cyber-punk-cybernetic",
        "digitalSunrise": "ppe-cyber-punk-digital-sunrise",
        "cyberNeticImplant": "ppe-cyber-punk-implant",
        "fanFlourish": "ppe-lunar-dragon-fanFlourish",
        "lunarLanterns": "ppe-lunar-dragon-lunarLanterns",
        "fireCrackers": "ppe-lunar-dragon-fireCrackers",
        "dragonsSmile": "ppe-lunar-dragon-dragonsSmile",
        "luckyEnvelopes": "ppe-lunar-dragon-luckyEnvelopes",
        "koiPond": "ppe-lunar-dragon-koiPond",
        "elementsFire": "ppe-elements-fire",
        "elementsWater": "ppe-elements-water",
        "elementsAir": "ppe-elements-air",
        "elementsEarth": "ppe-elements-earth",
        "elementsLightning": "ppe-elements-lightning",
        "elementsBalance": "ppe-elements-balance",
        "springToonsHoneyBlossom": "ppe-spring-toons-honey-blossom",
        "springToonsDandelionDuo": "ppe-spring-toons-dandelion-duo",
        "springToonsHughTheRainbow": "ppe-spring-toons-hugh-the-rainbow",
        "springToonsStrawberryVine": "ppe-spring-toons-strawberry-vine",
        "springToonsButterflies": "ppe-spring-toons-butterflies",
        "springToonsPetalPack": "ppe-spring-toons-petal-pack",
        "animeCatEars": "ppe-anime-cat-ears",
        "animeKiEnergy": "ppe-anime-ki-energy",
        "animeHeartBloom": "ppe-anime-heart-bloom",
        "animeDismay": "ppe-anime-dismay",
        "animeRage": "ppe-anime-rage",
        "animeInTears": "ppe-anime-inTears",
    }

    let memberBanner = member.banner === undefined ?
        (

            <svg className="upc-bannerSVGwrapper" viewBox="0 0 340 90" >
                <mask id="uid_1414">
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                    <circle fill="black" cx="58" cy="82" r="46"></circle>
                </mask>
                <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_1414)">
                    <div className={`upc-banner color-${member.color_tag}`}>
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
                    <div className={`upc-banner-pro ${member.banner === undefined ? `color-${member.color_tag}` : ``}`}
                        style={{ backgroundImage: `${member.banner === undefined ? `none` : `url(${member.banner})`}`, backgroundColor: `${member.banner === undefined ? `` : `rgb(21, 20, 20)`}` }}>
                    </div>
                </foreignObject>
            </svg>
        );



    let memberPhoto = (
        <div className={`upc-pfp-icon-wrapper ${member.banner ? `pro` : ``}`} role="button" tabIndex={0}>
            <div className='upc-avatar-wrapper' role='img'>
                <svg width="80" height="80" viewBox="0 0 80 80" className="upc-avatar-svg-mask" aria-hidden="true">
                    <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-default)">
                        <div className="upc-avatar-stack">
                            {
                                member.photo === undefined ? (
                                    <img className={`upc-avatar-pfp icon-colors-${member.color_tag}`} alt=" " aria-hidden="true" />
                                ) : (
                                    <img className="upc-avatar-pfp" src={member.photo} alt=" " aria-hidden="true" />
                                )
                            }
                        </div>
                    </foreignObject>
                </svg>
                {
                    props.productType === "Avatar_Decoration" ? (
                        <svg width="96" height="96" viewBox="0 0 96 96" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
                            <foreignObject x="0" y="0" width="96" height="96" >
                                <div className="ssxcore-avatar-stack">
                                    <img className={`${avatarDecorationAnimatedClassNames[props.productKey]}`} alt=" " />
                                </div>
                            </foreignObject>
                        </svg>
                    ) : ("")
                }
            </div>
            <div className="ppe-status">
                <svg className="ppe-status-dot">
                    <rect width="100%" height="100%" fill={returnUserBadgeFillColor(member.online)}
                        mask={returnUserOnlineActivityStatusBadgeMaskIMG(member.online)}
                        className="upc-avatar-pointer-events"></rect>
                </svg>
            </div>
        </div>
    );


    let badgeContainer = (
        <div className='upc-profile-badges-container' role='group'>
            <a className='usm-user-strife-tag-badge-anchor' role="button" data-tooltip-position-strategy='fixed' data-tooltip-id="modal-tool-tip-usm"
                data-tooltip-content={`Originally known as ${member.username}#${member.strife_id_tag}`}>
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
        "elementsRockSlide": (
            <>
                <img className="shop-item-elements-rock-slide-idle" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-elements-rock-slide-intro" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "elementsVortex": (
            <>
                <img className="shop-item-elements-vortex-idle" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-elements-vortex-intro" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "elementsMastery": (
            <>
                <img className="shop-item-elements-mastery-idle" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-elements-mastery-intro" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "springToonsPetals": (
            <>
                <img className="shop-item-spring-toons-petals-serenade-idle-flowers" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-spring-toons-petals-serenade-idle-rain-drops" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-spring-toons-petals-serenade-intro" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "springToonsFellowship": (
            <>
                <img className="shop-item-spring-toons-fellowship-idle-critters" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-spring-toons-fellowship-intro" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "springToonsSpringBoom": (
            <>
                <img className="shop-item-spring-toons-spring-boom-idle-flowers" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-spring-toons-spring-boom-idle-rain-drops" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-spring-toons-spring-boom-intro" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "animeDreamy": (
            <>
                <img className="shop-item-anime-v2-dreamy-intro" alt=" " style={{ top: `0px` }} />

            </>
        ),
        "animeKIDetonate": (
            <>
                <img className="shop-item-anime-v2-ki-detonate-intro" alt=" " style={{ top: `0px` }} />

            </>
        ),
        "animeSushiMania": (
            <>
                <img className="shop-item-anime-v2-sushi-mania-intro " alt=" " style={{ top: `0px` }} />

            </>
        ),
    }


    let profileEffectContainer = props.productType === "Profile_Effect" ? (
        <div className="shop-item-upc-profile-effects">
            <div className="shop-item-upc-profile-effects-inner">
                {profileEffectPreviewImgs[props.productKey]}
            </div>
        </div>
    ) : ("")


    let aboutMeSection = (
        <div className='upc-section-content'>
            <h2 className='upc-about-me-text'>About Me</h2>
            <div className='upc-about-me-markup-container'>
                <div className='upc-about-me-markup-text-wrapper'>
                    <span>Loading ... ... ... ... </span>
                    <img className='upc-loading-status' alt="" />
                </div>
            </div>
        </div>
    )

    let userInfoSection = (
        <div className='upc-section-content ppe-upc-section-content-container' >
            <div>
                <div className='upc-user-text'>
                    <h3 className='upc-user-display-name'>{member.username}</h3>
                    <div className='upc-header-username-tag-wrapper'>
                        <span className='upc-username'>{member.username}</span>
                        <span className='upc-strife-tag'>#{member.strife_id_tag}</span>
                        {if_Bot_tag}
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <REACT_PORTAL wrapperId={'sub-modal-2'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className='server-user-options-upc-layer-container' onClick={(e) => handleCloseOnOuterClick(e)}>
                <div id="upc-mod" className={`upc-popout message-version`} ref={popUpRef} onClick={(e) => e.stopPropagation()}
                    style={{
                        top: `${member.banner ? `140` : `200`}px`, right: ``,
                        left: `${575}px`
                    }}
                >
                    <div className="upc-inner-wrapper reverse-animation">
                        <div className={upcColorPallete}>
                            <div className={`user-mini-upc-inner ${member.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
                                {profileEffectContainer}
                                {memberBanner}
                                {memberPhoto}
                                {badgeContainer}
                                <div className='upc-popout-overlay-background upc-overlay-background pgupc-customization-upc-body' >
                                    {userInfoSection}
                                    <div className="ppe-upc-content-divider"></div>
                                    {aboutMeSection}
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
                                        <button type="button" className='pgupcm-example-button global-button-full-width global-button-size-small global-button-sizing-mtmxw'>
                                            <div className='global-button-contents look-filled-button-contents'>Example Button</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Tooltip className="usm-tool-tip" id="modal-tool-tip-usm" place="top" closeOnResize={true} closeOnScroll={true} />
            </div>
        </REACT_PORTAL >
    )

}

export default PreviewGiftUPCModal;