import React from "react";


class LoadingScreen extends React.Component{
    constructor(props){
        super(props);
        this.loadingMessage = this.props.selectedLoadingMsg;
    }
    
}

export default LoadingScreen;