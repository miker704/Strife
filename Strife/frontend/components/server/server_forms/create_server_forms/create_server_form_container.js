import { connect } from "react-redux";
import { withRouter } from "react-router";
import { openModal,closeModal } from "../../../../actions/modal_actions";
import { createServer, removeServerErrors } from "../../../../actions/server_actions";
import CreateServerForm from "./create_server_form.jsx";



const mSTP = (state) => {
    return {
       currentUser: state.entities.users[state.session.id],
       server: {
        server_owner_id: state.session.id,
        public : true,
        server_name: "",
       },
       errors : state.errors.server
    }
}
const mDTP = (dispatch) => {
    return {
        
        createServer: (server) => dispatch(createServer(server)),
        removeServerErrors: () => dispatch(removeServerErrors()),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: ()=> dispatch(closeModal())
    }
}

// const CreateServerFormContainer = connect(mSTP,mDTP)(withRouter(CreateServerForm));
const CreateServerFormContainer = connect(mSTP,mDTP)(CreateServerForm);
// const CreateServerFormContainer =withRouter(connect(mSTP,mDTP)(CreateServerForm));
export default CreateServerFormContainer;