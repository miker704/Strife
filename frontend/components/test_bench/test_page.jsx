import React from "react";
// import defaultPFP from '../../../app/assets/images/discord_PFP.svg';

class TestPage extends React.Component {
    constructor (props) {
        super(props);
        this.renderModal = this.renderModal.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handlePrivacy = this.handlePrivacy.bind(this);
        this.setCount = this.setCount.bind(this);
        this.selectChannelTypes = this.selectChannelTypes.bind(this);
        this.cancel = false;
        this.loadingMessage = this.props.selectedLoadingMsg;
        this.state = {
            password: '',
            // allServers: this.props.servers,
            // currServer: '',
            // serverName: '',
            value: '',
            count: 1024,
            choice: 1,
            private_Selected: false,
            channelName: '',
            channelType: '',
            selected_Option: 'TextChannel',

            textChannelChecked: true,
            voiceChecked: false


        }
    }


    setCount (e) {
        this.setState({
            count: Math.abs(this.state.count - 1),
            value: e.currentTarget.value

        });

        if (this.state.value === '') {
            this.setState({ count: 1024 });
        }

    }




    componentDidMount () {
        this.props.fetchServers();
        this.props.fetchDmServers();
        // this.props.fetchServer();
    }
    renderModal (modalName) {

        this.props.openModal(modalName);
    }
    handleInput (field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }
    handleSubmit (e) {
        e.preventDefault();
        console.log("choice: ", this.state.selected_Option);
    }

    handleOnChange (e) {
        // return this.setState({channelType:field})
        console.log("before: ", this.state.selected_Option);
        this.setState({ selected_Option: e.currentTarget.value });
        console.log("now: ", this.state.selected_Option);

    }
    handlePrivacy () {
        // console.log("onChange: ", e.currentTarget.value);
        this.setState({ private_Selected: !this.state.private_Selected });
        console.log("onChange: ", this.state.private_Selected);

    }
    selectChannelTypes (channels) {
        let channelHash = new Object();

        for (let i of channels) {
            console.log("channel_cat_name: ", i.channel_cat_name);
            channelHash[i.channel_cat_name] = [];
        }
        console.log("channel hash after cat insertion: ")
        console.table(channelHash);
        for (let i of channels) {
            console.log("channel_cat_name: ", i.channel_cat_name);
            channelHash[i.channel_cat_name].push(i)
        }

        return channelHash;

    }



    render () {
        // let default_PFP = defaultPFP;
        // let default_png = "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png";
        // // let default_profile_pic = this.props.currentUser.photo === undefined ?
        // //     <img src={default_png} alt="PFP" /> : <img className="pfp-svg" src={default_PFP} alt="PFP" />

        // let default_profile_pic = this.props.currentUser.photo === undefined ? <img className="user-avatar-img" /> : <img src={this.props.currentUser.photo} alt="pfp" />
        // let default_profile_pic1 = this.props.currentUser.photo === undefined ?
        //     <div className={`user-avatar-img-svg-render color-${this.props.currentUser.color_tag}`}>
        //         <img className="user-avatar-img-svg" />

        //     </div> :
        //     <img src={this.props.currentUser.photo} alt="pfp" />

        // let default_user_pfp = this.props.currentUser.photo === undefined ?
        //     default_PFP : this.props.currentUser.photo;
        // let passwordErrorTag = this.props.errors.length > 0 ? "field-error" : "";


        // console.log("test bench props: ", this.props);

        // return (


        //     <div className="empty-messages-container">
        //         <p className="this-is-a-test">HELLO WORLD</p>
        //     </div>
        // )
        // 
        // return (
        //     <div className="loading-screen-wrapper" >

        //         <div className="circle-wrap">
        //             <img className="loading-screen-img" alt="loadingimg" />
        //             <div className="shiny-button-container">
        //                 <div className="shiny-button-flex">
        //                 </div>
        //             </div>
        //         </div>

        //         <h1 className="intrusion-warning">{this.loadingMessage}</h1>
        //         {/* <div className="shiny-button-inner"></div> */}

        //     </div >
        // )
        return (
            <div className="loading-screen-wrapper">
                <div className="circle-wrap">
                    <img className="loading-screen-img" alt="loadingimg" />
                    <div className="shiny-button-container">
                         <div className="shiny-button-flex">
                         </div>
                     </div>
                </div>
                <h1 className="loading-screen-img-h2">{this.loadingMessage}</h1>
            </div>
        )

    }
}

export default TestPage;