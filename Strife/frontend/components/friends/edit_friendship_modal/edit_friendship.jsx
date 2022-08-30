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
    left,
}) => {

    const popupRef = useRef();

    closeHookModalOnOutsideClick(popupRef, setShowPopup);
    closeOnEsc(setShowPopup);

    const stylePos = {
        top: `${top}px`,
        left: `${left}px`,
        postion: "absolute",
    }

    return (
        <div className="fo-layer" >
            {/* <div className="fo-theme" style={{ top: `${top}px` }} ref={popupRef}> */}
            <div className="fo-theme" style={stylePos} ref={popupRef}>

                <div className="fo-flex-wrapper" >
                    <div className="fo-scroller" style={{ paddingRight: `${0}px` }}>
                        <div className="fo-item-container">
                            <div className="fo-item-name">Start Video Call</div>
                        </div>
                        <div className="fo-item-container">
                            <div className="fo-item-name">Start Voice Call</div>
                        </div>
                        <div className="fo-item-container red">
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



