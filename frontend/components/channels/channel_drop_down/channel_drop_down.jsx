import React from "react";
import { useRef } from "react";
import { closeHookModalOnOutsideClick, closeOnEsc } from "../../../utils/close_hook_modals_api_utils";
import { useState } from "react";
import { useParams } from "react-router-dom";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { appPullerPullAnimation, appPullerPullAndHoldAnimation } from "../../../utils/appPullerAnimation_api_util";
import {
    AddCircleIcon, AddEventIcon, AddFolderIcon, AppDirectoryBotIcon, CheckBoxCheckedIcon,
    CheckBoxUnCheckedIcon, GemBoostIcon, InviteMemberIcon, LeaveServerIcon, NotificationBellIcon,
    PenEditIcon, PrivacyShieldIcon, ReportRaidShieldIcon, ServerInsightsIcon, SettingsIcon
}
    from "../../front_end_svgs/Strife_svgs";

const ChannelDropDown = (props) => {

    const popUpRef = useRef();
    const params = useParams();
    // closeHookModalOnOutsideClick(popUpRef, props.setShowPopUp);
    closeOnEsc(props.setShowPopUp);
    const [checkMark, setCheckMark] = useState(false);
    const [checkMark2, setCheckMark2] = useState(false);

    const serverOwnerId = props.server.server_owner_id;


    let checkBoxRender = checkMark === false ? (
        <CheckBoxUnCheckedIcon className="icon-cd-hmc" />
    ) : (
        <CheckBoxCheckedIcon className="icon-cd-hmc" />
    );

    let checkBoxRender2 = checkMark2 === false ? (
        <CheckBoxUnCheckedIcon className="icon-cd-hmc" />

    ) : (
        <CheckBoxCheckedIcon className="icon-cd-hmc" />
    )

    return (

        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="channel-drop-down-layer" onClick={(e) => { props.setShowPopUp(false); }}>
                <div className="channel-drop-down-pop-up" onClick={(e) => e.stopPropagation()} ref={popUpRef}>
                    <div className="channel-drop-down-pop-up-animate">
                        <div className="channel-drop-menu">
                            <div className="channel-drop-scroller global-scroll-thin-raw-attributes global-scroller-base"
                                style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                                <div role={"group"}>
                                    <div className="channel-drop-item">
                                        <div className="server-boost-label">Server Boost</div>
                                        <div className="server-boost-icon-container">
                                            <GemBoostIcon className="server-boost-icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="channel-drop-sep"></div>
                                <div role={"group"}>
                                    <div className="channel-drop-item group2"
                                        onClick={() => {
                                            props.openModalWithProps(
                                                {
                                                    ChannelId: props.currentChannel?.id || -1,
                                                    params: params,
                                                    channel_belongs_to_server_id: props.currentChannel?.server_id || -1
                                                }
                                            );
                                            props.setRenderInviteToServer(true);
                                            props.setShowPopUp(false);
                                        }}>
                                        <div className="server-boost-label ip">
                                            Invite People
                                        </div>
                                        <div className="server-boost-icon-container">
                                            <InviteMemberIcon className="icon-ipcd" />
                                        </div>
                                    </div>
                                    {
                                        props.currentUser.id === serverOwnerId ?
                                            (
                                                <div className={`channel-drop-item`}
                                                    onClick={() => {
                                                        appPullerPullAndHoldAnimation();
                                                        // appPullerPullAnimation();
                                                        props.openModal("ServerSettings");
                                                        props.setShowPopUp(false);
                                                    }}>
                                                    <div className="server-boost-label">Server Settings</div>
                                                    <div className="server-boost-icon-container">
                                                        <SettingsIcon className="icon-cd-gear" />
                                                    </div>
                                                </div>
                                            )
                                            :
                                            ("")
                                    }

                                    {
                                        props.currentUser.id === serverOwnerId ? (
                                            <div className={`channel-drop-item`}>
                                                <div className="server-boost-label">Server Insights</div>
                                                <div className="server-boost-icon-container">
                                                    <ServerInsightsIcon className="icon-cd-si" />
                                                </div>
                                            </div>
                                        ) : ("")
                                    }


                                    {
                                        props.currentUser.id === serverOwnerId ? (
                                            <div className={`channel-drop-item`}
                                                onClick={() => {
                                                    //pass -1 as we dont want Create Channel modal to have the in channel type
                                                    props.openModalWithProps({ channelType: -1 })
                                                    props.openModal('CreateChannel');
                                                    props.setShowPopUp(false);
                                                }}
                                            >
                                                <div className="server-boost-label">Create Channel</div>
                                                <div className="server-boost-icon-container">
                                                    <AddCircleIcon className="icon-cd-cc" />
                                                </div>
                                            </div>

                                        ) : ("")

                                    }

                                    {
                                        props.currentUser.id === serverOwnerId ? (
                                            <div className={`channel-drop-item`}>
                                                <div className="server-boost-label">Create Category</div>
                                                <div className="server-boost-icon-container">
                                                    <AddFolderIcon className="icon-cd-ccat" />
                                                </div>
                                            </div>

                                        ) : ("")

                                    }
                                    {
                                        props.currentUser.id === serverOwnerId ? (
                                            <div className={`channel-drop-item`}>
                                                <div className="server-boost-label">Create Event</div>
                                                <div className="server-boost-icon-container">
                                                    <AddEventIcon className="icon-cd-ce" />
                                                </div>
                                            </div>

                                        ) : ("")

                                    }
                                    <div className={`channel-drop-item`}>
                                        <div className="server-boost-label">App Directory</div>
                                        <div className="server-boost-icon-container">
                                            <AppDirectoryBotIcon className="icon-cd-ad" />
                                        </div>
                                    </div>
                                </div>
                                <div className="channel-drop-sep"></div>
                                <div role={"group"}>

                                    <div className="channel-drop-item" onClick={() => setCheckMark(!checkMark)}>
                                        <div className="server-boost-label">Show All Channels (Beta)</div>
                                        <div className="server-boost-icon-container">
                                            {checkBoxRender}
                                        </div>
                                    </div>

                                    <div className="channel-drop-item">
                                        <div className="server-boost-label">Notification Settings</div>
                                        <div className="server-boost-icon-container">
                                            <NotificationBellIcon className="icon-cd-ns" />
                                        </div>

                                    </div>
                                    <div className="channel-drop-item">
                                        <div className="server-boost-label">Privacy Settings</div>
                                        <div className="server-boost-icon-container">
                                            <PrivacyShieldIcon className="icon-cd-ps" />
                                        </div>

                                    </div>
                                </div>
                                <div className="channel-drop-sep"></div>
                                <div role={"group"}>
                                    <div className="channel-drop-item" onClick={() => { appPullerPullAndHoldAnimation(); props.openModal('userSettings'); props.setShowPopUp(false); }}>
                                        <div className="server-boost-label">Edit Server Profile</div>
                                        <div className="server-boost-icon-container">
                                            <PenEditIcon className="icon-cd-esp" />
                                        </div>
                                    </div>
                                    <div className="channel-drop-item" onClick={() => setCheckMark2(!checkMark2)}>
                                        <div className="server-boost-label">Hide Muted Channels</div>
                                        <div className="server-boost-icon-container">
                                            {checkBoxRender2}
                                        </div>
                                    </div>
                                </div>
                                <div className="channel-drop-sep"></div>
                                <div role={"group"}>

                                    {
                                        props.currentUser.id === serverOwnerId ? (

                                            <div className={`channel-drop-item redclr`}>
                                                <div className="server-boost-label">Report Raid</div>
                                                <div className="server-boost-icon-container">
                                                    <ReportRaidShieldIcon className="icon-cd-rr" />
                                                </div>
                                            </div>

                                        ) : (

                                            <div
                                                className={`channel-drop-item redclr`}
                                                onClick={() => {
                                                    props.setRenderLeaveServer(true);
                                                    props.setShowPopUp(false);
                                                }}
                                            >
                                                <div className="server-boost-label">Leave Server</div>
                                                <div className="server-boost-icon-container">
                                                    <LeaveServerIcon className="icon-cd-ls" />
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL >

    )
}

export default ChannelDropDown;