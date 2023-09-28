import React from "react";
import { useEffect, useRef, useState } from "react";
import { fetchUser } from "../../../utils/session_api_util";

const BlockedUserSnackBar = (props) => {
    useEffect(() => {
        if (props.dmServer?.one_to_one_dm) {
            props.fetchUser(props.member?.id).then((action) => {
                const newfriend = action.user
                setMemberData(newfriend);
            })
        }
        return function cleanUp () {
            if (props.errors.length > 0) {
                props.removeSessionErrors();
            }
            if (props.dmServerErrors.length > 0) {
                props.removeDmServerErrors();
            }
            if (props.friendshipErrors.length > 0) {
                props.removeFriendshipErrors();
            }
        };
    }, [props.dmServer?.id]);

    useEffect(() => {
        let friendDataReSync = props.users.find((user) => user.id === member.id);
        if (friendDataReSync) {
            setMemberData(friendDataReSync);
        }

    }, [props.users])

    const [member, setMemberData] = useState({});

    const handleUnblock = (e) => {
        e.preventDefault();
        e.stopPropagation();
        fetchUser(member.id)
            .then((result) => {
                if (result.friend_request_status === -1) {
                    props.unBlockUser({ friend_id: member.id, user_id: props.currentUser.id }).then((action) => {
                        let user = action.friendship;
                        App.StrifeCore.perform('parse_unblock_request', { user_id: props.currentUser.id, friend_id: member.id });
                        if (user.friend_request_status >= 0) {
                            props.setUserBlocked(false);
                        }
                    });
                }
            }, (error) => {
                console.info(`%c[Error Occured]: %c[User Could Not Be UnBlocked ... Try Again Later]`, "color:#00FD61;", "color:#8442f4;");
            })
        return;
    }
    const handleBlockUser = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let validBlockStatuses = [-2, 0];
        fetchUser(member.id)
            .then((result) => {
                if (validBlockStatuses.includes(result.friend_request_status) === true) {
                    props.blockUser({ user_id: props.currentUser.id, friend_id: member.id }).then(() => {
                        App.StrifeCore.perform('parse_block_request', { user_id: props.currentUser.id, friend_id: member.id });
                    }, (error) => {
                        console.info(`%c[Error Occured]: %c[User Could Not Be Blocked ... Try Again Later]`, "color:#00FD61;", "color:#8442f4;");
                    });
                }
            }, (error) => {
                console.info(`%c[Error Occured]: %c[User Data Could not be Fetched Proceeded Actions Failed ... Try Again Later]`, "color:#00FD61;", "color:#8442f4;");
            });
        return;
    }
    const handleBlockingOfUser = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let validBlockStatuses = [-2];
        let valid_ids = [-1];
        fetchUser(member.id).then((result) => {
            if (valid_ids.includes(result.friend_request_status) === true) {
                handleUnblock(e);
            }
            else if (validBlockStatuses.includes(result.friend_request_status) === true) {
                handleBlockUser(e);
            }
        }, (error) => {
            console.info(`%c[Error Occured]: %c[User Data Could not be Fetched Proceed Actions Failed ... Try Again Later]`, "color:#00FD61;", "color:#8442f4;");
        });
        return;
    }


    let sButton = member.friend_request_status === -1 ? (
        <button type="submit" className="blocked-user-snack-bar-unblock-button">
            <div className="look-filled-button-contents global-button-contents">
                Unblock
            </div>
        </button>
    ) : member.friend_request_status === -2 ? (
        <button type="submit" className="blocked-user-snack-bar-unblock-button">
            <div className="look-filled-button-contents global-button-contents">
                Block
            </div>
        </button>
    ) : (
        <button type="button" className="blocked-user-snack-bar-unblock-button">
            <span className='blank-blob' style={{ width: `2.125rem`, opacity: `0.08` }}></span>
        </button>
    )


    let sbHeader = member.friend_request_status === -1 ? (
        <h3 className="blocked-user-snack-bar-text">You cannot send messages to a user you have blocked.</h3>
    ) : member.friend_request_status === -2 ? (
        <h3 className="blocked-user-snack-bar-text">You cannot send messages to this user.</h3>
    ) : (
        <h3 className="blocked-user-snack-bar-text blank-blob" style={{ width: `8.4375rem`, opacity: `0.08` }}></h3>
    )

    return (
        <form className="chat-input-form" onSubmit={handleBlockingOfUser}>
            <div className="blocked-user-snack-bar">
                <div className="blocked-user-snack-bar-content">
                    <div className="blocked-user-snack-bar-text-content">
                        {sbHeader}
                    </div>
                </div>
                <div className="blocked-user-snack-bar-button-container">
                    {sButton}
                </div>
            </div>
        </form>
    )
}


export default BlockedUserSnackBar;

