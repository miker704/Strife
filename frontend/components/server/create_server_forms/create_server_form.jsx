import React from 'react';
import { useState, useRef, useEffect } from "react";
import REACT_PORTAL from '../../../utils/ReactPortal_api_util';
import { CloseXIcon, UploadServerAvatarIcon } from '../../front_end_svgs/Strife_svgs';

const CreateServerForm = (props) => {

    const [serverName, setServerName] = useState(`${props.currentUser.username}'s server`);
    const [joiningServer, setJoiningServer] = useState(false);
    const [publicServer, setPublicServer] = useState(true);
    const [serverPrivacy, setServerPrivacy] = useState('');
    const [serverTemplate, setServerTemplate] = useState('');
    const popUpRef = useRef();
    const [currentForm, setCurrentForm] = useState(1);
    const [forward, setForward] = useState(true);
    const [inviteCode, setInviteCode] = useState("");
    const [invalidInviteCode, setInvalidInviteCode] = useState("*");

    const [server_Icon_Url, setServerIconUrl] = useState(null);
    const [server_Icon, setServerIcon] = useState('');

    useEffect(() => {
        window.addEventListener('keyup', handleESC, false);
        return function cleanup () {
            window.removeEventListener('keyup', handleESC, false);
            if (props.errors.length > 0) {
                props.removeServerErrors();
            }
            if (props.channelErrors.length > 0) {
                props.removeChannelErrors();
            }

        };
    }, []);


    const handleESC = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                handleCloseOnOutSideClick(e);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }

    const handleCloseOnOutSideClick = (e) => {
        e.preventDefault();
        let modalToClose = document.getElementById('create-server-modal');
        if (modalToClose) {
            modalToClose.classList.add('transition-out');
            Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                .then(() => {
                    props.closeModal();
                    window.removeEventListener('keyup', handleESC, false);
                }, () => {
                    props.closeModal();
                    window.removeEventListener('keyup', handleESC, false);
                });
        }
        else {
            props.closeModal();
            window.removeEventListener('keyup', handleESC, false);
        }
    }


    const handleJoinServer = (e) => {
        e.preventDefault();

        if (props.errors.length > 0) {
            props.removeServerErrors();
        }

        if (inviteCode === "") {
            setInvalidInviteCode(" - Please enter a valid invite link or invite code.");
        }
        else {
            let invite = inviteCode;

            if (invite.length < 8) {
                setInvalidInviteCode(" - The invite is invalid or has expired.");

            }
            //if valid length start the backend check to see if link/code exists
            else {
                //check to see if invite is either a code or full link
                //code is 8 chars long while the link is the code plus https://strife.gg/{code}
                if (invite.length === 8) {
                    let fullInviteLink = "https://strife.gg/" + invite.toString();
                    setInviteCode(fullInviteLink);
                    invite = fullInviteLink;
                }

                if (invite.length !== 26) {
                    setInvalidInviteCode(" - The invite is invalid or has expired.");
                }
                else {

                    let elipAnimation = document.getElementById('elip-spin-join-server');
                    let buttonText = document.getElementById("join-server-button-text");
                    let button = document.getElementById("join-Server-confirm-button");
                    buttonText.innerHTML = "";
                    elipAnimation.classList.remove('is-hidden');



                    props.joinServer(invite).then((action) => {
                        let joinedServer = action.server;
                        props.reSyncCurrentUser(props.currentUserId).then(() => {
                            props.history.push(`/$/channels/${joinedServer.id}/${joinedServer.general_channel_id}`);
                            handleCloseOnOutSideClick(e);
                        })
                    });
                    setTimeout(() => {
                        elipAnimation.classList.add('is-hidden');
                        buttonText.innerHTML = "Join Server";
                    }, 290);
                }
            }
        }
    }

    const handleJoinServerClick = (e) => {
        e.preventDefault();
        let currentSlide = currentForm;
        setCurrentForm(currentSlide + 1);
        setForward(true);
        setJoiningServer(true);
    }


    const handleSlideForward = (e) => {
        e.preventDefault();
        let currentSlide = currentForm;
        setCurrentForm(currentSlide + 1);
        setForward(true);
        setJoiningServer(false);
    }

    const handleSlideBackward = (e) => {
        e.preventDefault();

        if (props.errors.length > 0 || invalidInviteCode !== '*') {
            props.removeServerErrors();
            setInvalidInviteCode('*');
        }


        let currentSlide = currentForm;
        setCurrentForm(currentSlide - 1);
        setForward(false);
        setJoiningServer(false);

    }



    const handleFileProcessing = (e) => {
        e.preventDefault();
        const fileReader = new FileReader();
        const file = e.currentTarget.files[0];
        fileReader.onloadend = () => {
            setServerIcon(file);
            setServerIconUrl(fileReader.result);
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
        else {
            setServerIcon(null);
            setServerIconUrl('');
        }

    }

    const renderServerErrors = () => {
        //NOTE: we dont need to bother with channel errors here as channel created here are created  
        //upon server creation so it is impossible to have dups of same channel names
        //server errors
        let serverErrorList = [
            'Server owner You already have a server with that name already',
            "Server name can't be blank",
            'Server name is too short (minimum is 2 characters)',
            "Server name is too long (maximum is 100 characters)",
            // 'You cannot destroy a server that is not yours !',
        ]
        //Must be between 2 and 100 in length;

        //error messages can be a bit big lets make a reduced version 
        let serverErrorMessages = {
            0: "You already own a Server with that name already",
            1: "Server name can't be blank",
            2: 'Must be between 2 and 100 in length',
            3: "Must be between 2 and 100 in length",
        }

        for (let i = 0; i < serverErrorList.length; i++) {
            if (props.errors.includes(serverErrorList[i])) {
                return serverErrorMessages[i];
            }
        }

        return "";
    }

    const renderServerInviteErrors = () => {

        //invite code errors
        //these errors are for joining via an invite they return different results
        let serverInviteErrorsList = [
            'Error You are already a member of this server',
            'Error The invite is invalid or has expired.',
            'The invite is invalid or has expired.'
        ]

        let serverInviteErrorMessages = {
            0: ' - You are already a member of this server',
            1: ' - The invite is invalid or has expired.',
            2: ' - The invite is invalid or has expired.',
        }

        for (let i = 0; i < serverInviteErrorsList.length; i++) {
            if (props.errors.includes(serverInviteErrorsList[i])) {

                return serverInviteErrorMessages[i];
            }
        }

        return "";
    }


    const submissionBlocker = (e) => {
        e.preventDefault();
        if (document.getElementById("servernameInput").value === "" || document.getElementById("servernameInput").value === null) {
            document.getElementById("serverCreateButton").disabled = true;
        }
        else {
            document.getElementById("serverCreateButton").disabled = false;
        }
    }


    const warpToExploreServer = (e) => {
        e.preventDefault();
        if (props.history.location.pathname !== `/$/channels/guild-discovery/`) {
            handleCloseOnOutSideClick(e);
            props.history.push(`/$/channels/guild-discovery/`);
        }
        else {
            handleCloseOnOutSideClick(e);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const createServerFormData = new FormData();

        if (serverPrivacy === "public") {
            setPublicServer(true);

            createServerFormData.append(`server[server_owner_id]`, props.currentUser.id);
            createServerFormData.append(`server[server_name]`, serverName);
            createServerFormData.append(`server[public]`, publicServer);
            createServerFormData.append(`server[serverTemplate]`, serverTemplate);

            if (server_Icon) {
                createServerFormData.append(`server[server_Icon]`, server_Icon);
            }
        }
        else if (serverPrivacy === "private") {

            setPublicServer(false);
            createServerFormData.append(`server[server_owner_id]`, props.currentUser.id);
            createServerFormData.append(`server[server_name]`, serverName);
            createServerFormData.append(`server[public]`, publicServer);
            createServerFormData.append(`server[serverTemplate]`, serverTemplate);

            if (server_Icon) {
                createServerFormData.append(`server[server_Icon]`, server_Icon);
            }

        }
        let newServer;
        let elipAnimation = document.getElementById('elip-spin');
        let buttonText = document.getElementById("create-button-text");
        let button = document.getElementById("serverCreateButton");
        buttonText.innerHTML = "";
        elipAnimation.classList.remove('is-hidden');

        props.createServer(createServerFormData).then((action) => {
            newServer = action.server;
            props.reSyncCurrentUser(props.currentUserId).then(() => {
                handleCloseOnOutSideClick(e);
                props.history.push(`/$/channels/${newServer.id}/${newServer.general_channel_id}`);
            })
        })

        setTimeout(() => {
            elipAnimation.classList.add('is-hidden');
            buttonText.innerHTML = "Create";
        }, 285);
    }

    let renderInvalidInviteCodeMessage = "*"
    if (invalidInviteCode === "*") {
        renderInvalidInviteCodeMessage = "*"
    }
    else {
        renderInvalidInviteCodeMessage = invalidInviteCode;
    }

    if (props.errors.length > 0) {
        renderInvalidInviteCodeMessage = renderServerInviteErrors();
    }

    let form_state = "";

    if (forward === false) {
        if (currentForm === 1) {
            form_state = "mod-slide back";
        }
        else if (currentForm === 2) {
            form_state = "mod-slide-second back";
        }
    }
    else {

        if (currentForm === 1) {
            form_state = "mod-slide";
        }
        if (currentForm === 2) {
            form_state = "mod-slide-second forward";

        }
        else if (currentForm === 3) {
            form_state = "mod-slide-third forward";
        }

    }


    let server_Icon_Upload_Filler = server_Icon_Url === null ? (
        <UploadServerAvatarIcon />
    ) : (<img className="create-server-icon-filled-icon" src={server_Icon_Url} alt=" " />)

    let ifServerError = props.errors.length > 0 ? (
        <h2 className='create-server-error-header'>
            <span className='create-server-error-message'>{renderServerErrors()}</span>
        </h2>
    ) : ("")


    let formStyles = {
        "1": { position: `relative`, width: `440px`, height: `558px`, overflow: `hidden` },
        "2": { position: `relative`, width: `440px`, height: `${joiningServer ? `436px` : `395px`}`, overflow: `hidden` },
        "3": { position: `relative`, width: `440px`, height: `${props.errors.length > 0 ? `428px` : `404px`} `, overflow: `hidden` }
    };

    let form1 = currentForm === 1 ? (
        <React.Fragment>

            <div className='create-server-header-wrap'>
                <h1 className='create-server-header'>Create a Server</h1>
                <div className='create-server-header-subtext'>
                    Your server is where you and your friends hang out.
                    Make yours and start talking.
                </div>
                <button className="x-to-close-button-svg" type="button" onClick={(e) => handleCloseOnOutSideClick(e)}>
                    <div className="global-button-contents">
                        <CloseXIcon className="svg-x-closeIcon" />
                    </div>
                </button>

            </div>
            <div className='create-server-template-button-list global-scroll-thin-raw-attributes-light global-scroller-base' style={{ overflow: `hidden scroll` }}>
                <button className='create-server-template-button' type="button"
                    onClick={(e) => {
                        handleSlideForward(e);
                        setServerTemplate("Default");

                    }}
                >
                    <img className="create-a-Server-Img" alt=" " />
                    <div className='create-server-template-button-text'>Create My Own</div>
                    <img className="create-server-modal-arrow" alt=" " />
                </button>

                <div className='create-server-template-text-header'>Start from a template</div>

                <button className='create-server-template-button' type="button"
                    onClick={(e) => {
                        handleSlideForward(e);
                        setServerTemplate("Gaming");
                    }}
                >
                    <img className="gaming-Server-Img" alt=" " />
                    <div className='create-server-template-button-text'>Gaming</div>
                    <img className="create-server-modal-arrow" alt=" " />
                </button>
                <button className='create-server-template-button' type="button"
                    onClick={(e) => {
                        handleSlideForward(e);
                        setServerTemplate("School Club");

                    }}
                >
                    <img className="school-Club-Server-Img" alt=" " />
                    <div className='create-server-template-button-text'>School Club</div>
                    <img className="create-server-modal-arrow" alt=" " />
                </button>
                <button className='create-server-template-button' type="button"
                    onClick={(e) => {
                        handleSlideForward(e);
                        setServerTemplate("Study Group");

                    }}
                >
                    <img className="study-Server-Img" alt=" " />
                    <div className='create-server-template-button-text'>Study Group</div>
                    <img className="create-server-modal-arrow" alt=" " />
                </button>
                <button className='create-server-template-button' type="button"
                    onClick={(e) => {
                        handleSlideForward(e);
                        setServerTemplate("Friends");

                    }}
                >
                    <img className="friends-Server-Img" alt=" " />
                    <div className='create-server-template-button-text'>Friends</div>
                    <img className="create-server-modal-arrow" alt=" " />
                </button>
                <button className='create-server-template-button' type="button"
                    onClick={(e) => {
                        handleSlideForward(e);
                        setServerTemplate("Artists & Creators");
                    }}
                >
                    <img className="artists-and-Creators-Server-Img" alt=" " />
                    <div className='create-server-template-button-text'>Artists & Creators</div>
                    <img className="create-server-modal-arrow" alt=" " />
                </button>
                <button className='create-server-template-button' type="button"
                    onClick={(e) => {
                        handleSlideForward(e);
                        setServerTemplate("Local Community");
                    }}
                >
                    <img className="local-Community-Server-Img" alt=" " />
                    <div className='create-server-template-button-text'>Local Community</div>
                    <img className="create-server-modal-arrow" alt=" " />
                </button>
                <div className='create-server-template-list-sep'></div>
            </div>
            <div className='create-server-footer-button-container'>
                <h2 className='create-server-footer-header'>
                    Have an invite already?
                </h2>
                <button className='create-server-footer-join-a-server-button' type="button" onClick={(e) => { handleJoinServerClick(e) }}>
                    <div className='create-server-footer-join-a-server-button-contents'>Join a Server </div>
                </button>
            </div>

        </React.Fragment>
    ) : ("")

    let joinForm = joiningServer === true && currentForm === 2 ?
        (
            <React.Fragment>

                <div>
                    <div className='create-server-header-wrap-3'>
                        <h1 className='csm-join-server-header'>Join a Server</h1>
                        <div className='csm-join-server-header-subtext'>
                            Enter an invite below to join an existing server
                        </div>
                        <button className="x-to-close-button-svg" type="button" onClick={(e) => handleCloseOnOutSideClick(e)}>
                            <div className="global-button-contents">
                                <CloseXIcon className="svg-x-closeIcon" />
                            </div>
                        </button>
                    </div>
                    <div className='create-server-template-button-list-3 global-scroll-thin-raw-attributes-light global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                        <form className='join-server-input-form'>
                            <div>
                                <h2 className='join-server-input-form-header'>
                                    Invite link
                                    <span className='joining-server-error'>{renderInvalidInviteCodeMessage}</span>
                                </h2>
                                <div className='join-server-input-wrapper'>
                                    <input
                                        className='join-server-input'
                                        spellCheck={false} placeholder="https://strife.gg/8404br4s"
                                        value={inviteCode} onChange={(e) => setInviteCode(e.currentTarget.value)}
                                        type="text" maxLength={999} required />
                                </div>
                            </div>
                        </form>
                        <div className='join-server-invite-links-example'>
                            <h2 className='join-server-invite-link-example-header'>Invites should look like</h2>
                            <div className='join-server-invite-link-sample'>8404br4s</div>
                            <div className='join-server-invite-link-sample'>https://strife.gg/8406eb38</div>
                            <div className='join-server-invite-link-sample'>https://strife.gg/default-server</div>

                        </div>
                        <div className='join-server-invite-row-container' role={'button'} onClick={(e) => { warpToExploreServer(e) }}>
                            <img className="dont-Have-A-Server-Img" alt=" " />
                            <div>
                                <h2 className='dont-have-a-server-header'>
                                    Don't have an invite?
                                </h2>
                                <div className='dont-have-a-server-text'>Check out Discoverable communities in Server Discovery.</div>
                            </div>
                            <img className="create-server-modal-arrow" alt=" " />
                        </div>
                        <div className='create-server-sep'></div>
                    </div>
                    <div className='create-server-footer-button-container-3'>
                        <button id="join-Server-confirm-button" className='join-server-join-button' type='button' onClick={(e) => handleJoinServer(e)}>
                            <span id='elip-spin-join-server' className="spinner-ellipsis spinner-dots is-hidden" role='img'>
                                <span className="inner-spinner-dots-container pulsing-ellipsis">
                                    <span className="spin-dot spin-dot-item"></span>
                                    <span className="spin-dot spin-dot-item"></span>
                                    <span className="spin-dot spin-dot-item"></span>
                                </span>
                            </span>
                            <div id="join-server-button-text" className='global-button-contents look-filled-button-contents'>Join Server</div>
                        </button>
                        <button className='join-server-back-button' type='button' onClick={(e) => handleSlideBackward(e)}>
                            <div className='global-button-contents look-filled-button-contents'>Back</div>
                        </button>
                    </div>
                </div>
            </React.Fragment>
        ) : ("")

    let form2 = joiningServer === false && currentForm === 2 ? (
        <React.Fragment>

            <div className='create-server-header-wrap'>
                <h1 className='create-server-header'>Tell us more about your server</h1>
                <div className='create-server-header-subtext'>
                    In order to help you with your setup, is your new server for just a few friends or a larger community?
                </div>
                <button className="x-to-close-button-svg" type="button" onClick={(e) => handleCloseOnOutSideClick(e)}>
                    <div className="global-button-contents">
                        <CloseXIcon className="svg-x-closeIcon" />
                    </div>
                </button>
            </div >
            <div className='create-server-template-button-list-2 global-scroll-thin-raw-attributes-light global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                <button className='create-server-template-button' type="button"
                    onClick={(e) => {
                        handleSlideForward(e);
                        setServerPrivacy('private');
                        setPublicServer(false)
                    }}>
                    <img className="private-Server-Img" alt=" " />
                    <div className='create-server-template-button-text'>For me and my friends</div>
                    <img className="create-server-modal-arrow" alt=" " />
                </button>
                <button className='create-server-template-button' type="button"
                    onClick={(e) => {
                        handleSlideForward(e);
                        setServerPrivacy('public');
                        setPublicServer(true)
                    }}>
                    <img className="public-Server-Img" alt=" " />
                    <div className='create-server-template-button-text'>For a club or community</div>
                    <img className="create-server-modal-arrow" alt=" " />
                </button>
                <div className='skip-section'>
                    Not sure? You can {` `}
                    <a className='skip-anchor'
                        onClick={(e) => {
                            handleSlideForward(e);
                            setPublicServer(true);
                            setServerPrivacy('public');
                        }}>skip this question</a>
                    {` `}for now.
                </div>
                <div className='create-server-template-list-sep-2'></div>
            </div>
            <div className='create-server-footer-button-container-2'>
                <button className='create-server-footer-back-button' type="button" onClick={(e) => handleSlideBackward(e)}>
                    <div className='global-button-contents'>Back</div>
                </button>
            </div>
        </React.Fragment>
    ) : ("")

    let form3 = currentForm === 3 ? (
        <React.Fragment>
            <div className='create-server-header-wrapper'>
                <h1 className='create-server-header'>Customize your server</h1>
                <div className='create-server-header-subtext'>
                    Give your new server a personality with a name and an icon. You can always change it later.
                </div>
                <button className="x-to-close-button-svg" type="button" onClick={(e) => handleCloseOnOutSideClick(e)}>
                    <div className="global-button-contents">
                        <CloseXIcon className="svg-x-closeIcon" />
                    </div>
                </button>
            </div>
            <div className='create-server-template-button-list-3 create-server-guild global-scroll-thin-raw-attributes-light global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>

                <div className='create-server-upload-server-icon-wrapper'>
                    <div className='create-server-upload-server-icon-container'>
                        {server_Icon_Upload_Filler}
                        <input className="create-server-icon-image-input" type="file" accept=".jpg, .jpeg, .png, .gif" onChange={(e) => handleFileProcessing(e)} />
                    </div>
                </div>
                <form>

                    <div className='create-server-name-input-section'>
                        {ifServerError}
                        <label className='create-server-name-input-label' htmlFor="servernameInput">Server Name</label>
                        <div className='create-server-name-input-wrapper'>
                            <input id="servernameInput" className="create-server-name-input" type="text" spellCheck={false}
                                maxLength={100} value={serverName} onKeyUp={(e) => submissionBlocker(e)}
                                placeholder={`${props.currentUser.username}'s server`}
                                onChange={(e) => setServerName(e.currentTarget.value)}
                            />
                        </div>
                    </div>
                    <div className='create-server-name-input-subtext'>
                        By creating a server, you agree to $TR!F3's{" "}
                        <strong><a href="https://discord.com/guidelines" target="_blank" rel="noreferrer noopener">Community Guidelines</a></strong>
                        .
                    </div>
                </form>
                <div className='create-server-sep'></div>
            </div>

            <div className='create-server-footer-button-container-3'>
                <button className='create-server-button' type='submit' id="serverCreateButton" onClick={(e) => handleSubmit(e)}>
                    <span id='elip-spin' className="spinner-ellipsis spinner-dots is-hidden" role='img'>
                        <span className="inner-spinner-dots-container pulsing-ellipsis">
                            <span className="spin-dot spin-dot-item"></span>
                            <span className="spin-dot spin-dot-item"></span>
                            <span className="spin-dot spin-dot-item"></span>
                        </span>
                    </span>
                    <div id="create-button-text" className='global-button-contents look-filled-button-contents'>Create</div>
                </button>
                <button className='create-server-slide-3-back-button' type='button' onClick={(e) => handleSlideBackward(e)}>
                    <div className='global-button-contents'>Back</div>
                </button>
            </div>
        </React.Fragment>
    ) : ("")


    return (
        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className='create-server-wrapper' onClick={(e) => handleCloseOnOutSideClick(e)}>
                <div className='create-server-backdrop'></div>
                <div id="create-server-modal" className='create-server-modal' >
                    <div className='theme-light' ref={popUpRef} onClick={(e) => e.stopPropagation()}>
                        <div className='create-server-focus-lock'>
                            <div className='create-server-root'>
                                <div className='create-server-slide-container'>
                                    <div style={formStyles[currentForm]}>
                                        <div style={{ position: `absolute`, width: `440px`, backfaceVisibility: `hidden`, top: `50%`, left: `0`, right: `0`, transform: `translate3d(0px, -50%, 0px) scale(1, 1)`, overflow: 'hidden' }}>
                                            <div className={form_state} >
                                                {form1}
                                                {joinForm}
                                                {form2}
                                                {form3}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL >
    )


}

export default CreateServerForm;