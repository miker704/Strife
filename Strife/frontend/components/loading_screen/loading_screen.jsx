import React from "react";


class LoadingScreen extends React.Component{
    constructor(props){
        super(props);
        this.loadingMessage = this.props.selectedLoadingMsg;
    }
    
    render(){
        return (
            <div className="loading-screen-wrapper">
                <img src="" alt="" />
                <h1>{this.loadingMessage}</h1>
            </div>
        )
    }


}

export default LoadingScreen;