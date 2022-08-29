import React from "react";

class EditFriendshipModal extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="fo-layer">
                <div className="fo-theme">
                    <div className="fo-flex-wrapper">
                        <div className="fo-scroller">
                            <div className="fo-item-container">
                                <div className="fo-item-name">Start Video Call</div>
                            </div>
                            <div className="fo-item-container">
                                <div className="fo-item-name">Start Voice Call</div>
                            </div>
                            <div className="fo-item-container">
                                <div className="fo-item-name-red">Remove Friend</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default EditFriendshipModal;


