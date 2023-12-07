
import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" activeClassName="">
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
