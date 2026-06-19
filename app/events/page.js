'use client';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import SectionWrapper from '@/components/ui/SectionWrapper';

// ── Event data ─────────────────────────────────────────────────
const EVENTS_DATA = [
  {
    id: 1, day: '12', month: 'Jul', year: 2025,
    category: 'poya', categoryLabel: 'Poya Day',
    title: 'Esala Full Moon Poya Day',
    desc: 'Join us for the sacred Esala Poya observance with Bodhi Puja, pirith chanting, and Dhamma sermon.',
    time: '6:00 AM – 9:00 PM', venue: 'Main Shrine Hall', free: true, registration: false,
  },
  {
    id: 2, day: '19', month: 'Jul', year: 2025,
    category: 'meditation', categoryLabel: 'Meditation',
    title: 'Weekend Mindfulness Retreat',
    desc: 'A two-day retreat for practitioners of all levels. Learn Samatha and Vipassanā meditation techniques.',
    time: '8:00 AM – 5:00 PM', venue: 'Meditation Hall', free: false, registration: true,
  },
  {
    id: 3, day: '26', month: 'Jul', year: 2025,
    category: 'dhamma', categoryLabel: 'Dhamma Sermon',
    title: 'Dhamma Discourse by Ven. Dhammāloka Thero',
    desc: 'Monthly public Dhamma sermon in Sinhala and English. All are welcome.',
    time: '7:00 PM – 9:00 PM', venue: 'Community Hall', free: true, registration: false,
  },
  {
    id: 4, day: '09', month: 'Aug', year: 2025,
    category: 'sil', categoryLabel: 'Sil Campaign',
    title: 'Atapirikara Sil Campaign',
    desc: 'Observe the Eight Precepts (Atasil) for one full day. Meals provided. White clothing recommended.',
    time: '5:30 AM – 6:00 PM', venue: 'Temple Grounds', free: true, registration: true,
  },
  {
    id: 5, day: '23', month: 'Aug', year: 2025,
    category: 'cultural', categoryLabel: 'Cultural Event',
    title: 'Sinhala Cultural Evening',
    desc: 'An evening celebrating Sri Lankan arts, music, traditional dance, and food. Families welcome.',
    time: '5:00 PM – 9:00 PM', venue: 'Community Hall', free: false, registration: true,
  },
  {
    id: 6, day: '10', month: 'Sep', year: 2025,
    category: 'poya', categoryLabel: 'Poya Day',
    title: 'Binara Full Moon Poya Day',
    desc: 'Monthly Poya Day observance with Dana, pirith, and Dhamma discussions.',
    time: '6:00 AM – 9:00 PM', venue: 'Main Shrine Hall', free: true, registration: false,
  },
  {
    id: 7, day: '27', month: 'Sep', year: 2025,
    category: 'community', categoryLabel: 'Community',
    title: 'Community Welfare & Children\'s Day',
    desc: 'A special day for children with Dhamma games, arts, and prizes. Community lunch for all.',
    time: '10:00 AM – 4:00 PM', venue: 'Temple Garden', free: true, registration: false,
  },
];

const MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function CalendarView({ events }) {
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const monthEvents = events.filter(e => {
    const evMonth = MONTH_NAMES.indexOf(e.month);
    return evMonth === viewMonth && e.year === viewYear;
  });

  return (
    <div>
      {/* Month navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <button
          className="btn btn--ghost btn--sm"
          onClick={() => { if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); } else setViewMonth(m => m - 1); }}
        >← Prev</button>
        <h3 style={{ fontFamily: 'Playfair Display, serif' }}>{MONTH_NAMES[viewMonth]} {viewYear}</h3>
        <button
          className="btn btn--ghost btn--sm"
          onClick={() => { if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); } else setViewMonth(m => m + 1); }}
        >Next →</button>
      </div>

      {/* Calendar grid */}
      <div className="calendar-view">
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
          <div key={d} className="calendar-day-header">{d}</div>
        ))}
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} className="calendar-day calendar-day--other-month" />;
          const isToday = day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();
          const dayEvents = monthEvents.filter(e => parseInt(e.day) === day);
          return (
            <div key={day} className={`calendar-day ${isToday ? 'calendar-day--today' : ''}`}>
              <div className="calendar-day__number">{isToday ? <span>{day}</span> : day}</div>
              {dayEvents.map(e => (
                <div key={e.id}>
                  <span className="calendar-event-dot" />
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block', lineHeight: 1.3 }}>{e.title.slice(0, 18)}…</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Events this month */}
      {monthEvents.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Events this month
          </h4>
          {monthEvents.map(ev => (
            <div key={ev.id} style={{ display: 'flex', gap: '1rem', padding: '1rem', borderBottom: '1px solid var(--border)', alignItems: 'flex-start' }}>
              <div style={{ width: 44, height: 44, background: 'var(--gold-soft)', border: '1px solid var(--gold-border)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1rem', color: 'var(--gold)', flexShrink: 0 }}>
                {ev.day}
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>{ev.categoryLabel}</p>
                <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: 0, fontSize: '0.95rem' }}>{ev.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function EventsPage() {
  const { t } = useLanguage();
  const categories = t('events.categories');
  const [activeCategory, setActiveCategory] = useState('all');
  const [view, setView] = useState('list');
  const [modalEvent, setModalEvent] = useState(null);

  const filtered = activeCategory === 'all' ? EVENTS_DATA : EVENTS_DATA.filter(e => e.category === activeCategory);

  return (
    <div className="pt-nav">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__label">📅 {t('events.hero.label')}</p>
          <h1 className="page-hero__title">{t('events.hero.title')}</h1>
          <p className="page-hero__subtitle">{t('events.hero.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Controls */}
          <SectionWrapper>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
              <div className="filter-tabs" style={{ marginBottom: 0 }}>
                {Object.entries(categories).map(([key, label]) => (
                  <button
                    key={key}
                    className={`filter-tab ${activeCategory === key ? 'active' : ''}`}
                    onClick={() => setActiveCategory(key)}
                    aria-pressed={activeCategory === key}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="view-toggle">
                <button className={`view-btn ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')}>{t('events.views.list')}</button>
                <button className={`view-btn ${view === 'calendar' ? 'active' : ''}`} onClick={() => setView('calendar')}>{t('events.views.calendar')}</button>
              </div>
            </div>
          </SectionWrapper>

          {/* LIST VIEW */}
          {view === 'list' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {filtered.length === 0 && (
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '3rem' }}>{t('events.noEvents')}</p>
              )}
              {filtered.map((ev, i) => (
                <SectionWrapper key={ev.id} delay={i * 60}>
                  <div className="event-card" style={{ cursor: 'pointer' }} onClick={() => setModalEvent(ev)} role="button" tabIndex={0} aria-label={`View details for ${ev.title}`}>
                    <div className="event-card__date">
                      <div className="event-card__date-day">{ev.day}</div>
                      <div className="event-card__date-month">{ev.month}</div>
                    </div>
                    <div>
                      <div className="event-card__category">{ev.categoryLabel}</div>
                      <h3 className="event-card__title">{ev.title}</h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{ev.desc.slice(0, 90)}…</p>
                      <div className="event-card__meta">
                        <span>🕐 {ev.time}</span>
                        <span>📍 {ev.venue}</span>
                        {ev.free && <span className="badge badge--gold">{t('events.labels.free')}</span>}
                        {ev.registration && <span className="badge badge--green">{t('events.labels.registration')}</span>}
                      </div>
                    </div>
                    <button className="btn btn--secondary btn--sm" onClick={(e) => { e.stopPropagation(); setModalEvent(ev); }}>
                      {t('common.readMore')}
                    </button>
                  </div>
                </SectionWrapper>
              ))}
            </div>
          )}

          {/* CALENDAR VIEW */}
          {view === 'calendar' && (
            <SectionWrapper>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '2rem', boxShadow: 'var(--shadow-md)' }}>
                <CalendarView events={EVENTS_DATA} />
              </div>
            </SectionWrapper>
          )}
        </div>
      </section>

      {/* EVENT DETAIL MODAL */}
      {modalEvent && (
        <div className="lightbox" onClick={() => setModalEvent(null)} role="dialog" aria-modal="true" aria-label={modalEvent.title}>
          <div
            style={{
              background: 'var(--bg-card)',
              borderRadius: 16,
              padding: '2.5rem',
              maxWidth: 600,
              width: '90vw',
              position: 'relative',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
              animation: 'fadeInUp 0.3s ease',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button className="lightbox__close" onClick={() => setModalEvent(null)} aria-label="Close">✕</button>
            <span className="badge badge--gold" style={{ marginBottom: '1rem' }}>{modalEvent.categoryLabel}</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '1rem' }}>{modalEvent.title}</h2>
            <p style={{ marginBottom: '1.5rem' }}>{modalEvent.desc}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 600, minWidth: 70 }}>📅 Date:</span>
                <span>{modalEvent.day} {modalEvent.month} {modalEvent.year}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 600, minWidth: 70 }}>🕐 Time:</span>
                <span>{modalEvent.time}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--gold)', fontWeight: 600, minWidth: 70 }}>📍 Venue:</span>
                <span>{modalEvent.venue}</span>
              </div>
              {modalEvent.free && (
                <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 600, minWidth: 70 }}>🎟 Entry:</span>
                  <span className="badge badge--gold">Free</span>
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {modalEvent.registration && <button className="btn btn--primary">{t('common.register')}</button>}
              <button className="btn btn--ghost" onClick={() => setModalEvent(null)}>{t('common.close')}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
