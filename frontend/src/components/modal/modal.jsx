import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";

import SignupForm from "../session/signup_form_container";
import LoginForm from "../session/login_form_container";
import AboutUs from "../footer/aboutus";

const Modal = ({ modal, closeModal}) => {
  if (!modal) {
    return null;
  }

  let component;
  switch(modal) {
    case "login":
      component = <LoginForm /> 
      break;
    case "signup":
      component = <SignupForm />
      break;
    case "about":
      component = <AboutUs />
      break;
    default:
      return null
  }

  return (
    <div className="modal-background" onClick={closeModal} >
      <span className="modal-close">&times;</span>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
};

const msp = state => {
  return {
    modal: state.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal)