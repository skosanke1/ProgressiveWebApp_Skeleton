import React, { useState } from 'react';
import './MobileNavigatorStyle.css';

function MobileNavigator({ userName }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navBarStyle = {
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
  };

  return (
    <div>
      <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="hamburger"></div>
      </div>
      <div className="left-nav-bar" style={navBarStyle}>
       <div  className="greeting">Hello, {userName}</div >
        <div className="tab">
          <a href="#home">Home</a>
        </div>
        <div className="tab">
          <a href="#products">Products</a>
        </div>
        <div className="tab">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigator;
