import React, { useState, useEffect, useRef } from 'react';
import { Bot, Globe, Phone, Send, Sprout, Sparkles, X } from 'lucide-react';
import { ARECANUT_VARIETIES } from '../data/nurseryData';

// Interactive product widget component declared outside the parent component to respect Rules of Hooks
function ProductWidget({ productId, chatLang }) {
  const product = ARECANUT_VARIETIES.find((v) => v.id === productId);
  const [stage, setStage] = useState('oneYear');
  const [qty, setQty] = useState(100);

  if (!product) return null;

  const price = product.prices[stage];
  const total = price * qty;

  const stageLabels = chatLang === 'kn'
    ? {
        sixMonth: '6-ತಿಂಗಳ ಸಸಿ',
        oneYear: '1-ವರ್ಷದ ಪಾಲಿಬ್ಯಾಗ್',
        twoYear: '2-ವರ್ಷದ ಸಿದ್ಧ ಸಸಿ'
      }
    : {
        sixMonth: '6-Month Seedling',
        oneYear: '1-Year Nursery Bag',
        twoYear: '2-Year Ready Palm'
      };

  const handleWhatsApp = () => {
    const productName = chatLang === 'kn' ? product.nameKn : product.name;
    const msg = encodeURIComponent(
      `Hello Sri Areca Haven Nursery, I want to order ${qty} saplings of ${productName} (${stageLabels[stage]}) at ₹${price}/pc (Est. Total: ₹${total.toLocaleString('en-IN')}). Please confirm booking.`
    );
    window.open(`https://wa.me/919606841193?text=${msg}`, '_blank');
  };

  return (
    <div className="chat-product-card">
      <div className="card-top">
        <img src={product.image} alt={product.name} className="card-img" />
        <div className="card-info">
          <h4>{chatLang === 'kn' ? product.nameKn : product.name}</h4>
          <span className="card-origin">📍 {chatLang === 'kn' ? product.originKn : product.origin}</span>
        </div>
      </div>

      <div className="card-controls">
        <div className="control-group">
          <label>{chatLang === 'kn' ? 'ಸಸಿಯ ವಯಸ್ಸು:' : 'Growth Age:'}</label>
          <select value={stage} onChange={(e) => setStage(e.target.value)} className="chat-select">
            <option value="sixMonth">{stageLabels.sixMonth} (₹{product.prices.sixMonth})</option>
            <option value="oneYear">{stageLabels.oneYear} (₹{product.prices.oneYear})</option>
            <option value="twoYear">{stageLabels.twoYear} (₹{product.prices.twoYear})</option>
          </select>
        </div>

        <div className="control-group">
          <label>{chatLang === 'kn' ? 'ಸಸಿಗಳ ಸಂಖ್ಯೆ:' : 'Quantity:'}</label>
          <div className="qty-input-wrap">
            <input
              type="number"
              min="10"
              step="10"
              value={qty}
              onChange={(e) => setQty(Math.max(10, parseInt(e.target.value) || 10))}
              className="chat-input"
            />
          </div>
        </div>
      </div>

      <div className="card-price-summary">
        <span className="unit-p">₹{price} / pc</span>
        <span className="total-p">{chatLang === 'kn' ? 'ಒಟ್ಟು:' : 'Total:'} <strong>₹{total.toLocaleString('en-IN')}</strong></span>
      </div>

      <div className="card-actions">
        <button onClick={handleWhatsApp} className="btn-chat-wa" title="Inquire on WhatsApp">
          <Phone size={14} />
          <span>{chatLang === 'kn' ? 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ವಿಚಾರಿಸಿ' : 'Inquire on WhatsApp'}</span>
        </button>
      </div>

      <style>{`
        .chat-product-card {
          background: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 12px;
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: var(--shadow-sm);
          width: 100%;
          max-width: 320px;
        }
        .card-top {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .card-img {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-sm);
          object-fit: cover;
          border: 1px solid var(--border-light);
        }
        .card-info h4 {
          font-size: 0.9rem;
          margin: 0 0 2px 0;
          color: var(--text-main);
          font-weight: 800;
        }
        .card-origin {
          font-size: 0.725rem;
          color: var(--text-muted);
          display: block;
        }
        .card-controls {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 8px;
          background: var(--bg-surface-elevated);
          padding: 8px;
          border-radius: var(--radius-sm);
        }
        .control-group {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .control-group label {
          font-size: 0.65rem;
          color: var(--text-light);
          text-transform: uppercase;
          font-weight: 700;
        }
        .chat-select, .chat-input {
          width: 100%;
          padding: 4px 6px;
          font-size: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: 4px;
          background: #ffffff;
          color: var(--text-body);
          outline: none;
        }
        .chat-select:focus, .chat-input:focus {
          border-color: var(--primary-500);
        }
        .card-price-summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          padding: 0 4px;
        }
        .unit-p {
          color: var(--text-light);
        }
        .total-p {
          color: var(--text-main);
        }
        .total-p strong {
          color: var(--primary-800);
          font-weight: 800;
        }
        .card-actions {
          display: flex;
          gap: 6px;
        }
        .btn-chat-wa {
          width: 100%;
          background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
          color: #ffffff;
          border: none;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s ease;
        }
        .btn-chat-wa:hover {
          background: linear-gradient(135deg, var(--primary-700), var(--primary-900));
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}

export default function Chatbot({ currentLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [chatLang, setChatLang] = useState(currentLang || 'en');
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Sync language with app language unless changed
  useEffect(() => {
    if (currentLang) {
      setChatLang(currentLang);
    }
  }, [currentLang]);

  // Initial welcome message
  useEffect(() => {
    const welcomeText = chatLang === 'kn'
      ? "ನಮಸ್ತೆ! ಶ್ರೀ ಅಡಿಕೆ ಹ್ಯಾವನ್ ನರ್ಸರಿ AI ಸಹಾಯಕ್ಕೆ ಸ್ವಾಗತ. ನಾನು ನಿಮಗೆ ನಮ್ಮ ಉತ್ತಮ ಅಡಿಕೆ ತಳಿಗಳು, ಸಸಿಗಳ ಬೆಲೆ, ಸಾಲುಗಳ ಅಂತರ, ನಾಟಿ ವಿಧಾನ, ಕೊಳೆರೋಗ ನಿಯಂತ್ರಣ ಅಥವಾ ಸಸಿಗಳನ್ನು ಬುಕ್ ಮಾಡುವ ಬಗ್ಗೆ ಮಾಹಿತಿ ನೀಡಬಲ್ಲೆ. ಕೆಳಗಿನ ಪ್ರಶ್ನೆಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ!"
      : "Hello! Welcome to Sri Areca Haven Nursery AI Support. I can help you with our premium Arecanut varieties, pricing, spacing guidelines, pit treatment, disease management (Koleroga), or placing an order. Select a topic below or type your question!";

    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: welcomeText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, [chatLang]);

  // Auto scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const toggleLanguage = () => {
    setChatLang((prev) => (prev === 'en' ? 'kn' : 'en'));
  };

  // Predefined suggestion chips based on active language
  const suggestions = chatLang === 'kn'
    ? [
        { label: "ದರ ಪಟ್ಟಿ 💰", query: "ಬೆಲೆ ಪಟ್ಟಿ" },
        { label: "ಮೋಹಿತ್‌ನಗರ ತಳಿ 🌿", query: "ಮೋಹಿತ್‌ನಗರ ತಳಿ ಬಗ್ಗೆ ತಿಳಿಸಿ" },
        { label: "ಗಿಡಗಳ ಅಂತರ 📐", query: "ಗಿಡಗಳ ನಡುವಿನ ಅಂತರ ಎಷ್ಟು?" },
        { label: "ಕೊಳೆರೋಗ ತಡೆಗಟ್ಟಲು 🛡️", query: "ಕೊಳೆರೋಗ ಹತೋಟಿ ಹೇಗೆ?" },
        { label: "ವಿಳಾಸ ಮತ್ತು ಫೋನ್ 📍", query: "ವಿಳಾಸ ಮತ್ತು ಸಂಪರ್ಕ ಮಾಹಿತಿ" },
      ]
    : [
        { label: "Price List 💰", query: "What is the price list of saplings?" },
        { label: "Mohitnagar Variety 🌿", query: "Tell me about Mohitnagar Variety" },
        { label: "Plant Spacing 📐", query: "What is the recommended plant spacing?" },
        { label: "Koleroga Control 🛡️", query: "How to control Koleroga/Rot disease?" },
        { label: "Address & Phone 📍", query: "Nursery address and contact number" }
      ];

  // NLP matching patterns and replies
  const processQuery = (rawQuery, lang) => {
    const q = rawQuery.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, "").trim();

    // English Keywords
    const hasEnPrice = q.includes("price") || q.includes("rate") || q.includes("cost") || q.includes("how much") || q.includes("rupee") || q.includes("charges");
    const hasEnMohitnagar = q.includes("mohitnagar") || q.includes("mohit nagar");
    const hasEnMangala = q.includes("mangala") || q.includes("mangal");
    const hasEnSumangala = q.includes("sumangala") || q.includes("sumangal");
    const hasEnSrimangala = q.includes("srimangala") || q.includes("srimangal");
    const hasEnKanara = q.includes("kanara") || q.includes("local") || q.includes("heritage");
    const hasEnDwarf = q.includes("dwarf") || q.includes("hirehalli") || q.includes("short") || q.includes("height") || q.includes("ladder");
    const hasEnSpacing = q.includes("spacing") || q.includes("distance") || q.includes("feet") || q.includes("row") || q.includes("gap") || q.includes("9x9") || q.includes("8x8");
    const hasEnAcre = q.includes("acre") || q.includes("plants per") || q.includes("how many plants") || q.includes("density") || q.includes("quantity");
    const hasEnDisease = q.includes("disease") || q.includes("rot") || q.includes("koleroga") || q.includes("mahali") || q.includes("bleeding") || q.includes("fungus") || q.includes("spray") || q.includes("bordeaux");
    const hasEnWater = q.includes("water") || q.includes("irrigation") || q.includes("drip") || q.includes("fertigation") || q.includes("npk") || q.includes("fertilizer");
    const hasEnPlanting = q.includes("planting") || q.includes("pit") || q.includes("dig") || q.includes("soil") || q.includes("clay") || q.includes("laterite") || q.includes("trichoderma") || q.includes("compost");
    const hasEnDelivery = q.includes("delivery") || q.includes("transport") || q.includes("shipping") || q.includes("send") || q.includes("truck") || q.includes("crate") || q.includes("karnataka");
    const hasEnLocation = q.includes("location") || q.includes("address") || q.includes("where") || q.includes("place") || q.includes("map") || q.includes("magadi") || q.includes("thippasandra");
    const hasEnContact = q.includes("contact") || q.includes("phone") || q.includes("whatsapp") || q.includes("number") || q.includes("call") || q.includes("mobile") || q.includes("owner");
    const hasEnYield = q.includes("yield") || q.includes("profit") || q.includes("income") || q.includes("money") || q.includes("revenue") || q.includes("calculator") || q.includes("harvest") || q.includes("quintal");
    const hasEnIntercrop = q.includes("intercrop") || q.includes("pepper") || q.includes("cocoa") || q.includes("banana") || q.includes("cardamom") || q.includes("vanilla");
    const hasEnGreeting = q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("namaste") || q.includes("good morning") || q.includes("good afternoon");
    const hasEnThanks = q.includes("thank") || q.includes("thanks") || q.includes("helpful") || q.includes("great");

    // Kannada Keywords (including transliterated Kannada / Manglish)
    const hasKnPrice = q.includes("ಬೆಲೆ") || q.includes("ದರ") || q.includes("ರೇಟ್") || q.includes("ಖರ್ಚು") || q.includes("bele") || q.includes("dara") || q.includes("rate") || q.includes("sasi rate");
    const hasKnMohitnagar = q.includes("ಮೋಹಿತ್‌ನಗರ") || q.includes("ಮೊಹೀತ್") || q.includes("ಮೋಹಿತ್") || q.includes("mohitnagar") || q.includes("mohit");
    const hasKnMangala = q.includes("ಮಂಗಳ") || q.includes("ಮಂಗಲ") || q.includes("mangala");
    const hasKnSumangala = q.includes("ಸುಮಂಗಳ") || q.includes("ಸುಮಂಗಲ") || q.includes("sumangala");
    const hasKnSrimangala = q.includes("ಶ್ರೀಮಂಗಳ") || q.includes("ಶ್ರೀಮಂಗಲ") || q.includes("srimangala");
    const hasKnKanara = q.includes("ಕನ್ನಡ") || q.includes("ಲೋಕಲ್") || q.includes("ಸ್ಥಳೀಯ") || q.includes("lokaal") || q.includes("local");
    const hasKnDwarf = q.includes("ಕುಬ್ಜ") || q.includes("ಗಿಡ್ಡ") || q.includes("ಹಿರೇಹಳ್ಳಿ") || q.includes("ಏಣಿ") || q.includes("kubja") || q.includes("gidda");
    const hasKnSpacing = q.includes("ಅಂತರ") || q.includes("ಗ್ಯಾಪ್") || q.includes("ಸಾಲು") || q.includes("ಅಡಿ") || q.includes("anthara") || q.includes("gap") || q.includes("adi");
    const hasKnAcre = q.includes("ಎಕರೆಗೆ") || q.includes("ಎಕರೆ") || q.includes("ಎಷ್ಟು ಸಸಿ") || q.includes("ekare") || q.includes("acre");
    const hasKnDisease = q.includes("ರೋಗ") || q.includes("ಕೊಳೆರೋಗ") || q.includes("ಮಹಾಲಿ") || q.includes("ಕೊಳೆ") || q.includes("ಸಿಂಪಡಣೆ") || q.includes("ಬೋರ್ಡೋ") || q.includes("roga") || q.includes("koleroga");
    const hasKnWater = q.includes("ನೀರು") || q.includes("ನೀರಾವರಿ") || q.includes("ಹನಿ") || q.includes("ಡ್ರಿಪ್") || q.includes("ಗೊಬ್ಬರ") || q.includes("neeru") || q.includes("neeravari") || q.includes("gobbar");
    const hasKnPlanting = q.includes("ನಾಟಿ") || q.includes("ಗುಂಡಿ") || q.includes("ಮಣ್ಣು") || q.includes("ಕೆಂಪು") || q.includes("ನಾಟಿ ವಿಧಾನ") || q.includes("naati") || q.includes("gundi");
    const hasKnDelivery = q.includes("ಡೆಲಿವರಿ") || q.includes("ಸಾಗಾಟ") || q.includes("ಸಾಗಾಣಿಕೆ") || q.includes("ವಾಹನ") || q.includes("ಕ್ರೇಟ್") || q.includes("delivery") || q.includes("saagata");
    const hasKnLocation = q.includes("ಎಲ್ಲಿದೆ") || q.includes("ವಿಳಾಸ") || q.includes("ಸ್ಥಳ") || q.includes("ತಿಪ್ಪಸಂದ್ರ") || q.includes("ಮಾಗಡಿ") || q.includes("address") || q.includes("vilasa");
    const hasKnContact = q.includes("ಸಂಪರ್ಕ") || q.includes("ಫೋನ್") || q.includes("ನಂಬರ್") || q.includes("ವಾಟ್ಸಾಪ್") || q.includes("ಮೊಬೈಲ್") || q.includes("phone") || q.includes("contact");
    const hasKnYield = q.includes("ಇಳುವರಿ") || q.includes("ಲಾಭ") || q.includes("ಆದಾಯ") || q.includes("ಕ್ವಿಂಟಾಲ್") || q.includes("ಫಸಲು") || q.includes("ilavari") || q.includes("labha");
    const hasKnIntercrop = q.includes("ಮಿಶ್ರಬೆಳೆ") || q.includes("ಮಿಶ್ರ") || q.includes("ಮೆಣಸು") || q.includes("ಕಾಳುಮೆಣಸು") || q.includes("ಕೋಕೋ") || q.includes("pepper");
    const hasKnGreeting = q.includes("ಹಲೋ") || q.includes("ನಮಸ್ತೆ") || q.includes("ನಮಸ್ಕಾರ") || q.includes("ಸ್ವಾಗತ") || q.includes("namaste") || q.includes("namaskara");
    const hasKnThanks = q.includes("ಧನ್ಯವಾದ") || q.includes("ಥ್ಯಾಂಕ್ಸ್") || q.includes("thanks") || q.includes("dhanyavada");

    // English response generation
    if (lang === 'en') {
      if (hasEnGreeting) {
        return { text: "Hello there! How can I assist you with your Arecanut plantation goals today? Ask me about our premium saplings, pricing, spacing density, disease control, or delivery." };
      }
      if (hasEnThanks) {
        return { text: "You're very welcome! If you have any more questions about Arecanut cultivation, seedling genetics, or ordering, please feel free to ask. Good luck with your farming!" };
      }
      if (hasEnPrice) {
        return {
          text: "Here is the price list for our certified true-to-type saplings based on growth age:\n\n" +
                "• **Mohitnagar High-Yield:** 6M (₹35) | 1Y (₹65) | 2Y (₹120)\n" +
                "• **Mangala Dwarf Hybrid:** 6M (₹40) | 1Y (₹70) | 2Y (₹130)\n" +
                "• **Sumangala Elite:** 6M (₹35) | 1Y (₹65) | 2Y (₹115)\n" +
                "• **Srimangala Premium:** 6M (₹38) | 1Y (₹68) | 2Y (₹125)\n" +
                "• **South Kanara Local:** 6M (₹30) | 1Y (₹55) | 2Y (₹100)\n" +
                "• **Hirehalli Dwarf Selection:** 6M (₹45) | 1Y (₹80) | 2Y (₹140)\n\n" +
                "*(6M: 6-Month Seedling, 1Y: 1-Year Polybag Bag, 2Y: 2-Year Ready Palm)*\n\n" +
                "You can configure and inquire about any of these varieties directly on WhatsApp by typing the variety name (e.g. 'Mohitnagar') and using the interactive card below."
        };
      }
      if (hasEnMohitnagar) {
        return {
          text: "⭐ **Mohitnagar High-Yielding Arecanut**\n\n" +
                "Mohitnagar is our top-selling variety, celebrated for having the highest dry nut (Chali) recovery in India. It produces heavy, compact bunches (12-15 kg) containing large, uniform oval nuts. It features a robust trunk and excellent wind resistance.\n\n" +
                "• **Yield:** 3.8 - 4.6 kg dry nut per palm annually\n" +
                "• **First Bearing:** 3.5 - 4 Years\n" +
                "• **Soil:** Deep red clay loam and alluvial soils\n\n" +
                "Configure and inquire about Mohitnagar saplings on WhatsApp below:",
          widget: { type: 'product', productId: 'mohitnagar' }
        };
      }
      if (hasEnMangala) {
        return {
          text: "⭐ **Mangala Semi-Dwarf Hybrid**\n\n" +
                "Released by CPCRI, Mangala is highly valued for early fruiting and its semi-dwarf stature. Its compact canopy allows for higher plantation density, and the shorter tree height makes harvesting and spraying easier.\n\n" +
                "• **Yield:** 3.0 - 3.8 kg dry nut per palm annually\n" +
                "• **First Bearing:** 3 - 3.5 Years (1 year earlier than normal!)\n" +
                "• **Spacing:** Ideal for compact 8ft x 8ft high-density planting.\n\n" +
                "Configure and inquire about Mangala saplings on WhatsApp below:",
          widget: { type: 'product', productId: 'mangala' }
        };
      }
      if (hasEnSumangala) {
        return {
          text: "⭐ **Sumangala Elite Selection**\n\n" +
                "Sumangala features a thick, sturdy trunk and Indonesian parentage standardized in coastal Karnataka. It is highly climate-resilient with deep root anchorage, making it resistant to heavy monsoon storms and dry droughts.\n\n" +
                "• **Yield:** 3.2 - 4.2 kg dry nut per palm annually\n" +
                "• **First Bearing:** 3.5 - 4 Years\n" +
                "• **Features:** Deep green fronds, low leaf drop rate, excellent for intercropping with Pepper.\n\n" +
                "Configure and inquire about Sumangala saplings on WhatsApp below:",
          widget: { type: 'product', productId: 'sumangala' }
        };
      }
      if (hasEnSrimangala) {
        return {
          text: "⭐ **Srimangala Premium Selection**\n\n" +
                "Originally a Singapore landrace, Srimangala produces plump, round nuts with thick outer husks and high dry weight. It yields 4 to 5 big bunches per year and attracts premium prices from supari traders.\n\n" +
                "• **Yield:** 3.5 - 4.4 kg dry nut per palm annually\n" +
                "• **First Bearing:** 3.5 - 4 Years\n" +
                "• **Best for:** Commercial high-grade 'Chali' processing.\n\n" +
                "Configure and inquire about Srimangala saplings on WhatsApp below:",
          widget: { type: 'product', productId: 'srimangala' }
        };
      }
      if (hasEnKanara) {
        return {
          text: "⭐ **South Kanara Local Elite**\n\n" +
                "Our local heritage choice, sourced from certified 50+ year old mother palms. It has excellent longevity (50-60 years), traditional high aroma, and natural immunity to regional soils, pests, and climate stresses.\n\n" +
                "• **Yield:** 3.0 - 3.6 kg dry nut per palm annually\n" +
                "• **First Bearing:** 4 - 5 Years\n" +
                "• **Resilience:** Exceptionally high, deep vertical taproot system.\n\n" +
                "Configure and inquire about South Kanara saplings on WhatsApp below:",
          widget: { type: 'product', productId: 'south-kanara' }
        };
      }
      if (hasEnDwarf) {
        return {
          text: "⭐ **Dwarf / Zero-Ladder Harvesting Varieties**\n\n" +
                "To solve the agricultural labor shortage, we recommend these compact options:\n\n" +
                "1. **Hirehalli Dwarf Selection (IIHR):** A true dwarf variety. Stays under 16-18 feet even after 15 years, eliminating climber dependency. Yields 2.8 - 3.5 kg/palm/yr. First bearing in 3.5 years.\n" +
                "2. **Mangala Semi-Dwarf:** CPCRI selection. Shorter than standard, allows pole harvesting and higher planting density.\n\n" +
                "Configure and inquire about Hirehalli Dwarf saplings on WhatsApp below:",
          widget: { type: 'product', productId: 'hirehalli-dwarf' }
        };
      }
      if (hasEnSpacing) {
        return {
          text: "📐 **Planting Spacing & Alignment Guidelines:**\n\n" +
                "• **Standard Tall Varieties** (Mohitnagar, Sumangala, Srimangala, Local): Recommended spacing is **9 ft x 9 ft** (2.7m x 2.7m), yielding **512 plants per acre**.\n" +
                "• **Dwarf Varieties** (Mangala, Hirehalli Dwarf): Spacing can be reduced to **8 ft x 8 ft** (~680 plants/acre) or **8.5 ft x 8.5 ft** (~600 plants/acre) for high-density cultivation.\n" +
                "• **Row Alignment:** Always align rows in a **South-North direction**. This layout minimizes direct afternoon sun scalding on young palm trunks and allows optimal sunlight to penetrate for intercrops like Black Pepper."
        };
      }
      if (hasEnAcre) {
        return {
          text: "📊 **Land Acreage & Sapling Density Summary:**\n\n" +
                "• At **9 ft x 9 ft spacing** (Tall varieties), you require **512 saplings per acre**.\n" +
                "• At **8 ft x 8 ft spacing** (Dwarf varieties), you require **680 saplings per acre**.\n" +
                "• At **8.5 ft x 8.5 ft spacing** (Semi-Dwarf), you require **600 saplings per acre**.\n\n" +
                "💡 *Tip:* Check out our **Profit Calculator** page to interactively calculate exact sapling requirements, dry nut yield, and net annual profit for your farm's acreage!"
        };
      }
      if (hasEnDisease) {
        return {
          text: "🛡️ **Arecanut Disease Control & Prevention:**\n\n" +
                "1. **Koleroga / Mahali (Fruit Rot):** The major threat. Spray the crown bunches thoroughly with **1% Bordeaux mixture** just before monsoon starts (May-June). Repeat with a second spray 40-45 days later.\n" +
                "2. **Root Rot (Anabe Roga / Ganoderma):** Treat pits with **100g Trichoderma viride** mixed with 500g neem cake and compost. Ensure proper field drainage; stagnant water promotes fungal infection.\n" +
                "3. **Stem Bleeding:** Scrap off the affected patch and apply Bordeaux paste or copper oxychloride solution. Paint trunks with lime wash to prevent sun cracking."
        };
      }
      if (hasEnWater) {
        return {
          text: "💧 **Irrigation & Fertilizer Schedule:**\n\n" +
                "• **Watering:** Areca palms need **15 to 20 Liters** of water per day during dry and summer months. Drip irrigation is highly recommended with 2 emitters per palm on opposite sides.\n" +
                "• **NPK Fertilizer:** For a mature bearing palm, apply **100g Nitrogen (N), 40g Phosphorus (P₂O₅), and 140g Potassium (K₂O)** annually. Split this into two doses: 1st dose in Sept-Oct (post-monsoon) and 2nd dose in March-April (pre-monsoon).\n" +
                "• **Organic Inputs:** Add 10-15 kg of well-rotted farmyard manure (FYM) or vermicompost per palm annually along with neem cake."
        };
      }
      if (hasEnPlanting) {
        return {
          text: "🌱 **Optimal Pit Preparation & Planting:**\n\n" +
                "1. **Pit Size:** Dig pits of **2.5 ft x 2.5 ft x 2.5 ft** at least 3 weeks before planting during the monsoon.\n" +
                "2. **Pit Treatment:** Mix the topsoil with **10 kg well-rotted compost**, **500g neem cake**, and **100g Trichoderma viride** (to prevent root grubs and termites).\n" +
                "3. **Planting:** Carefully tear open the polybag. Do not disturb the root ball. Place the sapling in the center so the collar region is level with the soil. Stake the seedling to protect it from monsoon winds."
        };
      }
      if (hasEnDelivery) {
        return {
          text: "🚚 **Pan-Karnataka Safe Shipping & Transportation:**\n\n" +
                "We provide safe delivery directly to your farm gate in specialized, ventilated wooden/plastic crates and trucks. This guarantees zero root damage during transport. We ship to Ramanagara, Shivamogga, Hassan, Tumakuru, Chikkamagaluru, Chitradurga, Davanagere, Mandya, Belagavi, and all other districts. We guarantee a **98%+ survival rate** upon planting!"
        };
      }
      if (hasEnLocation) {
        return {
          text: "📍 **Nursery Address & Location:**\n\n" +
                "**Sri Areca Haven Nursery**\n" +
                "Thippasandra, Magadi Taluk, Ramanagara District, Karnataka - 562131.\n\n" +
                "We are located approximately 60km from Bengaluru. We highly recommend visiting us in person so you can inspect our 25+ year old certified benchmark Mother Palms and see our scientific root hardening yard!"
        };
      }
      if (hasEnContact) {
        return {
          text: "📞 **Contact Details:**\n\n" +
                "• **Direct Call / Inquiry:** +91 96068 41193 / +91 78921 68121\n" +
                "• **WhatsApp Support:** Send a message directly using the green WhatsApp helper on the bottom left of the site.\n" +
                "• **Location:** Thippasandra, Magadi Taluk, Ramanagara, Karnataka.\n\n" +
                "Feel free to call us for direct bookings, booking discounts on bulk orders (>1,000 saplings), or farm visit planning."
        };
      }
      if (hasEnYield) {
        return {
          text: "💰 **Farm Yield, Harvest, and Profitability:**\n\n" +
                "• **Yield:** High-yield varieties like Mohitnagar yield **3.8 - 4.6 kg dry nut (Chali)** per palm annually under standard fertigation.\n" +
                "• **Revenue Per Acre:** With 512 palms/acre yielding an average of 4 kg dry nut per palm, you harvest ~2,048 kg (or ~20.5 Quintals) of dry nuts. At a market price of ₹400/kg, this generates **₹8.2 Lakhs revenue per acre**.\n" +
                "• **Intercropping Revenue:** Adding Pepper on areca trunks and Cocoa in shaded corridors adds another **₹1.5 to ₹3 Lakhs net profit**, bringing the total annual net profit per acre to **₹10+ Lakhs** after the 5th year!"
        };
      }
      if (hasEnIntercrop) {
        return {
          text: "🌿 **Arecanut Multi-Tier Intercropping:**\n\n" +
                "Arecanut's vertical canopy structure is perfect for multi-tier intercropping:\n" +
                "1. **Black Pepper:** Trained directly up the areca trunk. Highly profitable and requires no extra land.\n" +
                "2. **Cocoa / Cardamom:** Grows beautifully in the shaded corridors between rows.\n" +
                "3. **Banana / Papaya:** Excellent for providing temporary shade during the first 3 years of young areca growth.\n" +
                "4. **Vanilla:** Can be grown as a premium high-value orchid intercrop.\n\n" +
                "Intercropping provides steady annual income during the initial 4-year gestation period of Arecanut palms."
        };
      }

      // Default English fallback
      return {
        text: "I'm not quite sure I understood that request. I am trained specifically on **Sri Areca Haven Nursery**. I can help you with:\n\n" +
              "1. **Price List** (rates for 6M, 1Y, 2Y saplings)\n" +
              "2. **Areca Varieties** (Mohitnagar, Mangala, Sumangala, etc.)\n" +
              "3. **Plant Spacing & Setup** (9x9 vs 8x8 density)\n" +
              "4. **Disease Protection** (Koleroga/Mahali control)\n" +
              "5. **Location & Contact** (Magadi nursery address and call number)\n\n" +
              "What would you like to know? You can also select one of the quick suggestions below."
      };
    }

    // Kannada response generation
    else {
      if (hasKnGreeting) {
        return { text: "ನಮಸ್ಕಾರ! ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ? ನಮ್ಮ ಅಡಿಕೆ ಸಸಿಗಳ ಬೆಲೆ ಪಟ್ಟಿ, ತಳಿಗಳ ಮಾಹಿತಿ, ನಾಟಿ ಮಾಡುವ ವಿಧಾನ, ಅಂತರ, ಕೊಳೆರೋಗ ನಿಯಂತ್ರಣ ಅಥವಾ ಬುಕಿಂಗ್ ಬಗ್ಗೆ ಕೇಳಿ." };
      }
      if (hasKnThanks) {
        return { text: "ನಿಮಗೆ ಧನ್ಯವಾದಗಳು! ಅಡಿಕೆ ಬೇಸಾಯ, ಸಸಿಗಳ ತಳಿಗಳು ಅಥವಾ ಬುಕಿಂಗ್ ಬಗ್ಗೆ ಯಾವುದೇ ಮಾಹಿತಿ ಬೇಕಿದ್ದರೂ ದಯವಿಟ್ಟು ಕೇಳಿ. ನಿಮ್ಮ ಕೃಷಿ ಯಶಸ್ವಿಯಾಗಲಿ!" };
      }
      if (hasKnPrice) {
        return {
          text: "ನಮ್ಮ ನರ್ಸರಿಯ ಸಸಿಗಳ ವಯಸ್ಸಿಗೆ ಅನುಗುಣವಾಗಿ ದರ ಪಟ್ಟಿ ಈ ಕೆಳಗಿನಂತಿದೆ:\n\n" +
                "• **ಮೋಹಿತ್‌ನಗರ ಅಧಿಕ ಇಳುವರಿ:** 6-ತಿಂಗಳು (₹35) | 1-ವರ್ಷ (₹65) | 2-ವರ್ಷ (₹120)\n" +
                "• **ಮಂಗಳ ಕುಬ್ಜ ತಳಿ:** 6-ತಿಂಗಳು (₹40) | 1-ವರ್ಷ (₹70) | 2-ವರ್ಷ (₹130)\n" +
                "• **ಸುಮಂಗಳ ಉತ್ಕೃಷ್ಟ ತಳಿ:** 6-ತಿಂಗಳು (₹35) | 1-ವರ್ಷ (₹65) | 2-ವರ್ಷ (₹115)\n" +
                "• **ಶ್ರೀಮಂಗಳ ಪ್ರೀಮಿಯಂ:** 6-ತಿಂಗಳು (₹38) | 1-ವರ್ಷ (₹68) | 2-ವರ್ಷ (₹125)\n" +
                "• **ದಕ್ಷಿಣ ಕನ್ನಡ ಸ್ಥಳೀಯ (ಲೋಕಲ್):** 6-ತಿಂಗಳು (₹30) | 1-ವರ್ಷ (₹55) | 2-ವರ್ಷ (₹100)\n" +
                "• **ಹಿರೇಹಳ್ಳಿ ಕುಬ್ಜ ಹೈಬ್ರಿಡ್:** 6-ತಿಂಗಳು (₹45) | 1-ವರ್ಷ (₹80) | 2-ವರ್ಷ (₹140)\n\n" +
                "*(6-ತಿಂಗಳ ಸಣ್ಣ ಸಸಿ, 1-ವರ್ಷದ ಪಾಲಿಬ್ಯಾಗ್ ಬ್ಯಾಗ್, 2-ವರ್ಷದ ನಾಟಿಗೆ ಸಿದ್ಧವಿರುವ ದೊಡ್ಡ ಸಸಿ)*\n\n" +
                "ಯಾವುದೇ ತಳಿಯನ್ನು ವಿವರವಾಗಿ ನೋಡಲು ಮತ್ತು ನೇರವಾಗಿ **ವಾಟ್ಸಾಪ್ ಮೂಲಕ ವಿಚಾರಿಸಲು** ತಳಿಯ ಹೆಸರನ್ನು ಟೈಪ್ ಮಾಡಿ (ಉದಾಹರಣೆಗೆ: 'Mohitnagar' ಅಥವಾ 'ಮಂಗಳ')."
        };
      }
      if (hasKnMohitnagar) {
        return {
          text: "⭐ **ಮೋಹಿತ್‌ನಗರ ಅಧಿಕ ಇಳುವರಿ ಅಡಿಕೆ ತಳಿ**\n\n" +
                "ಮೋಹಿತ್‌ನಗರ ಭಾರತದಲ್ಲೇ ಗರಿಷ್ಠ ಒಣ ಅಡಿಕೆ (ಚಾಲಿ) ತೂಕ ನೀಡುವ ತಳಿಯಾಗಿದೆ. ಇದರ ಪ್ರತಿ ಗೊಂಚಲು 12 ರಿಂದ 14 ಕೆ.ಜಿ ತೂಗುತ್ತದೆ. ದೊಡ್ಡ ಗಾತ್ರದ ದುಂಡು ಅಡಿಕೆ ದೊರೆಯುತ್ತದೆ. ದಪ್ಪ ಕಾಂಡವಿದ್ದು, ಬಿರುಗಾಳಿ ತಡೆದುಕೊಳ್ಳುತ್ತದೆ.\n\n" +
                "• **ಇಳುವರಿ:** ವರ್ಷಕ್ಕೆ ಒಂದು ಮರದಿಂದ 3.8 - 4.6 ಕೆ.ಜಿ ಒಣ ಅಡಿಕೆ\n" +
                "• **ಮೊದಲ ಫಸಲು:** 3.5 - 4 ವರ್ಷಗಳಲ್ಲಿ\n" +
                "• **ಮಣ್ಣು:** ಫಲವತ್ತಾದ ಕೆಂಪು ಜೇಡಿ ಮಣ್ಣು ಮತ್ತು ಗೋಡು ಮಣ್ಣು\n\n" +
                "ಮೋಹಿತ್‌ನಗರ ಸಸಿಗಳ ಬಗ್ಗೆ ವಾಟ್ಸಾಪ್ ವಿಚಾರಣೆ ಮಾಡಲು ಕೆಳಗಿನ ಕಾರ್ಡ್ ಬಳಸಿ:",
          widget: { type: 'product', productId: 'mohitnagar' }
        };
      }
      if (hasKnMangala) {
        return {
          text: "⭐ **ಮಂಗಳ ಅರೆ-ಕುಬ್ಜ ತಳಿ (CPCRI)**\n\n" +
                "ಸಿ.ಪಿ.ಸಿ.ಆರ್.ಐ ಸಂಶೋಧನಾ ತಳಿ. ಇದು ಬೇಗನೆ ಫಸಲು ನೀಡಲು ಪ್ರಾರಂಭಿಸುತ್ತದೆ. ಗಿಡ ಕಡಿಮೆ ಎತ್ತರವಿರುವುದರಿಂದ ನೆಲದಿಂದಲೇ ಕೋಲಿನ ಮೂಲಕ ಸುಲಭವಾಗಿ ಕಟಾವು ಮಾಡಬಹುದು ಮತ್ತು ಔಷಧಿ ಸಿಂಪಡಿಸಬಹುದು. ಸಾಂದ್ರ ಬೇಸಾಯಕ್ಕೆ (8x8 ಅಡಿ) ಅತ್ಯಂತ ಸೂಕ್ತ.\n\n" +
                "• **ಇಳುವರಿ:** ವರ್ಷಕ್ಕೆ ಒಂದು ಮರದಿಂದ 3.0 - 3.8 ಕೆ.ಜಿ ಒಣ ಅಡಿಕೆ\n" +
                "• **ಮೊದಲ ಫಸಲು:** 3 - 3.5 ವರ್ಷಗಳಲ್ಲಿ (ಇತರ ತಳಿಗಳಿಗಿಂತ 1 ವರ್ಷ ಮುಂಚಿತವಾಗಿ)\n" +
                "• **ಅಂತರ:** 8 x 8 ಅಡಿ ಅಥವಾ 8.5 x 8.5 ಅಡಿ\n\n" +
                "ಮಂಗಳ ಸಸಿಗಳ ಬಗ್ಗೆ ವಾಟ್ಸಾಪ್ ವಿಚಾರಣೆ ಮಾಡಲು ಕೆಳಗಿನ ಕಾರ್ಡ್ ಬಳಸಿ:",
          widget: { type: 'product', productId: 'mangala' }
        };
      }
      if (hasKnSumangala) {
        return {
          text: "⭐ **ಸುಮಂಗಳ ಉತ್ಕೃಷ್ಟ ತಳಿ**\n\n" +
                "ಇಂಡೋನೇಷ್ಯಾ ಮೂಲದ ಬಲಿಷ್ಠ ತಳಿ. ಆಳವಾದ ಬೇರು ವ್ಯವಸ್ಥೆ ಮತ್ತು ದಪ್ಪನೆಯ ಕಾಂಡ ಹೊಂದಿದ್ದು, ಮಲೆನಾಡಿನ ಬಿರುಗಾಳಿ, ಅತಿಯಾದ ಮಳೆ ಹಾಗೂ ಬೇಸಿಗೆಯ ಬಿಸಿಲನ್ನು ಸುಲಭವಾಗಿ ತಡೆದುಕೊಳ್ಳುತ್ತದೆ. ಕಾಳುಮೆಣಸು ಹಬ್ಬಿಸಲು ಅತ್ಯುತ್ತಮ ಕಾಂಡ ಹೊಂದಿದೆ.\n\n" +
                "• **ಇಳುವರಿ:** ವರ್ಷಕ್ಕೆ ಒಂದು ಮರದಿಂದ 3.2 - 4.2 ಕೆ.ಜಿ ಒಣ ಅಡಿಕೆ\n" +
                "• **ಮೊದಲ ಫಸಲು:** 3.5 - 4 ವರ್ಷಗಳಲ್ಲಿ\n" +
                "• **ವಿಶೇಷತೆ:** ಹಸಿರು ಗರಿಗಳು ಉದುರುವುದು ಕಡಿಮೆ, ಮಿಶ್ರಬೆಳೆಗೆ ಸೂಕ್ತ.\n\n" +
                "ಸುಮಂಗಳ ಸಸಿಗಳ ಬಗ್ಗೆ ವಾಟ್ಸಾಪ್ ವಿಚಾರಣೆ ಮಾಡಲು ಕೆಳಗಿನ ಕಾರ್ಡ್ ಬಳಸಿ:",
          widget: { type: 'product', productId: 'sumangala' }
        };
      }
      if (hasKnSrimangala) {
        return {
          text: "⭐ **ಶ್ರೀಮಂಗಳ ಪ್ರೀಮಿಯಂ ತಳಿ**\n\n" +
                "ಸಿಂಗಾಪುರ ಮೂಲದ ಅತ್ಯಧಿಕ ತೂಕದ ಚಾಲಿ ಅಡಿಕೆ ತಳಿ. ದಪ್ಪನೆಯ ಸಿಪ್ಪೆ ಹಾಗೂ ಗರಿಷ್ಠ ತೂಕದ ದುಂಡು ಅಡಿಕೆ ನೀಡುತ್ತದೆ. ವರ್ಷಕ್ಕೆ 4 ರಿಂದ 5 ಬೃಹತ್ ಗೊಂಚಲುಗಳನ್ನು ನೀಡುತ್ತದೆ. ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ವ್ಯಾಪಾರಿಗಳಿಂದ ಅಧಿಕ ಬೇಡಿಕೆ ಹೊಂದಿದೆ.\n\n" +
                "• **ಇಳುವರಿ:** ವರ್ಷಕ್ಕೆ ಒಂದು ಮರದಿಂದ 3.5 - 4.4 ಕೆ.ಜಿ ಒಣ ಅಡಿಕೆ\n" +
                "• **ಮೊದಲ ಫಸಲು:** 3.5 - 4 ವರ್ಷಗಳಲ್ಲಿ\n" +
                "• **ಮಾರುಕಟ್ಟೆ:** ಕ್ವಿಂಟಾಲ್‌ಗೆ ಗರಿಷ್ಠ ಬೆಲೆ ಸಿಗುತ್ತದೆ.\n\n" +
                "ಶ್ರೀಮಂಗಳ ಸಸಿಗಳ ಬಗ್ಗೆ ವಾಟ್ಸಾಪ್ ವಿಚಾರಣೆ ಮಾಡಲು ಕೆಳಗಿನ ಕಾರ್ಡ್ ಬಳಸಿ:",
          widget: { type: 'product', productId: 'srimangala' }
        };
      }
      if (hasKnKanara) {
        return {
          text: "⭐ **ದಕ್ಷಿಣ ಕನ್ನಡ ಸ್ಥಳೀಯ ತಳಿ (ಲೋಕಲ್)**\n\n" +
                "ನಮ್ಮ ಕರಾವಳಿ ಮತ್ತು ಮಲೆನಾಡಿನ ರೈತರ ಸಾಂಪ್ರದಾಯಿಕ ಆಯ್ಕೆ. 50ಕ್ಕೂ ಹೆಚ್ಚು ವರ್ಷಗಳ ದೀರ್ಘ ಆಯಸ್ಸು ಹೊಂದಿದ್ದು, ನಮ್ಮ ಮಣ್ಣಿನ ರೋಗಾಣುಗಳಿಗೆ ಮತ್ತು ವಾತಾವರಣದ ಏರುಪೇರುಗಳಿಗೆ ನೈಸರ್ಗಿಕ ಪ್ರತಿರೋಧ ಶಕ್ತಿ ಹೊಂದಿದೆ.\n\n" +
                "• **ಇಳುವರಿ:** ವರ್ಷಕ್ಕೆ ಒಂದು ಮರದಿಂದ 3.0 - 3.6 ಕೆ.ಜಿ ಒಣ ಅಡಿಕೆ\n" +
                "• **ಮೊದಲ ಫಸಲು:** 4 - 5 ವರ್ಷಗಳಲ್ಲಿ\n" +
                "• **ಆಯುಷ್ಯ:** 50 ರಿಂದ 60 ವರ್ಷಗಳ ನಿರಂತರ ಆದಾಯ.\n\n" +
                "ಲೋಕಲ್ ಸಸಿಗಳ ಬಗ್ಗೆ ವಾಟ್ಸಾಪ್ ವಿಚಾರಣೆ ಮಾಡಲು ಕೆಳಗಿನ ಕಾರ್ಡ್ ಬಳಸಿ:",
          widget: { type: 'product', productId: 'south-kanara' }
        };
      }
      if (hasKnDwarf) {
        return {
          text: "⭐ **ಕುಬ್ಜ ತಳಿಗಳು (ಏಣಿ ರಹಿತ ಕಟಾವು):**\n\n" +
                "ಮರ ಹತ್ತುವ ಆಳುಗಳ ಸಮಸ್ಯೆ ನಿವಾರಿಸಲು ಈ ತಳಿಗಳನ್ನು ಶಿಫಾರಸು ಮಾಡುತ್ತೇವೆ:\n\n" +
                "1. **ಹಿರೇಹಳ್ಳಿ ಕುಬ್ಜ ತಳಿ (IIHR):** ಇದು ಸಂಪೂರ್ಣ ಕುಬ್ಜ ತಳಿ. 15 ವರ್ಷಗಳ ನಂತರವೂ 16-18 ಅಡಿಗಿಂತ ಹೆಚ್ಚು ಬೆಳೆಯುವುದಿಲ್ಲ. ನೆಲದಿಂದಲೇ ಸುಲಭವಾಗಿ ಕೊಯ್ಲು ಮತ್ತು ಔಷಧಿ ಸಿಂಪಡಣೆ ಮಾಡಬಹುದು. ಇಳುವರಿ: 2.8 - 3.5 ಕೆ.ಜಿ/ವರ್ಷಕ್ಕೆ.\n" +
                "2. **ಮಂಗಳ ಅರೆ-ಕುಬ್ಜ ತಳಿ:** ನೆಲದಿಂದಲೇ ಕೋಲಿನ ಸಹಾಯದಿಂದ ಕಟಾವು ಮಾಡಬಹುದಾದ ಅರೆ-ಕುಬ್ಜ ತಳಿ.\n\n" +
                "ಹಿರೇಹಳ್ಳಿ ಕುಬ್ಜ ಸಸಿಗಳ ಬಗ್ಗೆ ವಾಟ್ಸಾಪ್ ವಿಚಾರಣೆ ಮಾಡಲು ಕೆಳಗಿನ ಕಾರ್ಡ್ ಬಳಸಿ:",
          widget: { type: 'product', productId: 'hirehalli-dwarf' }
        };
      }
      if (hasKnSpacing) {
        return {
          text: "📐 **ನಾಟಿ ಮಾಡುವಾಗ ಗಿಡಗಳ ಅಂತರ ಮತ್ತು ಸಾಲುಗಳು:**\n\n" +
                "• **ಎತ್ತರ ಬೆಳೆಯುವ ತಳಿಗಳು** (ಮೋಹಿತ್‌ನಗರ, ಸುಮಂಗಳ, ಲೋಕಲ್): **9 x 9 ಅಡಿ** (2.7 ಮೀಟರ್) ಅಂತರ ಇಡಬೇಕು. ಇದರಿಂದ **ಎಕರೆಗೆ 512 ಗಿಡಗಳು** ಬರುತ್ತವೆ.\n" +
                "• **ಕುಬ್ಜ ತಳಿಗಳು** (ಮಂಗಳ, ಹಿರೇಹಳ್ಳಿ ಕುಬ್ಜ): ಸಾಂದ್ರ ಬೇಸಾಯಕ್ಕಾಗಿ **8 x 8 ಅಡಿ** (~680 ಗಿಡಗಳು) ಅಥವಾ **8.5 x 8.5 ಅಡಿ** (~600 ಗಿಡಗಳು) ಅಂತರ ನೀಡಬಹುದು.\n" +
                "• **ಸಾಲುಗಳ ದಿಕ್ಕು:** ಸಾಲುಗಳನ್ನು ಯಾವಾಗಲೂ **ದಕ್ಷಿಣ-ಉತ್ತರ ದಿಕ್ಕಿನಲ್ಲಿ** ಮಾಡಿ. ಇದು ಮಧ್ಯಾಹ್ನದ ಬಿಸಿಲಿನಿಂದ ಎಳೆ ಗಿಡಗಳ ಕಾಂಡ ಸುಡುವುದನ್ನು ತಪ್ಪಿಸುತ್ತದೆ ಮತ್ತು ಕಾಳುಮೆಣಸು ಮಿಶ್ರಬೆಳೆಗೆ ಉತ್ತಮ ಬೆಳಕು ನೀಡುತ್ತದೆ."
        };
      }
      if (hasKnAcre) {
        return {
          text: "📊 **ಎಕರೆವಾರು ಸಸಿಗಳ ಸಂಖ್ಯೆ:**\n\n" +
                "• **9 x 9 ಅಡಿ ಅಂತರದಲ್ಲಿ** (ಸಾಮಾನ್ಯ ತಳಿಗಳು): ಎಕರೆಗೆ **512 ಸಸಿಗಳು** ಬೇಕು.\n" +
                "• **8.5 x 8.5 ಅಡಿ ಅಂತರದಲ್ಲಿ** (ಅರೆ-ಕುಬ್ಜ): ಎಕರೆಗೆ **600 ಸಸಿಗಳು** ಬೇಕು.\n" +
                "• **8 x 8 ಅಡಿ ಅಂತರದಲ್ಲಿ** (ಕುಬ್ಜ ತಳಿಗಳು): ಎಕರೆಗೆ **680 ಸಸಿಗಳು** ಬೇಕು.\n\n" +
                "💡 *ಸೂಚನೆ:* ಹೆಚ್ಚಿನ ಇಳುವರಿ ಮತ್ತು ಮಿಶ್ರಬೆಳೆಯ ಆದಾಯವನ್ನು ಲೆಕ್ಕ ಹಾಕಲು ವೆಬ್‌ಸೈಟ್‌ನ **ಲಾಭದ ಕ್ಯಾಲ್ಕುಲೇಟರ್ (Profit Calculator)** ಪುಟಕ್ಕೆ ಭೇಟಿ ನೀಡಿ!"
        };
      }
      if (hasKnDisease) {
        return {
          text: "🛡️ **ಅಡಿಕೆ ರೋಗಗಳು ಮತ್ತು ಹತೋಟಿ ಕ್ರಮಗಳು:**\n\n" +
                "1. **ಕೊಳೆರೋಗ / ಮಹಾಲಿ (Fruit Rot):** ಅತಿ ದೊಡ್ಡ ರೋಗ. ಮಳೆಗಾಲ ಆರಂಭಕ್ಕೂ ಮುನ್ನ (ಮೇ-ಜೂನ್) ಗಿಡದ ಸುಳಿ ಮತ್ತು ಗೊಂಚಲುಗಳಿಗೆ **1% ಬೋರ್ಡೋ ದ್ರಾವಣವನ್ನು** ಸಿಂಪಡಿಸಿ. 40-45 ದಿನಗಳ ನಂತರ ಎರಡನೇ ಬಾರಿ ಸಿಂಪಡಿಸಿ.\n" +
                "2. **ಬೇರು ಕೊಳೆ ರೋಗ (ಅನಬೆ ರೋಗ):** ನಾಟಿ ಮಾಡುವ ಮುನ್ನ ಪ್ರತಿ ಗುಂಡಿಗೆ **100 ಗ್ರಾಂ ಟ್ರೈಕೋಡರ್ಮ** ಮತ್ತು 500 ಗ್ರಾಂ ಬೇವಿನ ಹಿಂಡಿ ಮಣ್ಣಿನಲ್ಲಿ ಮಿಶ್ರಣ ಮಾಡಿ. ತೋಟದಲ್ಲಿ ನೀರು ನಿಲ್ಲದಂತೆ ಬಸಿಗಾಲುವೆಗಳನ್ನು ಮಾಡಿ.\n" +
                "3. **ಕಾಂಡ ಒಡೆಯುವುದು (Stem Bleeding):** ರೋಗ ಪೀಡಿತ ಭಾಗವನ್ನು ಕೆರೆದು ಬೋರ್ಡೋ ಪೇಸ್ಟ್ ಹಚ್ಚಿ. ಕಾಂಡಕ್ಕೆ ಸುಣ್ಣದ ಬಣ್ಣ ಬಳಿಯುವುದರಿಂದ ಬಿಸಿಲ ಬೇಗೆ ತಪ್ಪಿಸಬಹುದು."
        };
      }
      if (hasKnWater) {
        return {
          text: "💧 **ನೀರಾವರಿ ಮತ್ತು ಗೊಬ್ಬರ ನಿರ್ವಹಣೆ:**\n\n" +
                "• **ನೀರು:** ಬೇಸಿಗೆಯ ದಿನಗಳಲ್ಲಿ ಪ್ರತಿ ಗಿಡಕ್ಕೆ ನಿರಂತರವಾಗಿ **15 ರಿಂದ 20 ಲೀಟರ್ ನೀರು** ನೀಡಬೇಕು. ಪ್ರತಿ ಗಿಡಕ್ಕೆ ಎರಡೂ ಬದಿಯಲ್ಲಿ ಎರಡು ಹನಿ ನೀರಾವರಿ (Drip) ಎಮಿಟರ್‌ಗಳನ್ನು ಅಳವಡಿಸುವುದು ಸೂಕ್ತ.\n" +
                "• **NPK ರಾಸಾಯನಿಕ ಗೊಬ್ಬರ:** ಪ್ರತಿ ಫಲ ನೀಡುವ ಮರಕ್ಕೆ ವರ್ಷಕ್ಕೆ **100ಗ್ರಾಂ ಸಾರಜನಕ (N), 40ಗ್ರಾಂ ರಂಜಕ (P), ಮತ್ತು 140ಗ್ರಾಂ ಪೊಟ್ಯಾಶ್ (K)** ನೀಡಬೇಕು. ಇದನ್ನು ಸೆಪ್ಟೆಂಬರ್-ಅಕ್ಟೋಬರ್ ಮತ್ತು ಮಾರ್ಚ್-ಏಪ್ರಿಲ್‌ನಲ್ಲಿ ಎರಡು ಕಂತುಗಳಲ್ಲಿ ನೀಡಿ.\n" +
                "• **ಸಾವಯವ ಗೊಬ್ಬರ:** ವರ್ಷಕ್ಕೊಮ್ಮೆ ಪ್ರತಿ ಮರಕ್ಕೆ 10-15 ಕೆ.ಜಿ ಕೊಟ್ಟಿಗೆ ಗೊಬ್ಬರ ಅಥವಾ ಎರೆಹುಳು ಗೊಬ್ಬರ ಮತ್ತು ಬೇವಿನ ಹಿಂಡಿ ನೀಡಿ."
        };
      }
      if (hasKnPlanting) {
        return {
          text: "🌱 **ಅಡಿಕೆ ಗುಂಡಿ ತಯಾರಿಕೆ ಮತ್ತು ನಾಟಿ ವಿಧಾನ:**\n\n" +
                "1. **ಗುಂಡಿಯ ಗಾತ್ರ:** ನಾಟಿಗೆ 3 ವಾರ ಮುಂಚಿತವಾಗಿ **2.5 x 2.5 x 2.5 ಅಡಿ** ಅಳತೆಯ ಗುಂಡಿಗಳನ್ನು ತೆಗೆಯಿರಿ.\n" +
                "2. **ಮಣ್ಣು ಸಂಸ್ಕರಣೆ:** ಮೇಲ್ಮಣ್ಣಿಗೆ **10 ಕೆ.ಜಿ ಕೊಟ್ಟಿಗೆ ಗೊಬ್ಬರ**, **500 ಗ್ರಾಂ ಬೇವಿನ ಹಿಂಡಿ**, ಮತ್ತು ಬೇರು ಕೊಳೆ ತಡೆಯಲು **100 ಗ್ರಾಂ ಟ್ರೈಕೋಡರ್ಮ ಮಿಕ್ಸ್** ಮಾಡಿ ಗುಂಡಿ ತುಂಬಿಸಿ.\n" +
                "3. **ನಾಟಿ:** ಮಳೆಗಾಲದಲ್ಲಿ ಪಾಲಿಬ್ಯಾಗ್ ಅನ್ನು ಬೇರುಗಳಿಗೆ ಹಾನಿಯಾಗದಂತೆ ಕತ್ತರಿಸಿ ತೆಗೆದು, ಗಿಡವನ್ನು ಗುಂಡಿಯ ಮಧ್ಯದಲ್ಲಿಟ್ಟು ಸುತ್ತಲೂ ಮಣ್ಣನ್ನು ಒತ್ತಿ ತುಳಿಯಿರಿ. ಗಾಳಿಗೆ ಅಲುಗಾದಂತೆ ಸಣ್ಣ ಕೋಲು ಕಟ್ಟಿ ಆಸರೆ ಕೊಡಿ."
        };
      }
      if (hasKnDelivery) {
        return {
          text: "🚚 **ಸಾರಿಗೆ ಮತ್ತು ಡೆಲಿವರಿ ಮಾಹಿತಿ:**\n\n" +
                "ನಾವು ರಾಮನಗರ, ಬೆಂಗಳೂರು, ತುಮಕೂರು, ಮಂಡ್ಯ, ಹಾಸನ, ಶಿವಮೊಗ್ಗ, ಚಿಕ್ಕಮಗಳೂರು, ದಾವಣಗೆರೆ, ಚಿತ್ರದುರ್ಗ, ಬೆಳಗಾವಿ ಸೇರಿದಂತೆ ಕರ್ನಾಟಕದ ಎಲ್ಲಾ ಜಿಲ್ಲೆಗಳಿಗೂ ಕ್ರೇಟ್ ವಾಹನಗಳಲ್ಲಿ ನೇರವಾಗಿ ನಿಮ್ಮ ತೋಟಕ್ಕೆ ಸಸಿಗಳನ್ನು ತಲುಪಿಸುತ್ತೇವೆ. ಸಾಗಾಣಿಕೆಯಲ್ಲಿ ಸಸಿ ಮುರಿಯದಂತೆ ಹಾಗೂ ಬೇರುಗಳಿಗೆ ತೊಂದರೆಯಾಗದಂತೆ ಸಂಪೂರ್ಣ ಜವಾಬ್ದಾರಿ ನಮ್ಮದು. **98%+ ಸಸಿಗಳು ಬದುಕುವ ಖಾತರಿ** ನೀಡುತ್ತೇವೆ!"
        };
      }
      if (hasKnLocation) {
        return {
          text: "📍 **ನರ್ಸರಿ ವಿಳಾಸ ಮತ್ತು ಸ್ಥಳ:**\n\n" +
                "**ಶ್ರೀ ಅಡಿಕೆ ಹ್ಯಾವನ್ ನರ್ಸರಿ**\n" +
                "ತಿಪ್ಪಸಂದ್ರ, ಮಾಗಡಿ ತಾಲೂಕು, ರಾಮನಗರ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ - 562131.\n\n" +
                "ನಮ್ಮ ನರ್ಸರಿ ಬೆಂಗಳೂರಿನಿಂದ ಸುಮಾರು 60 ಕಿ.ಮೀ ದೂರದಲ್ಲಿದೆ. ರೈತರು ಖುದ್ದಾಗಿ ನರ್ಸರಿಗೆ ಭೇಟಿ ನೀಡಿ ನಮ್ಮ 25+ ವರ್ಷದ ತಾಯಿ ಮರಗಳನ್ನು ಮತ್ತು ಸಸಿಗಳ ಗುಣಮಟ್ಟವನ್ನು ಪರೀಕ್ಷಿಸಲು ಸ್ವಾಗತಿಸುತ್ತೇವೆ."
        };
      }
      if (hasKnContact) {
        return {
          text: "📞 **ಸಂಪರ್ಕ ಮಾಹಿತಿ:**\n\n" +
                "• **ನೇರ ಕರೆ / ವಿಚಾರಣೆ:** +91 96068 41193 / +91 78921 68121\n" +
                "• **ವಾಟ್ಸಾಪ್ ಸಹಾಯ:** ವೆಬ್‌ಸೈಟ್‌ನ ಎಡಭಾಗದಲ್ಲಿರುವ ವಾಟ್ಸಾಪ್ ಬಟನ್ ಒತ್ತಿ ನೇರವಾಗಿ ಚಾಟ್ ಮಾಡಿ.\n" +
                "• **ವಿಳಾಸ:** ತಿಪ್ಪಸಂದ್ರ, ಮಾಗಡಿ ತಾಲೂಕು, ರಾಮನಗರ ಜಿಲ್ಲೆ.\n\n" +
                "ಹೆಚ್ಚಿನ ಪ್ರಮಾಣದ ಸಸಿಗಳ ಖರೀದಿ (>1,000 ಗಿಡಗಳು) ಮತ್ತು ಬುಕಿಂಗ್ ರಿಯಾಯಿತಿಗಳಿಗಾಗಿ ನೇರವಾಗಿ ನಮಗೆ ಕರೆ ಮಾಡಿ."
        };
      }
      if (hasKnYield) {
        return {
          text: "💰 **ಇಳುವರಿ ಮತ್ತು ತೋಟದ ಆದಾಯ:**\n\n" +
                "• **ಇಳುವರಿ:** ಮೋಹಿತ್‌ನಗರ ತಳಿಗಳು ಉತ್ತಮ ಪೋಷಣೆಯೊಂದಿಗೆ ವರ್ಷಕ್ಕೆ ಒಂದು ಮರದಿಂದ **3.8 - 4.6 ಕೆ.ಜಿ ಒಣ ಅಡಿಕೆ (ಚಾಲಿ)** ನೀಡುತ್ತವೆ.\n" +
                "• **ಎಕರೆ ಆದಾಯ:** ಒಂದು ಎಕರೆಯಲ್ಲಿ 512 ಗಿಡಗಳಿಂದ ಸರಾಸರಿ 4 ಕೆ.ಜಿ ಇಳುವರಿ ಬಂದರೂ ಸುಮಾರು 2,000 ಕೆ.ಜಿ (20 ಕ್ವಿಂಟಾಲ್) ಒಣ ಅಡಿಕೆ ಸಿಗುತ್ತದೆ. ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಯಲ್ಲಿ ಕನಿಷ್ಠ **₹8 ಲಕ್ಷ ಆದಾಯ** ಪಡೆಯಬಹುದು.\n" +
                "• **ಮಿಶ್ರಬೆಳೆ ಲಾಭ:** ಅಡಿಕೆ ಮರಕ್ಕೆ ಹಬ್ಬಿಸುವ ಕಾಳುಮೆಣಸು ಮತ್ತು ಸಾಲುಗಳ ನಡುವಿನ ಕೋಕೋ ಬೆಳೆಗಳಿಂದ ಎಕರೆಗೆ ಹೆಚ್ಚುವರಿ **₹1.5 ರಿಂದ ₹3 ಲಕ್ಷ ನಿವ್ವಳ ಲಾಭ** ಪಡೆಯಬಹುದು. ಅಂದರೆ ಒಟ್ಟು ಎಕರೆಗೆ **₹10+ ಲಕ್ಷ ನಿವ್ವಳ ವಾರ್ಷಿಕ ಲಾಭ** ಸಾಧ್ಯ!"
        };
      }
      if (hasKnIntercrop) {
        return {
          text: "🌿 **ಅಡಿಕೆ ತೋಟದಲ್ಲಿ ಮಿಶ್ರಬೆಳೆಗಳು:**\n\n" +
                "ಅಡಿಕೆ ತೋಟದ ಸಾಲುಗಳ ನಡುವೆ ಮಿಶ್ರಬೆಳೆ ಬೆಳೆಯಲು ಉತ್ತಮ ಅವಕಾಶವಿದೆ:\n" +
                "1. **ಕಾಳುಮೆಣಸು (Black Pepper):** ಅಡಿಕೆ ಮರಕ್ಕೇ ಹಬ್ಬಿಸುವುದರಿಂದ ಹೆಚ್ಚುವರಿ ಜಾಗದ ಅಗತ್ಯವಿಲ್ಲದೆ ಗರಿಷ್ಠ ಲಾಭ ನೀಡುತ್ತದೆ.\n" +
                "2. **ಕೋಕೋ / ಏಲಕ್ಕಿ:** ನೆರಳಿನಲ್ಲಿ ಬೆಳೆಯುವ ಈ ಬೆಳೆಗಳನ್ನು ಸಾಲುಗಳ ಮಧ್ಯೆ ಬೆಳೆಯಬಹುದು.\n" +
                "3. **ಬಾಳೆ / ಪಪ್ಪಾಯಿ:** ಆರಂಭದ 3 ವರ್ಷಗಳಲ್ಲಿ ಎಳೆ ಅಡಿಕೆ ಸಸಿಗಳಿಗೆ ನೆರಳು ನೀಡಲು ಮತ್ತು ಮುಂಚಿತ ಆದಾಯಕ್ಕಾಗಿ ಬೆಳೆಯಬಹುದು.\n\n" +
                "ಮಿಶ್ರಬೆಳೆಗಳು ಅಡಿಕೆ ಗಿಡಗಳು ಫಲ ಕೊಡುವವರೆಗಿನ 4 ವರ್ಷಗಳಲ್ಲಿ ರೈತರಿಗೆ ನಿರಂತರ ಆದಾಯ ನೀಡುತ್ತವೆ."
        };
      }

      // Default Kannada fallback
      return {
        text: "ক্ষಮಿಸಿ, ನಿಮ್ಮ ಪ್ರಶ್ನೆ ನನಗೆ ಸರಿಯಾಗಿ ಅರ್ಥವಾಗಲಿಲ್ಲ. ನಾನು ನಿಮಗೆ ಇವುಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ನೀಡಬಲ್ಲೆ:\n\n" +
              "1. **ಬೆಲೆ ಪಟ್ಟಿ** (ಸಸಿಗಳ ದರಗಳು)\n" +
              "2. **ಅಡಿಕೆ ತಳಿಗಳು** (ಮೋಹಿತ್‌ನಗರ, ಮಂಗಳ, ಸುಮಂಗಳ, ಇತ್ಯಾದಿ)\n" +
              "3. **ಗಿಡಗಳ ನಡುವಿನ ಅಂತರ** (9x9 ಅಡಿ ಅಂತರದ ಮಾಹಿತಿ)\n" +
              "4. **ಕೊಳೆರೋಗ ನಿಯಂತ್ರಣ** (ಔಷಧಿ ಸಿಂಪಡಣೆ ಮಾಹಿತಿ)\n" +
              "5. **ನರ್ಸರಿ ವಿಳಾಸ ಮತ್ತು ಸಂಪರ್ಕ** (ಫೋನ್ ನಂಬರ್ ಮತ್ತು ನರ್ಸರಿ ಇರುವ ಸ್ಥಳ)\n\n" +
              "ನೀವು ಯಾವುದರ ಬಗ್ಗೆ ತಿಳಿಯಲು ಬಯಸುತ್ತೀರಿ? ಕೆಳಗಿನ ಮುಖ್ಯಾಂಶಗಳನ್ನು ಸಹ ಕ್ಲಿಕ್ ಮಾಡಬಹುದು."
      };
    }
  };

  const handleSendMessage = (textToSend = '') => {
    const text = textToSend || inputVal;
    if (!text.trim()) return;

    // Add user message to log
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal('');

    // Trigger bot response after a simulated typing delay
    setIsTyping(true);
    setTimeout(() => {
      const response = processQuery(text, chatLang);
      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text,
        widget: response.widget,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="ai-chatbot-wrapper">
      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`chatbot-launcher ${isOpen ? 'launcher-active' : ''}`}
        aria-label="Toggle Chat Assistant"
        title="Chat with Sri Areca AI"
      >
        {isOpen ? <X size={26} /> : <Bot size={26} />}
        {!isOpen && (
          <span className="launcher-pulse">
            <Sparkles size={10} />
          </span>
        )}
      </button>

      {/* Main Chat Panel Drawer */}
      <div className={`chatbot-panel ${isOpen ? 'panel-open' : ''}`}>
        {/* Header */}
        <div className="chat-header">
          <div className="header-info">
            <div className="avatar-wrap">
              <Sprout size={18} className="sprout-icon animate-bounce" />
              <span className="status-dot"></span>
            </div>
            <div>
              <h3>{chatLang === 'kn' ? 'ಶ್ರೀ ಅಡಿಕೆ AI ಸಹಾಯ' : 'Sri Areca AI Helper'}</h3>
              <p>Online • {chatLang === 'kn' ? 'ತಳಿ ಮತ್ತು ಕೃಷಿ ತಜ್ಞ' : 'Areca Genetics Expert'}</p>
            </div>
          </div>
          <div className="header-actions">
            <button onClick={toggleLanguage} className="lang-toggle-btn" title="Toggle Language">
              <Globe size={13} />
              <span>{chatLang === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
            </button>
            <button onClick={() => setIsOpen(false)} className="close-panel-btn" title="Close Panel">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Message Logs */}
        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message-row ${msg.sender === 'user' ? 'row-user' : 'row-bot'}`}>
              {msg.sender === 'bot' && (
                <div className="msg-avatar">
                  <Bot size={14} />
                </div>
              )}
              <div className="msg-bubble-wrap">
                <div className="msg-bubble">
                  {/* Basic markdown style bold replacement */}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: msg.text
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n/g, '<br />')
                    }}
                  />
                  {msg.widget && msg.widget.type === 'product' && (
                    <ProductWidget
                      productId={msg.widget.productId}
                      chatLang={chatLang}
                    />
                  )}
                </div>
                <span className="msg-time">{msg.time}</span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="message-row row-bot">
              <div className="msg-avatar">
                <Bot size={14} />
              </div>
              <div className="msg-bubble-wrap">
                <div className="msg-bubble bubble-typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Dynamic Suggestion Chips */}
        <div className="chat-suggestions">
          {suggestions.map((sug, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(sug.query)}
              className="suggestion-chip"
            >
              {sug.label}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="chat-input-bar">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={chatLang === 'kn' ? 'ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ...' : 'Ask about spacing, prices, rot control...'}
            className="panel-input"
          />
          <button onClick={() => handleSendMessage()} className="panel-send-btn" title="Send message">
            <Send size={15} />
          </button>
        </div>
      </div>

      <style>{`
        /* Floating Launcher */
        .chatbot-launcher {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
          color: #ffffff;
          border: none;
          box-shadow: var(--shadow-green);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1600;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .chatbot-launcher:hover {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 10px 28px rgba(22, 128, 61, 0.38);
        }
        .launcher-active {
          transform: rotate(90deg);
          background: linear-gradient(135deg, #ef4444, #b91c1c);
          box-shadow: 0 8px 24px rgba(239, 68, 68, 0.3);
        }
        .launcher-pulse {
          position: absolute;
          top: -2px;
          right: -2px;
          background: var(--accent-gold);
          color: #ffffff;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse-glow 2s infinite;
          box-shadow: 0 0 8px var(--accent-gold);
        }

        @keyframes pulse-glow {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.7);
          }
          70% {
            transform: scale(1.1);
            box-shadow: 0 0 0 6px rgba(245, 158, 11, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(245, 158, 11, 0);
          }
        }

        /* Chat Panel Drawer */
        .chatbot-panel {
          position: fixed;
          bottom: 96px;
          right: 24px;
          width: 380px;
          height: 520px;
          background: var(--bg-glass);
          backdrop-filter: blur(14px);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
          z-index: 1550;
          overflow: hidden;
          opacity: 0;
          transform: translateY(25px) scale(0.95);
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .panel-open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        @media (max-width: 640px) {
          .chatbot-panel {
            width: calc(100% - 32px);
            height: calc(85vh - 80px);
            bottom: 84px;
            right: 16px;
          }
          .chatbot-launcher {
            bottom: 16px;
            right: 16px;
          }
        }

        /* Header Styles */
        .chat-header {
          background: linear-gradient(135deg, var(--primary-700), var(--primary-900));
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ffffff;
        }
        .header-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .avatar-wrap {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: #ffffff;
        }
        .status-dot {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 9px;
          height: 9px;
          background: #10b981;
          border: 2px solid var(--primary-800);
          border-radius: 50%;
        }
        .header-info h3 {
          font-size: 0.95rem;
          color: #ffffff;
          margin: 0;
          font-weight: 800;
        }
        .header-info p {
          font-size: 0.7rem;
          color: var(--primary-100);
          margin: 0;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .lang-toggle-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          padding: 3px 8px;
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .lang-toggle-btn:hover {
          background: rgba(255, 255, 255, 0.22);
        }
        .close-panel-btn {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px;
          border-radius: 50%;
        }
        .close-panel-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Message Log Area */
        .chat-messages {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
          background: rgba(248, 250, 247, 0.6);
        }
        .message-row {
          display: flex;
          gap: 8px;
          max-width: 85%;
        }
        .row-bot {
          align-self: flex-start;
        }
        .row-user {
          align-self: flex-end;
          flex-direction: row-reverse;
          max-width: 80%;
        }
        .msg-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--primary-100);
          color: var(--primary-800);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .msg-bubble-wrap {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .row-user .msg-bubble-wrap {
          align-items: flex-end;
        }
        .msg-bubble {
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 0.85rem;
          line-height: 1.45;
          word-break: break-word;
        }
        .row-bot .msg-bubble {
          background: #ffffff;
          color: var(--text-body);
          border: 1px solid var(--border-light);
          border-top-left-radius: 4px;
          box-shadow: var(--shadow-xs);
        }
        .row-user .msg-bubble {
          background: var(--primary-100);
          color: var(--primary-900);
          border-top-right-radius: 4px;
          font-weight: 500;
          border: 1px solid var(--primary-200);
        }
        .msg-time {
          font-size: 0.65rem;
          color: var(--text-light);
          padding: 0 4px;
        }

        /* Typing Indicator Bouncing Dots */
        .bubble-typing {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 12px 16px !important;
        }
        .bubble-typing .dot {
          width: 6px;
          height: 6px;
          background: var(--primary-600);
          border-radius: 50%;
          animation: typing-bounce 1.4s infinite ease-in-out both;
        }
        .bubble-typing .dot:nth-child(1) { animation-delay: -0.32s; }
        .bubble-typing .dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes typing-bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }

        /* Suggestions Chips */
        .chat-suggestions {
          display: flex;
          gap: 6px;
          padding: 8px 12px;
          overflow-x: auto;
          background: var(--bg-surface-elevated);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-color);
          scrollbar-width: none; /* Firefox */
        }
        .chat-suggestions::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }
        .suggestion-chip {
          white-space: nowrap;
          padding: 5px 12px;
          background: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          font-size: 0.725rem;
          font-weight: 700;
          color: var(--text-body);
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .suggestion-chip:hover {
          background: var(--primary-50);
          border-color: var(--primary-300);
          color: var(--primary-800);
          transform: translateY(-1px);
        }

        /* Input Bar */
        .chat-input-bar {
          padding: 10px 12px;
          display: flex;
          gap: 8px;
          background: #ffffff;
          align-items: center;
        }
        .panel-input {
          flex: 1;
          border: 1px solid var(--border-color);
          padding: 8px 14px;
          border-radius: var(--radius-full);
          font-size: 0.825rem;
          outline: none;
          color: var(--text-body);
          background: var(--bg-page);
          transition: border-color 0.2s ease;
        }
        .panel-input:focus {
          border-color: var(--primary-600);
          background: #ffffff;
        }
        .panel-send-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--primary-700);
          color: #ffffff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .panel-send-btn:hover {
          background: var(--primary-800);
          transform: scale(1.05);
        }

        .btn-chat-wa {
          width: 100%;
          background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
          color: #ffffff;
          border: none;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s ease;
        }
        .btn-chat-wa:hover {
          background: linear-gradient(135deg, var(--primary-700), var(--primary-900));
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
