import React from 'react';
import Logo from '../images/Logo.png'

const Navbar = () => {
  return (
    <header id="HomePageHeader">
      <div className="Links">
        <a href="/">STORE</a>
        <a href="/">TUTORIALS</a>
      </div>
      <div className="CenterLogo">
        <img src={Logo} id="NavBarLogo" />
      </div>
      <div className="Links">
        <a href="/">BLOG</a>
        <a href="/">CONTACT</a>
      </div>
    </header>
  )
}

export default Navbar;