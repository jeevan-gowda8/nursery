import React, { useState } from 'react';
import { ARECANUT_VARIETIES, TRANSLATIONS } from '../data/nurseryData';
import { Sprout, Check, Info, X, Table, MessageSquare } from 'lucide-react';

export default function Products({ currentLang }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'compare'

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const [selectedStages, setSelectedStages] = useState({
    mohitnagar: 'oneYear',
    mangala: 'oneYear',
    sumangala: 'oneYear',
    srimangala: 'oneYear',
    'south-kanara': 'oneYear',
    'hirehalli-dwarf': 'oneYear'
  });

  const [quantities, setQuantities] = useState({
    mohitnagar: 100,
    mangala: 100,
    sumangala: 100,
    srimangala: 100,
    'south-kanara': 100,
    'hirehalli-dwarf': 100
  });

  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const filters = [
    { id: 'all', label: t.allVarieties },
    { id: 'high-yield', label: t.highYieldTab },
    { id: 'dwarf', label: t.dwarfTab },
    { id: 'early', label: t.earlyBearingTab },
    { id: 'heritage', label: t.heritageTab }
  ];

  const filteredProducts = ARECANUT_VARIETIES.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'high-yield') return item.id === 'mohitnagar' || item.id === 'srimangala';
    if (activeFilter === 'dwarf') return item.id === 'mangala' || item.id === 'hirehalli-dwarf';
    if (activeFilter === 'early') return item.id === 'mangala' || item.firstBearing.includes('3 -');
    if (activeFilter === 'heritage') return item.id === 'south-kanara' || item.id === 'sumangala';
    return true;
  });

  const handleStageChange = (productId, stage) => {
    setSelectedStages((prev) => ({ ...prev, [productId]: stage }));
  };

  const handleQuantityChange = (productId, qty) => {
    const parsed = Math.max(10, parseInt(qty) || 10);
    setQuantities((prev) => ({ ...prev, [productId]: parsed }));
  };

  const stageLabels = {
    sixMonth: currentLang === 'kn' ? '6-ತಿಂಗಳ ಸಸಿ' : '6-Month Seedling',
    oneYear: currentLang === 'kn' ? '1-ವರ್ಷದ ಪಾಲಿಬ್ಯಾಗ್' : '1-Year Nursery Bag',
    twoYear: currentLang === 'kn' ? '2-ವರ್ಷದ ಸಿದ್ಧ ಸಸಿ' : '2-Year Ready Palm'
  };



  const handleWhatsAppInquiry = (product) => {
    const stage = selectedStages[product.id] || 'oneYear';
    const unitPrice = product.prices[stage];
    const qty = quantities[product.id] || 100;
    const total = unitPrice * qty;
    const stageName = stageLabels[stage];
    const productName = currentLang === 'kn' ? product.nameKn : product.name;

    const message = encodeURIComponent(
      `Hello Sri Areca Haven Nursery, I want to inquire about ordering ${qty} saplings of ${productName} (${stageName}) at ₹${unitPrice}/pc (Est Total: ₹${total.toLocaleString('en-IN')}). Please confirm delivery & booking.`
    );
    window.open(`https://wa.me/919606841193?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="section-padding products-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-gold">
            <Sprout size={16} />
            <span>{currentLang === 'kn' ? 'ಪ್ರಮಾಣೀಕೃತ ಅಡಿಕೆ ತಳಿಗಳ ವಿವರ' : 'Certified Plant Catalog'}</span>
          </div>
          <h2 className="section-title">
            {currentLang === 'kn' ? 'ಅಧಿಕ ಇಳುವರಿಯ ಅಡಿಕೆ ತಳಿಗಳು' : 'High-Yield Arecanut Varieties'}
          </h2>
          <p className="section-subtitle">
            {currentLang === 'kn' 
              ? 'ಎರೆಹುಳು ಗೊಬ್ಬರದಲ್ಲಿ ಪೋಷಿತ, ಸಧೃಡ ಬಿಳಿ ಬೇರುಗಳುಳ್ಳ ತಾಯಿ ಗಿಡದ ಅಪ್ಪಟ ಸಸಿಗಳು. ನಿಮ್ಮ ತೋಟಕ್ಕೆ ಸೂಕ್ತವಾದ ತಳಿ, ವಯಸ್ಸು ಮತ್ತು ಸಂಖ್ಯೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.' 
              : 'Nurtured in enriched organic vermicompost with vigorous lateral root systems. Choose your variety, growth age, and quantity for direct nursery bulk rates.'}
          </p>

          {/* View Mode & Filter Tabs Controls */}
          <div className="catalog-controls">
            <div className="filter-tabs">
              {filters.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveFilter(tab.id); setViewMode('cards'); }}
                  className={`filter-btn ${activeFilter === tab.id && viewMode === 'cards' ? 'active' : ''}`}
                >
                  {tab.label}
                </button>
              ))}

              <button
                onClick={() => setViewMode(viewMode === 'compare' ? 'cards' : 'compare')}
                className={`filter-btn compare-toggle-btn ${viewMode === 'compare' ? 'active' : ''}`}
              >
                <Table size={15} />
                <span>{t.compareTab}</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode: Side-by-Side Comparison Matrix */}
        {viewMode === 'compare' ? (
          <div className="comparison-table-wrapper glass-card animate-fade-in">
            <div className="table-responsive">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>{currentLang === 'kn' ? 'ಅಡಿಕೆ ತಳಿ' : 'Variety'}</th>
                    <th>{currentLang === 'kn' ? 'ಮೂಲ / ತಳಿ' : 'Origin'}</th>
                    <th>{currentLang === 'kn' ? 'ವಾರ್ಷಿಕ ಒಣ ಇಳುವರಿ' : 'Dry Yield / Palm'}</th>
                    <th>{currentLang === 'kn' ? 'ಫಲ ಆರಂಭ' : 'First Bearing'}</th>
                    <th>{currentLang === 'kn' ? 'ಮರದ ಎತ್ತರ / ಆಕಾರ' : 'Tree Stature'}</th>
                    <th>{currentLang === 'kn' ? 'ರೋಗ ನಿರೋಧಕತೆ' : 'Disease Tolerance'}</th>
                    <th>{currentLang === 'kn' ? '1-ವರ್ಷದ ಬೆಲೆ' : '1-Year Price'}</th>
                    <th>{currentLang === 'kn' ? 'ಆರ್ಡರ್' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody>
                  {ARECANUT_VARIETIES.map((v) => (
                    <tr key={v.id}>
                      <td className="variety-cell">
                        <img src={v.image} alt={v.name} className="mini-thumb" />
                        <div>
                          <strong>{currentLang === 'kn' ? v.nameKn : v.name}</strong>
                          <span className="mini-badge">{currentLang === 'kn' ? v.badgeKn : v.badge}</span>
                        </div>
                      </td>
                      <td>{currentLang === 'kn' ? v.originKn : v.origin}</td>
                      <td className="text-green font-bold">{currentLang === 'kn' ? v.yieldPerPalmKn : v.yieldPerPalm}</td>
                      <td>{currentLang === 'kn' ? v.firstBearingKn : v.firstBearing}</td>
                      <td>{currentLang === 'kn' ? v.heightCategoryKn : v.heightCategory}</td>
                      <td>{currentLang === 'kn' ? v.diseaseResistanceKn : v.diseaseResistance}</td>
                      <td className="price-cell">₹{v.prices.oneYear}/pc</td>
                      <td>
                        <button onClick={() => handleWhatsAppInquiry(v)} className="btn btn-gold btn-sm">
                          <span>{currentLang === 'kn' ? 'ವಿಚಾರಿಸಿ' : 'Inquire'}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* View Mode: Product Cards Grid */
          <div className="products-grid">
            {filteredProducts.map((product) => {
              const stageKey = selectedStages[product.id] || 'oneYear';
              const unitPrice = product.prices[stageKey];
              const qty = quantities[product.id] || 100;
              const totalPrice = unitPrice * qty;

              return (
                <div key={product.id} className="product-card glass-card">
                  {/* Card Image Banner */}
                  <div className="card-image-box">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="card-img" 
                    />
                    <span className="card-badge">{currentLang === 'kn' ? product.badgeKn : product.badge}</span>
                    <div className="card-origin">{currentLang === 'kn' ? product.originKn : product.origin}</div>
                  </div>

                  {/* Card Content Area */}
                  <div className="card-body">
                    <div className="card-title-row">
                      <h3 className="card-title">{currentLang === 'kn' ? product.nameKn : product.name}</h3>
                    </div>
                    <p className="card-tagline">{currentLang === 'kn' ? product.taglineKn : product.tagline}</p>

                    {/* Quick Agricultural Specs */}
                    <div className="specs-grid">
                      <div className="spec-item">
                        <span className="spec-lbl">{currentLang === 'kn' ? 'ಒಣ ಇಳುವರಿ / ಮರ:' : 'Dry Yield:'}</span>
                        <span className="spec-val highlight">{currentLang === 'kn' ? product.yieldPerPalmKn : product.yieldPerPalm}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-lbl">{currentLang === 'kn' ? 'ಫಸಲು ಆರಂಭ:' : 'First Bearing:'}</span>
                        <span className="spec-val">{currentLang === 'kn' ? product.firstBearingKn : product.firstBearing}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-lbl">{currentLang === 'kn' ? 'ಮರದ ಎತ್ತರ:' : 'Stature:'}</span>
                        <span className="spec-val">{currentLang === 'kn' ? product.heightCategoryKn : product.heightCategory}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-lbl">{currentLang === 'kn' ? 'ರೋಗ ನಿರೋಧಕ:' : 'Disease:'}</span>
                        <span className="spec-val">{currentLang === 'kn' ? product.diseaseResistanceKn.split(' ')[0] : product.diseaseResistance.split(' ')[0]}</span>
                      </div>
                    </div>

                    {/* Sapling Age Selection */}
                    <div className="age-selector-box">
                      <label className="selector-label">{t.selectAge}:</label>
                      <div className="stage-buttons">
                        <button
                          onClick={() => handleStageChange(product.id, 'sixMonth')}
                          className={`stage-btn ${stageKey === 'sixMonth' ? 'selected' : ''}`}
                        >
                          <span>{currentLang === 'kn' ? '6 ತಿಂಗಳು' : '6 Mos'}</span>
                          <small>₹{product.prices.sixMonth}/pc</small>
                        </button>
                        <button
                          onClick={() => handleStageChange(product.id, 'oneYear')}
                          className={`stage-btn ${stageKey === 'oneYear' ? 'selected' : ''}`}
                        >
                          <span>{currentLang === 'kn' ? '1 ವರ್ಷ' : '1 Year'}</span>
                          <small>₹{product.prices.oneYear}/pc</small>
                        </button>
                        <button
                          onClick={() => handleStageChange(product.id, 'twoYear')}
                          className={`stage-btn ${stageKey === 'twoYear' ? 'selected' : ''}`}
                        >
                          <span>{currentLang === 'kn' ? '2 ವರ್ಷ' : '2 Years'}</span>
                          <small>₹{product.prices.twoYear}/pc</small>
                        </button>
                      </div>
                    </div>

                    {/* Quantity & Live Calculated Price */}
                    <div className="price-qty-row">
                      <div className="qty-picker">
                        <label className="selector-label">{t.quantityLabel}:</label>
                        <div className="qty-controls">
                          <button 
                            onClick={() => handleQuantityChange(product.id, Math.max(10, qty - 50))}
                            className="qty-btn"
                          >
                            -50
                          </button>
                          <input
                            type="number"
                            value={qty}
                            onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                            className="qty-input"
                            min="10"
                            step="10"
                          />
                          <button 
                            onClick={() => handleQuantityChange(product.id, qty + 100)}
                            className="qty-btn"
                          >
                            +100
                          </button>
                        </div>
                      </div>

                      <div className="calculated-price">
                        <span className="price-lbl">{t.totalPrice}:</span>
                        <span className="price-val">₹{totalPrice.toLocaleString('en-IN')}</span>
                        <small className="unit-note">₹{unitPrice} x {qty} {currentLang === 'kn' ? 'ಸಸಿಗಳು' : 'saplings'}</small>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="card-actions" style={{ display: 'flex', gap: '8px', width: '100%' }}>
                      <button 
                        onClick={() => handleWhatsAppInquiry(product)} 
                        className="btn btn-primary card-add-btn"
                        style={{ flex: 1 }}
                      >
                        <MessageSquare size={17} />
                        <span>{currentLang === 'kn' ? 'ವಿಚಾರಿಸಿ' : 'WhatsApp Inquiry'}</span>
                      </button>
                      
                      <button 
                        onClick={() => setActiveModalProduct(product)} 
                        className="btn btn-outline card-info-btn"
                        title={t.viewDetails}
                        aria-label="View variety agronomy details"
                      >
                        <Info size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="modal-backdrop" onClick={() => setActiveModalProduct(null)}>
          <div className="modal-content glass-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveModalProduct(null)} className="modal-close-btn" aria-label="Close details">
              <X size={20} />
            </button>

            <div className="modal-header-grid">
              <img src={activeModalProduct.image} alt={activeModalProduct.name} className="modal-img" />
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '8px' }}>
                  {currentLang === 'kn' ? activeModalProduct.badgeKn : activeModalProduct.badge}
                </span>
                <h3 className="modal-title">{currentLang === 'kn' ? activeModalProduct.nameKn : activeModalProduct.name}</h3>
                <p className="modal-origin">📍 {currentLang === 'kn' ? activeModalProduct.originKn : activeModalProduct.origin}</p>
                <p className="modal-desc">{currentLang === 'kn' ? activeModalProduct.descriptionKn : activeModalProduct.description}</p>
              </div>
            </div>

            <div className="modal-body-content">
              <h4 className="modal-subtitle">{currentLang === 'kn' ? 'ತಳಿಯ ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯಗಳು:' : 'Variety Key Features:'}</h4>
              <ul className="modal-features-list">
                {(currentLang === 'kn' ? activeModalProduct.featuresKn : activeModalProduct.features).map((feat, idx) => (
                  <li key={idx}>
                    <Check size={16} className="feat-check" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="modal-specs-table">
                <div className="table-row">
                  <span>{currentLang === 'kn' ? 'ಮಣ್ಣಿನ ಹೊಂದಾಣಿಕೆ:' : 'Soil Suitability:'}</span>
                  <strong>{currentLang === 'kn' ? activeModalProduct.soilTypeKn : activeModalProduct.soilType}</strong>
                </div>
                <div className="table-row">
                  <span>{currentLang === 'kn' ? 'ನಿರೀಕ್ಷಿತ ಒಣ ಇಳುವರಿ:' : 'Expected Dry Nut Yield:'}</span>
                  <strong className="text-green">{currentLang === 'kn' ? activeModalProduct.yieldPerPalmKn : activeModalProduct.yieldPerPalm}</strong>
                </div>
                <div className="table-row">
                  <span>{currentLang === 'kn' ? 'ಫಸಲು ಆರಂಭವಾಗುವ ವಯಸ್ಸು:' : 'First Bearing Age:'}</span>
                  <strong>{currentLang === 'kn' ? activeModalProduct.firstBearingKn : activeModalProduct.firstBearing}</strong>
                </div>
                <div className="table-row">
                  <span>{currentLang === 'kn' ? 'ರೋಗ ನಿರೋಧಕತೆ:' : 'Disease Tolerance:'}</span>
                  <strong>{currentLang === 'kn' ? activeModalProduct.diseaseResistanceKn : activeModalProduct.diseaseResistance}</strong>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                onClick={() => {
                  handleWhatsAppInquiry(activeModalProduct);
                  setActiveModalProduct(null);
                }} 
                className="btn btn-gold w-full"
                style={{ width: '100%' }}
              >
                <span>{currentLang === 'kn' ? `${activeModalProduct.nameKn} ಸಸಿಗಳ ಲಭ್ಯತೆಯನ್ನು ವಿಚಾರಿಸಿ` : `Inquire About ${activeModalProduct.name} on WhatsApp`}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .products-section {
          background: var(--bg-page);
        }

        .catalog-controls {
          margin-top: 20px;
        }

        .filter-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        @media (max-width: 640px) {
          .filter-tabs {
            gap: 6px;
          }
        }

        .filter-btn {
          background: #ffffff;
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        @media (max-width: 480px) {
          .filter-btn {
            padding: 7px 12px;
            font-size: 0.8rem;
          }
        }

        .filter-btn:hover {
          border-color: var(--primary-600);
          color: var(--primary-800);
          background: var(--primary-50);
        }

        .filter-btn.active {
          background: var(--primary-800);
          color: #ffffff;
          border-color: var(--primary-800);
          box-shadow: 0 4px 14px rgba(22, 101, 52, 0.25);
        }

        .compare-toggle-btn {
          border-color: var(--accent-gold);
          color: var(--accent-amber-dark);
          background: var(--gold-subtle);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 28px;
        }

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        .product-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: #ffffff;
        }

        .card-image-box {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #f1f6f1;
        }

        @media (max-width: 480px) {
          .card-image-box {
            height: 190px;
          }
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .card-img {
          transform: scale(1.04);
        }

        .card-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: var(--accent-gold);
          color: #1a1202;
          font-size: 0.725rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }

        .card-origin {
          position: absolute;
          bottom: 10px;
          left: 12px;
          background: rgba(19, 36, 23, 0.8);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-size: 0.725rem;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 6px;
        }

        .card-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        @media (max-width: 480px) {
          .card-body {
            padding: 16px;
          }
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 4px;
          color: var(--text-main);
        }

        .card-tagline {
          font-size: 0.825rem;
          color: var(--text-muted);
          margin-bottom: 14px;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          padding: 10px 12px;
          background: var(--bg-surface-elevated);
          border-radius: var(--radius-sm);
          margin-bottom: 16px;
          border: 1px solid var(--border-light);
        }

        .spec-item {
          display: flex;
          flex-direction: column;
        }

        .spec-lbl {
          color: var(--text-light);
          font-size: 0.7rem;
          font-weight: 600;
        }

        .spec-val {
          font-weight: 700;
          color: var(--text-main);
          font-size: 0.825rem;
        }

        .spec-val.highlight {
          color: var(--primary-800);
        }

        .age-selector-box {
          margin-bottom: 16px;
        }

        .selector-label {
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--text-muted);
          display: block;
          margin-bottom: 6px;
        }

        .stage-buttons {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
        }

        .stage-btn {
          background: #ffffff;
          border: 1px solid var(--border-color);
          padding: 7px 4px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.2s ease;
        }

        .stage-btn span {
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .stage-btn small {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .stage-btn.selected {
          border-color: var(--primary-700);
          background: var(--primary-50);
        }

        .stage-btn.selected span {
          color: var(--primary-900);
        }

        .price-qty-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
          margin-bottom: 16px;
          gap: 10px;
        }

        @media (max-width: 380px) {
          .price-qty-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .calculated-price {
            text-align: left;
          }
        }

        .qty-controls {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .qty-btn {
          background: var(--bg-surface-elevated);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          padding: 6px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          cursor: pointer;
        }

        .qty-btn:hover {
          background: var(--primary-100);
        }

        .qty-input {
          width: 52px;
          text-align: center;
          border: 1px solid var(--border-color);
          background: #ffffff;
          color: var(--text-main);
          padding: 6px 2px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.85rem;
        }

        .calculated-price {
          text-align: right;
        }

        .price-lbl {
          font-size: 0.7rem;
          color: var(--text-muted);
          display: block;
          font-weight: 600;
        }

        .price-val {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--primary-800);
          display: block;
          line-height: 1.1;
        }

        .unit-note {
          font-size: 0.675rem;
          color: var(--text-light);
          font-weight: 500;
        }

        .card-actions {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }

        .card-add-btn {
          flex-grow: 1;
          padding: 10px;
          font-size: 0.875rem;
        }

        .card-info-btn {
          padding: 10px;
          width: 42px;
        }

        /* Comparison Table */
        .comparison-table-wrapper {
          padding: 20px;
          background: #ffffff;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .comparison-table-wrapper {
            padding: 12px;
          }
        }

        .table-responsive {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .comparison-table {
          width: 100%;
          min-width: 650px;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.85rem;
        }

        .comparison-table th {
          background: var(--bg-surface-elevated);
          padding: 12px 14px;
          font-weight: 700;
          color: var(--text-main);
          border-bottom: 2px solid var(--border-color);
          white-space: nowrap;
        }

        .comparison-table td {
          padding: 14px;
          border-bottom: 1px solid var(--border-color);
          vertical-align: middle;
        }

        .variety-cell {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 160px;
        }

        .mini-thumb {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .mini-badge {
          display: block;
          font-size: 0.675rem;
          color: var(--accent-amber-dark);
          font-weight: 700;
        }

        .price-cell {
          font-weight: 800;
          color: var(--primary-800);
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          white-space: nowrap;
        }

        .btn-sm {
          padding: 7px 12px;
          font-size: 0.775rem;
          white-space: nowrap;
        }

        .text-green {
          color: var(--primary-800);
        }

        .font-bold {
          font-weight: 700;
        }

        /* Modal styling */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .modal-content {
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 24px;
          position: relative;
          background: #ffffff;
        }

        @media (max-width: 480px) {
          .modal-content {
            padding: 18px;
          }
        }

        .modal-close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          background: var(--bg-surface-elevated);
          border: none;
          color: var(--text-main);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .modal-header-grid {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }

        @media (max-width: 480px) {
          .modal-header-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }

        .modal-img {
          width: 100%;
          height: 120px;
          object-fit: cover;
          border-radius: var(--radius-sm);
        }

        .modal-title {
          font-size: 1.3rem;
          font-weight: 800;
        }

        .modal-origin {
          font-size: 0.8rem;
          color: var(--primary-800);
          font-weight: 600;
          margin-bottom: 6px;
        }

        .modal-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        .modal-subtitle {
          font-size: 0.95rem;
          font-weight: 700;
          margin: 14px 0 8px 0;
        }

        .modal-features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 18px;
        }

        .modal-features-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.825rem;
          color: var(--text-main);
        }

        .feat-check {
          color: var(--primary-600);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .modal-specs-table {
          background: var(--bg-surface-elevated);
          padding: 14px;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .table-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.825rem;
        }
      `}</style>
    </section>
  );
}
