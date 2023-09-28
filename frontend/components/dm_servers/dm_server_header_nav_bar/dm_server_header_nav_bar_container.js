import DmServerHeaderNavBar from "./dm_server_header_nav_bar";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { removeDmMessageErrors, } from "../../../actions/dm_messages_actions";
import { removeDmServerErrors, updateDmServer, fetchDmServer, updateDmServerName } from "../../../actions/dm_server_actions";
import { selectDmMembers, extractDmServerProps } from "../../../utils/selectors_api_util.js";
import { openModal, openModalWithProps } from "../../../actions/modal_actions";


const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.dmServer,
        dmMessageErrors: state.errors.dmMessage,
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        // dmServer: state.entities.dmServers[ownProps.match.params.dmServerId],
        dmServer: extractDmServerProps(state, ownProps.match.params.dmServerId),

        dmServerId: ownProps.match.params.dmServerId,
        dmServerMembers: selectDmMembers(state, ownProps.match.params.dmServerId),
        users: Object.values(state.entities.users),
    }

}

const mDTP = (dispatch, ownProps) => {
    return {
        fetchDmServer: () => dispatch(fetchDmServer(ownProps.match.params.dmServerId)),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        removeDmMessageErrors: () => dispatch(removeDmMessageErrors()),
        updateDmServer: (dmServerId, dmServer) => dispatch(updateDmServer(dmServerId, dmServer)),
        updateDmServerName: (dmServerId, dmServer) => dispatch(updateDmServerName(dmServerId, dmServer)),
        openModal: (modal) => dispatch(openModal(modal)),
        openModalWithProps: (modal_Props) => dispatch(openModalWithProps(modal_Props)),
    }
}

const DmServerHeaderNavBarContainer = withRouter(connect(mSTP, mDTP)(DmServerHeaderNavBar));
export default DmServerHeaderNavBarContainer;