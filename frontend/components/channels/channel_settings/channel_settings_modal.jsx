import React from "react";
import { useEffect, useState } from "react";
import DeleteChannelModalContainer from "../delete_channel_modal/delete_channel_modal_container";
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";
import MenuItem from '@mui/material/MenuItem';


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


const RegionLabel = styled(FormControlLabel)(({ theme }) => ({
    boxSizing: "border-box",
    outline: "0",
    cursor: "pointer",
    borderRadius: "3px",
    display: "block",
    marginBottom: "8px",
    marginLeft: '0px',
    marginRight: '-5px',
    display: "-webkit-box",
    display: "flex",
    flexDirection: "row",
    padding: '3px 0px',
    '.MuiFormControlLabel-label': {
        boxSizing: 'border-box',
        outline: "0",
        lineHeight: '20px',
        fontFamily: "gg sans",
        fontSize: '16px',
        fontWeight: '500',
    }
}));

const RegionRadioGroup = styled(RadioGroup)(({ theme }) => ({
    color: "#b5bac1",
    boxSizing: "border-box",
    outline: "0",
    cursor: "pointer",
    borderRadius: "3px",
    display: "block",
    marginBottom: "8px",
    display: "-webkit-box",
    display: "flex",
    flexDirection: "column"
}));


const RegionFormControl = styled(FormControl)(({ theme }) => ({
    boxSizing: "border-box",
    outline: "0",
    display: "flex",
    flexDirection: "column"
}));

const RegionRadio = styled(Radio)(({ theme }) => ({
    color: "white",
    'padding': '10px',

    "&.Mui-checked": {
        color: "rgb(255,255,255)"
    }

}))


const ChannelSettingsModal = (props) => {

    const [channelDeletion, setChannelDeletion] = useState(false);
    const [newChannelName, setNewChannelName] = useState("");
    useEffect(() => {
        setNewChannelName(props.channel.channel_name);

        if (channelDeletion === true) {
            // window.removeEventListener('keyup', props.handleESC, false);
            window.removeEventListener('keyup', overrideCloseModal, false);


        }
        else {
            // setTimeout(() => {
            // window.addEventListener('keyup', props.handleESC, false);
            window.addEventListener('keyup', overrideCloseModal, false);

            // }, 1000)
        }

        return function cleanUp () {
            props.removeServerErrors();
            props.removeChannelErrors();
            props.removeSessionErrors();
            // window.removeEventListener('keyup', props.handleESC, false);
            window.removeEventListener('keyup', overrideCloseModal, false);

        }

    }, [channelDeletion]);

    const overrideCloseModal = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                let modalToClose = document.getElementById("channel-settings-modal");
                modalToClose.classList.add("transition-out");
                document.getElementById("grab-wrapper").style.opacity = 0.6;
                document.getElementById('app-puller').animate(
                    {
                        transform: ['scale(0.93) translateZ(0px)', 'scale(0.94) translateZ(0px)', 'scale(0.95) translateZ(0px)', 'scale(0.97) translateZ(0px)', 'scale(0.99) translateZ(0px)'],
                        offset: [0.0, 0.25, 0.5, 0.75, 1.0],
                    },
                    {
                        duration: 200,
                        iterations: 1,
                    }
                );
                setTimeout(() => {
                    props.removeServerErrors();
                    props.closeModal();
                    window.removeEventListener('keyup', overrideCloseModal, false);
                }, 100);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }


    const [value, setValue] = useState('');
    const [count, setCount] = useState(1024);
    const [newChannelTopic, setNewChannelTopic] = useState('');
    const [activitySwitch, setActivitySwitch] = useState(false);

    const [activitySliderValue, setActivitySliderValue] = useState(0);
    const [finalActivitySliderValue, setFinalActivitySliderValue] = useState(0);

    const [bitRate, setBitRate] = useState(0);
    const [userLimit, setUserLimit] = useState(0);
    const [videoQuality, setvideoQuality] = useState("Auto");
    const [region, setRegion] = useState("Automatic");
    const [hideInActivity, setHideInActivity] = useState("3 Days");


    const hideInActivityChoices = [
        "1 Hour",
        "24 Hours",
        "3 Days",
        "1 Week"
    ];

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


    const SelectChevron = (props) => {
        return (
            <SvgIcon {...props} aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z">
                </path>
            </SvgIcon>
        );
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
        <svg className="selectRegionSvgCheckMark" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24">
            <circle r="8" cx="12" cy="12" fill="white"></circle>
            <g fill="none" fillRule="evenodd">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10
                    14.17l7.59-7.59L19 8l-9 9z">
                </path>
            </g>
        </svg>
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

    const handleVideoSelection = (e) => {
        setvideoQuality(e.target.value);
    }


    const updateChannelName = () => {
        props.removeChannelErrors();
        let subState = {
            id: props.channel.id,
            channel_name: newChannelName,

        }
        props.updateChannel(subState)

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


    const handleCloseModal = () => {
        // document.getElementById('app-puller').classList.remove('shrink-app');
        let modalToClose = document.getElementById("channel-settings-modal");
        modalToClose.classList.add("transition-out");
        document.getElementById("grab-wrapper").style.opacity = 0.6;
        document.getElementById('app-puller').animate(
            {
                transform: ['scale(0.93) translateZ(0px)', 'scale(0.94) translateZ(0px)', 'scale(0.95) translateZ(0px)', 'scale(0.97) translateZ(0px)', 'scale(0.99) translateZ(0px)'],
                offset: [0.0, 0.25, 0.5, 0.75, 1.0],
            },
            {
                duration: 200,
                iterations: 1,
            }
        );
        setTimeout(() => {
            props.removeServerErrors();
            props.closeModal();
        }, 100);
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
        if (props.channel.channel_type === 1) {
            return 'TEXT CHANNELS';
        }
        else {
            return 'VOICE CHANNELS';
        }
    }


    let channelNameErrors = props.errors.length > 0 ? (
        <div className={"channel-error-slide"}>{`${renderChannelNameErrors()}`}</div>
    ) : ("");



    return (
        <div id="grab-wrapper" className="cs-settings-modal-wrapper" onClick={e => e.stopPropagation()}>
            {channelDeletion && <DeleteChannelModalContainer currentChannel={props.channel}
                setChannelDeletion={setChannelDeletion} />}
            <div className="cs-channel-settings-modal" id="channel-settings-modal">
                <div className="cs-left-side-bar-region">
                    <div className="cs-left-side-bar-region-inner">
                        <nav className="cs-left-side-bar-list-wrapper">
                            <div className="cs-left-side-bar-list">
                                <div className="cs-header-left-list">
                                    {props.channel.channel_type === 1 ?
                                        (<svg width="12" height="12" viewBox="0 0 24 24" className="cs-channel-icon-hash-tag-icon" aria-hidden="true" role="img">
                                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189
                                        5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746
                                        2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 
                                        7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907
                                        3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 
                                        16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 
                                        7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655
                                        15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 
                                        20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 
                                        17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 
                                        9H9.41045Z">
                                            </path>
                                        </svg>) :
                                        (<svg className="cs-channel-icon-mg-icon" aria-hidden="true" role="img" width="12" height="12" viewBox="0 0 24 24">
                                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 
                                        10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579
                                         20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 
                                         3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 
                                         19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 
                                         13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z"
                                                aria-hidden="true">
                                            </path>
                                        </svg>)
                                    }
                                    {`${props.channel.channel_name}`}
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
                                    <div className="cs-left-side-item-logout-sec" onClick={() => setChannelDeletion(!channelDeletion)}>
                                        Delete Channel
                                        <svg className="cs-logout-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path>
                                            <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19
                                             18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="cs-left-side-list-item" onClick={() => handleLogout()}>
                                    <div className="cs-left-side-item-logout-sec">
                                        Logout
                                        <svg className="cs-logout-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 
                                                    13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="cs-lf-lt-sep"></div>
                                <div className="cs-version-number">
                                    <span>Stable 140575 (12c29a3)</span>
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
                        <div className="cs-right-side-content-side-bar">
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
                                                            maxLength={100}
                                                            minLength={1}
                                                            placeholder={`${props.channel.channel_name}`}
                                                            spellCheck={false}
                                                            value={newChannelName}
                                                            onChange={(e) => setNewChannelName(e.currentTarget.value)}
                                                        />
                                                    </div>
                                                    {channelNameErrors}
                                                    <button type="button" className="faint-boost-shiny-button" onClick={() => updateChannelName()}>
                                                        <div className="shiny-button-contents">
                                                            <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
                                                                <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
                                                                </path>
                                                                <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
                                                                </path>
                                                            </svg>
                                                            Submit Name Change
                                                            <div className="shiny-button-container">
                                                                <div className="shiny-button-flex">
                                                                    <div className="shiny-button-inner"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="cs-op-divider"></div>

                                            {props.channel.channel_type === 1 ? (
                                                <div>
                                                    <div className="cs-margin-top">
                                                        <h3 className="cs-op-div-fjs-h5">
                                                            Channel Topic
                                                        </h3>
                                                        <div className="cs-channel-topic-input-wrapper">
                                                            <div className="cs-ip-maxlen">
                                                                <div className="cs-text-area">
                                                                    <textarea
                                                                        disabled id="cs-ta"
                                                                        spellCheck={false}
                                                                        value={value}
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
                                                        </div>
                                                        <button type="button" className="faint-boost-shiny-button" disabled onClick={() => updateChannelTopic()}>
                                                            <div className="shiny-button-contents">
                                                                <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
                                                                    <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
                                                                    </path>
                                                                    <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
                                                                    </path>
                                                                </svg>
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
                                                    <div className="cs-label-row">
                                                        <label className="cs-label-title">Age-Restricted Channel</label>
                                                        <div className="csm-control-123">
                                                            <div className={`${activitySwitch === false ? `csm-control-inner` : `csm-control-inner switched-on`}`}>
                                                                {activitySwitch === false ?

                                                                    (<svg className="csm-activ-slider" viewBox="0 0 28 20"
                                                                        preserveAspectRatio="xMinYMid meet" style={{ left: `${-3}px` }}>
                                                                        <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
                                                                        <svg viewBox="0 0 20 20" fill="none">
                                                                            <path fill="rgb(128,132,142)"
                                                                                d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z">
                                                                            </path>
                                                                            <path fill="rgb(128,132,142)"
                                                                                d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z">
                                                                            </path>
                                                                        </svg>
                                                                    </svg>) :
                                                                    (<svg className="csm-activ-slider on" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: "12px" }}>
                                                                        <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
                                                                        <svg viewBox="0 0 20 20" fill="none">
                                                                            <path fill="rgb(35, 165, 90)"
                                                                                d="M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z">
                                                                            </path>
                                                                            <path fill="rgb(35, 165, 90)"
                                                                                d="M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z">
                                                                            </path>
                                                                        </svg>
                                                                    </svg>)
                                                                }

                                                                <input type="checkbox" className="csm-slider-input" checked={activitySwitch} onChange={() => setActivitySwitch(!activitySwitch)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="cs-inactive-sub-info-activity">
                                                        Users will need to confirm they are of over legal age to view in the content in this channel.
                                                        Age-restricted channels are exempt from the explicit content filter. ($TR!F3 N!TR0 Required!)
                                                    </div>
                                                </div>
                                            </div>

                                            {props.channel.channel_type === 1 ?
                                                (<div>
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
                                                                    <MenuItem value={choice} key={choice}>
                                                                        {choice}
                                                                        {hideInActivity === choice ? (checkMark) : ("")}
                                                                    </MenuItem>
                                                                )
                                                            })}

                                                        </SelectRegion>
                                                        <div className="cs-inactive-sub-info-activity">
                                                            New threads will not show in the channel list after being
                                                            inactive for the specified duration. ($TR!F3 N!TR0 Required!)
                                                        </div>
                                                    </div>
                                                </div>) : ("")
                                            }


                                        </div>

                                        {props.channel.channel_type === 2 ? (
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
                                                        <RegionFormControl>
                                                            <RegionRadioGroup
                                                                aria-labelledby="select-video-quality"
                                                                name="select-video-quality-radio-buttons-group"
                                                                value={videoQuality}
                                                                onChange={handleVideoSelection}
                                                            >
                                                                <RegionLabel
                                                                    sx={{
                                                                        backgroundColor: `${videoQuality === "Auto" ? `rgba(78, 80, 88, 0.6)` : "#2b2d31"}`,
                                                                        color: `${videoQuality === "Auto" ? `white` : "#b5bac1"}`,
                                                                    }}
                                                                    value="Auto"
                                                                    control={
                                                                        <RegionRadio />
                                                                    }
                                                                    label="Auto"
                                                                />

                                                                <RegionLabel
                                                                    sx={{
                                                                        backgroundColor: `${videoQuality === "720P" ? `rgba(78, 80, 88, 0.6)` : "#2b2d31"}`,
                                                                        color: `${videoQuality === "720P" ? `white` : "#b5bac1"}`,
                                                                    }}
                                                                    value="720P"
                                                                    control={
                                                                        <RegionRadio />
                                                                    }
                                                                    label="720P"
                                                                />
                                                            </RegionRadioGroup>
                                                        </RegionFormControl>
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
                                        ) : ("")}

                                        <div className="channel-settings-img-wrap">
                                            <img className="channel-settings-img" alt="chsettings" />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="tools-container">
                                <div className="tool-x-to-esc-button-wrapper">
                                    <div className="inner-tool-container">
                                        <div className="x-to-esc-button" onClick={() => handleCloseModal()}>
                                            <svg role="img" width="18" height="18" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 
                                                     12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="esc-bind">ESC</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cs-invisible-vert-sep"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}

export default ChannelSettingsModal;