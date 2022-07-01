import { connect } from "react-redux";
import ChannelForm from "./channel_form.jsx";
import { createChannel, removeChannelErrors} from "../../../actions/channel_actions";
import { withRouter } from "react-router";

const mSTP = state => {
    return {
        formType: 'Create Channel',
        errors: state.errors.channel
    }
}

const mDTP = dispatch => {
    return {
        processForm: (channel) => dispatch(createChannel(channel)),
        removeChannelErrors: () => dispatch(removeChannelErrors())
    }
}


const CreateChannelFormContainer = withRouter(connect(mSTP, mDTP)(ChannelForm));
export default CreateChannelFormContainer;