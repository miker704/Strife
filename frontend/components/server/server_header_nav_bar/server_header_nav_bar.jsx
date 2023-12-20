import React from "react";
import { useEffect, useState, useRef } from "react";
import { HashIcon, HelpIcon, HideMembersListIcon, InboxIcon, LoudSpeakerIcon, NotificationBellIcon, NotificationBellMutedIcon, PinnedIcon, SearchMagIcon, SearchXIcon, ThreadsIcon, UpdateReadyIcon } from "../../front_end_svgs/Strife_svgs";
import { Tooltip } from "react-tooltip";

const ServerHeaderNavBar = (props) => {

    // if (!props.currentChannel) {
    //     return null;
    // }
    const [channelName, setChannelName] = useState('');
    const [channelType, setChannelType] = useState(1);
    const [showUpdate, setShowUpdate] = useState(false);
    const [muteNotifications, setMuteNotifications] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        showUpdateProbability();

        if (props.currentChannel?.id || props.currentChannel?.channel_name || props.currentChannel?.channel_type) {
            props.fetchChannel(props.currentChannelId)
            setChannelName(props.currentChannel.channel_name);
            setChannelType(props.currentChannel.channel_type);
        }

        return function cleanup () {
            if (props.errors.length > 0) {
                props.removeServerErrors();
            }
            if (props.channelErrors.length > 0) {
                props.removeChannelErrors()
            }
        }
    }, [props.currentChannel?.id, props.currentChannel?.channel_name, props.currentChannel?.channel_type]);

    const showUpdateProbability = () => {
        let probability = Math.random() > 0.99;
        probability === true ? setShowUpdate(true) : setShowUpdate(false);
    }

    const handleRemoveUpdateIcon = (e) => {
        e.preventDefault();
        setShowUpdate(false);
        props.history.push(`/$/updating/`);
    }

    let hideMembersToolTipMessage = props._viz === false ? ("Hide Member List") : ("Show Member List");

    return (
        <section className="server-header-bar">
            <div className="server-header-nav-bar-upper-container">
                <div className="server-bar-children">
                    <div id="normDm" className={`server-children-icon-wrapper`}>

                        {
                            channelType === 1 ? (
                                <HashIcon className={`icon-server-hashtag`} />
                            ) : (
                                <LoudSpeakerIcon className={`icon-server-mega-phone`} />
                            )
                        }
                    </div>

                    <div id="normal-chat" className={`server-hbar-name`}>

                        <h3 className="server-hbar-name-header">{channelName}</h3>

                    </div>

                    <div className="shb-spacer"></div>

                </div>
                <div className="shb-tool-bar">

                    <div className="shb-tool-icon-wrapper" data-tooltip-place="bottom" data-tooltip-id="thread-tip-shnb" data-tooltip-content={'Threads'}
                        onMouseEnter={(e) => setHovered(true)}
                        onMouseLeave={(e) => setHovered(false)}>

                        <ThreadsIcon className="icon-shnb-thread" />
                    </div>

                    <div className="shb-tool-icon-wrapper" data-tooltip-place="bottom" data-tooltip-id="thread-tip-shnb" data-tooltip-content={'Notification Settings'}
                        onClick={(e) => setMuteNotifications(!muteNotifications)}
                        onMouseEnter={(e) => setHovered(true)}
                        onMouseLeave={(e) => setHovered(false)}
                    >
                        {
                            !muteNotifications ? (
                                <NotificationBellIcon className="icon-shnb-ns" />
                            ) : (
                                <NotificationBellMutedIcon className="icon-shnb-ns" />
                            )
                        }

                    </div>

                    <div className="shb-tool-icon-wrapper" data-tooltip-place="bottom" data-tooltip-id="thread-tip-shnb" data-tooltip-content={'Pinned Messages'}
                        onMouseEnter={(e) => setHovered(true)}
                        onMouseLeave={(e) => setHovered(false)}>
                        <PinnedIcon className="icon-shnb-pin-messages" />
                    </div>

                    <div
                        className={`shb-tool-icon-wrapper`}
                        data-tooltip-place="bottom"
                        data-tooltip-id="thread-tip-shnb" data-tooltip-content={`${hideMembersToolTipMessage}`}
                        onClick={() => props.isViz()}
                        onMouseEnter={(e) => setHovered(true)}
                        onMouseLeave={(e) => setHovered(false)}
                    >
                        <HideMembersListIcon className={`icon-hide-members-list ${props._viz === false ? `selected` : ``}`} />
                    </div>

                    <div className="shbar-search-bar-wrapper" >
                        <div className="shbar-search-bar-inner-wrapper">
                            <div className="shbar-search-bar">
                                <div className="shbar-draft-edit">
                                    <div className="shbar-public-draft-edit">
                                        <div className="shbar-public-draft-edit-placeholder">Search</div>
                                    </div>
                                    <div className="shbar-public-draft-editor-container">
                                        <div className="shbar-public-draft-editor-container-placeholder">
                                            <div className="shbar-data-contents">
                                                <div className="shbar-data-block">
                                                    <div className="shbar-data-key-offset">
                                                        <span className="shbar-data-key-offset2"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shbar-mag-icon-container">
                                    <div className="shnb-mag-container">
                                        <SearchMagIcon className="shnb-mag-icon-2-visible" />
                                        <SearchXIcon className="shnb-mag-icon-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
export default ServerHeaderNavBar;
