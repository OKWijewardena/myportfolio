import { useState, useEffect } from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar-custom${scrolled ? ' scrolled' : ''}`}>
      <a href="#home" className="nav-logo" onClick={() => handleNavClick('home')}>
        OW<span>.</span>
      </a>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {navItems.map(item => (
          <li key={item.id}>
            <a
              href={item.href}
              className={activeLink === item.id ? 'active' : ''}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-socials" style={{ display: menuOpen ? 'none' : 'flex' }}>
        <a href="https://www.linkedin.com/in/oshan-wijewardena-853995217/" target="_blank" rel="noreferrer">
          <img src={navIcon1} alt="LinkedIn" />
        </a>
        <a href="https://github.com/OKWijewardena" target="_blank" rel="noreferrer">
          <img src={navIcon2} alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/oshanwijewardhane" target="_blank" rel="noreferrer">
          <img src={navIcon3} alt="Instagram" />
        </a>
      </div>

      <div
        className="nav-mobile-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
        <span style={{ opacity: menuOpen ? 0 : 1 }} />
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
      </div>
    </nav>
  );
};