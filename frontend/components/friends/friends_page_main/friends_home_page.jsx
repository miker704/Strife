import React from "react";
import FriendShipIndexContainer from "../friends_list/friends_list_container.js";
import FriendShipIndexOnlineContainer from "../friends_list_online/friends_list_online_container.js";
import BlockedListContainer from "../blocked_list/blocked_list_container.js";
import PendingFriendListContainer from "../pending_list/pending_friends_list_container.js";
import AddFriendsContainer from "../add_friends/add_friends_container.js";
import CreateDmModalHomeBarContainer from "../../dm_servers/create_new_dm_homebar_version/create_dm_homebar_container.js";
import NoFriendsDMModalContainer from "../../dm_servers/no_friends_dm_modal/no_friends_dm_modal_container.js";
import ActiveNowSectionContainer from "../active_now/active_now_section_container.js";
import DMNavBarContainer from "../../dm_servers/dm_nav_bar/dm_nav_bar_container.js";
import { useState, useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { reSyncCurrentUser } from "../../../utils/session_api_util.js";
import { FriendsRaiseHandIcon, HelpIcon, InboxIcon, SMSPlusIcon, UpdateReadyIcon } from "../../front_end_svgs/Strife_svgs.jsx";

const FriendsHomePageContainer = (props) => {


    const location = useLocation();
    // console.log("incoming location ", location);

    const { toggleValue } = location?.state ?? {};
    // console.log("incoming switch ", toggleValue);


    const [showUpdate, setShowUpdate] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [tabType, setTabType] = useState({
        online: true,
        All: false,
        Pending: false,
        Blocked: false,
        Add_Friend: toggleValue || false,
    });

    const [createDMModalHBV, setCreateDMModalHBV] = useState(false);
    const [noFriendsDmModal, setNoFriendsDmModal] = useState(false);

    useEffect(() => {
        if (toggleValue === true) {
            handleClick("Add_Friend");
            props.history.replace({ state: {} })
        }

    }, [toggleValue]);



    useEffect(() => {
        // run probability algo to display update button
        showUpdateProbability();
        props.receiveStrifeB0t();
        props.requestAllFriendships();
        //attempt to resync any need data to avoid being booted out or access servers with revoked or new memberships
        props.reSyncCurrentUser(props.currentUserId);
        props.fetchUserDmServers(props.currentUserId);
        props.fetchUserServers(props.currentUserId);

        return function cleanup () {
            if (props.errors.length > 0) {
                props.removeFriendshipErrors();
            }
            if (props.dmServerErrors.length > 0) {
                props.removeDmServerErrors();
            }
        }
    }, [])


    const showUpdateProbability = () => {
        let probability = Math.random() > 0.99;
        probability === true ? setShowUpdate(true) : setShowUpdate(false);
    }


    const handleRemoveUpdateIcon = (e) => {
        e.preventDefault();
        setShowUpdate(false);
        props.history.push(`/$/updating/`);
    }


    const resetForm = (field) => {
        setTabType(previousState => {
            return { ...previousState, [field]: false };
        })
    }

    const openForm = (field) => {
        setTabType(previousState => {
            return { ...previousState, [field]: true };
        })
    }

    const handleClick = (formType) => {
        let formtypes = [
            "online",
            "All",
            "Pending",
            "Blocked",
            "Add_Friend"
        ];
        for (let i of formtypes) {
            resetForm(i);
        }
        openForm(formType);
    }



    const renderAllFriendShips = () => {
        if (tabType.All === true) {
            return (
                <FriendShipIndexContainer switchToAddFriendsPage={handleClick} />
            )
        }
    }

    const renderAllFriendShipsOnline = () => {
        if (tabType.online === true) {
            return (
                <FriendShipIndexOnlineContainer />
            )
        }
    }

    const renderBlockList = () => {
        if (tabType.Blocked === true) {
            return (
                <BlockedListContainer />
            )
        }
    }

    const renderPendingList = () => {
        if (tabType.Pending === true) {
            return (
                <PendingFriendListContainer />
            )
        }
    }

    const renderAddFriend = () => {
        if (tabType.Add_Friend === true) {
            return (
                <AddFriendsContainer />
            )
        }
    }


    const handleOpenCreateDmModalHombarVersion = (e) => {
        e.preventDefault();
        let numberOfFriends = 0;
        reSyncCurrentUser(props.currentUserId).then((result) => {
            numberOfFriends = result.numberOfFriends;
            if (numberOfFriends > 0) {
                setCreateDMModalHBV(true);
            }
            else {
                setNoFriendsDmModal(true);
            }
        })
    }

    const renderCreateDMModalHBV = () => {
        if (createDMModalHBV === true) {
            return (
                <CreateDmModalHomeBarContainer setCreateDMModalHBV={setCreateDMModalHBV} />
            )
        }
    }


    const renderNoFriendsDmModal = () => {
        if (noFriendsDmModal === true) {
            return (
                <NoFriendsDMModalContainer
                    homeBar={true}
                    dmInvite={false}
                    setNoFriendsDmModal={setNoFriendsDmModal}
                    handleTeleport={handleClick}
                />
            )
        }
    }

    return (
        <div className="home-nav-bar-container">
            <div className="home-page-content">
                <DMNavBarContainer />
                <main className="home-nav-bar-container-inner-wrapper">
                    <section className="home-nav-bar">
                        <div className="home-nav-bar-upper-container">
                            <div className="home-nav-bar-children">
                                <div className="home-friends-icon-wrapper">
                                    <FriendsRaiseHandIcon className="home-friends-icon" width={24} height={24} />
                                </div>
                                <div className="home-nav-bar-friends-title-wrapper">
                                    <h1 className="home-nav-bar-title-text">Friends</h1>
                                </div>
                                <div className="home-friend-divider"></div>
                                <div className="friends-tab-list" role="tablist" aria-label="Friends" aria-orientation="horizontal">
                                    <div onClick={() => handleClick("online")} className={`online-tab ${tabType.online ? "selected" : ""}`} role="tab" aria-selected={`${tabType.online ? true : false}`} aria-disabled={false} tabIndex={`${tabType.online ? 0 : -1}`}>Online</div>
                                    <div onClick={() => handleClick("All")} className={`all-tab ${tabType.All ? "selected" : ""}`} role="tab" aria-selected={`${tabType.All ? true : false}`} aria-disabled={false} tabIndex={`${tabType.All ? 0 : -1}`}>All</div>
                                    <div onClick={() => handleClick("Pending")} className={`pending-tab ${tabType.Pending ? "selected" : ""}`} role="tab" aria-selected={`${tabType.Pending ? true : false}`} aria-disabled={false} tabIndex={`${tabType.Pending ? 0 : -1}`}>Pending</div>
                                    <div onClick={() => handleClick("Blocked")} className={`blocked-tab ${tabType.Blocked ? "selected" : ""}`} role="tab" aria-selected={`${tabType.Blocked ? true : false}`} aria-disabled={false} tabIndex={`${tabType.Blocked ? 0 : -1}`}>Blocked</div>
                                    <div onClick={() => handleClick("Add_Friend")} className={`add-friend-tab ${tabType.Add_Friend ? "selected" : ""}`} role="tab" aria-selected={`${tabType.Add_Friend ? true : false}`} aria-disabled={false} tabIndex={`${tabType.Add_Friend ? 0 : -1}`}><span>Add Friend</span></div>
                                </div>
                            </div>
                            {renderCreateDMModalHBV()}
                            {renderNoFriendsDmModal()}
                            <div className="home-nav-tool-bar">
                                <div className="invite-tool-bar">
                                    <div className="home-nav-tool-bar-icon-wrapper" id="itbgdm"
                                        onClick={(e) => handleOpenCreateDmModalHombarVersion(e)}>
                                        <SMSPlusIcon className="invite-tool-bar-group-dm-icon" />
                                        <div className="home-bar-tool-tip">New Group DM</div>
                                        <div className="home-bar-tool-tip-triangle"></div>
                                    </div>
                                    <div className="home-friend-divider"></div>
                                </div>

                                {
                                    showUpdate && (
                                        <div className="update-ready-tool-bar" onClick={(e) => handleRemoveUpdateIcon(e)}>
                                            <div className="home-nav-tool-bar-icon-wrapper">
                                                <UpdateReadyIcon className="icon-home-update-ready" />
                                                <div className="home-bar-tool-tip">Update Ready!</div>
                                                <div className="home-bar-tool-tip-triangle"></div>
                                            </div>
                                        </div>)
                                }

                                <div className="inbox-tool-bar">
                                    <div className="home-nav-tool-bar-icon-wrapper">
                                        <InboxIcon className="inbox-tool-bar-icon" />
                                    </div>
                                    <div className="home-bar-tool-tip">Inbox</div>
                                    <div className="home-bar-tool-tip-triangle"></div>
                                </div>
                                <a className="help-tool-bar" href="https://support.discord.com" target="_blank" rel="noreferrer noopener">
                                    <div className="help-tool-bar-icon-wrapper">
                                        <HelpIcon className="help-tool-bar-icon" />
                                        <div className="home-bar-tool-tip">Help</div>
                                        <div className="home-bar-tool-tip-triangle"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                    <div className="home-page-friend-tab-body">
                        {renderAllFriendShips()}
                        {renderAllFriendShipsOnline()}
                        {renderBlockList()}
                        {renderPendingList()}
                        {renderAddFriend()}
                        <ActiveNowSectionContainer />
                    </div>
                </main>
            </div>
        </div>
    )


}


export default FriendsHomePageContainer;