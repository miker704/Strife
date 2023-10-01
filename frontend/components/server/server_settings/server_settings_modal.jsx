import React from "react";
import { useState, useEffect, useRef } from "react";
import DeleteServerModalContainer from "../delete_server_modal/delete_server_modal_container";
import ConfirmLogoutModalContainer from "../../users/logout_modal/logout_modal_container";
import ServerAvatarModalContainer from "../server_avatar_modal/server_avatar_modal_container";
import BoostServerModalContainer from "../../nitro/boost_server_modal/boost_server_modal_container";
import ServerBannerModalContainer from "../server_banner_modal/server_banner_modal_container";
import ServerInviteSplashBannerModalContainer from "../server_invite_splash_banner_modal/server_invite_splash_banner_modal_container";
import Select from '@mui/material/Select';
import { styled } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";
import MenuItem from '@mui/material/MenuItem';
import { Tooltip } from "react-tooltip";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { appPullerReleaseAnimation, appPullerReleaseHoldAnimation } from "../../../utils/appPullerAnimation_api_util";
import { ESCICON, GemBoostIcon, TrashCanIcon, HashIcon, LogoutIcon, LoudSpeakerIcon, RadioCircleFilledIcon, RadioCircleIcon, SelectBoxCheckIcon } from "../../front_end_svgs/Strife_svgs";

const StrifeToggleSwitch = (props = {
    labelTagContents: String(),
    checkedState: Boolean(),
    setCheckedState: Function(),
    customIndex: Number(),
    name: String()
}) => {

    const handleThisAnimationsMap = (customIndex, checkedState) => {

        let sliderBackGround = document.getElementById(`stsslidecontrol-${customIndex}`);
        let firstRect = document.getElementById(`switchrect-${customIndex}`);
        let w = document.getElementById(`slider32CRPX4-${customIndex}`);
        let x = w.lastElementChild;

        if (checkedState === false) {
            firstRect.setAttribute('height', '18');
            firstRect.setAttribute('width', '28');
            firstRect.setAttribute('x', '0');
            firstRect.setAttribute('y', '1');
            w.style.left = '12px';

            x.firstElementChild.setAttribute('d', "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z");
            x.lastElementChild.setAttribute('d', "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z");

            setTimeout(() => {
                // x.firstElementChild.style.transition = "300ms ease-in-out";
                // x.lastElementChild.style.transition = "300ms ease-in-out";
                x.firstElementChild.setAttribute('fill', "rgba(35, 165, 90, 1)");
                x.lastElementChild.setAttribute('fill', "rgba(35, 165, 90, 1)");
                sliderBackGround.style.backgroundColor = "rgba(100, 142, 126,1)";

            }, 90)


            setTimeout(() => {
                firstRect.setAttribute('height', '20');
                firstRect.setAttribute('width', '20');
                firstRect.setAttribute('x', '4');
                firstRect.setAttribute('y', '0');
                x.firstElementChild.setAttribute('d', "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z");
                x.firstElementChild.setAttribute('fill', "rgba(35, 165, 90, 1)");
                x.lastElementChild.setAttribute('d', "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z");
                x.lastElementChild.setAttribute('fill', "rgba(35, 165, 90, 1)");
                sliderBackGround.style.backgroundColor = "rgb(35, 165, 90)";

            }, 250)


        }
        else if (checkedState === true) {
            w.style.left = '-3px';
            firstRect.setAttribute('height', '18');
            firstRect.setAttribute('width', '28');
            firstRect.setAttribute('x', '0');
            firstRect.setAttribute('y', '1');
            x.firstElementChild.setAttribute('d', "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z");
            x.lastElementChild.setAttribute('d', "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z");
            setTimeout(() => {
                // x.firstElementChild.style.transition = "300ms ease-in-out";
                // x.lastElementChild.style.transition = "300ms ease-in-out";
                x.firstElementChild.setAttribute('fill', "rgba(128, 132, 142, 1)");
                x.lastElementChild.setAttribute('fill', "rgba(128, 132, 142, 1)");
                sliderBackGround.style.backgroundColor = "rgba(100, 142, 126,1)";
            }, 90)
            setTimeout(() => {
                firstRect.setAttribute('height', '20');
                firstRect.setAttribute('width', '20');
                firstRect.setAttribute('x', '4');
                firstRect.setAttribute('y', '0');
                x.firstElementChild.setAttribute('d', "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z");
                x.firstElementChild.setAttribute('fill', "rgba(128, 132, 142, 1)");
                x.lastElementChild.setAttribute('d', "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z");
                x.lastElementChild.setAttribute('fill', "rgba(128, 132, 142, 1)");
                sliderBackGround.style.backgroundColor = "rgba(128, 132, 142, 1)";
            }, 250)
        }

    }



    let pathRef = useRef(props.checkedState);
    let xMarkPaths = [
        "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",
        "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z"
    ]
    let checkMarkPaths = [
        "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
        "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z"
    ]
    let startingColor = pathRef.current === false ? "rgba(128, 132, 142, 1)" : "rgb(35, 165, 90)";
    let startingPaths = pathRef.current === false ? xMarkPaths : checkMarkPaths;

    return (
        <div className="sts-label-row">
            <label className="sts-label" htmlFor={`:r${props.customIndex}:`}>{props.labelTagContents}</label>
            <div className="sts-slide-control-wrapper">
                <div id={`stsslidecontrol-${props.customIndex}`} className="sts-slide-control"
                    style={{ backgroundColor: `${props.checkedState === false ? `rgba(128, 132, 142, 1)` : `rgb(35, 165, 90)`}` }}
                >
                    <svg id={`slider32CRPX4-${props.customIndex}`} className="slider-32CRPX4" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet"
                        style={{ left: `${props.checkedState === false ? `${-3}px` : `${12}px`}` }}>
                        <rect className="switchrect" id={`switchrect-${props.customIndex}`} fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
                        <svg className="sliderInner" id={`sliderInner-${props.customIndex}`} viewBox="0 0 20 20" fill="none">
                            <path fill={startingColor}
                                d={startingPaths[0]}>
                            </path>
                            <path fill={startingColor}
                                d={startingPaths[1]}>
                            </path>
                        </svg>
                    </svg>
                    <input id={`:r${props.customIndex}:`} type="checkbox" className="sts-slider" checked={props.checkedState}
                        onChange={() => {
                            props.setCheckedState(!props.checkedState);
                            handleThisAnimationsMap(props.customIndex, props.checkedState);
                        }}
                    />
                </div>
            </div>
        </div>

    );
};


const SelectInActiveChannel = styled(Select)(({ theme }) => ({

    fontSize: '16px',
    lineHeight: '20px',
    fontFamily: "gg sans",
    fontWeight: '400',
    color: '#dbdee1',

    '.MuiSelect-select.Mui-disabled': {
        opacity: '0.6',
        color: '#dbdee1',
        cursor: 'not-allowed',
        WebkitTextFillColor: '#dbdee1',
    },

    '.MuiSelect-select': {
        backgroundColor: '#1e1f22',
        borderColor: '#1e1f22',
        cursor: 'pointer',
        outline: '0',
        border: '1px solid transparent',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        borderRadius: '4px',
        width: '320px',
        minWidth: '320px',
        maxWidth: '320px',
        minHeight: '42px',
        height: '42px',
        maxHeight: '42px',

        '.selectRegionSvgCheckMark': {
            display: 'none !important',
        },

    },
    '.MuiSvgIcon-root': {
        color: '#dbdee1',
    },

    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "none",
        borderRadius: "5px 5px 0 0",
        borderColor: 'transparent',
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },

    '.MuiOutlinedInput-input': {
        padding: '8px 8px 8px 16px',

    },


}));


const SelectSystemMessagesChannel = styled(Select)(({ theme }) => ({
    fontSize: '16px',
    lineHeight: '20px',
    fontFamily: "gg sans",
    fontWeight: '400',
    color: '#dbdee1',

    '.MuiSelect-select': {
        backgroundColor: '#1e1f22',
        borderColor: '#1e1f22',
        cursor: 'pointer',
        outline: '0',
        border: '1px solid transparent',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        borderRadius: '4px',
        width: '660px',
        minWidth: '660px',
        maxWidth: '660px',
        minHeight: '42px',
        height: '42px',
        maxHeight: '42px',

        '.selectRegionSvgCheckMark': {
            display: 'none !important',
        },

    },
    '.MuiSvgIcon-root': {
        color: '#dbdee1',
    },

    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "none",
        borderRadius: "5px 5px 0 0",
        borderColor: 'transparent',
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },

    '.MuiOutlinedInput-input': {
        padding: '8px 8px 8px 16px',

    }

}));

const SelectChevron = (props) => {
    return (
        <SvgIcon {...props} aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z">
            </path>
        </SvgIcon>
    );
}

const ServerSettingsModal = (props) => {
    const [server, setServer] = useState({});
    const [fullyLoaded, setFullyLoaded] = useState(false);
    const [newServerName, setNewServerName] = useState('');
    const [serverIconPhotoUrl, setServerIconPhotoUrl] = useState(props.server.server_Icon);
    const [serverIconPhoto, setServerIconPhoto] = useState('');
    const [removeServerIcon, setRemoveServerIcon] = useState(false)
    // const [inactiveChannel, setInactiveChannel] = useState('No Inactive Channel');
    const [inactiveChannel, setInactiveChannel] = useState(0);
    const [inactiveTimeOut, setInactiveTimeOut] = useState(5);
    // const [systemMessagesChannel, setSystemMessagesChannel] = useState('No System Messages');
    const [systemMessagesChannel, setSystemMessagesChannel] = useState(0);
    const [sendWelcomeMessage, setSendWelcomeMessage] = useState(true);
    const [promptMembers, setPromptMembers] = useState(true);
    const [sendMessageUponBoost, setSendMessageUponBoost] = useState(true);
    const [sendHelpfulTips, setSendHelpfulTips] = useState(true);
    const [showBoostProgressBar, setShowBoostProgressBar] = useState(false);
    const [defaultNotificationSettings, setDefaultNotificationSettings] = useState("All Messages");
    const [freeze, setFreeze] = useState(false);
    const [isSubModMounted, setIsSubModMounted] = useState(false);
    const [currentSubModal, setCurrentSubModal] = useState({
        deleteServer: false,
        logoutConfirm: false,
        changeServerAvatar: false,
        changeServerBanner: false,
        changeServerInvitationBanner: false,
        boostSubscribe: false,
    });

    const fileRef = useRef(null);

    useEffect(() => {
        props.fetchServer(props.serverId);
        setServer(props.server);
        setNewServerName(props.server.server_name);
        setServerIconPhotoUrl(props.server.server_Icon);
        setFullyLoaded(true);
    }, []);


    useEffect(() => {

        // if(!props.server?.id){
        //     props.fetchServer();
        //     props.fetchChannel();
        // }
        // props.fetchServer(props.serverId);
        // setNewServerName(props.server.server_name);
        // setServerIconPhotoUrl(props.server.server_Icon);

        if (isSubModMounted === true) {
            window.removeEventListener('keyup', overrideCloseModal, false);
        }
        else if (isSubModMounted === false) {
            window.addEventListener('keyup', overrideCloseModal, false);
        }

        return function cleanUp () {

            window.removeEventListener('keyup', overrideCloseModal, false);

            if (props.errors.length > 0) {
                props.removeServerErrors();
            }
            if (props.channelErrors.length > 0) {
                props.removeChannelErrors();
            }
            if (props.sessionErrors.length > 0) {
                props.removeSessionErrors();
            }
        }

    }, [isSubModMounted])

    useEffect(() => {
        setServer(props.server);
        setNewServerName(props.server.server_name);
        setServerIconPhotoUrl(props.server.server_Icon);
        setRemoveServerIcon(false);
        setServerIconPhoto('');
        setFreeze(false);
    }, [props.server]);

    useEffect(() => {
        if (fullyLoaded) {
            catchChanges();
        }
    }, [newServerName, serverIconPhotoUrl])

    const overrideCloseModal = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                let modalToClose = document.getElementById("server-settings-modal");
                if (modalToClose) {
                    modalToClose.classList.add("transition-out");

                    // appPullerReleaseAnimation();
                    appPullerReleaseHoldAnimation();

                    Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                        .then(() => {
                            props.closeModal();
                            window.removeEventListener('keyup', overrideCloseModal, false);
                        }, () => {
                            props.closeModal();
                            window.removeEventListener('keyup', overrideCloseModal, false);
                        });
                }
                else {
                    props.closeModal();
                    window.removeEventListener('keyup', overrideCloseModal, false);
                }
            },
        };
        if (keys[e.keyCode] && isSubModMounted === false) {
            keys[e.keyCode]();
        }

    }

    const handleCloseModal = (e) => {
        e.preventDefault();
        let modalToClose = document.getElementById("server-settings-modal");

        if (freeze) {
            $(".app-layer-main").addClass("error-shaking");
            $(".app-layer-main").one("animationend", () => ($('.app-layer-main').removeClass("error-shaking")));
            return;
        }
        else {
            if (modalToClose) {
                modalToClose.classList.add("transition-out");

                // appPullerReleaseAnimation();
                appPullerReleaseHoldAnimation();


                Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                    .then(() => {
                        props.closeModal();
                        window.removeEventListener('keyup', overrideCloseModal, false);
                    }, () => {
                        props.closeModal();
                        window.removeEventListener('keyup', overrideCloseModal, false);
                    });
            }
            else {
                props.closeModal();
                window.removeEventListener('keyup', overrideCloseModal, false);
            }
        }
    }

    let checkMark = (
        <SelectBoxCheckIcon className="selectRegionSvgCheckMark" />
    );

    let channelHashIcon = (
        <HashIcon className="icon-hash-sop" width={16} height={16} />
    );

    let channelLoudSpeakerIcon = (
        <LoudSpeakerIcon className="ssm-channelLoudSpeakerIcon" width={16} height={16} />
    );

    let inActiveTimeOutOptions = [
        '1 minute',
        '5 minutes',
        '15 minutes',
        '30 minutes',
        '1 hour'

    ];
    let inActiveTimeOutOptionsEvaluation = {
        0: 1,
        1: 5,
        2: 15,
        3: 30,
        4: 60
    };

    const handleSetInactiveTimeOutOptions = (e) => {
        setInactiveTimeOut(e.target.value);
    }


    const menuProps = {
        PaperProps: {
            sx: {
                "& .MuiMenuItem-root": {
                    cursor: 'pointer',
                    color: '#dbdee1',
                    fontWeight: '500',
                    fontSize: '16px',
                    fontFamily: 'gg sans',
                    padding: '8px 8px 8px 16px',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'center',
                    boxSizing: 'border-box',

                },

                "& .MuiMenuItem-root.Mui-selected": {
                    backgroundColor: 'rgba(78, 80,88,0.6)',
                    color: 'white',
                },

                "& .MuiMenuItem-root.Mui-selected .selectRegionSvgCheckMark": {
                    color: 'hsl(235, 85.6%, 64.7%)',
                },

                "& .MuiMenuItem-root.Mui-selected:hover .selectRegionSvgCheckMark": {
                    color: 'hsl(235, 85.6%, 64.7%)',
                },

                "& .MuiMenuItem-root:hover": {
                    backgroundColor: 'rgba(78,80,88,0.3)',
                    color: '#dbdee1',

                },
                "& .MuiMenuItem-root:focus-within": {
                    backgroundColor: 'rgba(78,80,88,0.3)',
                    color: '#dbdee1',
                },
                "& .MuiMenuItem-root:focus": {
                    backgroundColor: 'rgba(78,80,88,0.3)',
                    color: '#dbdee1',
                },
                "& .MuiMenuItem-root:active": {
                    backgroundColor: 'rgba(78,80,88,0.3)',
                    color: '#dbdee1',
                },

                "& .MuiMenuItem-root.Mui-selected:active, & .MuiMenuItem-root.Mui-selected:focus-within, & .MuiMenuItem-root.Mui-selected:focus, & .MuiMenuItem-root.Mui-selected:hover": {
                    backgroundColor: 'rgba(78, 80,88,0.6)',
                    color: 'white',
                },

                "&::-webkit-scrollbar": {
                    width: "8px",
                    height: "8px",
                },
                "&::-webkit-scrollbar-corner": {
                    backgroundColor: 'transparent',
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: 'hsla(0, 0%, 0%, 0)',
                    border: '2px solid hsla(0, 0%, 0%, 0)',
                    borderColor: 'hsla(0, 0%, 0%, 0)',
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundClip: 'padding-box',
                    border: '2px solid transparent',
                    borderRadius: '4px',
                    minHeight: '40px',
                    backgroundColor: 'hsl(225, 7.1%, 11%)',
                }
            },

            style: {
                backgroundColor: '#2b2d31',
                color: '#dbdee1',
                fontSize: '16px',
                lineHeight: '20px',
                fontFamily: "gg sans",
                fontWeight: '400',
                paddingRight: '0px',
                maxHeight: '285.455px',
                width: '320px',
                boxSizing: 'border-box',
                border: '1px solid rgb(30,31,34)',
                borderRadius: '0 0 4px 4px',

            },
        },
    }
    const menuProps2 = {
        PaperProps: {
            sx: {
                "& .MuiMenuItem-root": {
                    cursor: 'pointer',
                    color: '#dbdee1',
                    fontWeight: '500',
                    fontSize: '16px',
                    fontFamily: 'gg sans',
                    padding: '8px 8px 8px 16px',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'center',
                    boxSizing: 'border-box',

                },

                "& .MuiMenuItem-root.Mui-selected": {
                    backgroundColor: 'rgba(78, 80,88,0.6)',
                    color: 'white',
                },

                "& .MuiMenuItem-root.Mui-selected .selectRegionSvgCheckMark": {
                    color: 'hsl(235, 85.6%, 64.7%)',
                },

                "& .MuiMenuItem-root.Mui-selected:hover .selectRegionSvgCheckMark": {
                    color: 'hsl(235, 85.6%, 64.7%)',
                },

                "& .MuiMenuItem-root:hover": {
                    backgroundColor: 'rgba(78,80,88,0.3)',
                    color: '#dbdee1',

                },
                "& .MuiMenuItem-root:focus-within": {
                    backgroundColor: 'rgba(78,80,88,0.3)',
                    color: '#dbdee1',
                },
                "& .MuiMenuItem-root:focus": {
                    backgroundColor: 'rgba(78,80,88,0.3)',
                    color: '#dbdee1',
                },
                "& .MuiMenuItem-root:active": {
                    backgroundColor: 'rgba(78,80,88,0.3)',
                    color: '#dbdee1',
                },

                "& .MuiMenuItem-root.Mui-selected:active, & .MuiMenuItem-root.Mui-selected:focus-within, & .MuiMenuItem-root.Mui-selected:focus, & .MuiMenuItem-root.Mui-selected:hover": {
                    backgroundColor: 'rgba(78, 80,88,0.6)',
                    color: 'white',
                },

                "&::-webkit-scrollbar": {
                    width: "8px",
                    height: "8px",
                },
                "&::-webkit-scrollbar-corner": {
                    backgroundColor: 'transparent',
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: 'hsla(0, 0%, 0%, 0)',
                    border: '2px solid hsla(0, 0%, 0%, 0)',
                    borderColor: 'hsla(0, 0%, 0%, 0)',
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundClip: 'padding-box',
                    border: '2px solid transparent',
                    borderRadius: '4px',
                    minHeight: '40px',
                    backgroundColor: 'hsl(225, 7.1%, 11%)',
                }
            },

            style: {
                backgroundColor: '#2b2d31',
                color: '#dbdee1',
                fontSize: '16px',
                lineHeight: '20px',
                fontFamily: "gg sans",
                fontWeight: '400',
                paddingRight: '0px',
                maxHeight: '285.455px',
                width: '660px',
                boxSizing: 'border-box',
                border: '1px solid rgb(30,31,34)',
                borderRadius: '0 0 4px 4px',

            },
        },
    }

    const handleSetInactiveChannel = (e) => {
        setInactiveChannel(e.target.value);
    }

    const handleSetSystemMessagesChannel = (e) => {
        setSystemMessagesChannel(e.target.value);
    }

    const handleSetDefaultNotificationSettings = (e) => {
        setDefaultNotificationSettings(e.target.value);
    }

    const handleServerIconRemoval = () => {
        if (props.server.server_Icon) {
            setRemoveServerIcon(true)
        }
        setServerIconPhotoUrl("");
        setServerIconPhoto(null);

    }

    const handleSnackBarSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (removeServerIcon === true) {
            formData.append('server[server_Icon_Remove]', removeServerIcon);
        }
        else if (serverIconPhoto) {
            formData.append('server[server_Icon]', serverIconPhoto);
        }

        formData.append('server[server_name]', newServerName.trim());
        props.updateServer(props.server.id, formData).then((action) => {
            let updatedServer = action.server;
            App.StrifeCore.perform('_Serve_Server_Update_To_Members_Force_Refresh_', { updatedServerID: updatedServer.id })
            setFreeze(false);
        });
    }


    const handleNameChangeSubmit = (e) => {
        e.preventDefault();
        let subState = {
            server_name: newServerName.trim()
        };
        let formData = new FormData();
        formData.append('server[server_name]', newServerName.trim());

        props.updateServer(props.server.id, formData).then((action) => {
            let updatedServer = action.server;
            App.StrifeCore.perform('_Serve_Server_Update_To_Members_Force_Refresh_', { updatedServerID: updatedServer.id })
            setFreeze(false);
        });
    }


    const handleLogout = () => {
        props.closeModal();
        props.logoutUser();
    }

    const renderServerNameErrors = () => {

        let serverNameErrorList = [
            'Server owner You already have a server with that name already',
            "Server name can't be blank",
            'Server name is too short (minimum is 2 characters)',
            'Server name is too long (maximum is 100 characters)'

        ];


        let serverNameErrorMessages = {
            0: "You already own a Server with that name already",
            1: "Server name can't be blank",
            2: 'Must be between 2 and 100 in length',
            3: "Must be between 2 and 100 in length",
        }

        for (let i = 0; i < serverNameErrorList.length; i++) {
            if (props.errors.includes(serverNameErrorList[i])) {
                return serverNameErrorMessages[i];
            }
        }

        return "";

    }

    const splitServerName = () => {
        //reduce server acryo name to 5 max chars/ initials
        // let serverAcryo = props.server.server_name.split(" ").map((parts) => parts[0]).join("");
        let serverAcryo = newServerName.split(" ").map((parts) => parts[0]).join("");
        return serverAcryo.length > 5 ? serverAcryo.slice(0, 5) : serverAcryo;
    }


    const handleSubmitServerPFP = (e) => {
        e.preventDefault();
        let formData = new FormData();
        //throw in name of server regardless if we are updateing the name or not
        formData.append('server[server_name]', newServerName.trim());
        if (serverIconPhoto) {
            formData.append('server[server_Icon]', serverIconPhoto);
        }

        props.updateServer(props.server.id, formData).then((action) => {
            let updatedServer = action.server;
            App.StrifeCore.perform('_Serve_Server_Update_To_Members_Force_Refresh_', { updatedServerID: updatedServer.id })
        });

    }


    const handleFileInput = (e) => {
        // e.preventDefault();
        const fileReader = new FileReader();
        const file = e.currentTarget.files[0];
        fileReader.onloadend = () => {
            setServerIconPhotoUrl(fileReader.result);
            setServerIconPhoto(file);
        }

        if (file) {
            fileReader.readAsDataURL(file);
        }
        else {

            if (props.server.server_Icon !== undefined) {
                setServerIconPhotoUrl(props.server.server_Icon);

            }
            else {
                setServerIconPhotoUrl('');
            }

            setServerIconPhoto(null);
        }

    }


    const handleUploadImage = (e) => {
        e.preventDefault();
        if (props.server.server_Icon === undefined) {
            if (serverIconPhotoUrl) {
                handleSubmitServerPFP(e);
            }
            else {
                openModal("changeServerAvatar");
            }
        }

        else if (props.server.server_Icon !== undefined) {
            if (serverIconPhotoUrl === "") {
                openModal("changeServerAvatar");
            }

            else if (serverIconPhotoUrl !== props.server.server_Icon) {
                handleSubmitServerPFP(e);
            }
            else {
                openModal("changeServerAvatar");
            }
        }

    }

    const resetChanges = (e) => {
        e.preventDefault();
        if (props.errors.length > 0) {
            props.removeServerErrors();
        }

        let snackBar = document.getElementById("snack-bar-slider");
        if (snackBar) {
            snackBar.classList.add('transition-out');
            Promise.all(snackBar.getAnimations().map((animation) => animation.finished),)
                .then(() => {
                    setFreeze(false);
                }, () => {
                    setFreeze(false);
                });
        }
        setNewServerName(props.server.server_name);
        setServerIconPhotoUrl(props.server.server_Icon);
        setRemoveServerIcon(false);
        setServerIconPhoto('');

    }

    const catchChanges = () => {
        // snack bar appears for only serverl name and photo at the moment until other feature are
        // fully implemented
        const sProc = {
            server_name: props.server.server_name,
            server_Icon: props.server.server_Icon,
        };
        const regulationChange = {
            server_name: newServerName,
            server_Icon: serverIconPhotoUrl,
        }

        const keys = ['server_name', 'server_Icon',];

        for (const key of keys) {
            // if(removeServerIcon === true){
            //     continue;
            // }

            if (regulationChange[key] !== sProc[key]) {
                setFreeze(true);
                return;
            }
        }
        setFreeze(false);
    }

    const openModal = (field) => {
        setCurrentSubModal(previousState => {
            return { ...previousState, [field]: true };
        });
        window.removeEventListener('keyup', overrideCloseModal, false);
        setIsSubModMounted(true);
    }

    const closeForm = (field) => {
        setCurrentSubModal(previousState => {
            return { ...previousState, [field]: false };
        });
        window.addEventListener('keyup', overrideCloseModal, false);
        setIsSubModMounted(false);
    }

    const renderDeleteServerModal = () => {
        if (currentSubModal.deleteServer === true) {
            window.removeEventListener('keyup', overrideCloseModal, false);
            return (
                <DeleteServerModalContainer serverParams={props.serverParams} server={props.server} closeSubMod={closeForm} formName={"deleteServer"} />
            )
        }
    }

    const renderLogOutModal = () => {
        if (currentSubModal.logoutConfirm === true) {
            window.removeEventListener('keyup', overrideCloseModal, false);
            return (
                <ConfirmLogoutModalContainer closeSubMod={closeForm} formName={"logoutConfirm"} />
            )
        }
    }


    const rendeChangeServerAvatarModal = () => {
        if (currentSubModal.changeServerAvatar === true) {
            window.removeEventListener('keyup', overrideCloseModal, false);
            return (
                <ServerAvatarModalContainer closeSubMod={closeForm} formName={"changeServerAvatar"}
                    serverIconPhoto={serverIconPhoto} serverIconPhotoUrl={serverIconPhotoUrl}
                    server={props.server}
                />
            )
        }
    }

    const renderChangeServerBannerModal = () => {
        if (currentSubModal.changeServerBanner === true) {
            window.removeEventListener('keyup', overrideCloseModal, false);
            return (
                <ServerBannerModalContainer closeSubMod={closeForm} formName={"changeServerBanner"}
                    server={props.server}
                />
            )
        }
    }
    const renderChangeServerInvitationBannerModal = () => {
        if (currentSubModal.changeServerInvitationBanner === true) {
            window.removeEventListener('keyup', overrideCloseModal, false);
            return (
                <ServerInviteSplashBannerModalContainer closeSubMod={closeForm} formName={"changeServerInvitationBanner"}
                    server={props.server}
                />
            )
        }
    }


    const renderBoostServerModal = () => {
        if (currentSubModal.boostSubscribe === true) {
            return (
                <BoostServerModalContainer closeSubMod={closeForm} formName={"boostSubscribe"}
                    isSubModMounted={isSubModMounted} />
            )
        }
    }

    const renderSnackBar = () => {
        if (freeze === true) {
            return (
                <div className="change-notice-region snack-bar-slider" id="snack-bar-slider">
                    <div className="snack-bar-container">
                        <div className="snack-bar-flex-container">
                            <div className="snack-bar-shrink-container">
                                {snackBarServerErrors}
                            </div>
                            <div className="snack-bar-actions">
                                <button className="snack-bar-reset-button" type="button" onClick={(e) => resetChanges(e)}>
                                    <div className="global-button-contents">Reset</div>
                                </button>
                                <button className="snack-bar-save-changes-button" type="button" onClick={(e) => {
                                    // handleNameChangeSubmit(e)
                                    handleSnackBarSubmit(e);
                                }}>
                                    <div className="shiny-button-contents">
                                        Save Changes
                                        <div className="shiny-button-container">
                                            <div className="shiny-button-flex">
                                                <div className="shiny-button-inner"></div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }


    let serverNameErrors = props.errors.length > 0 ? (
        <div className="server-error-lite">{`${renderServerNameErrors()}`}</div>
    ) : ("");


    let existingServerImageIcon = serverIconPhotoUrl === undefined || serverIconPhotoUrl === '' ?
        ('') :
        (<img
            className={`server-image-uploader-inner`}
            src={serverIconPhotoUrl}
            alt=" "
        />)

    let snackBarServerErrors = props.errors.length > 0 ? (
        <div className="snack-bar-message update-error">
            {`${renderServerNameErrors()}`}
        </div>
    ) : (
        <div className="snack-bar-message">
            Careful — you have unsaved changes!
        </div>
    )


    return (

        <REACT_PORTAL wrapperId={'mass-modal-container'} classNameId={'mass-modal-layer-container'} onClick={(e) => e.stopPropagation()}>
            <div className="server-settings-wrapper" id="grab-wrapper" onClick={e => e.stopPropagation()}>
                {renderDeleteServerModal()}
                {renderLogOutModal()}
                {rendeChangeServerAvatarModal()}
                {renderBoostServerModal()}
                {renderChangeServerBannerModal()}
                {renderChangeServerInvitationBannerModal()}
                <div className="server-settings-modal" id="server-settings-modal">
                    <div className="server-settings-sidebar-region">
                        <div className="server-settings-sidebar-region-scroller-base global-scroll-thin-raw-attributes global-scroller-base global-scroll-faded-raw-attributes"
                            style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                            <nav className="server-settings-sidebar">
                                <div className="server-settings-sidebar-list" role="tablist">
                                    <div className="server-settings-sidebar-list-header-wrapper" role="button" tabIndex={-1}>
                                        <div className="server-settings-sidebar-list-header">
                                            {`${newServerName}`}
                                        </div>
                                    </div>
                                    <div className="server-settings-sidebar-list-item selected" role="tab" tabIndex={-1}>Overview</div>
                                    <div className="server-settings-sidebar-list-item" role="tab" >Roles</div>
                                    <div className="server-settings-sidebar-list-item" role="tab">Emoji</div>
                                    <div className="server-settings-sidebar-list-item" role="tab">Stickers</div>
                                    <div className="server-settings-sidebar-list-item" role="tab">Soundboard</div>
                                    <div className="server-settings-sidebar-list-item" role="tab">Widget</div>
                                    <div className="server-settings-sidebar-list-item" role="tab">Server Template</div>
                                    <div className="server-settings-sidebar-list-item" role="tab">Custom Invite Link</div>
                                    <div className="server-settings-sidebar-list-sep"></div>
                                    <div className="server-settings-sidebar-list-header-wrapper" role="button" tabIndex={-1}>
                                        <div className="server-settings-sidebar-list-header">APPS</div>
                                    </div>
                                    <div className="server-settings-sidebar-list-item" role="tab">Integrations</div>
                                    <div className="server-settings-sidebar-list-item" role="tab">App Directory</div>
                                    <div className="server-settings-sidebar-list-sep"></div>
                                    <div className="server-settings-sidebar-list-header-wrapper" role="button" tabIndex={-1}>
                                        <div className="server-settings-sidebar-list-header">Moderation</div>
                                    </div>
                                    <div className="server-settings-sidebar-list-item" role="tab">Safety Setup</div>
                                    <div className="server-settings-sidebar-list-item" role="tab">AutoMod</div>
                                    <div className="server-settings-sidebar-list-item" role="tab">Audit Log</div>
                                    <div className="server-settings-sidebar-list-item" role="tab">Bans</div>
                                    <div className="server-settings-sidebar-list-sep"></div>
                                    <div className="server-settings-sidebar-list-header-wrapper" role="button" tabIndex={-1}>
                                        <div className="server-settings-sidebar-list-header">Community</div>
                                    </div>
                                    <div className="server-settings-sidebar-list-item" role="tab">Enable Community</div>
                                    <div className="server-settings-sidebar-list-sep"></div>
                                    <div className="server-settings-sidebar-list-header-wrapper" role="button" tabIndex={-1}>
                                        <div className="server-settings-sidebar-list-header">Monetization</div>
                                    </div>
                                    <div className="server-settings-sidebar-list-item" role="tab">
                                        <div className="server-settings-sidebar-list-item-inner">Server Subscriptions</div>
                                    </div>
                                    <div className="server-settings-sidebar-list-sep"></div>

                                    <div className="server-settings-sidebar-list-item" role="tab">
                                        <div className="server-settings-sidebar-list-item-inner-special">
                                            Server Boost Status
                                            <GemBoostIcon className="ssm-server-boost-icon" />
                                        </div>
                                    </div>
                                    <div className="server-settings-sidebar-list-sep"></div>
                                    <div className="server-settings-sidebar-list-header-wrapper" role="button" tabIndex={-1}>
                                        <div className="server-settings-sidebar-list-header">User Management</div>
                                    </div>

                                    <div className="server-settings-sidebar-list-item" role="tab">Members</div>
                                    <div className="server-settings-sidebar-list-item" role="tab">Invites</div>
                                    <div className="server-settings-sidebar-list-sep"></div>

                                    <div className="server-settings-sidebar-list-item" role="tab"
                                        onClick={(e) => openModal("deleteServer")}
                                    >
                                        <div className="server-settings-sidebar-list-item-inner-special">
                                            Delete Server
                                            <TrashCanIcon className="ssm-del-server-icon" width={16} height={16} />
                                        </div>
                                    </div>
                                    <div className="server-settings-sidebar-list-item" role="tab"
                                        onClick={(e) => openModal("logoutConfirm")}
                                    >
                                        <div className="server-settings-sidebar-list-item-inner-special">
                                            Log Out
                                            <LogoutIcon className="ssm-logout-icon" />
                                        </div>
                                    </div>
                                    <div className="server-settings-sidebar-list-sep"></div>
                                    <div className="ssm-version-number">
                                        <span>Stable 210566 (fc3ede1)</span>
                                        <br />
                                        <span>Windows 11 64-bit</span>

                                    </div>
                                </div>
                            </nav>
                            <div className="server-settings-sep"></div>
                        </div>
                    </div>
                    <div className="server-settings-lhs-content">
                        <div className="server-settings-lhs-content-transit-wrap">
                            <div className="server-settings-lhs-content-scroller auto-scroll-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                                <div className="server-settings-lhs-inner-contents">
                                    <div className="server-settings-pre-sec-title">
                                        <div className="ssm-title-wrap">
                                            <h2 className="ssm-title-header">
                                                Server Overview
                                            </h2>
                                        </div>
                                        <div className="ssm-children">
                                            <div className="server-op-item-flex ssm-horz" style={{ flex: '1 1 auto' }}>
                                                <div className="server-op-item-flex-jcc ssm-horz" style={{ flex: '1 1 50%' }}>
                                                    <div className="server-op-item-flex-child" style={{ flex: '1 1 auto' }}>
                                                        <div className="server-image-uploader server-avatar-image-uploader">
                                                            <div className="server-image-uploader-icon-wrapper">
                                                                <div className="server-image-uploader-inner server-avatar-image-uploader-inner">
                                                                    {existingServerImageIcon}
                                                                    <span aria-hidden="true">
                                                                        {
                                                                            serverIconPhotoUrl === undefined || serverIconPhotoUrl === "" || serverIconPhotoUrl === null ? (
                                                                                <div className='image-uploader-acro'>
                                                                                    {`${splitServerName()}`}
                                                                                </div>
                                                                            ) : ("")
                                                                        }
                                                                    </span>

                                                                    <input id="upload-server-avatar" className="server-op-pfp-input" accept=".jpg, .jpeg, .png, .gif" type="file" ref={fileRef}
                                                                        onChange={(e) => {
                                                                            handleFileInput(e);
                                                                            setIsSubModMounted(false);
                                                                        }}
                                                                        onClick={(e) => {
                                                                            setIsSubModMounted(true);
                                                                        }}
                                                                        onKeyDown={(e) => {
                                                                            if (e.keyCode === 27) {
                                                                                setIsSubModMounted(false);
                                                                            }
                                                                        }}
                                                                    />

                                                                </div>
                                                                <div className="server-op-image-uploader-hint">
                                                                    Change Icon
                                                                </div>
                                                                <div className="server-op-image-uploader-icon"></div>
                                                            </div>

                                                            {
                                                                serverIconPhotoUrl === undefined || serverIconPhotoUrl === "" || serverIconPhotoUrl === null ? (
                                                                    <small className={`server-op-image-uploader-fp`}>
                                                                        Minimum Size:
                                                                        <strong>128x128</strong>
                                                                    </small>

                                                                ) : (
                                                                    <a role={"button"} onClick={() => handleServerIconRemoval()} type="submit" className={`remove-server-icon-button`}>
                                                                        Remove
                                                                    </a>
                                                                )
                                                            }
                                                        </div>

                                                    </div>

                                                    <div className="server-op-item-flex-jcc vertical" style={{ flex: '1 1 auto', maxWidth: `180px` }}>
                                                        <div className="server-op-icon-rec-s">
                                                            We recommend an image of at least 512x512 for the server.
                                                        </div>
                                                        <button type="submit" className="server-op-pfp-upload-button" onClick={(e) => { handleUploadImage(e) }}>
                                                            <div className="server-op-iubt">Upload Image</div>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="server-op-item-flex-child ssm-margin-bottom" style={{ flex: '1 1 50%' }}>
                                                    <h5 className="server-op-item-margin-bottom-h5">
                                                        <label>SERVER NAME</label>
                                                    </h5>
                                                    <div className="server-op-name-input-wrapper">
                                                        <input
                                                            className="server-op-name-input"
                                                            type="text"
                                                            maxLength={100}
                                                            minLength={1}
                                                            placeholder={`${newServerName}`}
                                                            onChange={(e) => setNewServerName(e.currentTarget.value)}
                                                            spellCheck={false}
                                                            value={newServerName}
                                                        />
                                                    </div>
                                                    {serverNameErrors}
                                                    <h5 className="server-op-item-margin-bottom-h5-2">Server Invite Code :{`${` `}`}{`${props.server.invite_code}`}</h5>
                                                </div>
                                            </div>

                                            <div className="server-op-divider">
                                                <div className="server-op-item-flex ssm-horz" style={{ flex: '1 1 auto' }}>
                                                    <div className="server-op-item-flex-child" style={{ flex: '1 1 50%' }}>
                                                        <h3 className="server-op-div-fjs-h5">Inactive Channel</h3>

                                                        <SelectInActiveChannel
                                                            value={inactiveChannel}
                                                            onChange={handleSetInactiveChannel}
                                                            MenuProps={menuProps}
                                                            IconComponent={SelectChevron}
                                                        >

                                                            <MenuItem value={0} key={'noactivechannel'}>
                                                                {'No Inactive Channel'}
                                                                {inactiveChannel === 0 ? (checkMark) : ("")}
                                                            </MenuItem>
                                                            {props.channels.map((channel) => {
                                                                if (channel.channel_type === 2) {
                                                                    return (
                                                                        <MenuItem value={channel.id} key={channel.id}>
                                                                            <div className="ssm-iac-menu-item-container">
                                                                                {channelLoudSpeakerIcon}
                                                                                <div className="ssm-iac-menu-item-title">
                                                                                    {channel.channel_name}
                                                                                </div>
                                                                                <div className="ssm-iac-menu-item-type">
                                                                                    {"VOICE CHANNELS"}
                                                                                </div>
                                                                            </div>
                                                                            {inactiveChannel === channel.id ? (checkMark) : ("")}
                                                                        </MenuItem>
                                                                    )

                                                                }
                                                                else {
                                                                    return null;
                                                                }
                                                            })}

                                                        </SelectInActiveChannel>

                                                    </div>
                                                    <div className="server-op-item-flex-child" style={{ flex: '1 1 50%' }}>
                                                        <h5 className="server-op-div-fjs-h5">Inactive Timeout</h5>

                                                        <SelectInActiveChannel
                                                            value={inactiveTimeOut}
                                                            onChange={handleSetInactiveTimeOutOptions}
                                                            MenuProps={menuProps}
                                                            IconComponent={SelectChevron}
                                                            disabled={inactiveChannel === 0}
                                                            defaultValue={5}
                                                        >
                                                            {
                                                                inActiveTimeOutOptions.map((timeout, timeIdx) => {
                                                                    return (
                                                                        <MenuItem value={inActiveTimeOutOptionsEvaluation[timeIdx]} key={timeout}>
                                                                            <div className="ssm-iac-menu-item-container">
                                                                                <div className="ssm-iac-menu-item-title">
                                                                                    {timeout}
                                                                                </div>
                                                                            </div>
                                                                            {inactiveTimeOut === inActiveTimeOutOptionsEvaluation[timeIdx] ? (checkMark) : ("")}
                                                                        </MenuItem>
                                                                    )
                                                                })
                                                            }
                                                        </SelectInActiveChannel>
                                                    </div>
                                                </div>
                                                <div className="inactive-sub-info">
                                                    Automatically move members to this channel and mute them when they have been idle for longer than the
                                                    inactive timeout. This does not affect browsers.
                                                </div>
                                            </div>

                                            <div className="server-op-divider">
                                                <h5 className="server-op-div-fjs-h5">System Messages Channel</h5>
                                                <SelectSystemMessagesChannel
                                                    value={systemMessagesChannel}
                                                    onChange={handleSetSystemMessagesChannel}
                                                    MenuProps={menuProps2}
                                                    IconComponent={SelectChevron}
                                                >
                                                    <MenuItem value={0} key={'NSM'}>
                                                        {'No System Messages'}
                                                        {systemMessagesChannel === 0 ? (checkMark) : ("")}
                                                    </MenuItem>
                                                    {props.channels.map((channel) => {
                                                        if (channel.channel_type === 1) {
                                                            return (
                                                                <MenuItem value={channel.id} key={channel.id}>
                                                                    <div className="ssm-iac-menu-item-container">
                                                                        {channelHashIcon}
                                                                        <div className="ssm-iac-menu-item-title">
                                                                            {channel.channel_name}
                                                                        </div>
                                                                        <div className="ssm-iac-menu-item-type">
                                                                            {"TEXT CHANNELS"}
                                                                        </div>
                                                                    </div>
                                                                    {systemMessagesChannel === channel.id ? (checkMark) : ("")}
                                                                </MenuItem>
                                                            )

                                                        }
                                                        else {
                                                            return null;
                                                        }
                                                    })}
                                                </SelectSystemMessagesChannel>

                                                <div className="inactive-sub-info">
                                                    This is the channel we send system event messages to. These can be turned off at any time.
                                                </div>

                                                <div className="server-op-margin-top-container">
                                                    <StrifeToggleSwitch key={`:r${8}:`} customIndex={8} checkedState={sendWelcomeMessage}
                                                        labelTagContents={"Send a random welcome message when someone joins this server."}
                                                        setCheckedState={() => setSendWelcomeMessage(!sendWelcomeMessage)}
                                                    />
                                                </div>
                                                <div className="server-op-margin-top-container">
                                                    <StrifeToggleSwitch key={`:r${9}:`} customIndex={9} checkedState={promptMembers}
                                                        labelTagContents={"Prompt members to reply to welcome messages with a sticker."}
                                                        setCheckedState={() => setPromptMembers(!promptMembers)}
                                                    />
                                                </div>
                                                <div className="server-op-margin-top-container">
                                                    <StrifeToggleSwitch key={`:r${10}:`} customIndex={10} checkedState={sendMessageUponBoost}
                                                        labelTagContents={"Send a message when someone boosts this server."}
                                                        setCheckedState={() => setSendMessageUponBoost(!sendMessageUponBoost)}
                                                    />
                                                </div>
                                                <div className="server-op-margin-top-container">
                                                    <StrifeToggleSwitch key={`:r${11}:`} customIndex={11} checkedState={sendHelpfulTips}
                                                        labelTagContents={"Send helpful tips for server setup."}
                                                        setCheckedState={() => setSendHelpfulTips(!sendHelpfulTips)}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="server-op-divider">
                                                    <h3 className="server-op-div-fjs-h5">Default Notification Settings</h3>
                                                    <div className="inactive-sub-info-2">
                                                        This will determine whether members who have not explicitly set their notification settings
                                                        receive a notification for every message sent in this server or not.
                                                    </div>
                                                    <div className="inactive-sub-info-2">
                                                        We highly recommend setting this to only @mentions for a Community server.
                                                    </div>
                                                    <div className="ssm-radio-group-container" role={"radiogroup"}>

                                                        <div className="sop-radio-item" role={"radio"} aria-checked={`${defaultNotificationSettings === "All Messages" ? `true` : `false`}`}>
                                                            <div className="sop-radio-item-inner" onClick={() => setDefaultNotificationSettings("All Messages")}>
                                                                <div className="radioIconForeground-container">
                                                                    {defaultNotificationSettings === "All Messages" ? (<RadioCircleFilledIcon />) : (<RadioCircleIcon />)}
                                                                </div>

                                                                <div className="sop-radio-info">
                                                                    <div className="sop-text-med">All Messages</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sop-radio-item" role={"radio"} aria-checked={`${defaultNotificationSettings === "Only @mentions" ? `true` : `false`}`}>

                                                            <div className="sop-radio-item-inner" onClick={() => setDefaultNotificationSettings("Only @mentions")}>
                                                                <div className="radioIconForeground-container">
                                                                    {defaultNotificationSettings === "Only @mentions" ? (<RadioCircleFilledIcon />) : (<RadioCircleIcon />)}
                                                                </div>
                                                                <div className="sop-radio-info">
                                                                    <div className="sop-text-med">
                                                                        Only{` `}
                                                                        <strong>@mentions</strong>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="server-op-divider">
                                                    <div className="sop-section-title">
                                                        <h3 className="sop-section-header">
                                                            Display
                                                        </h3>
                                                    </div>
                                                    <div className="sop-display-children">
                                                        <div>
                                                            <div className="server-op-divider-flex-js2 ssm-horz2" style={{ flex: '1 1 auto' }}>
                                                                <div className="server-op-divider-flex-horz">
                                                                    <div className="server-op-horz-martop-container">
                                                                        <StrifeToggleSwitch key={`:r${12}:`} customIndex={12} checkedState={showBoostProgressBar}
                                                                            labelTagContents={"Show Boost progress bar"}
                                                                            setCheckedState={() => setShowBoostProgressBar(!showBoostProgressBar)}
                                                                        />
                                                                    </div>
                                                                    <div className="inactive-sub-info-3">
                                                                        This progress bar will display in your channel list, attached to your server name
                                                                        (or server banner if you have one set).
                                                                    </div>
                                                                </div>
                                                                <div className="flex-child-boost-ex">
                                                                    <img className="flex-child-boost-ex-img" alt=" " />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="server-op-divider">
                                                            <div className="sbb-op-flex ssm-horz3" style={{ flex: '1 1 50%' }}>
                                                                <div className="sbb-flex-child" style={{ flex: '1 1 50%' }}>
                                                                    <h4 className="faint-h5">
                                                                        <div>Server Banner Background</div>
                                                                        <div className="faint-server-boost-icon-super-wrapper">
                                                                            <div className="faint-server-boost-icon-wrapper" data-tooltip-place="left" data-tooltip-id="modal-tip-s"
                                                                                data-tooltip-content={'Click to learn more'} onClick={(e) => openModal('boostSubscribe')}>
                                                                                <GemBoostIcon className="faint-server-boost-icon" height={24} width={24} />
                                                                                <h4 className="faint-boost-h4">
                                                                                    LVL 2
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                    </h4>
                                                                    <div className="faint-server-invite-text1">
                                                                        This image will display at the top of your channels list.
                                                                    </div>
                                                                    <div className="faint-server-invite-text2">
                                                                        The recommended minimum size is 960x540 and recommended aspect ratio is 16:9.{" "}
                                                                        <a className="faint-anchor" target="_blank" href="https://support.discord.com/hc/en-us/articles/360028716472">Learn more</a>.
                                                                    </div>
                                                                    <button type="button" className="faint-boost-shiny-button" onClick={(e) => openModal('boostSubscribe')}>
                                                                        <div className="shiny-button-contents">
                                                                            <GemBoostIcon className="shiny-button-icon" height={16} width={16} />
                                                                            Unlock with Boosting
                                                                            <div className="shiny-button-container">
                                                                                <div className="shiny-button-flex">
                                                                                    <div className="shiny-button-inner"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                </div>

                                                                <div className="sbb-flex-child" style={{ flex: '1 1 50%' }}>
                                                                    <div className="faint-upsell" onClick={(e) => openModal('changeServerBanner')}>
                                                                        <div className="faint-img-uploader">
                                                                            <div className="faint-img-upload" style={{ backgroundImage: `${props.server.server_banner === undefined ? `linear-gradient(45deg, var(--guild-boosting-blue), var(--guild-boosting-purple))` : `url(${props.server.server_banner})`}` }}>
                                                                                <div className="faint-img-acyro"></div>
                                                                                <div className="faint-img-icon faint-img-uploader-icon"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="server-op-divider">
                                                            <div className="sbb-op-flex ssm-horz3" style={{ flex: '1 1 50%' }}>
                                                                <div className="sbb-flex-child" style={{ flex: '1 1 50%' }}>
                                                                    <h4 className="faint-h5">
                                                                        <div>Server Invite Background</div>
                                                                        <div className="faint-server-boost-icon-super-wrapper">
                                                                            <div className="faint-server-boost-icon-wrapper" data-tooltip-place="left" data-tooltip-id="modal-tip-s"
                                                                                data-tooltip-content={'Click to learn more'} onClick={(e) => openModal('boostSubscribe')}>
                                                                                <GemBoostIcon className="faint-server-boost-icon" height={24} width={24} />
                                                                                <h4 className="faint-boost-h4">
                                                                                    LVL 1
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                    </h4>
                                                                    <div className="faint-server-invite-text1">
                                                                        This image will display in server invite embeds, invite in browser, and invite confirmation modal.
                                                                    </div>
                                                                    <div className="faint-server-invite-text2">
                                                                        The recommended minimum size is 1920x1080 and recommended aspect ratio is 16:9.{" "}
                                                                        <a className="faint-anchor" target="_blank" href="https://support.discord.com/hc/en-us/articles/4415841146391">Learn more</a>.
                                                                    </div>
                                                                    <button type="button" className="faint-boost-shiny-button" onClick={(e) => openModal('boostSubscribe')}>
                                                                        <div className="shiny-button-contents">
                                                                            <GemBoostIcon className="shiny-button-icon" height={16} width={16} />
                                                                            Unlock with Boosting
                                                                            <div className="shiny-button-container">
                                                                                <div className="shiny-button-flex">
                                                                                    <div className="shiny-button-inner"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                                <div className="sbb-flex-child" style={{ flex: '1 1 50%' }}>
                                                                    <div className="faint-upsell" onClick={(e) => openModal('changeServerInvitationBanner')}>
                                                                        <div className="faint-img-uploader">
                                                                            <div className="faint-img-upload" style={{ backgroundImage: `${props.server.invite_splash === undefined ? `linear-gradient(45deg, var(--guild-boosting-blue), var(--guild-boosting-purple))` : `url(${props.server.invite_splash})`}` }}>
                                                                                <div className="faint-img-acyro"></div>
                                                                                <div className="faint-img-icon faint-img-uploader-icon"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tools-container">
                                    <div className="tool-x-to-esc-button-wrapper">
                                        <div className="inner-tool-container">
                                            <div className="x-to-esc-button" onClick={(e) => handleCloseModal(e)}>
                                                <ESCICON />
                                            </div>
                                            <div className="esc-bind">ESC</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="server-settings-sep"></div>
                            </div>
                        </div>
                        {renderSnackBar()}
                    </div>
                    <Tooltip className="thread-tool-tip" id="modal-tip-s" place="top" />
                </div>
            </div >
        </REACT_PORTAL >
    )
}
export default ServerSettingsModal;