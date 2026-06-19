'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import SectionWrapper from '@/components/ui/SectionWrapper';

const VALUE_ICONS = {
  compassion: '❤️', wisdom: '🕯️', harmony: '🕊️',
  generosity: '🌸', integrity: '⚖️', community: '🤝',
};
const SERVICE_ICONS = {
  religious: '🛕', education: '📚', counseling: '🙏',
  cultural: '🎭', welfare: '🤲', ceremonies: '🌺',
};
const FACILITY_ICONS = {
  shrine: '🛕', meditation: '🧘', library: '📚',
  hall: '🏛️', garden: '🌳', kitchen: '🍳',
  accommodation: '🏠', classroom: '✏️',
};

const TIMELINE_EVENTS = [
  { year: '1985', icon: '🕊️' },
  { year: '1990', icon: '📋' },
  { year: '1995', icon: '🏠' },
  { year: '2000', icon: '☸️' },
  { year: '2005', icon: '📚' },
  { year: '2010', icon: '🛕' },
  { year: '2015', icon: '🎊' },
  { year: '2020', icon: '💻' },
  { year: '2025', icon: '🌱' },
];

export default function AboutPage() {
  const { t } = useLanguage();
  const values = t('about.values.items');
  const services = t('about.services.items');
  const facilities = t('about.facilities.items');
  const historyEvents = t('history.timeline.events');

  return (
    <div className="pt-nav">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__label">☸ {t('about.hero.label')}</p>
          <h1 className="page-hero__title">{t('about.hero.title')}</h1>
          <p className="page-hero__subtitle">{t('about.hero.subtitle')}</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <SectionWrapper>
            <div className="content-split">
              <div>
                <p className="section-label">{t('about.intro.title')}</p>
                <h2 className="section-title">{t('about.mission.title')}</h2>
                <div className="lotus-divider"><span className="lotus-divider-icon">🪷</span></div>
                <p style={{ marginBottom: '1.25rem' }}>{t('about.intro.p1')}</p>
                <p style={{ marginBottom: '2rem' }}>{t('about.intro.p2')}</p>
                <Link href="/contact" className="btn btn--primary">{t('common.learnMore')}</Link>
              </div>
              <div className="content-image">
                <Image src="/images/about_temple.png" alt="Temple interior" width={600} height={480}
                  style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 12 }} />
              </div>
            </div>
          </SectionWrapper>

          {/* Stats */}
          <SectionWrapper delay={100} style={{ marginTop: '5rem' }}>
            <div className="stats-grid">
              {[
                { number: '1990', label: 'Year Founded' },
                { number: '35+', label: 'Years of Service' },
                { number: '500+', label: 'Families Served' },
                { number: '20+', label: 'Monthly Programs' },
              ].map((s, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-card__number">{s.number}</div>
                  <div className="stat-card__label">{s.label}</div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <SectionWrapper>
            <div className="section-header">
              <p className="section-label">{t('about.mission.label')}</p>
              <h2 className="section-title">{t('about.mission.title')}</h2>
            </div>
          </SectionWrapper>
          <div className="grid--2">
            {[
              { title: t('about.mission.missionTitle'), text: t('about.mission.missionText'), icon: '🎯', color: 'var(--gold-soft)' },
              { title: t('about.mission.visionTitle'), text: t('about.mission.visionText'), icon: '🌟', color: 'var(--saffron-soft)' },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 120}>
                <div style={{
                  padding: '2.5rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  borderTop: '4px solid var(--gold)',
                  boxShadow: 'var(--shadow-md)',
                  height: '100%',
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{item.icon}</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem' }}>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section">
        <div className="container">
          <SectionWrapper>
            <div className="section-header">
              <p className="section-label">{t('about.values.label')}</p>
              <h2 className="section-title">{t('about.values.title')}</h2>
            </div>
          </SectionWrapper>
          <div className="grid--3">
            {Object.entries(values).map(([key, val], i) => (
              <SectionWrapper key={key} delay={i * 70}>
                <div className="value-card">
                  <div className="value-card__icon" aria-hidden="true">{VALUE_ICONS[key]}</div>
                  <h3 className="value-card__title">{val.title}</h3>
                  <p className="value-card__desc">{val.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <SectionWrapper>
            <div className="section-header">
              <p className="section-label">{t('about.services.label')}</p>
              <h2 className="section-title">{t('about.services.title')}</h2>
            </div>
          </SectionWrapper>
          <div className="grid--3">
            {Object.entries(services).map(([key, svc], i) => (
              <SectionWrapper key={key} delay={i * 70}>
                <div className="value-card" style={{ borderLeft: '3px solid var(--gold-border)' }}>
                  <div className="value-card__icon" aria-hidden="true">{SERVICE_ICONS[key]}</div>
                  <h3 className="value-card__title">{svc.title}</h3>
                  <p className="value-card__desc">{svc.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="section">
        <div className="container">
          <SectionWrapper>
            <div className="section-header">
              <p className="section-label">{t('about.facilities.label')}</p>
              <h2 className="section-title">{t('about.facilities.title')}</h2>
            </div>
          </SectionWrapper>
          <div className="grid--4">
            {Object.entries(facilities).map(([key, label], i) => (
              <SectionWrapper key={key} delay={i * 60}>
                <div className="activity-item" style={{ padding: '1.75rem 1rem', minHeight: 120 }}>
                  <span style={{ fontSize: '2rem' }}>{FACILITY_ICONS[key]}</span>
                  <span className="activity-item__label" style={{ textAlign: 'center', fontSize: '0.9rem' }}>{label}</span>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <SectionWrapper>
            <div className="section-header">
              <p className="section-label">{t('about.timeline.label')}</p>
              <h2 className="section-title">{t('about.timeline.title')}</h2>
            </div>
          </SectionWrapper>
          <SectionWrapper delay={100} style={{ maxWidth: 720, margin: '0 auto' }}>
            <div className="timeline">
              {historyEvents.map((ev, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-item__year">{ev.year} &nbsp;{TIMELINE_EVENTS[i]?.icon}</div>
                  <div className="timeline-item__title">{ev.title}</div>
                  <div className="timeline-item__desc">{ev.desc}</div>
                </div>
              ))}
            </div>
          </SectionWrapper>
          <SectionWrapper delay={200} style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/history" className="btn btn--primary">Read Our Full History</Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
