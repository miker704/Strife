import React from "react";
import { useState, useRef, useEffect } from "react";
import { closeHookModalOnOutsideClick, closeOnEsc } from "../../../utils/close_hook_modals_api_utils";
import user_Default_PFP from '../../../../app/assets/images/discord_PFP.svg';

const CreateDmModalHomeBar = ({

    top,
    dmServers,
    setShowPopUp,
    popUpTop,
    currentUser,
    friends,
    createDmServer,
    history,
    createDmMember,
    dmServerErrors,
    errors,
    requestFriendships,
    removeDmServerErrors,
    removeFriendshipErrors,
    requestAllFriendships,
    closeModal,
    topBar,
    reSyncCurrentUser,
    currentUserId

}) => {
    const inputRef = useRef();
    const popupRef = useRef();
    closeHookModalOnOutsideClick(popupRef, setShowPopUp);
    closeOnEsc(setShowPopUp);
    const [cancel] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [selectedFriends, setSelectedFriends] = useState([]);
    const isSelected = (friend) => selectedFriends.map(friend => friend.id).includes(friend.id);
    const findIfSelected = (toAdd) => selectedFriends.findIndex(friend => friend.id === toAdd.id);
    let default_Photo = "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png";
    let rendered_User_PFP = user_Default_PFP;
    let count = selectedFriends.length;


    useEffect(() => {
        // requestFriendships();
        requestAllFriendships();
        return function cleanup () {
            if (errors.length > 0) {
                removeFriendshipErrors();
            }
            if (dmServerErrors.length > 0) {

                removeDmServerErrors();
            }
        }
    }, []);

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

    const handleDmServerCreation = () => {
        const memberIds = [currentUser.id, ...selectedFriends.map((friend) => parseInt(friend.id))].sort((a, b) => a - b);
        for (let dmServer of dmServers) {
            if (dmMembersArray(Object.values(dmServer.members).map((member) => member.id).sort((a, b) => a - b), memberIds)) {

                if (history.location.pathname !== `/$/channels/@me/${dmServer.id}`) {
                    history.push(`/$/channels/@me/${dmServer.id}`);
                }
                setShowPopUp(false)
                return;
            }
        }


        let submissionState = {
            owner_id: currentUser.id,
            // dm_server_name: dmServerName,
            dm_member_ids: memberIds
        }
        let newDmServer;

        createDmServer(submissionState).then((action) => {
            newDmServer = action.dmserver;
            reSyncCurrentUser(currentUserId).then(() => {
                history.push(`/$/channels/@me/${newDmServer.id}`);
            })
        }).then(() => {
            App.StrifeCore.perform('transmit_New_DmServer', { newDmServer })
            let membersToInvite = Object.values(newDmServer.members);
            for (let member of membersToInvite) {
                if (member.id !== currentUser.id) {
                    App.StrifeCore.perform('parse_Invites_To_Existing_DmServer', { dm_member_id: member.id, dm_server_id: newDmServer.id });
                }
            }
            setShowPopUp(false)
        })

        return;
    }

    const liveSearch = () => {
        let allFriendShips = document.querySelectorAll('.create-dm-friend-wrapper');
        let search_query = document.getElementById('input-all-friends').value;
        let count = 0;
        for (let i = 0; i < allFriendShips.length; i++) {
            if (allFriendShips[i].innerText.toLowerCase().includes(search_query.toLowerCase())) {
                allFriendShips[i].classList.remove("is-hidden");
            }
            else {
                allFriendShips[i].classList.add("is-hidden");
                count++;
            }
        }

        if (count === allFriendShips.length) {
            document.getElementById('ul-fiiw').classList.add('is-hidden')
            document.getElementById('no-match').classList.remove('is-hidden')

        }
        else {
            document.getElementById('no-match').classList.add('is-hidden')
            document.getElementById('ul-fiiw').classList.remove('is-hidden')
        }

    }




    let createDmButtonMessage = count <= 1 ? (
        <div className="create-dm-button-text">Create DM</div>
    ) : (
        <div className="create-dm-button-text">Create Group DM</div>
    )


    return (
        <div className={`clear-modal-wrapper ${topBar === true ? `homeBar` : ``}`}>

            <div className="create-dm-modal-popup" onClick={e => e.stopPropagation()} ref={popupRef}>
                <div className="create-dm-modal-focus-lock">
                    <div className="create-dm-modal">
                        <form onSubmit={handleDmServerCreation}>
                            <div className="create-dm-header-sec">
                                <h2 className="create-dm-header-h2">Select Friends</h2>
                                {count <= 8 ?
                                    <div className="num-of-dm-members-selected">You can add {9 - count} more {`${9 - count === 1 ? `friend` : `friends`}`}.</div>
                                    : <div className={`${count > 9 ? "num-of-dm-members-selected cDMS-error" : "num-of-dm-members-selected"}`}>
                                        This group has a 10 member limit.
                                    </div>
                                }
                                <div className="create-dm-search-bar-wrapper">
                                    <div className="create-dm-search-bar-outer-wrapper">
                                        <div className="create-dm-search-bar-inner-wrapper">
                                            {
                                                selectedFriends.map(friend => {
                                                    return (
                                                        <div
                                                            className="mini-box"
                                                            key={friend.id}
                                                            onClick={() => { toggleSelection(friend) }}
                                                        >
                                                            {friend.username}
                                                            <svg className="close-3-icon" aria-label="Remove" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                                <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 
                                                            12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                    )
                                                })
                                            }

                                            <input
                                                id="input-all-friends"
                                                className="create-dm-search-bar"
                                                autoFocus ref={inputRef}
                                                spellCheck={false}
                                                type="text"
                                                value={searchText}
                                                onInput={() => liveSearch()}
                                                onChange={(e) => setSearchText(e.currentTarget.value)}
                                                placeholder="Type the username of a friend"
                                            />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="create-dm-scroller" id='ul-fiiw'>
                                <ul className="create-dm-ul-list">
                                    <div className="create-dm-ul-list-div"></div>
                                    {friends.map(friend => {
                                        return (
                                            <li className="create-dm-friend-wrapper" key={friend.id}
                                                onClick={() => {
                                                    toggleSelection(friend);
                                                    inputRef.current.focus();
                                                }}>
                                                <div className="create-dm-friend-inner-wrapper">
                                                    <div className={`${friend.photo === undefined ?
                                                        `user-pfp-svg-render color-${friend.color_tag}` :
                                                        `create-dm-avatar-info`}`}>
                                                        <img src={`${friend.photo === undefined ? rendered_User_PFP : friend.photo}`} alt="dsmPFP" />
                                                    </div>
                                                    <div className={`${friend.online ? "circle-online-dms-home-bar" : "circle-offline-dms-home-bar"}`}></div>

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
                                                            <svg aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24">
                                                                <path fill="transparent" fillRule="evenodd" clipRule="evenodd" d="M8.99991 16.17L4.82991 
                                                            12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                    </span>
                                                </div>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            </div>
                            <div id="no-match" className="create-dm-no-results is-hidden">
                                <div className="create-dm-no-results-error-state"></div>
                                <div>No friends found that are not already in this DM.</div>
                            </div>
                            <div className="create-dm-footer"></div>
                            <div className="create-dm-button-sec">
                                <button className="create-dm-button" type="submit" disabled={count > 9 || count === 0}>
                                    {createDmButtonMessage}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateDmModalHomeBar;