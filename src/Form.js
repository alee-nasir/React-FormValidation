import { useState } from "react";
import { useForm } from "react-hook-form";

import "./Form.css";

export default function Form() {
  const [userDetails, setUserDetails] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUserDetails(data);
    console.log(data);
  };

  return (
    <div className="container">
      <pre>
        {JSON.stringify(userDetails, undefined, 2) ? <h1>LoggedIn</h1> : ""}
      </pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
            />
            <p>{errors.username?.message}</p>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "This is not a valid email",
                },
              })}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must be more than 5 characters ",
                },
                maxLength: {
                  value: 10,
                  message: "Password cannot exceed more than 10 characters ",
                },
              })}
            />
            <p>{errors.password?.message}</p>
          </div>
          <br />
          <button className="fluid ui button blue ">Submit</button>
        </div>
      </form>
    </div>
  );
}
