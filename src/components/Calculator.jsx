import React, { useState } from 'react';
import { Calculator as CalcIcon, Sprout, Sparkles, ArrowRight, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TRANSLATIONS } from '../data/nurseryData';

export default function Calculator({ navigateToPage, currentLang }) {
  const [acres, setAcres] = useState(3);
  const [spacing, setSpacing] = useState('9x9');
  const [intercrop, setIntercrop] = useState('pepper');
  const [yieldPerPalm, setYieldPerPalm] = useState(3.8);
  const [marketPrice, setMarketPrice] = useState(480);
  const [selectedDistrict, setSelectedDistrict] = useState('ramanagara');

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const densityMap = {
    '9x9': { label: currentLang === 'kn' ? '9x9 ಅಡಿ (ಪ್ರಮಾಣಿತ)' : '9ft x 9ft (Standard)', count: 512 },
    '8.5x8.5': { label: currentLang === 'kn' ? '8.5x8.5 ಅಡಿ (ಮಧ್ಯಮ)' : '8.5ft x 8.5ft (Medium Density)', count: 550 },
    '8x8': { label: currentLang === 'kn' ? '8x8 ಅಡಿ (ಕುಬ್ಜ / ಸಾಂದ್ರ)' : '8ft x 8ft (High Density / Dwarf)', count: 620 }
  };

  const intercropMap = {
    pepper: { 
      label: currentLang === 'kn' ? 'ಕಾಳುಮೆಣಸು (ಅಡಿಕೆ ಮರಕ್ಕೆ ಹಬ್ಬಿಸುವುದು)' : 'Black Pepper (Trained on Palms)', 
      bonusPerAcre: 55000 
    },
    cocoa: { 
      label: currentLang === 'kn' ? 'ಕೋಕೋ (ತೋಟದ ನೆರಳಿನಲ್ಲಿ)' : 'Cocoa (Under Canopy)', 
      bonusPerAcre: 40000 
    },
    cardamom: { 
      label: currentLang === 'kn' ? 'ಏಲಕ್ಕಿ (ತಂಪು ತೋಟಗಳಿಗೆ)' : 'Cardamom (Shade Crop)', 
      bonusPerAcre: 60000 
    },
    banana: { 
      label: currentLang === 'kn' ? 'ಬಾಳೆ (ಆರಂಭಿಕ 3-ವರ್ಷದ ಆದಾಯ)' : 'Banana (Intercrop)', 
      bonusPerAcre: 35000 
    },
    none: { 
      label: currentLang === 'kn' ? 'ಯಾವುದೂ ಇಲ್ಲ (ಕೇವಲ ಅಡಿಕೆ)' : 'None (Sole Arecanut)', 
      bonusPerAcre: 0 
    }
  };

  const districts = [
    { id: 'ramanagara', name: currentLang === 'kn' ? 'ರಾಮನಗರ / ಮಾಗಡಿ / ಚನ್ನಪಟ್ಟಣ' : 'Ramanagara / Magadi / Channapatna', transitDays: 'Same Day Dispatch' },
    { id: 'bengaluru', name: currentLang === 'kn' ? 'ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ / ನೆಲಮಂಗಲ' : 'Bengaluru Rural / Nelamangala', transitDays: 'Same Day Dispatch' },
    { id: 'tumakuru', name: currentLang === 'kn' ? 'ತುಮಕೂರು / ಕುಣಿಗಲ್ / ತಿಪಟೂರು' : 'Tumakuru / Kunigal / Tiptur', transitDays: 'Same Day / 1 Day' },
    { id: 'mandya', name: currentLang === 'kn' ? 'ಮಂಡ್ಯ / ಮದ್ದೂರು / ಮಳವಳ್ಳಿ' : 'Mandya / Maddur / Malavalli', transitDays: '1 Day Delivery' },
    { id: 'hassan', name: currentLang === 'kn' ? 'ಹಾಸನ / ಚನ್ನರಾಯಪಟ್ಟಣ' : 'Hassan / Channarayapatna', transitDays: '1 Day Delivery' },
    { id: 'shivamogga', name: currentLang === 'kn' ? 'ಶಿವಮೊಗ್ಗ / ತೀರ್ಥಹಳ್ಳಿ' : 'Shivamogga / Thirthahalli', transitDays: '1-2 Days Delivery' },
    { id: 'chikkamagaluru', name: currentLang === 'kn' ? 'ಚಿಕ್ಕಮಗಳೂರು / ಮೂಡಿಗೆರೆ' : 'Chikkamagaluru / Mudigere', transitDays: '1-2 Days Delivery' },
    { id: 'davanagere', name: currentLang === 'kn' ? 'ದಾವಣಗೆರೆ / ಚಿತ್ರದುರ್ಗ' : 'Davanagere / Chitradurga', transitDays: '2 Days Delivery' }
  ];

  // Mathematical Calculations
  const palmsPerAcre = densityMap[spacing].count;
  const totalSaplings = Math.round(acres * palmsPerAcre);
  const totalDryNutKg = Math.round(totalSaplings * yieldPerPalm);
  const totalQuintals = (totalDryNutKg / 100).toFixed(1);
  const arecaRevenue = Math.round(totalDryNutKg * marketPrice);
  const intercropBonus = Math.round(acres * intercropMap[intercrop].bonusPerAcre);
  const totalGrossRevenue = arecaRevenue + intercropBonus;
  const maintenanceCost = Math.round(totalGrossRevenue * 0.20);
  const netAnnualProfit = totalGrossRevenue - maintenanceCost;

  const triggerConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="calculator" className="section-padding calculator-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-gold">
            <CalcIcon size={16} />
            <span>{currentLang === 'kn' ? 'ವೈಜ್ಞಾನಿಕ ಆದಾಯ ಅಂದಾಜು' : 'Yield & Profit Estimator'}</span>
          </div>
          <h2 className="section-title">{t.calcTitle}</h2>
          <p className="section-subtitle">{t.calcSubtitle}</p>
        </div>

        <div className="calculator-grid">
          {/* Controls Input Box */}
          <div className="calc-inputs-card glass-card">
            <h3 className="calc-card-title">
              {currentLang === 'kn' ? 'ತೋಟದ ವಿಸ್ತೀರ್ಣ ಮತ್ತು ವಿವರಗಳು' : 'Plantation Parameters'}
            </h3>

            {/* Land Area Slider */}
            <div className="form-group">
              <div className="form-label-row">
                <label className="input-lbl">{t.calcLandArea}:</label>
                <span className="slider-val highlight">{acres} {currentLang === 'kn' ? 'ಎಕರೆ' : 'Acres'}</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="25"
                step="0.5"
                value={acres}
                onChange={(e) => setAcres(parseFloat(e.target.value))}
                className="custom-range-slider"
              />
              <div className="range-min-max">
                <span>0.5 Acre</span>
                <span>10 Acres</span>
                <span>25 Acres</span>
              </div>
            </div>

            {/* Planting Spacing & Density */}
            <div className="form-group">
              <label className="input-lbl">{t.calcSpacing}:</label>
              <div className="radio-tile-group">
                {Object.keys(densityMap).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSpacing(key)}
                    className={`tile-btn ${spacing === key ? 'active' : ''}`}
                  >
                    <span>{key} ft</span>
                    <small>~{densityMap[key].count} {currentLang === 'kn' ? 'ಗಿಡ/ಎಕರೆ' : 'palms/ac'}</small>
                  </button>
                ))}
              </div>
            </div>

            {/* Expected Dry Yield per Palm */}
            <div className="form-group">
              <div className="form-label-row">
                <label>{t.calcYieldPalm}:</label>
                <span className="slider-val">{yieldPerPalm} kg / {currentLang === 'kn' ? 'ವರ್ಷಕ್ಕೆ' : 'yr'}</span>
              </div>
              <input
                type="range"
                min="2.5"
                max="4.8"
                step="0.1"
                value={yieldPerPalm}
                onChange={(e) => setYieldPerPalm(parseFloat(e.target.value))}
                className="custom-range-slider"
              />
              <small className="help-text">
                {currentLang === 'kn' ? 'ಮೋಹಿತ್‌ನಗರ ಮತ್ತು ಶ್ರೀಮಂಗಳ ತಳಿಗಳು 3.8 ರಿಂದ 4.6 ಕೆ.ಜಿ ನೀಡುತ್ತವೆ.' : 'Mohitnagar & Srimangala average 3.8 to 4.6 kg/palm.'}
              </small>
            </div>

            {/* Chali Nut Market Price per Kg */}
            <div className="form-group">
              <div className="form-label-row">
                <label>{t.calcMarketPrice}:</label>
                <span className="slider-val">₹{marketPrice} / kg</span>
              </div>
              <input
                type="range"
                min="350"
                max="650"
                step="10"
                value={marketPrice}
                onChange={(e) => setMarketPrice(parseInt(e.target.value))}
                className="custom-range-slider"
              />
              <small className="help-text">
                {currentLang === 'kn' ? 'ಪ್ರಸ್ತುತ ಸರಾಸರಿ ಮಾರುಕಟ್ಟೆ ದರ: ₹450 - ₹520 / ಕೆ.ಜಿ' : 'Current average market rate: ₹450 - ₹520 / kg.'}
              </small>
            </div>

            {/* Intercropping Multi-Tier Dropdown */}
            <div className="form-group">
              <label className="input-lbl">{t.calcIntercrop}:</label>
              <select
                value={intercrop}
                onChange={(e) => setIntercrop(e.target.value)}
                className="custom-select"
              >
                {Object.keys(intercropMap).map((key) => (
                  <option key={key} value={key}>
                    {intercropMap[key].label} (+₹{intercropMap[key].bonusPerAcre.toLocaleString()}/{currentLang === 'kn' ? 'ಎಕರೆಗೆ' : 'acre'})
                  </option>
                ))}
              </select>
            </div>

            {/* Farm Delivery District Selector */}
            <div className="form-group">
              <label className="input-lbl">
                <Truck size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                {currentLang === 'kn' ? 'ತೋಟದ ಜಿಲ್ಲೆ (ಸಾರಿಗೆ ಅಂದಾಜು):' : 'Farm Delivery District:'}
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="custom-select"
              >
                {districts.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d.transitDays})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="calc-results-card glass-card">
            <div className="results-header-badge">
              <Sparkles size={16} />
              <span>{currentLang === 'kn' ? 'ವಾರ್ಷಿಕ ನಿರೀಕ್ಷಿತ ಆದಾಯದ ಸಾರಾಂಶ' : 'Projected Yield & Income Summary'}</span>
            </div>

            <div className="big-stat-box">
              <span className="big-stat-lbl">{t.calcProjectedNet}</span>
              <span className="big-stat-val">₹{netAnnualProfit.toLocaleString('en-IN')}</span>
              <span className="big-stat-sub">
                {currentLang === 'kn' ? '20% ಗೊಬ್ಬರ ಮತ್ತು ಕಟಾವು ನಿರ್ವಹಣಾ ವೆಚ್ಚ ಕಳೆದು' : 'After ~20% estimated maintenance & harvest labor'}
              </span>
            </div>

            <div className="results-metrics-grid">
              <div className="metric-box">
                <span className="m-lbl">{t.calcRequiredSaplings}</span>
                <span className="m-val">{totalSaplings.toLocaleString('en-IN')} pcs</span>
                <small className="m-sub">@{palmsPerAcre} / {currentLang === 'kn' ? 'ಎಕರೆಗೆ' : 'acre'}</small>
              </div>

              <div className="metric-box">
                <span className="m-lbl">{t.calcAnnualHarvest}</span>
                <span className="m-val">{totalQuintals} {currentLang === 'kn' ? 'ಕ್ವಿಂಟಾಲ್' : 'Qtl'}</span>
                <small className="m-sub">({totalDryNutKg.toLocaleString()} kg)</small>
              </div>

              <div className="metric-box">
                <span className="m-lbl">{t.calcArecaRevenue}</span>
                <span className="m-val">₹{arecaRevenue.toLocaleString('en-IN')}</span>
                <small className="m-sub">@₹{marketPrice}/kg</small>
              </div>

              <div className="metric-box">
                <span className="m-lbl">{t.calcIntercropBonus}</span>
                <span className="m-val">₹{intercropBonus.toLocaleString('en-IN')}</span>
                <small className="m-sub">{intercropMap[intercrop].label.split(' ')[0]}</small>
              </div>
            </div>

            <div className="calc-cta-box">
              <button 
                onClick={() => {
                  triggerConfetti();
                  navigateToPage('products');
                }} 
                className="btn btn-gold w-full"
                style={{ width: '100%', marginBottom: '10px' }}
              >
                <Sprout size={18} />
                <span>{currentLang === 'kn' ? `${totalSaplings.toLocaleString()} ಸಸಿಗಳನ್ನು ಈಗಲೇ ಬುಕ್ ಮಾಡಿ` : `Order ${totalSaplings.toLocaleString()} Saplings Now`}</span>
              </button>

              <a
                href={`https://wa.me/919606841193?text=Hello%20Sri%20Areca%20Haven%20Nursery,%20I%20used%20your%20calculator%20for%20${acres}%20Acres%20(${totalSaplings}%20saplings%20for%20${selectedDistrict}).%20Please%20send%20bulk%20quote%20and%20truck%20delivery%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full"
                style={{ width: '100%' }}
              >
                <span>{currentLang === 'kn' ? 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ದರಪಟ್ಟಿ ಪಡೆಯಿರಿ' : 'Request WhatsApp Estimate'}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .calculator-section {
          background: linear-gradient(180deg, var(--bg-page) 0%, var(--bg-surface-elevated) 100%);
        }

        .calculator-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: flex-start;
        }

        @media (max-width: 1024px) {
          .calculator-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        .calc-inputs-card, .calc-results-card {
          padding: 32px;
          background: #ffffff;
        }

        @media (max-width: 640px) {
          .calc-inputs-card, .calc-results-card {
            padding: 20px 16px;
          }
        }

        .calc-card-title {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--border-color);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .slider-val {
          color: var(--primary-800);
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 800;
        }

        .custom-range-slider {
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: #dcfce7;
          outline: none;
          accent-color: var(--primary-700);
          cursor: pointer;
        }

        .range-min-max {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          color: var(--text-light);
          margin-top: 4px;
          font-weight: 600;
        }

        .help-text {
          font-size: 0.725rem;
          color: var(--text-light);
          display: block;
          margin-top: 3px;
        }

        .input-lbl {
          font-size: 0.875rem;
          font-weight: 700;
          display: block;
          margin-bottom: 8px;
          color: var(--text-main);
        }

        .radio-tile-group {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        @media (max-width: 480px) {
          .radio-tile-group {
            grid-template-columns: 1fr;
          }
        }

        .tile-btn {
          background: #ffffff;
          border: 1px solid var(--border-color);
          padding: 10px 6px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.2s ease;
        }

        .tile-btn span {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .tile-btn small {
          font-size: 0.675rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .tile-btn.active {
          border-color: var(--primary-700);
          background: var(--primary-50);
        }

        .tile-btn.active span {
          color: var(--primary-900);
        }

        .custom-select {
          width: 100%;
          padding: 11px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          background: #ffffff;
          color: var(--text-main);
          font-size: 0.875rem;
          font-weight: 600;
          outline: none;
          cursor: pointer;
        }

        /* Results Card styling */
        .results-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: var(--gold-subtle);
          color: var(--accent-amber-dark);
          border-radius: var(--radius-full);
          font-size: 0.775rem;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .big-stat-box {
          background: linear-gradient(135deg, var(--primary-800), var(--primary-950));
          color: #ffffff;
          padding: 24px 18px;
          border-radius: var(--radius-md);
          text-align: center;
          margin-bottom: 20px;
          box-shadow: 0 10px 25px rgba(20, 83, 45, 0.25);
        }

        .big-stat-lbl {
          font-size: 0.8rem;
          opacity: 0.9;
          display: block;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }

        .big-stat-val {
          font-family: 'Outfit', sans-serif;
          font-size: 2.35rem;
          font-weight: 900;
          display: block;
          color: #ffffff;
          line-height: 1.1;
        }

        @media (max-width: 480px) {
          .big-stat-val {
            font-size: 1.9rem;
          }
        }

        .big-stat-sub {
          font-size: 0.725rem;
          opacity: 0.85;
          display: block;
          margin-top: 5px;
        }

        .results-metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 24px;
        }

        @media (max-width: 380px) {
          .results-metrics-grid {
            grid-template-columns: 1fr;
          }
        }

        .metric-box {
          background: var(--bg-surface-elevated);
          padding: 14px 12px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
        }

        .m-lbl {
          font-size: 0.7rem;
          color: var(--text-muted);
          display: block;
          font-weight: 600;
        }

        .m-val {
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-main);
          display: block;
          margin: 2px 0;
        }

        .m-sub {
          font-size: 0.7rem;
          color: var(--primary-800);
          font-weight: 700;
        }
      `}</style>
    </section>
  );
}
