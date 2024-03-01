import React from "react";
import "./Navbar.css";
import menuIcon from "../assets 2/menu.png";
import logo from "../assets 2/logo.png";
import jack from "../assets 2/jack.png";
import notification from "../assets 2/notification.png";
import search from "../assets 2/search.png";
import camera from "../assets 2/img1.png";
import burrum from "../assets 2/img2.png";
import { Link } from "react-router-dom";

function Navbar({setSidebar}) {
  return (
      <div className="navbar-main">
        <div className="navbar-left">
          <img src={menuIcon} onClick={() => setSidebar(prev => prev===true?false:true)} id="nav-menu-icon" alt="" />
          <Link to={"/"}><img src={logo} id="nav-logo" alt="" /></Link>
        </div>
        <div className="navbar-center">
          <div className="navbar-input">
            <input type="text" placeholder="Search" />
            <img src={search} id="nav-search" alt="" />
          </div>
        </div>
        <div className="navbar-right">
          <img src={camera} id="nav-camera" alt="" />
          <img src={burrum} id="nav-burrum" alt="" />
          <img src={notification} id="nav-notification" alt="" />
          <img src={jack} id="nav-jack" alt="" />
        </div>
      </div>
  );
}

export default Navbar;
