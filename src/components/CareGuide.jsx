import React, { useState } from 'react';
import { CARE_GUIDE_STEPS, FAQS } from '../data/nurseryData';
import { BookOpen, ChevronDown, ChevronUp, Sprout, Shovel, Grid, Droplets, ShieldCheck, HelpCircle } from 'lucide-react';

export default function CareGuide({ currentLang }) {
  const [openFaq, setOpenFaq] = useState(0);

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'Shovel': return <Shovel size={20} />;
      case 'Grid': return <Grid size={20} />;
      case 'Sprout': return <Sprout size={20} />;
      case 'Droplets': return <Droplets size={20} />;
      case 'ShieldCheck': return <ShieldCheck size={20} />;
      default: return <Sprout size={20} />;
    }
  };

  return (
    <section id="care-guide" className="section-padding care-guide-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-gold">
            <BookOpen size={15} />
            <span>{currentLang === 'kn' ? 'ವೈಜ್ಞಾನಿಕ ಕೃಷಿ ಮಾರ್ಗದರ್ಶಿ' : 'Agronomy & Plantation Care'}</span>
          </div>
          <h2 className="section-title">
            {currentLang === 'kn' ? 'ಅಡಿಕೆ ನಾಟಿ ಮತ್ತು ಪೋಷಣೆ ಮಾರ್ಗದರ್ಶಿ' : 'Arecanut Cultivation & Best Practices'}
          </h2>
          <p className="section-subtitle">
            {currentLang === 'kn'
              ? 'ಗುಂಡಿ ತೆಗೆಯುವುದು, ಹನಿ ನೀರಾವರಿ, ಗೊಬ್ಬರ ನಿರ್ವಹಣೆ ಮತ್ತು ಕೊಳೆರೋಗ/ಮಹಾಲಿ ರೋಗ ತಡೆಗಟ್ಟುವ ವೈಜ್ಞಾನಿಕ ಹಂತಗಳು.'
              : 'Field-tested agronomic instructions for pit preparation, drip fertigation, spacing orientation, and monsoon disease management.'}
          </p>
        </div>

        {/* 5-Step Cultivation Roadmap */}
        <div className="roadmap-grid">
          {CARE_GUIDE_STEPS.map((stepItem, idx) => (
            <div key={idx} className="roadmap-card glass-card">
              <div className="step-top-row">
                <div className="roadmap-icon-bg">
                  {getStepIcon(stepItem.icon)}
                </div>
                <span className="roadmap-step-lbl">
                  {currentLang === 'kn' ? `ಹಂತ ${stepItem.step}` : `Step ${stepItem.step}`}
                </span>
              </div>
              <h3 className="roadmap-title">{currentLang === 'kn' ? stepItem.titleKn : stepItem.title}</h3>
              <p className="roadmap-summary">{currentLang === 'kn' ? stepItem.summaryKn : stepItem.summary}</p>
              <div className="roadmap-details">{currentLang === 'kn' ? stepItem.detailsKn : stepItem.details}</div>
            </div>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="faq-wrapper">
          <div className="faq-header">
            <HelpCircle size={22} className="faq-icon-title" />
            <h3 className="faq-section-title">
              {currentLang === 'kn' ? 'ರೈತರಿಂದ ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು' : 'Frequently Asked Questions'}
            </h3>
          </div>

          <div className="faq-accordion">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-item glass-card ${isOpen ? 'open' : ''}`}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="faq-question-btn"
                  >
                    <span>{currentLang === 'kn' ? faq.questionKn : faq.question}</span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer-box animate-fade-in">
                      <p>{currentLang === 'kn' ? faq.answerKn : faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .care-guide-section {
          background: var(--bg-page);
        }

        .roadmap-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
          margin-bottom: 56px;
        }

        @media (max-width: 768px) {
          .roadmap-grid {
            grid-template-columns: 1fr;
            margin-bottom: 40px;
            gap: 16px;
          }
        }

        .roadmap-card {
          padding: 22px;
          display: flex;
          flex-direction: column;
          background: #ffffff;
        }

        @media (max-width: 480px) {
          .roadmap-card {
            padding: 16px;
          }
        }

        .step-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .roadmap-icon-bg {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: var(--primary-100);
          color: var(--primary-800);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .roadmap-step-lbl {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 0.85rem;
          color: var(--accent-amber-dark);
          background: var(--gold-subtle);
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }

        .roadmap-title {
          font-size: 1.1rem;
          font-weight: 800;
          margin-bottom: 6px;
          color: var(--text-main);
        }

        .roadmap-summary {
          font-size: 0.85rem;
          color: var(--text-main);
          font-weight: 600;
          margin-bottom: 10px;
          line-height: 1.4;
        }

        .roadmap-details {
          font-size: 0.775rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-top: auto;
          padding-top: 10px;
          border-top: 1px solid var(--border-color);
        }

        /* FAQ Styling */
        .faq-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 22px;
          text-align: center;
        }

        .faq-icon-title {
          color: var(--primary-800);
          flex-shrink: 0;
        }

        .faq-section-title {
          font-size: 1.45rem;
          font-weight: 800;
        }

        @media (max-width: 480px) {
          .faq-section-title {
            font-size: 1.2rem;
          }
        }

        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item {
          overflow: hidden;
          background: #ffffff;
        }

        .faq-question-btn {
          width: 100%;
          padding: 16px 20px;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
          cursor: pointer;
          gap: 12px;
        }

        @media (max-width: 480px) {
          .faq-question-btn {
            padding: 14px 16px;
            font-size: 0.875rem;
          }
        }

        .faq-answer-box {
          padding: 0 20px 16px 20px;
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.55;
          border-top: 1px dashed var(--border-color);
          padding-top: 14px;
        }

        @media (max-width: 480px) {
          .faq-answer-box {
            padding: 0 16px 14px 16px;
            font-size: 0.825rem;
          }
        }
      `}</style>
    </section>
  );
}
