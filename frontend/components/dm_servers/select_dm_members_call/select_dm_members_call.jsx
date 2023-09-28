import React from "react";
import { useState, useRef, useEffect } from "react";
import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
import { returnUserBadgeFillColor } from "../../../utils/user_status_badge_color_api_util";
import { returnUserOnlineActivityStatusBadgeMaskIMG } from "../../../utils/user_online_activity_status_badge_api_util";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { CloseXIcon, CreateDmCheckBoxIcon } from "../../front_end_svgs/Strife_svgs";


const InviteToDMCallModal = (props) => {
    const inputRef = useRef();
    const popupRef = useRef();
    const [searchText, setSearchText] = useState("");
    const [selectedMembers, setSelectedMembers] = useState([]);
    const isSelected = (member) => selectedMembers.map(member => member.id).includes(member.id);
    const findIfSelected = (toAdd) => selectedMembers.findIndex(member => member.id === toAdd.id);
    let rendered_User_PFP = DefaultPFPSVG;
    let count = selectedMembers.length;
    const [isLoading, setIsLoading] = useState(true);
    const [isFullyLoaded, setIsFullyLoaded] = useState(true);


    useEffect(() => {
        window.addEventListener('keyup', handleESC, false);

        setIsLoading(false);
        setTimeout(() => {
            setIsFullyLoaded(false)
        }, 300);



        return function cleanup () {
            window.removeEventListener('keyup', handleESC, false);
            if (props.dmServerErrors.length > 0) {
                props.removeDmServerErrors();
            }
        }
    }, []);




    const handleESC = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                props.closeCallModal(false);
                window.removeEventListener('keyup', handleESC, false);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }


    const unTogglePreviousSelection = () => {
        if (searchText === "") {
            if (selectedMembers.length > 0) {
                setSelectedMembers(prevState => {
                    const newState = [...prevState];
                    newState.splice(-1, 1);
                    return newState;
                });
            }
        }
    }


    const toggleSelection = (member) => {
        const idx = findIfSelected(member);
        if (idx > -1) {
            setSelectedMembers(prevState => {
                const newState = [...prevState];
                newState.splice(idx, 1);
                return newState;
            });
        }
        else {
            setSelectedMembers(prevState => [...prevState, member]);
            setSearchText("");
        }
    }

    const dmMembersArray = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx]);

    const addNewDmMembersToVideoCall = (e) => {
        e.preventDefault();
        const newDMMembers = [props.currentUserId, ...selectedMembers.map((member) => parseInt(member.id))].sort((a, b) => a - b);
        const dm_SERVER_ID = parseInt(props.dmServerId)
        // for (let newMemberId of newDMMembers) {
        //     createDmMember({dm_member_id: newMemberId ,dm_server_id: dm_SERVER_ID})
        // }
        // openModalWithProps({dmMembersForCall:newDMMembers, dmServer:dmServer});
        // openModal('WEBRTC_DM_CALL');
        // props.openModalWithProps({ dmMembersForCall: newDMMembers, dmServer: props.dmServer });
        // props.openModal("STRIFE_WEBRTC_CALL");
        props.closeCallModal(false);
        props.openModalWithProps({ dmMembersForCall: newDMMembers, dmServer: props.dmServer });
        props.openModal("STRIFE_WEBRTC_CALL");
        // props.open_Strife_WEB_RTC_CALL_Modal(true);
    }


    const addNewDmMembersToVoiceCall = (e) => {
        e.preventDefault();
        const newDMMembers = [props.currentUserId, ...selectedMembers.map((member) => parseInt(member.id))].sort((a, b) => a - b);
        const dm_SERVER_ID = parseInt(props.dmServerId)
        // for (let newMemberId of newDMMembers) {
        //     createDmMember({dm_member_id: newMemberId ,dm_server_id: dm_SERVER_ID})
        // }
        // openModalWithProps({dmMembersForCall:newDMMembers, dmServer:dmServer});
        // openModal('WEBRTC_DM_CALL');
        // props.openModalWithProps({ dmMembersForCall: newDMMembers, dmServer: props.dmServer });
        // props.openModal("STRIFE_WEBRTC_CALL");

        props.closeCallModal(false);
        props.openModalWithProps({ dmMembersForCall: newDMMembers, dmServer: props.dmServer });
        props.openModal("STRIFE_WEBRTC_CALL");
        // props.open_Strife_WEB_RTC_CALL_Modal(true);

    }

    const handleCallSubmit = (e) => {
        e.preventDefault();
        if (props.callType === 'VIDEO_CALL') {
            // console.log('VIDEO_CALL')
            addNewDmMembersToVideoCall(e);
        }
        else {
            // console.log('VOICE_CALL')

            addNewDmMembersToVoiceCall(e);
        }
    }




    const _liveSearch = (items) => {
        return items.filter((item) => {

            let hash = "#" + item.strife_id_tag;
            if (item.username.toLowerCase().includes(searchText.toLowerCase())) {
                return item;
            }
            else if (hash.includes(searchText)) {
                return item;
            }
            else if (searchText === "") {
                return item;
            }
        })
    }


    let createDmButton = count === 1 ? (
        <button className="create-dm-button" type="submit" disabled={count !== 1}>
            <div className="create-dm-button-text">{`${props.callType === 'VIDEO_CALL' ? `Start Video Call` : `Start Voice Call`}`}</div>
        </button>
    ) : (
        <div className="create-dm-button-fake">
            <div className="create-dm-button-text">{`${props.callType === 'VIDEO_CALL' ? `Start Video Call` : `Start Voice Call`}`}</div>
        </div>
    )


    const filterOutDmMembers = props.dmMembers.filter(member => member.id !== props.currentUserId);

    if (isLoading === false && filterOutDmMembers.length > 0) {
        return (


            <REACT_PORTAL wrapperId={'sub-modal-2'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>

                <div className={`clear-modal-wrapper homeBar`} onClick={(e) => props.closeCallModal(false)}>
                    <div className={`create-dm-modal-popup ${props.callType === 'VIDEO_CALL' ? `video-call` : `voice-call`}`} onClick={e => e.stopPropagation()} ref={popupRef}>
                        <div className="create-dm-modal-focus-lock">
                            <div className="create-dm-modal">
                                <form onSubmit={addNewDmMembersToVideoCall}>
                                    <div className="create-dm-header-sec">
                                        <h1 className="create-dm-header-h2">{`${props.callType === 'VIDEO_CALL' ? `Select DM Member For Video Calling` : `Select DM Member For Voice Calling`}`}</h1>
                                        {count <= 1 ?
                                            <div className="num-of-dm-members-selected">Select 1 Member.</div>
                                            : <div className={`${count > 1 ? "num-of-dm-members-selected cDMS-error" : "num-of-dm-members-selected"}`}>
                                                This Call has a 1 member limit (Current WEBRTC Limit).
                                            </div>
                                        }
                                        <div className="create-dm-search-bar-wrapper">
                                            <div className="create-dm-search-bar-outer-wrapper">
                                                <div className="create-dm-search-bar-inner-wrapper global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                                                    {
                                                        selectedMembers.map(member => {
                                                            return (
                                                                <div
                                                                    className="mini-box"
                                                                    key={member.id}
                                                                    onClick={() => { toggleSelection(member) }}
                                                                >
                                                                    {member.username}
                                                                    <CloseXIcon className="close-3-icon" />
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                    <input
                                                        id="input-all-friends"
                                                        className="create-dm-search-bar"
                                                        autoFocus ref={inputRef}
                                                        spellCheck={false}
                                                        role="combobox"
                                                        type="text"
                                                        value={searchText}
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Backspace' && e.currentTarget.value === "") {
                                                                unTogglePreviousSelection();
                                                            }
                                                        }}
                                                        onChange={(e) => setSearchText(e.currentTarget.value)}
                                                        placeholder="Type the username of a Member"
                                                    />
                                                    <div className="create-dm-invis-div"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {

                                        isFullyLoaded === true ?
                                            (
                                                <div className={`create-dm-scroller global-scroll-thin-raw-attributes global-scroller-base`} style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                                                    <div className="create-dm-no-results">
                                                        <div className="create-dm-fetching-friends-state"></div>
                                                        <span className={`spinning-cubes`}>
                                                            <span className="inner-cubes moving-cubes">
                                                                <span className="inner-cube"></span>
                                                                <span className="inner-cube"></span>
                                                            </span>
                                                        </span>
                                                        <div>Fetching DM Members List...</div>
                                                    </div>
                                                </div>

                                            ) : (

                                                _liveSearch(filterOutDmMembers).length === 0 ?
                                                    (
                                                        <div className="create-dm-no-results">
                                                            <div className="create-dm-no-results-error-state"></div>
                                                            <div>No Members found that exist with that name in this DM.</div>
                                                        </div>
                                                    ) :

                                                    (
                                                        <div className="create-dm-scroller global-scroll-thin-raw-attributes global-scroller-base global-scroll-faded-raw-attributes" id='ul-fiiw' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                                                            <div className="create-dm-ul-list">
                                                                <div className="create-dm-ul-list-div"></div>
                                                                {
                                                                    _liveSearch(filterOutDmMembers).map((member) => {
                                                                        return (
                                                                            <div className="create-dm-friend-wrapper" key={member.id}
                                                                                onClick={() => {
                                                                                    toggleSelection(member);
                                                                                    inputRef.current.focus();
                                                                                }}>
                                                                                <div className="create-dm-friend-inner-wrapper">

                                                                                    <div className="friend-avatar-svg-wrapper" role="img" aria-hidden="false">
                                                                                        <svg width="40" height="40" viewBox="0 0 40 40" className="status-mask svg-avatar-wrapping" aria-hidden="true">
                                                                                            <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                                                                                                <div className="svg-avatar-stack">
                                                                                                    {
                                                                                                        member.photo === undefined ? (
                                                                                                            <img className={`create-dm-avatar-svg-masked color-${member.color_tag}`} src={rendered_User_PFP} alt=" " aria-hidden="true" />
                                                                                                        ) : (
                                                                                                            <img className="create-dm-avatar-svg-masked" src={member.photo} alt=" " aria-hidden="true" />
                                                                                                        )
                                                                                                    }
                                                                                                </div>
                                                                                            </foreignObject>
                                                                                            <rect width="10" height="10" x="22" y="22" fill={returnUserBadgeFillColor(member.online)}
                                                                                                mask={returnUserOnlineActivityStatusBadgeMaskIMG(member.online)} className="svg-masked-pointer-events">
                                                                                            </rect>
                                                                                        </svg>
                                                                                    </div>

                                                                                    <div className="create-dm-user-info">
                                                                                        <strong className="create-dm-user-username-wrapper">
                                                                                            {member.username}
                                                                                        </strong>
                                                                                        <div className="create-dm-user-strife-tag">
                                                                                            <span className="create-dm-user-user-name">
                                                                                                {member.username}
                                                                                            </span>
                                                                                            <span>#{member.strife_id_tag}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <span className="create-dm-check-box-wrapper">
                                                                                        <div className={`create-dm-check-box ${isSelected(member) ? "checked" : ""}`}>
                                                                                            <CreateDmCheckBoxIcon />
                                                                                        </div>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    ))
                                    }
                                    <div className="create-dm-footer"></div>
                                    <div className="create-dm-button-sec">
                                        {createDmButton}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </REACT_PORTAL >
        )
    }

}
export default InviteToDMCallModal;