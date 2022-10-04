import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { closeModal } from '../../actions/modal_actions';
import STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS from './video_and_voice_call';

const mSTP = (state,ownProps) => {
  
    return {
        currentUser: state.currentUser,
        currentUserId: state.session.id,
        dmMembersForCall: state.ui.modalProps.dmMembersForCall,
        dmServer: state.ui.modalProps.dmServer
    }
}

const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}


const STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS_CONTAINER = withRouter(connect(mSTP, mDTP)(STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS ));
export default STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS_CONTAINER;