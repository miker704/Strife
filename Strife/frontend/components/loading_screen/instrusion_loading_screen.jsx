import React from "react";


class IntrusionPreventionLoadingScreen extends React.Component {
    constructor (props) {
        super(props);
        this.loadingMessage = this.props.selectedLoadingMsg;
    }


    componentDidMount () {
        // debugger
        this.props.fetchUser(this.props.currentUserId);
        // this.props.fetchUsersServers(this.props.currentUserId);
        // this.props.fetchUsersDmServers(this.props.currentUserId);
        if (this.props.history.location.pathname !== "/channels/@me") {
            setTimeout(() => {
                this.props.history.push("/channels/@me");
            }, 10000)
        }
    }

    render () {
        return (
            <div className="loading-screen-wrapper" >
                <div className="circle-wrap">
                    <img className="loading-screen-img" alt="loadingimg" />
                </div>

                <h1 className="intrusion-warning">{this.loadingMessage}</h1>
            </div >
        )
    }


}

export default IntrusionPreventionLoadingScreen;