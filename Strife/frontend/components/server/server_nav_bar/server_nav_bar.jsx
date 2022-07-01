import React from "react"
import { Link } from "react-router-dom"

import CreateServerFormContainer from "../server_form/create_server_form_container";


class ServerNavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            create: false
        }
        
    }
    componentDidMount(){
        this.props.fetchUsersServers(this.props.currentUser.id);
      }
    render(){

        return (
            <div>

            </div>
        )
    }

}
export default ServerNavBar;