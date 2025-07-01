import React from 'react';
function Logo() {
  return (
    <div className="flex ">
      <div className="flex items-center pr-10 gap-2">
        <img className="size-10" src="img/logo.png" alt="" />
        <h1>Real Estate</h1>
      </div>
      <ul className="flex items-center gap-7">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/'}>Properties</Link>
        </li>
        <li>
          <Link to={'/'}>About Us</Link>
        </li>
        <li>
          <Link to={'/'}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}
export default Logo;
