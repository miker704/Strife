import React from "react";
import { broadcastData } from "../../utils/voice_and_video_calls_api_util";
import { JOIN_CALL, LEAVE_CALL, EXCHANGE, ice } from "../../actions/video_and_voice_calls_actions";
import { createConsumer } from "@rails/actioncable";

class STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS extends React.Component {

    constructor (props) {
        super(props);
        this.peerConnectionPeers = {};
        // this.userId = Math.floor(Math.random() * 10000);
        this.userId = this.props.currentUser.id;
        this.joinCall = this.joinCall.bind(this);
        this.leaveCall = this.leaveCall.bind(this);
    }

    componentDidMount () {
        this.remoteVideoContainer = document.getElementById('remote-video-container');
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
            this.localStream = stream;
            document.getElementById('local-video').srcObject = stream;
        }).catch(error => { console.warn("ERROR CALL FAILED TO CONNECT: ", error); })
    }

    join (data) {
        this.createPeerConnection(data.from, true);
    }

    joinCall (e) {
        App.cable.subscriptions.create(
            { channel: "CallChannel" },
            {
                connected: () => {
                    broadcastData({ type: JOIN_CALL, from: this.userId });

                },
                received: (data) => {
                    if (data.from === this.userId) { return; }
                    switch (data.type) {
                        case JOIN_CALL:
                            return this.join(data);
                        case EXCHANGE:
                            if (data.to !== this.userId) return;
                            return this.exchangeData(data);
                        case LEAVE_CALL:
                            return this.removeUser(data);
                        default:
                            return;
                    }

                }
            }
        )



    }

    createPeerConnection (userId, offerBool) {
        const peerConnection = new RTCPeerConnection(ice);
        this.peerConnectionPeers[userId] = peerConnection;
        this.localStream.getTracks()
            .forEach(track => peerConnection.addTrack(track, this.localStream));
        if (offerBool) {
            peerConnection.createOffer().then(offer => {
                peerConnection.setLocalDescription(offer).then(() => {
                    setTimeout(() => {
                        broadcastData({
                            type: EXCHANGE,
                            from: this.userId,
                            to: userId,
                            sdp: JSON.stringify(peerConnection.localDescription),
                        });
                    }, 0);
                });
            });
        }
        peerConnection.onicecandidate = (e) => {
            broadcastData({
                type: EXCHANGE,
                from: this.userId,
                to: userId,
                sdp: JSON.stringify(e.candidate)
            })
        };
        peerConnection.ontrack = (e) => {
            const REMOTE_VIDEO = document.createElement("video");
            REMOTE_VIDEO.id = `remoteVideoContainer+${userId}`;
            REMOTE_VIDEO.autoplay = "autoplay";
            REMOTE_VIDEO.srcObject = e.streams[0];
            this.remoteVideoContainer.appendChild(REMOTE_VIDEO);
        };
        peerConnection.oniceconnectionstatechange = (e) => {
            if (peerConnection.iceConnectionState === 'disconnected') {
                broadcastData({ type: LEAVE_CALL, from: userId });
            }
        };
        return peerConnection;
    }


    exchangeData (data) {
        let peerConnection;
        if (this.peerConnectionPeers[data.from]) {
            peerConnection = this.peerConnectionPeers[data.from];
        } else {
            peerConnection = this.createPeerConnection(data.from, false);
        }
        if (data.candidate) {
            let candidate = JSON.parse(data.candidate)
            peerConnection.addIceCandidate(new RTCIceCandidate(candidate))
        }
        if (data.sdp) {
            const sdp = JSON.parse(data.sdp);
            if (sdp && !sdp.candidate) {
                peerConnection.setRemoteDescription(sdp).then(() => {
                    if (sdp.type === 'offer') {
                        peerConnection.createAnswer().then(answer => {
                            peerConnection.setLocalDescription(answer)
                                .then(() => {
                                    broadcastData({
                                        type: EXCHANGE,
                                        from: this.userId,
                                        to: data.from,
                                        sdp: JSON.stringify(peerConnection.localDescription)
                                    });
                                });
                        });
                    }
                });
            }
        }
    }
    leaveCall () {
        const peerConnectionKeys = Object.keys(this.peerConnectionPeers);
        for (let i = 0; i < peerConnectionKeys.length; i++) {
            this.peerConnectionPeers[peerConnectionKeys[i]].close();
        }
        this.localVideo.srcObject.getTracks().forEach(function (track) { track.stop(); })
        
        this.localVideo.srcObject = null;
        App.cable.subscriptions.subscriptions = [];
        this.remoteVideoContainer.innerHTML = "";
        this.peerConnectionPeers = {};
        broadcastData({ type: LEAVE_CALL, from: this.userId });
    }

    removeUser (data) {
        let video = document.getElementById(`remoteVideoContainer+${data.from}`);
        video && video.remove();
        let peers = this.peerConnectionPeers;
        delete peers[data.from]
    }

    render () {
        return (
            <div id="remote-video-container">
                <video id="local-video" autoPlay></video>
                <button onClick={this.joinCall(this)}>Join Call</button>
                <button onClick={() => this.leaveCall()}>Leave Call</button>

            </div>
        )
    }

}

export default STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS;