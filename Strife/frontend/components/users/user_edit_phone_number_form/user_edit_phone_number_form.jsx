import React from "react"
import { Link, Redirect } from 'react-router-dom'


class EditUserPhoneNumberForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            user: this.props.currentUser,
            phone_number: this.props.currentUser.phone_number
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleInput = this.handleInput.bind(this);

    }

    componentWillUnmount () {
        this.props.removeSessionErrors()
    }
}

export default EditUserPhoneNumberForm;