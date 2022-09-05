import React from "react";
import ReactTooltip from "react-tooltip";
import { createConsumer } from "@rails/actioncable"


class DmMessages extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            newDmMessage: this.props.dmMessage,
            DmMessages: this.props.DmMessages,
            dmMessageIds: this.props.dmMessageIds
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.subscription = "";
        this.subscribe = this.subscribe.bind(this);
        this.unsubscribe = this.unsubscribe.bind(this);
        this.scrollToBottomOfChat = this.scrollToBottomOfChat.bind(this);


    }

    //mount correct dmServer and start subscription listening 
    componentDidMount () {
        // this.props.fetchDmServer(this.props.dmServerId);
        this.props.fetchDmServer();
        // this.subscribe();
    }


    //remove listening of subscription 
    componentWillUnmount () {

        // this.unsubscribe();

    }

    handleSubmit(){

    }
    
    scrollToBottomOfChat = (speed) => {

    }


    unsubscribe () {
        this.subscription.unsubscribe();
    }


    subscribe () {

        const dmMessageHandler = {
            recieved (incomingDmMessages) {
                //if incoming data is a message object ensure it can be edited or added to this chat room
                //this condition is also to load any messages sent or saved in the db 
                if (Object.values(incomingDmMessages).length > 1) {
                    if (this.state.dmMessageIds.includes(incomingDmMessages.id.toString())) {
                        let dmMessages = this.state.DmMessages;
                        let DMMessagesCollection = new Array();
                        dmMessages.forEach((dmmessage) =>{
                            //if match occurs set it to current dmMessage state
                            if(dmmessage.id === incomingDmMessages.id){
                                dmmessage.body = incomingDmMessages.body;
                                //push it to dmMessages state array
                            }
                            DMMessagesCollection.push(dmmessage);
                        })
                        //update the state 
                        this.setState({["messages"]: DMMessagesCollection});
                    }
                    else{
                        //if there arent any messages in the dmserver set up for message creation
                        //get author name of message within this dmServer
                        incomingDmMessages.authorName = this.props.dmServer.members[incomingDmMessages.sender_id].username;
                        //rename it so that it can be editable
                        incomingDmMessages.senderId = incomingDmMessages.sender_id;
                        //grab time stamps from the backend
                        let timeStamp = new Date(incomingDmMessages.created_at)
                    }

                }
            }
        }

    }

    subscription(){

    }

    


    render () {
        console.log("dmserver messages props", this.props);
        console.log("dmservers: ", this.props.dmServers);
        console.log(this.props.dmServer);
        console.log('dmserver.memberss : ', this.props.dmMembers )

        return (

            <div className="dm-messages-container-wrapper">
                <p>vdfrdgrsdgwre</p>
                <p>vdfrdgrsdgwre</p>
                <p>vdfrdgrsdgwre</p>
                <p>vdfrdgrsdgwre</p>
                <p>vdfrdgrsdgwre</p>
                <p>vdfrdgrsdgwre</p>
                <p>vdfrdgrsdgwre</p>
                <p>vdfrdgrsdgwre</p>
                <p>vdfrdgrsdgwre</p>
            </div>
        )

    }
}

export default DmMessages;