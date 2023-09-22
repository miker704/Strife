import React from 'react';
import { useRef, useEffect, useState } from "react";
import { fetchMutualFriends } from '../../../../utils/session_api_util';
import { returnUserBadgeFillColor } from '../../../../utils/user_status_badge_color_api_util';
import { returnUserOnlineActivityStatusBadgeMaskIMG } from '../../../../utils/user_online_activity_status_badge_api_util';


const MegaUpcTab3 = (props) => {

    const [mutualFriends, setMutualFriends] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetchMutualFriends({ userId: props.currentUser.id, other_user_id: props.member.id }).then((result) => {
            setMutualFriends(Object.values(result));
            setIsLoaded(true);
        }, (error) => {
            setMutualFriends([]);
            setIsLoaded(true);
        })
    }, [])


    if (isLoaded === true) {
        return (
            <div className='megaUpc-list-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>

                {
                    mutualFriends.length === 0 ? (
                        <div className='megaUpc-empty-no-mutal-friends-container'>
                            <div className='megaUpc-empty-no-mutal-friends-icon'></div>
                            <div className='megaUpc-empty-no-mutal-friends-text'>No friends in common</div>
                        </div>

                    ) : (
                        mutualFriends.map((friend, friendIdx) => {
                            return (
                                <div className="megaUpc-list-item" key={friend.id}
                                    onClick={(e) => {
                                        $('.megaUpc-focus-lock').addClass("stop-animations");
                                        setTimeout(() => {
                                            props.handleClick("userInfo");
                                            props.fetchUser(friend.id);
                                            props.setMemberData(friend);
                                            props.setMemberStatus(friend);
                                            $('.megaUpc-focus-lock').removeClass("stop-animations");
                                        }, 300);
                                    }}>
                                    <div className='megaUpc-friend-avatar-wrapper'>
                                        <svg width="49" height="49" viewBox="0 0 49 49" className="upc-avatar-svg-mask" aria-hidden="true">
                                            <foreignObject x="0" y="0" width="40" height="40" mask="url(#svg-mask-avatar-status-round-40)">
                                                <div className="upc-avatar-stack">
                                                    {
                                                        friend.photo === undefined ? (
                                                            <img className={`upc-avatar-pfp icon-colors-${friend.color_tag}`} alt=" " aria-hidden="true" />
                                                        ) : (
                                                            <img className="upc-avatar-pfp" src={friend.photo} alt=" " aria-hidden="true" />
                                                        )
                                                    }
                                                </div>
                                            </foreignObject>
                                            <rect width="12" height="12" x="28" y="28"
                                                fill={returnUserBadgeFillColor(friend.online)}
                                                mask={returnUserOnlineActivityStatusBadgeMaskIMG(friend.online)}
                                                className="upc-avatar-pointer-events">
                                            </rect>
                                        </svg>
                                    </div>

                                    <div className='megaUpc-list-item-name-text megaUpc-friend-userInfo'>
                                        <span className='megaUpc-friend-username'>{friend.username}</span>
                                        <span className='megaUpc-friend-discriminator'>#{friend.strife_id_tag}</span>
                                    </div>
                                </div>
                            )
                        })
                    )
                }
                <div className='megaUpc-mutal-friends-bottom-sep'></div>
            </div>
        )
    }
    else {

        return (
            <div className='megaUpc-list-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                <div className="i2sm-main-layer">
                    <div className="mega-spin-cubes-focus-lock">
                        <span className={`spinning-cubes`}>
                            <span className="inner-cubes moving-cubes">
                                <span className="inner-cube"></span>
                                <span className="inner-cube"></span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        )

    }




}
export default MegaUpcTab3;