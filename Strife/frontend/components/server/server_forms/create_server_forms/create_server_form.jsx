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
            submissionType: "",
            invalidInviteCode: "*"
        }
        console.log("calling create server modal");
        let serverNamefiller = `${this.props.currentUser.username}'s server`;
        console.log(serverNamefiller);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleJoinServer = this.handleJoinServer.bind(this);
        this.handleJoinServerClick = this.handleJoinServerClick.bind(this)
        this.handleSlideBackward = this.handleSlideBackward.bind(this);
        this.handleSlideFoward = this.handleSlideFoward.bind(this);
        this.handleInviteCode = this.handleInviteCode.bind(this);
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



    handleJoinServerClick(e){
        let currentSlide = this.state.form_number;
        this.setState({
            form_number: currentSlide + 1,
            forward: true,
            backward: false,
            joiningServer: true
        });
    }

    handleJoinServer (e) {
        let currentSlide = this.state.form_number;
        this.setState({
            form_number: currentSlide + 1,
            forward: true,
            backward: false,
            joiningServer: true
        });
    }

    handleSlideFoward (e) {
        e.preventDefault();
        let currentSlide = this.state.form_number;
        this.setState({
            form_number: currentSlide + 1,
            forward: true,
            backward: false,
            joiningServer: false
        });
    }

    handleSlideBackward (e) {
        e.preventDefault();
        let currentSlide = this.state.form_number;
        this.setState({
            form_number: currentSlide - 1,
            foward: false,
            backward: true,
            joiningServer: false
        })
    }

    handleInviteCode (e) {
        return (e) => this.setState({ invite_code: e.currentTarget.value });
    }

    render () {

        let currentModalState = "";
        let form_state = "all-Slides";
        let inviteCodeErrorMessage = "";
        let inviteCodeErrors = "";
        if (this.state.invalidInviteCode === "*") {
            inviteCodeErrorMessage = <span>*</span>;
        }
        else {
            inviteCodeErrorMessage = this.state.invalidInviteCode;
            inviteCodeErrors = "ERROR";
        }




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


                <div className="sep">


                    <div className="top-separator" />
                    <div className="slide1-To-Slide2-Button" onClick={this.handleSlideFoward}>

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
                    <div className="slide1-To-Slide2-Button" onClick={this.handleSlideFoward}>

                        <div>
                            <img className="gaming-Server-Img" />
                            <h2>Gaming</h2>
                        </div>
                        <img className="arrow" />
                    </div>
                    <div className="bottom-separator" />


                    <div className="top-separator" />
                    <div className="slide1-To-Slide2-Button" onClick={this.handleSlideFoward}>

                        <div>
                            <img className="school-Club-Server-Img" />
                            <h2>School Club</h2>
                        </div>
                        <img className="arrow" />
                    </div>
                    <div className="bottom-separator" />



                    <div className="top-separator" />
                    <div className="slide1-To-Slide2-Button" onClick={this.handleSlideFoward}>

                        <div>
                            <img className="study-Server-Img" />
                            <h2>Study Group</h2>
                        </div>
                        <img className="arrow" />
                    </div>
                    <div className="bottom-separator" />

                    <div className="top-separator" />
                    <div className="slide1-To-Slide2-Button" onClick={this.handleSlideFoward}>

                        <div>
                            <img className="friends-Server-Img" />
                            <h2>Friends</h2>
                        </div>
                        <img className="arrow" />
                    </div>
                    <div className="bottom-separator" />

                    <div className="top-separator" />
                    <div className="slide1-To-Slide2-Button" onClick={this.handleSlideFoward}>

                        <div>
                            <img className="artists-and-Creators-Server-Img" />
                            <h2>Artists & Creators</h2>
                        </div>
                        <img className="arrow" />
                    </div>
                    <div className="bottom-separator" />



                    <div className="top-separator" />
                    <div className="slide1-To-Slide2-Button" onClick={this.handleSlideFoward}>

                        <div>
                            <img className="local-Community-Server-Img" />
                            <h2>Local Community</h2>
                        </div>
                        <img className="arrow" />
                    </div>
                    <div className="bottom-separator" />


                </div>


                <div className="join-Existing-Server" >
                    <h2>Have an invite already?</h2>
                    <button onClick={this.handleJoinServerClick}>Join a Server</button>

                </div>


            </div>



        );

        //modal slide for joining a server via invite link

        let slide2 = this.state.joiningServer === true ? (
            <div className="second-Slide joinServer">
                <div className="second-Slide-Header">
                    <h2>Join a Server</h2>
                    <p>Enter an invite below to join an existing server</p>
                </div>
                <div className="server-use-invite-form">
                    <label className={inviteCodeErrors}>INVITE LINK {inviteCodeErrorMessage}</label>
                    <input type="text" onChange={this.handleInviteCode} placeholder="https://strife.gg/8404br4s" />
                    <label>INVITES SHOULD LOOK LIKE</label>
                    <div className="invite-code-examples">
                        <h3>8404br4s</h3>
                        <h3>https://strife.gg/8406eb38</h3>
                        <h3>https://strife.gg/default-server</h3>
                    </div>
                    <div className="top-separator" />
                    <div className="slide2-to-slide3-button">

                        <div>
                            <img className="dont-Have-A-Server-Img" />
                            <h2>Don't have an invite?</h2>
                            <p>Check out public communities in Server Discovery.</p>
                        </div>
                        <img className="arrow" />
                    </div>
                    <div className="bottom-separator" />

                </div>
                <div className="back-button-join">
                    <h2 onClick={this.handleSlideBackward}>Back</h2>
                    <input type="submit" value="Join Server" onClick={this.handleJoinServer} />
                </div>

            </div>
        ) : (
            <div className="second-Slide">
                <div className="second-Slide-Header">
                    <h2>Tell us more about your server</h2>
                    <p>In order to help you with your setup, is your
                        new server for just a few friends or a larger community? </p>
                </div>

                <div className="top-separator" />
                <div className="slide2-to-slide3-button" onClick={this.handleSlideFoward}>

                    <div>
                        <img className="public-Server-Img" />
                        <h2>For a club or community</h2>
                    </div>
                    <img className="arrow" />
                </div>
                <div className="bottom-separator" />

                <div className="top-separator" />
                <div className="slide2-to-slide3-button" onClick={this.handleSlideFoward}>

                    <div>
                        <img className="private-Server-Img" />
                        <h2>For me and my friends</h2>
                    </div>
                    <img className="arrow" />
                </div>
                <div className="bottom-separator" />


                <div className="top-separator" />
                <div className="skip-this-step">
                    <h2>
                        Not sure? You can{" "}
                        <a onClick={this.handleSlideFoward}>skip this question </a>
                        for now
                    </h2>
                </div>
                <div className="bottom-separator" />

                <div className="back-button">
                    <h2 onClick={this.handleSlideBackward}>Back</h2>
                </div>


            </div>
        );




        let slide3 = (
            <div className="third-Slide">
                <div className="third-Slide-Header">
                    <h2>Customize your server</h2>
                    <p>Give your new server a personality with a
                        name and an icon. You can always change it later.</p>
                </div>
                    <form>


                    </form>
            </div>
        );








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
                    <div className={form_state}>

                        {slide1}
                    </div>




                </div>





            </div>
        )
    }
}

export default CreateServerForm;