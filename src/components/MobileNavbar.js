import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../images/Logo.png'

const MobileNavbar = () => {
  const [menu, setMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setMenu(false);
  };

  const handleClick = (event) => {
    setMenu(true);
    setAnchorEl(event.currentTarget);
  };

  return (
    <header id="MobileHeader">
      <div/>
      <div className="CenterLogo">
        <Link to="/">
          <img src={Logo} id="MobileNavBarLogo" alt="logo" />
        </Link>
      </div>
      <div className="HeaderLinks">
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={menu}
          onClose={handleClose}
        >
          <Link className="MenuLink" to="/">
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>
          <Link className="MenuLink" to="/contact">
            <MenuItem onClick={handleClose}>Contact Page</MenuItem>
          </Link>
        </Menu>
      </div>
    </header>
  )
}

export default MobileNavbar;