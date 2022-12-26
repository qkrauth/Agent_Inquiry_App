import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/authContext";

const Header = () => {
  const authCtx = useContext(AuthContext);

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
        {
          authCtx.token ? (
            <ul>
              <li>
                <Link to="/team">
                  <h3>Your Team</h3>
                </Link>
              </li>
              <li>
                 <Link to="/map">
                  <h3>Blueprints</h3>
                </Link>
              </li>
              <li>
                <button className="logout-button" onClick={() => authCtx.logout()}>Logout</button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/auth">
                  <h3>Account</h3>
                </Link>
              </li>
            </ul>
          )
        }
      </nav>
    </header>
  );
};

export default Header;
