import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    // this.history = props.history;
    this.state = {
      emailId: "",
      password: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ ...this.state, [name]: value });
  };

  //   Login using API
  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://guvi-movie-ticket-booking.herokuapp.com/users/login",
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailId: this.state.emailId,
          password: this.state.password,
        }),
      }
    );
    const data = await response.json();

    // Redirect to movies page if log in is successfull
    if (data.success === true) {
      this.props.history.push("/home");
    }

    // Redirect to login page if log in failed
    else {
      alert(data.message);
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Log In</h3>

        {/* Get email ID from user */}
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="emailId"
            className="form-control"
            placeholder="Enter email"
            value={this.state.task}
            onChange={this.handleChange}
            required
          ></input>
        </div>

        {/* Get password from user */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          ></input>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    );
  }
}

export default Login;
