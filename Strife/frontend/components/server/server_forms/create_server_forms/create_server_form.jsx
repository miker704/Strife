import React from "react";


class CreateServerForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            server_owner_id: this.props.currentUser.id,
            server_name: "",
            public: true, //true by default
            server_icon: "", // empty by default until aws functionality is implemented
            form_number: 1,
            foward: false,
            backward: false,
            invite_code: "",
        }
        console.log("calling create server modal");
        let serverNamefiller = `${this.props.currentUser.username}'s server`;
        console.log(serverNamefiller);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }


    handleSubmit () {
        let serverSubmission = {}


        if (this.state.public === true) {
            serverSubmission = {
                server_owner_id: this.props.currentUser.id,
                server_name: "",
                public: true, //true by default
                server_icon: "", // empty by default until aws functionality is implemented,
                invite_code: "",
            }
        }
        else {
            serverSubmission = {
                server_owner_id: this.props.currentUser.id,
                server_name: "",
                public: false, //true by default
                server_icon: "", // empty by default until aws functionality is implemented,
                invite_code: "",
            }
        }
        console.log("serverSubmission Form: ", serverSubmission);
    }

    handleInput (e) {

        return (e) => this.setState({ server_name: e.currentTarget.value });

    }

    submitFormPrivate () {
        let submitServer = {
            server_owner_id: this.props.currentUser.id,
            server_name: "",
            public: false, //true by default
            server_icon: "", // empty by default until aws functionality is implemented,
            invite_code: "",
        }
        return this.props.createServer(submitServer);
    }

    submitFormPublic () {
        let submitServer = {
            server_owner_id: this.props.currentUser.id,
            server_name: "",
            public: true, //true by default
            server_icon: "", // empty by default until aws functionality is implemented,
            invite_code: "",
        }
        return this.props.createServer(submitServer);

    }


    render () {
        console.log("call");


        let currentModalState = "";
        let form_state = "all-Slides";


        if (this.state.foward === false) {

        }

        let slide1 = (

            <div className="first-Slide">
                <div className="first-Slide-Header">
                    <h2>Create a server</h2>
                    <p>Your server is where you and your friends hang out. Make yours and start talking.</p>
                </div>
                <div className="top-Separator"></div>
                <div className="slide1-To-Slide2-Button">

                    <div>
                        <img className="create-A-Server-Img" />
                        <h2>Create My Own</h2>
                    </div>

                </div>
                <div className="bottom-Separator"></div>
            </div>



        );
        let slide2;
        let slide3;








        return (
            <div className="create-A-Server-Wrapper">

                <div className="create-A-Server-Modal">
                    <div className="x-To-Close">

                        <svg
                            // className="close-button"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            onClick={() => this.props.closeModal()}
                        ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
                        </svg>

                    </div>

                    {/* <p>HELLO</p>
                    <button onClick={() => this.handleSubmit()}>hello submit</button> */}


                    <div className={form_state}>

                        {slide1}
                    </div>
                    <div className="start-from-template">
                        <h2>Start From A Template</h2>
                    </div>



                </div>





            </div>
        )
    }
}

export default CreateServerForm;