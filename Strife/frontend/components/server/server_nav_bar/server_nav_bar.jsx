import React from "react";
import { Link } from 'react-router-dom';
class ServerNavBar extends React.Component {
    constructor(props) {
        super(props);

        this.splitServerName = this.splitServerName.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserServers(this.props.currentUser.id);
        // this.props.fetchAllServers(); 
    }

    splitServerName(serverName,serverIcon){
        //if the server owner has given a server icon to there server set the servericon url to fill the 
        //bubble instead of the name of the server
            const serverNameAcronym = serverIcon ? serverIcon : serverName.split(" ").map((parts) => parts[0]).join("");
            
            return serverNameAcronym;
        }

    render() {


        console.log(this.props.servers);
        console.log(this.props.serverId);

        let userServer = this.props.servers.map((server, serverIndex) => {
            let serverNavBarClassTag = this.props.serverId === server.id.toString() ? "selected-Server" : "unselected-Server";
            return (
                <li className="server-bubbles" key={serverIndex}>
                    <div className="server-nav-bar-a">
                        <Link to={`/channels/${server.id}/${server.general_channelId}`}
                            onClick={() => this.props.fetchServer(server.id)} className={serverNavBarClassTag}>
                            {/* <p className="server-name-initials">{server.server_name.charAt(0)}</p> */}
                            <p className="server-name-initials">{this.splitServerName(server.server_name,server.server_icon)}</p>

                        </Link>
                        {/* <span> */}
                        {/* <p>{serverIndex}{": {{ server id : "} {server.id} {"} "} */}
                        {/* {"{ server_owner_id : "} {server.server_owner_id} {"} "} */}
                        {/* {"{ server name : "} {server.server_name} {"} "} */}
                        {/* {"{ server icon : "} {server.server_icon} {"} "} */}
                        {/* {"{ server public status : "} {server.public} {"} "} */}
                        {/* {"{ server invite code : "} {server.invite_code} {"}} "} */}
                        
                        {/* </p> */}
                     
                        {/* </span> */}
                    </div>
                    <div className="server-nav-bar-tool-kit">{server.server_name}</div>
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
                                <i className="fa-brands fa-discord home-Bubbles" />
                            </Link>
                        </div>
                        <div className="server-nav-bar-tool-kit">HOME</div>
                    </li>

                    <div className="server-bubble-seperator-container">
                        <div className="server-bubble-seperator"></div>
                    </div>
                    {userServer}

                    <li className="server-bubbles" key="createServer">
                        <div className="server-nav-bar-a">
                            <button id="create-server"></button>
                        </div>
                    </li>



                </ul>

            </div>
        )
    }
}

export default ServerNavBar;