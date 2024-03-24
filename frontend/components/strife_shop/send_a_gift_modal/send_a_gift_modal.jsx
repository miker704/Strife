import React from 'react';
import { useState, useRef, useEffect } from "react";
import {
    StrifeBannerLogo,
    AngelListIcon, CloseXIcon, FolderIcon, GitHubIcon,
    LinkedInIcon, PrivateLockIcon, ProfilePanelChevronIcon,
    WumpusIcon,
    AddReactionIcon, PartyHornIcon, WumpusCakeGiftIcon, WumpusTreasureGiftIcon, WumpusCupGiftIcon, SelectBoxCheckIcon, WumpusPresentIcon,
} from '../../front_end_svgs/Strife_svgs';
import REACT_PORTAL from '../../../utils/ReactPortal_api_util';
import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
import Select from '@mui/material/Select';
import { styled } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";
import MenuItem from '@mui/material/MenuItem';
import PreviewGiftUPCModalContainer from '../preview_gift_upc/preview_gift_upc_modal_container';

const SelectInActiveChannel = styled(Select)(({ theme }) => ({

    fontSize: '16px',
    lineHeight: '20px',
    fontFamily: "gg sans",
    fontWeight: '400',
    color: '#dbdee1',

    '.MuiSelect-select.Mui-disabled': {
        opacity: '0.6',
        color: '#dbdee1',
        cursor: 'not-allowed',
        WebkitTextFillColor: '#dbdee1',
    },
    '.MuiSelect-select.Mui-disabled .MuiSvgIcon-root': {
        opacity: '0.6',
    },
    '.MuiSelect-select': {
        backgroundColor: '#1e1f22',
        borderColor: '#1e1f22',
        cursor: 'pointer',
        outline: '0',
        border: '1px solid transparent',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        borderRadius: '4px',
        width: '382px',
        minWidth: '382px',
        maxWidth: '382px',
        minHeight: '42.55px',
        height: '42.55px',
        maxHeight: '42.55px',


        '.selectRegionSvgCheckMark': {
            display: 'none !important',
        },

    },
    '.MuiSvgIcon-root': {
        color: '#dbdee1',
        height: `24px`,
        width: `24px`,
        fontSize: `1.7rem`
    },

    '.MuiSvgIcon-root.Mui-disabled': {
        opacity: '0.6',
    },

    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "none",
        borderRadius: "5px 5px 0 0",
        borderColor: 'transparent',
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },

    '.MuiOutlinedInput-input': {
        padding: '8px 8px 8px 12px',
    },


}));

const SelectChevron = (props) => {
    return (
        <SvgIcon {...props} aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M5.3 9.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z">
            </path>
        </SvgIcon>
    );
}

const SendAGiftModal = (props) => {

    const [currentSlide, setCurrentSlide] = React.useState(1);
    const [forward, setForward] = React.useState(true);
    const [slideAnimation, setSlideAnimation] = React.useState("");
    const [spinCubes, setSpinCubes] = React.useState(true);
    const [giftBg, setGiftBg] = React.useState(1);
    const [value, setValue] = React.useState("");
    const [count, setCount] = React.useState(190);
    const [popUpTop, setPopUpTop] = React.useState(0);
    const [popUpLeft, setPopUpLeft] = React.useState(0);
    const [showPopUp, setShowPopUp] = React.useState(false);
    const [selectedFriendId, setSelectedFriendId] = React.useState(0);
    const [selectedFriend, setSelectedFriend] = React.useState({});
    const [isSubModMounted, setIsSubModMounted] = React.useState(false);

    useEffect(() => {
        if (isSubModMounted === true) {
            window.removeEventListener('keyup', handleESC, false);
        }
        else if (isSubModMounted === false) {
            window.addEventListener('keyup', handleESC, false);
        }
        return function cleanUp () {
            window.removeEventListener('keyup', handleESC, false);
        }
    }, [isSubModMounted])

    useEffect(() => {
        if (showPopUp === true) {
            setIsSubModMounted(true);
        }
        else {
            setIsSubModMounted(false);
        }

    }, [showPopUp]);

    useEffect(() => {
        props.requestAllFriendships();
        setCurrentSlide(1);
        setTimeout(() => {
            setSpinCubes(false);
        }, 2000);
        return function cleanUp () {
            if (props.errors.length > 0) {
                props.removeSessionErrors();
            }
            if (props.friendErrors.length > 0) {
                props.removeFriendshipErrors();
            }
        }
    }, []);

    const handleSetSelectedFriend = (e) => {

        if (e.target.value === 0) {
            return;
        }
        else {
            setSelectedFriendId(e.target.value);
            props.fetchUser(e.target.value).then((action) => {
                const newfriend = action.user
                setSelectedFriend(newfriend);
            }, (error => {
                return;
            }))
        }
    }


    const handleESC = (e) => {
        e.stopPropagation();
        const keys = {
            27: () => {
                e.preventDefault();
                e.stopPropagation();
                handleCloseModal(e);
                window.removeEventListener('keyup', handleESC, false);
            },
        };
        if (isSubModMounted === false && keys[e.keyCode]) {
            keys[e.keyCode]();
        }

    }

    const handleCloseModal = (e, closeParentModal = false) => {
        e.preventDefault();
        e.stopPropagation();
        if (isSubModMounted === false) {
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
    }

    const setUpSubModRender = (e) => {
        e.preventDefault();
        let currTop = e.currentTarget.getBoundingClientRect().top;
        let currLeft = e.currentTarget.getBoundingClientRect().left;
        setPopUpTop(currTop);
        setPopUpLeft(currLeft);
        setShowPopUp(!showPopUp);
    }


    const handleSlideForward = (slideNumber) => {
        if (selectedFriendId === 0) {
            return;
        }

        else {
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

            default:
                setCurrentSlide(slideNumber);
                setSlideAnimation('');
                setForward(false);
                return;

        }
    }

    const handleCount = (e) => {
        if (e.currentTarget.value.length === 0) {
            setCount(190);
        }
        else {
            setCount(190 - e.currentTarget.value.length);
        }
    }


    const selectGiftBackGround = (giftBackGround) => {
        setGiftBg(giftBackGround);
    }

    const spinTheCubes = () => {
        setSpinCubes(true);
        setTimeout(() => {
            setSpinCubes(false);
        }, 2000);
    }

    let checkMark = (
        <SelectBoxCheckIcon className="selectRegionSvgCheckMark" />
    );

    let formStyles = {
        "1": { position: `relative`, width: `804px`, height: `469px`, overflow: `hidden` },
        "2": { position: `relative`, width: `408px`, height: `${props.productType === "Avatar_Decoration" ? `522px` : `658px`}`, overflow: `hidden` },
        "3": { position: `relative`, width: `408px`, height: `237px`, overflow: `hidden` },
    };

    let giftBackgrounds = {
        "1": <WumpusPresentIcon />,
        "2": <WumpusCakeGiftIcon />,
        "3": <WumpusCupGiftIcon />,
        "4": <WumpusTreasureGiftIcon />,
    }

    const menuProps = {
        PaperProps: {
            sx: {
                "& .MuiMenuItem-root": {
                    cursor: 'pointer',
                    color: '#dbdee1',
                    fontWeight: '500',
                    fontSize: '16px',
                    fontFamily: 'gg sans',
                    padding: '8px 8px 8px 16px',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'center',
                    boxSizing: 'border-box',

                },

                "& .MuiMenuItem-root.Mui-selected": {
                    backgroundColor: 'rgba(78, 80,88,0.6)',
                    color: 'white',
                },

                "& .MuiMenuItem-root.Mui-selected .selectRegionSvgCheckMark": {
                    color: 'hsl(235, 85.6%, 64.7%)',
                },

                "& .MuiMenuItem-root.Mui-selected:hover .selectRegionSvgCheckMark": {
                    color: 'hsl(235, 85.6%, 64.7%)',
                },

                "& .MuiMenuItem-root:hover": {
                    backgroundColor: 'rgba(78,80,88,0.3)',
                    color: '#dbdee1',

                },
                "& .MuiMenuItem-root:focus-within": {
                    backgroundColor: 'rgba(78,80,88,0.3)',
                    color: '#dbdee1',
                },
                "& .MuiMenuItem-root:focus": {
                    backgroundColor: 'rgba(78,80,88,0.3)',
                    color: '#dbdee1',
                },
                "& .MuiMenuItem-root:active": {
                    backgroundColor: 'rgba(78,80,88,0.3)',
                    color: '#dbdee1',
                },

                "& .MuiMenuItem-root.Mui-selected:active, & .MuiMenuItem-root.Mui-selected:focus-within, & .MuiMenuItem-root.Mui-selected:focus, & .MuiMenuItem-root.Mui-selected:hover": {
                    backgroundColor: 'rgba(78, 80,88,0.6)',
                    color: 'white',
                },

                "&::-webkit-scrollbar": {
                    width: "8px",
                    height: "8px",
                },
                "&::-webkit-scrollbar-corner": {
                    backgroundColor: 'transparent',
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: 'hsla(0, 0%, 0%, 0)',
                    border: '2px solid hsla(0, 0%, 0%, 0)',
                    borderColor: 'hsla(0, 0%, 0%, 0)',
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundClip: 'padding-box',
                    border: '2px solid transparent',
                    borderRadius: '4px',
                    minHeight: '40px',
                    backgroundColor: 'hsl(225, 7.1%, 11%)',
                }
            },

            style: {
                backgroundColor: '#2b2d31',
                color: '#dbdee1',
                fontSize: '16px',
                lineHeight: '20px',
                fontFamily: "gg sans",
                fontWeight: '400',
                paddingRight: '0px',
                maxHeight: '285.455px',
                width: '320px',
                boxSizing: 'border-box',
                border: '1px solid rgb(30,31,34)',
                borderRadius: '0 0 4px 4px',

            },
        },
    }

    const avatarDecorationStaticClassNames = {
        "graveyardCat": 'sgm-halloween-cat-grave',
        "ghosts": 'sgm-halloween-ghosts',
        "minions": 'sgm-halloween-minions',
        "jackOLantern": 'sgm-halloween-jack-o-lantern',
        "fallLeaves": 'sgm-fall-leaves-image',
        "pumpkinSpice": 'sgm-fall-pumpkin-spice-image',
        "frogHat": 'sgm-fall-frog-hat-image',
        "foxHat": 'sgm-fall-fox-hat-image',
        "flamingSword": 'sgm-fantasy-flaming-sword',
        "magicPotion": 'sgm-fantasy-magic-potion',
        "fairySprites": 'sgm-fantasy-fairy-sprites',
        "wizardsStaff": 'sgm-fantasy-wizard-staff',
        "glowingRunes": 'sgm-fantasy-glowing-runes',
        "defensiveShield": 'sgm-fantasy-defensive-shield',
        "skullMedallion": 'sgm-fantasy-skull-medallion',
        "treasureNKey": 'sgm-fantasy-treasure-n-key',
        "radiatingEnergy": 'sgm-anime-radiating-energy',
        "soulLeavingBody": 'sgm-anime-soul-leaving-body',
        "sweatDrops": 'sgm-anime-sweat-drops',
        "starryEyed": 'sgm-anime-starry-eyed',
        "inLove": 'sgm-anime-in-love',
        "shocked": 'sgm-anime-shocked',
        "angry": 'sgm-anime-angry',
        "toast": 'sgm-breakfast-items-toast',
        "morningCoffee": 'sgm-breakfast-items-morning-coffee',
        "friedEgg": 'sgm-breakfast-items-fried-eggs',
        "blueberryJam": 'sgm-breakfast-items-blueberry-jam',
        "donut": 'sgm-breakfast-items-donuts',
        "pancakes": 'sgm-breakfast-items-pancakes',
        "newYear2024": 'sgm-winter-wonderland-new-year-2024',
        "freshPine": 'sgm-winter-wonderland-fresh-pine',
        "snowGlobe": 'sgm-winter-wonderland-snow-globe',
        "stringLights": 'sgm-winter-wonderland-string-lights',
        "greenSmoke": 'sgm-ssxcore-greenSmokeScreen',
        "futuristicUI": 'sgm-ssxcore-tech-hud',
        "disxcoreHeadset": 'sgm-ssxcore-shakingBlueHeadset',
        "beamChop": 'sgm-monsters-beam-chop',
        "stinkUms": 'sgm-monsters-stinkums',
        "chuck": 'sgm-monsters-chuck',
        "winkle": 'sgm-monsters-winkle',
        "chewBert": 'sgm-monsters-chewbert',
        "doodleZard": 'sgm-monsters-doodlezard',
        "glop": 'sgm-monsters-glop',
        "gawbleHop": 'sgm-monsters-gawblehop',
        "cyberPunkGlitch": "sgm-cyber-punk-glitch",
        "cyberNetic": "sgm-cyber-punk-cybernetic",
        "digitalSunrise": "sgm-cyber-punk-digital-sunrise",
        "cyberNeticImplant": "sgm-cyber-punk-implant",
        "fanFlourish": "sgm-lunar-dragon-fanFlourish",
        "lunarLanterns": "sgm-lunar-dragon-lunarLanterns",
        "fireCrackers": "sgm-lunar-dragon-fireCrackers",
        "dragonsSmile": "sgm-lunar-dragon-dragonsSmile",
        "luckyEnvelopes": "sgm-lunar-dragon-luckyEnvelopes",
        "koiPond": "sgm-lunar-dragon-koiPond",
        "elementsFire": "sgm-elements-fire",
        "elementsWater": "sgm-elements-water",
        "elementsAir": "sgm-elements-air",
        "elementsEarth": "sgm-elements-earth",
        "elementsLightning": "sgm-elements-lightning",
        "elementsBalance": "sgm-elements-balance",
    }


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
    }

    let profileEffectPreviewStaticClassNames = {
        "fallFoliage": 'sgm-fall-foliage-static',
        "lillyPad": "sgm-fall-lilly-pad-life",
        "ghoulishGraffiti": "sgm-ghoulish-graffiti",
        "zombieSlime": "sgm-slime-zombie",
        "darkOmens": "sgm-ghost-skulls",
        "hydroBlast": "sgm-fantasy-hydro-blast",
        "sakuraDreams": "sgm-fantasy-sakura-dreams",
        "mysticVines": `sgm-fantasy-mystic-vines`,
        "pixieDust": "sgm-fantasy-pixie-dust",
        "magicHearts": "sgm-anime-magic-hearts",
        "shatterEffect": "sgm-anime-shatter",
        "shurikenStrike": "sgm-anime-shuriken-strike",
        "powerSurge": "sgm-anime-power-surge",
        "strifeOs": "sgm-breakfast-strife-cereal-o-s",
        "breakfastPlate": "sgm-breakfast-plate",
        "deckTheHalls": "sgm-winter-wonderland-deck-the-halls",
        "snowyShenanigans": "sgm-winter-wonderland-snowman",
        "boostedRelic": "sgm-disxcore-boosted-relic",
        "cyberSpace": "sgm-disxcore-cyberspace",
        "gooZilla": "sgm-monsters-gooZilla",
        "heartZilla": "sgm-monsters-heartZilla",
        "monsterPop": "sgm-monsters-monsterPop",
        "dragonDance": "sgm-lunar-dragon-dragonDance",
        "fortuneFlurry": "sgm-lunar-dragon-fortuneFlurry",
        "midnightCelebrations": "sgm-lunar-dragon-midnightCelebrations",
        "nightRunner": "sgm-cyber-punk-nightRunner",
        "uplinkError": "sgm-cyber-punk-uplinkError",
    }

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
    let slide1 = currentSlide === 1 ? (
        <div className="stsnm-slide-step-body">
            <div className="sgm-modal-bodyColumnMiddle">
                <div>
                    <div className='sgm-modal-giftMainAnimation'>
                        <div className='sgm-modal-giftMainAnimation-animated'>
                            {giftBackgrounds[giftBg]}
                        </div>
                        <div className='sgm-soundEmojiContainer'>
                            <div className='sgm-sound'>
                                <div className='sgm-sound-button-container'>
                                    <div className='sgm-sound-button' role='button' tabIndex={0}>
                                        <PartyHornIcon className="sgm-sound-button-icon" height={14} width={14} />
                                        <div className='sgm-sound-button-text'>Add sound effect</div>
                                    </div>
                                </div>
                            </div>
                            <div className='sgm-emoji'>
                                <div className='sgm-emoji-button-container'>
                                    <div className='sgm-emoji-button' role='button' tabIndex={0}>
                                        <AddReactionIcon className="sgm-emoji-button-icon" height={14} width={14} />
                                        <div className='sgm-sound-button-text'>Add emoji confetti</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sgm-modal-giftBoxOptionsContainer' aria-label='Customize your gift BOX:' role="radiogroup" aria-orientation='horizontal' aria-disabled={false}>
                        <div role='button' tabIndex={0} onClick={(e) => selectGiftBackGround(1)}>
                            <div className={`sgm-present-choice-img ${giftBg === 1 ? `sgm-prez-card-selected` : ``}`} alt=" " />
                        </div>
                        <div role='button' tabIndex={0} onClick={(e) => selectGiftBackGround(2)}>
                            <div className={`sgm-cake-choice-img ${giftBg === 2 ? `sgm-prez-card-selected` : ``}`} alt=" " />
                        </div>
                        <div role='button' tabIndex={0} onClick={(e) => selectGiftBackGround(3)}>
                            <div className={`sgm-cup-choice-img ${giftBg === 3 ? `sgm-prez-card-selected` : ``}`} alt=" " />
                        </div>
                        <div role='button' tabIndex={0} onClick={(e) => selectGiftBackGround(4)}>
                            <div className={`sgm-present-treasure-choice-img ${giftBg === 4 ? `sgm-prez-card-selected` : ``}`} alt=" " />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="sgm-modal-bodyColumnRight">
                <div className='sgm-modal-send-to'>
                    <h1 className="sgm-modal-send-to-h1">Send to</h1>
                    <SelectInActiveChannel
                        value={selectedFriendId}
                        onChange={handleSetSelectedFriend}
                        MenuProps={menuProps}
                        IconComponent={SelectChevron}
                    >

                        <MenuItem value={0} disabled key={'selectAFriend'} sx={{ color: `var(--text-muted)!important` }}>
                            {'Select a friend'}
                            {selectedFriendId === 0 ? (checkMark) : ("")}
                        </MenuItem>
                        {props.friends.map((friend) => {
                            return (
                                <MenuItem value={friend.id} key={friend.id}>
                                    <div className="sgm-iac-menu-item-container">
                                        <div className="sgm-select-mui-prefix">
                                            <div className="sgm-select-mui-wrapper" role="img" aria-hidden="false">
                                                <svg width="20" height="20" viewBox="0 0 20 20" className="sgm-select-friends-svg sgm-select-friends-mask" aria-hidden="true">
                                                    <foreignObject x="0" y="0" width="20" height="20" mask="url(#svg-mask-avatar-default)">
                                                        <div className="sgm-select-friends-avatar-stack">
                                                            {
                                                                friend.photo === undefined ? (
                                                                    <img className={`sgm-select-friends-avatar-img color-${friend.color_tag}`} src={DefaultPFPSVG} alt=" " aria-hidden="true" />
                                                                ) : (
                                                                    <img className="sgm-select-friends-avatar-img" src={friend.photo} alt=" " aria-hidden="true" />
                                                                )
                                                            }
                                                        </div>
                                                    </foreignObject>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="sgm-iac-menu-item-title">
                                            {friend.username}#{friend.strife_id_tag}
                                        </div>
                                    </div>
                                    {selectedFriendId === friend.id ? (checkMark) : ("")}
                                </MenuItem>
                            )
                        })}

                    </SelectInActiveChannel>
                </div>
                <div className='sgm-modal-send-to-body sgm-modal-custom-giftMessage'>
                    <div className='sgm-modal-customizationSection'>
                        <h1 className="sgm-modal-customizationSection-h1">Add message (optional)</h1>
                        <div className="sgm-channelTextArea">
                            <div className="sgm-ta-wrapper-scrollable-container sgm-customGiftMessage sgm-ta-wrapper chat-input-tsa-webkit-scroll">
                                <div className="sgm-ta-wrapper-inner">
                                    <textarea className="sgm-chat-box-area"
                                        id="sgm-ta"
                                        spellCheck={false}
                                        value={value}
                                        autoCorrect="off"
                                        autoFocus={false}
                                        rows={3}
                                        maxLength={190}
                                        minLength={0}
                                        onChange={(e) => {
                                            handleCount(e);
                                            setValue(e.currentTarget.value);
                                        }}
                                    ></textarea>
                                </div>
                            </div>
                            <div className='sgm-characterCounterContainer'>
                                <div className='sgm-flairContainer'>
                                    <span aria-hidden="true" aria-label={`${count} characters remaining`}>{`${count}`}</span>
                                </div>
                                <div className='tmaxlen'>{`${count}`} characters remaining</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sgm-modal-giftPreview'>
                    <div className='sgm-modal-giftPreview-title-container'>
                        <h1 className='sgm-modal-giftPreview-title-h1'>Your gift</h1>
                        {
                            selectedFriend?.id ? (
                                <div className='sgm-modal-giftPreview-link' aria-expanded="false" role="button" tabIndex={0} onClick={(e) => { setUpSubModRender(e); }}>
                                    <div className='sgm-modal-giftPreview-link-text'>Preview on your friend's profile</div>
                                </div>
                            ) : ("")
                        }

                    </div>
                    <div className='sgm-modal-giftPreview-container'>
                        {
                            props.productType === "Avatar_Decoration" ? (
                                <img className={`${avatarDecorationStaticClassNames[props.productKey]}`} alt=" " />
                            ) : (
                                <div className='sgm-modal-profileEffect-container'>
                                    <img className="sgm-modal-upc-preview" alt=" " />
                                    <img className={`${profileEffectPreviewStaticClassNames[props.productKey]}`} alt=" " style={{ top: `0px` }} />
                                </div>
                            )
                        }

                        <div className='sgm-modal-prod-preview-text-container'>
                            <div className='sgm-modal-prod-item-name'>{`${props.productName}`}</div>
                            <div className='sgm-modal-prod-item-type'>{`${props.productType === "Avatar_Decoration" ? "Avatar Decoration" : "Profile Effect"}`}</div>
                        </div>
                        <div className='sgm-modal-prod-price'>{`$${props.productPrice}`}</div>
                    </div>

                </div>

            </div>
        </div>
    ) : ("");


    let slide2 = currentSlide === 2 ? (
        <div className="stsnm-prod-slide-step2">
            {
                props.productType === "Avatar_Decoration" ? (
                    <div className="sgm-avatar-deco-giftMainAnimationWrapper">
                        <div className='sgm-avatar-deco-preview-inner-wrapper'>
                            <svg width="152" height="152" viewBox="0 0 152 152" className="ssxcore-svg-mask" aria-hidden="true">
                                <foreignObject x="0" y="0" width="152" height="152" mask="url(#svg-mask-avatar-default)">
                                    <div className="ssxcore-avatar-stack">
                                        <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
                                    </div>
                                </foreignObject>
                            </svg>
                            <svg width="182.4" height="182.4" viewBox="0 0 182.4 182.4" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
                                <foreignObject x="0" y="0" width="182.4" height="182.4" >
                                    <div className="ssxcore-avatar-stack">
                                        <img className={`${avatarDecorationAnimatedClassNames[props.productKey]}`} alt=" " style={{ top: `0px` }} />
                                    </div>
                                </foreignObject>
                            </svg>
                        </div>
                    </div>
                ) : (

                    <div className='sgm-profileEffectGiftPreviewContainer'>
                        <img className='sgm-profileEffectGiftPreviewBG' alt=" " />
                        <div className='shop-item-upc-profile-effects'>
                            <div className='shop-item-upc-profile-effects-inner'>
                                {profileEffectPreviewImgs[props.productKey]}
                            </div>
                        </div>
                    </div>

                )
            }
            <div className="sgm-avatar-deco-giftMainContent">
                <h1 className='sgm-modal-send-to-h1'>Send To</h1>
                <div className="sgm-giftRecipientInfo">
                    <div className="sgm-select-mui-wrapper" role="img" aria-hidden="false">
                        <svg width="20" height="20" viewBox="0 0 20 20" className="sgm-select-friends-svg sgm-select-friends-mask" aria-hidden="true">
                            <foreignObject x="0" y="0" width="20" height="20" mask="url(#svg-mask-avatar-default)">
                                <div className="sgm-select-friends-avatar-stack">
                                    {
                                        selectedFriend.photo === undefined ? (
                                            <img className={`sgm-select-friends-avatar-img color-${selectedFriend.color_tag}`} src={DefaultPFPSVG} alt=" " aria-hidden="true" />
                                        ) : (
                                            <img className="sgm-select-friends-avatar-img" src={selectedFriend.photo} alt=" " aria-hidden="true" />
                                        )
                                    }
                                </div>
                            </foreignObject>
                        </svg>
                    </div>
                    <div className='sgm-gift-recipientName-review'>{selectedFriend?.username}</div>
                    <div className='sgm-gift-recipientTag-review'>#{selectedFriend?.strife_id_tag}</div>
                </div>
            </div>
            <h1 className='sgm-modal-send-to-h1'>Gift</h1>
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
                                By clicking "Buy Gift", you agree to the {`${` `}`}
                                <a className="purchase-prod-anchor" href="https://support.discord.com/hc/articles/4410339366295" target='_blank' rel="noreferrer noopener">Paid Services Terms</a>.
                            </div>
                            <div className='purchase-prod-mod-divider'></div>
                        </div>
                        <div>
                            This purchase is non-refundable. Once you complete your purchase, the item will be sent to the recipient and can be accessed in their User Profile settings.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : ("");



    let slide3 = currentSlide === 3 ? (
        <div className="stsnm-prod-slide-step2">
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
    ) : ("")

    let buttonStyles = {
        "1": `sbm-button-footer-container`,
        "2": 'sbm-button-footer-container',
        "3": 'npsm-button-footer-container-reversed',
    };
    let modSizingStyles = {
        "1": `stsnm-slider-body-large`,
        "2": ``,
        "3": ``
    };
    let overallModalSizing = {
        "1": `large-wide-non-full-screen-modal-sizing`,
        "2": `small-wide-non-full-screen-modal-sizing`,
        "3": `small-wide-non-full-screen-modal-sizing`,

    }
    let modalTitle = {
        "1": `Send a gift`,
        "2": `Review your gift`,
        "3": `Thank You!`,
    }


    const renderPreviewGiftUPCModal = () => {
        if (showPopUp === true) {
            return (
                <PreviewGiftUPCModalContainer member={selectedFriend || props.currentUser}
                    setShowPopUp={setShowPopUp} productName={props.productName}
                    productType={props.productType} productKey={props.productKey}
                    productPrice={props.productPrice} top={popUpTop} left={popUpLeft}
                />
            )
        }
    }



    return (

        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            {renderPreviewGiftUPCModal()}
            <div className='sgm-modal-container-layer'>
                <div className='sgm-modal-backdrop'></div>
                <div className='sgm-modal-layer'>
                    <div className='sgm-shaker'>
                        <div className='sgm-modal-focus-lock' onClick={(e) => e.stopPropagation()}>
                            <div className={`sgm-modal-root ${overallModalSizing[currentSlide]} sgm-with-header`} id="server-boost-modal">
                                <div className='sgm-modal-content' style={{ flex: `0 0 auto` }}>
                                    <h1 className='sgm-modal-content-h1'>{modalTitle[currentSlide]}</h1>
                                    <button className='sgm-modal-close-button' type="button" onClick={(e) => handleCloseModal(e)}>
                                        <div className='global-button-contents'>
                                            <CloseXIcon height={24} width={24} />
                                        </div>
                                    </button>
                                </div>
                                <div className='sgm-modal-scroller-body-content global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                                    <div style={formStyles[currentSlide]}>
                                        <div style={{ position: `absolute`, flexDirection: `column`, backfaceVisibility: `hidden`, transform: `scale(1,1)`, left: `auto`, right: `auto` }}>
                                            <div className={`stsnm-slider-body ${modSizingStyles[currentSlide]} ${slideAnimation}`}>
                                                {slide1}
                                                {slide2}
                                                {slide3}
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
                                                    <div className="bsspm-foot-right">
                                                        <button type="button" className="bsspm-continue-button"
                                                            disabled={selectedFriend?.id ? false : true}
                                                            onClick={(e) => {
                                                                handleSlideForward(2);
                                                            }}>
                                                            <div className="look-filled-button-contents global-button-contents">Next</div>
                                                        </button>
                                                    </div>
                                                </>

                                            ) : (null)
                                        }
                                        {
                                            currentSlide === 2 ? (

                                                <>
                                                    <div className="sgm-back-step">
                                                        <a className='sgm-back-step-link' role='button' tabIndex={0} onClick={(e) => handleSlideBackward(1)}>Back</a>
                                                    </div>

                                                    <div className="bbsspm-priv-lock-icon-payment-footer">
                                                        <PrivateLockIcon className="bbsspm-priv-lock-icon" width={18} height={18} />
                                                        <div className="bbsspm-priv-lock-icon-subtitle">Secure</div>
                                                    </div>
                                                    <div className="bsspm-foot-right">
                                                        <button type="button" className="npsm-upgrade-to-nitro-button"
                                                            onClick={(e) => handleSlideForward(3)}>
                                                            <div className="look-filled-button-contents global-button-contents">Buy Gift</div>
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (null)
                                        }
                                        {
                                            currentSlide === 3 ? (
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
                                <div></div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </REACT_PORTAL>
    )
}
export default SendAGiftModal;