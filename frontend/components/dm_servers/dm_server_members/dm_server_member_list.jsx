import { useState, useRef, useEffect } from "react";
import React from "react";
import DefaultPFPSVG from '../../../../app/assets/images/defaultPFPSVG.svg';
import ServerUserOptionsModalContainer from "../../friends/server_user_options/server_user_options_modal_container.js";
import DeleteFriendConfirmationModalContainer from "../../friends/delete_friend_confirmation_modal/delete_friend_confirmation_modal_container";
import BlockUserConfirmationModalContainer from "../../friends/block_user_confirmation_modal/block_user_confirmation_modal_container";
import MegaUPCModalContainer from "../../users/mega_user_card_modal/mega_user_card_modal_container";
import { returnUserBadgeFillColor } from "../../../utils/user_status_badge_color_api_util";
import { returnUserOnlineActivityStatusBadgeMaskIMG } from "../../../utils/user_online_activity_status_badge_api_util";
import { OwnerCrownIcon } from "../../front_end_svgs/Strife_svgs";
import { Tooltip } from "react-tooltip";

const DmServerMemberList = (props) => {

    if (!props.dmServer) {
        return null;
    }

    // const [dmServerMemberList, setDmServerMemberList] = useState([]);

    let dmServerMemberList = Object.values(props.dmServerMembers);
    const DmServerOwner = props.dmServer.owner_id;
    let default_DMSML_PFP = DefaultPFPSVG;

    // useEffect(() => {
    //     console.log("in first use effect setting state for dmMemebers list")
    //     setDmServerMemberList(Object.values(props.dmServerMembers));

    //     return function cleanUp () {
    //         if (props.errors.length > 0) {
    //             props.removeDmServerErrors();
    //         }
    //     }

    // }, []);




    // useEffect(() => {

    //     if (dmServer?.id) {
    //         fetchDmServer(dmServerId);
    //     }


    // }, [dmServer?.id ])


    const inputRef = useRef();
    const [showPopup, setShowPopup] = useState(false);
    const [popupTop, setPopupTop] = useState(0);
    const [popupRawTop, setPopupRawTop] = useState(0);
    const [selectedMember, toggleSelected] = useState([]);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showBlockUserPopup, setShowBlockUserPopup] = useState(false);
    const [showMegaPopUp, setShowMegaPopUp] = useState(false);
    const [getClientRect, setClientRect] = useState({});


    const handleSelected = (member) => {
        toggleSelected(member);
    }


    const handlePopupShow = (e) => {
        setClientRect(e.currentTarget.getBoundingClientRect());
        let currTop = e.currentTarget.getBoundingClientRect().top
        setPopupRawTop(currTop);
        const realWidth = window.screen.width * window.devicePixelRatio;
        const realHeight = window.screen.height * window.devicePixelRatio;

        if (currTop > window.innerHeight * 0.93158) {

            if (realWidth >= 3800 && realHeight >= 2100) {

                if (currTop >= window.innerHeight * 0.949628) {
                    currTop /= 1.15
                }
                else {
                    currTop /= 1.10;
                }

                setPopupTop(currTop);
            }
            else {
                currTop /= 3.25;
                setPopupTop(currTop);
            }
        }
        else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158) {

            if (realWidth >= 3800 && realHeight >= 2100) {

                if (currTop >= window.innerHeight * 0.90538 && currTop < window.innerHeight * 0.93158) {
                    currTop /= 1.1;
                }

                setPopupTop(currTop);
            }
            else {
                if (currTop >= window.innerHeight * 0.90538 && currTop < window.innerHeight * 0.93158) {
                    currTop /= 3.1;
                }
                else if (currTop >= window.innerHeight * 0.817255 && currTop < window.innerHeight * 0.90538) {
                    currTop /= 3;
                }

                else if (currTop >= window.innerHeight * 0.63517 && currTop < window.innerHeight * 0.817255) {
                    currTop /= 2.55;
                }

                else {
                    currTop /= 2;
                }

                setPopupTop(currTop);
            }
        }

        else if (currTop <= window.innerHeight * 0.145560) {
            setPopupTop(20);
        }
        else {
            setPopupTop(20);
        }

        setShowPopup(!showPopup);
    }


    const renderServerUserOptionsModal = () => {
        if (showPopup === true) {
            return (
                <ServerUserOptionsModalContainer
                    user={props.currentUser} member={selectedMember} memberId={selectedMember.id}
                    top={popupTop} setShowPopup={setShowPopup} getClientRect={getClientRect}
                    DmServerOwner={DmServerOwner} DmServerId={props.dmServer.id}
                    serverType={'DM_SERVER'} dmServerMembers={props.dmServerMembers} userNameClicked={false}
                    setShowDeletePopup={setShowDeletePopup} setShowBlockUserPopup={setShowBlockUserPopup}
                    popupRawTop={popupRawTop} setShowMegaPopUp={setShowMegaPopUp} messageVersion={false}
                />
            )
        }
    }

    const renderDeleteFriendConfirmationModal = () => {
        if (showDeletePopup === true) {
            return (
                <DeleteFriendConfirmationModalContainer friend={selectedMember} setShowDeletePopup={setShowDeletePopup} />
            )
        }

    }

    const renderBlockUserConfirmationModal = () => {
        if (showBlockUserPopup === true) {
            return (
                <BlockUserConfirmationModalContainer friend={selectedMember} setShowBlockUserPopup={setShowBlockUserPopup} />
            )
        }
    }

    const renderMegaUpcModal = () => {
        if (showMegaPopUp === true) {
            return (
                <MegaUPCModalContainer setShowMegaPopUp={setShowMegaPopUp} member={selectedMember} memberId={selectedMember.id} />
            )
        }
    }



    return (
        <div className="dm-members-index-container-wrapper">

            {renderServerUserOptionsModal()}
            {renderDeleteFriendConfirmationModal()}
            {renderBlockUserConfirmationModal()}
            {renderMegaUpcModal()}

            <div className="dm-members-index-container global-scroll-thin-raw-attributes global-scroller-base global-scroll-faded-raw-attributes"
                style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>

                <h2 className="dm-members-header-title">{`MEMBERS — ${dmServerMemberList.length}`}</h2>

                {
                    dmServerMemberList.map((dmMember, dmMemberIdx) => {

                        // String Concatenation is more faster and cleaner to read
                        let classNameTag = 'dm-member-item' + ((dmMember.online === false) ? ' ' + 'dmsmi-offline' : '');

                        return (

                            <div
                                className={`${selectedMember.id === dmMember.id && showPopup === true ? 'dm-member-item' : classNameTag}`}
                                key={dmMember.id}
                                data-list-item-id={`dm-server-member-item-${dmMember.id}`}
                                onClick={(e) => {
                                    handleSelected(dmMember);
                                    handlePopupShow(e);
                                }}>

                                <div className={`dm-member-layout ${selectedMember.id === dmMember.id && showPopup === true ? `selected` : ``}`}>
                                    <div className="dm-member-avatar">
                                        <div className="dm-member-avatar-inner-wrapper" role="img">

                                            {

                                                dmMember.online === true ? (

                                                    <svg width="40" height="40" viewBox="0 0 40 40" className="dms-ml-mask dms-ml-svg" aria-hidden="true">

                                                        <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                                                            <div className="dms-ml-avatar-stack">
                                                                {
                                                                    dmMember.photo === undefined ? (
                                                                        <img className={`dms-ml-avatar color-${dmMember.color_tag}`} src={default_DMSML_PFP} alt=" " aria-hidden="true" />
                                                                    ) : (
                                                                        <img className="dms-ml-avatar" src={dmMember.photo} alt=" " aria-hidden="true" />
                                                                    )
                                                                }
                                                            </div>
                                                        </foreignObject>
                                                        <rect data-tooltip-id="thread-tip-dmsml" data-tooltip-place="top" data-tooltip-content='Online' width="10" height="10" x="22" y="22" fill={returnUserBadgeFillColor(dmMember.online)}
                                                            mask={returnUserOnlineActivityStatusBadgeMaskIMG(dmMember.online)} className="dms-ml-svg-masked-pointer-events">
                                                        </rect>
                                                    </svg>

                                                ) : (
                                                    <svg width="32" height="32" viewBox="0 0 32 32" className="dms-ml-mask dms-ml-svg" aria-hidden="true">
                                                        <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-default)">
                                                            <div className="dms-ml-avatar-stack">
                                                                {
                                                                    dmMember.photo === undefined ? (
                                                                        <img className={`dms-ml-avatar color-${dmMember.color_tag}`} src={default_DMSML_PFP} alt=" " aria-hidden="true" />

                                                                    ) : (
                                                                        <img className="dms-ml-avatar" src={dmMember.photo} alt=" " aria-hidden="true" />
                                                                    )
                                                                }
                                                            </div>
                                                        </foreignObject>
                                                    </svg>
                                                )
                                            }

                                        </div>
                                    </div>
                                    <div className="dm-member-info-wrapper">
                                        <div className="dm-member-username-wrapper">
                                            <div className="dm-member-username-div">
                                                <span className="dm-member-username-span">
                                                    <span className="dmsml-member-username">
                                                        {dmMember.username}
                                                    </span>
                                                </span>
                                            </div>

                                            {
                                                dmMember.id === DmServerOwner ? (
                                                    <>
                                                        <OwnerCrownIcon className={"dm-server-group-owner-icon"} aria-label="Group Owner" data-tooltip-id="thread-tip-dmsml" data-tooltip-content='Group Owner' data-tooltip-place="top" />
                                                    </>
                                                ) : ('')
                                            }

                                        </div>
                                        <div className="dm-member-empty-info-div"></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="dm-server-members-list-sep"></div>
            </div>
            <Tooltip className="thread-tool-tip" id="thread-tip-dmsml" place="top" closeOnResize={true} closeOnScroll={true} />
        </div>
    )
}
export default DmServerMemberList;
