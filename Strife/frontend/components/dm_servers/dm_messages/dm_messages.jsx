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
                <DmServerMemberListContainer />
            )
        }
    }

    render () {
        console.log("dmserver messages props", this.props);
        // console.log("dmservers: ", this.props.dmServers);
        console.log(this.props.dmServer);

        return (
            <div className="dm-messages-wrapper">


                <DmServerHeaderNavBarContainer dmServerMembers={this.props.dmServerMembers} />

                {/* <DmServerMemberListContainer/> */}
                {/* {this.renderDmMemberContainer()} */}

                <div className="empty-messages-container is-hidden"></div>
                <div className="dm-messages-container">
                    <ul>
                        {
                            Object.values(this.props.dmServerMembers).map((dmMember, dmMemberIdx) => {
                                return (
                                    <li key={dmMember.id}>{dmMember.username}</li>)
                            })
                        }


                    </ul>

                    {this.renderDmMemberContainer()}

                </div>
            </div>
        )




    }
}

export default DmMessages;