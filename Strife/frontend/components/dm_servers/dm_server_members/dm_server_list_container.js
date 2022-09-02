import { connect } from "react-redux";
import { withRouter } from "react-router";
import DmServerMemberList from "./dm_server_list";


const mSTP = (state) => {
    return {

    }
}

const mDTP = (dispatch) => {
    return {

    }
}

const DmServerMemberListContainer = withRouter(connect(mSTP,mDTP)(DmServerMemberList));
