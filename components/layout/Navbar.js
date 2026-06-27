'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';

const NAV_LINKS = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'history', href: '/history' },
  { key: 'theros', href: '/theros' },
  { key: 'events', href: '/events' },
  { key: 'gallery', href: '/gallery' },
  { key: 'donations', href: '/donations' },
  { key: 'contact', href: '/contact' },
];

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'si', label: 'සිං' },
  { code: 'de', label: 'DE' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container navbar__inner">
          {/* Logo */}
          <Link href="/" className="navbar__logo" aria-label="Sankassapura Sri Sambuddharaja Buddhist Mansion - Home">
            <div className='logo'>
              <img src="/images/sankassapura_logo.png" alt="Sankassapura Sri Sambuddharaja Buddhist Mansion" />
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Sankassapura Sri Sambuddharaja</span>
              <span className="navbar__logo-subtitle">Buddhist Mansion</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="navbar__nav" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="navbar__controls">
            {/* Language Switcher */}
            <div className="lang-switcher" role="group" aria-label="Language selection">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  className={`lang-btn ${language === lang.code ? 'active' : ''}`}
                  onClick={() => setLanguage(lang.code)}
                  aria-pressed={language === lang.code}
                  aria-label={`Switch to ${lang.code === 'en' ? 'English' : lang.code === 'si' ? 'Sinhala' : 'German'}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {/* Hamburger */}
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-menu__nav" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
                aria-current={pathname === link.href ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {t(`nav.${link.key}`)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-menu__controls">
          <div className="lang-switcher" role="group" aria-label="Language selection">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                className={`lang-btn ${language === lang.code ? 'active' : ''}`}
                onClick={() => setLanguage(lang.code)}
                aria-pressed={language === lang.code}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </>
  );
}
