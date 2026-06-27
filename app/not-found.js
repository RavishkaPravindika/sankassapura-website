'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-nav" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '8rem', color: 'var(--gold)', fontFamily: 'Playfair Display, serif', lineHeight: 1, marginBottom: '1rem' }}>404</h1>
        <h2 style={{ fontSize: '2.5rem', fontFamily: 'Playfair Display, serif', marginBottom: '1.5rem' }}>Page Not Found</h2>
        <div className="lotus-divider" style={{ margin: '0 auto 2rem' }}><span className="lotus-divider-icon">🪷</span></div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="btn btn--primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
