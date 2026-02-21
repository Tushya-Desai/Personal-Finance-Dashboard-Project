---
# Save&Spend Complete Feature Guide
---

This document breaks down every aspect of the Save&Spend MVP application, explaining what exists, how it works, and why it's there.

## 1. Visual Theme and Design Approach
The Save&Spend app was built using a "mobile-first" approach. This means the layout is optimized to look like a modern mobile application, even when viewed on a desktop browser.

*   **Background Colors:** 
    *   The app sits on a soft, light-grey background (`#f9f9fc`). This reduces eye strain compared to stark white.
    *   The cards (the white boxes holding information) have a pure white background (`#fff`) to make the content pop out clearly against the grey background.
*   **Typography:** The app uses the `Inter` font family (falling back to standard sans-serif like Arial). `Inter` is highly readable and looks very clean on mobile screens.
*   **Color Meanings:**
    *   **Green:** Used for positive financial indicators (like your "Safe to Spend" amount and a good "Clarity Score"). 
    *   **Black:** Used for the primary text, main buttons, and neutral progress bars.
    *   **Red/Orange:** Used for warnings, price increases, and envelopes that are over budget.

---

## 2. The Dashboard (Home Page)
The dashboard is the first thing you see when you open the app. It's designed to give you instant "$0-effort clarity".

### Top Header
*   **App Name & Welcome Message:** Displays "Save&Spend" and a welcoming message with your name ("Welcome back, Dana!").
*   **Profile Link:** The small circular icon in the top right with your initial ("D"). Clicking this takes you to the Privacy Settings page.

### Notification Banner (Alerts)
*   **Purpose:** Appears at the very top of the screen if there is an important alert.
*   **What it shows:** For example, a yellow warning if an envelope is over budget, or a red alert if a subscription price increased. You can close these by clicking the "x".

### Safe to Spend
*   **Purpose:** This is the core magic number of the app. Instead of showing your total bank balance, it shows exactly what you are *allowed* to spend today without jeopardizing your upcoming bills or savings goals.
*   **Visuals:** It sits in a special light-green box to reinforce that this is your "safe" money.
*   **Calendar Integration Badge:** Below the number, a small badge says "Calendar Synced: 2 Events Found." This tells you the app has accounted for your upcoming life events (like a planned trip or a big upcoming bill).

### Envelopes (Budget Categories)
*   **Purpose:** This section breaks down your "Safe to Spend" money into specific categories (like Groceries, Dining Out, and Transport).
*   **Visuals:** 
    *   Each category has a progress bar. 
    *   A black bar means you are within budget.
    *   An orange bar means you are getting close to your limit.
    *   A red bar means you have gone *over* your budget (e.g., "-$5 over").

### Clarity Score
*   **Purpose:** A quick "health check" rating for your finances out of 100.
*   **Visuals:** A large green circle displaying your score (e.g., 85). If your score is high, it says "Excellent." If your score drops (maybe because of too many vampires or overspending), the text will warn you that it "Needs Attention."

---

## 3. Transactions Page
*   **Purpose:** A chronological list of everything you've recently spent money on.
*   **Layout:** A simple list showing the store name (Merchant), the Category (e.g., Entertainment), the Amount spent, and the Date.

---

## 4. Simulator Page
*   **Purpose:** Allows you to play "What if?" before making a big purchase. 
*   **How it works:**
    *   You enter the name of an item (like "MacBook Pro") and the price (like "$1200").
    *   You click the black "Simulate Impact" button.
*   **The Result:** A yellow results box appears outlining what would happen to your finances if you bought it right now. For example, it might tell you that your daily Safe-to-Spend will drop to $15, and your vacation goal will be delayed by a month.

---

## 5. Vampire Audit Page
*   **Purpose:** To find "vampires"—subscriptions or recurring bills that are quietly sucking money out of your account.
*   **Layout:** It highlights two specific types of issues:
    1.  **Price Increases:** If a subscription (like Netflix) increases its monthly price, the app flags it in red, showing the old crossed-out price next to the new, higher price.
    2.  **Unused Subscriptions:** If you are paying for something (like a gym membership) but haven't used it recently, it flags it in orange.
*   **Action:** Every vampire issue has a prominent "Review & Cancel" button so you can take immediate action.

---

## 6. Privacy & Data Settings
*   **Purpose:** To give the user total control over their data, reinforcing that this app is secure and private.
*   **Features:**
    *   **End-to-End Encryption:** A badge confirming that the money data is safe.
    *   **Export Data:** A button to download all financial data as a CSV spreadsheet.
    *   **Delete Account:** A prominent red button that allows the user to permanently delete their account and all data from the servers.

---

## 7. Bottom Navigation Bar
*   **Purpose:** The menu anchored to the bottom of the screen to quickly jump between the main sections of the app.
*   **Icons:** 
    *   **Home (House Icon):** Takes you to the Dashboard.
    *   **Transactions (List Icon):** Takes you to your spending history.
    *   **Simulator (Calculator Icon):** Takes you to the "What if" tool.
    *   **Audit (Warning Triangle Icon):** Takes you to your Vampire Audit.
*   **Visual Feedback:** The icon for the page you are currently on turns black and bold, while the others remain a faded grey.

---

## 8. Behind the Scenes (Technical)
*   **The Backend API:** There is an invisible "engine" running behind the app (built with Node.js and Express). This engine handles the math (calculating the Safe-to-Spend amount) and talks to the database.
*   **The Database:** A lightweight local database (SQLite) holds all the mock user data, the transactions, and the budgets.
*   **API Routes:** The Frontend (what you see) "asks" the backend for data using specific pathways, such as `/api/dashboard` (to get overall numbers) and `/api/audit` (to get the list of vampire subscriptions).
