import React from "react";

class FriendRequestErrorModal extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
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
                                        </div>
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