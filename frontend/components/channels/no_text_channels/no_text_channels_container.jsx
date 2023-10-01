import React from "react";
import { useState, useRef, useEffect } from "react";
const NoTextChannelsContainer = (props) => {
    return (
        <div className="no-channels-container">
            <div className="no-channels-container-wrapper">
                <div className="no-channels-img"></div>
                <div className="no-channels-container-flex-child">
                    <h2 className="no-channels-container-header">No Text Channels</h2>
                    <div className="no-channels-container-subtext">You find yourself in a strange place. You don't have access to any text channels, or there are none in this server.</div>
                </div>
            </div>
        </div>
    )
}
export default NoTextChannelsContainer;