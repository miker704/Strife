import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchDmServers, updateDmServer, removeDmServerErrors, fetchDmServer, removeDmServer } from "../../../actions/dm_server_actions";
import { openModal, openModalWithProps } from "../../../actions/modal_actions";
import { reSyncCurrentUser } from "../../../actions/session_actions";
import DmNavBar from "./dm_nav_bar";

const mSTP = (state, ownProps) => {

    return {
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        currentUserId: state.session.id,
        dmServers: Object.values(state.entities.dmServers),
        dmServerId: ownProps.match.params.dmServerId,
        errors: state.errors.dmServer
    }
};


const mDTP = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        openModalWithProps:(modal_Props) => dispatch(openModalWithProps(modal_Props)),
        fetchUserDmServers: (userId) => dispatch(fetchDmServers(userId)),
        updateDmServer: (dmserverId,dmserver) => dispatch(updateDmServer(dmserverId,dmserver)),
        fetchDmServer: (dmserverId) => dispatch(fetchDmServer(dmserverId)),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        reSyncCurrentUser:(currentUserId) => dispatch(reSyncCurrentUser(currentUserId)),
        removeDmServer: (dmServerId) => dispatch(removeDmServer(dmServerId))
    }
}


const DMNavBarContainer = withRouter(connect(mSTP, mDTP)(DmNavBar));
export default DMNavBarContainer;