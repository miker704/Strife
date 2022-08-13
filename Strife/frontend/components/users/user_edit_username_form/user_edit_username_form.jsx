import React from "react"
import { Link, Redirect } from 'react-router-dom'


class EditUsernameForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            user: this.props.currentUser,
            username: this.props.currentUser.username
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.userNameErrors = this.userNameErrors.bind(this);

    }
    componentWillUnmount () {
        this.props.removeSessionErrors()
    }

    handleInput (field) {
        return (e) => { this.setState({ [field]: e.currentTarget.value }) }
    }



}

export default EditUsernameForm;