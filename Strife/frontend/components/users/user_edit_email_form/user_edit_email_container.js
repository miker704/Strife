import { connect } from "react-redux";
import { withRouter } from "react-router";
import { handleKeyUp } from "../../../utils/modal_api_util";
import EditUserEmailForm from "./user_edit_email_form";
import { openModal, closeModal } from "../../../actions/modal_actions";
import { updateUserInfo, removeSessionErrors } from "../../../actions/session_actions";


const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session
    }
};

const mDTP = (dispatch) => {
    return {

    }
};

const EditUserEmailContainer = withRouter(connect(mSTP,mDTP)(EditUserEmailForm))
export default EditUserEmailContainer;