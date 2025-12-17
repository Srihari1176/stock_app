# 📊 MarketForge

**A modern, stock analysis and market intelligence platform.**

🔗 **Live Demo:** https://stock-app-swart.vercel.app/  
📦 **Repository:** https://github.com/Srihari1176/stock_app

---

## Overview

MarketForge is a full-stack stock dashboard designed to deliver **clean market data, real-time charts, and curated financial news** without unnecessary complexity or paywalls.

The project is built with production-grade architecture to reflect how real trading and analytics platforms are structured, while remaining lightweight and extensible.

---

## Features

- 🔍 Real-time stock search  
- 📈 Interactive charts powered by TradingView widgets  
- 📰 India-centric market news aggregation  
- ⚡ Fast, responsive UI with modern styling  
- 🔐 Authentication-ready backend structure  
- 🧱 Scalable and modular codebase  

---

## Tech Stack

### Frontend
- **Next.js 15 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**

### Backend
- **Next.js Server Actions & API Routes**
- **MongoDB (Atlas)**
- **Mongoose**

### Market Data
- **Finnhub API**
- **Alpha Vantage API**
- **TradingView Widgets**

### Deployment
- **Vercel**

---

## Project Structure

```txt
app/
 ├─ (auth)/          # Authentication routes
 ├─ (root)/          # Main application pages
 ├─ api/             # Server actions & API handlers
components/
 ├─ ui/              # Reusable UI components
lib/
 ├─ actions/         # Business logic (stocks, auth)
 ├─ auth/            # Authentication configuration
 ├─ database/        # MongoDB connection
middleware.ts        # Route protection & middleware
```

---

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Authentication
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000

# Database
MONGODB_URI=your_mongodb_atlas_uri

# Market APIs
FINNHUB_API_KEY=your_finnhub_api_key
ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key
ALPHA_VANTAGE_BASE_URL=https://www.alphavantage.co/query

# Optional
GEMINI_API_KEY=your_gemini_key
NODEMAILER_EMAIL=your_email
NODEMAILER_PASSWORD=your_app_password
```

⚠️ Never commit this file to version control.

---

## Local Development

```bash
npm install
npm run dev
```

App runs at:  
👉 http://localhost:3000

---

## Deployment (Vercel)

1. Push the repository to GitHub  
2. Import it into **Vercel**  
3. Add all environment variables  
4. Deploy  

Live deployment:  
👉 https://stock-app-swart.vercel.app/

---

## Roadmap

- Advanced stock scanners & filters  
- Technical indicators & signals  
- AI-generated stock summaries  
- Watchlists and price alerts  

---

## License

Licensed under the **AGPL-3.0 License**.

---

## Author

Built by **Srihari**  
