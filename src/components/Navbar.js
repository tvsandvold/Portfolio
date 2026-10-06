import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    { label: 'Hjem', id: 'hjem' },
    { label: 'Om meg', id: 'om-meg' },
    { label: 'Ferdigheter', id: 'ferdigheter' },
    { label: 'Prosjekter', id: 'prosjekter' },
    { label: 'Erfaring', id: 'erfaring' },
    { label: 'Kontakt', id: 'kontakt' },
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className={`navbar ${scrolled || menuOpen ? 'navbar-background' : ''}`}>
      <a href="#hjem" className="navbar-logo" onClick={closeMenu}>
        TVS
      </a>

      <div className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
        {links.map(function(link) {
          return (
            <a
              key={link.id}
              href={'#' + link.id}
              className="navbar-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      <button
        className="navbar-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Åpne navigasjonsmeny"
        aria-expanded={menuOpen}
      >
        {menuOpen ? 'Lukk' : 'Meny'}
      </button>
    </nav>
  );
}