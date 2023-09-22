import React from "react";
import { useRef, useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
import GroupChatIcon from '../../../../app/assets/images/groupChatIcon.svg';
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { Tooltip } from "react-tooltip";
import { HashIcon, LoudSpeakerLockIcon, SMSIcon } from "../../front_end_svgs/Strife_svgs";

const StartConversationSearchBarModal = (props) => {


    useEffect(() => {
        window.addEventListener('keyup', props.handleESC, false);
        props.requestAllFriendships();
        return function cleanUp () {
            window.removeEventListener('keyup', props.handleESC, false);
        }
    }, []);

    const inputRef = useRef();
    const [searchText, setSearchText] = useState("");
    const dmMembersArray = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx]);
    const queryKeys = ['username', 'strife_id_tag', 'channel_name', 'server_name', 'channel_type'];
    // const queryShortCut = ['!', '@', '#', '*'];

    const [queryShortCut, setQueryShortCut] = useState({
        '!': false,
        '@': false,
        '#': false,
        '$': false,
        '*': false,
    })


    const [y_Coord, setYCoord] = useState(0);
    const [potentialResult, setPotentialResult] = useState(false);
    const [mouseOverScroll, setMouseOverScroll] = useState(false);
    const [quickSwitchActiveText, setQuickSwitchActiveText] = useState(false);


    useEffect(() => {
        if (searchText.length === 0) {

            let element1 = document.getElementById('arrow-horz-1');
            let element2 = document.getElementById('arrow-horz-2');
            if (element1 && element2) {
                // document.getElementById('arrow-horz-1').style.transform = `translateY(0px) translateZ(0px)`;
                // document.getElementById('arrow-horz-2').style.transform = `translateY(0px) translateZ(0px)`;
                element1.style.transform = `translateY(0px) translateZ(0px)`;
                element2.style.transform = `translateY(0px) translateZ(0px)`;
            }

            setYCoord(0);
        }
    }, [searchText]);


    useEffect(() => {
        let element1 = document.getElementById('arrow-horz-1');
        let element2 = document.getElementById('arrow-horz-2');
        if (searchText === 0) {
            // document.getElementById('arrow-horz-1').style.transform = `translateY(0px) translateZ(0px)`;
            // document.getElementById('arrow-horz-2').style.transform = `translateY(0px) translateZ(0px)`;
            if (element1 && element2) {
                element1.style.transform = `translateY(0px) translateZ(0px)`;
                element2.style.transform = `translateY(0px) translateZ(0px)`;
            }


            setYCoord(0);
        }
        else {
            // document.getElementById('arrow-horz-1').style.transform = `translateY(${y_Coord}px) translateZ(0px)`;
            // document.getElementById('arrow-horz-2').style.transform = `translateY(${y_Coord}px) translateZ(0px)`;

            if (element1 && element2) {
                element1.style.transform = `translateY(${y_Coord}px) translateZ(0px)`;
                element2.style.transform = `translateY(${y_Coord}px) translateZ(0px)`;
            }
        }

    }, [y_Coord, mouseOverScroll]);


    const handleDm = (friend) => {
        const memberIds = [props.currentUser.id, parseInt(friend.id)].sort((a, b) => a - b);
        let new_dm_members = [props.currentUser, friend];
        for (let dmServer of props.dmServers) {
            if (dmMembersArray(Object.values(dmServer.members).map((member) => member.id).sort((a, b) => a - b), memberIds)) {
                if (props.history.location.pathname !== `/$/channels/@me/${dmServer.id}`) {
                    props.history.push(`/$/channels/@me/${dmServer.id}`);
                }
                props.closeModal();
                return;
            }
        }
        // if dmserver does not already exists create one
        const dmMemberInfo = JSON.parse(JSON.stringify(new_dm_members));
        let newDmServerName = [];
        let dmServerName = "";
        for (let member of dmMemberInfo) {
            if (member.id !== props.currentUser.id) {
                newDmServerName.push(member.username);
            }
        }
        if (newDmServerName.length === 1) {
            dmServerName = newDmServerName.join();
        }
        else {
            dmServerName = newDmServerName.join(", ");
        }
        let submissionState = {
            owner_id: props.currentUser.id,
            dm_member_ids: memberIds
        }
        let newDmServer;
        props.createDmServer(submissionState).then((action) => {
            newDmServer = action.dmserver;
            props.reSyncCurrentUser(props.currentUserId).then(() => {
                props.history.push(`/$/channels/@me/${newDmServer.id}`);
                App.StrifeCore.perform('parse_New_Invited_DM_Member', { dm_member_id: friend.id, dm_server_id: newDmServer.id });
                props.closeModal();
            })
        });
        return;
    }

    const splitServerName = (serverName) => {
        let serverAcryo = serverName.split(" ").map((parts) => parts[0]).join("");
        return serverAcryo.length > 5 ? serverAcryo.slice(0, 5) : serverAcryo;
    }

    const generateFontSize = (serverAcryoName) => {
        if (serverAcryoName.length === 1) {
            return 12;
        }
        else if (serverAcryoName.length === 2 || serverAcryoName.length === 3) {
            return 10;
        }
        else if (serverAcryoName.length === 4) {
            return 8;
        }
        else if (serverAcryoName.length === 5) {
            return 6;
        }
        else if (serverAcryoName.length >= 6) {
            return 4;
        }
    }

    const renderDmServerPFP = (dmServer) => {
        let dmServerMembers = Object.values(dmServer.members);
        let user = "";
        if (dmServerMembers.length === 2) {
            for (let member of dmServerMembers) {
                if (member.id !== props.currentUserId) {
                    user = member;
                }
            }
        }
        else if (dmServerMembers.length > 2) {
            user = dmServerMembers.at(-1);
        }

        if (dmServerMembers.length === 2) {
            return (
                <svg width="20" height="20" viewBox="0 0 20 20" className="uasm-avatar-mask" aria-hidden="true">
                    <foreignObject x="0" y="0" width="20" height="20" mask="url(#svg-mask-avatar-default)">
                        <div className="uasm-avatar-icon-stack">
                            {
                                user.photo === undefined ? (
                                    <img className={`uasm-avatar color-${user.color_tag}`} src={DefaultPFPSVG} alt=" " aria-hidden="true" />
                                ) : (
                                    <img className="uasm-avatar" src={user.photo} alt=" " aria-hidden="true" />
                                )
                            }
                        </div>
                    </foreignObject>
                </svg>
            )
        }

        return (
            <svg width="20" height="20" viewBox="0 0 20 20" className="uasm-avatar-mask" aria-hidden="true">
                <foreignObject x="0" y="0" width="20" height="20" mask="url(#svg-mask-avatar-default)">
                    <div className="uasm-avatar-icon-stack">
                        <img className={`uasm-avatar group-chat-icon-color-${user.color_tag}`} src={GroupChatIcon} alt=" " />
                    </div>
                </foreignObject>
            </svg>
        )
    }

    const generateDmServerName = (dmServer) => {
        let displayName = "";
        if (dmServer.dm_server_name === null) {
            displayName = Object.values(dmServer.members).filter(member => member.id !== props.currentUser.id).map(member => member.username).join(", ");
        }
        else if (dmServer.dm_server_name !== null || dmServer.dm_server_name !== undefined || dmServer.dm_server_name !== "") {
            displayName = dmServer.dm_server_name;
        }
        return displayName;
    }

    const extractServers = props.servers;

    const getChannels = extractServers.map((server, idx) => {
        for (let channel of Object.values(server.channels)) { channel.server_name = server.server_name; }
        return Object.values(server.channels);
    }).flat(Infinity);
    //voice channels are locked
    const voiceChannelsArray = getChannels.filter((channel, idx) => {
        return channel.channel_type === 2;
    })
    const textChannelsArray = getChannels.filter((channel, idx) => {
        return channel.channel_type === 1;
    })

    const extractFriends = props.friends;
    const extractDmServers = props.dmServers;

    const liveSearch = () => {

        let allItems = document.querySelectorAll("[role=option]");
        let allHeaders = document.querySelectorAll(`[id^='ucth-']`)
        let search_query = document.getElementById('uas-search').value;
        let count = 0;
        let foundCount = 0;
        const quickSwitchKeys = ['!', '@', '#', '*', '$'];
        let qSK = false;
        let quickSwitchKey = '';

        if (quickSwitchKeys.includes(search_query[0])) {
            qSK = true;
            setQuickSwitchActiveText(true);
            quickSwitchKey = quickSwitchKeys[quickSwitchKeys.indexOf(search_query[0])]
            allHeaders.forEach((item) => {
                if (item.dataset.quickswitchkey !== quickSwitchKey) {
                    item.classList.add('is-hidden')
                }
                else {
                    item.classList.remove('is-hidden')
                }
            })
        }
        else {
            qSK = false;
            quickSwitchKey = "";
            setQuickSwitchActiveText(false);
            allHeaders.forEach((item) => {
                item.classList.remove('is-hidden')
            })
        }


        if (qSK === true) {

            for (let i = 0; i < allItems.length; i++) {

                if (allItems[i].dataset.quickswitchkey === quickSwitchKey && allItems[i].innerText.toLowerCase().includes(search_query.slice(1).toLowerCase())) {
                    allItems[i].classList.remove("is-hidden");
                    foundCount++;
                }
                else {
                    allItems[i].classList.add("is-hidden");
                    count++;
                }
            }
        }
        else {
            for (let i = 0; i < allItems.length; i++) {
                if (allItems[i].innerText.toLowerCase().includes(search_query.toLowerCase())) {
                    allItems[i].classList.remove("is-hidden");
                    foundCount++;
                }
                else {
                    allItems[i].classList.add("is-hidden");
                    count++;
                }
            }

        }

        if (count === allItems.length) {
            setPotentialResult(false);
            setYCoord(0);
            document.getElementById("uas-content-cont").classList.add('is-hidden');
            document.getElementById("no-match").classList.remove('is-hidden');
        }
        else {
            if (search_query.length === 0) {
                setYCoord(0);
                setPotentialResult(false);
            }
            if (search_query.length > 0) {
                setYCoord(99.99);
                setPotentialResult(true);
            }
            document.getElementById("no-match").classList.add('is-hidden');
            document.getElementById("uas-content-cont").classList.remove('is-hidden');
        }
    }


    const adjustArrowPos = (e) => {
        let currTop = e.currentTarget.getBoundingClientRect().top;
        let newPos = currTop + 34 - 236;
        if (newPos > 304) {
            return;
        }
        setYCoord(newPos);
    }

    return (

        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="uas-wrapper" onClick={(e) => props.closeModal()}>
                <div className="uas-backdrop"></div>
                <div className="uas-layer">
                    <div className="uas-layer-focus-lock">
                        <div className="uas-modal-container" onClick={(e) => e.stopPropagation()}>
                            <div className="uas-modal">
                                <input
                                    className="uas-search"
                                    id='uas-search'
                                    type="search"
                                    spellCheck={false}
                                    autoFocus ref={inputRef}
                                    placeholder="Where would you like to go?"
                                    onInput={() => liveSearch()}
                                    onChange={e => setSearchText(e.currentTarget.value)}
                                    value={searchText}
                                    role='combobox'
                                    aria-controls="uas-content-cont"
                                    aria-expanded="true"
                                    aria-autocomplete="list"
                                />
                                <div className="uasm-scroller auto-scroll-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `0px` }}
                                    onMouseEnter={(e) => {
                                        if (searchText.length > 0 && potentialResult === true) {
                                            setMouseOverScroll(true)
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        setMouseOverScroll(false)
                                    }}
                                >
                                    <div id="uas-content-cont" role={'listbox'} className="uas-content">
                                        <div className="uas-sep"></div>
                                        <div>
                                            <div id="ucth-servers" className="uas-content-type-header" data-quickswitchkey='*'>
                                                <div className="uas-content-header">{`${quickSwitchActiveText === true ? `Seaching Servers` : `Servers`}`}</div>
                                            </div>
                                            {
                                                extractServers.map((server, idx) => {

                                                    let serverAcryoName = splitServerName(server.server_name);

                                                    const serverAcryoIcon = server.server_Icon === undefined ? (
                                                        <div className="uas-no-guild-card-icon" style={{ fontSize: `${generateFontSize(serverAcryoName)}px` }}>
                                                            <div className="uas-serverAcryo" >{serverAcryoName}</div>
                                                        </div>
                                                    ) : ("");

                                                    const server_icon = server.server_Icon !== undefined ?
                                                        (<div className="uas-guild-card-icon" style={{ backgroundImage: `url(${server.server_Icon})` }}>
                                                        </div>
                                                        ) : ("");

                                                    return (
                                                        <div className="result-item"
                                                            onMouseEnter={(e) => {
                                                                if (mouseOverScroll === true) {
                                                                    if (searchText.length > 0 && potentialResult === true) {
                                                                        adjustArrowPos(e)
                                                                    }
                                                                }
                                                            }}
                                                            data-quickswitchkey='*'
                                                            id={`uid_100 server-item-${server.id}`} role={'option'} key={`server-${server.id}`}>
                                                            <Link to={`/$/channels/${server.id}/${server.general_channel_id}`} style={{ textDecoration: `none` }}
                                                                onClick={() => props.closeModal()}>
                                                                <div className="result-item-inner">
                                                                    <div className="result-item-server-guild-card-container">
                                                                        {serverAcryoIcon}
                                                                        {server_icon}
                                                                    </div>
                                                                    <div className="result-item-server-name">
                                                                        <span className="result-item-match">{server.server_name}</span>
                                                                    </div>
                                                                    <div className="misc-x"></div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div>
                                            <div id="ucth-text-channels" className="uas-content-type-header" data-quickswitchkey='#'>
                                                <div className="uas-content-header">{`${quickSwitchActiveText === true ? `Seaching Text Channels` : `Text Channels`}`}</div>
                                            </div>
                                            {
                                                textChannelsArray.map((channel, idx) => {
                                                    return (
                                                        <div className="result-item"
                                                            onMouseEnter={(e) => {
                                                                if (mouseOverScroll === true) {
                                                                    if (searchText.length > 0 && potentialResult === true) {
                                                                        adjustArrowPos(e)
                                                                    }
                                                                }
                                                            }}
                                                            data-quickswitchkey='#'
                                                            id={`uid_100 text-channel-item-${channel.server_id}`} role={'option'} key={`text-channel-${channel.id}`}>
                                                            <Link to={`/$/channels/${channel.server_id}/${channel.id}`} style={{ textDecoration: `none` }}
                                                                onClick={() => props.closeModal()}>
                                                                <div className="result-item-inner">
                                                                    <div className="result-item-server-guild-card-container">
                                                                        <HashIcon className="uasm-channel-hash-icon" />
                                                                    </div>
                                                                    <div className="result-item-server-name">
                                                                        <span className="result-item-match">{channel.channel_name}</span>
                                                                        <span className="result-note">Text Channels</span>
                                                                    </div>
                                                                    <div className="misc-x">
                                                                        <div className="misc-x-content">{channel.server_name}</div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                            }


                                        </div>

                                        <div>
                                            <div id="ucth-voice-channels" className="uas-content-type-header" data-quickswitchkey='!'>
                                                <div className="uas-content-header">{`${quickSwitchActiveText === true ? `Seaching Voice Channels` : `Voice Channels`}`}</div>
                                            </div>
                                            {
                                                voiceChannelsArray.map((channel, idx) => {
                                                    return (
                                                        <div className="result-item"
                                                            onMouseEnter={(e) => {
                                                                if (mouseOverScroll === true) {
                                                                    if (searchText.length > 0 && potentialResult === true) {
                                                                        adjustArrowPos(e)
                                                                    }
                                                                }
                                                            }}
                                                            data-quickswitchkey='!'
                                                            id={`uid_100 voice-channel-item-${channel.server_id}`} role={'option'} key={`voice-channel-${channel.id}`}>
                                                            {/* <Link to={`/$/channels/${channel.server_id}/${channel.id}`} style={{ textDecoration: `none` }} */}
                                                            {/* onClick={() => props.closeModal()}> */}
                                                            <div className="result-item-inner" id="v-channel" data-tooltip-place="top" data-tooltip-id="modal-tip-a" data-tooltip-content={'$TR!F3 N!TR0 needed to access'}>
                                                                <div className="result-item-server-guild-card-container">
                                                                    <LoudSpeakerLockIcon className="uasm-channel-priv-ls-icon" />
                                                                </div>
                                                                <div className="result-item-server-name">
                                                                    <span className="result-item-match">{channel.channel_name}</span>
                                                                    <span className="result-note">Voice Channels</span>
                                                                </div>
                                                                <div className="misc-x">
                                                                    <div className="misc-x-content">{channel.server_name}</div>
                                                                </div>
                                                            </div>
                                                            {/* </Link> */}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                        <div>
                                            <div id="ucth-dms" className="uas-content-type-header" data-quickswitchkey='$'>
                                                <div className="uas-content-header">{`${quickSwitchActiveText === true ? `Seaching DM's` : `DM's`}`}</div>
                                            </div>
                                            {
                                                extractDmServers.map((dmServer, idx) => {
                                                    let dmAvatar = renderDmServerPFP(dmServer);
                                                    let dmServerName = generateDmServerName(dmServer);

                                                    return (
                                                        <div className="result-item"
                                                            onMouseEnter={(e) => {
                                                                if (mouseOverScroll === true) {
                                                                    if (searchText.length > 0 && potentialResult === true) {
                                                                        adjustArrowPos(e)
                                                                    }
                                                                }
                                                            }}
                                                            data-quickswitchkey='$'
                                                            id={`uid_100 dmServer-item-${dmServer.id}`} role={'option'} key={`dmServer-${dmServer.id}`}>
                                                            <Link to={`/$/channels/@me/${dmServer.id}`} style={{ textDecoration: `none` }}
                                                                onClick={() => props.closeModal()}>
                                                                <div className="result-item-inner">
                                                                    <div className="result-item-server-guild-card-container">
                                                                        <div className="uasm-avatar-icon-wrapper">
                                                                            {dmAvatar}
                                                                        </div>
                                                                    </div>
                                                                    <div className="result-item-server-name">
                                                                        <span className="result-item-match">{dmServerName}</span>
                                                                    </div>
                                                                    <div className="misc-x"></div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div>
                                            <div id="ucth-friends" className="uas-content-type-header" data-quickswitchkey='@'>
                                                <div className="uas-content-header" >{`${quickSwitchActiveText === true ? `Seaching All Friends` : `Friends`}`}</div>
                                            </div>

                                            {
                                                extractFriends.map((friend, idx) => {
                                                    return (
                                                        <div className="result-item"
                                                            onMouseEnter={(e) => {
                                                                if (mouseOverScroll === true) {
                                                                    if (searchText.length > 0 && potentialResult === true) {
                                                                        adjustArrowPos(e)
                                                                    }
                                                                }
                                                            }}
                                                            data-quickswitchkey='@'
                                                            id={`uid_100 friend-item-${friend.id}`} role={'option'} key={`friend-${friend.id}`}>
                                                            <div className="result-item-inner">
                                                                <div className="result-item-server-guild-card-container">
                                                                    <div className="uasm-avatar-icon-wrapper">
                                                                        <svg width="20" height="20" viewBox="0 0 20 20" className="uasm-avatar-mask" aria-hidden="true">
                                                                            <foreignObject x="0" y="0" width="20" height="20" mask="url(#svg-mask-avatar-default)">
                                                                                <div className="uasm-avatar-icon-stack">
                                                                                    {
                                                                                        friend.photo === undefined ? (
                                                                                            <img className={`uasm-avatar color-${friend.color_tag}`} src={DefaultPFPSVG} alt=" " />
                                                                                        ) : (
                                                                                            <img className="uasm-avatar" src={friend.photo} alt=" " />
                                                                                        )
                                                                                    }
                                                                                </div>
                                                                            </foreignObject>
                                                                        </svg>
                                                                    </div>
                                                                </div>

                                                                <div className="result-item-server-name">
                                                                    <span className="result-item-match">{friend.username}</span>
                                                                    <span className="uas-friend-username">{friend.username}#{friend.strife_id_tag}</span>
                                                                </div>

                                                                <div className="uasm-friend-actions">
                                                                    <div data-tooltip-place="top" data-tooltip-id="modal-tip-a" data-tooltip-content={'Message'} className="uasm-friend-action-button" onClick={() => handleDm(friend)}>
                                                                        <SMSIcon className="uasm-friend-msg-svg-icon" />
                                                                    </div>
                                                                </div>
                                                                <div className="misc-x"></div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div id="no-match" className="emptyState-uas is-hidden">
                                    <div className="emptyState-uas-note">Can't seem to find what you're looking for?</div>
                                    <div className="emptyState-uas-note-anchor-container">
                                        <a className="emptyState-uas-anchor" href="https://support.discord.com/hc/en-us/articles/115000070311" target="_blank" rel="noreferrer noopener">
                                            Learn more about Quick Switcher
                                        </a>
                                    </div>
                                </div>

                                <div className={`uas-protip ${searchText.length > 0 ? `has-text` : ``}`} >
                                    <h3 className="uas-protip-h3">PROTIP:</h3>
                                    <div className="uas-sm-txt">
                                        {` `}Start searches with {` `}
                                        <span aria-label="Usernames" className="autoCompleteQuerySymbol">@</span>
                                        <span aria-label="Text Channels" className="autoCompleteQuerySymbol">#</span>
                                        <span aria-label="Voice Channels" className="autoCompleteQuerySymbol">!</span>
                                        <span aria-label="Servers" className="autoCompleteQuerySymbol">*</span>
                                        <span aria-label="DM's" className="autoCompleteQuerySymbol">$</span>
                                        {` `}to narrow results.{` `}
                                        <a className="uas-learn-more" href="https://support.discord.com/hc/en-us/articles/115000070311" target="_blank" rel="noreferrer noopener">Learn more</a>
                                    </div>
                                </div>
                                <div className={`uas-tutorial show-tutorial ${searchText.length === 0 ? `` : `has-query`}`}>
                                    <div className="uas-header-msgs">
                                        <div className="uas-header-message1">Search for servers, channels or DMs</div>
                                        <div className="uas-header-message2">Select a result and press ENTER to jump to it</div>
                                    </div>
                                    <div className="arrowGroup-1">
                                        <div id="arrow-horz-1" className="arrowGroup-container horz-arrows" style={{ transform: `translateY(0px) translateZ(0px)` }}>
                                            <img className="arrowIcon-3q" alt="arrow" />
                                        </div>
                                        <div className="arrowGroup-container diag-arrow1">
                                            <img className="arrowIcon-3q" alt="arrow" />
                                        </div>
                                        <div className="arrowGroup-container diag-arrow2">
                                            <img className="arrowIcon-3q" alt="arrow" />
                                        </div>
                                    </div>
                                    <div className="arrowGroup-1 right-arrow-group">
                                        <div id="arrow-horz-2" className="arrowGroup-container horz-arrows" style={{ transform: `translateY(0px) translateZ(0px)` }}>
                                            <img className="arrowIcon-3q" alt="arrow" />
                                        </div>
                                        <div className="arrowGroup-container diag-arrow1">
                                            <img className="arrowIcon-3q" alt="arrow" />
                                        </div>
                                        <div className="arrowGroup-container diag-arrow2">
                                            <img className="arrowIcon-3q" alt="arrow" />
                                        </div>
                                    </div>
                                </div>
                                <Tooltip className="thread-tool-tip" id="modal-tip-a" place="top" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL >
    )
}

export default StartConversationSearchBarModal;