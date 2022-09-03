import React from "react";
import ReactTooltip from "react-tooltip";
import DmServerHeaderNavBarContainer from "../dm_server_header_nav_bar/dm_server_header_nav_bar_container";
import DmServerMemberListContainer from "../dm_server_members/dm_server_list_container";

class DmMessages extends React.Component {
    constructor (props) {
        super(props);
    }
    componentDidMount () {
        this.props.fetchDmServer(this.props.dmServerId);
    }
    render () {
        console.log("dmserver messages props", this.props);
        // console.log("dmservers: ", this.props.dmServers);
        console.log(this.props.dmServer);

        return (
            <div className="dm-messages-wrapper">
                
              
                <DmServerHeaderNavBarContainer dmServerMembers={this.props.dmServerMembers}  />
                    <DmServerMemberListContainer/>
                

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


                </div>
            </div>
        )

        


    }
}

export default DmMessages;