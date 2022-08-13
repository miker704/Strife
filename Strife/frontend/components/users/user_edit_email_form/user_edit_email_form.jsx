import React from "react"
import { Link, Redirect } from 'react-router-dom'


class EditUserEmailForm extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            user: this.props.currentUser,
            email: this.props.currentUser.email
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
}

export default EditUserEmailForm;