import React from "react";
import {Link} from  'react-router-dom';
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

        let goHome = this.props.serverId === "@me" ? "selected-Server" : "unselected-Server";



        return (
            <div className="server-nav-bar">
                <ul className="server-nav-bar-list">  
                <li key="home-Bubbles" className="server-bubbles">
                    <div className="server-nav-bar-a">
                        <Link className={goHome} to={`/channels/@me`}>
                            <i className="fa-brands fa-discord home-Bubbles"/>
                        </Link>
                    </div>
                    <div className="server-nav-bar-tool-kit">HOME</div>
                </li>     

                <div className="server-bubble-seperator-container">
                    <div className="server-bubble-seperator"></div>    
                </div>       
                    {/* {userServer} */}
                
                </ul>
              
            </div>
        )
    }
}

export default ServerNavBar;