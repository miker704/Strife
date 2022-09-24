import { connect } from "react-redux";
import { withRouter } from "react-router";
import IntrusionPreventionLoadingScreen from "./instrusion_loading_screen";


const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        selectedLoadingMsg:"$TR!F3 Intrusion Prevention - Warning You are Not Authorized to access this Server!",
    }
}


const mDTP = (dispatch) => {
    return {

    }
}



const IntrusionPreventionLoadingScreenContainer = withRouter(connect(mSTP,mDTP)(IntrusionPreventionLoadingScreen));
export default IntrusionPreventionLoadingScreenContainer;