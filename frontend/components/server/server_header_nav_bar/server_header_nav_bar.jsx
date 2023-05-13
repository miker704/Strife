import React from "react";
import ReactTooltip from "react-tooltip";
import { useEffect, useState} from "react";

const ServerHeaderNavBar = ({
    // props,
    currentUser,
    server,
    channels,
    currentChannelId,
    serverId,
    currentChannel,
    isViz,
    _viz,
    fetchServer,
    errors,
    channelErrors,
    removeChannelErrors,
    removeServerErrors,
    fetchChannel


}) => {

    // if(!currentChannel){
    //     return null;
    // }
    const [channelName, setChannelName] = useState('');
    const [channelType, setChannelType] = useState(1);

    useEffect(() => {
        if (currentChannel?.id || currentChannel?.channel_name || currentChannel?.channel_type) {
            fetchChannel(currentChannelId)
            setChannelName(currentChannel.channel_name);
            setChannelType(currentChannel.channel_type);
        }
        return function cleanup () {
            if (errors.length > 0) {
                removeServerErrors();
            }
            if (channelErrors.length > 0) {
                removeChannelErrors()
            }
        }
    }, [currentChannel?.id, currentChannel?.channel_name, currentChannel?.channel_type])

    let hideMembersToolTipMessage = _viz === false ? ("Hide Member List"):("Show Member List");

    return (
        <div className="server-header-bar">
            <div className="server-bar-children">
                <div id="normDm" className={`server-children-icon-wrapper`}>

                    <svg width="24" height="24" viewBox="0 0 24 24"
                        className={`icon-server-hashtag ${channelType === 1 ? `` : `is-hidden`}`}
                        x="0" y="0" aria-hidden="true" role="img">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 
                    5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 
                    15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 
                    7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 
                    3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 
                    3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 
                    7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 
                    20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 
                    21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 
                    7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
                        </path>
                    </svg>

                    <svg x="0" y="0" className={`icon-server-mega-phone ${channelType === 2 ? `` : `is-hidden`}`}
                        aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 
                        10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 
                        20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 
                        5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 
                        12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 
                        15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z" aria-hidden="true">
                        </path>
                    </svg>
                </div>

                <div id="normal-chat" className={`server-hbar-name`}>

                    <h3 className="server-hbar-name-header">{channelName}</h3>

                </div>

                <div className="shb-spacer"></div>
            </div>
            <div className="shb-tool-bar">

                <div className="shb-tool-icon-wrapper" data-tip data-for="thread-tip" >
                    <svg x="0" y="0" className="icon-thread" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill="currentColor" d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 
                        17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991
                         9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 
                         7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 
                         3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 
                         3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 
                         8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 
                         20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z">
                        </path>
                        <path fill="currentColor" d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 
                            12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 
                            14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 
                            21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z">
                        </path>
                    </svg>
                    <ReactTooltip
                        className="thread-tool-tip"
                        textColor="#B9BBBE"
                        backgroundColor="#191919"
                        id="thread-tip"
                        place="bottom"
                        effect="solid">
                        Threads
                    </ReactTooltip>
                </div>
                <div className="shb-tool-icon-wrapper" data-tip data-for="Notification-Settings">
                    <svg x="0" y="0" className="icon-ns" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
                            d="M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 
                        3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z">
                        </path>
                    </svg>
                    <ReactTooltip
                        className="Notification-Settings-tool-tip"
                        textColor="#B9BBBE"
                        backgroundColor="#191919"
                        id="Notification-Settings"
                        place="bottom"
                        effect="solid">
                        Notification Settings
                    </ReactTooltip>
                </div>
                <div className="shb-tool-icon-wrapper" data-tip data-for="pin-messages">
                    <svg x="0" y="0" className="icon-pin-messages" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596
                             8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 
                             18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z">
                        </path>
                    </svg>
                    <ReactTooltip
                        className="pinned-messages-tool-tip"
                        textColor="#B9BBBE"
                        backgroundColor="#191919"
                        id="pin-messages"
                        place="bottom"
                        effect="solid">
                        Pinned Messages
                    </ReactTooltip>
                </div>



                <div
                    // className={`shb-tool-icon-wrapper ${membersOfthisServer.length < 3 ? "is-hidden" : ""}`} 
                    className={`shb-tool-icon-wrapper`}
                    data-tip data-for="hide-members-tip"
                    onClick={() => isViz()}
                >
                    <svg x="0" y="0" className={`icon-hide-members-list ${_viz === false ? `selected` : ``}`} aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10
                                                 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 
                                                 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z">
                        </path>
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 8.00598C14 10.211 
                                                12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 
                                                4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 
                                                19.006V20.006H2V19.006Z">
                        </path>
                        <path fill="currentColor" d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697
                                                     14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z">
                        </path>
                        <path fill="currentColor" d="M14.8834 11.9077C16.6657 11.5044 18.0001 
                                                    9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 
                                                    5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 
                                                    11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z">
                        </path>
                    </svg>
                    <ReactTooltip
                        className="shb-hide-members-tool-tip "
                        textColor="#B9BBBE"
                        backgroundColor="#191919"
                        id="hide-members-tip"
                        place="bottom"
                        effect="solid">
                        {hideMembersToolTipMessage}
                    </ReactTooltip>
                </div>
                <div className="shbar-search-bar-wrapper" >
                    <div className="shbar-search-bar-inner-wrapper">
                        <div className="shbar-search-bar">
                            <div className="draft-edit">
                                <div className="public-draft-edit">
                                    <div className="public-draft-edit-placeholder">Search</div>
                                </div>
                                <div className="public-draft-editor-container">
                                    <div className="public-draft-editor-container-placeholder">
                                        <div className="data-contents">
                                            <div className="data-block">
                                                <div className="data-key-offset">
                                                    <span className="data-key-offset2"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shbar-mag-icon-container">
                                <div className="mag-container">
                                    <svg className="mag-icon-2-visible" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18
                                                     7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 
                                                     4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 
                                                     18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397
                                                      16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758
                                                       5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 
                                                       16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z">
                                        </path>
                                    </svg>
                                    <svg className="mag-icon-2" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 
                                                        13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shb-tool-icon-wrapper" data-tip data-for="inbox-messages-tip">
                    <svg x="0" y="0" className="icon-dms-inbox" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21
                                     19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" fill="currentColor">
                        </path>
                    </svg>
                    <ReactTooltip
                        className="shb-inbox-message-tool-tip"
                        textColor="#B9BBBE"
                        backgroundColor="#191919"
                        id="inbox-messages-tip"
                        place="bottom"
                        effect="solid">
                        Inbox
                    </ReactTooltip>
                </div>

                <a className="help-tool-bar" href="https://support.discord.com" target="_blank">
                    <div className="help-tool-bar-icon-wrapper" data-tip data-for="help-messages-tip">
                        <svg x="0" y="0" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515
                                         22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31
                                          15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13
                                           13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896
                                            10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z">
                            </path>
                        </svg>
                        <ReactTooltip
                            className="shb-help-tool-tip"
                            textColor="#B9BBBE"
                            backgroundColor="#191919"
                            id="help-messages-tip"
                            place="bottom"
                            effect="solid">
                            Help
                        </ReactTooltip>
                    </div>
                </a>

            </div>
        </div>
    )





}
export default ServerHeaderNavBar;



