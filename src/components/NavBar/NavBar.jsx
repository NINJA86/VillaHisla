import { NavLink } from 'react-router';
import LogoBar from '../LogoBar/LogoBar';
import HamburgerBtn from '../HamburgerBtn/HamburgerBtn';
import PhoneNum from '../PhoneNum/PhoneNum';

function NavBar() {
  return (
    <nav
      className="flex items-center justify-between
     text-white  h-32 m-0"
    >
      <div className="flex ">
        <LogoBar />
        <ul className="flex items-center gap-12">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                !isActive ? 'text-white opacity-55' : 'text-white'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/properties"
              className={({ isActive }) =>
                !isActive ? 'text-white opacity-55' : 'text-white'
              }
            >
              Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                !isActive ? 'text-white opacity-55' : 'text-white'
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                !isActive ? 'text-white opacity-55' : 'text-white'
              }
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
