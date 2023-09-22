import React from 'react';
import { useRef, useEffect } from "react";
import REACT_PORTAL from '../../../utils/ReactPortal_api_util';

const ConfirmLogoutModal = (props) => {

    const popUpRef = useRef(null);

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
        handleSubModalCloseOnOutsideClick(e);
        props.closeModal();
        props.logoutUser();
    }


    return (

        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="sub-modal-layer" onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                <div className='sub-modal-backdrop'></div>
                <div className='user-sub-modal-wrapper'>
                    <div className='user-sub-modal-focus-lock'>
                        <div className='user-sub-modal' id="user-sub-modal" ref={popUpRef} onClick={(e) => e.stopPropagation()}>
                            <div className='user-sub-modal-uownssw-flex-wrapper' style={{ flex: `0 0 auto` }}>
                                <h1 className='user-sub-modal-uownssw-title'>Log Out</h1>
                            </div>
                            <div className='user-sub-modal-form-content-uownssw global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                                <div className='usubm-uownssw-subtext'>
                                    Are you sure you want to logout?
                                </div>
                                <div className='user-sub-modal-form-uownssw-sep'></div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className='user-sub-modal-button-footer-container'>
                                    <button id="logout-button" type='submit' className='user-sub-modal-logout-button'>
                                        <div id="submit-button-text" className='look-filled-button-contents global-button-contents'>Log Out</div>
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
        </REACT_PORTAL >
    )
}
export default ConfirmLogoutModal;