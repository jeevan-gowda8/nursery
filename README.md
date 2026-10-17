# 🌱 Sri Areca Haven Nursery (ಶ್ರೀ ಅಡಿಕೆ ಹ್ಯಾವನ್ ನರ್ಸರಿ)

> **Govt. Accredited Elite Mother Palm Arecanut Nursery** | Thippasandra, Magadi Taluk, Ramanagara District, Karnataka - 562131 | 📞 +91 96068 41193 / +91 78921 68121

A modern, photorealistic, and mobile-responsive web application designed for a certified **Arecanut (Adike / Betel Nut) Plant Nursery**. Built with a botanical light aesthetic, full bilingual support (**English & Kannada**), dynamic quotation inquiry basket, farm profitability estimator, and instant WhatsApp integration.

---

## 🌿 Key Features

### 1. 🌾 Certified High-Yield Arecanut Varieties
- **Elite Varieties**: Mohitnagar High-Yield, Mangala Semi-Dwarf Hybrid, Sumangala Climate-Resilient, Srimangala Premium, South Kanara Heritage Local, and Hirehalli Dwarf.
- **Growth Stage Pricing**: Choose between **6-Month Seedlings**, **1-Year Polybag Bags**, and **2-Year Ready Palms**.
- **Live Price Calculator**: Real-time total calculation based on selected stage and quantity.
- **Variety Comparison Matrix**: Side-by-side technical table comparing annual dry yield, first bearing years, tree stature, disease tolerance, and unit prices.

### 2. 🌐 Exclusive Bilingual Support (English & Kannada / ಕನ್ನಡ)
- Instant, one-click language toggle (`English` ⇄ `ಕನ್ನಡ`).
- Full translation across agronomic parameters, care guides, profit estimators, FAQs, and WhatsApp order messages using authentic agricultural Kannada terminology.

### 3. 📊 Interactive Farm Profitability Calculator
- **Custom Acreage Slider**: Scale from 0.5 to 25 acres.
- **Planting Spacing & Density**: Select 9x9 ft (512 palms/ac), 8.5x8.5 ft (550 palms/ac), or 8x8 ft (620 palms/ac).
- **Yield & Chali Price Estimator**: Adjust expected dry yield per palm (2.5 to 4.8 kg) and market rate (₹350 to ₹650/kg).
- **Multi-Tier Intercropping Bonus**: Calculate additional revenue for Black Pepper, Cocoa, Cardamom, or Banana.
- **Pan-Karnataka District Dispatch**: Delivery transit estimator for Dakshina Kannada, Shivamogga, Chikkamagaluru, Uttara Kannada, Hassan, Tumakuru, Davanagere, etc.
- **Confetti Celebration & Instant WhatsApp Export**: Generate tailored quotes with one tap.

### 4. 🛒 Quotation Inquiry Basket & WhatsApp Integration
- Slide-out order inquiry drawer that groups selected varieties by growth stage.
- Real-time quantity modifier and estimated grand total calculations.
- **1-Click WhatsApp Export**: Pre-formats structured bilingual order inquiries sent directly to the nursery team.

### 5. 📖 Scientific Care Guide & FAQ Accordion
- 5-step roadmap covering:
  1. Pit Sizing & Bio-Soil Treatment (Trichoderma & FYM)
  2. Spacing & South-North Row Orientation
  3. Monsoon Planting & Root Ball Placement
  4. Irrigation & Drip Fertigation
  5. Plant Protection against Koleroga / Mahali (1% Bordeaux spray)
- Interactive FAQ accordion addressing genuine farmer questions regarding seed authenticity and intercropping.

### 6. 📸 Filterable Photo Gallery & Lightbox
- Visual showcase of 25-acre certified mother palm blocks, polybag green beds, white lateral root systems, and heavy nut clusters.
- Filter by category (`Mother Palms`, `Nursery Beds`, `Saplings & Roots`, `Harvests`) with full-screen zoom lightbox modal.

### 7. ⭐ Verified Farmer Testimonials & Visit Booking
- Real case studies and yield statistics from progressive farmers in Dakshina Kannada, Shivamogga, and Tumakuru.
- Farm visit and bulk order inquiry booking form.

### 8. 📱 100% Mobile Responsive & Touch-Optimized
- Single-line navigation header with adaptive logo scaling and slide-down mobile menu drawer.
- Stacked one-thumb action buttons, touch-scrollable comparison table, and responsive modal drawers across all screen resolutions (mobile, tablet, desktop).

---

## 🎨 Design System & Aesthetic Tokens

- **Botanical Color Palette**:
  - Primary Greens: Deep Plantation Green (`#14532d`, `#166534`, `#15803d`), Lime Glow (`#22c55e`), Soft Green Tint (`#f0fdf4`, `#dcfce7`).
  - Harvest Gold & Amber: Ripe Betel Nut Amber (`#f59e0b`, `#d97706`, `#b45309`).
  - Neutral & Backgrounds: Sunlit Off-White (`#f8faf7`), Pure White (`#ffffff`), Organic Borders (`#e2ede4`).
- **Typography Pairing**:
  - **Outfit**: Clean, high-impact headings and price displays.
  - **Plus Jakarta Sans**: Highly legible body typography.
  - **Noto Sans Kannada**: Authentic, crisp Kannada script rendering.

---

## 📂 Project Architecture

```
nursery/
├── public/
│   ├── hero_plantation.jpg       # High-resolution nursery plantation hero visual
│   ├── mohitnagar_nuts.jpg       # Ripe golden-orange arecanut cluster photo
│   ├── sapling_roots.jpg         # Root system inspection & quality media photo
│   ├── mother_palms.png          # 25-year mother palm block photo
│   ├── harvest.png               # Bumper farmer field harvest photo
│   └── hero.png                  # Sun-hardening nursery bay photo
├── src/
│   ├── components/
│   │   ├── Header.jsx            # Responsive header, logo, nav links, language toggle, & cart button
│   │   ├── Hero.jsx              # Hero banner, trust counters, & floating certification badges
│   │   ├── Products.jsx          # Variety cards, age picker, quantity changer, & comparison matrix
│   │   ├── Calculator.jsx        # Farm yield & net profit estimator with intercropping bonus
│   │   ├── About.jsx             # Nursery heritage & 4-step mother palm selection process
│   │   ├── CareGuide.jsx         # 5-step cultivation agronomy guide & interactive FAQ accordion
│   │   ├── Gallery.jsx           # Filterable visual gallery grid & zoom lightbox modal
│   │   ├── Testimonials.jsx      # Progressive farmer reviews & yield metrics
│   │   ├── Contact.jsx           # Contact info, Google Map reference, & farm visit booking form
│   │   ├── Footer.jsx            # Botanical dark footer with license information & quick links
│   │   └── QuoteBasketModal.jsx  # Slide-out quotation drawer with WhatsApp message generator
│   ├── data/
│   │   └── nurseryData.js        # Bilingual dictionary (en/kn), varieties data, steps, & FAQs
│   ├── App.jsx                   # Global language state, quote basket orchestration, & floating CTA
│   ├── index.css                 # Botanical light theme CSS design tokens, utilities, & animations
│   └── main.jsx                  # React application entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### 1. Installation
Clone the repository and install the dependencies:
```bash
cd nursery
npm install
```

### 2. Run Development Server
Start the local Vite dev server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 3. Run Linter
Verify code quality and clean syntax (0 warnings, 0 errors):
```bash
npm run lint
```

### 4. Build for Production
Generate an optimized production build:
```bash
npm run build
```
The production bundle will be generated in the `dist/` directory.

---

## 🛠️ Built With

- **React 19** - Component-based user interface library
- **Vite 8** - Ultra-fast development environment and bundler
- **Lucide React** - Clean and modern SVG icon system
- **Canvas Confetti** - Celebratory interactive animations for profit calculator & inquiries
- **Vanilla CSS** - Design tokens, glassmorphism, responsive grid layouts, and custom range sliders

---

## 📄 License & Contact

- **Nursery Location**: Thippasandra, Magadi Taluk, Ramanagara District, Karnataka - 562131
- **Phone**: +91 96068 41193 / +91 78921 68121
- **Email**: [Shreyasshetty4693@gmail.com](mailto:Shreyasshetty4693@gmail.com)

© 2026 **Sri Areca Haven Nursery**. All Rights Reserved.  
Empowering progressive farmers across Karnataka and pan-India with certified true-to-type genetics.
