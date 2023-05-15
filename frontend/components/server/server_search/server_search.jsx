import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactTooltip from "react-tooltip";
import ExploreServersNavBar from "./server_search_nav_bar";
import ActionButtonPopUpContainer from "./action_button_pop_up_container";

const ExploreServers = (props) => {


    useEffect(() => {
        // props.exploreServers();
        props.exploreServers(props.currentUserId);
        return function cleanUp () {
            if (props.errors.length > 0) {
                props.removeServerErrors();
            }
            props.clearUnexploredServers();
        }
    }, []);

    const inputRef = useRef();
    const [searchText, setSearchText] = useState("");
    const [showPopUp, setShowPopUp] = useState(false);
    const [selectedServer, toggleSelectedServer] = useState([]);
    const [selectedServerLink, setSelectedServerLink] = useState('');


    const handleSelectedServerLink = (server) => {
        setSelectedServerLink(server.invite_code);
    }


    const handleSelected = (server) => {
        toggleSelectedServer(server);
    }

    const handlePopupShow = (e) => {
        setShowPopUp(!showPopUp);
    }


    const liveSearch = () => {
        let allServers = document.querySelectorAll('.loaded-guilds');
        let search_query = document.getElementById('all-servers').value;
        let count = 0;
        for (let i = 0; i < allServers.length; i++) {
            if (allServers[i].innerText.toLowerCase().includes(search_query.toLowerCase())) {
                allServers[i].classList.remove("is-hidden");

            }
            else {
                allServers[i].classList.add("is-hidden");
                count++;
            }
        }

        if (count === allServers.length) {
            document.getElementById('gls').classList.add('is-hidden')
            document.getElementById('no-match').classList.remove('is-hidden')
        }
        else {
            document.getElementById('no-match').classList.add('is-hidden')
            document.getElementById('gls').classList.remove('is-hidden')
        }

    }


    const splitServerName = (serverName) => {
        let serverAcryo = serverName.split(" ").map((parts) => parts[0]).join("");
        return serverAcryo.length > 5 ? serverAcryo.slice(0, 5) : serverAcryo;
    }

    // const filterOutPrivateServers = Object.values(props.unExploredServers)
    //     .filter((server) => server.public === true)
    //     .filter((server) => Object.values(props.servers).find(sv => sv.id === server.id) === undefined)

    const checkIfJoinedServer = (server) => {
        let serverMembers = Object.values(server.users);
        return serverMembers.find((member) => member.id === props.currentUser.id) ? true : false;
    }
    const checkIfPrivateServer = (server) => {
        return server.public;
    }

    const getColorId = (server) => {
        let serverMembers = Object.values(server.users);
        let serverOwner = serverMembers.find((member) => member.id === server.server_owner_id);
        return serverOwner.color_tag;
    }


    const joinThisServer = (server) => {
        const serverSubState = {
            id: server.id,
            user_id: props.currentUser.id,
            server_name: server.server_name

        }
        props.joiningServer(server.invite_code).then((action) => {
            const joinedServer = action.server;
            props.reSyncCurrentUser(props.currentUserId).then(() => {
                props.history.push(`/$/channels/${joinedServer.id}/${joinedServer.general_channel_id}`)

            })
        })
    }


    const unExploredServers = Object.values(props.unExploredServers).map((server) => {
        const serverMembers = Object.values(server.users);
        const onlineServerMembers = serverMembers.filter((member) => member.online === true);
        const checkIfJoined = checkIfJoinedServer(server);
        const color_tag = getColorId(server);
        const publicServer = checkIfPrivateServer(server);
        const serverAcryo = server.server_Icon === undefined ?
            (
                <svg width="100" height="100" viewBox="0 0 48 48" className="purple-icon-bk" fill="currentColor">
                    <defs>
                        <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" >
                        </path>
                    </defs>
                    <foreignObject x="0" y="0" width="48" height="48">
                        <div className="bubble-wrap-bk" >
                            <div className="server-Acryo-bk" >{splitServerName(server.server_name)}</div>
                        </div>
                    </foreignObject>
                </svg>
            ) : ("");
        const serverPFP = server.server_Icon !== undefined ?
            (
                <img className="guild-card-splash-img" src={server.server_Icon} alt="SPFP" />
            ) : ('');

        const serverAcryoIcon = server.server_Icon === undefined ?
            (
                <svg width="48" height="48" viewBox="0 0 48 48" className="purple-bubbles" fill="currentColor">
                    <defs>
                        <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" >
                        </path>
                    </defs>
                    <foreignObject x="0" y="0" width="48" height="48">
                        <div className="bubble-wrap" >
                            <div className="server-Acryo" >{splitServerName(server.server_name)}</div>
                        </div>
                    </foreignObject>
                </svg>
            ) : ("");
        const serverPFPIcon = server.server_Icon !== undefined ?
            (
                <img className="guildIcon-img" src={server.server_Icon} alt="SPFP" />
            ) : ('');


        return (
            <div className="loaded-guilds" key={server.id}>
                <div className="guild-card">
                    <div className="guild-card-header">
                        <div className="guild-card-splash">
                            {serverAcryo}
                            {serverPFP}
                        </div>
                        <div className="action-buttons-layer">
                            <div className="action-buttons-container">
                                <div className="action-buttons-wrapper">
                                    <div className="action-button" data-tip data-for="guild-card-moar"
                                        onClick={(e) => {
                                            handleSelectedServerLink(server);
                                            handleSelected(server)
                                            handlePopupShow(e);
                                        }}>
                                        <svg className="action-button-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7 12.001C7 10.8964 6.10457 10.001 
                                                                            5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7
                                                                            12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954
                                                                             14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 
                                                                             13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z">
                                            </path>
                                        </svg>

                                        <ReactTooltip
                                            className="thread-tool-tip"
                                            textColor="#B9BBBE"
                                            backgroundColor="#191919"
                                            id="guild-card-moar"
                                            place="top"
                                            effect="solid">
                                            More
                                        </ReactTooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="guildIcon">
                            {serverAcryoIcon}
                            {serverPFPIcon}
                        </div>
                    </div>

                    {showPopUp && selectedServer.id === server.id && <ActionButtonPopUpContainer serverLink={selectedServerLink} setShowPopUp={setShowPopUp} />}
                    <div className="guild-card-info">
                        <div className="guild-card-title">
                            <div className={`guild-card-star fill-color-${color_tag}`} data-tip data-for="verified">
                                <svg aria-label="Verified" className="guild-card-star-icon" aria-hidden="false"
                                    role="img" width="16" height="16" viewBox="0 0 16 15.2">
                                    <path fill="currentColor" fillRule="evenodd" d="m16 7.6c0 .79-1.28 1.38-1.52
                                                                            2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 
                                                                            1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09
                                                                            1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 
                                                                            2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z">
                                    </path>
                                </svg>
                                <div className="guild-card-child-container">
                                    <svg className="guild-card-star-icon-2" aria-hidden="true" role="img" width="16" height="16"
                                        viewBox="0 0 16 15.2">
                                        <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor">
                                        </path>
                                    </svg>
                                </div>
                                <ReactTooltip
                                    className="thread-tool-tip"
                                    textColor="#B9BBBE"
                                    backgroundColor="#191919"
                                    id="verified"
                                    place="top"
                                    effect="solid">
                                    Verified
                                </ReactTooltip>
                            </div>
                            <h4 className="guild-card-h4-title">{server.server_name}</h4>
                        </div>
                        <div className="guild-card-text">
                            The official server for {server.server_name}, click to join now!
                        </div>
                        <div className="flex-to-end"
                            data-tip data-for={`${checkIfJoined === true ? `` : publicServer === false ? "PrivateServer" : ``}`}>
                            <button type="button"
                                className="faint-boost-shiny-button join-server"
                                disabled={checkIfJoined === true ? true : publicServer === false ? true : false}
                                onClick={() => {
                                    joinThisServer(server);
                                }}>
                                <div className="shiny-button-contents">
                                    {`${checkIfJoined === true ? `Server Joined` : publicServer === false ? `Private Server` : `Join Server`}`}
                                    <div className="shiny-button-container">
                                        <div className="shiny-button-flex">
                                            <div className="shiny-button-inner"></div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="guild-card-member-info">
                            <div className="guild-card-member-count">
                                <div className="guild-card-member-online-status"></div>
                                <div className="guild-card-member-count-txt">
                                    {onlineServerMembers.length}{` `}Online
                                </div>
                            </div>
                            <div className="guild-card-member-count">
                                <div className="guild-card-member-offline-status"></div>
                                <div className="guild-card-member-count-txt">
                                    {serverMembers.length}{` `}Members
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactTooltip
                    className="thread-tool-tip"
                    textColor="#B9BBBE"
                    backgroundColor="#191919"
                    id="PrivateServer"
                    place="top"
                    effect="solid">
                    Private Server Join Via Invite
                </ReactTooltip>
            </div>
        )
    })


    return (
        <div className="server-main-base">
            <ExploreServersNavBar />
            <div className="explore-server-base">
                <div className="explore-server-content">
                    <div className="explore-server-page-wrapper">
                        <div className="exs-drag-region"></div>
                        <div className="exs-main-content-scroller-base">
                            <div className="exs-view-wrapper">
                                <div className="exs-searchHeader">
                                    <img className="exs-searchImg" alt="exsimg" />
                                    <div className="exs-header-content-wrapper">
                                        <div className="exs-header-content">
                                            <h3 className="exs-search-title">Find Your Community on $TR!F3</h3>
                                            <div className="exs-search-subtitle">
                                                From gaming, to music, to learning, there's a place for you.
                                            </div>
                                            <div className="exs-search-content">
                                                <div className="exs-search">
                                                    <div className="exs-search-box">
                                                        <div className="exs-search-input-wrapper">
                                                            <input
                                                                className="exs-search-input"
                                                                type="search"
                                                                id="all-servers"
                                                                placeholder="Explore communities"
                                                                autoFocus={inputRef}
                                                                spellCheck={false}
                                                                onInput={() => liveSearch()}
                                                                onChange={(e) => setSearchText(e.currentTarget.value)}
                                                                value={searchText}
                                                            />

                                                        </div>
                                                        <svg className={`exs-search-icon ${searchText.length === 0 ? `` : `is-hidden`}`}
                                                            aria-label="Search" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 
                                                        7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 
                                                        5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 
                                                        13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 
                                                        14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 
                                                        4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 
                                                        14.243C13.109 15.376 11.603 16 10 16Z">
                                                            </path>
                                                        </svg>
                                                        <div className={`clear-exs-search-icon ${searchText.length === 0 ? `is-hidden` : ``}`}>
                                                            <svg className="clear-exs-icon close-exs-icon"
                                                                aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 14 14">
                                                                <path fill="currentColor" d="M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 
                                                                10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093
                                                                 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 
                                                                 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166
                                                                  9.19525Z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="exs-search-subtitle">
                                                Click to Join a Public Server, to Join a Private Server
                                                You must attain an Invite Link by the Server Owner or its Members.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                    <div id="no-match" className="epssc-flex is-hidden">
                                        <div className="empty-server-state-container">
                                            <div className="no-servers-found-img"></div>
                                            <h3 className="epssc-h3">No Results Found for{` `}{searchText}</h3>
                                            <div className="epssc-st">Try searching for something else.</div>
                                        </div>
                                    </div>


                                    <section className="guildListSection" id="gls">
                                        <h3 className="gls-h3">Featured communities</h3>
                                        <div className="guild-list">
                                            {unExploredServers}
                                        </div>
                                    </section>
                                </div>
                                <div className="explore-servers-footer-bar-container">
                                    <div className="explore-server-footer-bar-img"></div>
                                    <h2 className="exp-srv-footer-bar-header-2">There are more communities out there!</h2>
                                    <button type="button" className="exp-srv-footer-bar-button">
                                        <div className="exp-srv-footer-bar-button-contents">Try Searching for them.</div>
                                    </button>
                                </div>
                            </div>
                            <div className="exp-srv-footer-bar-sep"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default ExploreServers;