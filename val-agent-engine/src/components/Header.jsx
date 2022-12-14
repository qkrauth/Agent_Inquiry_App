import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="top-left">
        <div>
          <Link to="/">
            <img
              classname="logo"
              src="https://i.imgur.com/2fjVdvI.png"
              alt=""
            />
          </Link>
        </div>
        <h1>ValAgent Inquiry</h1>
      </div>
      <nav>
        <Link to="/login">
          <h3>Log in</h3>
        </Link>
        <Link to="/register">
          <h3>Register</h3>
        </Link>
        <h3>Your Team</h3>
      </nav>
    </header>
  );
};

export default Header;
