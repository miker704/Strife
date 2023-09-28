import React from "react";
import { useEffect, useState, useRef } from "react";
import DeleteChannelModalContainer from "../delete_channel_modal/delete_channel_modal_container";
import ConfirmLogoutModalContainer from "../../users/logout_modal/logout_modal_container";
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import { styled } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";
import MenuItem from '@mui/material/MenuItem';
import StrifeToggleSwitch from "../../custom_input_components/strife_toggle_switch_container";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { appPullerReleaseAnimation, appPullerReleaseHoldAnimation } from "../../../utils/appPullerAnimation_api_util";
import { ESCICON, GemBoostIcon, TrashCanIcon, HashIcon, LogoutIcon, LoudSpeakerIcon, RadioCircleFilledIcon, RadioCircleIcon, SelectBoxCheckIcon } from "../../front_end_svgs/Strife_svgs";

const SlowModeSlider = styled(Slider)(({ theme }) => ({
    '& .MuiSlider-rail': {
        'opacity': '1',
        'outline': '0',
        'position': 'relative',
        'height': '8px',
        'borderRadius': '4px',
        'display': 'block',
        'overflow': 'hidden',
        'boxSizing': 'border-box',
        'backgroundColor': '#4e5058',
        'width': '101%',
        'transform': 'translate(0px,50%)',
    },
    '& .MuiSlider-mark': {
        'height': `24px`,
        'width': `2px`,
        'outline': '0',
        'boxSizing': 'border-box',
        'background': '#4e5058',
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'borderRadius': '0px',
        'userSelect': 'none',
        'position': 'absolute',
        'justifyContent': 'center',
        'top': '24px',
        'opacity': '1',
    },

    '& .MuiSlider-track': {
        'color': '#5865f2',
        'boxSizing': 'border-box',
        'outline': '0',
        'height': '8px',
        'transform': 'translate(-4px,50%)',
    },
    '& .MuiSlider-thumb': {
        'outline': '0',
        'boxSizing': 'border-box',
        'position': 'absolute',
        'width': '10px',
        'height': '24px',
        'marginLeft': '0px',
        'top': '80%',
        'marginTop': '0px',
        'borderRadius': '3px',
        'cursor': 'ew-resize',
        'boxShadow': '0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05)',
        'backgroundColor': 'white',
        'border': '1px solid #e3e5e8',
    },

    '& .MuiSlider-markLabel': {
        'color': '#949aa4',
        'outline': '0',
        'boxSizing': 'border-box',
        'paddingLeft': '1px',
        'fontWeight': '700',
        'fontSize': '10px',
        'marginBottom': '4px',
        'minHeight': '10px',
        'fontFamily': "gg sans",
        'top': '-6px',
    },
    '& .MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb:hover, .MuiSlider-thumb.Mui-active': {
        'boxShadow': 'none !important'
    },
    '& .MuiSlider-valueLabel': {
        'color': '#ffffff',
        'fontFamily': "gg sans",
        'borderRadius': '4px',
        'backgroundColor': '#1e1f22',
    }
}));

const SelectRegion = styled(Select)(({ theme }) => ({

    fontSize: '16px',
    lineHeight: '20px',
    fontFamily: "gg sans",
    fontWeight: '400',
    color: '#dbdee1',

    '.MuiSelect-select': {
        backgroundColor: '#1e1f22',
        '.selectRegionSvgCheckMark': {
            display: 'none !important',
        }
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
        padding: '10px 8px 8px 10px',
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

const ChannelSettingsModal = (props) => {

    const [Channel, setChannel] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const newChannelNameRef = useRef(null);
    const [newChannelName, setNewChannelName] = useState("");
    const [isSubModMounted, setIsSubModMounted] = useState(false);
    const [freeze, setFreeze] = useState(false);
    const [currentSubModal, setCurrentSubModal] = useState({
        deleteChannel: false,
        logoutConfirm: false,
    });


    useEffect(() => {

        //to prevent unauthorization and also prevent speed hopping run the folowing procedures
        // check if current user is the server owner of both prev and current server props
        // if false close modal else check to see if the channel exists in the current server if not 
        // replace the channel with the 1st channel of the current server check if the current user is server
        // owner else leave the modal.

        if (props.channel_belongs_to_server_id !== props.server.id) {
            // throw new Error (`Error Occurred Channel expected with id of ${props.mod_Channel_ID} does not belong to this Server of id = ${props.server.id}`);
            // console.error(`Error Occurred Channel expected with id of ${props.mod_Channel_ID} does not belong to this Server of id = ${props.server.id}`);
            props.closeModal();
        }
        else if (props.currentChannel === null) {
            props.closeModal();
        }
        else {

            setChannel(props.currentChannel);
            setNewChannelName(props.currentChannel.channel_name);
            setIsLoaded(true);
        }


    }, [])


    useEffect(() => {

        if (isSubModMounted === true) {
            window.removeEventListener('keyup', overrideCloseModal, false);
        }
        else if (isSubModMounted === false) {
            window.addEventListener('keyup', overrideCloseModal, false);
        }

        return function cleanUp () {
            if (props.errors.length > 0) {
                props.removeChannelErrors();
            }
            if (props.sessionErrors.length > 0) {
                props.removeSessionErrors();
            }
            if (props.serverErrors.length > 0) {
                props.removeServerErrors();
            }
            window.removeEventListener('keyup', overrideCloseModal, false);
        }

    }, [isSubModMounted]);


    useEffect(() => {
        if(isLoaded){
            catchChanges();
        }
    }, [newChannelName]);



    const overrideCloseModal = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                let modalToClose = document.getElementById("channel-settings-modal");
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
        let modalToClose = document.getElementById("channel-settings-modal");
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

    const [value, setValue] = useState('');
    const [count, setCount] = useState(1024);
    const [newChannelDescription, setNewChannelDescription] = useState('');
    const [activitySwitch, setActivitySwitch] = useState(false);
    const [activitySliderValue, setActivitySliderValue] = useState(0);
    const [finalActivitySliderValue, setFinalActivitySliderValue] = useState(0);
    const [bitRate, setBitRate] = useState(0);
    const [userLimit, setUserLimit] = useState(0);
    const [videoQuality, setvideoQuality] = useState("Auto");
    const [region, setRegion] = useState("Automatic");
    const [hideInActivity, setHideInActivity] = useState(72);

    const hideInActivityChoices = [
        "1 Hour",
        "24 Hours",
        "3 Days",
        "1 Week"
    ];

    const hideInActivityChoicesEvaluation = {
        "1 Hour": 1,
        "24 Hours": 24,
        "3 Days": 72,
        "1 Week": 168,
    }
    const activityMarks = [
        {
            value: 0,
            label: 'Off'
        },
        {
            value: 1,
            label: '5s'
        },
        {
            value: 2,
            label: '10s'
        },
        {
            value: 3,
            label: '15s'
        },
        {
            value: 4,
            label: '30s'
        },
        {
            value: 5,
            label: '1m'
        },
        {
            value: 6,
            label: '2m'
        },
        {
            value: 7,
            label: '5m'
        },
        {
            value: 8,
            label: '10m'
        },
        {
            value: 9,
            label: '15m'
        },
        {
            value: 10,
            label: '30m'
        },
        {
            value: 11,
            label: '1h'
        },
        {
            value: 12,
            label: '2h'
        },
        {
            value: 13,
            label: '6h'
        },

    ];

    const bitRateMarks = [
        {
            value: 8,
            label: '8kbps'
        },
        {
            value: 64,
            label: '64kbps'
        },
        {
            value: 96,
            label: '96kbps'
        }
    ];

    const userLimitMarks = [
        {
            value: 0,
            label: '∞'
        },

        {
            value: 99,
            label: '99'
        }

    ]

    const handleHideInActivity = (e) => {
        setHideInActivity(e.target.value);
    }


    const handleRegionChange = (e) => {
        setRegion(e.target.value);
    }


    const regionNames = [
        "Automatic",
        "Brazil",
        "Hong Kong",
        "India",
        "Japan",
        "Rotterdam",
        "Russia",
        "Singapore",
        "South Africa",
        "Sydney",
        "US Central",
        "US East",
        "US South",
        "US West",
    ]

    let checkMark = (
        <SelectBoxCheckIcon className="selectRegionSvgCheckMark" />
    );

    const menuProps = {
        PaperProps: {
            sx: {
                "& .MuiMenuItem-root": {
                    cursor: 'pointer',
                    color: '#dbdee1',
                    fontWeight: '500',
                    fontSize: '16px',
                    fontFamily: 'gg sans',

                    padding: '8px',
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
                // overFlow: 'hidden scroll',
                boxSizing: 'border-box',
                border: '1px solid rgb(30,31,34)',
                borderRadius: '0 0 4px 4px',

            },
        },
    }


    const userLimitValueLabel = (value) => {
        if (value === 0) {
            return "No Limit";
        }
        if (value === 1) {
            return `${value} user`;
        }
        else {
            return `${value} users`;
        }
    }

    const bitRateLabel = (value) => {
        return `${value}kbps`;
    }


    const updateChannelName = (e) => {

        e.preventDefault();
        if (props.errors.length > 0) {
            props.removeChannelErrors();
        }
        let subState = {
            id: Channel.id,
            channel_name: newChannelName.trim(),
        }
        props.updateChannel(subState).then((result) => {
            setChannel(result.channelPayload.channel);
            setNewChannelName(result.channelPayload.channel.channel_name);
            setFreeze(false);
        });

    }
    const updateChannelTopic = () => {
        //tba at another time
    }


    const updateChannelActivitySlider = (e, value) => {
        let ActivitySliderValues = {
            0: 0,
            1: 5,
            2: 10,
            3: 15,
            4: 30,
            5: 60,
            6: 120,
            7: 300,
            8: 600,
            9: 900,
            10: 1800,
            11: 3600,
            12: 7200,
            13: 21600,
        }
        setActivitySliderValue(value);
        setFinalActivitySliderValue(ActivitySliderValues[value]);
    }


    const handleLogout = () => {
        props.closeModal();
        props.logoutUser();
    }


    const renderChannelNameErrors = () => {

        let channelErrorMessagesArray = [
            "Channel name can't be blank",
            'Channel name is too short (minimum is 1 character)',
            'Channel name is too long (maximum is 100 characters)',
            'Channel name Only one channel in a server can have that name'
        ]

        let channelErrorsResponse = {
            0: 'Must be between 1 and 100 in length. Channel name cannot be ""',
            1: 'Must be between 1 and 100 in length. Channel name cannot be ""',
            2: 'Must be between 1 and 100 in length.',
            3: "A channel with that name already exists in this server!"
        }
        for (let i = 0; i < channelErrorMessagesArray.length; i++) {
            if (props.errors.includes(channelErrorMessagesArray[i])) {
                return channelErrorsResponse[i];
            }
        }
        return "";

    }

    const channelTypeName = () => {
        if (Channel.channel_type === 1) {
            return 'TEXT CHANNELS';
        }
        else {
            return 'VOICE CHANNELS';
        }
    }

    const handleFreeze = () => {
        setFreeze((prevValue) => !prevValue)
    }

    const catchChanges = () => {
        // snack bar appears for only channel name at the moment until other feature are
        // fully implemented
        const cProc = {
            channel_name: Channel.channel_name,
            channel_description: '',
        };
        const regulationChange = {
            channel_name: newChannelName,
            channel_description: newChannelDescription,
        }

        const keys = ['channel_name', 'channel_description'];
        for (const key of keys) {
            if (regulationChange[key] !== cProc[key]) {
                setFreeze(true);
                return;
            }
        }
        setFreeze(false);
    }

    const resetChanges = (e) => {
        e.preventDefault();
        if (props.errors.length > 0) {
            props.removeChannelErrors();
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
        setNewChannelName(Channel.channel_name);
        setNewChannelDescription('');
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

    const renderDeleteChannelModal = () => {
        if (currentSubModal.deleteChannel === true) {
            window.removeEventListener('keyup', overrideCloseModal, false);
            return (
                <DeleteChannelModalContainer closeSubMod={closeForm} formName={"deleteChannel"}
                    currentChannel={Channel}
                    serverParams={props.serverParams}
                    mod_Channel_ID={props.mod_Channel_ID}
                />
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
                                <button className="snack-bar-save-changes-button" type="button" onClick={(e) => { updateChannelName(e) }}>
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



    let channelNameErrors = props.errors.length > 0 ? (
        <div className={"channel-error-slide"}>{`${renderChannelNameErrors()}`}</div>
    ) : ("");

    let snackBarServerErrors = props.errors.length > 0 ? (
        <div className="snack-bar-message update-error">
            {`${renderChannelNameErrors()}`}
        </div>
    ) : (
        <div className="snack-bar-message">
            Careful — you have unsaved changes!
        </div>
    )


    if (isLoaded && (props.channel || Channel)) {
        return (
            <REACT_PORTAL wrapperId={'mass-modal-container'} classNameId={'mass-modal-layer-container'} onClick={(e) => e.stopPropagation()}>
                <div id="grab-wrapper" className="cs-settings-modal-wrapper" onClick={e => e.stopPropagation()}>
                    {renderLogOutModal()}
                    {renderDeleteChannelModal()}
                    <div className="cs-channel-settings-modal" id="channel-settings-modal">
                        <div className="cs-left-side-bar-region">
                            <div className="cs-left-side-bar-region-inner global-scroll-thin-raw-attributes global-scroller-base global-scroll-faded-raw-attributes"
                                style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                                <nav className="cs-left-side-bar-list-wrapper">
                                    <div className="cs-left-side-bar-list">
                                        <div className="cs-header-left-list">
                                            {Channel.channel_type === 1 ?
                                                (
                                                    <HashIcon className="cs-channel-icon-hash-tag-icon" width={12} height={12} />
                                                ) :
                                                (
                                                    <LoudSpeakerIcon className="cs-channel-icon-mg-icon" width={12} height={12} />
                                                )
                                            }
                                            {`${newChannelName}`}
                                            <span className="cs-inner-header-span">
                                                {`${channelTypeName()}`}
                                            </span>
                                        </div>
                                        <div className="cs-left-side-list-item selected">Overview</div>
                                        <div className="cs-left-side-list-item">Permissions</div>
                                        <div className="cs-left-side-list-item">Invites</div>
                                        <div className="cs-left-side-list-item">Integrations</div>
                                        <div className="cs-lf-lt-sep"></div>
                                        <div className="cs-left-side-list-item">
                                            <div className="cs-left-side-item-logout-sec" onClick={() => openModal("deleteChannel")}>
                                                Delete Channel
                                                <TrashCanIcon className="cs-logout-icon" width={16} height={16} />
                                            </div>
                                        </div>
                                        <div className="cs-left-side-list-item" onClick={() => openModal("logoutConfirm")}>
                                            <div className="cs-left-side-item-logout-sec">
                                                Logout
                                                <LogoutIcon className="cs-logout-icon" />
                                            </div>
                                        </div>
                                        <div className="cs-lf-lt-sep"></div>
                                        <div className="cs-version-number">
                                            <span>Stable 210566 (fc3ede1)</span>
                                            <br />
                                            <span>Windows 11 64-bit</span>
                                        </div>
                                    </div>
                                </nav>
                                <div className="cs-invisible-vert-sep"></div>
                            </div>
                        </div>
                        <div className="cs-right-side">
                            <div className="cs-transit-wrap">
                                <div className="cs-right-side-content-side-bar auto-scroll-raw-attributes global-scroller-base"
                                    style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                                    <div className="cs-right-side-content">
                                        <div className="cs-channel-settings-overview">
                                            <div className="cs-channel-settings-overview-title-wrapper">
                                                <h2 className="cs-channel-settings-overview-title">
                                                    Overview
                                                </h2>
                                            </div>
                                            <div className="cs-children">

                                                <div>
                                                    <div className="cs-op-item-flex">
                                                        <div>
                                                            <h5 className="cs-op-item-margin-bottom-h5">
                                                                <label>CHANNEL NAME</label>
                                                            </h5>
                                                            <div className="cs-channel-name-input-wrapper">

                                                                <input
                                                                    className="server-op-name-input"
                                                                    type="text"
                                                                    ref={newChannelNameRef}
                                                                    autoFocus={true}
                                                                    maxLength={100}
                                                                    minLength={1}
                                                                    placeholder={`${newChannelName}`}
                                                                    spellCheck={false}
                                                                    value={newChannelName}
                                                                    onChange={(e) => { setNewChannelName(e.currentTarget.value) }}
                                                                />
                                                            </div>
                                                            {channelNameErrors}

                                                        </div>
                                                    </div>

                                                    <div className="cs-op-divider"></div>

                                                    {
                                                        Channel.channel_type === 1 ? (
                                                            <div>
                                                                <div className="cs-margin-top">
                                                                    <h3 className="cs-op-div-fjs-h5">
                                                                        Channel Topic
                                                                    </h3>
                                                                    <div className="cs-channel-topic-input-wrapper">
                                                                        <div className="cs-ip-maxlen">
                                                                            <textarea
                                                                                className="cs-text-area tsa-scrollbar global-scrollbar-no-border global-scrollbar-ghost-hairline"
                                                                                disabled id="cs-ta"
                                                                                style={{ paddingRight: `38.92px`, height: `83px` }}
                                                                                spellCheck={false}
                                                                                value={value}
                                                                                autoCorrect="off"
                                                                                rows={3}
                                                                                maxLength={1024}
                                                                                minLength={2}
                                                                                onChange={(e) => {
                                                                                    setCount(e.currentTarget.value.length);
                                                                                    setValue(e.currentTarget.value);
                                                                                }}
                                                                                placeholder="Let everyone know how to use this channel! ($TR!F3 N!TR0 Required!)">
                                                                            </textarea>
                                                                            <span className="tmaxlen">Maximum 1024 characters.</span>
                                                                            <div className="maxlen-textarea-cs">{`${count}`}</div>
                                                                        </div>
                                                                    </div>
                                                                    <button type="button" className="faint-boost-shiny-button" disabled onClick={() => updateChannelTopic()}>
                                                                        <div className="shiny-button-contents">
                                                                            <GemBoostIcon height={16} width={16} className="shiny-button-icon" />
                                                                            Submit Channel Topic Change
                                                                            <div className="shiny-button-container">
                                                                                <div className="shiny-button-flex">
                                                                                    <div className="shiny-button-inner"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                                <div className="cs-op-divider"></div>
                                                            </div>
                                                        ) : ("")
                                                    }

                                                    <div>
                                                        <div>
                                                            <h3 className="cs-op-div-fjs-h5">Slowmode</h3>


                                                            <div className="cs-box-1">
                                                                <SlowModeSlider
                                                                    aria-label="Slowmode"
                                                                    defaultValue={0}
                                                                    min={0}
                                                                    max={13}
                                                                    step={1}
                                                                    marks={activityMarks}
                                                                    value={activitySliderValue}
                                                                    onChange={(e, value) => (updateChannelActivitySlider(e, value))}
                                                                /></div>

                                                            <div className="cs-inactive-sub-info">
                                                                Members will be restricted to sending one message and creating one thread per this interval,
                                                                unless they have Manage Channel or Manage Messages permissions. ($TR!F3 N!TR0 Required!)
                                                            </div>
                                                        </div>
                                                        <div className="cs-op-divider"></div>
                                                    </div>


                                                    <div>
                                                        <div className="cs-op-container">
                                                            <StrifeToggleSwitch key={`:r${7}:`} customIndex={7} checkedState={activitySwitch}
                                                                labelTagContents={"Age-Restricted Channel"}
                                                                setCheckedState={() => setActivitySwitch(!activitySwitch)}
                                                            />
                                                            <div className="cs-inactive-sub-info-activity">
                                                                Users will need to confirm they are of over legal age to view in the content in this channel.
                                                                Age-restricted channels are exempt from the explicit content filter. ($TR!F3 N!TR0 Required!)
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {
                                                        Channel.channel_type === 1 ?
                                                            (
                                                                <div>
                                                                    <div className="cs-op-divider"></div>
                                                                    <div className="csm-split-flex-container">
                                                                        <div className="cs-form-section-header-wrapper">
                                                                            <h3 className="cs-op-div-fjs-h5">HIDE AFTER INACTIVITY</h3>
                                                                        </div>
                                                                        <SelectRegion
                                                                            value={hideInActivity}
                                                                            onChange={handleHideInActivity}
                                                                            MenuProps={menuProps}
                                                                            IconComponent={SelectChevron}
                                                                        >
                                                                            {hideInActivityChoices.map((choice) => {
                                                                                return (
                                                                                    <MenuItem value={hideInActivityChoicesEvaluation[choice]} key={choice}>
                                                                                        {choice}
                                                                                        {hideInActivity === hideInActivityChoicesEvaluation[choice] ? (checkMark) : ("")}
                                                                                    </MenuItem>
                                                                                )
                                                                            })}

                                                                        </SelectRegion>
                                                                        <div className="cs-inactive-sub-info-activity">
                                                                            New threads will not show in the channel list after being
                                                                            inactive for the specified duration. ($TR!F3 N!TR0 Required!)
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ) : ("")
                                                    }


                                                </div>

                                                {
                                                    Channel.channel_type === 2 ? (
                                                        <>
                                                            <div className="cs-op-divider"></div>

                                                            <div className="csm-split-flex-container">
                                                                <h3 className="cs-op-div-fjs-h5">Bitrate</h3>
                                                                <div className="csm-invisible-div"></div>

                                                                <div className="cs-box-2">
                                                                    <SlowModeSlider
                                                                        aria-label="bitrateslider"
                                                                        valueLabelDisplay="auto"
                                                                        getAriaValueText={bitRateLabel}
                                                                        valueLabelFormat={bitRateLabel}
                                                                        defaultValue={8}
                                                                        min={8}
                                                                        max={96}
                                                                        marks={bitRateMarks}
                                                                        step={1}
                                                                        value={bitRate}
                                                                        onChange={(e, value) => (setBitRate(value))}
                                                                    /></div>
                                                                <div className="cs-inactive-sub-info">
                                                                    ALL THE BITS! Going above 64 kbps may adversely affect people on poor connections.
                                                                </div>
                                                            </div>


                                                            <div className="csm-split-flex-container">
                                                                <div>
                                                                    <h3 className="cs-op-div-fjs-h5">VIDEO QUALITY</h3>
                                                                    <div role={'radiogroup'} className="csm-vQ-rad-group">
                                                                        <div className={`csm-vq-rad-item`} aria-checked={`${videoQuality === 'Auto' ? `true` : `false`}`} onClick={() => setvideoQuality('Auto')}>
                                                                            <div className="csm-vq-rad-item-bar">
                                                                                <div className="csm-rad-item-icon-container">
                                                                                    {videoQuality === 'Auto' ? (<RadioCircleFilledIcon />) : (<RadioCircleIcon />)}

                                                                                </div>
                                                                                <div className="csm-vq-rad-item-info">
                                                                                    <div className="csm-rad-item-text">Auto</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className={`csm-vq-rad-item`} aria-checked={`${videoQuality === '720p' ? `true` : `false`}`} onClick={() => setvideoQuality('720p')}>
                                                                            <div className="csm-vq-rad-item-bar">
                                                                                <div className="csm-rad-item-icon-container">
                                                                                    {videoQuality === '720p' ? (<RadioCircleFilledIcon />) : (<RadioCircleIcon />)}
                                                                                </div>
                                                                                <div className="csm-vq-rad-item-info">
                                                                                    <div className="csm-rad-item-text">720p</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="cs-inactive-sub-info">
                                                                    Sets camera video quality for all channel participants. Choose{`${" "}`}
                                                                    <strong>Auto</strong>{`${" "}`}
                                                                    for optimal performance.
                                                                </div>
                                                            </div>

                                                            <div className="csm-split-flex-container">
                                                                <h3 className="cs-op-div-fjs-h5">USER LIMIT</h3>
                                                                <div className="csm-invisible-div"></div>
                                                                <div className="cs-box-2">

                                                                    <SlowModeSlider
                                                                        aria-label="userlimitslider"
                                                                        valueLabelDisplay="auto"
                                                                        defaultValue={0}
                                                                        getAriaValueText={userLimitValueLabel}
                                                                        valueLabelFormat={userLimitValueLabel}
                                                                        min={0}
                                                                        max={99}
                                                                        step={1}
                                                                        marks={userLimitMarks}
                                                                        value={userLimit}
                                                                        onChange={(e, value) => (setUserLimit(value))}
                                                                    />
                                                                </div>
                                                                <div className="cs-inactive-sub-info">
                                                                    Limits the number of users that can connect to this voice channel. Users with the{`${" "}`}
                                                                    <strong>Move Members</strong>{`${" "}`}
                                                                    permission ignore this limit and can move other users into the channel.
                                                                </div>
                                                            </div>

                                                            <div className="csm-split-flex-container">
                                                                <h3 className="cs-op-div-fjs-h5">REGION OVERRIDE</h3>
                                                                <SelectRegion
                                                                    value={region}
                                                                    onChange={handleRegionChange}
                                                                    MenuProps={menuProps}
                                                                    IconComponent={SelectChevron}
                                                                >
                                                                    {regionNames.map((regionName) => {
                                                                        return (
                                                                            <MenuItem value={regionName} key={regionName}>
                                                                                {regionName}
                                                                                {region === regionName ? (checkMark) : ("")}
                                                                            </MenuItem>
                                                                        )
                                                                    })}

                                                                </SelectRegion>

                                                                <div className="cs-inactive-sub-info">
                                                                    Anyone in this channel will connect to the region you set, regardless of where they live. Regions
                                                                    affect voice and video quality. Leave it on Automatic and $TR!F3 will figure out what works best.
                                                                </div>
                                                            </div>

                                                        </>
                                                    ) : ("")
                                                }

                                                <div className="channel-settings-img-wrap">
                                                    <img className="channel-settings-img" alt=" " />
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
                                    <div className="cs-invisible-vert-sep"></div>
                                </div>
                            </div>
                            {renderSnackBar()}
                        </div>
                    </div>
                </div>
            </REACT_PORTAL >
        )
    }
    else {
        return (
            <REACT_PORTAL wrapperId={'mass-modal-container'} classNameId={'mass-modal-layer-container'} onClick={(e) => e.stopPropagation()}>
                <div id="grab-wrapper" className="cs-settings-modal-wrapper" onClick={e => e.stopPropagation()} style={{ backgroundColor: `transparent` }}>
                    <div className="channel-spinner-back-drop"></div>
                    <div className="cs-channel-settings-modal" id="channel-settings-modal" style={{ backgroundColor: `transparent` }}>
                        <div className="i2sm-main-layer">
                            <div className="i2sm-focus-lock">
                                <span className={`spinning-cubes`}>
                                    <span className="inner-cubes moving-cubes">
                                        <span className="inner-cube"></span>
                                        <span className="inner-cube"></span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </REACT_PORTAL >
        )
    }
}

export default ChannelSettingsModal;