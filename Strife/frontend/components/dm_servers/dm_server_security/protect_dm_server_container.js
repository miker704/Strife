import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";
import { selectDmMembers } from "../../../utils/selectors_api_util";
import DmServerContainer from "../dm_server_container/dm_server_container";


const checkIfDmMember = (state, ownProps) => {
    return Object.values(selectDmMembers(state, ownProps.match.params.dmServerId))
        .find(member => member.id === state.session.id) === undefined ? false : true;
}

const mSTP = (state, ownProps) => {
    console.log("hello in dmserver -protected route");
    return {
        isMember: checkIfDmMember(state, ownProps)
    }
}

const PROTECTED_DM_SERVER = ({ isMember, path, exact }) => {
    if( isMember === false || isMember === undefined) {console.log(" INTRUDERS!"); /*return null;*/}
    return (
    <Route
        path={path}
        exact={exact}
        render={props => (
            isMember ? <DmServerContainer {...props} /> : <Redirect to={`/channels/@me`} />
        )} />
    )
}

const PROTECTED_DM_SERVER_CONTAINER = withRouter(connect(mSTP)(PROTECTED_DM_SERVER));
export default PROTECTED_DM_SERVER_CONTAINER;
