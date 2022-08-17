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
        this.handleFileInput = this.handleFileInput.bind(this);
        this.fileProcessingErrors = this.fileProcessingErrors.bind(this);
    }


    fileProcessingErrors(){
        if(this.props.errors.includes('cannot process file')){
            return " - file is bad format/failed to process";
        }
        return "";
    }


    handleFileInput(e){

    }



    componentWillUnmount () {
        this.props.removeSessionErrors()
    }

    handleInput (field) {
        return (e) => { this.setState({ [field]: e.currentTarget.value }) }
    }

    handleSubmit (e) {
        e.preventDefault();

        let submissionState = {
            photo: this.state.newPhoto
        }
        this.props.updateUserInfo(submissionState);
    }

    render () {

        //checking to see what is what 
        console.log("user photo : ", this.props.currentUser.photo);
        let fileErrorTag = this.props.errors.length > 0 ? "field-error" : "";


        return (


            <div id="edit-userInfo-model" className="edit-userInfo-model" >
                <div className="remove-phone-form-header-wrapper">
                    <div className="remove-phone-header">
                        Remove Phone Number
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-container1">


                        <div className="password-section">
                            <h5 className="password-header1">
                                <label className={fileErrorTag}>{this.fileProcessingErrors()}</label>
                            </h5>
                            <div className="input-3-password-wrapper">
                                <input value={this.state.newPhoto} onChange={this.handleFileInput("file")} type="password" className="input-3-password" />
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

export default EditUserPFP;
