import React from 'react';
import { Award } from 'lucide-react';

export default function About({ currentLang }) {
  const steps = [
    {
      num: "01",
      title: currentLang === 'kn' ? "ಪ್ರಮಾಣೀಕೃತ ತಾಯಿ ಮರಗಳ ಆಯ್ಕೆ" : "Certified Elite Mother Palms",
      desc: currentLang === 'kn' 
        ? "25+ ವರ್ಷ ಹಳೆಯ, ವರ್ಷಕ್ಕೆ 4.5 ಕೆ.ಜಿಗಿಂತ ಅಧಿಕ ಒಣ ಅಡಿಕೆ ನೀಡುವ ಆರೋಗ್ಯಕರ ತಾಯಿ ಮರಗಳಿಂದ ಮಾತ್ರ ಬೀಜದ ಅಡಿಕೆ ಕಟಾವು." 
        : "Seed nuts are strictly collected from 25+ year old benchmark palms producing >4.5 kg dry nut per tree annually."
    },
    {
      num: "02",
      title: currentLang === 'kn' ? "ನೀರಿನ ತೇಲುವಿಕೆ ಮತ್ತು ತೂಕ ಪರೀಕ್ಷೆ" : "Flotation & Weight Selection",
      desc: currentLang === 'kn' 
        ? "ಪ್ರತಿ ಬೀಜದ ಅಡಿಕೆಯನ್ನು ನೀರಿನಲ್ಲಿ ತೇಲಿಸಿ ಪರೀಕ್ಷಿಸಲಾಗುತ್ತದೆ. ಟೊಳ್ಳು ಬೀಜಗಳನ್ನು ನಿವಾರಿಸಿ 98.5% ಮೊಳಕೆ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲಾಗುತ್ತದೆ." 
        : "Every seed nut undergoes water flotation testing to filter out hollow or under-weight seeds, ensuring 98.5% germination."
    },
    {
      num: "03",
      title: currentLang === 'kn' ? "ಸಾವಯವ ಎರೆಹುಳು ಗೊಬ್ಬರ ಮಿಶ್ರಣ" : "Bio-Organically Enriched Soil",
      desc: currentLang === 'kn' 
        ? "ಕೆಂಪು ಜೇಡಿ ಮಣ್ಣು, ಎರೆಹುಳು ಗೊಬ್ಬರ, ಬೇವಿನ ಹಿಂಡಿ ಮತ್ತು ಟ್ರೈಕೋಡರ್ಮ ಮಿಕ್ಸ್ ಮಾಡಿ ಪಾಲಿಬ್ಯಾಗ್‌ನಲ್ಲಿ ಪೋಷಿಸಲಾಗುತ್ತದೆ." 
        : "Nurtured in UV-stabilized polybags filled with red loam, vermicompost, neem cake, and Trichoderma bio-fungicides."
    },
    {
      num: "04",
      title: currentLang === 'kn' ? "ಬಿಸಿಲು ಸಹಿಷ್ಣುತೆ ಮತ್ತು ಬೇರು ತಪಾಸಣೆ" : "Sun Hardening & Root Inspection",
      desc: currentLang === 'kn' 
        ? "ತೋಟಕ್ಕೆ ಸಾಗಿಸುವ ಮುನ್ನ ಸಸಿಗಳಿಗೆ ನೈಸರ್ಗಿಕ ಬಿಸಿಲು ಸಹಿಷ್ಣುತೆ ಮತ್ತು ಬಿಳಿ ಬೇರುಗಳ ತಪಾಸಣೆ ಮಾಡಲಾಗುತ್ತದೆ." 
        : "Saplings undergo scientific sun-hardening and feeder root density inspection before pan-Karnataka dispatch."
    }
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          {/* Visual Side */}
          <div className="about-visual">
            <div className="about-image-wrapper">
              <img src="/mother_palms.png" alt="Sri Areca Mother Palm Garden" className="about-img" />
              <div className="about-experience-badge glass-card">
                <span className="exp-years">25+</span>
                <span className="exp-lbl">
                  {currentLang === 'kn' ? 'ವರ್ಷಗಳ ಕೃಷಿ ಪಾರಂಪರಿಕ ನಂಬಿಕೆ' : 'Years of Agronomic Excellence'}
                </span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="about-content">
            <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
              <Award size={15} />
              <span>{currentLang === 'kn' ? 'ನರ್ಸರಿ ಪರಂಪರೆ ಮತ್ತು ಗುಣಮಟ್ಟ' : 'Nursery Heritage & Quality Standard'}</span>
            </div>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
              {currentLang === 'kn' 
                ? 'ಅಪ್ಪಟ ತಾಯಿ ಗಿಡದ ಅಡಿಕೆ ಸಸಿಗಳ ಕೃಷಿ ಕ್ರಾಂತಿ' 
                : 'Pioneering Certified High-Yield Arecanut Genetics'}
            </h2>

            <p className="about-text">
              {currentLang === 'kn'
                ? '2001ರಲ್ಲಿ ರಾಮನಗರ ಜಿಲ್ಲೆಯ ಮಾಗಡಿ ತಾಲೂಕಿನ ತಿಪ್ಪಸಂದ್ರದಲ್ಲಿ ಸ್ಥಾಪನೆಯಾದ ಶ್ರೀ ಅಡಿಕೆ ಹ್ಯಾವನ್ ನರ್ಸರಿಯು, ರೈತರಿಗೆ ಕಲಬೆರಕೆ ಇಲ್ಲದ 100% ಶುದ್ಧ ತಾಯಿ ಗಿಡದ ಅಡಿಕೆ ಸಸಿಗಳನ್ನು ಪೂರೈಸುವ ಮಹತ್ವಾಕಾಂಕ್ಷೆಯೊಂದಿಗೆ ಮುನ್ನಡೆಯುತ್ತಿದೆ.'
                : 'Founded in 2001 in Thippasandra, Magadi Taluk, Ramanagara District, Sri Areca Haven Nursery was established to eliminate rogue, low-yielding seedlings and guarantee farmers true-to-type, high-productivity Arecanut varieties.'}
            </p>

            <p className="about-text">
              {currentLang === 'kn'
                ? 'ನಾವು 25ಕ್ಕೂ ಹೆಚ್ಚು ಎಕರೆ ವಿಸ್ತೀರ್ಣದಲ್ಲಿ ಮೋಹಿತ್‌ನಗರ, ಮಂಗಳ, ಸುಮಂಗಳ, ಶ್ರೀಮಂಗಳ ತಳಿಗಳ 1,200ಕ್ಕೂ ಹೆಚ್ಚು ಮಾನ್ಯತೆ ಪಡೆದ ತಾಯಿ ಮರಗಳನ್ನು ವೈಜ್ಞಾನಿಕವಾಗಿ ನಿರ್ವಹಿಸುತ್ತಿದ್ದೇವೆ.'
                : 'We scientifically manage over 1,200 benchmark mother palms of Mohitnagar, Mangala, Sumangala, and Srimangala selections. Every sapling dispatched carries our guarantee of genetic purity and deep root vigor.'}
            </p>

            {/* Quality Steps Grid */}
            <div className="about-steps-grid">
              {steps.map((s, idx) => (
                <div key={idx} className="about-step-card glass-card">
                  <span className="step-num">{s.num}</span>
                  <div>
                    <h4 className="step-title">{s.title}</h4>
                    <p className="step-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: var(--bg-page);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 48px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        .about-image-wrapper {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 4px solid #ffffff;
          background: #ffffff;
        }

        .about-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 768px) {
          .about-img {
            height: 280px;
          }
        }

        .about-experience-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-active);
        }

        @media (max-width: 480px) {
          .about-experience-badge {
            padding: 10px 14px;
            bottom: 12px;
            left: 12px;
          }
        }

        .exp-years {
          font-family: 'Outfit', sans-serif;
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--primary-800);
          line-height: 1;
        }

        @media (max-width: 480px) {
          .exp-years {
            font-size: 1.8rem;
          }
        }

        .exp-lbl {
          font-weight: 700;
          font-size: 0.775rem;
          color: var(--text-main);
          max-width: 130px;
          line-height: 1.3;
        }

        .about-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .about-steps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 24px;
        }

        @media (max-width: 640px) {
          .about-steps-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }

        .about-step-card {
          padding: 14px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
          background: #ffffff;
        }

        .step-num {
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--accent-amber-dark);
          background: var(--gold-subtle);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-title {
          font-size: 0.875rem;
          font-weight: 700;
          margin-bottom: 4px;
          color: var(--text-main);
        }

        .step-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
}
