import { connect } from "react-redux";
import React from "react";
import Channel from "./channel";



const mSTP =state =>{
    return {
        formType: 'Create Channel',
        errors: state.errors.channel
    }
}

const mDTP = dispatch =>{
    return {
        // formAction: (channel) => dispatch
    }
}


const CreateChannelFormContainer =connect(mSTP,mDTP)(Channel);
export default CreateChannelFormContainer;