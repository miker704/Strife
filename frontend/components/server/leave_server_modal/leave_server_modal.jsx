import React from "react";
import { useEffect, useRef } from "react";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";



const LeaveServerModal = (props) => {
    const popupRef = useRef();


    useEffect(() => {
        window.addEventListener('keyup', handleESC, false);

        return function cleanUp () {
            //remove any errors resulting in server leaving and modal closing server name invokes an error once state is lost and modal is 
            //still open this helps remove anything else besides that 
            props.removeServerErrors();
            //deleting server membership invokes channel membership deletion
            props.removeChannelErrors();
            // remove esc listener
            window.removeEventListener('keyup', handleESC, false);

        }
    }, [])

    const handleLeaveServer = (e) => {
        e.preventDefault()
        let subState = { user_id: props.currentUser.id, server_id: props.server.id, banned: 0 };
        //this is done carefully doing these out of order invoke state and prop errors
        // close the modal first preventing errors waiving from missing server values of server name etc
        //which stops everything same as pushing to home page pushing first invokes server name errors
        // next push to home dashboard then delete membership to server and call fetchalluser servers 
        // to rerender the server bar to remove the left server and prevent entering it again waving massive errors
        // if this step is not complete to ensure we invoke a then() func to ensure that if the membership is deleted
        // rerun the render if delete membership fails user can still enter and try again with no errors
        props.setRenderLeaveServer(false);
        props.history.push('/$/channels/@me')
        props.deleteServerMembership(props.currentUser.id, subState).then(() => {
            props.removeServer(props.server.id);
            props.fetchUserServers(props.currentUser.id)
        })
        return;
    }


    const handleESC = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                handleCloseOnOuterClick(e);
                window.removeEventListener('keyup', handleESC, false);

            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }

    const handleCloseOnOuterClick = (e) => {
        e.preventDefault();
        let modalToClose = document.getElementById("leave-server-modal");
        if (modalToClose) {
            modalToClose.classList.add("transition-out");
            Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                .then(() => {
                    props.setRenderLeaveServer(false);
                    window.removeEventListener('keyup', handleESC, false);
                }, () => {
                    props.setRenderLeaveServer(false);
                    window.removeEventListener('keyup', handleESC, false);
                });
        }
        else {
            props.setRenderLeaveServer(false);
            window.removeEventListener('keyup', handleESC, false);
        }
    }


    return (
        <REACT_PORTAL wrapperId={'sub-modal-2'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>

            <div className="leave-server-wrapper" onClick={(e) => handleCloseOnOuterClick(e)}>
                <div className="leave-server-backdrop"></div>
                <div className="leave-server-layer">
                    <div id="leave-server-focus-lock" className="leave-server-focus-lock" onClick={(e) => e.stopPropagation()} ref={popupRef}>
                        <div className="leave-server-root" id="leave-server-modal">
                            <div className="leave-server-flex" >
                                <h2 className="leave-server-header">
                                    Leave '{`${props.server.server_name}`}'
                                </h2>
                            </div>
                            <div className="leave-server-content-scroll-base global-scroller-base global-scroll-thin-raw-attributes" style={{ overflow: "hidden scroll", paddingRight: `8px` }}>
                                <div className="leave-server-text">
                                    Are you sure you want to leave {` `}
                                    <strong>{`${props.server.server_name}`}</strong>
                                    ? You won't be able to rejoin this server unless you are re-invited.
                                </div>
                                <div className="leave-server-sep"></div>
                            </div>
                            <form onSubmit={handleLeaveServer} className="leave-server-button-flex-wrapper">
                                <button type="submit" className="leave-server-submit-button">
                                    <div className="leave-server-button-contents">Leave Server</div>
                                </button>
                                <button type="button" onClick={(e) => handleCloseOnOuterClick(e)} className="leave-server-cancel-button">
                                    <div className="leave-server-button-contents">Cancel</div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL >


    )


}

export default LeaveServerModal;