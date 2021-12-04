import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const pages = ['home', 'about', 'projects', 'resume'];

  return (
    <nav className="navbar">
      <ul id="navbar_ul" className="row">
        {pages.map((p) => (
          <h3 className="nav_title" key={p}>
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