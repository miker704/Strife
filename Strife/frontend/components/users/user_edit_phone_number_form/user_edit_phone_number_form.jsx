import React from "react"
import { Link, Redirect } from 'react-router-dom'


class EditUserPhoneNumberForm extends React.Component {
    constructor (props) {
        super(props)
       
        this.state = this.props.currentUser;
        this.cancel = false;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.passwordErrors = this.passwordErrors.bind(this);

    }


    passwordErrors () {
        console.log("hello password errors");
        if (this.props.errors.includes('Login or password is invalid')) {
            console.log("no match in password")
            return " - Password does not match.";
        }
        else if (this.props.errors.includes("Incorrect Password !")){
            console.log("password is incorrect")
            return " - Password does not match.";
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
    
        let submissionState = {
            phone_number: this.state.phone_number
        }
        this.props.updateUserInfo(submissionState);
      }



      render (){
        // let usernameErrorTag = this.props.errors.length > 0 ? "field-error" : "";
        let passwordErrorTag = this.props.errors.length > 0 ? "field-error" : "";

        return (
        
        <div>



        </div>
        
        )
      }






}

export default EditUserPhoneNumberForm;