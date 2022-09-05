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