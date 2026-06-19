'use client';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function ContactPage() {
  const { t } = useLanguage();
  const info = t('contact.info');
  const form = t('contact.form');
  const directions = t('contact.directions');
  const faq = t('contact.faq');

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const INFO_ITEMS = [
    { icon: '📍', label: info.address.label, value: info.address.value },
    { icon: '📞', label: info.phone.label, value: info.phone.value },
    { icon: '✉', label: info.email.label, value: info.email.value },
    { icon: '🕐', label: info.hours.label, value: info.hours.value },
  ];

  return (
    <div className="pt-nav">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__label">✉ {t('contact.hero.label')}</p>
          <h1 className="page-hero__title">{t('contact.hero.title')}</h1>
          <p className="page-hero__subtitle">{t('contact.hero.subtitle')}</p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="section">
        <div className="container">
          <div className="grid--2" style={{ alignItems: 'start' }}>
            {/* Info column */}
            <SectionWrapper>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {INFO_ITEMS.map((item, i) => (
                  <div key={i} className="contact-info-card">
                    <div className="contact-info-card__icon" aria-hidden="true">{item.icon}</div>
                    <div>
                      <div className="contact-info-card__label">{item.label}</div>
                      <div className="contact-info-card__value">{item.value}</div>
                    </div>
                  </div>
                ))}

                {/* Social links */}
                <div style={{ padding: '1.5rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10 }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
                    {t('contact.social.title')}
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {[
                      { label: 'Facebook', icon: 'f', href: '#', color: '#1877F2' },
                      { label: 'YouTube', icon: '▶', href: '#', color: '#FF0000' },
                      { label: 'Instagram', icon: '📷', href: '#', color: '#E4405F' },
                      { label: 'WhatsApp', icon: '💬', href: '#', color: '#25D366' },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                          padding: '0.5rem 1rem', borderRadius: 6,
                          border: '1px solid var(--border)',
                          background: 'var(--bg-elevated)',
                          color: 'var(--text-secondary)',
                          fontSize: '0.85rem', textDecoration: 'none',
                          transition: 'all 0.2s ease',
                        }}
                        aria-label={`Follow us on ${social.label}`}
                        rel="noopener noreferrer"
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold-border)'; e.currentTarget.style.color = 'var(--gold)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                      >
                        {social.icon} {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Contact Form */}
            <SectionWrapper delay={120}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '1.5rem' }}>{form.title}</h2>

                {submitted && (
                  <div className="alert-success" style={{ marginBottom: '1.5rem' }}>
                    ✓ {form.success}
                  </div>
                )}
                {error && (
                  <div className="alert-error" style={{ marginBottom: '1.5rem' }}>
                    ⚠ {form.error}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid--2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">{form.name} *</label>
                      <input
                        id="contact-name"
                        type="text"
                        className="form-input"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                        aria-required="true"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">{form.email} *</label>
                      <input
                        id="contact-email"
                        type="email"
                        className="form-input"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-subject">{form.subject}</label>
                    <input
                      id="contact-subject"
                      type="text"
                      className="form-input"
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">{form.message} *</label>
                    <textarea
                      id="contact-message"
                      className="form-textarea"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      required
                      aria-required="true"
                    />
                  </div>
                  <button type="submit" className="btn btn--primary w-full">{form.submit}</button>
                </form>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="section" style={{ background: 'var(--bg-elevated)', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <SectionWrapper>
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-placeholder__icon">📍</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '0.5rem' }}>Sankassapura Buddhist Temple</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Musterstraße 42, 12345 Berlin, Germany</p>
                <a
                  href="https://maps.google.com/?q=Berlin+Germany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--sm"
                  style={{ marginTop: '1.25rem' }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section className="section">
        <div className="container">
          <SectionWrapper>
            <div className="section-header">
              <p className="section-label">🗺</p>
              <h2 className="section-title">{directions.title}</h2>
            </div>
          </SectionWrapper>
          <div className="grid--2">
            {[
              { icon: '🚇', title: directions.public, desc: directions.publicDesc },
              { icon: '🚗', title: directions.parking, desc: directions.parkingDesc },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 100}>
                <div style={{ display: 'flex', gap: '1.25rem', padding: '2rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontSize: '2.5rem', flexShrink: 0, lineHeight: 1 }}>{item.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.95rem' }}>{item.desc}</p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <SectionWrapper>
            <div className="section-header">
              <p className="section-label">❓ FAQ</p>
              <h2 className="section-title">{faq.title}</h2>
            </div>
          </SectionWrapper>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {faq.items.map((item, i) => (
              <SectionWrapper key={i} delay={i * 60}>
                <div className={`accordion-item ${openFaq === i ? 'open' : ''}`}>
                  <button
                    className="accordion-trigger"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    {item.q}
                    <span className="accordion-icon" aria-hidden="true">+</span>
                  </button>
                  <div className="accordion-content" id={`faq-answer-${i}`} role="region">
                    <div className="accordion-body">{item.a}</div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
