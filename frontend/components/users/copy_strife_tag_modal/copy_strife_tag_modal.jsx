import React from 'react';
import { useRef, useEffect } from "react";
import REACT_PORTAL from '../../../utils/ReactPortal_api_util';
import { CopyIDIcon } from '../../front_end_svgs/Strife_svgs';


const CopyStrifeTagIDModal = (props) => {

    const popUpRef = useRef(null);

    useEffect(() => {
        window.addEventListener('keyup', handleESC, false);
        return function cleanUp () {
            props.removeSessionErrors();
            window.removeEventListener('keyup', handleESC, false);
        }
    }, []);



    const handleSubModalCloseOnOutsideClick = (e) => {
        e.preventDefault();
        setTimeout(() => {
            props.closeSubMod(props.formName);
            window.removeEventListener('keyup', handleESC, false);
        }, 200);
    }



    const handleESC = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                setTimeout(() => {
                    props.closeSubMod(props.formName);
                    window.removeEventListener('keyup', handleESC, false);
                }, 200);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }



    return (

        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="copy-clip-board-sub-modal-layer" onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                <div className='copy-clip-board-modal-layer' style={{ position: `absolute`, top: `${props.top !== 0 ? `${props.top}px` : `223px`}`, left: `${props.left !== 0 ? `${props.left}px` : `708.67px`}` }}>
                    <div className='copy-clip-board-modal-animate-container'>
                        <div className='copy-clip-board-modal' id="copy-clip-board-modal" ref={popUpRef} onClick={(e) => e.stopPropagation()}>
                            <div className='copy-clip-board-modal-scroller global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                                <div className='copy-clip-board-modal-content' role='menuitem' onClick={(e) => {
                                    navigator.clipboard.writeText("#" + props.currentUser.strife_id_tag).then(() => { handleSubModalCloseOnOutsideClick(e) })
                                }}>
                                    <div className='copy-id-div-content'>Copy User ID</div>
                                    <div className='copy-clip-board-modal-id-icon-container'>
                                        <CopyIDIcon className="copy-clip-board-modal-id-icon" />
                                    </div>
                                </div>
                                <div className='copy-clip-board-modal-sep'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL >
    )
}

export default CopyStrifeTagIDModal;