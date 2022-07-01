import React from "react";



class EditServerNameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= this.props.server;
        this.handleSubmit = this.handleSubmit.bind(this)
        this.cancel_changes = false;
        this.serverNameErrors = this.serverNameErrors.bind(this);
    }

    componentWillUnmount(){
        this.props.removeServerErrors();
    }


    handleSubmit(e){
        e.preventDefault();
        if(this.cancel_changes){
            return;
        }
       this.props.updateServerName(this.state);
      }

      handleInput(field){
        return (e)=> {this.setState({[field]: e.currentTarget.value})}
      }

      serverNameErrors(){
        if(this.props.errors.includes("server_name can't be blank") ){
                return " - cannot be blank!";
        }
        else if ( this.props.errors.includes('You already have a server with that name already')){
                return " - already exists";
        }
        return "";
      }


    render() {
        let cancel_changes_button = <button id="cancel-form" type="submit" onClick={()=> this.cancel_changes=true}>Cancel</button>
        let delete_ServerButton =  <button id="deleteServerButton" type="submit">Delete Server </button>

        //server name error 
        // let serverName  = this.props.errors.includes("Name can't be blank") ? message: 'You already have a server with that name already'}

        let serverNameErrorTag = this.props.errors.includes("server_name can't be blank") || 
        this.props.errors.includes('You already have a server with that name already') ? "login-error" : "";
        
        
        
        const servername =
        (<div className="field">
        <label id="servername-label" className={serverNameErrorTag}>SERVER NAME {this.serverNameErrors()}</label>
        <input id="channel-form-server-name-input" type="text" value={this.state.server_name} onChange={this.handleInput('server_name')} />
    </div>);

        return (
            <div id="server-form">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div id="channel-top"> 
            <div id ="channel-header"> 
              <h5>Edit Server</h5>
            </div>
          
                    {servername}
          </div>
          <div id="channel-bottom"> 
            <button type="submit" id="channel-servername-edit-submit"> Update Server Name </button>
            {cancel_changes_button}
          </div>
          <button id="server-name-exit" onClick={() => this.cancel_changes = true}><i className="fa-solid fa-xmark"/></button>
        </form>
      </div>
        )
    }
}

export default EditServerNameForm;