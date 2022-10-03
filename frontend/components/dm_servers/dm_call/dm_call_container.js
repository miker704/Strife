import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createDmServer, removeDmServerErrors } from '../../../actions/dm_server_actions';
import { createDmMember } from '../../../actions/dm_member_actions';
import { selectAllFriends } from '../../../utils/selectors_api_util';
import { requestFriendships, removeFriendshipErrors , requestAllFriendships} from '../../../actions/friendship_actions'; 
import { closeModal } from '../../../actions/modal_actions';
import WEBRTCDMCallModal from './dm_call';



const mSTP = (state,ownProps) => {
    let dmMembers = [];
    if(state.entities.dmServers[ownProps.match.params.dmServerId]){
        dmMembers= state.entities.dmServers[ownProps.match.params.dmServerId].members;
    }
    return {
        currentUser: state.currentUser,
        currentUserId: state.session.id,
        dmServers: Object.values(state.entities.dmServers),
        dmServerErrors: state.errors.dmServer,
        dmMembersForCall: state.ui.modalProps.dmMembersForCall,
        dmServer: state.ui.modalProps.dmServer

    }
}

const mDTP = (dispatch) => {
    return {
        requestAllFriendships: () => dispatch(requestAllFriendships()),
        requestFriendships: () => dispatch(requestFriendships()),
        createDmServer: (dmserver) => dispatch(createDmServer(dmserver)),
        createDmMember: (dm_member) => dispatch(createDmMember(dm_member)),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        closeModal: () => dispatch(closeModal())
    }
}


const WEBRTCDMCallModalContainer = withRouter(connect(mSTP, mDTP)(WEBRTCDMCallModal));
export default WEBRTCDMCallModalContainer;