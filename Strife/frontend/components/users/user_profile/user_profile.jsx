import React from "react"
import {Link} from 'react-router-dom'
import EditUserFormContainer from "./user_edit_form_container"
import UserDeleteForm from "./user_delete_form"

class UserProfile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: this.props.user,
      userEdit: false,
      deleteForm: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.openDeleteModal= this.openDeleteModal.bind(this);
    this.openUserEditInfoModal=this.openUserEditInfoModal.bind(this)
    
  }


  componentDidMount(){
    this.mounted = true;
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  openModal(field){
    this.setState({[field]: true})
  }

  closeModal(field){
    if(this.mounted){ 
      this.setState({[field]: false})
    }
  }

  handleSubmit(){
    setTimeout(
      () => {
              if(this.props.errors.length === 0) {
                this.closeModal("userEdit")
              }
            }, 200)
  }

  openUserEditInfoModal(){
    if(this.state.userEdit){
      return (
      <div>
          <div className="user-editForm-modal" onClick={() => this.closeModal("userEdit")}/>
          <div onSubmit={() => this.handleSubmit()}> 
            <EditUserFormContainer id = {this.state.user.id}/>
          </div>
          <button id="channel-exit-x" onClick={() => this.closeModal("userEdit")}>
            <i className="fa-solid fa-xmark"/>
            </button>
      </div>
      )
    }
    return null;
  }

  openDeleteModal(){
    if (this.state.deleteForm){
      return(
        <div>
          <div className="user-editForm-modal" onClick={() => this.closeModal("deleteForm")}/>
          <div onSubmit={() => this.closeModal("deleteForm")}> 
            <UserDeleteForm 
              user = {this.props.user}
              deleteUser = {this.props.delete}
            />
          </div>
          <button id="channel-exit-x" onClick={() => this.closeModal("deleteForm")}><i className="fa-solid fa-xmark"/></button>
      </div>
      )
    } else{
      return null;
    }
  }

  render(){
   // prevent the demo account from being deleted
    const deleteButton = this.props.user.email === "DemoUser1@strife.com" ? <button id ="delete-user"> 
      Delete Account (Disabled for Demo Account)</button> : 
    <button className="delete-user-Account-button" onClick={() => this.openModal("deleteForm")}>Delete Account</button>
  
    // prevent the user from modifying the demousers info if the demouser is loggged in 
    const updateButton = 
      <button className="update-userInfo-button" onClick= {() => this.openModal("userEdit")}>
        Edit User Profile </button> 

    return(
      <div className= "user-profile">
        {this.openUserEditInfoModal()}
        {this.openDeleteModal()}
        <div id="user-side-nav"> 
          <ul id="user-side-nav-list">
            <Link to={`/users/${this.props.user.id}`}> 
              <li className = "user-side-nav-item selected-dm">My Account</li>
            </Link>
            <Link to={`/channels/@me`}> 
              <li className = "user-side-nav-item">My Direct Messages</li>
            </Link>
            <li className = "user-side-nav-item" onClick={() => this.props.logoutUser()}> 
              <span>Log Out</span>
                <i className="fa-solid fa-arrow-right"></i>
            </li>
          </ul>
        </div>
        <div id="user-profile-header"> 
          <h3 className="my-account-header">My Account</h3>
          <div id="to-home"> 
            <Link id="home-link" to="/channels/@me">
                <i className="fa-solid fa-xmark"/>
            </Link> 
            <p id="esc">ESC</p>
          </div>
        </div>
        <div id="user-profile-content">
          <div id="user-profile-dark-top"/> 
          <div id ="user-top-info"> 
            <div className={"invading-div"}>
              <div className={`user-icon-profile color-${this.props.user.color_tag}`}>
                <i className="fa-brands fa-discord"/>
              </div>
            </div>
            <div id="user-fullname"> 
              <h4>{this.props.user.username}</h4> 
              <span>#{this.props.user.strife_id_tag}</span>
            </div>
            {updateButton}
          </div>
          <div id="user-info"> 
            <div id="user-username"> 
              <p> Username: </p> 
              <div id="actual-info"> 
                <p>{this.props.user.username}</p> 
                <span>STRIFE ID #{this.props.user.strife_id_tag}</span>
              </div>
            </div>
            <div id="user-email"> 
              <p>Email Address: </p>
              <div id="actual-info">
                <p>{this.props.user.email}</p>
              </div>
            </div>
          </div>
          <div id="user-buttons">  
            {deleteButton}
          </div>
        </div>
      </div>

    )
  }
}




export default UserProfile;