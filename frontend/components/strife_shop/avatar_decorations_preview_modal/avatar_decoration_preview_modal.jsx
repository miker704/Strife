import React from "react";
import { useEffect, useState, useRef } from "react";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { AddCircleIcon, ChatPresentIcon, CloseXIcon, NitroSmilingFaceIcon, StrifeBotTagIcon, StrifeNitroBadgeIcon } from "../../front_end_svgs/Strife_svgs";
import { returnUserOnlineActivityStatusBadgeMaskIMG } from "../../../utils/user_online_activity_status_badge_api_util";
import { returnUserBadgeFillColor } from "../../../utils/user_status_badge_color_api_util";
import SubscribeToStrifeNitroProModalContainer from "../../nitro/subscribe_to_nitro_modal/subscribe_to_nitro_pro_modal_container";
import SubscribeToStrifeNitroBasicModalContainer from "../../nitro/subscribe_to_nitro_basic_modal/subscribe_to_nitro_basic_modal_container";
import PurchaseProductModalContainer from "../purchase_product_modal/purchase_product_modal_container";
import SendAGiftModalContainer from "../send_a_gift_modal/send_a_gift_modal_container";
import { useFormatTimeStampMessageBody } from "../../../utils/useTimeStamp_api_utils";
import { Tooltip } from 'react-tooltip';

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
        subToNitroBasic: false,
        purchaseProductModal: false,
        sendGiftModal: false,
    });

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const popUpRef = useRef(null);

    const openModal = (field, isGift = false, options = {}) => {
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
        "monsters-effect": { background: `linear-gradient(135deg, rgb(0, 69, 92), rgb(0, 42, 56))` },
        "cyber-punk-effect": { background: `linear-gradient(135deg, rgb(32, 20, 107), rgb(5, 1, 0))` },
        "lunar-dragon-effect": { background: `linear-gradient(135deg, rgb(143, 0, 0), rgb(92, 0, 0))` },
        "elements-effect": { background: `linear-gradient(135deg, rgb(27, 27, 161), rgb(0, 22, 41))` },
        "spring-toons-effect": { background: `linear-gradient(135deg, rgb(255, 255, 255), rgb(113, 191, 254))` },
        "anime-v2-effect": { background: `linear-gradient(135deg, rgb(173, 255, 254), rgb(2, 61, 116))` },
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
        "elements-effect": "ppe-elements-bg-banner",
        "spring-toons-effect": "ppe-spring-toons-bg-banner",
        "anime-v2-effect":"ppe-anime-v2-bg-banner",
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
        "elements-effect": "ppe-elements-title-banner",
        "spring-toons-effect": "ppe-spring-toons-title-banner",
        "anime-v2-effect":"ppe-anime-v2-title-banner",
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
        "newYear2024": 3.99,
        "freshPine": 3.99,
        "snowGlobe": 3.99,
        "stringLights": 3.99,
        "greenSmoke": 2.99,
        "futuristicUI": 2.99,
        "disxcoreHeadset": 2.99,
        "beamChop": 3.99,
        "stinkUms": 3.99,
        "chuck": 3.99,
        "winkle": 3.99,
        "chewBert": 3.99,
        "doodleZard": 3.99,
        "glop": 3.99,
        "gawbleHop": 3.99,
        "fanFlourish": 4.99,
        "lunarLanterns": 4.99,
        "fireCrackers": 4.99,
        "dragonsSmile": 4.99,
        "luckyEnvelopes": 4.99,
        "koiPond": 4.99,
        "cyberPunkGlitch": 4.99,
        "cyberNetic": 4.99,
        "digitalSunrise": 4.99,
        "cyberNeticImplant": 4.99,
        "elementsFire": 4.99,
        "elementsWater": 4.99,
        "elementsAir": 4.99,
        "elementsEarth": 4.99,
        "elementsLightning": 4.99,
        "elementsBalance": 4.99,
        "springToonsHoneyBlossom": 4.99,
        "springToonsDandelionDuo": 4.99,
        "springToonsHughTheRainbow": 4.99,
        "springToonsStrawberryVine": 4.99,
        "springToonsButterflies": 4.99,
        "springToonsPetalPack": 4.99,
        "animeCatEars": 4.99,
        "animeKiEnergy": 4.99,
        "animeHeartBloom": 4.99,
        "animeDismay": 4.99,
        "animeRage": 4.99,
        "animeInTears": 4.99,
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
        "newYear2024": 4.99,
        "freshPine": 4.99,
        "snowGlobe": 4.99,
        "stringLights": 4.99,
        "greenSmoke": 3.99,
        "futuristicUI": 3.99,
        "disxcoreHeadset": 3.99,
        "beamChop": 4.99,
        "stinkUms": 4.99,
        "chuck": 4.99,
        "winkle": 4.99,
        "chewBert": 4.99,
        "doodleZard": 4.99,
        "glop": 4.99,
        "gawbleHop": 4.99,
        "fanFlourish": 5.99,
        "lunarLanterns": 5.99,
        "fireCrackers": 5.99,
        "dragonsSmile": 5.99,
        "luckyEnvelopes": 5.99,
        "koiPond": 5.99,
        "cyberPunkGlitch": 5.99,
        "cyberNetic": 5.99,
        "digitalSunrise": 5.99,
        "cyberNeticImplant": 5.99,
        "elementsFire": 5.99,
        "elementsWater": 5.99,
        "elementsAir": 5.99,
        "elementsEarth": 5.99,
        "elementsLightning": 5.99,
        "elementsBalance": 5.99,
        "springToonsHoneyBlossom": 5.99,
        "springToonsDandelionDuo": 5.99,
        "springToonsHughTheRainbow": 5.99,
        "springToonsStrawberryVine": 5.99,
        "springToonsButterflies": 5.99,
        "springToonsPetalPack": 5.99,
        "animeCatEars": 5.99,
        "animeKiEnergy": 5.99,
        "animeHeartBloom": 5.99,
        "animeDismay": 5.99,
        "animeRage": 5.99,
        "animeInTears": 5.99,
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
        "newYear2024": "New Year",
        "freshPine": "Fresh Pine",
        "snowGlobe": "Snowglobe",
        "stringLights": "String Lights",
        "greenSmoke": "Smoke",
        "futuristicUI": "Futuristic UI",
        "disxcoreHeadset": "DISXCORE Headset",
        "beamChop": "Beamchop",
        "stinkUms": "Stinkums",
        "chuck": "Chuck",
        "winkle": "Winkle",
        "chewBert": "Chewbert",
        "doodleZard": "Doodlezard",
        "glop": "Glop",
        "gawbleHop": "Gawblehop",
        "fanFlourish": "Fan Flourish",
        "lunarLanterns": "Lunar Lanterns",
        "fireCrackers": "Firecrackers",
        "dragonsSmile": "Dragon's Smile",
        "luckyEnvelopes": "Lucky Envelopes",
        "koiPond": "Koi Pond",
        "cyberPunkGlitch": "Glitch",
        "cyberNetic": "Cybernetic",
        "digitalSunrise": "Digital Sunrise",
        "cyberNeticImplant": "Implant",
        "elementsFire": "Fire",
        "elementsWater": "Water",
        "elementsAir": "Air",
        "elementsEarth": "Earth",
        "elementsLightning": "Lightning",
        "elementsBalance": "Balance",
        "springToonsHoneyBlossom": "Honeyblossom",
        "springToonsDandelionDuo": "Dandelion Duo",
        "springToonsHughTheRainbow": "Hugh the Rainbow",
        "springToonsStrawberryVine": "Strawberry Vine",
        "springToonsButterflies": "Butterflies",
        "springToonsPetalPack": "The Petal Pack",
        "animeCatEars": "Cat Ears",
        "animeKiEnergy": "Ki Energy",
        "animeHeartBloom": "Heartbloom",
        "animeDismay": "Dismay",
        "animeRage": "Rage",
        "animeInTears": "In Tears",

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
        "newYear2024": "Ringing in 2024!",
        "freshPine": "Ah...the smell of Winter.",
        "snowGlobe": "Try not to shake too hard.",
        "stringLights": "String up some holiday cheer.",
        "greenSmoke": "Now you see me, now you don't.",
        "futuristicUI": "BEEP BOOP.",
        "disxcoreHeadset": "Everything sounds better with these on.",
        "beamChop": "Awh it's so cu- AHHH",
        "stinkUms": "Questionably dealt. Definitely smelt.",
        "chuck": "Wanna see what I had for lunch earlier?",
        "winkle": "Eye love you.",
        "chewBert": "Me chew gum, make bubbles, big fun.",
        "doodleZard": "You might want to wash up after.",
        "glop": "Is there something in my teeth?",
        "gawbleHop": "Talk about being tongue-tied.",
        "fanFlourish": "Incredibly fan-tastic.",
        "lunarLanterns": "Light the night.",
        "fireCrackers": "Don't try this at home!",
        "dragonsSmile": "A dragon's grin fills your year with laughs.",
        "luckyEnvelopes": "Capacity: 888 coins.",
        "koiPond": "Swimming in an eternal, peaceful circle.",
        "cyberPunkGlitch": "Neurovisor disruption detected, please standby.",
        "cyberNetic": "Cybernetic visuals now online. Welcome aboard, runner.",
        "digitalSunrise": "It's a new day in cyberspace.",
        "cyberNeticImplant": "Get ready to jack in.",
        "elementsFire": "Ignite your flame within.",
        "elementsWater": "Control the ebb and flow.",
        "elementsAir": "Will the wind.",
        "elementsEarth": "Call the might of the earth.",
        "elementsLightning": "Electrify your presence.",
        "elementsBalance": "Harness the elements.",
        "springToonsHoneyBlossom": "Buzz meets bloom.",
        "springToonsDandelionDuo": "Strengths: Cute and fluffy. Weaknesses: The breeze.",
        "springToonsHughTheRainbow": "Does he have a hue for every mood?",
        "springToonsStrawberryVine": "Now that's a sweet harvest.",
        "springToonsButterflies": "We shall tickle the clouds today - join us!",
        "springToonsPetalPack": "Comes with sunshine and smiles.",
        "animeCatEars": "≽ ^ • ⩊ • ^ ≼",
        "animeKiEnergy": "Focus from within.",
        "animeHeartBloom": "Let your love blossom.",
        "animeDismay": "Not like this...",
        "animeRage": "THAT'S IT.",
        "animeInTears": "*sobbing*",
    }

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
        },
        "elements-effect": {
            background: `rgb(242, 135, 13)`,
            color: `rgb(0, 0,0)`,
        },
        "spring-toons-effect": {
            background: `rgb(251, 127, 50)`,
            color: `rgb(0, 0,0)`,
        },
        "anime-v2-effect": {
            background: `rgb(121, 93, 223)`,
            color: `rgb(0,0,0)`
        },
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
        },
        "elements-effect": {
            background: `linear-gradient(90deg, rgb(235, 190, 25), rgb(242, 135, 13))`,
            color: `rgb(0,0,0)`,
        },
        "spring-toons-effect": {
            background: `linear-gradient(90deg, rgb(237, 213, 80), rgb(251, 127, 50))`,
            color: `rgb(0,0,0)`,
        },
        "anime-v2-effect": {
            background: `linear-gradient(90deg, rgb(66, 183, 255), rgb(121, 93, 223))`,
            color: `rgb(0,0,0)`,
        },
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

        "newYear2024": (
            <>
                <img className='ppe-winter-wonderland-new-year-2024' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "freshPine": (
            <>
                <img className='ppe-winter-wonderland-fresh-pine' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "snowGlobe": (
            <>
                <img className='ppe-winter-wonderland-snow-globe' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "stringLights": (
            <>
                <img className='ppe-winter-wonderland-string-lights' alt=" " style={{ top: `0px` }} />
            </>
        ),

        "greenSmoke": (
            <>
                <img className='ppe-ssxcore-greenSmokeScreen' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "futuristicUI": (
            <>
                <img className='ppe-ssxcore-tech-hud ' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "disxcoreHeadset": (
            <>
                <img className='ppe-ssxcore-shakingBlueHeadset' alt=" " style={{ top: `0px` }} />
            </>
        ),

        "beamChop": (
            <>
                <img className='ppe-monsters-beam-chop' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "stinkUms": (
            <>
                <img className='ppe-monsters-stinkums' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "chuck": (
            <>
                <img className='ppe-monsters-chuck' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "winkle": (
            <>
                <img className='ppe-monsters-winkle' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "chewBert": (
            <>
                <img className='ppe-monsters-chewbert' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "doodleZard": (
            <>
                <img className='ppe-monsters-doodlezard' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "glop": (
            <>
                <img className='ppe-monsters-glop' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "gawbleHop": (
            <>
                <img className='ppe-monsters-gawblehop' alt=" " style={{ top: `0px` }} />
            </>
        ),

        "fanFlourish": (
            <>
                <img className='ppe-lunar-dragon-fanFlourish' alt=" " style={{ top: `0px` }} />
            </>
        ),

        "lunarLanterns": (
            <>
                <img className='ppe-lunar-dragon-lunarLanterns' alt=" " style={{ top: `0px` }} />
            </>
        ),


        "fireCrackers": (
            <>
                <img className='ppe-lunar-dragon-fireCrackers' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "dragonsSmile": (
            <>
                <img className='ppe-lunar-dragon-dragonsSmile' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "luckyEnvelopes": (
            <>
                <img className='ppe-lunar-dragon-luckyEnvelopes' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "koiPond": (
            <>
                <img className='ppe-lunar-dragon-koiPond' alt=" " style={{ top: `0px` }} />
            </>
        ),


        "cyberPunkGlitch": (
            <>
                <img className='ppe-cyber-punk-glitch' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "cyberNetic": (
            <>
                <img className='ppe-cyber-punk-cybernetic' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "digitalSunrise": (
            <>
                <img className='ppe-cyber-punk-digital-sunrise' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "cyberNeticImplant": (
            <>
                <img className='ppe-cyber-punk-implant' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "elementsFire": (
            <>
                <img className='ppe-elements-fire' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "elementsWater": (
            <>
                <img className='ppe-elements-water' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "elementsAir": (
            <>
                <img className='ppe-elements-air' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "elementsEarth": (
            <>
                <img className='ppe-elements-earth' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "elementsLightning": (
            <>
                <img className='ppe-elements-lightning' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "elementsBalance": (
            <>
                <img className='ppe-elements-balance' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "springToonsHoneyBlossom": (
            <>
                <img className='ppe-spring-toons-honey-blossom' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "springToonsDandelionDuo": (
            <>
                <img className='ppe-spring-toons-dandelion-duo' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "springToonsHughTheRainbow": (
            <>
                <img className='ppe-spring-toons-hugh-the-rainbow' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "springToonsStrawberryVine": (
            <>
                <img className='ppe-spring-toons-strawberry-vine' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "springToonsButterflies": (
            <>
                <img className='ppe-spring-toons-butterflies' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "springToonsPetalPack": (
            <>
                <img className='ppe-spring-toons-petal-pack' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "animeCatEars": (
            <>
                <img className='ppe-anime-cat-ears' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "animeKiEnergy": (
            <>
                <img className='ppe-anime-ki-energy' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "animeHeartBloom": (
            <>
                <img className='ppe-anime-heart-bloom' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "animeDismay": (
            <>
                <img className='ppe-anime-dismay' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "animeRage": (
            <>
                <img className='ppe-anime-rage' alt=" " style={{ top: `0px` }} />
            </>
        ),
        "animeInTears": (
            <>
                <img className='ppe-anime-inTears' alt=" " style={{ top: `0px` }} />
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
        <div className={`upc-pfp-icon-wrapper ${props.currentUser.banner ? `pro` : ``}`} role="button" tabIndex={0}>
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
                    <foreignObject x="0" y="0" width="96" height="96" >
                        <div className="ssxcore-avatar-stack">
                            {avatarDecorationPreviewImgs[props.avatarEffectObj]}
                        </div>
                    </foreignObject>
                </svg>
            </div>

        </div>
    );

    let mp = (
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
                <svg width="96" height="96" viewBox="0 0 96 96" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
                    <foreignObject x="0" y="0" width="96" height="96" >
                        <div className="ssxcore-avatar-stack">
                            {avatarDecorationPreviewImgs[props.avatarEffectObj]}
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
            <a className='usm-user-strife-tag-badge-anchor' role="button" data-tooltip-position-strategy='fixed' data-tooltip-id="modal-tool-tip-usm"
                data-tooltip-content={`Originally known as ${props.currentUser.username}#${props.currentUser.strife_id_tag}`}>
                <img className='usm-user-strife-tag-badge' alt=" " />
            </a>
        </div>
    );


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
                        onClick={(e) => { e.stopPropagation(); openModal("purchaseProductModal", false); }}
                        style={buttonStyles[props.profileEffectThemeType]}
                    >
                        <div className="global-button-contents look-filled-button-contents">
                            Buy Decoration
                        </div>
                    </button>
                    <button type="button" className="shop-buttons shop-item-gift-button global-button-growth button-look-filled"
                        data-tooltip-content={"Send a gift"}
                        data-tooltip-id={`sbmodal-thread-tip-${props.avatarEffectObj}`} data-tooltip-place="top"
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
            <Tooltip className="shop-avatar-deco-tool-tip" id={`sbmodal-thread-tip-${props.avatarEffectObj}`} place="top" closeOnResize={true} closeOnScroll={true} />
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
                    productPrice={strikeThroughPrice[props.avatarEffectObj]} productName={avatarDecorationName[props.avatarEffectObj]}
                />
            )
        }
    }
    const renderSendGiftModal = () => {
        if (currentSubModal.sendGiftModal === true) {
            return (
                <SendAGiftModalContainer closeSubMod={closeForm} formName={"sendGiftModal"} productType={"Avatar_Decoration"}
                    productPrice={strikeThroughPrice[props.avatarEffectObj]} productName={avatarDecorationName[props.avatarEffectObj]} productKey={props.avatarEffectObj}
                />
            )
        }
    }

    const renderTextTheme = () => {
        return props.profileEffectThemeType === "spring-toons-effect" ? `ppem-darkText-mod` : ``;
    }


    return (
        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="ppe-modal-container-layer" onClick={(e) => handleCloseModal(e)}>
                <div className="ppe-modal-backdrop" style={{ opacity: `${isSubModMounted ? 0 : 0.7}` }}></div>
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
                                                        <foreignObject x="0" y="0" width="182.4" height="182.4" >
                                                            <div className="ssxcore-avatar-stack">
                                                                {avatarDecorationPreviewImgs[props.avatarEffectObj]}
                                                            </div>
                                                        </foreignObject>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="ppe-profile-effect-description-container">
                                                    <div className={`ppe-type-pill-label ${props.profileEffectThemeType === "spring-toons-effect" ? `ppem-darkText-deco-label-mod` : ``}`}>
                                                        <div className="ppe-type-pill-label-text">
                                                            Avatar Decoration
                                                        </div>
                                                    </div>

                                                    <h2 className={`ppe-profile-effect-h2 ${renderTextTheme()}`}>{`${avatarDecorationName[props.avatarEffectObj]}`}</h2>
                                                    <div className={`ppe-profile-effect-small-text-description ${renderTextTheme()}`}>{`${avatarDecorationDescription[props.avatarEffectObj]}`}</div>

                                                    {props.nitroExclusive ? (<div className="ppe-price-tags-h2-med-semi-bold">Included with Nitro</div>) : (
                                                        <div className="ppe-ped-price-tags-container">
                                                            <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
                                                                {`$${strikeThroughPrice[props.avatarEffectObj]}`}
                                                            </h2>
                                                            <h2 className={`ppe-profile-effect-price-tags-h2-xsmall-med-bold ${renderTextTheme()}`} >
                                                                <StrifeNitroBadgeIcon className="ppe-ped-nitro-ball-icon-faded" height={24} width={24} />
                                                                {`$${salePrice[props.avatarEffectObj]} with Nitro. `}
                                                                <div className="ppe-ped-premium-unlock-hook" role="button" tabIndex={0} onClick={(e) => { e.stopPropagation(); openModal("subToNitroBasic"); }}>Subscribe now</div>
                                                            </h2>
                                                        </div>
                                                    )}
                                                </div>
                                                {buttonGroup}
                                                <div className={`ppe-ped-fine-print-disclaimer ${renderTextTheme()}`}>
                                                    {`${props.nitroExclusive ? `This bonus item is yours to keep and use anytime with an active Nitro subscription.` : `Once purchased, this decoration will be added to your collection and can be used anytime`}`}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ppe-modal-collectible-preview-container-Chat">
                                            <div className={`ppe-collectible-preview-category-banner ${profileEffectBgBanner[props.profileEffectThemeType]}`}></div>
                                            <div className="ppepes-preview-container-inner">
                                                <div className={upcColorPallete}>
                                                    <div className={`user-mini-upc-inner ${props.currentUser.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
                                                        {memberBanner}
                                                        {mp}
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



                                                <Tooltip className="usm-tool-tip" id="modal-tool-tip-usm" place="top" closeOnResize={true} closeOnScroll={true} />
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
                                                            <NitroSmilingFaceIcon height={24} width={24} className="ppem-AD-Chat-mock-message-input-button" />
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
                        {renderNitroBasicModal()}
                        {renderPurchaseProductModal()}
                        {renderSendGiftModal()}
                    </div>
                </div>
            </div>
        </REACT_PORTAL >
    );

}

export default AvatarDecorationPreviewModal;
