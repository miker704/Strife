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
    }

    handleOnChange (e) {
        // return this.setState({channelType:field})
        this.setState({ selected_Option: e.currentTarget.value });

    }
    handlePrivacy () {
        this.setState({ private_Selected: !this.state.private_Selected });

    }
    selectChannelTypes (channels) {
        let channelHash = new Object();

        for (let i of channels) {
            channelHash[i.channel_cat_name] = [];
        }
        for (let i of channels) {
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



// const handlePopupShow = (e) => {
//     let currTop = e.currentTarget.getBoundingClientRect().top;
//     let currLeft = e.currentTarget.getBoundingClientRect().left;
    
//     let windH = window.innerHeight;
//     let windW = window.innerWidth;
//     console.log(`window height = ${windH}`);
//     console.log(`window width = ${windW}`);
//     const realWidth = window.screen.width * window.devicePixelRatio;
//     const realHeight = window.screen.height * window.devicePixelRatio;
//     console.log(`
//       Your screen resolution is: ${realWidth} x ${realHeight}
//       Your screen devicePixelRatio is: ${window.devicePixelRatio}
//       Your screen width is: ${window.screen.width}
//       Your screen height is: ${window.screen.height}`);
//     console.log(`clientBound is  = ${e.currentTarget.getBoundingClientRect()}`);
//     console.table(e.currentTarget.getBoundingClientRect());
//     console.log(`current resolution of bound clients is window.screen.height  = ${window.screen.height * 0.7889}`);
//     console.log(`current resolution of bound clients is window.innerHeight  = ${window.innerHeight * 0.7889}`);
//     console.log(`window.screen.height* 0.7889/1.28 = ${(window.screen.height * 0.7889)/1.28}`);
//     console.log(`window.innerHeight * 0.7889/1.28  = ${(window.innerHeight * 0.7889)/1.28}`);


//     //check if screen is 1920*1080 or 4k (3840*2160) give a range not an  exact as screens alter slightly 
//     // if(realWidth > 3800 && realHeight > 2100){

//     // }

//     if(currTop > ((window.innerHeight*0.7889))){
//         if(realWidth >= 3800 && realHeight >= 2100 ){
//             currTop/= 1.1475;
//         }
//         else{
//             // screen resolution is assumed 1920 * 1080
//             currTop /= 1.28;
//         }
//     }


//     // if (currTop > 542) {
//     //     currTop /= 1.28;
//     // }
//     setPopupTop(currTop);
//     setPopupLeft(currLeft);
//     setShowPopup(!showPopup);
// }



        // if (currTop > 640) {
        //     console.log(`currtop > 640 ${currTop / 3}`);
        //     currTop /= 3;
        //     setPopupTop(currTop);
        // }
        // else if (currTop > 101 && currTop < 639) {
        //     console.log(`currtop >101 and < 639 ${currTop / 2}`);
        //     currTop /= 2;
        //     setPopupTop(currTop);
        // }

        // else if (currTop <= 100) {
        //     console.log(`currtop <= 100px% ${currTop * 0.095}`);
        //     setPopupTop(currTop * 0.095);
        // }
        // else {
        //     console.log(`currtop is normal @ ${currTop}`);
        //     setPopupTop(currTop);
        // }