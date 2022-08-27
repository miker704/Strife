import React from "react";
import { useState, useRef, useEffect } from "react";

const CreateDmModal = ({
    top, dmServers, currentUser, friends, createDmServers, history
}) => {
    const inputRef = useRef();
    const popupRef = useRef();
    


    const [searchText, setSearchText] = useState("");
    const [selectedFriends, setSelectedFriends] = useState([]);
    const isSelected = (friend) => selectedFriends.map(friend => friend.id).includes(friend.id);
    const findIfSelected = (toAdd) => selectedFriends.findIndex(friend => friend.id === toAdd.id);
    let default_Photo = "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png";
    let count = selectedFriends.length;


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





    return (
            <div className="create-dm-modal-popup" onClick={e => e.stopPropagation()}>
                <div className="create-dm-modal-focus-lock">
                    <div className="create-dm-modal">
                        <div className="create-dm-header-sec">
                            <h2 className="create-dm-header-h2">Select Friends</h2>
                            {count <= 8 ?
                                <div className="num-of-dm-members-selected">You can add {9 - count} more friends.</div>
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
                                                        onClick={() => {toggleSelection(friend)}}
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
                                            className="create-dm-search-bar"
                                            autoFocus ref={inputRef}
                                            spellCheck={false}
                                            type="text"
                                            value={searchText}
                                            onChange={(e) => setSearchText(e.currentTarget.value)}
                                            placeholder="Type the username of a friend"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="create-dm-scroller">
                            <ul className="create-dm-ul-list">
                                <div className="create-dm-ul-list-div"></div>
                                {friends.map(friend => {
                                    if (friend.username.includes(searchText)) {
                                        return (

                                            <li className="create-dm-friend-wrapper" key={friend.id}
                                                onClick={() => {
                                                    toggleSelection(friend);
                                                    inputRef.current.focus();
                                                }}>
                                                <div className="create-dm-friend-inner-wrapper">
                                                    <div className="create-dm-avatar-info">
                                                        <img src={`${friend.photo === undefined ? default_Photo : friend.photo}`} alt="pfp" />
                                                    </div>
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
                                    }
                                    else {
                                        return null;
                                    }
                                })

                                }
                            </ul>
                        </div>
                        <div className="create-dm-footer"></div>
                        <div className="create-dm-button-sec">
                            <button className="create-dm-button" type="submit" disabled={count > 9 || count === 0}>
                                <div className="create-dm-button-text">Create Group DM</div>
                            </button>
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