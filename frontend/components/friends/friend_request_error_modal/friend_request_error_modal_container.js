import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { closeModal } from '../../../actions/modal_actions';
import { removeSessionErrors } from '../../../actions/session_actions';
import { handleKeyUp } from '../../../utils/modal_api_util';
import FriendRequestErrorModal from './friend_request_error_modal';


const mSTP = (state) => {
    return {
        errors: state.errors.session
    }
};


const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        handleESC: (e) => handleKeyUp(e),

    }
};

const FriendRequestErrorModalContainer = withRouter(connect(mSTP, mDTP)(FriendRequestErrorModal));
export default FriendRequestErrorModalContainer;


