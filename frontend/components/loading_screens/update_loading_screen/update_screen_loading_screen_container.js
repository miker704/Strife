import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchDmServers } from "../../../actions/dm_server_actions";
import { fetchServers } from "../../../actions/server_actions";
import { fetchUser } from "../../../actions/session_actions";
import { receiveStrifeB0t } from "../../../actions/session_actions";
import { closeModal } from "../../../actions/modal_actions";
import UpdateLoadingScreen from "./update_screen_loading_screen";

const mSTP = (state) => {
    return {
        currentUserId: state.session.id,
        selectedLoadingMsg: "Updating $TR!F3 ...",
        ui_modal: state.ui.modal,
    }
}


const mDTP = (dispatch) => {
    return {
        fetchUsersServers: (currentUserId) => dispatch(fetchServers(currentUserId)),
        fetchUsersDmServers: (currentUserId) => dispatch(fetchDmServers(currentUserId)),
        fetchUser: (currentUserId) => dispatch(fetchUser(currentUserId)),
        receiveStrifeB0t: () => dispatch(receiveStrifeB0t()),
        closeModal: () => dispatch(closeModal()),

    }
}



const UpdateLoadingScreenContainer = withRouter(connect(mSTP, mDTP)(UpdateLoadingScreen));
export default UpdateLoadingScreenContainer;