import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchDmServers } from "../../../actions/dm_server_actions";
import { fetchServers } from "../../../actions/server_actions";
import { fetchUser } from "../../../actions/session_actions";
import { closeModal } from "../../../actions/modal_actions";
import IntrusionPreventionLoadingScreen from "./instrusion_loading_screen";


const mSTP = (state) => {
    return {
        currentUserId: state.session.id,
        selectedLoadingMsg: "$TR!F3 Intrusion Prevention System - Warning You are Not Authorized to access this Server!",
        ui_modal: state.ui.modal,
    }
}


const mDTP = (dispatch) => {
    return {
        fetchUsersServers: (currentUserId) => dispatch(fetchServers(currentUserId)),
        fetchUsersDmServers: (currentUserId) => dispatch(fetchDmServers(currentUserId)),
        fetchUser: (currentUserId) => dispatch(fetchUser(currentUserId)),
        closeModal: () => dispatch(closeModal()),

    }
}



const IntrusionPreventionLoadingScreenContainer = withRouter(connect(mSTP, mDTP)(IntrusionPreventionLoadingScreen));
export default IntrusionPreventionLoadingScreenContainer;