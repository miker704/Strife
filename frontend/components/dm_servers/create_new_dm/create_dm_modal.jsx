import React from "react";
import { useState, useRef, useEffect } from "react";
import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { returnUserBadgeFillColor } from "../../../utils/user_status_badge_color_api_util";
import { returnUserOnlineActivityStatusBadgeMaskIMG } from "../../../utils/user_online_activity_status_badge_api_util";
import { CloseXIcon, CreateDmCheckBoxIcon } from "../../front_end_svgs/Strife_svgs";

const CreateDmModal = (props) => {
    const inputRef = useRef();
    const popupRef = useRef();
    const [searchText, setSearchText] = useState("");
    const [selectedFriends, setSelectedFriends] = useState([]);
    const isSelected = (friend) => selectedFriends.map(friend => friend.id).includes(friend.id);
    const findIfSelected = (toAdd) => selectedFriends.findIndex(friend => friend.id === toAdd.id);
    let rendered_User_PFP = DefaultPFPSVG;
    let count = selectedFriends.length;
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isFullyLoaded, setIsFullyLoaded] = useState(true)


    useEffect(() => {
        props.requestAllFriendships();
        setFriends(props.friends);
        setIsLoading(false);
        setTimeout(() => {
            setIsFullyLoaded(false);
        }, 300);
    }, [props.friends?.length])



    //set up handler and exits
    useEffect(() => {

        window.addEventListener('keyup', handleESC, false);
        return function cleanup () {
            window.removeEventListener('keyup', handleESC, false);
            if (props.errors.length > 0) {
                props.removeFriendshipErrors();
            }
            if (props.dmServerErrors.length > 0) {
                props.removeDmServerErrors();
            }
        }
    }, []);


    const handleESC = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                props.setCreateDmModal(false);
                window.removeEventListener('keyup', handleESC, false);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }


    const unTogglePreviousSelection = () => {
        if (searchText === "") {
            if (selectedFriends.length > 0) {
                setSelectedFriends(prevState => {
                    const newState = [...prevState];
                    newState.splice(-1, 1);
                    return newState;
                });
            }
        }
    }

    const toggleSelection = (friend) => {
        const idx = findIfSelected(friend);
        if (idx > -1) {
            setSelectedFriends(prevState => {
                const newState = [...prevState];
                newState.splice(idx, 1);
                return newState;
            });
        }
        else {
            setSelectedFriends(prevState => [...prevState, friend]);
            setSearchText("");
        }
    }

    const dmMembersArray = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx]);

    const handleDmServerCreation = (e) => {
        e.preventDefault();
        const memberIds = [props.currentUser.id, ...selectedFriends.map((friend) => parseInt(friend.id))].sort((a, b) => a - b);
        if (memberIds.length > 10) {
            props.setCreateDmModal(false);
            return;
        }

        for (let dmServer of props.dmServers) {
            if (dmMembersArray(Object.values(dmServer.members).map((member) => member.id).sort((a, b) => a - b), memberIds)) {

                if (props.history.location.pathname !== `/$/channels/@me/${dmServer.id}`) {
                    props.history.push(`/$/channels/@me/${dmServer.id}`);
                }
                props.setCreateDmModal(false);
                return;
            }
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
        }).then(() => {

            let membersToInvite = Object.values(newDmServer.members);
            for (let member of membersToInvite) {
                if (member.id !== props.currentUser.id) {
                    App.StrifeCore.perform('parse_New_Invited_DM_Member', { dm_member_id: member.id, dm_server_id: newDmServer.id });
                }
            }
            props.setCreateDmModal(false);
        })

        return;
    }

    const _liveSearch = (items) => {
        return items.filter((item) => {

            let hash = "#" + item.strife_id_tag;
            if (item.username.toLowerCase().includes(searchText.toLowerCase())) {
                return item;
            }
            else if (hash.includes(searchText)) {
                return item;
            }
            else if (searchText === "") {
                return item;
            }
        })
    }



    let createDmButton = count <= 9 ? (
        <button className="create-dm-button" type="submit" disabled={count > 9 || count === 0}>
            <div className="create-dm-button-text">{count <= 1 ? `Create DM` : `Create Group DM`}</div>
        </button>
    ) : (
        <div className="create-dm-button-fake">
            <div className="create-dm-button-text">Create Group DM</div>
        </div>
    )


    if (isLoading === false && props.friends.length > 0) {
        return (
            <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
                <div className={`clear-modal-wrapper`} onClick={(e) => props.setCreateDmModal(false)}>
                    <div className="create-dm-modal-popup" onClick={e => e.stopPropagation()} ref={popupRef}>
                        <div className="create-dm-modal-focus-lock">
                            <div className="create-dm-modal">
                                <form onSubmit={handleDmServerCreation}>
                                    <div className="create-dm-header-sec">
                                        <h1 className="create-dm-header-h2">Select Friends</h1>
                                        {count <= 8 ?
                                            <div className="num-of-dm-members-selected">You can add {9 - count} more {`${9 - count === 1 ? `friend` : `friends`}`}.</div>
                                            : <div className={`${count > 9 ? "num-of-dm-members-selected cDMS-error" : "num-of-dm-members-selected"}`}>
                                                This group has a 10 member limit.
                                            </div>
                                        }
                                        <div className="create-dm-search-bar-wrapper">
                                            <div className="create-dm-search-bar-outer-wrapper">
                                                <div className="create-dm-search-bar-inner-wrapper global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                                                    {
                                                        selectedFriends.map(friend => {
                                                            return (
                                                                <div
                                                                    className="mini-box"
                                                                    key={friend.id}
                                                                    onClick={() => { toggleSelection(friend) }}
                                                                >
                                                                    {friend.username}
                                                                    <CloseXIcon className="close-3-icon" />
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                    <input
                                                        id="input-all-friends"
                                                        className="create-dm-search-bar"
                                                        autoFocus ref={inputRef}
                                                        spellCheck={false}
                                                        role="combobox"
                                                        type="text"
                                                        value={searchText}
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Backspace' && e.currentTarget.value === "") {
                                                                unTogglePreviousSelection();
                                                            }
                                                        }}
                                                        onChange={(e) => setSearchText(e.currentTarget.value)}
                                                        placeholder={selectedFriends.length > 0 ? "Find or start a conversation" : "Type the username of a friend"}
                                                    />
                                                    <div className="create-dm-invis-div"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {


                                        isFullyLoaded === true ?
                                            (
                                                <div className={`create-dm-scroller global-scroll-thin-raw-attributes global-scroller-base`} style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                                                    <div className="create-dm-no-results">
                                                        <div className="create-dm-fetching-friends-state"></div>
                                                        <span className={`spinning-cubes`}>
                                                            <span className="inner-cubes moving-cubes">
                                                                <span className="inner-cube"></span>
                                                                <span className="inner-cube"></span>
                                                            </span>
                                                        </span>
                                                        <div>Fetching Your Friends List...</div>
                                                    </div>
                                                </div>

                                            ) : (



                                                _liveSearch(friends).length === 0 ?
                                                    (
                                                        <div className="create-dm-no-results">
                                                            <div className="create-dm-no-results-error-state"></div>
                                                            <div>No friends found that are not already in this DM.</div>
                                                        </div>
                                                    ) :

                                                    (
                                                        <div className="create-dm-scroller global-scroll-thin-raw-attributes global-scroller-base global-scroll-faded-raw-attributes" id='ul-fiiw' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                                                            <div className="create-dm-ul-list">
                                                                <div className="create-dm-ul-list-div"></div>
                                                                {
                                                                    _liveSearch(friends).map((friend) => {
                                                                        return (
                                                                            <div className="create-dm-friend-wrapper" key={friend.id}
                                                                                onClick={() => {
                                                                                    toggleSelection(friend);
                                                                                    inputRef.current.focus();
                                                                                }}>
                                                                                <div className="create-dm-friend-inner-wrapper">

                                                                                    <div className="friend-avatar-svg-wrapper" role="img" aria-hidden="false">
                                                                                        <svg width="40" height="40" viewBox="0 0 40 40" className="status-mask svg-avatar-wrapping" aria-hidden="true">
                                                                                            <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                                                                                                <div className="svg-avatar-stack">
                                                                                                    {
                                                                                                        friend.photo === undefined ? (
                                                                                                            <img className={`create-dm-avatar-svg-masked color-${friend.color_tag}`} src={rendered_User_PFP} alt=" " aria-hidden="true" />
                                                                                                        ) : (
                                                                                                            <img className="create-dm-avatar-svg-masked" src={friend.photo} alt=" " aria-hidden="true" />
                                                                                                        )
                                                                                                    }
                                                                                                </div>
                                                                                            </foreignObject>
                                                                                            <rect width="10" height="10" x="22" y="22" fill={returnUserBadgeFillColor(friend.online)} mask={returnUserOnlineActivityStatusBadgeMaskIMG(friend.online)} className="svg-masked-pointer-events">
                                                                                            </rect>
                                                                                        </svg>
                                                                                    </div>

                                                                                    <div className="create-dm-user-info">
                                                                                        <strong className="create-dm-user-username-wrapper">
                                                                                            {friend.username}
                                                                                        </strong>
                                                                                        <div className="create-dm-user-strife-tag">
                                                                                            <span className="create-dm-user-user-name">
                                                                                                {friend.username}
                                                                                            </span>
                                                                                            <span>#{friend.strife_id_tag}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <span className="create-dm-check-box-wrapper">
                                                                                        <div className={`create-dm-check-box ${isSelected(friend) ? "checked" : ""}`}>
                                                                                            <CreateDmCheckBoxIcon />
                                                                                        </div>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    )
                                            )
                                    }


                                    <div className="create-dm-footer"></div>
                                    <div className="create-dm-button-sec">
                                        {createDmButton}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </REACT_PORTAL >

        )
    }

}


export default CreateDmModal;