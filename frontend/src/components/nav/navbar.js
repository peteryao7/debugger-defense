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
        return <div className="navbar-container">
            <div className="welcome-message">
              <h1>Welcome, {this.props.currentUser.username}!</h1>
            </div>
            <div className="navbar-title">
              <div>Debugger Defense</div>
            </div>
            <div className="logout-container" onClick={this.logoutUser}>
              <div className="nav-logout">Logout</div>
            </div>
          </div>;
      } else {
        return (
            <div className="navbar-container">
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
            <div className="navbar-title">
                <div>Debugger Defense</div>
            </div>
            </div>
        );
      }
  }

  render() {
      return (
         this.getLinks()
      );
  }
}

export default NavBar;