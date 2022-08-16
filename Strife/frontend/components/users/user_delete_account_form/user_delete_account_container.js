import { connect } from "react-redux";
import { withRouter } from "react-router";

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session
    }
};

const mDTP = (dispatch) => {
    return {
        updateUserInfo : (user) => {dispatch(updateUserInfo(user))},
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        handleESC : (e) => handleKeyUp(e)
    }
};

const EditUserEmailContainer = withRouter(connect(mSTP,mDTP)(EditUserEmailForm))
export default EditUserEmailContainer;