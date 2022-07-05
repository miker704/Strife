import React from "react";
import EditServerFormContainer from "../../server/server_form/edit_server_form_container.js";
import CreateChannelFormContainer from "../channel_forms/create_channel_form_container.js";
import EditChannelFormContainer from "../channel_forms/edit_channel_form_container.js";
import { Link } from "react-router-dom";

class ChannelNavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noShow: true,
            channelCreate: false,
            channelEdit: false,
            channelId: null,
        }
        this.toggleEdits = this.toggleEdits.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleServerEdit = this.handleServerEdit.bind(this);
        this.mounted = false;
    }




    render() {
    }


}

export default ChannelNavBar;