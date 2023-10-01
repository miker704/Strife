import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util.jsx';
import SplashContainer from "./splash/splash_container.js";
import SessionSignInFormContainer from './session/session_signin_form_container.js';
import SessionSignUpFormContainer from './session/session_signup_form_container.js';
import _STRIFE_CORE_CONTAINER_ from './Core/CORE_CONTAINER.js';
import { useStore } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";


const App = () => {
    return (
        <>
            <Switch>
                <ProtectedRoute path='/$/' component={_STRIFE_CORE_CONTAINER_} />
                <AuthRoute path="/register" component={SessionSignUpFormContainer} />
                <AuthRoute path="/login" component={SessionSignInFormContainer} />
                <AuthRoute path="/" component={SplashContainer} />
                <Route path="*" render={(props) => <Redirect to="/" />} />
            </Switch>
        </>
    )
}

export default App;