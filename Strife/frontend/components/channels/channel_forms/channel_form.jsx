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
        // Placeholder based on form
        const placeholder = this.props.formType === "Edit Channel" ? this.props.name : "new-channel"
        // Form Message based on creating or editing Channel and if it is the general channel.
        let formMessage = this.props.formType === "Update Channel" && this.props?.channelName === "general" 
          ? <div id ="channel-form-header"> 
              <h5>Edit (Disabled for general)</h5>
              <p> In {this.props.serverName}</p>
            </div> 
          : this.props.formType === "Update Channel"  
          ? <div id ="channel-form-header"> 
              <h5>Edit Channel</h5>
              <p> In {this.props.serverName}</p>
            </div> 
          : <div id ="channel-form-header"> 
            <h5>Create A Channel</h5>
            <p> In {this.props.serverName}</p>
          </div>
    
        // Delete Button if Update Channel"
        let deleteButton = this.props.formType === "Update Channel" && this.props?.channelName === "general" 
          ?  <button id="channel-delete-button" type="button"> Delete Channel </button>
          : this.props.formType === "Update Channel" 
          ? <button id="channel-delete-button" type="button"
              onClick={() => this.handleDelete(this.props.channelId)}> 
              Delete Channel </button>
          : null;
    
        // Channel Name is format based on if there are errors
        let channelName = this.props.errors.includes("Name can't be blank") ? 
              <p id="channel-error-name"> CHANNEL NAME: CANNOT BE BLANK</p> :
              <p id="channel-form-name"> CHANNEL NAME</p>
    
        // Change channelName  if channel name is already taken
        if(this.props.errors.includes("Name has already been taken")){
          channelName = <p id="channel-error-name"> CHANNEL NAME: NAME ALREADY IN USE</p>}
    
        // Submit Button (Disabled for general) 
        let submitButton = this.props?.channelName === "general" 
          ? <button id="channel-edit-submit" type="button">Update Channel </button>
          : <button id="channel-edit-submit" type="submit">{this.props.formType}</button>
    
        // Cancel Button
        let cancelButton = <button id="cancel-form" 
          type = "submit"
          ref={el=>this.cancelButton=el} 
          onClick={() => this.cancel = true}
          >Cancel</button>
    
        return (
        <div id="channel-form"> 
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div id="channel-form-top"> 
              {formMessage}
                {channelName}
                <div id ="channel-form-name-input-container">
                  <span className="server-message-input-padding">"</span>
                  <i className="fa-solid fa-hashtag fa-sm"></i>
                  <input 
                  autoFocus
                    type="text"
                    value={this.state.name}
                    onChange={this.handleName("name")}
                    id ="channel-form-name-input"
                    placeholder={placeholder}
                  />
                </div>
            </div>
              <div id="channel-form-bottom"> 
              {/* normal submit button to handle enter properly */}
                {submitButton}
                {deleteButton}
                {cancelButton}
              </div>
          </form>
        </div>)
    }

}

export default ChannelForm;