import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

import NavItems from '../NavItems/NavItems';

import images from '../../constants/images';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app-logo" />
      </div>
      <NavItems classCalled="app__navitems-links" />
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Register</a>
        <div />
        <a href="#login" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {
          toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu color="#fff" className="overlay__close" fontSize={27} onClick={() => setToggleMenu(false)} />
              <NavItems classCalled="app__navitems-smallscreen-links" />
            </div>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
