import React from "react";
import { useState, useEffect, useRef } from "react";
import StrifeToggleSwitch from '../../custom_input_components/strife_toggle_switch_container'
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { Tooltip } from "react-tooltip";
import { HashIcon, HashLockIcon, LoudSpeakerIcon, LoudSpeakerLockIcon, PrivateLockIcon, RadioCircleIcon, RadioCircleFilledIcon, CloseXIcon } from "../../front_end_svgs/Strife_svgs";


const CreateChannelModal = (props) => {

    // const [selectedOption, setSelectedOption] = useState('TextChannel');
    const [selectedOption, setSelectedOption] = useState(1);
    const [selectPrivacy, setSelectPrivacy] = useState(false);
    const [channelName, setChannelName] = useState('');
    let popUpRef = useRef(null);
    let inputRef = useRef();
    useEffect(() => {
        window.addEventListener('keyup', handleESCCloseModal, false);
        return function cleanUp () {
            props.removeChannelErrors();
            window.removeEventListener('keyup', handleESCCloseModal, false);

        }
    }, [])

    const handleESCCloseModal = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                handleExitOnOutSideClick(e);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }


    const handleExitOnOutSideClick = (e) => {
        e.preventDefault();
        let modalToClose = document.getElementById("create-channel-modal");
        if (modalToClose) {
            modalToClose.classList.add("transition-out");
            Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                .then(() => {
                    props.closeModal();
                    window.removeEventListener('keyup', handleESCCloseModal, false);

                }, () => {
                    props.closeModal();
                    window.removeEventListener('keyup', handleESCCloseModal, false);

                });
        }
        else {
            props.closeModal();
            window.removeEventListener('keyup', handleESCCloseModal, false);
        }
    }

    let inner_input_icon;

    // if (selectedOption === 'TextChannel') {

    if (selectedOption === 1) {
        if (selectPrivacy === false) {
            inner_input_icon = (
                <HashIcon className="ccm-input-hash" width={16} height={16} />
            )
        }
        else {
            inner_input_icon = (
                <HashLockIcon className="ccm-input-hash-private" width={16} height={16} />
            );
        }
    }
    else if (selectedOption === 2) {
        // else if (selectedOption === 'VoiceChannel') {
        if (selectPrivacy === false) {
            inner_input_icon = (
                <LoudSpeakerIcon className="ccm-input-ls" width={16} height={16} />
            )

        }
        else {
            inner_input_icon = (
                <LoudSpeakerLockIcon className="ccm-input-ls-private" width={16} height={16} />
            );
        }
    }

    let LabelContentsWithSvgIcon = (
        <>
            <PrivateLockIcon className="ccm-priv-lock-icon" />
            Private Channel
        </>
    )


    const handleSubmit = (e) => {
        e.preventDefault();
        // let channelType;
        // if (selectedOption === 'TextChannel') {
        //     channelType = 1;
        // }
        // else if (selectedOption === 'VoiceChannel') {
        //     channelType = 2;
        // }
        props.removeChannelErrors();
        let substate = {
            channel_name: channelName,
            channel_type: selectedOption,
            server_id: props.server.id
        }
        //procedure create -> close -> push redirect
        props.createChannel(substate).then((action) => {
            const newChannel = action.channelPayload.channel;
            //disabling routing to voice channels till voice calling is implemented
            // but allow users to create them 
            props.history.push(`/$/channels/${props.server.id}/${newChannel.id}`);
            handleExitOnOutSideClick(e);
        })

    }

    const handleChange = (e) => {
        e.preventDefault();
        setSelectedOption(e.currentTarget.value);
    }

    const renderChannelErrorMessages = () => {

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

    const channelErrorsMsg = props.errors.length > 0 ? (
        <div className={"channel-error"}>{`${renderChannelErrorMessages()}`}</div>
    ) : ("");

    const inText = props.channelType === 1 ? ("in Text Channels") : props.channelType === 2 ? ("in Voice Channels") : ("");

    const handleHeight = () => {
        if (props.channelType === 1 || props.channelType === 2) {
            // return 482; // keep for removal of nitro private access warning
            // return 494; // for private warning and voice warning
            return 506;
        }
        else {
            // return 466; // keep for removal of nitro private access warning
            // return 478; //for private warning and voice warning
            return 490;
        }
    }

    return (
        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="create-channel-modal-layer" onClick={(e) => handleExitOnOutSideClick(e)}>
                <div className="create-channel-modal-backdrop"></div>
                <div className="create-channel-modal-wrapper" onClick={(e) => e.stopPropagation()} ref={popUpRef}>
                    <div className="create-channel-modal-layer-focus-lock">
                        <div className="create-channel-modal global-scrollbar-ghost-hairline global-scrollbar-no-border root-with-shadow fullscreenOnMobile"
                            id="create-channel-modal" style={{ opacity: `1`, transform: `scale(1)` }}>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className="ccm-1" style={{ height: `${props.errors.length > 0 ? `${handleHeight() + 24}px` : `${handleHeight()}px`}` }}>
                                        <div className="ccm-2">
                                            <div className="ccm-inner-flex">
                                                <div className="ccm-header">
                                                    <h2 className="ccm-header-h2">
                                                        Create Channel
                                                    </h2>
                                                    <div className="ccm-small-txt">
                                                        {inText}
                                                    </div>
                                                </div>
                                                <button type="button" className="ccm-close-button" onClick={(e) => handleExitOnOutSideClick(e)}>
                                                    <div className="ccm-close-button-inner-wrapper">
                                                        <CloseXIcon className="ccm-close-button-icon" />
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="ccm-body global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>

                                                <div className="ccm-c-type">
                                                    <h2 className="ccm-h5">
                                                        Channel Type
                                                    </h2>
                                                    <div role={"radiogroup"}>
                                                        <div className={`ccm-radio-item`} role={"radio"} aria-checked={`${selectedOption === 1 ? true : false}`} onClick={() => setSelectedOption(1)}>
                                                            <div className="ccm-radio-bar" >
                                                                <div className="ccm-radio-bar-icon">
                                                                    {
                                                                        selectedOption === 1 ? (
                                                                            <RadioCircleFilledIcon id={'1s-op'} />
                                                                        ) : (
                                                                            <RadioCircleIcon id={'1s-op'} />
                                                                        )
                                                                    }
                                                                </div>
                                                                <div className="ccm-radio-bar-info">
                                                                    <div className="ccm-med-txt">
                                                                        <div className="ccm-radio-item-name">
                                                                            {
                                                                                selectPrivacy === false ? (

                                                                                    <HashIcon className="ccm-rh-icon" width={24} height={24} />

                                                                                ) : (

                                                                                    <HashLockIcon className="ccm-rhp-icon" width={24} height={24} />
                                                                                )
                                                                            }
                                                                            <div>
                                                                                <div className="ccm-med-text-def">
                                                                                    Text
                                                                                </div>
                                                                                <div className="ccm-small-txt-rad">Send messages, images, GIFs, emoji, opinions, and puns</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ccm-radio-item" role={"radio"}
                                                            data-tooltip-id="ccm-tool-tip"
                                                            aria-checked={`${selectedOption === 2 ? true : false}`} onClick={() => setSelectedOption(2)}>
                                                            <div className="ccm-radio-bar">
                                                                <div className="ccm-radio-bar-icon">
                                                                    {
                                                                        selectedOption === 2 ? (
                                                                            <RadioCircleFilledIcon id={"2s-op"} />
                                                                        ) : (
                                                                            <RadioCircleIcon id={"2s-op"} />
                                                                        )
                                                                    }

                                                                </div>
                                                                <div className="ccm-radio-bar-info">
                                                                    <div className="ccm-med-txt">
                                                                        <div className="ccm-radio-item-name">
                                                                            {
                                                                                selectPrivacy === false ? (
                                                                                    <LoudSpeakerIcon className="ccm-ls-icon" width={24} height={24} />
                                                                                ) : (
                                                                                    <LoudSpeakerLockIcon className="ccm-lsp-icon" width={24} height={24} />
                                                                                )
                                                                            }
                                                                            <div>
                                                                                <div className="ccm-med-text-def">
                                                                                    Voice
                                                                                </div>
                                                                                <div className="ccm-small-txt-rad">Hang out together with voice, video, and screen share </div>
                                                                                <div className={`ccm-small-txt-3 ${selectedOption === 2 ? `server-error` : ``}`}>($TR!F3 N!TR0 Required to access)</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ccm-name">
                                                    <h5 className="ccm-h5-cn">
                                                        <label htmlFor="ccn-input-cm">
                                                            Channel Name
                                                        </label>
                                                    </h5>

                                                    <div className="ccm-input-wrapper">
                                                        {inner_input_icon}
                                                        <input id="ccn-input-cm"
                                                            value={channelName} maxLength={100}
                                                            spellCheck={false}
                                                            autoFocus={true}
                                                            ref={inputRef}
                                                            onChange={(e) => setChannelName(e.currentTarget.value)}
                                                            type="text" className="ccm-input-cn" placeholder="new-channel" />
                                                    </div>
                                                    {channelErrorsMsg}
                                                </div>

                                                <div>
                                                    <div className="ccm-private-c">
                                                        <StrifeToggleSwitch key={`r:${1}:`} customIndex={1} labelTagContents={LabelContentsWithSvgIcon}
                                                            checkedState={selectPrivacy} setCheckedState={() => setSelectPrivacy(!selectPrivacy)} />
                                                        <div className="ccm-private-note">
                                                            <div className="ccm-private-note-text">
                                                                Only selected members and roles will be able to view this channel.
                                                            </div>
                                                            <div className={`ccm-small-txt-3 ${selectPrivacy === true ? `server-error` : ``}`}>($TR!F3 N!TR0 Required)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ccm-blank-div"></div>
                                            </div>
                                            <div className="ccm-submit-button-wrapper">

                                                {
                                                    channelName.length === 0 ? (<button type="button" disabled className="ccm-submit-button"><div className="ccm-footer-button-contents">{`${selectPrivacy === false ? `Create Channel` : `Next`}`}</div></button>) :
                                                        selectPrivacy === false ? (
                                                            (<button type="submit" className="ccm-submit-button"><div className="ccm-footer-button-contents">{`Create Channel`}</div></button>)
                                                        ) : (<button disabled type="button" className="ccm-submit-button"><div className="ccm-footer-button-contents">{`Next`}</div></button>)

                                                }
                                                <button type="submit" onClick={(e) => handleExitOnOutSideClick(e)} className="ccm-cancel-button">
                                                    <div className="ccm-footer-button-contents">Cancel</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <Tooltip id="ccm-tool-tip" place="top" positionStrategy="fixed" closeOnScroll={true} closeOnResize={true} className="thread-tool-tip-red" content="You can still make Voice Channels, but you still need $TR!F3 N!TR0 to access them." />
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL >

    )

}

export default CreateChannelModal;


