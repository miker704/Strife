import { connect } from "react-redux";
import { withRouter } from "react-router";
import DeleteServerForm from "./delete_server_form";

const mSTP = (state) => {
    return {
        errors: state.errors.server
    }
}

const mDTP = (dispatch) => {
    return {
            
        removeServerErrors : () => dispatch(removeServerErrors())
    }
}


const DeleteServerFormContainer = withRouter(connect(mSTP, mDTP)(DeleteServerForm));
export default DeleteServerFormContainer;