import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestFriendships, removeFriendshipErrors, requestAllFriendships, unBlockUser, blockUser } from '../../../actions/friendship_actions';
import { removeSessionErrors, fetchUser } from '../../../actions/session_actions';
import { removeDmServerErrors } from '../../../actions/dm_server_actions';
import { selectDmMembers } from "../../../utils/selectors_api_util.js";
import BlockedUserSnackBar from './blocked_user_snack_bar';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.currentUser,
        dmServer: state.entities.dmServers[ownProps.match.params.dmServerId],
        dmServerMembers: selectDmMembers(state, ownProps.match.params.dmServerId),
        dmServers: Object.values(state.entities.dmServers),
        dmServerErrors: state.errors.dmServer,
        errors: state.errors.session,
        friendshipErrors: state.errors.friendship,
        users: Object.values(state.entities.users),
        member: state.entities.dmServers[ownProps.match.params.dmServerId]?.other_o2o_member,
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        unBlockUser: (ids) => dispatch(unBlockUser(ids)),
        blockUser: (ids) => dispatch(blockUser(ids)),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        requestAllFriendships: () => dispatch(requestAllFriendships()),
        fetchUser: (memberId) => dispatch(fetchUser(memberId)),

    }
};

const BlockedUserSnackBarContainer = withRouter(connect(mSTP, mDTP)(BlockedUserSnackBar));
export default BlockedUserSnackBarContainer;


