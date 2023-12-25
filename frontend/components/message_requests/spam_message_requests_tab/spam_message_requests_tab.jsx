import React from "react";
import { useEffect, useState, useRef } from "react";

const SpamMessageRequestsTab = (props) => {


    return (
        <div className="msg-requests-main-page-contents">
            <div className="msg-requests-main-page-emptyState-container" style={{ flex: `1 1 auto` }}>
                <div className="msg-requests-main-page-emptyState-img"></div>
                <div className="msg-requests-main-page-emptyState-img-text-container" style={{ flex: `0 1 auto` }}>
                    <div className="msg-requests-main-page-emptyState-img-text">There are no Spam message requests. Here's Wumpus for now.</div>
                </div>
            </div>
        </div>
    )


}

export default SpamMessageRequestsTab;