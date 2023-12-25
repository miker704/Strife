import React from "react";
import { useEffect, useState, useRef } from "react";
import { HelpIcon, InboxIcon, MessageRequestsEnvelopeIcon, UpdateReadyIcon } from "../../front_end_svgs/Strife_svgs";
import { Tooltip } from "react-tooltip";

const MessageRequestsHeaderNavBar = (props) => {
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
        <section className="msg-reqs-header-nav-bar">
            <div className="msg-reqs-header-nav-bar-upper-container">
                <div className="msg-reqs-header-nav-bar-children">
                    <div className="msg-reqs-header-nav-bar-icon-wrapper">
                        < MessageRequestsEnvelopeIcon className="msg-reqs-header-icon" height={24} width={24} />
                    </div>
                    <div className="msg-reqs-header-nav-bar-title-wrapper">
                        <h1 className="msg-reqs-header-nav-bar-title-contents">
                            Message Requests
                        </h1>
                    </div>
                    <div className="mrhnb-divider-spacer"></div>
                    <div className="mrhnb-top-pill" role="tablist" aria-orientation="horizontal" aria-label="Message Requests">
                        <div onClick={() => props.handleClick("requests")} className={`mrhnb-tab-item ${props.tabType.requests ? `selected` : ``}`} role="tab" aria-selected={`${props.tabType.requests ? true : false}`} aria-controls="requests-tab" aria-disabled={false} tabIndex={`${props.tabType.requests ? 0 : -1}`}>Requests</div>
                        <div onClick={() => props.handleClick("spam")} className={`mrhnb-tab-item ${props.tabType.spam ? `selected` : ``}`} role="tab" aria-selected={`${props.tabType.spam ? true : false}`} aria-controls="spam-tab" aria-disabled={false} tabIndex={`${props.tabType.spam ? 0 : -1}`}>Spam</div>
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

                    <div className="mrhnb-recent-icons">
                        <div className="shb-tool-icon-wrapper" data-tooltip-place="bottom" data-tooltip-id="thread-tip-shnb" data-tooltip-content={'Inbox'}
                            onMouseEnter={(e) => setHovered(true)}
                            onMouseLeave={(e) => setHovered(false)}>
                            <InboxIcon className="icon-shnb-inbox" />
                        </div>
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

export default MessageRequestsHeaderNavBar;