import React from "react";
import { createConsumer } from "@rails/actioncable"
import DMMessageEditContainer from "../dms_message_and_edit_component/dm_message_edit_container";

class DmMessages extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            newDmMessage: this.props.dmMessage,
            DmMessages: this.props.DmMessages,
            dmMessagesIds: this.props.dmMessagesIds,
            value: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.subscription = "";
        this.subscribe = this.subscribe.bind(this);
        this.unsubscribe = this.unsubscribe.bind(this);
        // this.scrollToBottomOfChat = this.scrollToBottomOfChat.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.formatTime = this.formatTime.bind(this);
        this.oneToOneChatFirstMessage = this.oneToOneChatFirstMessage.bind(this);
        this.renderGroupChatFirstMessage = this.renderGroupChatFirstMessage.bind(this);
        this.placeholderText = '';
        this.resyncUserProps = this.resyncUserProps.bind(this);
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

                this.props.fetchDmServer(this.props.dmServerId);

            }

        })

        //code above checks if user was kick while out of chat if condtion pass boot them and do not fetch server
        // this.props.fetchDmServer(this.props.dmServerId);
        // this.subscribe();

    }


    //remove listening of subscription 
    componentWillUnmount () {
        this.subscription?.unsubscribe();
    }



    scrollToBottomOfChat = (speed) => {
        if (this.placeholder) {
            this.placeholder.scrollIntoView({ behavior: speed });
        }
    }


    unsubscribe () {
        this.subscription.unsubscribe();
    }

    resyncUserProps (head, path) {

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
                received: ({ dm_message, head, path }) => {
                    //boot individual member
                    if (head === 401) {
                    }
                    if (head === 102) {
                        this.props.fetchDmServer(this.props.dmServerId);
                    }

                    //active member in chat has update a visuaL comp
                    if (head === 111) {
                        // console.log("user has been updated")
                        this.props.fetchDmServer(this.props.dmServerId);
                        //trick compdid update
               

                    }
                    //this is to boot everyone when the dmserver is deleted
                    if (head === 302 && path === '/$/telefrag/') {
                        this.props.history.push(`/$/telefrag/`);
                    }
                    // else if(this.props.currentUserId !== this.props.dmServer.owner_id) {
                    else {
                        // ensure individual membership is maintained if not boot the user that fails this
                        // condition
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
                    }
                    // this.props.receiveDmMessage(dm_message);
                    // this.props.fetchDmServer(this.props.dmServerId);

                    if (dm_message !== undefined) {
                        if (Object.values(dm_message).length > 1) {
                            if (this.state.dmMessagesIds.includes(dm_message.id.toString())) {
                                let dmMessages = this.state.DmMessages;
                                let DMMessagesCollection = new Array();
                                dmMessages.forEach((dmmessage) => {
                                    //if match occurs set it to current dmMessage state
                                    if (dmmessage.id === dm_message.id) {
                                        dmmessage.body = dm_message.body;
                                        //push it to dmMessages state array
                                    }
                                    DMMessagesCollection.push(dmmessage);
                                })
                                //update the state 
                                this.setState({ ["DmMessages"]: DMMessagesCollection });
                            }
                            else {
                                //if there arent any messages in the dmserver set up for message creation
                                //get author name of message within this dmServer
                                dm_message.authorName = this.props.dmServer.members[dm_message.sender_id].username;
                                //rename it so that it can be editable
                                dm_message.sender_id = dm_message.sender_id;
                                //grab time stamps from the backend
                                let timeStamp = new Date(dm_message.created_at)
                                let time = timeStamp.toLocaleTimeString();
                                let date = timeStamp.toLocaleDateString();
                                dm_message.created_at = date + " " + time;
                                this.setState({ ["DmMessages"]: this.state.DmMessages.concat([dm_message]) })
                                this.setState({ ["dmMessagesIds"]: this.state.dmMessagesIds.concat(dm_message.id.toString()) })
                            }
                        }
                        else {
                            let dmMessages = this.state.DmMessages
                            let filteredDmMessages = dmMessages.filter(dm => dm.id !== dm_message)
                            this.setState({ ['DmMessages']: filteredDmMessages });

                        }
                    }


                },

            }
        );
    }



    componentDidUpdate (prevProps, prevState) {
        if (prevProps.DmMessages[0] !== this.props.DmMessages[0]) {
            this.scrollToBottomOfChat("auto");
        }

        if (prevState.DmMessages.length < this.state.DmMessages.length) {
            this.scrollToBottomOfChat("smooth");
        }

        if (prevProps.dmMessagesIds.length !== this.props.dmMessagesIds.length) {
            let DmMessages = this.props.DmMessages;
            let dmMessagesIds = this.props.dmMessagesIds;
            this.setState({ DmMessages });
            this.setState({ dmMessagesIds });
        }
        if (prevProps.dmMessagesIds.length > 0 && this.props.dmMessagesIds.length > 0) {
            if (prevProps.DmMessages[0].id !== this.props.DmMessages[0].id) {
                this.props.fetchDmServer(this.props.dmServerId);
                this.subscription.unsubscribe();
                this.subscribe();
                let DmMessages = this.props.DmMessages;
                let dmMessagesIds = this.props.dmMessagesIds;
                this.setState({ DmMessages });
                this.setState({ dmMessagesIds });
            }
        }
        if (prevProps.match.params.dmServerId !== this.props.match.params.dmServerId) {
            let newDmMessage = this.state.newDmMessage
            newDmMessage.body = '';
            newDmMessage.dm_server_id = this.props.match.params.dmServerId;
            this.setState({ newDmMessage });
            this.setState({value : ""});
            this.props.fetchDmServer(this.props.dmServerId);
            this.unsubscribe();
            this.subscribe();
        }
    }


    handleEnter (e) {
        const keys = {
            13: () => {
                e.preventDefault();
                this.handleSubmit(e);
                window.removeEventListener('keyup', this.handleEnter, false);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }

    handleSubmit (e) {
        e.preventDefault();
        e.stopPropagation();
        let dmMessagebody = this.state.value;
        if (dmMessagebody.length === 0) { return; }
        let modedMessage = this.state.newDmMessage;
        modedMessage.body = dmMessagebody;
        this.setState({ newDmMessage: modedMessage });
        this.props.createDmMessage(this.state.newDmMessage);
        modedMessage.body = ''
        this.setState({ value: '', newDmMessage: modedMessage });

    }

    handleInput (e) {
        return (e) => { this.setState({ value: e.currentTarget.value }) }
    }


    formatTime (timeOfCreation) {
        const date = new Date(timeOfCreation);
        const now = new Date();
        const startOfDay = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
        ).getTime();

        const startOfYesterday = startOfDay - (1000 * 60 * 60 * 24);
        let formattedTime = date.toLocaleTimeString([], {
            timeStyle: 'short'
        });
        if (date.getTime() < startOfYesterday) {
            formattedTime = date.toDateString();
        } else if (date.getTime() < startOfDay) {
            formattedTime = `Yesterday at ${formattedTime}`;
        }
        return formattedTime;
    }


    oneToOneChatFirstMessage () {
        const members = Object.values(this.props.dmMembers);
        if (members.length === 2) {
            const otherUser = members.find((user) => user.id !== this.props.currentUser.id)
            this.placeholderText = `@${otherUser.username}`;
            return (
                <strong className="otherUser">@{`${otherUser.username}`}</strong>
            )
        }
        else {
            return null;
        }
    }
    renderGroupChatFirstMessage () {
        const members = Object.values(this.props.dmMembers);
        let groupMembers = new Array();
        if (members.length > 2) {
            for (let member of members) {
                if (member.id !== this.props.currentUser.id) {
                    groupMembers.push('@' + member.username);
                }
            }
            this.placeholderText = `${groupMembers.join(", ").split("@").join('')}`;

            return (
                <strong className="otherUser">{` `}{`${groupMembers.join(", ")}`}</strong>
            )
        }
        else {
            return null;
        }
    }



    render () {
        const dmServerMembers = this.props.dmMembers;

        let dmMessageOLLIMapping = this.state.DmMessages.map((dmMessage) => {
            // const botMessage = dmMessage.sender_id === 1 &&
            //     dmMessage.body === 'This is the beginning of your direct message history with' ?
            //     this.oneToOneChatFirstMessage() : dmMessage.sender_id === 1 &&
            //         dmMessage.body === 'Welcome to the beginning of your Group Chat' ?
            //         this.renderGroupChatFirstMessage() : ('');


            let member = dmServerMembers.find(member => member.id === dmMessage.sender_id)
            if (member === undefined) {
                member = Object.values(this.props.strifeBot)[0];
            }
            {
                return (


                    <DMMessageEditContainer
                        dmMessageAuthor = {member}
                        dmMembers={this.props.dmMembers}
                        currentUserId={this.props.currentUserId}
                        currentUser = {this.props.currentUser}
                        dmMessage={dmMessage}
                        renderGroupChatFirstMessage={this.renderGroupChatFirstMessage}
                        oneToOneChatFirstMessage={this.oneToOneChatFirstMessage}
                        formatTime={this.formatTime}
                        dmServerId={this.props.dmServerId}
                        key={dmMessage.id}
                        strifeBot={this.props.strifeBot}
                    />

               
                )
            }


        })

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

                                    {dmMessageOLLIMapping}

                                    <div className="ol-scroller-spacer" ref={el => this.placeholder = el} />
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

                                            <textarea
                                                value={this.state.value}
                                                onChange={this.handleInput()}
                                                className="server-message-chat-box-area"
                                                rows={this.state.value.split('\n').length}
                                                minLength={1}
                                                maxLength={2000}
                                                placeholder={`Message ${this.placeholderText}`}
                                                spellCheck={false}
                                                onKeyDown={(e) => {
                                                    if (e.code === 'Enter' && !e.shiftKey) {
                                                        this.handleSubmit(e);
                                                    }
                                                }}
                                            />


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
                                                        {/* <i className="fa-regular fa-face-smile-wink fa-xl"></i> */}
                                                        <svg className="smiley-face-icon" xmlns="http://www.w3.org/2000/svg" height="24" width={24} viewBox="0 0 512 512">
                                                            <path fill="currentColor" d="M256 352C293.2 352 319.2 334.5 334.4 318.1C343.3 308.4 358.5 307.7 368.3 316.7C378 325.7 378.6 
                                                        340.9 369.6 350.6C347.7 374.5 309.7 400 256 400C202.3 400 164.3 374.5 142.4 350.6C133.4 340.9 133.1 325.7 143.7 
                                                        316.7C153.5 307.7 168.7 308.4 177.6 318.1C192.8 334.5 218.8 352 256 352zM208.4 208C208.4 225.7 194 240 176.4 
                                                        240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM281.9 230.6C273.9 223
                                                        273.5 210.4 281 202.3C295.6 186.8 316.3 180 335.6 180C354.1 180 375.7 186.8 390.2 202.3C397.8 210.4 397.4 223 389.3 
                                                        230.6C381.2 238.1 368.6 237.7 361 229.7C355.6 223.8 346.3 220 335.6 220C324.1 220 315.7 223.8 310.2 229.7C302.7 237.7
                                                        290 238.1 281.9 230.6zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512
                                                        114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                                                        </svg>
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

export default DmMessages;