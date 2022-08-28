import React from "react";

class DownloadApps extends React.Component {

    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="da-layer">
                <div className="da-backdrop"></div>
                <div className="da-flex-layer">
                    <div className="da-focus-lock">
                        <div className="da-dl-apps">
                            <div className="da-dl-apps-inner">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default DownloadApps;