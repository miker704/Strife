import React from "react";

class DeleteServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.cancel_changes = false;
    }

    handleSubmit(e){
        e.preventDefault();
        // if the  cancel_changes button is clicked execute a submission but it exits out of  the form and
        // doesnt delete the server
        if(this.cancel_changes){
            return;
        }
        this.props.history.push('/channels/@me'); // delete a server head back to user channels
        this.props.deleteServer();  // get rid of the server 
      }



    render() {
        let cancel_changes_button = <button id="cancel-form" type="submit" onClick={()=> this.cancel_changes=true}>Cancel</button>
        let delete_ServerButton =  <button id="deleteServerButton" type="submit">Delete Server </button>



        return (
            <div id="server-form"> 
            <form autoComplete="off" onSubmit={this.handleSubmit}> 
              <div id="channel-top">
                <h3 id="delete-Server-Header"> Delete '{this.props.server.server_name}' </h3>
                <div id="delete-warning-notif">
                  <div> Are you sure you want to delete 
                    <strong id="delete-account"> {this.props.server.name}</strong>?
                    This action cannot be undone.
                  </div>
                </div>
                <input type="hidden"/>
              </div>
              <div id="channel-bottom">
                {delete_ServerButton}
                {cancel_changes_button}
              </div>
              <button id="server-form-exit" onClick={() => this.cancel_changes = true}><i className="fa-solid fa-xmark"/></button>
            </form>
          </div>
        )
    }
}

export default DeleteServerForm;