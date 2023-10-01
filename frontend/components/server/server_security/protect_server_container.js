import React from "react";
import ServerContainer from "../server_container/server_container";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Route, Redirect } from "react-router";

const mSTP = (state,ownProps) => {

    const paramsExclusion = ['guild-discovery', 'nitro', '@me']

    return {
        isMember: state.currentUser.serversJoined.includes(parseInt(ownProps.match.params.serverId))
        // isMember: paramsExclusion.includes(ownProps.match.params.serverId)? true : state.currentUser.serversJoined.includes(parseInt(ownProps.match.params.serverId))
    }
}

const PROTECTED_SERVER = ({ isMember, path, exact }) => {
    if (isMember === false || isMember === undefined || isMember === null) { console.warn('UNAUTHORIZED ACCESS ERROR : 401 -> REDIRECTING ...'); /*return null;*/ }
    return (
        <Route
            path={path}
            exact={exact}
            render={props => (
                isMember ? <ServerContainer {...props} /> : <Redirect to={'/$/$TR!F3-INTRUSION-PREVENTION/'} />
            )} />
    )
}


const PROTECTED_SERVER_CONTAINER = withRouter(connect(mSTP)(PROTECTED_SERVER));
export default PROTECTED_SERVER_CONTAINER; 
