'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { useTheme } from '@/context/ThemeContext';

const UPCOMING_EVENTS = [
  { day: '29', month: 'Jul', category: 'Poya Day', title: 'Esala Full Moon Poya Day', time: '6:00 AM', venue: 'Main Shrine Hall' },
];

const ACTIVITIES = [
  { icon: '🧘', key: 'meditation' },
  { icon: '🌕', key: 'poya' },
  { icon: '📿', key: 'sil' },
  { icon: '🙏', key: 'dhamma' },
  { icon: '🌳', key: 'bodhi' },
  { icon: '📢', key: 'pirith' },
  { icon: '🍚', key: 'dansal' },
  { icon: '📚', key: 'children' },
];

const GALLERY_IMAGES = [
  { src: '/images/Bodhi_tree.JPG', alt: 'Temple exterior' },
  { src: '/images/S_Mansion.JPG', alt: 'Vesak festival' },
  { src: '/images/Mansion_wide1.JPG', alt: 'Ceremony' },
  { src: '/images/Statue1.JPG', alt: 'Meditation program' },
  { src: '/images/Statue2.JPG', alt: 'Monk under Bodhi tree' },
  { src: '/images/Statue3.JPG', alt: 'Temple offerings' },
];

export default function HomePage() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="hero" aria-label="Welcome hero section">
        <div className="hero__bg">
          {/* Light mode image — hidden in dark mode via CSS */}
          <Image
            src="/images/hero_light.png"
            alt="Sankassapura Sri Sambuddharaja Buddhist Mansion at sunrise"
            fill
            priority
            className="hero__bg-img hero__bg-img--light"
            style={{ objectFit: 'cover', objectPosition: 'right top' }}
          />
          {/* Dark mode image — hidden in light mode via CSS */}
          <Image
            src="/images/hero_dark.png"
            alt="Sankassapura Buddha statue in meditation"
            fill
            priority
            className="hero__bg-img hero__bg-img--dark"
            style={{ objectFit: 'cover', objectPosition: 'right center' }}
          />
        </div>
        <div className="hero__overlay" aria-hidden="true" />
        <div className="container">
          <div className="hero__content">
            <div className="hero__label">☸ &nbsp; {t('hero.label')} &nbsp; ☸</div>
            <p className="hero__welcome">{t('hero.welcome')}</p>
            <h1 className="hero__title">
              <span className="hero__title-line">{t('hero.templeName1')}</span>
              <span className="hero__title-line">{t('hero.templeName2')}</span>
              <span className="hero__title-line">{t('hero.templeName3')}</span>
            </h1>
            <p className="hero__tagline">{t('hero.tagline')}</p>
            <blockquote className="hero__quote">
              <p>{t('hero.quote')}</p>
              <cite>{t('hero.quoteAuthor')}</cite>
            </blockquote>
            <div className="hero__ctas">
              <Link href="/about" className="btn btn--primary btn--lg">{t('hero.cta1')}</Link>
              <Link href="/contact" className="btn btn--secondary btn--lg">{t('hero.cta2')}</Link>
            </div>
          </div>
        </div>
        <div className="hero__scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ── 2. ABOUT PREVIEW ────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <SectionWrapper>
            <div className="content-split">
              <div>
                <p className="section-label">{t('aboutPreview.sectionLabel')}</p>
                <h2 className="section-title">{t('aboutPreview.title')}</h2>
                <div className="lotus-divider"><span className="lotus-divider-icon">🪷</span></div>
                <p style={{ marginBottom: '2rem' }}>{t('aboutPreview.description1')}</p>
                <p style={{ marginBottom: '2rem' }}>{t('aboutPreview.description2')}</p>
                <Link href="/about" className="btn btn--primary">{t('aboutPreview.learnMore')}</Link>
              </div>
              <div className="content-image">
                <Image 
                  src={theme === 'dark' ? "/images/Main_Statue_dark.png" : "/images/Main_Statue_light.jpeg"} 
                  alt="Main Statue" 
                  width={600} 
                  height={450} 
                  style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 12 }} 
                />
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={100} style={{ marginTop: '4rem' }}>
            <div className="stats-grid">
              {[
                { number: '1908', label: t('aboutPreview.stats.founded') },
                { number: '4', label: t('aboutPreview.stats.monks') },
                { number: '5+', label: t('aboutPreview.stats.programs') },
                { number: '2000+', label: t('aboutPreview.stats.devotees') },
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

      {/* ── 3. THEROS PREVIEW ───────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <SectionWrapper>
            <div className="section-header">
              <p className="section-label">{t('therosPreview.sectionLabel')}</p>
              <h2 className="section-title">{t('therosPreview.title')}</h2>
            </div>
          </SectionWrapper>
          <div className="grid--3">
            {[
              { name: 'Ven. Ariya Wimala Thissa Thero', role: t('therosPreview.chiefThero'), img: '/images/Ariyawimala_Thero.png', delay: 0 },
              { name: 'Ven. Ariya Wansha Thero', role: t('therosPreview.residentThero'), img: '/images/Ariyawansha_Thero.png', delay: 100 },
              { name: 'Ven. DhammaDinna Thero', role: t('therosPreview.residentThero'), img: '/images/Dhammadinna_Thero.png', delay: 200 },
            ].map((thero, i) => (
              <SectionWrapper key={i} delay={thero.delay}>
                <div className="thero-card">
                  {thero.img ? (
                    <Image src={thero.img} alt={thero.name} width={400} height={533} className="thero-card__image" style={{ objectFit: 'cover', objectPosition: 'top' }} />
                  ) : (
                    <div className="thero-card__image-placeholder">🧘</div>
                  )}
                  <div className="thero-card__body">
                    <div className="thero-card__role">{thero.role}</div>
                    <h3 className="thero-card__name">{thero.name}</h3>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
          <SectionWrapper delay={300} style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/theros" className="btn btn--secondary">{t('therosPreview.viewAll')}</Link>
          </SectionWrapper>
        </div>
      </section>

      {/* ── 4. HISTORY PREVIEW ──────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <SectionWrapper>
            <div className="content-split content-split--reverse">
              <div className="content-image">
                <Image src="/images/Old_temple.jpeg" alt="Ancient Sri Lankan temple ruins" width={600} height={420} style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 12 }} />
              </div>
              <div>
                <p className="section-label">{t('historyPreview.sectionLabel')}</p>
                <h2 className="section-title">{t('historyPreview.title')}</h2>
                <div className="lotus-divider"><span className="lotus-divider-icon">🌿</span></div>
                <p style={{ marginBottom: '2rem' }}>{t('historyPreview.description')}</p>
                {/* <div className="timeline" style={{ marginBottom: '2rem' }}>
                  {[
                    { year: '1908', label: 'First Dhamma gatherings' },
                    { year: '1990', label: 'Temple Committee established' },
                    { year: '2000', label: 'Official temple consecration' },
                    { year: '2010', label: 'New temple complex opened' },
                  ].map((e, i) => (
                    <div key={i} className="timeline-item">
                      <div className="timeline-item__year">{e.year}</div>
                      <div className="timeline-item__desc">{e.label}</div>
                    </div>
                  ))}
                </div> */}
                <Link href="/history" className="btn btn--primary">{t('historyPreview.viewHistory')}</Link>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── 5. EVENTS PREVIEW ───────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <SectionWrapper>
            <div className="section-row-header">
              <div>
                <p className="section-label">{t('eventsPreview.sectionLabel')}</p>
                <h2 className="section-title" style={{ marginBottom: 0 }}>{t('eventsPreview.title')}</h2>
              </div>
              <Link href="/events" className="btn btn--secondary">{t('eventsPreview.viewAll')}</Link>
            </div>
          </SectionWrapper>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {UPCOMING_EVENTS.map((ev, i) => (
              <SectionWrapper key={i} delay={i * 80}>
                <div className="event-card">
                  <div className="event-card__date">
                    <div className="event-card__date-day">{ev.day}</div>
                    <div className="event-card__date-month">{ev.month}</div>
                  </div>
                  <div>
                    <div className="event-card__category">{ev.category}</div>
                    <h3 className="event-card__title">{ev.title}</h3>
                    <div className="event-card__meta">
                      <span>🕐 {ev.time}</span>
                      <span>📍 {ev.venue}</span>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. DHAMMA TEACHINGS ─────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <SectionWrapper>
            <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <p className="section-label">{t('dhamma.sectionLabel')}</p>
              <h2 className="section-title">{t('dhamma.title')}</h2>
              <p style={{ marginBottom: '2.5rem' }}>{t('dhamma.description')}</p>
            </div>
          </SectionWrapper>
          <SectionWrapper delay={100}>
            <div className="dhamma-card">
              <div className="dhamma-card__body">
                <span className="badge badge--gold" style={{ marginBottom: '1rem' }}>Featured Sermon</span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', marginBottom: '0.75rem' }}>
                  "The Four Noble Truths — A Path to Liberation"
                </h3>
                <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  Ven. Ariya Wimala Thissa Thero
                </p>
                {/* <div className="dhamma-card__btns">
                  <button className="btn btn--primary">{t('dhamma.listenNow')}</button>
                  <Link href="/about" className="btn btn--ghost">{t('dhamma.readDhamma')}</Link>
                </div> */}
              </div>
              {/* <div className="dhamma-card__icon" aria-hidden="true">🔊</div> */}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── 7. RELIGIOUS ACTIVITIES ─────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <SectionWrapper>
            <div className="section-header">
              <p className="section-label">{t('activities.sectionLabel')}</p>
              <h2 className="section-title">{t('activities.title')}</h2>
            </div>
          </SectionWrapper>
          <div className="grid--4">
            {ACTIVITIES.map((act, i) => (
              <SectionWrapper key={act.key} delay={i * 60}>
                <div className="activity-item">
                  <span className="activity-item__icon">{act.icon}</span>
                  <span className="activity-item__label">{t(`activities.items.${act.key}`)}</span>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. GALLERY PREVIEW ──────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <SectionWrapper>
            <div className="section-row-header">
              <div>
                <p className="section-label">{t('galleryPreview.sectionLabel')}</p>
                <h2 className="section-title" style={{ marginBottom: 0 }}>{t('galleryPreview.title')}</h2>
              </div>
              <Link href="/gallery" className="btn btn--secondary">{t('galleryPreview.viewAll')}</Link>
            </div>
          </SectionWrapper>
          <SectionWrapper delay={100}>
            <div className="gallery-grid">
              {GALLERY_IMAGES.map((img, i) => (
                <div key={i} className="gallery-item">
                  <Image src={img.src} alt={img.alt} width={500} height={350} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
                  {/* <div className="gallery-item__overlay">
                    <span className="gallery-item__icon">🔍</span>
                  </div> */}
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── 9. DONATION INVITE ──────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <SectionWrapper>
            <div className="donation-cta-card">
              <div className="donation-cta-card__content">
                <p className="section-label">{t('donationsPreview.sectionLabel')}</p>
                <h2 className="section-title">{t('donationsPreview.title')}</h2>
                <p style={{ marginBottom: '2rem' }}>{t('donationsPreview.description')}</p>
                <div className="donation-cta-card__btns">
                  <Link href="/donations" className="btn btn--primary">{t('donationsPreview.donate')}</Link>
                  <Link href="/donations" className="btn btn--ghost">{t('donationsPreview.learnMore')}</Link>
                </div>
              </div>
              <div className="donation-cta-card__image">
                <Image src="/images/lotus_hero.png" alt="Temple oil lamps offering" fill style={{ objectFit: 'cover' }} />
                <div className="donation-cta-card__image-overlay" />
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── 10. CONTACT PREVIEW ─────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <SectionWrapper>
            <div className="section-header">
              <p className="section-label">{t('contactPreview.sectionLabel')}</p>
              <h2 className="section-title">{t('contactPreview.title')}</h2>
            </div>
          </SectionWrapper>
          <div className="grid--3">
            {[
              { icon: '📞', label: t('contactPreview.phone'), value: '+94718467250', link: 'tel:+94718467250' },
              { icon: '✉', label: t('contactPreview.email'), value: 'info@sankassapura.org', link: 'mailto:info@sankassapura.org' },
              { icon: '🕐', label: t('contactPreview.hours'), value: t('contactPreview.hoursValue') },
              { icon: '📍', label: t('contactPreview.address'), value: 'Sankassapura Sri Sambuddharaja Buddhist Mansion\nGalle Road\nSri Lanka' },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 70}>
                <div className="contact-info-card">
                  <div className="contact-info-card__icon" aria-hidden="true">{item.icon}</div>
                  <div>
                    <div className="contact-info-card__label">{item.label}</div>
                    <div className="contact-info-card__value">
                      {item.link ? (
                        <a style={{ color: 'var(--text-primary)' }} href={item.link}>
                          {item.value}
                        </a>
                      ) : item.value}
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
          <SectionWrapper delay={300} style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/contact" className="btn btn--primary">{t('contactPreview.directions')}</Link>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}
