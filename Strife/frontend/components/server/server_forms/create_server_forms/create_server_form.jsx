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
            foward: true,
            backward: false,
            joiningServer: false,
            invite_code: "",
            submissionType: ""
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

        let currentModalState = "";
        let form_state = "all-Slides";


        if (this.state.foward === false) {
            if (this.state.form_number === 1) {
                form_state = "all-Slides back";
            }
            else if (this.state.form_number === 2) {
                form_state = "all-Slides second back";
            }
        }
        else {

            if (this.state.form_number === 1) {
                form_state = "all-Slides";
            }
            if (this.state.form_number === 2) {
                form_state = "all-Slides second foward";

            }
            else if (this.state.form_number === 3) {
                form_state = "all-Slides third forward";
            }



        }







        let slide1 = (

            <div className="first-Slide">
                <div className="first-Slide-Header">
                    <h2>Create a server</h2>
                    <p>Your server is where you and your friends hang out. Make yours and start talking.</p>
                </div>
                
                <div className="top-separator" />
                <div className="slide1-To-Slide2-Button">

                    <div>
                        <img className="create-A-Server-Img" />
                        <h2>Create My Own</h2>
                    </div>
                    <img className="arrow" />
                </div>
                <div className="bottom-separator" />


                <div className="top-separator" />
                <div className="start-from-template">
                    <h2>Start From A Template</h2>
                </div>
                <div className="bottom-separator" />

                <div className="top-separator" />
                <div className="slide1-To-Slide2-Button">

                    <div>
                        <img className="gaming-Server-Img" />
                        <h2>Gaming</h2>
                    </div>
                    <img className="arrow" />
                </div>
                <div className="bottom-separator" />


                <div className="top-separator" />
                <div className="slide1-To-Slide2-Button">

                    <div>
                        <img className="school-Club-Server-Img" />
                        <h2>School Club</h2>
                    </div>
                    <img className="arrow" />
                </div>
                <div className="bottom-separator" />



                <div className="top-separator" />
                <div className="slide1-To-Slide2-Button">

                    <div>
                        <img className="study-Server-Img" />
                        <h2>Study Group</h2>
                    </div>
                    <img className="arrow" />
                </div>
                <div className="bottom-separator" />

                <div className="top-separator" />
                <div className="slide1-To-Slide2-Button">

                    <div>
                        <img className="friends-Server-Img" />
                        <h2>Friends</h2>
                    </div>
                    <img className="arrow" />
                </div>
                <div className="bottom-separator" />

                <div className="top-separator" />
                <div className="slide1-To-Slide2-Button">

                    <div>
                        <img className="artists-and-Creators-Server-Img" />
                        <h2>Artists & Creators</h2>
                    </div>
                    <img className="arrow" />
                </div>
                <div className="bottom-separator" />



                <div className="top-separator" />
                <div className="slide1-To-Slide2-Button">

                    <div>
                        <img className="local-Community-Server-Img" />
                        <h2>Local Community</h2>
                    </div>
                    <img className="arrow" />
                </div>
                <div className="bottom-separator" />


                <div className="join-Existing-Server">
                    <h2>Have an invite already?</h2>
                    <button>Join a Server</button>

                </div>


            </div>



        );
        //modal slide for joining a server via invite link
        let slide2 = this.state.joiningServer === true ? (
            <div className="second-Slide">

            </div>
        ) : ("");




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




                </div>





            </div>
        )
    }
}

export default CreateServerForm;