import React from "react";
import { useEffect } from "react";

const LeaveServerModal = (props) => {


    useEffect(() => {
        window.addEventListener('keyup', props.handleESC, false);
        return function cleanUp () {
            //remove any errors resulting in server leaving and modal closing server name invokes an error once state is lost and modal is 
            //still open this helps remove anything else besides that 
            props.removeServerErrors();
            //deleting server membership invokes channel membership deletion
            props.removeChannelErrors();
            // remove esc listener
            window.removeEventListener('keyup', props.handleESC, false);
        }
    }, [])

    const handleLeaveServer = () => {
        let subState = { user_id: props.currentUser.id, server_id: props.server.id, banned: 0 };
        //this is done carefully doing these out of order invoke state and prop errors
        // close the modal first preventing errors waiving from missing server values of server name etc
        //which stops everything same as pushing to home page pushing first invokes server name errors
        // next push to home dashboard then delete membership to server and call fetchalluser servers 
        // to rerender the server bar to remove the left server and prevent entering it again waving massive errors
        // if this step is not complete to ensure we invoke a then() func to ensure that if the membership is deleted
        // rerun the render if delete membership fails user can still enter and try again with no errors
       
        props.closeModal();
        props.history.push('/$/channels/@me')
        props.deleteServerMembership(props.currentUser.id, subState).then(() => {
        props.fetchUserServers(props.currentUser.id)
        })
        return;
    }


    return (
        <div className="leave-server-wrapper"  >
            <div className="leave-server-backdrop"></div>
            <div className="leave-server-layer">
                <div id="leave-server-focus-lock" className="leave-server-focus-lock" onClick={(e) => e.stopPropagation()}>
                    <div className="leave-server-root" >
                        <div className="leave-server-flex" >
                            <h2 className="remove-phone-header">
                                Leave '{`${props.server.server_name}`}'
                            </h2>
                        </div>
                        <div className="leave-server-content-scroll-base" >
                            <div className="leave-server-text">
                                Are you sure you want to leave {` `}
                                <strong>{`${props.server.server_name}`}</strong>
                                ? You won't be able to rejoin this server unless you are re-invited.
                            </div>
                            <div className="username-edit-sep"></div>
                        </div>
                        <form onSubmit={handleLeaveServer} className="leave-server-button-flex-wrapper">
                            <button type="submit" className="delete-server-submit-button">Leave Server</button>
                            <button type="button" onClick={() => props.closeModal()} className="username-edit-cancel-button">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )


}

export default LeaveServerModal;