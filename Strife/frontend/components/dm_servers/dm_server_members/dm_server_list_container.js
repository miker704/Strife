import { connect } from "react-redux";
import { withRouter } from "react-router";
import DmServerMemberList from "./dm_server_list";
import { selectDmMembers } from "../../../utils/selectors_api_util.js";
import { fetchDmServer } from "../../../actions/dm_server_actions.js";

const mSTP = (state, ownProps) => {
    return {
        dmServerId: ownProps.match.params.dmServerId,
        dmServerMembers: selectDmMembers(state,ownProps.match.params.dmServerId),
        errors : state.errors.dmServer,
        dmServer: state.entities.dmServers[ownProps.match.params.dmServerId],
        currentUser: state.entities.users[state.session.id],

    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        fetchDmServer: () => dispatch(fetchDmServer(ownProps.match.params.dmServerId)),

    }
}

const DmServerMemberListContainer = withRouter(connect(mSTP, mDTP)(DmServerMemberList));
export default DmServerMemberListContainer;
