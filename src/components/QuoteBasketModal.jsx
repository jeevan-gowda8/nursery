import React from 'react';
import { X, Trash2, MessageSquare, ShoppingBag } from 'lucide-react';

export default function QuoteBasketModal({ basket, closeBasket, removeFromBasket, updateBasketQty, clearBasket, currentLang }) {
  const grandTotal = basket.reduce((acc, item) => acc + item.totalPrice, 0);
  const totalCount = basket.reduce((acc, item) => acc + item.quantity, 0);

  const generateWhatsAppMessage = () => {
    let msg = currentLang === 'kn' 
      ? `ನಮಸ್ಕಾರ ಶ್ರೀ ಅಡಿಕೆ ಹ್ಯಾವನ್ ನರ್ಸರಿ! ನಾನು ಈ ಕೆಳಗಿನ ಅಡಿಕೆ ಸಸಿಗಳ ಆರ್ಡರ್ ವಿಚಾರಣೆಯನ್ನು ಕಳುಹಿಸುತ್ತಿದ್ದೇನೆ:\n\n`
      : `Hello Sri Areca Haven Nursery! I would like to place an order inquiry for:\n\n`;

    basket.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.name}* (${item.stageLabel})\n   ${currentLang === 'kn' ? 'ಸಸಿಗಳ ಸಂಖ್ಯೆ' : 'Quantity'}: ${item.quantity} ${currentLang === 'kn' ? 'ಸಸಿಗಳು' : 'saplings'}\n   ${currentLang === 'kn' ? 'ಅಂದಾಜು ಬೆಲೆ' : 'Est. Cost'}: ₹${item.totalPrice.toLocaleString('en-IN')}\n\n`;
    });

    msg += currentLang === 'kn'
      ? `*ಒಟ್ಟು ಸಸಿಗಳು:* ${totalCount}\n*ಅಂದಾಜು ಒಟ್ಟು ಮೊತ್ತ:* ₹${grandTotal.toLocaleString('en-IN')}\n\nದಯವಿಟ್ಟು ಸಸಿಗಳ ಲಭ್ಯತೆ ಮತ್ತು ನನ್ನ ತೋಟಕ್ಕೆ ವಾಹನ ಸಾಗಾಟದ ವಿವರಗಳನ್ನು ತಿಳಿಸಿ.`
      : `*Total Saplings:* ${totalCount}\n*Estimated Grand Total:* ₹${grandTotal.toLocaleString('en-IN')}\n\nPlease confirm availability and farm dispatch transport details.`;

    return encodeURIComponent(msg);
  };

  return (
    <div className="basket-modal-backdrop" onClick={closeBasket}>
      <div className="basket-modal-drawer glass-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="basket-header">
          <div className="basket-title-row">
            <ShoppingBag size={20} className="text-green" />
            <h3>{currentLang === 'kn' ? 'ನಿಮ್ಮ ವಿಚಾರಣೆ ಬುಟ್ಟಿ' : 'Your Order Inquiry Basket'}</h3>
          </div>
          <button onClick={closeBasket} className="basket-close-btn" aria-label="Close basket">
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="basket-body">
          {basket.length === 0 ? (
            <div className="empty-basket-state">
              <ShoppingBag size={44} className="empty-icon" />
              <p className="empty-title">{currentLang === 'kn' ? 'ನಿಮ್ಮ ಬುಟ್ಟಿಯು ಪ್ರಸ್ತುತ ಖಾಲಿಯಾಗಿದೆ' : 'Your basket is currently empty'}</p>
              <p className="empty-sub">
                {currentLang === 'kn'
                  ? 'ನಮ್ಮ ಅಡಿಕೆ ತಳಿಗಳ ವಿಭಾಗಕ್ಕೆ ಹೋಗಿ, ನಿಮ್ಮ ತೋಟಕ್ಕೆ ಬೇಕಾದ ಸಸಿಗಳ ವಯಸ್ಸು ಮತ್ತು ಸಂಖ್ಯೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ ಬುಟ್ಟಿಗೆ ಸೇರಿಸಿ.'
                  : 'Explore our Arecanut varieties, choose your required growth age & quantity, and add them to this basket.'}
              </p>
            </div>
          ) : (
            <div className="basket-items-list">
              {basket.map((item, idx) => (
                <div key={idx} className="basket-item-card">
                  <img src={item.image} alt={item.name} className="item-img" />
                  
                  <div className="item-details">
                    <h4 className="item-name">{item.name}</h4>
                    <span className="item-stage">{item.stageLabel}</span>
                    <span className="item-unit-price">₹{item.unitPrice} / {currentLang === 'kn' ? 'ಸಸಿ' : 'sapling'}</span>
                    
                    <div className="item-qty-row">
                      <label>{currentLang === 'kn' ? 'ಸಂಖ್ಯೆ:' : 'Qty:'}</label>
                      <input
                        type="number"
                        min="10"
                        step="10"
                        value={item.quantity}
                        onChange={(e) => updateBasketQty(idx, parseInt(e.target.value) || 10)}
                        className="b-qty-input"
                      />
                    </div>
                  </div>

                  <div className="item-price-col">
                    <span className="item-total">₹{item.totalPrice.toLocaleString('en-IN')}</span>
                    <button 
                      onClick={() => removeFromBasket(idx)} 
                      className="item-remove-btn"
                      title="Remove item"
                      aria-label="Remove item from basket"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary & Action */}
        {basket.length > 0 && (
          <div className="basket-footer">
            <div className="basket-summary-row">
              <div>
                <span className="b-summary-lbl">{currentLang === 'kn' ? 'ಒಟ್ಟು ಸಸಿಗಳು:' : 'Total Saplings:'}</span>
                <strong className="b-summary-val">{totalCount.toLocaleString()} {currentLang === 'kn' ? 'ಸಸಿಗಳು' : 'pcs'}</strong>
              </div>
              <div className="text-right">
                <span className="b-summary-lbl">{currentLang === 'kn' ? 'ಅಂದಾಜು ಮೊತ್ತ:' : 'Est. Grand Total:'}</span>
                <strong className="b-summary-price">₹{grandTotal.toLocaleString('en-IN')}</strong>
              </div>
            </div>

            <div className="basket-btn-group">
              <a
                href={`https://wa.me/919876543210?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold w-full"
                style={{ width: '100%', marginBottom: '8px' }}
              >
                <MessageSquare size={17} />
                <span>{currentLang === 'kn' ? 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ದರಪಟ್ಟಿ ಕಳುಹಿಸಿ' : 'Send WhatsApp Quote Request'}</span>
              </a>

              <button onClick={clearBasket} className="btn btn-outline w-full" style={{ width: '100%' }}>
                <span>{currentLang === 'kn' ? 'ಬುಟ್ಟಿಯನ್ನು ಖಾಲಿ ಮಾಡಿ' : 'Clear Basket'}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .basket-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(10, 30, 15, 0.5);
          backdrop-filter: blur(6px);
          z-index: 2200;
          display: flex;
          justify-content: flex-end;
        }

        .basket-modal-drawer {
          width: 100%;
          max-width: 460px;
          height: 100vh;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          border-radius: 0;
          box-shadow: -10px 0 35px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 480px) {
          .basket-modal-drawer {
            max-width: 100vw;
          }
        }

        .basket-header {
          padding: 18px 20px;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-surface-elevated);
        }

        .basket-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .basket-title-row h3 {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .basket-close-btn {
          background: #ffffff;
          border: 1px solid var(--border-color);
          color: var(--text-main);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .basket-close-btn:hover {
          background: #fee2e2;
          border-color: #fca5a5;
          color: #dc2626;
        }

        .basket-body {
          flex-grow: 1;
          overflow-y: auto;
          padding: 20px 16px;
        }

        .empty-basket-state {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--text-muted);
          padding: 20px;
        }

        .empty-icon {
          color: var(--border-active);
          margin-bottom: 14px;
        }

        .empty-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .empty-sub {
          font-size: 0.825rem;
          max-width: 300px;
          line-height: 1.45;
        }

        .basket-items-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .basket-item-card {
          display: flex;
          gap: 12px;
          padding: 12px;
          background: var(--bg-surface-elevated);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
        }

        .item-img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 6px;
          flex-shrink: 0;
        }

        .item-details {
          flex-grow: 1;
        }

        .item-name {
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .item-stage {
          font-size: 0.725rem;
          color: var(--primary-800);
          font-weight: 700;
          display: block;
        }

        .item-unit-price {
          font-size: 0.7rem;
          color: var(--text-light);
          display: block;
          font-weight: 600;
        }

        .item-qty-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 4px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .b-qty-input {
          width: 52px;
          padding: 3px 4px;
          border-radius: 4px;
          border: 1px solid var(--border-color);
          background: #ffffff;
          color: var(--text-main);
          font-weight: 700;
          font-size: 0.8rem;
        }

        .item-price-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;
        }

        .item-total {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          color: var(--primary-900);
        }

        .item-remove-btn {
          background: none;
          border: none;
          color: #ef4444;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
        }

        .item-remove-btn:hover {
          background: #fee2e2;
        }

        .basket-footer {
          padding: 18px 20px;
          border-top: 1px solid var(--border-color);
          background: #ffffff;
        }

        .basket-summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .b-summary-lbl {
          font-size: 0.725rem;
          color: var(--text-muted);
          display: block;
          font-weight: 600;
        }

        .b-summary-val {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .b-summary-price {
          font-family: 'Outfit', sans-serif;
          font-size: 1.3rem;
          font-weight: 900;
          color: var(--primary-800);
        }

        .text-right {
          text-align: right;
        }

        .text-green {
          color: var(--primary-800);
        }
      `}</style>
    </div>
  );
}
