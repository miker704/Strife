import React from "react";


class LoadingScreen extends React.Component{
    constructor(props){
        super(props);
        this.loadingMessage = this.props.selectedLoadingMsg;
    }
    
    render(){
        return (
            <div className="loading-screen-wrapper">

            </div>
        )
    }


}

export default LoadingScreen;