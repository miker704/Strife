import React from "react";


class CreateServerForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            server_owner_id: this.props.currentUser.id,
            server_name: "",
            public: true, //true by default
            server_icon: "", // empty by default until aws functionality is implemented
            form_number:1,
            invite_code: "",
        }
        console.log("calling create server modal");
    }


    submitFormPrivate(){
        let submitServer={
            server_owner_id: this.props.currentUser.id,
            server_name: "",
            public: false, //true by default
            server_icon: "", // empty by default until aws functionality is implemented,
            invite_code: "",
        }
        return this.props.createServer(submitServer);
    }

    submitFormPublic(){
        let submitServer={
            server_owner_id: this.props.currentUser.id,
            server_name: "",
            public: true, //true by default
            server_icon: "", // empty by default until aws functionality is implemented,
            invite_code: "",
        }
        return this.props.createServer(submitServer);

    }


    render(){
        console.log("call");
        return(
            <div className="create-A-Server">

                <p>HELLO</p>


            </div>
        )
    }
}

export default CreateServerForm;