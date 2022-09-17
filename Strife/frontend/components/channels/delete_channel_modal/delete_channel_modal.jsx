import React from "react";
import { useEffect, useState, useRef } from "react";
import { closeOnEsc, closeHookModalOnOutsideClick } from "../../../utils/close_hook_modals_api_utils";

const DeleteChannelModal = (props) => {
    const popupRef = useRef();
    closeHookModalOnOutsideClick(popupRef, props.setChannelDeletion);
    closeOnEsc(props.setChannelDeletion);

    // const [] = useState();

    //pass in props for server general  channel and lock deletion for deltion of it 

    useEffect(() => {


        return function cleanUp(){
            props.removeServerErrors();
            props.removeChannelErrors();
        }

    }, [])


    const handleDeleteChannel = () => {

    }


    return (
        <div className="leave-server-wrapper"  >
            <div className="leave-server-backdrop"></div>
            <div className="leave-server-layer">
                <div id="leave-server-focus-lock" className="leave-server-focus-lock" onClick={(e) => e.stopPropagation()}>
                    <div className="leave-server-root" >
                        <div className="leave-server-flex" >
                            <h2 className="remove-phone-header">
                                Delete Channel'
                            </h2>
                        </div>
                        <div className="leave-server-content-scroll-base" >
                            <div className="leave-server-text">
                                Are you sure you want to delete {` `}
                                <strong>{`#channelname`}</strong>
                                ? This cannot be undone.
                            </div>
                            <div className="username-edit-sep"></div>
                        </div>
                        <form onSubmit={handleDeleteChannel} className="leave-server-button-flex-wrapper">
                            <button type="submit" className="delete-server-submit-button">Delete Channel</button>
                            <button type="button" className="username-edit-cancel-button">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default DeleteChannelModal;