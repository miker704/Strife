import React from "react";
import DeleteServerFormContainer from "./delete_server_form_container";
import EditServerNameFormContainer from "./edit_server_name_form_container";


class EditServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.server.id,
            server_name: this.props.server.server_name,
            server_owner_id: this.props.server.server_owner_id,
            public: this.props.server.public,
            serverEditNameForm: false,
            deleteServerForm: false,
        }

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this);
        this.leaveServer= this.leaveServer.bind(this)

    }

    //ensure changes have been made
    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.setState({
                id: this.props.server.id,
                server_name: this.props.server.server_name,
                server_owner_id: this.props.server.server_owner_id,
                public: this.props.server.public,
            })
        }
    }



    openModal(field){
        this.setState({[field]: true})
    }

    closeModal(field){
        this.setState({[field]: false})
    }

    //to be used by non-owners of a server 
    leaveServer(serverMembership){  
            this.props.deleteServerMemberShip(serverMembership);
            this.props.history.push('/channels/@me'); //return user to their dashbioard page
    }


    callServerDeleteForm(){
        if(this.state.deleteServerForm){
            return(
              <div id="server-modal-container">
                <div id ="server-edit-modal" onClick={() => this.closeModal("deleteServerForm")}> </div>
                <DeleteServerFormContainer
                  server = {this.props.server}
                  deleteServer = {this.props.deleteServer}
                />
              </div>
            )
          } 
          else {
            return null;
          }
    }
            //you can only edit the name and visibility to the public of a server 
    callServerEditForm(){
        if(this.state.serverEditNameForm){
            return (
              <div id="server-modal-container">
                <div id="server-edit-modal" onClick={() => this.closeModal("serverEditNameForm")}> </div> 
                <EditServerNameFormContainer
                server = {this.props.server}
                />
            </div>
            )
          } 
          
          else {
            return null;
          }
    }




    render() {

        if(this.props.show !==true){
          return null
        }

        return (

          


            <div>

            </div>
        )
    }
}

export default EditServerForm;