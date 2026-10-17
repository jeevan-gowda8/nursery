import React from 'react';
import { Sprout, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { TRANSLATIONS } from '../data/nurseryData';

export default function Footer({ navigateToPage, currentLang }) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo" onClick={() => navigateToPage('home')}>
              <div className="f-logo-bg">
                <Sprout size={20} />
              </div>
              <span className="f-brand-title">{t.brandName}</span>
            </div>
            <p className="f-tagline">
              {currentLang === 'kn'
                ? 'ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ಪ್ರಮಾಣೀಕೃತ ಅಡಿಕೆ ಸಸಿಗಳ ನರ್ಸರಿ. 25+ ವರ್ಷಗಳ ಮಾನ್ಯತೆ ಪಡೆದ ತಾಯಿ ಮರಗಳಿಂದ ಮೋಹಿತ್‌ನಗರ, ಮಂಗಳ, ಸುಮಂಗಳ ಮತ್ತು ಶ್ರೀಮಂಗಳ ತಳಿಗಳ ಸಸಿಗಳ ಪೂರೈಕೆ.'
                : 'India’s premier certified Arecanut plant nursery. Specializing in Mohitnagar, Mangala, Sumangala, and hybrid seed selection from 25+ year elite mother palms.'}
            </p>
            <div className="f-accreditation">
              <span>Govt. Reg. License No: KAE-2001-NUR-884</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="f-col-title">{currentLang === 'kn' ? 'ತ್ವರಿತ ಸಂಪರ್ಕಗಳು' : 'Quick Navigation'}</h4>
            <ul className="f-links-list">
              <li><button onClick={() => navigateToPage('home')}>{t.navHome}</button></li>
              <li><button onClick={() => navigateToPage('products')}>{t.navProducts}</button></li>
              <li><button onClick={() => navigateToPage('calculator')}>{t.navCalculator}</button></li>
              <li><button onClick={() => navigateToPage('about')}>{t.navAbout}</button></li>
              <li><button onClick={() => navigateToPage('gallery')}>{t.navGallery}</button></li>
              <li><button onClick={() => navigateToPage('care-guide')}>{t.navCareGuide}</button></li>
              <li><button onClick={() => navigateToPage('contact')}>{t.navContact}</button></li>
            </ul>
          </div>

          {/* Popular Varieties */}
          <div className="footer-col">
            <h4 className="f-col-title">{currentLang === 'kn' ? 'ಪ್ರಮುಖ ಅಡಿಕೆ ತಳಿಗಳು' : 'Featured Varieties'}</h4>
            <ul className="f-links-list">
              <li><button onClick={() => navigateToPage('products')}>{currentLang === 'kn' ? 'ಮೋಹಿತ್‌ನಗರ ಅಧಿಕ ಇಳುವರಿ' : 'Mohitnagar High-Yield'}</button></li>
              <li><button onClick={() => navigateToPage('products')}>{currentLang === 'kn' ? 'ಮಂಗಳ ಕುಬ್ಜ ಹೈಬ್ರಿಡ್' : 'Mangala Dwarf Hybrid'}</button></li>
              <li><button onClick={() => navigateToPage('products')}>{currentLang === 'kn' ? 'ಸುಮಂಗಳ ಕ್ಲೈಮೇಟ್ ರೆಸಿಲಿಯೆಂಟ್' : 'Sumangala Climate Resilient'}</button></li>
              <li><button onClick={() => navigateToPage('products')}>{currentLang === 'kn' ? 'ಶ್ರೀಮಂಗಳ ಪ್ರೀಮಿಯಂ' : 'Srimangala Premium'}</button></li>
              <li><button onClick={() => navigateToPage('products')}>{currentLang === 'kn' ? 'ದಕ್ಷಿಣ ಕನ್ನಡ ಲೋಕಲ್' : 'South Kanara Heritage'}</button></li>
              <li><button onClick={() => navigateToPage('products')}>{currentLang === 'kn' ? 'ಹಿರೇಹಳ್ಳಿ ಕುಬ್ಜ ತಳಿ' : 'Hirehalli Dwarf'}</button></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="footer-col">
            <h4 className="f-col-title">{currentLang === 'kn' ? 'ನರ್ಸರಿ ಕಾರ್ಯಾಲಯ' : 'Nursery Office'}</h4>
            <div className="f-contact-item">
              <MapPin size={15} className="text-green" />
              <span>Thippasandra, Magadi Taluk, Ramanagara District, Karnataka - 562131</span>
            </div>
            <div className="f-contact-item">
              <Phone size={15} className="text-green" />
              <span>+91 96068 41193 / +91 78921 68121</span>
            </div>
            <div className="f-contact-item">
              <Mail size={15} className="text-green" />
              <a href="mailto:Shreyasshetty4693@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>Shreyasshetty4693@gmail.com</a>
            </div>
            
            <button onClick={scrollToTop} className="btn btn-outline back-to-top-btn" style={{ marginTop: '14px' }}>
              <ArrowUp size={15} />
              <span>{currentLang === 'kn' ? 'ಪುಟದ ಮೇಲಕ್ಕೆ ಹೋಗಿ' : 'Back to Top'}</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {t.brandName}. {currentLang === 'kn' ? 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. ರೈತರ ಸೇವೆಯಲ್ಲಿ ಸದಾ ಸನ್ನದ್ಧ.' : 'All Rights Reserved. Empowering Farmers Across Karnataka & Nationwide.'}</p>
        </div>
      </div>

      <style>{`
        .footer-root {
          background: #0d2112;
          color: #a3c4aa;
          padding: 56px 0 24px 0;
          border-top: 1px solid #1a3c22;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 0.8fr 1fr;
          gap: 32px;
          margin-bottom: 40px;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          cursor: pointer;
        }

        .f-logo-bg {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--primary-700);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .f-brand-title {
          font-family: 'Outfit', 'Noto Sans Kannada', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
        }

        .f-tagline {
          font-size: 0.825rem;
          line-height: 1.55;
          margin-bottom: 12px;
          color: #bbf7d0;
          opacity: 0.85;
        }

        .f-accreditation {
          font-size: 0.725rem;
          color: var(--accent-gold);
          font-weight: 700;
        }

        .f-col-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 14px;
        }

        .f-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .f-links-list button {
          background: none;
          border: none;
          color: #bbf7d0;
          opacity: 0.8;
          font-size: 0.825rem;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
          text-align: left;
        }

        .f-links-list button:hover {
          color: #ffffff;
          opacity: 1;
          transform: translateX(3px);
        }

        .f-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.8rem;
          margin-bottom: 10px;
        }

        .text-green {
          color: #4ade80;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .back-to-top-btn {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          border-color: #23522e;
          font-size: 0.8rem;
          padding: 8px 16px;
        }

        .back-to-top-btn:hover {
          border-color: #4ade80;
          color: #4ade80;
          background: rgba(255, 255, 255, 0.15);
        }

        .footer-bottom {
          padding-top: 20px;
          border-top: 1px solid #1a3c22;
          text-align: center;
          font-size: 0.775rem;
          color: #719b78;
        }
      `}</style>
    </footer>
  );
}
