import DmServerHeaderNavBar from "./dm_server_header_nav_bar";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { removeDmMessageErrors } from "../../../actions/dm_messages_actions";
import { removeDmServerErrors } from "../../../actions/dm_server_actions";

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.dmServer,
        dmMessageErrors: state.errors.dmMessage,
        currentUser: state.entities.users[state.session.id],

    }

}

const mDTP = (state, ownProps) => {
    return {
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        removeDmMessageErrors: () => dispatch(removeDmMessageErrors())
    }
}

const DmServerHeaderNavBarContainer = withRouter(connect(mSTP, mDTP)(DmServerHeaderNavBar));
export default DmServerHeaderNavBarContainer;