import React from "react"
import { Link } from 'react-router-dom'
import EditUserFormContainer from "./user_edit_form_container"
import UserDeleteForm from "./user_delete_form"

class UserProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: this.props.user,
      userEdit: false,
      deleteForm: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)


  }

  handleSubmit () {

  }


  render () {



    return (
      <div className="user-profile-wrapper">
        <div className="user-profile">

          <div className="sidebar">
            <div className="sidebar-scrollbar">
              <div className="sidebar-inner">

                <div className="user-profile-left-side">


                  <ul className="user-profile-item-list">

                    <li><h3 className="user-profile-header3">User Settings</h3></li>


                    <Link to={`/users/${this.props.currentUser.id}`}>

                      <li className="user-profile-item">My Account</li>

                    </Link>

                    <li className="user-profile-item">Friend Requests</li>
                    <li className="user-profile-item">Profiles</li>
                    <li className="user-profile-item">Privacy & Safety</li>
                    <li className="user-profile-item">Authorized Apps</li>
                    <li className="user-profile-item">Connections</li>
                    <div className="user-settings-separator"></div>
                    <li><h3 className="user-profile-header3">Billing Settings</h3></li>
                    <li className="user-profile-item" ><div className="strife-nitro-lbl">
                      Nitro
                      <div className="strife-nitro-img">1 month free</div>
                    </div></li>
                    <li className="user-profile-item">Server Boost</li>
                    <li className="user-profile-item">Subscriptions</li>
                    <li className="user-profile-item">Gift Inventory</li>
                    <li className="user-profile-item">Billing</li>
                    <div className="user-settings-separator"></div>
                    <li><h3 className="user-profile-header3">App Settings</h3></li>
                    <li className="user-profile-item">Appearance</li>
                    <li className="user-profile-item">Accessibility</li>
                    <li className="user-profile-item">Voice & Video</li>
                    <li className="user-profile-item">Text & Images</li>
                    <li className="user-profile-item">Notifications</li>
                    <li className="user-profile-item">Keybinds</li>
                    <li className="user-profile-item">Language</li>
                    <li className="user-profile-item">Streamer Mode</li>
                    <li className="user-profile-item">Advanced</li>
                    <div className="user-settings-separator"></div>
                    <li><h3 className="user-profile-header3">Activity Settings</h3></li>
                    <li className="user-profile-item">Activity Privacy</li>
                    <li className="user-profile-item">Registered Games</li>
                    <div className="user-settings-separator"></div>
                    <li className="user-profile-item">What's New</li>
                    <li className="user-profile-item">HypeSquad</li>
                    <div className="user-settings-separator"></div>
                    <li className="user-profile-item" onClick={() => this.props.logoutUser()}>
                      <span>Log Out</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </li>
                    <div className="user-settings-separator"></div>
                    <div className="user-profile-socials">

                      <a href="https://twitter.com/discord/" target="_blank"><i className="fa-brands fa-twitter fa-lg"></i></a>
                      <a href="https://www.instagram.com/discord/" target="_blank"> <i className="fa-brands fa-instagram fa-lg"></i></a>
                      <a href="https://www.facebook.com/discord/" target="_blank"><i className="fa-brands fa-facebook-square fa-lg"></i></a>

                    </div>
                    <div className="version-number">
                      <span>Stable 140575 (12c29a3)</span>
                      <br />
                      <span>Windows 11 64-bit</span>

                    </div>

                  </ul>
                </div>
              </div>
            </div>
          </div>




          <div className="user-profile-right-side-wrapper">
            <div className="user-profile-rs-inner-wrapper">

              <div className="user-profile-right-side">


                <div className="user-profile-header1-div">
                  <h3 className="user-profile-header1">My Account</h3>
                </div>

              </div>

            </div>

          </div>



        </div>
      </div>

    )
  }
}




export default UserProfile;