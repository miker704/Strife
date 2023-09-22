import React from "react";
import { useRef, useEffect } from "react";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";


const NoFriendsDMModal = (props) => {
    const popupRef = useRef();

    //set up handler and exit
    useEffect(() => {

        window.addEventListener('keyup', handleESC, false);
        return function cleanup () {
            window.removeEventListener('keyup', handleESC, false);
        }
    }, []);

    const handleESC = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                props.setNoFriendsDmModal(false);
                window.removeEventListener('keyup', handleESC, false);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }
    const path = `/$/channels/@me/`;
    const path1 = `/$/channels/@me`;
    return (
        <REACT_PORTAL wrapperId={'sub-modal-2'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className={`clear-modal-wrapper ${props.homeBar === true ? `homeBar` : ``}`} onClick={(e) => props.setNoFriendsDmModal(false)}>
                <div className={`create-dm-modal-popup ${props.dmInvite === true ? `dm-invite` : ``}`} onClick={e => e.stopPropagation()} ref={popupRef} >
                    <div className="create-dm-modal-focus-lock">
                        <div className="create-dm-modal">
                            <div className="create-dm-header-sec">
                                <h1 className="create-dm-header-h2">Select Friends</h1>
                            </div>
                            <div className="create-dm-no-friends-error-state-flex-wrapper">
                                <div className="create-dm-no-friends"></div>
                                <div>You don't have any friends to add!</div>
                                <button type="button" className="create-dm-no-friends-button"
                                    onClick={() => {
                                        if (props.history.location.pathname !== path) {
                                            props.history.push({ pathname: `${path}`, state: { toggleValue: true } })
                                        }
                                        else if (props.history.location.pathname === path) {
                                            //if the user opens this modal again and clicks add friend and is at the location already
                                            //the state cant be changes as history refuses to push to the same location so to trick it
                                            //we push to the same location with the path without ending '/'
                                            props.history.push({ pathname: `${path1}`, state: { toggleValue: true } })
                                        }
                                        props.setNoFriendsDmModal(false);
                                    }}>
                                    <div className="create-dm-button-text">Add Friend</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL >
    )

}

export default NoFriendsDMModal;