import React from 'react';
import SignUpFormContainer from './session/signup_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import SignInFormContainer from './session/signin_form_container';
import SplashContainer from "./splash/splash_container";
import NavBarContainer from './nav_bar/nav_bar_container';
const App = () => (
    <Switch>
    <Route path="/" component={NavBarContainer}/>
    <Route exact path="/" component={SplashContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <AuthRoute path="/login" component={SignInFormContainer} />
    </Switch>
)

export default App;