import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NoFriendsDMModal from './no_friends_dm_modal.jsx';
import { closeModal } from '../../../actions/modal_actions';

const mSTP = (state) => {
    return {
        currentUser: state.currentUser,
        currentUserId: state.session.id,
    }
}

const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
    }
}


const NoFriendsDMModalContainer = withRouter(connect(mSTP, mDTP)(NoFriendsDMModal));
export default NoFriendsDMModalContainer;