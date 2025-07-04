import React from 'react';
import { NavLink } from 'react-router';
import LogoBar from '../LogoBar/LogoBar';
import HamburgerBtn from '../HamburgerBtn/HamburgerBtn';
import PhoneNum from '../PhoneNum/PhoneNum';

function NavBar({ scrolled }) {
  const getLinkClass = (isActive) => {
    if (isActive) return 'font-semibold border-b-2 border-current';
    return scrolled
      ? 'text-black/70 hover:text-black'
      : 'text-white/80 hover:text-white';
  };

  return (
    <nav className="flex items-center justify-between w-full px-4 h-32 m-0">
      <div className="flex">
        <LogoBar />
        <ul className="flex items-center gap-12 ml-10">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => getLinkClass(isActive)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/properties"
              className={({ isActive }) => getLinkClass(isActive)}
            >
              Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => getLinkClass(isActive)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => getLinkClass(isActive)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-3.5">
        <PhoneNum />
        <HamburgerBtn openNav={() => {}} />
      </div>
    </nav>
  );
}

export default NavBar;
