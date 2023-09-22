import React from "react";
import { useState, useRef, useEffect } from "react";
import EditFriendshipModalContainer from "../edit_friendship_modal/edit_friendship_container";
import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
import DeleteFriendConfirmationModalContainer from '../delete_friend_confirmation_modal/delete_friend_confirmation_modal_container';
import { MoreOptionsIcon, SMSIcon, SearchMagIcon, SearchXIcon } from "../../front_end_svgs/Strife_svgs";
import { Tooltip } from "react-tooltip";

const FriendShipIndexOnline = (props) => {

    const inputRef = useRef();
    const [searchText, setSearchText] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [popupTop, setPopupTop] = useState(0);
    const [popupLeft, setPopupLeft] = useState(0);
    const [selectFriend, toggleSelected] = useState([]);
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    let allFriends = props.friends;
    let rendered_Default_PFP = DefaultPFPSVG;
    const dmMembersArray = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx]);


    useEffect(() => {
        props.requestFriendships();
        return function cleanup () {
            if (props.errors.length > 0) {
                props.removeFriendshipErrors();
            }
            if (props.dmServerErrors.length > 0) {
                props.removeDmServerErrors();
            }
        }
    }, [])


    useEffect(() => {
        if (showPopup === true) {
            $(`#fii-${selectFriend?.id}`).addClass("hoveredState");
        }
        if (showPopup === false) {
            $(`#fii-${selectFriend?.id}`).removeClass("hoveredState");
        }

    }, [showPopup]);

    const handleSelected = (friend) => {
        toggleSelected(friend);

    }

    const handlePopupShow = (e) => {
        let currTop = e.currentTarget.getBoundingClientRect().top;
        let currLeft = e.currentTarget.getBoundingClientRect().left;
        const realWidth = window.screen.width * window.devicePixelRatio;
        const realHeight = window.screen.height * window.devicePixelRatio;
        //check if screen is 1920*1080 or 4k (3840*2160) give a range not an  exact as screens alter slightly 

        if (currTop > ((window.innerHeight * 0.7889))) {
            if (realWidth >= 3800 && realHeight >= 2100) {
                currTop /= 1.1475;
            }
            else {
                // screen resolution is assumed 1920 * 1080
                currTop /= 1.28;
            }
        }
        // if (currTop > 542) {
        //     currTop /= 1.28;
        // }

        setPopupTop(currTop);
        setPopupLeft(currLeft);
        setShowPopup(!showPopup);
    }

    //this function handles routing to an existing chat 1 on 1 dm chats and navigates to the dmserver if it exists
    //else if generates it 
    const handleDm = (friend) => {

        const memberIds = [props.currentUser.id, parseInt(friend.id)].sort((a, b) => a - b);
        let new_dm_members = [props.currentUser, friend];
        for (let dmServer of props.dmServers) {
            if (dmMembersArray(Object.values(dmServer.members).map((member) => member.id).sort((a, b) => a - b), memberIds)) {
                if (props.history.location.pathname !== `/$/channels/@me/${dmServer.id}`) {
                    props.history.push(`/$/channels/@me/${dmServer.id}`);
                }
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
            // dm_server_name: dmServerName,
            dm_member_ids: memberIds
        }
        let newDmServer;
        props.createDmServer(submissionState).then((action) => {
            newDmServer = action.dmserver;
            props.reSyncCurrentUser(props.currentUserId).then(() => {
                props.history.push(`/$/channels/@me/${newDmServer.id}`);
            })
            App.StrifeCore.perform('parse_New_Invited_DM_Member', { dm_member_id: friend.id, dm_server_id: newDmServer.id });
        });
        return;
    }



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

    const renderEditUserOptionsModal = () => {
        if (showPopup === true) {
            return (
                <EditFriendshipModalContainer user={props.currentUser} friend={selectFriend} left={popupLeft} top={popupTop} setShowPopup={setShowPopup} setShowDeletePopup={setShowDeletePopup} />
            )
        }
    }


    const renderDeleteFriendConfirmationModal = () => {
        if (showDeletePopup === true) {
            return (
                <DeleteFriendConfirmationModalContainer friend={selectFriend} setShowDeletePopup={setShowDeletePopup} />
            )
        }
    }


    if (allFriends.length > 0) {
        return (

            <div className="friendslist-column">

                {renderEditUserOptionsModal()}
                {renderDeleteFriendConfirmationModal()}

                <div className="homepage-friends-search-bar">
                    <div className="homepage-friends-search-bar-inner">
                        <input
                            id="input-all-friends"
                            className="homepage-friends-search-bar-input"
                            type="search"
                            placeholder="Search"
                            autoFocus ref={inputRef}
                            spellCheck={false}
                            onChange={e => setSearchText(e.currentTarget.value)}
                            value={searchText}
                        />


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
                        {`ONLINE — ${_liveSearch(allFriends).length}`}
                    </div>
                </div>

                {
                    _liveSearch(allFriends).length === 0 ? (
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
                                    _liveSearch(allFriends).map((friend, friendIdx) => {
                                        return (

                                            <div id={`fii-${friend.id}`} className="friend-index-item" key={friend.id} >
                                                <div className="friend-index-item-wrapper-inner" onClick={(e) => { handleDm(friend); }}>
                                                    <div className="friend-info">
                                                        <div className="friends-page-avatar-svg-wrapper" role="img" aria-hidden="false">
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
                                                        </div>

                                                        <div className="friend-account-info-wrapper">
                                                            <div className="friend-account-info">
                                                                <span className="friend-tag-username">
                                                                    {friend.username}
                                                                </span>
                                                                <span className="strife-discriminator-tag">#{friend.strife_id_tag}</span>
                                                            </div>
                                                            <div className="subtext">
                                                                <div className="subtext-inner">
                                                                    Online
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="friend-actions">
                                                    <div data-tooltip-id="thread-tip-oflp" data-tooltip-place="top" data-tooltip-content="Message" className="friend-action-button" onClick={() => { handleDm(friend); }}>
                                                        <SMSIcon className="friend-msg-svg-icon" />
                                                    </div>
                                                    <div data-tooltip-id="thread-tip-oflp" data-tooltip-place="top" data-tooltip-content="More"
                                                        className="friend-action-button"
                                                        onClick={(e) => {
                                                            handleSelected(friend);
                                                            handlePopupShow(e)
                                                        }}
                                                    >
                                                        <MoreOptionsIcon className="friend-options-svg-icon" />
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
                <Tooltip className="thread-tool-tip" id="thread-tip-oflp" place="top" closeOnResize={true} closeOnScroll={true} />
            </div>
        )
    }

    else {
        return (
            <div className="friendslist-column">
                <div className="empty-state-container">
                    <div className="empty-state-users-empty">
                        <div className="empty-state-users-flex">
                            <img className="no-friends-online-icon" alt=" " />
                            <div className="empty-state-users-inner-flex">
                                <div className="empty-state-users-inner-flex-inner-text">No one's around to play with Wumpus.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default FriendShipIndexOnline;
