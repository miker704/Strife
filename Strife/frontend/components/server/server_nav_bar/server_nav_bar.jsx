import React from "react";
import { Link } from 'react-router-dom';
class ServerNavBar extends React.Component {
    constructor (props) {
        super(props);

        this.splitServerName = this.splitServerName.bind(this);
        this.renderModal = this.renderModal.bind(this);
    }

    componentDidMount () {
        this.props.fetchUserServers(this.props.currentUser.id);

    }


    renderModal (modalName) {

        this.props.openModal(modalName);
    }


    splitServerName (serverName, serverIcon) {
        //if the server owner has given a server icon to there server set the servericon url to fill the 
        //bubble instead of the name of the server
        const serverNameAcronym = serverIcon ? serverIcon : serverName.split(" ").map((parts) => parts[0]).join("");

        return serverNameAcronym;
    }

    render () {

        let goHome = this.props.serverId === "@me" ? "selected-Server" : "unselected-Server";
        console.log("server currentUser props: ", this.props.currentUser);
        console.log("server navbar props: ", this.props);
        console.log("server navbar serverid: ", this.props.serverId);

        console.log("server navbar gohome: ", goHome);

        console.log(this.props.servers);
        console.log(this.props.serverId);

        let userServer = this.props.servers.map((server, serverIndex) => {
            let serverNavBarClassTag = this.props.serverId === server.id.toString() ? "selected-Server" : "unselected-Server";
            return (
                // <li className="server-bubbles" key={serverIndex}>
                // <li className="server-bubbles" key={serverIndex}>
                <li className="server-bubbles" key={server.id}>
                    <div className="server-nav-bar-a">
                        <Link to={`/channels/${server.id}/${server.general_channel_id}`}

                            onClick={() => this.props.fetchServer(server.id)}
                            className={serverNavBarClassTag}>
                            {/* <p className="server-name-initials">{server.server_name.charAt(0)}</p> */}
                            <p className="server-name-initials">{this.splitServerName(server.server_name, server.server_icon)}</p>

                        </Link>
                        {/* <span> */}
                        {/* <p>{serverIndex}{": {{ server id : "} {server.id} {"} "} */}
                        {/* {"{ server_owner_id : "} {server.server_owner_id} {"} "} */}
                        {/* {"{ server name : "} {server.server_name} {"} "} */}
                        {/* {"{ server icon : "} {server.server_icon} {"} "} */}
                        {/* {"{ server public status : "} {server.public} {"} "} */}
                        {/* {"{ server invite code : "} {server.invite_code} {"}} "} */}

                        {/* <p>{`/channels/${server.id}/${server.general_channel_id}`}</p> */}
                        {/* </p> */}

                        {/* </span> */}
                    </div>
                    <div className="server-nav-bar-tool-kit">{server.server_name}</div>
                </li>
            )
        }
        )


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
                            {/* <button id="create-server" onClick={() => this.props.openModal('createServerForm')}> */}
                            <button id="create-server" onClick={() => this.renderModal('createServerForm')}>

                                <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z">
                                    </path>
                                </svg>

                            </button>
                        </div>
                        <div className="server-nav-bar-tool-kit">Add a Server</div>
                    </li>
                    <li className="server-bubbles" key="serverSearch">
                        <div className="server-nav-bar-a">
                            <button id="search-servers" onClick={() => this.props.openModal('serverSearch')}>
                                {/* <i className="fa-solid fa-compass" /> */}
                                <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 
                                                                13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 
                                                                2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 
                                                                2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div className="server-nav-bar-tool-kit">Explore Public Servers</div>
                    </li>

                    {/* <li> */}
                    <div className="bottom-server-bubble-seperator-container">
                        <div className="bottom-server-bubble-seperator"></div>
                    </div>
                    {/* </li> */}


                    <li className="server-bubbles" key="downloadApps">
                        {/* <div className="bottom-server-bubble-seperator-container">
                            <div className="server-bubble-seperator"></div>
                        </div> */}

                        <div className="server-nav-bar-a">
                            <button id="download-apps" onClick={() => this.props.openModal('downloadApps')} >
                                {/* onClick={() => this.props.openModal('downloadApps')} */}
                                <svg fill="currentColor" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 
                                         12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 
                                         20V18H6V20H18Z">
                                    </path>
                                </svg>

                            </button>
                        </div>
                        <div className="server-nav-bar-tool-kit">Download Apps</div>
                    </li>

                </ul>

            </div>
        )
    }
}

export default ServerNavBar;