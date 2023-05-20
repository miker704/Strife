import { connect } from "react-redux";
import { withRouter } from "react-router";
import { openModal, openModalWithProps } from "../../../actions/modal_actions.js";
import ChannelDropDown from "./channel_drop_down.jsx";

const mSTP = (state, ownProps) => {
    return {
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        server: state.entities.servers[ownProps.match.params.serverId],
        channels: Object.values(state.entities.channels),
        currentChannelId: ownProps.match.params.channelId,
        currentChannel: state.entities.channels[ownProps.match.params.channelId],
        serverId: ownProps.match.params.serverId,
        errors: state.errors.server,
        channelErrors: state.errors.channel
    }

}

const mDTP = (dispatch) => {
    return {
      
        // modal api functions
        openModal: modal => dispatch(openModal(modal)),
        openModalWithProps: (modal_with_props) => dispatch(openModalWithProps(modal_with_props))
    }
}

const ChannelDropDownContainer = withRouter(connect(mSTP, mDTP)(ChannelDropDown));
export default ChannelDropDownContainer;