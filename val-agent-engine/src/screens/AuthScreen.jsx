import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";

const AuthScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const body = { username, password };

    const url = "http://localhost:3000";

    axios
      .post(register ? `${url}/register` : `${url}/login`, body)
      .then(({ data }) => {
        authCtx.login(data.token, data.exp, data.userId);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth-area">
      <form onSubmit={submitHandler}>
        <h2>Account Page</h2>
        <input
          type="text"
          placeholder="username:"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password:"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="top-btn">{register ? "Register" : "Login"}</button>
        <button className="bottom-btn" onClick={() => setRegister(!register)}> Need to {register ? "Login" : "Register"}?</button>
      </form>
    </div>
  );
};

export default AuthScreen;
