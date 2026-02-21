# Technical Architecture Plan

## Overview
Save&Spend uses a modern, mobile-responsive full-stack architecture optimized for a single-person budgeting experience.

## Stack
- **Frontend (UI)**: React (Vite) + Vanilla CSS. Designed for mobile-first responsiveness.
- **Backend (API)**: Node.js + Express.js. Handles core logic (Safe-to-Spend algorithm, Vampires).
- **Database**: SQLite (file-based) for rapid MVP iteration and robust local testing.

## Directories
- `Frontend/`: The React SPA client.
- `Backend/`: The Node API server (`server.js`, controllers, routes).
- `Database/`: Stores the SQLite DB file (`database.sqlite`) and schema migration scripts.
- `UI_UX/`: Design assets, wireframes, personas.

## Integration Touchpoints (Mocked for MVP)
- **Plaid/Yodlee**: External bank data aggregation (mocked via JSON imports).
- **Google/Apple Calendar**: Reading upcoming events with financial impacts (mocked API).

## Core Systems
1. **User Auth & Profiles**: Simple JWT-based auth for a single user per isolated instance.
2. **Safe-to-Spend Engine**:
   - `SafeToSpend = CurrentBalance - (Sum(UpcomingBills) + Sum(GoalAllocations) + Sum(EnvelopeAllocations))`
3. **Transaction ML Mock**: Rule-based auto-categorizer for MVP (Regex on merchant names).
4. **Vampire Audit**: Detection of 2+ recurring payments of equal or similar amounts.
