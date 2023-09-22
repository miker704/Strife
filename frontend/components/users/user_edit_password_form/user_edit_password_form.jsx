import React from 'react';
import { useState, useRef, useEffect } from "react";
import REACT_PORTAL from '../../../utils/ReactPortal_api_util';
import { CloseXIcon } from '../../front_end_svgs/Strife_svgs';

const EditUserPasswordForm = (props) => {
    const popUpRef = useRef(null);
    const [password, setPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {

        window.addEventListener('keyup', handleESC, false);

        return function cleanUp () {
            props.removeSessionErrors();
            window.removeEventListener('keyup', handleESC, false);

        }
    }, []);


    const handleSubModalCloseOnOutsideClick = (e) => {
        e.preventDefault();
        let modalToClose = document.getElementById("user-sub-modal");
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
    const handleSubmit = (e) => {

        e.preventDefault();
        let submissionState = {
            id: props.currentUser.id,
            password: password,
            newPassword: newPassword,
            confirmNewPassword: confirmNewPassword
        }
        props.changePassword(submissionState).then(() => {
            handleSubModalCloseOnOutsideClick(e);
        });
    }


    const passwordErrors = () => {

        let passwordErrorList = [
            'Error Incorrect Password !',
        ];
        let passwordErrorMessages = {
            0: "incorrect Password",
        }

        for (let i = 0; i < passwordErrorList.length; i++) {
            if (props.errors.includes(passwordErrorList[i])) {
                return passwordErrorMessages[i];
            }
        }
        return "";
    }

    const newPasswordErrors = () => {

        let passwordErrorList = [
            'Error new password cannot match your previous password !',
            'Error new password must be 8 to 72 in length',
            'Error new password cannot be blank'
        ];
        let passwordErrorMessages = {
            0: "cannot be an old password",
            1: 'must be 8-72 characters in length',
            2: "Your new password cannot be empty"
        }

        for (let i = 0; i < passwordErrorList.length; i++) {
            if (props.errors.includes(passwordErrorList[i])) {
                return passwordErrorMessages[i];
            }
        }

        return "";

    }

    const confirmPasswordErrors = () => {

        let passwordErrorList = [
            'Error new password does not match confirm password !',
        ];
        let passwordErrorMessages = {
            0: 'Passwords do not match!',
        }

        for (let i = 0; i < passwordErrorList.length; i++) {
            if (props.errors.includes(passwordErrorList[i])) {
                return passwordErrorMessages[i];
            }
        }
        return "";
    }


    let ifNewPasswordError = props.errors.length > 0 && newPasswordErrors() !== "" ? (
        <span className='user-sub-modal-field-input-error'>
            <span className='user-sub-modal-field-input-error-sep'>-</span>
            {newPasswordErrors()}
        </span>
    ) : ("");
    let ifConfirmPasswordError = props.errors.length > 0 && confirmPasswordErrors() !== "" ? (
        <span className='user-sub-modal-field-input-error'>
            <span className='user-sub-modal-field-input-error-sep'>-</span>
            {confirmPasswordErrors()}
        </span>
    ) : ("");
    let ifPassWordError = props.errors.length > 0 && passwordErrors() !== "" ? (
        <span className='user-sub-modal-field-input-error'>
            <span className='user-sub-modal-field-input-error-sep'>-</span>
            {passwordErrors()}
        </span>
    ) : ("")



    return (
        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="sub-modal-layer" onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                <div className='sub-modal-backdrop'></div>
                <div className='user-sub-modal-wrapper'>
                    <div className='user-sub-modal-focus-lock'>
                        <div className='user-sub-modal' id="user-sub-modal" ref={popUpRef} onClick={(e) => e.stopPropagation()}>
                            <div className='user-sub-modal-header-container-username-edit' style={{ flex: `0 0 auto` }}>
                                <div className='user-sub-modal-title'>Update your password</div>
                                <div className='user-sub-modal-title-subtext'>Enter your current password and a new password.</div>
                                <button type='button' className='user-sub-modal-x-to-close-button' onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                                    <div className='global-button-contents'>
                                        <CloseXIcon className="closeIconX" />
                                    </div>
                                </button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className='user-sub-modal-form-content global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>

                                    <div>
                                        <h2 className={`usubm-current-password-subtext ${passwordErrors() !== "" ? `usubm-field-input-error-color` : ``}`}>
                                            Current Password
                                            {ifPassWordError}
                                        </h2>
                                        <div className='user-sub-modal-password-wrapper'>
                                            <input className="user-sub-modal-password-input-field" type="password"
                                                maxLength={999} value={password} autoComplete='off'
                                                spellCheck={false} onChange={(e) => setPassword(e.currentTarget.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className='user-sub-modal-password-container'>
                                        <h2 className={`usubm-current-password-subtext ${newPasswordErrors() !== "" ? `usubm-field-input-error-color` : ``}`}>
                                            New Password
                                            {ifNewPasswordError}
                                        </h2>
                                        <div className='user-sub-modal-password-wrapper'>
                                            <input className="user-sub-modal-password-input-field" type="password"
                                                maxLength={999} value={newPassword} autoComplete='off'
                                                spellCheck={false} onChange={(e) => setNewPassword(e.currentTarget.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='user-sub-modal-password-container'>
                                        <h2 className={`usubm-current-password-subtext ${confirmPasswordErrors() !== "" ? `usubm-field-input-error-color` : ``}`}>
                                            Confirm New Password
                                            {ifConfirmPasswordError}
                                        </h2>
                                        <div className='user-sub-modal-password-wrapper'>
                                            <input className="user-sub-modal-password-input-field" type="password"
                                                maxLength={999} value={confirmNewPassword} autoComplete='off'
                                                spellCheck={false} onChange={(e) => setConfirmNewPassword(e.currentTarget.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className='user-sub-modal-form-sep'></div>
                                </div>
                                <div className='user-sub-modal-button-footer-container'>
                                    <button id="okay-button" type='submit' className='user-sub-modal-submit-button'>
                                        <div id="submit-button-text" className='look-filled-button-contents global-button-contents'>Done</div>
                                    </button>
                                    <button type='button' className='user-sub-modal-cancel-button' onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                                        <div className='look-filled-button-contents global-button-contents'>Cancel</div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL >
    )



}

export default EditUserPasswordForm;