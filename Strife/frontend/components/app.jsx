import React from 'react';
import SignUpFormContainer from './session/signup_form_container';
import { Route, Switch, Routes, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util.jsx';
import SignInFormContainer from './session/signin_form_container';
import SplashContainer from "./splash/splash_container";
import NavBarContainer from './nav_bar/nav_bar_container';

import SessionSignInFormContainer from './session/session_signin_form_container';
import SessionSignUpFormContainer from './session/session_signup_form_container';


const App = () => (
    <div>
    {/* <h1>can you work PLEASE 😒 !!!!!!!!</h1> */}
   
   {/* <Routes> */}
    {/* <Switch>
 


    <Route exact path="/"> <SplashContainer/> <NavBarContainer/> </Route>
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <AuthRoute path="/signin" component={SignInFormContainer} />
    </Switch> */}
    {/* </Routes> */}
    
    {/* testing custom switch route to a session only form */}
    
    <Switch>
    {/* <Route exact path="/"> <SplashContainer/> <NavBarContainer/> </Route> */}
    <Route exact path="/"> <SplashContainer/> </Route>
    <AuthRoute path="/session_signup_form_container" component={SessionSignUpFormContainer} />
    <AuthRoute path="/session_signin_form_container" component={SessionSignInFormContainer} />
    {/* <ProtectedRoute path=""/>     */}
    </Switch>


    {/* testing custom switch route */}
    {/* <Switch>

                 <Route path="/"> <NavBarContainer/></Route>
                <Route exact path="/"> <SplashContainer/> </Route>
                <Route path="/signup"> <SignUpFormContainer/> </Route>
                <Route path="/signin"> <SignInFormContainer/> </Route>


    </Switch> */}
   
    </div>
)

export default App;