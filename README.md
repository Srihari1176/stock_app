📈 MarketForge

MarketForge is a full-stack stock tracking and market analysis web application focused on Indian equity markets.
It combines real-time market visualization, curated India-centric news, alerts, and clean system design to simulate how modern trading and market intelligence platforms are built.

This project was built to explore how real market platforms work under the hood, not just how charts look on the surface.

🎯 Motivation

My interest in the stock market grew beyond simply tracking prices or placing trades. I wanted to understand how real platforms integrate:

Market data and charts

News flow and context

Alerts and user preferences

Scalable frontend and backend architecture

Instead of building a small demo, I chose to build a production-style stock dashboard focused on Indian markets, solving real issues like symbol compatibility, third-party limitations, and data reliability.

🧱 Architecture Overview

The application is built using Next.js App Router, with a clear separation of concerns:

app/         → Routing, layouts, API routes
components/  → Reusable UI components
lib/         → Business logic, integrations, helpers
database/    → Database configuration and models
middleware/  → Request-level logic (auth, protection)
hooks/       → Custom React hooks
types/       → Shared TypeScript types


This structure mirrors real-world production applications and makes the system easier to reason about and extend.

📊 Market Data & Charts

TradingView widgets are used for market charts, heatmaps, and overviews.

TradingView is treated strictly as a visualization layer, not a source of truth.

Special care is taken with Indian market symbols, as TradingView is:

NSE-first

Partially supportive of BSE

Inconsistent with small-cap stocks

The application handles unsupported symbols gracefully by falling back or displaying clear “Chart not available” states instead of breaking the UI.




⚙️ Tech Stack

Frontend & Backend: Next.js (App Router)

Language: TypeScript

Charts & Market Visuals: TradingView Widgets

Styling: Tailwind CSS

News Aggregation: RSS (server-side)

Database: MongoDB (via Mongoose)

Auth & Middleware: Custom middleware + auth utilities

Containerization: Docker & Docker Compose

🧠 Key Learnings

Third-party services are powerful but unreliable — systems must degrade gracefully.

Market data platforms require careful symbol normalization, especially for Indian exchanges.

Server-side data aggregation is essential for reliability and security.

Clean project structure matters as much as features.

Product thinking is just as important as technical implementation.

🚫 What This Project Does Not Do

Execute trades or provide brokerage services

Act as a real-time price feed provider

Replace professional trading terminals

The focus is architecture, integration, and system design, not financial infrastructure replication.

🚀 Getting Started
npm install
npm run dev


Make sure to configure environment variables in .env before running the project.

📌 Future Improvements

Symbol-specific India news on stock pages

NSE ↔ BSE automatic fallback logic

News caching for performance

Sector-wise and small-cap focused dashboards

📄 License

This project is licensed under the terms specified in the LICENSE file.
