import React from "react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { PenEditIcon } from "../../front_end_svgs/Strife_svgs";
import { appPullerPullAnimation, appPullerPullAndHoldAnimation } from "../../../utils/appPullerAnimation_api_util";

const WelcomeTextChannelMessageFirstMessage = (props) => {

    useEffect(() => {
        setChannel(props.currentChannel);
        setServer(props.server);
    }, [props.currentChannel?.channel_name]);
    const params = useParams();
    const [channel, setChannel] = React.useState({});
    const [server, setServer] = React.useState({});


    if (channel?.channel_type === 1) {
        return (
            <div className="chat-room-first-message-container">
                <div className="welcomeTextChannelMessage-icon"></div>
                <h3 className="chat-room-header-first-msg">Welcome to #{`${channel?.channel_name}`}!</h3>
                <div className="chat-room-header-first-msg-inner-content">This is the start of the #{`${channel?.channel_name}`} channel.</div>
                {
                    props.currentUser.id === server?.server_owner_id ? (
                        <div className="chat-room-text-channel-button-container">
                            <button type="button" className="chat-room-text-channel-edit-button-container"
                                onClick={() => {
                                    props.openModalWithProps({
                                        ChannelId: channel?.id,
                                        params: params,
                                        selectedChannel: channel,
                                        channel_belongs_to_server_id: channel?.server_id,
                                    })
                                    // appPullerPullAnimation();
                                    appPullerPullAndHoldAnimation();
                                    props.openModal('ChannelSettings')

                                }}
                            >
                                <div className="global-button-contents">
                                    <div className="chat-room-text-channel-edit-button-icon-container ">
                                        <div className="chat-room-text-channel-edit-button-icon">
                                            <PenEditIcon width={16} height={16} />
                                        </div>
                                        <div className="chat-room-text-channel-edit-button-inner-text">
                                            Edit Channel
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    ) : (null)
                }
            </div>
        )
    }
    else {
        return null;
    }

}
export default WelcomeTextChannelMessageFirstMessage;