import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUser = event => {
    this.setState({username: event.target.value})
  }
  
  handlePass = event => {
    this.setState({password: event.target.value})
  }

  handleLogin = event => {
    event.preventDefault();

    if(this.state.username != '' & this.state.password != '') {
      this.props.handleLogin(this.state)
    }


  }



  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
          </label>
          <input id="username" name="username" type="text" onChange={this.handleUser} value={this.state.username}/>
        </div>
        <div>
          <label>
            Password
          </label>
        <input id="password" name="password" type="password" onChange={this.handlePass} value={this.state.password}/>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}



export default LoginForm;
