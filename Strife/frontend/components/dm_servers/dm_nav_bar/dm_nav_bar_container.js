import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchDmServers, updateDmServer, removeDmServerErrors, fetchDmServer } from "../../../actions/dm_server_actions";
import { openModal } from "../../../actions/modal_actions";
import DmNavBar from "./dm_nav_bar";

const mSTP = (state, ownProps) => {

    return {
        currentUser: state.entities.users[state.session.id],
        dmUsers: Object.values(state.entities.users),
        dmServers: Object.values(state.entities.dmServers),
        dmServerId: ownProps.match.params.dmServerId,
        errors: state.errors.dmServers
    }
};


const mDTP = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        fetchUserDmServers: (userId) => dispatch(fetchDmServers(userId)),
        updateDmServer: (dmserverId,dmserver) => dispatch(updateDmServer(dmserverId,dmserver)),
        fetchDmServer: (dmserverId) => dispatch(fetchDmServer(dmserverId)),
        removeDmServerErrors: () => dispatch(removeDmServerErrors())
    }
}


const DMNavBarContainer = withRouter(connect(mSTP, mDTP)(DmNavBar));

export default DMNavBarContainer;