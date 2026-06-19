'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const QUICK_LINKS = ['home', 'about', 'history', 'theros', 'events', 'gallery', 'donations', 'contact'];
const HREFS = { home: '/', about: '/about', history: '/history', theros: '/theros', events: '/events', gallery: '/gallery', donations: '/donations', contact: '/contact' };

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: 44, height: 44,
                background: 'linear-gradient(135deg, var(--gold), #E6A23C)',
                borderRadius: '50%', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: 'white', fontSize: '1.3rem', flexShrink: 0
              }} aria-hidden="true">☸</div>
              <p className="footer__logo-name">Sankassapura Buddhist Temple</p>
            </div>
            <p className="footer__desc">{t('footer.description')}</p>
            <div className="footer__social" aria-label="Social media links">
              {[
                { icon: 'f', label: 'Facebook', href: '#' },
                { icon: '▶', label: 'YouTube', href: '#' },
                { icon: 'in', label: 'Instagram', href: '#' },
              ].map((s) => (
                <a key={s.label} href={s.href} className="footer__social-btn" aria-label={s.label} rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer__heading">{t('footer.quickLinks')}</h3>
            <ul className="footer__links" role="list">
              {QUICK_LINKS.slice(0, 5).map((key) => (
                <li key={key}>
                  <Link href={HREFS[key]}>{t(`nav.${key}`)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer__heading">{t('footer.services')}</h3>
            <ul className="footer__links" role="list">
              {Object.values(t('footer.services_items')).map((item, i) => (
                <li key={i}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="footer__heading">{t('footer.newsletter')}</h3>
            <p className="footer__desc" style={{ marginBottom: '1.25rem', fontSize: '0.85rem' }}>
              {t('footer.description').slice(0, 80)}…
            </p>
            {subscribed ? (
              <p style={{ color: 'var(--gold)', fontSize: '0.9rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
                ✓ Thank you for subscribing!
              </p>
            ) : (
              <form className="footer__newsletter-form" onSubmit={handleSubscribe} aria-label="Newsletter subscription">
                <input
                  type="email"
                  className="footer__newsletter-input"
                  placeholder={t('footer.newsletterPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className="footer__newsletter-btn">{t('footer.subscribe')}</button>
              </form>
            )}

            {/* Contact snippet */}
            <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--footer-text)', lineHeight: 1.8 }}>
              <p>📍 Musterstraße 42, 12345 Berlin</p>
              <p>📞 +49 30 1234 5678</p>
              <p>✉ info@sankassapura-temple.de</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">{t('footer.copyright')}</p>
          <p className="footer__quote">{t('footer.quote')}</p>
        </div>
      </div>
    </footer>
  );
}
