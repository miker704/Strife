import { connect } from "react-redux";
import { withRouter } from "react-router";
import { openModal, closeModal, openModalWithProps } from "../../../actions/modal_actions";
import { reSyncCurrentUser } from "../../../actions/session_actions";
import ProfileEffectItemCard from "./profile_effect_item_card";

const mSTP = (state, ownProps) => {

    return {
        currentUserId: state.session.id,
        currentUser: state.currentUser,
        ui_modal: state.ui.modal,
        modalProps: state.ui.modalProps,
    }
}


const mDTP = (dispatch, ownProps) => {
    return {
        reSyncCurrentUser: (userId) => dispatch(reSyncCurrentUser(userId)),
        // modal api functions
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        openModalWithProps: (modal_with_props) => dispatch(openModalWithProps(modal_with_props))
    }
}


const ProfileEffectItemCardContainer = withRouter(connect(mSTP, mDTP)(ProfileEffectItemCard));
export default ProfileEffectItemCardContainer;