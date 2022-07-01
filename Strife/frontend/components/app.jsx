import React from 'react';
import SignUpFormContainer from './session/signup_form_container';
import { Route, Switch, Routes, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util.jsx';
import SignInFormContainer from './session/signin_form_container';
import SplashContainer from "./splash/splash_container";
import NavBarContainer from './nav_bar/nav_bar_container';

import SessionSignInFormContainer from './session/session_signin_form_container';
import SessionSignUpFormContainer from './session/session_signup_form_container';
import ChannelNavBarContainer from "./channels/channel_nav/channel_nav_bar_container"

const App = () => (
    <div>
    <Switch>
    
    {/* <Route exact path="/"> <SplashContainer/> </Route> */}

   
    <AuthRoute exact path="/" component={SplashContainer}/>
    <AuthRoute path="/register" component={SessionSignUpFormContainer} />
    <AuthRoute path="/login" component={SessionSignInFormContainer} />
    <ProtectedRoute path="/channels/@me" component={ChannelNavBarContainer}/>
    
    
    </Switch>

   




 
    </div>
)

export default App;