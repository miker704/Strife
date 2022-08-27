import React from "react";
import { useState, useRef } from "react";


const CreateDmModal = ({
    top, dmServers, setShowPopup, currentUser, friends, createDmServers, history
}) => {
    const inputRef = useRef();
    const popupRef = useRef();
    const [searchText, setSearchText] = useState("");
    const [selectedFriends, setSelectedFriends] = useState([]);
    const isSelected = (friend) => selectedFriends.map(friend => friend.id).includes(friend.id);
    const findIfSelected = (toAdd) => selectedFriends.findIndex(friend => friend.id === toAdd.id);

    return (
        <div className="clear-modal-wrapper">
            <div className="create-dm-modal-popup">
                <div className="create-dm-modal-focus-lock">
                    <div className="create-dm-modal">
                        <div className="create-dm-header-sec">
                            <h2 className="create-dm-header-h2">Select Friends</h2>
                            <div className="num-of-dm-members-selected">You can add x more friends.</div>
                            <div className="create-dm-search-bar-wrapper">
                                <div className="create-dm-search-bar-outer-wrapper">
                                    <div className="create-dm-search-bar-inner-wrapper">
                                        <input className="create-dm-search-bar" type="text" name="" id="" placeholder="Type the username of a friend"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="create-dm-scroller">
                            <ul className="create-dm-ul-list">
                                <div className="create-dm-ul-list-div"></div>
                                {friends.map(friend => {
                                    if (friend.username.includes(searchText)){
                                        return (
                                        
                                        <li key={friend.id}>{friend.username}</li>
                                        
                                        
                                        )
                                    }
                                    else{
                                        return(
                                        <li key={friend.id}>{friend.strife_id_tag}</li>
                                    
                                        )
                                    }
                                                })

                                }
                            </ul>
                        </div>
                        <div className="create-dm-footer"></div>
                        <div className="create-dm-button-sec">
                            <button className="create-dm-button">
                                <div className="create-dm-button-text">Create Group DM</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// class CreateDmModal extends React.Component {
//     constructor (props) {
//         super(props);
//     }
//     render () {
//         return (
//             <div className="clear-modal-wrapper">
//                 <div className="create-dm-modal-popup">
//                     <div className="create-dm-modal-focus-lock">
//                         <div className="create-dm-modal">
//                             <div className="create-dm-header-sec">
//                                 <h2 className="create-dm-header-h2">Select Friends</h2>
//                                 <div className="num-of-dm-members-selected">You can add x more friends.</div>
//                                 <div className="create-dm-search-bar-wrapper">
//                                     <div className="create-dm-search-bar-outer-wrapper">
//                                         <div className="create-dm-search-bar-inner-wrapper">
//                                             <input className="create-dm-search-bar" type="text" name="" id="" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="create-dm-scroller">

//                             </div>
//                             <div className="create-dm-footer"></div>
//                             <div className="create-dm-button-sec">
//                                 <button className="create-dm-button">
//                                     <div className="create-dm-button-text">Create Group DM</div>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default CreateDmModal;