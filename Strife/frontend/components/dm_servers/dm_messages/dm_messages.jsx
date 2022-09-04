import React from "react";
import ReactTooltip from "react-tooltip";

class DmMessages extends React.Component {
    constructor (props) {
        super(props);
        this.renderDmMemberContainer = this.renderDmMemberContainer.bind(this);
    }
    componentDidMount () {
        this.props.fetchDmServer(this.props.dmServerId);
    }



    render () {
        console.log("dmserver messages props", this.props);
        // console.log("dmservers: ", this.props.dmServers);
        console.log(this.props.dmServer);

        return (

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
        )

    }
}

export default DmMessages;