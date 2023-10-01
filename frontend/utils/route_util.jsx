import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mSTP = state => ({
    loggedIn: Boolean(state.session.id),
})

// redirect users (functional component) 
// AuthRoute path = "" component = {}/>
const Auth = ({ loggedIn, path, component: Component, exact }) => (

    <Route
        path={path}
        exact={exact}
        render={props => (
            !loggedIn ? (<Component {...props} />) : (<Redirect to={`/$/channels/@me`} />)
        )}
    />
);

const Protected = ({ loggedIn, path, component: Component, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to={`/login`} />
        )}
    />
);

const ProtectedRejectBack = ({ loggedIn, path, component: Component, exact }) => {
    return (
        <Route
            path={'*'}
            exact={exact}
            render={props => (
                loggedIn ? <Redirect to={`/$/channels/@me`} /> : <Redirect to={`/login`} />
            )}
        />
    )
};

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));
export const RejectRoute = withRouter(connect(mSTP)(ProtectedRejectBack));
