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
        <Link to="/auth">
          <h3>Account</h3>
        </Link>
        <Link to="/team">
          <h3>Your Team</h3>
        </Link>
        <Link to="/map">
          <h3>Blueprints</h3>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
