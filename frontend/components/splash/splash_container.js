import { connect } from "react-redux";
import Splash from './splash';
import SplashMain from './splash_main.jsx';

// const mSTP = state => ({
//   loggedIn: Boolean(state.session.id)
// });

// const mDTP = dispatch => ({
//   login: user => dispatch(login(user))
// })


const mSTP = state => ({
  state: state
});



const SplashContainer = connect(mSTP, null)(SplashMain);
export default SplashContainer;