import React from "react"
import { Link, Redirect } from 'react-router-dom'


class EditUserPFP extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            user: this.props.currentUser,
            photo: this.props.currentUser.photo,
            newPhoto: this.props.currentUser.photo,
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleFileInput = this.handleFileInput.bind(this);
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
            photo: this.state.newPhoto
        }
        this.props.updateUserInfo(submissionState);
      }

}

export default EditUserPFP;
