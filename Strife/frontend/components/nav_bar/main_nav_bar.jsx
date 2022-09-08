import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logoutUser }) => {
  const display = currentUser ? (
  
      <div>
        {/* <p>hello, {currentUser.username}</p> */}
        {/* <button onClick={logoutUser}>Log Out</button> */}
         <>
        <div className="mainhome-navbar-icons">
          <div className="homenavbar-icons home-nav-friends-icon">
          </div>
          <div className="home-nav-br"></div>
          <div className="homenavbar-icons">Online</div>
          <div className="homenavbar-icons">All</div>
          <div className="homenavbar-icons">Pending</div>
          <div className="homenavbar-icons">Blocked</div>
          <div className="homenavbar-icons add-a-friend-button">Add Friend</div>
        </div>
        <div className="friends-navbar-inbox">
          <div className="home-nav-br"></div>
        </div>
      </>
            <p>hello, {currentUser.username}</p>
        <button onClick={logoutUser}>Log Out</button>
      </div>
  
  ):(
    <div>
      {/* <Link className="btn" to="/signup">Sign Up</Link><br />
      <Link className="btn" to="/signin">Sign In</Link> */}
      <Link className="btn" to="/register">Register</Link><br />
      <Link className="btn" to="/login">Login</Link>

    </div>
  );

  return (
    <header className="nav-bar">
      {/* <h1 className="logo">STRIFE</h1> */}
      <div>
        {display}
      </div>
    </header>
  );
};
