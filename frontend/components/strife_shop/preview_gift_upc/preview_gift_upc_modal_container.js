import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {  removeFriendshipErrors } from '../../../actions/friendship_actions';
import { fetchUser, removeSessionErrors } from '../../../actions/session_actions.js';
import { reSyncCurrentUser } from "../../../actions/session_actions.js";
import PreviewGiftUPCModal from './preview_gift_upc_modal.jsx';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.currentUser,
        currentUserId: state.session.id,
        errors: state.errors.friendship,
        sessionErrors: state.errors.session,
        users: Object.values(state.entities.users),
        member: ownProps.member || state.currentUser,
        productPrice: ownProps.productPrice || 0.00,
        productName: ownProps.productName || "Please Select A Product",
        productKey: ownProps.productKey || "ghosts",
        productType: ownProps.productType || "Avatar_Decoration"
    }
};

const mDTP = (dispatch, ownProps) => {
    return {
        fetchUser: (memberId) => dispatch(fetchUser(memberId)),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        //reSync current user props
        reSyncCurrentUser: (currentUserId) => dispatch(reSyncCurrentUser(currentUserId)),
    }
};

const PreviewGiftUPCModalContainer = withRouter(connect(mSTP, mDTP)(PreviewGiftUPCModal));
export default PreviewGiftUPCModalContainer;