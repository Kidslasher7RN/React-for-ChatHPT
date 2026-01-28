import {useContext} from "react";
import {userState} from "../context/userState";
import "./Navbar.css";

const Navbar = () => {
  const {userAccount, isOnline} = useContext(userState);

  return (
    <nav id="navbar">
      <div className="nav-profile">
        <p>{userAccount}</p>
        <small>{isOnline}</small>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Order</li>
      </ul>
    </nav>
  );
};

export default Navbar;
