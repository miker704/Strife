import { connect } from "react-redux";
import { withRouter } from "react-router";
import DmServerMemberList from "./dm_server_list";


const mSTP = (state, ownProps) => {
    return {

        dmMembers: state.entities.dmServers[ownProps.match.params.dmServerId].members
    }
}

const mDTP = (dispatch, ownProps) => {
    return {

    }
}

const DmServerMemberListContainer = withRouter(connect(mSTP, mDTP)(DmServerMemberList));
export default DmServerMemberListContainer;
