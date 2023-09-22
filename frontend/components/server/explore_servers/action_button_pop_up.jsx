import React from "react";
import { useRef } from "react";
import { closeOnEsc } from "../../../utils/close_hook_modals_api_utils";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { Tooltip } from "react-tooltip";
import { CopyIDIcon } from "../../front_end_svgs/Strife_svgs";

const ActionButtonPopUp = (props) => {

    const popupRef = useRef();
    closeOnEsc(props.setShowPopUp);
    let topH = props.boundingClient.top + 36;
    let leftH = props.boundingClient.left - 156;

    return (

        <REACT_PORTAL wrapperId={'sub-modal-2'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="action-button-pop-up-layer" onClick={(e) => { props.setShowPopUp(false) }}>
                <div className="action-button-pop-up" style={{ position: `absolute`, top: `${topH}px`, left: `${leftH}px` }}
                    onClick={(e) => e.stopPropagation()} ref={popupRef}>
                    <div className="action-button-pop-up-menu">
                        <div className="action-button-scroller">
                            <div role={"group"}>
                                <div className="action-button-pop-up-item" data-tooltip-place="top" data-tooltip-id="copy-strife-server-link" data-tooltip-content={'Click to Copy Server Invite Link'}
                                    onClick={() => {
                                        navigator.clipboard.writeText(props.serverLink).then(() => { props.setShowPopUp(false) })
                                    }}
                                >
                                    <div className="action-button-strife-server-link">
                                        Copy Server ID
                                    </div>
                                    <div className="action-button-pop-up-icon-wrapper">
                                        <CopyIDIcon className="action-button-pop-up-icon" />
                                    </div>
                                </div>
                            </div>
                            <Tooltip className="copy-server-link-tool-tip" closeOnResize={true}
                                id="copy-strife-server-link" place="top" closeOnScroll={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL >
    )
}
export default ActionButtonPopUp;