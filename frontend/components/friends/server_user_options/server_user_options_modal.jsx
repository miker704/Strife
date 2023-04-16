import React from "react";
import { useState, useRef, useEffect } from "react";
import { closeHookModalOnOutsideClick, closeOnEsc } from "../../../utils/close_hook_modals_api_utils";
import user_Default_PFP from '../../../../app/assets/images/discord_PFP.svg';
import ReactTooltip from "react-tooltip";

const ServerUserOptionsModal = ({
    top,
    setShowPopup,
    currentUser,
    // member,
    memberId,
    DmServerOwner,
    ServerOwner,
    ServerID,
    user,
    friends,
    fetchUser,
    requestFriendships,
    createFriendship,
    blockUser,
    unBlockUser,
    updateFriendship,
    deleteFriendship,
    DmServerId,
    dmServers,
    createDmServer,
    deleteDmServer,
    dmServerMembers,
    createDmMessage,
    dmServerId,
    fetchDmServer,
    kickUserfromGroupChat,
    createServerMembership,
    deleteServerMembership,
    createChannelMembership,
    deleteChannelMembership,
    errors,
    removeFriendshipErrors,
    dmServerErrors,
    serverErrors,
    channelErrors,
    removeDmServerErrors,
    removeChannelErrors,
    removeServerErrors,
    history,
    serverId,
    channelId,
    fetchChannel,
    fetchServer,
    currentUserId,
    reSyncCurrentUser,
    serverType
}) => {

    const [memberStatus, setMemberStatus] = useState([]);
    // const [currMember, setMemberData] = useState({});
    const [member, setMemberData] = useState({});
    // console.log("member b4: ", member);
    // console.log('memberId: ', memberId);


    useEffect(() => {

        fetchUser(memberId).then((action) => {
            const newfriend = action.user
            // member = Object.assign({}, action.user)
            setMemberData(newfriend);
            setMemberStatus(newfriend);


        })


        return function cleanup () {
            if (errors.length > 0) {
                removeFriendshipErrors();
            }
            if (dmServerErrors.length > 0) {
                removeDmServerErrors();
            }
            if (serverErrors.length > 0) {
                removeServerErrors();
            }
            if (channelErrors.length > 0) {
                removeChannelErrors();
            }
            // requestFriendships();
            // fetchDmServer(dmServerId)
            // requestFriendships();


            // if(serverType === "SERVER"){
            //     fetchServer();
            //     fetchChannel();
            // }
        }

    }, []);


    // console.log("member after outside: ", member);

    let USER_PFP = user_Default_PFP;
    let rendered_PFP = member.photo === undefined ?
        (<div className={`user-avatar-img-svg-render color-${member.color_tag}`}>
            <img src={USER_PFP} alt="upfp" />
        </div>) :
        (<img src={member.photo} alt="upfp" />);

    const Strife_Bot_IDs = [1, 2, 3, 4];

    let if_Bot_tag = Strife_Bot_IDs.includes(member.id) ? (
        <span className="bot-sticker">
            <svg aria-label="Verified Bot" className="bot-check-mark" aria-hidden="false" role="img" width="16" height="16" viewBox="0 0 16 15.2">
                <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor"></path></svg>
            <span className="bot-text">$TR!F3 BOT</span>
        </span>
    ) : ("");


    const popupRef = useRef();
    const dmMembersArray = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx]);
    closeHookModalOnOutsideClick(popupRef, setShowPopup);
    closeOnEsc(setShowPopup);
    const [message, setMessage] = useState('');

    if (member.id === currentUser.id) {

        return (
            <div className="user-profile-card-layer-container">
                <div className="upc-popout" onClick={(e) => e.stopPropagation()} style={{ top: `${top}px` }} ref={popupRef}>
                    <div className="upc-inner-wrapper">
                        <div className="user-mini-upc">
                            <div className="upc-header-wrapper">
                                <div className="upc-header-normal">
                                    <div className={`upc-banner ${currentUser.banner === undefined ? `color-${currentUser.color_tag}` : ``}`}
                                        style={{ backgroundImage: `${currentUser.banner === undefined ? `none` : `url(${currentUser.banner})`}` }}>
                                        <div className="upc-strife-nitro-wrapper" title="Upload your own personalized banner and more with $TR!F3 N!TR0!">
                                            <div className="upc-strife-nitro-badge">
                                                <svg className="upc-strife-nitro-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466
                                             L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 
                                             1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 
                                             2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867
                                              C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 
                                              7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 
                                              C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,
                                              11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466
                                               C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,
                                               8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 
                                               9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,
                                               5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 
                                               20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,
                                               14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 
                                               19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 
                                               L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,
                                               15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 
                                               13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,
                                               9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 
                                               16.7751426,9.7062305 16.8462589,9.84548582 Z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="upc-pfp-icon-wrapper">
                                        <div className="upc-pfp-icon-hover">
                                            <div
                                                className={`${currentUser.photo === undefined ?
                                                    `upc-pfp-icon-hover-wrapper color-${currentUser.color_tag}` :
                                                    `upc-pfp-icon-hover-wrapper`}`}>
                                                {rendered_PFP}
                                                <div className={`${currentUser.online ? `circle-2` : `circle-0`}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="upc-header-top">
                                <div className="upc-header-text">
                                    <div className="upc-header-text-wrapper">
                                        <span className="upc-username">{currentUser.username}</span>
                                        <span className="upc-strife-tag">#{currentUser.strife_id_tag}</span>
                                        {if_Bot_tag}
                                    </div>
                                </div>
                            </div>
                            <div className="upc-body-wrapper">
                                <div className="upc-body">
                                </div>
                                <div className="upc-seper"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }




    const handleDmMessage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const memberIds = [currentUser.id, parseInt(member.id)].sort((a, b) => a - b);
        let new_dm_members = [currentUser, member];
        for (let dmServer of dmServers) {
            if (dmMembersArray(Object.values(dmServer.members).map((member) => member.id).sort((a, b) => a - b), memberIds)) {
                if (history.location.pathname !== `/$/channels/@me/${dmServer.id}`) {
                    const messageHash = {
                        body: message,
                        sender_id: parseInt(currentUserId),
                        dm_server_id: dmServerId
                    }

                    createDmMessage(messageHash);
                    history.push(`/$/channels/@me/${dmServer.id}`);

                }
                return;
            }
        }
        // if dmserver does not already exists create one
        const dmMemberInfo = JSON.parse(JSON.stringify(new_dm_members));
        let newDmServerName = [];
        let dmServerName = "";
        for (let member of dmMemberInfo) {
            if (member.id !== currentUser.id) {
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
            owner_id: currentUser.id,
            // dm_server_name: dmServerName,
            dm_member_ids: memberIds
        }
        let newDmServer;
        createDmServer(submissionState).then((action) => {
            newDmServer = action.dmserver;
            const messageHash = {
                body: message,
                sender_id: parseInt(currentUserId),
                dm_server_id: newDmServer.id
            }
            createDmMessage(messageHash);
            reSyncCurrentUser(currentUserId).then(() => {
                history.push(`/$/channels/@me/${newDmServer.id}`);
            })
            App.StrifeCore.perform('parse_Invites_To_Existing_DmServer_INVOKE_DMS_REFRESH', { dm_member_id: member.id, dm_server_id: newDmServer.id });

        });
        return;

    }




    const handleDm = () => {

        const memberIds = [currentUser.id, parseInt(member.id)].sort((a, b) => a - b);
        let new_dm_members = [currentUser, member];
        for (let dmServer of dmServers) {
            if (dmMembersArray(Object.values(dmServer.members).map((member) => member.id).sort((a, b) => a - b), memberIds)) {
                if (history.location.pathname !== `/$/channels/@me/${dmServer.id}`) {
                    history.push(`/$/channels/@me/${dmServer.id}`);
                }
                return;
            }
        }
        // if dmserver does not already exists create one
        const dmMemberInfo = JSON.parse(JSON.stringify(new_dm_members));
        let newDmServerName = [];
        let dmServerName = "";
        for (let member of dmMemberInfo) {
            if (member.id !== currentUser.id) {
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
            //add cable to send member id 
            //we do send a request to receive all dmservers instead because sending a single dmserver causes the 
            //message in the new server to render to that members screen if they are in some other dmserver 
            App.StrifeCore.perform('parse_Invites_To_Existing_DmServer_INVOKE_DMS_REFRESH', { dm_member_id: member.id, dm_server_id: newDmServer.id });

        });
        return;

    }


    const handleCreateFriendShip = () => {

        createFriendship({ user_id: currentUser.id, friend_id: member.id }).then((action) => {
            let new_friend_request = action.friendship;
            App.StrifeCore.perform('parse_add_friend_request', { new_friend_request });
            setShowPopup(false);

        })

    }

    const handleDeleteFriendShip = () => {


        deleteFriendship({ user_id: currentUser.id, friend_id: member.id }).then(() => {
            App.StrifeCore.perform('parse_delete_friend_request', { user_id: currentUser.id, friend_id: member.id });
            setShowPopup(false);

        });
        return;
    }

    const handleUpdateFriendShip = () => {

        updateFriendship({ user_id: currentUser.id, friend_id: member.id }).then(() => {
            App.StrifeCore.perform('parse_update_friend_request', { user_id: currentUser.id, friend_id: member.id });
            setShowPopup(false);
        });

        return;
    }

    const handleBlockUser = () => {


        let subState = {
            friend_id: member.id,
            user_id: currentUser.id
        }

        blockUser({ user_id: currentUser.id, friend_id: member.id }).then(() => {
            App.StrifeCore.perform('parse_block_request', { user_id: currentUser.id, friend_id: member.id });
            setShowPopup(false);
        });
        return;
    }


    const handleUnBlockUser = () => {
        let subState = {
            friend_id: member.id,
            user_id: currentUser.id
        }
        unBlockUser({ friend_id: member.id, user_id: currentUser.id }).then(() => {
            App.StrifeCore.perform('parse_unblock_request', { user_id: currentUser.id, friend_id: member.id });
            setShowPopup(false);
        });
        return;
    }


    const handleKickUser = () => {
        let subState = {
            dm_member_id: member.id,
            dm_server_id: DmServerId
        }

        if (Object.values(dmServerMembers).length - 1 === 2) {

            deleteDmServer(DmServerId).then(() => {
                // history.push(`/$/channels/@me`);
                history.push(`/$/loading/`);

            })

                .then(() => {
                    //this entire function removes the dmserver from redux state for all 3 members but if one of them is 
                    //offline or not in the dmserver when it is destroyed the dmServer is still shown if they are currently
                    //in the home dashboard clicking on it will redirect them back to the loading screen
                    // but to prevent this from happening regardless we invoke a purge by taking the member ids
                    //then sending them a request to perform a redux action to remove the id of the non existing dmServer
                    let purged_Members = Object.values(dmServerMembers).map((user) => user.id)
                    let purged_ids = purged_Members.filter((userID) => userID !== currentUser.id);
                    App.StrifeCore.perform('purge_DmServer_Members', { dm_members: purged_ids, dm_server_id: DmServerId });
                })

        }
        else {

            kickUserfromGroupChat(member.id, subState).then(() => {
                App.StrifeCore.perform('kick_User_From_DmServer', { dm_member_id: member.id, dm_server_id: DmServerId });
                fetchDmServer(DmServerId);
                setShowPopup(false);
            });
        }


        return;
    }

    const handleBanUser = () => {
        let subState = { user_id: member.id, server_id: ServerID, banned: 1 };

        deleteServerMembership(member.id, subState).then(() => {
            // fetchChannel(channelId);
            // fetchServer(serverId);
            App.StrifeCore.perform('_ASYNC_Ban_User_From_Server_', subState);
            setShowPopup(false);
        })
        return;
    }


    let EditOptions = "";

    let kickUserOption = currentUser.id === DmServerOwner && serverType === 'DM_SERVER' ? (<div className="fo-item-container red" onClick={() => handleKickUser()}>
        <div className="fo-item-name">Kick User</div>
    </div>) : ("");


    let banUserFromServerTag = currentUser.id === ServerOwner && serverType === 'SERVER' ? (<div className="fo-item-container red" onClick={() => handleBanUser()}>
        <div className="fo-item-name">Ban User</div>
    </div>) : ("")


    let upcStrifeNitroWrapper = (

        <div className="upc-strife-nitro-wrapper" title="Upload your own personalized banner and more with Strife Nitro!">
            <div className="upc-strife-nitro-badge">
                <svg className="upc-strife-nitro-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466
                 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 
                 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 
                 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867
                  C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 
                  7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 
                  C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,
                  11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466
                   C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,
                   8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 
                   9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,
                   5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 
                   20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,
                   14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 
                   19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 
                   L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,
                   15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 
                   13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,
                   9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 
                   16.7751426,9.7062305 16.8462589,9.84548582 Z">
                    </path>
                </svg>
            </div>
        </div>


    );



    switch (memberStatus.friend_request_status) {
        //if group owner allow kicking of user 

        // case of -2 means current user is blocked by this user deny any interactions
        case -2:
            //remove block only -> no message
            EditOptions = (
                <div className="user-mini-upc">
                    <div className="upc-header-wrapper">
                        <div className="upc-header-normal">

                            <div className={`upc-banner ${member.banner === undefined ? `color-${member.color_tag}` : ``}`}
                                style={{ backgroundImage: `${member.banner === undefined ? `none` : `url(${member.banner})`}` }} >
                                {upcStrifeNitroWrapper}
                            </div>
                            <div className="upc-pfp-icon-wrapper">
                                <div className="upc-pfp-icon-hover">
                                    <div
                                        className={`${member.photo === undefined ?
                                            `upc-pfp-icon-hover-wrapper color-${member.color_tag}` :
                                            `upc-pfp-icon-hover-wrapper`}`}>
                                        {rendered_PFP}
                                        <div className={`${member.online ? `circle-2` : `circle-0`}`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="upc-header-top">
                        <div className="upc-header-text">
                            <div className="upc-header-text-wrapper">
                                <span className="upc-username">{member.username}</span>
                                <span className="upc-strife-tag">#{member.strife_id_tag}</span>
                                {if_Bot_tag}
                            </div>
                        </div>
                    </div>
                    <div className="upc-body-wrapper">
                        <div className="upc-body">

                            <div className="fo-scroller-2">
                                <div className="fo-item-container red" onClick={() => handleBlockUser()}>
                                    <div className="fo-item-name">Block User</div>
                                </div>
                                {kickUserOption}
                                {banUserFromServerTag}
                                <div className="fo-options-bottom-div"></div>
                            </div>
                        </div>
                        <div className="upc-seper"></div>
                    </div>
                    <div className="upc-footer">
                    </div>
                </div>
            )
            break;



        case -1:
            //remove block only -> no message

            EditOptions = (
                <div className="user-mini-upc">
                    <div className="upc-header-wrapper">
                        <div className="upc-header-normal">

                            <div className={`upc-banner ${member.banner === undefined ? `color-${member.color_tag}` : ``}`}
                                style={{ backgroundImage: `${member.banner === undefined ? `none` : `url(${member.banner})`}` }} >
                                {upcStrifeNitroWrapper}
                            </div>
                            <div className="upc-pfp-icon-wrapper">
                                <div className="upc-pfp-icon-hover">
                                    <div
                                        className={`${member.photo === undefined ?
                                            `upc-pfp-icon-hover-wrapper color-${member.color_tag}` :
                                            `upc-pfp-icon-hover-wrapper`}`}>
                                        {rendered_PFP}
                                        <div className={`${member.online ? `circle-2` : `circle-0`}`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="upc-header-top">
                        <div className="upc-header-text">
                            <div className="upc-header-text-wrapper">
                                <span className="upc-username">{member.username}</span>
                                <span className="upc-strife-tag">#{member.strife_id_tag}</span>
                                {if_Bot_tag}
                            </div>
                        </div>
                    </div>
                    <div className="upc-body-wrapper">
                        <div className="upc-body">

                            <div className="fo-scroller-2">
                                <div className="fo-item-container red" onClick={() => handleUnBlockUser()}>
                                    <div className="fo-item-name">Unblock User</div>
                                </div>
                                {kickUserOption}
                                {banUserFromServerTag}
                                <div className="fo-options-bottom-div"></div>
                            </div>
                        </div>
                        <div className="upc-seper"></div>
                    </div>
                    <div className="upc-footer">
                    </div>
                </div>

            )
            break;



        case 0:
            // add friend, block friend, message

            EditOptions = (
                <div className="user-mini-upc">
                    <div className="upc-header-wrapper">
                        <div className="upc-header-normal">

                            <div className={`upc-banner ${member.banner === undefined ? `color-${member.color_tag}` : ``}`}
                                style={{ backgroundImage: `${member.banner === undefined ? `none` : `url(${member.banner})`}` }} >
                                {upcStrifeNitroWrapper}
                            </div>
                            <div className="upc-pfp-icon-wrapper">
                                <div className="upc-pfp-icon-hover">
                                    <div
                                        className={`${member.photo === undefined ?
                                            `upc-pfp-icon-hover-wrapper color-${member.color_tag}` :
                                            `upc-pfp-icon-hover-wrapper`}`}>
                                        {rendered_PFP}
                                        <div className={`${member.online ? `circle-2` : `circle-0`}`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="upc-header-top">
                        <div className="upc-header-text">
                            <div className="upc-header-text-wrapper">
                                <span className="upc-username">{member.username}</span>
                                <span className="upc-strife-tag">#{member.strife_id_tag}</span>
                                {if_Bot_tag}
                            </div>
                        </div>
                    </div>
                    <div className="upc-body-wrapper">
                        <div className="upc-body">
                            <div className="fo-scroller-2">
                                <div className="fo-item-container" onClick={() => handleDm()}>
                                    <div className="fo-item-name">Message</div>
                                </div>
                                <div className="fo-item-container green" onClick={() => handleCreateFriendShip()}>
                                    <div className="fo-item-name">Send Friend Request</div>
                                </div>

                                <div className="fo-item-container red" onClick={() => handleBlockUser()}>
                                    <div className="fo-item-name">Block User</div>
                                </div>
                                {kickUserOption}
                                {banUserFromServerTag}
                                <div className="fo-options-bottom-div"></div>
                            </div>
                        </div>
                        <div className="upc-seper"></div>
                    </div>
                    <div className="upc-footer">
                        <div className="upc-input-wrapper">
                            <input
                                maxLength={999}
                                minLength={1}
                                className="upc-input"
                                type="text"
                                placeholder={`Message @${member.username}`}
                                value={message}
                                onChange={(e) => setMessage(e.currentTarget.value)}
                                spellCheck={false}
                                autoFocus
                                onKeyDown={(e) => {
                                    if (e.code === 'Enter') {
                                        handleDmMessage(e);
                                    }
                                }}
                            />

                        </div>
                    </div>

                </div>
            )
            break;

        case 1:
            //message, cancel request

            EditOptions = (
                <div className="user-mini-upc">
                    <div className="upc-header-wrapper">
                        <div className="upc-header-normal">

                            <div className={`upc-banner ${member.banner === undefined ? `color-${member.color_tag}` : ``}`}
                                style={{ backgroundImage: `${member.banner === undefined ? `none` : `url(${member.banner})`}` }} >
                                {upcStrifeNitroWrapper}
                            </div>
                            <div className="upc-pfp-icon-wrapper">
                                <div className="upc-pfp-icon-hover">
                                    <div
                                        className={`${member.photo === undefined ?
                                            `upc-pfp-icon-hover-wrapper color-${member.color_tag}` :
                                            `upc-pfp-icon-hover-wrapper`}`}>
                                        {rendered_PFP}
                                        <div className={`${member.online ? `circle-2` : `circle-0`}`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="upc-header-top">
                        <div className="upc-header-text">
                            <div className="upc-header-text-wrapper">
                                <span className="upc-username">{member.username}</span>
                                <span className="upc-strife-tag">#{member.strife_id_tag}</span>
                                {if_Bot_tag}
                            </div>
                        </div>
                    </div>
                    <div className="upc-body-wrapper">
                        <div className="upc-body">
                            <div className="fo-scroller-2">
                                <div className="fo-item-container" onClick={() => handleDm()}>
                                    <div className="fo-item-name">Message</div>
                                </div>
                                <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
                                    <div className="fo-item-name">Cancel Friend Request</div>
                                </div>
                                {kickUserOption}
                                {banUserFromServerTag}
                                <div className="fo-options-bottom-div"></div>
                            </div>
                        </div>
                        <div className="upc-seper"></div>
                    </div>
                    <div className="upc-footer">
                        <div className="upc-input-wrapper">
                            <input
                                maxLength={999}
                                minLength={1}
                                className="upc-input"
                                type="text"
                                placeholder={`Message @${member.username}`}
                                value={message}
                                onChange={(e) => setMessage(e.currentTarget.value)}
                                spellCheck={false}
                                autoFocus
                                onKeyDown={(e) => {
                                    if (e.code === 'Enter') {
                                        handleDmMessage(e);
                                    }
                                }}
                            />

                        </div>
                    </div>

                </div>
            )
            break;

        case 2:
            // messgae, approve, deny request
            EditOptions = (
                <div className="user-mini-upc">
                    <div className="upc-header-wrapper">
                        <div className="upc-header-normal">

                            <div className={`upc-banner ${member.banner === undefined ? `color-${member.color_tag}` : ``}`}
                                style={{ backgroundImage: `${member.banner === undefined ? `none` : `url(${member.banner})`}` }} >
                                {upcStrifeNitroWrapper}
                            </div>
                            <div className="upc-pfp-icon-wrapper">
                                <div className="upc-pfp-icon-hover">
                                    <div
                                        className={`${member.photo === undefined ?
                                            `upc-pfp-icon-hover-wrapper color-${member.color_tag}` :
                                            `upc-pfp-icon-hover-wrapper`}`}>
                                        {rendered_PFP}
                                        <div className={`${member.online ? `circle-2` : `circle-0`}`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="upc-header-top">
                        <div className="upc-header-text">
                            <div className="upc-header-text-wrapper">
                                <span className="upc-username">{member.username}</span>
                                <span className="upc-strife-tag">#{member.strife_id_tag}</span>
                                {if_Bot_tag}
                            </div>
                        </div>
                    </div>
                    <div className="upc-body-wrapper">
                        <div className="upc-body">
                            <div className="fo-scroller-2">
                                <div className="fo-item-container" onClick={() => handleDm()}>
                                    <div className="fo-item-name">Message</div>
                                </div>
                                <div className="fo-item-container green" onClick={() => handleUpdateFriendShip()}>
                                    <div className="fo-item-name">Accept Friend Request</div>
                                </div>
                                <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
                                    <div className="fo-item-name">Ignore Friend Request</div>
                                </div>
                                {kickUserOption}
                                {banUserFromServerTag}
                                <div className="fo-options-bottom-div"></div>
                            </div>
                        </div>
                        <div className="upc-seper"></div>
                    </div>
                    <div className="upc-footer">
                        <div className="upc-input-wrapper">
                            <input
                                maxLength={999}
                                minLength={1}
                                className="upc-input"
                                type="text"
                                placeholder={`Message @${member.username}`}
                                value={message}
                                onChange={(e) => setMessage(e.currentTarget.value)}
                                spellCheck={false}
                                autoFocus
                                onKeyDown={(e) => {
                                    if (e.code === 'Enter') {
                                        handleDmMessage(e);
                                    }
                                }}
                            />

                        </div>
                    </div>

                </div>
            )
            break;
        case 3:
            //messgae, delete friend
            EditOptions = (
                <div className="user-mini-upc">
                    <div className="upc-header-wrapper">
                        <div className="upc-header-normal">

                            <div className={`upc-banner ${member.banner === undefined ? `color-${member.color_tag}` : ``}`}
                                style={{ backgroundImage: `${member.banner === undefined ? `none` : `url(${member.banner})`}` }} >
                                {upcStrifeNitroWrapper}
                            </div>
                            <div className="upc-pfp-icon-wrapper">
                                <div className="upc-pfp-icon-hover">
                                    <div
                                        className={`${member.photo === undefined ?
                                            `upc-pfp-icon-hover-wrapper color-${member.color_tag}` :
                                            `upc-pfp-icon-hover-wrapper`}`}>
                                        {rendered_PFP}
                                        <div className={`${member.online ? `circle-2` : `circle-0`}`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="upc-header-top">
                        <div className="upc-header-text">
                            <div className="upc-header-text-wrapper">
                                <span className="upc-username">{member.username}</span>
                                <span className="upc-strife-tag">#{member.strife_id_tag}</span>
                                {if_Bot_tag}
                            </div>
                        </div>
                    </div>
                    <div className="upc-body-wrapper">
                        <div className="upc-body">
                            <div className="fo-scroller-2">
                                <div className="fo-item-container" onClick={() => handleDm()}>
                                    <div className="fo-item-name">Message</div>
                                </div>
                                <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
                                    <div className="fo-item-name">Remove Friend</div>
                                </div>
                                {kickUserOption}
                                {banUserFromServerTag}
                                <div className="fo-options-bottom-div"></div>
                            </div>
                        </div>
                        <div className="upc-seper"></div>
                    </div>
                    <div className="upc-footer">
                        <div className="upc-input-wrapper">
                            <input
                                maxLength={999}
                                minLength={1}
                                className="upc-input"
                                type="text"
                                placeholder={`Message @${member.username}`}
                                value={message}
                                onChange={(e) => setMessage(e.currentTarget.value)}
                                spellCheck={false}
                                autoFocus
                                onKeyDown={(e) => {
                                    if (e.code === 'Enter') {
                                        handleDmMessage(e);
                                    }
                                }}
                            />

                        </div>
                    </div>

                </div>
            )
            break;


        default:

            EditOptions = ("");

    }


    return (

        <div className="user-profile-card-layer-container">
            <div className="upc-popout" onClick={(e) => e.stopPropagation()} style={{ top: `${top * 0.60}px` }} ref={popupRef}>
                <div className="upc-inner-wrapper">
                    {EditOptions}
                </div>
            </div>

        </div>

    )
}


export default ServerUserOptionsModal;
