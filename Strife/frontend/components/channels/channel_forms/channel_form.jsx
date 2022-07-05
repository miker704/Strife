import React from "react";


class ChannelForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            channel_name: this.props.channelName,
            server_id: this.props.serverId
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancel_changes = false;
        this.handleDeleteChannel = this.handleDeleteChannel.bind(this);

    }


    //when comp mounts check to see what form is needed to be rendered 
    componentDidMount() {
        if (this.props.formType === "Edit Channel") {
            //if we are editing a channel assign state to the current channel via its id prop
            this.setState({ ['id']: this.props.channelId })
        }
    }

    //remove channelerrors if any 
    componentWillUnmount() {
        this.props.removeChannelErrors();
    }


    handleSubmit(e) {
        e.preventDefault();
        // this.props.removeErrors();

        //cancel changes option cancel any changes to the channel
        if (this.cancel_changes) {
            return;
        }

        let submissionState = {};
        if (this.props.formType === 'Create Channel') {
            submissionState = {
                channel_name: this.state.channel_name,
                server_id: this.state.server_id


            }

            this.props.processForm(this.state).then((processForm) => {

                let newChannel = processForm.channelPayload.channel;
                return this.props.history.push(`/servers/${this.state.server_id}/${newChannel.id}`)
            })

        }
        else {

            this.props.processForm(this.state);
        }


    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }


    //delete channel from server 
    handleDeleteChannel(channelId) {
            //signal a window from the browser to the user to confirm if they want to proceed with channel deletion
            //delete channel 
            this.props.deleteChannel(channelId)
    }

    
    render(){
    
      
    }

}

export default ChannelForm;