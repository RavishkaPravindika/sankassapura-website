'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function TherosPage() {
  const { t } = useLanguage();
  const residents = t('theros.residents.monks');
  const [expanded, setExpanded] = useState(null);
  const chiefEdu = t('theros.chief.educationItems');
  const chiefAchv = t('theros.chief.achievementItems');
  const residentImages = [
    '/images/Ariyawansha_Thero.png',
    '/images/Dhammadinna_Thero.png',
    '/images/Ariyananda_Thero.png'
  ];

  return (
    <div className="pt-nav">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__label">🙏 {t('theros.hero.label')}</p>
          <h1 className="page-hero__title">{t('theros.hero.title')}</h1>
          <p className="page-hero__subtitle">{t('theros.hero.subtitle')}</p>
        </div>
      </section>

      {/* CHIEF THERO */}
      <section className="section">
        <div className="container">
          <SectionWrapper>
            <p className="section-label" style={{ textAlign: 'center', justifyContent: 'center' }}>{t('theros.chief.label')}</p>
          </SectionWrapper>
          <SectionWrapper delay={80}>
            <div className="chief-thero-layout">
              {/* Image side */}
              <div className="chief-thero-image-col">
                <Image src="/images/Ariyawimala_Thero.png" alt={t('theros.chief.name')} fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }} />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(46,42,37,0.9), transparent)',
                  padding: '2rem 1.5rem 1.5rem',
                }}>
                  <span className="badge badge--gold">{t('theros.chief.label')}</span>
                </div>
              </div>

              {/* Content side */}
              <div className="chief-thero-content">
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {t('theros.chief.name')}
                </h2>
                <p style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                  {t('theros.chief.title')}
                </p>
                <p style={{ marginBottom: '1rem' }}>{t('theros.chief.bio1')}</p>
                <p style={{ marginBottom: '1rem' }}>{t('theros.chief.bio2')}</p>
                <p style={{ marginBottom: '1.75rem' }}>{t('theros.chief.bio3')}</p>

                <blockquote style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '1.25rem', marginBottom: '2rem' }}>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--text-primary)', marginBottom: 0 }}>
                    {t('theros.chief.quote')}
                  </p>
                </blockquote>

                <div className="chief-thero-edu-grid">
                  <div>
                    <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--gold)' }}>
                      {t('theros.chief.education')}
                    </h4>
                    <ul style={{ listStyle: 'none' }}>
                      {chiefEdu.map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                          <span style={{ color: 'var(--gold)', flexShrink: 0 }}>◆</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--gold)' }}>
                      {t('theros.chief.achievements')}
                    </h4>
                    <ul style={{ listStyle: 'none' }}>
                      {chiefAchv.map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                          <span style={{ color: 'var(--gold)', flexShrink: 0 }}>✦</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* RESIDENT THEROS */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <SectionWrapper>
            <div className="section-header">
              <p className="section-label">{t('theros.residents.label')}</p>
              <h2 className="section-title">{t('theros.residents.title')}</h2>
            </div>
          </SectionWrapper>
          <div className="grid--3">
            {residents.map((monk, i) => (
              <SectionWrapper key={i} delay={i * 100}>
                <div className="card" style={{ cursor: 'pointer' }}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div style={{
                    position: 'relative',
                    background: 'linear-gradient(135deg, var(--gold-soft) 0%, var(--saffron-soft) 100%)',
                    aspectRatio: '4/3',
                    overflow: 'hidden'
                  }}>
                    <Image 
                      src={residentImages[i]} 
                      alt={monk.name} 
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'top' }} 
                    />
                  </div>

                  <div className="card__body">
                    <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.4rem' }}>
                      Resident Thero
                    </p>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', marginBottom: '0.4rem' }}>{monk.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{monk.title}</p>

                    <button
                      style={{ background: 'none', border: 'none', color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                      aria-expanded={expanded === i}
                    >
                      {expanded === i ? 'Show less ↑' : 'Learn more ↓'}
                    </button>

                    {expanded === i && (
                      <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1rem', animation: 'fadeIn 0.3s ease' }}>
                        <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{monk.bio}</p>
                        <p style={{ fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 500 }}>🎓 {monk.education}</p>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>✨ {monk.speciality}</p>
                      </div>
                    )}
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* MESSAGE FROM CHIEF THERO */}
      <section className="section">
        <div className="container">
          <SectionWrapper>
            <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
              <p className="section-label" style={{ justifyContent: 'center' }}>{t('theros.message.label')}</p>
              <h2 className="section-title">{t('theros.message.title')}</h2>
              <div className="lotus-divider"><span className="lotus-divider-icon">🪷</span></div>
              <div style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--gold-border)',
                borderRadius: 12,
                padding: 'clamp(1.5rem, 4vw, 3rem)',
                marginTop: '1rem',
                position: 'relative',
              }}>
                <div style={{ fontSize: '4rem', color: 'var(--gold)', opacity: 0.2, position: 'absolute', top: '1rem', left: '1.5rem', fontFamily: 'serif', lineHeight: 1 }}>"</div>
                <p style={{
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                  lineHeight: 1.9,
                  color: 'var(--text-primary)',
                  marginBottom: '1.5rem',
                }}>
                  {t('theros.message.text')}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold), var(--saffron))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', color: 'white', flexShrink: 0 }}>🙏</div>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 0, fontSize: '0.95rem' }}>{t('theros.chief.shortName')}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>{t('theros.chief.title')}</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
