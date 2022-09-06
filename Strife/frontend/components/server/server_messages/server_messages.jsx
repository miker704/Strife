import React from "react";



class ServerMessages extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleEnter = this.handleEnter.bind(this);

    
    }


    handleEnter (e) {
            const keys = {
                13: () => {
                    e.preventDefault();
                    this.handleSubmit();
                    window.removeEventListener('keyup', this.handleEnter, false);
                },
            };
            if (keys[e.keyCode]) {
                keys[e.keyCode]();
            }
    }

    handleSubmit () {
        console.log("the message is : ", this.state.value);
        this.setState({value:''});
        window.removeEventListener('keyup', this.handleEnter, false);

    }

    handleInput (e) {
        return (e) => { this.setState({ value: e.currentTarget.value }) }
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
                                        <div className="message-wrapper1">
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

                    <form className="chat-input-form" onSubmit={this.handleSubmit}>
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
                                            {/* <div className="server-chat-box-placeholder"> */}
                                                {/* Message #general or #channel name */}
                                            {/* </div> */}
                                            {/* <div role={"textbox"} spellCheck={true} aria-haspopup={"listbox"} aria-invalid={"false"}
                                                aria-autocomplete={"list"} data-can-focus="true" autoCorrect="off"
                                                className="server-message-chat-box-area" aria-label="Message #general"
                                                aria-multiline="true" data-slate-editor="true" data-slate-node="value"
                                                contentEditable="true" zindex={-1}>
                                                <div data-slate-node="element">
                                                    <span data-slate-node="text">
                                                        <span data-slate-leaf="true" className="empty-text-sc">
                                                            <span data-slate-zero-width="n" data-slate-length="0">
                                                                &#xFEFF;
                                                                <br />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div> */}
                                            <textarea
                                                value={this.state.value}
                                                onChange={this.handleInput()}
                                                className="server-message-chat-box-area"
                                                rows="100"
                                                cols="88"
                                                minLength={1}
                                                maxLength={2000}
                                                placeholder={"Message #general or #channel name"}
                                                spellCheck={false}
                                                // onSubmit={this.printMsg()}
                                                onInput={() => {
                                                    console.log("activated listener");
                                                    window.addEventListener('keyup', this.handleEnter, false);
                                                }}
                                            />
                                            {/* <input className="txt-inpt" type="submit" /> */}
                                            {/* <input
                                                value={this.state.value}
                                                onChange={this.handleInput()}
                                                minLength={1}
                                                maxLength={2000}
                                                placeholder={"Message #general or #channel name"}
                                                spellCheck={false}
                                                className="server-message-chat-box-area" type="text" /> */}

                                        </div>
                                    </div>
                                    <div className="inner-scroller-buttons">
                                        <button type="button" className="send-gift-button">
                                            <div className="chat-button-contents">
                                                <div className="chat-button-wrapper">
                                                    <svg className="present-icon" width="24" height="24" aria-hidden="true" role="img" viewBox="0 0 24 24">
                                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.886 7.999H20C21.104 7.999 
                                                22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879
                                                 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 
                                                 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99
                                                  7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 
                                                  7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 
                                                  5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 
                                                  4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 
                                                  6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 
                                                  4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 
                                                  6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 
                                                  21 19.999V13.999H13Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="button-chat-input-wrap">
                                            <button type="button" className="send-gift-button">
                                                <div className="chat-button-contents">
                                                    <div className="chat-button-wrapper">
                                                        <svg width="24" height="24" className="icongif" aria-hidden="true" role="img" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 
                                                            22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM9.76445 11.448V15.48C8.90045 
                                                            16.044 7.88045 16.356 6.74045 16.356C4.11245 16.356 2.66045 14.628 2.66045 12.072C2.66045 9.504 
                                                            4.23245 7.764 6.78845 7.764C7.80845 7.764 8.66045 8.004 9.32045 8.376L9.04445 10.164C8.42045 9.768 
                                                            7.68845 9.456 6.83645 9.456C5.40845 9.456 4.71245 10.512 4.71245 12.06C4.71245 13.62 5.43245 14.712 
                                                            6.86045 14.712C7.31645 14.712 7.64045 14.616 7.97645 14.448V12.972H6.42845V11.448H9.76445ZM11.5481 
                                                            7.92H13.6001V16.2H11.5481V7.92ZM20.4724 7.92V9.636H17.5564V11.328H19.8604V13.044H17.5564V16.2H15.5164V7.92H20.4724Z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </div>

                                            </button>
                                        </div>
                                        <div className="button-chat-input-wrap">
                                            <button type="button" className="send-gift-button">
                                                <div className="chat-button-contents">
                                                    <div className="chat-button-wrapper">
                                                        <svg width="24" height="24" className="sticker-icon" aria-hidden="true" role="img" viewBox="0 0 20 20">
                                                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.0002 0.662583V5.40204C12.0002 
                                                            6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 
                                                            12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 
                                                            0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 
                                                            18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 
                                                            12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 
                                                            13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 
                                                            3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 
                                                            12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z">
                                                            </path>
                                                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
                                                                d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 
                                                                7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 
                                                                12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 
                                                                0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM12 
                                                                13H11.2H8.8H8C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13ZM17.7766 13.331C17.7766 13.9446 17.2793 14.442 16.6657 
                                                                14.442C16.0522 14.442 15.5548 13.9446 15.5548 13.331C15.5548 12.7175 16.0522 12.2201 16.6657 12.2201C17.2793 12.2201 17.7766 
                                                                12.7175 17.7766 13.331ZM2 
                                                                12.2361L2.53532 11L5.62492 12.7835C5.79161 12.8797 5.79161 13.1203 5.62492 13.2165L2.53532 15L2 13.7639L3.32339 13L2 12.2361Z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="button-chat-input-wrap">
                                            <button type="button" className="send-gift-button happyface">
                                                <div className="chat-button-contents">
                                                    <div className="chat-button-wrapper">
                                                        <i className="fa-regular fa-face-smile-wink fa-xl"></i>
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
                </main>
            </div>
        )
    }
}

export default ServerMessages;