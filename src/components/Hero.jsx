import React from 'react';
import { Sprout, Award, TrendingUp, ShieldCheck, ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../data/nurseryData';

export default function Hero({ navigateToPage, currentLang }) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  return (
    <section id="home" className="hero-section">
      <div className="hero-background-glow"></div>
      
      <div className="container hero-container">
        {/* Left Content Column */}
        <div className="hero-content">
          {/* Top Pill Badge */}
          <div className="badge badge-gold hero-top-badge animate-fade-in">
            <Award size={15} />
            <span>{t.heroPill}</span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="hero-title animate-fade-in">
            {t.heroTitle1} <br />
            <span className="hero-highlight">{t.heroTitle2}</span> {t.heroTitle3}
          </h1>

          {/* Hero Subtitle */}
          <p className="hero-description animate-fade-in">
            {t.heroDesc}
          </p>

          {/* Key Agricultural Quality Checks */}
          <div className="hero-bullets">
            <div className="bullet-item">
              <CheckCircle2 size={17} className="bullet-icon" />
              <span>{currentLang === 'kn' ? '100% ಶುದ್ಧ ತಾಯಿ ಗಿಡದ ಗುಣಮಟ್ಟ' : '100% True-to-Type Parentage'}</span>
            </div>
            <div className="bullet-item">
              <CheckCircle2 size={17} className="bullet-icon" />
              <span>{currentLang === 'kn' ? '98% ಗಿಡ ಬದುಕುವ ಖಾತರಿ' : '98% Field Survival Rate'}</span>
            </div>
            <div className="bullet-item">
              <CheckCircle2 size={17} className="bullet-icon" />
              <span>{currentLang === 'kn' ? 'ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸುರಕ್ಷಿತ ಸಾಗಾಟ' : 'Pan-Karnataka Crate Transport'}</span>
            </div>
          </div>

          {/* Action Call-to-Actions */}
          <div className="hero-actions">
            <button onClick={() => navigateToPage('products')} className="btn btn-gold btn-hero">
              <Sprout size={18} />
              <span>{t.exploreBtn}</span>
              <ArrowRight size={16} />
            </button>

            <button onClick={() => navigateToPage('calculator')} className="btn btn-outline btn-hero">
              <Calculator size={18} />
              <span>{t.calcBtn}</span>
            </button>
          </div>

          {/* Trust Metrics Summary Bar */}
          <div className="hero-stats glass-card">
            <div className="stat-card">
              <div className="stat-value">500,000+</div>
              <div className="stat-label">{currentLang === 'kn' ? 'ಪೂರೈಸಿದ ಅಡಿಕೆ ಸಸಿಗಳು' : 'Saplings Delivered'}</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <div className="stat-value">98.5%</div>
              <div className="stat-label">{currentLang === 'kn' ? 'ಮೊಳೆಕೆ ಮತ್ತು ಬದುಕುಳಿಯುವಿಕೆ' : 'Germination Success'}</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <div className="stat-value">4.6 kg</div>
              <div className="stat-label">{currentLang === 'kn' ? 'ಗರಿಷ್ಠ ಒಣ ಅಡಿಕೆ / ಮರ' : 'Max Dry Yield / Palm'}</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <div className="stat-value">25+ Yrs</div>
              <div className="stat-label">{currentLang === 'kn' ? 'ಪಾರಂಪರಿಕ ನಂಬಿಕೆ' : 'Heritage Trust'}</div>
            </div>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img 
              src="/hero_plantation.jpg" 
              alt="Sri Areca Haven High-Yield Nursery Plantation" 
              className="hero-main-img" 
            />
            <div className="image-overlay-vignette"></div>

            {/* Floating Quality Badge 1 */}
            <div className="floating-card float-top-left glass-card">
              <div className="float-icon-bg green">
                <ShieldCheck size={20} />
              </div>
              <div>
                <div className="float-title">{currentLang === 'kn' ? 'ದೃಢೀಕೃತ ತಳಿ ಗುಣಮಟ್ಟ' : 'Certified Genetics'}</div>
                <div className="float-sub">{currentLang === 'kn' ? '0% ನಕಲಿ ಸಸಿ ಗ್ಯಾರಂಟಿ' : 'Zero Rogue Guarantee'}</div>
              </div>
            </div>

            {/* Floating Quality Badge 2 */}
            <div className="floating-card float-bottom-right glass-card">
              <div className="float-icon-bg gold">
                <TrendingUp size={20} />
              </div>
              <div>
                <div className="float-title">{currentLang === 'kn' ? 'ಶೀಘ್ರ ಫಸಲು ಆರಂಭ' : 'Early Bearing Yield'}</div>
                <div className="float-sub">{currentLang === 'kn' ? '3 ರಿಂದ 3.5 ವರ್ಷಗಳಲ್ಲಿ ಫಲ' : 'Bears in 3 - 3.5 Yrs'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding: 48px 0 64px 0;
          overflow: hidden;
          background: linear-gradient(180deg, #f0fdf4 0%, var(--bg-page) 100%);
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 28px 0 44px 0;
          }
        }

        .hero-background-glow {
          position: absolute;
          top: -20%;
          left: 10%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        .hero-top-badge {
          margin-bottom: 16px;
        }

        .hero-title {
          font-size: 3.1rem;
          font-weight: 900;
          letter-spacing: -1px;
          line-height: 1.14;
          margin-bottom: 16px;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.1rem;
            letter-spacing: -0.5px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.75rem;
          }
        }

        .hero-highlight {
          color: var(--primary-800);
          background: linear-gradient(135deg, var(--primary-700), var(--primary-900));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .hero-description {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 20px;
          max-width: 620px;
        }

        @media (max-width: 768px) {
          .hero-description {
            font-size: 0.925rem;
          }
        }

        .hero-bullets {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 20px;
          margin-bottom: 28px;
        }

        @media (max-width: 540px) {
          .hero-bullets {
            flex-direction: column;
            gap: 10px;
          }
        }

        .bullet-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .bullet-icon {
          color: var(--primary-600);
          flex-shrink: 0;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        @media (max-width: 540px) {
          .hero-actions {
            flex-direction: column;
            gap: 10px;
          }
          .btn-hero {
            width: 100%;
          }
        }

        .btn-hero {
          padding: 14px 28px;
          font-size: 0.95rem;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: #ffffff;
        }

        @media (max-width: 640px) {
          .hero-stats {
            grid-template-columns: 1fr 1fr;
            display: grid;
            gap: 16px 12px;
            padding: 14px;
          }
          .stat-divider {
            display: none;
          }
        }

        .stat-card {
          text-align: center;
        }

        .stat-value {
          font-family: 'Outfit', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--primary-800);
          line-height: 1.1;
        }

        @media (max-width: 480px) {
          .stat-value {
            font-size: 1.25rem;
          }
        }

        .stat-label {
          font-size: 0.725rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-top: 3px;
        }

        .stat-divider {
          width: 1px;
          height: 30px;
          background: var(--border-color);
        }

        /* Hero Visual Side */
        .hero-visual {
          position: relative;
        }

        .hero-image-wrapper {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 4px solid #ffffff;
          background: #ffffff;
        }

        .hero-main-img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        @media (max-width: 1024px) {
          .hero-main-img {
            height: 320px;
          }
        }

        @media (max-width: 480px) {
          .hero-main-img {
            height: 240px;
          }
        }

        .image-overlay-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.4) 100%);
          pointer-events: none;
        }

        .floating-card {
          position: absolute;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 10;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .float-top-left {
          top: 14px;
          left: 14px;
        }

        .float-bottom-right {
          bottom: 14px;
          right: 14px;
        }

        @media (max-width: 540px) {
          .floating-card {
            display: none;
          }
        }

        .float-icon-bg {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .float-icon-bg.green {
          background: var(--primary-100);
          color: var(--primary-800);
        }

        .float-icon-bg.gold {
          background: var(--gold-subtle);
          color: var(--accent-amber-dark);
        }

        .float-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-main);
        }

        .float-sub {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
