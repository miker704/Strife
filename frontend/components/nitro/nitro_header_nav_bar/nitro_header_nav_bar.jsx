import React from "react";
import { useEffect, useState, useRef } from "react";
import { StrifeNitroBadgeIcon, UpdateReadyIcon } from "../../front_end_svgs/Strife_svgs";
import { Tooltip } from "react-tooltip";

const NitroHeaderNavBar = (props) => {
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
        <section className="nitro-header-nav-bar">
            <div className="nitro-header-nav-bar-upper-container">
                <div className="nitro-header-nav-bar-children">
                    <div className="nitro-header-nav-bar-icon-wrapper">
                        <StrifeNitroBadgeIcon className="nhnbi-ball" height={24} width={24} />
                    </div>
                    <div className="nitro-header-nav-bar-title-wrapper">
                        <div className="nitro-header-nav-bar-title-contents">
                            Nitro
                        </div>
                    </div>
                </div>
                {
                    showUpdate && (
                        <div className="shb-tool-bar">
                            <div className="shb-tool-icon-wrapper" data-tooltip-place="bottom" data-tooltip-id="thread-tip-shnb" data-tooltip-content={'Update Ready!'}
                                onClick={(e) => handleRemoveUpdateIcon(e)}
                                onMouseEnter={(e) => setHovered(true)}
                                onMouseLeave={(e) => setHovered(false)}>
                                <UpdateReadyIcon className="icon-shnb-update-ready" />
                            </div>
                        </div>
                    )
                }
            </div>
            <Tooltip className="thread-tool-tip" id="thread-tip-shnb" place="bottom" closeOnResize={true} isOpen={hovered} />
        </section>
    )
}

export default NitroHeaderNavBar;