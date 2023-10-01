import React from "react";
import { useState, useRef, useEffect } from "react";
import ServerMessagesContainer from "../server_messages/server_messages_container";
import WelcomeTextChannelMessageFirstMessageContainer from "../../channels/welcome_text_channel_first_message/welcome_text_channel_first_message_container";
import MessageSkeleton from "../../custom_input_components/message_Skeleton/message_skeleton";
import { Tooltip } from "react-tooltip";

const ServerMessagesIndex = (props) => {

    useEffect(() => {

        setMessages(props.channelMessages);
        props.scrollToBottomOfChat("instant");
        return () => {
        };
    }, [props.channelMessages]);

    const scrollRef = useRef();
    const [messages, setMessages] = useState([]);
    const serverMembers = props.serverMembers;
    //using a differnet approach than in dmservers as server state is not as sensitive and to try to increase 
    //performance and reduce lag and  excessive memory allocation for unneed resources 
    let messageOLLIMapping = messages.map((message, msgIdx) => {
        //attain member and their props directly from user/server members state and not from the  author info 
        //attached to the message itself  in order to reduce slow downs
        //if in order to stop corruption since the find funct returns undefined if something is not found  check to see if that id === 1
        //  which indicates a bot message set that message id to the bot 
        let member = serverMembers.find(member => member.id === message.author_id);
        if (member === undefined) {
            member = Object.values(props.strifeBot)[0];
        }
        return (
            <ServerMessagesContainer
                key={message.id}
                serverId={props.match.params.serverId}
                strifeBot={props.strifeBot}
                message={message}
                messageAuthor={member}
                serverMembers={props.serverMembers}
                channelId={props.match.params.channelId}
                server={props.server}
                channel={props.channel}
                setRenderDeleteChannelMessage={props.setRenderDeleteChannelMessage}
                handleOpenSUOMM={props.handleOpenSUOMM}
                msgUpc={props.msgUpc}
                msgIdx={msgIdx}
                setMsgCtrlTTHover={props.setMsgCtrlTTHover}
                setMsgCtrlSRTTHover={props.setMsgCtrlSRTTHover}
                channelMessages={messages}
            />
        )
    })



    return (
        <ol className="chat-scroller-inner">
            <WelcomeTextChannelMessageFirstMessageContainer currentChannel={props.channel} server={props.server} />
            {messageOLLIMapping}
            <div className="ol-scroller-spacer" ref={el => scrollRef.current = el} />
        </ol>

    )

}

export default ServerMessagesIndex;