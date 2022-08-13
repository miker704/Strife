import { connect } from "react-redux";
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

const EditUserPasswordContainer = withRouter(connect(mSTP,mDTP)(EditUserPasswordForm))
export default EditUserPasswordContainer;