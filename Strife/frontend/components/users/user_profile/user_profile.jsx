import React from "react"
import { Link } from 'react-router-dom'
import EditUserFormContainer from "./user_edit_form_container"
import UserDeleteForm from "./user_delete_form"

class UserProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: this.props.currentUser,
      userEdit: false,
      deleteForm: false,
      userEmail: this.props.currentUser.email,
      // userPhone: this.props.currentUser.phone_number,
      userPhone: 1,

      reveal: "Reveal",
      reveal1: "Reveal"

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.scrambleEmail = this.scrambleEmail.bind(this);
    this.scramblePhoneNumber = this.scramblePhoneNumber.bind(this);
    console.log("current user is : ", this.props.currentUser);
    console.log("current state is : ", this.state);
    console.log("phone type : ", typeof this.state.userPhone);
    this.handleRevealClick = this.handleRevealClick.bind(this);
    this.handleRevealClick2 = this.handleRevealClick2.bind(this);

  }


  handleRevealClick (e) {

    if (this.state.reveal === "Reveal") {
      this.setState({ reveal: "Hide" });
    }
    else if (this.state.reveal === "Hide") {
      this.setState({ reveal: "Reveal" });
    }

  }

  handleRevealClick2 (e) {

    if (this.state.reveal1 === "Reveal") {
      this.setState({ reveal1: "Hide" });
    }
    else if (this.state.reveal1 === "Hide") {
      this.setState({ reveal1: "Reveal" });
    }

  }

  handleSubmit () {

  }

  scrambleEmail () {


  }

  scramblePhoneNumber () {
    if (this.state.userPhone === null) {
      return
    }
    else {

    }
  }



  render () {

    let scrambledEmail = this.scrambleEmail();
    const { reveal } = this.state.reveal;
    let removePhoneNum = this.state.userPhone !== null ? (
      <button type="button" className="remove-phone-num">Remove</button>
    ) : ("")

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

                <div className="my-account-container-wrapper">

                  <div className="my-account-container">

                    <div className="account-card-banner"></div>


                    <div className="account-card-user-info">

                      <div className="account-avatar-wrapper">

                        <img className="user-avatar-img" />

                      </div>

                      <div>
                        <div className="account-card-username-div">
                          <div className="account-card-username-strife-id-tag">
                            <span className="account-settings-username">{this.props.currentUser.username}</span>
                            <span className="account-settings-strife-id-tag">#{this.props.currentUser.strife_id_tag}</span>

                          </div>
                          <div className="overflow-menu">
                            <svg className="overflowMenuIcon" width="24" height="24" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M7 12.001C7 10.8964 6.10457 10.001 
                                5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 
                                7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 
                                10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 
                                12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 
                                10.001 19 10.001Z">
                              </path>
                            </svg>
                          </div>

                        </div>
                        <div className="user-badge-container"></div>

                      </div>

                      <button type="button" className="edit-user-profile-button">Edit User Profile</button>


                    </div>

                    <div className="account-card-background">
                      <div className="account-card-background-inner-wrapper">
                        <div className="account-card-background-inner-field-1">
                          <div className="constrainedRow">
                            <div className="constrain-username">
                              <h5 className="constrain-username-header">Username</h5>
                              <div className="constrain-username-inner">
                                <span className="const-user-name">{this.props.currentUser.username}</span>
                                <span className="const-id-tag">#{this.props.currentUser.strife_id_tag}</span>
                              </div>
                            </div>
                          </div>
                          <button type="button" className="edit-profile-props-button">Edit</button>
                        </div>


                        <div className="field2">

                          <div className="constrainedRow">
                            <div>
                              <h5 className="constrain-username-header">Email</h5>
                              <div>
                                {/* <span className="const-hidden-props">{this.props.currentUser.email} */}
                                <span className="const-hidden-props">{this.state.userEmail}
                                  <button type="button" className="reveal-button" onClick={() => this.handleRevealClick2()}>{this.state.reveal1}</button>
                                </span>
                              </div>
                            </div>

                          </div>

                          <button type="button" className="edit-profile-props-button">Edit</button>

                        </div>



                        <div className="field3">
                          <div className="constrainedRow">
                            <div>
                              <h5 className="constrain-username-header">Phone Number</h5>
                              <div>
                                <span className="const-hidden-props">{this.state.userPhone}
                                  <button id="reveal" type="button" className="reveal-button" onClick={() => this.handleRevealClick()}>{this.state.reveal}</button>
                                </span>

                              </div>
                            </div>
                          </div>
                          <div className="phone-num-button-container">
                            {removePhoneNum}
                            <button type="button" className="edit-profile-props-button">Edit</button>
                          </div>

                        </div>

                      </div>


                    </div>




                  </div>

                </div>

                <div className="divider-margin"></div>
                <div className="userSecuritySettings">

                    <div className="passwrd-section">
                            <h1 className="passwrdAuth">Password and Authentication</h1>
                    </div>

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