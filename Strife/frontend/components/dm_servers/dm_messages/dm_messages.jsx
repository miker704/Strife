import React from "react";
import ReactTooltip from "react-tooltip";
import { createConsumer } from "@rails/actioncable"


class DmMessages extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            newDmMessage: this.props.dmMessage,
            dmMessages: this.props.DmMessages,
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
        this.subscribe();
    }


    //remove listening of subscription 
    componentWillUnmount () {

        this.unsubscribe();

    }

    scrollToBottomOfChat = (speed) => {

    }


    unsubscribe () {
        this.subscription.unsubscribe();
    }


    subscribe(){

        const dmMessageHandler = {
            recieved(data){
                //if incoming data is a message object ensure it can be edited or added to this chat room
                if(Object.values(data).length > 1){
                    if(this.state.dmMessageIds.includes(data.id.toString())){
                        let dmMessages
                    }
                }
            }
        }

    }





    render () {
        console.log("dmserver messages props", this.props);
        // console.log("dmservers: ", this.props.dmServers);
        console.log(this.props.dmServer);

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