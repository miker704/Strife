import React from "react";


class DmMessages extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("dmserver messages props", this.props);
        return(
            <div className="empty-messages-container">Hello World</div>

        )
    }
}

export default DmMessages;