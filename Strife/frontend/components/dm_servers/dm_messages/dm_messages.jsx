import React from "react";
import ReactTooltip from "react-tooltip";
import {createConsumer} from "@rails/actioncable"


class DmMessages extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            newDmMessage: this.props.dmMessage,
            dmMessage: this.props.dmMessages,
            dmMessageIds: this.props.dmMessageIds
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.subscription ="";
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


    //remove listening os subscription 
    componentWillUnmount(){

        this.unsubscribe();

    }

    scrollToBottomOfChat = (speed) => {

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