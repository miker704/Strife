import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

// Comment this back in after you have built the login functionality

import { logoutUser } from '../../actions/session_actions.js';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
});


const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default NavBarContainer;
