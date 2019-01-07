import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className="navbar-sisu-outer">
                <div className="nav-signup"
                    onClick={() => this.props.openModal("signup")}>
                    Signup
               </div>
                <div className="nav-login"
                    onClick={() => this.props.openModal("login")}>
                    Login
               </div>
            </div>
        );
      }
  }

  render() {
      return (
        <div className="navbar-container">
            <div className="navbar-title">Debugger Defense</div>
            <div className="navbar-sisu-inner">{this.getLinks()}</div>
        </div>
      );
  }
}

export default NavBar;