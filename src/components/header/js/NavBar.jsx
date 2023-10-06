import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/NavBarStyle.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const closeMenu = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <nav ref={navRef} >
      <Link to="/" className="title">
        Crypto
      </Link>
      <div
        className={`menu ${menuOpen ? 'open' : ''}`}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>
      <ul className={`menu-list ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/share" onClick={() => setMenuOpen(false)}>
            Share
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
