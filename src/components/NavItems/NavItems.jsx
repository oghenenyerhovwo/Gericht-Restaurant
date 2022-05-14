import React from 'react';
import './NavItems.css';

function NavItems({ classCalled }) {
  return (
    <ul className={classCalled}>
      <li className="p__opensans"><a href="#home">Home</a> </li>
      <li className="p__opensans"><a href="#about">About</a> </li>
      <li className="p__opensans"><a href="#menu">Menu</a> </li>
      <li className="p__opensans"><a href="#awards">Awards</a> </li>
      <li className="p__opensans"><a href="#contact">Contact</a> </li>
    </ul>
  );
}

export default NavItems;
