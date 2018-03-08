import React from 'react';
import logo from '../../res/images/logo.jpg';

const Header = () => (
  <div style={{ marginTop: 20 }} className="header">
    <div className="logo">
      <img src={logo} alt="react logo" />
    </div>
    <h1 className="sitename">Park Finder</h1>
  </div>
);

export default Header;
