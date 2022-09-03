import React from "react";
import ReactTooltip from "react-tooltip";
import DmServerHeaderNavBarContainer from "../dm_server_header_nav_bar/dm_server_header_nav_bar_container";
import DmServerMemberListContainer from "../dm_server_members/dm_server_list_container";

class DmMessages extends React.Component {
    constructor (props) {
        super(props);
        this.renderDmMemberContainer = this.renderDmMemberContainer.bind(this);
    }
    componentDidMount () {
        this.props.fetchDmServer(this.props.dmServerId);
    }

    renderDmMemberContainer () {
        if (Object.values(this.props.dmServerMembers).length > 2) {
            return (
                <DmServerMemberListContainer dmServerMembers={this.props.dmServerMembers} />
            )
        }
    }

    render () {
        console.log("dmserver messages props", this.props);
        // console.log("dmservers: ", this.props.dmServers);
        console.log(this.props.dmServer);

        return (
            <div className="dm-server-container">

                <DmServerHeaderNavBarContainer dmServerMembers={this.props.dmServerMembers} />

                {/* <DmServerMemberListContainer/> */}
                {/* {this.renderDmMemberContainer()} */}

                {/* <div className="dm-messages-container"> */}
                <div className="dm-server-content-container">
                    {this.renderDmMemberContainer()}
                </div> 
                {/* <div className="empty-messages-container is-hidden"></div> */}
            </div>
        )




    }
}

export default DmMessages;