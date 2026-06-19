'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import SectionWrapper from '@/components/ui/SectionWrapper';

function AnimatedProgress({ target, raised }) {
  const pct = Math.min(Math.round((raised / target) * 100), 100);
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setWidth(pct); observer.unobserve(el); }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <div ref={ref} className="progress-bar">
      <div className="progress-bar__fill" style={{ width: `${width}%` }} />
    </div>
  );
}

export default function DonationsPage() {
  const { t } = useLanguage();
  const projects = t('donations.projects.items');
  const breakdown = t('donations.transparency.breakdown.items');
  const ways = t('donations.ways');
  const [donatingTo, setDonatingTo] = useState(null);

  return (
    <div className="pt-nav">
      {/* PAGE HERO with background */}
      <section style={{ position: 'relative', paddingTop: '9rem', paddingBottom: '6rem', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/donations_section.png" alt="" fill style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(22,19,16,0.75)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ display: 'inline-flex', gap: '0.5rem', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', alignItems: 'center' }}>
            🪔 {t('donations.hero.label')}
          </p>
          <h1 style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>{t('donations.hero.title')}</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: 620, margin: '0 auto 2.5rem' }}>
            {t('donations.hero.subtitle')}
          </p>
          <a href="#donate-now" className="btn btn--primary btn--lg">🙏 Offer Dana Now</a>
        </div>
      </section>

      {/* WHY DANA */}
      <section className="section">
        <div className="container">
          <SectionWrapper>
            <div className="content-split">
              <div>
                <p className="section-label">{t('donations.why.label')}</p>
                <h2 className="section-title">{t('donations.why.title')}</h2>
                <div className="lotus-divider"><span className="lotus-divider-icon">🌸</span></div>
                <p style={{ marginBottom: '1.25rem' }}>{t('donations.why.p1')}</p>
                <p style={{ marginBottom: '2rem' }}>{t('donations.why.p2')}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {['🛕 Temple Maintenance', '🧘 Monks\' Requisites', '📚 Dhamma Education', '🤲 Community Welfare'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="content-image">
                <Image src="/images/lotus_hero.png" alt="Lotus flower symbolising Dana" width={560} height={420}
                  style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 12 }} />
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <SectionWrapper>
            <div className="section-header">
              <p className="section-label">{t('donations.projects.label')}</p>
              <h2 className="section-title">{t('donations.projects.title')}</h2>
            </div>
          </SectionWrapper>
          <div className="grid--3" style={{ marginBottom: '1rem' }}>
            {projects.map((proj, i) => {
              const pct = Math.min(Math.round((proj.raised / proj.target) * 100), 100);
              return (
                <SectionWrapper key={i} delay={i * 80}>
                  <div className="project-card" style={{ height: '100%' }}>
                    <h3 className="project-card__title">{proj.title}</h3>
                    <p className="project-card__desc">{proj.desc}</p>
                    <AnimatedProgress target={proj.target} raised={proj.raised} />
                    <div className="project-card__amounts">
                      <span className="project-card__raised">€{proj.raised.toLocaleString()} raised</span>
                      <span className="project-card__target">Goal: €{proj.target.toLocaleString()}</span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '1rem' }}>{pct}% complete</p>
                    <button
                      className="btn btn--secondary btn--sm w-full"
                      onClick={() => setDonatingTo(proj.title)}
                    >Support This Project</button>
                  </div>
                </SectionWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW TO DONATE */}
      <section id="donate-now" className="section">
        <div className="container">
          <SectionWrapper>
            <div className="section-header">
              <p className="section-label">{ways.label}</p>
              <h2 className="section-title">{ways.title}</h2>
            </div>
          </SectionWrapper>
          <div className="grid--2">
            {/* Bank Transfer */}
            <SectionWrapper delay={0}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '2rem', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--gold)' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ width: 48, height: 48, background: 'var(--gold-soft)', border: '1px solid var(--gold-border)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🏦</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem' }}>{ways.bank.title}</h3>
                </div>
                <div className="bank-details">
                  {[
                    { label: ways.bank.accountName, value: 'Sankassapura Buddhist Temple e.V.' },
                    { label: ways.bank.bankName, value: 'Sparkasse Berlin' },
                    { label: ways.bank.iban, value: 'DE89 1002 0030 1234 5678 90' },
                    { label: ways.bank.bic, value: 'BELADEBEXXX' },
                    { label: ways.bank.reference, value: ways.bank.referenceValue },
                  ].map((row, i) => (
                    <div key={i} className="bank-details__row">
                      <span className="bank-details__label">{row.label}</span>
                      <span className="bank-details__value">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionWrapper>

            {/* In Person + Online */}
            <SectionWrapper delay={120}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '2rem', boxShadow: 'var(--shadow-sm)', flex: 1, borderTop: '4px solid var(--saffron)' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ width: 48, height: 48, background: 'var(--saffron-soft)', border: '1px solid rgba(230,162,60,0.3)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🙏</div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem' }}>{ways.cash.title}</h3>
                  </div>
                  <p>{ways.cash.desc}</p>
                  <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--bg-elevated)', borderRadius: 8 }}>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>🕐 Temple open daily 6 AM – 9 PM</p>
                  </div>
                </div>
                <div className="highlight-box">
                  <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    "Generosity is the virtue that produces peace."
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>— The Buddha</p>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <SectionWrapper>
            <div className="content-split">
              <div>
                <p className="section-label">{t('donations.transparency.label')}</p>
                <h2 className="section-title">{t('donations.transparency.title')}</h2>
                <div className="lotus-divider"><span className="lotus-divider-icon">⚖️</span></div>
                <p style={{ marginBottom: '2rem' }}>{t('donations.transparency.p1')}</p>
                <a href="#" className="btn btn--secondary">Download 2024 Annual Report</a>
              </div>
              <div>
                <h4 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                  {t('donations.transparency.breakdown.title')}
                </h4>
                {breakdown.map((item, i) => (
                  <div key={i} className="breakdown-item">
                    <span className="breakdown-item__label">{item.label}</span>
                    <div className="breakdown-item__bar">
                      <div className="breakdown-item__fill" style={{ width: `${item.percent}%` }} />
                    </div>
                    <span className="breakdown-item__percent">{item.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Donation modal */}
      {donatingTo && (
        <div className="lightbox" onClick={() => setDonatingTo(null)} role="dialog" aria-modal="true">
          <div
            style={{ background: 'var(--bg-card)', borderRadius: 16, padding: '2.5rem', maxWidth: 480, width: '90vw', position: 'relative', animation: 'fadeInUp 0.3s ease' }}
            onClick={e => e.stopPropagation()}
          >
            <button className="lightbox__close" onClick={() => setDonatingTo(null)}>✕</button>
            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '0.5rem' }}>Support: {donatingTo}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Please use bank transfer or visit the temple to donate to this specific project.
            </p>
            <div className="bank-details">
              <div className="bank-details__row">
                <span className="bank-details__label">Reference</span>
                <span className="bank-details__value">Dana – {donatingTo}</span>
              </div>
              <div className="bank-details__row">
                <span className="bank-details__label">IBAN</span>
                <span className="bank-details__value">DE89 1002 0030 1234 5678 90</span>
              </div>
            </div>
            <button className="btn btn--ghost w-full" style={{ marginTop: '1.5rem' }} onClick={() => setDonatingTo(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
