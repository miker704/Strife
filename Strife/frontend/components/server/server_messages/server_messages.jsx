import React from "react";



class ServerMessages extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
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

                            </div>
                  </form>
        </main>
        )
    }
}

export default ServerMessages;