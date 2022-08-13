import React from "react"
import { Link, Redirect } from 'react-router-dom'


class EditUserPFP extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            user: this.props.currentUser,
            photo: this.props.currentUser.photo
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
}

export default EditUserPFP;
