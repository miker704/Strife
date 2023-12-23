import React from "react";
import { AddReactionIcon, AddSuperReactionIcon, ChainLinkIcon, CopyIDIcon, OverFlowEllipsisIcon, PenEditIcon, PinnedIcon, ReplyArrowIcon, MarkUnReadIcon, TrashCanIcon } from "../../front_end_svgs/Strife_svgs";
const DmMessageSettings = (props) => {
    return (
        <React.Fragment>
            {
                props.currentUser.id === props.dmMessage.sender_id ?
                    (
                        <>
                            <div className="message-accessories-button-container" onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false); props.setMsgCtrlSRTTHover(false); }}>
                                <div className={`message-accessories-button-layer ${props.is_header ? `is-header` : ``}`}>
                                    <div className={`message-accessories-button-wrapper`} >

                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="dmsgbs-thread-tip"
                                                    data-tooltip-place="top" data-tooltip-content="Copy Message ID"
                                                    onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}
                                                    onClick={(e) => navigator.clipboard.writeText(props.dmMessage.id)}>
                                                    <CopyIDIcon className="copy-msg-id-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")

                                        }
                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="dmsgbs-thread-tip" data-tooltip-place="top"
                                                    data-tooltip-content="Copy Link" onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <ChainLinkIcon className="copy-msg-link-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")

                                        }

                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="dmsgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Mark Unread"
                                                    onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <MarkUnReadIcon className="mark-msg-unread-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")

                                        }

                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="dmsgbs-thread-tip" data-tooltip-place="top"
                                                    data-tooltip-content={'Pin Message'} onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <PinnedIcon className="pinned-msg-icon" width={24} height={24} />
                                                </div>

                                            ) : ("")

                                        }

                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="dmsgbs-thread-tip" data-tooltip-place="top"
                                                    data-tooltip-content="Reply" onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <ReplyArrowIcon className="reply-to-msg-icon" width={24} height={24} />
                                                </div>

                                            ) : ("")

                                        }


                                        <div className="message-accessories-button" data-tooltip-id="dmsgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Add Reaction"
                                            onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                            onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                            <AddReactionIcon className="add-reaction-icon" width={18} height={18} />
                                        </div>

                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="thread-tip-super-reaction" data-tooltip-place="top" data-tooltip-content="Add Super Reaction"
                                                    onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlSRTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlSRTTHover(false) }}>
                                                    <AddSuperReactionIcon className="add-super-reaction-icon" width={18} height={18} />
                                                </div>
                                            ) : ("")

                                        }

                                        <div className="message-accessories-button" data-tooltip-id="dmsgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Edit" onClick={() => props.openEdit()}
                                            onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                            onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                            <PenEditIcon className="pen-icon" width={16} height={16} />
                                        </div>


                                        <div className="message-accessories-button" data-tooltip-id="dmsgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Delete"
                                            onClick={(e) => {

                                                if (e.shiftKey) {
                                                    props.deleteDmMessage(props.dmMessage.id);
                                                }
                                                else {
                                                    props.openModalWithProps({
                                                        currentUserId: props.currentUser.id,
                                                        currentUser: props.currentUser,
                                                        dmMessage: props.dmMessage,
                                                        dmServerId: props.dmServerId,
                                                        dmMessageAuthor: props.dmMessageAuthor
                                                    });
                                                    props.setRenderDeleteDM(true);
                                                }
                                            }}
                                            onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                            onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}
                                        >
                                            <TrashCanIcon className="delete-msg-icon danger-warning-del-msg" width={24} height={24} />
                                        </div>

                                        {
                                            !props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-position-strategy="fixed" data-tooltip-id="dmsgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="More (Hold Shift)"
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
                            <div className="message-accessories-button-container" onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false); props.setMsgCtrlSRTTHover(false); }}>
                                <div className={`message-accessories-button-layer ${props.is_header ? `is-header` : ``}`}>
                                    <div className={`message-accessories-button-wrapper`} >
                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="dmsgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Message ID"
                                                    onClick={(e) => navigator.clipboard.writeText(props.dmMessage.id)}
                                                    onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <CopyIDIcon className="copy-msg-id-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")

                                        }
                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="dmsgbs-thread-tip" data-tooltip-place="top"
                                                    data-tooltip-content="Copy Link" onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <ChainLinkIcon className="copy-msg-link-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")

                                        }

                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="dmsgbs-thread-tip" data-tooltip-place="top"
                                                    data-tooltip-content="Mark Unread" onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <MarkUnReadIcon className="mark-msg-unread-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")

                                        }

                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="dmsgbs-thread-tip" data-tooltip-place="top"
                                                    data-tooltip-content={'Pin Message'} onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                                    <PinnedIcon className="pinned-msg-icon" width={24} height={24} />
                                                </div>

                                            ) : ("")

                                        }

                                        <div className="message-accessories-button" data-tooltip-id="dmsgbs-thread-tip" data-tooltip-place="top"
                                            data-tooltip-content="Add Reaction" onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                            onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                            <AddReactionIcon className="add-reaction-icon" width={18} height={18} />
                                        </div>


                                        {
                                            props._SHIFT ? (
                                                <div className="message-accessories-button" data-tooltip-id="thread-tip-super-reaction" data-tooltip-place="top"
                                                    data-tooltip-content="Add Super Reaction" onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlSRTTHover(true) }}
                                                    onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlSRTTHover(false) }}>
                                                    <AddSuperReactionIcon className="add-super-reaction-icon" width={18} height={18} />
                                                </div>
                                            ) : ("")

                                        }

                                        <div className="message-accessories-button" data-tooltip-id="dmsgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="Reply"
                                            onMouseEnter={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(true) }}
                                            onMouseLeave={(e) => { e.stopPropagation(); props.setMsgCtrlTTHover(false) }}>
                                            <ReplyArrowIcon className="reply-to-msg-icon" width={24} height={24} />
                                        </div>

                                        <div className="message-accessories-button" data-tooltip-position-strategy="fixed"
                                            data-tooltip-id="dmsgbs-thread-tip" data-tooltip-place="top" data-tooltip-content="More (Hold Shift)"
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
export default DmMessageSettings;