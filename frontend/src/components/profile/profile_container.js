import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);