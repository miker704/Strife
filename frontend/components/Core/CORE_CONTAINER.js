import { connect } from "react-redux";
import { withRouter } from "react-router";
import { closeModal, openModal, openModalWithProps } from "../../actions/modal_actions";
import _STRIFE_CORE_ from "./_CORE_";


const mSTP = (state, ownProps) => {
    // yeah this is basically a root reducer 
    return {
        currentUser: state.currentUser,
        currentUserId: state.session.id,
        session : state.session,
        servers: state.entities.servers,
        dmServers: state.entities.dmServers,
        users: state.entities.users,
        channels: state.entities.channels,
        dmMessages: state.entities.dmMessages,
        messages: state.entities.messages,
        dmServers: state.entities.dmServers,
        friendships: state.entities.friendships,
        userSearch: state.entities.userSearch,
        loggedIn: Boolean(state.session.id),

        // errors
        errors: state.errors,
        serverErrors:state.errors.server,
        sessionErrors: state.errors.session,
        channelErrors: state.errors.channel,
        messageErrors: state.errors.message,
        dmMessageErrors: state.errors.dmMessage,
        dmServerErrors: state.errors.dmServer,
        friendshipErrors:state.errors.friendship,

        //system utils
        systemUtils: state.systemUtils,
        //ui
        ui_modal: state.ui.modal,
        ui_modal_props: state.ui.modalProps,
        //guild search
        unExploredServers: state.unExploredServers

    }
}


const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal)),
        openModalWithProps: (modal_with_props) => dispatch(openModalWithProps(modal_with_props))
    }
}


const _STRIFE_CORE_CONTAINER_ = withRouter(connect(mSTP, mDTP)(_STRIFE_CORE_));
export default _STRIFE_CORE_CONTAINER_; 




