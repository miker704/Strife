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
                            </ol>
                        </div>
                    </div>
                  </div>

                  <form className="chat-input-form">

                  </form>
        </main>
        )
    }
}

export default ServerMessages;