import React from "react";
import ReactTooltip from "react-tooltip";
import DmServerHeaderNavBarContainer from "../dm_server_header_nav_bar/dm_server_header_nav_bar_container";
import DmServerMemberListContainer from "../dm_server_members/dm_server_list_container";

class DmServer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hideMembersList: false
        }
        this.renderDmMemberContainer = this.renderDmMemberContainer.bind(this);
        this.setHideMembersList = this.setHideMembersList.bind(this);

    }
    componentDidMount () {
        this.props.fetchDmServer(this.props.dmServerId);
    }

    setHideMembersList () {
        this.setState({ hideMembersList: false });
    }


    renderDmMemberContainer () {
        if (Object.values(this.props.dmServerMembers).length > 2) {
            return (
                <DmServerMemberListContainer dmServerMembers={this.props.dmServerMembers} />
            )
        }
    }

    render () {
        console.log("dmserver props", this.props);
        console.log(this.props.dmServer);

        return (
            <div className="dm-server-container">

                <DmServerHeaderNavBarContainer dmServerMembers={this.props.dmServerMembers} />


                <div className="dm-server-content-container">
                    <div className="dm-messages-container-wrapper">
                        <p>vdfrdgrsdgwre</p>
                        <p>vdfrdgrsdgwre</p>
                        <p>vdfrdgrsdgwre</p>
                        <p>vdfrdgrsdgwre</p>
                        <p>vdfrdgrsdgwre</p>
                        <p>vdfrdgrsdgwre</p>
                        <p>vdfrdgrsdgwre</p>
                        <p>vdfrdgrsdgwre</p>
                        <p>vdfrdgrsdgwre</p>
                    </div>

                    {/* insert dmmesages contianer here */}
                    {this.renderDmMemberContainer()}
                </div>
                {/* <div className="empty-messages-container is-hidden"></div> */}
            </div>
        )




    }
}

export default DmServer;