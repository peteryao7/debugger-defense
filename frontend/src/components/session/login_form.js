import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors })
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user); 
  }

  renderErrors() {
    if (Object.values(this.state.errors).length === 0) {
      return null
    } else {
      return(
        <div className="login-session-errors">
          <ul>
            {Object.keys(this.state.errors).map((error, i) => (
              <li key={`error-${i}`}>
                {this.state.errors[error]}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="session-modal-box">
        <h1>Proud of your work, huh?</h1>
        <h2>Log in to show it off!</h2>

        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input className="session-input"
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />
              <br />
              <input className="session-input"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <br />
              <input className="session-button" type="submit" value="Submit" />
            </div>
          </form>
          
          {this.renderErrors()}

        </div>
  
      </div>
    );
  }
}

export default withRouter(LoginForm);