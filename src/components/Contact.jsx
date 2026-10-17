import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TRANSLATIONS } from '../data/nurseryData';

export default function Contact({ currentLang }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    acres: '2',
    variety: 'Mohitnagar High-Yield',
    message: ''
  });

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 40, spread: 60 });
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-gold">
            <Phone size={15} />
            <span>{currentLang === 'kn' ? 'ನೇರ ಸಂಪರ್ಕ & ಸಸಿಗಳ ಬುಕಿಂಗ್' : 'Connect & Order Booking'}</span>
          </div>
          <h2 className="section-title">
            {currentLang === 'kn' ? 'ಶ್ರೀ ಅಡಿಕೆ ಹ್ಯಾವನ್ ನರ್ಸರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ' : 'Contact Sri Areca Haven Nursery'}
          </h2>
          <p className="section-subtitle">
            {currentLang === 'kn'
              ? 'ರಾಮನಗರ ಜಿಲ್ಲೆಯ ಮಾಗಡಿ ತಾಲೂಕಿನ ತಿಪ್ಪಸಂದ್ರದಲ್ಲಿರುವ ನಮ್ಮ ನರ್ಸರಿಗೆ ಖುದ್ದಾಗಿ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ನಿಮ್ಮ ತೋಟಕ್ಕೆ ವಾಹನ ಸಾಗಾಟದ ಸಮಗ್ರ ದರಪಟ್ಟಿ ಪಡೆಯಿರಿ.'
              : 'Visit our nursery in Thippasandra, Magadi Taluk, Ramanagara District in person or request an instant bulk transport quote directly to your farm location.'}
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-card glass-card">
            <h3 className="c-card-title">
              {currentLang === 'kn' ? 'ನರ್ಸರಿ ವಿಳಾಸ ಮತ್ತು ಸಂಪರ್ಕ ಮಾಹಿತಿ' : 'Nursery Address & Enquiries'}
            </h3>
            
            <div className="contact-item">
              <div className="c-icon-bg">
                <MapPin size={18} />
              </div>
              <div>
                <strong>{t.brandName}</strong>
                <p>Thippasandra, Magadi Taluk, Ramanagara District, Karnataka - 562131</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="c-icon-bg">
                <Phone size={18} />
              </div>
              <div>
                <strong>{currentLang === 'kn' ? 'ನೇರ ಕರೆ / ಸಹಾಯವಾಣಿ' : 'Direct Phone / Call'}</strong>
                <p>+91 96068 41193 / +91 78921 68121</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="c-icon-bg">
                <Mail size={18} />
              </div>
              <div>
                <strong>{currentLang === 'kn' ? 'ಇಮೇಲ್ ವಿಳಾಸ' : 'Email Support'}</strong>
                <p><a href="mailto:Shreyasshetty4693@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>Shreyasshetty4693@gmail.com</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="c-icon-bg">
                <Clock size={18} />
              </div>
              <div>
                <strong>{currentLang === 'kn' ? 'ಕೆಲಸದ ಸಮಯ' : 'Working Hours'}</strong>
                <p>{currentLang === 'kn' ? 'ಸೋಮವಾರ - ಶನಿವಾರ: 7:30 AM - 6:30 PM (ಭಾನುವಾರ ತೋಟ ಭೇಟಿಗೆ ಲಭ್ಯ)' : 'Monday - Saturday: 7:30 AM - 6:30 PM (Sunday open for farm visits)'}</p>
              </div>
            </div>

            {/* Direct WhatsApp Call */}
            <div className="whatsapp-box">
              <h4>{currentLang === 'kn' ? 'ತಕ್ಷಣ ಸಸಿ ಲಭ್ಯತೆ ತಿಳಿಯಬೇಕೆ?' : 'Need Immediate Sapling Availability?'}</h4>
              <p>{currentLang === 'kn' ? 'ತಾಯಿ ಮರಗಳ ವೀಡಿಯೋ ತಪಾಸಣೆ ಮತ್ತು ದರಪಟ್ಟಿಗೆ ನಮ್ಮ ಹಿರಿಯ ತೋಟಗಾರಿಕಾ ತಜ್ಞರೊಂದಿಗೆ ನೇರವಾಗಿ ಚಾಟ್ ಮಾಡಿ.' : 'Chat directly with our senior horticulturist on WhatsApp for video inspection of mother palms.'}</p>
              <a
                href="https://wa.me/919606841193?text=Hello%20Sri%20Areca%20Haven%20Nursery,%20I%20want%20to%20visit%20the%20nursery%20and%20order%20saplings."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold w-full"
                style={{ width: '100%', marginTop: '12px' }}
              >
                <MessageSquare size={17} />
                <span>{t.whatsappBtn}</span>
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className="contact-form-card glass-card">
            <h3 className="c-card-title">
              {currentLang === 'kn' ? 'ಸಸಿಗಳ ವಿಚಾರಣೆ / ತೋಟ ಭೇಟಿ ಅರ್ಜಿ' : 'Send Sapling Inquiry / Farm Visit Request'}
            </h3>

            {submitted ? (
              <div className="success-box animate-fade-in">
                <CheckCircle2 size={44} className="text-green" />
                <h3>{currentLang === 'kn' ? 'ನಿಮ್ಮ ಅರ್ಜಿಯನ್ನು ಸ್ವೀಕರಿಸಲಾಗಿದೆ!' : 'Inquiry Received Successfully!'}</h3>
                <p>
                  {currentLang === 'kn' 
                    ? `ಧನ್ಯವಾದಗಳು ${formData.name}. ನಮ್ಮ ಕೃಷಿ ಪ್ರತಿನಿಧಿಯು 2 ಗಂಟೆಗಳ ಒಳಗೆ ${formData.phone} ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡಿ ದರ ಮತ್ತು ಸಾಗಾಟದ ವಿವರಗಳನ್ನು ನೀಡುತ್ತಾರೆ.`
                    : `Thank you ${formData.name}. Our agronomic representative will call you at ${formData.phone} within 2 hours with pricing & delivery details.`}
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '16px' }}>
                  {currentLang === 'kn' ? 'ಮತ್ತೊಂದು ಅರ್ಜಿ ಕಳುಹಿಸಿ' : 'Send Another Inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="c-form">
                <div className="form-row">
                  <div className="form-field">
                    <label>{currentLang === 'kn' ? 'ಪೂರ್ಣ ಹೆಸರು *' : 'Full Name *'}</label>
                    <input
                      type="text"
                      required
                      placeholder={currentLang === 'kn' ? 'ಉದಾ. ರಮೇಶ್ ಭಟ್' : 'e.g. Ramesh Bhat'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>{currentLang === 'kn' ? 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ *' : 'Mobile Number *'}</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9606841193"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>{currentLang === 'kn' ? 'ತೋಟದ ಸ್ಥಳ / ಜಿಲ್ಲೆ *' : 'Farm Location / District *'}</label>
                    <input
                      type="text"
                      required
                      placeholder={currentLang === 'kn' ? 'ಉದಾ. ಮಾಗಡಿ / ರಾಮನಗರ, ಕರ್ನಾಟಕ' : 'e.g. Magadi / Ramanagara, Karnataka'}
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>{currentLang === 'kn' ? 'ತೋಟದ ವಿಸ್ತೀರ್ಣ (ಎಕರೆ)' : 'Land Area (Acres)'}</label>
                    <input
                      type="number"
                      placeholder="e.g. 3"
                      value={formData.acres}
                      onChange={(e) => setFormData({ ...formData, acres: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>{currentLang === 'kn' ? 'ಆಯ್ಕೆಯ ಅಡಿಕೆ ತಳಿ' : 'Preferred Areca Variety'}</label>
                  <select
                    value={formData.variety}
                    onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                  >
                    <option value="Mohitnagar High-Yield">Mohitnagar High-Yield (ಮೋಹಿತ್‌ನಗರ)</option>
                    <option value="Mangala Dwarf Hybrid">Mangala Dwarf Hybrid (ಮಂಗಳ ಕುಬ್ಜ)</option>
                    <option value="Sumangala Elite">Sumangala Elite (ಸುಮಂಗಳ)</option>
                    <option value="Srimangala Premium">Srimangala Premium (ಶ್ರೀಮಂಗಳ)</option>
                    <option value="South Kanara Heritage">South Kanara Heritage (ಸ್ಥಳೀಯ ತಳಿ)</option>
                    <option value="Hirehalli Dwarf">Hirehalli Dwarf (ಹಿರೇಹಳ್ಳಿ ಕುಬ್ಜ)</option>
                    <option value="Need Recommendation">Need Nursery Agronomist Recommendation</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>{currentLang === 'kn' ? 'ಹೆಚ್ಚುವರಿ ವಿವರಗಳು / ಸೂಚನೆಗಳು' : 'Additional Notes / Delivery Instructions'}</label>
                  <textarea
                    rows="3"
                    placeholder={currentLang === 'kn' ? 'ನಾಟಿ ಮಾಡಲು ಬಯಸುವ ತಿಂಗಳು, ಅಂತರ ಅಥವಾ ಸಾಗಾಟದ ಅಗತ್ಯಗಳನ್ನು ತಿಳಿಸಿ...' : 'Specify target planting month, spacing, or delivery transport needs...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit w-full" style={{ width: '100%' }}>
                  <Send size={17} />
                  <span>{currentLang === 'kn' ? 'ಬುಕಿಂಗ್ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ' : 'Submit Order Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: var(--bg-page);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 32px;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        .contact-info-card, .contact-form-card {
          padding: 32px;
          background: #ffffff;
        }

        @media (max-width: 640px) {
          .contact-info-card, .contact-form-card {
            padding: 20px 16px;
          }
        }

        .c-card-title {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--border-color);
        }

        .contact-item {
          display: flex;
          gap: 14px;
          margin-bottom: 16px;
        }

        .c-icon-bg {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--primary-100);
          color: var(--primary-800);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-item strong {
          font-size: 0.9rem;
          display: block;
          margin-bottom: 2px;
          color: var(--text-main);
        }

        .contact-item p {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .whatsapp-box {
          margin-top: 24px;
          padding: 16px;
          background: var(--bg-surface-elevated);
          border-radius: var(--radius-sm);
          border: 1px dashed var(--primary-600);
        }

        .whatsapp-box h4 {
          font-size: 0.95rem;
          font-weight: 800;
          margin-bottom: 4px;
          color: var(--text-main);
        }

        .whatsapp-box p {
          font-size: 0.775rem;
          color: var(--text-muted);
        }

        /* Form styling */
        .c-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        @media (max-width: 500px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .form-field label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .form-field input, .form-field select, .form-field textarea {
          padding: 11px 13px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          background: #ffffff;
          color: var(--text-main);
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form-field input:focus, .form-field select:focus, .form-field textarea:focus {
          border-color: var(--primary-700);
        }

        .btn-submit {
          padding: 13px;
          font-size: 0.95rem;
          margin-top: 6px;
        }

        .success-box {
          text-align: center;
          padding: 32px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .text-green {
          color: var(--primary-700);
        }
      `}</style>
    </section>
  );
}
