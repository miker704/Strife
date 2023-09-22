import React from 'react';
import { useState, useRef, useEffect } from "react";
import REACT_PORTAL from '../../../utils/ReactPortal_api_util';
import { CloseXIcon, UploadPhoneNumberIcon } from '../../front_end_svgs/Strife_svgs';

const EditUserPhoneNumberForm = (props) => {

    const popUpRef = useRef(null);
    const [phone_number, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {

        window.addEventListener('keyup', handleESC, false);

        return function cleanUp () {
            props.removeSessionErrors();
            window.removeEventListener('keyup', handleESC, false);

        }
    }, []);


    const handleSubModalCloseOnOutsideClick = (e) => {
        e.preventDefault();
        let modalToClose = document.getElementById("user-sub-modal-edit-phone-number");
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

    const passwordErrors = () => {

        let passwordErrorList = [
            'Login or password is invalid',
            'Error Incorrect Password !',
        ]
        //error messages can be a bit big lets make a reduced version 
        let passwordErrorMessages = {
            0: "Password does not match.",
            1: "Password does not match.",
        }

        for (let i = 0; i < passwordErrorList.length; i++) {
            if (props.errors.includes(passwordErrorList[i])) {
                return passwordErrorMessages[i];
            }
        }

        return "";
    }

    const phoneNumberErrors = () => {

        let phoneNumberErrorList = [
            "Phone number is invalid, please confirm that it is correct.",
            'Phone number is not of 10 digits long',
        ];

        let phoneNumberErrorMessages = {
            0: "Phone number is invalid, please confirm that it is correct.",
            1: "Phone Number is not 10 digits long",
        }
        for (let i = 0; i < phoneNumberErrorList.length; i++) {
            if (props.errors.includes(phoneNumberErrorList[i])) {
                return phoneNumberErrorMessages[i];
            }
        }


        return "";
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        props.removeSessionErrors();

        let submissionState = {
            id: props.currentUser.id,
            phone_number: "+1" + phone_number,
            password: password
        }

        let elipAnimation = document.getElementById('elip-spin');
        let buttonText = document.getElementById("submit-button-text");
        buttonText.innerHTML = "";
        elipAnimation.classList.remove('is-hidden');
        props.updateUserInfo(submissionState).then(() => {
            handleSubModalCloseOnOutsideClick(e);
        })
        setTimeout(() => {
            elipAnimation.classList.add('is-hidden');
            buttonText.innerHTML = "Confirm";
        }, 285);
    }


    let ifPhoneNumberError = props.errors.length > 0 && phoneNumberErrors() !== "" ? (
        <span className='user-sub-modal-field-input-error'>
            <span className='user-sub-modal-field-input-error-sep'>-</span>
            {phoneNumberErrors()}
        </span>
    ) : ("")



    let ifPassWordError = props.errors.length > 0 && passwordErrors() !== "" ? (
        <span className='user-sub-modal-field-input-error'>
            <span className='user-sub-modal-field-input-error-sep'>-</span>
            {passwordErrors()}
        </span>
    ) : ("")


    const submissionBlocker = (e) => {
        e.preventDefault();
        if (document.getElementById("rpn-pwi").value === "" || document.getElementById("rpn-pwi").value === null) {
            document.getElementById("phone-number-submit-button").disabled = true;
        }
        else {
            document.getElementById("phone-number-submit-button").disabled = false;
        }
    }

    return (


        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="sub-modal-layer" onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                <div className='sub-modal-backdrop'></div>
                <div className='user-sub-modal-wrapper'>
                    <div className='user-sub-modal-focus-lock'>
                        <div className='user-sub-modal-edit-phone-number' id="user-sub-modal-edit-phone-number" ref={popUpRef} onClick={(e) => e.stopPropagation()}>
                            <div className='phone-number-animation-icon-container'>
                                <UploadPhoneNumberIcon />
                            </div>

                            <div className='user-sub-modal-header-container-username-edit' style={{ flex: `0 0 auto` }}>
                                <div className='user-sub-modal-title-change-number'>Enter a Phone Number</div>
                                <div className='user-sub-modal-title-change-number-description1'>Enter a Phone Number and your existing password</div>
                                <button type='button' className='user-sub-modal-x-to-close-button' onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                                    <div className='global-button-contents'>
                                        <CloseXIcon className="closeIconX" />
                                    </div>
                                </button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className='user-sub-modal-form-content global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                                    <div>
                                        <h2 className={`usubm-field-header ${phoneNumberErrors() !== "" ? `usubm-field-input-error-color` : ``}`}>
                                            Phone
                                            {ifPhoneNumberError}
                                        </h2>
                                        <div className='usubm-username-wrapper'>
                                            <div className='user-sub-modal-username-input-wrapper'>
                                                <input className="user-sub-modal-username-input-field" type="tel"
                                                    maxLength={11} value={phone_number} autoFocus placeholder={`${props.currentUser.phone_number !== null ? props.currentUser.phone_number : ``}`}
                                                    spellCheck={false} onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='user-sub-modal-password-container'>

                                        <h2 className={`usubm-field-header ${passwordErrors() !== "" ? `usubm-field-input-error-color` : ``}`}>
                                            Password
                                            {ifPassWordError}
                                        </h2>
                                        <div className='user-sub-modal-password-wrapper'>
                                            <input className="user-sub-modal-password-input-field" type="password" id="rpn-pwi"
                                                maxLength={999} value={password} autoComplete='off' onKeyUp={(e) => submissionBlocker(e)}
                                                spellCheck={false} onChange={(e) => setPassword(e.currentTarget.value)}
                                            />
                                        </div>

                                    </div>
                                    <div className='user-sub-modal-form-sep'></div>
                                </div>

                                <div className='user-sub-modal-button-footer-container'>
                                    <button id="phone-number-submit-button" type='submit' className='user-sub-modal-submit-button' disabled>
                                        <span id='elip-spin' className="spinner-ellipsis spinner-dots is-hidden" role='img'>
                                            <span className="inner-spinner-dots-container pulsing-ellipsis">
                                                <span className="spin-dot spin-dot-item"></span>
                                                <span className="spin-dot spin-dot-item"></span>
                                                <span className="spin-dot spin-dot-item"></span>
                                            </span>
                                        </span>
                                        <div id="submit-button-text" className='look-filled-button-contents global-button-contents'>Confirm</div>
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
        </REACT_PORTAL>
    )

}

export default EditUserPhoneNumberForm;