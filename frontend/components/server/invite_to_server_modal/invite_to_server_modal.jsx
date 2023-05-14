import React from "react";
import { useState, useRef, useEffect } from "react";
import user_Default_PFP from '../../../../app/assets/images/discord_PFP.svg';

const InviteToServerModal = (props) => {
    const inputRef = useRef();
    const popupRef = useRef();
    const [searchText, setSearchText] = useState("");
    const [generalChannelName, setGeneralChannelName] = useState("");
    
    useEffect(() => {
        setGeneralChannelName(props.generalChannelName);
        window.addEventListener('keyup', props.handleESC, false);
        props.requestAllFriendships();
        return function cleanup () {
            props.removeFriendshipErrors();
            props.removeServerErrors();
            window.removeEventListener('keyup', props.handleESC, false);
        }
    }, []);


    const findIfMemberAlready = (member) => Object.values(props.server.users).findIndex(friend => friend.id === member.id);
    let rendered_User_PFP = user_Default_PFP;

    const inviteUserToServer = (friend) => {
        const sERVER_ID = parseInt(props.serverId)
        let button = document.getElementById(`ivsmbutton ${friend.id}`);
        let buttonText = document.getElementById(`ivsmbutton-text ${friend.id}`);
        let elipAnimation = document.getElementById(`elip-spin ${friend.id}`);
        elipAnimation.classList.remove('is-hidden');
        buttonText.innerText = "";
        props.createServerMembership({ user_id: friend.id, server_id: sERVER_ID }).then(() => {
            App.StrifeCore.perform('webSocketReceiveNewServerViaInvite', { user_id: friend.id, server_id: sERVER_ID });
            setTimeout(() => {
                elipAnimation.classList.add('is-hidden');
                buttonText.innerText = "Sent";
                button.disabled = true;
            }, 1000);
        });

    }


    const filterOutFriends = props.friends.filter((friend, idx) => {
        const index = findIfMemberAlready(friend)
        if (index === -1) {
            return friend;
        }
    });

    const toggleCopyServerInviteLink = () => {
        let copied = document.getElementById('copySIL');
        let copyButton = document.getElementById('copySIL-Button');
        navigator.clipboard.writeText(props.server.invite_code).then(() => {
            copied.innerText = 'Copied';
            copyButton.classList.add('copy-successful');
            setTimeout(() => {
                copied.innerText = 'Copy';
                copyButton.classList.remove('copy-successful');
            }, 2000);
        })
    };



    const liveSearch = () => {
        let allFriendShips = document.querySelectorAll('.i2sm-invite-row');
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


    const resetSearch = () => {
        setSearchText("");
        document.getElementById('input-all-friends').value = "";
        liveSearch();
    }


    return (


        <div className="invite-to-server-modal-layerContainer ">
            <div className="i2sm-main-layer" onClick={e => e.stopPropagation()} ref={popupRef}>
                <div className="i2sm-main-wrapper" >
                    <div className="i2sm-focus-lock">
                        <div className="i2sm-modal">
                            <div className="i2sm-inner-flex">
                                <button type="button" className="i2sm-close-button-wrapper" onClick={() => props.closeModal()} >
                                    <div className="i2sm-close-button-container">
                                        <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                            </path>
                                        </svg>
                                    </div>
                                </button>
                                <div className="i2sm-header-container">
                                    <div className="i2sm-header">
                                        <h1 className="i2sm-header-1">Invite friends to <strong>{props.server.server_name}</strong></h1>
                                        <div className="i2sm-header-channel-name-container">
                                            <svg width="24" height="24" viewBox="0 0 24 24" className="i2sm-channelHashIcon" aria-hidden="true" role="img">
                                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 
                                                     5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 
                                                     2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 
                                                     7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 
                                                     3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 
                                                     3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899
                                                     9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632
                                                     20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 
                                                     20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
                                                </path>
                                            </svg>
                                            <div className="i2sm-channel-text-name">{generalChannelName}</div>
                                        </div>
                                        <div className="i2sm-search-bar-container">
                                            <div className="i2sm-search-bar-inner">
                                                <input
                                                    id="input-all-friends"
                                                    className="i2sm-search-bar"
                                                    autoFocus ref={inputRef}
                                                    spellCheck={false}
                                                    type="search"
                                                    value={searchText}
                                                    onInput={() => liveSearch()}
                                                    onChange={(e) => setSearchText(e.currentTarget.value)}
                                                    placeholder="Search for friends"
                                                />
                                                <div className="i2sm-search-bar-icon-layout">
                                                    <div className="i2sm-search-bar-icon-container">
                                                        <svg className={`i2sm-mag-icon ${searchText.length === 0 ? `i2sm-visible` : ``}`} aria-label="Search" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832
                                                          12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10
                                                          18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603
                                                          4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603
                                                          15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z">
                                                            </path>
                                                        </svg>
                                                        <svg aria-label="Clear" aria-hidden="false" role="img"
                                                            className={`i2sm-clear-icon ${searchText.length > 0 ? `i2sm-visible` : ``}`}
                                                            onClick={() => { resetSearch(); }}
                                                            width="24" height="24" viewBox="0 0 24 24"
                                                        >
                                                            <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="i2sm-mt"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="i2sm-scroller" id='ul-fiiw'>
                                <ul className="i2sm-scroller-content">
                                    <div className="i2sm-invis-div"></div>
                                    {filterOutFriends.map((friend) => {
                                        return (
                                            <li className="i2sm-invite-row" key={friend.id}>
                                                <div className="i2sm-invite-row-info">
                                                    <div className="i2sm-invite-row-wrapper">
                                                        <div className={`${friend.photo === undefined ?
                                                            `user-pfp-svg-render color-${friend.color_tag}` :
                                                            `create-dm-avatar-info`}`}>
                                                            <img src={`${friend.photo === undefined ? rendered_User_PFP : friend.photo}`} alt="userPFP" />
                                                        </div>
                                                    </div>
                                                    <div className="i2sm-invite-row-member-username">{`${friend.username}`}</div>
                                                </div>
                                                <button id={`ivsmbutton ${friend.id}`} type="button" className="i2sm-invite-member-button"
                                                    onClick={() => {
                                                        inputRef.current.focus();
                                                        inviteUserToServer(friend)
                                                    }}>
                                                    <span id={`elip-spin ${friend.id}`} className="spinner-ellipsis spinner-dots is-hidden" role='img'>
                                                        <span className="inner-spinner-dots-container pulsing-ellipsis">
                                                            <span className="spin-dot spin-dot-item"></span>
                                                            <span className="spin-dot spin-dot-item"></span>
                                                            <span className="spin-dot spin-dot-item"></span>
                                                        </span>
                                                    </span>
                                                    <div id={`ivsmbutton-text ${friend.id}`} className="i2sm-invite-member-button-contents">
                                                        Invite
                                                    </div>
                                                </button>
                                            </li>
                                        );
                                    })
                                    }
                                </ul>
                            </div>


                            <div id="no-match" className={`i2sm-no-results is-hidden`}>
                                <div className="i2sm-no-results-inner">
                                    <h2 className="i2sm-no-results-title">NO RESULTS FOUND</h2>
                                </div>
                                <div className="i2sm-no-results-sep"></div>
                            </div>

                            <div className="i2sm-or-send-slink-flex-container">
                                <div className="i2sm-ssl-inner-flex-container">
                                    <h2 className="i2sm-ssl-header">Or, send a server invite link to a friend</h2>
                                    <div className="i2sm-ssl-input-flex-container">
                                        <div className="i2sm-sll-input-wrapper">
                                            <input className="i2sm-sll-input"
                                                type="text" spellCheck={false} readOnly
                                                placeholder={`${props.server.invite_code}`}
                                            />
                                        </div>
                                        <button type="button" id="copySIL-Button" className="i2sm-sll-copy-button" onClick={() => {
                                            toggleCopyServerInviteLink();
                                        }}>
                                            <div id="copySIL" className="i2sm-sll-copy-button-contents">
                                                Copy
                                            </div>
                                        </button>
                                    </div>
                                    <div className="i2sm-sll-edit-link-wrapper">
                                        Your invite link expires in 7 days.{` `}
                                        <a className="i2sm-sll-link-2-edit-i-link" target="_blank" role="button">Edit invite link.</a>{` `}
                                        ($TR!F3 N!TR0 Required)
                                    </div>
                                    <div className="i2sm-sll-add-image-container">
                                        <svg className="i2sm-sll-add-image-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 8 12">
                                            <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
                                            </path>
                                            <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
                                            </path>
                                        </svg>
                                        <div className="i2sm-sll-add-image-text">
                                            Add an image to your invite link with Boosting
                                        </div>
                                        <a role="button" target="_blank" className="i2sm-sll-add-image-learn-more-link">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );

}

export default InviteToServerModal;