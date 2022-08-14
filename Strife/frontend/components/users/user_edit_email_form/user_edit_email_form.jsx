import React from "react"
import { Link, Redirect } from 'react-router-dom'


class EditUserEmailForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            user: this.props.currentUser,
            email: this.props.currentUser.email,
            password: ""
        }
        this.cancel = false;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.userNameErrors = this.userNameErrors.bind(this);
        this.passwordErrors = this.passwordErrors.bind(this);

    }

    
    passwordErrors () {
        if (this.props.errors.includes('Login or password is invalid')) {
            return " - Password does not match.";
        }
        else if (this.props.errors.includes("Error Incorrect Password !")){
            return " - Password does not match.";
        }
        return "";
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


    componentWillUnmount () {
        this.props.removeSessionErrors()
    }

    handleInput (field) {
        return (e) => { this.setState({ [field]: e.currentTarget.value }) }
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.cancel === true){
            return;
        }
        let submissionState = {
            email: this.state.email
        }
        this.props.updateUserInfo(submissionState);
      }



      render (){

        let emailErrorTag = this.props.errors.length > 0 ? "field-error" : "";
        let passwordErrorTag = this.props.errors.length > 0 ? "field-error" : "";

        return (
            <div>

            </div>
        )
      }



}

export default EditUserEmailForm;