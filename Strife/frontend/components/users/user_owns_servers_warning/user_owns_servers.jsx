import React from "react";



class UserOwnsServers extends React.Component{
    constructor(props){
        super(props);
        this.okay = false;
        this.handleOkayClick = this.handleOkayClick.bind(this);
    }

    handleOkayClick(e){
        e.preventDefault();
        if(this.okay === true ){
            return;
        }
    }




    render(){

    }


}

export default UserOwnsServers;