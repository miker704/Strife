import { connect } from "react-redux";
import EditUsernameForm from "./user_edit_username_form";
import { withRouter } from "react-router";
import { handleKeyUp } from "../../../utils/modal_api_util";



const mSTP = (state) => {
    return {

    }
};

const mDTP = (dispatch) => {
    return {

    }
};

const EditUserNameContainer = withRouter(connect(mSTP,mDTP)(EditUsernameForm))
export default EditUserNameContainer;