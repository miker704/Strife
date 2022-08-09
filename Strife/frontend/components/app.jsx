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
import UserNavContainer from './users/user_nav/user_nav_container';
import ServerNavBarContainer from './server/server_nav_bar/server_nav_bar_container';
import ModalManagerContainer from './modals/modal_manager_container';

const App = () => (
    <div>

        <Route path='/' component={ModalManagerContainer}></Route>
        <ProtectedRoute path="/channels/@me" component={ServerNavBarContainer} />
        <ProtectedRoute path="/channels/:serverId/" component={ServerNavBarContainer} />
        {/* <ProtectedRoute path="/channels/@me" component={UserNavContainer}/> */}
        <ProtectedRoute path="/channels/" component={UserNavContainer}/>



        <Switch>

            {/* <Route exact path="/"> <SplashContainer/> </Route> */}
            <AuthRoute exact path="/" component={SplashContainer} />
            <AuthRoute path="/register" component={SessionSignUpFormContainer} />
            <AuthRoute path="/login" component={SessionSignInFormContainer} />
            {/* <ProtectedRoute path="/channels/@me" component={UserNavContainer}/> */}
            {/* <Route path='/' component={ModalManager}></Route> */}



        </Switch>







    </div>
)

export default App;