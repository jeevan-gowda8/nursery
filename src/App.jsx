import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Calculator from './components/Calculator';
import About from './components/About';
import Gallery from './components/Gallery';
import CareGuide from './components/CareGuide';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { Sprout, Calculator as CalcIcon, ShieldCheck, Image, BookOpen, ArrowRight, MessageSquare } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLang, setCurrentLang] = useState('en'); // 'en' or 'kn'
  const navigateToPage = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'products':
        return <Products currentLang={currentLang} />;
      case 'calculator':
        return <Calculator navigateToPage={navigateToPage} currentLang={currentLang} />;
      case 'about':
        return <About currentLang={currentLang} />;
      case 'gallery':
        return <Gallery currentLang={currentLang} />;
      case 'care-guide':
        return <CareGuide currentLang={currentLang} />;
      case 'contact':
        return <Contact currentLang={currentLang} />;
      case 'home':
      default:
        return (
          <>
            <Hero navigateToPage={navigateToPage} currentLang={currentLang} />

            {/* Quick Explore Section on Home Page */}
            <section className="section-padding home-features-section">
              <div className="container">
                <div className="section-header">
                  <div className="badge badge-gold">
                    <ShieldCheck size={15} />
                    <span>{currentLang === 'kn' ? 'ಸರ್ಕಾರ ಮಾನ್ಯತೆ ಪಡೆದ ಗುಣಮಟ್ಟ' : 'Certified Quality Nursery'}</span>
                  </div>
                  <h2 className="section-title">
                    {currentLang === 'kn' ? 'ಶ್ರೀ ಅಡಿಕೆ ಹ್ಯಾವನ್ ನರ್ಸರಿಯ ಪ್ರಮುಖ ವಿಭಾಗಗಳು' : 'Explore Sri Areca Haven'}
                  </h2>
                  <p className="section-subtitle">
                    {currentLang === 'kn'
                      ? 'ಉತ್ತಮ ತಾಯಿ ಗಿಡಗಳ ಜೆನೆಟಿಕ್ಸ್, ತೋಟದ ಇಳುವರಿ ಮತ್ತು ಲಾಭದ ಲೆಕ್ಕಾಚಾರ, ಹಾಗೂ ವೈಜ್ಞಾನಿಕ ಕೃಷಿ ಮಾರ್ಗದರ್ಶನ.'
                      : 'Discover elite mother palm genetics, interactive farm yield tools, and expert cultivation guidance.'}
                  </p>
                </div>

                <div className="home-feature-cards">
                  <div className="home-card glass-card" onClick={() => navigateToPage('products')}>
                    <div className="card-icon-bg">
                      <Sprout size={24} />
                    </div>
                    <h3>{currentLang === 'kn' ? 'ಅಧಿಕ ಇಳುವರಿಯ ತಳಿಗಳು' : 'Arecanut Varieties'}</h3>
                    <p>
                      {currentLang === 'kn'
                        ? '25+ ವರ್ಷಗಳ ತಾಯಿ ಮರಗಳಿಂದ ಆರಿಸಿದ ಮೋಹಿತ್‌ನಗರ, ಮಂಗಳ, ಸುಮಂಗಳ, ಶ್ರೀಮಂಗಳ ಸಸಿಗಳು.'
                        : 'Explore Mohitnagar, Mangala, Sumangala & hybrid saplings selected from 25+ year mother palms.'}
                    </p>
                    <span className="card-link">{currentLang === 'kn' ? 'ತಳಿಗಳನ್ನು ನೋಡಿ' : 'View Varieties'} <ArrowRight size={15} /></span>
                  </div>

                  <div className="home-card glass-card" onClick={() => navigateToPage('calculator')}>
                    <div className="card-icon-bg">
                      <CalcIcon size={24} />
                    </div>
                    <h3>{currentLang === 'kn' ? 'ತೋಟದ ಲಾಭದ ಕ್ಯಾಲ್ಕುಲೇಟರ್' : 'Farm Profit Calculator'}</h3>
                    <p>
                      {currentLang === 'kn'
                        ? 'ಒಣ ಅಡಿಕೆ ಇಳುವರಿ, ಸಾಂದ್ರತೆ, ಕಾಳುಮೆಣಸು ಮಿಶ್ರಬೆಳೆಯ ಆದಾಯ ಮತ್ತು ಎಕರೆವಾರು ನಿವ್ವಳ ಲಾಭ ಲೆಕ್ಕ ಹಾಕಿ.'
                        : 'Calculate dry nut yield, spacing density, intercrop bonuses, and estimated farm profit per acre.'}
                    </p>
                    <span className="card-link">{currentLang === 'kn' ? 'ಲಾಭ ಲೆಕ್ಕ ಹಾಕಿ' : 'Calculate Revenue'} <ArrowRight size={15} /></span>
                  </div>

                  <div className="home-card glass-card" onClick={() => navigateToPage('about')}>
                    <div className="card-icon-bg">
                      <ShieldCheck size={24} />
                    </div>
                    <h3>{currentLang === 'kn' ? 'ನರ್ಸರಿ ಪರಂಪರೆ ಮತ್ತು ಅನುಭವ' : 'About Our Nursery'}</h3>
                    <p>
                      {currentLang === 'kn'
                        ? 'ನಮ್ಮ 25 ವರ್ಷಗಳ ಕೃಷಿ ಇತಿಹಾಸ, ತಾಯಿ ಮರಗಳ ಆಯ್ಕೆಯ ವೈಜ್ಞಾನಿಕ ಹಂತಗಳು ಮತ್ತು ಸರ್ಕಾರಿ ಮಾನ್ಯತೆ.'
                        : 'Learn about our 25-year heritage, scientific mother palm selection, and Govt. accreditation.'}
                    </p>
                    <span className="card-link">{currentLang === 'kn' ? 'ಹೆಚ್ಚಿನ ಮಾಹಿತಿ' : 'Learn More'} <ArrowRight size={15} /></span>
                  </div>

                  <div className="home-card glass-card" onClick={() => navigateToPage('gallery')}>
                    <div className="card-icon-bg">
                      <Image size={24} />
                    </div>
                    <h3>{currentLang === 'kn' ? 'ನರ್ಸರಿ ಫೋಟೋ ಗ್ಯಾಲರಿ' : 'Nursery Photo Gallery'}</h3>
                    <p>
                      {currentLang === 'kn'
                        ? 'ತಾಯಿ ಮರಗಳು, ಪಾಲಿಬ್ಯಾಗ್ ಪಾತಿಗಳು, ಬೇರುಗಳ ಬೆಳವಣಿಗೆ ಮತ್ತು ಬಂಪರ್ ಗೊಂಚಲುಗಳ ನೈಜ ಫೋಟೋಗಳು.'
                        : 'View high-resolution photos of mother palms, root development, vermicompost beds, and packing.'}
                    </p>
                    <span className="card-link">{currentLang === 'kn' ? 'ಗ್ಯಾಲರಿ ವೀಕ್ಷಿಸಿ' : 'Browse Gallery'} <ArrowRight size={15} /></span>
                  </div>

                  <div className="home-card glass-card" onClick={() => navigateToPage('care-guide')}>
                    <div className="card-icon-bg">
                      <BookOpen size={24} />
                    </div>
                    <h3>{currentLang === 'kn' ? 'ನಾಟಿ & ರೋಗ ನಿರ್ವಹಣೆ' : 'Planting & Care Guide'}</h3>
                    <p>
                      {currentLang === 'kn'
                        ? 'ಗುಂಡಿ ತೆಗೆಯುವುದು, ಹನಿ ನೀರಾವರಿ, ಬೋರ್ಡೋ ಸಿಂಪಡಣೆ ಮತ್ತು ಕೊಳೆರೋಗ ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳು.'
                        : 'Step-by-step guidance on pit preparation, drip irrigation, organic fertilizer dosage, and pest management.'}
                    </p>
                    <span className="card-link">{currentLang === 'kn' ? 'ಮಾರ್ಗದರ್ಶಿ ಓದಿ' : 'Read Guide'} <ArrowRight size={15} /></span>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="app-main">
      {/* Top Header with Language Switcher and Quote Cart */}
      <Header 
        currentPage={currentPage} 
        navigateToPage={navigateToPage}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />

      {/* Main Dynamic View */}
      <main className="main-content-area">
        {renderPageContent()}
      </main>

      {/* Footer */}
      <Footer 
        navigateToPage={navigateToPage} 
        currentLang={currentLang}
      />

      {/* Advanced AI Chatbot for Farmers */}
      <Chatbot 
        currentLang={currentLang} 
        navigateToPage={navigateToPage} 
      />

      {/* Floating Instant WhatsApp Button for Farmers */}
      <a
        href="https://wa.me/919606841193?text=Hello%20Sri%20Areca%20Haven%20Nursery,%20I%20want%20to%20inquire%20about%20Arecanut%20saplings."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        title="Chat on WhatsApp"
        aria-label="Chat directly on WhatsApp"
      >
        <MessageSquare size={22} />
        <span className="floating-text">{currentLang === 'kn' ? 'ವಾಟ್ಸಾಪ್ ಸಹಾಯ' : 'WhatsApp'}</span>
      </a>

      <style>{`
        .app-main {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          overflow-x: hidden;
        }

        .main-content-area {
          flex: 1;
        }

        .home-features-section {
          background: var(--bg-surface-elevated);
        }

        .home-feature-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        @media (max-width: 768px) {
          .home-feature-cards {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .home-card {
          padding: 26px;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          background: #ffffff;
        }

        @media (max-width: 480px) {
          .home-card {
            padding: 20px 16px;
          }
        }

        .home-card:hover {
          transform: translateY(-3px);
          border-color: var(--primary-600);
          box-shadow: var(--shadow-md);
        }

        .card-icon-bg {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-sm);
          background: var(--primary-100);
          color: var(--primary-800);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }

        .home-card h3 {
          font-size: 1.15rem;
          font-weight: 800;
          margin-bottom: 8px;
          color: var(--text-main);
        }

        .home-card p {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 16px;
          flex: 1;
        }

        .card-link {
          font-size: 0.825rem;
          font-weight: 800;
          color: var(--primary-800);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .home-card:hover .card-link {
          gap: 8px;
          color: var(--primary-900);
        }

        /* Floating WhatsApp Button */
        .floating-whatsapp-btn {
          position: fixed;
          bottom: 92px;
          right: 24px;
          z-index: 1500;
          background: #25d366;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: var(--radius-full);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.38);
          text-decoration: none;
          font-weight: 800;
          font-size: 0.875rem;
          transition: all 0.25s ease;
        }

        .floating-whatsapp-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.48);
          background: #20ba5a;
        }

        @media (max-width: 640px) {
          .floating-text {
            display: none;
          }
          .floating-whatsapp-btn {
            padding: 12px;
            bottom: 84px;
            right: 16px;
          }
        }
      `}</style>
    </div>
  );
}
