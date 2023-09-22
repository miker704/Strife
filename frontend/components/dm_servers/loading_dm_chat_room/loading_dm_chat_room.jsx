import React from "react";
import { useEffect, useState, useRef } from "react";
import { MessageSkeletonList } from "../../custom_input_components/message_Skeleton/message_skeleton";
import { ChatAddFileIcon, ChatGIFIcon, ChatPresentIcon, ChatStickerIcon, SmileyFaceIcon } from "../../front_end_svgs/Strife_svgs";
import { Tooltip } from "react-tooltip";
const LoadingDmChatRoom = (props) => {
    const [value, setValue] = useState('')
    const chatInputRef = useRef(null);
    return (
        <main className="server-chat-container">
            <div className="message-wrapper">
                <div className="chat-scroller auto-scroll-raw-attributes global-scroller-base disableScrollAnchor reactive-scroller">
                    <div className="chat-scroller-content">
                        <MessageSkeletonList />
                    </div>
                </div>
            </div>
            <form className="chat-input-form">
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
                                        disabled={true}
                                        value={value} readOnly={true}
                                        className="server-message-chat-box-area"
                                        rows={value.split('\n').length}
                                        minLength={1}
                                        maxLength={2000}
                                        placeholder={`Message ${props.placeholderText}`}
                                        spellCheck={false}
                                        autoFocus={true}
                                        ref={chatInputRef}
                                        onFocus={(e) => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
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
            <Tooltip className="thread-tool-tip" id="thread-tip-dm-chat-box" place="top" closeOnResize={true} closeOnScroll={true} />
        </main>
    )
}
export default LoadingDmChatRoom;