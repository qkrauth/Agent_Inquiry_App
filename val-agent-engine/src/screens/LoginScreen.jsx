import React from "react";

const LoginScreen = () => {
  return (
    <div className="login-area">
      <form>
        <h2>Log in</h2>
        <input type="text" placeholder="username:" />
        <input type="text" placeholder="password:" />
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default LoginScreen;
