import { connect } from "react-redux";
import { withRouter } from "react-router";
import { removeChannelErrors } from "../../../actions/channel_actions.js";
import { removeServerErrors, changeServerBanner } from "../../../actions/server_actions.js";
import ServerBannerModal from "./server_banner_modal.jsx";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.currentUser,
        server: ownProps.server,
        serverId: ownProps.server.id,
        errors: state.errors.server,
        channelErrors: state.errors.channel,
        servers: state.entities.servers
    }
}


const mDTP = (dispatch, ownProps) => {
    return {
        //server api functions
        changeServerBanner: (serverId, formData) => dispatch(changeServerBanner(serverId, formData)),
        removeServerErrors: () => dispatch(removeServerErrors()),
        //channel api functions
        removeChannelErrors: () => dispatch(removeChannelErrors()),
    }
}
const ServerBannerModalContainer = withRouter(connect(mSTP, mDTP)(ServerBannerModal));
export default ServerBannerModalContainer;