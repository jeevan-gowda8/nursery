import React from 'react';
import { TESTIMONIALS } from '../data/nurseryData';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';

export default function Testimonials({ currentLang }) {
  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-gold">
            <Quote size={15} />
            <span>{currentLang === 'kn' ? 'ಪ್ರಗತಿಪರ ರೈತರ ನೈಜ ಅನಿಸಿಕೆಗಳು' : 'Farmer Success Stories'}</span>
          </div>
          <h2 className="section-title">
            {currentLang === 'kn' ? 'ರೈತರ ಅನುಭವಗಳು & ಯಶೋಗಾಥೆಗಳು' : 'Farmer Reviews & Success Stories'}
          </h2>
          <p className="section-subtitle">
            {currentLang === 'kn'
              ? 'ನಮ್ಮ ಪ್ರಮಾಣೀಕೃತ ತಾಯಿ ಗಿಡದ ಅಡಿಕೆ ಸಸಿಗಳನ್ನು ನಾಟಿ ಮಾಡಿ ಬಂಪರ್ ಫಸಲು ಪಡೆದ ರೈತರ ನೈಜ ವಿಮರ್ಶೆಗಳು.'
              : 'Verified reviews from progressive farmers who transformed their plantations with our certified mother palm seedlings.'}
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="testimonial-card glass-card">
              <div className="t-card-header">
                <div className="t-author-box">
                  <h4 className="t-name">{currentLang === 'kn' ? item.nameKn : item.name}</h4>
                  <div className="t-location">
                    <MapPin size={13} />
                    <span>{currentLang === 'kn' ? item.locationKn : item.location}</span>
                  </div>
                </div>
                <div className="t-stat-pill">
                  <CheckCircle size={13} />
                  <span>{item.yieldStat}</span>
                </div>
              </div>

              {/* Stars */}
              <div className="t-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={15} className="star-filled" />
                ))}
              </div>

              <p className="t-quote">"{currentLang === 'kn' ? item.quoteKn : item.quote}"</p>

              <div className="t-meta">
                <span>{currentLang === 'kn' ? 'ತೋಟ:' : 'Land:'} <strong>{item.acreage}</strong></span>
                <span>•</span>
                <span>{currentLang === 'kn' ? 'ಖರೀದಿಸಿದ ತಳಿ:' : 'Variety:'} <strong>{item.varietyBought}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background: var(--bg-surface-elevated);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .testimonial-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          background: #ffffff;
        }

        @media (max-width: 480px) {
          .testimonial-card {
            padding: 18px 16px;
          }
        }

        .t-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
          gap: 10px;
          flex-wrap: wrap;
        }

        .t-name {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .t-location {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.775rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .t-stat-pill {
          background: var(--primary-100);
          color: var(--primary-900);
          font-size: 0.725rem;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
        }

        .t-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 12px;
        }

        .star-filled {
          color: var(--accent-gold);
          fill: var(--accent-gold);
        }

        .t-quote {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.55;
          font-style: italic;
          margin-bottom: 16px;
        }

        .t-meta {
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
          font-size: 0.75rem;
          color: var(--text-light);
          display: flex;
          gap: 6px;
          align-items: center;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
}
