import React from "react";
import { JOIN_CALL, LEAVE_CALL, EXCHANGE, ice } from "../../actions/video_and_voice_calls_actions.js";
import { broadcastData } from "../../utils/voice_and_video_calls_api_util.js";
import { CloseXIcon, DisconnectPhoneCallIcon, VoiceCallPhoneIcon } from "../front_end_svgs/Strife_svgs.jsx";

class STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS extends React.Component {
    constructor (props) {
        super(props);
        this.peerConnectionPeers = {};
        this.state = {
            joinCall: false,
            startCall: true,
            leaveCall: true,
            callArmed: false,
        }
        this._STRIFE_VIDEO_CALL_CONSTRUCTOR_ = this._STRIFE_VIDEO_CALL_CONSTRUCTOR_.bind(this);
        this._STRIFE_VIDEO_CALL_DECONSTRUCTOR_ = this._STRIFE_VIDEO_CALL_DECONSTRUCTOR_.bind(this);
        this.exchange = this.exchange.bind(this);
        this.join = this.join.bind(this);
        this.removeUser = this.removeUser.bind(this);
        this.joinCall = this.joinCall.bind(this);
        this.leaveCall = this.leaveCall.bind(this);
        this.createPeerConnection = this.createPeerConnection.bind(this);
        this.currentUser = null;
    }

    componentWillUnmount () {
        this._STRIFE_VIDEO_CALL_DECONSTRUCTOR_();
    }

    _STRIFE_VIDEO_CALL_CONSTRUCTOR_ () {
        this.localVideo = document.getElementById("localVideo");
        this.remoteVideo = document.getElementById("remoteVideo");
        navigator.mediaDevices.getUserMedia(
            {
                audio: true,
                video: true
            }
        ).then(stream => {
            this.localStream = stream;
            this.localVideo.srcObject = stream;
        }).catch((error) => { console.error(error) });
        this.setState({
            leaveCall: false,
            startCall: false,
            joinCall: true,
            callArmed: true
        })
    }

    //impose a deconstructor to clear any lingering data
    _STRIFE_VIDEO_CALL_DECONSTRUCTOR_ () {
        //close peer connections
        const pcKeys = Object.keys(this.peerConnectionPeers);
        for (let i = 0; i < pcKeys.length; i++) {
            this.peerConnectionPeers[pcKeys[i]].close();
        }
        //cut the cable
        App.cable.subscriptions.subscriptions = [];
        broadcastData({
            type: LEAVE_CALL,
            from: this.props.currentUserId,
            id: "1000"
        });
        //refresh the dom to prevent any lingering signals or errors from remaining and ensure a fresh 'ice' connection
        //is ready
        //nullify everything attached to 'this' -> delete instead of nullifying as it ensures data is removed as cant linger
        // delete 
        delete this.localStream;
        delete this.remoteVideo;
        delete this.localVideo;
        delete this.peerConnectionPeers;
        // document.location.reload(true);
        window.location.reload();
    }
    joinCall (e) {
        e.preventDefault();
        const secureUser = this.props.currentUserId;
        App.cable.subscriptions.create(
            { channel: "CallChannel", id: "1000" },
            {
                connected: () => {
                    setTimeout(() => {
                        broadcastData({
                            type: JOIN_CALL,
                            from: secureUser,
                            id: "1000"
                        });
                    }, 1000)
                },
                received: data => {
                    if (data.from === secureUser) return;
                    switch (data.type) {
                        case JOIN_CALL:
                            return this.join(data);
                        case EXCHANGE:
                            if (data.to !== secureUser) return;
                            return this.exchange(data);
                        case LEAVE_CALL:
                            return this.removeUser(data);
                        default:
                            return;
                    }
                },
            });
        this.setState({
            startCall: true,
        })
    }

    leaveCall (e) {

        e.preventDefault();
        const pcKeys = Object.keys(this.peerConnectionPeers);
        for (let i = 0; i < pcKeys.length; i++) {
            this.peerConnectionPeers[pcKeys[i]].close();
        }
        this.peerConnectionPeers = {};
        this.localVideo.srcObject.getTracks().forEach(function (track) {
            track.stop();
        })
        this.localVideo.srcObject = null;
        App.cable.subscriptions.subscriptions = [];

        this.remoteVideo.innerHTML = "";

        broadcastData({
            type: LEAVE_CALL,
            from: this.props.currentUserId,
            id: "1000"
        });
        this.setState({
            leaveCall: true,
            startCall: true,
            joinCall: false,
            callArmed: false
        })
        this.props.closeModal();
    }

    join (data) {
        this.createPeerConnection(data.from, true)
    }
    removeUser (data) {
        let video = document.getElementById(`remoteVideo+${data.from}`);
        video && video.remove();
        let peers = this.peerConnectionPeers
        delete peers[data.from]
    }
    createPeerConnection (userId, isOffer) {


        let peerConnection = new RTCPeerConnection(ice)
        this.peerConnectionPeers[userId] = peerConnection;
        let vidcount = 0;
        this.localStream.getTracks().forEach((track) => peerConnection.addTrack(track, this.localStream));

        let that = this;
        if (isOffer) {
            peerConnection.createOffer().then(offer => {
                peerConnection.setLocalDescription(offer).then(() => {

                    setTimeout(() => {
                        broadcastData({
                            type: EXCHANGE,
                            from: that.props.currentUserId,
                            to: userId,
                            sdp: JSON.stringify(peerConnection.localDescription),
                            id: "1000"
                        })
                    }, 1000);
                });

            });
        }
        peerConnection.onicecandidate = (e) => {
            if (e.candidate) {
                setTimeout(() => {
                    broadcastData({
                        type: EXCHANGE,
                        from: that.props.currentUserId,
                        to: userId,
                        sdp: JSON.stringify(e.candidate),
                        id: "1000"
                    });
                }, 1000);
            }
        }
        peerConnection.ontrack = e => {
            if (vidcount === 0) {
                // const remoteVid = document.createElement("video");
                // remoteVid.id = `remoteVideo+${userId}`;
                // remoteVid.autoplay = "autoPlay";
                // remoteVid.playsInline = "playsInline"
                // remoteVid.srcObject = e.streams[0];
                // document.getElementById('remoteVideo').style.background = "none";
                // document.getElementById('remoteVideo').style.height = `100%`;
                // this.remoteVideo.appendChild(remoteVid);
                this.remoteVideo.id = `remoteVideo+${userId}`;
                this.remoteVideo.srcObject = e.streams[0];
                vidcount++

            }
        };
        peerConnection.oniceconnectionstatechange = e => {
            if (peerConnection.iceConnectionState === 'disconnected') {

                broadcastData({
                    type: LEAVE_CALL,
                    from: userId,
                    id: "1000"
                });

            }
        };
        return peerConnection;
    }
    exchange (data) {

        const that = this
        let peerConnection;

        if (!this.peerConnectionPeers[data.from]) {
            peerConnection = this.createPeerConnection(data.from, false);
        } else {
            peerConnection = this.peerConnectionPeers[data.from];
        }


        if (data.candidate) {
            let candidate = JSON.parse(data.candidate)
            peerConnection.addIceCandidate(new RTCIceCandidate(candidate))
        }

        if (data.sdp) {
            const sdp = JSON.parse(data.sdp);

            if (sdp && !sdp.candidate) {
                peerConnection.setRemoteDescription(sdp).then(() => {
                    if (sdp.type === "offer") {
                        peerConnection.createAnswer().then(answer => {
                            peerConnection.setLocalDescription(answer)
                                .then(() => {
                                    setTimeout(() => {
                                        broadcastData({
                                            type: EXCHANGE,
                                            from: that.props.currentUserId,
                                            to: data.from,
                                            sdp: JSON.stringify(peerConnection.localDescription),
                                            id: "1000"
                                        });
                                    }, 1000);
                                });

                        }).catch(errors => console.error(errors));

                    }
                }).catch((errors) => console.error(errors));

            }
        }
    }

    render () {
        return (
            <div className="strife-web-call-container2" onClick={(e) => e.stopPropagation()}>
                <div id="close-video-call" className={`x-to-close-video-call ${this.state.callArmed === true ? `is-hidden` : ``}`} onClick={() => this.props.closeModal()}>
                    <CloseXIcon />
                </div>
                <div id="buttons">
                    <div className="video-controls">
                        <button disabled={this.state.joinCall} type="button" id="Join-call" className="faint-boost-shiny-button start-video-call-button" onClick={this._STRIFE_VIDEO_CALL_CONSTRUCTOR_.bind(this)}>
                            <VoiceCallPhoneIcon className="icon-phone-2" />
                            <div className="shiny-button-contents">
                                Join Video Call
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
                                Start Video Call
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
                                Leave Video Call
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

export default STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS;