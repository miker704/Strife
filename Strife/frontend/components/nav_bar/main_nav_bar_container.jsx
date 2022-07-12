import React from 'react';
import { connect } from 'react-redux';
import MainNavBar from './main_nav_bar.jsx';

// Comment this back in after you have built the login functionality

import { logoutUser } from '../../actions/session_actions.js';


const mapStateToProps = state => {
  
 return  {
  currentUser: state.session.currentUser,
  channels: Object.values(state.entities.channels),
  messages: state.entities.messages,



}


};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
});


const MainNavBarContainer = connect(mapStateToProps, mapDispatchToProps)(MainNavBar);
export default MainNavBarContainer;
