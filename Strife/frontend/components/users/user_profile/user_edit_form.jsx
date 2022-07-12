import React from "react"

class UserEditForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.user
    this.cancel_changes = false;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.emailErrors=this.emailErrors.bind(this);
    this.userNameErrors=this.userNameErrors.bind(this);
  }

  componentWillUnmount(){
    this.props.removeSessionErrors()
  }

  handleSubmit(e){
    e.preventDefault();

    if(this.cancel_changes){
      return;
    
    }
    this.props.action(this.state)
  }

  handleInput(field){
    return (e) => {this.setState({[field] : e.currentTarget.value})}
  }




  emailErrors() {
    const EMAIL_ERRORS = ['Email Not well formed email address', "Must be 320 or fewer in Length", "Email can't be blank", "Email has already been taken", "Login or password is invalid"];

    if (this.props.formType === "Sign In") {
        if (this.props.errors.includes('Login or password is invalid')) {
            return " - Login or password is invalid";
        }
    }

    if (this.props.formType === "Sign Up") {
        if (this.props.errors.includes("Email can't be blank")) {
            return " - can't be blank";
        }
        else if (this.props.errors.includes("Email Not well formed email address")) {

            return " - Not well formed email address";
        }
        else if (this.props.errors.includes("Email Must be 320 or fewer in Length")) {
            return " - Must be 320 or fewer in Length";
        }
        else if (this.props.errors.includes("Email has already been taken")) {
            return " - Email is already registered ";
        }

    }

    return "";
}

userNameErrors() {

  let USERNAME_ERRORS = ['Username is too short (minimum is 2 characters)', 'Username is too long (maximum is 32 characters)', 'Username Must be between 2 and 32 in length', "Username can't be blank"]
  if (this.props.formType === "Sign Up") {
      if (this.props.errors.includes("Username can't be blank")) {
          return " - This field is required";
      }
      else if (this.props.errors.includes('Username is too short (minimum is 2 characters)')) {

          return ' - Must be between 2 and 32 in length';
      }
      else if (this.props.errors.includes('Username is too long (maximum is 32 characters)')) {
          return ' - Must be between 2 and 32 in length';
      }

  }
  return "";
}



  render(){
    // Set Username based on if errors exist
    let userName = this.props.errors.includes("Username can't be blank") ?
      <p id="channel-error-name"> USERNAME: CANNOT BE BLANK</p> :
      <p id="channel-form-name"> USERNAME</p>

    let email = this.props.errors.includes("Email can't be blank") ? 
      <p id ="channel-error-name"> EMAIL: CANNOT BE BLANK </p> 
      : this.props.errors.includes("Email has already been taken") 
      ? <p id ="channel-error-name"> EMAIL: HAS ALREADY BEEN TAKEN </p>
      :  <p id="channel-form-name"> EMAIL</p> 

      // prevent modifcation of the demo user
    let submitButton =  this.props.user.email === "DemoUser1@strife.com" ? 
      <button type ="button" id="user-edit-submit"> Done (Disabled for Demo)</button> 
      :  <button type="submit" id="user-edit-submit">Done</button>

    let cancelButton = <button id="cancel-form" 
      type = "submit"
      onClick={() => this.cancel_changes = true}
      >Cancel</button>
      
    return (
      <div id="channel-form"> 
        <form  onSubmit={this.handleSubmit}>
          <div id="channel-form-top"> 
            <h5 id="user-edit-form-header">Edit User Credentials</h5>
            {userName}
            <div id ="channel-form-name-input-container">
              <input 
                autoFocus
                type="text"
                value={this.state.username}
                onChange={this.handleInput("username")}
                id ="channel-form-name-input"
              />
            </div>
            <br/>
            {email}
            <div id ="channel-form-name-input-container">
              <input 
                type="email"
                value={this.state.email}
                onChange={this.handleInput("email")}
                id ="channel-form-name-input"
              />
            </div>
          </div>
          <div id="channel-form-bottom"> 
          {/* Submit button to allow enter to properly work */}
            {submitButton}
            {cancelButton}
          </div>
        </form>
      </div>
    )
  }
}

export default UserEditForm;