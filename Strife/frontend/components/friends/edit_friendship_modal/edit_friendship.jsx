import React from "react";
import { useState, useRef, useEffect } from "react";

const EditFriendshipModal = (props) => {

    return (
        <div className="fo-layer">
            <div className="fo-theme">
                <div className="fo-flex-wrapper">
                    <div className="fo-scroller">
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



