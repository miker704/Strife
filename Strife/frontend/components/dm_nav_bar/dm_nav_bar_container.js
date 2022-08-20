import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchDmServers } from "../../actions/dm_server_actions";
import DmNavBar from "./dm_nav_bar";

const mSTP = (state, ownProps) => {

    return {
        currentUser: state.entities.users[state.session.id],
        dmUsers: Object.values(state.entities.users),
        otherUserId: ownProps.match.params.otherUserId
    }
};


const mDTP = (dispatch) => {
    return {

        fetchUserDmServers: (userId) => dispatch(fetchDmServers(userId))

    }
}


const DMNavBarContainer = withRouter(connect(mSTP, mDTP)(DmNavBar));

export default DMNavBarContainer;