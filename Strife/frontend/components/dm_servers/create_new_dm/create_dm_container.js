import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CreateDmModal from './create_dm_modal';
import { selectFriendStatus } from '../../../utils/selectors_api_util';

const mSTP = (state) =>{
    return {

    }
}

const mDTP = (dispatch) =>{
    return {

    }
}


const CreateDmModalContainer = withRouter(connect(mSTP,mDTP)(CreateDmModal));
export default CreateDmModalContainer;