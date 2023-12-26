import React from "react";
import { useEffect, useRef, useState } from "react";
import ExploreServersNavBar from "./explore_servers_nav_bar";
import ActionButtonPopUpContainer from "./action_button_pop_up_container";
import {
    BackArrowIcon, ExploreServersSearchXIcon, ExploreServersChevronIcon, OverFlowEllipsisIcon,
    SearchMagIcon, VerifiedCheckIcon, VerifiedStarIcon, VerifiedPartnerIcon
} from "../../front_end_svgs/Strife_svgs";
import { Tooltip } from "react-tooltip";
import { GuildCardGridSkeletonList, GuildCardSearchSkeletonList } from "../../custom_input_components/guild_card_skeletons/guild_card_skeletons";

const ExploreServers = (props) => {

    useEffect(() => {

        setIsLoading(true);
        setCurrentlyInSearch(false);
        props.exploreServers(props.currentUserId).then((action) => {
            let servers = action.servers;
            setServers(Object.values(servers));
            setIsLoading(false);
        });
        return function cleanUp () {
            if (props.errors.length > 0) {
                props.removeServerErrors();
            }
            props.clearUnexploredServers();
        }
    }, []);


    const inputRef = useRef();
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [showPopUp, setShowPopUp] = useState(false);
    const [selectedServer, toggleSelectedServer] = useState([]);
    const [selectedServerLink, setSelectedServerLink] = useState('');
    const [boundingClient, setBoundingClient] = useState({});
    const [currentlyInSearch, setCurrentlyInSearch] = useState(false);
    const [inputHint, setShowInputHint] = React.useState(false);
    const [servers, setServers] = useState([]);


    const handlePopupShow = (e, server) => {
        setBoundingClient(e.currentTarget.getBoundingClientRect());
        setSelectedServerLink(server.invite_code);
        toggleSelectedServer(server);
        setShowPopUp(!showPopUp);
    }

    const splitServerName = (serverName) => {
        let serverAcryo = serverName.split(" ").map((parts) => parts[0]).join("");
        return serverAcryo.length > 5 ? serverAcryo.slice(0, 5) : serverAcryo;
    }

    const checkIfJoinedServer = (server) => {
        let serverMembers = Object.values(server.users);
        return serverMembers.find((member) => member.id === props.currentUser.id) ? true : false;
    }
    const checkIfPrivateServer = (server) => {
        return server.public;
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
    const hasFocus = () => { setShowInputHint(true) }
    const blurred = () => { setShowInputHint(false) }

    const checkInput = (e) => {
        if (e.currentTarget.value.length < 2) {
            setShowInputHint(false);
        }
        else {
            setShowInputHint(true);
        }
    }
    const _liveSearch = (item) => {
        return item.filter((item, idx) => {
            if (item.server_name.toLowerCase().includes(searchText.toLowerCase())) {
                return item;
            }
            else if (searchText === "") {
                return item;
            }
        })
    }

    const _resetSearch = () => {
        setSearchText("");
        setShowInputHint(false);
        inputRef.current.focus();
    }

    const unExploredServersSearchResults = _liveSearch(Object.values(props.unExploredServers)).map((server, serverIdx) => {
        const checkIfJoined = checkIfJoinedServer(server);
        const publicServer = checkIfPrivateServer(server);
        const randomNumber = Math.random();

        const defaultServerBanner = server.server_banner === undefined ?
            (
                <svg width="240" height="135" viewBox="0 0 48 48" className={`purple-icon-bk ${server.server_color_tag ? `color-${server.server_color_tag}` : ``}`} fill="currentColor">
                    <defs>
                        <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" >
                        </path>
                    </defs>
                    <foreignObject x="0" y="0" width="48" height="48">
                        <div className="bubble-wrap-bk" >
                            <div className="sr-server-Acryo-bk" >{splitServerName(server.server_name)}</div>
                        </div>
                    </foreignObject>
                </svg>
            ) : ("");
        const serverBanner = server.server_banner !== undefined ?
            (
                <img className="sr-guild-card-splash-img" src={server.server_banner} alt=" " width={240} />
            ) : ('');

        const defaultServerAvatar = server.server_Icon === undefined ?
            (
                <svg width="32" height="32" viewBox="0 0 32 32" className={`sr-guild-purple-bubbles ${server.server_color_tag ? `color-${server.server_color_tag}` : ``}`} fill="currentColor">
                    <defs>
                        <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" >
                        </path>
                    </defs>
                    <foreignObject x="0" y="0" width="32" height="32">
                        <div className="sr-bubble-wrap-guild" >
                            <div className="sr-server-Acryo-guild" >{splitServerName(server.server_name)}</div>
                        </div>
                    </foreignObject>
                </svg>
            ) : ("");

        const serverAvatar = server.server_Icon !== undefined ?
            (
                <svg width="32" height="32" className="guildIconAvatarSvg" viewBox="0 0 32 32">
                    <foreignObject x="0" y="0" width="32" height="32" overflow="visible" mask="url(#svg-mask-squircle)">
                        < img className="guildIconAvatar" src={server.server_Icon} alt=" " />
                    </foreignObject>
                </svg>
            ) : ("");

        return (

            <React.Fragment key={`guild-frag-key-${server.id}`}>
                <div className="loaded-guilds" key={server.id}>
                    <div className="sr-guild-card-container" role="button" tabIndex={0}>
                        <div className="sr-guild-splash-container">
                            {defaultServerBanner}
                            {serverBanner}
                        </div>
                        <div className="sr-guild-card-content">
                            <div className="sr-guild-card-header-container">
                                {defaultServerAvatar}
                                {serverAvatar}
                                <div className="sr-guild-card-header-name">
                                    <div>
                                        <div className={`sr-guild-card-star fill-color-${server.server_color_tag}`} data-tooltip-place="top" data-tooltip-id="thread-tip-verified"
                                            data-tooltip-content={`${randomNumber > 0.95 ? `$TR!F3 Partner` : randomNumber > 0.85 ? `Verified & Partnered` : `Verified`}`} >
                                            <VerifiedStarIcon className="guild-card-star-icon" />
                                            <div className="guild-card-child-container">
                                                {/* <VerifiedCheckIcon className="guild-card-star-icon-2" /> */}
                                                {
                                                    randomNumber > 0.95 ? (
                                                        <VerifiedPartnerIcon className="guild-card-star-icon-2" />
                                                    ) : (
                                                        <VerifiedCheckIcon className="guild-card-star-icon-2" />
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="sr-guild-card-h4-title">{server.server_name}</h2>
                                </div>
                            </div>
                            <div className="sr-guild-card-text">
                                The official server for {server.server_name}, click to join now!
                            </div>
                            <div className="sr-guild-card-member-info">
                                <div className="sr-guild-card-member-count">
                                    <div className="guild-card-member-online-status"></div>
                                    <div className="guild-card-member-count-txt">
                                        {server.presenceCount}{` `}Online
                                    </div>
                                </div>
                                <div className="sr-guild-member-count-seperator"></div>
                                <div className="sr-guild-card-member-count">
                                    <div className="guild-card-member-offline-status"></div>
                                    <div className="guild-card-member-count-txt">
                                        {server.memberCount}{` `}Members
                                    </div>
                                </div>
                                <div className="sr-guild-member-count-seperator"></div>
                            </div>
                            <div className="flex-to-bottom-sr-gc" >
                                <button type="button" data-tooltip-place="top" data-tooltip-content={'Private Server Join Via Invite'}
                                    data-tooltip-id={`${server.joined_server === true ? `` : server.public === false ? "thread-tip-exsp" : ``}`}
                                    className="faint-boost-shiny-button join-server"
                                    disabled={server.joined_server === true ? true : server.public === false ? true : false}
                                    onClick={() => {
                                        joinThisServer(server);
                                    }}>
                                    <div className="shiny-button-contents">
                                        {`${server.joined_server === true ? `Server Joined` : server.public === false ? `Private Server` : `Join Server`}`}
                                        <div className="shiny-button-container">
                                            <div className="shiny-button-flex">
                                                <div className="shiny-button-inner"></div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="sr-action-buttons-layer">
                            <div className="sr-action-buttons-container">
                                <div className="sr-action-buttons-wrapper">
                                    <div className="action-button" role="button" tabIndex={0} data-tooltip-place="top" data-tooltip-id="thread-tip-exsp" data-tooltip-content={'More'}
                                        onClick={(e) => {
                                            handlePopupShow(e, server);
                                        }}>
                                        <OverFlowEllipsisIcon className="action-button-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {showPopUp && selectedServer.id === server.id && <ActionButtonPopUpContainer serverLink={selectedServerLink} setShowPopUp={setShowPopUp} boundingClient={boundingClient} key={`action-button-${server.id}`} />}
                    </div>
                </div>
                <div className="sr-guild-card-seperator" key={`guild-card-server-sep-${server.id}`}></div>
            </React.Fragment>
        )
    })

    const unExploredServers = Object.values(props.unExploredServers).slice(0, 20).map((server) => {
        const checkIfJoined = checkIfJoinedServer(server);
        const publicServer = checkIfPrivateServer(server);
        const randomNumber = Math.random();
        const defaultServerBanner = server.server_banner === undefined ?
            (
                <svg width="100" height="100" viewBox="0 0 48 48" className={`purple-icon-bk ${server.server_color_tag ? `color-${server.server_color_tag}` : ``}`} fill="currentColor">
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
        const serverBanner = server.server_banner !== undefined ?
            (
                <img className="guild-card-splash-img" src={server.server_banner} alt=" " />
            ) : ('');

        const defaultServerAvatar = server.server_Icon === undefined ?
            (
                <svg width="48" height="48" viewBox="0 0 48 48" className={`guild-purple-bubbles ${server.server_color_tag ? `color-${server.server_color_tag}` : ``}`} fill="currentColor">
                    <defs>
                        <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" >
                        </path>
                    </defs>
                    <foreignObject x="0" y="0" width="48" height="48">
                        <div className="bubble-wrap-guild" >
                            <div className="server-Acryo-guild" >{splitServerName(server.server_name)}</div>
                        </div>
                    </foreignObject>
                </svg>
            ) : ("");

        const serverAvatar = server.server_Icon !== undefined ?
            (
                <svg width="48" height="48" className="guildIconAvatarSvg" viewBox="0 0 48 48">
                    <foreignObject x="0" y="0" width="48" height="48" overflow="visible" mask="url(#svg-mask-squircle)">
                        <div className="guildIconAvatarSvgMasked">
                            <svg width="40" height="40" className="guildIconAvatarSvg" viewBox="0 0 40 40">
                                <foreignObject x="0" y="0" width="40" height="40" overflow="visible" mask="url(#svg-mask-squircle)">
                                    < img className="guildIconAvatar" src={server.server_Icon} alt=" " />
                                </foreignObject>
                            </svg>
                        </div>
                    </foreignObject>
                </svg>
            ) : ("");

        return (
            <div className="loaded-guilds" key={server.id}>
                <div className="guild-card" role="button" tabIndex={0}>
                    <div className="guild-card-header">
                        <div className="guild-card-splash">
                            {defaultServerBanner}
                            {serverBanner}
                        </div>
                        <div className="action-buttons-layer">
                            <div className="action-buttons-container">
                                <div className="action-buttons-wrapper">
                                    <div className="action-button" role="button" tabIndex={0} data-tooltip-place="top" data-tooltip-id="thread-tip-exsp" data-tooltip-content={'More'}
                                        onClick={(e) => {
                                            handlePopupShow(e, server);
                                        }}>
                                        <OverFlowEllipsisIcon className="action-button-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="guildIcon">
                            {defaultServerAvatar}
                            {serverAvatar}
                        </div>
                    </div>
                    {showPopUp && selectedServer.id === server.id && <ActionButtonPopUpContainer serverLink={selectedServerLink} setShowPopUp={setShowPopUp} boundingClient={boundingClient} />}
                    <div className="guild-card-info">
                        <div className="guild-card-title">
                            <div className={`guild-card-star fill-color-${server.server_color_tag}`} data-tooltip-place="top" data-tooltip-id="thread-tip-exsp"
                                data-tooltip-content={`${randomNumber > 0.95 ? `$TR!F3 Partner` : randomNumber > 0.85 ? `Verified & Partnered` : `Verified`}`}>
                                <VerifiedStarIcon className="guild-card-star-icon" />
                                <div className="guild-card-child-container">
                                    {/* <VerifiedCheckIcon className="guild-card-star-icon-2" /> */}
                                    {
                                        randomNumber > 0.95 ? (
                                            <VerifiedPartnerIcon className="guild-card-star-icon-2" />
                                        ) : (
                                            <VerifiedCheckIcon className="guild-card-star-icon-2" />
                                        )
                                    }
                                </div>
                            </div>
                            <h4 className="guild-card-h4-title">{server.server_name}</h4>
                        </div>
                        <div className="guild-card-text">
                            The official server for {server.server_name}, click to join now!
                        </div>
                        <div className="flex-to-end" data-tooltip-place="top" data-tooltip-content={'Private Server Join Via Invite'}
                            data-tooltip-id={`${server.joined_server === true ? `` : server.public === false ? "thread-tip-exsp" : ``}`}>
                            <button type="button"
                                className="faint-boost-shiny-button join-server"
                                disabled={server.joined_server === true ? true : server.public === false ? true : false}
                                onClick={() => {
                                    joinThisServer(server);
                                }}>
                                <div className="shiny-button-contents">
                                    {`${server.joined_server === true ? `Server Joined` : server.public === false ? `Private Server` : `Join Server`}`}
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
                                    {server.presenceCount}{` `}Online
                                </div>
                            </div>
                            <div className="guild-card-member-count">
                                <div className="guild-card-member-offline-status"></div>
                                <div className="guild-card-member-count-txt">
                                    {server.memberCount}{` `}Members
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    const handleEnterSearch = (e) => {
        e.preventDefault();
        if (e.currentTarget.value.length >= 2) {
            setIsLoading(true);
            setCurrentlyInSearch(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    }

    const handleReturnFromSearch = (e) => {
        e.preventDefault();
        setSearchText("");
        setIsLoading(true);
        setCurrentlyInSearch(false);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }

    let globalUESL = _liveSearch(Object.values(props.unExploredServers)).length;

    return (

        <div className="server-main-base">
            <div className="explore-server-base">
                <ExploreServersNavBar />
                <div className="explore-server-page-wrapper">
                    <div className={`exs-drag-region ${currentlyInSearch ? `searchPageDrag` : ``}`}></div>
                    <div className="exs-main-content-scroller-base auto-scroll-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `16px` }}>
                        <div className={`exs-view-wrapper ${currentlyInSearch ? `searchPage-results` : ``}`}>

                            {
                                currentlyInSearch === false ? (

                                    <>
                                        <div className="exs-searchHeader">
                                            <img className="exs-searchImg" alt=" " />
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
                                                                        autoFocus={true}
                                                                        ref={inputRef}
                                                                        spellCheck={false}
                                                                        maxLength={100}
                                                                        autoComplete="off"
                                                                        onInput={(e) => checkInput(e)}
                                                                        onChange={(e) => setSearchText(e.currentTarget.value)}
                                                                        value={searchText}
                                                                        onKeyDown={(e) => {
                                                                            if (e.key === 'Enter') {
                                                                                handleEnterSearch(e);
                                                                            }
                                                                        }}
                                                                    />

                                                                </div>
                                                                {inputHint ? <div className="sr-input-hint">"ENTER" to Search</div> : null}
                                                                {
                                                                    searchText.length === 0 ? (
                                                                        <SearchMagIcon className={`exs-search-icon`} />
                                                                    ) : (
                                                                        <div className={`clear-exs-search-icon`} onClick={(e) => _resetSearch()}>
                                                                            <ExploreServersSearchXIcon className="clear-exs-icon close-exs-icon" />
                                                                        </div>
                                                                    )
                                                                }

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="exs-search-subtitle-2">
                                                        Click to Join a Public Server, to Join a Private Server
                                                        You must attain an Invite Link by the Server Owner or its Members.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <section className="guildListSection" id="gls">
                                                <h3 className="gls-h3">Featured communities</h3>
                                                <div className="guild-list">
                                                    {
                                                        isLoading ? <GuildCardGridSkeletonList listsToRender={12} /> : unExploredServers
                                                    }
                                                </div>
                                            </section>
                                        </div>
                                        <div className="explore-servers-footer-bar-container">
                                            <img className="explore-server-footer-bar-img" alt=" " />
                                            <h2 className="exp-srv-footer-bar-header-2">There are more communities out there!</h2>
                                            <button type="button" className="exp-srv-footer-bar-button">
                                                <div className="exp-srv-footer-bar-button-contents">Try searching for them.</div>
                                            </button>
                                        </div>
                                    </>
                                ) : (

                                    <div className="guild-explore-search-container">
                                        <div className="guild-explore-search-header">
                                            <div className="guild-search-back-arrow-container" aria-label="Back" role="button" tabIndex={0} onClick={(e) => handleReturnFromSearch(e)}>
                                                <BackArrowIcon className="guild-back-search-arrow-left" />
                                            </div>
                                            <h2 className="guild-explore-search-header-search-value">{`${globalUESL}`} communites for "{`${searchText}`}"</h2>
                                        </div>

                                        <div className="guild-search-container guild-search-page">
                                            <div className="guild-search-bar-container">
                                                <div className="guild-search-bar-box">
                                                    <div className="guild-search-bar-input-wrapper-container">
                                                        <input
                                                            className="guild-search-bar-input"
                                                            type="search"
                                                            id="guild-search-bar-input"
                                                            placeholder="Explore communities"
                                                            autoFocus={true}
                                                            ref={inputRef}
                                                            spellCheck={false}
                                                            maxLength={100}
                                                            autoComplete="off"
                                                            onChange={(e) => setSearchText(e.currentTarget.value)}
                                                            value={searchText}
                                                            onFocus={(e) => hasFocus(e)}
                                                            onBlur={(e) => blurred(e)}

                                                        />

                                                    </div>
                                                    {/* {inputHint ? <div className="sr-input-hint">"ENTER" to Search</div> : null} */}
                                                    {
                                                        searchText.length === 0 ? (
                                                            <SearchMagIcon className="guild-search-mag-icon" />
                                                        ) : (
                                                            <div className={`clear-exs-search-icon`} onClick={(e) => _resetSearch(e)}>
                                                                <ExploreServersSearchXIcon className="clear-exs-icon" />
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            <div className="guild-language-selector-box">
                                                <span className="guild-language-value">English</span>
                                                <div className="guild-language-chevron-icon-container">
                                                    <ExploreServersChevronIcon className="chevronPointDown" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="guild-search-results-catergories">
                                            <div className="guild-search-category-pill selected">
                                                <div className="guild-search-category-pill-text">All ({`${globalUESL}`})</div>
                                            </div>
                                            <div className="guild-search-category-pill">
                                                <div className="guild-search-category-pill-text">Gaming (0)</div>
                                            </div>
                                            <div className="guild-search-category-pill">
                                                <div className="guild-search-category-pill-text">Music (0)</div>
                                            </div>
                                            <div className="guild-search-category-pill">
                                                <div className="guild-search-category-pill-text">Education (0)</div>
                                            </div>
                                            <div className="guild-search-category-pill">
                                                <div className="guild-search-category-pill-text">Science & Tech (0)</div>
                                            </div>
                                            <div className="guild-search-category-pill">
                                                <div className="guild-search-category-pill-text">Entertainment (0)</div>
                                            </div>
                                            <div className="guild-search-category-pill">
                                                <div className="guild-search-category-pill-text">Student Hubs (0)</div>
                                            </div>
                                        </div>

                                        <div className="guild-search-results-list">
                                            <section id="gls">
                                                <div className="guild-search-discovery-list-results" style={{ opacity: `1` }}>
                                                    {isLoading ? <GuildCardSearchSkeletonList listsToRender={12} /> :
                                                        _liveSearch(Object.values(props.unExploredServers)).length === 0 ? (
                                                            <div id="no-match" className="empty-guild-search-state-container">
                                                                <div className="no-servers-found-img"></div>
                                                                <h3 className="epssc-h3">No results found</h3>
                                                                <div className="epssc-st">Try searching for something else.</div>
                                                            </div>
                                                        ) : (unExploredServersSearchResults)
                                                    }
                                                </div>
                                                <div className="guild-search-results-page-controller-container">
                                                    <nav className="guild-page-controller-list-container"></nav>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="exp-srv-footer-bar-sep"></div>
                    </div>
                    <Tooltip className="thread-tool-tip" id="thread-tip-exsp" place="top" closeOnResize={true} closeOnScroll={true} />
                    <Tooltip className="thread-tool-tip-blue" id="thread-tip-verified" place="top" closeOnResize={true} closeOnScroll={true} />
                </div>
            </div>
        </div>
    )
}
export default ExploreServers;