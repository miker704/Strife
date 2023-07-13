import React from "react";
import { useRef, useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
import GroupChatIcon from '../../../../app/assets/images/groupChatIcon.svg';
import ReactTooltip from "react-tooltip";
import { requestAllLevelThreeFriends } from "../../../utils/friendship_api_util";
import { fetchServers } from "../../../utils/server_api_util";
import { fetchDmServers } from "../../../utils/dm_server_api_util";




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
    const [showPopup, setShowPopup] = useState(false);
    const [popupTop, setPopupTop] = useState(0);
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
    const [hovered, setHovered] = useState(false);
    const [querySet, setQuerySet] = useState(false);
    const [quickSwitchActiveText, setQuickSwitchActiveText] = useState(false);


    useEffect(() => {
        if (searchText.length === 0) {
            document.getElementById('arrow-horz-1').style.transform = `translateY(0px) translateZ(0px)`;
            document.getElementById('arrow-horz-2').style.transform = `translateY(0px) translateZ(0px)`;
            setYCoord(0);
        }
    }, [searchText]);


    useEffect(() => {
        if (searchText === 0) {
            document.getElementById('arrow-horz-1').style.transform = `translateY(0px) translateZ(0px)`;
            document.getElementById('arrow-horz-2').style.transform = `translateY(0px) translateZ(0px)`;
            setYCoord(0);
        }
        else {
            document.getElementById('arrow-horz-1').style.transform = `translateY(${y_Coord}px) translateZ(0px)`;
            document.getElementById('arrow-horz-2').style.transform = `translateY(${y_Coord}px) translateZ(0px)`;
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
                App.StrifeCore.perform('parse_Invites_To_Existing_DmServer_INVOKE_DMS_REFRESH', { dm_member_id: friend.id, dm_server_id: newDmServer.id });
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

    const generateDmServerIconColor = (dmServer) => {

        let membersOfThisDmS = Object.values(dmServer.members);
        let color_tag = "";
        if (membersOfThisDmS.length === 2) {
            let user = membersOfThisDmS.filter(member => member.id !== props.currentUser.id);
            color_tag = user[0].color_tag;
        }
        else if (membersOfThisDmS.length > 2) {
            let user = membersOfThisDmS.at(-1);
            color_tag = user.color_tag;
        }
        return color_tag;
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


    const extractServers = props.servers.map((server, idx) => {
        server.username = server.server_name;
        server.TYPE = "SERVER";
        server.searchQuery = "*";
        return server;
    })

    const getChannels = extractServers.map((server, idx) => {
        for (let channel of Object.values(server.channels)) {
            channel.server_name = server.server_name;
            channel.username = channel.channel_name;
            if (channel.channel_type === 1) {
                channel.TYPE = "TEXT_CHANNEL";
                channel.searchQuery = "#";
            }
            else {
                channel.TYPE = "VOICE_CHANNEL";
                channel.searchQuery = "!";
            }
        }
        return Object.values(server.channels);
    }).flat(Infinity);
    //voice channels are locked
    const voiceChannelsArray = getChannels.filter((channel, idx) => {
        return channel.channel_type === 2;
    })
    const textChannelsArray = getChannels.filter((channel, idx) => {
        return channel.channel_type === 1;
    })


    const extractFriends = props.friends.map((friend, idx) => { friend.TYPE = "FRIEND"; friend.searchQuery = '@'; return friend; })
    const extractDmServers = props.dmServers.map((dmServer, idx) => {
        dmServer.TYPE = "DM_SERVER";
        dmServer.searchQuery = "$";
        let name = generateDmServerName(dmServer);
        dmServer.username = name;
        dmServer.dm_server_name = name;
        dmServer.color_tag = generateDmServerIconColor(dmServer);
        return dmServer;
    })


    const _LiveSearch_ = () => {
        let search_query = document.getElementById('uas-search').value;
        let allItems = document.querySelectorAll("[role=option]");
        let serverItems = document.querySelectorAll(`[id^='uid_100 server-item-']`);
        let dmServerItems = document.querySelectorAll(`[id^='uid_100 dmServer-item-']`);
        let friendItems = document.querySelectorAll(`[id^='uid_100 friend-item-']`);
        let textChannelItems = document.querySelectorAll(`[id^='uid_100 text-channel-item-']`);
        let voiceChannelItems = document.querySelectorAll(`[id^='uid_100 voice-channel-item-']`);

        let selectedQuery = null;
        let hideAllQuery = null;
        let quickSelect = false;
        let count = 0;
        let foundCount = 0;
        switch (search_query[0]) {
            case '!':
                hideAllQuery = document.querySelectorAll(`[id^='uid_100']:not([id^='uid_100 voice-channel-item-'])`);
                hideAllQuery.forEach((item) => item.classList.add("is-hidden"))
                selectedQuery = voiceChannelItems;
                quickSelect = true;
                break;
            case '#':
                hideAllQuery = document.querySelectorAll(`[id^='uid_100']:not([id^='uid_100 text-channel-item-'])`);
                hideAllQuery.forEach((item) => item.classList.add("is-hidden"))

                selectedQuery = textChannelItems;
                quickSelect = true;

                break;
            case '*':
                hideAllQuery = document.querySelectorAll(`[id^='uid_100']:not([id^='uid_100 server-item-'])`);
                hideAllQuery.forEach((item) => item.classList.add("is-hidden"))
                selectedQuery = serverItems;
                quickSelect = true;

                break;
            case '@':
                hideAllQuery = document.querySelectorAll(`[id^='uid_100']:not([id^='uid_100 friend-item-'])`);
                hideAllQuery.forEach((item) => item.classList.add("is-hidden"))
                selectedQuery = friendItems;
                quickSelect = true;

                break;
            case '$':
                hideAllQuery = document.querySelectorAll(`[id^='uid_100']:not([id^='uid_100 dmServer-item-'])`);
                hideAllQuery.forEach((item) => item.classList.add("is-hidden"))
                selectedQuery = dmServerItems;
                quickSelect = true;

                break;
            default:
                hideAllQuery = allItems;
                hideAllQuery.forEach((item) => item.classList.remove("is-hidden"))
                quickSelect = false;
                selectedQuery = allItems;
                break;
        }


        for (let i = 0; i < selectedQuery.length; i++) {


            if (quickSelect === true) {
                if (selectedQuery[i].innerText.toLowerCase().includes(search_query.slice(1).toLowerCase())) {
                    selectedQuery[i].classList.remove("is-hidden");
                    foundCount++;
                }
                else {
                    selectedQuery[i].classList.add("is-hidden");
                    count++;
                }
            }
            else {
                if (selectedQuery[i].innerText.toLowerCase().includes(search_query.toLowerCase())) {
                    selectedQuery[i].classList.remove("is-hidden");
                    foundCount++;
                }
                else {
                    selectedQuery[i].classList.add("is-hidden");
                    count++;
                }
            }

        }

        if (count === selectedQuery.length) {
            document.getElementById("uid_100").classList.add('is-hidden');
            document.getElementById("no-match").classList.remove('is-hidden');
        }
        else {
            document.getElementById("no-match").classList.add('is-hidden');
            document.getElementById("uid_100").classList.remove('is-hidden');
        }


    }


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



    const getNewPos = (e) => {
        let currTop = e.currentTarget.getBoundingClientRect().top;
        if (currTop <= 302) {
            currTop = 99;
        }
        else if (currTop > 302 && currTop < 472) {
            currTop = currTop + 34 - 236;
        }

        setYCoord(currTop);
    }

    const adjustArrowPos = (e) => {
        let currTop = e.currentTarget.getBoundingClientRect().top;
        let x = e.clientX;
        let y = e.clientY;
        let newPos = currTop + 34 - 236;
        if (newPos > 304) {
            return;
        }
        setYCoord(newPos);
    }

    return (
        <div className="uas-wrapper">
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
                                                                    <svg width="16" height="16" viewBox="0 0 24 24" className="uasm-channel-hash-icon" aria-hidden="true" role="img">
                                                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 
                                                                            5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746
                                                                            2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946
                                                                            7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845
                                                                            3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891
                                                                            3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574
                                                                            7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301
                                                                            15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209
                                                                            20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 
                                                                            20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
                                                                        </path>
                                                                    </svg>
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
                                                        <div className="result-item-inner" id="v-channel" data-tip data-for="voice-channel-Strife-access">
                                                            <div className="result-item-server-guild-card-container">
                                                                <svg width="16" height="16" viewBox="0 0 24 24" className="uasm-channel-priv-ls-icon">
                                                                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M15 12C15 12.0007 15 
                                                                        12.0013 15 12.002C15 12.553 14.551 13.002 14 13.002V15.002C15.654 15.002 17 13.657 17 12.002C17
                                                                        12.0013 17 12.0007 17 12H15ZM19 12C19 12.0007 19 12.0013 19 12.002C19 14.759 16.757 17.002 14 
                                                                        17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 12.0013 21 12.0007 21 12H19ZM10.293 3.29604C10.579
                                                                        3.01004 11.009 2.92504 11.383 3.07904C11.757 3.23204 12 3.59904 12 4.00204V20.002C12 20.407 11.757 20.772
                                                                        11.383 20.927C11.009 21.082 10.579 20.996 10.293 20.71L6 16.002H3C2.45 16.002 2 15.552 2 15.002V9.00204C2
                                                                        8.45304 2.45 8.00204 3 8.00204H6L10.293 3.29604Z">
                                                                    </path>
                                                                    <path fill="currentColor" d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16
                                                                        9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 
                                                                        18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                            <div className="result-item-server-name">
                                                                <span className="result-item-match">{channel.channel_name}</span>
                                                                <span className="result-note">Voice Channels</span>
                                                            </div>
                                                            <div className="misc-x">
                                                                <div className="misc-x-content">{channel.server_name}</div>
                                                            </div>
                                                        </div>
                                                        <ReactTooltip
                                                            className="thread-tool-tip"
                                                            textColor="#B9BBBE"
                                                            backgroundColor="#191919"
                                                            id="voice-channel-Strife-access"
                                                            place="top"
                                                            effect="solid">
                                                            $TR!F3 N!TR0 needed to access
                                                        </ReactTooltip>
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
                                                                        <svg width="20" height="20" viewBox="0 0 20 20" className="uasm-avatar-mask" aria-hidden="true">
                                                                            <foreignObject x="0" y="0" width="20" height="20" mask="url(#svg-mask-avatar-default)">
                                                                                <div className="uasm-avatar-icon-stack">
                                                                                    <img className={`uasm-avatar group-chat-icon-color-${dmServer.color_tag}`} src={GroupChatIcon} alt=" " />
                                                                                </div>
                                                                            </foreignObject>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="result-item-server-name">
                                                                    <span className="result-item-match">{dmServer.dm_server_name}</span>
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
                                                                                        <img className={`uasm-avatar colors-${friend.color_tag}`} src={DefaultPFPSVG} alt=" " />
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
                                                                <div data-tip data-for="Message" className="uasm-friend-action-button" onClick={() => handleDm(friend)}>
                                                                    <svg className="uasm-friend-msg-svg-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 
                                                                            4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 
                                                                            17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 
                                                                            20.1925 3 19.198 3H4.79805Z">
                                                                        </path>
                                                                    </svg>
                                                                    <ReactTooltip
                                                                        className="thread-tool-tip"
                                                                        textColor="#B9BBBE"
                                                                        backgroundColor="#191919"
                                                                        id="Message"
                                                                        place="top"
                                                                        effect="solid">
                                                                        Message
                                                                    </ReactTooltip>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartConversationSearchBarModal;