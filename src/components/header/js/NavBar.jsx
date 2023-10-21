import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/NavBarStyle.css';
import LanguageSelector from './LanguageSelector';
import { translate } from '../../main/js/Translate';

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
      <Link to="/" className="title" >
        Crypt<span>O</span>
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

      </div>
      <ul className={`menu-list ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            {translate("link_home")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/crypto" onClick={() => setMenuOpen(false)}>
            Šifriraj
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Kontakt
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            O App
          </NavLink>
        </li>
        <br />
        <li>
          <LanguageSelector />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
