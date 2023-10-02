import React from 'react';
// import ReactTooltip from "react-tooltip";
import { useState, useRef, useEffect } from "react";
// import { returnDefaultUserPFP } from '../../utils/userPFP_api_util';
import { returnUserBadgeFillColor } from '../../utils/user_status_badge_color_api_util';
import { returnUserOnlineActivityStatusBadgeMaskIMG } from '../../utils/user_online_activity_status_badge_api_util';
import { PenEditIcon, StrifeBotTagIcon, StrifeNitroBadgeIcon, VerifiedCheckIcon, VerifiedStarIcon } from '../front_end_svgs/Strife_svgs';
import { Skeleton } from '@mui/material';
import { styled } from "@mui/material/styles";
import { MessageSkeleton, MessageSkeletonList } from '../custom_input_components/message_Skeleton/message_skeleton';
import DefaultPFPSVG3 from "../../../app/assets/images/defaultPFPSVG3.svg";


const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
    backgroundColor: `var(--text-normal)`, opacity: `0.08`, borderRadius: `0.5rem`,
    flex: `0 0 auto`, height: `1rem`, lineHeight: `1.375rem`, verticalAlign: `middle`,
    marginTop: `0.1875rem`,
    '&.MuiSkeleton-root+&.MuiSkeleton-root': {
        marginLeft: `0.25rem`,
    },
}));


const GuildCardGridSkeletonList = ({ listsToRender }) => {
    return (
        <>
            {
                Array(listsToRender)
                    .fill(1)
                    .map((card, index) => (

                        <div className='loaded-guilds' key={`guild-grid-card-item-${card}-${index}`}>
                            <div className='sr-guild-card-container'>
                                <StyledSkeleton
                                    sx={{ opacity: '0.03', width: '720px', height: '135px', marginTop: `0.125rem`, borderRadius: `8px`, backgroundColor: `var(--text-normal)` }}
                                    variant="rectangular"
                                    animation={'wave'}
                                />
                            </div>
                        </div>
                    ))
            }
        </>
    );
};



const TestPage12 = (props) => {

    return (
        <li id={`dmMessage-id-${1}`} className={`chat-message-item`} tabIndex={-1}>
            <div className="message-wrapper" tabIndex={-1}>
                <div className="message-wrapper-contents">
                    {
                        props.currentUser.photo === undefined ? (
                            <img className={`chat-member-avatar-img color-${props.currentUser.color_tag}`} src={DefaultPFPSVG3} alt=" "
                            />
                        ) : (
                            <img className="chat-member-avatar-img" src={props.currentUser.photo} alt=" "
                            />
                        )
                    }

                    <h3 className="chat-member-username-header">
                        <span className="chat-member-username-wrap">
                            <span role="button" tabIndex={0} className="chat-member-username"
                            >
                                {props.currentUser.username}
                            </span>
                        </span>
                        <span className="chat-message-timestamp">
                            <time >
                                <i className="chat-message-timestamp-i"> — </i>
                                some time here
                            </time>
                        </span>
                    </h3>
                    <div className="chat-message">
                        <a role='button' tabIndex={0} className='i2smsg-ism-msg-silink' rel="noreferrer noopener" target='_blank' title='ism-msg-silink' href='ism-msg-silink'>
                            <span>mooo mooo mooo moo mo o o o o o o</span>
                        </a>
                    </div>
                </div>
                <div className="message-accessories">
                    <div className="message-accessories-inner-wrapper">
                        <div className="i2smsg-server-invite-splash-container">
                            <img className="i2smsg-server-invite-splash" src={props.currentUser.banner} alt=" " />
                        </div>
                        <h3 className="i2smsg-im-h5">You sent an invite to join a server</h3>
                        <div className="i2smsg-im-content">
                            <div className="i2smsg-im-headerline">
                                <div className="i2smsg-server-avatar-icon" style={{ backgroundImage: `${props.currentUser.photo === undefined ? `none` : `url(${props.currentUser.photo})`}`, backgroundColor: `${props.currentUser.photo === undefined ? `` : `rgb(21, 20, 20)`}` }}></div>
                                <div className='i2smsg-server-info-container'>
                                    <div role='button' tabIndex={0}>
                                        <h3 className="i2smsg-server-info-wrapper">
                                            <span className="i2smsg-server-info-title">
                                                <div className="i2smsg-server-guild-name-wrapper">
                                                    <span className="i2smsg-server-guild-name">Shot From The Point</span>
                                                </div>
                                                <span className="i2smsg-server-info-badge">
                                                    <div className="i2smsg-server-guild-badge-container">
                                                        <div role='button' tabIndex={0}>
                                                            <div className={`i2smsg-server-flower-star-container fill-color-${props.currentUser.color_tag}`}>
                                                                <VerifiedStarIcon className="guild-card-star-icon" />
                                                                <div className="guild-card-child-container">
                                                                    <VerifiedCheckIcon className="guild-card-star-icon-2" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                            </span>
                                        </h3>
                                    </div>
                                    <strong className="i2smsg-server-members-info">
                                        <div className="i2smsg-server-members-status-counts">
                                            <div className="i2smsg-server-members-status-wrapper">
                                                <i className='i2smsg-sms-online-status'></i>
                                                <span className='i2smsg-server-members-status-member-count'>563 Online</span>
                                            </div>
                                            <div className="i2smsg-server-members-status-wrapper">
                                                <i className='i2smsg-sms-offline-status'></i>
                                                <span className='i2smsg-server-members-status-member-count'>2,971 Members</span>
                                            </div>
                                        </div>
                                    </strong>
                                </div>
                            </div>
                            <button className="i2smsg-im-join-button" type="button">
                                <div className="look-filled-button-contents global-button-contents">Join</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )


    
}


export default TestPage12;