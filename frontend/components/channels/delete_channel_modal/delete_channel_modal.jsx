import React from "react";
import { useEffect, useRef } from "react";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { appPullerReleaseHoldAnimation } from "../../../utils/appPullerAnimation_api_util";

const DeleteChannelModal = (props) => {
    const popupRef = useRef();

    // const [] = useState();

    //pass in props for server general  channel and lock deletion for deltion of it 

    useEffect(() => {
        window.addEventListener('keyup', handleESC, false);
        return function cleanUp () {
            props.removeServerErrors();
            props.removeChannelErrors();
            window.removeEventListener('keyup', handleESC, false);
        }

    }, [])


    const handleESC = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                handleCloseOnOuterClick(e);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }

    const handleCloseOnOuterClick = (e) => {
        e.preventDefault();
        let modalToClose = document.getElementById('delete-channel-modal');
        if (modalToClose) {
            modalToClose.classList.add("transition-out");
            Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                .then(() => {
                    props.closeSubMod(props.formName);
                    window.removeEventListener('keyup', handleESC, false);

                }, () => {
                    props.closeSubMod(props.formName);
                    window.removeEventListener('keyup', handleESC, false);
                });
        }
        else {
            props.closeSubMod(props.formName);
            window.removeEventListener('keyup', handleESC, false);
        }
    }



    const handleDeleteChannel = (e) => {
        // this is a bit more complex and involved we will close this modal, main mod then transefer a redirect to general channel id
        //then delete channel
        e.preventDefault(); // prevent tiny warning for form disconnection

        if (props.currentChannel.id !== props.server.general_channel_id) {
            props.closeSubMod(props.formName);
            appPullerReleaseHoldAnimation();
            props.closeModal();

            if (props.history.location.pathname === `/$/channels/${props.server.id}/${props.currentChannel.id}`) {
                props.history.push(`/$/channels/${props.server.id}/${props.server.general_channel_id}`);
            }
            props.deleteChannel(props.currentChannel.id).then(() => {
                props.fetchServer(parseInt(props.serverId));
            })
        }
        else {
            //prevent deletion of general channel through XSS attacks (form hijackings)
            handleCloseOnOuterClick(e);
        }
    }

    let hashTag = props.currentChannel.channel_type === 1 ? ('#') : ("");

    let deleteChannelMessage = props.currentChannel.id === props.server.general_channel_id ? (
        <div className={`delete-channel-text red`}>
            This is {` `} <strong>{`${props.server.server_name}`}'s{` `}</strong>
            general channel {` `}
            <strong>{hashTag}{`${props.currentChannel.channel_name}`}{` `}</strong>
            which cannot be deleted. Subscribe to $TR!F3 N!TR0 to delete any channel from your servers.
        </div>
    ) : (
        <div className={`delete-channel-text`}>
            Are you sure you want to delete {` `}
            <strong>{hashTag}{`${props.currentChannel.channel_name}`}</strong>
            ? This cannot be undone.
        </div>
    );


    let deleteChannelButton = props.currentChannel.id === props.server.general_channel_id ? (
        <div className="fake-delete-channel-submit-button">
            <div className="delete-channel-button-contents">Delete Channel</div>
        </div>
    ) : (
        <button type="submit" className="delete-channel-submit-button">
            <div className="delete-channel-button-contents">Delete Channel</div>
        </button >
    );


    return (
        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="delete-channel-wrapper"  >
                <div className="delete-channel-backdrop" onClick={(e) => handleCloseOnOuterClick(e)}></div>
                <div className="delete-channel-layer">
                    <div className="delete-channel-focus-lock" onClick={e => e.stopPropagation()} ref={popupRef}>
                        <div className="delete-channel-root" id="delete-channel-modal">
                            <div className="delete-channel-flex" >
                                <h2 className="delete-channel-header">
                                    Delete Channel
                                </h2>
                            </div>
                            <div className="delete-channel-content-scroll-base global-scroller-base global-scroll-thin-raw-attributes" style={{ overflow: "hidden scroll", paddingRight: `8px` }}>
                                {deleteChannelMessage}
                                <div className="delete-channel-sep"></div>
                            </div>
                            <form onSubmit={handleDeleteChannel} className="delete-channel-button-flex-wrapper">
                                {deleteChannelButton}
                                <button type="button" onClick={(e) => handleCloseOnOuterClick(e)} className="delete-channel-cancel-button">
                                    <div className="delete-channel-button-contents">Cancel</div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL >

    )


}

export default DeleteChannelModal;









