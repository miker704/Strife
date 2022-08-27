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
                            <div className="create-dm-header">

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