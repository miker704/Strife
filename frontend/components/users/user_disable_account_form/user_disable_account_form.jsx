import React from 'react';
import { useState, useRef, useEffect } from "react";
import REACT_PORTAL from '../../../utils/ReactPortal_api_util';
import { reSyncCurrentUser } from '../../../utils/session_api_util';

const DisableUserAccountForm = (props) => {


    const popUpRef = useRef(null);

    const [password, setPassword] = useState('');
    const [hasServers, setHasServers] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        window.addEventListener('keyup', handleESC, false);

        reSyncCurrentUser(props.currentUser.id).then((result) => {
            if (result.ownedServers.length > 0) {
                setHasServers(true);
                setIsLoading(false);
            }
            else {
                setHasServers(false);
                setIsLoading(false);
            }

        }, (error) => {
            props.closeSubMod(props.formName);
        })


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
            0: "Password does not match",
            1: "Password does not match",
        }

        for (let i = 0; i < passwordErrorList.length; i++) {
            if (props.errors.includes(passwordErrorList[i])) {
                return passwordErrorMessages[i];
            }
        }

        return "";
    }

    const submissionBlocker = (e) => {
        e.preventDefault();
        if (document.getElementById("rpn-pwi").value === "" || document.getElementById("rpn-pwi").value === null) {
            document.getElementById("disable-submit-button").disabled = true;
        }
        else {
            document.getElementById("disable-submit-button").disabled = false;
        }
    }

    let ifPassWordError = props.errors.length > 0 && passwordErrors() !== "" ? (
        <div className='user-sub-modal-acc-rmv-pw-error'>
            {passwordErrors()}
        </div>
    ) : ("")


    const handleSubmit = (e) => {
        e.preventDefault();

        let subState = {
            id: props.currentUser.id,
            password: password
        }


        props.disableUserAccount(subState).then(() => {
            props.closeModal();
            props.logoutUser();
        })
    }


    if (hasServers === true && isLoading === false) {
        return (
            <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
                <div className="sub-modal-layer" onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                    <div className='sub-modal-backdrop'></div>
                    <div className='user-sub-modal-wrapper'>
                        <div className='user-sub-modal-focus-lock'>
                            <div className='user-sub-modal' id="user-sub-modal" ref={popUpRef} onClick={(e) => e.stopPropagation()}>
                                <div className='user-sub-modal-uownssw-flex-wrapper' style={{ flex: `0 0 auto` }}>
                                    <h1 className='user-sub-modal-uownssw-title'>You Own Servers!</h1>
                                </div>
                                <div className='user-sub-modal-form-content-uownssw global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                                    <div className='usubm-uownssw-subtext'>
                                        In order to delete or disable your account you must first transfer ownership of all servers that you own.
                                    </div>
                                    <div className='user-sub-modal-form-uownssw-sep'></div>
                                </div>
                                <form onSubmit={handleSubModalCloseOnOutsideClick}>
                                    <div className='user-sub-modal-button-footer-container'>
                                        <button id="okay-button" type='submit' className='user-sub-modal-submit-button'>
                                            <div id="submit-button-text" className='look-filled-button-contents global-button-contents'>Okay</div>
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

    else if (hasServers === false && isLoading === false) {

        return (
            <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
                <div className="sub-modal-layer" onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                    <div className='sub-modal-backdrop'></div>
                    <div className='user-sub-modal-wrapper'>
                        <div className='user-sub-modal-focus-lock'>
                            <div className='user-sub-modal' id="user-sub-modal" ref={popUpRef} onClick={(e) => e.stopPropagation()}>

                                <form onSubmit={handleSubmit}>

                                    <div className='user-sub-modal-header-container-remove-phone-number' style={{ flex: `0 0 auto` }}>
                                        <h1 className='user-sub-modal-acc-rmv-header'>Disable Account</h1>
                                    </div>

                                    <div className='user-sub-modal-acc-rmv-form-content global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                                        <div className='user-sub-modal-acc-rmv-card-warning-wrapper'>
                                            <div className='user-sub-modal-acc-rmv-card-warning'>
                                                Are you sure that you want to disable your account? This will immediately log you out and make your account inaccessible to anyone.
                                            </div>
                                        </div>
                                        <div className='user-sub-modal-remove-phone-pw-wrap'>
                                            <h2 className='usubm-field-header'>
                                                Password
                                            </h2>
                                            <div className='user-sub-modal-password-wrapper'>
                                                <input className="user-sub-modal-password-input-field" type="password" id="rpn-pwi" autoFocus={true}
                                                    maxLength={999} value={password} autoComplete='off' onKeyUp={(e) => submissionBlocker(e)}
                                                    spellCheck={false} onChange={(e) => setPassword(e.currentTarget.value)}
                                                />
                                            </div>
                                            {ifPassWordError}
                                        </div>
                                        <div className='user-sub-modal-form-remove-phone-sep'></div>
                                    </div>
                                    <div className='user-sub-modal-button-footer-container'>
                                        <button id="disable-submit-button" type='submit' className='user-sub-modal-submit-button' disabled>
                                            <div id="submit-button-text" className='look-filled-button-contents global-button-contents'>Disable Account</div>
                                        </button>
                                        <button type='button' className='user-sub-modal-acc-rmv-cancel-button' onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
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


}

export default DisableUserAccountForm;