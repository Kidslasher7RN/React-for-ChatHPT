import {useContext} from "react";
import {userState} from "../context/userState";
import "./Navbar.css";

import {Link} from "react-router-dom";
const Navbar = () => {
  const {userAccount, isOnline} = useContext(userState);

  return (
    <nav id="navbar">
      <div className="nav-profile">
        <p>{userAccount}</p>
        <small>{isOnline}</small>
      </div>

      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          {" "}
          <li>About</li>
        </Link>

        <li>Order</li>
      </ul>
    </nav>
  );
};

export default Navbar;
