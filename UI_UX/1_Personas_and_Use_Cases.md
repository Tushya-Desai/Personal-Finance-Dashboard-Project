# Phase 1: Step 1 - Validate Personas & Refine Use Cases

Based on the `Readme.md` and `Implementation_plan.md`, the following personas and use cases have been validated to drive our architecture and UI patterns. All features prioritize a **single-person use case**; no multi-user features will be developed.

## 1. Professional Single
**Profile:** High income but lacks time and visibility into actual cash flow (e.g., consultant, engineer, freelancer).
**Core Needs:** Real-time visibility of irregular income and automated subscription management.
**Key Scenarios:**
- **Income Syncing:** Connect work calendars to map irregular payouts (bonuses, freelance payments) to specific budget envelopes.
- **Opportunity Simulation:** Test the downstream financial impact of large, unexpected expenses (e.g., upgrading a laptop) before committing.
- **Vampire Audit:** Automatically detect and flag hidden professional software subscriptions designed to auto-renew.

## 2. Non-Professional Single
**Profile:** Needs tight control over daily spend to prevent overdrafts and simplify budgeting (e.g., student, gig-worker).
**Core Needs:** Complete daily clarity and set-it-and-forget-it categorization.
**Key Scenarios:**
- **Daily Clarity:** Check the "Safe-to-Spend" limit every morning with a single glance.
- **Zero-Effort Tracking:** Rely entirely on AI-driven Smart Categorization instead of manually logging coffees or groceries.
- **Proactive Alerts:** Receive an instant warning when a specific category envelope is nearing empty or a subscription price increases.

## 3. Power User (Advanced Planner)
**Profile:** Granular planner who loves forecasting and adjusting timeline variables.
**Core Needs:** Advanced simulation and integration with deep life planning.
**Key Scenarios:**
- **Scenario Forecasting:** Compare different long-term scenarios ("Should I book a trip to Japan or invest in a side gig?") to see the optimal financial path.
- **Event-Driven Budgeting:** Full Google/Apple Calendar integration surfaces upcoming life events (weddings, trips) and adjusting envelopes automatically.

---
**Status:** Completed and ready for review. Next step will be **UX/UI Wireframing** to map out these scenarios visually.
