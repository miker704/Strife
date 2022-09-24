import React from "react";


class IntrusionPreventionLoadingScreen extends React.Component {
    constructor (props) {
        super(props);
        this.loadingMessage = this.props.selectedLoadingMsg;
    }


    componentDidMount () {
        if (this.props.history.location.pathname !== "/channels/@me") {
            setTimeout(() => {
                this.props.history.push("/channels/@me");
            }, 5000)
        }
    }

    render () {
        return (
            <div className="loading-screen-wrapper">
                <img className="loading-screen-img" alt="loadingimg" />
                <h1>{this.loadingMessage}</h1>
            </div>
        )
    }


}

export default IntrusionPreventionLoadingScreen;