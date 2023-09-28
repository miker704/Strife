import React from "react";
import { AddReactionIcon, AddSuperReactionIcon, ChainLinkIcon, CopyIDIcon, OverFlowEllipsisIcon, PenEditIcon, PinnedIcon, ReplyArrowIcon, MarkUnReadIcon, ThreadsIcon, TrashCanIcon } from "../../front_end_svgs/Strife_svgs";
const ServerMessageControl = (props) => {
    return (
        <React.Fragment>
            {
                props.currentUser.id === props.message.author_id ?
                    (
                        <>
                            <div className="message-accessories"></div>
                            <div className="message-accessories-button-container" onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false); props.setMsgCtrlSRTTHover(false); }}>
                                <div className={`message-accessories-button-layer ${props.is_header ? `is-header` : ``}`}>
                                    <div className={`message-accessories-button-wrapper1`} >

                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Message ID"
                                                    onClick={(e) => navigator.clipboard.writeText(props.message.id)}
                                                    onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <CopyIDIcon className="copy-msg-id-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")

                                        }
                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Link"
                                                    onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <ChainLinkIcon className="copy-msg-link-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")

                                        }

                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Mark Unread"
                                                    onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <MarkUnReadIcon className="mark-msg-unread-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")

                                        }

                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content={'Pin Message'}
                                                    onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <PinnedIcon className="pinned-msg-icon" width={24} height={24} />
                                                </div>

                                            ) : ("")

                                        }

                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Reply"
                                                    onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <ReplyArrowIcon className="reply-to-msg-icon" width={24} height={24} />
                                                </div>

                                            ) : ("")

                                        }


                                        <div className="message-accessories-button" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Add Reaction"
                                            onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                            onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                            <AddReactionIcon className="add-reaction-icon" width={18} height={18} />
                                        </div>

                                        <div className="message-accessories-button" data-tooltip-id="thread-tip-super-reaction" data-tooltip-place="top" data-tooltip-content="Add Super Reaction"
                                            onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlSRTTHover(true) }}
                                            onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlSRTTHover(false) }}>
                                            <AddSuperReactionIcon className="add-super-reaction-icon" width={18} height={18} />
                                        </div>

                                        <div className="message-accessories-button" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Edit" onClick={() => props.openEdit()}
                                            onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                            onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                            <PenEditIcon className="pen-icon" width={16} height={16} />
                                        </div>

                                        <div className="message-accessories-button" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Create Thread"
                                            onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                            onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                            <ThreadsIcon className="edit-msg-create-thread-icon" width={24} height={24} />
                                        </div>

                                        <div className="message-accessories-button" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Delete"
                                            onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                            onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}
                                            onClick={(e) => {
                                                if (e.shiftKey) { props.deleteMessage(props.message.id) }
                                                else {
                                                    props.openModalWithProps({
                                                        message: props.message,
                                                        serverId: props.serverId,
                                                        channelId: props.channelId,
                                                        messageAuthor: props.messageAuthor,
                                                        server: props.server,
                                                    });
                                                    props.setRenderDeleteChannelMessage(true);
                                                }
                                            }}>
                                            <TrashCanIcon className="delete-msg-icon danger-warning-del-msg" width={24} height={24} />
                                        </div>

                                        {
                                            !props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-position-strategy="fixed" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="More (Hold Shift)"
                                                    onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <OverFlowEllipsisIcon className="edit-msg-more-options-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")

                                        }
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                    : (
                        <>
                            <div className="message-accessories"></div>
                            <div className="message-accessories-button-container" onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false); props.setMsgCtrlSRTTHover(false); }}>
                                <div className={`message-accessories-button-layer ${props.is_header ? `is-header` : ``}`}>
                                    <div className={`message-accessories-button-wrapper1`} >
                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Message ID"
                                                    onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}
                                                    onClick={(e) => navigator.clipboard.writeText(props.message.id)}>
                                                    <CopyIDIcon className="copy-msg-id-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")

                                        }
                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Link"
                                                    onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <ChainLinkIcon className="copy-msg-link-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")

                                        }

                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Mark Unread"
                                                    onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <MarkUnReadIcon className="mark-msg-unread-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")

                                        }

                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content={'Pin Message'}
                                                    onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <PinnedIcon className="pinned-msg-icon" width={24} height={24} />
                                                </div>

                                            ) : ("")

                                        }

                                        <div className="message-accessories-button" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Add Reaction"
                                            onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                            onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                            <AddReactionIcon className="add-reaction-icon" width={18} height={18} />
                                        </div>

                                        <div className="message-accessories-button" data-tooltip-id="thread-tip-super-reaction" data-tooltip-place="top" data-tooltip-content="Add Super Reaction"
                                            onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlSRTTHover(true) }}
                                            onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlSRTTHover(false) }}>
                                            <AddSuperReactionIcon className="add-super-reaction-icon" width={18} height={18} />
                                        </div>

                                        <div className="message-accessories-button" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Reply"
                                            onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                            onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                            <ReplyArrowIcon className="reply-to-msg-icon" width={24} height={24} />
                                        </div>

                                        <div className="message-accessories-button" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-position-strategy="fixed" data-tooltip-content="More (Hold Shift)"
                                            onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                            onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                            <OverFlowEllipsisIcon className="edit-msg-more-options-icon" width={24} height={24} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </>
                    )
            }

        </React.Fragment>
    )

}
export default ServerMessageControl;