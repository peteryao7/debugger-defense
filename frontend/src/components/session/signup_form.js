import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history)
      .then( () => this.props.closeModal()); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-modal-box signup-modal-box">
        <h1>Want to make a name for yourself?</h1>
        <h2>Create an account!</h2>

        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <br />
              <input className="session-input"
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
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
              <input className="session-input"
                type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
              <br />
              <input className="session-button" type="submit" value="Submit" />
              {this.renderErrors()}
            </div>
          </form>
        </div>
        
      </div>
    );
  }
}

export default withRouter(SignupForm);