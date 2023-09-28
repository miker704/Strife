import React from "react";
import DMMessagesContainer from "../dms_messages/dm_messages_container";
import DmChatFirstMessageContainer from "../dm_first_message/dm_first_message_container";
import { useEffect, useState, useRef } from "react";
import { MessageSkeleton } from "../../custom_input_components/message_Skeleton/message_skeleton";

const DmMessageIndex = (props) => {

    useEffect(() => {
        setDmMessages(props.dmChannelMessages);
        // setDmMessages(props.DmMessages);

        return () => {
        };
    }, [props.dmChannelMessages]);

    const [loading, setLoading] = useState(true);
    const [DmMessages, setDmMessages] = useState([]);
    const dmServerMembers = props.dmMembers;
    const scrollRef = useRef();
    const oLListRef = useRef(null);
    const scrollDown = () => { scrollRef.current.focus(); scrollRef.current.scrollIntoView({ behavior: "instant", block: "end" }); }
    let dmMessageOLLIMapping = DmMessages.map((dmMessage, dmMsgIdx) => {
        let member = dmServerMembers.find(member => member.id === dmMessage.sender_id)
        if (member === undefined) { member = Object.values(props.strifeBot)[0]; } {
            return (
                <DMMessagesContainer key={dmMessage.id} dmServerId={props.dmServerId} dmMsgIdx={dmMsgIdx}
                    dmMessageAuthor={member} dmMessage={dmMessage} strifeBot={props.strifeBot}
                    dmMembers={props.dmMembers} msgUpc={props.msgUpc}
                    handleOpenSUOMM={props.handleOpenSUOMM}
                    setRenderDeleteDM={props.setRenderDeleteDM}
                    setMsgCtrlTTHover={props.setMsgCtrlTTHover} DmMessages={DmMessages} setMsgCtrlSRTTHover={props.setMsgCtrlSRTTHover}
                />
            )
        }
    })

    // FOR USING PROPS AND NOT STATE ALLOWS PROPER SCROLL TO BOTTOM RENDERING AND ALLOWS FASTER RENDERING
    // let dmMessageOLLIMapping = props.DmMessages.map((dmMessage, dmMsgIdx) => {
    //     let member = dmServerMembers.find(member => member.id === dmMessage.sender_id)
    //     if (member === undefined) { member = Object.values(props.strifeBot)[0]; } {
    //         return (
    //             <DMMessagesContainer key={dmMessage.id} dmServerId={props.dmServerId} dmMsgIdx={dmMsgIdx}
    //                 dmMessageAuthor={member} dmMessage={dmMessage} strifeBot={props.strifeBot}
    //                 dmMembers={props.dmMembers} msgUpc={props.msgUpc}
    //                 handleOpenSUOMM={props.handleOpenSUOMM}
    //                 setRenderDeleteDM={props.setRenderDeleteDM}
    //                 setMsgCtrlTTHover={props.setMsgCtrlTTHover} DmMessages={DmMessages} setMsgCtrlSRTTHover={props.setMsgCtrlSRTTHover}
    //             />
    //         )
    //     }
    // })

    return (
        <>
            <DmChatFirstMessageContainer renderBlockedUserSnackBarContainer={props.renderBlockedUserSnackBarContainer} dmServer={props.dmServer} dmServerMembers={props.dmServerMembers} />
            {dmMessageOLLIMapping}
        </>
    )

}

export default DmMessageIndex;