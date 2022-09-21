import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactTooltip from "react-tooltip";
import ExploreServersNavBar from "./server_search_nav_bar";

const ExploreServers = (props) => {

    useEffect(() => {
            // props.fetchServers();
    }, [])


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
                                            <h3 className="exs-search-title">Find Your Community on STRIFE</h3>
                                            <div className="exs-search-subtitle">
                                                From gaming, to music, to learning, there's a place for you.
                                            </div>
                                            <div className="exs-search-content">
                                                <div className="exs-search">
                                                    <div className="exs-search-box">
                                                        <div className="exs-search-input-wrapper">
                                                            <input className="exs-search-input" type="search" />
                                                        </div>
                                                        <svg className="exs-search-icon"
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <section className="guildListSection">
                                        <h3 className="gls-h3">Featured communities</h3>
                                        <div className="guild-list">
                                            <div className="loaded-guilds">
                                                <div className="guild-card">
                                                    <div className="guild-card-header">
                                                        <div className="guild-card-splash">
                                                            <img className="guild-card-splash-img" src="https://cdn.discordapp.com/discovery-splashes/662267976984297473/4798759e115d2500fef16347d578729a.jpg?size=480" alt="SPFP" />
                                                        </div>
                                                        <div className="action-buttons-layer">
                                                            <div className="action-buttons-container">
                                                                <div className="action-buttons-wrapper">
                                                                    <div className="action-button" data-tip data-for="guild-card-moar">
                                                                        <svg className="action-button-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7 12.001C7 10.8964 6.10457 10.001 
                                                                            5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7
                                                                            12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954
                                                                             14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 
                                                                             13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z">
                                                                            </path>
                                                                        </svg>
                                                                        <div className="action-button-pop-up-layer">
                                                                            <div className="action-button-pop-up">
                                                                                <div className="action-button-pop-up-menu">
                                                                                    <div className="action-button-scroller">
                                                                                        <div role={"group"}>
                                                                                            <div className="action-button-pop-up-item">
                                                                                                <div className="action-button-strife-server-link">serverlink</div>
                                                                                                <div className="action-button-pop-up-icon-wrapper">
                                                                                                    <svg className="action-button-pop-up-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                                                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
                                                                                                            d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 
                                                                                                            19V5C22 3.34315 20.6569 2 19 2H5ZM8.79741 7.72V16H6.74541V7.72H8.79741ZM13.2097 7.72C16.0897
                                                                                                            7.72 17.5897 9.388 17.5897 11.848C17.5897 14.308 16.0537 16 13.2577 16H10.3537V7.72H13.2097ZM13.1497
                                                                                                            14.404C14.6137 14.404 15.5257 13.636 15.5257 11.86C15.5257 10.12 14.5537 9.316 13.1497 
                                                                                                            9.316H12.4057V14.404H13.1497Z">
                                                                                                        </path>
                                                                                                    </svg>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
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
                                                            <img className="guildIcon-img" src="https://cdn.discordapp.com/icons/662267976984297473/e75033be72087a87fa09e91727dac2a4.webp?size=56" alt="SPFP" />
                                                        </div>
                                                    </div>
                                                    <div className="guild-card-info">
                                                        <div className="guild-card-title">
                                                            <div className="guild-card-star" data-tip data-for="verified">
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
                                                            <h4 className="guild-card-h4-title">servername</h4>
                                                        </div>
                                                        <div className="guild-card-text">
                                                            The official server for Midjourney, a text-to-image AI where your
                                                            imagination is the only limit.
                                                        </div>
                                                        <div className="guild-card-member-info">
                                                            <div className="guild-card-member-count">
                                                                <div className="guild-card-member-online-status"></div>
                                                                <div className="guild-card-member-count-text"></div>
                                                                online members
                                                            </div>
                                                            <div className="guild-card-member-count">
                                                                <div className="guild-card-member-offline-status"></div>
                                                                <div className="guild-card-member-count-txt"></div>
                                                                total members
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default ExploreServers;