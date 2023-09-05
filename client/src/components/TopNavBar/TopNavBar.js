import React, { useState, useEffect } from 'react';
import logo from '../../logo512.png';
import userPicture from '../../user.png';
import './TopNavBarStyle.css';


function TopNavbar({ userName }) {
  return (
    <div className="top-navbar">
      <div className="left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
      <div className="right">
        <p className="top_greeting">Hello, {userName}</p>
        <img src={userPicture} alt="Profile" className="profile-picture" />
      </div>
    </div>
  );
}

export default TopNavbar;