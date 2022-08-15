import React from "react"
import { Link, Redirect } from 'react-router-dom'


class EditUserPasswordForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            user: this.props.currentUser,
            password: "",
            confirmOldPassword: "",
            confirmNewPassword: "",
            newPassword: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleInput = this.handleInput.bind(this);

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
            id: this.props.currentUser.id,
            password: this.state.newPassword
        }
        this.props.updateUserInfo(submissionState);
      }

    render(){

    }

}

export default EditUserPasswordForm;