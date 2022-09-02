import React from "react";


class LoadingScreen extends React.Component{
    constructor(props){
        super(props);
        this.loadingMessage = this.props.selectedLoadingMsg;
    }
    
    render(){
        return (
            <div className="loading-screen-wrapper">
                <img className = "loading-screen-img" alt="loadingimg" />
                <h1>{this.loadingMessage}</h1>
            </div>
        )
    }


}

export default LoadingScreen;