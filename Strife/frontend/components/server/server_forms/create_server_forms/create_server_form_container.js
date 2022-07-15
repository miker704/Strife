import { connect } from "react-redux";
import { withRouter } from "react-router";
import CreateServerForm from "./create_server_form";



const mSTP = (state) => {
    return {
       
    }
}
const mDTP = (dispatch) => {
    return {
        closeModal: ()=> dispatch(closeModal())
    }
}

const CreateServerFormContainer = connect(mSTP,mDTP)(withRouter(CreateServerForm));
export default CreateServerFormContainer;