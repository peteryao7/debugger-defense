import React from 'react';

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
                <h1>Welcome, {this.props.currentUser.username}!</h1>
                <div onClick={this.logoutUser}>Logout</div>
            </div>
        );
      } else {
        return (
            <div className="navbar-sisu">
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
            {this.getLinks()}
            <div className="navbar-title">
                  <div>Debugger Defense</div>
            </div>
        </div>
      );
  }
}

export default NavBar;