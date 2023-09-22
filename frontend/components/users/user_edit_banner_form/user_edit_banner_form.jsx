import React from "react"
import user_Default_Banner from '../../../../app/assets/images/default_banner.svg';
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { useState, useRef, useEffect } from "react";
import { CloseXIcon } from "../../front_end_svgs/Strife_svgs";


const EditUserBanner = (props) => {

    const popUpRef = useRef(null);
    const [banner, setBanner] = useState('');
    const [banner_url, setBannerUrl] = useState('');
    const [remove_UB, setRemoveUB] = useState(false);
    const [renderButton, setRenderButton] = useState('');
    const file_Input_Ref = useRef(null);
    const [inSubmission, setInSubmission] = useState(false);

    useEffect(() => {
        setBannerUrl(props.currentUser.banner);
        if (props.currentUser.banner === undefined) {
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

        if (props.currentUser.banner !== undefined) {
            if (banner_url !== props.currentUser.banner) {
                setRenderButton(saveButton);
            }
            else if (banner_url === props.currentUser.banner) {
                setRenderButton(removeButton);
            }
        }
        else {
            setRenderButton(saveButton);
        }
    }, [banner_url]);


    const handleSubModalCloseOnOutsideClick = (e) => {
        e.preventDefault();
        if (inSubmission === false) {
            let modalToClose = document.getElementById("user-sub-modal-edit-banner");
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


    const handleRemoveBannerSubmission = (e) => {
        e.preventDefault();
        props.removeSessionErrors();
        let submitButton = document.getElementById('submit-banner');
        submitButton.disabled = true;

        if (props.currentUser.banner) {
            setRemoveUB(true);
            setBanner(null);
            setBannerUrl('');

        }
        let formData = new FormData();
        formData.append('user[remove_UB]', remove_UB);
        props.changeUserBanner(props.currentUser.id, formData).then(() => {
            App.StrifeCore.perform('transmit_to_other_channel', { currrentUserLocation: props.location.pathname });
            submitButton.disabled = false;
        }, (error) => {
            submitButton.disabled = false;
        });

    }


    const handleFileInput = (e) => {
        const fileReader = new FileReader();
        const file = e.currentTarget.files[0];

        fileReader.onloadend = () => {

            setBannerUrl(fileReader.result);
            setBanner(file);

        }

        if (file) {
            fileReader.readAsDataURL(file);
        }
        else {
            setBannerUrl("");
            setBanner(null);
        }

    }



    const handleSubmit = (e) => {
        e.preventDefault();
        props.removeSessionErrors();
        let modalToClose = document.getElementById("user-sub-modal-edit-banner");
        let submitButton = document.getElementById('submit-banner');
        submitButton.disabled = true;
        setInSubmission(true);

        let formData = new FormData();


        formData.append('user[username]', props.currentUser.username);
        if (banner) {
            formData.append('user[user_Banner]', banner);
        }

        props.changeUserBanner(props.currentUser.id, formData).then(() => {
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
        <button id='submit-banner' type='button' className={`user-sub-modal-edit-pfp-submit-button`} onClick={(e) => handleRemoveBannerSubmission(e)}>
            <div id="submit-button-text" className='look-filled-button-contents global-button-contents'>Remove</div>
        </button>
    );
    let saveButton = (
        <button id='submit-banner' type='submit' className={`user-sub-modal-edit-pfp-submit-button`}>
            <div id="submit-button-text" className='look-filled-button-contents global-button-contents'>Apply</div>
        </button>
    );


    return (

        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="sub-modal-layer" onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                <div className='sub-modal-backdrop'></div>
                <div className='user-sub-modal-wrapper'>
                    <div className='user-sub-modal-focus-lock'>
                        <div className='user-sub-modal-edit-banner' id="user-sub-modal-edit-banner" ref={popUpRef} onClick={(e) => e.stopPropagation()}>
                            <div className='usub-edit-pfp-header' style={{ flex: `0 0 auto` }}>
                                <div className='usub-edit-pfp-header-title'>
                                    Change Your Banner
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
                                            Banner
                                            {ifFileError}
                                        </h2>
                                    </div>
                                    <div className='usub-edit-banner-display-container' onClick={(e) => file_Input_Ref.current.click()}>
                                        {
                                            banner_url ? (
                                                <img className="usub-edit-banner-display-img" src={banner_url} alt=" " />
                                            ) : (
                                                <img className={`usub-edit-banner-display-img color-${props.currentUser.color_tag}`} src={user_Default_Banner} alt=" " />
                                            )
                                        }
                                        <div className="usub-edit-banner-hover-hint">Upload New Profile Banner</div>
                                        <img className="usub-img-upload-banner-hint-icon" alt=" " />
                                        <div className="usub-overlay-edit-banner"></div>
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

export default EditUserBanner;
