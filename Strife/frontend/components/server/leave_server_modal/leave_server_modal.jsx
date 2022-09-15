import React from "react";
import { useRef, useEffect, useState } from "react";
import { closeHookModalOnESC, closeHookModalOnOutsideClick } from "../../../utils/close_hook_modals_api_utils";

const LeaveServerModal = (props) => {




    return (
        <div className="leave-server-wrapper"  >
            <div className="leave-server-backdrop"></div>
            <div className="leave-server-layer">
                <div id="leave-server-focus-lock" className="leave-server-focus-lock" >
                    <div className="leave-server-root" >
                        <div className="leave-server-flex" >
                            <h2 className="remove-phone-header">
                                Leave 'Shot from the point'
                            </h2>
                        </div>
                        <div className="leave-server-content-scroll-base" >
                            <div className="leave-server-text">
                                Are you sure you want to leave {` `}
                                <strong>shot from the point</strong>
                                ? You won't be able to rejoin this server unless you are re-invited.
                            </div>
                            <div className="username-edit-sep"></div>
                        </div>
                        {/* <form onSubmit={this.handleSubmit} className="leave-server-button-flex-wrapper"> */}
                            {/* <button type="submit" onClick={() => this.cancel = true} className="delete-server-submit-button">Leave Server</button> */}
                            {/* <button type="submit" onClick={() => this.cancel = true} className="username-edit-cancel-button">cancel</button> */}
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>


    )


}

export default LeaveServerModal;