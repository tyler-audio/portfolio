import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const pages = ['about', 'projects', 'contact', 'resume'];

  return (
    <nav className="navbar" id="navbar">
      <ul id="navbar_ul">
        {pages.map((p) => (
          <h3>
            <Link href={`/${p}`}>
              <a>{p}</a>
            </Link>
          </h3>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;