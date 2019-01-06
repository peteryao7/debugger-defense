import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from "../../actions/modal_actions";

import NavBar from './navbar';

const mapStateToProps = state => {
  debugger;
  return {
  loggedIn: state.session.isAuthenticated
  }
};

// const mapDispatchToProps = dispatch => ({
//   openModal: (modal) => dispatch(openModal(modal)),
//   logout: () => logout()
// })

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);