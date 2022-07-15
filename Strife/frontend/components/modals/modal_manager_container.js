import { connect } from "react-redux";
import { withRouter } from "react-router";
import { closeModal } from "../../actions/modal_actions";
import ModalManager from "./modal_manager.jsx";

const mSTP = (state) => {
    return {
        modal: state.ui.modal
    }
}
const mDTP = (dispatch) => {
    return {
        closeModal: ()=> dispatch(closeModal())
    }
}

const ModalManagerContainer = connect(mSTP,mDTP)(withRouter(ModalManager));
export default ModalManagerContainer;