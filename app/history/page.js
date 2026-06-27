'use client';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import SectionWrapper from '@/components/ui/SectionWrapper';

const MILESTONE_ICONS = ['🕊️', '📋', '🏠', '☸️', '📚', '🛕', '🎊', '💻', '🌱'];

export default function HistoryPage() {
  const { t } = useLanguage();
  const events = t('history.timeline.events');
  const relics = t('history.relics.items');
  const contribs = t('history.community.contributions');

  return (
    <div className="pt-nav">
      {/* PAGE HERO with background */}
      <section style={{ position: 'relative', paddingTop: '9rem', paddingBottom: '6rem', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/history_temple.png" alt="" fill style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(46,42,37,0.72)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
            ☸ {t('history.hero.label')}
          </p>
          <h1 style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>{t('history.hero.title')}</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
            {t('history.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* FOUNDING STORY */}
      <section className="section">
        <div className="container">
          <SectionWrapper>
            <div className="content-split">
              <div>
                <p className="section-label">{t('history.founding.label')}</p>
                <h2 className="section-title">{t('history.founding.title')}</h2>
                <div className="lotus-divider"><span className="lotus-divider-icon">🕊️</span></div>
                <p style={{ marginBottom: '1.25rem' }}>{t('history.founding.p1')}</p>
                <p style={{ marginBottom: '1.25rem' }}>{t('history.founding.p2')}</p>
                <p>{t('history.founding.p3')}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="content-image">
                  <Image src="/images/about_temple.png" alt="Temple founding" width={560} height={340} style={{ objectFit: 'cover', width: '100%', borderRadius: 12 }} />
                </div>
                <div className="highlight-box">
                  <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: 0 }}>
                    "A community united in faith can move mountains — and build temples."
                  </p>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* INTERACTIVE TIMELINE */}
      {/* <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container"> */}
          {/* <SectionWrapper>
            <div className="section-header">
              <p className="section-label">{t('history.timeline.label')}</p>
              <h2 className="section-title">{t('history.timeline.title')}</h2>
            </div>
          </SectionWrapper> */}

          {/* Alternating timeline */}
          {/* <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}> */}
            {/* Centre line */}
            {/* <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, var(--gold), transparent)', transform: 'translateX(-50%)', display: 'none' }} className="timeline-centre-line" />

            {events.map((ev, i) => {
              const isLeft = i % 2 === 0;
              return (
                <SectionWrapper key={i} delay={i * 80}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    gap: '1.5rem',
                    alignItems: 'center',
                    marginBottom: '2rem',
                  }}> */}
                    {/* Left side */}
                    {/* {isLeft ? (
                      <div style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: 10,
                        padding: '1.5rem',
                        boxShadow: 'var(--shadow-sm)',
                        borderLeft: '4px solid var(--gold)',
                        transition: 'all 0.3s ease',
                      }}>
                        <div className="timeline-item__year" style={{ marginBottom: '0.5rem' }}>{ev.year} {MILESTONE_ICONS[i]}</div>
                        <div className="timeline-item__title" style={{ marginBottom: '0.5rem' }}>{ev.title}</div>
                        <div className="timeline-item__desc">{ev.desc}</div>
                      </div>
                    ) : <div />} */}

                    {/* Centre dot */}
                    {/* <div style={{
                      width: 48, height: 48,
                      background: 'linear-gradient(135deg, var(--gold), var(--saffron))',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.2rem', flexShrink: 0,
                      boxShadow: 'var(--shadow-gold)',
                      zIndex: 1,
                    }}>
                      {MILESTONE_ICONS[i]}
                    </div> */}

                    {/* Right side */}
                    {/* {!isLeft ? (
                      <div style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: 10,
                        padding: '1.5rem',
                        boxShadow: 'var(--shadow-sm)',
                        borderRight: '4px solid var(--gold)',
                      }}>
                        <div className="timeline-item__year" style={{ marginBottom: '0.5rem' }}>{ev.year} {MILESTONE_ICONS[i]}</div>
                        <div className="timeline-item__title" style={{ marginBottom: '0.5rem' }}>{ev.title}</div>
                        <div className="timeline-item__desc">{ev.desc}</div>
                      </div>
                    ) : <div />}
                  </div>
                </SectionWrapper>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* SACRED RELICS */}
      <section className="section">
        <div className="container">
          <SectionWrapper>
            <div className="section-header">
              <p className="section-label">{t('history.relics.label')}</p>
              <h2 className="section-title">{t('history.relics.title')}</h2>
            </div>
          </SectionWrapper>
          <div className="grid--2">
            {relics.map((relic, i) => (
              <SectionWrapper key={i} delay={i * 80}>
                <div style={{
                  display: 'flex',
                  gap: '1.25rem',
                  padding: '1.75rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  transition: 'all 0.3s ease',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <div style={{
                    width: 52, height: 52, flexShrink: 0,
                    background: 'var(--gold-soft)',
                    border: '1px solid var(--gold-border)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem',
                  }}>
                    {['🛕', '🌳', '📜', '🔔'][i]}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', marginBottom: '0.5rem' }}>{relic.title}</h3>
                    <p style={{ fontSize: '0.9rem' }}>{relic.desc}</p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <SectionWrapper>
            <div className="content-split">
              <div>
                <p className="section-label">{t('history.community.label')}</p>
                <h2 className="section-title">{t('history.community.title')}</h2>
                <div className="lotus-divider"><span className="lotus-divider-icon">🌸</span></div>
                <p style={{ marginBottom: '2rem' }}>{t('history.community.p1')}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {contribs.map((c, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      <span style={{ color: 'var(--gold)', marginTop: '0.1rem', flexShrink: 0 }}>✦</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="content-image">
                  <Image src="/images/gallery_ceremony.png" alt="Temple ceremony" width={560} height={380} style={{ objectFit: 'cover', width: '100%', borderRadius: 12 }} />
                </div>
                <div className="content-image">
                  <Image src="/images/gallery_vesak.png" alt="Vesak festival" width={560} height={240} style={{ objectFit: 'cover', width: '100%', borderRadius: 12 }} />
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
