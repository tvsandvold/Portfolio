import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Hjem', id: 'hjem' },
    { label: 'Om meg', id: 'om-meg' },
    { label: 'Ferdigheter', id: 'ferdigheter' },
    { label: 'Prosjekter', id: 'prosjekter' },
    { label: 'Erfaring', id: 'erfaring' },
    { label: 'Kontakt', id: 'kontakt' },
  ];

  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box', background: scrolled ? 'rgba(10,10,20,0.95)' : 'transparent', transition: 'all 0.3s ease' }}>
      <span style={{ fontSize: '22px', fontWeight: '800', background: 'linear-gradient(90deg, #f97316, #ec4899, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        TVS
      </span>
      <div style={{ display: 'flex', gap: '28px' }}>
        {links.map(function(link) {
          return (
            <a key={link.id} href={'#' + link.id} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
