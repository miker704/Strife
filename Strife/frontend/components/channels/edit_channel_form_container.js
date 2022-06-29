import { connect } from "react-redux";
import React from "react";
import Channel from "./channel";



const mSTP =state =>{
    return {
        formType: 'Edit Channel',
        errors: state.errors.channel
    }
}

const mDTP = dispatch =>{
    return {

    }
}

const EditChannelFormContainer =connect(mSTP,mDTP)(Channel);
export default EditChannelFormContainer;