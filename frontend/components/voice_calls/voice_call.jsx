import React from "react";
import { CloseXIcon, DisconnectPhoneCallIcon, VoiceCallPhoneIcon } from "../front_end_svgs/Strife_svgs";



class STRIFE_VOICE_CALL_API extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            joinCall: true,
            startCall: true,
            leaveCall: true,
            callArmed: false,
        }
        this._STRIFE_VOICE_CALL_CONSTRUCTOR_ = this._STRIFE_VOICE_CALL_CONSTRUCTOR_.bind(this);
        this._STRIFE_VOICE_CALL_DECONSTRUCTOR_ = this._STRIFE_VOICE_CALL_DECONSTRUCTOR_.bind(this);


    }

    componentWillUnmount () {
        // this._STRIFE_VOICE_CALL_DECONSTRUCTOR_();
    }




    _STRIFE_VOICE_CALL_CONSTRUCTOR_ () {
        navigator.mediaDevices.getUserMedia(
            {
                video: false,
                audio: true
            }).then((stream) => {
                window.localStream = stream;
                window.localAudio.srcObject = stream;
                window.localAudio.autoplay = true;
            }).catch((err) => {
                console.error(`$TR!F3 VOICE CALL API ERROR: ${err}`);
            })
    }


    _STRIFE_VOICE_CALL_DECONSTRUCTOR_ () {

    }

    render () {
        return (
            <div className="strife-web-call-container2" onClick={(e) => e.stopPropagation()}>
                <div id="close-video-call" className={`x-to-close-video-call ${this.state.callArmed === true ? `is-hidden` : ``}`} onClick={() => this.props.closeModal()}>
                    <CloseXIcon />
                </div>
                <div id="buttons">
                    <div className="video-controls">
                        <button disabled={this.state.joinCall} type="button" id="Join-call" className="faint-boost-shiny-button start-video-call-button" onClick={this._STRIFE_VOICE_CALL_CONSTRUCTOR_.bind(this)}>
                            <VoiceCallPhoneIcon className="icon-phone-2" />
                            <div className="shiny-button-contents">
                                Join Voice Call
                                <div className="shiny-button-container">
                                    <div className="shiny-button-flex">
                                        <div className="shiny-button-inner"></div>
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button disabled={this.state.startCall} type="button" id="start-call" className="faint-boost-shiny-button start-video-call-button" onClick={this.joinCall.bind(this)}>
                            <VoiceCallPhoneIcon className="icon-phone-2" />
                            <div className="shiny-button-contents">
                                Start Voice Call
                                <div className="shiny-button-container">
                                    <div className="shiny-button-flex">
                                        <div className="shiny-button-inner"></div>
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button disabled={this.state.leaveCall} type="button" id="leave-call" className="faint-boost-shiny-button drop-video-call-button" onClick={this.leaveCall.bind(this)}>
                            <DisconnectPhoneCallIcon className="disconnect-call-icon" />
                            <div className="shiny-button-contents">
                                Leave Voice Call
                                <div className="shiny-button-container">
                                    <div className="shiny-button-flex">
                                        <div className="shiny-button-inner"></div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                <div id="videos">
                    <video id="localVideo" muted autoPlay playsInline></video>
                    {/* <div id="remoteVideo"></div> */}
                    <video id="remoteVideo" autoPlay playsInline></video>

                </div>
            </div>
        )
    }


}

export default STRIFE_VOICE_CALL_API;