import React from "react";
import { useState, useRef, useEffect } from "react";
import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
import { returnUserBadgeFillColor } from "../../../utils/user_status_badge_color_api_util";
import { returnUserOnlineActivityStatusBadgeMaskIMG } from "../../../utils/user_online_activity_status_badge_api_util";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { CloseXIcon, CreateDmCheckBoxIcon } from "../../front_end_svgs/Strife_svgs";

const InviteToDmModal = (props) => {
    const inputRef = useRef();
    const popupRef = useRef();
    const [searchText, setSearchText] = useState("");
    const [selectedFriends, setSelectedFriends] = useState([]);
    const isSelected = (friend) => selectedFriends.map(friend => friend.id).includes(friend.id);
    const findIfSelected = (toAdd) => selectedFriends.findIndex(friend => friend.id === toAdd.id);
    const findIfMemberAlready = (member) => Object.values(props.dmServerMembers).findIndex(friend => friend.id === member.id);
    let rendered_User_PFP = DefaultPFPSVG;
    let count = Object.values(props.dmServerMembers).length >= 10 ? 10 : selectedFriends.length + Object.values(props.dmServerMembers).length - 1;
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isFullyLoaded, setIsFullyLoaded] = useState(true)
    const [copyButtonClicked, setCopyButtonClicked] = useState(false);

    useEffect(() => {

        props.requestAllFriendships();
        setFriends(props.friends);
        setIsLoading(false);
        setTimeout(() => {
            setIsFullyLoaded(false);
        }, 300);

    }, [props.friends?.length]);


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
                props.setInvite2DMModal(false);
                window.removeEventListener('keyup', handleESC, false);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }


    const toggleCopyDMServerInviteLink = () => {
        let copied = document.getElementById('copySIL');
        let copyButton = document.getElementById('copySIL-Button');
        let miniText = document.getElementById("i2dmsmtxt");
        if (copyButtonClicked === true) {
            navigator.clipboard.writeText("$TR!F3 N!TR0 needed for DM Invite Links").then(() => {
                copied.innerText = 'Copied';
                copyButton.classList.add('copy-successful');
                setTimeout(() => {
                    copied.innerText = 'Copy';
                    copyButton.classList.remove('copy-successful');
                }, 2000);
            })
        }
        else {
            copied.innerText = 'Copy';
            miniText.innerText = "Your invite link expires in 24 hours.";
            setCopyButtonClicked(true);
        }

    };


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

    const addNewDmMembers = () => {
        const newDMMembers = [...selectedFriends.map((friend) => parseInt(friend.id))].sort((a, b) => a - b);
        const currentMembersLen = (Object.values(props.dmServerMembers).length);
        const dm_SERVER_ID = parseInt(props.dmServerId)

        if (newDMMembers.length + currentMembersLen > 10) {
            props.setInvite2DMModal(false);
            return;
        }
        else {

            for (let newMemberId of newDMMembers) {
                props.createDmMember({ dm_member_id: newMemberId, dm_server_id: dm_SERVER_ID }).then(() => {
                    App.StrifeCore.perform('parse_New_Invited_DM_Member', { dm_member_id: newMemberId, dm_server_id: dm_SERVER_ID });
                })
            }
            props.setInvite2DMModal(false);

        }

    }


    const filterOutFriends = props.friends.filter((friend, idx) => {
        const index = findIfMemberAlready(friend)
        if (index === -1) {
            return friend;
        }
    })



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



    let footRender = Object.values(props.dmServerMembers).length > 2 ? (
        <div className="create-dm-button-sec">
            <h1 className="invite-to-dm-invite-link-header">Or, send an invite link to a friend!</h1>
            <div className="invite-to-dm-invite-link-input-flex-wrapper">
                <div className="invite-to-dm-invite-link-input-wrapper">
                    <input className="invite-to-dm-invite-link-input"
                        type="text" maxLength={999} placeholder={"$TR!F3 N!TR0 needed for DM Invite Links"}
                        spellCheck={false} readOnly={true}
                    />
                </div>
                <button type="button" id="copySIL-Button" className="invite-to-dm-copy-invite-link-button"
                    onClick={(e) => { toggleCopyDMServerInviteLink(); }}>
                    <div id="copySIL" className="create-dm-button-text">Create</div>
                </button>
            </div>
            <div id="i2dmsmtxt" className="invite-to-dm-small-text">(Sending Invite Links (WIP))</div>
        </div>
    ) : (
        <div className="create-dm-button-sec">
            <button className="create-dm-button" type="submit" disabled={count > 9 || count - (Object.values(props.dmServerMembers).length - 1) === 0}>
                <div className="create-dm-button-text">{`${count <= 2 ? `Create DM` : `Create Group DM`}`}</div>
            </button>
            <div className="invite-to-dm-small-text">(Sending Invite Links (WIP))</div>
        </div>
    )

    let addButtonForGroupChat = Object.values(props.dmServerMembers).length > 2 ? (
        <div className="invite-to-dm-add-button-wrapper">
            {
                count <= 9 ? (
                    <button className="invite-to-dm-add-button" type="submit" disabled={count > 9 || count - (Object.values(props.dmServerMembers).length - 1) === 0}>
                        <div className="create-dm-button-text">Add</div>
                    </button>
                ) : (
                    <div className="invite-to-dm-add-button-fake">
                        <div className="create-dm-button-text">Add</div>
                    </div>
                )
            }
        </div>
    ) : ("")


    if (isLoading === false && props.friends.length > 0) {

        return (
            <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
                <div className={`clear-modal-wrapper homeBar`} onClick={() => props.setInvite2DMModal(false)}>

                    <div className="create-dm-modal-popup dm-invite" onClick={e => e.stopPropagation()} ref={popupRef} >
                        <div className="create-dm-modal-focus-lock">
                            <div className="create-dm-modal">
                                <form onSubmit={addNewDmMembers}>
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
                                            {addButtonForGroupChat}
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
                                                _liveSearch(filterOutFriends).length === 0 ? (
                                                    <div className="create-dm-no-results">
                                                        <div className="create-dm-no-results-error-state"></div>
                                                        <div>No friends found that are not already in this DM.</div>
                                                    </div>
                                                ) : (
                                                    <div className="create-dm-scroller global-scroll-thin-raw-attributes global-scroller-base global-scroll-faded-raw-attributes" id='ul-fiiw' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                                                        <div className="create-dm-ul-list">
                                                            <div className="create-dm-ul-list-div"></div>
                                                            {
                                                                _liveSearch(filterOutFriends).map(friend => {
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
                                                                                        <rect width="10" height="10" x="22" y="22" fill={returnUserBadgeFillColor(friend.online)}
                                                                                            mask={returnUserOnlineActivityStatusBadgeMaskIMG(friend.online)} className="svg-masked-pointer-events">
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
                                    {footRender}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </REACT_PORTAL >
        )
    }
}

export default InviteToDmModal;