import React from "react";
import { useEffect, useState, useRef } from "react";
import { HelpIcon, InboxIcon, StrifeBannerLogo, UpdateReadyIcon } from "../../front_end_svgs/Strife_svgs";
import { Tooltip } from "react-tooltip";

const StrifeShopHeaderNavBar = (props) => {
    const [hovered, setHovered] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    useEffect(() => {
        showUpdateProbability();
    }, []);

    const showUpdateProbability = () => {
        let probability = Math.random() > 0.99;
        probability === true ? setShowUpdate(true) : setShowUpdate(false);
    }
    const handleRemoveUpdateIcon = (e) => {
        e.preventDefault();
        setShowUpdate(false);
        props.history.push(`/$/updating/`);
    }


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
                    {
                        showUpdate && (
                            <div className="shb-tool-icon-wrapper" data-tooltip-place="bottom" data-tooltip-id="thread-tip-shnb" data-tooltip-content={'Update Ready!'}
                                onClick={(e) => handleRemoveUpdateIcon(e)}
                                onMouseEnter={(e) => setHovered(true)}
                                onMouseLeave={(e) => setHovered(false)}>
                                <UpdateReadyIcon className="icon-shnb-update-ready" />
                            </div>
                        )
                    }
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