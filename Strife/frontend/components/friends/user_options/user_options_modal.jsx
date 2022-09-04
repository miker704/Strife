import React from "react";
import { useState, useRef, useEffect } from "react";
import { closeHookModalOnOutsideClick, closeOnEsc } from "../../../utils/close_hook_modals_api_utils";

const UserOptionsModal = ({
    top,
    setShowPopup,
    currentUser,
    member,
    DmServerOwner,
    user,
    friends,
    requestFriendships,
    createFriendship,
    blockUser,
    updateFriendship,
    deleteFriendship,
    DmServerId,
    createDmServer,
    kickUserfromGroupChat,
    errors,
    removeFriendshipErrors,
    dmServerErrors,
    removeDmServerErrors,
    history,
}) => {


    if (member.id === currentUser.id) {
        return null;
    }

    const popupRef = useRef();
    const dmMembersArray = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx]);

    closeHookModalOnOutsideClick(popupRef, setShowPopup);
    closeOnEsc(setShowPopup);


    const handleDm = () => {
        console.log("send message request to : ");
        console.log("member: ", member);
        const memberIds = [currentUser.id, member.id];
        let subState = {
            owner_id: currentUser.id,
            dm_member_ids: memberIds
        }
        console.log("handleDmSubstate: ", subState);


    }


    const handleCreateFriendShip = () => {
        console.log("send friend request to : ");
        console.log("member: ", member);
        let subState = {
            friend_id: member.id, 
            user_id: currentUser.id 
        }
        console.log("handlecreateFriendship: ", subState);

    }

    const handleDeleteFriendShip = () => {
        console.log("delete friend ");
        console.log("member: ", member);
        let subState = {
            user_id: currentUser.id,
            friend_id: member.id,
        }
        console.log("handledeleteFriendship: ", subState);

        deleteFriendship({ user_id: currentUser.id, friend_id: member.id }).then(() => {
            setShowPopup(false);

        });
        return;
    }

    const handleUpdateFriendShip = () => {
        console.log("updates friend ");
        console.log("member: ", member);
        let subState = {
            user_id: currentUser.id,
            friend_id: member.id,
        }
        updateFriendship({ user_id: currentUser.id, friend_id: member.id }).then(() => {
            setShowPopup(false);

        });
        console.log("handleupdateFriendship: ", subState);

        return;
    }

    const handleBlockUser = () => {
        console.log("blocking this user now")
        console.log("member: ", member);

        // blockUser({ user_id: currentUser.id, friend_id: member.id }).then(() => {
        //     setShowPopup(false);

        // });

        let subState = {
            friend_id: member.id, 
            user_id: currentUser.id 
        }
        console.log("handleblockuser: ", subState);

        return;
    }


    const handleKickUser = () => {
        console.log("kickiiing this user now")
        console.log("member: ", member);
        let subState = {
            dm_member_id: member.id, 
            dm_server_id: DmServerId
        }
        console.log("handlekickuser: ", subState);

    }

    useEffect(() => {

        return function cleanup () {
            if (errors.length > 0) {
                removeFriendshipErrors();
            }
            if (dmServerErrors.length > 0) {
                removeDmServerErrors();
            }
        }

    }, []);

    let EditOptions = "";

    let kickUserOption = currentUser.id === DmServerOwner ? (<div className="fo-item-container red" onClick={() => handleKickUser()}>
        <div className="fo-item-name">Kick User</div>
    </div>) : ("")


    switch (member.friend_request_status) {
        //if group owner allow kicking of user 
        case -1:
            //remove block only -> no message
            console.log("blocked usere");
            EditOptions = (
                <div className="fo-flex-wrapper2" >
                    <div className="fo-scroller" onClick={(e) => e.stopPropagation()} >
                        <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
                            <div className="fo-item-name">Unblock User</div>
                        </div>
                        {kickUserOption}
                        <div className="fo-options-bottom-div"></div>
                    </div>
                </div>
            );
            break;



        case 0:
            // add friend, block friend, message
            console.log("not a friend");
            EditOptions = (
                <div className="fo-flex-wrapper2" >
                    <div className="fo-scroller" onClick={(e) => e.stopPropagation()} >
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
                        <div className="fo-options-bottom-div"></div>
                    </div>
                </div>
            );
            break;

        case 1:
            //message, cancel request
            console.log("out going friend-request");
            EditOptions = (
                <div className="fo-flex-wrapper2" >
                    <div className="fo-scroller" onClick={(e) => e.stopPropagation()} >
                        <div className="fo-item-container" onClick={() => handleDm()}>
                            <div className="fo-item-name">Message</div>
                        </div>
                        <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
                            <div className="fo-item-name">Cancel Friend Request</div>
                        </div>
                        {kickUserOption}
                        <div className="fo-options-bottom-div"></div>
                    </div>
                </div>
            );
            break;

        case 2:
            // messgae, approve, deny request
            console.log("incoming friend-request");
            EditOptions = (
                <div className="fo-flex-wrapper2" >
                    <div className="fo-scroller" onClick={(e) => e.stopPropagation()} >
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
                        <div className="fo-options-bottom-div"></div>
                    </div>
                </div>
            );
            break;
        case 3:
            //messgae, delete friend
            console.log("friend");
            EditOptions = (
                <div className="fo-flex-wrapper2" >
                    <div className="fo-scroller" onClick={(e) => e.stopPropagation()} >
                        <div className="fo-item-container" onClick={() => handleDm()}>
                            <div className="fo-item-name">Message</div>
                        </div>
                        <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
                            <div className="fo-item-name">Remove Friend</div>
                        </div>
                        {kickUserOption}
                        <div className="fo-options-bottom-div"></div>
                    </div>
                </div>
            );
            break;

        default:
            EditOptions = (
                <div className="fo-flex-wrapper" >
                    <div className="fo-scroller" onClick={(e) => e.stopPropagation()} >
                        <div className="fo-item-container">
                            <div className="fo-item-name">Message</div>
                        </div>
                        <div className="fo-item-container">
                            <div className="fo-item-name">Start Voice Call</div>
                        </div>
                        <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
                            <div className="fo-item-name">Remove Friend</div>
                        </div>
                        {kickUserOption}
                        <div className="fo-options-bottom-div"></div>
                    </div>
                </div>
            )

    }



    console.log("memberSelected: ", member);

    console.log("DmServerOwner user options : ", DmServerOwner);
    console.log("DmServerId from user options : ", DmServerId);

    return (
        <div className="fo-layer2" >
            <div className="fo-theme2" style={{ top: `${top}px` }} ref={popupRef}>

                {EditOptions}

            </div>
        </div>
    )
}


export default UserOptionsModal;






