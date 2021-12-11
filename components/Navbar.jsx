import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const pages = ['home', 'about', 'projects', 'resume'];

  return (
    <nav className="navbar">
      <menu id="navbar_menu" className="row">
        {pages.map((p) => (
          <div className="nav_title" key={p}>
            <a className="nav_link" href={p === 'home' ? '/' : `/${p}`}>{p}</a>
          </div>
        ))}
      </menu>
    </nav>
  );
};

export default Navbar;