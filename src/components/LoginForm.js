import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  userChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  passChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  submitter = (event) => {
    event.preventDefault()
    if(!this.state.username || !this.state.password){
      return;
    }
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.userChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.passChange} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.submitter}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
