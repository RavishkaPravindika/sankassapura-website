'use client';
import Link from 'next/link';

export default function ComingSoon() {
  return (
    <div className="pt-nav" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        {/* <div style={{ fontSize: '4rem', marginBottom: '1.5rem', animation: 'float 3s ease-in-out infinite' }}>🏗️</div> */}
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'Playfair Display, serif', marginBottom: '1rem', color: 'var(--gold)', lineHeight: 1.2 }}>
          Coming Soon
        </h1>
        <div className="lotus-divider" style={{ margin: '0 auto 2rem' }}><span className="lotus-divider-icon">🪷</span></div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.15rem', lineHeight: 1.6 }}>
          We are currently working hard to bring this page to you. It will be available very soon. Thank you for your patience!
        </p>
        <Link href="/" className="btn btn--primary">
          Return to Home
        </Link>
      </div>
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
