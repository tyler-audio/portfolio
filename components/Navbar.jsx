import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const pages = ['home', 'about', 'projects', 'resume'];

  return (
    <nav className="navbar" id="navbar">
      <ul id="navbar_ul">
        {pages.map((p) => (
          <h3>
            <Link href={p === 'home' ? '/' : `/${p}`}>
              <a className="nav_link">{p}</a>
            </Link>
          </h3>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;