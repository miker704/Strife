import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CreateDmModal from './create_dm_modal';
import { selectFriendStatus } from '../../../utils/selectors_api_util';
import { requestFriendships } from '../../../actions/friendship_actions'; 
import { createDmServer, removeDmServerErrors } from '../../../actions/dm_server_actions';
import { createDmMember } from '../../../actions/dm_member_actions';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        dmServers: Object.values(state.entities.dmServers),
        friends: selectFriendStatus(state, 3),
        errors: state.errors.dmserver,
    }
}

const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        createDmServer: (dmserver) => dispatch(createDmServer(dmserver)),
        createDmMember: (dm_member) => dispatch(createDmMember(dm_member)),
        removeDmServerErrors: () => dispatch(removeDmServerErrors())
    }
}


const CreateDmModalContainer = withRouter(connect(mSTP, mDTP)(CreateDmModal));
export default CreateDmModalContainer;