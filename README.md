# OllaWrite Knowledge Blog — Isolated Standalone Design (Version B)

This directory contains the **fully isolated, standalone implementation of the OllaWrite Knowledge Blog** (`http://localhost:5174/`).

It has been decoupled into an independent project with its own `package.json`, `vite.config.ts`, TypeScript configs, assets, components, and embedded typography.

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
# Install dependencies (if not already installed)
npm install

# Start the dev server
npm run dev
```
The application will automatically open or be accessible at:
👉 **`http://localhost:5174/`**

### 2. Build for Production
```bash
npm run build
```
This compiles the application into the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🎨 Design & Architecture Specifications

1. **Exact 3-Column Layout Foundation**:
   - **Left Sidebar**: `[01] CORE INDEX` with prominent, readable link text (`16.5px` font-bold in Lato) and technical indexing tags.
   - **Center Feed**: Main headline (`32px` font-bold), Section 1 Verified Research (Hero Card + 3-column cards), Section 2 AI Systems Architecture (Hero Card + 3-column cards), Section 3 All Knowledge Articles (Search Bar, Category Filter Pills, 2-column cards), Section 4 Fact-Checking Benchmark Matrix Table, and Section 5 Complete Knowledge Index Archive.
   - **Right Sidebar**: `[02] CITATION INDEX` with prominent, readable link text (`16.5px` font-bold in Lato) and Live Sitemap Audit CTA card.

2. **100% Pure Lato Typography**:
   - Every text element strictly uses the **Lato** font family (`Lato, sans-serif !important;`).
   - Self-hosted Base64 embedded WOFF2 font files (weights 300, 400, 700, 900) are included directly inside the HTML and CSS, guaranteeing zero-latency, offline-compatible, crisp rendering without system font fallbacks.

3. **Interactive Features**:
   - **Search Console (`Ctrl + K` or `⌘ + K`)**: Modal for real-time vector search across research specifications.
   - **Technical Specification Modal**: Full slide-over reader with Document Index, Citation Graph, Author Bio, and Verified Telemetry Score.
   - **Responsive Breakpoints**: Seamlessly adapts to desktop (1440px+), tablet, and mobile devices (with horizontal swipe cards for Core Index & Citation Index).

---

## 📁 Project Directory Structure

```
ollawrite blog design/
├── index.html                # Entry point with embedded Base64 Lato fonts & metadata
├── package.json              # Standalone dependencies and scripts
├── vite.config.ts            # Vite 8 + React 19 + Tailwind CSS configuration
├── tsconfig.json             # Root TypeScript project references
├── tsconfig.app.json         # Application TypeScript configuration
├── tsconfig.node.json        # Node / Vite configuration
├── README.md                 # Project documentation (this file)
├── public/
│   ├── favicon.svg           # OllaWrite favicon
│   └── fonts/                # WOFF2 font assets and lato.css
├── src/
│   ├── main.tsx              # React DOM mounting
│   ├── App.tsx               # Root state, error boundary, and modal orchestration
│   ├── styles/
│   │   └── knowledge.css     # Tailwind CSS styles and Lato font rules
│   ├── components/
│   │   ├── Header.tsx        # Technical telemetry top bar & navigation
│   │   ├── BlogIndex.tsx     # 3-column layout, heroes, cards, archive
│   │   ├── KnowledgeMatrixTable.tsx  # Grounding & hallucination benchmark table
│   │   ├── ArticleModal.tsx  # Document reader & citation graph modal
│   │   ├── SearchModal.tsx   # Knowledge base query modal (Ctrl+K)
│   │   └── Footer.tsx        # CTA bar, 12-col links grid, stats pills, directory
│   └── shared/
│       ├── types.ts          # Article, Author, Citation, and Filter type definitions
│       └── articlesData.ts   # Curated research articles and citation index data
└── dist/                     # Pre-built static export for instant production deployment
```

---

## 🌐 Production Deployment
The `dist/` directory contains self-contained static assets that can be deployed to any static host:
- Vercel: `npx vercel deploy`
- Netlify: `npx netlify deploy --dir=dist`
- Any web server (Nginx, Apache, Caddy, or GitHub Pages)
