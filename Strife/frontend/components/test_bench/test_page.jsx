import React from "react";
import defaultPFP from '../../../app/assets/images/discord_PFP.svg';
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
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

    checkDmMemberShip () {
        const dmservers = Object.values(this.props.dmServers);
        for (let dms of dmservers) {
            let stat = this.props.fetchDmMemberShipStatus({ dm_member_id: this.props.currentUser.id, dm_server_id: dms.id });
            console.log("status: ", stat);
        }
    }


    render () {
        let default_PFP = defaultPFP;
        let default_png = "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png";
        // let default_profile_pic = this.props.currentUser.photo === undefined ?
        //     <img src={default_png} alt="PFP" /> : <img className="pfp-svg" src={default_PFP} alt="PFP" />

        let default_profile_pic = this.props.currentUser.photo === undefined ? <img className="user-avatar-img" /> : <img src={this.props.currentUser.photo} alt="pfp" />
        let default_profile_pic1 = this.props.currentUser.photo === undefined ?
            <div className={`user-avatar-img-svg-render color-${this.props.currentUser.color_tag}`}>
                <img className="user-avatar-img-svg" />

            </div> :
            <img src={this.props.currentUser.photo} alt="pfp" />

        let default_user_pfp = this.props.currentUser.photo === undefined ?
            default_PFP : this.props.currentUser.photo;
        let passwordErrorTag = this.props.errors.length > 0 ? "field-error" : "";


        console.log("test bench props: ", this.props);

        // return (


        //     <div className="empty-messages-container">
        //         <p className="this-is-a-test">HELLO WORLD</p>
        //     </div>
        // )

        // return (
        //     <div className="loading-screen-wrapper" >
        //         <div className="circle-wrap">
        //             <img className="loading-screen-img" alt="loadingimg" />
        //         </div>

        //         <h1 className="intrusion-warning">{this.loadingMessage}</h1>
        //     </div >
        // )

        return (
            <div className="empty-messages-container">
                <p className="this-is-a-test">HELLO WORLD !!!!</p>

                <div className="delete-message-modal-layer">
                    <div className="delete-message-modal-backdrop"></div>
                    <div className="delete-message-modal-inner-layer">
                        <div className="delete-message-modal-focus-lock">
                            <div className="delete-message-modal-root">
                                <div className="delete-message-modal-inner-flex">
                                    <h2 className="delete-msg-h2">Delete Message</h2>
                                </div>
                                <div className="delete-this-message-wrapper">
                                    <div className="dtm-subtext">Are you sure you want to delete this message?</div>
                                    <div className="delete-this-message-container">
                                        <div className="delete-msg-box">

                                        </div>
                                    </div>
                                    <div className="delete-server-sep"></div>
                                </div>
                                <div className="delete-server-button-sec">
                                    <button type="submit" className="delete-server-submit-button">Delete Server</button>
                                    <button type="button" className="delete-server-cancel-button">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )




    }
}

export default TestPage;