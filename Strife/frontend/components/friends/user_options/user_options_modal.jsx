import React from "react";
import { useState, useRef, useEffect } from "react";
import { closeHookModalOnOutsideClick, closeOnEsc } from "../../../utils/close_hook_modals_api_utils";

const UserOptionsModal = ({
    currentUser,
    friends,
    errors,
    requestFriendships,
    removeFriendshipErrors,
    deleteFriendship,
    member,
    setShowPopup,
    blockUser,
    updateFriendship,
    history,
    user,
    top,
}) => {


    if (member.id === currentUser.id) {
        return null;
    }

    const popupRef = useRef();
    closeHookModalOnOutsideClick(popupRef, setShowPopup);
    closeOnEsc(setShowPopup);


    const handleDm = () => {

    }


    const handleCreateFriendShip = () => {

    }

    const handleDeleteFriendShip = () => {
        console.log("hello");
        console.log("member: ", member);
        // deleteFriendship({ user_id: currentUser.id, friend_id: member.id }).then(() => {
        //     setShowPopup(false);

        // });
        return;
    }

    const handleupdateFriendShip = () => {

        updateFriendship({ user_id: currentUser.id, friend_id: member.id }).then(() => {
            setShowPopup(false);

        });
        return;
    }

    const handleBlockUser = () => {
        console.log("blocking this user now")

        blockUser({ user_id: currentUser.id, friend_id: member.id }).then(() => {
            setShowPopup(false);

        });
        return;
    }


    useEffect(() => {


        return function cleanup () {
            if (errors.length > 0) {
                removeFriendshipErrors();
            }
        }

    }, []);

    let lastOption = member.friend_request_status === 3 ? (

        <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
            <div className="fo-item-name">Block User</div>
        </div>
    ) :
        ("");


    let EditOptions = "";

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
                    <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
                        <div className="fo-item-name">Kick User</div>
                    </div>
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
                    <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
                        <div className="fo-item-name">Unblock User</div>
                    </div>
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
                    <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
                        <div className="fo-item-name">Unblock User</div>
                    </div>
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
                    <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
                        <div className="fo-item-name">Unblock User</div>
                    </div>
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
                    <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
                        <div className="fo-item-name">Unblock User</div>
                    </div>
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

                    <div className="fo-options-bottom-div"></div>
                </div>
            </div>
            )

    }



    console.log("memberSelected: ",member);

    return (
        <div className="fo-layer2" >
            <div className="fo-theme2" style={{ top: `${top}px` }} ref={popupRef}>

                {/* <div className="fo-flex-wrapper" >
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

                        <div className="fo-options-bottom-div"></div>
                    </div>
                </div>
             */}
                {EditOptions}
            
            </div>
        </div>
    )
}


export default UserOptionsModal;






