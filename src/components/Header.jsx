import React, { useState, useEffect } from 'react';
import { Sprout, Menu, X, MessageSquare, Globe } from 'lucide-react';
import { TRANSLATIONS } from '../data/nurseryData';

export default function Header({ currentPage, navigateToPage, currentLang, setCurrentLang }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t.navHome },
    { id: 'about', label: t.navAbout },
    { id: 'gallery', label: t.navGallery },
    { id: 'care-guide', label: t.navCareGuide },
    { id: 'contact', label: t.navContact },
  ];

  const handleNavClick = (id) => {
    navigateToPage(id);
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'en' ? 'kn' : 'en');
  };

  return (
    <header className={`header-root ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand Logo */}
        <div className="brand-logo" onClick={() => handleNavClick('home')}>
          <div className="logo-icon-bg">
            <Sprout className="logo-icon" size={22} />
          </div>
          <div className="logo-text">
            <span className="brand-title">{t.brandName}</span>
            <span className="brand-subtitle">{t.brandTagline}</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`nav-link ${currentPage === link.id ? 'active' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Header Action Controls */}
        <div className="header-actions">
          {/* Language Switcher Button (English / Kannada) */}
          <button 
            onClick={toggleLanguage} 
            className="lang-toggle-btn"
            title={currentLang === 'en' ? 'Switch to Kannada' : 'Switch to English'}
          >
            <Globe size={15} />
            <span className="lang-text">{currentLang === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
          </button>



          {/* Direct WhatsApp Call Button */}
          <a
            href="https://wa.me/919606841193?text=Hello%20Sri%20Areca%20Haven%20Nursery,%20I%20want%20to%20inquire%20about%20high-yield%20Arecanut%20saplings."
            target="_blank"
            rel="noopener noreferrer"
            className="header-whatsapp-btn btn btn-primary"
          >
            <MessageSquare size={16} />
            <span className="btn-text">{t.whatsappBtn}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <div className="mobile-drawer-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`mobile-nav-link ${currentPage === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="mobile-drawer-cta">
              <a
                href="https://wa.me/919606841193?text=Hello%20Sri%20Areca%20Haven%20Nursery,%20I%20want%20to%20inquire%20about%20saplings."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <MessageSquare size={18} />
                <span>{t.whatsappBtn}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .header-root {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 2px 10px rgba(18, 48, 25, 0.04);
          transition: all 0.25s ease;
        }

        .header-root.scrolled {
          box-shadow: 0 4px 18px rgba(18, 48, 25, 0.08);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          width: 100%;
          max-width: 100%;
          padding: 0 28px;
          gap: 16px;
        }

        @media (max-width: 768px) {
          .header-container {
            height: 64px;
            padding: 0 16px;
            gap: 8px;
          }
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          user-select: none;
          flex-shrink: 0;
        }

        .logo-icon-bg {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--primary-700), var(--primary-900));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 10px rgba(22, 128, 61, 0.25);
          flex-shrink: 0;
        }

        @media (max-width: 480px) {
          .logo-icon-bg {
            width: 36px;
            height: 36px;
            border-radius: 8px;
          }
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-family: 'Outfit', 'Noto Sans Kannada', sans-serif;
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--text-main);
          white-space: nowrap;
          line-height: 1.15;
        }

        @media (max-width: 480px) {
          .brand-title {
            font-size: 1rem;
          }
        }

        .brand-subtitle {
          font-size: 0.7rem;
          color: var(--primary-700);
          font-weight: 600;
          letter-spacing: 0.2px;
          white-space: nowrap;
          display: block;
        }

        @media (max-width: 600px) {
          .brand-subtitle {
            display: none;
          }
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          flex-grow: 1;
        }

        @media (max-width: 1080px) {
          .desktop-nav {
            display: none;
          }
        }

        .nav-link {
          background: none;
          border: none;
          padding: 8px 12px;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-muted);
          cursor: pointer;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: var(--primary-800);
          background: var(--primary-50);
        }

        .nav-link.active {
          color: var(--primary-900);
          background: var(--primary-100);
          font-weight: 800;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        @media (max-width: 480px) {
          .header-actions {
            gap: 6px;
          }
        }

        .lang-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: var(--bg-surface-elevated);
          border: 1px solid var(--border-color);
          padding: 7px 12px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary-800);
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        @media (max-width: 480px) {
          .lang-toggle-btn {
            padding: 6px 10px;
            font-size: 0.75rem;
          }
        }

        .lang-toggle-btn:hover {
          border-color: var(--primary-600);
          background: var(--primary-50);
        }

        .basket-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-surface-elevated);
          border: 1px solid var(--border-color);
          padding: 7px 12px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-main);
          cursor: pointer;
          position: relative;
          white-space: nowrap;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .basket-text {
            display: none;
          }
          .basket-btn {
            padding: 7px 10px;
          }
        }

        .basket-badge {
          background: var(--accent-amber);
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 800;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .header-whatsapp-btn {
          padding: 8px 16px;
          font-size: 0.85rem;
          white-space: nowrap;
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 960px) {
          .header-whatsapp-btn {
            display: none;
          }
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          cursor: pointer;
          padding: 6px;
          flex-shrink: 0;
        }

        @media (max-width: 1080px) {
          .mobile-menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: #ffffff;
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 16px 30px rgba(0, 0, 0, 0.12);
          padding: 16px 20px;
          max-height: calc(100vh - 72px);
          overflow-y: auto;
        }

        .mobile-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          text-align: left;
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          padding: 12px 14px;
          border-radius: var(--radius-sm);
          white-space: nowrap;
          transition: background 0.15s ease;
        }

        .mobile-nav-link.active {
          background: var(--primary-100);
          color: var(--primary-900);
        }

        .mobile-drawer-cta {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
      `}</style>
    </header>
  );
}
