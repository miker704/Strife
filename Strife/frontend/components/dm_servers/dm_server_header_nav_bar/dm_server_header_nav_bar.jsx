import React from "react";


class DmServerHeaderNavBar extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="dm-server-header-bar">
                <div className="dm-server-bar-children">
                    <div className="dms-children-icon-wrapper">
                        <svg x="0" y="0" className="icon-at-sym" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 
                            22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 
                            16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4
                             15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 
                             13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6
                              12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 
                              16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 
                              6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 
                              10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 
                              13.434 14.599 12 14.599Z">
                            </path>
                        </svg>
                    </div>
                    <div className="dms-hbar-name">
                        <h3 className="dms-hbar-name-header">member name</h3>
                    </div>
                    <div className="dms-member-online-status">

                    </div>
                        <div className="dmshb-spacer"></div>
                        <div className="dmshb-tool-bar">
                            
                        </div>
                </div>
            </div>
        )
    }
}


export default DmServerHeaderNavBar;