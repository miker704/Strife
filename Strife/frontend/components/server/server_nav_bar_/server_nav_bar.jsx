import React from "react";

class ServerNavBar extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        this.props.fetchUserServers(this.props.currentUser.id);
        // this.props.fetchAllServers(); 
    }

    render() {


        console.log(this.props.servers);
        console.log(this.props.serverId);

        let userServer = this.props.servers.map((server, serverIndex) => {
            return (
                <li className="server-bubbles" key={serverIndex}>

                    <span>
                        <p>{serverIndex}{": {{ server id : "} {server.id} {"} "}
                            {"{ server_owner_id : "} {server.server_owner_id} {"} "}
                            {"{ server name : "} {server.server_name} {"} "}
                            {"{ server icon : "} {server.server_icon} {"} "}
                            {"{ server public status : "} {server.public} {"} "}
                            {"{ server invite code : "} {server.invite_code} {"}} "}

                        </p>

                    </span>
                </li>
            )
        }
        )

        let homeButton = this.props.serverId === "@me" ? "selected-Server" : "unselected-Server";



        return (
            <div className="server-nav-bar">
                <ul className="server-nav-bar-list">  
                <li key="homeBubbles" className="server-bubbles">
                    <div>
                        
                    </div>
                
                </li>            
                    {userServer}
                
                </ul>
              
            </div>
        )
    }
}

export default ServerNavBar;