import React from "react";


class LoadingScreen extends React.Component {
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
                <div className="circle-wrap">
                    <img className="loading-screen-img" alt="loadingimg" />
                    <div className="shiny-button-container">
                         <div className="shiny-button-flex">
                         </div>
                     </div>
                </div>
                <h1 className="loading-screen-img-h2">{this.loadingMessage}</h1>
            </div>
        )
    }


}

export default LoadingScreen;