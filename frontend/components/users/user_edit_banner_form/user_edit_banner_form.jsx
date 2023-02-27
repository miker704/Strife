import React from "react"
import user_Default_Banner from '../../../../app/assets/images/default_banner.svg';
class EditUserBanner extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            banner: '',
            banner_url: this.props.currentUser.banner,
            submit: false,
            remove_UB: false

        }

        this.file_input = null;
        this.cancel = false;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleFileInput = this.handleFileInput.bind(this);
        this.fileProcessingErrors = this.fileProcessingErrors.bind(this);
        this.handleRemoveBannerSubmission = this.handleRemoveBannerSubmission.bind(this);
    }

    componentDidUpdate (prevProps) {
        if (this.state.submit && prevProps.currentUser !== this.props.currentUser) { return };
    }


    handleRemoveBannerSubmission (e) {
        e.preventDefault();

        if (this.props.currentUser.banner) {
            this.setState({
                remove_UB: true,
                banner: null,
                banner_url: ''
            })
        }
        let formData = new FormData();
        formData.append('user[remove_UB]', this.state.remove_UB);
        this.props.changeUserBanner(this.props.currentUser.id, formData);
       
    }

    fileProcessingErrors () {
        if (this.props.errors.includes('cannot process file')) {
            return " - file is bad format/failed to process";
        }
        return "";
    }


    handleFileInput (e) {
        const fileReader = new FileReader();
        const file = e.currentTarget.files[0];
     
        fileReader.onloadend = () => {
            this.setState({
                banner_url: fileReader.result,
                banner: file
            });

            if (this.props.currentUser.banner !== undefined) {
                if (this.state.banner_url !== this.props.currentUser.banner) {
                    document.getElementById('rm-banner-button').classList.add('is-hidden');
                    document.getElementById('save-banner-button').classList.remove('is-hidden');
                }
            }
        }

        if (file) {
            fileReader.readAsDataURL(file);
        }
        else {
            this.setState({ banner_url: "", banner: null })
        }



    }

    componentDidMount () {
        this.file_input = document.querySelector("input[type=file]");
    }

    componentWillUnmount () {
        this.props.removeSessionErrors()
    }

    handleInput (input) {
        return (e) => { this.setState({ [input]: e.currentTarget.value }) }
    }

    handleSubmit (e) {
        e.preventDefault();
        if (this.cancel === true) {
            this.props.removeSessionErrors();
            return;
        }
        let formData = new FormData();
        let submissionState = {};
        formData.append('user[username]', this.props.currentUser.username);
        if (this.state.banner) {
            formData.append('user[user_Banner]', this.state.banner);
            submissionState = {
                id: this.props.currentUser.id,
                user_Banner: this.state.banner
            }
        }

        this.props.changeUserBanner(this.props.currentUser.id, formData);

        this.setState({
            submit: true,
        })
    }

    render () {

        let fileErrorTag = this.props.errors.length > 0 ? "field-error" : "";

        return (

            <div id="edit-userInfo-model" className="edit-userInfo-model" >
                <div className="edit-username-header-section">
                    <div className="edit-username-header">
                        Change your Banner
                    </div>
                    <div className="edit-username-header-info">
                        Upload a .jpg, .jpeg, .gif, or .png file
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-container1">

                        <div className="form-username-sec">
                            <h5 className="form-username-header"> <label className={fileErrorTag}>Banner{this.fileProcessingErrors()}</label></h5>
                            <div className="username-form-input-sec">
                                <div className={`username-input-wrapper-banner`}>

                                    <div className={`user-Banner-wrapper ${this.state.banner_url === undefined ||
                                        this.state.banner_url === '' ? `color-${this.props.currentUser.color_tag}` : ``}`}
                                        onClick={() => this.file_input.click()}>
                                        <p className="user-pfp-header">Upload new banner</p>
                                        <img className="img-upload-hint-icon" />
                                        <img className="user-Banner"
                                            src={`${this.state.banner_url === undefined ||
                                                this.state.banner_url === '' ?
                                                user_Default_Banner : this.state.banner_url}`}
                                            alt={'defaultUserPFP'} />
                                    </div>

                                    {/* <input type='file' accept=".jpg, .jpeg, .png, .gif" onChange={this.handleFileInput} disabled={this.props.currentUser.banner === undefined ? false : true} />
                                     */}
                                    <input type='file' accept=".jpg, .jpeg, .png, .gif" onChange={this.handleFileInput} />

                                </div>
                            </div>
                        </div>

                        <div className="username-edit-sep"></div>
                    </div>
                    <div className="username-edit-button-sec">
                        <button type="submit" id='save-banner-button'
                            className={`username-edit-submit-button ${this.props.currentUser.banner === undefined ? `` : `is-hidden`}`}>
                            Save
                        </button>
                        <button id='rm-banner-button' type="button" onClick={(e) => this.handleRemoveBannerSubmission(e)}
                            className={`username-edit-submit-button ${this.props.currentUser.banner !== undefined ? `` : `is-hidden`}`}>
                            Remove
                        </button>
                        <button type="submit" onClick={() => this.cancel = true} className="username-edit-cancel-button">Cancel</button>
                    </div>

                </form>
            </div>

        )


    }



}

export default EditUserBanner;
