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
import DMNavBarContainer from './dm_servers/dm_nav_bar/dm_nav_bar_container.js';
import EmptyMessagesContainer from './dm_servers/dm_messages/empty_messages_container.jsx';
import DmMessagesContainer from './dm_servers/dm_messages/dm_messages_container.js';
import FriendsHomePageContainer from './friends/friends_page_main/friends_home_page.jsx';
import HomePageContainer from './friends/friends_page_main/friends_home_page_container.js';
import LoadingScreenContainer from './loading_screen/loading_screen_container.js';
import DmServerContainer from './dm_servers/dm_server_container/dm_server_container.js';
import ServerContainer from './server/server_container/server_container.js';
import ExploreServersContainer from './server/server_search/server_search_container.js';
import TestPageContainer from '../components/test_bench/test_container.js'
import PROTECTED_DM_SERVER_CONTAINER from './dm_servers/dm_server_security/protect_dm_server_container.js';


const App = () => (
    <div>

        <Route path='/' component={ModalManagerContainer}></Route>
        {/* <ProtectedRoute path="/channels/@me" component={ServerNavBarContainer} /> */}
        <ProtectedRoute exact path="/testing/" component={TestPageContainer} />
        {/* <ProtectedRoute path="/channels/" component={ServerNavBarContainer} /> */}
        <ProtectedRoute path="/channels/:serverId/" component={ServerNavBarContainer} />
        <ProtectedRoute path="/channels/" component={UserNavContainer} />

        <Switch>
            <ProtectedRoute path="/channels/@me/:dmServerId" component={DMNavBarContainer} />
            <ProtectedRoute path="/channels/@me" component={DMNavBarContainer} />
            {/* <ProtectedRoute path = "/channels/:serverId/:channelId" component={ChannelNavBarContainer} /> */}

            {/* <ProtectedRoute path="/channels/dmServers/:dmServerId" component={DMNavBarContainer}/> */}

            {/* <ProtectedRoute path="/channels/:serverId/:channelId" component={ChannelNavBarContainer} /> */}
        </Switch>


        {/* render proper component for messages type or friends list */}
        <Switch>
            {/* <ProtectedRoute path="/channels/@me/:dmServerId" component={DmMessagesContainer}/> */}

            {/* <ProtectedRoute path="/channels/@me/:dmServerId" component={DmServerContainer}/> */}
            <ProtectedRoute path="/channels/@me/:dmServerId" component={PROTECTED_DM_SERVER_CONTAINER}/>

            <ProtectedRoute path="/channels/:serverId/:channelId" component={ServerContainer} />
            {/* <ProtectedRoute path="/channels/@me/dmServers/:dmServerId" component={DmMessagesContainer}/> */}
            {/* <ProtectedRoute path="/channels/@me" component={EmptyMessagesContainer}/> */}
            <ProtectedRoute path="/channels/@me" component={HomePageContainer} />

        </Switch>

        {/* alt routes to other areas not involving main app */}
        <Switch>

            <ProtectedRoute path="/users/:userId" component={UserProfileContainer} />
            <ProtectedRoute path="/loading/" component={LoadingScreenContainer} />
            <ProtectedRoute path="/channels/guild-discovery/" component={ExploreServersContainer} />


        </Switch>


        {/* this is the user auth routes */}
        <Switch>

            <AuthRoute exact path="/" component={SplashContainer} />
            <AuthRoute path="/register" component={SessionSignUpFormContainer} />
            <AuthRoute path="/login" component={SessionSignInFormContainer} />

        </Switch>



    </div>
)

export default App;