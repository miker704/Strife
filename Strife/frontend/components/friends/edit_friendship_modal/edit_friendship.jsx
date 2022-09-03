import React from "react";
import { useState, useRef, useEffect } from "react";
import { closeHookModalOnOutsideClick, closeOnEsc } from "../../../utils/close_hook_modals_api_utils";
const EditFriendshipModal = ({
    currentUser,
    friends,
    errors,
    requestFriendships,
    removeFriendshipErrors,
    deleteFriendship,
    friend,
    setShowPopup,
    history,
    user,
    top,
}) => {


    if(friend.id === currentUser.id){
        return null;
    }

    const popupRef = useRef();
    closeHookModalOnOutsideClick(popupRef, setShowPopup);
    closeOnEsc(setShowPopup);

    const handleDeleteFriendShip = () => {

        deleteFriendship({ user_id: currentUser.id, friend_id: friend.id }).then(() => {
            setShowPopup(false);

        });
        return;
    }

    const handleBlockUser = () => {
        console.log("blocking this user now")
    }

    useEffect(() => {


        return function cleanup () {
            if (errors.length > 0) {
                removeFriendshipErrors();
            }
        }

    }, []);

    let lastOption = friend.friend_request_status === 3 ? (

        <div className="fo-item-container red" onClick={() => handleDeleteFriendShip()}>
            <div className="fo-item-name">Block User</div>
        </div>
    ):
    ("");


    let lastEditOption;

    switch (friend.status){}





    return (
        <div className="fo-layer" >
            <div className="fo-theme" style={{ top: `${top}px` }} ref={popupRef}>

                <div className="fo-flex-wrapper" >
                    <div className="fo-scroller" onClick={(e) => e.stopPropagation()} >
                        <div className="fo-item-container">
                            <div className="fo-item-name">Start Video Call</div>
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
            </div>
        </div>
    )
}


export default EditFriendshipModal;


// class EditFriendshipModal extends React.Component {
//     constructor (props) {
//         super(props);
//     }
//     render () {
//         return (
//             <div className="fo-layer">
//                 <div className="fo-theme">
//                     <div className="fo-flex-wrapper">
//                         <div className="fo-scroller">
//                             <div className="fo-item-container">
//                                 <div className="fo-item-name">Start Video Call</div>
//                             </div>
//                             <div className="fo-item-container">
//                                 <div className="fo-item-name">Start Voice Call</div>
//                             </div>
//                             <div className="fo-item-container red">
//                                 <div className="fo-item-name">Remove Friend</div>
//                             </div>
//                             <div className="fo-options-bottom-div"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

// }



