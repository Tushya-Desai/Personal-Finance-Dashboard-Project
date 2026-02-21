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

// Notifications Data
app.get('/api/notifications', (req, res) => {
    db.get("SELECT * FROM users LIMIT 1", (err, user) => {
        if (err || !user) return res.status(500).json({ error: "User not found" });

        const notifications = [];
        let idCounter = 1;

        db.all("SELECT * FROM envelopes WHERE user_id = ?", [user.id], (err, envelopes) => {
            if (!err) {
                envelopes.forEach(env => {
                    if (env.spent > env.budget) {
                        notifications.push({ id: idCounter++, type: 'warning', message: `${env.name} envelope is -$${(env.spent - env.budget).toFixed(2)} over budget.` });
                    }
                });
            }

            db.all("SELECT * FROM transactions WHERE user_id = ? AND is_recurring = 1 ORDER BY id ASC", [user.id], (err, transactions) => {
                if (!err && transactions.length > 0) {
                    const t = transactions[0];
                    notifications.push({ id: idCounter++, type: 'alert', message: `${t.merchant} price increased by $2.00!` });
                }
                res.json({ notifications });
            });
        });
    });
});

// Delete Account Data
app.delete('/api/user', (req, res) => {
    db.serialize(() => {
        db.run("DELETE FROM users");
        db.run("DELETE FROM envelopes");
        db.run("DELETE FROM transactions");
        res.json({ message: "All user data deleted successfully." });
    });
});

// Add Envelope Data
app.post('/api/envelopes', (req, res) => {
    const { name, budget } = req.body;
    db.get("SELECT * FROM users LIMIT 1", (err, user) => {
        if (err || !user) return res.status(500).json({ error: "User not found" });
        db.run("INSERT INTO envelopes (user_id, name, budget, spent) VALUES (?, ?, ?, 0)", [user.id, name, budget], function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID, user_id: user.id, name, budget, spent: 0 });
        });
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
