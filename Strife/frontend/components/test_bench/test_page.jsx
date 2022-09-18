import React from "react";
import defaultPFP from '../../../app/assets/images/discord_PFP.svg';
import { Link } from "react-router-dom";
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
        // this.props.fetchServers();
        this.props.fetchServer(28);
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


        let inner_input_icon;

        if (this.state.selected_Option === 'TextChannel') {
            if (this.state.private_Selected === false) {
                inner_input_icon = (
                    <svg width="16" height="16" viewBox="0 0 24 24" className="ccm-input-hash" aria-hidden="true" role="img">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 
                5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746
                2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946
                7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845
                 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891
                 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574
                    7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301
                    15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209
                   20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 
                    20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
                        </path>
                    </svg>
                )
            }
            else {
                inner_input_icon = (
                    <svg width="16" height="16" viewBox="0 0 24 24" className="ccm-input-hash-private">
                        <path fill="currentColor" d="M14 8C14 7.44772 13.5523 7 13 7H9.76001L10.3657 3.58738C10.4201 
                        3.28107 10.1845 3 9.87344 3H8.88907C8.64664 3 8.43914 3.17391 8.39677 3.41262L7.76001 7H4.18011C3.93722 
                        7 3.72946 7.17456 3.68759 7.41381L3.51259 8.41381C3.45905 8.71977 3.69449 9 4.00511 9H7.41001L6.35001
                         15H2.77011C2.52722 15 2.31946 15.1746 2.27759 15.4138L2.10259 16.4138C2.04905 16.7198 2.28449 17 
                         2.59511 17H6.00001L5.39427 20.4126C5.3399 20.7189 5.57547 21 5.88657 21H6.87094C7.11337 21 7.32088
                          20.8261 7.36325 20.5874L8.00001 17H14L13.3943 20.4126C13.3399 20.7189 13.5755 21 13.8866 21H14.8709C15.1134 21
                           15.3209 20.8261 15.3632 20.5874L16 17H19.5799C19.8228 17 20.0306 16.8254 20.0724 16.5862L20.2474
                            15.5862C20.301 15.2802 20.0655 15 19.7549 15H16.35L16.6758 13.1558C16.7823 12.5529 16.3186 12 15.7063 
                            12C15.2286 12 14.8199 12.3429 14.7368 12.8133L14.3504 15H8.35045L9.41045 9H13C13.5523 9 14 8.55228 14 8Z">
                        </path>
                        <path fill="currentColor" d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 
                                16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635
                                 5 21.025 5ZM20 5H18V4C18 3.42857 18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z">
                        </path>
                    </svg>
                );
            }
        }
        else if (this.state.selected_Option === 'VoiceChannel') {
            if (this.state.private_Selected === false) {
                inner_input_icon = (
                    <svg className="ccm-input-ls" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 3.01004
                         10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293
                          20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904
                           11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 
                           17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 
                           9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451
                            14.551 11.002 14 11.002V9.00195Z" aria-hidden="true">
                        </path>
                    </svg>
                )

            }
            else {
                inner_input_icon = (
                    <svg width="16" height="16" viewBox="0 0 24 24" className="ccm-input-ls-private">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M15 12C15 12.0007 15 
                                12.0013 15 12.002C15 12.553 14.551 13.002 14 13.002V15.002C15.654 15.002 17 13.657 17 12.002C17
                                 12.0013 17 12.0007 17 12H15ZM19 12C19 12.0007 19 12.0013 19 12.002C19 14.759 16.757 17.002 14 
                                 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 12.0013 21 12.0007 21 12H19ZM10.293 3.29604C10.579
                                  3.01004 11.009 2.92504 11.383 3.07904C11.757 3.23204 12 3.59904 12 4.00204V20.002C12 20.407 11.757 20.772
                                   11.383 20.927C11.009 21.082 10.579 20.996 10.293 20.71L6 16.002H3C2.45 16.002 2 15.552 2 15.002V9.00204C2
                                    8.45304 2.45 8.00204 3 8.00204H6L10.293 3.29604Z">
                        </path>
                        <path fill="currentColor" d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16
                         9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 
                         18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z">
                        </path>
                    </svg>
                );
            }
        }


        let slider_status = this.state.private_Selected === false ?
            (
                <svg className={`ccm-priv-slider`} viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: "-3px" }}>
                    <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
                    <svg viewBox="0 0 20 20" fill="none">
                        <path fill="hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)" d="M5.13231 6.72963L6.7233
                            5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z">
                        </path>
                        <path fill="hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)" d="M13.2704 5.13864L14.8614
                            6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z">
                        </path>
                    </svg>
                </svg>

            ) :
            (
                <svg className="ccm-priv-slider" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: "12px" }}>
                    <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
                    <svg viewBox="0 0 20 20" fill="none">
                        <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)"
                            d="M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z">
                        </path>
                        <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)"
                            d="M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z">
                        </path>
                    </svg>
                </svg>

            );

        console.log("test bench props : ", this.props);
                console.log("server ", this.props.server);








        let channels = {
            "4": {

                "id": 4,
                "channel_name": "general",
                "server_id": 3,
                "channel_type": '1',
                'channel_cat_name': 'text'

            },
            "14": {

                "id": 14,
                "channel_name": "Ayce's Circle",
                "server_id": 3,
                "channel_type": '1',
                'channel_cat_name': 'text'

            },
            "1": {

                "id": 1,
                "channel_name": "school help",
                "server_id": 3,
                "channel_type": '2',
                'channel_cat_name': 'school'

            },
            "2": {

                "id": 2,
                "channel_name": "AYCE CHAT",
                "server_id": 3,
                "channel_type": '2',
                'channel_cat_name': 'voice'

            },
            "3": {

                "id": 3,
                "channel_name": "code help",
                "server_id": 3,
                "channel_type": '2',
                'channel_cat_name': 'coding'

            },
            "5": {

                "id": 5,
                "channel_name": "coding",
                "server_id": 3,
                "channel_type": '1',
                'channel_cat_name': 'coding'

            },
            "6": {

                "id": 6,
                "channel_name": "school",
                "server_id": 3,
                "channel_type": '1',
                'channel_cat_name': 'school'

            },
            "7": {

                "id": 7,
                "channel_name": "text me",
                "server_id": 3,
                "channel_type": '1',
                'channel_cat_name': 'text'

            },
            "8": {

                "id": 8,
                "channel_name": "group chat",
                "server_id": 3,
                "channel_type": '2',
                'channel_cat_name': 'voice'

            },
            "9": {

                "id": 9,
                "channel_name": "general",
                "server_id": 3,
                "channel_type": '2',
                'channel_cat_name': 'game chat'

            },
            "10": {

                "id": 10,
                "channel_name": "text",
                "server_id": 3,
                "channel_type": '1',
                'channel_cat_name': 'default'

            },

        }


        let cat_channels = [
            [
                "school",
                [
                    {
                        "id": 1,
                        "channel_name": "school help",
                        "server_id": 3,
                        "channel_type": "2",
                        "channel_cat_name": "school"
                    },
                    {
                        "id": 6,
                        "channel_name": "school",
                        "server_id": 3,
                        "channel_type": "1",
                        "channel_cat_name": "school"
                    }
                ]
            ],
            [
                "voice",
                [
                    {
                        "id": 2,
                        "channel_name": "AYCE CHAT",
                        "server_id": 3,
                        "channel_type": "2",
                        "channel_cat_name": "voice"
                    },
                    {
                        "id": 8,
                        "channel_name": "group chat",
                        "server_id": 3,
                        "channel_type": "2",
                        "channel_cat_name": "voice"
                    }
                ]
            ],
            [
                "coding",
                [
                    {
                        "id": 3,
                        "channel_name": "code help",
                        "server_id": 3,
                        "channel_type": "2",
                        "channel_cat_name": "coding"
                    },
                    {
                        "id": 5,
                        "channel_name": "coding",
                        "server_id": 3,
                        "channel_type": "1",
                        "channel_cat_name": "coding"
                    }
                ]
            ],
            [
                "text",
                [
                    {
                        "id": 4,
                        "channel_name": "general",
                        "server_id": 3,
                        "channel_type": "1",
                        "channel_cat_name": "text"
                    },
                    {
                        "id": 7,
                        "channel_name": "text me",
                        "server_id": 3,
                        "channel_type": "1",
                        "channel_cat_name": "text"
                    },
                    {
                        "id": 14,
                        "channel_name": "Ayce's Circle",
                        "server_id": 3,
                        "channel_type": "1",
                        "channel_cat_name": "text"
                    }
                ]
            ],
            [
                "game chat",
                [
                    {
                        "id": 9,
                        "channel_name": "general",
                        "server_id": 3,
                        "channel_type": "2",
                        "channel_cat_name": "game chat"
                    }
                ]
            ],
            [
                "default",
                [
                    {
                        "id": 10,
                        "channel_name": "text",
                        "server_id": 3,
                        "channel_type": "1",
                        "channel_cat_name": "default"
                    }
                ]
            ]
        ]

        let voice_icon = <div className="def-channel-icon-container" >
            <svg className="icon-speaker" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 
        3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 
        20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 
        3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 
        17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 
        17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 
        14.551 11.002 14 11.002V9.00195Z" aria-hidden="true">
                </path>
            </svg>

        </div>


        let chat_icon = <div className="def-channel-icon-container">
            <svg width="24" height="24" viewBox="0 0 24 24" className="icon-2W8DHg" aria-hidden="true" role="img">
                <path fill="currentColor" fillRule="evenodd"
                    clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001
        17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746
        2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 
        8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914
        3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001
        7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201
        3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824
        8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802
        20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261
        15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325
        20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104
        9H9.41045Z">
                </path>
            </svg>
        </div>



        let channels_Array = Object.values(channels);
        console.log("channels type: ", typeof channels);
        console.log("channels content");
        console.table(channels);
        console.log("channels to array : ", channels_Array);
        console.log("channels to array : ", typeof channels_Array);

        let channel_nav_bar_content = this.selectChannelTypes(channels_Array);

        console.log("channel_nav_bar_content: ");
        console.log(channel_nav_bar_content);
        console.table(channel_nav_bar_content);
        console.log("channel_nav type: ", typeof channel_nav_bar_content)

        let channel_nav_bar_content_array = Object.entries(channel_nav_bar_content);
        console.log("channel_nav_bar_contnet array  = : ", channel_nav_bar_content_array);
        console.table(channel_nav_bar_content_array);

        channel_nav_bar_content_array.map((channelCat, idx) => {
            console.log("channel catergory: ", channelCat[0]);
            channelCat[1].map((channel, channelidx) => {
                console.log("channel name: ", channel);
                console.log("channel name: ", channel.channel_name);

            })
        })


        // return (


        //     <div className="channel-nav-bar">
        //         <div className="channel-nav-bar-container-wrapper">
        //             <div className="channel-nav-bar-top-container">
        //                 <div className="channel-nav-bar-top-container-header">
        //                     <div className="channel-nav-bar-header-content">
        //                         <h1 className="channel-nav-bar-h1">
        //                             server name
        //                         </h1>
        //                         <div className="channel-nav-bar-top-button">

        //                         </div>
        //                         <div className="channel-nav-chevron" >
        //                             <svg width="18" height="18" className="icon-chevron" >
        //                                 <g fill="none" fillRule="evenodd">
        //                                     <path d="M0 0h18v18H0"></path>
        //                                     <path stroke="currentColor" d="M4.5 4.5l9 9" strokeLinecap="round"></path>
        //                                     <path stroke="currentColor" d="M13.5 4.5l-9 9" strokeLinecap="round"></path>
        //                                 </g>
        //                             </svg>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="channel-nav-sep"><div></div></div>
        //             <div className="channel-post-container">
        //                 <div className="channel-unread">
        //                     <div className="channel-unread-top">
        //                         <span className="channel-unread-text"></span>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="channel-nav-scroller">
        //                 {
        //                     channel_nav_bar_content_array.map((channel_category, category_idx) => {



        //                         return (



        //                             <ul className="ul-channels">

        //                                 <li className="channel-li-item-cat" key={category_idx}>
        //                                     <div className="channel-li-icon">
        //                                         <div className="main-channel-content">
        //                                             <svg className="channel-icon-arrow" width="24" height="24" viewBox="0 0 24 24">
        //                                                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41
        //                                          8.59004L6 10L12 16L18 10L16.59 8.59004Z">
        //                                                 </path>
        //                                             </svg>
        //                                             <h2 className="main-channel-content-h2">
        //                                                 <div className="main-channel-h2">{channel_category[0]}</div>
        //                                             </h2>
        //                                         </div>
        //                                         <div className="channel-plus-div" >
        //                                             <button type="button" className="add-channel-button">
        //                                                 <div className="add-channel-button-inner">
        //                                                     <svg className="addButtonIcon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 18 18">
        //                                                         <polygon fillRule="nonzero" fill="currentColor"
        //                                                             points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8">
        //                                                         </polygon>
        //                                                     </svg>
        //                                                 </div>
        //                                             </button>

        //                                         </div>
        //                                     </div>
        //                                 </li>
        //                                 {channel_category[1].map((channel, channelidx) => {
        //                                     console.log("channel name: ", channel);
        //                                     let icon = channel.channel_type === '1' ? chat_icon : voice_icon;

        //                                     return (
        //                                         <li className="default-channel-item" key={channel.id}>
        //                                             <div className="def-channel-wrap">
        //                                                 <div className="def-channel-content">
        //                                                     <Link to={`/testing/`} className="def-channel-a">
        //                                                         {icon}
        //                                                         <div className="default-channel-name-cont">
        //                                                             <div className="default-channel-name">
        //                                                                 {channel.channel_name}
        //                                                             </div>
        //                                                         </div>
        //                                                     </Link>
        //                                                     <div className="child-buttons">
        //                                                         <div className="create-channel-invite-icon-wrapper" >
        //                                                             <svg className="create-channel-invite-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
        //                                                                 <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
        //                                                                 <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 
        //                                             3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z">

        //                                                                 </path>
        //                                                                 <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z">
        //                                                                 </path>
        //                                                             </svg>

        //                                                         </div>
        //                                                         <div className="channel-settings-wrapper" >
        //                                                             <svg className="channel-gear-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
        //                                                                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 
        //                                         9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133
        //                                          12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 
        //                                          12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667
        //                                           5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 
        //                                           3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8
        //                                            10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z">
        //                                                                 </path>
        //                                                             </svg>

        //                                                         </div>
        //                                                         <div className="channel-info-sep"></div>
        //                                                     </div>
        //                                                 </div>
        //                                             </div>
        //                                         </li>

        //                                     )




        //                                 })}




        //                             </ul>
        //                         )


        //                     })
        //                 }
        //                 {/* <ul className="ul-channels">

        //                     <li className="channel-li-item-cat">
        //                         <div className="channel-li-icon">
        //                             <div className="main-channel-content">
        //                                 <svg className="channel-icon-arrow" width="24" height="24" viewBox="0 0 24 24">
        //                                     <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41
        //                                      8.59004L6 10L12 16L18 10L16.59 8.59004Z">
        //                                     </path>
        //                                 </svg>
        //                                 <h2 className="main-channel-content-h2">
        //                                     <div className="main-channel-h2">Text Channels</div>
        //                                 </h2>
        //                             </div>
        //                             <div className="channel-plus-div" >
        //                                 <button type="button" className="add-channel-button">
        //                                     <div className="add-channel-button-inner">
        //                                         <svg className="addButtonIcon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 18 18">
        //                                             <polygon fillRule="nonzero" fill="currentColor"
        //                                                 points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8">
        //                                             </polygon>
        //                                         </svg>
        //                                     </div>
        //                                 </button>

        //                             </div>
        //                         </div>
        //                     </li>

        //                     <li className="default-channel-item">
        //                         <div className="def-channel-wrap">
        //                             <div className="def-channel-content">
        //                                 <Link to={`/testing/`} className="def-channel-a">
        //                                     <div className="def-channel-icon-container">
        //                                         <svg width="24" height="24" viewBox="0 0 24 24" className="icon-2W8DHg" aria-hidden="true" role="img">
        //                                             <path fill="currentColor" fillRule="evenodd"
        //                                                 clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001
        //                                          17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746
        //                                           2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 
        //                                           8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914
        //                                            3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001
        //                                             7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201
        //                                              3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824
        //                                               8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802
        //                                                20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261
        //                                                 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325
        //                                                  20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104
        //                                                   9H9.41045Z">
        //                                             </path>
        //                                         </svg>
        //                                     </div>
        //                                     <div className="default-channel-name-cont">
        //                                         <div className="default-channel-name">
        //                                             insert channel name here
        //                                         </div>
        //                                     </div>
        //                                 </Link>
        //                                 <div className="child-buttons">
        //                                     <div className="create-channel-invite-icon-wrapper" >
        //                                         <svg className="create-channel-invite-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
        //                                             <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
        //                                             <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 
        //                                             3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z">

        //                                             </path>
        //                                             <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z">
        //                                             </path>
        //                                         </svg>

        //                                     </div>
        //                                     <div className="channel-settings-wrapper" >
        //                                         <svg className="channel-gear-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
        //                                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 
        //                                         9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133
        //                                          12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 
        //                                          12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667
        //                                           5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 
        //                                           3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8
        //                                            10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z">
        //                                             </path>
        //                                         </svg>

        //                                     </div>
        //                                     <div className="channel-info-sep"></div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </li>

        //                     <li className="channel-li-item-cat">
        //                         <div className="channel-li-icon">
        //                             <div className="main-channel-content">
        //                                 <svg className="channel-icon-arrow" width="24" height="24" viewBox="0 0 24 24">
        //                                     <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41
        //                                      8.59004L6 10L12 16L18 10L16.59 8.59004Z">
        //                                     </path>
        //                                 </svg>
        //                                 <h2 className="main-channel-content-h2">
        //                                     <div className="main-channel-h2">Voice Channels</div>
        //                                 </h2>
        //                             </div>
        //                             <div className="channel-plus-div" >
        //                                 <button type="button" className="add-channel-button">
        //                                     <div className="add-channel-button-inner">
        //                                         <svg className="addButtonIcon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 18 18">
        //                                             <polygon fillRule="nonzero" fill="currentColor"
        //                                                 points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8">
        //                                             </polygon>
        //                                         </svg>


        //                                     </div>
        //                                 </button>
        //                             </div>
        //                         </div>
        //                     </li>
        //                     <li className="default-channel-item">
        //                         <div className="def-channel-wrap">
        //                             <div className="def-channel-content">
        //                                 <Link to={`/tetsing/`} className="def-channel-a">
        //                                     <div className="def-channel-icon-container" >
        //                                         <svg className="icon-speaker" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
        //                                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 
        //                                     3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 
        //                                     20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 
        //                                     3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 
        //                                     17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 
        //                                     17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 
        //                                     14.551 11.002 14 11.002V9.00195Z" aria-hidden="true">
        //                                             </path>
        //                                         </svg>

        //                                     </div>
        //                                     <div className="default-channel-name-cont">
        //                                         <div className="default-channel-name">
        //                                             insert channel name here
        //                                         </div>
        //                                     </div>
        //                                 </Link>
        //                                 <div className="child-buttons">

        //                                     <div className="create-channel-invite-icon-wrapper" >
        //                                         <svg className="open-chat-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24" fill="none">
        //                                             <path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 
        //                                     17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 
        //                                     20.1925 3 19.198 3H4.79805Z">
        //                                             </path>
        //                                         </svg>

        //                                     </div>
        //                                     <div className="create-channel-invite-icon-wrapper" >

        //                                         <svg className="create-channel-invite-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
        //                                             <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
        //                                             <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 
        //                                             3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z">

        //                                             </path>
        //                                             <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z">
        //                                             </path>
        //                                         </svg>

        //                                     </div>
        //                                     <div className="channel-settings-wrapper" >
        //                                         <svg className="channel-gear-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
        //                                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 
        //                                         9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133
        //                                          12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 
        //                                          12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667
        //                                           5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 
        //                                           3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8
        //                                            10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z">
        //                                             </path>
        //                                         </svg>

        //                                     </div>
        //                                     <div className="channel-info-sep"></div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </li>

        //                 </ul> */}
        //             </div>
        //         </div>


        //     </div>













        // )



        return (


            <div className="channel-nav-bar">
                <div className="channel-nav-bar-container-wrapper">
                    <div className="channel-nav-bar-top-container">
                        <div className="channel-nav-bar-top-container-header">
                            <div className="channel-nav-bar-header-content">
                                <h1 className="channel-nav-bar-h1">
                                    {/* {this.props.server.server_name} */}
                                </h1>
                                <div className="channel-nav-bar-top-button">

                                </div>
                                <div className="channel-nav-chevron" >
                                    <svg width="18" height="18" className="icon-chevron" >
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M0 0h18v18H0"></path>
                                            <path stroke="currentColor" d="M4.5 4.5l9 9" strokeLinecap="round"></path>
                                            <path stroke="currentColor" d="M13.5 4.5l-9 9" strokeLinecap="round"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="channel-nav-sep"><div></div></div>
                    <div className="channel-post-container">
                        <div className="channel-unread">
                            <div className="channel-unread-top">
                                <span className="channel-unread-text"></span>
                            </div>
                        </div>
                    </div>
                    <div className="channel-nav-scroller">
                        {
                            channel_nav_bar_content_array.map((channel_category, category_idx) => {



                                return (



                                    <ul className="ul-channels">

                                        <li className="channel-li-item-cat" key={category_idx}>
                                            <div className="channel-li-icon">
                                                <div className="main-channel-content">
                                                    <svg className="channel-icon-arrow" width="24" height="24" viewBox="0 0 24 24">
                                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41
                                                 8.59004L6 10L12 16L18 10L16.59 8.59004Z">
                                                        </path>
                                                    </svg>
                                                    <h2 className="main-channel-content-h2">
                                                        <div className="main-channel-h2">{channel_category[0]}</div>
                                                    </h2>
                                                </div>
                                                <div className="channel-plus-div" >
                                                    <button type="button" className="add-channel-button">
                                                        <div className="add-channel-button-inner">
                                                            <svg className="addButtonIcon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 18 18">
                                                                <polygon fillRule="nonzero" fill="currentColor"
                                                                    points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8">
                                                                </polygon>
                                                            </svg>
                                                        </div>
                                                    </button>

                                                </div>
                                            </div>
                                        </li>
                                        {channel_category[1].map((channel, channelidx) => {
                                            console.log("channel name: ", channel);
                                            let icon = channel.channel_type === '1' ? chat_icon : voice_icon;

                                            return (
                                                <li className="default-channel-item" key={channel.id}>
                                                    <div className="def-channel-wrap">
                                                        <div className="def-channel-content">
                                                            <Link to={`/testing/`} className="def-channel-a">
                                                                {icon}
                                                                <div className="default-channel-name-cont">
                                                                    <div className="default-channel-name">
                                                                        {channel.channel_name}
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            <div className="child-buttons">
                                                                <div className="create-channel-invite-icon-wrapper" >
                                                                    <svg className="create-channel-invite-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
                                                                        <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
                                                                        <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 
                                                    3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z">

                                                                        </path>
                                                                        <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z">
                                                                        </path>
                                                                    </svg>

                                                                </div>
                                                                <div className="channel-settings-wrapper" >
                                                                    <svg className="channel-gear-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
                                                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 
                                                9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133
                                                 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 
                                                 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667
                                                  5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 
                                                  3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8
                                                   10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z">
                                                                        </path>
                                                                    </svg>

                                                                </div>
                                                                <div className="channel-info-sep"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                            )




                                        })}




                                    </ul>
                                )


                            })
                        }
                        {/* <ul className="ul-channels">

                            <li className="channel-li-item-cat">
                                <div className="channel-li-icon">
                                    <div className="main-channel-content">
                                        <svg className="channel-icon-arrow" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41
                                             8.59004L6 10L12 16L18 10L16.59 8.59004Z">
                                            </path>
                                        </svg>
                                        <h2 className="main-channel-content-h2">
                                            <div className="main-channel-h2">Text Channels</div>
                                        </h2>
                                    </div>
                                    <div className="channel-plus-div" >
                                        <button type="button" className="add-channel-button">
                                            <div className="add-channel-button-inner">
                                                <svg className="addButtonIcon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 18 18">
                                                    <polygon fillRule="nonzero" fill="currentColor"
                                                        points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8">
                                                    </polygon>
                                                </svg>
                                            </div>
                                        </button>

                                    </div>
                                </div>
                            </li>

                            <li className="default-channel-item">
                                <div className="def-channel-wrap">
                                    <div className="def-channel-content">
                                        <Link to={`/testing/`} className="def-channel-a">
                                            <div className="def-channel-icon-container">
                                                <svg width="24" height="24" viewBox="0 0 24 24" className="icon-2W8DHg" aria-hidden="true" role="img">
                                                    <path fill="currentColor" fillRule="evenodd"
                                                        clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001
                                                 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746
                                                  2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 
                                                  8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914
                                                   3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001
                                                    7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201
                                                     3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824
                                                      8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802
                                                       20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261
                                                        15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325
                                                         20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104
                                                          9H9.41045Z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div className="default-channel-name-cont">
                                                <div className="default-channel-name">
                                                    insert channel name here
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="child-buttons">
                                            <div className="create-channel-invite-icon-wrapper" >
                                                <svg className="create-channel-invite-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
                                                    <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
                                                    <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 
                                                    3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z">

                                                    </path>
                                                    <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z">
                                                    </path>
                                                </svg>

                                            </div>
                                            <div className="channel-settings-wrapper" >
                                                <svg className="channel-gear-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
                                                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 
                                                9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133
                                                 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 
                                                 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667
                                                  5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 
                                                  3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8
                                                   10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z">
                                                    </path>
                                                </svg>

                                            </div>
                                            <div className="channel-info-sep"></div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="channel-li-item-cat">
                                <div className="channel-li-icon">
                                    <div className="main-channel-content">
                                        <svg className="channel-icon-arrow" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41
                                             8.59004L6 10L12 16L18 10L16.59 8.59004Z">
                                            </path>
                                        </svg>
                                        <h2 className="main-channel-content-h2">
                                            <div className="main-channel-h2">Voice Channels</div>
                                        </h2>
                                    </div>
                                    <div className="channel-plus-div" >
                                        <button type="button" className="add-channel-button">
                                            <div className="add-channel-button-inner">
                                                <svg className="addButtonIcon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 18 18">
                                                    <polygon fillRule="nonzero" fill="currentColor"
                                                        points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8">
                                                    </polygon>
                                                </svg>


                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li className="default-channel-item">
                                <div className="def-channel-wrap">
                                    <div className="def-channel-content">
                                        <Link to={`/tetsing/`} className="def-channel-a">
                                            <div className="def-channel-icon-container" >
                                                <svg className="icon-speaker" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 
                                            3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 
                                            20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 
                                            3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 
                                            17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 
                                            17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 
                                            14.551 11.002 14 11.002V9.00195Z" aria-hidden="true">
                                                    </path>
                                                </svg>

                                            </div>
                                            <div className="default-channel-name-cont">
                                                <div className="default-channel-name">
                                                    insert channel name here
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="child-buttons">

                                            <div className="create-channel-invite-icon-wrapper" >
                                                <svg className="open-chat-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                    <path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 
                                            17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 
                                            20.1925 3 19.198 3H4.79805Z">
                                                    </path>
                                                </svg>

                                            </div>
                                            <div className="create-channel-invite-icon-wrapper" >

                                                <svg className="create-channel-invite-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
                                                    <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
                                                    <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 
                                                    3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z">

                                                    </path>
                                                    <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z">
                                                    </path>
                                                </svg>

                                            </div>
                                            <div className="channel-settings-wrapper" >
                                                <svg className="channel-gear-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
                                                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 
                                                9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133
                                                 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 
                                                 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667
                                                  5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 
                                                  3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8
                                                   10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z">
                                                    </path>
                                                </svg>

                                            </div>
                                            <div className="channel-info-sep"></div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul> */}
                    </div>
                </div>


            </div>


        )









    }
}

export default TestPage;