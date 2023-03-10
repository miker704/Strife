import React from "react";
import { useState, useEffect, useRef } from "react";
import ReactTooltip from "react-tooltip";

const CreateChannelModal = (props) => {

    // const [selectedOption, setSelectedOption] = useState('TextChannel');
    const [selectedOption, setSelectedOption] = useState(1);
    const [selectPrivacy, setSelectPrivacy] = useState(false);
    const [channelName, setChannelName] = useState('');

    useEffect(() => {

        window.addEventListener('keyup', props.handleESC, false);

        return function cleanUp () {
            props.removeChannelErrors();
            window.removeEventListener('keyup', props.handleESC, false);

        }


    }, [])


    let inner_input_icon;

    // if (selectedOption === 'TextChannel') {

    if (selectedOption === 1) {
        if (selectPrivacy === false) {
            inner_input_icon = (
                <svg width="16" height="16" viewBox="0 0 24 24" className="ccm-input-hash" aria-hidden="true" role="img">
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 
            5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746
            2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946
            7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845
             3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891
             3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574
                7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301
                15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209
               20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 
                20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
                    </path>
                </svg>
            )
        }
        else {
            inner_input_icon = (
                <svg width="16" height="16" viewBox="0 0 24 24" className="ccm-input-hash-private">
                    <path fill="currentColor" d="M14 8C14 7.44772 13.5523 7 13 7H9.76001L10.3657 3.58738C10.4201 
                    3.28107 10.1845 3 9.87344 3H8.88907C8.64664 3 8.43914 3.17391 8.39677 3.41262L7.76001 7H4.18011C3.93722 
                    7 3.72946 7.17456 3.68759 7.41381L3.51259 8.41381C3.45905 8.71977 3.69449 9 4.00511 9H7.41001L6.35001
                     15H2.77011C2.52722 15 2.31946 15.1746 2.27759 15.4138L2.10259 16.4138C2.04905 16.7198 2.28449 17 
                     2.59511 17H6.00001L5.39427 20.4126C5.3399 20.7189 5.57547 21 5.88657 21H6.87094C7.11337 21 7.32088
                      20.8261 7.36325 20.5874L8.00001 17H14L13.3943 20.4126C13.3399 20.7189 13.5755 21 13.8866 21H14.8709C15.1134 21
                       15.3209 20.8261 15.3632 20.5874L16 17H19.5799C19.8228 17 20.0306 16.8254 20.0724 16.5862L20.2474
                        15.5862C20.301 15.2802 20.0655 15 19.7549 15H16.35L16.6758 13.1558C16.7823 12.5529 16.3186 12 15.7063 
                        12C15.2286 12 14.8199 12.3429 14.7368 12.8133L14.3504 15H8.35045L9.41045 9H13C13.5523 9 14 8.55228 14 8Z">
                    </path>
                    <path fill="currentColor" d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 
                            16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635
                             5 21.025 5ZM20 5H18V4C18 3.42857 18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z">
                    </path>
                </svg>
            );
        }
    }
    else if (selectedOption === 2) {
        // else if (selectedOption === 'VoiceChannel') {
        if (selectPrivacy === false) {
            inner_input_icon = (
                <svg className="ccm-input-ls" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 3.01004
                     10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293
                      20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904
                       11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 
                       17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 
                       9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451
                        14.551 11.002 14 11.002V9.00195Z" aria-hidden="true">
                    </path>
                </svg>
            )

        }
        else {
            inner_input_icon = (
                <svg width="16" height="16" viewBox="0 0 24 24" className="ccm-input-ls-private">
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M15 12C15 12.0007 15 
                            12.0013 15 12.002C15 12.553 14.551 13.002 14 13.002V15.002C15.654 15.002 17 13.657 17 12.002C17
                             12.0013 17 12.0007 17 12H15ZM19 12C19 12.0007 19 12.0013 19 12.002C19 14.759 16.757 17.002 14 
                             17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 12.0013 21 12.0007 21 12H19ZM10.293 3.29604C10.579
                              3.01004 11.009 2.92504 11.383 3.07904C11.757 3.23204 12 3.59904 12 4.00204V20.002C12 20.407 11.757 20.772
                               11.383 20.927C11.009 21.082 10.579 20.996 10.293 20.71L6 16.002H3C2.45 16.002 2 15.552 2 15.002V9.00204C2
                                8.45304 2.45 8.00204 3 8.00204H6L10.293 3.29604Z">
                    </path>
                    <path fill="currentColor" d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16
                     9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 
                     18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z">
                    </path>
                </svg>
            );
        }
    }


    let slider_status = selectPrivacy === false ?
        (
            <svg className={`ccm-priv-slider`} viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: "-3px" }}>
                <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
                <svg viewBox="0 0 20 20" fill="none">
                    <path fill="hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)" d="M5.13231 6.72963L6.7233
                        5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z">
                    </path>
                    <path fill="hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)" d="M13.2704 5.13864L14.8614
                        6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z">
                    </path>
                </svg>
            </svg>

        ) :
        (
            <svg className="ccm-priv-slider" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: "12px" }}>
                <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
                <svg viewBox="0 0 20 20" fill="none">
                    <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)"
                        d="M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z">
                    </path>
                    <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)"
                        d="M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z">
                    </path>
                </svg>
            </svg>

        );



    const handleSubmit = () => {

        // let channelType;
        // if (selectedOption === 'TextChannel') {
        //     channelType = 1;
        // }
        // else if (selectedOption === 'VoiceChannel') {
        //     channelType = 2;
        // }

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
            props.closeModal();
            props.history.push(`/$/channels/${props.server.id}/${newChannel.id}`)
        })

    }

    const handleChange = (e) => {
        e.preventDefault();
        setSelectedOption(e.currentTarget.value);
    }

    const renderChannelErrorMessages = () => {

        let channelErrorMessagesArray = [
            "Channel name can't be blank",
            'Channel name Only one channel in a server can have that name'
        ]

        let channelErrorsResponse = {
            0: " - Channel name can't be blank",
            1: " - A channel with that name already exists in this server!"
        }

        for (let i = 0; i < channelErrorMessagesArray.length; i++) {
            if (props.errors.includes(channelErrorMessagesArray[i])) {
                return channelErrorsResponse[i];
            }
        }
        return "";
    }

    const channelErrorsTag = props.errors.length > 0 ? "server-error-lite" : "";
    const inText = props.channelType === 1 ? ("in Text Channels") : ("in Voice Channels")

    return (
        <div className="create-channel-modal-wrapper" >
            <div className="create-channel-modal-backdrop"></div>
            <div className="create-channel-modal-layer" onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>

                    <div className="create-channel-modal-layer-focus-lock">
                        <div className="create-channel-modal">
                            <div>
                                <div className="ccm-1">
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
                                            <button type="button" className="ccm-close-button" onClick={() => props.closeModal()}>
                                                <div className="ccm-close-button-inner-wrapper">
                                                    <svg className="ccm-close-button-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="ccm-body">

                                            <div className="ccm-c-type">
                                                <h5 className="ccm-h5">
                                                    Channel Type
                                                </h5>
                                                <div role={"radiogroup"}>
                                                    <div className="ccm-radio-item" role={"radio"}>

                                                        <label htmlFor="1s-op" className="ccm-radio-bar" >
                                                            <div className="ccm-radio-bar-icon">
                                                                <input
                                                                    id="1s-op"
                                                                    type="radio"
                                                                    // value={"TextChannel"}
                                                                    // checked={selectedOption === "TextChannel"}
                                                                    // onChange={() => setSelectedOption('TextChannel')} 
                                                                    value={1}
                                                                    checked={selectedOption === 1}
                                                                    onChange={() => setSelectedOption(1)}

                                                                />
                                                                <svg id="1s-op" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 
                                                                             4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 
                                                                             17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                                        fill="currentColor">
                                                                    </path>

                                                                    <circle cx="12" cy="12" r="5" id="1s-op"
                                                                        // className={`radioIconFill ${selectedOption === 'TextChannel' ? `` : `is-hidden`}`}
                                                                        className={`radioIconFill ${selectedOption === 1 ? `` : `is-hidden`}`}
                                                                        fill="currentColor"></circle>
                                                                </svg>
                                                            </div>
                                                            <div className="ccm-radio-bar-info">
                                                                <div className="ccm-med-txt">
                                                                    <div className="ccm-radio-item-name">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" className="ccm-rh-icon" background="background-2neGeL" aria-hidden="true" role="img">
                                                                            <path className="foreground-path-1" fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399
                                                                         20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 
                                                                         15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 
                                                                         7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 
                                                                         10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 
                                                                         18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 
                                                                         9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 
                                                                         17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 
                                                                         17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
                                                                            </path>
                                                                        </svg>

                                                                        <div>
                                                                            <div className="ccm-med-text-def">
                                                                                Text
                                                                            </div>
                                                                            <div className="ccm-small-txt-rad">Send messages, images, GIFs, emoji, opinions, and puns</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="ccm-radio-item" role={"radio"} data-tip data-for="voice-channel-Strife-access">
                                                        <label htmlFor="2s-op" className="ccm-radio-bar">
                                                            <div className="ccm-radio-bar-icon">
                                                                <input
                                                                    id="2s-op"
                                                                    type="radio"
                                                                    // value={'VoiceChannel'}
                                                                    // checked={selectedOption === 'VoiceChannel'}
                                                                    // onChange={() => setSelectedOption('VoiceChannel')} 
                                                                    value={2}
                                                                    checked={selectedOption === 2}
                                                                    onChange={() => setSelectedOption(2)}
                                                                />

                                                                <svg id="2s-op" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 
                                                                         4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 
                                                                        17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                                        fill="currentColor">
                                                                    </path>
                                                                    <circle cx="12" cy="12" r="5" id="2s-op"
                                                                        // className={`radioIconFill ${selectedOption === 'VoiceChannel' ? `` : `is-hidden`}`}
                                                                        className={`radioIconFill ${selectedOption === 2 ? `` : `is-hidden`}`}
                                                                        fill="currentColor">

                                                                    </circle>
                                                                </svg>
                                                            </div>
                                                            <div className="ccm-radio-bar-info">
                                                                <div className="ccm-med-txt">
                                                                    <div className="ccm-radio-item-name">
                                                                        <svg className="ccm-ls-icon" background="background-2neGeL" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                                            <path className="foreground-1dSmCM" fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579
                                                                         3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996
                                                                          11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757
                                                                           7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195
                                                                            14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15
                                                                             12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z" aria-hidden="true">
                                                                            </path>
                                                                        </svg>
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
                                                            <ReactTooltip
                                                                className={`thread-tool-tip-red`}
                                                                textColor="#B9BBBE"
                                                                backgroundColor="#191919"
                                                                id="voice-channel-Strife-access"
                                                                place="top"
                                                                effect="solid">
                                                                You can still make Voice Channels, but you still need $TR!F3 N!TR0 to access them.
                                                            </ReactTooltip>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ccm-name">
                                                <h5 className="ccm-h5-cn">
                                                    <label className={channelErrorsTag}>
                                                        Channel Name{` `}{`${renderChannelErrorMessages()}`}
                                                    </label>
                                                </h5>

                                                <div className="ccm-input-wrapper">

                                                    {inner_input_icon}



                                                    <input value={channelName} spellCheck={false} onChange={(e) => setChannelName(e.currentTarget.value)} type="text" className="ccm-input-cn" placeholder="new-channel" />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="ccm-private-c">
                                                    <div className="ccm-private-row ">
                                                        <div className="ccm-private-row-label">
                                                            <svg width="24" height="24" className="ccm-priv-lock-icon" viewBox="0 0 24 24" aria-hidden="true" role="img">
                                                                <path fill="currentColor" d="M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 
                                                            5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172
                                                             18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 
                                                             12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z" aria-hidden="true">
                                                                </path>
                                                            </svg>
                                                            Private Channel
                                                        </div>
                                                        <div className="ccm-private-switch-control">
                                                            <div className={`ccm-private-switch ${selectPrivacy === true ? `switched-on` : ``}`}>
                                                                {slider_status}
                                                                <input
                                                                    className="ccm-slider-input" type="checkbox"
                                                                    checked={selectPrivacy}
                                                                    onChange={() => setSelectPrivacy(!selectPrivacy)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ccm-private-note">
                                                        <div className="ccm-private-note-text">
                                                            Only selected members and roles will be able to view this channel.
                                                        </div>
                                                        <div className={`ccm-small-txt-3 ${selectPrivacy === true ? `server-error` : ``}`}>($TR!F3 N!TR0 Required to access)</div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="username-edit-sep"></div>
                                        </div>
                                        <div className="ccm-submit-button-wrapper">
                                            <button type="submit" className="username-edit-submit-button">Create Channel</button>
                                            <button type="submit" onClick={() => props.closeModal()} className="username-edit-cancel-button">Cancel</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    )


}

export default CreateChannelModal;


