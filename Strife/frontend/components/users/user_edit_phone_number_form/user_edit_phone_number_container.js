import { connect } from "react-redux";
import { withRouter } from "react-router";
import { handleKeyUp } from "../../../utils/modal_api_util";
import EditUserPhoneNumberForm from "./user_edit_phone_number_form";



const mSTP = (state) => {
    return {

    }
};

const mDTP = (dispatch) => {
    return {

    }
};

const EditUserPhoneNumberContainer = withRouter(connect(mSTP,mDTP)(EditUserPhoneNumberForm))
export default EditUserPhoneNumberContainer;