import React from "react";
import user_Default_PFP from '../../../app/assets/images/discord_PFP.svg';
import { useState, useEffect, useRef } from "react";
// import ReactTooltip from "react-tooltip";
import { Tooltip } from "react-tooltip";
import { AddReactionIcon, AddSuperReactionIcon, ChainLinkIcon, CopyIDIcon, MarkUnReadIcon, OverFlowEllipsisIcon, PenEditIcon, PinnedIcon, ReplyArrowIcon, StrifeNitroBadgeIcon, ThreadsIcon, TrashCanIcon } from "../front_end_svgs/Strife_svgs";

const TestPage1 = (props) => {
    const [visible, setVisible] = useState(false);
    const [reveal, setReveal] = useState(false);
    const [keyCd, setKeyCD] = useState("");
    const expandRef = useRef(null);
    const [enableGrowth, setEnableGrowth] = useState(false);
    const [_SHIFT, setSHIFT] = useState(false);


    // useEffect(() => {
    //     ReactTooltip.rebuild();
    // }, [_SHIFT])


    const handleShiftKey = (e) => {
        // let _shiftEQ = [16, 'Shift'];
        // _key = _shiftEQ.includes(_key) ? "Shift" : "";
        // let _key = e.key || e.keyCode;
        // _key = _key === 16 || _key === 'Shift' ? "Shift" : "";
        let _key = e.key || e.keyCode || e.code;
        let _shiftEQ = [16, "Shift", "ShiftRight", "ShiftLeft"];
        _key = _shiftEQ.includes(_key) ? "Shift" : "";
        const keys = {
            Shift: () => {
                e.preventDefault();
                console.log("hello");
                setReveal(true);
                // window.removeEventListener('keyup', handleShiftKey, false);
            },
        };
        if (keys[_key]) {

            keys[_key]();
            setKeyCD(e.code);
        }
        else {
            setKeyCD(e.code);
            setReveal(false);

        }
    }

    const handleShiftKey2 = (e) => {
        e.preventDefault();
        console.log("hi");
        if (e.shiftKey) {
            console.log('The shift key has been pressed');
            setSHIFT(true);
            setReveal(true);
            setKeyCD(e.code);
            // e.currentTarget.addEventListener('keyup', handleShiftCancel, false);
            document.addEventListener('keyup', handleShiftCancel, false);

        }
    }

    const handleShiftCancel = (e) => {
        console.log("in shift cancel")
        if (!e.shiftKey && enableGrowth === true) {
            setSHIFT(false);
            console.log('!e.shiftKey && enableGrowth === true')
            // if(enableGrowth === false){
            // e.currentTarget.removeEventListener('keydown', handleShiftKey2, false);
            // }
        }
        else if (enableGrowth === false) {
            console.log('enableGrowth === false')
            // e.currentTarget.removeEventListener('keydown', handleShiftKey2, false);
            document.removeEventListener('keydown', handleShiftKey2, false);
            document.removeEventListener('keyup', handleShiftCancel, false);
            setSHIFT(false);
        }

    }

    const mouseOverEvent = (e) => {
        // console.log('e');
        // console.table(e);
        console.log('e curr target');

        console.log(e.currentTarget)
        console.log('e target');

        console.log(e.target);
        e.currentTarget.style.backgroundColor = "gold";
        // e.currentTarget.addEventListener('keydown', handleShiftKey2, false);
        document.addEventListener('keydown', handleShiftKey2, false);

    }

    const mouseLeaveEvent = (e) => {
        document.removeEventListener('keyup', handleShiftCancel, false);
        document.removeEventListener('keydown', handleShiftKey2, false);
        // e.currentTarget.removeEventListener('keydown', handleShiftKey2, false);
        // e.currentTarget.removeEventListener('keyup', handleShiftCancel, false);
        e.currentTarget.style.backgroundColor = "";

    }


    const render_User_PFP = user_Default_PFP;

    return (

        <div className="loading-screen-wrapper">

            <div>
                <div style={{ display: "flex" }} >

                    <div>
                        <p
                            style={{
                                color: `${reveal ? "blue" : "black"}`,
                                backgroundColor: `${reveal ? "chartreuse" : "white"}`
                            }}
                        >
                            {keyCd}
                        </p>
                    </div>

                    <li className={`chat-message-item`}
                        onMouseEnter={(e) => {
                            setEnableGrowth(true);
                            expandRef.current.focus();
                        }}
                        onMouseLeave={(e) => {
                            setEnableGrowth(false);
                            setSHIFT(false);
                            expandRef.current.blur();
                            console.log('remved listen shift')
                        }}>
                        <div className="message-wrapper1"
                            ref={expandRef}
                            onKeyDown={(e) => {
                                // if (enableGrowth === true) {
                                if (e.shiftKey) {
                                    console.log('currently holding shift')
                                    setSHIFT(true)
                                    setReveal(true);
                                    setKeyCD(e.code);
                                }
                            }
                                // }
                            }
                            onKeyUp={(e) => {
                                if (!e.shiftKey) {
                                    setSHIFT(false);
                                    setReveal(false);
                                    setKeyCD(e.code);
                                }
                            }}
                            tabIndex={0}
                        >
                            <div className="message-wrapper-contents">

                                <div className={`${props.currentUser.photo === undefined ?
                                    `chat-user-pfp-svg-render color-${props.currentUser.color_tag}` :
                                    `chat-member-avatar-img`}`}>
                                    <img src={`${props.currentUser.photo === undefined
                                        ? render_User_PFP : props.currentUser.photo}`} alt="SMPFP" />
                                </div>

                                <h2 className="chat-member-username-header">
                                    <span className="chat-member-username-wrap">
                                        <span className="chat-member-username">{props.currentUser.username}</span>
                                    </span>
                                    <span className="chat-message-timestamp-wrap">
                                        <p className="chat-message-timestamp">
                                            5:23pm
                                        </p>
                                    </span>
                                </h2>
                                <div className="chat-message">
                                    mooo mooo mooo mooo
                                </div>
                            </div>
                            <div className="message-accessories"></div>
                            <div className="message-accessories-button-container">
                                <div className="message-accessories-button-layer" role="group">
                                    <div className={`message-accessories-button-wrapper1`} >

                                        {
                                            _SHIFT === true ? (
                                                <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Copy Message ID'}>
                                                    <CopyIDIcon className="copy-msg-id-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")
                                        }
                                        {
                                            _SHIFT === true ? (
                                                <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Copy Link'}>
                                                    <ChainLinkIcon className="copy-msg-link-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")
                                        }
                                        {
                                            _SHIFT === true ? (
                                                <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Mark Unread'}>
                                                    <MarkUnReadIcon className="mark-msg-unread-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")
                                        }
                                        {
                                            _SHIFT === true ? (
                                                <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Pin Message'}>
                                                    <PinnedIcon className="pinned-msg-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")
                                        }


                                        {
                                            _SHIFT === true ? (
                                                <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Reply'}>
                                                    <ReplyArrowIcon className="reply-to-msg-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")
                                        }


                                        <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Add Reaction'}>
                                            <AddReactionIcon className="add-reaction-icon" width={18} height={18} />
                                        </div>

                                        <div className="message-accessories-button" data-msg-control="2" data-tooltip-id="message-control-super-reaction" data-tooltip-place="top" data-tooltip-content={"Add Super Reaction"}>
                                            <AddSuperReactionIcon className="add-super-reaction-icon" width={18} height={18} />
                                        </div>

                                        <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Edit'}>
                                            <PenEditIcon className="pen-icon" width={16} height={16} />
                                        </div>
                                        <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Create Thread'}>
                                            <ThreadsIcon className="edit-msg-create-thread-icon" width={24} height={24} />
                                        </div>

                                        <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Delete'}>
                                            <TrashCanIcon className="delete-msg-icon danger-warning-del-msg" width={24} height={24} />
                                        </div>

                                        {
                                            _SHIFT === false ? (
                                                <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'More'}>
                                                    <OverFlowEllipsisIcon className="edit-msg-more-options-icon" width={24} height={24} />
                                                </div>
                                            ) : ("")
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
                <Tooltip className="thread-tool-tip" id="msg-control" position={"top"} />
                <Tooltip
                    className="thread-tool-tip"
                    id="message-control-super-reaction"
                    position={"top"}
                    render={({ content, activeAnchor }) => (
                        <div className="add-a-super-reaction-tool-tip-container">
                            {activeAnchor?.getAttribute('data-msg-control') === "2" ? (<StrifeNitroBadgeIcon className="msg-nitro-wheel-icon" height={24} width={24} />) : ("")}
                            <div className="tool-tip-contents">
                                {content}
                            </div>
                        </div>
                    )}
                />

            </div>
        </div >
    )
}

export default TestPage1;

