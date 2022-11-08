import { connect } from "react-redux";
import { withRouter } from "react-router";
import STRIFE_VOICE_CALL_API from "./voice_call";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.currentUser,
        currentUserId: state.session.id
    }
}


const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}


const STRIFE_VOICE_CALL_API_CONTAINER = withRouter(connect(mSTP, mDTP)(STRIFE_VOICE_CALL_API));
export default STRIFE_VOICE_CALL_API_CONTAINER; 