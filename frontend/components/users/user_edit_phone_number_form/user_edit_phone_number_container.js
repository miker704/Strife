import { connect } from "react-redux";
import { withRouter } from "react-router";
import { handleKeyUp } from "../../../utils/modal_api_util";
import EditUserPhoneNumberForm from "./user_edit_phone_number_form";
import { updateUserInfo, removeSessionErrors } from "../../../actions/session_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";


const mSTP = (state) => {
    return {

        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        errors: state.errors.session
    }
};

const mDTP = (dispatch) => {
    return {
        updateUserInfo: (user) => dispatch(updateUserInfo(user)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        handleESC: (e) => handleKeyUp(e)
    }
};

const EditUserPhoneNumberContainer = withRouter(connect(mSTP, mDTP)(EditUserPhoneNumberForm))
export default EditUserPhoneNumberContainer;