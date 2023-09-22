import React from "react"
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { useState, useRef, useEffect } from "react";
import DefaultPFPSVG3 from '../../../../app/assets/images/defaultPFPSVG3.svg';
import { CloseXIcon } from "../../front_end_svgs/Strife_svgs";

const EditUserPFP = (props) => {

    const popUpRef = useRef(null);
    const [photo, setPhoto] = useState('');
    const [photo_url, setPhotoUrl] = useState('');
    const [remove_PFP, setRemovePFP] = useState(false);
    const [renderButton, setRenderButton] = useState('');
    const file_Input_Ref = useRef(null);
    const [inSubmission, setInSubmission] = useState(false);

    useEffect(() => {
        setPhotoUrl(props.currentUser.photo);
        if (props.currentUser.photo === undefined) {
            setRenderButton(saveButton);
        }
        else {
            setRenderButton(removeButton);
        }

        window.addEventListener('keyup', handleESC, false);

        return function cleanUp () {
            props.removeSessionErrors();
            window.removeEventListener('keyup', handleESC, false);

        }

    }, []);



    useEffect(() => {

        if (props.currentUser.photo !== undefined) {
            if (photo_url !== props.currentUser.photo) {
                setRenderButton(saveButton);
            }
            else if (photo_url === props.currentUser.photo) {
                setRenderButton(removeButton);
            }
        }
        else {
            setRenderButton(saveButton);
        }
    }, [photo_url]);



    const handleSubModalCloseOnOutsideClick = (e) => {
        e.preventDefault();
        if (inSubmission === false) {

            let modalToClose = document.getElementById("user-sub-modal-edit-pfp");
            if (modalToClose) {
                modalToClose.classList.add("transition-out");
                Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                    .then(() => {
                        props.closeSubMod(props.formName);
                        window.removeEventListener('keyup', handleESC, false);
                    }, () => {
                        props.closeSubMod(props.formName);
                        window.removeEventListener('keyup', handleESC, false);
                    });
            }
            else {
                props.closeSubMod(props.formName);
                window.removeEventListener('keyup', handleESC, false);
            }
        }
    }

    const handleESC = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                handleSubModalCloseOnOutsideClick(e);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }



    const fileProcessingErrors = () => {
        if (props.errors.includes('cannot process file')) {
            return "file is bad format/failed to process";
        }
        return "";
    }

    const handleRemovePFPSubmission = (e) => {
        e.preventDefault();
        props.removeSessionErrors();
        let submitButton = document.getElementById('submit-pfp');
        submitButton.disabled = true;

        if (props.currentUser.photo) {
            setRemovePFP(true);
            setPhoto(null);
            setPhotoUrl('');

        }
        let formData = new FormData();
        formData.append('user[remove_PFP]', remove_PFP);
        //check user location after updating if they are in a server broadcast a signal to rerender the server
        props.changeUserPFP(props.currentUser.id, formData).then(() => {
            App.StrifeCore.perform('transmit_to_other_channel', { currrentUserLocation: props.location.pathname })
            submitButton.disabled = false;
        }, (error) => {
            submitButton.disabled = false;
        });
    }

    const handleFileInput = (e) => {

        const fileReader = new FileReader();
        const file = e.currentTarget.files[0];

        fileReader.onloadend = () => {
            setPhotoUrl(fileReader.result)
            setPhoto(file);
        }

        if (file) {
            fileReader.readAsDataURL(file);
        }
        else {
            setPhotoUrl("");
            setPhoto(null);
        }

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        props.removeSessionErrors();

        let submitButton = document.getElementById('submit-pfp');
        submitButton.disabled = true;
        setInSubmission(true);

        let formData = new FormData();

        formData.append('user[username]', props.currentUser.username);
        if (photo) {
            formData.append('user[photo]', photo);
        }

        props.changeUserPFP(props.currentUser.id, formData).then(() => {
            App.StrifeCore.perform('transmit_to_other_channel', { currrentUserLocation: props.location.pathname });
            handleSubModalCloseOnOutsideClick(e);
        }, (error) => {
            setInSubmission(false);
            submitButton.disabled = false;
        });
    }


    let ifFileError = props.errors.length > 0 && fileProcessingErrors() !== "" ? (
        <span className='user-sub-modal-field-input-error'>
            <span className='user-sub-modal-field-input-error-sep'>-</span>
            {fileProcessingErrors()}
        </span>
    ) : ("");


    let removeButton = (
        <button id='submit-pfp' type='button' className={`user-sub-modal-edit-pfp-submit-button`}
            onClick={(e) => { handleRemovePFPSubmission(e) }}>
            <div id="submit-button-text" className='look-filled-button-contents global-button-contents'>Remove</div>
        </button>
    );
    let saveButton = (
        <button id='submit-pfp' type='submit' className={`user-sub-modal-edit-pfp-submit-button`}>
            <div id="submit-button-text" className='look-filled-button-contents global-button-contents'>Apply</div>
        </button>
    );

    return (


        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="sub-modal-layer" onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                <div className='sub-modal-backdrop'></div>
                <div className='user-sub-modal-wrapper'>
                    <div className='user-sub-modal-focus-lock'>
                        <div className='user-sub-modal-edit-pfp' id="user-sub-modal-edit-pfp" ref={popUpRef} onClick={(e) => e.stopPropagation()}>
                            <div className='usub-edit-pfp-header' style={{ flex: `0 0 auto` }}>
                                <div className='usub-edit-pfp-header-title'>
                                    Change Your Avatar
                                </div>
                                <div className='usub-edit-pfp-header-title-subtext'>Upload a .jpg, .jpeg, .gif, or .png file</div>
                                <button type='button' className='user-sub-modal-x-to-close-button' onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                                    <div className='global-button-contents'>
                                        <CloseXIcon className="closeIconX" />
                                    </div>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className='user-sub-modal-edit-pfp-scroll global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                                    <div className="usub-edit-pfp-input-wrapper">
                                        <h2 className={`usubm-field-header ${fileProcessingErrors() !== "" ? `usubm-field-input-error-color` : ``}`}>
                                            Avatar
                                            {ifFileError}
                                        </h2>
                                    </div>
                                    <div className='usub-edit-pfp-display-container' onClick={(e) => file_Input_Ref.current.click()}>
                                        {
                                            photo_url ? (
                                                <img className="usub-edit-pfp-display-img" src={photo_url} alt=" " />
                                            ) : (
                                                <img className={`usub-edit-pfp-display-img color-${props.currentUser.color_tag}`} src={DefaultPFPSVG3} alt=" " />
                                            )
                                        }
                                        <div className="usub-edit-pfp-hover-hint">Upload New Avatar</div>
                                        <img className="usub-img-upload-hint-icon" alt=" " />
                                        <div className="usub-overlay-edit-pfp"></div>
                                        <input type='file' accept=".jpg, .jpeg, .png, .gif" onChange={(e) => handleFileInput(e)} ref={file_Input_Ref} />

                                    </div>

                                    <div className='user-sub-modal-form-sep'></div>
                                </div>

                                <div className='user-sub-modal-edit-pfp-button-footer-container'>
                                    <div className='usubm-edit-pfp-buttons-right'>
                                        <button type='button' className='user-sub-modal-edit-pfp-cancel-button' onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                                            <div className='look-filled-button-contents global-button-contents'>Cancel</div>
                                        </button>
                                        {renderButton}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL>
    )



}






export default EditUserPFP;
