import { connect } from "react-redux";
import { withRouter } from "react-router";
import { handleKeyUp } from "../../../utils/modal_api_util";
import EditUserEmailForm from "./user_edit_email_form";




const mSTP = (state) => {
    return {

    }
};

const mDTP = (dispatch) => {
    return {

    }
};

const EditUserEmailContainer = withRouter(connect(mSTP,mDTP)(EditUserEmailForm))
export default EditUserEmailContainer;