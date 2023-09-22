import React from "react";
import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
import { useState, useRef, useEffect } from "react";
import { AcceptFriendRequestIcon, CancelFriendRequestIcon, SearchMagIcon, SearchXIcon } from "../../front_end_svgs/Strife_svgs";
import MegaUPCModalContainer from "../../users/mega_user_card_modal/mega_user_card_modal_container";
import { Tooltip } from "react-tooltip";

const PendingFriendList = (props) => {

    const [searchText, setSearchText] = useState("");
    const [showMegaPopUp, setShowMegaPopUp] = useState(false);
    const [selectFriend, toggleSelected] = useState([]);
    const inputRef = useRef();
    let outgoing_requests = props.outgoing;
    let incoming_requests = props.incoming;
    let rendered_Default_PFP = DefaultPFPSVG;


    useEffect(() => {
        props.requestFriendships();
        //props.requestAllFriendships();
        return function cleanup () {
            if (props.errors.length > 0) {
                props.removeFriendshipErrors();
            }
        }

    }, []);

    useEffect(() => {
        if (props.outgoing?.length === 0 && props.incoming?.length === 0) {
            if (showMegaPopUp) { setShowMegaPopUp(false); }
        }
    }, [props.outgoing, props.incoming]);

    const resetSearch = () => {
        setSearchText("");
        inputRef.current.focus();
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


    const updateFriendShip = (friend) => {
        let substate = {
            user_id: props.currentUser.id,
            friend_id: friend.id,
        }

        props.updateFriendship(substate).then(() => {
            App.StrifeCore.perform('parse_update_friend_request', { user_id: props.currentUser.id, friend_id: friend.id });
        });
    }

    const deleteFriendShip = (friend) => {
        let substate = {
            user_id: props.currentUser.id,
            friend_id: friend.id,
        }
        props.deleteFriendship(substate).then(() => {
            App.StrifeCore.perform('parse_delete_friend_request', { user_id: props.currentUser.id, friend_id: friend.id });
        });

    }

    const handleSelected = (member) => {
        toggleSelected(member);
        setShowMegaPopUp(true);
    }

    const renderMegaUpcModal = () => {
        if (showMegaPopUp === true) {
            return (
                <MegaUPCModalContainer setShowMegaPopUp={setShowMegaPopUp} member={selectFriend} memberId={selectFriend.id} />
            )
        }
    }

    let combined = [...incoming_requests, ...outgoing_requests];


    if (outgoing_requests.length + incoming_requests.length > 0) {
        return (
            <div className="friendslist-column">
                {renderMegaUpcModal()}
                <div className="homepage-friends-search-bar">
                    <div className="homepage-friends-search-bar-inner">
                        <input id="input-all-friends" className="homepage-friends-search-bar-input"
                            placeholder="Search" type="search"
                            spellCheck={false}
                            autoFocus ref={inputRef}
                            onChange={e => setSearchText(e.currentTarget.value)}
                            value={searchText} />
                        <div className="magnify-icon-wrapper">
                            <div className="magnify-icon">
                                <SearchMagIcon className={`mag-icon1 ${searchText.length === 0 ? `visible-x` : ``}`} />
                                <SearchXIcon className={`clear-mag-icon1 mag-icon1 ${searchText.length === 0 ? `` : `visible-x`}`} onClick={() => { resetSearch(); }} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="home-page-friend-tab-section-title">
                    <div id="num-of-friends" className="all-friends-title">
                        {`PENDING — ${_liveSearch(combined).length}`}
                    </div>
                </div>

                {
                    _liveSearch(combined).length === 0 ? (
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
                        <div className="friend-index global-scroller-base auto-scroll-raw-attributes" id='ul-fiiw3' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                            <div>

                                {
                                    _liveSearch(combined).map((friend, friendIdx) => {

                                        return (

                                            <div id="fii" className="friend-index-item" key={friend.id} tabIndex={-1}>

                                                <div className="friend-index-item-wrapper-inner" onClick={(e) => handleSelected(friend)} >
                                                    <div className="friend-info">

                                                        <div className="friends-page-avatar-svg-wrapper" role="img" aria-hidden="false">
                                                            {
                                                                friend.online === true ?
                                                                    (
                                                                        <svg width="40" height="40" viewBox="0 0 40 40" className="friend-status-mask friends-svg-avatar-wrapping" aria-hidden="true">
                                                                            <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                                                                                <div className="friend-svg-avatar-stack">
                                                                                    {
                                                                                        friend.photo === undefined ? (
                                                                                            <img className={`friend-avatar-pfp color-${friend.color_tag}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />


                                                                                        ) : (
                                                                                            <img className={`friend-avatar-pfp`} src={friend.photo} alt=" " aria-hidden="true" />
                                                                                        )
                                                                                    }
                                                                                </div>
                                                                            </foreignObject>
                                                                            <rect width="10" height="10" x="22" y="22" fill={`rgb(35, 165, 90)`} mask={`url(#svg-mask-status-online)`} className="friend-svg-masked-pointer-events">
                                                                            </rect>
                                                                        </svg>
                                                                    ) : (
                                                                        <svg width="32" height="32" viewBox="0 0 32 32" className="friend-status-mask friends-svg-avatar-wrapping" aria-hidden="true">
                                                                            <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-default)">
                                                                                <div className="friend-svg-avatar-stack">
                                                                                    {
                                                                                        friend.photo === undefined ? (
                                                                                            <img className={`friend-avatar-pfp color-${friend.color_tag}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />
                                                                                        ) : (
                                                                                            <img className={`friend-avatar-pfp`} src={friend.photo} alt=" " aria-hidden="true" />
                                                                                        )
                                                                                    }
                                                                                </div>
                                                                            </foreignObject>
                                                                        </svg>
                                                                    )
                                                            }
                                                        </div>


                                                        <div className="friend-account-info-wrapper">
                                                            <div className="friend-account-info">
                                                                <span className="friend-tag-username">
                                                                    {friend.username}
                                                                </span>
                                                                <span className="strife-discriminator-tag">#{friend.strife_id_tag}</span>
                                                            </div>
                                                            <div className="subtext">
                                                                <div className="subtext-friend-request-status">
                                                                    {`${friend.friend_request_status === 2 ? `Incoming Friend Request` : `Outgoing Friend Request`}`}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                {
                                                    friend.friend_request_status === 2 ? (
                                                        <div className="friend-actions">

                                                            <div data-tooltip-id="thread-tip-pfrl" data-tooltip-place="top" data-tooltip-content="Accept" className="friend-action-button green-button" onClick={() => updateFriendShip(friend)} tabIndex={0}>
                                                                <AcceptFriendRequestIcon className="friend-check-mark-svg-icon" />
                                                            </div>


                                                            <div data-tooltip-id="thread-tip-pfrl" data-tooltip-place="top" data-tooltip-content="Ignore" className="friend-action-button red-button" onClick={() => deleteFriendShip(friend)} tabIndex={0}>
                                                                <CancelFriendRequestIcon className="friend-x-svg-icon" />
                                                            </div>
                                                        </div>

                                                    ) : (

                                                        <div className="friend-action-button">
                                                            <div data-tooltip-id="thread-tip-pfrl" data-tooltip-place="top" data-tooltip-content="Cancel" className="friend-action-button red-button" onClick={() => deleteFriendShip(friend)} tabIndex={0}>
                                                                <CancelFriendRequestIcon className="friend-x-svg-icon" />
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
                <div className="friend-index-sep"></div>
                <Tooltip className="thread-tool-tip" id="thread-tip-pfrl" place="top" closeOnResize={true} closeOnScroll={true} />
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
                                <div className="empty-state-users-inner-flex-inner-text">There are no pending friend requests. Here's Wumpus for now.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default PendingFriendList;