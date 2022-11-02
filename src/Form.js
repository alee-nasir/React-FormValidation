import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="container">
      <form>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <br />
          <button className="fluid ui button blue ">Submit</button>
        </div>
      </form>
    </div>
  );
}
