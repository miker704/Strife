import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CreateDmModal from './create_dm_modal';
import { selectFriendStatus } from '../../../utils/selectors_api_util';
import { requestFriendships } from '../../../actions/friendship_actions'; 
import { createDmServer, removeDmServerErrors } from '../../../actions/dm_server_actions';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        friends: selectFriendStatus(state, 3),
        errors: state.errors.dmserver
    }
}

const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        createDmServer: (dmserver) => dispatch(createDmServer(dmserver)),
        removeDmServerErrors: () => dispatch(removeDmServerErrors())
    }
}


const CreateDmModalContainer = withRouter(connect(mSTP, mDTP)(CreateDmModal));
export default CreateDmModalContainer;