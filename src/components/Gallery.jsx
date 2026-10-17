import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/nurseryData';
import { Image as ImageIcon, X, ZoomIn } from 'lucide-react';

export default function Gallery({ currentLang }) {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const tabs = [
    { id: 'all', label: currentLang === 'kn' ? 'ಎಲ್ಲಾ ಫೋಟೋಗಳು' : 'All Photos' },
    { id: 'mother-palms', label: currentLang === 'kn' ? 'ತಾಯಿ ಮರಗಳ ತೋಟ' : 'Mother Palm Garden' },
    { id: 'nursery-beds', label: currentLang === 'kn' ? 'ಪಾಲಿಬ್ಯಾಗ್ ನರ್ಸರಿ ಪಾತಿ' : 'Polybag Seedbeds' },
    { id: 'saplings', label: currentLang === 'kn' ? 'ಸಸಿಗಳು & ಬೇರುಗಳು' : 'Saplings & Roots' },
    { id: 'harvest', label: currentLang === 'kn' ? 'ಬಂಪರ್ ಫಸಲು' : 'Bumper Harvests' }
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeTab === 'all' || item.category === activeTab
  );

  return (
    <section id="gallery" className="section-padding gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-gold">
            <ImageIcon size={15} />
            <span>{currentLang === 'kn' ? 'ನರ್ಸರಿ ಫೋಟೋ ಗ್ಯಾಲರಿ' : 'Nursery Photo Gallery'}</span>
          </div>
          <h2 className="section-title">
            {currentLang === 'kn' ? 'ತೋಟ ಮತ್ತು ನರ್ಸರಿಯ ನೈಜ ದೃಶ್ಯಗಳು' : 'Farm & Nursery Visual Showcase'}
          </h2>
          <p className="section-subtitle">
            {currentLang === 'kn'
              ? 'ಸುಳ್ಯದಲ್ಲಿರುವ ನಮ್ಮ 25 ಎಕರೆ ತಾಯಿ ಮರಗಳ ತೋಟ, ಪಾಲಿಬ್ಯಾಗ್ ಹಸಿರುಮನೆ ಮತ್ತು ಬಂಪರ್ ಗೊಂಚಲುಗಳ ಚಿತ್ರಗಳು.'
              : 'Take a virtual tour of our 25-acre certified mother palm blocks, polybag nursery beds, and bumper harvest clusters.'}
          </p>

          {/* Filter Tabs */}
          <div className="gallery-tabs">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`gallery-tab-btn ${activeTab === t.id ? 'active' : ''}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImg(item)}
              className="gallery-card glass-card"
            >
              <img src={item.image} alt={item.title} className="gallery-img" />
              <div className="gallery-overlay">
                <div className="zoom-icon-bg">
                  <ZoomIn size={18} />
                </div>
                <h4 className="g-title">{currentLang === 'kn' ? item.titleKn : item.title}</h4>
                <p className="g-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightboxImg(null)} className="lightbox-close" aria-label="Close image">
              <X size={22} />
            </button>
            <img src={lightboxImg.image} alt={lightboxImg.title} className="lightbox-img" />
            <div className="lightbox-caption">
              <h3>{currentLang === 'kn' ? lightboxImg.titleKn : lightboxImg.title}</h3>
              <p>{lightboxImg.description}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-section {
          background: var(--bg-surface-elevated);
        }

        .gallery-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        .gallery-tab-btn {
          background: #ffffff;
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          padding: 7px 14px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .gallery-tab-btn.active {
          background: var(--primary-800);
          color: #ffffff;
          border-color: var(--primary-800);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }

        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .gallery-card {
          position: relative;
          height: 250px;
          overflow: hidden;
          cursor: pointer;
          border-radius: var(--radius-md);
        }

        @media (max-width: 480px) {
          .gallery-card {
            height: 220px;
          }
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-card:hover .gallery-img {
          transform: scale(1.05);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(10, 30, 15, 0.9) 0%, rgba(10, 30, 15, 0.2) 60%, rgba(0,0,0,0) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 16px;
          color: #ffffff;
        }

        .zoom-icon-bg {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          opacity: 0;
          transform: translateY(-4px);
          transition: all 0.25s ease;
        }

        .gallery-card:hover .zoom-icon-bg {
          opacity: 1;
          transform: translateY(0);
        }

        .g-title {
          font-size: 1.05rem;
          font-weight: 800;
          margin-bottom: 3px;
          color: #ffffff;
        }

        .g-desc {
          font-size: 0.75rem;
          opacity: 0.9;
          line-height: 1.35;
          color: #dcfce7;
        }

        /* Lightbox */
        .lightbox-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
          z-index: 2500;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .lightbox-content {
          max-width: 860px;
          width: 100%;
          position: relative;
          background: #000000;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        .lightbox-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255,255,255,0.25);
          border: none;
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
        }

        .lightbox-img {
          width: 100%;
          max-height: 65vh;
          object-fit: contain;
          display: block;
        }

        .lightbox-caption {
          padding: 16px 20px;
          background: #112817;
          color: white;
        }

        .lightbox-caption h3 {
          font-size: 1.1rem;
          color: white;
          margin-bottom: 4px;
        }

        .lightbox-caption p {
          font-size: 0.8rem;
          color: #bbf7d0;
        }
      `}</style>
    </section>
  );
}
