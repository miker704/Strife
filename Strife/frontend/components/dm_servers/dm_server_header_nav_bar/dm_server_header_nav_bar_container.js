import DmServerHeaderNavBar from "./dm_server_header_nav_bar";
import { connect } from "react-redux";
import { withRouter } from "react-router";


const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.dmServer,
        dmMessageErrors: state.errors.dmMessage
    }

}

const mDTP = (state,ownProps) => {
    return {
        
    }
}

const DmServerHeaderNavBarContainer = withRouter(connect(mSTP,mDTP)(DmServerHeaderNavBar));
export default DmServerHeaderNavBarContainer;