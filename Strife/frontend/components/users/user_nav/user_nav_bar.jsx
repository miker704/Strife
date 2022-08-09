import React from "react";
import { Link } from "react-router-dom";


class UserNavBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      micMute: false,
      deafen : false
    }
    console.log(this.props.currentUser)
    this.clickToMute = this.clickToMute.bind(this);
    this.clickToDeafen = this.clickToDeafen.bind(this);
  }

  clickToMute(){

  }

  clickToDeafen(){

  }


  render () {

    let microphone_Icon = this.clickToMute() === true ? ("") : ("");
    let headphone_Icon = this.clickToDeafen() === true ? ("") : ("");






    return (
      <div className="user-nav-bar">
        <div id="username">
          <div className={`user-icon color-${this.props.currentUser.color_tag}`}>
            <i className="fa-brands fa-discord" />
          </div>
          <div id="user-account-info">
            <h3>{this.props.currentUser.username}</h3>
            <p>#{this.props.currentUser.strife_id_tag}</p>
          </div>
        </div>


        <div id="user-settings-icons">

          <i className="fa-solid fa-microphone"> </i>


          <svg className="svg-muted-microphone" aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
            <path d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z"
              fill="currentColor"></path>
            <path d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 
             2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z" fill="currentColor">
            </path>
            <path d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 
              17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 
              11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 
              11.7237 16.0927Z" fill="currentColor"></path>
            <path d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 
              16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z"
              class="strikethrough-2Kl6HF" fill="red">
            </path>
          </svg>



          <svg className="svg-microphone" aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 
            14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 
            14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 
            14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 
            11V5C13 4.66667 12.8 4 12 4Z" fill="currentColor"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 11C14.99 
            12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 
            2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 
            16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 
            16.1 12 16.1Z" fill="currentColor">
            </path>
          </svg>

          <i className="fa-solid fa-microphone-slash"> </i>

          <i className="fa-solid fa-headphones"> </i>

          {/* redirect link */}
          <Link to={`/users/${this.props.currentUser.id}`}>


            <i className="fa-solid fa-gear" />


            <div className="user-settings-toggle">User Settings</div>

          </Link>
        </div>
      </div>
    )
  }
}

export default UserNavBar;