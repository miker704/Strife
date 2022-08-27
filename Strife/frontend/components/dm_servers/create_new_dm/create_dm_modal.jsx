import React from "react";

class createDmModal extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="create-dm-modal-popup">
                    <div className="create-dm-modal-focus-lock">
                        <div className="create-dm-modal">
                            <div className="create-dm-header-sec">
                                    <h2 className="create-dm-header-h2">Select Friends</h2>
                                    <div className="num-of-dm-members-selected">You can add x more friends.</div>
                                    <div className="create-dm-search-bar-wrapper">
                                            <div className="create-dm-search-bar-outer-wrapper">
                                                <div className="create-dm-search-bar-inner-wrapper">
                                                    <input className="create-dm-search-bar"type="text" name="" id="" />
                                                </div>
                                            </div>
                                    </div>
                            </div>
                            <div className="create-dm-scroller">
                                        
                            </div>
                            <div className="create-dm-footer"></div>
                            <div className="create-dm-button-sec">
                                <button className="create-dm-button">
                                    <div className="create-dm-button-text">Create Group DM</div>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default createDmModal;