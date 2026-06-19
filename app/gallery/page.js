'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import SectionWrapper from '@/components/ui/SectionWrapper';

const GALLERY_ITEMS = [
  { src: '/images/hero_temple.png', alt: 'Temple at sunrise', category: 'temple', title: 'Morning at the Temple' },
  { src: '/images/gallery_vesak.png', alt: 'Vesak lanterns', category: 'vesak', title: 'Vesak Festival Celebration' },
  { src: '/images/gallery_ceremony.png', alt: 'Puja ceremony', category: 'ceremonies', title: 'Sacred Puja Ceremony' },
  { src: '/images/gallery_meditation.png', alt: 'Meditation session', category: 'meditation', title: 'Mindfulness Retreat' },
  { src: '/images/about_temple.png', alt: 'Monk under Bodhi tree', category: 'temple', title: 'Contemplation Under the Bodhi Tree' },
  { src: '/images/donations_section.png', alt: 'Temple oil lamps', category: 'ceremonies', title: 'Evening Oil Lamp Offering' },
  { src: '/images/history_temple.png', alt: 'Ancient temple ruins', category: 'historical', title: 'Historical Temple Architecture' },
  { src: '/images/thero_chief.png', alt: 'Chief Thero in library', category: 'temple', title: 'Dhamma Library Study' },
  { src: '/images/gallery_vesak.png', alt: 'Vesak decorations', category: 'vesak', title: 'Vesak Thorana Illuminations' },
  { src: '/images/gallery_ceremony.png', alt: 'Flower offerings', category: 'community', title: 'Community Offering Day' },
  { src: '/images/gallery_meditation.png', alt: 'Group meditation', category: 'meditation', title: 'Sil Campaign Meditation' },
  { src: '/images/hero_temple.png', alt: 'Temple exterior detail', category: 'temple', title: 'Temple Gateway' },
];

export default function GalleryPage() {
  const { t } = useLanguage();
  const categories = t('gallery.categories');
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filtered = GALLERY_ITEMS.filter(item => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch = !search || item.title.toLowerCase().includes(search.toLowerCase()) || item.alt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-nav">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__label">📷 {t('gallery.hero.label')}</p>
          <h1 className="page-hero__title">{t('gallery.hero.title')}</h1>
          <p className="page-hero__subtitle">{t('gallery.hero.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Controls */}
          <SectionWrapper>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
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
              <div className="search-bar">
                <span className="search-bar__icon" aria-hidden="true">🔍</span>
                <input
                  type="search"
                  className="search-bar__input"
                  placeholder={t('gallery.search')}
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  aria-label="Search gallery"
                />
              </div>
            </div>
          </SectionWrapper>

          {/* Masonry Gallery */}
          {filtered.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '4rem' }}>{t('gallery.noResults')}</p>
          ) : (
            <SectionWrapper delay={100}>
              <div className="gallery-grid" role="list">
                {filtered.map((item, i) => (
                  <div
                    key={i}
                    className="gallery-item"
                    onClick={() => setLightboxImg(item)}
                    role="listitem"
                    tabIndex={0}
                    aria-label={`View: ${item.title}`}
                    onKeyDown={e => e.key === 'Enter' && setLightboxImg(item)}
                    style={{ marginBottom: '1rem' }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={480}
                      height={320}
                      style={{ objectFit: 'cover', width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div className="gallery-item__overlay">
                      <div style={{ textAlign: 'center' }}>
                        <span className="gallery-item__icon">🔍</span>
                        <p style={{ color: 'white', fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.9 }}>{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionWrapper>
          )}

          <SectionWrapper delay={200} style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Showing {filtered.length} of {GALLERY_ITEMS.length} images
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxImg && (
        <div
          className="lightbox"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImg.title}
        >
          <button className="lightbox__close" onClick={() => setLightboxImg(null)} aria-label="Close lightbox">✕</button>
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <Image
              src={lightboxImg.src}
              alt={lightboxImg.alt}
              width={1000}
              height={700}
              className="lightbox__img"
              style={{ objectFit: 'contain', maxWidth: '90vw', maxHeight: '80vh' }}
              priority
            />
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: 'white', fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                {lightboxImg.title}
              </p>
              <span className="badge badge--gold" style={{ opacity: 0.8 }}>{lightboxImg.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
