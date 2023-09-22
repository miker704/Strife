import React from "react"
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { useState, useRef, useEffect } from "react";
import { CloseXIcon } from "../../front_end_svgs/Strife_svgs";

const ServerAvatarModal = (props) => {

    const popUpRef = useRef(null);

    const [serverIconPhotoUrl, setServerIconPhotoUrl] = useState(props.server.server_Icon);
    const [serverIconPhoto, setServerIconPhoto] = useState('');
    const [removeServerIcon, setRemoveServerIcon] = useState(false)
    const [renderButton, setRenderButton] = useState('');
    const file_Input_Ref = useRef(null);
    const [inSubmission, setInSubmission] = useState(false);


    useEffect(() => {
        setServerIconPhotoUrl(props.server.server_Icon);

        if (props.server.server_Icon === undefined) {
            setRenderButton(saveButton);
        }
        else {
            setRenderButton(removeButton);
        }

        window.addEventListener('keyup', handleESC, false);

        return function cleanUp () {
            props.removeServerErrors();
            props.removeChannelErrors();
            window.removeEventListener('keyup', handleESC, false);
        }

    }, []);



    useEffect(() => {

        if (props.server.server_Icon !== undefined) {
            if (serverIconPhotoUrl !== props.server.server_Icon) {
                setRenderButton(saveButton);
            }
            else if (serverIconPhotoUrl === props.server.server_Icon) {
                setRenderButton(removeButton);
            }
        }
        else {
            setRenderButton(saveButton);
        }
    }, [serverIconPhotoUrl]);



    const handleSubModalCloseOnOutsideClick = (e) => {
        e.preventDefault();
        if (inSubmission === false) {
            let modalToClose = document.getElementById("user-sub-modal-edit-pfp");
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



    const fileProcessingErrors = () => {
        if (props.errors.includes('cannot process file')) {
            return "file is bad format/failed to process";
        }
        return "";
    }



    const splitServerName = () => {
        //reduce server acryo name to 5 max chars/ initials
        let serverAcryo = props.server.server_name.split(" ").map((parts) => parts[0]).join("");
        return serverAcryo.length > 5 ? serverAcryo.slice(0, 5) : serverAcryo;
    }

    const handleRemovePFPSubmission = (e) => {
        e.preventDefault();
        props.removeServerErrors();
        let submitButton = document.getElementById('submit-pfp');
        submitButton.disabled = true;

        if (props.server.server_Icon) {
            setRemoveServerIcon(true)
            setServerIconPhotoUrl("");
            setServerIconPhoto(null);
        }

        let formData = new FormData();
        formData.append('server[server_name]', props.server.server_name);
        formData.append('server[server_Icon_Remove]', removeServerIcon);
        props.updateServer(props.server.id, formData).then((action) => {
            let updatedServer = action.server;
            App.StrifeCore.perform('_Serve_Server_Update_To_Members_Force_Refresh_', { updatedServerID: updatedServer.id })
            submitButton.disabled = false;
        }, (error) => {
            submitButton.disabled = false;
        })
    }

    const handleFileInput = (e) => {

        const fileReader = new FileReader();
        const file = e.currentTarget.files[0];

        fileReader.onloadend = () => {
            setServerIconPhotoUrl(fileReader.result)
            setServerIconPhoto(file);
        }

        if (file) {
            fileReader.readAsDataURL(file);
        }
        else {
            setServerIconPhotoUrl("");
            setServerIconPhoto(null);
        }

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        props.removeServerErrors();

        let submitButton = document.getElementById('submit-pfp');
        submitButton.disabled = true;
        setInSubmission(true);
        let formData = new FormData();


        formData.append('server[server_name]', props.server.server_name);

        if (serverIconPhoto) {
            formData.append('server[server_Icon]', serverIconPhoto);
        }

        props.updateServer(props.server.id, formData).then((action) => {
            let updatedServer = action.server;
            App.StrifeCore.perform('_Serve_Server_Update_To_Members_Force_Refresh_', { updatedServerID: updatedServer.id })
            handleSubModalCloseOnOutsideClick(e);
        }, (error) => {
            setInSubmission(false);
            submitButton.disabled = false;
        });
    }


    let ifFileError = props.errors.length > 0 && fileProcessingErrors() !== "" ? (
        <span className='user-sub-modal-field-input-error'>
            <span className='user-sub-modal-field-input-error-sep'>-</span>
            {fileProcessingErrors()}
        </span>
    ) : ("");


    let removeButton = (
        <button id='submit-pfp' type='button' className={`user-sub-modal-edit-pfp-submit-button`}
            onClick={(e) => { handleRemovePFPSubmission(e) }}>
            <div id="submit-button-text" className='look-filled-button-contents global-button-contents'>Remove</div>
        </button>
    );
    let saveButton = (
        <button id='submit-pfp' type='submit' className={`user-sub-modal-edit-pfp-submit-button`}>
            <div id="submit-button-text" className='look-filled-button-contents global-button-contents'>Apply</div>
        </button>
    );

    return (


        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="sub-modal-layer" onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                <div className='sub-modal-backdrop'></div>
                <div className='user-sub-modal-wrapper'>
                    <div className='user-sub-modal-focus-lock'>
                        <div className='user-sub-modal-edit-pfp' id="user-sub-modal-edit-pfp" ref={popUpRef} onClick={(e) => e.stopPropagation()}>
                            <div className='usub-edit-pfp-header' style={{ flex: `0 0 auto` }}>
                                <div className='usub-edit-pfp-header-title'>
                                    Change Server Avatar
                                </div>
                                <div className='usub-edit-pfp-header-title-subtext'>Upload a .jpg, .jpeg, .gif, or .png file</div>
                                <button type='button' className='user-sub-modal-x-to-close-button' onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                                    <div className='global-button-contents'>
                                        <CloseXIcon className="closeIconX"/>
                                    </div>
                                </button>
                            </div>



                            <form onSubmit={handleSubmit}>

                                <div className='user-sub-modal-edit-pfp-scroll global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                                    <div className="usub-edit-pfp-input-wrapper">
                                        <h2 className={`usubm-field-header ${fileProcessingErrors() !== "" ? `usubm-field-input-error-color` : ``}`}>
                                            Server Avatar
                                            {ifFileError}
                                        </h2>
                                    </div>
                                    <div className='usub-edit-pfp-display-container' onClick={(e) => file_Input_Ref.current.click()}>
                                        {

                                            serverIconPhotoUrl ? (
                                                <img className="usub-edit-pfp-display-img" src={serverIconPhotoUrl} alt=" " />
                                            ) : (
                                                <div className='server-avatar-modal-default-image-uploader-acro'>
                                                    {`${splitServerName()}`}
                                                </div>
                                            )
                                        }
                                        <div className="usub-edit-pfp-hover-hint">Upload New Server Avatar</div>
                                        <img className="usub-img-upload-hint-icon" alt=" " />
                                        <div className="usub-overlay-edit-pfp"></div>
                                        <input type='file' accept=".jpg, .jpeg, .png, .gif" onChange={(e) => handleFileInput(e)} ref={file_Input_Ref} />

                                    </div>
                                    <div className='user-sub-modal-form-sep'></div>
                                </div>

                                <div className='user-sub-modal-edit-pfp-button-footer-container'>
                                    <div className='usubm-edit-pfp-buttons-right'>
                                        <button type='button' className='user-sub-modal-edit-pfp-cancel-button' onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                                            <div className='look-filled-button-contents global-button-contents'>Cancel</div>
                                        </button>
                                        {renderButton}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL>
    )
}
export default ServerAvatarModal;
