import React from "react";

class FriendRequestErrorModal extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="frfm-backdrop">
                <div className="frfm-wrapper">
                    <div className="frfm">
                        <div className="frfm-inner">
                            <form className="form-class-200">
                                <div className="form-content-1">
                                    <div className="form-content-1-inner">
                                        <h2 className="form-content-1-header">
                                            Friend Request Failed
                                        </h2>
                                        <div className="form-content-1-subtext">
                                            Hm, didn't work. Double check that the capitalization, spelling,
                                            any spaces, and numbers are correct.
                                        </div>
                                    </div>
                                    <div className="frfm-div-sep"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FriendRequestErrorModal;