import React from 'react';
import { useState, useRef, useEffect } from "react";
import REACT_PORTAL from '../../../utils/ReactPortal_api_util';


const RemoveUserPhoneNumberForm = (props) => {

    const popUpRef = useRef(null);

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

        let submissionState = {
            id: props.currentUser.id,
            password: password
        };

        props.removePhoneNumber(submissionState).then(() => {
            handleSubModalCloseOnOutsideClick(e);
        });
    }



    let ifError = props.errors.length > 0 ? (
        <div className='user-sub-modal-remove-phone-errors'>{passwordErrors()}</div>
    ) : ("");

    const submissionBlocker = (e) => {
        e.preventDefault();
        if (document.getElementById("rpn-pwi").value === "" || document.getElementById("rpn-pwi").value === null) {
            document.getElementById("remove-phone-number").disabled = true;
        }
        else {
            document.getElementById("remove-phone-number").disabled = false;
        }
    }

    return (

        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="sub-modal-layer" onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                <div className='sub-modal-backdrop'></div>
                <div className='user-sub-modal-wrapper'>
                    <div className='user-sub-modal-focus-lock'>
                        <div className='user-sub-modal' id="user-sub-modal" ref={popUpRef} onClick={(e) => e.stopPropagation()}>
                            <form onSubmit={handleSubmit}>
                                <div className='user-sub-modal-header-container-remove-phone-number' style={{ flex: `0 0 auto` }}>
                                    <h1 className='user-sub-modal-phone-number-title'>Remove phone number</h1>
                                </div>
                                <div className='user-sub-modal-form-content-remove-number global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                                    <div className='user-sub-modal-remove-phone-pw-wrap'>
                                        <h2 className='usubm-field-header'>
                                            Password
                                        </h2>
                                        <div className='user-sub-modal-password-wrapper'>
                                            <input id="rpn-pwi" className="user-sub-modal-password-input-field" type="password"
                                                maxLength={999} value={password} autoComplete='off' onKeyUp={(e) => submissionBlocker(e)}
                                                spellCheck={false} onChange={(e) => setPassword(e.currentTarget.value)}
                                            />
                                        </div>
                                        {ifError}
                                    </div>
                                    <div className='user-sub-modal-form-remove-phone-sep'></div>
                                </div>
                                <div className='user-sub-modal-button-footer-container'>
                                    <button id="remove-phone-number" type='submit' className='user-sub-modal-submit-button' disabled>
                                        <div id="submit-button-text" className='look-filled-button-contents global-button-contents'>Remove</div>
                                    </button>
                                    <button type='button' className='user-sub-modal-remv-phone-cancel-button' onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
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

export default RemoveUserPhoneNumberForm;