import { connect } from "react-redux";
import { withRouter } from "react-router";
import { closeModal } from "../../../actions/modal_actions.js";
import ActionButtonPopUp from "./action_button_pop_up.jsx";

const mSTP = (state, ownProps) => {
    return {
        serverLink : ownProps.serverLink
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        closeModal: () => dispatch(closeModal()),
    }
}

const ActionButtonPopUpContainer = withRouter(connect(mSTP, mDTP)(ActionButtonPopUp));
export default ActionButtonPopUpContainer;














