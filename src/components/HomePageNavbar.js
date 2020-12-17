import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/Logo.png'

const HomePageNavbar = () => {
  return (
    <header id="HomePageHeader">
      <div className="HeaderLinks">
        <Link className="HomePageHeaderLinks" to="/">STORE</Link>
        <Link className="HomePageHeaderLinks" to="/">TUTORIALS</Link>
      </div>
      <div className="CenterLogo">
        <Link to="/">
          <img src={Logo} id="NavBarLogo" alt="logo" />
        </Link>
      </div>
      <div className="HeaderLinks">
        <Link className="HomePageHeaderLinks" to="/">BLOG</Link>
        <Link className="HomePageHeaderLinks" to="/contact">CONTACT</Link>
      </div>
    </header>
  )
}

export default HomePageNavbar;