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
        this.handleInput = this.handleInput.bind(this);

    }

    componentWillUnmount () {
        this.props.removeSessionErrors()
    }

    handleInput (field) {
        return (e) => { this.setState({ [field]: e.currentTarget.value }) }
    }
    handleSubmit (e) {
        e.preventDefault();
        if (this.cancel === true) {
            this.props.removeSessionErrors();
            return;
        }
        let submissionState = {
            id: this.props.currentUser.id,
            password: this.state.newPassword
        }
        // this.props.updateUserInfo(submissionState);
        this.props.changePassword(submissionState);
    }

    render () {
        return (
            <div id="edit-userInfo-model" className="edit-userInfo-model" >
                <div className="edit-username-header-section">
                    <div className="edit-username-header">
                        Enter an email address
                    </div>
                    <div className="form-email-header-info">
                        Enter a new email address and your existing password
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-container1">

                        <div className="form-username-sec">
                            <h5 className="form-username-header"><label className={emailErrorTag}>Email{this.emailErrors()}</label></h5>
                            <div>
                                <div className="email-input-wrapper">
                                    <input placeholder={this.props.currentUser.email} value={this.state.email} onChange={this.handleInput("email")} className="input-4-email" type="email" />
                                </div>

                            </div>
                        </div>
                        <div className="password-section">
                            <h5 className="password-header1">
                                <label className={passwordErrorTag}>Current Password{this.passwordErrors()}</label>
                            </h5>
                            <div className="input-3-password-wrapper">
                                <input value={this.state.password} onChange={this.handleInput("password")} type="password" className="input-3-password" />
                            </div>
                        </div>
                        <div className="username-edit-sep"></div>
                    </div>
                    <div className="username-edit-button-sec">
                        <button type="submit" className="username-edit-submit-button">Done</button>
                        <button type="submit" onClick={() => this.cancel = true} className="username-edit-cancel-button">Cancel</button>
                    </div>



                </form>
            </div>
        )
    }

}

export default EditUserPasswordForm;