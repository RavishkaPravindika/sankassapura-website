'use client';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import SectionWrapper from '@/components/ui/SectionWrapper';

const MUDRA_IMAGES = [
  '/images/1_ Bhumisparsha Mudra.png',
  '/images/2_Paradukkha-Dukkhitha Mudra.png',
  '/images/3_Abhaya Mudra.png',
  '/images/4_Dharmachakra Mudra.png',
  '/images/5_Vitarka Mudra.png',
  '/images/6_Varada Mudra.png',
  '/images/7_Dhyana Mudra.png',
];

const MUDRA_ICONS = ["🌍","💛","🕊️","☸️","📿","🌸","🧘"];
const SUMMARY_ICONS = ["🧘","✨","📿","💛","🕊️"];

export default function HasthaMudraPage() {
  const { t } = useLanguage();
  const mudras = t('hasthamudra.mudras');
  const summaryCards = t('hasthamudra.summary.cards');

  return (
    <div className="pt-nav">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__label">🙏 {t('hasthamudra.hero.label')}</p>
          <h1 className="page-hero__title">{t('hasthamudra.hero.title')}</h1>
          <p className="page-hero__subtitle">{t('hasthamudra.hero.subtitle')}</p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="section">
        <div className="container">
          <SectionWrapper>
            <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
              <p className="section-label" style={{ justifyContent: 'center' }}>
                ☸ {t('hasthamudra.intro.label')}
              </p>
              <h2 className="section-title">{t('hasthamudra.intro.title')}</h2>
              <div className="lotus-divider">
                <span className="lotus-divider-icon">🪷</span>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                {t('hasthamudra.intro.p1')}
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                {t('hasthamudra.intro.p2')}
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
                {t('hasthamudra.intro.p3')}
              </p>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={100}>
            <div className="mudra-symbol-row">
              {/* {MUDRA_ICONS.map((icon, i) => (
                <div key={i} className="mudra-symbol-item">
                  <span className="mudra-symbol-item__icon">{icon}</span>
                  <span className="mudra-symbol-item__num">{i + 1}</span>
                </div>
              ))} */}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* MUDRA SECTIONS */}
      {Array.isArray(mudras) && mudras.map((mudra, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={index}
            className="section"
            style={{ background: isEven ? 'var(--bg-primary)' : 'var(--bg-elevated)' }}
          >
            <div className="container">
              <SectionWrapper delay={80}>
                <div className={'mudra-layout ' + (isEven ? '' : 'mudra-layout--reverse')}>
                  <div className="mudra-image-col">
                    <div className="mudra-image-wrapper">
                      <div className="mudra-image-number">{String(index + 1).padStart(2, '0')}</div>
                      <div className="mudra-image-frame">
                        <Image
                          src={MUDRA_IMAGES[index]}
                          alt={mudra.name}
                          width={520}
                          height={600}
                          style={{ objectFit: 'contain', width: '100%', height: 'auto', display: 'block' }}
                          priority={index === 0}
                        />
                      </div>
                      <p className="mudra-image-caption">{mudra.name}</p>
                    </div>
                  </div>

                  <div className="mudra-content-col">
                    <div className="mudra-badge">
                      {/* <span>{MUDRA_ICONS[index]}</span> */}
                      <span>{t('hasthamudra.mudraOf')} {index + 1} {t('hasthamudra.of')} 7</span>
                    </div>
                    <h2 className="mudra-title">{mudra.name}</h2>
                    <p className="mudra-subtitle">{mudra.subtitle}</p>
                    <div className="lotus-divider" style={{ justifyContent: 'flex-start', maxWidth: 200, margin: '1.25rem 0' }}>
                      <span className="lotus-divider-icon" style={{ fontSize: '1rem' }}>🪷</span>
                    </div>
                    <p className="mudra-description">{mudra.description}</p>
                    <div className="mudra-symbols">
                      <p className="mudra-symbols__label">{t('hasthamudra.keySymbolism')}</p>
                      <ul className="mudra-symbols__list">
                        {Array.isArray(mudra.keySymbols) && mudra.keySymbols.map((symbol, i) => (
                          <li key={i} className="mudra-symbols__item">
                            <span className="mudra-symbols__bullet">◆</span>
                            <span>{symbol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </section>
        );
      })}

      {/* CLOSING SUMMARY */}
      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <SectionWrapper>
            <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
              <p className="section-label" style={{ justifyContent: 'center' }}>
                ☸ {t('hasthamudra.summary.label')}
              </p>
              <h2 className="section-title">{t('hasthamudra.summary.title')}</h2>
              <div className="lotus-divider">
                <span className="lotus-divider-icon">🪷</span>
              </div>
              <div className="mudra-summary-grid">
                {Array.isArray(summaryCards) && summaryCards.map((card, i) => (
                  <SectionWrapper key={i} delay={i * 80}>
                    <div className="mudra-summary-card">
                      <div className="mudra-summary-card__icon">{SUMMARY_ICONS[i]}</div>
                      <h4 className="mudra-summary-card__theme">{card.theme}</h4>
                      <p className="mudra-summary-card__desc">{card.desc}</p>
                    </div>
                  </SectionWrapper>
                ))}
              </div>
              <SectionWrapper delay={400}>
                <div className="mudra-closing-quote">
                  <div className="mudra-closing-quote__mark">&quot;</div>
                  <p className="mudra-closing-quote__text">
                    {t('hasthamudra.summary.quoteText')}
                  </p>
                  <div className="mudra-closing-quote__footer">
                    <span>🙏</span>
                    <span>{t('hasthamudra.summary.quoteFooter')}</span>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
