import React from "react";
import { ChatPresentIcon, StrifeNitroBadgeIcon } from "../../front_end_svgs/Strife_svgs";
import { Tooltip } from "react-tooltip";

const AvatarDecorationItemCard = (props) => {

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
                        props.openModalType("purchaseProductModal", "", "", "", false, props.nitroExclusive, props.avatarTitle, props.avatarPrice);
                    }}
                    style={props.buttonStyleProps}
                >
                    <div className="global-button-contents look-filled-button-contents">
                        {`Buy for $${props.avatarPrice}`}
                    </div>
                </button>
                <button type="button" className="shop-buttons shop-item-gift-button global-button-growth button-look-filled"
                    data-tooltip-content={"Send a gift"}
                    data-tooltip-id={`sbm-thread-tip-${props.avatarEffectObj}`} data-tooltip-place="top"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        props.openModalType("sendGiftModal", "", "", "", false, props.nitroExclusive, props.avatarTitle, props.avatarPrice, props.avatarEffectObj, "Avatar_Decoration");

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



    return (
        <div className={`shop-item-card ${props.shopItemCardType}`} role="button" tabIndex={0}
            onClick={(e) => {
                e.preventDefault();
                props.openModalType(props.modalName, props.profileEffectTheme, "", props.avatarEffectObj, false, props.nitroExclusive);
            }}
            style={props.styleProps}
        >

            {props.nitroExclusive ? (
                <div className="shop-premium-wheel-badge" style={{ backgroundColor: `var(--status-danger)` }}
                    data-tooltip-content={"This bonus item is yours to keep and use anytime with an active Nitro subscription."}
                    data-tooltip-id={`sbm-thread-nitro-tip-${props.avatarEffectObj}`} data-tooltip-place="top" data-tooltip-position-strategy="fixed">
                    <StrifeNitroBadgeIcon className="shop-item-nitro-premium-wheel-icon" height={24} width={24} />
                </div>
            ) : ("")}



            <div className="shop-item-card-inner-avatar-deco-container">
                <div className="shop-item-card-inner" style={{ width: `152px`, height: `152px` }}>
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
                                <img className={props.avatarImageName} alt=" " aria-hidden="true" />
                            </div>
                        </foreignObject>
                    </svg>
                </div>
            </div>
            <div className="shop-item-card-inner-text">
                <div className="shop-item-card-inner-cardBackground darkShopCardBackground"></div>
                <div className="shop-item-card-inner-product-name"><div className="shop-item-card-inner-blur-text-lrg" style={{ color: `var(--text-normal)` }}>{`${props.avatarTitle}`}</div></div>
                <div className="shop-item-card-inner-product-details">
                    <div className="shop-item-card-inner-blur-text-med shop-item-card-inner-blur-text-med-desc" style={{ color: `var(--text-normal)` }}>{`${props.avatarTextDescription}`}</div>
                    <div className="shop-item-card-inner-blur">
                        {props.nitroExclusive ? (<div className="shop-item-price-tags-h2-medium-semi-bold" style={{ color: `var(--text-normal)` }}>Included with Nitro</div>) : (
                            <div className="shop-item-price-tags-container" >
                                <h2 className="shop-item-price-tags-h2-medium" style={{ color: `var(--header-primary)` }}>${`${props.avatarPrice}`}</h2>
                                <h2 className="shop-item-price-tags-h2-xsmall" style={{ color: `var(--header-primary)` }}>
                                    <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon-faded" height={24} width={24} />
                                    ${`${props.avatarReducedPrice} with Nitro`}
                                </h2>
                            </div>
                        )}
                    </div>
                    {buttonSection}
                    {
                        props.nitroExclusive ? (
                            <Tooltip className="suom-server-name-tool-tip" id={`sbm-thread-nitro-tip-${props.avatarEffectObj}`} place="top" closeOnResize={true} closeOnScroll={true} />
                        ) : (
                            <Tooltip className="shop-avatar-deco-tool-tip" id={`sbm-thread-tip-${props.avatarEffectObj}`} place="top" closeOnResize={true} closeOnScroll={true} />
                        )
                    }
                </div>
            </div>
        </div>
    )

}

export default AvatarDecorationItemCard;