import React from "react";
import "./navBra.css";
import Logo from './../../assets/japanese-food.png'

const NavBar = () => {
  return (
    <div className="navMain">
      <div className="navLinkRapper">
        <div className="logoCont">
          <img src={Logo} alt="Logo" />
          <h1>Bistro Bliss</h1>
        </div>
        <div className="navLinkCont">
          <ul>
            <li>
              <a  className="active" href="">Home</a>
            </li>
            <li>
              <a  href="">About</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Page</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="bookRap">
          <button>Book A Table</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
