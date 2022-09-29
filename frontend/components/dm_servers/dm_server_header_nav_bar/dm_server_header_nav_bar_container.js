import DmServerHeaderNavBar from "./dm_server_header_nav_bar";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { removeDmMessageErrors, } from "../../../actions/dm_messages_actions";
import { removeDmServerErrors, updateDmServer, fetchDmServer } from "../../../actions/dm_server_actions";
import { selectDmMembers, extractDmServerProps } from "../../../utils/selectors_api_util.js";

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.dmServer,
        dmMessageErrors: state.errors.dmMessage,
        currentUser: state.entities.users[state.session.id],
        // dmServer: state.entities.dmServers[ownProps.match.params.dmServerId],
        dmServer: extractDmServerProps(state,ownProps.match.params.dmServerId),

        dmServerId: ownProps.match.params.dmServerId,
        dmServerMembers: selectDmMembers(state,ownProps.match.params.dmServerId),
    }

}

const mDTP = (dispatch,ownProps) => {
    return {
        fetchDmServer: () => dispatch(fetchDmServer(ownProps.match.params.dmServerId)),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        removeDmMessageErrors: () => dispatch(removeDmMessageErrors()),
        updateDmServer: (dmServerId, dmServer) => dispatch(updateDmServer(dmServerId, dmServer))
    }
}

const DmServerHeaderNavBarContainer = withRouter(connect(mSTP, mDTP)(DmServerHeaderNavBar));
export default DmServerHeaderNavBarContainer;