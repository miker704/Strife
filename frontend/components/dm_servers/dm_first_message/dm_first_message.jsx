import React from "react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import GroupChatFirstMessageContainer from "../group_chat_first_message/group_chat_first_message_container";
import O2ODMChatFirstMessageContainer from "../o2o_dm_chat_first_message/o2o_dm_chat_first_message_container";

const DmChatFirstMessage = (props) => {
    useEffect(() => {
        setDmServer(props.dmServer);
    }, [props.dmServer?.id]);

    const params = useParams();
    const [dmServer, setDmServer] = React.useState({});

    if (props.dmServer?.one_to_one_dm) {
        return (
            <O2ODMChatFirstMessageContainer renderBlockedUserSnackBarContainer={props.renderBlockedUserSnackBarContainer}
                dmServer={props.dmServer} dmServerMembers={props.dmServerMembers} member={props.dmServer?.other_o2o_member}
                memberId={props.dmServer?.other_o2o_member?.id} />
            // <O2ODMChatFirstMessageContainer />

        )
    }
    else if (props.dmServer?.group_chat) {
        return (
            <GroupChatFirstMessageContainer dmServer={props.dmServer} dmServerMembers={props.dmServerMembers} />
        )
    }
    else {
        return null;
    }
}

export default DmChatFirstMessage;