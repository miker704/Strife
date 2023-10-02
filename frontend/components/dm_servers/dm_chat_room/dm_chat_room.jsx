import React from "react";
import { createConsumer } from "@rails/actioncable"
import { ChatAddFileIcon, ChatGIFIcon, ChatPresentIcon, ChatStickerIcon, SmileyFaceIcon } from "../../front_end_svgs/Strife_svgs";
import { Tooltip } from "react-tooltip";
import BlockedUserSnackBarContainer from "../blocked_user_snack_bar/blocked_user_snack_bar_container";
import DMMessagesContainer from "../dms_messages/dm_messages_container";
import DmChatFirstMessageContainer from "../dm_first_message/dm_first_message_container";
import LoadingDmChatRoom from "../loading_dm_chat_room/loading_dm_chat_room";

class DmChatRoom extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            newDmMessage: this.props.dmMessage,
            DmMessages: this.props.DmMessages,
            dmMessagesIds: this.props.dmMessagesIds,
            value: '',
            placeholderText: '',
            renderSkeleton: true,
            renderBlockedUserSnackBar: this.props.userBlocked,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.subscription = "";
        this.subscribe = this.subscribe.bind(this);
        this.unsubscribe = this.unsubscribe.bind(this);
        this.scrollToBottomOfChat = this.scrollToBottomOfChat.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.chatInputRef = React.createRef();
        this.chatScrollerRef = React.createRef();
        this.oLLSpacerRef = React.createRef();
        this.renderPlaceHolder = this.renderPlaceHolder.bind(this);
        this.renderBlockedUserSnackBarContainer = this.renderBlockedUserSnackBarContainer.bind(this);
    }
    //mount correct dmServer and start subscription listening 
    componentDidMount () {
        this.subscribe();
        this.props.reSyncCurrentUser(this.props.currentUserId).then((action) => {
            let currUser = action.currentUser;
            if (!currUser.dmServersJoined.includes(parseInt(this.props.dmServerId))) {
                this.props.removeDmServer(this.props.dmServerId);
                // this.props.history.push('/$TR!F3-INTRUSION-PREVENTION/');
                return null;
            }
            else {

                this.props.fetchDmServer(this.props.dmServerId)
                    .then(() => {
                        this.setState({ renderSkeleton: false });
                        // this.scrollToBottomOfChat("smooth");
                    });
                this.renderPlaceHolder();
            }
        })
    }

    //remove listening of subscription 
    componentWillUnmount () {
        this.subscription?.unsubscribe();
    }


    scrollToBottomOfChat = (speed) => {
        if (this.oLLSpacerRef?.current) {
            this.oLLSpacerRef?.current.focus();
            if (this.chatScrollerRef?.current) {
                this.chatScrollerRef.current.scrollTop = this.chatScrollerRef.current.scrollHeight;
            }
            this.oLLSpacerRef?.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
            this.oLLSpacerRef?.current.scrollIntoView({ behavior: speed, block: 'end' });

        }
    }


    unsubscribe () {
        this.subscription.unsubscribe();
    }

    subscribe () {

        //plug the cable
        const cable = createConsumer('ws://localhost:3000/cable'); // /cable mounts to local host that rails server is running on 
        // const cable = createConsumer('wss://strife-v1.herokuapp.com/cable'); // /cable mounts to local host that rails server is running on 
        // const cable = createConsumer('wss://strife.onrender.com/cable');
        this.subscription = cable.subscriptions.create(
            { channel: 'DmChannel', id: this.props.dmServerId },
            {
                //return a head code to invoke a resync and allow live updates for other dm_server_components without having to 
                //manually add actioncable on them on the front end side this now allows the chat container to control nearly everything
                // attached to dm_server for a full resync
                received: ({ dm_message, head, path, type }) => {
                    switch (type) {
                        case "RECEIVE_DM_MESSAGE":
                            this.props.receiveDmMessage(dm_message);
                            break;
                        case "UPDATE_DM_MESSAGE":
                            this.props.receiveDmMessage(dm_message);
                            break;
                        case "REMOVE_DM_MESSAGE":
                            this.props.removeDmMessage(dm_message.id);
                            break;
                        case "MEMBER_UPDATED":
                            console.info(`%c [$TR!FE DM_SERVER_CHAT_ROOM M0N!T0R]: [DMS_MEMBER_UPDATED]`, "color:#05dc28");
                            this.props.fetchDmServer(this.props.dmServerId);
                            break;
                        case "NEW_DMS_MEMBER":
                            console.info(`%c [$TR!FE DM_SERVER_CHAT_ROOM M0N!T0R]: [NEW_DMS_MEMBER]`, "color:#05dc28");
                            this.props.fetchDmServer(this.props.dmServerId);
                            break;
                        case "REMOVE_DMS_MEMBER":
                            console.info(`%c [$TR!FE DM_SERVER_CHAT_ROOM M0N!T0R]: [REMOVED_DMS_MEMBER]`, "color:#05dc28");
                            this.props.reSyncCurrentUser(this.props.currentUserId).then((action) => {
                                let currUser = action.currentUser;
                                if (!currUser.dmServersJoined.includes(parseInt(this.props.dmServerId))) {
                                    this.props.removeDmServer(this.props.dmServer.id);
                                    this.props.history.push('/$/$TR!F3-INTRUSION-PREVENTION/');
                                }
                                else {
                                    this.props.fetchDmServer(this.props.dmServer.id);
                                }
                            })
                            break;
                        case "DMS_UPDATED":
                            console.info(`%c[$TR!FE DM_SERVER_CHAT_ROOM M0N!T0R]: [DMS_UPDATED]`, "color:#05dc28");
                            this.props.fetchDmServer(this.props.dmServerId);
                            break;
                        case "REJECT_ALL_DM_MEMBERS_DESTROYING_DM_SERVER":
                            if (head === 302 && path === '/$/telefrag/') {
                                console.warn(`%c[$TR!FE DM_SERVER_CHAT_ROOM M0N!T0R]: %c[_DESTROYING_DM_SERVER_ %c] %c@ [Teleporting Home .... %c]`, "color:#00FD61;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;");
                                this.props.history.push(`/$/telefrag/`);
                            }
                            break;
                        default:
                            console.warn(`%c[$TR!FE DM_SERVER_CHAT_ROOM M0N!T0R]: %c[UNKNOWN REQUEST: ATTEMPTING TO RESYNC %c] %c@ [IN DM_SERVER_ROOM :${this.props.dmServerId}%c]`, "color:#00FD61;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;");
                            this.props.fetchDmServer(this.props.dmServerId);
                    }

                },
            }
        );

    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.renderSkeleton === true && this.state.renderSkeleton === false) {
            this.scrollToBottomOfChat("smooth");
            this.scrollToBottomOfChat("auto");
            setTimeout(() => {
                this.scrollToBottomOfChat("instant");
            }, 1000);
        }
        if (this.props.DmMessages[0] !== prevProps.DmMessages[0]) { this.scrollToBottomOfChat("auto"); }
        if (this.props.DmMessages.length > prevProps.DmMessages.length) {
            this.scrollToBottomOfChat("smooth");
        }

        if (prevProps.dmMembers.length !== this.props.dmMembers.length) {
            this.renderPlaceHolder();
            this.chatInputRef.current?.focus();
        }
        if (prevProps.match.params.dmServerId !== this.props.match.params.dmServerId) {
            this.setState({ value: "", renderSkeleton: true, renderBlockedUserSnackBar: false });
            this.props.fetchDmServer(this.props.dmServerId)
                .then(() => {
                    this.setState({ renderSkeleton: false });
                    this.scrollToBottomOfChat("smooth");
                });
            this.unsubscribe();
            this.subscribe();
            this.renderPlaceHolder();
            this.chatInputRef.current?.focus();
        }

    }

    handleSubmit (e) {
        e.preventDefault();
        e.stopPropagation();
        let dmMessagebody = this.state.value;
        if (dmMessagebody.length === 0 || dmMessagebody.replace(/\s/g, '').length === 0) { return; }
        let modedMessage = {
            body: dmMessagebody.trim(),
            sender_id: this.props.currentUser.id,
            dm_server_id: parseInt(this.props.match.params.dmServerId)
        };
        this.props.createDmMessage(modedMessage).then(() => {
            this.setState({ value: '' });
        });
    }


    renderBlockedUserSnackBarContainer = (boolean) => {
        this.setState({ renderBlockedUserSnackBar: boolean });
    }

    handleInput (e) {
        return (e) => { this.setState({ value: e.currentTarget.value }) }
    }

    renderPlaceHolder () {
        const members = Object.values(this.props.dmMembers);
        let groupMembers = new Array();

        if (this.props.dmServer.dm_server_name !== null) {
            this.setState({ placeholderText: `${this.props.dmServer.dm_server_name}` });
        }

        else if (members.length === 2) {
            const otherUser = members.find((user) => user.id !== this.props.currentUser.id)
            this.setState({ placeholderText: `@${otherUser.username}` })
        }
        else if (members.length > 2) {
            for (let member of members) {
                if (member.id !== this.props.currentUser.id) {
                    groupMembers.push('@' + member.username);
                }
            }
            let placeholderNames = `${groupMembers.join(", ").split("@").join('')}`;
            this.setState({ placeholderText: `${placeholderNames}` });
        }

    }

    render () {
        const dmServerMembers = this.props.dmMembers;
        let dmMessageOLLIMapping = this.props.DmMessages.map((dmMessage, dmMsgIdx) => {
            let member = dmServerMembers.find(member => member.id === dmMessage.sender_id)
            if (member === undefined) { member = Object.values(this.props.strifeBot)[0]; } {
                return (
                    <DMMessagesContainer key={dmMessage.id} dmServerId={this.props.dmServerId} dmMsgIdx={dmMsgIdx}
                        dmMessageAuthor={member} dmMessage={dmMessage} strifeBot={this.props.strifeBot}
                        dmMembers={this.props.dmMembers} msgUpc={this.props.msgUpc}
                        handleOpenSUOMM={this.props.handleOpenSUOMM} setMsgCtrlSRTTHover={this.props.setMsgCtrlSRTTHover}
                        setRenderDeleteDM={this.props.setRenderDeleteDM}
                        setMsgCtrlTTHover={this.props.setMsgCtrlTTHover} DmMessages={this.props.DmMessages}
                    />
                )
            }
        })

        if (this.state.renderSkeleton === false) {
            return (
                <main className="server-chat-container">
                    <div className="messages-container-wrapper">
                        <div className="chat-scroller auto-scroll-raw-attributes global-scroller-base disableScrollAnchor reactive-scroller" ref={this.chatScrollerRef}>
                            <div className="chat-scroller-content">
                                <ol className="chat-scroller-inner" >
                                    <DmChatFirstMessageContainer renderBlockedUserSnackBarContainer={this.renderBlockedUserSnackBarContainer} dmServer={this.props.dmServer} dmServerMembers={this.props.dmServerMembers} />
                                    {dmMessageOLLIMapping}
                                    <div className="ol-scroller-spacer" ref={el => this.oLLSpacerRef.current = el} />
                                </ol>
                            </div>
                        </div>
                    </div>

                    {
                        this.props.userBlocked === false ?

                            (
                                <form className="chat-input-form" onSubmit={this.handleSubmit}>
                                    <div className="chat-input-text-area">
                                        <div className="chat-input-text-area-scroller chat-input-tsa-webkit-scroll">
                                            <div className="inner-attach-button">
                                                <div className="uploadinput">
                                                    <input type="file" className="file-input" disabled />
                                                </div>
                                                <div className="attach-wrapper">
                                                    <button type="button" className="attach-wrapper-button">
                                                        <div className="attach-wrapper-button-content">
                                                            <ChatAddFileIcon />
                                                        </div>
                                                    </button>
                                                </div>
                                                <div className="inner-scroller-text-area">
                                                    <div>
                                                        <textarea
                                                            disabled={this.state.renderSkeleton === true ? true : false}
                                                            value={this.state.value}
                                                            onChange={this.handleInput()}
                                                            className="server-message-chat-box-area"
                                                            rows={this.state.value.split('\n').length}
                                                            minLength={1}
                                                            maxLength={2000}
                                                            placeholder={`Message ${this.state.placeholderText}`}
                                                            spellCheck={false}
                                                            autoFocus={true}
                                                            ref={this.chatInputRef}
                                                            onFocus={(e) => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
                                                            onKeyDown={(e) => {
                                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                                    this.handleSubmit(e);
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="inner-scroller-buttons">
                                                    <button type="button" className="send-gift-button">
                                                        <div className="chat-button-contents">
                                                            <div className="chat-button-wrapper" data-tooltip-id={'thread-tip-dm-chat-box'} data-tooltip-place="top" data-tooltip-position-strategy="fixed"
                                                                data-tooltip-content={'Upgrade your friends! Gift them awesome chat perks with $TR!F3 N!TR0.'} >
                                                                <ChatPresentIcon className="present-icon" />
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div className="button-chat-input-wrap">
                                                        <button type="button" className="send-gift-button">
                                                            <div className="chat-button-contents">
                                                                <div className="chat-button-wrapper">
                                                                    <ChatGIFIcon className="icongif" />
                                                                </div>
                                                            </div>

                                                        </button>
                                                    </div>
                                                    <div className="button-chat-input-wrap">
                                                        <button type="button" className="send-gift-button">
                                                            <div className="chat-button-contents">
                                                                <div className="chat-button-wrapper">
                                                                    <ChatStickerIcon className="sticker-icon" />
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="button-chat-input-wrap">
                                                        <button type="button" className="send-gift-button happyface">
                                                            <div className="chat-button-contents">
                                                                <div className="chat-button-wrapper">
                                                                    <SmileyFaceIcon className="smiley-face-icon" />
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-input-text-area-sticker">
                                        </div>
                                    </div>
                                </form>
                            ) : (
                                <BlockedUserSnackBarContainer setUserBlocked={this.props.setUserBlocked} />
                            )
                    }
                    <Tooltip className="thread-tool-tip" id="thread-tip-dm-chat-box" place="top" closeOnResize={true} closeOnScroll={true} />
                </main>
            )
        }
        else {
            return (
                <LoadingDmChatRoom placeholderText={this.state.placeholderText} />
            )
        }

    }

}

export default DmChatRoom;