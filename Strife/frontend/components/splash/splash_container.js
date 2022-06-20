import { connect } from "react-redux";
import Splash from './splash';

const mSTP = state => ({
  loggedIn: Boolean(state.session.id)
});

const mDTP = dispatch => ({
  login: user => dispatch(login(user))
})


const SplashContainer = connect(mSTP, mDTP)(Splash);
export default SplashContainer;