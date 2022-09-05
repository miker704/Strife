import React from "react";

class ServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.server.id,
            server_name: `${this.props.server.server_name}`,
            server_owner_id: this.props.server.server_owner_id,
            public: this.props.server.public,


        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.public_or_private = this.public_or_private.bind(this);
        this.serverNameErrors = this.serverNameErrors.bind(this);

    }
    componentWillUnmount() {
        this.props.removeErrors();
    }


    handleSubmit(e) {
        e.preventDefault();
        let that = this;
        // Create new Server and then push to the new server's first/general channel
        this.props.action(this.state).then((action) => {
            let server = action.server.server
            this.props.history.push(`/servers/${server.id}/${server.firstChannelId}`);
        })
    }


    public_or_private(value, field) {
        e.preventDefault();
        return (e) => { this.setState({ [field]: value }) }
    }

    serverNameErrors() {
        if (this.props.errors.includes("server_name can't be blank")) {
            return " - cannot be blank!";
        }
        else if (this.props.errors.includes('You already have a server with that name already')) {
            return " - already exists";
        }
        return "";
    }


    render() {


        let serverNameErrorTag = this.props.errors.includes("server_name can't be blank") ||
            this.props.errors.includes('You already have a server with that name already') ? "login-error" : "";

        let submitButton = this.state.public === true ? <button id='create-server' type="submit">
            Create A <span id="public-status"> Public </span> Server</button> :
            <button id='create-server' type="submit">
                Create A <span id="public-status"> Private</span> Server</button>

        const servername =
            (<div className="field">
                <label id="servername-label" className={serverNameErrorTag}>SERVER NAME {this.serverNameErrors()}</label>
                <input id="channel-form-server-name-input" type="text" value={this.state.server_name} onChange={this.handleInput('server_name')} />
            </div>);

        // make the background of the icon of the server be different based on it being a public or private server
        let privateServer = this.state.public ? "not-selected" : "selected"
        let publicServer = this.state.public ? "selected" : "not-selected"

        // call to render the create server modal  if it was clicked on or not else return nothing 

        if (this.props.show) {
            return (
                <div id="server-form">

                    <form onSubmit={this.handleSubmit}>
                        
                        <h4> Tell Us More About Your Server </h4>
                        <p id="server-form-message">
                            In order to help you with your setup, is your new server for just a few friends or a larger
                            community? </p>
                        <div id="new-Server-info">
                            <div onClick={this.handlePublic(true, "public")}className={publicServer}>
                                <img id="public-server-svg" />
                                <p className='public-info-p'> For a club or community </p>
                            </div>

                            <div onClick={this.handlePublic(false, "public")} className={privateServer}>
                                <img id="private-server-svg" />
                                <p className='public-info-p'>For me and my friends</p>
                            </div>
                        </div>

                        {servername}
                        {submitButton}

                    </form>






                </div>
            )
        }
        //not click do nothing 
        else {
            return null;
        }

    }
}

export default ServerForm;