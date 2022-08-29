import React from "react";
import { useState, useRef, useEffect } from "react";

const FriendShipIndexOnline1 = ({ currentUser, friends, errors, history }) => {
    const inputRef = useRef();
    const [searchText, setSearchText] = useState("");
    const [noResultsFound] = useState(false);
    const [selectedFriends, setSelectedFriends] = useState([]);
    const isSelected = (friend) => selectedFriends.map(friend => friend.id).includes(friend.id);
    const findIfSelected = (toAdd) => selectedFriends.findIndex(friend => friend.id === toAdd.id);
    let allFriends = friends;
    let default_Photo = "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png";

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

    const gatherMatches = () => {


        let searchArray = friends;
        let filteredSearchArray = searchArray.filter((friend) => {
            return friend.username.toLowerCase().includes(searchText.toLowerCase())
        })
        setSelectedFriends(filteredSearchArray);
        console.log("selected friends length : ", selectedFriends.length)
        console.log("selected friends contents : ", selectedFriends);
        let numberOfFriends = document.getElementById('num-of-friends');
        // numberOfFriends.innerHTML = `ONLINE - ${selectedFriends.length}`;
        console.log("searchtext: ", searchText)
        if (searchText === "") {
            console.log("select text blank")
            numberOfFriends.innerHTML = `ONLINE - ${friends.length}`;
        }
        else if (searchText === "" && selectedFriends.length === 0) {
            console.log("search text and selectfrieds blank render friends props");
            numberOfFriends.innerHTML = `ONLINE - ${friends.length}`;
        }
        else if (selectedFriends.length > 0) {
            console.log("selectfrieds ");

            numberOfFriends.innerHTML = `ONLINE - ${selectedFriends.length}`;
        }
        else{
            console.log("selected friends and search text blank")
            numberOfFriends.innerHTML = `ONLINE - ${friends.length}`;
        }

    }


    if (noResultsFound === true) {
        return (
            <div className="friend-index-container">
                <div className="all-search-bar">
                    <div className="all-search-bar-inner">
                        <input id="input-all-friends" className="input-all-friends" type="text" placeholder="Search"
                            autoFocus ref={inputRef}
                            spellCheck={false}
                            onChange={(e) => {

                                setSearchText(e.currentTarget.value)
                            }
                            }
                            value={searchText} />


                        <div className="magnify-icon-wrapper">
                            <div className="magnify-icon">
                                <svg className="mag-icon1" aria-label="Search" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 
                            17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 
                            5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 
                            13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 
                            14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 
                            4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 
                            14.242 14.243C13.109 15.376 11.603 16 10 16Z">
                                    </path>
                                </svg>
                                <svg className="clear-mag-icon1" aria-label="Clear" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all-friends">
                    {`ONLINE - ${0}`}
                </div>
                <div className="empty-state-container">
                    <div className="blocked-users-empty">
                        <div className="blocked-users-flex">
                            <img className="no-friends-online-icon" alt="img" />
                            <div className="block-wumpus-text">Wumpus looked, but couldn't find anyone with that name.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (allFriends.length > 0) {
        return (

            <div className="friend-index-container">


                <div className="all-search-bar">
                    <div className="all-search-bar-inner">
                        <input id="input-all-friends" className="input-all-friends" type="search" placeholder="Search"
                            autoFocus ref={inputRef}
                            spellCheck={false}
                            onChange={(e) => {

                                setSearchText(e.currentTarget.value);
                                gatherMatches();
                            }
                            }
                            value={searchText} />
                        <div className="magnify-icon-wrapper">
                            <div className="magnify-icon">
                                <svg className="mag-icon1" aria-label="Search" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 
                            17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 
                            5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 
                            13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 
                            14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 
                            4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 
                            14.242 14.243C13.109 15.376 11.603 16 10 16Z">
                                    </path>
                                </svg>
                                <svg className="clear-mag-icon1" aria-label="Clear" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>




                <div id="num-of-friends" className="all-friends">
                    {`ONLINE - ${allFriends.length}`}
                </div>
                <div className="friend-index">
                    <ul className="friend-index-item-wrapper">
                        {

                            allFriends.map((friend, friendIdx) => {

                                if (friend.username.includes(searchText)) {
                                    return (
                                        <li className="friend-index-item" key={friend.id}>

                                            <div className="friend-index-item-wrapper-inner">
                                                <div className="friend-account-info-wrapper-super">
                                                    <div className="friend-info">
                                                        <img src={`${friend.photo === undefined ? default_Photo : friend.photo}`} alt="pfp" />
                                                    </div>
                                                    <div className="friend-account-info-wrapper">
                                                        <div className="friend-account-info">
                                                            <div className="friend-tag">
                                                                {friend.username}
                                                                <span>#{friend.strife_id_tag}</span>
                                                            </div>
                                                        </div>
                                                        <div className="subtext">
                                                            <div className="subtext-inner">
                                                                {`${friend.online ? "online" : "offline"}`}
                                                                <div className={`${friend.online ? "circle-online" : "circle-offline"}`}></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="friend-msg-actions">
                                                <div className="friend-msg-button">
                                                    <svg className="icon-1WV" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 
                                                            4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 
                                                            17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 
                                                            20.1925 3 19.198 3H4.79805Z">
                                                        </path>
                                                    </svg>
                                                    <div className="pending-request-actions-tool-tip">Message</div>
                                                    <div className="pending-request-actions-tool-tip-triangle"></div>
                                                </div>
                                                <div className="friend-options-button">
                                                    <svg className="icon-1WVg" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                        <g fill="none" fillRule="evenodd">
                                                            <path d="M24 0v24H0V0z">
                                                            </path>
                                                            <path fill="currentColor" d="M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2
                                                                 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2
                                                                  2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z">
                                                            </path>
                                                        </g>
                                                    </svg>
                                                    <div className="pending-request-actions-tool-tip">More</div>
                                                    <div className="pending-request-actions-tool-tip-triangle"></div>
                                                </div>
                                            </div>


                                        </li>
                                    )

                                } else {
                                    document.getElementById('num-of-friends').innerHTML = `ONLINE - ${0}`;
                                    console.log("no match ");

                                    return (
                                        <div className="friend-index-container" key={1}>
                                            {/* <div className="all-search-bar">
                                                <div className="all-search-bar-inner">
                                                    <input id="input-all-friends" className="input-all-friends" type="text" placeholder="Search"
                                                        autoFocus ref={inputRef}
                                                        spellCheck={false}
                                                        onChange={(e) => {
                            
                                                            setSearchText(e.currentTarget.value)
                                                        }
                                                        }
                                                        value={searchText} />
                            
                            
                                                    <div className="magnify-icon-wrapper">
                                                        <div className="magnify-icon">
                                                            <svg className="mag-icon1" aria-label="Search" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                                <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 
                                                        17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 
                                                        5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 
                                                        13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 
                                                        14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 
                                                        4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 
                                                        14.242 14.243C13.109 15.376 11.603 16 10 16Z">
                                                                </path>
                                                            </svg>
                                                            <svg className="clear-mag-icon1" aria-label="Clear" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                                <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div id="num-of-friends" className="all-friends">
                                                {`ONLINE - ${0}`}
                                            </div> */}
                                            <div className="empty-state-container">
                                                <div className="blocked-users-empty">
                                                    <div className="blocked-users-flex">
                                                        <img className="no-friends-online-icon" alt="img" />
                                                        <div className="block-wumpus-text">Wumpus looked, but couldn't find anyone with that name.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </div>


        )
    }
    else {
        return (
            <div className="friend-index-container">
                <div className="empty-state-container">
                    <div className="blocked-users-empty">
                        <div className="blocked-users-flex">
                            <img className="no-friends-online-icon" alt="img" />
                            <div className="block-wumpus-text">No one's around to play with Wumpus.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// class FriendShipIndexOnline1 extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             searchText: "",
//             noResultsFound: false
//         }
//         this.liveSearch = this.liveSearch.bind(this);
//     }


//     liveSearch () {
//         let allFriendShips = document.querySelectorAll('.friend-tag');
//         let search_query = document.getElementById('input-all-friends').value;
//         let numberOfFriends = document.getElementById('num-of-friends');
//         let count = 0;
//         let foundCount = 0;
//         for (let i = 0; i < allFriendShips.length; i++) {
//             if (allFriendShips[i].innerText.toLowerCase().includes(search_query.toLowerCase())) {
//                 allFriendShips[i].classList.remove("is-hidden");
//                 foundCount++;
//                 numberOfFriends.innerHTML = `ONLINE - ${foundCount}`;

//             }
//             else {
//                 allFriendShips[i].classList.add("is-hidden");
//                 count++;

//             }
//         }

//         if (count === allFriendShips.length) {
//             this.setState({ noResultsFound: true });
//         }

//     }



//     componentDidMount () {
//         this.props.requestFriendships();
//     }


//     componentWillUnmount () {
//         if (this.props.errors.length > 0) {

//             this.props.removeFriendshipErrors();
//         }
//     }


// }

export default FriendShipIndexOnline1;