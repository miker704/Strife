import React from "react";
import { ChatPresentIcon, StrifeNitroBadgeIcon } from "../../front_end_svgs/Strife_svgs";
import { Tooltip } from "react-tooltip";

const ProfileEffectItemCard = (props) => {


    const [hovered, setHovered] = React.useState(false);
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
            background: `var(--brand-experiment)`,
            color: `var(--white-500)`
        },
        "cyber-punk-effect": {
            background: `var(--brand-experiment)`,
            color: `var(--white-500)`
        },
        "elements-effect": {
            background: `var(--brand-experiment)`,
            color: `var(--white-500)`
        }
    }


    const buttonSection = props.nitroExclusive ? (
        <div className="shop-item-card-inner-hover">
            <div className="shop-item-card-inner-hover-upsell-container">
                <button type="button" className={`shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width`}
                    onClick={(e) => { e.stopPropagation(); props.openModalType("subToNitroBasic"); }}>
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
        <div className="shop-item-card-inner-hover">
            <div className="shop-item-card-button-container">
                <button type="button" className={`shop-buttons shop-item-purchase-button global-button-size-medium button-look-filled global-button-full-width`}
                    onClick={(e) => {
                        e.stopPropagation();
                        props.openModalType("purchaseProductModal", "", "", "", false, props.nitroExclusive, props.profileEffectTitle, props.profileEffectPrice);

                    }}
                    style={props.buttonStyleProps}
                >
                    <div className="global-button-contents look-filled-button-contents">
                        {`Buy for $${props.profileEffectPrice}`}
                    </div>
                </button>
                <button type="button" className="shop-buttons shop-item-gift-button global-button-growth button-look-filled"
                    data-tooltip-content={"Send a gift"}
                    data-tooltip-id={`sbm-thread-tip-${props.profileThemeObj}`} data-tooltip-place="top"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        props.openModalType("sendGiftModal", "", "", "", false, props.nitroExclusive, props.profileEffectTitle, props.profileEffectPrice, props.profileThemeObj, "Profile_Effect");

                    }}
                    style={giftColor[props.profileEffectTheme]}
                >
                    <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
                        <ChatPresentIcon height={24} width={24} />
                    </div>
                </button>
            </div>
        </div>
    )

    let profileEffectPreviewImgs = {
        "fallFoliage": (
            <>
                <img className='shop-item-fall-foliage-static' alt=" " style={{ top: `0px` }} />
                <img className={`shop-item-fall-foliage-leaves ${hovered ? `` : `is-hidden`}`} alt=" " />
            </>
        ),
        "lillyPad": (
            <>
                <img className="shop-item-fall-lilly-pad-life" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "ghoulishGraffiti": (
            <>
                <img className="shop-item-ghoulish-graffiti" alt=" " style={{ top: `0px` }} />

            </>
        ),

        "zombieSlime": (
            <>
                <img className="shop-item-slime-zombie" alt=" " style={{ top: `0px` }} />

            </>
        ),
        "darkOmens": (
            <>
                <img className="shop-item-ghost-skulls" alt=" " style={{ top: `0px` }} />

            </>
        ),

        "hydroBlast": (
            <>
                <img className="shop-item-fantasy-hydro-blast" alt=" " style={{ top: `0px` }} />

            </>
        ),
        "sakuraDreams":
            hovered ?
                (
                    <>
                        <img className="shop-item-fantasy-sakura-dreams-tree" alt=" " style={{ top: `0px` }} />
                        <img className="shop-item-fantasy-sakura-dreams-petals" alt=" " style={{ top: `0px` }} />
                    </>
                ) : (
                    <img className="shop-item-fantasy-sakura-dreams" alt=" " style={{ top: `0px` }} />
                ),
        "mysticVines": hovered ? (
            <>
                <img className={`shop-item-fantasy-mystic-vines-growing-cycle`} alt=" " style={{ top: `0px` }} />
                <img className={`shop-item-fantasy-mystic-vines-loop`} alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className={`shop-item-fantasy-mystic-vines`} alt=" " style={{ top: `0px` }} />
        ),
        "pixieDust": (
            <>
                <img className="shop-item-fantasy-pixie-dust" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "magicHearts": (
            <>
                <img className="shop-item-anime-magic-hearts" alt=" " style={{ top: `0px` }} />

            </>
        ),
        "shatterEffect": hovered ? (
            <>
                <img className="shop-item-anime-shattered-glass" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-anime-shattered-flames" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-anime-shatter" alt=" " style={{ top: `0px` }} />
        ),
        "shurikenStrike": hovered ? (
            <>
                <img className={`shop-item-anime-shuriken-strike-intro ${hovered ? `` : ``}`} alt=" " style={{ top: `0px` }} />
                <img className="shop-item-anime-shuriken-strike-loop" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-anime-shuriken-strike" alt=" " style={{ top: `0px` }} />
        ),
        "powerSurge": (
            <>
                <img className="shop-item-anime-power-surge" alt=" " style={{ top: `0px` }} />

            </>
        ),
        "strifeOs": (
            <>
                <img className="shop-item-breakfast-strife-cereal-o-s" alt=" " style={{ top: `0px` }} />

            </>
        ),
        "breakfastPlate": (
            <>
                <img className="shop-item-breakfast-plate" alt=" " style={{ top: `0px` }} />
            </>
        ),
        "deckTheHalls": hovered ? (
            <>
                <img className="shop-item-winter-wonderland-deck-the-halls-intro" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-winter-wonderland-deck-the-halls" alt=" " style={{ top: `0px` }} />
        ),
        "snowyShenanigans": hovered ? (
            <>
                <img className="shop-item-winter-wonderland-snowman-intro" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-winter-wonderland-snowman-loop" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-winter-wonderland-snowman" alt=" " style={{ top: `0px` }} />
        ),
        "boostedRelic": hovered ? (
            <>
                <img className="shop-item-disxcore-boosted-relic-intro" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-disxcore-boosted-relic-loop" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-disxcore-boosted-relic" alt=" " style={{ top: `0px` }} />
        ),
        "cyberSpace": hovered ? (
            <>
                <img className="shop-item-disxcore-cyberspace-intro" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-disxcore-cyberspace-loop" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-disxcore-cyberspace" alt=" " style={{ top: `0px` }} />
        ),

        "gooZilla": hovered ? (
            <>
                <img className="shop-item-monsters-gooZilla-claw" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-monsters-gooZilla-claw-goo" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-monsters-gooZilla-claw-goo-end" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-monsters-gooZilla" alt=" " style={{ top: `0px` }} />
        ),
        "heartZilla": hovered ? (
            <>
                <img className="shop-item-monsters-heartZilla-claw" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-monsters-heartZilla-end-dripping" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-monsters-heartZilla " alt=" " style={{ top: `0px` }} />
        ),
        "monsterPop": hovered ? (
            <>
                <img className="shop-item-monsters-monsterPop-intro" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-monsters-monsterPop-glass-intro" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-monsters-monsterPop-ending-pop" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-monsters-monsterPop" alt=" " style={{ top: `0px` }} />
        ),

        "dragonDance": hovered ? (
            <>
                <img className="shop-item-lunar-dragon-dragonDance-intro" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-lunar-dragon-dragonDance-ending" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-lunar-dragon-dragonDance" alt=" " style={{ top: `0px` }} />
        ),
        "fortuneFlurry": hovered ? (
            <>
                <img className="shop-item-lunar-dragon-fortuneFlurry-frame" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-lunar-dragon-fortuneFlurry-intro" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-lunar-dragon-fortuneFlurry-ending" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-lunar-dragon-fortuneFlurry" alt=" " style={{ top: `0px` }} />
        ),
        "midnightCelebrations": hovered ? (
            <>
                <img className="shop-item-lunar-dragon-midnightCelebrations-frame" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-lunar-dragon-midnightCelebrations-intro" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-lunar-dragon-midnightCelebrations-ending" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-lunar-dragon-midnightCelebrations" alt=" " style={{ top: `0px` }} />
        ),
        "nightRunner": hovered ? (
            <>
                <img className="shop-item-cyber-punk-nightRunner-idle" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-cyber-punk-nightRunner-intro" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-cyber-punk-nightRunner" alt=" " style={{ top: `0px` }} />
        ),
        "uplinkError": hovered ? (
            <>
                <img className="shop-item-cyber-punk-uplinkError-idle" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-cyber-punk-uplinkError-intro" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-cyber-punk-uplinkError" alt=" " style={{ top: `0px` }} />
        ),

        "elementsRockSlide": hovered ? (
            <>
                <img className="shop-item-elements-rock-slide-idle" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-elements-rock-slide-intro" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-elements-rock-slide" alt=" " style={{ top: `0px` }} />
        ),
        "elementsVortex": hovered ? (
            <>
                <img className="shop-item-elements-vortex-idle" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-elements-vortex-intro" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-elements-vortex" alt=" " style={{ top: `0px` }} />
        ),
        "elementsMastery": hovered ? (
            <>
                <img className="shop-item-elements-mastery-idle" alt=" " style={{ top: `0px` }} />
                <img className="shop-item-elements-mastery-intro" alt=" " style={{ top: `0px` }} />
            </>
        ) : (
            <img className="shop-item-elements-mastery" alt=" " style={{ top: `0px` }} />
        ),

    }

    return (


        <div className={`shop-item-card ${props.shopItemCardType}`} role="button" tabIndex={0}

            onMouseEnter={() => { if (props.hasHoverEffect) { setHovered(true); } }}
            onMouseLeave={() => { if (props.hasHoverEffect) { setHovered(false); } }}

            onClick={(e) => {
                e.preventDefault();
                props.openModalType(props.modalName, props.profileEffectTheme, props.profileThemeObj, "", false, props.nitroExclusive);
            }}
            style={props.styleProps}
        >

            {props.nitroExclusive ? (
                <div className="shop-premium-wheel-badge" style={{ backgroundColor: `var(--status-danger)` }}
                    data-tooltip-content={"This bonus item is yours to keep and use anytime with an active Nitro subscription."}
                    data-tooltip-id={`sbm-thread-nitro-tip-${props.profileThemeObj}`} data-tooltip-place="top" data-tooltip-position-strategy="fixed"
                >
                    <StrifeNitroBadgeIcon className="shop-item-nitro-premium-wheel-icon" height={24} width={24} />
                </div>
            ) : ("")}

            <div className="shop-item-profileEffectPreview">
                <div className="shop-item-profileEffectPreviewContainer">
                    <img className="shop-item-upc-preview" alt=" " />
                    <div>
                        <div className="shop-item-upc-profile-effects">

                            <div className="shop-item-upc-profile-effects-inner">
                                {profileEffectPreviewImgs[props.profileThemeObj]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect shop-card-text-blurred">
                <div className="shop-item-card-inner-cardBackground darkShopCardBackground shopItemCardBackground-lowOpacity"></div>
                <div className="shop-item-card-inner-product-name"><div className="shop-item-card-inner-blur-text-lrg" style={{ color: `var(--text-normal)` }}>{`${props.profileEffectTitle}`}</div></div>
                <div className="shop-item-card-inner-product-details">
                    <div className="shop-item-card-inner-blur-text-med shop-item-card-inner-blur-text-med-desc" style={{ color: `var(--text-normal)` }}>{`${props.profileEffectTextDescription}`}</div>
                    <div className="shop-item-card-inner-blur">
                        {props.nitroExclusive ? (<div className="shop-item-price-tags-h2-medium-semi-bold" style={{ color: `var(--text-normal)` }}>Included with Nitro</div>) : (
                            <div className="shop-item-price-tags-container" >
                                <h2 className="shop-item-price-tags-h2-medium" style={{ color: `var(--header-primary)` }}>${`${props.profileEffectPrice}`}</h2>
                                <h2 className="shop-item-price-tags-h2-xsmall" style={{ color: `var(--header-primary)` }}>
                                    <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon-faded" height={24} width={24} />
                                    ${`${props.profileEffectReducedPrice} with Nitro`}
                                </h2>
                            </div>
                        )}
                    </div>
                    {buttonSection}
                    {
                        props.nitroExclusive ? (
                            <Tooltip className="suom-server-name-tool-tip" id={`sbm-thread-nitro-tip-${props.profileThemeObj}`} place="top" closeOnResize={true} closeOnScroll={true} />
                        ) : (
                            <Tooltip className="shop-avatar-deco-tool-tip" id={`sbm-thread-tip-${props.profileThemeObj}`} place="top" closeOnResize={true} closeOnScroll={true} />
                        )
                    }
                </div>
            </div>
        </div>

    )

}

export default ProfileEffectItemCard;