import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <ul id="navbar_ul">
        <a className="nav_anchor" href="#top">HOME</a>
        <a className="nav_anchor" href="#about">ABOUT ME</a>
        <a className="nav_anchor" href="#apps">PROJECTS</a>
        {/* <a></a> */}
      </ul>
    </nav>
  );
};

export default Navbar;