import React from "react";


class DeletedServerLoadingScreen extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        if (this.props.history.location.pathname !== "/$/channels/@me") {
            setTimeout(() => {
                this.props.history.push("/$/channels/@me");
            }, 5000)
        }
    }
    render () {
        return (
            <div className="loading-screen-wrapper">
                <div className="circle-wrap">
                    <img className="loading-screen-img" alt="loadingimg" />
                    <div className="shiny-button-container">
                         <div className="shiny-button-flex">
                         </div>
                     </div>
                </div>
                <h1 className="loading-screen-img-h2">SERVER HAS BEEN DELETED TAKING YOU HOME</h1>
            </div>
        )
    }

}

export default DeletedServerLoadingScreen;