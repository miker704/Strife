import React from "react";



class STRIFE_VOICE_CALL_API extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            joinCall:  true,
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
                <div id="close-video-call" className={`x-to-close-video-call ${this.state.callArmed === true ? `is-hidden` : ``}`}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        onClick={() => this.props.closeModal()}
                    ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
                    </svg>
                </div>
                <div id="buttons">
                    <div className="video-controls">
                        <button disabled={this.state.joinCall} type="button" id="Join-call" className="faint-boost-shiny-button start-video-call-button" onClick={this._STRIFE_VOICE_CALL_CONSTRUCTOR_.bind(this)}>
                            <svg x="0" y="0" className="icon-phone-2" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11 5V3C16.515 3 21 7.486 21 13H19C19 
                                8.589 15.411 5 11 5ZM17 13H15C15 10.795 13.206 9 11 9V7C14.309 7 17 9.691 17 13ZM11 11V13H13C13 
                                11.896 12.105 11 11 11ZM14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22H13C6.925 
                                22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 
                                14.938 9 18 13 18V17C13 16.447 13.447 16 14 16Z">
                                </path>
                            </svg>
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
                            <svg x="0" y="0" className="icon-phone-2" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11 5V3C16.515 3 21 7.486 21 13H19C19 
                                8.589 15.411 5 11 5ZM17 13H15C15 10.795 13.206 9 11 9V7C14.309 7 17 9.691 17 13ZM11 11V13H13C13 
                                11.896 12.105 11 11 11ZM14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22H13C6.925 
                                22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 
                                14.938 9 18 13 18V17C13 16.447 13.447 16 14 16Z">
                                </path>
                            </svg>
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
                            <svg className="disconnect-call-icon" aria-hidden="true" role="img" width="24" height="24"
                                viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M21.1169 1.11603L22.8839 
                                    2.88403L19.7679 6.00003L22.8839 9.11603L21.1169 10.884L17.9999 7.76803L14.8839 10.884L13.1169 
                                    9.11603L16.2329 6.00003L13.1169 2.88403L14.8839 1.11603L17.9999 4.23203L21.1169 1.11603ZM18 22H13C6.925 
                                    22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 
                                    18V17C13 16.447 13.447 16 14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22Z">
                                </path>
                            </svg>
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