import { withRouter } from "react-router";
import { connect } from "react-redux";
import { handleKeyUp } from "../../../utils/modal_api_util";
import EditUserPFP from "./user_edit_pfp_form";
import { closeModal, openModal } from "../../../actions/modal_actions";
import { removeSessionErrors, updateUserInfo } from "../../../actions/session_actions";



const mSTP = (state) => {
    return {

    }
};

const mDTP = (dispatch) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session
    }
};

const EditUserPFPContainer = withRouter(connect(mSTP,mDTP)(EditUserPFP))
export default EditUserPFPContainer;