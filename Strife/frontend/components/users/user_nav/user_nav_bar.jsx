import React from "react";
import { Link } from "react-router-dom";


class UserNavBar extends React.Component{
  constructor(props){
    super(props);

    console.log(this.props.currentUser)
  }

  render(){

    return ( 
      <div className = "user-nav-bar">
        <div id ="username">
          <div className={`user-icon color-${this.props.currentUser.color_tag}`}>
            <i className="fa-brands fa-discord"/>
          </div>
          <div id="user-account-info">
            <h3>{this.props.currentUser.username}</h3>
            <p>#{this.props.currentUser.strife_id_tag}</p>
          </div>
        </div>


        <div id="user-settings-icons">

          <i className="fa-solid fa-microphone"> </i>
          <i className="fa-solid fa-headphones"> </i>

            {/* redirect link */}
          <Link to={`/users/${this.props.currentUser.id}`}> 


            <i className="fa-solid fa-gear"/>


            <div className="user-settings-toggle">User Settings</div>

          </Link>
        </div>
      </div>
    )
  }
}

export default UserNavBar;