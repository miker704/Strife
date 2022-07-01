import { connect } from "react-redux";
import ChannelForm from "./channel_form.jsx";
import { updateChannel, removeChannelErrors, deleteChannel, fetchChannel} from "../../../actions/channel_actions";
import { withRouter } from "react-router";

const mSTP = state => {
    return {
        formType: 'Edit Channel',
        errors: state.errors.channel
    }
}

const mDTP = dispatch => {
    return {
        processForm: (channel) => dispatch(updateChannel(channel)),
        deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
        fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
        removeChannelErrors: () => dispatch(removeChannelErrors())
    }
}


const EditChannelFormContainer = withRouter(connect(mSTP, mDTP)(ChannelForm));
export default EditChannelFormContainer;