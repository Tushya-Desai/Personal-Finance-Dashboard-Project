const express = require('express');
const cors = require('cors');
const db = require('./database.js');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Backend is running' });
});

// Dashboard Data
app.get('/api/dashboard', (req, res) => {
    db.get("SELECT * FROM users LIMIT 1", (err, user) => {
        if (err || !user) return res.status(500).json({ error: "User not found" });
        db.all("SELECT * FROM envelopes WHERE user_id = ?", [user.id], (err, envelopes) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ user, envelopes });
        });
    });
});

// Transactions Data
app.get('/api/transactions', (req, res) => {
    db.get("SELECT * FROM users LIMIT 1", (err, user) => {
        if (err || !user) return res.status(500).json({ error: "User not found" });
        db.all("SELECT * FROM transactions WHERE user_id = ? ORDER BY date DESC", [user.id], (err, transactions) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ transactions });
        });
    });
});

// Vampire Audit Data
app.get('/api/audit', (req, res) => {
    db.get("SELECT * FROM users LIMIT 1", (err, user) => {
        if (err || !user) return res.status(500).json({ error: "User not found" });
        db.all("SELECT * FROM transactions WHERE user_id = ? AND is_recurring = 1 ORDER BY id ASC", [user.id], (err, transactions) => {
            if (err) return res.status(500).json({ error: err.message });

            // Mocking logic to show Audit issues
            const auditItems = transactions.map((t, index) => {
                if (index === 0) {
                    return { ...t, issue: 'Price Increase!', oldPrice: t.amount - 2.0 };
                }
                return { ...t, issue: 'Unused Subscription', oldPrice: null };
            });
            res.json({ auditItems });
        });
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
