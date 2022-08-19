import { withRouter } from "react-router";
import { connect } from "react-redux";
import ChannelNavBar from "./channel_nav_bar";

const mSTP = (state) => {

    return {

    }
};


const mDTP = (dispatch) => {
    return {
        fetchChannel: (channelId) => { dispatch(fetchChannel(channelId)) },
    }
}


const ChannelNavBarContainer = withRouter(connect(mSTP, mDTP)(ChannelNavBar));

export default ChannelNavBarContainer;