import React from "react";
import { useRef, useEffect, useState } from "react";

const DeleteServerModal = (props) => {
    const popupRef = useRef();
    const [confirmServerName, setConfirmServerName] = useState("");


    useEffect(() => {
        window.addEventListener('keyup', handleESC, false);
        return function cleanUp () {
            props.removeServerErrors();
            props.removeChannelErrors();
            window.removeEventListener('keyup', handleESC, false);
        }

    }, []);


    const handleESC = (e) => {

        const keys = {
            27: () => {
                e.preventDefault();
                document.getElementById('delete-server-modal').classList.add("transition-out");
                setTimeout(() => {
                    props.setServerDeletion(false);
                    window.removeEventListener('keyup', handleESC, false);
                }, 300);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }


    const handleCloseModal = (e) => {
        e.preventDefault();
        document.getElementById('delete-server-modal').classList.add("transition-out");
        setTimeout(() => {
            props.setServerDeletion(false);
            window.removeEventListener('keyup', handleESC, false);
        }, 300);
    }


    const handleDeleteServerEXE = (e) => {
        e.preventDefault();
        let subState = {
            id: props.server.id,
            server_owner_id: props.server_owner_id,
            server_name: confirmServerName
        }
        let remove_SERVER_ID = props.server.id;
        let purged_Members = Object.values(props.server.users).map((user) => user.id);
        purged_Members = purged_Members.filter((userID) => userID !== props.currentUser.id);
        props.verifyName(subState).then(() => {
            props.closeModal();
            props.history.push('/$/channels/@me');
            props.deleteServer(props.server.id).then(() => {
                props.fetchUserServers(props.currentUser.id);
                App.StrifeCore.perform('_Purge_Server_Members_', { purged_Members, remove_SERVER_ID });
            });

        })
        props.removeServerErrors()

    }
    const renderServerNameErrors = () => {

        let serverNameErrorList = [
            "You didn't enter the server name correctly",
            'You cannot destroy a server that is not yours !',
        ];

        let serverNameErrorMessages = {
            0: "You didn't enter the server name correctly",
            1: "You cannot destroy a server that is not yours !",
        }

        for (let i = 0; i < serverNameErrorList.length; i++) {
            if (props.errors.includes(serverNameErrorList[i])) {
                return serverNameErrorMessages[i];
            }
        }

        return "";

    }

    let serverNameErrorsTag = props.errors.length > 0 ? (
        <div className={"delete-server-error"}>{renderServerNameErrors()}</div>
    ) : ("");

    return (

        <div className="delete-server-modal-layer-container" onClick={(e) => handleCloseModal(e)}>
            <div className="delete-server-modal-backdrop"></div>
            <div className="delete-server-layer">
                <div className="delete-server-focus-lock">
                    <div id="delete-server-modal" className="delete-server-modal" onClick={(e) => e.stopPropagation()} ref={popupRef}>
                        <form onSubmit={handleDeleteServerEXE}>
                            <div className="delete-server-form-header-wrapper">
                                <h1 className="delete-server-form-header">
                                    Delete{` `}{`'${props.server.server_name}'`}
                                </h1>
                            </div>
                            <div className="delete-server-scroll-base">
                                <div className="delete-server-warning-card">
                                    <div className="delete-server-warning-text">
                                        Are You sure that you want to delete{` `}
                                        <strong>{`${props.server.server_name}`}</strong>?
                                        This action cannot be undone.
                                    </div>
                                </div>
                                <div className="delete-server-spacing">
                                    <h2 className="delete-server-input-header">
                                        Enter Server Name
                                    </h2>
                                    <div className="delete-server-input-name-wrapper">
                                        <input
                                            value={confirmServerName}
                                            onChange={(e) => setConfirmServerName(e.currentTarget.value)}
                                            type="text"
                                            className="input-server-name"
                                            spellCheck={false}
                                            autoComplete="off"
                                            id="confirm-delete-server"
                                        />
                                    </div>
                                    {serverNameErrorsTag}
                                </div>
                                <div className="delete-server-sep"></div>
                            </div>
                            <div className="delete-server-button-sec">
                                <button type="submit" className="delete-server-submit-button">Delete Server</button>
                                <button type="button" onClick={(e) => handleCloseModal(e)} className="delete-server-cancel-button">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default DeleteServerModal;