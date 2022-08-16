import { connect } from "react-redux";
import { withRouter } from "react-router";


const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session
    }
};