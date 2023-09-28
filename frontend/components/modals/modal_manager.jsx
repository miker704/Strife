import React from "react";
import STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS_CONTAINER from "../calls/video_and_voice_call_container.js";


class ModalManager extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            setSpecialFeatures: 0,
        }
        this.setModalSpecialFeatures = this.setModalSpecialFeatures.bind(this);

    }
    //this function is to set special modal background/ positioning for different modals that need it 
    setModalSpecialFeatures (modifier) {
        this.setState({ setSpecialFeatures: modifier });
    }



    render () {
        // console.log("modal props : ");
        // console.log(this.props);
        let renderedModal;
        let modalMod = 0;
        // using a switch statement to reduce slow down of processing multiple if statemnets with similar
        // or little complex condtions also to dry up the code
        switch (this.props.modal) {

            case "STRIFE_WEBRTC_CALL":
                renderedModal = <STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS_CONTAINER />
                modalMod = 0;
                break;
            default:
                return null;
        }


        if (!this.props.modal) {
            return null;
        }

        return (
            <div className={`modal-struct-${modalMod}`} onClick={this.props.closeModal}>
                {renderedModal}
            </div>
        );
    }


}

export default ModalManager;

