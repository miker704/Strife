import React from 'react';
import { useRef, useState } from "react";

const MegaUpcTab1 = (props) => {

    const [note, setNote] = useState('');
    const noteRef = useRef(null);


    return (
        <div className='megaUpc-info-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `4px` }}>
            <div className='megaUpc-user-info-section'>
                <h1 className='upc-about-me-text'>About Me</h1>
                <div className='megaUpc-user-info-text'>
                    <div className='upc-about-me-markup-text-wrapper'>
                        <span>Loading ... ... ... ... </span>
                        <img className='upc-loading-status' alt="" />
                    </div>
                </div>
                <h1 className='megaUpc-user-info-header'>$TR!F3 Member Since</h1>
                <div className='megaUpc-member-since-container'>
                    <div className='megaUpc-strife-member-since-time'>{props.member.accountCreatedOn}</div>
                </div>
                <h1 className='megaUpc-user-info-header'>Note</h1>
                <div className='megaUpc-note-container'>
                    <textarea
                        className="megaUpc-note-textarea global-scrollbar-ghost-hairline global-scrollbar-no-border"
                        style={{ height: `44px` }} aria-label='Note' placeholder='Click to add note'
                        autoCorrect='off' maxLength={256} spellCheck={false} autoComplete='off'
                        value={note} ref={noteRef}
                        onChange={(e) => setNote(e.currentTarget.value)}
                    ></textarea>
                </div>
                <div className='megaUpc-tab-bottom-sep'></div>
            </div>
        </div>
    )

}
export default MegaUpcTab1;