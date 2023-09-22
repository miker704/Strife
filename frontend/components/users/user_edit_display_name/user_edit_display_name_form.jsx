import React from 'react';
import { useState, useRef, useEffect } from "react";
import REACT_PORTAL from '../../../utils/ReactPortal_api_util';
import { CloseXIcon } from '../../front_end_svgs/Strife_svgs';

const EditDisplaynameForm = (props) => {

    const popUpRef = useRef(null);

    const [newDisplayName, setNewDisplayName] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {

        setNewDisplayName(props.currentUser.username);
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


    const handleSubmit = (e) => {
        e.preventDefault();
        props.removeSessionErrors();

        let subState = {
            id: props.currentUser.id,
            displayname: newDisplayName,
            password: password
        }

        let modalToClose = document.getElementById("user-sub-modal");
        let elipAnimation = document.getElementById('elip-spin');
        let buttonText = document.getElementById("submit-button-text");
        buttonText.innerHTML = "";
        elipAnimation.classList.remove('is-hidden');

        props.updateUserInfo(subState).then(() => {
            App.StrifeCore.perform('transmit_to_other_channel', { currrentUserLocation: props.location.pathname });
            handleSubModalCloseOnOutsideClick(e);
        })
        setTimeout(() => {
            elipAnimation.classList.add('is-hidden');
            buttonText.innerHTML = "Done";
        }, 285);
    }

    const displayNameErrors = () => {

        let displayNameErrorList = [
            "Username can't be blank",
            'Username is too short (minimum is 2 characters)',
            'Username is too long (maximum is 32 characters)',
        ]
        //error messages can be a bit big lets make a reduced version 
        let displayNameErrorMessages = {
            0: "This field is required",
            1: "Must be between 2 and 32 in length",
            2: 'Must be between 2 and 32 in length',
        }

        for (let i = 0; i < displayNameErrorList.length; i++) {
            if (props.errors.includes(displayNameErrorList[i])) {
                return displayNameErrorMessages[i];
            }
        }
        return "";
    }




    let ifUserError = props.errors.length > 0 && displayNameErrors() !== "" ? (
        <span className='user-sub-modal-field-input-error'>
            <span className='user-sub-modal-field-input-error-sep'>-</span>
            {displayNameErrors()}
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
                                <div className='user-sub-modal-title'>Change your display name</div>
                                <div className='user-sub-modal-title-subtext'>Enter a new display name and your existing password.</div>
                                <button type='button' className='user-sub-modal-x-to-close-button' onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                                    <div className='global-button-contents'>
                                        <CloseXIcon className="closeIconX" />
                                    </div>
                                </button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className='user-sub-modal-form-content global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                                    <div>
                                        <h2 className={`usubm-field-header ${displayNameErrors() !== "" ? `usubm-field-input-error-color` : ``}`}>
                                            Display Name
                                            {ifUserError}
                                        </h2>
                                        <div className='usubm-username-wrapper'>
                                            <div className='user-sub-modal-username-input-wrapper'>
                                                <input className="user-sub-modal-username-input-field" type="text"
                                                    maxLength={32} value={newDisplayName} autoFocus
                                                    spellCheck={false} onChange={(e) => setNewDisplayName(e.currentTarget.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='user-sub-modal-password-container'>

                                        <h2 className={`usubm-field-header ${passwordErrors() !== "" ? `usubm-field-input-error-color` : ``}`}>
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
                                    <div className='user-sub-modal-form-sep'></div>
                                </div>
                                <div className='user-sub-modal-button-footer-container'>
                                    <button id="username-submit-button" type='submit' className='user-sub-modal-submit-button'>
                                        <span id='elip-spin' className="spinner-ellipsis spinner-dots is-hidden" role='img'>
                                            <span className="inner-spinner-dots-container pulsing-ellipsis">
                                                <span className="spin-dot spin-dot-item"></span>
                                                <span className="spin-dot spin-dot-item"></span>
                                                <span className="spin-dot spin-dot-item"></span>
                                            </span>
                                        </span>
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
        </REACT_PORTAL>
    )




}
export default EditDisplaynameForm;