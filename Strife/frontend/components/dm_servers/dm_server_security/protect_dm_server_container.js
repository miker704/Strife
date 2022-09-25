import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";
import DmServerContainer from "../dm_server_container/dm_server_container";

const mSTP = (state, ownProps) => {

    return {
        // isMember: state.entities.users[state.session.id].dmServersJoined.includes(parseInt(ownProps.match.params.dmServerId))
        isMember: state.currentUser.dmServersJoined.includes(parseInt(ownProps.match.params.dmServerId))

    }
}

const PROTECTED_DM_SERVER = ({isMember, path, exact }) => {
    console.log("inside dm Server protected route");
    if (isMember === false || isMember === undefined ||isMember === null ) { 
        console.warn('UNAUTHORIZED ACCESS ERROR : 401 -> REDIRECTING ...');
        /*return null;*/ }

    return (
        <Route
            path={path}
            exact={exact}
            render={props => (
                isMember ? <DmServerContainer {...props} /> : <Redirect to={'/$TR!F3-INTRUSION-PREVENTION/'} />
            )} />
    )
}

const PROTECTED_DM_SERVER_CONTAINER = withRouter(connect(mSTP)(PROTECTED_DM_SERVER));
export default PROTECTED_DM_SERVER_CONTAINER;
