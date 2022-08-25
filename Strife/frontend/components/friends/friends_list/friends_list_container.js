import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FriendShipIndex from './friends_list';

const mSTP = (state) => {
    return {

    }
};


const mDTP = (dispatch) => {
    return {

    }
};

const FriendShipIndexContainer = withRouter(connect(mSTP,mDTP)(FriendShipIndex));
export default FriendShipIndexContainer;