import { connect } from "react-redux";
import { withRouter } from "react-router";
import { removeChannelErrors } from "../../../actions/channel_actions.js";
import { removeServerErrors, changeServerInviteSplash } from "../../../actions/server_actions.js";
import ServerInviteSplashBannerModal from "./server_invite_splash_banner_modal.jsx";

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
        changeServerInviteSplash: (serverId, formData) => dispatch(changeServerInviteSplash(serverId, formData)),
        removeServerErrors: () => dispatch(removeServerErrors()),
        //channel api functions
        removeChannelErrors: () => dispatch(removeChannelErrors()),
    }
}
const ServerInviteSplashBannerModalContainer = withRouter(connect(mSTP, mDTP)(ServerInviteSplashBannerModal));
export default ServerInviteSplashBannerModalContainer;