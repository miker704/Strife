import React from "react";
import StrifeShopHeaderNavBarContainer from "../strife_shop_header_nav_bar/strife_shop_header_nav_bar_container";
import DMNavBarContainer from "../../dm_servers/dm_nav_bar/dm_nav_bar_container";
import { useEffect, useState, useRef } from "react";


const StrifeShop = (props) => {
    useEffect(() => {
        props.reSyncCurrentUser(props.currentUser.id);
    }, []);


    return (
        <div className="server-main-base">
            <div className="server-content">
                <DMNavBarContainer />
                <div className="shop-main-container">
                    <StrifeShopHeaderNavBarContainer />
                    <div className="shop-scroll auto-scroll-raw-attributes global-scroller-base" style={{overflow:`hidden scroll`, paddingRight:`0px`}}>
                        <div className="shop-page-wrapper">
                            <main className="shop-main-page">

                                <div className="shop-hero-banner"></div>
                                <div className="shop-banner-card"></div>
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
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