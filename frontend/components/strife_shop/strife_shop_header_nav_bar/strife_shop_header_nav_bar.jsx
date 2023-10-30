import React from "react";
import { useEffect, useState, useRef } from "react";
import { HelpIcon, InboxIcon, StrifeBannerLogo, StrifeNitroBadgeIcon } from "../../front_end_svgs/Strife_svgs";
import { Tooltip } from "react-tooltip";


const StrifeShopHeaderNavBar = (props) => {
    const [hovered, setHovered] = useState(false);

    return (
        <section className="shop-header-nav-bar">
            <div className="shop-header-nav-bar-upper-container">
                <div className="shop-header-nav-bar-children">
                    <StrifeBannerLogo width={124} height={24} className={'shop-header-nav-bar-icon'} />
                    <div className="shop-header-nav-bar-title-wrapper">
                        <h1 className="shop-header-nav-bar-title-contents">Shop</h1>
                    </div>
                </div>
                <div className="shb-tool-bar">
                    <div className="shb-tool-icon-wrapper" data-tooltip-place="bottom" data-tooltip-id="thread-tip-shnb" data-tooltip-content={'Inbox'}
                        onMouseEnter={(e) => setHovered(true)}
                        onMouseLeave={(e) => setHovered(false)}>
                        <InboxIcon className="icon-shnb-inbox" />
                    </div>
                    <a className="shnb-help-tool-bar" href="https://support.discord.com" target="_blank" rel="noreferrer noopener">
                        <div className="shnb-help-tool-bar-icon-wrapper" data-tooltip-place="bottom" data-tooltip-id="thread-tip-shnb" data-tooltip-content={'Help'}
                            onMouseEnter={(e) => setHovered(true)}
                            onMouseLeave={(e) => setHovered(false)}>
                            <HelpIcon className="icon-shnb-help" />
                        </div>
                    </a>
                </div>
            </div>
            <Tooltip className="thread-tool-tip" id="thread-tip-shnb" place="bottom" closeOnResize={true} isOpen={hovered} />
        </section>
    )
}

export default StrifeShopHeaderNavBar;