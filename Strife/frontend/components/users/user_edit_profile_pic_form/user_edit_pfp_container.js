import { withRouter } from "react-router";
import { connect } from "react-redux";
import { handleKeyUp } from "../../../utils/modal_api_util";
import EditUserPFP from "./user_edit_pfp_form";



const mSTP = (state) => {
    return {

    }
};

const mDTP = (dispatch) => {
    return {

    }
};

const EditUserPFPContainer = withRouter(connect(mSTP,mDTP)(EditUserPFP))
export default EditUserPFPContainer;