import { connect } from "react-redux";
import { withRouter } from "react-router";
import EditServerNameForm from "./edit_server_name_form";
import { updateServer, removeServerErrors } from "../../../actions/server_actions";


const mSTP = (state) => {
    return {
        errors: state.errors.server
    }
}

const mDTP = (dispatch) => {
    return {
        updateServerName : (server) => dispatch(updateServer(server)),
        removeServerErrors : () => dispatch(removeServerErrors())
    }
}


const EditServerNameFormContainer = withRouter(connect(mSTP, mDTP)(EditServerNameForm));
export default EditServerNameFormContainer;