import React from "react";
import StrifeShopHeaderNavBarContainer from "../strife_shop_header_nav_bar/strife_shop_header_nav_bar_container";
import DMNavBarContainer from "../../dm_servers/dm_nav_bar/dm_nav_bar_container";
import { useEffect, useState, useRef } from "react";
import { StrifeBannerLogo, StrifeNitroBadgeIcon } from "../../front_end_svgs/Strife_svgs";
import SubscribeToStrifeNitroProModalContainer from "../../nitro/subscribe_to_nitro_modal/subscribe_to_nitro_pro_modal_container";
import ProfileEffectPreviewModalContainer from "../profile_effect_preview_modal/profile_effect_preview_modal_container";
import AvatarDecorationPreviewModalContainer from "../avatar_decorations_preview_modal/avatar_decoration_preview_modal_container";
import AvatarDecorationItemCardContainer from "../avatar_decoration_item_card/avatar_decoration_item_card_container";
import ProfileEffectItemCardContainer from "../profile_effect_item_card/profile_effect_item_card_container";
import SubscribeToStrifeNitroBasicModalContainer from "../../nitro/subscribe_to_nitro_basic_modal/subscribe_to_nitro_basic_modal_container";
import { ShopItemCardGridSkeletonList } from "../../custom_input_components/shop_item_card_skeletons/shop_item_card_skeletons";
import PurchaseProductModalContainer from "../purchase_product_modal/purchase_product_modal_container";
import SendAGiftModalContainer from "../send_a_gift_modal/send_a_gift_modal_container";

const StrifeShop = (props) => {

    const [isLoadingShop, setIsLoadingShop] = React.useState(true);
    const [gift, setGift] = React.useState(false);
    const [currentSubModal, setCurrentSubModal] = useState({
        nitroPlanSelection: false,
        subToNitroPro: false,
        subToNitroBasic: false,
        profileEffectModal: false,
        avatarDecorationPreviewModal: false,
        purchaseProductModal: false,
        sendGiftModal: false,
    });

    const [profileEffectThemeType, setProfileEffectThemeType] = React.useState("");
    const [profileEffectObj, setProfileEffectThemeObj] = React.useState("");
    const [avatarEffectObj, setAvatarEffectThemeObj] = React.useState("");
    const [decoNitroExclusive, setDecoNitroExclusive] = React.useState(false);
    const [productName, setProductName] = React.useState("");
    const [productPrice, setProductPrice] = React.useState(0.00);
    const [productType, setProductType] = React.useState("");
    const [productKey, setProductKey] = React.useState("");


    useEffect(() => {
        props.reSyncCurrentUser(props.currentUser.id);
        props.requestAllFriendships();
        setTimeout(() => {
            setIsLoadingShop(false);
        }, 3000);

        return function cleanUp () {
            if (props.errors.length > 0) {
                props.removeSessionErrors();
            }
            if (props.friendErrors.length > 0) {
                props.removeFriendshipErrors();
            }
        }
    }, []);

    const openModal = (field, profileEffectTheme = "", profileThemeObj = "", avatarEffectObj = "", isGift = false, isNitroExclusive = false, productName = "", productPrice = 0.00, productKey = "", productType = "") => {
        setCurrentSubModal(previousState => {
            return { ...previousState, [field]: true };
        });

        setGift(isGift);
        setProfileEffectThemeType(profileEffectTheme);
        setProfileEffectThemeObj(profileThemeObj);
        setAvatarEffectThemeObj(avatarEffectObj);
        setDecoNitroExclusive(isNitroExclusive);

        setProductName(productName);
        setProductPrice(productPrice);
        setProductKey(productKey);
        setProductType(productType);
    }
    const closeForm = (field) => {
        setCurrentSubModal(previousState => {
            return { ...previousState, [field]: false };
        });
        setGift(false);
        setProfileEffectThemeType("");
        setProfileEffectThemeObj("");
        setAvatarEffectThemeObj("");
        setDecoNitroExclusive(false);
        setProductName("");
        setProductPrice(0.00);
        setProductKey("");
        setProductType("");
    }

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

    const renderProfileEffectModal = () => {
        if (currentSubModal.profileEffectModal === true) {
            return (
                <ProfileEffectPreviewModalContainer closeSubMod={closeForm}
                    formName={"profileEffectModal"} profileEffectThemeType={profileEffectThemeType}
                    profileThemeObj={profileEffectObj} nitroExclusive={decoNitroExclusive}
                />
            )
        }
    }

    const renderAvatarDecorationModal = () => {
        if (currentSubModal.avatarDecorationPreviewModal === true) {
            return (
                <AvatarDecorationPreviewModalContainer closeSubMod={closeForm}
                    formName={"avatarDecorationPreviewModal"} profileEffectThemeType={profileEffectThemeType}
                    avatarEffectObj={avatarEffectObj} nitroExclusive={decoNitroExclusive}
                />
            )
        }
    }

    const renderPurchaseProductModal = () => {
        if (currentSubModal.purchaseProductModal === true) {
            return (
                <PurchaseProductModalContainer closeSubMod={closeForm} formName={"purchaseProductModal"}
                    productPrice={productPrice} productName={productName}
                />
            )
        }
    }

    const renderSendGiftModal = () => {
        if (currentSubModal.sendGiftModal === true) {
            return (
                <SendAGiftModalContainer closeSubMod={closeForm} formName={"sendGiftModal"} productType={productType}
                    productPrice={productPrice} productName={productName} productKey={productKey}
                />
            )
        }
    }
    return (
        <div className="server-main-base">
            <div className="server-content">
                <DMNavBarContainer />
                <div className="shop-main-container">
                    <StrifeShopHeaderNavBarContainer />
                    {renderNitroProModal()}
                    {renderNitroBasicModal()}
                    {renderProfileEffectModal()}
                    {renderAvatarDecorationModal()}
                    {renderPurchaseProductModal()}
                    {renderSendGiftModal()}
                    <div className="shop-scroll auto-scroll-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                        <div className="shop-page-wrapper shop-page-wrapper-background">
                            <main className="shop-main-page">

                                {/* <div className="shop-hero-banner">
                                    <div className="shop-hero-description shop-hero-description-with-side-bar">
                                        <div className="shop-hero-eyebrow" style={{ color: `white` }}>
                                            <StrifeNitroBadgeIcon className="shop-hero-eyebrow-premium-nitro-ball-icon" height={24} width={24} />
                                            <span className="shop-hero-eyebrow-span-txt">N!TR0 EARLY ACCESS</span>
                                        </div>
                                        <h2 className="shop-hero-h2" style={{ color: `white` }}>Ready for a new look?</h2>
                                        <div className="shop-hero-subtitle" style={{ color: `white` }}>
                                            Charming. Fierce. Hungry. Whatever your vibe, buy and collect your favorite styles for your profile for any occasion. Only with N!TR0.
                                        </div>
                                        <button type="button" className="shop-buttons shop-hero-button global-button-growth global-button-size-medium button-look-inverted"
                                            onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
                                            <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
                                                <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
                                                <span className="shopbuttonText">Unlock Shop with Nitro</span>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="shop-hero-banner-background-wrapper">
                                        <img className="shop-hero-banner-background-img" alt=" " />
                                    </div>
                                    <img className="shop-hero-banner-foreground" alt=" " />
                                    <img className="shop-hero-banner-hand" alt=" " />
                                    <img className="shop-hero-banner-large-Top-sparkle" alt=" " />
                                    <img className="shop-hero-banner-smallTop-Sparkle" alt=" " />
                                    <img className="shop-hero-banner-large-Left-sparkle" alt=" " />
                                    <img className="shop-hero-banner-smallLeft-Sparkle" alt=" " />
                                    <img className="shop-hero-banner-large-Right-sparkle" alt=" " />
                                    <img className="shop-hero-banner-smallRight-Sparkle" alt=" " />
                                </div> */}

                                {
                                    isLoadingShop ? (
                                        <div className="shop-banner-img">
                                            <ShopItemCardGridSkeletonList listsToRender={1} />
                                        </div>
                                    ) :
                                        (
                                            <div className="shop-hero-banner">
                                                <div className="shop-hero-description shop-hero-description-with-side-bar">
                                                    <h2 className="shop-hero-h2" style={{ color: `white` }}>Ready for a new look?</h2>
                                                    <div className="shop-hero-subtitle" style={{ color: `white` }}>
                                                        Charming. Fierce. Hungry. Whatever your vibe, buy and collect your favorite styles for your profile for any occasion.
                                                    </div>
                                                </div>
                                                <div className="shop-hero-banner-background-wrapper">
                                                    <img className="shop-hero-banner-background-img" alt=" " />
                                                </div>
                                                <img className="shop-hero-banner-foreground" alt=" " />
                                                <img className="shop-hero-banner-hand" alt=" " />
                                                <img className="shop-hero-banner-large-Top-sparkle" alt=" " />
                                                <img className="shop-hero-banner-smallTop-Sparkle" alt=" " />
                                                <img className="shop-hero-banner-large-Left-sparkle" alt=" " />
                                                <img className="shop-hero-banner-smallLeft-Sparkle" alt=" " />
                                                <img className="shop-hero-banner-large-Right-sparkle" alt=" " />
                                                <img className="shop-hero-banner-smallRight-Sparkle" alt=" " />
                                            </div>
                                        )
                                }




                                {/* {
                                    isLoadingShop ? (
                                        <div className="shop-banner-img">
                                            <ShopItemCardGridSkeletonList listsToRender={1} />
                                        </div>
                                    ) :
                                        (
                                            <div className="shop-hero-banner-holiday-version">
                                                <div className="shop-hero-banner-holiday-version-description shop-hero-description-with-side-bar">
                                                    <h2 className="shop-hero-h2" style={{ color: `white` }}>Ready for a new look?</h2>
                                                    <div className="shop-hero-subtitle" style={{ color: `white` }}>
                                                        Charming. Fierce. Hungry. Whatever your vibe, buy and collect your favorite styles for your profile for any occasion.
                                                    </div>
                                                </div>
                                                <div className="shop-hero-holiday-banner-art">
                                                    <img className="shop-hero-banner-holiday-grid" alt=" " />
                                                    <img className="shop-hero-banner-holiday-gridShelf" alt=" " />
                                                    <img className="shop-hero-banner-holiday-gridShelfItems" alt=" " />
                                                    <img className="shop-hero-banner-holiday-gridHands" alt=" " />
                                                </div>
                                            </div>
                                        )
                                } */}


                                <div className="shop-item-categories">

                                    <div className="shop-item-categories-wrapper">

                                        {
                                            isLoadingShop ? (
                                                <div className="shop-banner-img">
                                                    <ShopItemCardGridSkeletonList listsToRender={1} />
                                                </div>
                                            ) :
                                                (
                                                    <div className="shop-banner-img shop-lunar-dragon-new-year-banner">
                                                        <div className="shop-strife-banner-logo-halloween">
                                                            <StrifeBannerLogo width={124} height={24} className={'shop-strife-banner-logo-halloween-icon'} />
                                                        </div>
                                                        <img className="shop-lunar-dragon-new-year-banner-logo" alt=" " />
                                                        <div className="shop-halloween-subtext" style={{ color: `white` }}>Roar into the Year of the Dragon.</div>
                                                    </div>
                                                )
                                        }

                                        <div>
                                            <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Avatar Decorations</div>

                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={6} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"lunar-dragon-items"}
                                                                profileEffectTheme={"lunar-dragon-effect"} avatarEffectObj={"fanFlourish"} avatarTitle={"Fan Flourish"}
                                                                avatarImageName={"lunar-dragon-fanFlourish"} nitroExclusive={false} avatarReducedPrice={4.99} avatarPrice={5.99}
                                                                avatarTextDescription={"Incredibly fan-tastic."}
                                                                styleProps={{
                                                                    background: `var(--background-floating)`,
                                                                    borderColor: `var(--chat-border)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `var(--brand-experiment)`,
                                                                    color: `var(--white-500)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"lunar-dragon-items"}
                                                                profileEffectTheme={"lunar-dragon-effect"} avatarEffectObj={"lunarLanterns"} avatarTitle={"Lunar Lanterns"}
                                                                avatarImageName={"lunar-dragon-lunarLanterns"} nitroExclusive={false} avatarReducedPrice={4.99} avatarPrice={5.99}
                                                                avatarTextDescription={"Light the night."}
                                                                styleProps={{
                                                                    background: `var(--background-floating)`,
                                                                    borderColor: `var(--chat-border)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `var(--brand-experiment)`,
                                                                    color: `var(--white-500)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"lunar-dragon-items"}
                                                                profileEffectTheme={"lunar-dragon-effect"} avatarEffectObj={"fireCrackers"} avatarTitle={"Firecrackers"}
                                                                avatarImageName={"lunar-dragon-fireCrackers"} nitroExclusive={false} avatarReducedPrice={4.99} avatarPrice={5.99}
                                                                avatarTextDescription={"Don't try this at home!"}
                                                                styleProps={{
                                                                    background: `var(--background-floating)`,
                                                                    borderColor: `var(--chat-border)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `var(--brand-experiment)`,
                                                                    color: `var(--white-500)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"lunar-dragon-items"}
                                                                profileEffectTheme={"lunar-dragon-effect"} avatarEffectObj={"dragonsSmile"} avatarTitle={"Dragon's Smile"}
                                                                avatarImageName={"lunar-dragon-dragonsSmile"} nitroExclusive={false} avatarReducedPrice={4.99} avatarPrice={5.99}
                                                                avatarTextDescription={"A dragon's grin fills your year with laughs."}
                                                                styleProps={{
                                                                    background: `var(--background-floating)`,
                                                                    borderColor: `var(--chat-border)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `var(--brand-experiment)`,
                                                                    color: `var(--white-500)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"lunar-dragon-items"}
                                                                profileEffectTheme={"lunar-dragon-effect"} avatarEffectObj={"luckyEnvelopes"} avatarTitle={"Lucky Envelopes"}
                                                                avatarImageName={"lunar-dragon-luckyEnvelopes"} nitroExclusive={false} avatarReducedPrice={4.99} avatarPrice={5.99}
                                                                avatarTextDescription={"Capacity: 888 coins."}
                                                                styleProps={{
                                                                    background: `var(--background-floating)`,
                                                                    borderColor: `var(--chat-border)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `var(--brand-experiment)`,
                                                                    color: `var(--white-500)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"lunar-dragon-items"}
                                                                profileEffectTheme={"lunar-dragon-effect"} avatarEffectObj={"koiPond"} avatarTitle={"Koi Pond"}
                                                                avatarImageName={"lunar-dragon-koiPond"} nitroExclusive={false} avatarReducedPrice={4.99} avatarPrice={5.99}
                                                                avatarTextDescription={"Swimming in an eternal, peaceful circle."}
                                                                styleProps={{
                                                                    background: `var(--background-floating)`,
                                                                    borderColor: `var(--chat-border)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `var(--brand-experiment)`,
                                                                    color: `var(--white-500)`
                                                                }}
                                                            />



                                                        </div>
                                                    )}


                                        </div>

                                        <div>
                                            <div className="shop-item-type-title-container">
                                                <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Profile Effects</div>
                                            </div>

                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={3} />
                                                    </div>
                                                ) : (

                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                        <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                            shopItemCardType={"lunar-dragon-items"} profileEffectTheme={"lunar-dragon-effect"} profileThemeObj={"dragonDance"}
                                                            nitroExclusive={false} profileEffectTitle={"Dragon Dance"} profileEffectTextDescription={"No evil spirits on my watch."}
                                                            profileEffectPrice={5.99} profileEffectReducedPrice={4.99} hasHoverEffect={true}
                                                            styleProps={{
                                                                background: `var(--background-floating)`,
                                                                borderColor: `var(--chat-border)`,
                                                                boxShadow: `none`
                                                            }}
                                                            buttonStyleProps={{
                                                                background: `var(--brand-experiment)`,
                                                                color: `var(--white-500)`
                                                            }}
                                                        />
                                                        <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                            shopItemCardType={"lunar-dragon-items"} profileEffectTheme={"lunar-dragon-effect"} profileThemeObj={"fortuneFlurry"}
                                                            nitroExclusive={false} profileEffectTitle={"Fortune Flurry"} profileEffectTextDescription={"May fortune come your way!"}
                                                            profileEffectPrice={5.99} profileEffectReducedPrice={4.99} hasHoverEffect={true}
                                                            styleProps={{
                                                                background: `var(--background-floating)`,
                                                                borderColor: `var(--chat-border)`,
                                                                boxShadow: `none`
                                                            }}
                                                            buttonStyleProps={{
                                                                background: `var(--brand-experiment)`,
                                                                color: `var(--white-500)`
                                                            }}
                                                        />
                                                        <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                            shopItemCardType={"lunar-dragon-items"} profileEffectTheme={"lunar-dragon-effect"} profileThemeObj={"midnightCelebrations"}
                                                            nitroExclusive={false} profileEffectTitle={"Midnight Celebration"} profileEffectTextDescription={"Protection and prosperity guaranteed."}
                                                            profileEffectPrice={5.99} profileEffectReducedPrice={4.99} hasHoverEffect={true}
                                                            styleProps={{
                                                                background: `var(--background-floating)`,
                                                                borderColor: `var(--chat-border)`,
                                                                boxShadow: `none`
                                                            }}
                                                            buttonStyleProps={{
                                                                background: `var(--brand-experiment)`,
                                                                color: `var(--white-500)`
                                                            }}
                                                        />


                                                    </div>
                                                )}

                                        </div>
                                    </div>


                                    <div className="shop-item-categories-wrapper">

                                        {
                                            isLoadingShop ? (
                                                <div className="shop-banner-img">
                                                    <ShopItemCardGridSkeletonList listsToRender={1} />
                                                </div>
                                            ) :
                                                (
                                                    <div className="shop-banner-img shop-cyberpunk-banner">
                                                        <div className="shop-strife-banner-logo-halloween">
                                                            <StrifeBannerLogo width={124} height={24} className={'shop-strife-banner-logo-halloween-icon'} />
                                                        </div>
                                                        <img className="shop-cyberpunk-banner-logo" alt=" " />
                                                        <div className="shop-halloween-subtext" style={{ color: `white` }}>Welcome to the neon embrace of the future.</div>
                                                    </div>
                                                )
                                        }

                                        <div>
                                            <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Avatar Decorations</div>

                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={4} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"cyber-punk-effect-items"}
                                                                profileEffectTheme={"cyber-punk-effect"} avatarEffectObj={"cyberPunkGlitch"} avatarTitle={"Glitch"}
                                                                avatarImageName={"cyber-punk-glitch"} nitroExclusive={false} avatarReducedPrice={4.99} avatarPrice={5.99}
                                                                avatarTextDescription={"Neurovisor disruption detected, please standby."}
                                                                styleProps={{
                                                                    background: `var(--background-floating)`,
                                                                    borderColor: `var(--chat-border)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `var(--brand-experiment)`,
                                                                    color: `var(--white-500)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"cyber-punk-effect-items"}
                                                                profileEffectTheme={"cyber-punk-effect"} avatarEffectObj={"cyberNetic"} avatarTitle={"Cybernetic"}
                                                                avatarImageName={"cyber-punk-cybernetic"} nitroExclusive={false} avatarReducedPrice={4.99} avatarPrice={5.99}
                                                                avatarTextDescription={"Cybernetic visuals now online. Welcome aboard, runner."}
                                                                styleProps={{
                                                                    background: `var(--background-floating)`,
                                                                    borderColor: `var(--chat-border)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `var(--brand-experiment)`,
                                                                    color: `var(--white-500)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"cyber-punk-effect-items"}
                                                                profileEffectTheme={"cyber-punk-effect"} avatarEffectObj={"digitalSunrise"} avatarTitle={"Digital Sunrise"}
                                                                avatarImageName={"cyber-punk-digital-sunrise"} nitroExclusive={false} avatarReducedPrice={4.99} avatarPrice={5.99}
                                                                avatarTextDescription={"It's a new day in cyberspace."}
                                                                styleProps={{
                                                                    background: `var(--background-floating)`,
                                                                    borderColor: `var(--chat-border)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `var(--brand-experiment)`,
                                                                    color: `var(--white-500)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"cyber-punk-effect-items"}
                                                                profileEffectTheme={"cyber-punk-effect"} avatarEffectObj={"cyberNeticImplant"} avatarTitle={"Implant"}
                                                                avatarImageName={"cyber-punk-implant"} nitroExclusive={false} avatarReducedPrice={4.99} avatarPrice={5.99}
                                                                avatarTextDescription={"Get ready to jack in."}
                                                                styleProps={{
                                                                    background: `var(--background-floating)`,
                                                                    borderColor: `var(--chat-border)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `var(--brand-experiment)`,
                                                                    color: `var(--white-500)`
                                                                }}
                                                            />
                                                        </div>
                                                    )}


                                        </div>

                                        <div>
                                            <div className="shop-item-type-title-container">
                                                <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Profile Effects</div>
                                            </div>

                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={2} />
                                                    </div>
                                                ) : (

                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                        <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                            shopItemCardType={"cyber-punk-effect-items"} profileEffectTheme={"cyber-punk-effect"} profileThemeObj={"nightRunner"}
                                                            nitroExclusive={false} profileEffectTitle={"Nightrunner"} profileEffectTextDescription={"Cruisin' the cyber highway."}
                                                            profileEffectPrice={5.99} profileEffectReducedPrice={4.99} hasHoverEffect={true}
                                                            styleProps={{
                                                                background: `var(--background-floating)`,
                                                                borderColor: `var(--chat-border)`,
                                                                boxShadow: `none`
                                                            }}
                                                            buttonStyleProps={{
                                                                background: `var(--brand-experiment)`,
                                                                color: `var(--white-500)`
                                                            }}
                                                        />
                                                        <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                            shopItemCardType={"cyber-punk-effect-items"} profileEffectTheme={"cyber-punk-effect"} profileThemeObj={"uplinkError"}
                                                            nitroExclusive={false} profileEffectTitle={"Uplink Error"} profileEffectTextDescription={"Anomaly detected, attempting system reset."}
                                                            profileEffectPrice={5.99} profileEffectReducedPrice={4.99} hasHoverEffect={true}
                                                            styleProps={{
                                                                background: `var(--background-floating)`,
                                                                borderColor: `var(--chat-border)`,
                                                                boxShadow: `none`
                                                            }}
                                                            buttonStyleProps={{
                                                                background: `var(--brand-experiment)`,
                                                                color: `var(--white-500)`
                                                            }}
                                                        />

                                                    </div>
                                                )}

                                        </div>
                                    </div>

                                    <div className="shop-item-categories-wrapper">

                                        {
                                            isLoadingShop ? (
                                                <div className="shop-banner-img">
                                                    <ShopItemCardGridSkeletonList listsToRender={1} />
                                                </div>
                                            ) :
                                                (
                                                    <div className="shop-banner-img shop-monsters-banner">
                                                        <div className="shop-strife-banner-logo-halloween">
                                                            <StrifeBannerLogo width={124} height={24} className={'shop-strife-banner-logo-halloween-icon'} />
                                                        </div>
                                                        <img className="shop-monster-banner-logo" alt=" " />
                                                        <div className="shop-halloween-subtext" style={{ color: `white` }}>We're not a menace, just misunderstood.</div>
                                                    </div>
                                                )
                                        }

                                        <div>
                                            <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Avatar Decorations</div>

                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={8} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"monsters-items"}
                                                                profileEffectTheme={"monsters-effect"} avatarEffectObj={"beamChop"} avatarTitle={"Beamchop"}
                                                                avatarImageName={"monsters-beam-chop"} nitroExclusive={false} avatarReducedPrice={3.99} avatarPrice={4.99}
                                                                avatarTextDescription={"Awh it's so cu- AHHH"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(0, 69, 92), rgb(0, 42, 56)) border-box border-box`,
                                                                    borderColor: `rgba(0, 57, 77, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg, rgb(0, 230, 176), rgb(0, 153, 122))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"monsters-items"}
                                                                profileEffectTheme={"monsters-effect"} avatarEffectObj={"stinkUms"} avatarTitle={"Stinkums"}
                                                                avatarImageName={"monsters-stinkums"} nitroExclusive={false} avatarReducedPrice={3.99} avatarPrice={4.99}
                                                                avatarTextDescription={"Questionably dealt. Definitely smelt."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(0, 69, 92), rgb(0, 42, 56)) border-box border-box`,
                                                                    borderColor: `rgba(0, 57, 77, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg, rgb(0, 230, 176), rgb(0, 153, 122))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"monsters-items"}
                                                                profileEffectTheme={"monsters-effect"} avatarEffectObj={"chuck"} avatarTitle={"Chuck"}
                                                                avatarImageName={"monsters-chuck"} nitroExclusive={false} avatarReducedPrice={3.99} avatarPrice={4.99}
                                                                avatarTextDescription={"Wanna see what I had for lunch earlier?"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(0, 69, 92), rgb(0, 42, 56)) border-box border-box`,
                                                                    borderColor: `rgba(0, 57, 77, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg, rgb(0, 230, 176), rgb(0, 153, 122))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"monsters-items"}
                                                                profileEffectTheme={"monsters-effect"} avatarEffectObj={"winkle"} avatarTitle={"Winkle"}
                                                                avatarImageName={"monsters-winkle"} nitroExclusive={false} avatarReducedPrice={3.99} avatarPrice={4.99}
                                                                avatarTextDescription={"Eye love you."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(0, 69, 92), rgb(0, 42, 56)) border-box border-box`,
                                                                    borderColor: `rgba(0, 57, 77, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg, rgb(0, 230, 176), rgb(0, 153, 122))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"monsters-items"}
                                                                profileEffectTheme={"monsters-effect"} avatarEffectObj={"chewBert"} avatarTitle={"Chewbert"}
                                                                avatarImageName={"monsters-chewbert"} nitroExclusive={false} avatarReducedPrice={3.99} avatarPrice={4.99}
                                                                avatarTextDescription={"Me chew gum, make bubbles, big fun."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(0, 69, 92), rgb(0, 42, 56)) border-box border-box`,
                                                                    borderColor: `rgba(0, 57, 77, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg, rgb(0, 230, 176), rgb(0, 153, 122))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"monsters-items"}
                                                                profileEffectTheme={"monsters-effect"} avatarEffectObj={"doodleZard"} avatarTitle={"Doodlezard"}
                                                                avatarImageName={"monsters-doodlezard"} nitroExclusive={false} avatarReducedPrice={3.99} avatarPrice={4.99}
                                                                avatarTextDescription={"You might want to wash up after."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(0, 69, 92), rgb(0, 42, 56)) border-box border-box`,
                                                                    borderColor: `rgba(0, 57, 77, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg, rgb(0, 230, 176), rgb(0, 153, 122))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"monsters-items"}
                                                                profileEffectTheme={"monsters-effect"} avatarEffectObj={"glop"} avatarTitle={"Glop"}
                                                                avatarImageName={"monsters-glop"} nitroExclusive={false} avatarReducedPrice={3.99} avatarPrice={4.99}
                                                                avatarTextDescription={"Is there something in my teeth?"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(0, 69, 92), rgb(0, 42, 56)) border-box border-box`,
                                                                    borderColor: `rgba(0, 57, 77, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg, rgb(0, 230, 176), rgb(0, 153, 122))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"monsters-items"}
                                                                profileEffectTheme={"monsters-effect"} avatarEffectObj={"gawbleHop"} avatarTitle={"Gawblehop"}
                                                                avatarImageName={"monsters-gawblehop"} nitroExclusive={false} avatarReducedPrice={3.99} avatarPrice={4.99}
                                                                avatarTextDescription={"Talk about being tongue-tied."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(0, 69, 92), rgb(0, 42, 56)) border-box border-box`,
                                                                    borderColor: `rgba(0, 57, 77, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg, rgb(0, 230, 176), rgb(0, 153, 122))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />


                                                        </div>
                                                    )}


                                        </div>

                                        <div>
                                            <div className="shop-item-type-title-container">
                                                <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Profile Effects</div>
                                            </div>

                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={3} />
                                                    </div>
                                                ) : (

                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                        <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                            shopItemCardType={"monsters-items"} profileEffectTheme={"monsters-effect"} profileThemeObj={"gooZilla"}
                                                            nitroExclusive={false} profileEffectTitle={"Goozilla"} profileEffectTextDescription={"Wait a second, what's my profile even made of?!"}
                                                            profileEffectPrice={4.99} profileEffectReducedPrice={3.99} hasHoverEffect={true}
                                                            styleProps={{
                                                                background: `linear-gradient(rgb(0, 69, 92), rgb(0, 42, 56)) border-box border-box`,
                                                                borderColor: `rgba(0, 57, 77, 0.4)`,
                                                                boxShadow: `none`
                                                            }}
                                                            buttonStyleProps={{
                                                                background: `linear-gradient(90deg, rgb(0, 230, 176), rgb(0, 153, 122))`,
                                                                color: `rgb(0,0,0)`
                                                            }}
                                                        />

                                                        <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                            shopItemCardType={"monsters-items"} profileEffectTheme={"monsters-effect"} profileThemeObj={"heartZilla"}
                                                            nitroExclusive={false} profileEffectTitle={"Heartzilla"} profileEffectTextDescription={"Is this what they mean when they say love hurts?"}
                                                            profileEffectPrice={4.99} profileEffectReducedPrice={3.99} hasHoverEffect={true}
                                                            styleProps={{
                                                                background: `linear-gradient(rgb(0, 69, 92), rgb(0, 42, 56)) border-box border-box`,
                                                                borderColor: `rgba(0, 57, 77, 0.4)`,
                                                                boxShadow: `none`
                                                            }}
                                                            buttonStyleProps={{
                                                                background: `linear-gradient(90deg, rgb(0, 230, 176), rgb(0, 153, 122))`,
                                                                color: `rgb(0,0,0)`
                                                            }}
                                                        />
                                                        <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                            shopItemCardType={"monsters-items"} profileEffectTheme={"monsters-effect"} profileThemeObj={"monsterPop"}
                                                            nitroExclusive={false} profileEffectTitle={"Monster Pop"} profileEffectTextDescription={"POP goes the monster."}
                                                            profileEffectPrice={4.99} profileEffectReducedPrice={3.99} hasHoverEffect={true}
                                                            styleProps={{
                                                                background: `linear-gradient(rgb(0, 69, 92), rgb(0, 42, 56)) border-box border-box`,
                                                                borderColor: `rgba(0, 57, 77, 0.4)`,
                                                                boxShadow: `none`
                                                            }}
                                                            buttonStyleProps={{
                                                                background: `linear-gradient(90deg, rgb(0, 230, 176), rgb(0, 153, 122))`,
                                                                color: `rgb(0,0,0)`
                                                            }}
                                                        />
                                                    </div>
                                                )}

                                        </div>
                                    </div>


                                    <div className="shop-item-categories-wrapper">

                                        {
                                            isLoadingShop ? (
                                                <div className="shop-banner-img">
                                                    <ShopItemCardGridSkeletonList listsToRender={1} />
                                                </div>
                                            ) :
                                                (
                                                    <div className="shop-banner-img shop-banner-halloween">
                                                        <div className="shop-strife-banner-logo-halloween">
                                                            <StrifeBannerLogo width={124} height={24} className={'shop-strife-banner-logo-halloween-icon'} />
                                                        </div>
                                                        <img className="shop-halloween-logo" alt=" " />
                                                        <div className="shop-halloween-subtext" style={{ color: `white` }}>Fright and delight your friends, strangers, and friendly strangers.</div>
                                                    </div>
                                                )
                                        }

                                        <div>
                                            <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Avatar Decorations</div>

                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={4} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"halloween-items"}
                                                                profileEffectTheme={"halloween-effect"} avatarEffectObj={"graveyardCat"} avatarTitle={"Graveyard Cat"}
                                                                avatarImageName={"halloween-cat-grave"} nitroExclusive={false} avatarReducedPrice={5.49} avatarPrice={7.99}
                                                                avatarTextDescription={"Just a cat on graveyard duty."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(81, 127, 219), rgb(6, 14, 35)) border-box border-box`,
                                                                    borderColor: `rgba(44, 73, 129, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(81, 127, 219), rgb(6, 14, 35))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"halloween-items"}
                                                                profileEffectTheme={"halloween-effect"} avatarEffectObj={"ghosts"} avatarTitle={"Ghosts"}
                                                                avatarImageName={"halloween-ghosts"} nitroExclusive={false} avatarReducedPrice={5.49} avatarPrice={7.99}
                                                                avatarTextDescription={"Look at them just spinning and grinning all day..."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(81, 127, 219), rgb(6, 14, 35)) border-box border-box`,
                                                                    borderColor: `rgba(44, 73, 129, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(81, 127, 219), rgb(6, 14, 35))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"halloween-items"}
                                                                profileEffectTheme={"halloween-effect"} avatarEffectObj={"minions"} avatarTitle={"Minions"}
                                                                avatarImageName={"halloween-minions"} nitroExclusive={false} avatarReducedPrice={5.49} avatarPrice={7.99}
                                                                avatarTextDescription={"Name a more iconic duo."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(81, 127, 219), rgb(6, 14, 35)) border-box border-box`,
                                                                    borderColor: `rgba(44, 73, 129, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(81, 127, 219), rgb(6, 14, 35))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"halloween-items"}
                                                                profileEffectTheme={"halloween-effect"} avatarEffectObj={"jackOLantern"} avatarTitle={"Jack-o'-lantern"}
                                                                avatarImageName={"halloween-jack-o-lantern"} nitroExclusive={false} avatarReducedPrice={5.49} avatarPrice={7.99}
                                                                avatarTextDescription={"You can practically hear its eerie cackle..."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(81, 127, 219), rgb(6, 14, 35)) border-box border-box`,
                                                                    borderColor: `rgba(44, 73, 129, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(81, 127, 219), rgb(6, 14, 35))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />
                                                        </div>

                                                    )}
                                        </div>

                                        <div>
                                            <div className="shop-item-type-title-container">
                                                <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Profile Effects</div>
                                            </div>

                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={3} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"halloween-items"} profileEffectTheme={"halloween-effect"} profileThemeObj={"ghoulishGraffiti"}
                                                                nitroExclusive={false} profileEffectTitle={"Ghoulish Graffiti"} profileEffectTextDescription={"Did I scare you?"}
                                                                profileEffectPrice={3.99} profileEffectReducedPrice={2.99} hasHoverEffect={false}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(81, 127, 219), rgb(6, 14, 35)) border-box border-box`,
                                                                    borderColor: `rgba(44, 73, 129, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(81, 127, 219), rgb(6, 14, 35))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />

                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"halloween-items"} profileEffectTheme={"halloween-effect"} profileThemeObj={"zombieSlime"}
                                                                nitroExclusive={false} profileEffectTitle={"Zombie Slime"} profileEffectTextDescription={"I don't think you should touch that."}
                                                                profileEffectPrice={3.99} profileEffectReducedPrice={2.99} hasHoverEffect={false}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(81, 127, 219), rgb(6, 14, 35)) border-box border-box`,
                                                                    borderColor: `rgba(44, 73, 129, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(81, 127, 219), rgb(6, 14, 35))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />

                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"halloween-items"} profileEffectTheme={"halloween-effect"} profileThemeObj={"darkOmens"}
                                                                nitroExclusive={false} profileEffectTitle={"Dark Omens"} profileEffectTextDescription={"Who keeps summoning these things?"}
                                                                profileEffectPrice={3.99} profileEffectReducedPrice={2.99} hasHoverEffect={false}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(81, 127, 219), rgb(6, 14, 35)) border-box border-box`,
                                                                    borderColor: `rgba(44, 73, 129, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(81, 127, 219), rgb(6, 14, 35))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />
                                                        </div>
                                                    )}
                                        </div>
                                    </div>


                                    <div className="shop-item-categories-wrapper">
                                        {
                                            isLoadingShop ? (
                                                <div className="shop-banner-img">
                                                    <ShopItemCardGridSkeletonList listsToRender={1} />
                                                </div>
                                            ) :
                                                (
                                                    <div className="shop-banner-img shop-banner-fall">
                                                        <div className="shop-strife-banner-logo-halloween">
                                                            <StrifeBannerLogo width={124} height={24} className={'shop-strife-banner-logo-halloween-icon'} />
                                                        </div>
                                                        <img className="shop-fall-banner-logo" alt=" " />
                                                        <div className="shop-halloween-subtext" style={{ color: `white` }}>There's a calm and cozy vibe in the air.</div>
                                                    </div>
                                                )}

                                        <div>
                                            <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Avatar Decorations</div>

                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={4} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"}
                                                                shopItemCardType={"fall-items"}
                                                                profileEffectTheme={"fall-effect"}
                                                                avatarEffectObj={"fallLeaves"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(255, 194, 102), rgb(107, 25, 0)) border-box border-box`,
                                                                    borderColor: `rgba(183, 111, 52, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 194, 102), rgb(107, 25, 0))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                                avatarImageName={"fall-leaves-image"} nitroExclusive={false}
                                                                avatarTitle={"Fall Leaves"}
                                                                avatarTextDescription={"Behold nature's dance."}
                                                                avatarReducedPrice={5.49}
                                                                avatarPrice={7.99}
                                                            />


                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"}
                                                                shopItemCardType={"fall-items"} nitroExclusive={false}
                                                                profileEffectTheme={"fall-effect"}
                                                                avatarEffectObj={"pumpkinSpice"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(255, 194, 102), rgb(107, 25, 0)) border-box border-box`,
                                                                    borderColor: `rgba(183, 111, 52, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 194, 102), rgb(107, 25, 0))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                                avatarImageName={"fall-pumpkin-spice-image"}
                                                                avatarTitle={"Pumpkin Spice"}
                                                                avatarTextDescription={"Sweets and spice make everything nice."}
                                                                avatarReducedPrice={5.49}
                                                                avatarPrice={7.99}
                                                            />


                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"}
                                                                shopItemCardType={"fall-items"} nitroExclusive={false}
                                                                profileEffectTheme={"fall-effect"}
                                                                avatarEffectObj={"frogHat"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(255, 194, 102), rgb(107, 25, 0)) border-box border-box`,
                                                                    borderColor: `rgba(183, 111, 52, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 194, 102), rgb(107, 25, 0))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                                avatarImageName={"fall-frog-hat-image"}
                                                                avatarTitle={"Frog Hat"}
                                                                avatarTextDescription={"Frogs and fashion go together and you can't tell me otherwise."}
                                                                avatarReducedPrice={5.49}
                                                                avatarPrice={7.99}
                                                            />
                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} nitroExclusive={false}
                                                                shopItemCardType={"fall-items"}
                                                                profileEffectTheme={"fall-effect"}
                                                                avatarEffectObj={"foxHat"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(255, 194, 102), rgb(107, 25, 0)) border-box border-box`,
                                                                    borderColor: `rgba(183, 111, 52, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 194, 102), rgb(107, 25, 0))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                                avatarImageName={"fall-fox-hat-image"}
                                                                avatarTitle={"Fox Hat"}
                                                                avatarTextDescription={"Charming, cozy, and a little bit nosy."}
                                                                avatarReducedPrice={5.49}
                                                                avatarPrice={7.99}
                                                            />

                                                        </div>
                                                    )}

                                        </div>

                                        <div>
                                            <div className="shop-item-type-title-container">
                                                <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Profile Effects</div>
                                            </div>
                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={2} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">


                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"fall-items"} profileEffectTheme={"fall-effect"} profileThemeObj={"fallFoliage"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(255, 194, 102), rgb(107, 25, 0)) border-box border-box`,
                                                                    borderColor: `rgba(183, 111, 52, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 194, 102), rgb(107, 25, 0))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                                nitroExclusive={false} profileEffectTitle={"Fall Foliage"} profileEffectTextDescription={"Getting ready for sweater weather."}
                                                                profileEffectPrice={9.99} profileEffectReducedPrice={6.99}
                                                                hasHoverEffect={true}
                                                            />

                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"fall-items"} profileEffectTheme={"fall-effect"} profileThemeObj={"lillyPad"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(255, 194, 102), rgb(107, 25, 0)) border-box border-box`,
                                                                    borderColor: `rgba(183, 111, 52, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 194, 102), rgb(107, 25, 0))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                                nitroExclusive={false} profileEffectTitle={"Lillypad Life"} profileEffectTextDescription={"*ribbit*"}
                                                                profileEffectPrice={9.99} profileEffectReducedPrice={6.99}
                                                                hasHoverEffect={false}
                                                            />
                                                        </div>
                                                    )}
                                        </div>
                                    </div>


                                    <div className="shop-item-categories-wrapper">
                                        {
                                            isLoadingShop ? (
                                                <div className="shop-banner-img">
                                                    <ShopItemCardGridSkeletonList listsToRender={1} />
                                                </div>
                                            ) :
                                                (
                                                    <div className="shop-banner-img shop-banner-winter-wonderland">
                                                        <div className="shop-strife-banner-logo-halloween">
                                                            <StrifeBannerLogo width={124} height={24} className={'shop-strife-banner-logo-halloween-icon'} />
                                                        </div>
                                                        <img className="shop-banner-winter-wonderland-logo" alt=" " />
                                                        <div className="shop-halloween-subtext" style={{ color: `white` }}>tis the season</div>
                                                    </div>
                                                )}
                                        <div>
                                            <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Avatar Decorations</div>

                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={4} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">


                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"winter-wonderland-items"}
                                                                profileEffectTheme={"winter-wonderland-effect"} avatarEffectObj={"newYear2024"} avatarTitle={"New Year"}
                                                                avatarImageName={"winter-wonderland-new-year"} nitroExclusive={false} avatarReducedPrice={3.99} avatarPrice={4.99}
                                                                avatarTextDescription={"Ringing in 2024!"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(71, 126, 255), rgb(21, 77, 209)) border-box border-box`,
                                                                    borderColor: `rgba(45, 101, 230, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(66, 198, 255), rgb(0, 157, 255))`,
                                                                    color: `rgb(0, 0, 0)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"winter-wonderland-items"}
                                                                profileEffectTheme={"winter-wonderland-effect"} avatarEffectObj={"freshPine"} avatarTitle={"Fresh Pine"}
                                                                avatarImageName={"winter-wonderland-fresh-pine"} nitroExclusive={false} avatarReducedPrice={3.99} avatarPrice={4.99}
                                                                avatarTextDescription={"Ah...the smell of Winter."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(71, 126, 255), rgb(21, 77, 209)) border-box border-box`,
                                                                    borderColor: `rgba(45, 101, 230, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(66, 198, 255), rgb(0, 157, 255))`,
                                                                    color: `rgb(0, 0, 0)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"winter-wonderland-items"}
                                                                profileEffectTheme={"winter-wonderland-effect"} avatarEffectObj={"snowGlobe"} avatarTitle={"Snowglobe"}
                                                                avatarImageName={"winter-wonderland-snow-globe"} nitroExclusive={false} avatarReducedPrice={3.99} avatarPrice={4.99}
                                                                avatarTextDescription={"Try not to shake too hard."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(71, 126, 255), rgb(21, 77, 209)) border-box border-box`,
                                                                    borderColor: `rgba(45, 101, 230, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(66, 198, 255), rgb(0, 157, 255))`,
                                                                    color: `rgb(0, 0, 0)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"winter-wonderland-items"}
                                                                profileEffectTheme={"winter-wonderland-effect"} avatarEffectObj={"stringLights"} avatarTitle={"String Lights"}
                                                                avatarImageName={"winter-wonderland-string-lights"} nitroExclusive={false} avatarReducedPrice={3.99} avatarPrice={4.99}
                                                                avatarTextDescription={"String up some holiday cheer."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(71, 126, 255), rgb(21, 77, 209)) border-box border-box`,
                                                                    borderColor: `rgba(45, 101, 230, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(66, 198, 255), rgb(0, 157, 255))`,
                                                                    color: `rgb(0, 0, 0)`
                                                                }}
                                                            />

                                                        </div>
                                                    )}
                                        </div>

                                        <div>
                                            <div className="shop-item-type-title-container">
                                                <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Profile Effects</div>
                                            </div>
                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={2} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"winter-wonderland-items"} profileEffectTheme={"winter-wonderland-effect"} profileThemeObj={"deckTheHalls"}
                                                                nitroExclusive={false} profileEffectTitle={"Deck the halls"} profileEffectTextDescription={"Keep out of reach from cats"}
                                                                profileEffectPrice={4.99} profileEffectReducedPrice={3.99} hasHoverEffect={true}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(71, 126, 255), rgb(21, 77, 209)) border-box border-box`,
                                                                    borderColor: `rgba(45, 101, 230, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(66, 198, 255), rgb(0, 157, 255))`,
                                                                    color: `rgb(0, 0, 0)`
                                                                }}
                                                            />

                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"winter-wonderland-items"} profileEffectTheme={"winter-wonderland-effect"} profileThemeObj={"snowyShenanigans"}
                                                                nitroExclusive={false} profileEffectTitle={"Snowy Shenanigans"} profileEffectTextDescription={"Gone in a flurry."}
                                                                profileEffectPrice={4.99} profileEffectReducedPrice={3.99} hasHoverEffect={true}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(71, 126, 255), rgb(21, 77, 209)) border-box border-box`,
                                                                    borderColor: `rgba(45, 101, 230, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(66, 198, 255), rgb(0, 157, 255))`,
                                                                    color: `rgb(0, 0, 0)`
                                                                }}
                                                            />

                                                        </div>
                                                    )}
                                        </div>
                                    </div>


                                    <div className="shop-item-categories-wrapper">
                                        {
                                            isLoadingShop ? (
                                                <div className="shop-banner-img">
                                                    <ShopItemCardGridSkeletonList listsToRender={1} />
                                                </div>
                                            ) :
                                                (
                                                    <div className="shop-banner-img shop-banner-fantasy">
                                                        <div className="shop-strife-banner-logo-halloween">
                                                            <StrifeBannerLogo width={124} height={24} className={'shop-strife-banner-logo-halloween-icon'} />
                                                        </div>
                                                        <img className="shop-banner-fantasy-logo" alt=" " />
                                                        <div className="shop-halloween-subtext" style={{ color: `white` }}>There's a calm and cozy vibe in the air.</div>
                                                    </div>
                                                )}

                                        <div>
                                            <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Avatar Decorations</div>
                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={8} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"fantasy-items"}
                                                                profileEffectTheme={"fantasy-effect"} avatarEffectObj={"flamingSword"} avatarTitle={"Flaming Sword"}
                                                                avatarImageName={"fantasy-flaming-sword"} nitroExclusive={false} avatarReducedPrice={6.99} avatarPrice={9.99}
                                                                avatarTextDescription={"Slaying the look and the monsters."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
                                                                    borderColor: `rgba(11, 61, 40, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(2, 136, 55), rgb(0, 107, 75))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"fantasy-items"}
                                                                profileEffectTheme={"fantasy-effect"} avatarEffectObj={"magicPotion"} avatarTitle={"Magical Potion"}
                                                                avatarImageName={"fantasy-magic-potion"} nitroExclusive={false} avatarReducedPrice={6.99} avatarPrice={9.99}
                                                                avatarTextDescription={"Drink at your own risk."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
                                                                    borderColor: `rgba(11, 61, 40, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(2, 136, 55), rgb(0, 107, 75))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"fantasy-items"}
                                                                profileEffectTheme={"fantasy-effect"} avatarEffectObj={"fairySprites"} avatarTitle={"Fairy Sprites"}
                                                                avatarImageName={"fantasy-fairy-sprites"} nitroExclusive={false} avatarReducedPrice={6.99} avatarPrice={9.99}
                                                                avatarTextDescription={"Here to guide you on your path."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
                                                                    borderColor: `rgba(11, 61, 40, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(2, 136, 55), rgb(0, 107, 75))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />


                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"fantasy-items"}
                                                                profileEffectTheme={"fantasy-effect"} avatarEffectObj={"wizardsStaff"} avatarTitle={"Wizard's Staff"}
                                                                avatarImageName={"fantasy-wizard-staff"} nitroExclusive={false} avatarReducedPrice={6.99} avatarPrice={9.99}
                                                                avatarTextDescription={"How much power does it hold?"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
                                                                    borderColor: `rgba(11, 61, 40, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(2, 136, 55), rgb(0, 107, 75))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />


                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"fantasy-items"}
                                                                profileEffectTheme={"fantasy-effect"} avatarEffectObj={"glowingRunes"} avatarTitle={"Glowing Runes"}
                                                                avatarImageName={"fantasy-glowing-runes"} nitroExclusive={false} avatarReducedPrice={6.99} avatarPrice={9.99}
                                                                avatarTextDescription={"I wonder what these symbols mean."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
                                                                    borderColor: `rgba(11, 61, 40, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(2, 136, 55), rgb(0, 107, 75))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />


                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"fantasy-items"}
                                                                profileEffectTheme={"fantasy-effect"} avatarEffectObj={"defensiveShield"} avatarTitle={"Defensive Shield"}
                                                                avatarImageName={"fantasy-defensive-shield"} nitroExclusive={false} avatarReducedPrice={6.99} avatarPrice={9.99}
                                                                avatarTextDescription={"Use against pointy things."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
                                                                    borderColor: `rgba(11, 61, 40, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(2, 136, 55), rgb(0, 107, 75))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />


                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"fantasy-items"}
                                                                profileEffectTheme={"fantasy-effect"} avatarEffectObj={"skullMedallion"} avatarTitle={"Skull Medallion"}
                                                                avatarImageName={"fantasy-skull-medallion"} nitroExclusive={false} avatarReducedPrice={6.99} avatarPrice={9.99}
                                                                avatarTextDescription={"Earned through unknown means."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
                                                                    borderColor: `rgba(11, 61, 40, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(2, 136, 55), rgb(0, 107, 75))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />


                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"fantasy-items"}
                                                                profileEffectTheme={"fantasy-effect"} avatarEffectObj={"treasureNKey"} avatarTitle={"Treasure and Key"}
                                                                avatarImageName={"fantasy-treasure-n-key"} nitroExclusive={false} avatarReducedPrice={6.99} avatarPrice={9.99}
                                                                avatarTextDescription={"What glorious treasures lie within?"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
                                                                    borderColor: `rgba(11, 61, 40, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(2, 136, 55), rgb(0, 107, 75))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />

                                                        </div>
                                                    )
                                            }
                                        </div>
                                        <div>
                                            <div className="shop-item-type-title-container">
                                                <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Profile Effects</div>
                                            </div>
                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={4} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"fantasy-items"} profileEffectTheme={"fantasy-effect"} profileThemeObj={"hydroBlast"}
                                                                nitroExclusive={false} profileEffectTitle={"Hydro Blast"} profileEffectTextDescription={"Time to make a splash."}
                                                                profileEffectPrice={11.99} profileEffectReducedPrice={8.49} hasHoverEffect={false}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
                                                                    borderColor: `rgba(11, 61, 40, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(2, 136, 55), rgb(0, 107, 75))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />

                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"fantasy-items"} profileEffectTheme={"fantasy-effect"} profileThemeObj={"sakuraDreams"}
                                                                nitroExclusive={false} profileEffectTitle={"Sakura Dreams"} profileEffectTextDescription={"Close your eyes, and breathe."}
                                                                profileEffectPrice={11.99} profileEffectReducedPrice={8.49} hasHoverEffect={true}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
                                                                    borderColor: `rgba(11, 61, 40, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(2, 136, 55), rgb(0, 107, 75))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />


                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"fantasy-items"} profileEffectTheme={"fantasy-effect"} profileThemeObj={"mysticVines"}
                                                                nitroExclusive={false} profileEffectTitle={"Mystic Vines"} profileEffectTextDescription={"Why touch grass when you can touch magical vines?"}
                                                                profileEffectPrice={11.99} profileEffectReducedPrice={8.49} hasHoverEffect={true}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
                                                                    borderColor: `rgba(11, 61, 40, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(2, 136, 55), rgb(0, 107, 75))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />


                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"fantasy-items"} profileEffectTheme={"fantasy-effect"} profileThemeObj={"pixieDust"}
                                                                nitroExclusive={false} profileEffectTitle={"Pixie Dust"} profileEffectTextDescription={"Did a pixie sneeze nearby?"}
                                                                profileEffectPrice={11.99} profileEffectReducedPrice={8.49} hasHoverEffect={false}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
                                                                    borderColor: `rgba(11, 61, 40, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(2, 136, 55), rgb(0, 107, 75))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />

                                                        </div>
                                                    )}
                                        </div>
                                    </div>

                                    <div className="shop-item-categories-wrapper">

                                        {
                                            isLoadingShop ? (
                                                <div className="shop-banner-img">
                                                    <ShopItemCardGridSkeletonList listsToRender={1} />
                                                </div>
                                            ) :
                                                (
                                                    <div className="shop-banner-img shop-banner-anime">
                                                        <div className="shop-strife-banner-logo-halloween">
                                                            <StrifeBannerLogo width={124} height={24} className={'shop-strife-banner-logo-halloween-icon'} />
                                                        </div>
                                                        <img className="shop-banner-anime-logo" alt=" " />
                                                        <div className="shop-halloween-subtext" style={{ color: `white` }}>There's a calm and cozy vibe in the air.</div>
                                                    </div>
                                                )}

                                        <div>
                                            <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Avatar Decorations</div>
                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={7} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"anime-items"}
                                                                profileEffectTheme={"anime-effect"} avatarEffectObj={"radiatingEnergy"} avatarTitle={"Radiating Energy"}
                                                                avatarImageName={"anime-radiating-energy"} nitroExclusive={false} avatarReducedPrice={5.49} avatarPrice={7.99}
                                                                avatarTextDescription={"Over EIGHT-THOUSAND-NINE-HUNDRED-NINETY-NINE!"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
                                                                    borderColor: `rgba(46, 68, 118, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(136, 68, 193), rgb(19, 104, 150))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"anime-items"}
                                                                profileEffectTheme={"anime-effect"} avatarEffectObj={"soulLeavingBody"} avatarTitle={"Soul Leaving Body"}
                                                                avatarImageName={"anime-soul-leaving-body"} nitroExclusive={false} avatarReducedPrice={5.49} avatarPrice={7.99}
                                                                avatarTextDescription={"Can I just disappear right now?"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
                                                                    borderColor: `rgba(46, 68, 118, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(136, 68, 193), rgb(19, 104, 150))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"anime-items"}
                                                                profileEffectTheme={"anime-effect"} avatarEffectObj={"sweatDrops"} avatarTitle={"Sweat Drops"}
                                                                avatarImageName={"anime-sweat-drops"} nitroExclusive={false} avatarReducedPrice={5.49} avatarPrice={7.99}
                                                                avatarTextDescription={"*laughs nervously*"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
                                                                    borderColor: `rgba(46, 68, 118, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(136, 68, 193), rgb(19, 104, 150))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"anime-items"}
                                                                profileEffectTheme={"anime-effect"} avatarEffectObj={"starryEyed"} avatarTitle={"Starry Eyed"}
                                                                avatarImageName={"anime-starry-eyed"} nitroExclusive={false} avatarReducedPrice={5.49} avatarPrice={7.99}
                                                                avatarTextDescription={"Feelin' sparkly."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
                                                                    borderColor: `rgba(46, 68, 118, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(136, 68, 193), rgb(19, 104, 150))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />


                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"anime-items"}
                                                                profileEffectTheme={"anime-effect"} avatarEffectObj={"inLove"} avatarTitle={"In Love"}
                                                                avatarImageName={"anime-in-love"} nitroExclusive={false} avatarReducedPrice={5.49} avatarPrice={7.99}
                                                                avatarTextDescription={"uwu"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
                                                                    borderColor: `rgba(46, 68, 118, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(136, 68, 193), rgb(19, 104, 150))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"anime-items"}
                                                                profileEffectTheme={"anime-effect"} avatarEffectObj={"shocked"} avatarTitle={"Shocked"}
                                                                avatarImageName={"anime-shocked"} nitroExclusive={false} avatarReducedPrice={5.49} avatarPrice={7.99}
                                                                avatarTextDescription={"Nani?!!"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
                                                                    borderColor: `rgba(46, 68, 118, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(136, 68, 193), rgb(19, 104, 150))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"anime-items"}
                                                                profileEffectTheme={"anime-effect"} avatarEffectObj={"angry"} avatarTitle={"Angry"}
                                                                avatarImageName={"anime-angry"} nitroExclusive={false} avatarReducedPrice={5.49} avatarPrice={7.99}
                                                                avatarTextDescription={"How dare you."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
                                                                    borderColor: `rgba(46, 68, 118, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(136, 68, 193), rgb(19, 104, 150))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />

                                                        </div>
                                                    )}
                                        </div>


                                        <div>
                                            <div className="shop-item-type-title-container">
                                                <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Profile Effects</div>
                                            </div>
                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={4} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"anime-items"} profileEffectTheme={"anime-effect"} profileThemeObj={"magicHearts"}
                                                                nitroExclusive={false} profileEffectTitle={"Magic Hearts"} profileEffectTextDescription={"Moon Prism Power, Make Up!"}
                                                                profileEffectPrice={11.99} profileEffectReducedPrice={8.49} hasHoverEffect={false}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
                                                                    borderColor: `rgba(46, 68, 118, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(136, 68, 193), rgb(19, 104, 150))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />

                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"anime-items"} profileEffectTheme={"anime-effect"} profileThemeObj={"shatterEffect"}
                                                                nitroExclusive={false} profileEffectTitle={"Shatter"} profileEffectTextDescription={"Ouch, my windows!"}
                                                                profileEffectPrice={11.99} profileEffectReducedPrice={8.49} hasHoverEffect={true}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
                                                                    borderColor: `rgba(46, 68, 118, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(136, 68, 193), rgb(19, 104, 150))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />

                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"anime-items"} profileEffectTheme={"anime-effect"} profileThemeObj={"shurikenStrike"}
                                                                nitroExclusive={false} profileEffectTitle={"Shuriken Strike"} profileEffectTextDescription={"Every side is the pointy end."}
                                                                profileEffectPrice={11.99} profileEffectReducedPrice={8.49} hasHoverEffect={true}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
                                                                    borderColor: `rgba(46, 68, 118, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(136, 68, 193), rgb(19, 104, 150))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />

                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"anime-items"} profileEffectTheme={"anime-effect"} profileThemeObj={"powerSurge"}
                                                                nitroExclusive={false} profileEffectTitle={"Power Surge"} profileEffectTextDescription={"You're about to witness true power."}
                                                                profileEffectPrice={11.99} profileEffectReducedPrice={8.49} hasHoverEffect={false}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
                                                                    borderColor: `rgba(46, 68, 118, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(136, 68, 193), rgb(19, 104, 150))`,
                                                                    color: `rgb(255, 255, 255)`
                                                                }}
                                                            />

                                                        </div>
                                                    )}
                                        </div>

                                    </div>


                                    <div className="shop-item-categories-wrapper">
                                        {
                                            isLoadingShop ? (
                                                <div className="shop-banner-img">
                                                    <ShopItemCardGridSkeletonList listsToRender={1} />
                                                </div>
                                            ) :
                                                (
                                                    <div className="shop-banner-img shop-banner-breakfast">
                                                        <div className="shop-strife-banner-logo-halloween">
                                                            <StrifeBannerLogo width={124} height={24} className={'shop-strife-banner-logo-halloween-icon'} />
                                                        </div>
                                                        <img className="shop-banner-breakfast-logo" alt=" " />
                                                        <div className="shop-halloween-subtext" style={{ color: `white` }}>Breakfast is definitely the most important meal of the day.</div>
                                                    </div>
                                                )}
                                        <div>
                                            <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Avatar Decorations</div>
                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={6} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"breakfast-items"}
                                                                profileEffectTheme={"breakfast-effect"} avatarEffectObj={"toast"} avatarTitle={"Toast"}
                                                                avatarImageName={"breakfast-items-toast"} nitroExclusive={false} avatarReducedPrice={2.99} avatarPrice={3.99}
                                                                avatarTextDescription={"It is toast."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(232, 177, 105), rgb(122, 59, 0)) border-box border-box`,
                                                                    borderColor: `rgba(176, 117, 54, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 196, 87), rgb(255, 149, 56))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"breakfast-items"}
                                                                profileEffectTheme={"breakfast-effect"} avatarEffectObj={"morningCoffee"} avatarTitle={"Morning Coffee"}
                                                                avatarImageName={"breakfast-items-morning-coffee"} nitroExclusive={false} avatarReducedPrice={2.99} avatarPrice={3.99}
                                                                avatarTextDescription={"Don't talk to me until I finish this."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(232, 177, 105), rgb(122, 59, 0)) border-box border-box`,
                                                                    borderColor: `rgba(176, 117, 54, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 196, 87), rgb(255, 149, 56))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"breakfast-items"}
                                                                profileEffectTheme={"breakfast-effect"} avatarEffectObj={"friedEgg"} avatarTitle={"Fried Egg"}
                                                                avatarImageName={"breakfast-items-fried-eggs"} nitroExclusive={false} avatarReducedPrice={2.99} avatarPrice={3.99}
                                                                avatarTextDescription={"I like mine sunny side-up."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(232, 177, 105), rgb(122, 59, 0)) border-box border-box`,
                                                                    borderColor: `rgba(176, 117, 54, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 196, 87), rgb(255, 149, 56))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"breakfast-items"}
                                                                profileEffectTheme={"breakfast-effect"} avatarEffectObj={"blueberryJam"} avatarTitle={"Blueberry Jam"}
                                                                avatarImageName={"breakfast-items-blueberry-jam"} nitroExclusive={false} avatarReducedPrice={2.99} avatarPrice={3.99}
                                                                avatarTextDescription={"MMMM JUICY."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(232, 177, 105), rgb(122, 59, 0)) border-box border-box`,
                                                                    borderColor: `rgba(176, 117, 54, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 196, 87), rgb(255, 149, 56))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />


                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"breakfast-items"}
                                                                profileEffectTheme={"breakfast-effect"} avatarEffectObj={"donut"} avatarTitle={"Donut"}
                                                                avatarImageName={"breakfast-items-donuts"} nitroExclusive={false} avatarReducedPrice={2.99} avatarPrice={3.99}
                                                                avatarTextDescription={"Never enough sprinkles."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(232, 177, 105), rgb(122, 59, 0)) border-box border-box`,
                                                                    borderColor: `rgba(176, 117, 54, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 196, 87), rgb(255, 149, 56))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"breakfast-items"}
                                                                profileEffectTheme={"breakfast-effect"} avatarEffectObj={"pancakes"} avatarTitle={"Pancakes"}
                                                                avatarImageName={"breakfast-items-pancakes"} nitroExclusive={false} avatarReducedPrice={2.99} avatarPrice={3.99}
                                                                avatarTextDescription={"How high can you stack 'em?"}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(232, 177, 105), rgb(122, 59, 0)) border-box border-box`,
                                                                    borderColor: `rgba(176, 117, 54, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 196, 87), rgb(255, 149, 56))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />

                                                        </div>
                                                    )
                                            }
                                        </div>


                                        <div>
                                            <div className="shop-item-type-title-container">
                                                <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Profile Effects</div>
                                            </div>
                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={2} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"breakfast-items"} profileEffectTheme={"breakfast-effect"} profileThemeObj={"strifeOs"}
                                                                nitroExclusive={false} profileEffectTitle={"$TR!F3-Os"} profileEffectTextDescription={"Bet you can't have just one bowl."}
                                                                profileEffectPrice={11.99} profileEffectReducedPrice={8.49} hasHoverEffect={false}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(232, 177, 105), rgb(122, 59, 0)) border-box border-box`,
                                                                    borderColor: `rgba(176, 117, 54, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 196, 87), rgb(255, 149, 56))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />

                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"breakfast-items"} profileEffectTheme={"breakfast-effect"} profileThemeObj={"breakfastPlate"}
                                                                nitroExclusive={false} profileEffectTitle={"Breakfast Plate"} profileEffectTextDescription={"The best meal for any time of day."}
                                                                profileEffectPrice={11.99} profileEffectReducedPrice={8.49} hasHoverEffect={false}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(232, 177, 105), rgb(122, 59, 0)) border-box border-box`,
                                                                    borderColor: `rgba(176, 117, 54, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 196, 87), rgb(255, 149, 56))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />

                                                        </div>
                                                    )}
                                        </div>
                                    </div>

                                    <div className="shop-item-categories-wrapper">

                                        {
                                            isLoadingShop ? (
                                                <div className="shop-banner-img">
                                                    <ShopItemCardGridSkeletonList listsToRender={1} />
                                                </div>
                                            ) :
                                                (
                                                    <div className="shop-banner-img shop-banner-disxcore">
                                                        <div className="shop-strife-banner-logo-halloween">
                                                            <StrifeBannerLogo width={124} height={24} className={'shop-strife-banner-logo-halloween-icon'} />
                                                        </div>
                                                        <img className="shop-banner-disxcore-logo" alt=" " />
                                                        <div className="shop-halloween-subtext" style={{ color: `white` }}>Collect these sweet, bonus items when you join Nitro!{`${` `}`}
                                                            <span className="shop-bc-premium-unlock-hook" role="button" tabIndex={0} onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
                                                                <span className="shop-bc-premium-unlock-hook-text" style={{ color: `white` }}>Unlock with N!TR0</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                        <div>
                                            <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Avatar Decorations</div>
                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={3} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">


                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"disxcore-items"}
                                                                profileEffectTheme={"disxcore-effect"} avatarEffectObj={"disxcoreHeadset"} avatarTitle={"DISXCORE Headset"}
                                                                avatarImageName={"ssxcore-shakingBlueHeadset"} nitroExclusive={true} avatarReducedPrice={2.99} avatarPrice={3.99}
                                                                avatarTextDescription={"Everything sounds better with these on."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(116, 37, 101), rgb(17, 29, 64)) border-box border-box`,
                                                                    borderColor: `rgba(67, 33, 84, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 196, 87), rgb(255, 149, 56))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"disxcore-items"}
                                                                profileEffectTheme={"disxcore-effect"} avatarEffectObj={"futuristicUI"} avatarTitle={"Futuristic UI"}
                                                                avatarImageName={"ssxcore-tech-hud"} nitroExclusive={true} avatarReducedPrice={2.99} avatarPrice={3.99}
                                                                avatarTextDescription={"BEEP BOOP."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(116, 37, 101), rgb(17, 29, 64)) border-box border-box`,
                                                                    borderColor: `rgba(67, 33, 84, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 196, 87), rgb(255, 149, 56))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />

                                                            <AvatarDecorationItemCardContainer openModalType={openModal}
                                                                modalName={"avatarDecorationPreviewModal"} shopItemCardType={"disxcore-items"}
                                                                profileEffectTheme={"disxcore-effect"} avatarEffectObj={"greenSmoke"} avatarTitle={"Smoke"}
                                                                avatarImageName={"ssxcore-greenSmokeScreen"} nitroExclusive={true} avatarReducedPrice={2.99} avatarPrice={3.99}
                                                                avatarTextDescription={"Now you see me, now you don't."}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(116, 37, 101), rgb(17, 29, 64)) border-box border-box`,
                                                                    borderColor: `rgba(67, 33, 84, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 196, 87), rgb(255, 149, 56))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />

                                                        </div>
                                                    )
                                            }
                                        </div>


                                        <div>
                                            <div className="shop-item-type-title-container">
                                                <div className="shop-item-type shop-item-card-taller-card-padding" style={{ color: `var(--header-secondary)` }}>Profile Effects</div>
                                            </div>
                                            {
                                                isLoadingShop ? (
                                                    <div className="shop-item-cards-container shop-taller-item-cards-container">
                                                        <ShopItemCardGridSkeletonList listsToRender={2} />
                                                    </div>
                                                )
                                                    : (
                                                        <div className="shop-item-cards-container shop-taller-item-cards-container">

                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"disxcore-items"} profileEffectTheme={"disxcore-effect"} profileThemeObj={"boostedRelic"}
                                                                nitroExclusive={true} profileEffectTitle={"Boost Relic"} profileEffectTextDescription={"Legends say this could power an entire server..."}
                                                                profileEffectPrice={11.99} profileEffectReducedPrice={8.49} hasHoverEffect={true}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(116, 37, 101), rgb(17, 29, 64)) border-box border-box`,
                                                                    borderColor: `rgba(67, 33, 84, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 196, 87), rgb(255, 149, 56))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />

                                                            <ProfileEffectItemCardContainer openModalType={openModal} modalName={"profileEffectModal"}
                                                                shopItemCardType={"disxcore-items"} profileEffectTheme={"disxcore-effect"} profileThemeObj={"cyberSpace"}
                                                                nitroExclusive={true} profileEffectTitle={"Cyberspace"} profileEffectTextDescription={"Witness the entire world in motion."}
                                                                profileEffectPrice={11.99} profileEffectReducedPrice={8.49} hasHoverEffect={true}
                                                                styleProps={{
                                                                    background: `linear-gradient(rgb(116, 37, 101), rgb(17, 29, 64)) border-box border-box`,
                                                                    borderColor: `rgba(67, 33, 84, 0.4)`,
                                                                    boxShadow: `none`
                                                                }}
                                                                buttonStyleProps={{
                                                                    background: `linear-gradient(90deg,rgb(255, 196, 87), rgb(255, 149, 56))`,
                                                                    color: `rgb(0,0,0)`
                                                                }}
                                                            />

                                                        </div>
                                                    )}
                                        </div>
                                    </div>
                                </div>

                            </main>
                        </div>
                        <div className="shop-page-bottom-seperator"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StrifeShop;