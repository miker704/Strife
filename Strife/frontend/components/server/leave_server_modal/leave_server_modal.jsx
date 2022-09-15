import React from "react";
import { useRef, useEffect, useState } from "react";
import { closeHookModalOnESC, closeHookModalOnOutsideClick } from "../../../utils/close_hook_modals_api_utils";

const LeaveServerModal = (props) => {


    

    return (
        <div className="delete-server-modal-wrapper"  >
            <div className="delete-server-flex-box">

                <div className="delete-server-modal-inner-wrapper">
                    <div id="delete-server-modal" className="delete-server-modal" >
                        {/* <form onSubmit={this.handleSubmit}> */}
                        <form>


                            <div className="delete-server-form-header-wrapper">
                                <h2 className="delete-server-form-header">
                                    Delete{` `}{`'server_name'`}
                                </h2>
                            </div>

                            <div className="delete-server-scroll-base">
                                <div className="delete-server-warning-card">
                                    <div className="delete-server-warning-text">
                                        Are You sure that you want to delete{` `}
                                        <strong>server_name</strong>?
                                        This action cannot be undone.
                                    </div>

                                </div>
                                <div className="delete-server-sep"></div>




                                <div className="server-name-section">
                                    <h5 className="server-name-header1">
                                        {/* <label className={passwordErrorTag}>Enter Server Name{ }</label> */}
                                    </h5>
                                    <div className="input-server-name-wrapper">
                                        <input
                                            // value={this.state.serverName}
                                            // onChange={() => this.handleInput("serverName")}
                                            type="text"
                                            className="input-server-name"
                                            spellCheck={false}
                                            autoComplete="off"

                                        />
                                    </div>
                                </div>
                                <div className="delete-server-sep"></div>

                            </div>
                            <div className="delete-server-button-sec">
                                <button type="submit" className="delete-server-submit-button">Delete Server</button>
                                <button type="submit" className="delete-server-cancel-button">Cancel</button>

                                {/* <button type="submit" onClick={() => this.cancel = true} className="delete-server-cancel-button">Cancel</button> */}
                            </div>

                        </form>
                    </div>
                </div>




            </div>
        </div>

    )


}

export default LeaveServerModal;