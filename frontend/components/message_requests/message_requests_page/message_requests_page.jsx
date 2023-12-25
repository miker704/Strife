import React from "react";
import { useEffect, useState, useRef } from "react";
import DMNavBarContainer from "../../dm_servers/dm_nav_bar/dm_nav_bar_container";
import MessageRequestsHeaderNavBarContainer from "../message_requests_header_nav_bar/message_requests_header_nav_bar_container";
import SpamMessageRequestsTabContainer from "../spam_message_requests_tab/spam_message_requests_tab_container";
import MessageRequestsTabContainer from "../message_requests_tab/message_requests_tab_container";

const MessageRequestsPage = (props) => {

    useEffect(() => {
        props.reSyncCurrentUser(props.currentUser.id);
    }, []);

    const [tabType, setTabType] = useState({
        requests: true,
        spam: false,
    });

    const resetForm = (field) => {
        setTabType(previousState => {
            return { ...previousState, [field]: false };
        })
    }

    const openForm = (field) => {
        setTabType(previousState => {
            return { ...previousState, [field]: true };
        })
    }

    const handleClick = (formType) => {
        let formtypes = [
            "requests",
            "spam",
        ];
        for (let i of formtypes) {
            resetForm(i);
        }
        openForm(formType);
    }
    const renderSpamMessagesRequestsTab = () => {
        if (tabType.spam === true) {
            return (
                <SpamMessageRequestsTabContainer />
            )
        }
    }
    const renderMessagesRequestsTab = () => {
        if (tabType.requests === true) {
            return (
                <MessageRequestsTabContainer />
            )
        }
    }


    return (

        <div className="server-main-base">
            <div className="server-content">
                <DMNavBarContainer />
                <div className="msg-requests-main-page-container">
                    <MessageRequestsHeaderNavBarContainer tabType={tabType} handleClick={handleClick} />
                    {renderSpamMessagesRequestsTab()}
                    {renderMessagesRequestsTab()}
                </div>
            </div>
        </div>
    )

}
export default MessageRequestsPage;