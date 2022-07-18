import { connect } from "react-redux";
import { withRouter } from "react-router";
import EditServerForm from "./edit_server_form";

const mSTP = (state) => {
    return {

    }
}

const mDTP = (dispatch) => {
    return {

    }
}


const EditServerFormContainer = withRouter(connect(mSTP,mDTP)(EditServerForm));
export default EditServerFormContainer;
