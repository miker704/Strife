import React from "react";



class ServerMessages extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="server-chat-container-wrapper">
            <main className="server-chat-container">
                <div className="message-wrapper">
                    <div className="chat-scroller">
                        <div className="chat-scroller-content">
                            <ol className="chat-scroller-inner">
                                <div className="chat-divider">
                                    <span className="chat-divider-content"></span>
                                </div>
                                <li className="chat-message-item">
                                    <div className="message-wrapper">
                                        <div className="message-wrapper-contents">
                                            <div className="chat-member-avatar-img">
                                                insert img here
                                            </div>
                                            <h2 className="chat-member-username-header">
                                                <span className="chat-member-username-wrap">
                                                    <span className="chat-member-username">insert username here</span>
                                                </span>
                                                <span className="chat-message-timestamp-wrap">
                                                    <time className="chat-message-timestamp">
                                                        <i className="chat-message-timestamp-i">
                                                            insert time stamp here
                                                        </i>
                                                    </time>
                                                </span>
                                            </h2>
                                            <div className="chat-message">insert message content here
                                                <span className="mention-wrapper">@mentionuser</span>
                                            </div>
                                        </div>
                                        <div className="message-accessories"></div>
                                    </div>
                                </li>
                                <div className="ol-scroller-spacer"></div>
                            </ol>
                        </div>
                    </div>
                </div>

                <form className="chat-input-form">
                    <div className="chat-input-text-area">
                        <div className="chat-input-text-area-scroller">
                            <div className="inner-attach-button">
                                <div className="uploadinput">
                                    <input type="file" className="file-input" />
                                </div>
                                <div className="attach-wrapper">
                                    <button type="button" className="attach-wrapper-button">
                                        <div className="attach-wrapper-button-content">
                                            <svg width="24" height="24" viewBox="0 0 24 24">
                                                <path className="attachButtonPlus" fill="currentColor"
                                                    d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001
                                                         12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098
                                                          12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <div className="inner-scroller-text-area">
                                    <div>
                                        <div className="server-chat-box-placeholder">
                                            Message #general or #channel name
                                        </div>
                                        <div role={"textbox"} spellCheck={true} aria-haspopup={"listbox"} aria-invalid={"false"}
                                            aria-autocomplete={"list"} data-can-focus="true" autoCorrect="off"
                                            className="server-message-chat-box-area" aria-label="Message #general"
                                            aria-multiline="true" data-slate-editor="true" data-slate-node="value"
                                            contentEditable="true" zindex={-1}>
                                            <div data-slate-node="element">
                                                <span data-slate-node="text">
                                                    <span data-slate-leaf="true" className="empty-text-sc">
                                                        <span data-slate-zero-width="n" data-slate-length="0">
                                                            "&#xFEFF;"
                                                            <br />
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner-scroller-buttons">
                                    <button type="button" className="send-gift-button">
                                        <div className="chat-button-contents">
                                            <div className="chat-button-wrapper">

                                            </div>
                                        </div>
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className="chat-input-text-area-sticker">

                        </div>
                    </div>
                </form>
            </main>
            </div>
        )
    }
}

export default ServerMessages;