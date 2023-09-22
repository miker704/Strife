import React from "react";
import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
import { useState, useRef, useEffect } from "react";
import { SearchMagIcon, SearchXIcon, UnBlockUserIcon } from "../../front_end_svgs/Strife_svgs";
import { Tooltip } from "react-tooltip";

const BlockedList = (props) => {

    const [searchText, setSearchText] = useState("");
    const inputRef = useRef();
    let allBlockedUsers = props.blockedUsers;
    let rendered_Default_PFP = DefaultPFPSVG;

    useEffect(() => {
        props.requestFriendships();
        // props.requestAllFriendships();
        return function cleanup () {
            if (props.errors.length > 0) {
                props.removeFriendshipErrors();
            }
        }

    }, [])

    const resetSearch = () => {
        setSearchText("");
        inputRef.current.focus();
    }

    const removeBlockedPerson = (blockedUser) => {
        let substate = {
            user_id: props.currentUser.id,
            friend_id: blockedUser.id,
        }
        props.removeBlockedUser(substate).then(() => {
            App.StrifeCore.perform('parse_unblock_request', { user_id: props.currentUser.id, friend_id: blockedUser.id });
        });
    }

    const _liveSearch = (items) => {
        return items.filter((item) => {
            if (item.username.toLowerCase().includes(searchText.toLowerCase())) {
                return item;
            }
            else if (searchText === "") {
                return item;
            }
        })
    }


    if (allBlockedUsers.length > 0) {

        return (

            <div className="friendslist-column">


                <div className="homepage-friends-search-bar">
                    <div className="homepage-friends-search-bar-inner">
                        <input id="input-all-friends" className="homepage-friends-search-bar-input" placeholder="Search"
                            type="search"
                            onChange={e => setSearchText(e.currentTarget.value)}
                            autoFocus ref={inputRef}
                            spellCheck={false}
                            value={searchText} />
                        <div className="magnify-icon-wrapper">
                            <div className="magnify-icon">
                                <SearchMagIcon className={`mag-icon1 ${searchText.length === 0 ? `visible-x` : ``}`} />
                                <SearchXIcon className={`clear-mag-icon1 mag-icon1 ${searchText.length === 0 ? `` : `visible-x`}`} onClick={() => resetSearch()} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="home-page-friend-tab-section-title">
                    <div id="num-of-friends" className="all-friends-title">
                        {`BLOCKED — ${_liveSearch(allBlockedUsers).length}`}
                    </div>
                </div>

                {
                    _liveSearch(allBlockedUsers).length === 0 ?

                        (
                            <div className="empty-state-container">
                                <div className="empty-state-users-empty">
                                    <div className="empty-state-users-flex">
                                        <img className="no-friends-online-icon" alt=" " />
                                        <div className="empty-state-users-inner-flex">
                                            <div className="empty-state-users-inner-flex-inner-text">Wumpus looked, but couldn't find anyone with that name.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <div className="friend-index global-scroller-base auto-scroll-raw-attributes" id='ul-fiiw' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                                <div>
                                    {
                                        _liveSearch(allBlockedUsers).map((blockedUser, blockedUserIdx) => {
                                            return (
                                                <div id="fii" className="friend-index-item" key={blockedUser.id}>

                                                    <div className="friend-index-item-wrapper-inner">
                                                        <div className="friend-info">

                                                            <div className="friends-page-avatar-svg-wrapper" role="img" aria-hidden="false">
                                                                <svg width="32" height="32" viewBox="0 0 32 32" className="friend-status-mask friends-svg-avatar-wrapping" aria-hidden="true">
                                                                    <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-default)">
                                                                        <div className="friend-svg-avatar-stack">
                                                                            {
                                                                                blockedUser.photo === undefined ? (
                                                                                    <img className={`friend-avatar-pfp color-${blockedUser.color_tag}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />

                                                                                ) : (
                                                                                    <img className={`friend-avatar-pfp`} src={blockedUser.photo} alt=" " aria-hidden="true" />
                                                                                )
                                                                            }
                                                                        </div>
                                                                    </foreignObject>
                                                                </svg>
                                                            </div>

                                                            <div className="friend-account-info-wrapper">
                                                                <div className="friend-account-info">
                                                                    <span className="friend-tag-username">
                                                                        {blockedUser.username}
                                                                    </span>
                                                                    <span className="strife-discriminator-tag">#{blockedUser.strife_id_tag}</span>
                                                                </div>
                                                                <div className="subtext">
                                                                    <div className="subtext-friend-request-status">
                                                                        Blocked
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="friend-actions">
                                                        <div data-tooltip-id="thread-tip-bul" data-tooltip-place="top" data-tooltip-content="Unblock" className="friend-action-button red-button" onClick={() => removeBlockedPerson(blockedUser)}>
                                                            <UnBlockUserIcon className="unblock-user-svg-icon" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                }

                <div className="friend-index-sep"></div>
                <Tooltip className="thread-tool-tip" id="thread-tip-bul" place="top" closeOnResize={true} closeOnScroll={true} />
            </div >
        )
    }
    else {

        return (
            <div className="friendslist-column">
                <div className="empty-state-container">
                    <div className="empty-state-users-empty">
                        <div className="empty-state-users-flex">
                            <img className="cant-block-wumpus" alt=" " />
                            <div className="empty-state-users-inner-flex">
                                <div className="empty-state-users-inner-flex-inner-text">You can't unblock the Wumpus.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}


export default BlockedList;