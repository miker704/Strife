// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import { openModal, closeModal, openModalWithProps } from "../../../actions/modal_actions";
// import { reSyncCurrentUser } from "../../../actions/session_actions";
// import BoostNitroPlanSuggestionModal from "./boost_nitro_plan_suggestion_modal.jsx";

// const mSTP = (state, ownProps) => {

//     return {
//         currentUserId: state.session.id,
//         currentUser: state.currentUser,
//         ui_modal: state.ui.modal,
//         modalProps: state.ui.modalProps,
//     }
// }


// const mDTP = (dispatch, ownProps) => {
//     return {
//         reSyncCurrentUser: (userId) => dispatch(reSyncCurrentUser(userId)),
//         // modal api functions
//         openModal: modal => dispatch(openModal(modal)),
//         closeModal: () => dispatch(closeModal()),
//         openModalWithProps: (modal_with_props) => dispatch(openModalWithProps(modal_with_props))
//     }
// }


// const BoostNitroPlanSuggestionModalContainer = withRouter(connect(mSTP, mDTP)(BoostNitroPlanSuggestionModal));
// export default BoostNitroPlanSuggestionModalContainer;
