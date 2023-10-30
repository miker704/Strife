import React from "react";
import { useEffect, useState, useRef } from "react";
import { StrifeNitroBadgeIcon } from "../../front_end_svgs/Strife_svgs";


const NitroHeaderNavBar = (props) => {
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
            </div>
        </section>
    )
}

export default NitroHeaderNavBar;