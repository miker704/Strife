import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util.jsx';
import SplashContainer from "./splash/splash_container";
import SessionSignInFormContainer from './session/session_signin_form_container';
import SessionSignUpFormContainer from './session/session_signup_form_container';
import UserNavContainer from './users/user_nav/user_nav_container';
import ServerNavBarContainer from './server/server_nav_bar/server_nav_bar_container';
import ModalManagerContainer from './modals/modal_manager_container';
import DMNavBarContainer from './dm_servers/dm_nav_bar/dm_nav_bar_container.js';
import HomePageContainer from './friends/friends_page_main/friends_home_page_container.js';
import LoadingScreenContainer from './loading_screen/loading_screen_container.js';
import IntrusionPreventionLoadingScreenContainer from './loading_screen/instrusion_loading_screen_container.js';
import DeletedServerLoadingScreenContainer from './loading_screen/delete_server_loading_screen_container.js';
import ExploreServersContainer from './server/server_search/server_search_container.js';
import PROTECTED_DM_SERVER_CONTAINER from './dm_servers/dm_server_security/protect_dm_server_container.js';
import PROTECTED_SERVER_CONTAINER from './server/server_security/protect_server_container.js';
// import STRIFE_VOICE_CALL_API_CONTAINER from './voice_calls/voice_call_container.js';
import _STRIFE_CORE_CONTAINER_ from './Core/CORE_CONTAINER.js';


const App = () => {

    return (
        <div>
            <Route path='/' component={ModalManagerContainer}></Route>
            <ProtectedRoute path='/$/' component={_STRIFE_CORE_CONTAINER_} ></ProtectedRoute>
            <ProtectedRoute path="/$/channels/:serverId/" component={ServerNavBarContainer} />
            <ProtectedRoute path="/$/channels/" component={UserNavContainer} />

            {/* <ProtectedRoute exact path="/voice/" component={STRIFE_VOICE_CALL_API_CONTAINER} /> */}

            <Switch>
                <ProtectedRoute path="/$/channels/@me" component={DMNavBarContainer} />
            </Switch>

            {/* render proper component for messages type or friends list */}
            <Switch>

                <ProtectedRoute path="/$/channels/@me/:dmServerId" component={PROTECTED_DM_SERVER_CONTAINER} />
                <ProtectedRoute path="/$/channels/:serverId/:channelId" component={PROTECTED_SERVER_CONTAINER} />
                <ProtectedRoute path="/$/channels/@me" component={HomePageContainer} />

            </Switch>
            {/* this componenet is routed again to this path in order to activate which dmServer is selected  
                the first route path to this component is to display the component and be able to enter it
            */}
            <Switch>
                <ProtectedRoute path="/$/channels/@me/:dmServerId" component={DMNavBarContainer} />
            </Switch>

            {/* alt routes to other areas not involving main app */}
            <Switch>
                <ProtectedRoute path="/$/loading/" component={LoadingScreenContainer} />
                <ProtectedRoute path="/$/telefrag/" component={DeletedServerLoadingScreenContainer} />
                <ProtectedRoute path='/$/$TR!F3-INTRUSION-PREVENTION/' component={IntrusionPreventionLoadingScreenContainer} />
                <ProtectedRoute path="/$/channels/guild-discovery/" component={ExploreServersContainer} />
            </Switch>


            {/* this is the user auth routes */}
            <Switch>
                <AuthRoute exact path="/" component={SplashContainer} />
                <AuthRoute path="/register" component={SessionSignUpFormContainer} />
                <AuthRoute path="/login" component={SessionSignInFormContainer} />
            </Switch>

        </div>
    )
}

export default App;