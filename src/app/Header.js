'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { label: 'OUR OFFERINGS', href: '#' },
  { label: 'GET INSPIRED', href: '#' },
  { label: 'ABOUT', href: '#' },
  { label: 'DESTINATIONS', href: '#' },
  { label: 'BLOG', href: '#' },
  { label: 'CONTACT US', href: '#' },
];

const LOGO_SRC = 'https://cdn.prod.website-files.com/64fba653be6287d23f6f6bf1/685a9cfa8396b05d5c885e5a_fb169eacd119a8e3a243c7bd82ba2557_Logo%20Centered.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClass = ['site-header', scrolled ? 'is-scrolled' : '', menuOpen ? 'is-open' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClass}>
      <div className="header-inner container">
        <a href="/" className="brand" aria-label="Experience Morocco — accueil">
          <img src={LOGO_SRC} alt="Experience Morocco" className="brand-logo" />
        </a>

        <nav className="nav-group nav-right">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className="mobile-menu">
        {LINKS.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
      </div>
    </header>
  );
}
