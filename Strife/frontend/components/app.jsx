import React from 'react';
import { Route, Switch, Routes, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util.jsx';
import SplashContainer from "./splash/splash_container";
import NavBarContainer from './nav_bar/nav_bar_container';

import SessionSignInFormContainer from './session/session_signin_form_container';
import SessionSignUpFormContainer from './session/session_signup_form_container';
import ChannelNavBarContainer from './channels/channel_nav_bar/channel_nav_bar_container';
import UserNavContainer from './users/user_nav/user_nav_container';
import ServerNavBarContainer from './server/server_nav_bar/server_nav_bar_container';
import ModalManagerContainer from './modals/modal_manager_container';
import UserProfileContainer from './users/user_profile/user_profile_container';
import DMNavBarContainer from './dm_nav_bar/dm_nav_bar_container.js';

const App = () => (
    <div>

        <Route path='/' component={ModalManagerContainer}></Route>
        <ProtectedRoute path="/channels/@me" component={ServerNavBarContainer} />
        <ProtectedRoute path="/channels/:serverId/" component={ServerNavBarContainer} />

        <ProtectedRoute path="/channels/" component={UserNavContainer}/>
        
        {/* <ProtectedRoute path="/channels/@me" component={UserNavContainer}/> */}



    <Switch>
        <ProtectedRoute path="/channels/@me/" component={DMNavBarContainer}/>
        {/* <ProtectedRoute path="/channels/:serverId/:channelId" component={ChannelNavBarContainer} /> */}
    </Switch>

    {/* <Switch>
    <ProtectedRoute path="/channels/@me" component={UserNavContainer} />



    </Switch> */}


    <Switch>

        {/* <ProtectedRoute path="/channels/:serverId/:channelId" component={ChannelNavBarContainer} /> */}
        <ProtectedRoute path="/users/:userId" component={UserProfileContainer}/>

    </Switch>





        <Switch>

            <AuthRoute exact path="/" component={SplashContainer} />
            <AuthRoute path="/register" component={SessionSignUpFormContainer} />
            <AuthRoute path="/login" component={SessionSignInFormContainer} />

        </Switch>



    </div>
)

export default App;