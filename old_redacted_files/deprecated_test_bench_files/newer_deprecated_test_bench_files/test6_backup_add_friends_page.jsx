
// import React from "react";
// import { Link } from 'react-router-dom';
// import { useState, useRef, useEffect } from "react";



// const TestPage6 = (props) => {

//     const inputHighLights = useRef(null);
//     const inputRef = useRef(null);
//     const [FRF_Modal, setFRF_Modal] = useState(false);
//     const [friendRequestSuccess, setFriendRequestSuccess] = useState(false);
//     const [User_Strife_Id_Tag, setUser_Strife_Id_Tag] = useState("");
//     const [userToAdd, setUserToAdd] = useState({});
//     const [placeHolderHash, setPlaceHolderHash] = useState('');
//     const [hashPresent, setHashPresent] = useState("false");


//     useEffect(() => {

//         return function cleanup () {
//             if (props.errors.length > 0) {
//                 props.removeFriendshipErrors();
//             }
//             if (props.sessionErrors.length > 0) {
//                 props.removeSessionErrors();
//             }
//         }
//     }, [])




//     const renderFriendRequestErrors = () => {
//         if (props.sessionErrors.includes('User Does not exists with that STRIFE ID Tag !')) {
//             return "Hm, didn't work. Double check that the capitalization, spelling, any spaces, and numbers are correct.";
//             // return "We're more than numbers... we're people! Enter a username and tag. It should look something like: TotallyARealUsername#0000";
//             //  if only numbers added
//             // if no 4 digit tag say input name "We need 83y7r482r98's four digit tag so we know which one they are.""
//         }
//         else if (props.sessionErrors.includes('Please enter proper format username + # + STRIFE ID Tag.')) {
//             return "Please enter proper format username + # + $TR!F3 ID Tag."
//         }
//         else {
//             return "";
//         }
//     }

//     const renderFriendRequestFailedErrors = () => {
//         if (props.errors.includes('Friend has already been taken.')) {
//             return "You have sent a friend request or added this user already!";
//         }
//         else {
//             return "";
//         }
//     }


//     const renderFriendRequestSuccess = () => {
//         if (friendRequestSuccess === true) {
//             return "Friend Request Sent.";
//             // return "Success! Your friend request to username#4895 was sent.";

//         }
//         else {
//             return "";
//         }
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         let userInfo = User_Strife_Id_Tag;
//         let hashTagInfo = "";
//         let userNAME = ""


//         if (userInfo.includes('#')) {
//             hashTagInfo = userInfo.split('#').pop();
//             userNAME = userInfo.split('#').length >= 1 ? userInfo.split('#').shift() : "";
//             console.log(userInfo.split('#'));

//         }
//         else {
//             hashTagInfo = '-000';
//             userNAME = userInfo;
//         }

//         let userStrifeId = hashTagInfo.length === 4 ? hashTagInfo : '-000';
//         let userNameToSearch = userNAME.length >= 2 ? userNAME : '';
//         let newFriend;
//         console.log(`userStrifeId = ${userStrifeId}`);
//         console.log(`userNameToSearch = ${userNameToSearch}`);



//         props.fetchUserByUserNameOrStrifeID({ username: userNameToSearch, strife_id_tag: userStrifeId }).then((action) => {
//             newFriend = action.user;
//             setUserToAdd(newFriend);
//             console.table(newFriend)
//         }, (error) => {
//             console.log("ERRRRRRRORRR!");
//             console.log(error);
//             console.table(error);
//         })


//         // props.fetchUserByStrifeId(userStrifeId).then((action) => {
//         //     newFriend = action.user;
//         //     console.log('new friend is : ');

//         //     console.table(newFriend);

//         //     props.createFriendship({ friend_id: newFriend.id, user_id: props.currentUser.id }).then((action) => {
//         //         setFriendRequestSuccess(true);
//         //         //is successful reset input 
//         //         // setUser_Strife_Id_Tag('');
//         //         let new_friend_request = action.friendship;
//         //         setUserToAdd(new_friend_request);
//         //         console.log('userToAdd'); 
//         //         console.log(userToAdd); 
//         //         App.StrifeCore.perform('parse_add_friend_request', { new_friend_request });

//         //     });
//         //     console.log('userToAddOutsideProps'); 
//         //     console.log(userToAdd); 
//         // },(error)=>{
//         //     console.log("ERROR!!!!!!!!!!!!!!");
//         //     console.log(error);

//         // })

//         // props.fetchUserByStrifeId(userStrifeId).then((action)=>{},(error)=>{});
//         console.log(userToAdd);

//     }


//     const searchByName = () => {
//         let x = props.searchUsers(User_Strife_Id_Tag);
//         console.log(x);
//     }

//     const generatePlaceHolder = () => {
//         if (User_Strife_Id_Tag.includes('#') === true) {
//             let left = User_Strife_Id_Tag.split('#').shift();
//             let right = User_Strife_Id_Tag.split('#').pop();
//             let rightFinal = "";
//             if (right.length === 0) {
//                 rightFinal = "0000";
//             }
//             else if (right.length >= 4) {
//                 rightFinal = right;
//             }
//             else {
//                 rightFinal = right + '0'.repeat((4 - right.length));
//             }

//             let newHolder = left.concat('#' + rightFinal);
//             return newHolder;
//         }
//         else {
//             return User_Strife_Id_Tag;
//         }
//     }

//     const handleInput = (e) => {
//         e.preventDefault();
//         console.log(e.currentTarget.value);
//         // if (User_Strife_Id_Tag.includes('#') === true) {
//         //     console.log('last char is ');
//         //     console.log(e.currentTarget.value.at(-1));
//         //     // let hashCut = parseInt(e.currentTarget.value.at(-1));
//         //     let hashCut = e.currentTarget.value.at(-1);
//         //     const regex = RegExp('\d');

//         //     if (regex.match(hashCut)) {
//         //         console.log('yesxzs ');

//         //         setUser_Strife_Id_Tag(e.currentTarget.value);
//         //     }

//         //     // setUser_Strife_Id_Tag(e.currentTarget.value);

//         // }
//         // else {
//         // setUser_Strife_Id_Tag(e.currentTarget.value);
//         // }

//         // if (User_Strife_Id_Tag.includes('#') === true) {
//         if (User_Strife_Id_Tag.at(-1) === '#' && hashPresent === false) {

//             console.log('length prior');

//             console.log(document.getElementById("add-friend-input-bar").maxLength)

//             // document.getElementById("add-friend-input-bar").maxLength = (37-(User_Strife_Id_Tag.length + 4));
//             document.getElementById("add-friend-input-bar").maxLength = (User_Strife_Id_Tag.length + 4);

//             console.log('length now ');
//             console.log(document.getElementById("add-friend-input-bar").maxLength);
//             setHashPresent(true)
//         }
//         else if (User_Strife_Id_Tag.includes('#') === true) {
//             console.log('inside number analyzer');
//             let left = e.currentTarget.value.split('#').shift();
//             let right = e.currentTarget.value.split('#').pop();
//             // let result = right.match('\d{0,4}');
//             let result = right.match(/^([^e+-]{0,4})/);
//             console.log(`left = ${left}`);
//             console.log(`right = ${right}`);
//             console.log(`result = ${result}`);


//             result === true ? setUser_Strife_Id_Tag(e.currentTarget.value) : setUser_Strife_Id_Tag(left+'#');

//         }
//         else if (!User_Strife_Id_Tag.includes('#')) {
//             setHashPresent(false);
//             document.getElementById("add-friend-input-bar").maxLength = 37;
//             setUser_Strife_Id_Tag(e.currentTarget.value);

//         }
//         else {
//             setUser_Strife_Id_Tag(e.currentTarget.value);
//         }


//     }


//     const submissionBlocker = () => {
//         if (document.getElementById("add-friend-input-bar").value === "" || document.getElementById("add-friend-input-bar").value === null) {
//             document.getElementById("add-friend-button").disabled = true;
//         }
//         else {
//             document.getElementById("add-friend-button").disabled = false;
//         }
//     }

//     const renderFriendRequestErrorModal = () => {

//         if (props.sessionErrors.length > 0) {
//             setTimeout(() => {
//                 props.removeSessionErrors();
//                 props.openModal('frf-error');
//                 return;
//             }, 1250)
//         }

//     }


//     let friendRequestErrors = props.sessionErrors.length > 0 ? (
//         <div className={"frf-ERROR"}>{renderFriendRequestErrors()}</div>
//     ) : ('');


//     let friendRequestSuccessful = friendRequestSuccess === true ? (
//         <div className={"frs-display"}>{renderFriendRequestSuccess()}</div>
//     ) : ('');

//     let friendRequestFailed = props.errors.length > 0 ? (
//         <div className={"frf-ERROR"}>{renderFriendRequestFailedErrors()}</div>
//     ) : ('');

//     let outLineClassTag = "";
//     if (props.sessionErrors.length > 0 || props.errors.length > 0) {
//         outLineClassTag = "frf-ERROR";
//     }
//     else if (friendRequestSuccessful === true) {
//         outLineClassTag = "fr-success";
//     }
//     else {
//         outLineClassTag = "";
//     }


//     return (
//         <div className="friendslist-column">
//             {renderFriendRequestErrorModal()}
//             <header className="add-friend-header-wrapper-1">
//                 <h2 className="add-friend-header-1">
//                     Add Friend
//                 </h2>
//                 <form autoComplete="off" onSubmit={handleSubmit}>
//                     {/* <div className="add-friend-subtitle">You can add a friend with their $TR!F3 Tag. It's cAsE sEnSitIvE!</div> */}
//                     <div className="add-friend-subtitle">You can add friends with their $TR!F3 username or $TR!F3 Tag.</div>
//                     <div className={`add-friend-input-search-wrapper ${outLineClassTag}`}>
//                         <div className="add-friend-input-search-inner-wrapper">
//                             <input
//                                 id="add-friend-input-bar" className="add-friend-input-bar" type="text"
//                                 onKeyUp={submissionBlocker}
//                                 // onChange={(e) => setUser_Strife_Id_Tag(e.currentTarget.value)}
//                                 onChange={(e) => handleInput(e)}

//                                 value={User_Strife_Id_Tag}
//                                 // placeholder={"Enter a Username#0000"}
//                                 placeholder={"You can add friends with their $TR!F3 username or $TR!F3 Tag."}
//                                 autoFocus
//                                 ref={inputRef}
//                                 autoComplete="off"
//                                 maxLength={37}
//                             />
//                         </div>

//                         {User_Strife_Id_Tag.length > 0 ?
//                             (
//                                 <div className="addfriend-input-hint" aria-hidden="true">
//                                     {`${generatePlaceHolder()}`}
//                                 </div>
//                             ) : ('')
//                         }


//                         <button type="submit" id="add-friend-button" className="add-friend-button" disabled>
//                             <div className="add-friend-button-text">Send Friend Request</div>
//                         </button>

//                     </div>
//                     {friendRequestErrors}
//                     {friendRequestFailed}
//                     {friendRequestSuccessful}

//                 </form>
//             </header>

//             <header className="add-friend-header-wrapper-2">
//                 <h2 className="add-friend-header-2">
//                     Other places to Make friends
//                 </h2>
//             </header>


//             <div className="add-friend-grid" >
//                 <Link className="unStyle" to={`/$/channels/guild-discovery/`}>
//                     <button type="button" className="add-friend-grid-button-wrapper"  >
//                         <img className="add-friend-grid-button-icon" alt="expserv" />
//                         <div className="add-friend-grid-button-text">Explore Discoverable Servers</div>
//                         <svg className="arrow-3B" fill="none" height="20" viewBox="0 0 20 20" width="20">
//                             <path clipRule="evenodd" d="m5.41667 4.2625 5.66573 5.7375-5.66573 5.7375 
//                                 1.74426 1.7625 7.42237-7.5-7.42237-7.5z" fill="currentColor" fillRule="evenodd">
//                             </path>
//                         </svg>
//                     </button>
//                 </Link>
//             </div>

//             <div className="empty-state-container-2">
//                 <div className="empty-friends-container">
//                     <div className="empty-friends-container-flex">
//                         <img className="add-friends-icon-2" alt="img" />
//                         <div className="add-friends-flex-text-wrapper">
//                             <div className="add-friends-flex-text">Wumpus is waiting on friends. You don't have to though!</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     )
// }


// export default TestPage6;







// import React from "react";
// import { Link } from 'react-router-dom';
// import { useState, useRef, useEffect } from "react";



// const TestPage6 = (props) => {

//     const inputHighLights = useRef(null);
//     const inputRef = useRef(null);
//     const [FRF_Modal, setFRF_Modal] = useState(false);
//     const [friendRequestSuccess, setFriendRequestSuccess] = useState(false);
//     const [User_Strife_Id_Tag, setUser_Strife_Id_Tag] = useState("");
//     const [userToAdd, setUserToAdd] = useState({});
//     const [placeHolderHash, setPlaceHolderHash] = useState('');
//     const [hashPresent, setHashPresent] = useState("false");
//     const [backSpaceHit, setBackSpaceHit] = useState("false");


//     useEffect(() => {

//         return function cleanup () {
//             if (props.errors.length > 0) {
//                 props.removeFriendshipErrors();
//             }
//             if (props.sessionErrors.length > 0) {
//                 props.removeSessionErrors();
//             }
//         }
//     }, [])




//     const renderFriendRequestErrors = () => {
//         if (props.sessionErrors.includes('User Does not exists with that STRIFE ID Tag !')) {
//             return "Hm, didn't work. Double check that the capitalization, spelling, any spaces, and numbers are correct.";
//             // return "We're more than numbers... we're people! Enter a username and tag. It should look something like: TotallyARealUsername#0000";
//             //  if only numbers added
//             // if no 4 digit tag say input name "We need 83y7r482r98's four digit tag so we know which one they are.""
//         }
//         else if (props.sessionErrors.includes('Please enter proper format username + # + STRIFE ID Tag.')) {
//             return "Please enter proper format username + # + $TR!F3 ID Tag."
//         }
//         else {
//             return "";
//         }
//     }

//     const renderFriendRequestFailedErrors = () => {
//         if (props.errors.includes('Friend has already been taken.')) {
//             return "You have sent a friend request or added this user already!";
//         }
//         else {
//             return "";
//         }
//     }


//     const renderFriendRequestSuccess = () => {
//         if (friendRequestSuccess === true) {
//             return "Friend Request Sent.";
//             // return "Success! Your friend request to username#4895 was sent.";

//         }
//         else {
//             return "";
//         }
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         let userInfo = User_Strife_Id_Tag;
//         let hashTagInfo = "";
//         let userNAME = ""


//         if (userInfo.includes('#')) {
//             hashTagInfo = userInfo.split('#').pop();
//             userNAME = userInfo.split('#').length >= 1 ? userInfo.split('#').shift() : "";
//             console.log(userInfo.split('#'));

//         }
//         else {
//             hashTagInfo = '-000';
//             userNAME = userInfo;
//         }

//         let userStrifeId = hashTagInfo.length === 4 ? hashTagInfo : '-000';
//         let userNameToSearch = userNAME.length >= 2 ? userNAME : '';
//         let newFriend;
//         console.log(`userStrifeId = ${userStrifeId}`);
//         console.log(`userNameToSearch = ${userNameToSearch}`);



//         props.fetchUserByUserNameOrStrifeID({ username: userNameToSearch, strife_id_tag: userStrifeId }).then((action) => {
//             newFriend = action.user;
//             setUserToAdd(newFriend);
//             console.table(newFriend)
//         }, (error) => {
//             console.log("ERRRRRRRORRR!");
//             console.log(error);
//             console.table(error);
//         })


//         // props.fetchUserByStrifeId(userStrifeId).then((action) => {
//         //     newFriend = action.user;
//         //     console.log('new friend is : ');

//         //     console.table(newFriend);

//         //     props.createFriendship({ friend_id: newFriend.id, user_id: props.currentUser.id }).then((action) => {
//         //         setFriendRequestSuccess(true);
//         //         //is successful reset input 
//         //         // setUser_Strife_Id_Tag('');
//         //         let new_friend_request = action.friendship;
//         //         setUserToAdd(new_friend_request);
//         //         console.log('userToAdd'); 
//         //         console.log(userToAdd); 
//         //         App.StrifeCore.perform('parse_add_friend_request', { new_friend_request });

//         //     });
//         //     console.log('userToAddOutsideProps'); 
//         //     console.log(userToAdd); 
//         // },(error)=>{
//         //     console.log("ERROR!!!!!!!!!!!!!!");
//         //     console.log(error);

//         // })

//         // props.fetchUserByStrifeId(userStrifeId).then((action)=>{},(error)=>{});
//         console.log(userToAdd);

//     }


//     const searchByName = () => {
//         let x = props.searchUsers(User_Strife_Id_Tag);
//         console.log(x);
//     }

//     const generatePlaceHolder = () => {
//         if (User_Strife_Id_Tag.includes('#') === true) {
//             let left = User_Strife_Id_Tag.split('#').shift();
//             let right = User_Strife_Id_Tag.split('#').pop();
//             let rightFinal = "";
//             if (right.length === 0) {
//                 rightFinal = "0000";
//             }
//             else if (right.length >= 4) {
//                 rightFinal = right;
//             }
//             else {
//                 rightFinal = right + '0'.repeat((4 - right.length));
//             }

//             let newHolder = left.concat('#' + rightFinal);
//             return newHolder;
//         }
//         else {
//             return User_Strife_Id_Tag;
//         }
//     }

//     const handleInput = (e) => {
//         e.preventDefault();

//         if(backSpaceHit === true){
//             setUser_Strife_Id_Tag(e.currentTarget.value);
//             setHashPresent(false);
//             setBackSpaceHit(false);

//         }

//         if (User_Strife_Id_Tag.at(-1) === '#' && hashPresent === false) {

//             console.log('length prior');
//             console.log(document.getElementById("add-friend-input-bar").maxLength)
//             // document.getElementById("add-friend-input-bar").maxLength = (37-(User_Strife_Id_Tag.length + 4));
//             document.getElementById("add-friend-input-bar").maxLength = (User_Strife_Id_Tag.length + 4);
//             console.log('length now ');
//             console.log(document.getElementById("add-friend-input-bar").maxLength);
//             setUser_Strife_Id_Tag(e.currentTarget.value);
//             setHashPresent(true)
//         }
//         else if (User_Strife_Id_Tag.includes('#') === true && backSpaceHit === true) {
//             console.log('inside number analyzer');
//             let left = e.currentTarget.value.split('#').shift();
//             // let left = e.currentTarget.value.slice(0, e.currentTarget.value.indexOf("#") + 1);
//             let right = e.currentTarget.value.split('#').pop();
//             const regexPattern = /^[0-9\b]+$/;
//             let result = regexPattern.test(right);
//             console.log(`left = ${left}`);
//             console.log(`right = ${right}`);
//             console.log(`result = ${result}`);

//             result === true ? setUser_Strife_Id_Tag(e.currentTarget.value) : setUser_Strife_Id_Tag(left + '#');
//             // result === true ? setUser_Strife_Id_Tag(e.currentTarget.value) : setUser_Strife_Id_Tag(left);


//         }
//         else if (!User_Strife_Id_Tag.includes('#')) {
//             setHashPresent(false);
//             document.getElementById("add-friend-input-bar").maxLength = 37;
//             setUser_Strife_Id_Tag(e.currentTarget.value);

//         }
//         else {
//             setUser_Strife_Id_Tag(e.currentTarget.value);
//         }


//     }


//     const submissionBlocker = () => {
//         if (document.getElementById("add-friend-input-bar").value === "" || document.getElementById("add-friend-input-bar").value === null) {
//             document.getElementById("add-friend-button").disabled = true;
//         }
//         else {
//             document.getElementById("add-friend-button").disabled = false;
//         }
//     }

//     const renderFriendRequestErrorModal = () => {

//         if (props.sessionErrors.length > 0) {
//             setTimeout(() => {
//                 props.removeSessionErrors();
//                 props.openModal('frf-error');
//                 return;
//             }, 1250)
//         }

//     }


//     let friendRequestErrors = props.sessionErrors.length > 0 ? (
//         <div className={"frf-ERROR"}>{renderFriendRequestErrors()}</div>
//     ) : ('');


//     let friendRequestSuccessful = friendRequestSuccess === true ? (
//         <div className={"frs-display"}>{renderFriendRequestSuccess()}</div>
//     ) : ('');

//     let friendRequestFailed = props.errors.length > 0 ? (
//         <div className={"frf-ERROR"}>{renderFriendRequestFailedErrors()}</div>
//     ) : ('');

//     let outLineClassTag = "";
//     if (props.sessionErrors.length > 0 || props.errors.length > 0) {
//         outLineClassTag = "frf-ERROR";
//     }
//     else if (friendRequestSuccessful === true) {
//         outLineClassTag = "fr-success";
//     }
//     else {
//         outLineClassTag = "";
//     }


//     return (
//         <div className="friendslist-column">
//             {renderFriendRequestErrorModal()}
//             <header className="add-friend-header-wrapper-1">
//                 <h2 className="add-friend-header-1">
//                     Add Friend
//                 </h2>
//                 <form autoComplete="off" onSubmit={handleSubmit}>
//                     {/* <div className="add-friend-subtitle">You can add a friend with their $TR!F3 Tag. It's cAsE sEnSitIvE!</div> */}
//                     <div className="add-friend-subtitle">You can add friends with their $TR!F3 username or $TR!F3 Tag.</div>
//                     <div className={`add-friend-input-search-wrapper ${outLineClassTag}`}>
//                         <div className="add-friend-input-search-inner-wrapper">
//                             <input
//                                 id="add-friend-input-bar" className="add-friend-input-bar" type="text"
//                                 onKeyUp={submissionBlocker}
//                                 onKeyDown={(e) => {
//                                     if (e.key === "Backspace" && User_Strife_Id_Tag.includes('#')) {
//                                         console.log("hi bacjkspace pressed")
//                                         // setUser_Strife_Id_Tag(e.currentTarget.value.replace('#',''));
//                                         // setUser_Strife_Id_Tag(e.currentTarget.value.slice(0, e.currentTarget.value.indexOf('#')));
//                                         // setHashPresent(false);
//                                         setBackSpaceHit(true);
//                                     }
//                                 }}
//                                 // onChange={(e) => setUser_Strife_Id_Tag(e.currentTarget.value)}
//                                 onChange={(e) => {
//                                     if (e.key !== "Backspace") {
//                                         handleInput(e)
//                                     }
//                                 }}

//                                 value={User_Strife_Id_Tag}
//                                 // placeholder={"Enter a Username#0000"}
//                                 placeholder={"You can add friends with their $TR!F3 username or $TR!F3 Tag."}
//                                 autoFocus
//                                 ref={inputRef}
//                                 autoComplete="off"
//                                 maxLength={37}
//                             />
//                         </div>

//                         {User_Strife_Id_Tag.length > 0 ?
//                             (
//                                 <div className="addfriend-input-hint" aria-hidden="true">
//                                     {`${generatePlaceHolder()}`}
//                                 </div>
//                             ) : ('')
//                         }


//                         <button type="submit" id="add-friend-button" className="add-friend-button" disabled>
//                             <div className="add-friend-button-text">Send Friend Request</div>
//                         </button>

//                     </div>
//                     {friendRequestErrors}
//                     {friendRequestFailed}
//                     {friendRequestSuccessful}

//                 </form>
//             </header>

//             <header className="add-friend-header-wrapper-2">
//                 <h2 className="add-friend-header-2">
//                     Other places to Make friends
//                 </h2>
//             </header>


//             <div className="add-friend-grid" >
//                 <Link className="unStyle" to={`/$/channels/guild-discovery/`}>
//                     <button type="button" className="add-friend-grid-button-wrapper"  >
//                         <img className="add-friend-grid-button-icon" alt="expserv" />
//                         <div className="add-friend-grid-button-text">Explore Discoverable Servers</div>
//                         <svg className="arrow-3B" fill="none" height="20" viewBox="0 0 20 20" width="20">
//                             <path clipRule="evenodd" d="m5.41667 4.2625 5.66573 5.7375-5.66573 5.7375 
//                                 1.74426 1.7625 7.42237-7.5-7.42237-7.5z" fill="currentColor" fillRule="evenodd">
//                             </path>
//                         </svg>
//                     </button>
//                 </Link>
//             </div>

//             <div className="empty-state-container-2">
//                 <div className="empty-friends-container">
//                     <div className="empty-friends-container-flex">
//                         <img className="add-friends-icon-2" alt="img" />
//                         <div className="add-friends-flex-text-wrapper">
//                             <div className="add-friends-flex-text">Wumpus is waiting on friends. You don't have to though!</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     )
// }


// export default TestPage6;








//this one is working able to update instantly
    // const handleInput = (e) => {
    //     e.preventDefault();

    //     // if (User_Strife_Id_Tag.length === 0) {
    //     //     setUser_Strife_Id_Tag(e.currentTarget.value);
    //     // }


    //     if (backSpaceHit === true) {
    //         console.log("backspace Hit")

    //         setUser_Strife_Id_Tag(e.currentTarget.value);
    //         setBackSpaceHit(false);
    //     }

    //     console.log(e.currentTarget.value.at(-1) === '#');

    //     if (e.currentTarget.value.at(-1) === '#' && hashPresent === false) {
    //         console.log("# detected in hash present false")
    //         let newLength = (e.currentTarget.value.length + 4);
    //         document.getElementById("add-friend-input-bar").maxLength = newLength <= 37 ? newLength : 37;
    //         setUser_Strife_Id_Tag(e.currentTarget.value);
    //         setHashPresent(true)
    //     }
    //     // else if (e.currentTarget.value.includes('#') === true && backSpaceHit === false ) {
    //     else if (User_Strife_Id_Tag.includes('#') === true && backSpaceHit === false) {

    //         console.log("# true regex p[arsing ")

    //         let left = e.currentTarget.value.split('#').shift();
    //         let right = e.currentTarget.value.split('#').pop();
    //         const regexPattern = /^[0-9\b]+$/;
    //         let result = regexPattern.test(right);
    //         result === true ? setUser_Strife_Id_Tag(e.currentTarget.value) : setUser_Strife_Id_Tag(left + '#');

    //     }
    //     else if (!e.currentTarget.value.includes('#')) {
    //         console.log("no # ")
    //         setHashPresent(false);
    //         document.getElementById("add-friend-input-bar").maxLength = 37;
    //         setUser_Strife_Id_Tag(e.currentTarget.value);
    //     }
    //     else {
    //         console.log("hellow");
    //         console.log(e.currentTarget.value);
    //     }

    // }


    //uisiong state but takes a extra key stroke after # input to change length
        // const handleInput = (e) => {
    //     e.preventDefault();


    //     if (e.currentTarget.value.length === 0) {
    //         document.getElementById("add-friend-input-bar").maxLength = 37;
    //     }

    //     if (backSpaceHit === true) {
    //         console.log("backspace Hit")

    //         setUser_Strife_Id_Tag(e.currentTarget.value);
    //         setBackSpaceHit(false);
    //     }

    //     if (User_Strife_Id_Tag.at(-1) === '#' && hashPresent === false) {
    //         console.log("# detected in hash present false")
    //         let newLength = (User_Strife_Id_Tag.length + 4);
    //         document.getElementById("add-friend-input-bar").maxLength = newLength <= 37 ? newLength : 37;
    //         setHashPresent(true)
    //     }
    //     else if (User_Strife_Id_Tag.includes('#') === true && backSpaceHit === false) {
    //         console.log("# true regex p[arsing ")

    //         let left = e.currentTarget.value.split('#').shift();
    //         let right = e.currentTarget.value.split('#').pop();
    //         const regexPattern = /^[0-9\b]+$/;
    //         let result = regexPattern.test(right);
    //         result === true ? setUser_Strife_Id_Tag(e.currentTarget.value) : setUser_Strife_Id_Tag(left + '#');

    //     }
    //     else if (!User_Strife_Id_Tag.includes('#')) {
    //         console.log("no # ")

    //         setHashPresent(false);
    //         document.getElementById("add-friend-input-bar").maxLength = 37;
    //         setUser_Strife_Id_Tag(e.currentTarget.value);
    //     }


    // }







// import React from "react";
// import { Link } from 'react-router-dom';
// import { useState, useRef, useEffect } from "react";



// const TestPage6 = (props) => {

//     const inputRef = useRef(null);
//     const [friendRequestSuccess, setFriendRequestSuccess] = useState(false);
//     const [User_Strife_Id_Tag, setUser_Strife_Id_Tag] = useState("");
//     const [hashPresent, setHashPresent] = useState(false);
//     const [backSpaceHit, setBackSpaceHit] = useState(false);
//     const [usersActualStrifeId, setUsersActualStrifeId] = useState("");
//     const [usersActualUserName, setUsersActualUserName] = useState("");
//     const [failState, setFailState] = useState(false);
//     const [savefriendShipError, setSaveFriendShipError] = useState("");
//     const [saveSessionError, setSaveSessionError] = useState("");




//     useEffect(() => {

//         return function cleanup () {
//             if (props.errors.length > 0) {
//                 props.removeFriendshipErrors();
//             }
//             if (props.sessionErrors.length > 0) {
//                 props.removeSessionErrors();
//             }
//         }
//     }, [])




//     useEffect(() => {

//         if (props.errors.length > 0) {
//             setSaveFriendShipError(renderFriendRequestFailedErrors())
//         }
//         if (props.sessionErrors.length > 0) {
//             setSaveSessionError(renderFriendRequestErrors());
//         }

//     }, [props.errors.length, props.sessionErrors.length]);



//     const renderFriendRequestErrors = () => {
//         if (props.sessionErrors.includes('User Does not exists with that STRIFE ID Tag !')) {
//             return "Hm, didn't work. Double check that the capitalization, spelling, any spaces, and numbers are correct.";
//             // return "We're more than numbers... we're people! Enter a username and tag. It should look something like: TotallyARealUsername#0000";
//             //  if only numbers added
//             // if no 4 digit tag say input name "We need 83y7r482r98's four digit tag so we know which one they are.""
//         }
//         else if (props.sessionErrors.includes('Please enter proper format username + # + STRIFE ID Tag.')) {
//             return "Please enter proper format username + # + $TR!F3 ID Tag."
//         }
//         else {
//             return "";
//         }
//     }

//     const renderFriendRequestFailedErrors = () => {
//         if (props.errors.includes('Friend has already been taken.')) {
//             return "You have sent a friend request or added this user already!";
//         }
//         else {
//             return "";
//         }
//     }


//     const renderFriendRequestSuccess = () => {
//         if (friendRequestSuccess === true) {
//             if (usersActualUserName.length > 0 && usersActualStrifeId.length > 0) {
//                 return `Success! Your friend request to ${usersActualUserName}#${usersActualStrifeId} was sent.`;
//             }
//             else {
//                 return "Friend Request Sent.";
//             }
//         }
//         else {
//             return "";
//         }
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         let userInfo = User_Strife_Id_Tag;
//         let hashTagInfo = "";
//         let userNAME = ""


//         if (userInfo.includes('#')) {
//             hashTagInfo = userInfo.split('#').pop();
//             userNAME = userInfo.split('#').length >= 1 ? userInfo.split('#').shift() : "";
//         }
//         else {
//             hashTagInfo = '-000';
//             userNAME = userInfo;
//         }

//         let userStrifeId = hashTagInfo.length === 4 ? hashTagInfo : '-000';
//         let userNameToSearch = userNAME.length >= 2 ? userNAME : '';
//         let newFriend;

//         // props.fetchUserByUserNameOrStrifeID({ username: userNameToSearch, strife_id_tag: userStrifeId }).then((action) => {
//         //     newFriend = action.user;
//         //     setUserToAdd(newFriend);
//         //     console.table(newFriend)
//         // }, (error) => {
//         //     console.log("ERRRRRRRORRR!");
//         //     console.log(error);
//         //     console.table(error);
//         // })


//         props.fetchUserByStrifeId(userStrifeId).then((action) => {
//             newFriend = action.user;
//             setUsersActualStrifeId(newFriend.strife_id_tag);
//             setUsersActualUserName(newFriend.username);


//             props.createFriendship({ friend_id: newFriend.id, user_id: props.currentUser.id }).then((action) => {
//                 let new_friend_request = action.friendship;
//                 setFriendRequestSuccess(true);
//                 setUser_Strife_Id_Tag("");
//                 App.StrifeCore.perform('parse_add_friend_request', { new_friend_request });

//             }, (error) => {
//                 setSaveFriendShipError(renderFriendRequestFailedErrors());
//                 setFailState(true);

//             });

//         }, (error) => {
//             setSaveSessionError(renderFriendRequestErrors());
//             props.openModal('frf-error');
//             setFailState(true);
//             setUsersActualStrifeId("");
//             setUsersActualUserName("");
//         })

//         // props.fetchUserByStrifeId(userStrifeId).then((action)=>{},(error)=>{});

//     }


//     const generatePlaceHolder = () => {
//         if (User_Strife_Id_Tag.includes('#') === true) {
//             let left = User_Strife_Id_Tag.split('#').shift();
//             let right = User_Strife_Id_Tag.split('#').pop();
//             let rightFinal = "";
//             if (right.length === 0) {
//                 rightFinal = "0000";
//             }
//             else if (right.length >= 4) {
//                 rightFinal = right;
//             }
//             else {
//                 rightFinal = right + '0'.repeat((4 - right.length));
//             }

//             let newHolder = left.concat('#' + rightFinal);
//             return newHolder;
//         }
//         else {
//             return User_Strife_Id_Tag;
//         }
//     }



//     const handleInput = (e) => {
//         e.preventDefault();
//         if (failState === true || friendRequestSuccess === true || saveSessionError.length > 0 || savefriendShipError.length > 0) {
//             resetErrorAndSuccessStates();
//         }

//         if (e.currentTarget.value.length === 0) {
//             document.getElementById("add-friend-input-bar").maxLength = 37;
//         }

//         if (backSpaceHit === true) {
//             setUser_Strife_Id_Tag(e.currentTarget.value);
//             setBackSpaceHit(false);
//         }

//         if (e.currentTarget.value.at(-1) === '#' && hashPresent === false) {
//             let newLength = (e.currentTarget.value.length + 4);
//             document.getElementById("add-friend-input-bar").maxLength = newLength <= 37 ? newLength : 37;
//             setUser_Strife_Id_Tag(e.currentTarget.value);
//             setHashPresent(true)
//         }
//         else if (User_Strife_Id_Tag.includes('#') === true && backSpaceHit === false) {
//             let left = e.currentTarget.value.split('#').shift();
//             let right = e.currentTarget.value.split('#').pop();
//             const regexPattern = /^[0-9\b]+$/;
//             let result = regexPattern.test(right);
//             result === true ? setUser_Strife_Id_Tag(e.currentTarget.value) : setUser_Strife_Id_Tag(left + '#');

//         }
//         else if (!e.currentTarget.value.includes('#')) {
//             setHashPresent(false);
//             document.getElementById("add-friend-input-bar").maxLength = 37;
//             setUser_Strife_Id_Tag(e.currentTarget.value);
//         }
//         else {
//             setUser_Strife_Id_Tag(e.currentTarget.value);
//         }


//     }


//     const resetErrorAndSuccessStates = () => {
//         if (props.errors.length > 0) {
//             props.removeFriendshipErrors();
//         }
//         if (props.sessionErrors.length > 0) {
//             props.removeSessionErrors();
//         }
//         if (failState === true) {
//             setFailState(false);
//         }
//         if (friendRequestSuccess === true) {
//             setFriendRequestSuccess(false);
//             setUsersActualStrifeId("");
//             setUsersActualUserName("");
//         }

//         if (saveSessionError.length > 0) {
//             setSaveSessionError("");
//         }
//         if (savefriendShipError.length > 0) {
//             setSaveFriendShipError("");
//         }

//     }


//     const submissionBlocker = () => {
//         if (document.getElementById("add-friend-input-bar").value === "" || document.getElementById("add-friend-input-bar").value === null) {
//             document.getElementById("add-friend-button").disabled = true;
//         }
//         else {
//             document.getElementById("add-friend-button").disabled = false;
//         }
//         if (failState === true || friendRequestSuccess === true || saveSessionError.length > 0 || savefriendShipError.length > 0) {
//             resetErrorAndSuccessStates();
//         }

//     }


//     let friendRequestSuccessful = friendRequestSuccess === true ? (
//         <div className={"frs-display"}>{renderFriendRequestSuccess()}</div>
//     ) : ('');

//     let friendRequestErrors = saveSessionError.length > 0 ? (
//         <div className={"frf-ERROR"}>{saveSessionError}</div>
//     ) : ('');


//     let friendRequestFailed = savefriendShipError.length > 0 ? (
//         <div className={"frf-ERROR"}>{savefriendShipError}</div>
//     ) : ('');

//     let outComeOutline = failState === true ? "frf-ERROR" : friendRequestSuccess === true ? "fr-success" : "";

//     return (
//         <div className="friendslist-column">
//             <header className="add-friend-header-wrapper-1">
//                 <h2 className="add-friend-header-1">
//                     Add Friend
//                 </h2>
//                 <form autoComplete="off" onSubmit={handleSubmit}>
//                     {/* <div className="add-friend-subtitle">You can add a friend with their $TR!F3 Tag. It's cAsE sEnSitIvE!</div> */}
//                     <div className="add-friend-subtitle">You can add friends with their $TR!F3 username or $TR!F3 Tag.</div>
//                     <div className={`add-friend-input-search-wrapper ${outComeOutline}`}>
//                         <div className="add-friend-input-search-inner-wrapper">
//                             <input
//                                 id="add-friend-input-bar" className="add-friend-input-bar" type="text"
//                                 onKeyUp={submissionBlocker}
//                                 onCut={(e) => {
//                                     if (User_Strife_Id_Tag.includes('#')) {
//                                         setBackSpaceHit(true);
//                                     }
//                                 }}
//                                 onPaste={(e) => { setUser_Strife_Id_Tag(e.currentTarget.value) }}
//                                 onKeyDown={(e) => {
//                                     if (e.key === "Backspace" && User_Strife_Id_Tag.includes('#')) {
//                                         setBackSpaceHit(true);
//                                     }
//                                 }}
//                                 onChange={(e) => {
//                                     if (e.key !== "Backspace") {
//                                         handleInput(e)
//                                     }
//                                 }}

//                                 value={User_Strife_Id_Tag}
//                                 placeholder={"You can add friends with their $TR!F3 username or $TR!F3 Tag."}
//                                 autoFocus
//                                 ref={inputRef}
//                                 autoComplete="off"
//                                 maxLength={37}
//                             />
//                         </div>

//                         {User_Strife_Id_Tag.length > 0 ?
//                             (
//                                 <div className="addfriend-input-hint" aria-hidden="true">
//                                     {`${generatePlaceHolder()}`}
//                                 </div>
//                             ) : ('')
//                         }


//                         <button type="submit" id="add-friend-button" className="add-friend-button" disabled>
//                             <div className="add-friend-button-text">Send Friend Request</div>
//                         </button>

//                     </div>
//                     {friendRequestErrors}
//                     {friendRequestFailed}
//                     {friendRequestSuccessful}

//                 </form>
//             </header>

//             <header className="add-friend-header-wrapper-2">
//                 <h2 className="add-friend-header-2">
//                     Other places to Make friends
//                 </h2>
//             </header>


//             <div className="add-friend-grid" >
//                 <Link className="unStyle" to={`/$/channels/guild-discovery/`}>
//                     <button type="button" className="add-friend-grid-button-wrapper"  >
//                         <img className="add-friend-grid-button-icon" alt="expserv" />
//                         <div className="add-friend-grid-button-text">Explore Discoverable Servers</div>
//                         <svg className="arrow-3B" fill="none" height="20" viewBox="0 0 20 20" width="20">
//                             <path clipRule="evenodd" d="m5.41667 4.2625 5.66573 5.7375-5.66573 5.7375 
//                                 1.74426 1.7625 7.42237-7.5-7.42237-7.5z" fill="currentColor" fillRule="evenodd">
//                             </path>
//                         </svg>
//                     </button>
//                 </Link>
//             </div>

//             <div className="empty-state-container-2">
//                 <div className="empty-friends-container">
//                     <div className="empty-friends-container-flex">
//                         <img className="add-friends-icon-2" alt="img" />
//                         <div className="add-friends-flex-text-wrapper">
//                             <div className="add-friends-flex-text">Wumpus is waiting on friends. You don't have to though!</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     )
// }


// export default TestPage6;