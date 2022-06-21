import React from 'react';
import SignUpFormContainer from './session/signup_form_container';
import { Route, Switch, Routes, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util.jsx';
import SignInFormContainer from './session/signin_form_container';
import SplashContainer from "./splash/splash_container";
import NavBarContainer from './nav_bar/nav_bar_container';



const App = () => (
    <div>
    {/* <h1>can you work PLEASE 😒 !!!!!!!!</h1> */}
   
   {/* <Routes> */}
    <Switch>
    {/* <Route path="/" element={<NavBarContainer/>}/> */}
    {/* <Route path="/" component={NavBarContainer}/> */}
    {/* <Route exact path="/" component={SplashContainer} /> */}

    {/* <Route path="/"></Route> */}
    <Route exact path="/"> <SplashContainer/> <NavBarContainer/> </Route>
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <AuthRoute path="/signin" component={SignInFormContainer} />
    </Switch>
    {/* </Routes> */}
    
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