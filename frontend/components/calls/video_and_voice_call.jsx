import React from "react";
import { broadcastData } from "../../utils/voice_and_video_calls_api_util";
import { JOIN_CALL, LEAVE_CALL, EXCHANGE, ice } from "../../actions/video_and_voice_calls_actions";
import { createConsumer } from "@rails/actioncable";

class STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS extends React.Component {

    constructor (props) {
        super(props);
        this.peerConnectionPeers = {};
    }

    componentDidMount () {
        this.localVideo = document.getElementById("local-video");
        this.remoteVideoContainer = document.getElementById("remote-video-container");
        navigator.mediaDevices.getUserMedia(
            {
                audio: true,
                video: true
            }
        ).then(stream => {
            this.localStream = stream;
            this.localVideo.srcObject = stream;
        }).catch((error) => { console.log(error) });
    }

    componentDidUpdate () {
        this.localVideo = document.getElementById("local-video");
        navigator.mediaDevices.getUserMedia(
            {
                audio: true,
                video: true
            }
        ).then(stream => {
            this.localStream = stream;
            this.localVideo.srcObject = stream;
        }).catch((error) => { console.log(error) });

    }
    componentWillUnmount () {
        const pcKeys = Object.keys(this.peerConnectionPeers);
        for (let i = 0; i < pcKeys.length; i++) {
            this.peerConnectionPeers[pcKeys[i]].close();
        }
        App.cable.subscriptions.subscriptions = [];
        broadcastData({
            type: LEAVE_CALL,
            from: this.props.currentUserId,
            id: "1000"
        });
    }

    joinCall (e) {
        //connect to action cable
        //switch on broadcasted data.type and decide what to do from there

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
                    }, 0)
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

        this.remoteVideoContainer.innerHTML = "";

        broadcastData({
            type: LEAVE_CALL,
            from: this.props.currentUserId,
            id: "1000"
        });
        this.props.closeModal();
    }

    join (data) {
        this.createPeerConnection(data.from, true)
    }
    removeUser (data) {
        let video = document.getElementById(`remoteVideoContainer+${data.from}`);
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
                    }, 0);
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
                }, 0);
            }
        }
        peerConnection.ontrack = e => {
            if (vidcount === 0) {
                const remoteVid = document.createElement("video");
                remoteVid.id = `remoteVideoContainer+${userId}`;
                remoteVid.autoplay = "autoplay";
                remoteVid.srcObject = e.streams[0];
                this.remoteVideoContainer.appendChild(remoteVid);
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
                                    }, 0);
                                });

                        }).catch(errors => console.log(errors));

                    }
                }).catch((errors) => console.log(errors));

            }
        }
    }

    render () {


        return (


            <div className="strife-web-call-container" onClick={e => e.stopPropagation()}>

                <div id='vidContainer' className='video-call'>
                    <div id="remote-video-container"></div>
                    <video id='local-video' muted autoPlay></video>
                    <div className='video-controls'>

                        <button className='join-call' onClick={this.joinCall.bind(this)}>
                            Join Call
                        </button>

                        <button className='leave-call' onClick={this.leaveCall.bind(this)}>
                            Leave Call
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS;