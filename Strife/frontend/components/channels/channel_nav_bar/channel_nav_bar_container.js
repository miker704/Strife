import { withRouter } from "react-router";
import { connect } from "react-redux";
import ChannelNavBar from "./channel_nav_bar";
import { fetchChannel } from "../../../actions/channel_actions";

const mSTP = (state) => {

    return {
        currentUser: state.entities.users[state.session.id],
        server: state.entities.servers[ownProps.match.params.serverId],
        channels: Object.values(state.entities.channels),
        currentChannelId: ownProps.match.params.channelId,
        errors: state.errors.channel,
        serverErrors: state.errors.server

    }
};


const mDTP = (dispatch) => {
    return {
        fetchChannel: (channelId) => { dispatch(fetchChannel(channelId)) },
    }
}


const ChannelNavBarContainer = withRouter(connect(mSTP, mDTP)(ChannelNavBar));

export default ChannelNavBarContainer;