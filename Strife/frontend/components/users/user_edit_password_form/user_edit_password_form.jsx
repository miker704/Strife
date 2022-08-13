import React from "react"
import { Link, Redirect } from 'react-router-dom'


class EditUserPasswordForm extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            user: this.props.currentUser,
            password: "",
            newPassword: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
}

export default EditUserPasswordForm;